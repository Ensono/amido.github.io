(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{207:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(a),d=n,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return a?r.a.createElement(m,c(c({ref:t},s),{},{components:a})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},209:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},211:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},212:function(e,t,a){"use strict";var n=a(0),r=a(211);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},214:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(212),i=a(209),c=a(53),l=a.n(c),s=37,u=39;t.a=function(e){var t=e.block,a=e.children,c=e.defaultValue,b=e.values,p=e.groupId,d=Object(o.a)(),m=d.tabGroupChoices,f=d.setTabGroupChoices,g=Object(n.useState)(c),j=g[0],v=g[1],O=Object(n.useState)(!1),h=O[0],y=O[1];if(null!=p){var w=m[p];null!=w&&w!==j&&b.some((function(e){return e.value===w}))&&v(w)}var k=function(e){v(e),null!=p&&f(p,e)},x=[],N=function(e){e.metaKey||e.altKey||e.ctrlKey||y(!0)},E=function(){y(!1)};return Object(n.useEffect)((function(){window.addEventListener("keydown",N),window.addEventListener("mousedown",E)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},b.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":j===t}),style:h?{}:{outline:"none"},key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case u:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e),N(e)},onFocus:function(){return k(t)},onClick:function(){k(t),y(!1)},onPointerDown:function(){return y(!1)}},a)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===j}))[0]))}},215:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}},268:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/new_java_project-e8e9490f10c6649dbb58791306565548.png"},269:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/new_java_project_1-7a59f9d8d8bc4f4cc5c0f56c0a56a748.png"},270:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/run_configuration-8e78ac0c89d26029063ad8ed1978e076.png"},271:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/run_configuration_1-77d3b8880dec264fc3ef5534a982cec2.png"},272:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/run_configuration_2-c59de32a330a307b01632b81da844e19.png"},273:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/run_java_application-5850fef9cbf5f332cbf52792d4b1c7e6.png"},96:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),o=(a(0),a(207)),i=a(214),c=a(215),l={id:"ide_java",title:"IDE guidelines for the Java Rest API",sidebar_label:"IDE guidelines",hide_title:!1,hide_table_of_contents:!1,description:"IDE guidelines for the Java Rest API",keywords:["java","rest","api","ide","ide guidelines","plugins","code quality","lombok","sonarlint","spring assistant","check style","google java format","spotbugs","jacoco","setups","pom"]},s={unversionedId:"workloads/azure/backend/java/ide_java",id:"workloads/azure/backend/java/ide_java",isDocsHomePage:!1,title:"IDE guidelines for the Java Rest API",description:"IDE guidelines for the Java Rest API",source:"@site/docs/workloads/azure/backend/java/ide_java.md",slug:"/workloads/azure/backend/java/ide_java",permalink:"/docs/workloads/azure/backend/java/ide_java",version:"current",sidebar_label:"IDE guidelines",sidebar:"docs",previous:{title:"Using the Maven Scaffolding to create the Java project template",permalink:"/docs/workloads/azure/backend/java/scaffolding_java"},next:{title:"Overview of Maven modularity",permalink:"/docs/workloads/azure/backend/java/architecture/maven_modules_java"}},u=[{value:"IDE guidelines",id:"ide-guidelines",children:[{value:"Plugins used in POM",id:"plugins-used-in-pom",children:[]},{value:"Set up the project",id:"set-up-the-project",children:[]},{value:"Code Quality",id:"code-quality",children:[]}]}],b={rightToc:u};function p(e){var t=e.components,l=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,l,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"ide-guidelines"},"IDE guidelines"),Object(o.b)("p",null,"The IDE we have used is Intellij."),Object(o.b)("p",null,"We recommend that you install the following plugins:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Lombok - To reduce the amount of boiler-plate code that needs to be written"),Object(o.b)("li",{parentName:"ul"},"SonarLint - Fix and detect code quality issues (",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.sonarlint.org/"}),"https://www.sonarlint.org/"),")"),Object(o.b)("li",{parentName:"ul"},"Spring Assistant - An IntelliJ plugin for aiding Spring development projects (",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://plugins.jetbrains.com/plugin/10229-spring-assistant"}),"https://plugins.jetbrains.com/plugin/10229-spring-assistant"),")"),Object(o.b)("li",{parentName:"ul"},"Spring Tools - Adds Spring support for IDEs (",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://spring.io/tools"}),"https://spring.io/tools"),")"),Object(o.b)("li",{parentName:"ul"},"CheckStyle - Flags up issues with coding style (",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://checkstyle.sourceforge.io/"}),"https://checkstyle.sourceforge.io/"),")"),Object(o.b)("li",{parentName:"ul"},"google-java-format Formatter - Formats code according to configuration (",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/amido/stacks-java/blob/master/tools/formatter/intellij-java-google-style.xml"}),"https://github.com/amido/stacks-java/blob/master/tools/formatter/intellij-java-google-style.xml"),")")),Object(o.b)("h3",{id:"plugins-used-in-pom"},"Plugins used in POM"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Lombok - Avoids need to write e.g. Getter, Setter, RequiredArgsConstructor, ToString, EqualsAndHashCode) in Java classes."),Object(o.b)("li",{parentName:"ul"},"JaCoCo - A free Java code test coverage library."),Object(o.b)("li",{parentName:"ul"},"Surefire - Used for reporting purposes (creates reports based on tests in the Java test package)."),Object(o.b)("li",{parentName:"ul"},"fmt-maven-plugin - Formats the java code based on rules in java-google-style.xml."),Object(o.b)("li",{parentName:"ul"},"Spotbugs - Performs a static analysis of the Java code to check for bugs.")),Object(o.b)("h3",{id:"set-up-the-project"},"Set up the project"),Object(o.b)("h4",{id:"how-to-import-the-whole-project"},"How to import the whole project"),Object(o.b)("p",null,"   In the IDE(We used Intellij) go to File -> New -> Project.\nSet project SDK to Java 11. Click Next -> Next\n",Object(o.b)("img",{alt:"New Project",src:a(268).default})),Object(o.b)("p",null,"   Choose the java project folder\n",Object(o.b)("img",{alt:"New Java Project",src:a(269).default}),"\nclick finish."),Object(o.b)("h4",{id:"what-setup-required-to-get-it-up-and-running"},"What setup required to get it up and running"),Object(o.b)("p",null,'   Open up the "java" folder and right click on pom.xml and choose "Add as Maven Project".\nClick on Run -> Edit Configurations\n',Object(o.b)("img",{alt:"Run Configurations",src:a(270).default}),"\nClick on Add new Configuration and choose Application/Spring boot\n",Object(o.b)("img",{alt:"Run Configurations_1",src:a(271).default}),'\nChoose the main class as "Application.java" and under environment set environment variable\nfor ',Object(o.b)("strong",{parentName:"p"},"AZURE_COSMOSDB_KEY")," and set JRE to Java 11. Click OK\n",Object(o.b)("img",{alt:"Run Configurations_2",src:a(272).default})),Object(o.b)("p",null,"   Open Application.java file and right click and choose run Application.",Object(o.b)("img",{alt:"Run Java Application",src:a(273).default})),Object(o.b)("h3",{id:"code-quality"},"Code Quality"),Object(o.b)("h4",{id:"formatter"},"Formatter"),Object(o.b)("p",null,"Install the ",Object(o.b)("inlineCode",{parentName:"p"},"intellij-java-google-style.xml")," formatter configuration file into the IDE from ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/amido/stacks-java/blob/master/tools/formatter/intellij-java-google-style.xml"}),"here"),"."),Object(o.b)("p",null,"The Java source code will automatically be reformatted to comply with the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://google.github.io/styleguide/javaguide.html"}),"Google Java Style"),"."),Object(o.b)("p",null,"You can override the settings locally in the codebase by adding, for example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"//@formatter:off\nmanually formatted code\n///@formatter:on\n")),Object(o.b)("h5",{id:"validating-and-applying-formatting"},"Validating and applying formatting"),Object(o.b)("p",null,"From the ",Object(o.b)("inlineCode",{parentName:"p"},"<PROJECT-NAME>/java")," folder run"),Object(o.b)(i.a,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"unix",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"./mvnw com.coveo:fmt-maven-plugin:check\n"))),Object(o.b)(c.a,{value:"windows",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"mvnw.cmd com.coveo:fmt-maven-plugin:check\n")))),Object(o.b)("p",null,"To validate the current formatting. You can then run the below code to apply formatting to the\nsource code."),Object(o.b)(i.a,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"unix",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"./mvnw com.coveo:fmt-maven-plugin:format\n"))),Object(o.b)(c.a,{value:"windows",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"mvnw.cmd com.coveo:fmt-maven-plugin:format\n")))),Object(o.b)("h4",{id:"verifying-common-programming-flaws"},"Verifying common programming flaws"),Object(o.b)(i.a,{groupId:"operating-systems",defaultValue:"unix",values:[{label:"Unix",value:"unix"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"unix",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"./mvnw spotbugs:check\n"))),Object(o.b)(c.a,{value:"windows",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"mvnw.cmd spotbugs:check\n")))))}p.isMDXComponent=!0}}]);