"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[2195],{1859:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=t(4848),i=t(8453),o=t(9557);const a={id:"configure_swagger_ui_netcore",title:"Configure Swagger UI",hide_title:!0,sidebar_label:"Swagger UI",hide_table_of_contents:!0,description:"Swagger UI configuration for the .NET Core REST API application",keywords:[".net core","rest api","tests","stacks","swagger","swagger ui","registration","controller","configuration","dotnet"]},s=void 0,c={id:"workloads/azure/backend/netcore/architecture/swagger_configuration/configure_swagger_ui_netcore",title:"Configure Swagger UI",description:"Swagger UI configuration for the .NET Core REST API application",source:"@site/docs/workloads/azure/backend/netcore/architecture/swagger_configuration/configure_swagger_ui_netcore.md",sourceDirName:"workloads/azure/backend/netcore/architecture/swagger_configuration",slug:"/workloads/azure/backend/netcore/architecture/swagger_configuration/configure_swagger_ui_netcore",permalink:"/docs/workloads/azure/backend/netcore/architecture/swagger_configuration/configure_swagger_ui_netcore",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"configure_swagger_ui_netcore",title:"Configure Swagger UI",hide_title:!0,sidebar_label:"Swagger UI",hide_table_of_contents:!0,description:"Swagger UI configuration for the .NET Core REST API application",keywords:[".net core","rest api","tests","stacks","swagger","swagger ui","registration","controller","configuration","dotnet"]},sidebar:"docs",previous:{title:"Swagger",permalink:"/docs/workloads/azure/backend/netcore/architecture/swagger_configuration/configure_swagger_netcore"},next:{title:"Testing the API",permalink:"/docs/workloads/azure/backend/netcore/testing/functional_testing_netcore"}},g={},l=[{value:"Configure Swagger UI",id:"configure-swagger-ui",level:2},{value:"Configure the Swagger UI.Interface to consume the generated documents",id:"configure-the-swagger-uiinterface-to-consume-the-generated-documents",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"configure-swagger-ui",children:"Configure Swagger UI"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h3,{id:"configure-the-swagger-uiinterface-to-consume-the-generated-documents",children:"Configure the Swagger UI.Interface to consume the generated documents"}),"\n",(0,r.jsxs)(n.p,{children:["To configure the Swagger UI, spec path along with the name of the spec must be passed in the ",(0,r.jsx)(n.code,{children:"SwaggerEndpoint()"})," method within the ",(0,r.jsx)(n.code,{children:"UseSwaggerUI()"})," extension."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",metastring:'{19} title="Startup.cs"',children:'public class Startup\n{\n    public Startup(IHostingEnvironment env, IConfiguration configuration){... Omit for brevity ...}\n\n    public void ConfigureServices(IServiceCollection services){ ... Omit for brevity ... }\n\n    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.\n    public void Configure(IApplicationBuilder app, IHostingEnvironment env)\n    {\n        app\n            .UseMvc()\n            .UseSwagger()\n            .UseSwaggerUI(c =>\n            {\n                //Display the OperationID (ActionName) in the UI\n                c.DisplayOperationId();\n\n                //Load the document generated by AddSwaggerGen() inside ConfigureServices()\n                c.SwaggerEndpoint("v1/swagger.json", "Menu (version 1)");\n            });\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The above snippet registers the ",(0,r.jsx)(n.code,{children:"v1/swagger.json"})," in the UI. Once the UI is loaded,  the documents registered by ",(0,r.jsx)(n.code,{children:"SwaggerEndpoint()"})," will be loaded."]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.p,{children:["For registering multiple spec versions, simply register multiple document generations by calling the ",(0,r.jsx)(n.code,{children:".AddSwaggerGen(c => ...)"})," multiple times, changing just the document filter from ",(0,r.jsx)(n.code,{children:"/v1"})," to the version desired."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",metastring:'title="Swagger multiple doc spec"',children:'From:\nSwaggerDoc("v1", new Info());\nc.DocumentFilter<VersionPathFilter>("/v1");\n\nTo:\nSwaggerDoc("v2", new Info());\nc.DocumentFilter<VersionPathFilter>("/v2");\n'})}),"\n",(0,r.jsx)(n.p,{children:"And register the new endpoint in the UI like below:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",metastring:'title="Swagger UI registration"',children:'app\n    .UseMvc()\n    .UseSwagger()\n    .UseSwaggerUI(c =>\n    {\n        //Display the OperationID (ActionName) in the UI\n        c.DisplayOperationId();\n\n        //Load the document generated by AddSwaggerGen() inside ConfigureServices()\n        c.SwaggerEndpoint("v1/swagger.json", "Menu (version 1)");\n        c.SwaggerEndpoint("v2/swagger.json", "Menu (version 2)");\n    });\n'})}),"\n",(0,r.jsx)(n.p,{children:"When multiple versions are available, might be useful to register a general spec with all endpoints"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",metastring:'title="Swagger default spec with all endpoints"',children:'SwaggerDoc("all", new Info());\n//c.DocumentFilter<VersionPathFilter>("/v2"); //Remove the filter\n'})}),"\n",(0,r.jsx)(n.p,{children:"Annotate controllers with endpoint details to group in the right spec.\nOpenAPI uses the concept of tags to group endpoints related to the same resource type, each tag will represent a group in the swagger ui."}),"\n",(0,r.jsx)(n.p,{children:"By default, Swagger doc generation creates a tag using the controller name. This way, multiple actions(endpoints) found inside the same controller will be grouped in the same tag."}),"\n",(0,r.jsx)(n.p,{children:"The problem with this approach is that makes it harder to group endpoints if they are located on different controllers. To avoid this problem, Swagger can be configured to group the endpoints by ApiGroup."}),"\n",(0,r.jsx)(n.p,{children:"ApiGroup is a concept introduced in ASP.NET Core. It requires the controller to be decorated with the attribute ApiExplorerSettingsAttribute, the GroupName  to be set to the Tag expected in swagger as below."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",metastring:'title="Controller decorated with Api Group"',children:'[ApiExplorerSettings(GroupName = "Category")]\npublic class AddMenuCategoryController : ControllerBase { ... actions ... }\n'})}),"\n",(0,r.jsxs)(n.p,{children:["To group api endpoints by something other than the default group, change the ",(0,r.jsx)(n.code,{children:"c.DocInclusionPredicate()"})," filter used in the default group, otherwise the endpoints won't be included in the docs."]}),"\n",(0,r.jsxs)(n.p,{children:["To group endpoints pass the group predicate to the method ",(0,r.jsx)(n.code,{children:"c.TagActionsBy()"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The following code has to be added to the swagger doc generation:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",metastring:'title="Swagger configuration for ApiGroup"',children:'services.AddSwaggerGen(c => {\n\n    //By Default, all endpoints are grouped by the controller name\n    //We want to Group by Api Group first, then by controller name if group not provided\n    c.TagActionsBy((api) => new[] { api.GroupName ?? api.ActionDescriptor.RouteValues["controller"] });\n\n    //Include all endpoints available in the document\n    c.DocInclusionPredicate((docName, apiDesc) => { return true; });\n});\n'})}),"\n",(0,r.jsx)(n.p,{children:"The swagger configuration is complete and the swagger ui should be available as below."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Swagger UI",src:t(9585).A+"",width:"1888",height:"1238"})}),"\n",(0,r.jsx)(o.A,{next:!0})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},9557:(e,n,t)=>{t.d(n,{A:()=>o});var r=t(6540),i=t(4848);const o=e=>{let{next:n,prev:t}=e;return r.useEffect((()=>{if(n){const e=document.querySelector("div.pagination-nav__item.pagination-nav__item--next>a");e&&e.style&&(e.style.display="none")}if(t){const e=document.querySelector("div.pagination-nav__item>a");e&&e.style&&(e.style.display="none")}})),(0,i.jsx)("div",{})}},9585:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/swagger-ui-info-6770d7c76d6846ad13f91895148c2c94.png"},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var r=t(6540);const i={},o=r.createContext(i);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);