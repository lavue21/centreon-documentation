"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[56608],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25854:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={id:"applications-protocol-telnet",title:"Telnet Scenario"},l=void 0,p={unversionedId:"integrations/plugin-packs/procedures/applications-protocol-telnet",id:"integrations/plugin-packs/procedures/applications-protocol-telnet",title:"Telnet Scenario",description:"Prerequisites",source:"@site/pp/integrations/plugin-packs/procedures/applications-protocol-telnet.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-protocol-telnet",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/applications-protocol-telnet",draft:!1,tags:[],version:"current",frontMatter:{id:"applications-protocol-telnet",title:"Telnet Scenario"},sidebar:"pp",previous:{title:"SMTP Server",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/applications-protocol-smtp"},next:{title:"TFTP Server",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/applications-protocol-tftp"}},c={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Centreon Plugin",id:"centreon-plugin",level:3},{value:"Remote server",id:"remote-server",level:3},{value:"Centreon Configuration",id:"centreon-configuration",level:2},{value:"Create a new Telnet Scenario server",id:"create-a-new-telnet-scenario-server",level:3}],u={toc:s};function m(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",o({},{id:"prerequisites"}),"Prerequisites"),(0,r.kt)("h3",o({},{id:"centreon-plugin"}),"Centreon Plugin"),(0,r.kt)("p",null,"Install this plugin on each needed poller:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"yum install centreon-plugin-Applications-Protocol-Telnet\n")),(0,r.kt)("h3",o({},{id:"remote-server"}),"Remote server"),(0,r.kt)("p",null,"The remote server must have a Telnet service running and available. You need to\ncreate a JSON scenario file. An example:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),'[\n    {"cmd": "open", "options": { "Host": "10.0.0.1", "Port": "23", "Timeout": "30" } },\n    {"cmd": "login", "options": { "Name": "admin", "Password": "pass", "Timeout": "5" } },\n    {"cmd": "waitfor", "options": { "Match": "/string/", "Timeout": "5" } },\n    {"cmd": "put", "options": { "String": "/mystring/", "Timeout": "5" } },\n    {"cmd": "close" }\n]\n')),(0,r.kt)("h2",o({},{id:"centreon-configuration"}),"Centreon Configuration"),(0,r.kt)("h3",o({},{id:"create-a-new-telnet-scenario-server"}),"Create a new Telnet Scenario server"),(0,r.kt)("p",null,'Go to "Configuration ',">",' Hosts" and click "Add". Then, fill the form as shown by\nthe following table :'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"left"}),"Field"),(0,r.kt)("th",o({parentName:"tr"},{align:"left"}),"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"Host name"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),(0,r.kt)("em",{parentName:"td"},"Name of the host"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"Alias"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),(0,r.kt)("em",{parentName:"td"},"Host description"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"IP"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),(0,r.kt)("em",{parentName:"td"},"Host IP Address"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"Monitored from"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),(0,r.kt)("em",{parentName:"td"},"Monitoring Poller to use"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"Host Multiple Templates"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"App-Protocol-Telnet-custom")))),(0,r.kt)("p",null,'Click "Save" button.'))}m.isMDXComponent=!0}}]);