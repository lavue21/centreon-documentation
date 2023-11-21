"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[18289],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},41538:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={id:"ot-request-tracker-restapi",title:"Request Tracker RestAPI"},s=void 0,l={unversionedId:"integrations/itsm/ot-request-tracker-restapi",id:"version-23.10/integrations/itsm/ot-request-tracker-restapi",title:"Request Tracker RestAPI",description:"How it works",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/integrations/itsm/ot-request-tracker2.md",sourceDirName:"integrations/itsm",slug:"/integrations/itsm/ot-request-tracker-restapi",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/docs/integrations/itsm/ot-request-tracker-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/next/i18n/fr/docusaurus-plugin-content-docs/version-23.10/integrations/itsm/ot-request-tracker2.md",tags:[],version:"23.10",lastUpdatedAt:1700565273,formattedLastUpdatedAt:"21 nov. 2023",frontMatter:{id:"ot-request-tracker-restapi",title:"Request Tracker RestAPI"},sidebar:"version-23.10/docs",previous:{title:"OTRS RestAPI",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/docs/integrations/itsm/ot-otrs-restapi"},next:{title:"Serena",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/docs/integrations/itsm/ot-serena"}},c={},u=[{value:"How it works",id:"how-it-works",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Possibilities",id:"possibilities",level:2}],p={toc:u};function m(e){var{components:t}=e,i=o(e,["components"]);return(0,n.kt)("wrapper",a({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",a({},{id:"how-it-works"}),"How it works"),(0,n.kt)("p",null,"The Request Tracker provider uses the REST API of Request Tracker to retrieve\ndata in order to open a ticket."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"architecture",src:r(59548).Z,width:"780",height:"648"})),(0,n.kt)("h2",a({},{id:"compatibility"}),"Compatibility"),(0,n.kt)("p",null,"This connector requires at least the version 2.0 of the REST API of Request\nTracker"),(0,n.kt)("h2",a({},{id:"requirements"}),"Requirements"),(0,n.kt)("p",null,"Before going any further, make sure that you correctly setup\n",(0,n.kt)("a",a({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/fr/docs/alerts-notifications/ticketing#configuration-avanc%C3%A9e"}),"centreon-open-ticket"),"\ninto your Centreon instance"),(0,n.kt)("p",null,"Our provider requires the following parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Example of value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Address"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"192.168.0.7")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"token"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"xxxxxxxxxxxxxxxxxxxxxxxxxxxx")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Path"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"/REST/2.0/")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Timeout"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"60")))),(0,n.kt)("h2",a({},{id:"possibilities"}),"Possibilities"),(0,n.kt)("p",null,"As of now, the provider is able to retrieve the following objects from Request\nTracker:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Queues")))}m.isMDXComponent=!0},59548:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ot-request-tracker2-architecture-a0c355f2a9070a00baa9e0a8ca71b417.png"}}]);