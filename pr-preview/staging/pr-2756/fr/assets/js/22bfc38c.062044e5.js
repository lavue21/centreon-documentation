"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[7363],{49156:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>m,toc:()=>d});n(67294);var a=n(3905);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const i={id:"hardware-storage-netapp-ontap-oncommandapi",title:"NetApp Ontap Oncommand API"},l=void 0,m={unversionedId:"integrations/plugin-packs/procedures/hardware-storage-netapp-ontap-oncommandapi",id:"integrations/plugin-packs/procedures/hardware-storage-netapp-ontap-oncommandapi",title:"NetApp Ontap Oncommand API",description:"| Current version | Status   | Date        |",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/hardware-storage-netapp-ontap-oncommandapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-storage-netapp-ontap-oncommandapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/hardware-storage-netapp-ontap-oncommandapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/hardware-storage-netapp-ontap-oncommandapi.md",tags:[],version:"current",frontMatter:{id:"hardware-storage-netapp-ontap-oncommandapi",title:"NetApp Ontap Oncommand API"},sidebar:"pp",previous:{title:"Lenovo S Series",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/hardware-storage-lenovo-sseries-snmp"},next:{title:"NetApp Ontap Rest API",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/hardware-storage-netapp-ontap-restapi"}},s={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Centreon Plugin",id:"centreon-plugin",level:3},{value:"Centreon Configuration",id:"centreon-configuration",level:2},{value:"Create a new NetApp server",id:"create-a-new-netapp-server",level:3},{value:"Host Macro Configuration",id:"host-macro-configuration",level:3}],c={toc:d},u="wrapper";function g(t){var{components:e}=t,n=p(t,["components"]);return(0,a.kt)(u,o(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){r(t,e,n[e])}))}return t}({},c,n),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Current version"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Date"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"3.0.0"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"STABLE")),(0,a.kt)("td",{parentName:"tr",align:"left"},"May 07 2020")))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h3",{id:"centreon-plugin"},"Centreon Plugin"),(0,a.kt)("p",null,"Install this plugin on each needed poller:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yum install centreon-plugin-Hardware-Storage-Netapp-Ontap-Oncommandapi\n")),(0,a.kt)("h2",{id:"centreon-configuration"},"Centreon Configuration"),(0,a.kt)("h3",{id:"create-a-new-netapp-server"},"Create a new NetApp server"),(0,a.kt)("p",null,"Go to ",(0,a.kt)("em",{parentName:"p"},"Configuration ",">"," Hosts")," and click ",(0,a.kt)("em",{parentName:"p"},"Add"),". Then, fill the form as shown by\nthe following table:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Host name"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"Name of the host"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Alias"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"Host description"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"IP"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"Host IP Address"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Monitored from"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"Monitoring Poller to use"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Host Multiple Templates"),(0,a.kt)("td",{parentName:"tr",align:"left"},"HW-Storage-NetApp-Ontap-Oncommandapi-custom")))),(0,a.kt)("h3",{id:"host-macro-configuration"},"Host Macro Configuration"),(0,a.kt)("p",null,"The following macros must be configured on host:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ONCOMMANDAPIURLPATH"),(0,a.kt)("td",{parentName:"tr",align:"left"},"OnCommand API path"),(0,a.kt)("td",{parentName:"tr",align:"left"},"/api/4.0/ontap")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ONCOMMANDAPIUSERNAME"),(0,a.kt)("td",{parentName:"tr",align:"left"},"OnCommand API username"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ONCOMMANDAPIPASSWORD"),(0,a.kt)("td",{parentName:"tr",align:"left"},"OnCommand API password"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ONCOMMANDAPIPORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"OnCommand API port"),(0,a.kt)("td",{parentName:"tr",align:"left"},"8443")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ONCOMMANDAPIPROTO"),(0,a.kt)("td",{parentName:"tr",align:"left"},"OnCommand API protcole"),(0,a.kt)("td",{parentName:"tr",align:"left"},"https")))),(0,a.kt)("p",null,"Click on the ",(0,a.kt)("em",{parentName:"p"},"Save")," button."))}g.isMDXComponent=!0}}]);