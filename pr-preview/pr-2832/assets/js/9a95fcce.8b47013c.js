"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[63406],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>d});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var p=n.createContext({}),u=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),m=u(r),d=o,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return r?n.createElement(k,i(i({ref:e},s),{},{components:r})):n.createElement(k,i({ref:e},s))}));function d(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},76669:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});r(67294);var n=r(3905);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o.apply(this,arguments)}function a(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}const i={id:"virtualization-proxmox-ve-restapi",title:"Proxmox VE"},l=void 0,p={unversionedId:"integrations/plugin-packs/procedures/virtualization-proxmox-ve-restapi",id:"integrations/plugin-packs/procedures/virtualization-proxmox-ve-restapi",title:"Proxmox VE",description:"Prerequisites",source:"@site/pp/integrations/plugin-packs/procedures/virtualization-proxmox-ve-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/virtualization-proxmox-ve-restapi",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/virtualization-proxmox-ve-restapi",draft:!1,tags:[],version:"current",frontMatter:{id:"virtualization-proxmox-ve-restapi",title:"Proxmox VE"},sidebar:"pp",previous:{title:"Nutanix",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/virtualization-nutanix-snmp"},next:{title:"VMware ESX",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/virtualization-vmware2-esx"}},u={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Centreon Plugin",id:"centreon-plugin",level:3},{value:"RestAPI Configuration",id:"restapi-configuration",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Centreon Configuration",id:"centreon-configuration",level:2},{value:"Create a host using the appropriate template",id:"create-a-host-using-the-appropriate-template",level:3},{value:"Host Macro Configuration",id:"host-macro-configuration",level:3}],c={toc:s};function m(t){var{components:e}=t,r=a(t,["components"]);return(0,n.kt)("wrapper",o({},c,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",o({},{id:"prerequisites"}),"Prerequisites"),(0,n.kt)("h3",o({},{id:"centreon-plugin"}),"Centreon Plugin"),(0,n.kt)("p",null,"Install this plugin on each needed poller:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"yum install centreon-plugin-Virtualization-Proxmox-Ve-Restapi\n")),(0,n.kt)("h2",o({},{id:"restapi-configuration"}),"RestAPI Configuration"),(0,n.kt)("p",null,"API user need to have this privileges:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"# VM.Monitor, VM.Audit, Datastore.Audit, Sys.Audit, Sys.Syslog'\n")),(0,n.kt)("h2",o({},{id:"troubleshooting"}),"Troubleshooting"),(0,n.kt)("p",null,"To check if you access to the api, you can run the following command :"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),'#  curl -k -d "username=root@pam&password=yourpassword"  https://10.0.0.1:8006/api2/json/access/ticket\n')),(0,n.kt)("h2",o({},{id:"centreon-configuration"}),"Centreon Configuration"),(0,n.kt)("h3",o({},{id:"create-a-host-using-the-appropriate-template"}),"Create a host using the appropriate template"),(0,n.kt)("p",null,"Go to ",(0,n.kt)("em",{parentName:"p"},"Configuration ",">"," Hosts")," and click ",(0,n.kt)("em",{parentName:"p"},"Add"),". Then, fill the form as shown by\nthe following table:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",o({parentName:"tr"},{align:"left"}),"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"Host name"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"Name of the host"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"Alias"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"Host description"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"IP"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"Host IP Address"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"Monitored from"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"Monitoring Poller to use"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"Host Multiple Templates"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"Virt-Promox-Pe-Restapi-Custom")))),(0,n.kt)("h3",o({},{id:"host-macro-configuration"}),"Host Macro Configuration"),(0,n.kt)("p",null,"The following macros must be configured on host:"),(0,n.kt)("p",null,"Macro"),(0,n.kt)("p",null,"Description"),(0,n.kt)("p",null,"Default value"),(0,n.kt)("p",null,"Example"),(0,n.kt)("p",null,"PROXMOXAPIPORT"),(0,n.kt)("p",null,"Port used to connect to the Proxmox API"),(0,n.kt)("p",null,"8006"),(0,n.kt)("p",null,"443"),(0,n.kt)("p",null,"PROXMOXAPIUSERNAME"),(0,n.kt)("p",null,"the Proxmox API user"),(0,n.kt)("p",null,"PROXMOXAPIUSERNAME"),(0,n.kt)("p",null,"monitoring"),(0,n.kt)("p",null,"PROXMOXAPIPASSWORD"),(0,n.kt)("p",null,"the Proxmox API user's password"),(0,n.kt)("p",null,"PROXMOXAPIPASSWORD"),(0,n.kt)("p",null,"HuGr6834"),(0,n.kt)("p",null,"PROXMOXAPIREALM"),(0,n.kt)("p",null,"the Proxmox API authentication mechanism"),(0,n.kt)("p",null,"pam"),(0,n.kt)("p",null,"pve"),(0,n.kt)("p",null,"PROXMOXAPIPROTO"),(0,n.kt)("p",null,"the Proxmox API protocol"),(0,n.kt)("p",null,"https"),(0,n.kt)("p",null,"http"),(0,n.kt)("p",null,"Click on the ",(0,n.kt)("em",{parentName:"p"},"Save")," button."))}m.isMDXComponent=!0}}]);