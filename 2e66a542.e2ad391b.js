(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(2),o=n(6),i=(n(0),n(210)),r={id:"data_storage_cosmosdb_netcore",title:"Data Storage - CosmosDB",sidebar_label:"Data Storage - CosmosDB",hide_title:!0,hide_table_of_contents:!0,description:".NET Core REST API application - how to use the Stacks package for CosmosDB document storage",keywords:[".net core","rest api","cqrs","template","cosmos","cosmosdb","data storage","azure","storage","configuration","cosmosdbkey","documentsearch","sql","api","repository","cosmosdb package","dependency injection","stacks"]},s={unversionedId:"workloads/azure/backend/netcore/architecture/data_storage_cosmosdb_netcore",id:"workloads/azure/backend/netcore/architecture/data_storage_cosmosdb_netcore",isDocsHomePage:!1,title:"Data Storage - CosmosDB",description:".NET Core REST API application - how to use the Stacks package for CosmosDB document storage",source:"@site/docs/workloads/azure/backend/netcore/architecture/data_storage_comsosdb_netcore.md",slug:"/workloads/azure/backend/netcore/architecture/data_storage_cosmosdb_netcore",permalink:"/stacks/docs/workloads/azure/backend/netcore/architecture/data_storage_cosmosdb_netcore",version:"current",sidebar_label:"Data Storage - CosmosDB",sidebar:"docs",previous:{title:"Solution Structure",permalink:"/stacks/docs/workloads/azure/backend/netcore/architecture/project_structure_netcore"},next:{title:"Operations, Events, Exceptions and Correlation",permalink:"/stacks/docs/workloads/azure/backend/netcore/architecture/operations_events_exceptions_correlation_netcore"}},c=[{value:"Data Storage - CosmosDB",id:"data-storage---cosmosdb",children:[{value:"Summary",id:"summary",children:[]},{value:"Introduction",id:"introduction",children:[]},{value:"The problem",id:"the-problem",children:[]},{value:"The solution",id:"the-solution",children:[]},{value:"Document Storage",id:"document-storage",children:[]},{value:"CosmosDB Package",id:"cosmosdb-package",children:[]},{value:"Dependency Injection",id:"dependency-injection",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Operation Result",id:"operation-result",children:[]},{value:"Unit Tests",id:"unit-tests",children:[]}]}],l={rightToc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"data-storage---cosmosdb"},"Data Storage - CosmosDB"),Object(i.b)("h3",{id:"summary"},"Summary"),Object(i.b)("p",null,"This guide provides information on how to use the Stacks package for CosmosDB document storage."),Object(i.b)("p",null,"The focus of this guide is the CosmosDB SQL API, it assumes the reader have prior knowledge about ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/cosmos-db/sql-query-getting-started"}),"CosmosDB SQL API")," in order to understand the concepts describe thereafter."),Object(i.b)("p",null,"It is out of scope for this document to explain what is CosmosDB and it's respective storage models, but instead describe how the package for CosmosDB handles the communication with the server. If you don\u2019t have enough understanding of CosmosDB concepts, please take some time to review the CosmosDB documentation before you continue."),Object(i.b)("br",null),Object(i.b)("h3",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"Most applications requires a persistent data store to keep the application data safe and available for use whenever an operation is executed."),Object(i.b)("p",null,"The main storage type used on this project is a document store to persist the domain data, the storage is provided by Azure Cosmos DB SQL API."),Object(i.b)("br",null),Object(i.b)("h3",{id:"the-problem"},"The problem"),Object(i.b)("p",null,"Monolith applications generally use a single database to store all the application data, in general, monolith solutions contains a data layer responsible to handle the database communication and data conversion by using an ORM library like Entity Framework, NHibernate or Dapper."),Object(i.b)("p",null,"Microservice architecture also requires a data layer, different from monolith applications, each microservice tend have it's own data layer, generating lots of duplicate data access code spread across multiple repositories."),Object(i.b)("p",null,"Duplicate data access code will at some point diverge and make each microservice have different features, or same features with different implementations that in most cases will be tightly coupled to the service that created it."),Object(i.b)("p",null,"Most of these features created in a data access layer should be well planned, tested and made available to all services in order to have a consistent and reliable approach used by every team, reduce the time needed to implement data access logic and avoid the same pitfalls others might face when starting from scratch."),Object(i.b)("br",null),Object(i.b)("h3",{id:"the-solution"},"The solution"),Object(i.b)("p",null,"Azure CosmosDB provides a reliable SDK to communicate with the CosmosDB server, but still require some knowledge from the developer to consume it properly, add proper exception handling and logging."),Object(i.b)("p",null,"This package provides a single data access layer implementation that is simple and reusable by multiple services, reducing the amount of boilerplate code and keeping a consistent and well tested library."),Object(i.b)("p",null,"The solution is split into two packages, ",Object(i.b)("strong",{parentName:"p"},"Amido.Stacks.Data.Documents")," and ",Object(i.b)("strong",{parentName:"p"},"Amido.Stacks.Data.Documents.CosmosDB"),"."),Object(i.b)("br",null),Object(i.b)("h3",{id:"document-storage"},"Document Storage"),Object(i.b)("p",null,"Package ",Object(i.b)("strong",{parentName:"p"},"Amido.Stacks.Data.Documents")," contains the interface contracts for data access layers, it will define the operations available and decouple the contracts from the implementation. In the future, if the company decides to use other solutions like MongoDB, Cassandra or similar, will make it smooth to switch between servers without changing the code on services consuming it."),Object(i.b)("p",null,"The contracts are defined by two interfaces IDocumentStorage and IDocumentSearch, as below, method signatures were removed for simplicity:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp",metastring:'title="IDocumentStorage"',title:'"IDocumentStorage"'}),"IDocumentStorage<TEntity, in TEntityIdentityType>\n        Task<OperationResult<TEntity>> SaveAsync(TEntityIdentityType identifier, string partitionKey, TEntity document, string eTag);\n        Task<OperationResult<TEntity>> GetByIdAsync(TEntityIdentityType identifier, string partitionKey);\n        Task<OperationResult> DeleteAsync(TEntityIdentityType identifier, string partitionKey);\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp",metastring:'title="IDocumentSearch"',title:'"IDocumentSearch"'}),"IDocumentSearch<TEntity> Task<OperationResult<IEnumerable<TResult>>> Search<TResult, TOrderKey>(\n    Expression<Func<TResult, bool>> searchPredicate,\n    Expression<Func<TResult, TOrderKey>> orderPredicate = null,\n    bool isAscendingOrder = true,\n    string partitionKey = null,\n    int pageSize = 20,\n    int pageNumber = 1\n);\n\nTask<OperationResult<IEnumerable<TResult>>> RunSQLQueryAsync<TResult>(\n    string sqlQuery,\n    Dictionary<string, object> parameters = null,\n    string partitionKey = null,\n    int? MaxItemCount = null,\n    string continuationToken = null\n);\n")),Object(i.b)("p",null,"The operations were decoupled into two interfaces to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Segregate Command operations from Read operations, except for GetById that is required for commands that need the full structure stored in DB in order to update it.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Separation of concerns, some implementations might not provide search capabilities, as it might be offloaded to a Search engine like ElasticSearch instead")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Document databases might have separate storage for search each documents structure based on the search pattern, partition and indexes. In this case the documents stored in the search database will not match the schema of the original entity stored in the domain database."))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"It is expected that the implementations of these interfaces are reused between requests, for that reason it will be registered as singletons to improve the performance.")),Object(i.b)("p",null,"Applications using the Document Storage does not need to be aware of the implementations, this is why you should only need the ",Object(i.b)("strong",{parentName:"p"},"Amido.Stacks.Data.Documents")," namespace where it is being used. Doing so, will make easier to Mock DB dependencies when doing unit tests."),Object(i.b)("br",null),Object(i.b)("h3",{id:"cosmosdb-package"},"CosmosDB Package"),Object(i.b)("p",null,"The CosmosDB implementation of the document storage is called CosmosDbDocumentStorage and is available in the package Amido.Stacks.Data.Documents.CosmosDB."),Object(i.b)("p",null,"The package makes use of the CosmosDB SDK v3, that contains a few improvements compared to previous version, the most notorious one is the simplicity in the interfaces available, for more details, please check the announcements ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://azure.microsoft.com/en-gb/blog/azure-cosmos-dotnet-sdk-version-3-0-now-in-public-preview/"}),"here"),"."),Object(i.b)("p",null,"A few details you should be aware when using the CosmosDB package from Stacks:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The library use naming convention to map the Aggregate to the CosmosDB collection name(previous known as container), the library will map to the entity type name to a CosmosDB collection with same name, in the example below, the entity type is a Menu (like in a restaurant), a collection with same name should exist in the database(provisioned by DevOps)."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The collection name is not configurable because the configuration should be valid for any collection, otherwise multiple configuration would be required per table.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The package does not create the collection if one does not exist to avoid misconfiguration, which would generate new collections and cause unpredictable behaviours, because the application would continue working, but sending data to wrong collection.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Alternatively, you can add an Attribute ","[Table(\u201cCollectionName\u201d]"," to the entity class name to map your entity to a collection with different name.")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"CosmosDbDocumentStorage")," is registered as a singleton object per collection, this is required in order to better reuse connections when calling CosmosDB resulting in a better performance.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"CosmosDB requires a partition key to store the data, reusing the id as a partition key will make it performant and cheap for writes but will be expensive for reads that does not use the id as parameter."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In case the application is heavy on read operations covering multiple partitions, you should consider a materialized collection partitioned and indexed according to the search parameters used for the query. Doing across partition query is an expensive operation and should be avoided.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Schema design is out of the scope of this guide, for a better design of your data, please watch this video with CosmosDB design patterns"))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Usage:"),"\nWhen the package is used in the data access layer, as example a repository implementation, the package will make the data access logic simple and clean, off loading all the data access logic to the implemented storage."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp",metastring:'title="MenuRepository"',title:'"MenuRepository"'}),"public class MenuRepository : IMenuRepository\n{\n    IDocumentStorage<Menu, Guid> documentStorage;\n\n    public MenuRepository(IDocumentStorage<Menu, Guid> documentStorage)\n    {\n        this.documentStorage = documentStorage;\n    }\n\n    public async Task<Menu> GetByIdAsync(Guid id)\n    {\n        var result = await documentStorage.GetByIdAsync(id, id.ToString());\n        return result.Content;\n    }\n\n    public async Task<bool> SaveAsync(Menu entity)\n    {\n        var result = await documentStorage.SaveAsync(entity.Id, entity.Id.ToString(), entity, null);\n        return result.IsSuccessful;\n    }\n\n    public async Task<bool> DeleteAsync(Guid id)\n    {\n        var result = await documentStorage.DeleteAsync(id, id.ToString());\n        return result.IsSuccessful;\n    }\n}\n")),Object(i.b)("p",null,"As seem above, the database implementation shouldn't leak to the repository implementation, making it clean and readable."),Object(i.b)("p",null,"Because document stores require a partition key to persist the data, it is required that the caller provides it on every call, in the example above, we are reusing the resource ID as the partition key, depending on the design, you might chose a different partition key that is only known by the application. Make sure you select a partition key that is know at query time, otherwise the application will execute cross partition queries when the partition key is not provided."),Object(i.b)("br",null),Object(i.b)("h3",{id:"dependency-injection"},"Dependency Injection"),Object(i.b)("p",null,"In order to use the right implementation, we need to inject the dependencies in the IoC container before the application starts, the CosmosDB implementation provides an extension method called ",Object(i.b)("strong",{parentName:"p"},"AddCosmosDB()")," from the namespace ",Object(i.b)("strong",{parentName:"p"},"Amido.Stacks.Data.Documents.CosmosDB.Extensions"),", to use it, you just have to make a call to the extension in the dependency registration method of your application, like below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'public virtual void ConfigureServices(IServiceCollection services)\n{\n    services.Configure<CosmosDbConfiguration>(context.Configuration.GetSection("CosmosDB"));\n    services.AddCosmosDB();\n    services.AddSecrets(); //Required for CosmosDB configuration, see below\n}\n')),Object(i.b)("p",null,"The first like will load the configuration from appsettings.json and bind it to an instance of ",Object(i.b)("strong",{parentName:"p"},"CosmosDbConfiguration"),", this will be injected in the CosmosDB constructor as ",Object(i.b)("inlineCode",{parentName:"p"},"IOptions<CosmosDbConfiguration>"),", please see the configuration details below."),Object(i.b)("p",null,"The second like adds the ",Object(i.b)("strong",{parentName:"p"},"CosmosDbDocumentStorage")," as a singleton implementation for ",Object(i.b)("inlineCode",{parentName:"p"},"IDocumentStorage<TEntity, in TEntityIdentityType>")," and ",Object(i.b)("inlineCode",{parentName:"p"},"IDocumentSearch<TEntity>"),"."),Object(i.b)("p",null,"The third line add the dependencies required to resolve password at runtime, password management has been described in the docs here."),Object(i.b)("br",null),Object(i.b)("h3",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"The cosmos DB implementation requires 3 mandatory parameters in order to work properly, these are: AccountUri, DatabaseName and c."),Object(i.b)("p",null,"the CosmosDbConfiguration represents these settings in the appssetings.json as a CosmosDB section(default) with the following structure:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "CosmosDb": {\n        "DatabaseAccountUri": "https://localhost:8081/",\n        "DatabaseName": "Stacks",\n        "SecurityKeySecret": {\n            "Identifier": "COSMOSDBKEY",\n            "Source": "Environment"\n        }\n    }\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"DatabaseAccountUri: is the url for the database account that host the databases in azure."),Object(i.b)("li",{parentName:"ul"},"DatabaseName: is the name of the database used by the application. An account might have multiple database, but an application generally uses only one."),Object(i.b)("li",{parentName:"ul"},"SecurityKeySecret: represents a secret that is stored elsewhere, the value of this secret will be passed to the SDK as SecurityKey for authentication with CosmosDB account.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The secret might be hosted anywhere, within the container or on a remote server, for that reason, we use an identifier that will instruct the secret resolver where to find it. The secret management process is describe in the docs with more details.")))),Object(i.b)("h3",{id:"operation-result"},"Operation Result"),Object(i.b)("p",null,"Every operation will return an ",Object(i.b)("inlineCode",{parentName:"p"},"OperationResult<T>")," response,  this is an object that represent the outcome of the operation, in case no exception is thrown, with the following details:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"IsSuccessful: Boolean flag that represents the status of the operation, in case it complete without exception."),Object(i.b)("li",{parentName:"ul"},"Content: Depending on the type of the operation will return either bool, an entity object or a list of entities."),Object(i.b)("li",{parentName:"ul"},"Attributes: A dictionary containing implementation specific data to be consumed by the application if required, for CosmosDB implementation, it returns the keys ETag and RequestCharge with it's respective values.")),Object(i.b)("h3",{id:"unit-tests"},"Unit Tests"),Object(i.b)("p",null,"The library already have unit tests and integration tests covering the operations implemented. This does not prevent the consumer application of writing their own integration tests."),Object(i.b)("p",null,"The tests implemented in the package is to ensure the package works for the intended scenarios, when applications start consuming it, some design decisions might not serialize properly, causing loss of data. For this reason, is really important that the consuming applications have tests converting at least Created+Read test to make sure the contents written to the DB are serialized and de-serialized correctly based on entity structure."))}u.isMDXComponent=!0},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,m=p["".concat(r,".").concat(b)]||p[b]||d[b]||i;return n?o.a.createElement(m,s(s({ref:t},l),{},{components:n})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);