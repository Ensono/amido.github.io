(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return h}));var a=n(2),o=n(6),r=(n(0),n(142)),i={id:"architecture_overview_netcore",title:"Architecture Overview",sidebar_label:"Architecture Overview",hide_title:!0,hide_table_of_contents:!1},c={unversionedId:"workloads/azure/backend/netcore/project_structure/architecture_overview_netcore",id:"workloads/azure/backend/netcore/project_structure/architecture_overview_netcore",isDocsHomePage:!1,title:"Architecture Overview",description:"DDD Architecture Overview",source:"@site/docs/workloads/azure/backend/netcore/project_structure/architecture_overview_netcore.md",slug:"/workloads/azure/backend/netcore/project_structure/architecture_overview_netcore",permalink:"/stacks/docs/workloads/azure/backend/netcore/project_structure/architecture_overview_netcore",version:"current",sidebar_label:"Architecture Overview",sidebar:"docs",previous:{title:"Application Security",permalink:"/stacks/docs/workloads/azure/backend/netcore/security_netcore"},next:{title:"Repository Overview",permalink:"/stacks/docs/workloads/azure/backend/netcore/project_structure/repository_overview_netcore"}},s=[{value:"DDD Architecture Overview",id:"ddd-architecture-overview",children:[{value:"Bounded Context",id:"bounded-context",children:[]},{value:"Entities",id:"entities",children:[]},{value:"Value Objects",id:"value-objects",children:[]},{value:"Aggregates",id:"aggregates",children:[]},{value:"AggregateRoot",id:"aggregateroot",children:[]},{value:"Domain Events",id:"domain-events",children:[]},{value:"Domain Exceptions",id:"domain-exceptions",children:[]},{value:"Repository",id:"repository",children:[]}]}],l={rightToc:s};function h(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"ddd-architecture-overview"},"DDD Architecture Overview"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Solution Diagram",src:n(160).default})),Object(r.b)("h3",{id:"bounded-context"},"Bounded Context"),Object(r.b)("p",null,"In DDD, when we start mapping the business domain into objects we have to identify it's relation to each other on a wide scope, at start we identify them as a big and indivisible context to have a clear view of it's relationships."),Object(r.b)("p",null,"When their relationships are identified we have to identify the smallest cohesive scope where they fit together on it's own context. This boundary is given the name of bounded context."),Object(r.b)("p",null,"A domain object might belong to multiple bounded context, but on each of them will have a different set of attributes that are only relevant to the context they are within."),Object(r.b)("p",null,"In some cases, a domain object might change it's name to make more sense within the context it is located."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example:"),"\nA property management business might have a person as a customer for the business, but when the person is in the context of a rental department, you are a tenant on their respective, even though you are a customer in other context of the business.\nFor more information see ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://martinfowler.com/bliki/BoundedContext.html"}),"Bounded Context, by Martin Fowler")),Object(r.b)("br",null),Object(r.b)("h3",{id:"entities"},"Entities"),Object(r.b)("p",null,"An entity is a domain object that represents a thread of continuity, it is a business object that has an unique identity even though their attributes are the same, an identity makes the object unique, that means two objects with same attribute values are not considered the same."),Object(r.b)("p",null,"Because entities are not defined by it's attributes, all the attributes might change, but the identity keeps the same."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example:"),"\nTwo people with same name (John Smith) and born on same day may have the same attributes but in respect to the system they are independent domain objects.\nWhen a person get married, they might change their names, but the identity stay the same."),Object(r.b)("br",null),Object(r.b)("h3",{id:"value-objects"},"Value Objects"),Object(r.b)("p",null,"Value Objects are domain objects that does not have a conceptual identity within the context, they are just needed for it's attributes and two object with same attributes should be considered the same."),Object(r.b)("p",null,"In some scenarios, we might have value objects representing entities in other contexts, these value objects will likely have ids as attributes, even though they have unique ids they should still be values objects because they are not a primary object within the bounded context and are just representing external dependencies."),Object(r.b)("p",null,"Different from entities, value objects can be duplicated within the domain, but entities are unique."),Object(r.b)("br",null),Object(r.b)("h3",{id:"aggregates"},"Aggregates"),Object(r.b)("p",null,"Is an entity that aggregates a set of objects that are bound together by same parent. Aggregate holds control of the aggregated objects and control it's accessibility and lifetime."),Object(r.b)("p",null,"For more information see:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://martinfowler.com/bliki/DDD_Aggregate.html"}),"DDD Aggregate, by Martin Fowler"))),Object(r.b)("br",null),Object(r.b)("h3",{id:"aggregateroot"},"AggregateRoot"),Object(r.b)("p",null,"Aggregate root is similar to aggregates with a simple difference, it is a single root entity that allow external operations interact with entities within the context, when referenced outside of the domain, the AggregateRoot is the reference that should be used, to avoid coupling the application to the domain and making it flexible to evolve with littler application changes. Let's say we have objects A, B and C(either entities or Value objects), A contains B and B contains C. In this case A is the root, to modify C, the external elements should pass through A first and A decides how the operation is handled, if the application were to talk to B direct by passing A, would make the application coupled to B, and a change in the structure would make harder to refactor the domain."),Object(r.b)("p",null,"Also, AggregateRoot is the persistence boundary used to track changes and state of the domain."),Object(r.b)("br",null),Object(r.b)("h3",{id:"domain-events"},"Domain Events"),Object(r.b)("p",null,"Domain events are an indicator that something happened inside an object in the domain and should broadcasted to other objects to react on it's occurrence."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example:"),"\nA checkout cart can have products the customer want to buy, when product is added to the cart the total should be updated."),Object(r.b)("p",null,"In simple terms we could just make call to recalculate the total and it is all done. With this approach, we have a coupling between the operation add item and Calculate totals"),Object(r.b)("p",null,"In DDD, we could just raise an event of type ItemAddedToCartEvent and implement an event handler to calculate the totals outside of the AddItem operation but within the same context."),Object(r.b)("p",null,"This approach makes both operations decoupled and flexible for extension, when we add new operations that need to calculate the total, we just need to extend the event handler to catch all events that triggers the Totals recalculation."),Object(r.b)("p",null,"Another usage for events is EventSourcing, where we gather these events to identify what happened when we persist the changes caused by the operation."),Object(r.b)("br",null),Object(r.b)("h3",{id:"domain-exceptions"},"Domain Exceptions"),Object(r.b)("p",null,"Domain exceptions, sometimes called business rule violation, are exceptions raised within the domain when an operation or object fail to meet business rules."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example:"),"\nWhen an employee raises a purchase order, if the purchase order value is above a certain limit, the domain will raise an exception telling that the operation can't be completed, this exception will interrupt the processing and tell the application about the error."),Object(r.b)("p",null,"Because domain exceptions does not know about the environment it's running in, the Application have to handle these exceptions and wrap it with an exception containing the environment context details like: Which operation raised the exception, who triggered the exception, correlation-id of the trigger and so on."),Object(r.b)("br",null),Object(r.b)("h3",{id:"repository"},"Repository"),Object(r.b)("p",null,"To make it possible to execute operations against a domain, we require a component that prepare the domain object to last known state before the operation is executed."),Object(r.b)("p",null,"The repository is the component that lives between the application and the domain, it is responsible to Load ",Object(r.b)("strong",{parentName:"p"},"aggregate roots")," from the database or the materialize the domain from a chain of events when using EventSourcing."),Object(r.b)("p",null,"It is also the responsible to persist the changes and events that occurred to an AggregateRoot after an operation is executed."))}h.isMDXComponent=!0},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),h=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=h(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=h(n),b=a,p=u["".concat(i,".").concat(b)]||u[b]||d[b]||r;return n?o.a.createElement(p,c(c({ref:t},l),{},{components:n})):o.a.createElement(p,c({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},160:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/cqrs_diagram-36b273bc46592cbf8a211c11d96021cd.png"}}]);