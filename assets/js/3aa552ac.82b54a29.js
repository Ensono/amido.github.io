"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[1924],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7594:function(e,t,a){a.d(t,{Y:function(){return n}});var n={javaModuleParentVersion:"1.0.0",javaCommonsVersion:"1.0.0",javaApiVersion:"1.0.0",javaMessagingVersion:"1.0.0",javaCqrsVersion:"1.0.0",javaAzureCosmosVersion:"1.0.0",javaAzureServicebusVersion:"1.0.0"}},2751:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=a(7594),l=["components"],s={id:"dependency_cosmos_java",title:"Stacks Azure CosmosDB module",sidebar_label:"Azure CosmosDB module",hide_title:!1,hide_table_of_contents:!0,keywords:["java","maven","module","modularity","archetype","azure","cosmosdb"]},p=void 0,c={unversionedId:"workloads/azure/backend/java/architecture/dependency_cosmos_java",id:"workloads/azure/backend/java/architecture/dependency_cosmos_java",isDocsHomePage:!1,title:"Stacks Azure CosmosDB module",description:"Module Overview",source:"@site/docs/workloads/azure/backend/java/architecture/dependency_cosmos_java.md",sourceDirName:"workloads/azure/backend/java/architecture",slug:"/workloads/azure/backend/java/architecture/dependency_cosmos_java",permalink:"/docs/workloads/azure/backend/java/architecture/dependency_cosmos_java",tags:[],version:"current",frontMatter:{id:"dependency_cosmos_java",title:"Stacks Azure CosmosDB module",sidebar_label:"Azure CosmosDB module",hide_title:!1,hide_table_of_contents:!0,keywords:["java","maven","module","modularity","archetype","azure","cosmosdb"]},sidebar:"docs",previous:{title:"Modularity Overview",permalink:"/docs/workloads/common/backend/java/architecture/maven_modules_java"},next:{title:"Azure Service Bus module",permalink:"/docs/workloads/azure/backend/java/architecture/dependency_servicebus_java"}},d=[{value:"Module Overview",id:"module-overview",children:[],level:2},{value:"Module Structure",id:"module-structure",children:[{value:"Project structure",id:"project-structure",children:[],level:3}],level:2},{value:"How to use",id:"how-to-use",children:[{value:"Use it as a dependency",id:"use-it-as-a-dependency",children:[{value:"Maven",id:"maven",children:[],level:4},{value:"Others",id:"others",children:[],level:4}],level:3},{value:"Localized solution using Maven Archetypes",id:"localized-solution-using-maven-archetypes",children:[],level:3},{value:"Building the module locally from this repository",id:"building-the-module-locally-from-this-repository",children:[],level:3},{value:"Creating an Archetype from this repository",id:"creating-an-archetype-from-this-repository",children:[],level:3}],level:2},{value:"Accessing Sonatype OSSRH",id:"accessing-sonatype-ossrh",children:[],level:2}],u={toc:d};function m(e){var t=e.components,a=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"module-overview"},"Module Overview"),(0,r.kt)("p",null,"This module implements the ",(0,r.kt)("inlineCode",{parentName:"p"},"StacksPersistence")," interface from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/amido/stacks-java-core-commons"},"commons module"),"\nfor the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/cosmos-db/"},"Azure CosmosDb"),". Simply extending the\n",(0,r.kt)("inlineCode",{parentName:"p"},"StacksCosmosRepository")," class gives you access to the Cosmos CRUD operations."),(0,r.kt)("h2",{id:"module-structure"},"Module Structure"),(0,r.kt)("p",null,"In the following diagram, you can see all the relevant files of this module. Be aware, pulling from\nthe repository will have some extra files that are not relevant to the logic but required to build and\ndeploy."),(0,r.kt)("h3",{id:"project-structure"},"Project structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"java\n\\_.mvn\n: |_settings.xml\n|_archetype.properties\n|_pom.xml\n\\_src\n: \\_main\n:   \\_java\n:    \\_com.amido.stacks.cosmosdb\n:     \\_repository\n:      |_StacksCosmnosRepository.java\n")),(0,r.kt)("h2",{id:"how-to-use"},"How to use"),(0,r.kt)("p",null,"There are four ways to integrate this module into your project:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use it as a ",(0,r.kt)("a",{parentName:"li",href:"#use-it-as-a-dependency"},"dependency")),(0,r.kt)("li",{parentName:"ul"},"Create a localized solution using ",(0,r.kt)("a",{parentName:"li",href:"#localized-solution-using-maven-archetypes"},"Maven Archetypes artifacts")," available in our Artifactory repo"),(0,r.kt)("li",{parentName:"ul"},"Clone this repo, ",(0,r.kt)("a",{parentName:"li",href:"#building-the-module-locally-from-this-repository"},"locally build")," and use it as a Maven dependency"),(0,r.kt)("li",{parentName:"ul"},"Clone this repo, create a ",(0,r.kt)("a",{parentName:"li",href:"#creating-an-archetype-from-this-repository"},"custom archetype")," and then use it as a Maven dependency")),(0,r.kt)("h3",{id:"use-it-as-a-dependency"},"Use it as a dependency"),(0,r.kt)("h4",{id:"maven"},"Maven"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")," section of your application's ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml")," add:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.amido.stacks.modules</groupId>\n    <artifactId>stacks-azure-cosmos</artifactId>\n    <version>"+i.Y.javaAzureCosmosVersion+"</version>\n</dependency>\n")),(0,r.kt)("p",null,"Then you can do a ",(0,r.kt)("inlineCode",{parentName:"p"},"./mvnw clean compile")," to fetch it; after that, you can use it like any other dependency."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./mvnw clean compile\n")),(0,r.kt)("h4",{id:"others"},"Others"),(0,r.kt)("p",null,"Use it as you'd use any dependency in your build tool."),(0,r.kt)("h3",{id:"localized-solution-using-maven-archetypes"},"Localized solution using Maven Archetypes"),(0,r.kt)("p",null,"If you wish to customise the module and use your organisation's namespaces instead of Amido's. You can create a\n",(0,r.kt)("a",{parentName:"p",href:"https://maven.apache.org/archetype/index.html"},"Maven archetype"),". Archetype is Maven's tool for\nscaffolding and offers lots of extra functionality. We suggest spending some time looking into them. We use Archetype to create a template and enable you to adopt this module under your organisation's namespace.\nTo use the deployed archetypes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make and move to a new folder")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Then run"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mvn archetype:generate \\\n    -DarchetypeGroupId='com.amido.stacks.modules' \\\n    -DarchetypeArtifactId='stacks-azure-cosmos-archetype' \\\n    -DarchetypeVersion='<archetype version>' \\\n    -DgroupId='<your-group-id>' \\\n    -DartifactId='<your-artifact-id>' \\\n    -Dversion='<your-version>' \\\n    -Dpackage='<package-name>'\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<your-group-id>")," is a placeholder for your group ID"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<your-artifact-id>")," is a placeholder for your artefact ID"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<your-version>")," is a placeholder for your version"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<package-name>")," is a placeholder for the root package name and structure. It should start with your ",(0,r.kt)("inlineCode",{parentName:"li"},"groupdId")," and continue with the name of the root package.")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"For example, using ",(0,r.kt)("inlineCode",{parentName:"p"},"-DgroupId=com.test")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"-Dpackage=com.test.stacks")," will instruct Maven to place the code in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/main/java/com/test/stacks")," and update all the relevant references accordingly (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"imports"),")"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml")," file of the project you'll be using this module in and add it as a ",(0,r.kt)("a",{parentName:"p",href:"#use-it-as-a-dependency"},"dependency")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),": Using ",(0,r.kt)("inlineCode",{parentName:"p"},"-DgroupId=com.test")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"-Dpackage=com.test.stacks")," will instruct Maven to place the code in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/main/java/com/test/stacks")," and update all the relevant references accordingly (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"imports"),")"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"If you previously had used this module under different namespace (i.e. the default ",(0,r.kt)("inlineCode",{parentName:"strong"},"com.amido.stacks.cosmosdb"),"):")),(0,r.kt)("p",{parentName:"blockquote"},"Maven ONLY updates the imports for the module you generated. Any references in other projects will remain to the previous namespace."),(0,r.kt)("p",{parentName:"blockquote"},"You will need to"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Update them manually"),(0,r.kt)("li",{parentName:"ul"},"Re-create the relevant ",(0,r.kt)("inlineCode",{parentName:"li"},"import")," statements to use the new-made module instead"),(0,r.kt)("li",{parentName:"ul"},"If you plan to use this with Amido Stacks, include your namespace in the ",(0,r.kt)("inlineCode",{parentName:"li"},"@ComponentScan")," annotation of the ",(0,r.kt)("inlineCode",{parentName:"li"},"Application")," class."))),(0,r.kt)("h3",{id:"building-the-module-locally-from-this-repository"},"Building the module locally from this repository"),(0,r.kt)("p",null,"To build the module locally:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Clone this repo"),(0,r.kt)("li",{parentName:"ol"},"Navigate to the ",(0,r.kt)("inlineCode",{parentName:"li"},"java")," folder"),(0,r.kt)("li",{parentName:"ol"},"run ",(0,r.kt)("inlineCode",{parentName:"li"},"./mvnw clean install")," to install the module locally."),(0,r.kt)("li",{parentName:"ol"},"Add it as any other ",(0,r.kt)("a",{parentName:"li",href:"#use-it-as-a-dependency"},"dependency"))),(0,r.kt)("h3",{id:"creating-an-archetype-from-this-repository"},"Creating an Archetype from this repository"),(0,r.kt)("p",null,"If you wish to customise the module and use your organisation's namespaces instead of Amido's. You can create a\n",(0,r.kt)("a",{parentName:"p",href:"https://maven.apache.org/archetype/index.html"},"Maven archetype"),". Archetype is Maven's tool for\nscaffolding and offers lots of extra functionality. We suggest spending some time looking into them. We use Archetype to create a template and enable you to adopt this module under your organisation's namespace.\nTo use the deployed archetypes:\nTo build, install and use the archetype follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clone this repo")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<directory you cloned the project into>/java")," in the terminal")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Then issue the following Maven commands, using the included wrapper:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create the archetype from the existing code"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./mvnw archetype:create-from-project -DpropertyFile='./archetype.properties'\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to the folder it was created in"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd target/generated-sources/archetype\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the archetype locally"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"..\\..\\..\\mvnw install\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make and navigate to a directory in which you'd like to create the localized project, ideally outside this project's root folder")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To create the project, use the command below:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"<path-to-mvn-executable>/mvnw archetype:generate \\\n    -DarchetypeGroupId='com.amido' \\\n    -DarchetypeArtifactId='stacks-azure-cosmos' \\\n    -DarchetypeVersion='1.0.0-SNAPSHOT' \\\n    -DgroupId='<your-group-id>' \\\n    -DartifactId='<your-artifact-id>' \\\n    -Dversion='<your-version>' \\\n    -Dpackage='<package-name>'`\n")),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"<your-group-id>")," is a placeholder for your group ID"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"<your-artifact-id>")," is a placeholder for your artefact ID"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"<your-version>")," is a placeholder for your version"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"<package-name>")," is a placeholder for the root package name and structure. It should start with your ",(0,r.kt)("inlineCode",{parentName:"li"},"groupdId")," and continue with the name of the root package.",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"For example, using ",(0,r.kt)("inlineCode",{parentName:"p"},"-DgroupId=com.test")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"-Dpackage=com.test.stacks")," will instruct Maven to place the code in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/main/java/com/test/stacks")," and update all the relevant references accordingly (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"imports"),")"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml")," file of the project you'll be using this module in and add it as a ",(0,r.kt)("a",{parentName:"p",href:"#use-it-as-a-dependency"},"dependency")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),": Using ",(0,r.kt)("inlineCode",{parentName:"p"},"-DgroupId=com.test")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"-Dpackage=com.test.stacks")," will instruct Maven to place the code in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/main/java/com/test/stacks")," and update all the relevant references accordingly (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"imports"),")"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"If you previously had used this module under different namespace (i.e. the default ",(0,r.kt)("inlineCode",{parentName:"strong"},"com.amido.stacks.cosmosdb"),"):")),(0,r.kt)("p",{parentName:"blockquote"},"Maven ONLY updates the imports for the module you generated. Any references in other projects will remain to the previous namespace."),(0,r.kt)("p",{parentName:"blockquote"},"You will need to"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Update them manually"),(0,r.kt)("li",{parentName:"ul"},"Re-create the relevant ",(0,r.kt)("inlineCode",{parentName:"li"},"import")," statements to use the new-made module instead"),(0,r.kt)("li",{parentName:"ul"},"If you plan to use this with Amido Stacks, include your namespace in the ",(0,r.kt)("inlineCode",{parentName:"li"},"@ComponentScan")," annotation of the ",(0,r.kt)("inlineCode",{parentName:"li"},"Application")," class."))),(0,r.kt)("h2",{id:"accessing-sonatype-ossrh"},"Accessing Sonatype OSSRH"),(0,r.kt)("p",null,"Our artefacts and archetypes get hosted on Sonatype OSSRH  then to  maven central . to access artifact from OSSRH before it get published to maven central update  ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<repositories>\n  <repository>\n    <snapshots/>\n    <id>snapshots</id>\n    <name>default-maven-virtual</name>\n    <url>https://s01.oss.sonatype.org/content/repositories/snapshots/</url>\n  </repository>\n  <repository>\n    <releases>\n      <enabled>true</enabled>\n    </releases>\n    <id>releases</id>\n    <name>default-maven-staging</name>\n    <url>https://s01.oss.sonatype.org/content/repositories/releases/</url>\n  </repository>\n</repositories>\n")),(0,r.kt)("p",null,"Alternatively, you can also add this configuration as a profile in your Maven's ",(0,r.kt)("inlineCode",{parentName:"p"},"settings.xml")," file\nin the ",(0,r.kt)("inlineCode",{parentName:"p"},".m2")," folder in your home directory (any OS):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<profiles>\n  <profile>\n    <repositories>\n      <repository>\n        <snapshots/>\n        <id>snapshots</id>\n        <name>default-maven-virtual</name>\n        <url>https://s01.oss.sonatype.org/content/repositories/snapshots/</url>\n      </repository>\n      <repository>\n        <releases>\n          <enabled>true</enabled>\n        </releases>\n        <id>releases</id>\n        <name>default-maven-staging</name>\n        <url>https://s01.oss.sonatype.org/content/repositories/releases/</url>\n      </repository>\n    </repositories>\n    <id>nexus</id>\n  </profile>\n</profiles>\n\n<activeProfiles>\n<activeProfile>nexus</activeProfile>\n</activeProfiles>\n\n")))}m.isMDXComponent=!0}}]);