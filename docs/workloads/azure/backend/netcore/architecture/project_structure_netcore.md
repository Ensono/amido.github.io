---
id: project_structure_netcore
title: Solution Structure
sidebar_label: Solution Structure
hide_title: true
hide_table_of_contents: true
description: .NET Core REST API application - Solution Structure
keywords:
  - .net core
  - rest api
  - cqrs
  - example
  - template
  - repository
  - structure
---

## Solution Structure


### Simple Web API

```text
Solution 'xxENSONOxx.xxSTACKSss.API'
├── API
│  ├── xxENSONOxx.xxSTACKSxx.API
│  ├── xxENSONOxx.xxSTACKSxx.API.Models
└── Tests
   ├── xxENSONOxx.xxSTACKSxx.API.UnitTests
```


### Web API with CQRS

```text
Solution 'xxENSONOxx.xxSTACKSss.API'
├── API
│  ├── xxENSONOxx.xxSTACKSxx.API
│  ├── xxENSONOxx.xxSTACKSxx.API.Models
├── Application
│  ├── xxENSONOxx.xxSTACKSxx.Application.CommandHandlers
│  ├── xxENSONOxx.xxSTACKSxx.Application.Integration
│  ├── xxENSONOxx.xxSTACKSxx.Application.QueryHandlers
├── Domain
│  ├── xxENSONOxx.xxSTACKSxx.Domain
│  └── External
├── Shared
│  ├── xxENSONOxx.xxSTACKSxx.Common
│  └── xxENSONOxx.xxSTACKSxx.CQRS
└── Tests
   ├── xxENSONOxx.xxSTACKSxx.API.ComponentTests
   ├── xxENSONOxx.xxSTACKSxx.Common.UnitTests
   ├── xxENSONOxx.xxSTACKSxx.Domain.UnitTests
   └── xxENSONOxx.xxSTACKSxx.Infrastructure.IntegrationTests
```

### Functions and Worker Services

```text
├── Functions
│  ├── function-aeh-listener
│  │   ├── xxENSONOxx.xxSTACKSxx.Listener
│  │   └── xxENSONOxx.xxSTACKSxx.Listener.UnitTests
│  ├── function-asb-listener
│  │   ├── xxENSONOxx.xxSTACKSxx.Listener
│  │   └── xxENSONOxx.xxSTACKSxx.Listener.UnitTests
│  ├── function-cosmosdb-worker
│  │   ├── xxENSONOxx.xxSTACKSxx.Worker
│  │   └── xxENSONOxx.xxSTACKSxx.Worker.UnitTests
├── Worker
│  └── xxENSONOxx.xxSTACKSxx.BackgroundWorker
```


