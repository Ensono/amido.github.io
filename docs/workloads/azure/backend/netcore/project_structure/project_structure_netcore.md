---
id: project_structure_netcore
title: Project Structure
sidebar_label: Project Structure
---
## Projects in the solution

```text
Solution 'xxAMIDOxx.xxSTACKSss.API'
├── API
│      ├── xxAMIDOxx.xxSTACKSxx.API
│      ├── xxAMIDOxx.xxSTACKSxx.API.Models
│      └── xxAMIDOxx.xxSTACKSxx.API.ContractTests
├── Application
│      ├── xxAMIDOxx.xxSTACKSxx.Application.CommandHandlers
│      ├── xxAMIDOxx.xxSTACKSxx.Application.Integration
│      ├── xxAMIDOxx.xxSTACKSxx.Application.QueryHandlers
├── Domain
│      ├── xxAMIDOxx.xxSTACKSxx.Domain
│      └── External
├── Shared
│      ├── xxAMIDOxx.xxSTACKSxx.Common
│      └── xxAMIDOxx.xxSTACKSxx.CQRS
└── Tests
       ├── xxAMIDOxx.xxSTACKSxx.API.ComponentTests
       ├── xxAMIDOxx.xxSTACKSxx.Common.UnitTests
       ├── xxAMIDOxx.xxSTACKSxx.Domain.UnitTests
       └── xxAMIDOxx.xxSTACKSxx.Infrastructure.IntegrationTests
```


## API

The API scope contains the components that are exposed publicly, like the APIs and its models.

It also contains infrastructure components that is responsible to arrange all dependencies within the solution.

If the API wasn't self-hosted, we could also add the WebHost to this scope to manage the hosting concerns of the API.



### Company.Project.API

The **API** project containing the controllers and swagger documentation. The purpose of the API project is expose the application via a set of REST\HTTP endpoints. The API will validate requests either by built-in validators using DataAnnotations attributes or using FluentValidation(not included in the template).

The API is a self hosted service using dotnet core kestrel and does not require any external web server. The hosting logic is handled by the Program.cs class.

The API depends on ICommandHandler and IQueryHandler abstractions and does not contain a direct reference to the command-handlers and query-handler projects to reduce coupling. The bridge between the interface abstraction and implementations will be provided by the infrastructure that maps the interfaces and implementations of many components, like the queries and commands handlers, repositories, caches and so on.

Having the constructor depending on abstractions also makes the API flexible for Contract Testing, where we would mock the interfaces and don't require a dependency to the Application.



### Company.Project.Models

The **Models** exposed by the API have been pulled out of the API project to make them reusable. The models have it's own validation using DataAnnotations, by using it, we can have a validation in the models without dependency on third party libraries like FluentValidation, that should be implemented only if needed.

- QA have demonstrated interest in reuse of Models to avoid duplication of code in API.Models and TestModels. The separate models project will make it easier to expose the models as NuGet packages for reuse by QA Functional Tests

- A Client SDK can be create in the future to communicate with the API, having a reusable Model, makes it easy to write the SDK without rewriting them every time the API changes



### Company.Project.Infrastructure

The infrastructure project is a cross cutting project responsible to tie the dependencies within the API and application, in general, the API talks to an Interface that abstracts away the need to have an implementation available at API design time, it need to know only the Commands, Queries available for each operation. The command and query handlers are implemented in their own projects and the API does not have a direct dependency on it. The infrastructure will be responsible to bridge the commands to handlers making the API decoupled from the implementation.

The same happens for other components, CommandHandlers does not have a direct dependency in the Repository implementation, they just expect an implementation to be injected at runtime, the real implementation will be managed by the Infrastructure in real environments or managed by test fixtures using Mocks or Stubs during test contexts.

In simple terms, the Infrastructure setup the IoC container with all dependencies needed to run the application.



## Application

The application scope contains the projects that will handle most of the application behavior and technical requirements but not the actual business logic of it, it will bridge the public API and the domain logic.

They are managed into separate projects to make Commands decoupled from the Queries, in a more advanced scenario, queries and commands could be handled within their own services, each service handling their own dependencies and the API would make HTTP or gRPC calls to these respective services.

In this solution, we have a single API handling commands and queries, And separate applications for handlers, this approach makes flexible to either:

