"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[46600],{80433:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>u});n(67294);var r=n(3905);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const i={id:"network-switchs-aruba-standard-snmp",title:"Aruba Standard"},p=void 0,s={unversionedId:"integrations/plugin-packs/procedures/network-switchs-aruba-standard-snmp",id:"integrations/plugin-packs/procedures/network-switchs-aruba-standard-snmp",title:"Aruba Standard",description:"Prerequisites",source:"@site/pp/integrations/plugin-packs/procedures/network-switchs-aruba-standard-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-switchs-aruba-standard-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/network-switchs-aruba-standard-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/network-switchs-aruba-standard-snmp.md",tags:[],version:"current",frontMatter:{id:"network-switchs-aruba-standard-snmp",title:"Aruba Standard"},sidebar:"pp",previous:{title:"Aruba Orchestrator Rest API",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/network-aruba-orchestrator-restapi"},next:{title:"ArubaOS-CX SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/network-aruba-aoscx-snmp"}},m={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Centreon Plugin",id:"centreon-plugin",level:3},{value:"Configure SNMP",id:"configure-snmp",level:3},{value:"Centreon Configuration",id:"centreon-configuration",level:2},{value:"Create hosts using the appropriate template",id:"create-hosts-using-the-appropriate-template",level:3},{value:"Controller",id:"controller",level:4},{value:"Access Point",id:"access-point",level:4}],d={toc:u},c="wrapper";function k(t){var{components:e}=t,n=l(t,["components"]);return(0,r.kt)(c,o(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){a(t,e,n[e])}))}return t}({},d,n),{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h3",{id:"centreon-plugin"},"Centreon Plugin"),(0,r.kt)("p",null,"Install this plugin on each needed poller:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yum install centreon-plugin-Network-Switchs-Aruba-Standard-Snmp\n")),(0,r.kt)("h3",{id:"configure-snmp"},"Configure SNMP"),(0,r.kt)("p",null,"Follow constructor procedure to enable and configure SNMP on the equipment."),(0,r.kt)("p",null,"Read ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#troubleshooting-snmp"},"this\nguide")),"\nto troubleshoot SNMP problems."),(0,r.kt)("h2",{id:"centreon-configuration"},"Centreon Configuration"),(0,r.kt)("h3",{id:"create-hosts-using-the-appropriate-template"},"Create hosts using the appropriate template"),(0,r.kt)("p",null,"Both controllers and access points can be monitored using specific host\ntemplates."),(0,r.kt)("p",null,"Be sure to have with you the following information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Read-only SNMP community"),(0,r.kt)("li",{parentName:"ul"},"IP Address of the equipment")),(0,r.kt)("h4",{id:"controller"},"Controller"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("em",{parentName:"p"},"Configuration ",">"," Hosts")," and click ",(0,r.kt)("em",{parentName:"p"},"Add"),". Then, fill the form as shown by\nthe following table:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Name of the controller"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Alias"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Description"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"IP Address / DNS"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"IP address of the controller"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SNMP Community & Version"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Community and version of the SNMP agent"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Monitored from"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Poller used to monitor"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Templates"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Net-Aruba-Standard-Controller-SNMP-custom")))),(0,r.kt)("p",null,"Check the ",(0,r.kt)("em",{parentName:"p"},"Create Services linked to the Template too")," box and click on the\n",(0,r.kt)("em",{parentName:"p"},"Save")," button."),(0,r.kt)("p",null,"The following services will be created:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cpu"),(0,r.kt)("li",{parentName:"ul"},"Memory"),(0,r.kt)("li",{parentName:"ul"},"Storage"),(0,r.kt)("li",{parentName:"ul"},"Hardware"),(0,r.kt)("li",{parentName:"ul"},"License"),(0,r.kt)("li",{parentName:"ul"},"Controller-Status")),(0,r.kt)("p",null,"The following rules are linked to this host template:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Net-Aruba-Standard-SNMP-Packet-Errors-Name"),(0,r.kt)("li",{parentName:"ul"},"Net-Aruba-Standard-SNMP-Traffic-Name")),(0,r.kt)("h4",{id:"access-point"},"Access Point"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("em",{parentName:"p"},"Configuration ",">"," Hosts")," and click ",(0,r.kt)("em",{parentName:"p"},"Add"),". Then, fill the form as shown by\nthe following table:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Name of the access point"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Alias"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Description"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"IP Address / DNS"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"IP address of the controller")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SNMP Community & Version"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Community and version of the SNMP agent"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Monitored from"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Poller used to monitor"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Templates"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Net-Aruba-Standard-Ap-SNMP-custom")))),(0,r.kt)("p",null,"The following host macros should be set as shown:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"APNAME"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Name of the access point"))))),(0,r.kt)("p",null,"Check the ",(0,r.kt)("em",{parentName:"p"},"Create Services linked to the Template too")," box and click on the\n",(0,r.kt)("em",{parentName:"p"},"Save")," button."),(0,r.kt)("p",null,"The following services will be created:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ap-Ssid-Statistics"),(0,r.kt)("li",{parentName:"ul"},"Ap-Status")))}k.isMDXComponent=!0}}]);