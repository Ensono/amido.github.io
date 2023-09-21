"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[433],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var l=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=l.createContext({}),p=function(t){var e=l.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},u=function(t){var e=p(t.components);return l.createElement(s.Provider,{value:e},t.children)},d="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},c=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=p(n),c=a,m=d["".concat(s,".").concat(c)]||d[c]||k[c]||o;return n?l.createElement(m,r(r({ref:e},u),{},{components:n})):l.createElement(m,r({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,r=new Array(o);r[0]=c;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[d]="string"==typeof t?t:a,r[1]=i;for(var p=2;p<o;p++)r[p]=n[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8494:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var l=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],i={},s="Project Settings",p={unversionedId:"stackscli/project_settings",id:"stackscli/project_settings",title:"Project Settings",description:"Each project that is supported by the Ensono Stacks CLI have a settings file associated with them. This is called, by default, stackscli.yml. It is possible to override the actual file that is used as well as the filename.",source:"@site/docs/stackscli/project_settings.mdx",sourceDirName:"stackscli",slug:"/stackscli/project_settings",permalink:"/docs/stackscli/project_settings",draft:!1,tags:[],version:"current",frontMatter:{}},u={},d=[{value:"Structure",id:"structure",level:2},{value:"YAML File",id:"yaml-file",level:2},{value:"Examples",id:"examples",level:2},{value:"Setting a default value",id:"setting-a-default-value",level:3}],k={toc:d},c="wrapper";function m(t){var e=t.components,n=(0,a.Z)(t,r);return(0,o.kt)(c,(0,l.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"project-settings"},"Project Settings"),(0,o.kt)("p",null,"Each project that is supported by the Ensono Stacks CLI have a settings file associated with them. This is called, by default, ",(0,o.kt)("inlineCode",{parentName:"p"},"stackscli.yml"),". It is possible to override the actual file that is used as well as the filename."),(0,o.kt)("p",null,"The settings file is intended to allow the project maintainers to define what steps needs to be done on a project and instruct the CLI what to do, without having to refactor the CLI."),(0,o.kt)("h2",{id:"structure"},"Structure"),(0,o.kt)("p",null,"The following table details the structure of the settings file."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Example"),(0,o.kt)("th",{parentName:"tr",align:null},"Allowed Values"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"framework")),(0,o.kt)("td",{parentName:"tr",align:null},"The framework that the project is based on."),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"pipeline")),(0,o.kt)("td",{parentName:"tr",align:null},"This is a list of the supported pipelines and the associated files"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"init.operations")),(0,o.kt)("td",{parentName:"tr",align:null},"List of operations that need to be performed on the temporary project directory"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"setup.operations")),(0,o.kt)("td",{parentName:"tr",align:null},"List of operations that need to be performed on the project directory"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("p",null,"Settings file root structure"),(0,o.kt)("p",null,"The following table shows the options that can be specified for a framework"),(0,o.kt)("table",null,(0,o.kt)("caption",null,"Framework Options"),(0,o.kt)("colgroup",null,(0,o.kt)("col",{style:{width:"25%"}}),(0,o.kt)("col",{style:{width:"25%"}}),(0,o.kt)("col",{style:{width:"25%"}}),(0,o.kt)("col",{style:{width:"25%"}})),(0,o.kt)("thead",null,(0,o.kt)("tr",{className:"header"},(0,o.kt)("th",null,"Parameter"),(0,o.kt)("th",null,"Description"),(0,o.kt)("th",null,"Example"),(0,o.kt)("th",null,"Allowed Values"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",{className:"odd"},(0,o.kt)("td",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"name"))),(0,o.kt)("td",null,(0,o.kt)("p",null,"Name of the framework that this project targets")),(0,o.kt)("td",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"dotnet"),", ",(0,o.kt)("code",null,"java"),", ",(0,o.kt)("code",null,"nx"))),(0,o.kt)("td",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"commands")))),(0,o.kt)("tr",{className:"even"},(0,o.kt)("td",null,(0,o.kt)("p",null,"A list of the commands and the versions that are required for the project"),(0,o.kt)("p",null,"This is a list, so multiple commands and versions can be specified in the yaml file")),(0,o.kt)("td",null),(0,o.kt)("td",null),(0,o.kt)("td",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"commands.name")))),(0,o.kt)("tr",{className:"odd"},(0,o.kt)("td",null,(0,o.kt)("p",null,"Name of the command to be checked")),(0,o.kt)("td",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"dotnet"))),(0,o.kt)("td",null),(0,o.kt)("td",null)),(0,o.kt)("tr",{className:"even"},(0,o.kt)("td",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"commands.version"))),(0,o.kt)("td",null,(0,o.kt)("p",null,"This is a semantic version constraint that the command version must conform to"),(0,o.kt)("p",null,"So to ensure that the ",(0,o.kt)("code",null,"dotnet")," command is version"," ",(0,o.kt)("code",null,"3.1")," the following version string can be used"," ",(0,o.kt)("code",null,">= 3.1, < 3.2"))),(0,o.kt)("td",null,(0,o.kt)("p",null,(0,o.kt)("code",null,">= 3.1, < 3.2"))),(0,o.kt)("td",null,(0,o.kt)("p",null,"Any valid semver constraint"))))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note")),(0,o.kt)("p",{parentName:"blockquote"},"If no command or version is specified then the command that is found on the machine that the CLI is running on will be used without checking.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Important")),(0,o.kt)("p",{parentName:"blockquote"},"It is possible to ignore the results of the version check when the CLI is running by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"force")," option, but remember that it is a destructive operation and it will delete any existing projects that exist in the same path.")),(0,o.kt)("p",null,"Not all version numbers conform to semantic versioning. For example Java tends to add characters to the version number, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"1.8.0_301"),". To get around this the CLI tries to make the version semver compliant by removing the ",(0,o.kt)("inlineCode",{parentName:"p"},"_"),", so the version tested will be ",(0,o.kt)("inlineCode",{parentName:"p"},"1.8.0301")," which is a valid semver."),(0,o.kt)("p",null,"The next table shows the options for the operations."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note")),(0,o.kt)("p",{parentName:"blockquote"},"These are valid for both ",(0,o.kt)("inlineCode",{parentName:"p"},"init")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"setup")," operations")),(0,o.kt)("table",null,(0,o.kt)("caption",null,"Operations parameters"),(0,o.kt)("colgroup",null,(0,o.kt)("col",{style:{width:"25%"}}),(0,o.kt)("col",{style:{width:"25%"}}),(0,o.kt)("col",{style:{width:"25%"}}),(0,o.kt)("col",{style:{width:"25%"}})),(0,o.kt)("thead",null,(0,o.kt)("tr",{className:"header"},(0,o.kt)("th",null,"Parameter"),(0,o.kt)("th",null,"Description"),(0,o.kt)("th",null,"Example"),(0,o.kt)("th",null,"Allowed Values"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",{className:"odd"},(0,o.kt)("td",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"action"))),(0,o.kt)("td",null,(0,o.kt)("p",null,"The type of action that needs to be performed"),(0,o.kt)("p",null,"If ",(0,o.kt)("code",null,"copy")," is specified then no other parameters are required. This only really makes sense when in the ",(0,o.kt)("code",null,"setup")," ","phase of the project. It copy the contents of the downloaded repository to the project directory. This is useful for projects that do not have a templating system, such as"," ",(0,o.kt)("code",null,"stacks-infrastructure-aks"),".")),(0,o.kt)("td",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"cmd"))),(0,o.kt)("td",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"cmd"),", ",(0,o.kt)("code",null,"copy")))),(0,o.kt)("tr",{className:"even"},(0,o.kt)("td",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"cmd"))),(0,o.kt)("td",null,(0,o.kt)("p",null,"The command that needs to be run."),(0,o.kt)("p",null,"Each framework has a set of commands that it knows it can during the setup of the project run. The value that is set here must be specified within that list in order for the command to execute.")),(0,o.kt)("td",null,(0,o.kt)("p",null,"java = ",(0,o.kt)("code",null,"java")),(0,o.kt)("p",null,"dotnet = ",(0,o.kt)("code",null,"dotnet")),(0,o.kt)("p",null,"nx = ",(0,o.kt)("code",null,"npx"))),(0,o.kt)("td",null)),(0,o.kt)("tr",{className:"odd"},(0,o.kt)("td",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"args"))),(0,o.kt)("td",null,(0,o.kt)("p",null,"The arguments that need to be passed to the command")),(0,o.kt)("td",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"new -i ."))),(0,o.kt)("td",null)),(0,o.kt)("tr",{className:"even"},(0,o.kt)("td",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"desc"))),(0,o.kt)("td",null,(0,o.kt)("p",null,"Description of what is being performed. This is output during the execution of the CLI")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Installing template from folder")),(0,o.kt)("td",null)))),(0,o.kt)("p",null,"The follow table shows the values that can be assigned to the pipeline list."),(0,o.kt)("table",null,(0,o.kt)("caption",null,"Pipeline options"),(0,o.kt)("colgroup",null,(0,o.kt)("col",{style:{width:"25%"}}),(0,o.kt)("col",{style:{width:"25%"}}),(0,o.kt)("col",{style:{width:"25%"}}),(0,o.kt)("col",{style:{width:"25%"}})),(0,o.kt)("thead",null,(0,o.kt)("tr",{className:"header"},(0,o.kt)("th",null,"Parameter"),(0,o.kt)("th",null,"Description"),(0,o.kt)("th",null,"Example"),(0,o.kt)("th",null,"Allowed Values"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",{className:"odd"},(0,o.kt)("td",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"type"))),(0,o.kt)("td",null,(0,o.kt)("p",null,"Type of pipeline being configured")),(0,o.kt)("td",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"azdo"))),(0,o.kt)("td",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"azdo")))),(0,o.kt)("tr",{className:"even"},(0,o.kt)("td",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"files"))),(0,o.kt)("td",null,(0,o.kt)("p",null,"List of files that should be worked on."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{href:"#project_settings_file_definition"},"File definition")," ","for syntax")),(0,o.kt)("td",null),(0,o.kt)("td",null)),(0,o.kt)("tr",{className:"odd"},(0,o.kt)("td",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"template"))),(0,o.kt)("td",null,(0,o.kt)("p",null,"List of templates that the CLI should use. At the moment only"," ",(0,o.kt)("code",null,"variable")," is supported.")),(0,o.kt)("td",null),(0,o.kt)("td",null)),(0,o.kt)("tr",{className:"even"},(0,o.kt)("td",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"replacements"))),(0,o.kt)("td",null,(0,o.kt)("p",null,"This is a list of replacements that need to be made in the build file")),(0,o.kt)("td",null),(0,o.kt)("td",null)))),(0,o.kt)("table",null,(0,o.kt)("caption",null,"File definition"),(0,o.kt)("colgroup",null,(0,o.kt)("col",{style:{width:"33%"}}),(0,o.kt)("col",{style:{width:"33%"}}),(0,o.kt)("col",{style:{width:"33%"}})),(0,o.kt)("thead",null,(0,o.kt)("tr",{className:"header"},(0,o.kt)("th",null,"Parameter"),(0,o.kt)("th",null,"Description"),(0,o.kt)("th",null,"Example"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",{className:"odd"},(0,o.kt)("td",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"name"))),(0,o.kt)("td",null,(0,o.kt)("p",null,"Name of the file."),(0,o.kt)("p",null,"The names ",(0,o.kt)("code",null,"build")," and ",(0,o.kt)("code",null,"variable")," are reserved by the CLI and are used when writing out files. Other files can be specified and the replacements will be made on each one."),(0,o.kt)("p",null,"The names must be unique, if not then the last one specified with the same name will take precedence.")),(0,o.kt)("td",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"build")))),(0,o.kt)("tr",{className:"even"},(0,o.kt)("td",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"path"))),(0,o.kt)("td",null,(0,o.kt)("p",null,"Path to the file in question, relative to the repository root")),(0,o.kt)("td",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"build/azDevOps/azure/azure-pipelines-netcore-k8s.yml")))),(0,o.kt)("tr",{className:"odd"},(0,o.kt)("td",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"noreplace"))),(0,o.kt)("td",null,(0,o.kt)("p",null,"If set to ",(0,o.kt)("code",null,"true")," then no replacements will be attempted on this file."),(0,o.kt)("p",null,"This is not supported when used in a ",(0,o.kt)("code",null,"template")," definition.")),(0,o.kt)("td",null,(0,o.kt)("p",null,(0,o.kt)("code",null,"true")))))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note")),(0,o.kt)("p",{parentName:"blockquote"},"If no template is specified for the ",(0,o.kt)("inlineCode",{parentName:"p"},"variable")," then the static version built into the CLI will be used. This can be seen in ",(0,o.kt)("a",{parentName:"p",href:"#azdo_variable_template"},"???"),".")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Example"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"pattern")),(0,o.kt)("td",{parentName:"tr",align:null},"Regular expression pattern for finding the text to be replaced"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"^.*myvalue$"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"value")),(0,o.kt)("td",{parentName:"tr",align:null},"Value to replace the phrase that has been found by the pattern"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Foo Bar"))))),(0,o.kt)("p",null,"Replacement definition"),(0,o.kt)("h2",{id:"yaml-file"},"YAML File"),(0,o.kt)("p",null,"The following code listing shows an example settings file."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example project settings file.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'framework:\n  name: dotnet\n  commands:\n    - name: dotnet\n      version: ">= 3.1, < 3.2"\n\npipeline:\n  - type: azdo\n    files:\n      - name: build\n        path: build/azDevOps/azure/azure-pipelines-netcore-k8s.yml\n      - name: variable\n        path: build/azDevOps/azure/azuredevops-vars.yml\n    replacements:\n      - pattern: ^.*myvalue$\n        value: Foo Bar\n\ninit:\n  operations:\n    - action: cmd\n      args: new stacks-docs -n {{ .Input.Business.Company }}.{{ .Input.Business.Domain }}\n      desc: Create a project using the "stacks-docs" project\n\nsetup:\n  operations:\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Sets the framework that the commands should be run for")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Specify the commands for which the version number should be checked")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The name of the command to get the version number for")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The version constraint that the version number should be checked against")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Specify the pipeline that is being targeted")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Name and path to the build pipeline file in the repository, for the specified pipeline system")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Name and path to the variable template in the repository")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"List of replacements that should be made in the specified build file")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Perform operations on the temporary project directory")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"List any number of operations that need to be performed")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"States the action that needs to be performed")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The arguments that need to be passed to the framework command, in this case ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Description of the operation, this will be displayed in the log output when the CLI is executed")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Define operations that need to be performed after the project has been created"))),(0,o.kt)("p",null,"This example shows one action that needs to be performed on the project before it has been created in the user specified working directory."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"The GO template package is very powerful and allows advanced configuration in a settings file. This section shows some examples of what can be achieved."),(0,o.kt)("h3",{id:"setting-a-default-value"},"Setting a default value"),(0,o.kt)("p",null,"The framework properties that can be specified on a project allow extra information to be specified in the CLI configuration that is passed to the template. This information does not have to be set, but a default value maybe required in the template."),(0,o.kt)("p",null,"For example, in the ",(0,o.kt)("inlineCode",{parentName:"p"},"stacks-dotnet-cqrs-events")," project we need to be able to pass in ",(0,o.kt)("inlineCode",{parentName:"p"},"servicebus")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"eventhub")," based on the selection from the user. However if this selection is not made then the project settings file should still work as expected. It is not possible to default the property to a known value as these properties will be used by other languages, so the value needs to have a default in the template."),(0,o.kt)("p",null,"To achieve this the ",(0,o.kt)("inlineCode",{parentName:"p"},"or")," template function needs to be used. This function takes values and will use the first value that has been set."),(0,o.kt)("p",null,"The following listing shows a snippet of the project settings file for a project."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Setting default value using Go template.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-linenum"},'- action: cmd\n  cmd: dotnet\n  args: new stacks-cqrs-events-app -n {{ .Input.Business.Company }}.{{ .Input.Business.Domain }} -o {{ .Project.Directory.WorkingDir }} -e {{ or .Project.Framework.Properties.Prop1 "servicebus"}}\n')),(0,o.kt)("p",null,"In this example all of the values for the parameters come from the ",(0,o.kt)("inlineCode",{parentName:"p"},".Input")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".Project")," object (as detailed in the ",(0,o.kt)("a",{parentName:"p",href:"#_templating"},"???")," section)."),(0,o.kt)("p",null,"The last parameter to be set is defined as ",(0,o.kt)("inlineCode",{parentName:"p"},'{{ or .Project.Framework.Properties.Prop1 "servicebus" }}'),". This will set the ",(0,o.kt)("inlineCode",{parentName:"p"},"-e"),' parameter to the value set in the property if that is set or default to "servicebus".'))}m.isMDXComponent=!0}}]);