Merge commands and query handler projects into a single 'Company.Project.Application' project for simplicity (Integration should still be independent) and host within the API. (current usage)
Host commands separate from queries on their respective services and forward the calls from the APIs.



## Company.Project.Application.CommandHandlers

The **CommandHandlers** contains implementations of ICommandHandler interface. Each handler expect it's own command type and handles it's own logic.

Command Handlers orchestrate the dependencies of a commands before it is applied to a Domain object, a few common features of a handler are:

Ask the repository for the data used in the domain object, so that an operation(command) can be applied to it

Act in the domain and send the data to be handled.

Ensure the domain changes are persisted to DB by sending the domain object back to the repository to be saved

Publish related application events(not domain events) to the event hub (i.e: Kafka or Service Bus Topic)

Call external dependencies if needed, like dependent services using a gateway.

Handle non-business logic, like:

Ensure an object exists before executing the operations

Ensure an operation are valid against a domain object(i.e: security check)

Load configuration

Command handlers should not handle business logic. i.e:

If an operation can only be executed if the domain is in a specific state or has a determined value, the condition checks should be evaluated within the domain.

If the business rules condition requires data from source outside the domain, i.e database, services, etc, then a domain service should be created to handle the logic like load the rules from a gateway and execute the check before the entity is changed.



### Company.Project.Application.QueryHandlers

The **QueryHandlers** contains the implementations of IQueryHandler interface. Each IQueryHandler expect a QueryCriteria and return a QueryModel as the query result.

Similar to CommandHandlers, the QueryHandlers are responsible to orchestrate the dependencies of a query, on some cases, a query might span multiple components or external services, the query handlers provides:

Handle or delegate the mapping from domain data to query models

Call repository(storage) or search provider to gather the data

Ensure the user has permission to execute the operation



### Company.Project.Application.Integration

The **Integration** project contains contracts(Interfaces) that must be **implemented by other assemblies** to provide capabilities to the application, contracts like IMenuRepository should be created in this project and implemented in the Infrastructure project. This approach will prevent a chain of unnecessary dependencies between projects and most specifically the Application. For example:

CommandHandler depends on IMenuRepository, the implementation of IRepository is done in the Infrastructure

QueryHandlers can also have a dependency on IMenuRepository, that will use the same implementation from Infrastructure, if it were created in either of them, one would have a dependency to the other.

If either CommandHandlers or QueryHandlers have a dependency on external services, we could implement a gateway, this gateway would be an interface with the operations we need and the **implementation must be done outside of the integration project** to avoid direct dependencies to packages not required by the application. The gateways could either be implemented in the Infrastructure for services we have total control, similar to what we do for repository implementations, but for **external dependencies it should be implemented by an ACL (Anti Corruption Layer)**. The ACL approach is the best scenario, given it leaves each dependency on their respective projects and reduce the dependencies within the scope of the application and infrastructure. (See ACL for more details)



## Domain

The Domain scope is where the business logic lives in, when a feature is implemented, the business conditions that drives the feature are placed within the domain boundary. In BDD, the domain boundary is called Bounded context. It is the term used to group a set of features that are correlated to accomplish a set of operations that should live together.

In a micro services solution, each service will likely map to a single bounded context. In an e-commerce solution, we could describe bounded contexts like Catalog, Checkout, Stock, and so on.



### Company.Project.Domain

The domain project will hold the components that maps to a business domain and their respective dependencies.

In an e-Commerce solution, we would have bounded context, let's say Catalog, and the catalog can have Products, Prices, Categories and so on. These could be defined in the domain as AggregateRoot, Entities or ValueObjects, all these definitions should be created in the domain project according to the Design decisions.



## External

The external scope contains projects that provides features provided by external dependencies, like other services or third party solutions.

### ACL(Anti Corruption Layer)

TODO: Implement an ACL project to demonstrate the use of ACL



## Shared

Share scope are projects that contains items reused across multiple projects, items like Exceptions, ExceptionsIds, OperationIds, Commands, Queries, and so on.

### Company.Project.Common

Common items are items that can and should be reused by multiple projects to avoid code duplication and reduce complexity by avoiding mappings and conversions. Exceptions and Operations are some of the common items that can be available to all projects.

