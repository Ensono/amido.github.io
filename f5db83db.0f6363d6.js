(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{190:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var o=n(2),a=n(6),i=(n(0),n(200)),r=n(206),s=n(207),l={id:"project_structure_netcore",title:"Solution Structure",sidebar_label:"Solution Structure",hide_title:!0,hide_table_of_contents:!0,description:".NET Core REST API application - Solution Structure",keywords:[".net core","rest api","cqrs","example","template","repository","structure"]},c={unversionedId:"workloads/azure/backend/netcore/architecture/project_structure_netcore",id:"workloads/azure/backend/netcore/architecture/project_structure_netcore",isDocsHomePage:!1,title:"Solution Structure",description:".NET Core REST API application - Solution Structure",source:"@site/docs/workloads/azure/backend/netcore/architecture/project_structure_netcore.md",slug:"/workloads/azure/backend/netcore/architecture/project_structure_netcore",permalink:"/docs/workloads/azure/backend/netcore/architecture/project_structure_netcore",version:"current",sidebar_label:"Solution Structure",sidebar:"docs",previous:{title:"Repository Overview",permalink:"/docs/workloads/azure/backend/netcore/architecture/repository_overview_netcore"},next:{title:"Data Storage - CosmosDB",permalink:"/docs/workloads/azure/backend/netcore/architecture/data_storage_cosmosdb_netcore"}},u=[{value:"Solution Structure",id:"solution-structure",children:[{value:"Simple Web API",id:"simple-web-api",children:[]},{value:"Web API with CQRS",id:"web-api-with-cqrs",children:[]},{value:"Functions and Worker Services",id:"functions-and-worker-services",children:[]}]}],d={rightToc:u};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"solution-structure"},"Solution Structure"),Object(i.b)("h3",{id:"simple-web-api"},"Simple Web API"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-text"}),"Solution\xa0'xxAMIDOxx.xxSTACKSss.API'\n\u251c\u2500\u2500\xa0API\n\u2502\xa0\xa0\u251c\u2500\u2500\xa0xxAMIDOxx.xxSTACKSxx.API\n\u2502\xa0\xa0\u251c\u2500\u2500\xa0xxAMIDOxx.xxSTACKSxx.API.Models\n\u2514\u2500\u2500\xa0Tests\n\xa0\xa0\xa0\u251c\u2500\u2500\xa0xxAMIDOxx.xxSTACKSxx.API.UnitTests\n")),Object(i.b)("h3",{id:"web-api-with-cqrs"},"Web API with CQRS"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-text"}),"Solution\xa0'xxAMIDOxx.xxSTACKSss.API'\n\u251c\u2500\u2500\xa0API\n\u2502\xa0\xa0\u251c\u2500\u2500\xa0xxAMIDOxx.xxSTACKSxx.API\n\u2502\xa0\xa0\u251c\u2500\u2500\xa0xxAMIDOxx.xxSTACKSxx.API.Models\n\u251c\u2500\u2500\xa0Application\n\u2502\xa0\xa0\u251c\u2500\u2500\xa0xxAMIDOxx.xxSTACKSxx.Application.CommandHandlers\n\u2502\xa0\xa0\u251c\u2500\u2500\xa0xxAMIDOxx.xxSTACKSxx.Application.Integration\n\u2502\xa0\xa0\u251c\u2500\u2500\xa0xxAMIDOxx.xxSTACKSxx.Application.QueryHandlers\n\u251c\u2500\u2500\xa0Domain\n\u2502\xa0\xa0\u251c\u2500\u2500\xa0xxAMIDOxx.xxSTACKSxx.Domain\n\u2502\xa0\xa0\u2514\u2500\u2500\xa0External\n\u251c\u2500\u2500\xa0Shared\n\u2502\xa0\xa0\u251c\u2500\u2500\xa0xxAMIDOxx.xxSTACKSxx.Common\n\u2502\xa0\xa0\u2514\u2500\u2500\xa0xxAMIDOxx.xxSTACKSxx.CQRS\n\u2514\u2500\u2500\xa0Tests\n\xa0\xa0\xa0\u251c\u2500\u2500\xa0xxAMIDOxx.xxSTACKSxx.API.ComponentTests\n\xa0\xa0\xa0\u251c\u2500\u2500\xa0xxAMIDOxx.xxSTACKSxx.Common.UnitTests\n\xa0\xa0\xa0\u251c\u2500\u2500\xa0xxAMIDOxx.xxSTACKSxx.Domain.UnitTests\n\xa0\xa0\xa0\u2514\u2500\u2500\xa0xxAMIDOxx.xxSTACKSxx.Infrastructure.IntegrationTests\n")),Object(i.b)("h3",{id:"functions-and-worker-services"},"Functions and Worker Services"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-text"}),"\u251c\u2500\u2500\xa0Functions\n\u2502\xa0\xa0\u251c\u2500\u2500\xa0function-listener\n\u2502  \u2502\xa0\xa0 \u251c\u2500\u2500\xa0xxAMIDOxx.xxSTACKSxx.Listener\n\u2502  \u2502\xa0\xa0 \u2514\u2500\u2500\xa0xxAMIDOxx.xxSTACKSxx.Listener.UnitTests\n\u2502\xa0\xa0\u251c\u2500\u2500\xa0function-worker\n\u2502  \u2502\xa0\xa0 \u251c\u2500\u2500\xa0xxAMIDOxx.xxSTACKSxx.Worker\n\u2502  \u2502\xa0\xa0 \u2514\u2500\u2500\xa0xxAMIDOxx.xxSTACKSxx.Worker.UnitTests\n\u251c\u2500\u2500\xa0Worker\n\u2502\xa0\xa0\u2514\u2500\u2500\xa0xxAMIDOxx.xxSTACKSxx.BackgroundWorker\n")),Object(i.b)(r.a,{defaultValue:"api",values:[{label:"API",value:"api"},{label:"Application",value:"application"},{label:"Domain",value:"domain"},{label:"Shared",value:"shared"},{label:"Tests",value:"tests"},{label:"Functions and Worker Services",value:"functions-worker"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"api",mdxType:"TabItem"},Object(i.b)("p",null,"The API scope contains the components which are exposed publicly, such as the APIs and it's Models. It contains infrastructure components  responsible to arrange all dependencies within the solution. If the API wasn't self-hosted, the WebHost would have been added to this scope to manage the hosting concerns of the API."),Object(i.b)("br",null),Object(i.b)("h3",null,"Company.Project.API"),Object(i.b)("p",null,"The ",Object(i.b)("strong",null,"API")," project containing the controllers and swagger documentation. The purpose of the API project is to expose the application via a set of REST\\HTTP endpoints. The API will validate requests either by built-in validators using DataAnnotations attributes or using FluentValidation(not included in the template)."),Object(i.b)("p",null,"The API is a self hosted service using .NET Core kestrel and does not require any external web server. The hosting logic is handled by the ",Object(i.b)("code",null,"Program.cs")," class."),Object(i.b)("p",null,"The API depends on ",Object(i.b)("code",null,"ICommandHandler")," and ",Object(i.b)("code",null,"IQueryHandler")," abstractions and does not contain a direct reference to the command-handlers and query-handler projects to reduce coupling. The bridge between the interface abstraction and implementations will be provided by the infrastructure that maps the interfaces and implementations of many components, like the queries and commands handlers, repositories, caches and so on."),Object(i.b)("p",null,"Having the constructor depending on abstractions also makes the API flexible for Contract Testing, where the interfaces can me mocked and don't require a dependency to the Application."),Object(i.b)("br",null),Object(i.b)("h3",null,"Company.Project.Models"),Object(i.b)("p",null,"The ",Object(i.b)("strong",null,"Models")," exposed by the API have been pulled out of the API project to make them reusable. The models have their own validation using ",Object(i.b)("code",null,"DataAnnotations"),", therefore the validation id provided in the models without dependency on third party libraries like FluentValidation, which should be implemented only if needed."),Object(i.b)("ul",null,Object(i.b)("li",null,Object(i.b)("p",null,"QA have demonstrated interest in reuse of Models to avoid duplication of code in ",Object(i.b)("code",null,"API.Models")," and ",Object(i.b)("code",null,"TestModels"),". The separate models project will make it easier to expose the models as NuGet packages for reuse by QA Functional Tests.")),Object(i.b)("li",null,Object(i.b)("p",null,"A Client SDK can be create in the future to communicate with the API, having a reusable Model, makes it easy to write the SDK without rewriting them every time the API changes."))),Object(i.b)("br",null),Object(i.b)("h3",null,"Company.Project.Infrastructure"),Object(i.b)("p",null,"The infrastructure project is a cross cutting project responsible to tie the dependencies within the API and application. In general, the API communicates to an Interface that abstracts away the need to have an implementation available at API design time. It needs to know only the Commands and Queries available for each operation. The command and query handlers are implemented in their own projects and the API does not have a direct dependency on it. The infrastructure will be responsible to bridge the commands to handlers making the API decoupled from the implementation."),Object(i.b)("p",null,"The same happens for other components, ",Object(i.b)("code",null,"CommandHandlers")," do not have a direct dependency in the Repository implementation, they just expect an implementation to be injected at runtime, the real implementation will be managed by the Infrastructure in real environments or managed by test fixtures using Mocks or Stubs during test contexts."),Object(i.b)("p",null,"In simple terms, the Infrastructure setups the IoC container with all dependencies needed to run the application.")),Object(i.b)(s.a,{value:"application",mdxType:"TabItem"},Object(i.b)("p",null,"The application scope contains the projects that will handle most of the application behaviour and technical requirements but not the actual business logic of it. It will bridge the public API and the domain logic."),Object(i.b)("p",null,"They are managed into separate projects to make Commands decoupled from the Queries, in a more advanced scenario, queries and commands could be handled within their own services, each service handling their own dependencies and the API would make HTTP or gRPC calls to these respective services."),Object(i.b)("p",null,"In this solution, we have a single API handling commands and queries and separate applications for handlers. This approach makes flexible to either:"),Object(i.b)("ul",null,Object(i.b)("li",null,"Merge commands and query handlers project into a single ",Object(i.b)("code",null,"Company.Project.Application")," project for simplicity (Integration should still be independent) and host within the API. (current usage)"),Object(i.b)("li",null,"Host commands are separate from queries on their respective services and forward the calls from the APIs.")),Object(i.b)("br",null),Object(i.b)("h3",null,"Company.Project.Application.CommandHandlers"),Object(i.b)("p",null,"The ",Object(i.b)("strong",null,"CommandHandlers")," contain implementations of ",Object(i.b)("code",null,"ICommandHandler")," interface. Each handler expect it's own command type and handles it's own logic."),Object(i.b)("p",null,"Command Handlers orchestrate the dependencies of a commands before it is applied to a Domain object. A few common features of a handler are:"),Object(i.b)("ul",null,Object(i.b)("li",null,"Ask the repository for the data used in the domain object, so that an operation(command) can be applied to it"),Object(i.b)("li",null,"Act in the domain and send the data to be handled."),Object(i.b)("li",null,"Ensure the domain changes are persisted to DB by sending the domain object back to the repository to be saved"),Object(i.b)("li",null,"Publish related application events(not domain events) to the event hub (i.e: Kafka or Service Bus Topic)"),Object(i.b)("li",null,"Call external dependencies if needed, like dependent services using a gateway."),Object(i.b)("li",null,"Handle non business logic, like:"),Object(i.b)("ul",null,Object(i.b)("li",null,"Ensure an object exists before executing the operations"),Object(i.b)("li",null,"Ensure an operation are valid against a domain object(i.e: security check)"),Object(i.b)("li",null,"Load configuration")),Object(i.b)("li",null,Object(i.b)("strong",null,"Command handlers should not handle business logic"),". i.e:"),Object(i.b)("ul",null,Object(i.b)("li",null,"If an operation can only be executed if the domain is in a specific state or has a determined value, the condition checks should be evaluated within the domain."),Object(i.b)("li",null,"If the business rules condition requires data from source outside the domain, i.e database, services, etc, then a domain service should be created to handle the logic like load the rules from a gateway and execute the check before the entity is changed."))),Object(i.b)("br",null),Object(i.b)("h3",null,"Company.Project.Application.QueryHandlers"),Object(i.b)("p",null,"The ",Object(i.b)("strong",null,"QueryHandlers")," contains the implementations of IQueryHandler interface. Each IQueryHandler expect a QueryCriteria and return a QueryModel as the query result."),Object(i.b)("p",null,"Similar to CommandHandlers, the QueryHandlers are responsible to orchestrate the dependencies of a query, on some cases, a query might span multiple components or external services, the query handlers provides:"),Object(i.b)("ul",null,Object(i.b)("li",null,"Handle or delegate the mapping from domain data to query models."),Object(i.b)("li",null,"Call repository(storage) or search provider to gather the data."),Object(i.b)("li",null,"Ensure the user has permission to execute the operation.")),Object(i.b)("br",null),Object(i.b)("h3",null,"Company.Project.Application.Integration"),Object(i.b)("p",null,"The ",Object(i.b)("strong",null,"Integration")," project contains contracts(Interfaces) that must be ",Object(i.b)("strong",null,"implemented by other assemblies")," to provide capabilities to the application. Contracts like ",Object(i.b)("code",null,"IMenuRepository")," should be created in this project and implemented in the Infrastructure project. This approach will prevent a chain of unnecessary dependencies between projects and most specifically the Application. For example:"),Object(i.b)("p",null,"CommandHandler depends on ",Object(i.b)("code",null,"IMenuRepository"),", the implementation of IRepository is done in the Infrastructure."),Object(i.b)("p",null,"QueryHandlers can also have a dependency on ",Object(i.b)("code",null,"IMenuRepository"),", that will use the same implementation from Infrastructure, if it were created in either of them, one would have a dependency to the other."),Object(i.b)("p",null,"If either CommandHandlers or QueryHandlers have a dependency on external services, a gateway could be implemented. The gateway would be an interface with the operations we need and the ",Object(i.b)("strong",null,"implementation must be done outside of the integration project")," to avoid direct dependencies to packages not required by the application. The gateways could either be implemented in the Infrastructure for services we have total control. Similar to what we do for repository implementations, but for ",Object(i.b)("strong",null,"external dependencies it should be implemented by an ACL (Anti Corruption Layer)"),". The ACL approach is the best scenario given it leaves each dependency on their respective projects and reduce the dependencies within the scope of the application and infrastructure. (See ACL for more details).")),Object(i.b)(s.a,{value:"domain",mdxType:"TabItem"},Object(i.b)("p",null,"The Domain scope is where the business logic lives in. When a feature is implemented, the business conditions which drive the feature are placed within the domain boundary. In BDD, the domain boundary is called Bounded context. It is the term used to group a set of features correlated to accomplish a set of operations which should live together."),Object(i.b)("p",null,"In a micro services solution, each service will likely map to a single bounded context. In an e-commerce solution, the bounded contexts could be described like Catalog, Checkout, Stock, and so on."),Object(i.b)("br",null),Object(i.b)("h3",null,"Company.Project.Domain"),Object(i.b)("p",null,"The domain project contains the components which map to a business domain and their respective dependencies."),Object(i.b)("p",null,"In an e-Commerce solution with the bounded context Catalog, there will be Products, Prices, Categories and so on. These could be defined in the domain as AggregateRoot, Entities or ValueObjects. All these definitions should be created in the domain project according to the Design decisions."),Object(i.b)("h3",null,"External"),Object(i.b)("p",null,"The external scope contains projects that provides features provided by external dependencies, like other services or third party solutions.")),Object(i.b)(s.a,{value:"shared",mdxType:"TabItem"},Object(i.b)("p",null,"Share scope are projects that contains items reused across multiple projects, items like Exceptions, ExceptionsIds, OperationIds, Commands, Queries, and so on."),Object(i.b)("h3",null,"Company.Project.Common"),Object(i.b)("p",null,"Common items are items that can and should be reused by multiple projects to avoid code duplication and reduce complexity by avoiding mappings and conversions. Exceptions and Operations are some of the common items that can be available to all projects."),Object(i.b)("p",null,"Exceptions in the application should be a shared concern and every layer should understand it properly, having one exception that is known by all layers will reduce the complexity of mapping these exceptions and adding unnecessary try/catch blocks to raise new exceptions when needed an exception is propagated."),Object(i.b)("p",null,"Operations similar to exceptions, should have unique ids that are common to all layers. An API receive a model that will map to a command. The command should have it's own id to be easy to diagnostic failures between the layers."),Object(i.b)("br",null),Object(i.b)("h3",null,"Company.Project.CQRS"),Object(i.b)("p",null,"CQRS contains POCO classes used between API and Application layer to pass commands and queries between each other."),Object(i.b)("p",null,"The Commands and Queries are separate from the handlers to reduce the coupling between API and Application."),Object(i.b)("p",null,"Like the decoupling from API, it also contains the Application Events raised within the application to be consumed by other components or services."),Object(i.b)("p",null,"CQRS should not contain any logic and is used just to provide classes that are consumed outside the application boundary.")),Object(i.b)(s.a,{value:"functions-worker",mdxType:"TabItem"},Object(i.b)("h3",null,"Company.Project.Listener"),Object(i.b)("p",null,"The function listener contains a Azure function that is triggered by a message in a Azure Service Bus topic."),Object(i.b)("p",null,"It uses a package to help with serialization and deserialization called Amido.Stacks.Messaging.Azure.ServiceBus"),Object(i.b)("br",null),Object(i.b)("h3",null,"Company.Project.Listener.UnitTests"),Object(i.b)("p",null,"Tests the function execution."),Object(i.b)("br",null),Object(i.b)("h3",null,"Company.Project.Worker"),Object(i.b)("p",null,"The function Worker contains a Azure function that is triggered by a change in CosmosDb."),Object(i.b)("p",null,"This change is read by the function, deserialized and an event is raised to Service Bus"),Object(i.b)("br",null),Object(i.b)("h3",null,"Company.Project.Worker.UnitTests"),Object(i.b)("p",null,"Tests the function execution."),Object(i.b)("br",null),Object(i.b)("p",null,"Resources like Repositories and gateway are mocked to provide dummy or fake the behaviour expected by the application(or not) in order to test multiple usage scenarios of the application."),Object(i.b)("br",null),Object(i.b)("h3",null,"Company.Project.BackgroundWorker"),Object(i.b)("p",null,"The Worker service is a service triggered by messages in a Azure Service Bus topic."),Object(i.b)("p",null,"It uses a package to help with serialization and deserialization called Amido.Stacks.Messaging.Azure.ServiceBus")),Object(i.b)(s.a,{value:"tests",mdxType:"TabItem"},Object(i.b)("p",null,"The tests scope contains all tests that covers the application code via white box method. Tests that are run from inside out with access to the code and testing the behaviour of the code."),Object(i.b)("p",null,"Each set of tests will have a level of coverage and different level of details."),Object(i.b)("br",null),Object(i.b)("h3",null,"Company.Project.API.ComponentTests"),Object(i.b)("p",null,"The ",Object(i.b)("strong",null,"ComponentTests")," covers the overall service from edge to edge without external dependencies. It starts at the API endpoints and finishes before the last service layer makes a call to a external dependency."),Object(i.b)("p",null,"Resources like Repositories and gateway are mocked to provide dummy or fake the behaviour expected by the application(or not) in order to test multiple usage scenarios of the application."),Object(i.b)("p",null,"API are(should be) also covered by Contract Tests, we might see the coverage of APIs by Component Tests as redundant tests. Component tests could skip the coverage of the API and cover from the application (commands and queries) layer to the service boundary(repositories and gateways), but this approach would require us to create an extra test assert the integration between API and Application works as expected, giving us on extra test to maintain."),Object(i.b)("p",null,"Component tests are similar to functional tests, both are testing features of the system with one caveat. Functional Tests asserts a functionality by providing an Input and expecting an output according to the input provided. It does not(should not) care how the output is generated. Component tests on the other hand assert that an input returns an expected output and also ensure a set of expectations are met. i.e: Events are raised by the application, calls to external services are handled accordingly; data is formatted correctly when passed to external components."),Object(i.b)("p",null,"Component Tests can also be referred as Module Tests, Assembly Tests, Service Tests."),Object(i.b)("br",null),Object(i.b)("h3",null,"Company.Project.Common.UnitTests"),Object(i.b)("p",null,"Unit tests for x.y.Common project."),Object(i.b)("br",null),Object(i.b)("h3",null,"Company.Project.Domain.UnitTests"),Object(i.b)("p",null,"Unit tests for x.y.Domain project. For unit tests details please refer to Test Definitions"),Object(i.b)("br",null),Object(i.b)("h3",null,"Company.Project.Infrastructure.IntegrationTests"),Object(i.b)("p",null,"Integration tests is a level of test focused on testing the interaction of two or more components and identify if their work well together, even though you might have already Unit Test coverage of each component individually."),Object(i.b)("p",null,"Integration tests are needed because in many cases the component can work properly when running independently but fail when interacting to each components. In a unit test they work properly because we mock the dependencies with assumptions that might not be true, and could be only be identified at runtime."),Object(i.b)("p",null,"In this solution we already do integration tests between internal components either via Component Tests, where it tests the integration between API\u2192 Application \u2192 Domain, or via Functional Tests, testing the system as a black box, and each interaction with the API will also assert the integration between API\u2192 Application \u2192 Domain \u2192 Repository \u2192 Database."),Object(i.b)("p",null,"The limitation of component tests is that bugs outside the scope of test are not identified until the application is deployed to a valid environment and tested with functional tests."),Object(i.b)("p",null,"The limitation of functional tests is that it is time consuming to create and maintain. Also, functional tests are slow because it requires a deployment of the application to be evaluated."),Object(i.b)("p",null,"Integration tests bridges the gap between Component Tests and Functional Tests by covering just the integration boundaries not tested by the component tests."),Object(i.b)("p",null,"The Integration Tests implemented in the scope of this solution does not focus on testing configuration(i.e: test if a deployed service can talk to a database). The focus is to test the implementation behaviour between the edge components and their respective dependencies, like repositories and gateways. Examples of tests we want do with integration testes are:"),Object(i.b)("ul",null,Object(i.b)("li",null,"Check if the data we pass to a database is keeps the format when saved and retrieved. i.e: decimal places, text encoding, valid length,"),Object(i.b)("li",null,"Check if a request to a external service is valid by providing the right data, http headers like authentication header, url path, and so one."),Object(i.b)("li",null,"Check if a value is cached correctly when retrieved from an external storage.")),Object(i.b)("br",null),Object(i.b)("p",null,Object(i.b)("a",{href:"/docs/workloads/azure/backend/netcore/architecture/testing/testing_scope_netcore"},"Testing Scope")))),Object(i.b)("br",null))}b.isMDXComponent=!0},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=o,h=d["".concat(r,".").concat(p)]||d[p]||b[p]||i;return n?a.a.createElement(h,s(s({ref:t},c),{},{components:n})):a.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},202:function(e,t,n){"use strict";function o(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(a&&(a+=" "),a+=t);return a}},204:function(e,t,n){"use strict";var o=n(0),a=Object(o.createContext)(void 0);t.a=a},205:function(e,t,n){"use strict";var o=n(0),a=n(204);t.a=function(){var e=Object(o.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},206:function(e,t,n){"use strict";var o=n(0),a=n.n(o),i=n(205),r=n(202),s=n(52),l=n.n(s),c=37,u=39;t.a=function(e){var t=e.block,n=e.children,s=e.defaultValue,d=e.values,b=e.groupId,p=Object(i.a)(),h=p.tabGroupChoices,m=p.setTabGroupChoices,f=Object(o.useState)(s),x=f[0],j=f[1],O=Object(o.useState)(!1),y=O[0],g=O[1];if(null!=b){var v=h[b];null!=v&&v!==x&&d.some((function(e){return e.value===v}))&&j(v)}var w=function(e){j(e),null!=b&&m(b,e)},A=[],I=function(e){e.metaKey||e.altKey||e.ctrlKey||g(!0)},T=function(){g(!1)};return Object(o.useEffect)((function(){window.addEventListener("keydown",I),window.addEventListener("mousedown",T)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t})},d.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":x===t,className:Object(r.a)("tabs__item",l.a.tabItem,{"tabs__item--active":x===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return A.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(A,e.target,e),I(e)},onFocus:function(){return w(t)},onClick:function(){w(t),g(!1)},onPointerDown:function(){return g(!1)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(n).filter((function(e){return e.props.value===x}))[0]))}},207:function(e,t,n){"use strict";var o=n(0),a=n.n(o);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);