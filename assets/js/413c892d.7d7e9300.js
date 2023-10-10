"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[3145],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return f}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return a?r.createElement(f,l(l({ref:t},d),{},{components:a})):r.createElement(f,l({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6532:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),l=["components"],i={id:"generate_project",title:"Generate a data project",sidebar_label:"1. Generate a data project",hide_title:!1,hide_table_of_contents:!1,description:"Generate a new data project using Ensono Stacks",keywords:["stacks cli","data","azure","template"]},s=void 0,p={unversionedId:"workloads/azure/data/getting_started/generate_project",id:"workloads/azure/data/getting_started/generate_project",title:"Generate a data project",description:"Generate a new data project using Ensono Stacks",source:"@site/docs/workloads/azure/data/getting_started/generate_project.md",sourceDirName:"workloads/azure/data/getting_started",slug:"/workloads/azure/data/getting_started/generate_project",permalink:"/docs/workloads/azure/data/getting_started/generate_project",draft:!1,tags:[],version:"current",frontMatter:{id:"generate_project",title:"Generate a data project",sidebar_label:"1. Generate a data project",hide_title:!1,hide_table_of_contents:!1,description:"Generate a new data project using Ensono Stacks",keywords:["stacks cli","data","azure","template"]},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/workloads/azure/data/getting_started/"},next:{title:"2. Infrastructure Deployment",permalink:"/docs/workloads/azure/data/getting_started/core_data_platform_deployment_azure"}},d={},c=[{value:"Step 1: Install the Ensono Stacks CLI",id:"step-1-install-the-ensono-stacks-cli",level:2},{value:"Step 2: Prepare the project config",id:"step-2-prepare-the-project-config",level:2},{value:"Step 3: Scaffold the project",id:"step-3-scaffold-the-project",level:2},{value:"Step 4: Push the project to remote repository",id:"step-4-push-the-project-to-remote-repository",level:2},{value:"Next steps",id:"next-steps",level:2}],u={toc:c},m="wrapper";function f(e){var t=e.components,a=(0,n.Z)(e,l);return(0,o.kt)(m,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section provides an overview of scaffolding and generating a new Data Platform project using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/stackscli/about"},"Ensono Stacks CLI"),"."),(0,o.kt)("p",null,"It assumes the following ",(0,o.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/getting_started/requirements_data_azure"},"requirements")," are in place:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("a",{parentName:"li",href:"/docs/workloads/azure/data/getting_started/requirements_data_azure#git-repository"},"remote git repository")," for hosting the generated project"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/workloads/azure/data/getting_started/requirements_data_azure#terraform-state-storage"},"Terraform state storage"))),(0,o.kt)("h2",{id:"step-1-install-the-ensono-stacks-cli"},"Step 1: Install the Ensono Stacks CLI"),(0,o.kt)("p",null,"Download and install the ",(0,o.kt)("a",{parentName:"p",href:"/docs/stackscli/about"},"Ensono Stacks CLI"),".\nPlease refer to the ",(0,o.kt)("strong",{parentName:"p"},"Stacks.CLI.Manual")," in the latest ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ensono/stacks-cli/releases"},"stacks-cli release")," for detailed instructions."),(0,o.kt)("h2",{id:"step-2-prepare-the-project-config"},"Step 2: Prepare the project config"),(0,o.kt)("p",null,"We will be using the ",(0,o.kt)("inlineCode",{parentName:"p"},"stacks-cli scaffold")," command to generate a new data project. The scaffold command takes a YAML configuration file, defining the project."),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Ensono/stacks-azure-data/blob/main/stacks-cli/data-scaffold-example.yml"},"sample data project config file")," is provided. Prepare a copy of this file, and update the following entries as required for your new project:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Config field"),(0,o.kt)("th",{parentName:"tr",align:null},"Example value"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"directory.working"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"stacks")),(0,o.kt)("td",{parentName:"tr",align:null},"Target directory for the scaffolded project.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"directory.export"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"~")),(0,o.kt)("td",{parentName:"tr",align:null},"Path to your Ensono Stacks CLI installation.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"business.company"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"mycompany")),(0,o.kt)("td",{parentName:"tr",align:null},"Used for resource naming.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"business.domain"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"mydomain")),(0,o.kt)("td",{parentName:"tr",align:null},"Used for environment & Terraform state key naming.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"business.component"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"data")),(0,o.kt)("td",{parentName:"tr",align:null},"Used for resource naming.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"project.name"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"stacks-data-platform")),(0,o.kt)("td",{parentName:"tr",align:null},"Name of project created & used for resource naming.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"project.sourcecontrol.type"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"github")),(0,o.kt)("td",{parentName:"tr",align:null},"Remote repository type.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"project.sourcecontrol.url"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"https://github.com/mycompany/stacks-data-platform")),(0,o.kt)("td",{parentName:"tr",align:null},"Used for setting up the remote repository - see ",(0,o.kt)("a",{parentName:"td",href:"/docs/workloads/azure/data/getting_started/requirements_data_azure#git-repository"},"Git repository"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"project.cloud.region"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ukwest")),(0,o.kt)("td",{parentName:"tr",align:null},"The Azure region you'll be deploying into. Using the Azure CLI, you can use ",(0,o.kt)("inlineCode",{parentName:"td"},"az account list-locations -o Table")," to see available region names.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"terraform.backend.storage"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"tfstorage")),(0,o.kt)("td",{parentName:"tr",align:null},"Storage account name for Terraform state - see ",(0,o.kt)("a",{parentName:"td",href:"/docs/workloads/azure/data/getting_started/requirements_data_azure#terraform-state-storage"},"Terraform state storage"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"terraform.backend.group"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"tfgroup")),(0,o.kt)("td",{parentName:"tr",align:null},"Resource group account name for Terraform state.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"terraform.backend.container"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"tfcontainer")),(0,o.kt)("td",{parentName:"tr",align:null},"Container name account name for Terraform state.")))),(0,o.kt)("p",null,"All other values can be left as they are. For full documentation of all fields in the config file, refer to the Stacks CLI Manual."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Alternatively, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"stacks-cli interactive")," command to generate a YAML configuration file by answering a series of questions. See the Stacks CLI Manual for further information.")),(0,o.kt)("h2",{id:"step-3-scaffold-the-project"},"Step 3: Scaffold the project"),(0,o.kt)("p",null,"You will now pass the prepared config file to the Ensono Stacks scaffold command, and your project will be generated. Run the following, replacing ",(0,o.kt)("inlineCode",{parentName:"p"},"./data-scaffold-config.yml")," with the path to your config file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"stacks-cli scaffold -c ./data-scaffold-config.yml\n")),(0,o.kt)("p",null,"If successful, the new project will now be available in the directory provided in the ",(0,o.kt)("inlineCode",{parentName:"p"},"directory.working")," field. Navigate to the generated project's directory and review the contents."),(0,o.kt)("h2",{id:"step-4-push-the-project-to-remote-repository"},"Step 4: Push the project to remote repository"),(0,o.kt)("p",null,"Now the project has been generated, it can be pushed to the target remote repository. By default, scaffolded project will be configured to use the remote repo URL that was defined in the config file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n# Confirm the correct remote repository has been set\ngit remote show origin\n\n# If required, set your local branch to main\ngit branch -M main\n\n# Push your scaffolded project to the remote repository\ngit push -u origin main\n\n")),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"Now you have generated a new data project, ",(0,o.kt)("a",{parentName:"p",href:"/docs/workloads/azure/data/getting_started/core_data_platform_deployment_azure"},"deploy the core infrastructure"),"."))}f.isMDXComponent=!0}}]);