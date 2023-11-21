"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[37510],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||a;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},46330:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"network-polycom-rmx-snmp",title:"Polycom RMX"},p=void 0,l={unversionedId:"integrations/plugin-packs/procedures/network-polycom-rmx-snmp",id:"integrations/plugin-packs/procedures/network-polycom-rmx-snmp",title:"Polycom RMX",description:"Prerequisites",source:"@site/pp/integrations/plugin-packs/procedures/network-polycom-rmx-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-polycom-rmx-snmp",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/network-polycom-rmx-snmp",draft:!1,tags:[],version:"current",frontMatter:{id:"network-polycom-rmx-snmp",title:"Polycom RMX"},sidebar:"pp",previous:{title:"Polycom HDX SNMP",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/hardware-devices-polycom-hdx-snmp"},next:{title:"Polycom RPRM SNMP",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/hardware-devices-polycom-rprm-snmp"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Centreon Plugin",id:"centreon-plugin",level:3},{value:"Configure SNMP on your server",id:"configure-snmp-on-your-server",level:3},{value:"SNMP Permissions",id:"snmp-permissions",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Centreon Configuration",id:"centreon-configuration",level:2},{value:"Create a host using the appropriate template",id:"create-a-host-using-the-appropriate-template",level:3}],c={toc:u};function m(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",o({},{id:"prerequisites"}),"Prerequisites"),(0,n.kt)("h3",o({},{id:"centreon-plugin"}),"Centreon Plugin"),(0,n.kt)("p",null,"Install this plugin on each needed poller:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"yum install centreon-plugin-Network-Polycom-Rmx-Snmp\n")),(0,n.kt)("p",null,"Be sure to have with you the following information:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Read-Only SNMP community"),(0,n.kt)("li",{parentName:"ul"},"IP Address of the equipment")),(0,n.kt)("h3",o({},{id:"configure-snmp-on-your-server"}),"Configure SNMP on your server"),(0,n.kt)("p",null,"Follow constructor procedure for your equipment."),(0,n.kt)("h3",o({},{id:"snmp-permissions"}),"SNMP Permissions"),(0,n.kt)("p",null,"Read-Only access."),(0,n.kt)("h3",o({},{id:"troubleshooting"}),"Troubleshooting"),(0,n.kt)("p",null,"Read ",(0,n.kt)("a",o({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#troubleshooting-snmp"}),"Troubleshooting\nSNMP")),(0,n.kt)("h2",o({},{id:"centreon-configuration"}),"Centreon Configuration"),(0,n.kt)("h3",o({},{id:"create-a-host-using-the-appropriate-template"}),"Create a host using the appropriate template"),(0,n.kt)("p",null,"Go to ",(0,n.kt)("em",{parentName:"p"},"Configuration ",">"," Hosts")," and click ",(0,n.kt)("em",{parentName:"p"},"Add"),". Then, fill the form as shown by\nthe following table:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",o({parentName:"tr"},{align:"left"}),"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"Host name"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"Name of the host"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"Alias"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"Host description"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"IP"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"Host IP Address"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"Monitored from"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"Monitoring Poller to use"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"Host Multiple Templates"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"Net-Polycom-Rmx-SNMP-custom")))),(0,n.kt)("p",null,"Click on the ",(0,n.kt)("em",{parentName:"p"},"Save")," button."))}m.isMDXComponent=!0}}]);