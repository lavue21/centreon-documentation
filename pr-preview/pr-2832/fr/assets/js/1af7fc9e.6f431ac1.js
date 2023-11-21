"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[76213],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1043:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"ot-serena",title:"Serena"},l=void 0,s={unversionedId:"integrations/itsm/ot-serena",id:"version-23.10/integrations/itsm/ot-serena",title:"Serena",description:"How it works",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/integrations/itsm/ot-serena.md",sourceDirName:"integrations/itsm",slug:"/integrations/itsm/ot-serena",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/docs/integrations/itsm/ot-serena",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/next/i18n/fr/docusaurus-plugin-content-docs/version-23.10/integrations/itsm/ot-serena.md",tags:[],version:"23.10",lastUpdatedAt:1700565273,formattedLastUpdatedAt:"21 nov. 2023",frontMatter:{id:"ot-serena",title:"Serena"},sidebar:"version-23.10/docs",previous:{title:"Request Tracker RestAPI",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/docs/integrations/itsm/ot-request-tracker-restapi"},next:{title:"ServiceNow",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/docs/integrations/itsm/ot-servicenow"}},p={},c=[{value:"How it works",id:"how-it-works",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Possibilities",id:"possibilities",level:2}],u={toc:c};function d(e){var{components:t}=e,i=a(e,["components"]);return(0,n.kt)("wrapper",o({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",o({},{id:"how-it-works"}),"How it works"),(0,n.kt)("p",null,"Serena open-tickets provider uses the Serena SOAP API to open incidents about\nyour monitoring alerts."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"architecture",src:r(50460).Z,width:"640",height:"668"})),(0,n.kt)("h2",o({},{id:"compatibility"}),"Compatibility"),(0,n.kt)("p",null,"This integration is (at least) compatible with the following Serena versions:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"to be determined")),(0,n.kt)("h2",o({},{id:"requirements"}),"Requirements"),(0,n.kt)("p",null,"Before going any further, make sure that you correctly setup\n",(0,n.kt)("a",o({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/fr/docs/alerts-notifications/ticketing#configuration-avanc%C3%A9e"}),"centreon-open-ticket"),"\ninto your Centreon instance"),(0,n.kt)("p",null,"Our provider requires the following parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Example of value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Endpoint"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("a",o({parentName:"td"},{href:"http://192.168.0.5/gsoap/gsoap_ssl.dll?XXXXXX"}),"http://192.168.0.5/gsoap/gsoap_ssl.dll?XXXXXX"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Namespace"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"xxxxxxx")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Username"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"centreon")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Password"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"MyPassword")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"Timeout"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"60")))),(0,n.kt)("h2",o({},{id:"possibilities"}),"Possibilities"),(0,n.kt)("p",null,"As of now, the provider is able to open a ticket"))}d.isMDXComponent=!0},50460:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ot-serena-architecture-dcbc174e78063deeed96126db4738e6f.png"}}]);