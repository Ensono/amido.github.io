---
id: java_swagger_annotations
title: Reducing Swagger Annotation Overload 
sidebar_label: Reducing Swagger Annotation Overload
description: Reducing Swagger Annotation Overload
keywords:
- development
- java
- backend
- server-side
- in progress
---

import HideNavigation  from "../../../../src/pages/HideNavigation";

## Context

The API documentation is an essential part of building REST APIs to make the services available to all audience. 
This documentation should help consumers of the service know which all services are available and its fine details. 
Also, there should be some simple way to test if the service is up. 

SpringDoc simplifies the generation and maintenance of API docs based on the OpenAPI 3 specification for the spring boot applications. 
The exposed services are bound to change and the documentation needs to be updated as the services change. 
If this is done manually, then it will become a complex process, and it will be prone to error, especially as the number of REST services increase. 
This is where swagger helps to automate this documentation process.

## Solution 

The proliferation of Swagger annotation's means that there is a lot of duplication, and it makes it difficult to properly 
compose the controller operations into a single class. To avoid this, we have opted to make use of Java annotation(s) 
to remove duplicated Swagger annotations from controller methods.

## Implementation Examples

We have defined custom java annotations per CRUD operation to be used by the controller classes. This will promote re-usability of the 
swagger annotations rather than duplicating the code across multiple controller classes.

**Example of java custom annotation:**

In the below example, we are creating ReadAPIResponses annotation.

```java
@Target({ElementType.METHOD, ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@ApiResponses({@ApiResponse(
  responseCode = "404",
  description = "Resource not found",
  content = {@Content(
  mediaType = "application/json",
  schema = @Schema(
  implementation = ErrorResponse.class
)
)}
), @ApiResponse(
  responseCode = "400",
  description = "Bad Request",
  content = {@Content(
  mediaType = "application/json",
  schema = @Schema(
  implementation = ErrorResponse.class
)
)}
)})
@SecurityRequirement(
  name = "bearerAuth"
)
public @interface ReadAPIResponses {
}



```

**Using the custom Annotation @ReadAPIResponses:**

In the below code example, java custom annotation @ReadAPIResponses has been used.

```java
public interface QueryMenuController {

  @GetMapping(value = "/{id}")
  @Operation(
      tags = "Menu",
      summary = "Get a menu",
      description =
          "By passing the menu id, you can get access to available categories and items in the menu")
  @ReadAPIResponses
  ResponseEntity<MenuDTO> getMenu(
      @PathVariable(name = "id") UUID id,
      @Parameter(hidden = true) @RequestAttribute("CorrelationId") String correlationId);
}

```

**Overriding the custom annotations:**

We can override the custom annotation entries by placing swagger annotation before the custom annotation.
In the below example, @ApiResponse entry will override the 200 response code in @ReadAPIResponses custom annotation.
We just have to make that the annotations are placed in the right order when we specifically want to override anything in 
the custom annotation.

```java
public interface QueryMenuController {

  @GetMapping(value = "/{id}")
  @Operation(
      tags = "Menu",
      summary = "Get a menu",
      description =
          "By passing the menu id, you can get access to available categories and items in the menu")
  @ApiResponse(
      responseCode = "200",
      description = "Menu",
      content =
      @Content(
          mediaType = MediaType.APPLICATION_JSON_VALUE,
          schema = @Schema(implementation = MenuDTO.class)))
  @ReadAPIResponses
  ResponseEntity<MenuDTO> getMenu(
      @PathVariable(name = "id") UUID id,
      @Parameter(hidden = true) @RequestAttribute("CorrelationId") String correlationId);
}

```


<HideNavigation prev />
