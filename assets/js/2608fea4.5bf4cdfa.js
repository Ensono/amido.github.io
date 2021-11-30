"use strict";(self.webpackChunkstacks=self.webpackChunkstacks||[]).push([[9185],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?o.createElement(f,r(r({ref:t},c),{},{components:n})):o.createElement(f,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var p=2;p<l;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3358:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var o=n(7462),a=n(3366),l=(n(7294),n(3905)),r=["components"],i={id:"contentful_integration",title:"Contentful Integration",sidebar_label:"CMS - Contentful Integration",hide_title:!1,hide_table_of_contents:!1,description:"CMS - Contentful Integration",keywords:["rest","api","ssr","cms","integration","settings","configuration","contentful cli"]},s=void 0,p={unversionedId:"workloads/azure/frontend/SSR/contentful_integration",id:"workloads/azure/frontend/SSR/contentful_integration",isDocsHomePage:!1,title:"Contentful Integration",description:"CMS - Contentful Integration",source:"@site/docs/workloads/azure/frontend/SSR/contentful_integration.md",sourceDirName:"workloads/azure/frontend/SSR",slug:"/workloads/azure/frontend/SSR/contentful_integration",permalink:"/docs/workloads/azure/frontend/SSR/contentful_integration",tags:[],version:"current",frontMatter:{id:"contentful_integration",title:"Contentful Integration",sidebar_label:"CMS - Contentful Integration",hide_title:!1,hide_table_of_contents:!1,description:"CMS - Contentful Integration",keywords:["rest","api","ssr","cms","integration","settings","configuration","contentful cli"]},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/workloads/azure/frontend/SSR/getting_started_ssr"},next:{title:"Identity using Auth0",permalink:"/docs/workloads/azure/frontend/SSR/identity"}},c=[{value:"\u26a0\ufe0f Important \ud83d\udc77\u200d\u2640\ufe0f\ud83d\udea7",id:"\ufe0f-important-\ufe0f",children:[],level:2},{value:"Tools used",id:"tools-used",children:[],level:2},{value:"Configuration",id:"configuration",children:[],level:2},{value:"Using Contentful",id:"using-contentful",children:[{value:"Requirements",id:"requirements",children:[],level:3}],level:2},{value:"Set the default local to en-GB",id:"set-the-default-local-to-en-gb",children:[],level:2},{value:"Set up the tokens",id:"set-up-the-tokens",children:[],level:2},{value:"Importing content with the Contentful CLI",id:"importing-content-with-the-contentful-cli",children:[],level:2},{value:"Content model",id:"content-model",children:[{value:"<strong>Author</strong>",id:"author",children:[{value:"<strong>Post</strong>",id:"post",children:[],level:4}],level:3},{value:"Step 3. Populate content",id:"step-3-populate-content",children:[],level:3}],level:2},{value:"To Run",id:"to-run",children:[],level:2},{value:"\u26a0\ufe0f Important \ud83d\udc77\u200d\u2640\ufe0f",id:"\ufe0f-important-\ufe0f-1",children:[{value:"References",id:"references",children:[],level:3},{value:"https://next-blog-contentful.now.sh/",id:"httpsnext-blog-contentfulnowsh",children:[],level:3}],level:2},{value:"Localization and Internationalization",id:"localization-and-internationalization",children:[{value:"For the purposes of demo",id:"for-the-purposes-of-demo",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,r);return(0,l.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\ufe0f-important-\ufe0f"},"\u26a0\ufe0f Important \ud83d\udc77\u200d\u2640\ufe0f\ud83d\udea7"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Please note CMS is an optional feature included in the Stacks workspace. To\nturn off CMS please remove the folder ",(0,l.kt)("inlineCode",{parentName:"p"},"../src/ssr/pages/cms")," inside\nssr/pages before building and make sure the tsconfig does not include these\nfiles.")),(0,l.kt)("p",null,"This implementation showcases NextJS's Static Generation feature using\n",(0,l.kt)("a",{parentName:"p",href:"https://www.contentful.com/"},"Contentful")," as the data source."),(0,l.kt)("h2",{id:"tools-used"},"Tools used"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.contentful.com/"},"Contentful")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@contentful/rich-text-react-renderer"},"Rich-text-react-renderer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://nextjs.org/docs/basic-features/pages#pre-rendering"},"NextJS-Pre Rendering"))),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"Create an account and a space on Contentful"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"First,\n",(0,l.kt)("a",{parentName:"p",href:"https://www.contentful.com/sign-up/"},"create an account on Contentful"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"After creating an account, create a new empty ",(0,l.kt)("strong",{parentName:"p"},"space")," from the\n",(0,l.kt)("a",{parentName:"p",href:"https://app.contentful.com/"},"dashboard"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create the\n",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://www.contentful.com/developers/docs/references/content-delivery-api/"},"Content Delivery API")," -\naccess token")," field of your API key")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create the\n",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://www.contentful.com/developers/docs/references/content-preview-api/"},"Content Preview API")," -\npreview token")," field of your API key"))),(0,l.kt)("h2",{id:"using-contentful"},"Using Contentful"),(0,l.kt)("h3",{id:"requirements"},"Requirements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A (free) ",(0,l.kt)("a",{parentName:"li",href:"https://www.contentful.com/sign-up/"},"Contentful account")),(0,l.kt)("li",{parentName:"ul"},"Locally\n",(0,l.kt)("a",{parentName:"li",href:"https://www.contentful.com/developers/docs/tutorials/cli/installation/"},"installed"),"\ncontentful-cli"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.contentful.com/developers/docs/tutorials/cli/authentication/"},"Authenticated"),"\nwith contentful-cli")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://www.contentful.com/"},"Contentful")," for more information."),(0,l.kt)("h2",{id:"set-the-default-local-to-en-gb"},"Set the default local to en-GB"),(0,l.kt)("p",null,"You can change the local in Contentful, note that default in Contentful is\nen-US:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://amidostacksassets.blob.core.windows.net/docs/assets/contentful_locales.png",alt:"Contentful Management Token"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Please updated the environment variable\nNEXT_PUBLIC_CONTENTFUL_DEFAULT_LOCALE - ",(0,l.kt)("inlineCode",{parentName:"p"},"../src/ssr/environment-configuration/environment-variables.js"),"\nwith the right locale")),(0,l.kt)("h2",{id:"set-up-the-tokens"},"Set up the tokens"),(0,l.kt)("p",null,"Get the tokens from your account, ensuring that you have created a new\nmanagement access token."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://amidostacksassets.blob.core.windows.net/docs/assets/contentful_mt.png",alt:"Contentful Management Token"})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://amidostacksassets.blob.core.windows.net/docs/assets/contentful_access_keys.png",alt:"Contentful Access Token"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export CONTENTFUL_MT= \\\nexport NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN= \\\nexport NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN= \\\nexport NEXT_PUBLIC_CONTENTFUL_SPACE_ID=\n")),(0,l.kt)("h2",{id:"importing-content-with-the-contentful-cli"},"Importing content with the Contentful CLI"),(0,l.kt)("p",null,"We have provided an example export of the Blog model used with Amido Stacks,\nsupporting:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"locals"),(0,l.kt)("li",{parentName:"ul"},"translations (en-GB, it-IT)")),(0,l.kt)("p",null,"For an example of how this is used in the Server Side Rendered Webapp, see\n",(0,l.kt)("a",{parentName:"p",href:"https://app.nonprod.amidostacks.com/web/stacks/blog"},"our deployed server side rendered solution")),(0,l.kt)("p",null,"After you have the import CLI tool installed and have configured your\nenvironment, and at the command line:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"contentful space import --content-file contentful-export-amidostacks-example.json --mt $CONTENTFUL_MT --space-id $NEXT_PUBLIC_CONTENTFUL_SPACE_ID")),(0,l.kt)("p",null,"This will then populate your space with the Stacks blog posts, following the\nmodel, ensuring that you can get going faster."),(0,l.kt)("h2",{id:"content-model"},"Content model"),(0,l.kt)("p",null,"The Stacks Yumido example uses the following content model:"),(0,l.kt)("h3",{id:"author"},(0,l.kt)("strong",{parentName:"h3"},"Author")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name")," - ",(0,l.kt)("strong",{parentName:"li"},"Short text")," field"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"picture")," - ",(0,l.kt)("strong",{parentName:"li"},"Media")," field")),(0,l.kt)("h4",{id:"post"},(0,l.kt)("strong",{parentName:"h4"},"Post")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"title")," - ",(0,l.kt)("strong",{parentName:"li"},"Text")," field (type ",(0,l.kt)("strong",{parentName:"li"},"short text"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"content")," - ",(0,l.kt)("strong",{parentName:"li"},"Rich text")," field"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"excerpt")," - ",(0,l.kt)("strong",{parentName:"li"},"Text")," field (type ",(0,l.kt)("strong",{parentName:"li"},"short text, full-text search"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"coverImage")," - ",(0,l.kt)("strong",{parentName:"li"},"Media")," field (type ",(0,l.kt)("strong",{parentName:"li"},"one file"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"date")," - ",(0,l.kt)("strong",{parentName:"li"},"Date and time")," field"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"slug")," - ",(0,l.kt)("strong",{parentName:"li"},"Text")," field. You can optionally go to the settings of this field,\nand under ",(0,l.kt)("strong",{parentName:"li"},"Appearance"),", select ",(0,l.kt)("strong",{parentName:"li"},"Slug")," to display it as a slug of the\n",(0,l.kt)("inlineCode",{parentName:"li"},"title")," field."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"author")," - ",(0,l.kt)("strong",{parentName:"li"},"Reference")," field")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://amidostacksassets.blob.core.windows.net/docs/assets/content-model-overview.jpg",alt:"Content model overview"})),(0,l.kt)("h3",{id:"step-3-populate-content"},"Step 3. Populate content"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Important:")," For each entry and asset, you need to click on ",(0,l.kt)("strong",{parentName:"p"},"Publish"),"."),(0,l.kt)("h2",{id:"to-run"},"To Run"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx cross-env NEXT_PUBLIC_CONTENTFUL_SPACE_ID={YOUR_SPACE_ID} \\\nNEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN={ACCESS_TOKEN} \\\nNEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN={PREVIEW_TOKEN} \\\n")),(0,l.kt)("h2",{id:"\ufe0f-important-\ufe0f-1"},"\u26a0\ufe0f Important \ud83d\udc77\u200d\u2640\ufe0f"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Locale switcher strictly relies on the route. For example the route has to\nalways start with ",(0,l.kt)("inlineCode",{parentName:"p"},"/blog/posts")," and should following slug should always start\nwith locale string (if multiple locales are enabled) e.g.\n",(0,l.kt)("inlineCode",{parentName:"p"},"blog/posts/it-IT/documentation-demo"),".")),(0,l.kt)("h3",{id:"references"},"References"),(0,l.kt)("h3",{id:"httpsnext-blog-contentfulnowsh"},(0,l.kt)("a",{parentName:"h3",href:"https://next-blog-contentful.now.sh/"},"https://next-blog-contentful.now.sh/")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"localization-and-internationalization"},"Localization and Internationalization"),(0,l.kt)("p",null,"Stacks relies on\n",(0,l.kt)("a",{parentName:"p",href:"https://www.contentful.com/developers/docs/tutorials/general/setting-locales/"},"contentful"),"\nto supplies the locales needed for translations."),(0,l.kt)("h3",{id:"for-the-purposes-of-demo"},"For the purposes of demo"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Two locales have been created in Contentful (",(0,l.kt)("em",{parentName:"li"},"en-GB")," and ",(0,l.kt)("em",{parentName:"li"},"it-IT"),")\n",(0,l.kt)("img",{parentName:"li",src:"https://amidostacksassets.blob.core.windows.net/docs/assets/locales_contentful.jpg",alt:"Locales"})),(0,l.kt)("li",{parentName:"ul"},"Each post and field entry would contain 2 locales ",(0,l.kt)("em",{parentName:"li"},"for eg. slugs are prefixed\nwith")," ",(0,l.kt)("em",{parentName:"li"},"en-GB")," and ",(0,l.kt)("em",{parentName:"li"},"it-IT"),".\n",(0,l.kt)("img",{parentName:"li",src:"https://amidostacksassets.blob.core.windows.net/docs/assets/i18n_fields.jpg",alt:"Field translate"})),(0,l.kt)("li",{parentName:"ul"},"NextJS static page generator builds dynamic pages and paths using the slug\ndata.\n",(0,l.kt)("img",{parentName:"li",src:"https://amidostacksassets.blob.core.windows.net/docs/assets/build_output.jpg",alt:"Build output"})),(0,l.kt)("li",{parentName:"ul"},"Added a language switcher in the blog post pages in the header. The switcher\nwill update the URL to relative prefixed path for ",(0,l.kt)("em",{parentName:"li"},"eg:\n/posts/it-IT/documentation-demo")," refer the image below\n",(0,l.kt)("img",{parentName:"li",src:"https://amidostacksassets.blob.core.windows.net/docs/assets/published_blog.jpg",alt:"published_blog"}))),(0,l.kt)("hr",null))}d.isMDXComponent=!0}}]);