"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[30],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1619:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.next,n=e.prev;return a.useEffect((function(){if(t){var e=document.querySelector("div.pagination-nav__item.pagination-nav__item--next>a");e&&e.style&&(e.style.display="none")}if(n){var a=document.querySelector("div.pagination-nav__item>a");a&&a.style&&(a.style.display="none")}})),a.createElement("div",null)}},3771:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=(n(1619),["components"]),p={id:"java_mapstruct_mapping",title:"Reducing Bean Mapping Boilerplate",sidebar_label:"Reducing Bean Mapping Boilerplate",description:"Reducing Bean Mapping Boilerplate",keywords:["development","java","backend","server-side"]},s=void 0,l={unversionedId:"developer/java/patterns/java_mapstruct_mapping",id:"developer/java/patterns/java_mapstruct_mapping",title:"Reducing Bean Mapping Boilerplate",description:"Reducing Bean Mapping Boilerplate",source:"@site/docs/developer/java/patterns/java_mapstruct_mapping.md",sourceDirName:"developer/java/patterns",slug:"/developer/java/patterns/java_mapstruct_mapping",permalink:"/docs/developer/java/patterns/java_mapstruct_mapping",draft:!1,tags:[],version:"current",frontMatter:{id:"java_mapstruct_mapping",title:"Reducing Bean Mapping Boilerplate",sidebar_label:"Reducing Bean Mapping Boilerplate",description:"Reducing Bean Mapping Boilerplate",keywords:["development","java","backend","server-side"]},sidebar:"docs",previous:{title:"Separation of Concerns",permalink:"/docs/developer/java/patterns/java_app_layering"},next:{title:"Reducing Swagger Annotation Overload",permalink:"/docs/developer/java/patterns/java_swagger_annotations"}},u={},c=[{value:"Context",id:"context",level:2},{value:"Solution",id:"solution",level:2},{value:"Implementation Examples",id:"implementation-examples",level:2},{value:"Base Mapper Code",id:"base-mapper-code",level:3},{value:"Project Mapper Code",id:"project-mapper-code",level:3},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Unit Test Code",id:"unit-test-code",level:3}],d={toc:c},m="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"context"},"Context"),(0,o.kt)("p",null,"Good programming techniques tell us that we should be following a principle of separation of concerns. This means that as\ndevelopers we often have to shuffle data from one object to another."),(0,o.kt)("p",null,"A common example of this is where we have a Data Transfer Object (DTO) passed as a parameter in a REST API call, and we need to\ncopy the data from object-graph to another, for example into a Domain Object for it to be subsequently persisted. The same\nis required in reverse, when we read an object from the data store we need to convert that object into a DTO that is then\npassed back to the caller. "),(0,o.kt)("p",null,"This becomes more complex when we have not only single instances of an object, but we have a collection\nof them."),(0,o.kt)("p",null,"To be clear, it is bad practice to use the same object (i.e., ",(0,o.kt)("inlineCode",{parentName:"p"},"Class<?>"),") in your code for both of the internal operations\n(managing the domain) and external operations (receiving or passing data to/from a caller) as it makes future change more complex."),(0,o.kt)("p",null,"The vanilla Java way to approach this is through overloaded constructors or the use of the builder pattern - both of which\ncan become unwieldy as the number of the properties on the class increases. It also means that specific methods need to be\nmanually written to support single objects or lists/collections of objects."),(0,o.kt)("h2",{id:"solution"},"Solution"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://mapstruct.org/"},"Mapstruct")," open-source project is a code generator that greatly simplifies the implementation of mappings\nbetween Java bean types based on a convention over configuration approach. "),(0,o.kt)("p",null,'The generated mapping code uses plain method invocations and thus is fast, type-safe and easy to understand (this is important,\nas other mappers that use runtime reflection are "black boxes" that need to be executed in order to be debugged). '),(0,o.kt)("p",null,"In addition, there is full support for Spring auto-wiring and Unit Testing."),(0,o.kt)("p",null,'MapStruct is an "annotation processor" so please make sure this is switched on for your project. Base on your setup, it may also be\nnecessary to ',(0,o.kt)("inlineCode",{parentName:"p"},"mvn compile")," after creating any new mappers. "),(0,o.kt)("h2",{id:"implementation-examples"},"Implementation Examples"),(0,o.kt)("p",null,"MapStruct is capable of working in many ways, although the approach taken in the Stacks project is to follow the pattern\nwhereby it uses interfaces to define mapper objects. With the addition of some mapper utility functions it means that a\nbean-mapper that supports single objects and collections (in addition to other features such as UUID<->String auto-conversion)\ncan be created very easily."),(0,o.kt)("h3",{id:"base-mapper-code"},"Base Mapper Code"),(0,o.kt)("p",null,"The following generic base mapper interface (this is as show at time of writing for example purposes, refer to GitHub for the latest)\nis used to define a standard set of mapping functions and lives in the Stacks ",(0,o.kt)("inlineCode",{parentName:"p"},"core-commons")," module."),(0,o.kt)("p",null,"The generic template placeholder ",(0,o.kt)("inlineCode",{parentName:"p"},"D")," is for the DTO (external) representation and ",(0,o.kt)("inlineCode",{parentName:"p"},"E"),' is for the Entity (internal) representation. As\ncan be seen, this will provide a number of "out of the box" methods such as ',(0,o.kt)("inlineCode",{parentName:"p"},"toDto()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"fromDto()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"toDtoList()")," etc."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public interface BaseMapper<D, E> {\n  D toDto(E entity);\n\n  E fromDto(D dto);\n\n  void updateFromDto(D dto, @MappingTarget E entity);\n\n  void updateFromEntity(E entity, @MappingTarget D dto);\n\n  List<D> toDtoList(List<E> list);\n\n  List<E> fromDtoList(List<D> list);\n}\n")),(0,o.kt)("p",null,"In addition to this, some mapping utility functions are included. Some Stacks modules use a UUID as the external representation\nof an ID whereas internally it uses a String (for persistence)."),(0,o.kt)("p",null,"The mapping utility class is currently structured as follows. This has simple functions that MapStruct will use whenever\nit needs to convert between these data types."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class MapperUtils {\n\n  private MapperUtils() {\n    // Utility class\n  }\n\n  public static UUID map(String value) {\n    return (value != null && !value.trim().isEmpty()) ? fromString(value) : null;\n  }\n\n  public static String map(UUID uuid) {\n    return uuid != null ? uuid.toString() : null;\n  }\n}\n")),(0,o.kt)("h3",{id:"project-mapper-code"},"Project Mapper Code"),(0,o.kt)("h4",{id:"example-1"},"Example 1"),(0,o.kt)("p",null,"Whenever a higher-level module (such as project code) requires a mapper between beans (or object-graphs) the implementation is a simple interface\nthat extends the base mapper and imports (or uses) the mapping utility class shown above."),(0,o.kt)("p",null,"A simple mapper is as follows. This mapper maps between ",(0,o.kt)("inlineCode",{parentName:"p"},"MenuDTO")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"Menu")," domain object."),(0,o.kt)("p",null,'It can be seen that it also "uses" another mapper (so that an entire object hierarchy) can be converted in one go, and also\nuses the ',(0,o.kt)("inlineCode",{parentName:"p"},"MapperUtils")," class that supports the conversion from UUID to String data types."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Mapper(\n    componentModel = "spring",\n    uses = {MapperUtils.class, CategoryMapper.class},\n    nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)\npublic interface MenuMapper extends BaseMapper<MenuDTO, Menu> {}\n')),(0,o.kt)("h4",{id:"example-2"},"Example 2"),(0,o.kt)("p",null,"A more complex mapper is shown below. This mapper maps between a top-level Stacks ",(0,o.kt)("inlineCode",{parentName:"p"},"CreateMenuRequest")," DTO and related domain object\ncalled ",(0,o.kt)("inlineCode",{parentName:"p"},"CreateMenuCommand"),". The name of fields differs between these two objects, so it is necessary in this instance to\noverload the ",(0,o.kt)("inlineCode",{parentName:"p"},"toDto()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"fromDto()")," methods to tell MapStruct how to map between the fields."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Mapper(\n    componentModel = "spring",\n    uses = {},\n    nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)\npublic interface CreateMenuMapper extends BaseMapper<CreateMenuRequest, CreateMenuCommand> {\n\n  @Override\n  @Mapping(source = "restaurantId", target = "tenantId")\n  CreateMenuRequest toDto(CreateMenuCommand command);\n\n  @Override\n  @Mapping(source = "tenantId", target = "restaurantId")\n  CreateMenuCommand fromDto(CreateMenuRequest request);\n}\n')),(0,o.kt)("h3",{id:"unit-test-code"},"Unit Test Code"),(0,o.kt)("p",null,"As previously mentioned, MapStruct has full support for Spring Boot testing frameworks such as JUnit."),(0,o.kt)("p",null,"To use any mappers that have been created structure your tests as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Tag("Unit")\n@SpringBootTest(\n    classes = {\n      MenuMapper.class,\n      MenuMapperImpl.class,\n      ...\n    })\nclass DomainToDtoMapperMapstructTest {\n\n  @Autowired private MenuMapper menuMapper;\n\n  ...\n  \n   @Test\n  void menuToMenuDto() {\n\n    // Given\n    UUID id = randomUUID();\n    UUID restaurantId = randomUUID();\n    ...\n\n    Menu menu =\n        new Menu(\n            id.toString(),\n            restaurantId.toString(),\n            ...);\n\n    // When\n    MenuDTO menuDTO = menuMapper.toDto(menu);\n\n    // Then\n    assertThat(menuDTO.getId()).isEqualTo(id);\n    assertThat(menuDTO.getRestaurantId()).isEqualTo(restaurantId);\n    ...\n  }\n}\n')))}h.isMDXComponent=!0}}]);