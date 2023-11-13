"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[87981],{14963:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>g});n(67294);var o=n(3905);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function a(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const s={id:"hosts-create",title:"Monitoring a host"},c=void 0,l={unversionedId:"monitoring/basic-objects/hosts-create",id:"version-23.10/monitoring/basic-objects/hosts-create",title:"Monitoring a host",description:"A host is any entity that has an IP address corresponding to a resource of the information system. e.g.: A server, network printer, NAS server, temperature sensor, IP camera, etc.",source:"@site/versioned_docs/version-23.10/monitoring/basic-objects/hosts-create.md",sourceDirName:"monitoring/basic-objects",slug:"/monitoring/basic-objects/hosts-create",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/monitoring/basic-objects/hosts-create",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/monitoring/basic-objects/hosts-create.md",tags:[],version:"23.10",lastUpdatedAt:1699872045,formattedLastUpdatedAt:"Nov 13, 2023",frontMatter:{id:"hosts-create",title:"Monitoring a host"},sidebar:"version-23.10/docs",previous:{title:"Deploying a configuration",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/monitoring/monitoring-servers/deploying-a-configuration"},next:{title:"Creating hosts manually",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/monitoring/basic-objects/hosts"}},p={},g=[{value:"Monitoring a host",id:"monitoring-a-host",level:2}],h={toc:g},m="wrapper";function u(t){var{components:e}=t,s=a(t,["components"]);return(0,o.kt)(m,i(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),o.forEach((function(e){r(t,e,n[e])}))}return t}({},h,s),{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A host is any entity that has an IP address corresponding to a resource of the information system. e.g.: A server, network printer, NAS server, temperature sensor, IP camera, etc."),(0,o.kt)("p",null,"The list of hosts is shown on the ",(0,o.kt)("strong",{parentName:"p"},"Configuration > Hosts > Hosts")," page."),(0,o.kt)("p",null,"You can:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/monitoring/basic-objects/hosts"},"create hosts manually"),", using ",(0,o.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/monitoring/basic-objects/hosts-templates"},"host templates")),(0,o.kt)("li",{parentName:"ul"},"use the ",(0,o.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/monitoring/discovery/introduction"},"hosts discovery feature"))),(0,o.kt)("h2",{id:"monitoring-a-host"},"Monitoring a host"),(0,o.kt)("p",null,"The easiest way to monitor a host is to assign it a ",(0,o.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/monitoring/basic-objects/hosts-templates"},"template")," from a ",(0,o.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/monitoring/pluginpacks"},"Monitoring Connector"),": "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To find out the name of the template for a specific Monitoring Connector, go to ",(0,o.kt)("strong",{parentName:"p"},"Configuration > Monitoring Connectors Manager"),'. Search for the Monitoring Connector you want, and then click the "i" icon at the bottom left of the pack.'),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"image",src:n(99204).Z,width:"131",height:"130"})),(0,o.kt)("p",{parentName:"li"},"The documentation for the Monitoring Connector opens: it will give you the exact name of the template for this Monitoring Connector.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create the host:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/monitoring/basic-objects/hosts"},"manually"),": in the ",(0,o.kt)("strong",{parentName:"li"},"Templates")," field, select the template for the Monitoring Connector you want."),(0,o.kt)("li",{parentName:"ul"},"using the ",(0,o.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/monitoring/discovery/hosts-discovery"},"autodiscovery")," module: the Monitoring Connector will be filled in automatically."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/monitoring/monitoring-servers/deploying-a-configuration"},"Deploy")," the configuration. The host and its services are now monitored: they are\ndisplayed on the ",(0,o.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/alerts-notifications/resources-status"},"Resources status")," page."))))}u.isMDXComponent=!0},99204:(t,e,n)=>{n.d(e,{Z:()=>o});const o="data:image/png;base64,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"}}]);