"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[9304],{60266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>s,metadata:()=>c,toc:()=>u});n(67294);var i=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"accedian-pvx-skylight",title:"Accedian PVX Skylight"},l=void 0,c={unversionedId:"integrations/digital-experience-monitoring/accedian-pvx-skylight",id:"version-23.10/integrations/digital-experience-monitoring/accedian-pvx-skylight",title:"Accedian PVX Skylight",description:"How it works",source:"@site/versioned_docs/version-23.10/integrations/digital-experience-monitoring/pack-skylight-pvx.md",sourceDirName:"integrations/digital-experience-monitoring",slug:"/integrations/digital-experience-monitoring/accedian-pvx-skylight",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/docs/integrations/digital-experience-monitoring/accedian-pvx-skylight",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/integrations/digital-experience-monitoring/pack-skylight-pvx.md",tags:[],version:"23.10",lastUpdatedAt:1699375250,formattedLastUpdatedAt:"Nov 7, 2023",frontMatter:{id:"accedian-pvx-skylight",title:"Accedian PVX Skylight"}},p={},u=[{value:"How it works",id:"how-it-works",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"Requirements",id:"requirements",level:2},{value:"PVX",id:"pvx",level:3},{value:"Centreon",id:"centreon",level:3},{value:"Getting started",id:"getting-started",level:2}],d={toc:u},g="wrapper";function k(e){var{components:t}=e,s=a(e,["components"]);return(0,i.kt)(g,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r(e,t,n[t])}))}return e}({},d,s),{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"how-it-works"},"How it works"),(0,i.kt)("p",null,"Every PVX-Skylight instance provides XML API endpoints allowing Centreon to\nperform queries against it."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"architecture",src:n(44011).Z,width:"1050",height:"1035"})),(0,i.kt)("h2",{id:"compatibility"},"Compatibility"),(0,i.kt)("p",null,"The connector has been tested with the following versions: ","*"," PVX version 5.1.1"),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("h3",{id:"pvx"},"PVX"),(0,i.kt)("p",null,"To query PVX API, you need to generate an access key. This key will never expire\nand the procedure below is an extract from the official documentation\n",(0,i.kt)("a",{parentName:"p",href:"http://docs.performancevision.com/api_use"},"http://docs.performancevision.com/api_use"),"."),(0,i.kt)("p",null,"Follow these steps to get your API key. In each step replace the value of the\nmacros enclosed by '\\< ",">","' with yours."),(0,i.kt)("p",null,"Command: ",(0,i.kt)("inlineCode",{parentName:"p"},"curl -k\n'https://**<pvxapihost>**/api/login?user=**<user>**&password=**<password>**'")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "result",\n    "result": "**session:91554086-842b-4b73-9028-c51d20d91b94**"\n}\n')),(0,i.kt)("p",null,"Thanks to the obtained session ID, execute the command below get a secret key"),(0,i.kt)("p",null,"Command: ",(0,i.kt)("inlineCode",{parentName:"p"},"curl -k\n'https://<pvxapihost>/api/create-api-key?name=**<keyname>**&_session=session:91554086-842b-4b73-9028-c51d20d91b94'")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "result",\n    "result": "**secret:e40b1cc6-f629-43a4-8be6-14a9c9f036e0**"\n}\n')),(0,i.kt)("p",null,'In this example the API key is "secret:e40b1cc6-f629-43a4-8be6-14a9c9f036e0".'),(0,i.kt)("h3",{id:"centreon"},"Centreon"),(0,i.kt)("p",null,"On each poller connecting to a PVX host, install the plugin:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"[root@cps-demo-central ~]# yum install -y\ncentreon-plugin-Applications-Pvx-Restapi.noarch")),(0,i.kt)("p",null,'On your central server, install the plugin-pack through "Configuration ',">","\nPlugin-Packs ",">",' Manager" menu:'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"install_epp",src:n(61967).Z,width:"416",height:"343"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,i.kt)("strong",{parentName:"p"},"If you are using an offline license"),": Make sure to install\nthe RPM package first with the command below:")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"[root@cps-demo-central ~]# yum install -y\ncentreon-pack-applications-pvx-restapi.noarch")),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("p",null,"You can now deploy hosts based upon the ",(0,i.kt)("strong",{parentName:"p"},"App-Pvx-Application-Restapi-custom"),"."))}k.isMDXComponent=!0},44011:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/skylight-pvx-connector-c10a1b9365cdaa0b44eb896d61bfbc98.png"},61967:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/skylight-pvx-epp-install-53d6bc63319db286de5dbfd95eb79a9f.png"}}]);