Exceptions in the application should be a shared concern and every layer should understand it properly, having one exception that sis know by all layers will reduce the complexity of mapping these exceptions and adding unnecessary try/catch blocks to raise new exceptions when needed an exception is propagated.

Operations similar to exceptions, should have unique ids that are common to all layers, an API receive a model that will map to a command, this command should have it's own id to be easy to diagnostics failures between the layers.



### Company.Project.CQRS

CQRS contains POCO classes used between API and Application layer to pass commands and queries between each other.

The Commands and Queries are separate from the handlers to reduce the coupling between API and Application.

Like the decoupling from API, it also contains the Application Events raised within the application to be consumed by other components or services.

CQRS should not contain any logic and is used just to provide classes that are consumed outside the application boundary.

Tests
The tests scope contains all tests that covers the application code via white box method, that means, tests that are run from inside out with access to the code and testing the behavior of the code.

Each set of tests will have a level of coverage and different level of details.

### Company.Project.API.ComponentTests

The **ComponentTests** covers the overall service from edge to edge without external dependencies. It starts at the API endpoints and finishes before the last service layer makes a call to a external dependency.

Resources like Repositories and gateway are mocked to provide dummy or fake the behavior expected by the application(or not) in order to test multiple usage scenarios of the application.

API are(should be) also covered by Contract Tests, we might see the coverage of APIs by Component Tests as redundant tests. Component tests could skip the coverage of the API and cover from the application (commands and queries) layer to the service boundary(repositories and gateways), but this approach would require us to create an extra test assert the integration between API and Application works as expected, giving us on extra test to maintain.

Component tests are similar to functional tests, both are testing features of the system with one caveat, Functional Tests asserts a functionality by providing an Input and expecting an output according to the input provided, it does not(should not) care how the output is generated, ComponentT test on the other hand assert that an input returns an expected output and also ensure a set of expectations are met. i.e: Events are raised by the application, calls to external services are handled accordingly data are formatted correctly when passed to external components.

Component Tests can also be referred as Module Tests, Assembly Tests, Service Tests.

For component tests details please refer to Test Definitions

### Company.Project.Common.UnitTests

Unit tests for x.y.Common project. For unit tests details please refer to Test Definitions

### Company.Project.Domain.UnitTests

Unit tests for x.y.Domain project. For unit tests details please refer to Test Definitions

### Company.Project.Infrastructure.IntegrationTests

Integration tests is a level of test focused on testing the interaction of two or more components and identify if their work well together, even though you might have already Unit Test coverage of each component individually.

Integration tests are needed because in many cases the component can work properly when running independently but fail when interacting to each components. In a unit test they work properly because we mock the dependencies with assumptions that might not be true, and could be only be identified at runtime.

In this solution we already do integration tests between internal components either via Component Tests, where it tests the integration between API→ Application → Domain, or via Functional Tests, testing the system as a black box, and each interaction with the API will also assert the integration between API→ Application → Domain → Repository → Database.

The limitation of component tests is that bugs outside the scope of test are not identified until the application is deployed to a valid environment and tested with functional tests.

The limitation of functional tests is that it is time consuming to create and maintain. Also, functional tests are slow because it requires a deployment of the application to be evaluated.

Integration tests bridges the gap between Component Tests and Functional Tests by covering just the integration boundaries not tested by the component tests.

The Integration Tests implemented in the scope of this solution does not focus on testing configuration(i.e: test if a deployed service can talk to a database), the focus of this test is to test the implementation behavior between the edge components and their respective dependencies, like repositories and gateways, examples of tests we want do with integration testes are:

Check if the data we pass to a database is keeps the format when saved and retrieved. i.e: decimal places, text encoding, valid length,

Check if a request to a external service is valid by providing the right data, http headers liek authentication header, url path, and so one.

Check if a value is cached correctly when retrieved from an external storage.

### Company.Project.API.ContractTests

Contract tests cover testing of the API contracts between the provider of an API service and the consumer of the API service. Documentation for contract testing can be found within the following documentation:

Testing Scope [Ready For Review]

Consumer-Driven Contract Testing

What Is: Consumer Driven Contract Testing [Draft]

## Dependencies

Amido Stacks Packages

**TODO**: List shared packages in the project and their role

Nuget Packages

**TODO**: List main NuGet packages used in the project and their role

## Things to Avoid

Dependencies

```text
opt for Adapter or Facade instead of Services
```
