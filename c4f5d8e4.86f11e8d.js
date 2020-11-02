(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{138:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(173),r=a(181),c=a(180),i=a(172),s=a(174),m=a(139),u=a.n(m),d=a(247),p=[{title:"Infrastructure",link:"infrastructure/azure/core_infrastructure",color:"#25CEB6",justification:"center",description:l.a.createElement(l.a.Fragment,null,"Find out how to configure your cloud provider and other core infrastructure to make Stacks work for you.")},{title:"Test Framework",link:"testing/cli_testing_frameworks",color:"#FE6D6A",justification:"center",description:l.a.createElement(l.a.Fragment,null,"With just one command, discover how to tailor your project with Stacks\u2019 front-end focused opinionated test frameworks.")}],E=[{title:"Contribute to Stacks",link:"docs/contributions",description:l.a.createElement(l.a.Fragment,null,"As an open source project, you can be a part of the Github community shaping Amido Stacks")},{title:"Why  Amido",link:"",description:l.a.createElement(l.a.Fragment,null,"Want to know how Amido is preventing digital transformation failures with Stacks?")},{title:"Careers at Amido",link:"",description:l.a.createElement(l.a.Fragment,null,"As the go-to partner for cloud-native transformation, we\u2019re always looking for fresh new talent")}];function g(){var e=Object(n.useState)(void 0),t=e[0],a=e[1],r=Object(n.useState)(void 0),i=r[0],m=r[1],p=Object(n.useState)(void 0),E=p[0],g=p[1],h=Object(s.a)("docs/"),f={Azure:{"Server Side Rendered Web Application":{"Node JS / React":"workloads/azure/frontend/cli_webapp_frameworks"},"Client Side Rendered Web Application":{"Node JS / React":"workloads/azure/frontend/cli_webapp_frameworks"},"REST Web API":{"Java Spring Boot":"workloads/azure/backend/java/intro_java"},"REST Web API with CQRS":{"Java Spring Boot":"workloads/azure/backend/java_cqrs/intro_java_cqrs","C# / .NET Core":"workloads/azure/backend/netcore/introduction_netcore"}},GCP:"workloads/gcp/workloads_gcp_readme",AWS:"workloads/aws/workloads_aws_readme"},b=Object.keys(f).map((function(e){return{value:f[e],label:e}})),C=t&&"object"==typeof t.value?Object.keys(t.value).map((function(e){return{value:t.value[e],label:e}})):[],k=i&&"object"==typeof i.value?Object.keys(i.value).map((function(e){return{value:i.value[e],label:e}})):[];return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"col col--6",style:{color:"black",display:"flex",flexDirection:"column",gap:"20px"}},l.a.createElement(d.a,{placeholder:"Select Cloud Provider",value:t,onChange:function(e){a(e)},options:b}),C.length>0&&l.a.createElement(d.a,{placeholder:"Select Solution Architecture",value:i,onChange:function(e){m(e)},options:C||[]}),k.length>0&&l.a.createElement(d.a,{placeholder:"Select Language/Framework",value:E,onChange:function(e){g(e)},options:k||[]}),l.a.createElement("div",{className:u.a.buttons,style:{marginTop:40}},l.a.createElement(c.a,{className:Object(o.a)("button button--outline  button--lg",u.a.blackButton),to:h+(E?E.value:t?t.value:"")},"GET STARTED WITH STACKS"))))}function h(){return l.a.createElement("svg",{width:"378",height:"240",viewBox:"0 0 378 240",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("g",{"clip-path":"url(#clip0)"},l.a.createElement("path",{d:"M236.22 81.8319L188.976 0.00260925L141.732 81.8319L94.488 163.661H125.984L157.48 109.108L188.976 54.5559L220.472 109.108L251.968 163.661H283.464L236.22 81.8319Z",fill:"#231F20"}),l.a.createElement("path",{d:"M188.976 109.108L204.724 136.384L220.472 163.661H157.48L173.228 136.384L188.976 109.108Z",fill:"#231F20"}),l.a.createElement("path",{d:"M187.248 231.957L192.772 226.744C194.751 229.3 199.025 231.644 202.412 231.644C205.384 231.644 207.989 230.603 207.989 228.412C207.989 226.744 206.164 225.859 203.609 225.077L196.264 222.787C191.833 221.327 188.239 217.992 188.239 212.832C188.239 205.745 195.429 201.576 202.101 201.576C207.363 201.576 212.419 203.139 215.701 207.36L209.656 212.363C207.884 210.228 204.913 209.08 202.204 209.08C200.433 209.08 197.201 209.913 197.201 212.415C197.201 214.292 199.129 214.968 200.901 215.541L208.717 217.939C214.033 219.659 217.055 222.995 217.055 227.371C217.055 233.78 210.907 239.2 202.101 239.2C196.419 239.2 190.375 236.751 187.248 231.957Z",fill:"#231F20"}),l.a.createElement("path",{d:"M277.055 220.361C277.055 209.93 285.516 201.576 295.893 201.576C302.796 201.576 308.868 205.26 312.137 210.916L304.56 215.327C302.849 212.111 299.579 209.981 295.893 209.981C290.445 209.981 285.983 214.653 285.983 220.361C285.983 226.123 290.445 230.741 295.893 230.741C299.528 230.741 302.744 228.665 304.457 225.552L312.035 229.963C308.765 235.516 302.744 239.2 295.893 239.2C285.516 239.2 277.055 230.741 277.055 220.361Z",fill:"#231F20"}),l.a.createElement("path",{d:"M348.145 231.957L353.668 226.744C355.649 229.3 359.921 231.644 363.309 231.644C366.279 231.644 368.885 230.603 368.885 228.412C368.885 226.744 367.061 225.859 364.507 225.077L357.16 222.787C352.731 221.327 349.135 217.992 349.135 212.832C349.135 205.745 356.328 201.576 362.996 201.576C368.26 201.576 373.315 203.139 376.597 207.36L370.552 212.363C368.78 210.228 365.811 209.08 363.101 209.08C361.329 209.08 358.099 209.913 358.099 212.415C358.099 214.292 360.027 214.968 361.797 215.541L369.615 217.939C374.931 219.659 377.952 222.995 377.952 227.371C377.952 233.78 371.803 239.2 362.996 239.2C357.316 239.2 351.272 236.751 348.145 231.957Z",fill:"#231F20"}),l.a.createElement("path",{d:"M228.521 211.028H219.272V203.237H246.016V211.028H236.767V238.628H228.521V211.028Z",fill:"#231F20"}),l.a.createElement("path",{d:"M316.691 203.288H324.873V217.796L337.171 203.237H346.509L333.809 218.448L347.915 238.577H338.125L328.537 224.873L324.873 229.139V238.628H316.691V203.288Z",fill:"#231F20"}),l.a.createElement("path",{d:"M260.335 216.288L264.943 227.385H255.651L260.335 216.288ZM260.436 202.148L242.405 238.628H250.903L253.187 233.483H267.544L269.787 238.628H278.645L260.991 202.148H260.436Z",fill:"#231F20"}),l.a.createElement("path",{d:"M17.9375 215.98L22.5469 227.081H13.2505L17.9375 215.98ZM18.0364 201.836L0 238.328H8.50104L10.7859 233.182H25.1469L27.3912 238.328H36.2531L18.5917 201.836H18.0364Z",fill:"#231F20"}),l.a.createElement("path",{d:"M46.7536 201.468H47.3526L60.7057 224.522L73.3078 201.468H73.9557L81.3562 238.02H73.3078L70.3052 221.869L60.8046 239.318H60.2557L50.053 221.618L46.9526 238.02H39.4036L46.7536 201.468Z",fill:"#231F20"}),l.a.createElement("path",{d:"M84.9126 202.256H93.3646V237.659H84.9126V202.256Z",fill:"#231F20"}),l.a.createElement("path",{d:"M105.758 209.868H107.609C115.209 209.868 119.428 213.869 119.428 220.018C119.428 226.167 115.209 230.13 107.609 230.13H105.758V209.868ZM97.4146 202.32V237.72H106.814C111.563 237.72 115.458 237.226 119.207 235.075C124.959 231.775 127.97 226.568 127.97 220.018C127.97 209.415 120.464 202.32 106.814 202.32H97.4146Z",fill:"#231F20"}),l.a.createElement("path",{d:"M150.119 209.442C156.1 209.442 160.945 214.288 160.945 220.27C160.945 226.253 156.1 231.095 150.119 231.095C144.137 231.095 139.293 226.253 139.293 220.27C139.293 214.288 144.137 209.442 150.119 209.442ZM150.119 201.458C139.727 201.458 131.307 209.88 131.307 220.27C131.307 230.661 139.727 239.082 150.119 239.082C160.511 239.082 168.928 230.661 168.928 220.27C168.928 209.88 160.511 201.458 150.119 201.458Z",fill:"#231F20"})),l.a.createElement("defs",null,l.a.createElement("clipPath",{id:"clip0"},l.a.createElement("rect",{width:"377.947",height:"239.32",fill:"white"}))))}t.default=function(){var e=Object(i.a)().siteConfig,t=void 0===e?{}:e,a=Object(s.a)("docs/"),n=function(e){document.querySelector(".DocSearch-Button").click(),setTimeout((function(){var t=document.querySelector(".DocSearch-Input"),a=t.value;t.value=e;var n=new Event("input",{bubbles:!0});n.simulated=!0;var l=t._valueTracker;l&&l.setValue(a),t.dispatchEvent(n)}),100)};return l.a.createElement(r.a,{title:""+t.title,description:"Description will go into a meta tag in <head />"},l.a.createElement("main",null,l.a.createElement("section",{className:u.a.logocontainer},l.a.createElement("div",null,l.a.createElement(h,null))),l.a.createElement("section",{className:u.a.definition},l.a.createElement("div",{className:"container"},l.a.createElement("h3",null,"Get started with Amido Stacks"),l.a.createElement("p",null,"Amido Stacks is a catalogue of"," ",l.a.createElement("a",{href:a+"workloads/workloads"}," workload "),"templates that",l.a.createElement("br",null),"instantly scaffold and deploy boilerplate software projects. Slash the time it takes to get productive on your software project"),l.a.createElement("div",{className:u.a.buttons,style:{marginTop:20}},l.a.createElement(c.a,{className:Object(o.a)("button button--primary button--lg",u.a.learnAboutStacks),to:a},"LEARN ABOUT AMIDO STACKS")))),l.a.createElement("section",{className:u.a.heroBanner},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"hero__title"},"What can you do with Stacks?"),l.a.createElement("p",{className:"hero__subtitle"},"Choose a"," ",l.a.createElement("a",{href:a+"workloads/workloads",style:{color:"black",textDecoration:"underline"}}," ","workload"," ")," ","below and you can be up- ",l.a.createElement("br",null),"and-running with a project in less than an hour:"),l.a.createElement("div",{className:u.a.buttons},l.a.createElement(g,null)))),l.a.createElement("div",{className:u.a.mainHolder},l.a.createElement("div",{className:u.a.main},l.a.createElement("section",{className:u.a.supportedTechs},l.a.createElement("div",{className:"container"},l.a.createElement("h3",null,"Technologies supported by Stacks"),l.a.createElement("div",{className:u.a.techs},l.a.createElement("img",{src:"https://logodix.com/logo/42746.png",onClick:function(){return n("azure")}}),l.a.createElement("img",{src:"https://logodix.com/logo/929905.png",onClick:function(){return n("google cloud")}}),l.a.createElement("img",{src:"https://logodix.com/logo/5867.png",onClick:function(){return n("aws")}})),l.a.createElement("div",{className:u.a.techs2},l.a.createElement("img",{src:"https://logodix.com/logo/773611.jpg",onClick:function(){return n("c#")}}),l.a.createElement("img",{src:"https://logodix.com/logo/282992.png",onClick:function(){return n("java")}}),l.a.createElement("img",{src:"https://logodix.com/logo/636467.png",alt:"azure devops",onClick:function(){return n("azure devops")}}),l.a.createElement("img",{src:"https://logodix.com/logo/258401.png",alt:"git lab",onClick:function(){return n("gitlab")}}),l.a.createElement("img",{src:"https://logodix.com/logo/826596.png",alt:"docker",onClick:function(){return n("docker")}})))))),l.a.createElement("section",{className:u.a.features},p.map((function(e){return l.a.createElement("div",{className:Object(o.a)(u.a.feature),style:{justifyContent:e.justification,backgroundColor:e.color}},l.a.createElement("div",{style:{maxWidth:"480px",display:"flex",flexDirection:"column"}},l.a.createElement("h3",null," ",e.title),l.a.createElement("p",null,e.description),l.a.createElement("div",{className:u.a.buttons,style:{marginTop:20}},l.a.createElement(c.a,{className:Object(o.a)("button  button--outline button--lg",u.a.blackButton),to:a+e.link},e.title))))}))),l.a.createElement("div",{className:u.a.mainHolder},l.a.createElement("div",{className:u.a.main},l.a.createElement("section",{className:u.a.features2},E.map((function(e){return l.a.createElement("div",{className:Object(o.a)(u.a.feature)},l.a.createElement("h3",null," ",e.title),l.a.createElement("p",null,e.description),l.a.createElement("div",{className:u.a.buttons,style:{marginTop:40}},l.a.createElement(c.a,{style:{color:"black"},className:Object(o.a)("button button button--primary button--lg",u.a.getStarted),to:a+e.link},e.title)))})))))))}}}]);