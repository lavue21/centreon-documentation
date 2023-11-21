"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[24639],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>d});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),c=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,i(i({ref:e},s),{},{components:r})):n.createElement(f,i({ref:e},s))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},83116:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});r(67294);var n=r(3905);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a.apply(this,arguments)}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}const i={id:"applications-protocol-x509",title:"X509 Certificate"},l=void 0,p={unversionedId:"integrations/plugin-packs/procedures/applications-protocol-x509",id:"integrations/plugin-packs/procedures/applications-protocol-x509",title:"X509 Certificate",description:"Prerequisites",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-protocol-x509.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-protocol-x509",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/applications-protocol-x509",draft:!1,tags:[],version:"current",frontMatter:{id:"applications-protocol-x509",title:"X509 Certificate"},sidebar:"pp",previous:{title:"TFTP Server",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/applications-protocol-tftp"},next:{title:"ABB CMS-700",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/hardware-devices-abb-cms700-snmp"}},c={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Centreon Plugin",id:"centreon-plugin",level:3},{value:"Remote server",id:"remote-server",level:3},{value:"Centreon Configuration",id:"centreon-configuration",level:2},{value:"Create a host using the appropriate template",id:"create-a-host-using-the-appropriate-template",level:3},{value:"Service Macro Configuration",id:"service-macro-configuration",level:3}],m={toc:s};function u(t){var{components:e}=t,r=o(t,["components"]);return(0,n.kt)("wrapper",a({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",a({},{id:"prerequisites"}),"Prerequisites"),(0,n.kt)("p",null,"This chapter describes the prerequisites installation needed by plugins to run."),(0,n.kt)("h3",a({},{id:"centreon-plugin"}),"Centreon Plugin"),(0,n.kt)("p",null,"Install this plugin on each needed poller:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-shell"}),"yum install centreon-plugin-Applications-Protocol-X509\n")),(0,n.kt)("h3",a({},{id:"remote-server"}),"Remote server"),(0,n.kt)("p",null,"The remote server must have an X509's certificate."),(0,n.kt)("h2",a({},{id:"centreon-configuration"}),"Centreon Configuration"),(0,n.kt)("h3",a({},{id:"create-a-host-using-the-appropriate-template"}),"Create a host using the appropriate template"),(0,n.kt)("p",null,"Go to ",(0,n.kt)("em",{parentName:"p"},"Configuration ",">"," Hosts")," and click ",(0,n.kt)("em",{parentName:"p"},"Add"),". Then, fill the form as shown by\nthe following table:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",a({parentName:"tr"},{align:"left"}),"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Host name"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"Name of the host"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Alias"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"Host description"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"IP"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"Host IP Address"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Monitored from"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"Monitoring Poller to use"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Host Multiple Templates"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"App-Protocol-X509-custom")))),(0,n.kt)("p",null,"Click on the ",(0,n.kt)("em",{parentName:"p"},"Save")," button."),(0,n.kt)("p",null,"This service was automatically created for this host:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"left"}),"Service"),(0,n.kt)("th",a({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"X509-Expiration"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Monitor expiration date of a X509's certificate")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"left"}),"Optionnal Service"),(0,n.kt)("th",a({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"X509-Subject"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Monitor an element of the subject name of a X509's certificate")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"X509-Issuer"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Monitor an element of the issuer name of a X509's certificate")))),(0,n.kt)("h3",a({},{id:"service-macro-configuration"}),"Service Macro Configuration"),(0,n.kt)("p",null,"The following macros must be configured on service (","*"," means mandatory options):"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"left"}),"Macro"),(0,n.kt)("th",a({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",a({parentName:"tr"},{align:"left"}),"Default value"),(0,n.kt)("th",a({parentName:"tr"},{align:"left"}),"Example"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"PORT","*"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Port to connect to server"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"443"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"443")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"WARNING","*"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Warning Thresold (number of days)"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"60:"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"60:")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"CRITICAL","*"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Critical Thresold (number of days)"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"30:"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"30:")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"ISSUERNAME"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Content of the issuer name"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"})),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"OBJECTNAME"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Content of the object name"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"})),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}))))))}u.isMDXComponent=!0}}]);