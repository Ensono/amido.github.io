"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[6228],{5632:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>j,frontMatter:()=>c,metadata:()=>l,toc:()=>h});var d=s(4848),r=s(8453);const c={},i="Runtime Configuration",l={id:"stackscli/runtime_config",title:"Runtime Configuration",description:"Configuration for the CLI can be performed in several ways:",source:"@site/docs/stackscli/runtime_config.mdx",sourceDirName:"stackscli",slug:"/stackscli/runtime_config",permalink:"/docs/stackscli/runtime_config",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},t={},h=[{value:"Settings",id:"settings",level:2},{value:"Global Options",id:"global-options",level:3},{value:"Scaffold Options",id:"scaffold-options",level:3},{value:"Command Log Format",id:"command-log-format",level:2},{value:"Configuration File",id:"configuration-file",level:2}];function o(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"runtime-configuration",children:"Runtime Configuration"})}),"\n",(0,d.jsx)(n.p,{children:"Configuration for the CLI can be performed in several ways:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"On the command line"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"Using environment variables"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"Using a configuration file (YAML or JSON)"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"When using a configuration file it is possible to setup more than one project."}),"\n",(0,d.jsx)(n.h2,{id:"settings",children:"Settings"}),"\n",(0,d.jsx)(n.p,{children:"The following tables show the configuration options that are available at the root level and the command level."}),"\n",(0,d.jsx)(n.h3,{id:"global-options",children:"Global Options"}),"\n",(0,d.jsx)(n.p,{children:"The following options can be applied to any command within the Ensono Stacks CLI."}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Option"}),(0,d.jsx)(n.th,{children:"Environment Variable"}),(0,d.jsx)(n.th,{children:"Description"}),(0,d.jsx)(n.th,{children:"Default"}),(0,d.jsx)(n.th,{children:"Options"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"-c"}),", ",(0,d.jsx)(n.code,{children:"--config"})]}),(0,d.jsx)(n.td,{children:"ENSONOSTACKS_CONFIG"}),(0,d.jsx)(n.td,{children:"Path to the configuration file to use"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"-l"}),", ",(0,d.jsx)(n.code,{children:"--loglevel"})]}),(0,d.jsx)(n.td,{children:"ENSONOSTACKS_LOG_LEVEL"}),(0,d.jsx)(n.td,{children:"Level of logging to be used"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"info"})}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"debug"}),", ",(0,d.jsx)(n.code,{children:"info"}),", ",(0,d.jsx)(n.code,{children:"warning"}),", ",(0,d.jsx)(n.code,{children:"error"}),", ",(0,d.jsx)(n.code,{children:"fatal"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"-f"}),", ",(0,d.jsx)(n.code,{children:"--logformat"})]}),(0,d.jsx)(n.td,{children:"ENSONOSTACKS_LOG_FORMAT"}),(0,d.jsx)(n.td,{children:"Output type of the logging"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"text"})}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"text"}),", ",(0,d.jsx)(n.code,{children:"json"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"--logcolour"})}),(0,d.jsx)(n.td,{children:"ENSONOSTACKS_LOG_COLOUR"}),(0,d.jsx)(n.td,{children:"State if logging should include colour"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"--logfile"})}),(0,d.jsx)(n.td,{children:"ENSONOSTACKS_LOG_FILE"}),(0,d.jsx)(n.td,{children:"Write all logs to the specified file"}),(0,d.jsx)(n.td,{}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:"-w"}),", ",(0,d.jsx)(n.code,{children:"--workingdirectory"})]}),(0,d.jsx)(n.td,{children:"ENSONOSTACKS_DIRECTORY_WORKINGDIR"}),(0,d.jsx)(n.td,{children:"Directory that the projects should be created in"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"${PWD}"})}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"--tempdir"})}),(0,d.jsx)(n.td,{children:"ENSONOSTACKS_DIRECTORY_TEMPDIR"}),(0,d.jsx)(n.td,{children:"Directory to be used by Ensono Stacks for its temp files"}),(0,d.jsx)(n.td,{children:"System temp directory"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"--nobanner"})}),(0,d.jsx)(n.td,{children:"ENSONOSTACKS_OPTIONS_NOBANNER"}),(0,d.jsx)(n.td,{children:"Do not display the Ensono Stacks banner when running the command"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"--nocliversion"})}),(0,d.jsx)(n.td,{children:"ENSONOSTACKS_OPTIONS_NOCLIVERSION"}),(0,d.jsx)(n.td,{children:"Do not perform a version check for the latest version of the Ensono Stacks CLI"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})}),(0,d.jsx)(n.td,{})]})]})]}),"\n",(0,d.jsx)(n.p,{children:"Global Options"}),"\n",(0,d.jsx)(n.h3,{id:"scaffold-options",children:"Scaffold Options"}),"\n",(0,d.jsxs)("table",{children:[(0,d.jsx)("caption",{children:"Scaffold Options"}),(0,d.jsxs)("colgroup",{children:[(0,d.jsx)("col",{style:{width:"20%"}}),(0,d.jsx)("col",{style:{width:"20%"}}),(0,d.jsx)("col",{style:{width:"20%"}}),(0,d.jsx)("col",{style:{width:"20%"}}),(0,d.jsx)("col",{style:{width:"20%"}})]}),(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{className:"header",children:[(0,d.jsx)("th",{children:"Option"}),(0,d.jsx)("th",{children:"Environment Variable"}),(0,d.jsx)("th",{children:"Description"}),(0,d.jsx)("th",{children:"Default"}),(0,d.jsx)("th",{children:"Options"})]})}),(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{className:"odd",children:[(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsxs)(n.p,{children:[(0,d.jsx)("code",{children:"-n"}),", ",(0,d.jsx)("code",{children:"--name"})]})})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"ENSONOSTACKS_PROJECT_NAME"})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"Name of the project to create"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{className:"even",children:[(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsx)("code",{children:"--sourcecontrol"})})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"ENSONOSTACKS_PROJECT_SOURCECONTROL_TYPE"})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"Source control system to be used"})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsx)("code",{children:"github"})})}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{className:"odd",children:[(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsxs)(n.p,{children:[(0,d.jsx)("code",{children:"-u"}),", ",(0,d.jsx)("code",{children:"--sourcecontrolurl"})]})})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"ENSONOSTACKS_PROJECT_SOURCECONTROL_URL"})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"URL to the remote repository"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{className:"even",children:[(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsx)("code",{children:"--projectsettingsfile"})})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"ENSONOSTACKS_PROJECT_SETTINGSFILE"})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsxs)(n.p,{children:["Each project will have its own ",(0,d.jsx)("code",{children:"stackscli.yml"})," file,\nhowever this can ber overridden with a path to a different file using\nthis option"]})})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsx)("code",{children:"null"})})}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{className:"odd",children:[(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsxs)(n.p,{children:[(0,d.jsx)("code",{children:"-F"}),", ",(0,d.jsx)("code",{children:"--framework"})]})})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"ENSONOSTACKS_PROJECT_FRAMEWORK_TYPE"})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"The framework that is to be used"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsxs)(n.p,{children:[(0,d.jsx)("code",{children:"dotnet"}),", ",(0,d.jsx)("code",{children:"java"}),", ",(0,d.jsx)("code",{children:"nx"})]})})})]}),(0,d.jsxs)("tr",{className:"even",children:[(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsxs)(n.p,{children:[(0,d.jsx)("code",{children:"-O"}),", ",(0,d.jsx)("code",{children:"--frameworkoption"})]})})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"ENSONOSTACKS_PROJECT_FRAMEWORK_OPTION"})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"The sort of project to be created"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsxs)(n.p,{children:[(0,d.jsx)("code",{children:"webapi"}),", ",(0,d.jsx)("code",{children:"cqrs"}),", ",(0,d.jsx)("code",{children:"events"})]})})})]}),(0,d.jsxs)("tr",{className:"odd",children:[(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsxs)(n.p,{children:[(0,d.jsx)("code",{children:"-V"}),", ",(0,d.jsx)("code",{children:"--frameworkversion"})]})})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"ENSONOSTACKS_PROJECT_FRAMEWORK_VERSION"})}),(0,d.jsxs)("td",{children:[(0,d.jsx)("p",{children:"The version of the Ensono Stacks project to use."}),(0,d.jsx)("p",{children:"This can be a version, a tag, a SHA ref or a branch."})]}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsx)("code",{children:"latest"})})}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{className:"even",children:[(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsx)("code",{children:"--frameworkprop1"})})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"ENSONOSTACKS_PROJECT_FRAMEWORK_PROPERTIES_PROP1"})}),(0,d.jsxs)("td",{children:[(0,d.jsx)("p",{children:(0,d.jsx)(n.p,{children:"Properties that need to be set to allow the scaffolding to run the\ncorrect command"})}),(0,d.jsx)("p",{children:(0,d.jsx)(n.p,{children:"The project settings file will be defined by the project maintainers,\nbut will may specify that a property needs to be set."})})]}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{className:"odd",children:[(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsx)("code",{children:"--frameworkprop2"})})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"ENSONOSTACKS_PROJECT_FRAMEWORK_PROPERTIES_PROP2"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{className:"even",children:[(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsx)("code",{children:"--frameworkprop3"})})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"ENSONOSTACKS_PROJECT_FRAMEWORK_PROPERTIES_PROP3"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{className:"odd",children:[(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsx)("code",{children:"--frameworkprop4"})})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"ENSONOSTACKS_PROJECT_FRAMEWORK_PROPERTIES_PROP5"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{className:"even",children:[(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsx)("code",{children:"--frameworkprop5"})})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"ENSONOSTACKS_PROJECT_FRAMEWORK_PROPERTIES_PROP5"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{className:"odd",children:[(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsxs)(n.p,{children:[(0,d.jsx)("code",{children:"-P"}),", ",(0,d.jsx)("code",{children:"--platformtype"})]})})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"ENSONOSTACKS_PLATFORM_TYPE"})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"Platform being deployed to"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsx)("code",{children:"aks"})})})]}),(0,d.jsxs)("tr",{className:"even",children:[(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsxs)(n.p,{children:[(0,d.jsx)("code",{children:"-p"}),", ",(0,d.jsx)("code",{children:"--pipeline"})]})})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"ENSONOSTACKS_PIPELINE"})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"Pipeline being used to build the project"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsx)("code",{children:"azdo"})})})]}),(0,d.jsxs)("tr",{className:"odd",children:[(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsxs)(n.p,{children:[(0,d.jsx)("code",{children:"-C"}),", ",(0,d.jsx)("code",{children:"--cloud"})]})})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"ENSONOSTACKS_CLOUD"})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"Cloud platform being used"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsxs)(n.p,{children:[(0,d.jsx)("code",{children:"azure"}),", ",(0,d.jsx)("code",{children:"aws"}),", ",(0,d.jsx)("code",{children:"gcp"})]})})})]}),(0,d.jsxs)("tr",{className:"even",children:[(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsxs)(n.p,{children:[(0,d.jsx)("code",{children:"-R"}),", ",(0,d.jsx)("code",{children:"--cloudregion"})]})})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"ENSONOSTACKS_CLOUD_REGION"})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"Region that the project will be deployed to"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{className:"odd",children:[(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsxs)(n.p,{children:[(0,d.jsx)("code",{children:"-G"}),", ",(0,d.jsx)("code",{children:"--cloudgroup"})]})})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"ENSONOSTACKS_CLOUD_GROUP"})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"Group in the cloud platform that will hold all the resources"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{className:"even",children:[(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsx)("code",{children:"--company"})})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"ENSONOSTACKS_BUSINESS_COMPANY"})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"Name of your company or organisation"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{className:"odd",children:[(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsxs)(n.p,{children:[(0,d.jsx)("code",{children:"-A"}),", ",(0,d.jsx)("code",{children:"--area"})]})})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"ENSONOSTACKS_BUSINESS_DOMAIN"})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"Area of the company that is responsible for the project"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{className:"even",children:[(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsx)("code",{children:"--component"})})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"ENSONOSTACKS_BUSINESS_COMPONENT"})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"Component of the overall project"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{className:"odd",children:[(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsx)("code",{children:"--tfstorage"})})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"ENSONOSTACKS_TERRAFORM_BACKEND_STORAGE"})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"Name of the storage account being used for the state"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{className:"even",children:[(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsx)("code",{children:"--tfgroup"})})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"ENSONOSTACKS_TERRAFORM_BACKEND_GROUP"})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"Group name of the storage account"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{className:"odd",children:[(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsx)("code",{children:"--tfcontainer"})})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"ENSONOSTACKS_TERRAFORM_BACKEND_CONTAINER"})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"Container being used to store the data"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{className:"even",children:[(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsxs)(n.p,{children:[(0,d.jsx)("code",{children:"-d"}),", ",(0,d.jsx)("code",{children:"--domain"})]})})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"ENSONOSTACKS_NETWORK_BASE_DOMAIN_EXTERNAL"})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"External domain root to be used for the projects"})}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{className:"odd",children:[(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsx)("code",{children:"--internaldomain"})})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"ENSONOSTACKS_NETWORK_BASE_DOMAIN_INTERNAL"})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"Internal domain root to be used for projects."})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsxs)(n.p,{children:["If not specified then the internal domain will be inferred from the\nexternal by replacing the TLD with ",(0,d.jsx)("code",{children:"internal"}),". Thus if"," ","\n",(0,d.jsx)("code",{children:"mydomain.com"})," is provided as the external domain then the\ninternal will be set to ",(0,d.jsx)("code",{children:"mydomain.internal"}),"."]})})}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{className:"even",children:[(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsx)("code",{children:"--cmdlog"})})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"ENSONOSTACKS_OPTIONS_CMDLOG"})}),(0,d.jsxs)("td",{children:[(0,d.jsx)("p",{children:(0,d.jsx)(n.p,{children:"Create a log file of all the commands that have been run during the\nscaffold process"})}),(0,d.jsx)("p",{children:(0,d.jsxs)(n.p,{children:["The command log is create in the current directory with the filename"," ","\n",(0,d.jsx)("code",{children:"cmdlog.txt"})]})})]}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsx)("code",{children:"false"})})}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{className:"odd",children:[(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsx)("code",{children:"--dryrun"})})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"ENSONOSTACKS_OPTIONS_DRYRUN"})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsx)(n.p,{children:"Perform a dry run of the scaffold process. Useful for checking that\nthings will be setup as required. No operations will be performed on\nthe machine when run in this mode"})})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsx)("code",{children:"false"})})}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{className:"even",children:[(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsx)("code",{children:"--settingsfile"})})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"ENSONOSTACKS_SETTINGSFILE"})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"Name of the file to look for in the project"})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsx)("code",{children:"stackscli.yml"})})}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{className:"odd",children:[(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsx)("code",{children:"--cmdlog"})})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"ENSONOSTACKS_CMDLOG"})}),(0,d.jsxs)("td",{children:[(0,d.jsx)("p",{children:"Generate a log of all the commands that the CLI has run."}),(0,d.jsx)("p",{children:(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)("code",{children:"cmdlog.txt"})," file is created in the directory that the\nCLI has been run in."]})})]}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsx)("code",{children:"false"})})}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{className:"even",children:[(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsx)("code",{children:"--dryrun"})})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"ENSONOSTACKS_DRYRUN"})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsxs)(n.p,{children:["Perform a dryrun of all the CLI. Particularly useful when used with"," ","\n",(0,d.jsx)("code",{children:"--cmdlog"})]})})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsx)("code",{children:"false"})})}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{className:"odd",children:[(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsx)("code",{children:"--save"})})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"ENSONOSTACKS_SAVE"})}),(0,d.jsxs)("td",{children:[(0,d.jsx)("p",{children:(0,d.jsx)(n.p,{children:"If using the interactive or command line mode for configuring the CLI,\nthe given configuration can be saved to a file. This allows the\nconfiguration to be replayed again at a later date."})}),(0,d.jsx)("p",{children:(0,d.jsxs)(n.p,{children:["The configuration is saved to ",(0,d.jsx)("code",{children:"stacks.yml"})," in the specified\nworking directory"]})})]}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsx)("code",{children:"false"})})}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{className:"even",children:[(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsx)("code",{children:"--nocleanup"})})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"ENSONOSTACKS_NOCLEANUP"})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsx)(n.p,{children:"Do not perform cleanup operations after the scaffoling has been\ncompleted"})})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsx)("code",{children:"false"})})}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{className:"odd",children:[(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsx)("code",{children:"--force"})})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:"ENSONOSTACKS_FORCE"})}),(0,d.jsxs)("td",{children:[(0,d.jsx)("p",{children:(0,d.jsx)("strong",{children:"This is a destructive operation"})}),(0,d.jsx)("p",{children:(0,d.jsxs)(n.p,{children:["By using ",(0,d.jsx)("code",{children:"force"})," the CLI will delete any projects, of the\nsame name, that already exist in the working directory and then create\nthe new project in its place."]})}),(0,d.jsx)("p",{children:(0,d.jsxs)(n.p,{children:["It will also continue to run if the command version checks fail. For\nexample if the project calls for ",(0,d.jsx)("code",{children:"dotnet"})," version 3.1 and\nyou have 5.0.303, the CLI would not normally continue, but with"," ","\n",(0,d.jsx)("code",{children:"force"})," this will be ignored and the process will continue."]})})]}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{children:(0,d.jsx)("code",{children:"false"})})}),(0,d.jsx)("td",{})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"command-log-format",children:"Command Log Format"}),"\n",(0,d.jsxs)(n.p,{children:["If the command log has been enabled, using ",(0,d.jsx)(n.code,{children:"--cmdlog"}),", a file with all the commands that have been run during the scaffolding operation will be generated. The format of this file is as follows:"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"[<DIR>] <CMD> <ARGS>"})}),"\n",(0,d.jsx)(n.p,{children:"The <DIR> shows in which directory the command has been run in. Please note that this directory may have been deleted after the CLI has been run as it was temporary."}),"\n",(0,d.jsx)(n.p,{children:"The <CMD> and <ARGS> show the command that was run and the arguments that were passed to it."}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Note"})}),"\n",(0,d.jsxs)(n.p,{children:["On Windows based machines the <CMD> will be prefixed with ",(0,d.jsx)(n.code,{children:"cmd /C"})," which tells the CLI how to run the command. PowerShell has not yet been used as it is easy to customise the shell and those customisations may cause the CLI to fail when running the commands."]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"configuration-file",children:"Configuration File"}),"\n",(0,d.jsx)(n.p,{children:"The following shows an example of a configuration file that can be passed to the command."}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"CLI Configuration File."})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-yaml",children:"project:\n  - name: tigerfest\n    framework:\n      option: webapi\n      version: latest\n    platform:\n      type: aks\n    sourcecontrol:\n      type: github\n      url: https://github.com/russellseymour/my-new-project.git\n\npipeline: azdo\n\ncloud:\n  platform: azure\n  region: ukwest\n  group: a-new-resource-group\n\nbusiness:\n  company: MyCompany\n  domain: core\n  component: infra\n\nterraform:\n  backend:\n    storage: adfsdafsdfsdf\n    group: Stacks-Ancillary-Resources\n    container: tfstate\n\nnetwork:\n  base:\n    domain:\n      external: mydomain.com\n\nlog:\n  level: info\n\noptions:\n  cmdlog: false\n  dryrun: false\n\nstacks:\n  dotnet:\n    webapi:\n      url: https://github.com/Ensono/stacks-dotnet\n      trunk: master\n"})}),"\n",(0,d.jsx)(n.p,{children:"Note that when using the configuration file it is possible to specify multiple projects to be configured. This allows several projects to be setup at the same time, without having to run the command multiple times. Each project will be created within the specified working directory."}),"\n",(0,d.jsxs)(n.p,{children:["If this file was called ",(0,d.jsx)(n.code,{children:"conf.yml"})," the command to run to consume the file would be:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:".\\stacks-cli.exe scaffold -c .\\local\\conf.yml\n"})})]})}function j(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var d=s(6540);const r={},c=d.createContext(r);function i(e){const n=d.useContext(c);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),d.createElement(c.Provider,{value:n},e.children)}}}]);