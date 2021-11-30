"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[839],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7594:function(e,t,a){a.d(t,{Y:function(){return n}});var n={javaModuleParentVersion:"1.0.0",javaCommonsVersion:"1.0.0",javaApiVersion:"1.0.0",javaMessagingVersion:"1.0.0",javaCqrsVersion:"1.0.0",javaAzureCosmosVersion:"1.0.0",javaAzureServicebusVersion:"1.0.0"}},2306:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=a(7594),l=["components"],p={id:"dependency_parent_java",title:"Stacks Parent module",sidebar_label:"Parent module",hide_title:!1,hide_table_of_contents:!0,keywords:["java","maven","module","modularity","archetype"]},s=void 0,c={unversionedId:"workloads/azure/backend/java/architecture/dependency_parent_java",id:"workloads/azure/backend/java/architecture/dependency_parent_java",isDocsHomePage:!1,title:"Stacks Parent module",description:"Module Overview",source:"@site/docs/workloads/azure/backend/java/architecture/dependency_parent_java.md",sourceDirName:"workloads/azure/backend/java/architecture",slug:"/workloads/azure/backend/java/architecture/dependency_parent_java",permalink:"/docs/workloads/azure/backend/java/architecture/dependency_parent_java",tags:[],version:"current",frontMatter:{id:"dependency_parent_java",title:"Stacks Parent module",sidebar_label:"Parent module",hide_title:!1,hide_table_of_contents:!0,keywords:["java","maven","module","modularity","archetype"]},sidebar:"docs",previous:{title:"Modularity Overview",permalink:"/docs/workloads/azure/backend/java/architecture/maven_modules_java"},next:{title:"Core Commons module",permalink:"/docs/workloads/azure/backend/java/architecture/dependency_commons_java"}},d=[{value:"Module Overview",id:"module-overview",children:[],level:2},{value:"Module Structure",id:"module-structure",children:[{value:"Project structure",id:"project-structure",children:[],level:3}],level:2},{value:"How to use",id:"how-to-use",children:[{value:"Use it as a dependency",id:"use-it-as-a-dependency",children:[{value:"Maven",id:"maven",children:[],level:4},{value:"Others",id:"others",children:[],level:4}],level:3},{value:"Localized solution using Maven Archetypes",id:"localized-solution-using-maven-archetypes",children:[],level:3},{value:"Building the module locally from this repository",id:"building-the-module-locally-from-this-repository",children:[],level:3},{value:"Creating an Archetype from this repository",id:"creating-an-archetype-from-this-repository",children:[],level:3}],level:2},{value:"Accessing Artifactory",id:"accessing-artifactory",children:[],level:2}],u={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"module-overview"},"Module Overview"),(0,o.kt)("p",null,"This parent module provides shared functionality to the Stacks java modules. It's based on Spring\nand contains the dependency management, shared properties, plugins, profiles, reporting and repositories.\nIt's intended to be the parent module for Amido Stacks but can also get used in your project."),(0,o.kt)("h2",{id:"module-structure"},"Module Structure"),(0,o.kt)("p",null,"In the following diagram, you can see all the relevant files of this module. Be aware, pulling from\nthe repository will have some extra files that are not relevant to the logic but required to build and\ndeploy."),(0,o.kt)("h3",{id:"project-structure"},"Project structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"java\n\\_.mvn\n: |_settings.xml\n|_archetype.properties\n|_pom.xml\n")),(0,o.kt)("h2",{id:"how-to-use"},"How to use"),(0,o.kt)("p",null,"There are four ways to integrate this module into your project:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use it as a ",(0,o.kt)("a",{parentName:"li",href:"#use-it-as-a-dependency"},"dependency")),(0,o.kt)("li",{parentName:"ul"},"Create a localized solution using ",(0,o.kt)("a",{parentName:"li",href:"#localized-solution-using-maven-archetypes"},"Maven Archetypes artifacts")," available in our Artifactory repo"),(0,o.kt)("li",{parentName:"ul"},"Clone this repo, ",(0,o.kt)("a",{parentName:"li",href:"#building-the-module-locally-from-this-repository"},"locally build")," and use it as a Maven dependency"),(0,o.kt)("li",{parentName:"ul"},"Clone this repo, create a ",(0,o.kt)("a",{parentName:"li",href:"#creating-an-archetype-from-this-repository"},"custom archetype")," and then use it as a Maven dependency")),(0,o.kt)("h3",{id:"use-it-as-a-dependency"},"Use it as a dependency"),(0,o.kt)("h4",{id:"maven"},"Maven"),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"parent")," section of your application's ",(0,o.kt)("inlineCode",{parentName:"p"},"pom.xml")," add:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<parent>\n  <groupId>com.amido.stacks.modules</groupId>\n  <artifactId>stacks-modules-parent</artifactId>\n  <version>"+i.Y.javaModuleParentVersion+"</version>\n</parent>\n")),(0,o.kt)("p",null,"Then you can do a ",(0,o.kt)("inlineCode",{parentName:"p"},"./mvnw clean compile")," to fetch it; after that, you can use it like any other dependency."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./mvnw clean compile\n")),(0,o.kt)("h4",{id:"others"},"Others"),(0,o.kt)("p",null,"Use it as you'd use any dependency in your build tool."),(0,o.kt)("h3",{id:"localized-solution-using-maven-archetypes"},"Localized solution using Maven Archetypes"),(0,o.kt)("p",null,"If you wish to customise the module and use your organisation's namespaces instead of Amido's. You can create a\n",(0,o.kt)("a",{parentName:"p",href:"https://maven.apache.org/archetype/index.html"},"Maven archetype"),". Archetype is Maven's tool for\nscaffolding and offers lots of extra functionality. We suggest spending some time looking into them. We use Archetype to create a template and enable you to adopt this module under your organisation's namespace.\nTo use the deployed archetypes:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make and move to a new folder")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Then run"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mvn archetype:generate \\\n    -DarchetypeGroupId='com.amido.stacks.modules' \\\n    -DarchetypeArtifactId='stacks-modules-parent-archetype' \\\n    -DarchetypeVersion='<archetype version>' \\\n    -DgroupId='<your-group-id>' \\\n    -DartifactId='<your-artifact-id>' \\\n    -Dversion='<your-version>' \\\n    -Dpackage='<package-name>'\n")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<your-group-id>")," is a placeholder for your group ID"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<your-artifact-id>")," is a placeholder for your artefact ID"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<your-version>")," is a placeholder for your version"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<package-name>")," is a placeholder for the root package name and structure. It should start with your ",(0,o.kt)("inlineCode",{parentName:"li"},"groupdId")," and continue with the name of the root package.")),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"For example, using ",(0,o.kt)("inlineCode",{parentName:"p"},"-DgroupId=com.test")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"-Dpackage=com.test.stacks")," will instruct Maven to place the code in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/main/java/com/test/stacks")," and update all the relevant references accordingly (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"imports"),")"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the ",(0,o.kt)("inlineCode",{parentName:"p"},"pom.xml")," file of the project you'll be using this module in and add it as a ",(0,o.kt)("a",{parentName:"p",href:"#use-it-as-a-dependency"},"dependency")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"If you previously had used this module under different namespace (i.e. the default ",(0,o.kt)("inlineCode",{parentName:"strong"},"com.amido.stacks.core-api"),"):")),(0,o.kt)("p",{parentName:"blockquote"},"Maven ONLY updates the imports for the module you generated. Any references in other projects will remain to the previous namespace."),(0,o.kt)("p",{parentName:"blockquote"},"You will need to"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Update them manually"),(0,o.kt)("li",{parentName:"ul"},"Re-create the relevant ",(0,o.kt)("inlineCode",{parentName:"li"},"import")," statements to use the new-made module instead"),(0,o.kt)("li",{parentName:"ul"},"If you plan to use this with Amido Stacks, include your namespace in the ",(0,o.kt)("inlineCode",{parentName:"li"},"@ComponentScan")," annotation of the ",(0,o.kt)("inlineCode",{parentName:"li"},"Application")," class."))),(0,o.kt)("h3",{id:"building-the-module-locally-from-this-repository"},"Building the module locally from this repository"),(0,o.kt)("p",null,"To build the module locally:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Clone this repo"),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"./mvnw clean install")," to install the module locally."),(0,o.kt)("li",{parentName:"ol"},"Add it as any other ",(0,o.kt)("a",{parentName:"li",href:"#use-it-as-a-dependency"},"dependency"))),(0,o.kt)("h3",{id:"creating-an-archetype-from-this-repository"},"Creating an Archetype from this repository"),(0,o.kt)("p",null,"If you wish to customise the module and use your organisation's namespaces instead of Amido's. You can create a\n",(0,o.kt)("a",{parentName:"p",href:"https://maven.apache.org/archetype/index.html"},"Maven archetype"),". Archetype is Maven's tool for\nscaffolding and offers lots of extra functionality. We suggest spending some time looking into them. We use Archetype to create a template and enable you to adopt this module under your organisation's namespace.\nTo use the deployed archetypes:\nTo build, install and use the archetype follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Clone this repo")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"<directory you cloned the project into>")," in the terminal")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Then issue the following Maven commands, using the included wrapper:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create the archetype from the existing code"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./mvnw archetype:create-from-project -DpropertyFile='./archetype.properties'\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to the folder it was created in"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd target/generated-sources/archetype\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install the archetype locally"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"..\\..\\..\\mvnw install\n"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make and navigate to a directory in which you'd like to create the localized project, ideally outside this project's root folder")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To create the project, use the command below:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"<path-to-mvn-executable>/mvnw archetype:generate \\\n    -DarchetypeGroupId='com.amido' \\\n    -DarchetypeArtifactId='stacks-modules-parent-archetype' \\\n    -DarchetypeVersion='<VERSION>' \\\n    -DgroupId='<your-group-id>' \\\n    -DartifactId='<your-artifact-id>' \\\n    -Dversion='<your-version>' \\\n    -Dpackage='<package-name>'`\n")),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"<your-group-id>")," is a placeholder for your group ID"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"<your-artifact-id>")," is a placeholder for your artefact ID"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"<your-version>")," is a placeholder for your version"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"<package-name>")," is a placeholder for the root package name and structure. It should start with your ",(0,o.kt)("inlineCode",{parentName:"li"},"groupdId")," and continue with the name of the root package.",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"For example, using ",(0,o.kt)("inlineCode",{parentName:"p"},"-DgroupId=com.test")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"-Dpackage=com.test.stacks")," will instruct Maven to place the code in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/main/java/com/test/stacks")," and update all the relevant references accordingly (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"imports"),")"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the ",(0,o.kt)("inlineCode",{parentName:"p"},"pom.xml")," file of the project you'll be using this module in and add it as a ",(0,o.kt)("a",{parentName:"p",href:"#use-it-as-a-dependency"},"dependency")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"If you previously had used this module under different namespace (i.e. the default ",(0,o.kt)("inlineCode",{parentName:"strong"},"com.amido.stacks.core-api"),"):")),(0,o.kt)("p",{parentName:"blockquote"},"Maven ONLY updates the imports for the module you generated. Any references in other projects will remain to the previous namespace."),(0,o.kt)("p",{parentName:"blockquote"},"You will need to"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Update them manually"),(0,o.kt)("li",{parentName:"ul"},"Re-create the relevant ",(0,o.kt)("inlineCode",{parentName:"li"},"import")," statements to use the new-made module instead"),(0,o.kt)("li",{parentName:"ul"},"If you plan to use this with Amido Stacks, include your namespace in the ",(0,o.kt)("inlineCode",{parentName:"li"},"@ComponentScan")," annotation of the ",(0,o.kt)("inlineCode",{parentName:"li"},"Application")," class."))),(0,o.kt)("h2",{id:"accessing-artifactory"},"Accessing Artifactory"),(0,o.kt)("p",null,"Our artefacts and archetypes get hosted on an Artifactory repository. To use either, from a project\nother than Amido Stacks, you will need to add that repo in your ",(0,o.kt)("inlineCode",{parentName:"p"},"pom.xml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<repositories>\n    <repository>\n        <snapshots />\n        <id>snapshots</id>\n        <name>default-maven-virtual</name>\n        <url>https://amidostacks.jfrog.io/artifactory/default-maven-virtual</url>\n    </repository>\n</repositories>\n")),(0,o.kt)("p",null,"Alternatively, you can also add this configuration as a profile in your Maven's ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.xml")," file\nin the ",(0,o.kt)("inlineCode",{parentName:"p"},".m2")," folder in your home directory (any OS):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<profiles>\n    <profile>\n        <repositories>\n            <repository>\n                <snapshots/>\n                <id>snapshots</id>\n                <name>default-maven-virtual</name>\n                <url>https://amidostacks.jfrog.io/artifactory/default-maven-virtual</url>\n            </repository>\n        </repositories>\n        <id>artifactory</id>\n    </profile>\n</profiles>\n\n<activeProfiles>\n    <activeProfile>artifactory</activeProfile>\n</activeProfiles>\n")))}m.isMDXComponent=!0}}]);