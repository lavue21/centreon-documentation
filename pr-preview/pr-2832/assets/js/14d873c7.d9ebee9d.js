"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[42384],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},60014:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={id:"hardware-sensors-jacarta-snmp",title:"Jacarta Sensor"},l=void 0,p={unversionedId:"integrations/plugin-packs/procedures/hardware-sensors-jacarta-snmp",id:"integrations/plugin-packs/procedures/hardware-sensors-jacarta-snmp",title:"Jacarta Sensor",description:"Prerequisites",source:"@site/pp/integrations/plugin-packs/procedures/hardware-sensors-jacarta-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-sensors-jacarta-snmp",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/hardware-sensors-jacarta-snmp",draft:!1,tags:[],version:"current",frontMatter:{id:"hardware-sensors-jacarta-snmp",title:"Jacarta Sensor"},sidebar:"pp",previous:{title:"HWg-STE Sensor",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/hardware-sensors-hwgste-snmp"},next:{title:"LM Sensors",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/applications-lmsensors-snmp"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Centreon Plugin",id:"centreon-plugin",level:3},{value:"SNMP",id:"snmp",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Centreon Configuration",id:"centreon-configuration",level:2},{value:"Create a new PDU Raritan host",id:"create-a-new-pdu-raritan-host",level:3}],u={toc:c};function d(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",a({},{id:"prerequisites"}),"Prerequisites"),(0,n.kt)("h3",a({},{id:"centreon-plugin"}),"Centreon Plugin"),(0,n.kt)("p",null,"Install this plugin on each needed poller:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-shell"}),"yum install centreon-plugin-Hardware-Sensors-Jacarta-Snmp\n")),(0,n.kt)("h3",a({},{id:"snmp"}),"SNMP"),(0,n.kt)("p",null,"Be sure to have with you the following information:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Read-Only SNMP community"),(0,n.kt)("li",{parentName:"ul"},"IP Address of the monitoring server")),(0,n.kt)("h3",a({},{id:"troubleshooting"}),"Troubleshooting"),(0,n.kt)("p",null,"Read ",(0,n.kt)("a",a({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#troubleshooting-snmp"}),"Troubleshooting\nSNMP")),(0,n.kt)("h2",a({},{id:"centreon-configuration"}),"Centreon Configuration"),(0,n.kt)("h3",a({},{id:"create-a-new-pdu-raritan-host"}),"Create a new PDU Raritan host"),(0,n.kt)("p",null,"Go to ",(0,n.kt)("em",{parentName:"p"},"Configuration ",">"," Hosts")," and click ",(0,n.kt)("em",{parentName:"p"},"Add"),". Then, fill the form as shown by\nthe following table:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",a({parentName:"tr"},{align:"left"}),"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Host name"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"Name of the host"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Alias"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"Host description"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"IP"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"Host IP Address"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Monitored from"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"Monitoring Poller to use"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Host Multiple Templates"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"HW-Sensor-Jacarta-SNMP-custom")))),(0,n.kt)("p",null,"Click on the ",(0,n.kt)("em",{parentName:"p"},"Save")," button."))}d.isMDXComponent=!0}}]);