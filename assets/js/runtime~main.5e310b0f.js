(()=>{"use strict";var e,a,d,c,f,b={},r={};function t(e){var a=r[e];if(void 0!==a)return a.exports;var d=r[e]={exports:{}};return b[e].call(d.exports,d,d.exports,t),d.exports}t.m=b,e=[],t.O=(a,d,c,f)=>{if(!d){var b=1/0;for(n=0;n<e.length;n++){d=e[n][0],c=e[n][1],f=e[n][2];for(var r=!0,o=0;o<d.length;o++)(!1&f||b>=f)&&Object.keys(t.O).every((e=>t.O[e](d[o])))?d.splice(o--,1):(r=!1,f<b&&(b=f));if(r){e.splice(n--,1);var l=c();void 0!==l&&(a=l)}}return a}f=f||0;for(var n=e.length;n>0&&e[n-1][2]>f;n--)e[n]=e[n-1];e[n]=[d,c,f]},t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},d=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,t.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var f=Object.create(null);t.r(f);var b={};a=a||[null,d({}),d([]),d(d)];for(var r=2&c&&e;"object"==typeof r&&!~a.indexOf(r);r=d(r))Object.getOwnPropertyNames(r).forEach((a=>b[a]=()=>e[a]));return b.default=()=>e,t.d(f,b),f},t.d=(e,a)=>{for(var d in a)t.o(a,d)&&!t.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:a[d]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((a,d)=>(t.f[d](e,a),a)),[])),t.u=e=>"assets/js/"+({153:"fc270d06",194:"737482c1",218:"7ebfd7b0",253:"c4f5d8e4",274:"414e16ac",412:"0a7a1cb8",471:"04f9d5a5",602:"6c94c7d9",812:"6e3d5508",847:"84c0bcc1",849:"0058b4c6",956:"4125fe19",1e3:"030f8d28",1027:"dd34129c",1059:"38121634",1206:"94993bad",1225:"a8d96c67",1235:"a7456010",1349:"eedf6952",1421:"fa2c107f",1455:"f388282e",1497:"1581399b",1616:"e45d8111",1634:"3c29e2ef",1671:"98b2166d",1695:"6480fb11",1702:"c99510ac",1704:"495e2f71",1800:"1cced86e",1824:"aa0e6060",1982:"85707196",1988:"2e66a542",1990:"2266d79a",1995:"b05ee991",2042:"reactPlayerTwitch",2195:"d21d2c84",2323:"3134a503",2444:"560e98d8",2468:"2e843c24",2564:"926a518c",2634:"9803c769",2637:"b5831b65",2663:"7ccc2f3a",2681:"c44fafdd",2723:"reactPlayerMux",2736:"63a3aa1c",2749:"f35e5402",2764:"0bfd7576",2944:"d778a53f",3136:"0c516743",3178:"a3e00ebe",3199:"da080250",3237:"d7d4d92f",3285:"df639352",3361:"c377a04b",3392:"reactPlayerVidyard",3579:"9dd93029",3641:"e197774f",3661:"6eb83d4b",3755:"10d871ba",3774:"027fc7cc",3805:"5ab30b4c",3893:"4efdedf0",4205:"1a7bc6f2",4285:"89abd613",4550:"552b4366",4560:"1e1575f9",4713:"54d77e99",4723:"1d9a586d",4738:"0a728393",4777:"df83160f",4810:"fdd1b509",4907:"cd507b8a",4918:"cd8bc9d6",5041:"c9b058cf",5199:"89a733e8",5252:"5ff780a4",5281:"3556501c",5370:"bc6da52b",5417:"8f488a34",5602:"f5417503",5650:"a7fa594d",5734:"7f2c8919",5742:"aba21aa0",5880:"654e15f9",6004:"6a2b67c4",6083:"fd50f223",6169:"30b4305c",6173:"reactPlayerVimeo",6228:"b078c0fc",6242:"aee0b240",6328:"reactPlayerDailyMotion",6353:"reactPlayerPreview",6395:"745b4260",6404:"3aa552ac",6463:"reactPlayerKaltura",6537:"503b97f0",6597:"b7dde44d",6637:"8eac0476",6726:"0991a5c5",6734:"02aa6397",6752:"95bab7f5",6823:"8a7a0add",6887:"reactPlayerFacebook",6899:"47211b0b",6954:"b5048ac6",7051:"e747ec83",7074:"03388d76",7097:"f25e5da0",7098:"a7bd4aaa",7169:"ccfef88a",7207:"1a451233",7283:"48b3647b",7303:"bc4707c8",7329:"48518084",7357:"22f8ff62",7389:"597e0d5c",7434:"80a64d00",7443:"e214a2c6",7458:"reactPlayerFilePlayer",7489:"1d79b670",7504:"1898535d",7570:"reactPlayerMixcloud",7599:"da4127da",7627:"reactPlayerStreamable",7632:"25952044",7736:"e8d03bd3",7752:"ae739112",7925:"c6a10652",8106:"4d6fbf4e",8401:"17896441",8424:"5daba60d",8431:"3dbbb6bc",8438:"bc5ee593",8446:"reactPlayerYouTube",8568:"ef434f98",8579:"413c892d",8583:"4ae6a656",8622:"effe3c52",8656:"f6fe5f12",8757:"7a7ae05b",8835:"517d9d17",8910:"ad98f8ba",8942:"6916e1c4",9037:"80b9a969",9048:"a94703ab",9157:"1b8235d9",9260:"3deea674",9280:"40932100",9340:"reactPlayerWistia",9564:"ba7b83c5",9614:"f208b0b5",9631:"eac4a6d2",9647:"5e95c892",9744:"78d23669",9750:"17b46bf9",9818:"d93ebc52",9845:"16856501",9876:"2a024341",9979:"reactPlayerSoundCloud"}[e]||e)+"."+{153:"f14376d6",194:"d380e84c",218:"cfd8fb88",253:"99d01386",274:"3def7958",412:"f8d61302",471:"b6a1f9b7",602:"6ff26915",812:"4514a6f6",847:"38a62311",849:"27009c92",956:"15987fde",1e3:"522d99c6",1027:"ad2bd942",1059:"9da53deb",1206:"ba7a15a5",1225:"a174945a",1235:"5d04243b",1349:"96421537",1421:"ddd8eaaa",1455:"fccf68fe",1497:"aca95946",1510:"471e1ff7",1616:"27e8b80b",1634:"92b9875c",1671:"36bb9cf3",1695:"e571d10f",1702:"5c6cb067",1704:"ac216faa",1800:"4c48b491",1824:"a04d0caa",1982:"2513f2d7",1988:"c8536349",1990:"fcc7232a",1995:"d71041df",2042:"b8001a42",2195:"0616d146",2237:"bfe371f8",2323:"41d599e4",2444:"c5033fd1",2468:"997431d7",2564:"24dc6f9a",2634:"18167de8",2637:"efd4f2ec",2663:"6929e072",2681:"61361a98",2723:"69eac18a",2736:"39f3b2bc",2749:"11c413b8",2764:"8c9dfe87",2944:"5645113e",3136:"67214e37",3178:"5fc7d92e",3199:"bc9d60e3",3237:"ed030d13",3285:"87d2ae90",3361:"1f0d76d4",3392:"c921f247",3554:"ec0bc887",3579:"e3089c7a",3641:"933ce29a",3661:"94d41a93",3755:"c52346a4",3774:"b232ec83",3805:"8f39fc65",3893:"6bbc3a4b",4205:"4e2cd32f",4285:"445bc880",4550:"d3df09dc",4560:"7103a663",4713:"4e784749",4723:"7c77d2f1",4738:"862b3e6d",4777:"2379be09",4810:"ce61957a",4907:"6d4a5898",4918:"1f8d8933",5041:"eea6e7fc",5199:"2edb9f81",5252:"2be28e8b",5281:"dbbc0f02",5370:"4db7066a",5417:"c0a6217c",5602:"ae4b9f32",5650:"71d054d6",5734:"1ac1ffce",5742:"7ec748b4",5880:"160b6db0",6004:"f197fbf5",6083:"68dd9e2b",6169:"55f929f6",6173:"b9d42344",6228:"1af7fd83",6242:"27a99410",6328:"03c692b6",6353:"fc8cdd51",6395:"a7079892",6404:"6dc10063",6463:"640fee8a",6537:"c5402764",6597:"6d32b010",6637:"e6d008f9",6726:"df4fd454",6734:"de1ac345",6752:"c047ebb2",6823:"8b548615",6887:"d550ebb2",6899:"71bd0d8b",6954:"6b91de8f",7051:"44f3a9d5",7074:"353bb10c",7097:"ac5c4160",7098:"86bd6d30",7169:"49389455",7207:"647c0970",7283:"c6523b33",7303:"6e896be8",7329:"fc7639a1",7357:"c7d716ad",7389:"9b7ea8e5",7434:"85567672",7443:"4aeb1f9d",7458:"4a0cc5d5",7489:"fe448f6c",7504:"8fb949ba",7570:"1c365a95",7599:"d6b43e34",7627:"9b1bdcfb",7632:"bdb82306",7736:"3e65cd71",7752:"26daff20",7925:"4ad9d389",8106:"661a5994",8401:"8c44f1af",8424:"eea16e81",8431:"8df3ad10",8438:"8e08da06",8446:"bebf2201",8568:"486f42fe",8579:"d81eddfe",8583:"830b97d2",8622:"e3ef40b6",8656:"456a4c92",8757:"a2727e8b",8835:"53f72b7c",8910:"2e651544",8942:"82182a41",9037:"3245cc6e",9048:"52e2eb33",9157:"3e76ebeb",9260:"2623d7aa",9280:"b384fec2",9340:"43d7b75c",9564:"b253fd24",9614:"44b03338",9631:"0b2034cc",9647:"3789f107",9744:"8e91df39",9750:"c906906d",9818:"6259eac5",9845:"4f7e5d31",9876:"c6bbb1af",9979:"fe40942f"}[e]+".js",t.miniCssF=e=>{},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),c={},f="stacks:",t.l=(e,a,d,b)=>{if(c[e])c[e].push(a);else{var r,o;if(void 0!==d)for(var l=document.getElementsByTagName("script"),n=0;n<l.length;n++){var i=l[n];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==f+d){r=i;break}}r||(o=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,t.nc&&r.setAttribute("nonce",t.nc),r.setAttribute("data-webpack",f+d),r.src=e),c[e]=[a];var u=(a,d)=>{r.onerror=r.onload=null,clearTimeout(s);var f=c[e];if(delete c[e],r.parentNode&&r.parentNode.removeChild(r),f&&f.forEach((e=>e(d))),a)return a(d)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=u.bind(null,r.onerror),r.onload=u.bind(null,r.onload),o&&document.head.appendChild(r)}},t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.p="/",t.gca=function(e){return e={16856501:"9845",17896441:"8401",25952044:"7632",38121634:"1059",40932100:"9280",48518084:"7329",85707196:"1982",fc270d06:"153","737482c1":"194","7ebfd7b0":"218",c4f5d8e4:"253","414e16ac":"274","0a7a1cb8":"412","04f9d5a5":"471","6c94c7d9":"602","6e3d5508":"812","84c0bcc1":"847","0058b4c6":"849","4125fe19":"956","030f8d28":"1000",dd34129c:"1027","94993bad":"1206",a8d96c67:"1225",a7456010:"1235",eedf6952:"1349",fa2c107f:"1421",f388282e:"1455","1581399b":"1497",e45d8111:"1616","3c29e2ef":"1634","98b2166d":"1671","6480fb11":"1695",c99510ac:"1702","495e2f71":"1704","1cced86e":"1800",aa0e6060:"1824","2e66a542":"1988","2266d79a":"1990",b05ee991:"1995",reactPlayerTwitch:"2042",d21d2c84:"2195","3134a503":"2323","560e98d8":"2444","2e843c24":"2468","926a518c":"2564","9803c769":"2634",b5831b65:"2637","7ccc2f3a":"2663",c44fafdd:"2681",reactPlayerMux:"2723","63a3aa1c":"2736",f35e5402:"2749","0bfd7576":"2764",d778a53f:"2944","0c516743":"3136",a3e00ebe:"3178",da080250:"3199",d7d4d92f:"3237",df639352:"3285",c377a04b:"3361",reactPlayerVidyard:"3392","9dd93029":"3579",e197774f:"3641","6eb83d4b":"3661","10d871ba":"3755","027fc7cc":"3774","5ab30b4c":"3805","4efdedf0":"3893","1a7bc6f2":"4205","89abd613":"4285","552b4366":"4550","1e1575f9":"4560","54d77e99":"4713","1d9a586d":"4723","0a728393":"4738",df83160f:"4777",fdd1b509:"4810",cd507b8a:"4907",cd8bc9d6:"4918",c9b058cf:"5041","89a733e8":"5199","5ff780a4":"5252","3556501c":"5281",bc6da52b:"5370","8f488a34":"5417",f5417503:"5602",a7fa594d:"5650","7f2c8919":"5734",aba21aa0:"5742","654e15f9":"5880","6a2b67c4":"6004",fd50f223:"6083","30b4305c":"6169",reactPlayerVimeo:"6173",b078c0fc:"6228",aee0b240:"6242",reactPlayerDailyMotion:"6328",reactPlayerPreview:"6353","745b4260":"6395","3aa552ac":"6404",reactPlayerKaltura:"6463","503b97f0":"6537",b7dde44d:"6597","8eac0476":"6637","0991a5c5":"6726","02aa6397":"6734","95bab7f5":"6752","8a7a0add":"6823",reactPlayerFacebook:"6887","47211b0b":"6899",b5048ac6:"6954",e747ec83:"7051","03388d76":"7074",f25e5da0:"7097",a7bd4aaa:"7098",ccfef88a:"7169","1a451233":"7207","48b3647b":"7283",bc4707c8:"7303","22f8ff62":"7357","597e0d5c":"7389","80a64d00":"7434",e214a2c6:"7443",reactPlayerFilePlayer:"7458","1d79b670":"7489","1898535d":"7504",reactPlayerMixcloud:"7570",da4127da:"7599",reactPlayerStreamable:"7627",e8d03bd3:"7736",ae739112:"7752",c6a10652:"7925","4d6fbf4e":"8106","5daba60d":"8424","3dbbb6bc":"8431",bc5ee593:"8438",reactPlayerYouTube:"8446",ef434f98:"8568","413c892d":"8579","4ae6a656":"8583",effe3c52:"8622",f6fe5f12:"8656","7a7ae05b":"8757","517d9d17":"8835",ad98f8ba:"8910","6916e1c4":"8942","80b9a969":"9037",a94703ab:"9048","1b8235d9":"9157","3deea674":"9260",reactPlayerWistia:"9340",ba7b83c5:"9564",f208b0b5:"9614",eac4a6d2:"9631","5e95c892":"9647","78d23669":"9744","17b46bf9":"9750",d93ebc52:"9818","2a024341":"9876",reactPlayerSoundCloud:"9979"}[e]||e,t.p+t.u(e)},(()=>{var e={5354:0,1869:0};t.f.j=(a,d)=>{var c=t.o(e,a)?e[a]:void 0;if(0!==c)if(c)d.push(c[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var f=new Promise(((d,f)=>c=e[a]=[d,f]));d.push(c[2]=f);var b=t.p+t.u(a),r=new Error;t.l(b,(d=>{if(t.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var f=d&&("load"===d.type?"missing":d.type),b=d&&d.target&&d.target.src;r.message="Loading chunk "+a+" failed.\n("+f+": "+b+")",r.name="ChunkLoadError",r.type=f,r.request=b,c[1](r)}}),"chunk-"+a,a)}},t.O.j=a=>0===e[a];var a=(a,d)=>{var c,f,b=d[0],r=d[1],o=d[2],l=0;if(b.some((a=>0!==e[a]))){for(c in r)t.o(r,c)&&(t.m[c]=r[c]);if(o)var n=o(t)}for(a&&a(d);l<b.length;l++)f=b[l],t.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return t.O(n)},d=self.webpackChunkstacks=self.webpackChunkstacks||[];d.forEach(a.bind(null,0)),d.push=a.bind(null,d.push.bind(d))})()})();