import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
    defaultValue="api"
    values={[
    {label: 'API', value: 'api'},
    {label: 'Application', value: 'application'},
    {label: 'Domain', value: 'domain'},
    {label: 'Shared', value: 'shared'},
    {label: 'Tests', value: 'tests'},
    {label: 'Functions and Worker Services', value: 'functions-worker'}
    ]}>
    <TabItem value="api">
        <p>
            The API scope contains the components which are exposed publicly, such as the APIs and it's Models.
            It contains infrastructure components  responsible to arrange all dependencies within the solution.
            If the API wasn't self-hosted, the WebHost would have been added to this scope to manage the hosting concerns of the API.
        </p>
        <br />
        <h3>Company.Project.API</h3>
        <p>The <strong>API</strong> project containing the controllers and swagger documentation. The purpose of the API project
            is to expose the application via a set of REST\HTTP endpoints. The API will validate requests either by built-in
            validators using DataAnnotations attributes or using FluentValidation(not included in the template).</p>
        <p>The API is a self hosted service using .NET Core kestrel and does not require any external web server. The hosting
            logic is handled by the <code>Program.cs</code> class.</p>
        <p>The API depends on <code>ICommandHandler</code> and <code>IQueryHandler</code> abstractions and does not contain a direct reference to the
            command-handlers and query-handler projects to reduce coupling. The bridge between the interface abstraction and
            implementations will be provided by the infrastructure that maps the interfaces and implementations of many
            components, like the queries and commands handlers, repositories, caches and so on.</p>
        <p>Having the constructor depending on abstractions also makes the API flexible for Contract Testing, where the interfaces can me mocked
            and don't require a dependency to the Application.</p>
        <br />
        <h3>Company.Project.Models</h3>
        <p>The <strong>Models</strong> exposed by the API have been pulled out of the API project to make them reusable. The
            models have their own validation using <code>DataAnnotations</code>, therefore the validation id provided in the models without
            dependency on third party libraries like FluentValidation, which should be implemented only if needed.</p>
        <ul>
            <li>
                <p>
                    QA have demonstrated interest in reuse of Models to avoid duplication of code in <code>API.Models</code> and <code>TestModels</code>.
                    The separate models project will make it easier to expose the models as NuGet packages for reuse by QA Functional Tests.
                </p>
            </li>
            <li>
                <p>A Client SDK can be create in the future to communicate with the API, having a reusable Model, makes it easy
                    to write the SDK without rewriting them every time the API changes.</p>
            </li>
        </ul>
        <br />
        <h3>Company.Project.Infrastructure</h3>
        <p>The infrastructure project is a cross cutting project responsible to tie the dependencies within the API and
            application. In general, the API communicates to an Interface that abstracts away the need to have an implementation
            available at API design time. It needs to know only the Commands and Queries available for each operation. The command
            and query handlers are implemented in their own projects and the API does not have a direct dependency on it. The
            infrastructure will be responsible to bridge the commands to handlers making the API decoupled from the
            implementation.</p>
        <p>
            The same happens for other components, <code>CommandHandlers</code> do not have a direct dependency in the Repository
            implementation, they just expect an implementation to be injected at runtime, the real implementation will be
            managed by the Infrastructure in real environments or managed by test fixtures using Mocks or Stubs during test
            contexts.
        </p>
        <p>
            In simple terms, the Infrastructure setups the IoC container with all dependencies needed to run the application.
        </p>
    </TabItem>
    <TabItem value="application">
        <p>
            The application scope contains the projects that will handle most of the application behaviour and technical
            requirements but not the actual business logic of it. It will bridge the public API and the domain logic.
        </p>
        <p>
            They are managed into separate projects to make Commands decoupled from the Queries, in a more advanced scenario,
            queries and commands could be handled within their own services, each service handling their own dependencies and
            the API would make HTTP or gRPC calls to these respective services.
        </p>
        <p>
            In this solution, we have a single API handling commands and queries and separate applications for handlers. This
            approach makes flexible to either:
        </p>
        <ul>
            <li>
                Merge commands and query handlers project into a single <code>Company.Project.Application</code> project for simplicity
                (Integration should still be independent) and host within the API. (current usage)
            </li>
            <li>
                Host commands are separate from
                queries on their respective services and forward the calls from the APIs.
            </li>
        </ul>
        <br />
        <h3>Company.Project.Application.CommandHandlers</h3>
        <p>
            The <strong>CommandHandlers</strong> contain implementations of <code>ICommandHandler</code> interface. Each handler expect it's
            own command type and handles it's own logic.
        </p>
        <p>
            Command Handlers orchestrate the dependencies of a commands before it is applied to a Domain object. A few common
            features of a handler are:
        </p>
        <ul>
            <li>Ask the repository for the data used in the domain object, so that an operation(command) can be applied to it</li>
            <li>Act in the domain and send the data to be handled.</li>
            <li>Ensure the domain changes are persisted to DB by sending the domain object back to the repository to be saved</li>
            <li>Publish related application events(not domain events) to the event hub (i.e: Kafka or Service Bus Topic)</li>
            <li>Call external dependencies if needed, like dependent services using a gateway.</li>
            <li>Handle non business logic, like:</li>
            <ul>
                <li>Ensure an object exists before executing the operations</li>
                <li>Ensure an operation are valid against a domain object(i.e: security check)</li>
                <li>Load configuration</li>
            </ul>
            <li>
                <strong>Command handlers should not handle business logic</strong>. i.e:
            </li>
            <ul>
                <li>
                    If an operation can only be executed if the domain is in a specific state or has a determined value, the condition
                    checks should be evaluated within the domain.
                </li>
                <li>
                    If the business rules condition requires data from source outside the domain, i.e database, services, etc, then a
                    domain service should be created to handle the logic like load the rules from a gateway and execute the check before
                    the entity is changed.
                </li>
            </ul>
        </ul>
        <br />
        <h3>Company.Project.Application.QueryHandlers</h3>
        <p>
            The <strong>QueryHandlers</strong> contains the implementations of IQueryHandler interface. Each IQueryHandler expect
            a QueryCriteria and return a QueryModel as the query result.
        </p>
        <p>
            Similar to CommandHandlers, the QueryHandlers are responsible to orchestrate the dependencies of a query, on some
            cases, a query might span multiple components or external services, the query handlers provides:
        </p>
        <ul>
            <li>Handle or delegate the mapping from domain data to query models.</li>
            <li>Call repository(storage) or search provider to gather the data.</li>
            <li>Ensure the user has permission to execute the operation.</li>
        </ul>
        <br />
        <h3>Company.Project.Application.Integration</h3>
        <p>
            The <strong>Integration</strong> project contains contracts(Interfaces) that must be <strong>implemented by other
            assemblies</strong> to provide capabilities to the application. Contracts like <code>IMenuRepository</code> should be created
            in this project and implemented in the Infrastructure project. This approach will prevent a chain of unnecessary
            dependencies between projects and most specifically the Application. For example:
        </p>
        <p>
            CommandHandler depends on <code>IMenuRepository</code>, the implementation of IRepository is done in the Infrastructure.
        </p>
        <p>
            QueryHandlers can also have a dependency on <code>IMenuRepository</code>, that will use the same implementation from
            Infrastructure, if it were created in either of them, one would have a dependency to the other.
        </p>
        <p>
            If either CommandHandlers or QueryHandlers have a dependency on external services, a gateway could be implemented. The
            gateway would be an interface with the operations we need and the <strong>implementation must be done outside of the
            integration project</strong> to avoid direct dependencies to packages not required by the application. The
            gateways could either be implemented in the Infrastructure for services we have total control. Similar to what we do
            for repository implementations, but for <strong>external dependencies it should be implemented by an ACL (Anti
            Corruption Layer)</strong>. The ACL approach is the best scenario given it leaves each dependency on their
            respective projects and reduce the dependencies within the scope of the application and infrastructure. (See ACL for
            more details).
        </p>
    </TabItem>
    <TabItem value="domain">
        <p>
            The Domain scope is where the business logic lives in. When a feature is implemented, the business conditions which
            drive the feature are placed within the domain boundary. In BDD, the domain boundary is called Bounded context. It
            is the term used to group a set of features correlated to accomplish a set of operations which should live
            together.
        </p>
        <p>
            In a micro services solution, each service will likely map to a single bounded context. In an e-commerce solution,
            the bounded contexts could be described like Catalog, Checkout, Stock, and so on.
        </p>
        <br />
        <h3>Company.Project.Domain</h3>
        <p>
            The domain project contains the components which map to a business domain and their respective dependencies.
        </p>
        <p>
            In an e-Commerce solution with the bounded context Catalog, there will be Products,
            Prices, Categories and so on. These could be defined in the domain as AggregateRoot, Entities or ValueObjects. All
            these definitions should be created in the domain project according to the Design decisions.
        </p>
        <h3>External</h3>
        <p>
            The external scope contains projects that provides features provided by external dependencies, like other services or third party solutions.
        </p>
    </TabItem>
    <TabItem value="shared">
        <p>
            Share scope are projects that contains items reused across multiple projects, items like Exceptions, ExceptionsIds,
            OperationIds, Commands, Queries, and so on.
        </p>
        <h3>Company.Project.Common</h3>
        <p>
            Common items are items that can and should be reused by multiple projects to avoid code duplication and reduce
            complexity by avoiding mappings and conversions. Exceptions and Operations are some of the common items that can be
            available to all projects.
        </p>
        <p>
            Exceptions in the application should be a shared concern and every layer should understand it properly, having one
            exception that is known by all layers will reduce the complexity of mapping these exceptions and adding unnecessary
            try/catch blocks to raise new exceptions when needed an exception is propagated.
        </p>
        <p>
            Operations similar to exceptions, should have unique ids that are common to all layers. An API receive a model that
            will map to a command. The command should have it's own id to be easy to diagnostic failures between the layers.
        </p>
        <br />
        <h3>Company.Project.CQRS</h3>
        <p>
            CQRS contains POCO classes used between API and Application layer to pass commands and queries between each other.
        </p>
        <p>
            The Commands and Queries are separate from the handlers to reduce the coupling between API and Application.
        </p>
        <p>
            Like the decoupling from API, it also contains the Application Events raised within the application to be consumed by
            other components or services.
        </p>
        <p>
            CQRS should not contain any logic and is used just to provide classes that are consumed outside the application
            boundary.
        </p>
    </TabItem>
    <TabItem value="functions-worker">
        <h3>Company.Project.Listener (Azure Service Bus)</h3>
        <p>
            The function listener contains a Azure function that is triggered by a message in a Azure Service Bus topic.
        </p>
        <p>
            It uses a package to help with serialization and deserialization called Ensono.Stacks.Messaging.Azure.ServiceBus
        </p>
        <br />
        <h3>Company.Project.Listener.UnitTests</h3>
        <p>
            Tests the function execution.
        </p>
        <br />
       <h3>Company.Project.Listener (Azure Event Hubs)</h3>
        <p>
            The function listener contains a Azure function that is triggered by a message from Azure Event Hubs.
        </p>
        <p>
            It uses a package to help with serialization and deserialization called Ensono.Stacks.Messaging.Azure.EventHub.
        </p>
        <br />
        <h3>Company.Project.Listener.UnitTests</h3>
        <p>
            Tests the function execution.
        </p>
        <br />
        <h3>Company.Project.Worker</h3>
        <p>
            The function Worker contains a Azure function that is triggered by a change in CosmosDb.
        </p>
        <p>
            This change is read by the function, deserialized and an event is raised to Service Bus
        </p>
        <br />
        <h3>Company.Project.Worker.UnitTests</h3>
        <p>
            Tests the function execution.
        </p>
        <br />
        <p>
            Resources like Repositories and gateway are mocked to provide dummy or fake the behaviour expected by the
            application(or not) in order to test multiple usage scenarios of the application.
        </p>
        <br />
        <h3>Company.Project.BackgroundWorker</h3>
        <p>
            The Worker service is a service triggered by messages in a Azure Service Bus topic.
        </p>
        <p>
            It uses a package to help with serialization and deserialization called Ensono.Stacks.Messaging.Azure.ServiceBus
        </p>
    </TabItem>
    <TabItem value="tests">
        <p>
            The tests scope contains all tests that covers the application code via white box method. Tests
            that are run from inside out with access to the code and testing the behaviour of the code.
        </p>
        <p>
            Each set of tests will have a level of coverage and different level of details.
        </p>
        <br />
        <h3>Company.Project.API.ComponentTests</h3>
        <p>
            The <strong>ComponentTests</strong> covers the overall service from edge to edge without external
            dependencies. It starts at the API endpoints and finishes before the last service layer makes a call to a external
            dependency.
        </p>
        <p>
            Resources like Repositories and gateway are mocked to provide dummy or fake the behaviour expected by the
            application(or not) in order to test multiple usage scenarios of the application.
        </p>
        <p>
            API are(should be) also covered by Contract Tests, we might see the coverage of APIs by Component Tests as redundant
            tests. Component tests could skip the coverage of the API and cover from the application (commands and queries)
            layer to the service boundary(repositories and gateways), but this approach would require us to create an extra test
            assert the integration between API and Application works as expected, giving us on extra test to maintain.
        </p>
        <p>
            Component tests are similar to functional tests, both are testing features of the system with one caveat. Functional
            Tests asserts a functionality by providing an Input and expecting an output according to the input provided. It does
            not(should not) care how the output is generated. Component tests on the other hand assert that an input returns an
            expected output and also ensure a set of expectations are met. i.e: Events are raised by the application, calls to
            external services are handled accordingly; data is formatted correctly when passed to external components.
        </p>
        <p>
            Component Tests can also be referred as Module Tests, Assembly Tests, Service Tests.
        </p>
        <br />
        <h3>Company.Project.Common.UnitTests</h3>
        <p>
            Unit tests for x.y.Common project.
        </p>
        <br />
        <h3>Company.Project.Domain.UnitTests</h3>
        <p>
            Unit tests for x.y.Domain project. For unit tests details please refer to Test Definitions
        </p>
        <br />
        <h3>Company.Project.Infrastructure.IntegrationTests</h3>
        <p>
            Integration tests is a level of test focused on testing the interaction of two or more components and identify if
            their work well together, even though you might have already Unit Test coverage of each component individually.
        </p>
        <p>
            Integration tests are needed because in many cases the component can work properly when running independently but
            fail when interacting to each components. In a unit test they work properly because we mock the dependencies with
            assumptions that might not be true, and could be only be identified at runtime.
        </p>
        <p>
            In this solution we already do integration tests between internal components either via Component Tests, where it
            tests the integration between API&rarr; Application &rarr; Domain, or via Functional Tests, testing the system as a
            black box, and each interaction with the API will also assert the integration between API&rarr; Application &rarr;
            Domain &rarr; Repository &rarr; Database.
        </p>
        <p>
            The limitation of component tests is that bugs outside the scope of test are not identified until the application is
            deployed to a valid environment and tested with functional tests.
        </p>
        <p>
            The limitation of functional tests is that it is time consuming to create and maintain. Also, functional tests are
            slow because it requires a deployment of the application to be evaluated.
        </p>
        <p>
            Integration tests bridges the gap between Component Tests and Functional Tests by covering just the integration
            boundaries not tested by the component tests.
        </p>
        <p>
            The Integration Tests implemented in the scope of this solution does not focus on testing configuration(i.e: test if
            a deployed service can talk to a database). The focus is to test the implementation behaviour between
            the edge components and their respective dependencies, like repositories and gateways. Examples of tests we want do
            with integration testes are:
        </p>
        <ul>
            <li>Check if the data we pass to a database is keeps the format when saved and retrieved. i.e: decimal places, text
                encoding, valid length,</li>
            <li>Check if a request to a external service is valid by providing the right data, http headers like authentication
                header, url path, and so one.</li>
            <li>Check if a value is cached correctly when retrieved from an external storage.</li>
        </ul>
        <br />
        <p><a href="/docs/workloads/azure/backend/netcore/architecture/testing/testing_scope_netcore">Testing Scope</a></p>
    </TabItem>
</Tabs>

<br />

