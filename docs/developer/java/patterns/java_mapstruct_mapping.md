---
id: java_mapstruct_mapping
title: Reducing Bean Mapping Boilerplate
sidebar_label: Reducing Bean Mapping Boilerplate
description: Reducing Bean Mapping Boilerplate
keywords:
- development
- java
- backend
- server-side
---

import HideNavigation  from "../../../../src/components/HideNavigation/HideNavigation";

## Context

Good programming techniques tell us that we should be following a principle of separation of concerns. This means that as 
developers we often have to shuffle data from one object to another.

A common example of this is where we have a Data Transfer Object (DTO) passed as a parameter in a REST API call, and we need to 
copy the data from object-graph to another, for example into a Domain Object for it to be subsequently persisted. The same 
is required in reverse, when we read an object from the data store we need to convert that object into a DTO that is then
passed back to the caller. 

This becomes more complex when we have not only single instances of an object, but we have a collection
of them.

To be clear, it is bad practice to use the same object (i.e., `Class<?>`) in your code for both of the internal operations 
(managing the domain) and external operations (receiving or passing data to/from a caller) as it makes future change more complex.

The vanilla Java way to approach this is through overloaded constructors or the use of the builder pattern - both of which 
can become unwieldy as the number of the properties on the class increases. It also means that specific methods need to be
manually written to support single objects or lists/collections of objects.

## Solution

The [Mapstruct](https://mapstruct.org/) open-source project is a code generator that greatly simplifies the implementation of mappings 
between Java bean types based on a convention over configuration approach. 

The generated mapping code uses plain method invocations and thus is fast, type-safe and easy to understand (this is important, 
as other mappers that use runtime reflection are "black boxes" that need to be executed in order to be debugged). 

In addition, there is full support for Spring auto-wiring and Unit Testing.

MapStruct is an "annotation processor" so please make sure this is switched on for your project. Base on your setup, it may also be 
necessary to `mvn compile` after creating any new mappers. 

## Implementation Examples

MapStruct is capable of working in many ways, although the approach taken in the Ensono Stacks project is to follow the pattern 
whereby it uses interfaces to define mapper objects. With the addition of some mapper utility functions it means that a 
bean-mapper that supports single objects and collections (in addition to other features such as UUID ←→ String auto-conversion)
can be created very easily.

### Base Mapper Code

The following generic base mapper interface (this is as show at time of writing for example purposes, refer to GitHub for the latest)
is used to define a standard set of mapping functions and lives in the Ensono Stacks `core-commons` module.

The generic template placeholder `D` is for the DTO (external) representation and `E` is for the Entity (internal) representation. As
can be seen, this will provide a number of "out of the box" methods such as `toDto()`, `fromDto()`, `toDtoList()` etc.

```java
public interface BaseMapper<D, E> {
  D toDto(E entity);

  E fromDto(D dto);

  void updateFromDto(D dto, @MappingTarget E entity);

  void updateFromEntity(E entity, @MappingTarget D dto);

  List<D> toDtoList(List<E> list);

  List<E> fromDtoList(List<D> list);
}
```

In addition to this, some mapping utility functions are included. Some Ensono Stacks modules use a UUID as the external representation
of an ID whereas internally it uses a String (for persistence).

The mapping utility class is currently structured as follows. This has simple functions that MapStruct will use whenever
it needs to convert between these data types.

```java
public class MapperUtils {

  private MapperUtils() {
    // Utility class
  }

  public static UUID map(String value) {
    return (value != null && !value.trim().isEmpty()) ? fromString(value) : null;
  }

  public static String map(UUID uuid) {
    return uuid != null ? uuid.toString() : null;
  }
}
```

### Project Mapper Code

#### Example 1

Whenever a higher-level module (such as project code) requires a mapper between beans (or object-graphs) the implementation is a simple interface 
that extends the base mapper and imports (or uses) the mapping utility class shown above.

A simple mapper is as follows. This mapper maps between `MenuDTO` and a `Menu` domain object.

It can be seen that it also "uses" another mapper (so that an entire object hierarchy) can be converted in one go, and also
uses the `MapperUtils` class that supports the conversion from UUID to String data types.

```java
@Mapper(
    componentModel = "spring",
    uses = {MapperUtils.class, CategoryMapper.class},
    nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface MenuMapper extends BaseMapper<MenuDTO, Menu> {}
```

#### Example 2

A more complex mapper is shown below. This mapper maps between a top-level Ensono Stacks `CreateMenuRequest` DTO and related domain object 
called `CreateMenuCommand`. The name of fields differs between these two objects, so it is necessary in this instance to 
overload the `toDto()` and `fromDto()` methods to tell MapStruct how to map between the fields.

```java
@Mapper(
    componentModel = "spring",
    uses = {},
    nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface CreateMenuMapper extends BaseMapper<CreateMenuRequest, CreateMenuCommand> {

  @Override
  @Mapping(source = "restaurantId", target = "tenantId")
  CreateMenuRequest toDto(CreateMenuCommand command);

  @Override
  @Mapping(source = "tenantId", target = "restaurantId")
  CreateMenuCommand fromDto(CreateMenuRequest request);
}
```

### Unit Test Code

As previously mentioned, MapStruct has full support for Spring Boot testing frameworks such as JUnit.

To use any mappers that have been created structure your tests as follows:

```java
@Tag("Unit")
@SpringBootTest(
    classes = {
      MenuMapper.class,
      MenuMapperImpl.class,
      ...
    })
class DomainToDtoMapperMapstructTest {

  @Autowired private MenuMapper menuMapper;

  ...
  
   @Test
  void menuToMenuDto() {

    // Given
    UUID id = randomUUID();
    UUID restaurantId = randomUUID();
    ...

    Menu menu =
        new Menu(
            id.toString(),
            restaurantId.toString(),
            ...);

    // When
    MenuDTO menuDTO = menuMapper.toDto(menu);

    // Then
    assertThat(menuDTO.getId()).isEqualTo(id);
    assertThat(menuDTO.getRestaurantId()).isEqualTo(restaurantId);
    ...
  }
}
```
