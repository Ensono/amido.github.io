(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{160:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(6),o=(a(0),a(207)),i=a(218),c={id:"dependency_messaging_java",title:"Stacks Core Messaging module",sidebar_label:"Core Messaging module",hide_title:!1,hide_table_of_contents:!0,keywords:["java","maven","module","modularity","archetype","messaging"]},l={unversionedId:"workloads/azure/backend/java/architecture/dependency_messaging_java",id:"workloads/azure/backend/java/architecture/dependency_messaging_java",isDocsHomePage:!1,title:"Stacks Core Messaging module",description:"import {siteVariables} from '@site/versions';",source:"@site/docs/workloads/azure/backend/java/architecture/dependency_messaging_java.md",slug:"/workloads/azure/backend/java/architecture/dependency_messaging_java",permalink:"/docs/workloads/azure/backend/java/architecture/dependency_messaging_java",version:"current",sidebar_label:"Core Messaging module",sidebar:"docs",previous:{title:"Stacks Core CQRS module",permalink:"/docs/workloads/azure/backend/java/architecture/dependency_cqrs_java"},next:{title:"Stacks Azure CosmosDB module",permalink:"/docs/workloads/azure/backend/java/architecture/dependency_cosmos_java"}},s=[{value:"Module Overview",id:"module-overview",children:[]},{value:"Module Structure",id:"module-structure",children:[{value:"Project structure",id:"project-structure",children:[]}]},{value:"How to use",id:"how-to-use",children:[{value:"Use it as a dependency",id:"use-it-as-a-dependency",children:[]},{value:"Localized solution using Maven Archetypes",id:"localized-solution-using-maven-archetypes",children:[]},{value:"Building the module locally from this repository",id:"building-the-module-locally-from-this-repository",children:[]},{value:"Creating an Archetype from this repository",id:"creating-an-archetype-from-this-repository",children:[]}]},{value:"Accessing Artifactory",id:"accessing-artifactory",children:[]}],p={rightToc:s};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"module-overview"},"Module Overview"),Object(o.b)("p",null,"This module provides basic functionality to handle event management in an application. It contains the\nbase class for ",Object(o.b)("inlineCode",{parentName:"p"},"ApplicationEvent")," instances as showcased in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/amido/stacks-java-cqrs-events/"}),"Stacks workflow with CQRS and Events"),"\nas well as base classes to construct publishers and listeners. There is also a decorated publisher class\nthat also initialises a listener."),Object(o.b)("h2",{id:"module-structure"},"Module Structure"),Object(o.b)("p",null,"In the following diagram, you can see all the relevant files of this module. Be aware, pulling from\nthe repository will have some extra files that are not relevant to the logic but required to build and\ndeploy."),Object(o.b)("h3",{id:"project-structure"},"Project structure"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"java\n\\_.mvn\n: |_settings.xml\n|_archetype.properties\n|_pom.xml\n\\_src\n: \\_main\n:   \\_java\n:    \\_com.amido.stacks.core.messaging\n:     \\_event\n:      |_ApplicationEvent.java\n:     \\_listen\n:      |_ApplicationEventListener.java\n:      |_DefaultEventListeener.java\n:     \\_publish\n:      |_ApplicationEventPublisher.java\n:      |_ApplicationEventPublisherWithListener.java\n:      |_DefaultEventPublisher.java\n")),Object(o.b)("h2",{id:"how-to-use"},"How to use"),Object(o.b)("p",null,"There are four ways to integrate this module into your project:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Use it as a ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#use-it-as-a-dependency"}),"dependency")),Object(o.b)("li",{parentName:"ul"},"Create a localized solution using ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#localized-solution-using-maven-archetypes"}),"Maven Archetypes artifacts")," available in our Artifactory repo"),Object(o.b)("li",{parentName:"ul"},"Clone this repo, ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#building-the-module-locally-from-this-repository"}),"locally build")," and use it as a Maven dependency"),Object(o.b)("li",{parentName:"ul"},"Clone this repo, create a ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#creating-an-archetype-from-this-repository"}),"custom archetype")," and then use it as a Maven dependency")),Object(o.b)("h3",{id:"use-it-as-a-dependency"},"Use it as a dependency"),Object(o.b)("h4",{id:"maven"},"Maven"),Object(o.b)("p",null,"In the ",Object(o.b)("inlineCode",{parentName:"p"},"dependencies")," section of your application's ",Object(o.b)("inlineCode",{parentName:"p"},"pom.xml")," add:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>com.amido.stacks.modules</groupId>\n    <artifactId>stacks-core-messaging</artifactId>\n    <version>"+i.a.javaMessagingVersion+"</version>\n</dependency>\n")),Object(o.b)("p",null,"Then you can do a ",Object(o.b)("inlineCode",{parentName:"p"},"./mvnw clean compile")," to fetch it; after that, you can use it like any other dependency."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"./mvnw clean compile\n")),Object(o.b)("h4",{id:"others"},"Others"),Object(o.b)("p",null,"Use it as you'd use any dependency in your build tool."),Object(o.b)("h3",{id:"localized-solution-using-maven-archetypes"},"Localized solution using Maven Archetypes"),Object(o.b)("p",null,"If you wish to customise the module and use your organisation's namespaces instead of Amido's. You can create a\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://maven.apache.org/archetype/index.html"}),"Maven archetype"),". Archetype is Maven's tool for\nscaffolding and offers lots of extra functionality. We suggest spending some time looking into them. We use Archetype to create a template and enable you to adopt this module under your organisation's namespace.\nTo use the deployed archetypes:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Make and move to a new folder")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Then run"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"mvn archetype:generate \\\n    -DarchetypeGroupId='com.amido.stacks.modules' \\\n    -DarchetypeArtifactId='stacks-core-messaging-archetype' \\\n    -DarchetypeVersion='<archetype version>' \\\n    -DgroupId='<your-group-id>' \\\n    -DartifactId='<your-artifact-id>' \\\n    -Dversion='<your-version>' \\\n    -Dpackage='<package-name>'\n")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"<your-group-id>")," is a placeholder for your group ID"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"<your-artifact-id>")," is a placeholder for your artefact ID"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"<your-version>")," is a placeholder for your version"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"<package-name>")," is a placeholder for the root package name and structure. It should start with your ",Object(o.b)("inlineCode",{parentName:"li"},"groupdId")," and continue with the name of the root package.")),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},"For example, using ",Object(o.b)("inlineCode",{parentName:"p"},"-DgroupId=com.test")," and ",Object(o.b)("inlineCode",{parentName:"p"},"-Dpackage=com.test.stacks")," will instruct Maven to place the code in ",Object(o.b)("inlineCode",{parentName:"p"},"src/main/java/com/test/stacks")," and update all the relevant references accordingly (i.e. ",Object(o.b)("inlineCode",{parentName:"p"},"imports"),")"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Go to the ",Object(o.b)("inlineCode",{parentName:"p"},"pom.xml")," file of the project you'll be using this module in and add it as a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#use-it-as-a-dependency"}),"dependency")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example"),": Using ",Object(o.b)("inlineCode",{parentName:"p"},"-DgroupId=com.test")," and ",Object(o.b)("inlineCode",{parentName:"p"},"-Dpackage=com.test.stacks")," will instruct Maven to place the code in ",Object(o.b)("inlineCode",{parentName:"p"},"src/main/java/com/test/stacks")," and update all the relevant references accordingly (i.e. ",Object(o.b)("inlineCode",{parentName:"p"},"imports"),")"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"If you previously had used this module under different namespace (i.e. the default ",Object(o.b)("inlineCode",{parentName:"strong"},"com.amido.stacks.core-messaging"),"):")),Object(o.b)("p",{parentName:"blockquote"},"Maven ONLY updates the imports for the module you generated. Any references in other projects will remain to the previous namespace."),Object(o.b)("p",{parentName:"blockquote"},"You will need to"),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"Update them manually"),Object(o.b)("li",{parentName:"ul"},"Re-create the relevant ",Object(o.b)("inlineCode",{parentName:"li"},"import")," statements to use the new-made module instead"),Object(o.b)("li",{parentName:"ul"},"If you plan to use this with Amido Stacks, include your namespace in the ",Object(o.b)("inlineCode",{parentName:"li"},"@ComponentScan")," annotation of the ",Object(o.b)("inlineCode",{parentName:"li"},"Application")," class."))),Object(o.b)("h3",{id:"building-the-module-locally-from-this-repository"},"Building the module locally from this repository"),Object(o.b)("p",null,"To build the module locally:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Clone this repo"),Object(o.b)("li",{parentName:"ol"},"Navigate to the ",Object(o.b)("inlineCode",{parentName:"li"},"java")," folder"),Object(o.b)("li",{parentName:"ol"},"run ",Object(o.b)("inlineCode",{parentName:"li"},"./mvnw clean install")," to install the module locally."),Object(o.b)("li",{parentName:"ol"},"Add it as any other ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#use-it-as-a-dependency"}),"dependency"))),Object(o.b)("h3",{id:"creating-an-archetype-from-this-repository"},"Creating an Archetype from this repository"),Object(o.b)("p",null,"If you wish to customise the module and use your organisation's namespaces instead of Amido's. You can create a\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://maven.apache.org/archetype/index.html"}),"Maven archetype"),". Archetype is Maven's tool for\nscaffolding and offers lots of extra functionality. We suggest spending some time looking into them. We use Archetype to create a template and enable you to adopt this module under your organisation's namespace.\nTo use the deployed archetypes:\nTo build, install and use the archetype follow these steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Clone this repo")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Navigate to the ",Object(o.b)("inlineCode",{parentName:"p"},"<directory you cloned the project into>/java")," in the terminal")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Then issue the following Maven commands, using the included wrapper:"),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create the archetype from the existing code"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"./mvnw archetype:create-from-project -DpropertyFile='./archetype.properties'\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Navigate to the folder it was created in"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cd target/generated-sources/archetype\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Install the archetype locally"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"..\\..\\..\\mvnw install\n"))))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Make and navigate to a directory in which you'd like to create the localized project, ideally outside this project's root folder")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"To create the project, use the command below:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"<path-to-mvn-executable>/mvnw archetype:generate \\\n    -DarchetypeGroupId='com.amido' \\\n    -DarchetypeArtifactId='stacks-core-messaging' \\\n    -DarchetypeVersion='1.0.0-SNAPSHOT' \\\n    -DgroupId='<your-group-id>' \\\n    -DartifactId='<your-artifact-id>' \\\n    -Dversion='<your-version>' \\\n    -Dpackage='<package-name>'`\n")),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"<your-group-id>")," is a placeholder for your group ID"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"<your-artifact-id>")," is a placeholder for your artefact ID"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"<your-version>")," is a placeholder for your version"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"<package-name>")," is a placeholder for the root package name and structure. It should start with your ",Object(o.b)("inlineCode",{parentName:"li"},"groupdId")," and continue with the name of the root package.",Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},"For example, using ",Object(o.b)("inlineCode",{parentName:"p"},"-DgroupId=com.test")," and ",Object(o.b)("inlineCode",{parentName:"p"},"-Dpackage=com.test.stacks")," will instruct Maven to place the code in ",Object(o.b)("inlineCode",{parentName:"p"},"src/main/java/com/test/stacks")," and update all the relevant references accordingly (i.e. ",Object(o.b)("inlineCode",{parentName:"p"},"imports"),")"))))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Go to the ",Object(o.b)("inlineCode",{parentName:"p"},"pom.xml")," file of the project you'll be using this module in and add it as a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#use-it-as-a-dependency"}),"dependency")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example"),": Using ",Object(o.b)("inlineCode",{parentName:"p"},"-DgroupId=com.test")," and ",Object(o.b)("inlineCode",{parentName:"p"},"-Dpackage=com.test.stacks")," will instruct Maven to place the code in ",Object(o.b)("inlineCode",{parentName:"p"},"src/main/java/com/test/stacks")," and update all the relevant references accordingly (i.e. ",Object(o.b)("inlineCode",{parentName:"p"},"imports"),")"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"If you previously had used this module under different namespace (i.e. the default ",Object(o.b)("inlineCode",{parentName:"strong"},"com.amido.stacks.core-messaging"),"):")),Object(o.b)("p",{parentName:"blockquote"},"Maven ONLY updates the imports for the module you generated. Any references in other projects will remain to the previous namespace."),Object(o.b)("p",{parentName:"blockquote"},"You will need to"),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"Update them manually"),Object(o.b)("li",{parentName:"ul"},"Re-create the relevant ",Object(o.b)("inlineCode",{parentName:"li"},"import")," statements to use the new-made module instead"),Object(o.b)("li",{parentName:"ul"},"If you plan to use this with Amido Stacks, include your namespace in the ",Object(o.b)("inlineCode",{parentName:"li"},"@ComponentScan")," annotation of the ",Object(o.b)("inlineCode",{parentName:"li"},"Application")," class."))),Object(o.b)("h2",{id:"accessing-artifactory"},"Accessing Artifactory"),Object(o.b)("p",null,"Our artefacts and archetypes get hosted on an Artifactory repository. To use either, from a project\nother than Amido Stacks, you will need to add that repo in your ",Object(o.b)("inlineCode",{parentName:"p"},"pom.xml"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),"<repositories>\n    <repository>\n        <snapshots />\n        <id>snapshots</id>\n        <name>default-maven-virtual</name>\n        <url>https://amidostacks.jfrog.io/artifactory/default-maven-virtual</url>\n    </repository>\n</repositories>\n")),Object(o.b)("p",null,"Alternatively, you can also add this configuration as a profile in your Maven's ",Object(o.b)("inlineCode",{parentName:"p"},"settings.xml")," file\nin the ",Object(o.b)("inlineCode",{parentName:"p"},".m2")," folder in your home directory (any OS):"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),"<profiles>\n    <profile>\n        <repositories>\n            <repository>\n                <snapshots/>\n                <id>snapshots</id>\n                <name>default-maven-virtual</name>\n                <url>https://amidostacks.jfrog.io/artifactory/default-maven-virtual</url>\n            </repository>\n        </repositories>\n        <id>artifactory</id>\n    </profile>\n</profiles>\n\n<activeProfiles>\n    <activeProfile>artifactory</activeProfile>\n</activeProfiles>\n")))}b.isMDXComponent=!0},207:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||o;return a?r.a.createElement(m,c(c({ref:t},s),{},{components:a})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},218:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={javaModuleParentVersion:"1.0.0",javaCommonsVersion:"1.0.0",javaApiVersion:"1.0.0",javaMessagingVersion:"1.0.0",javaCqrsVersion:"1.0.0",javaAzureCosmosVersion:"1.0.0",javaAzureServicebusVersion:"1.0.0"}}}]);