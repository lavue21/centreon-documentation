"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[24855],{8139:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>p});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={id:"platform",title:"Elements of a Centreon platform"},s=void 0,c={unversionedId:"getting-started/platform",id:"version-23.10/getting-started/platform",title:"Elements of a Centreon platform",description:"According to your needs, your platform can consist of several elements: a central server, one or several remote servers, and one or several pollers.",source:"@site/versioned_docs/version-23.10/getting-started/platform.md",sourceDirName:"getting-started",slug:"/getting-started/platform",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/getting-started/platform",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/getting-started/platform.md",tags:[],version:"23.10",lastUpdatedAt:1699872045,formattedLastUpdatedAt:"Nov 13, 2023",frontMatter:{id:"platform",title:"Elements of a Centreon platform"},sidebar:"version-23.10/docs",previous:{title:"Which installation should I choose?",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/getting-started/which-install"},next:{title:"Set up your free IT-100 solution",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/getting-started/IT100"}},u={},p=[{value:"Central server",id:"central-server",level:2},{value:"Remote server",id:"remote-server",level:2},{value:"Poller",id:"poller",level:2},{value:"Distributed architecture",id:"distributed-architecture",level:2}],m={toc:p},d="wrapper";function f(e){var{components:t}=e,l=i(e,["components"]);return(0,n.kt)(d,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},m,l),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"According to your needs, your platform can consist of several elements: a ",(0,n.kt)("a",{parentName:"p",href:"#central-server"},"central server"),", one or several ",(0,n.kt)("a",{parentName:"p",href:"#remote-server"},"remote servers"),", and one or several ",(0,n.kt)("a",{parentName:"p",href:"#poller"},"pollers"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If you are only monitoring a few resources, you will only need a central server."),(0,n.kt)("li",{parentName:"ul"},"If you are monitoring a large number of resources, spread the load across a ",(0,n.kt)("a",{parentName:"li",href:"#distributed-architecture"},"distributed architecture"),".")),(0,n.kt)("h2",{id:"central-server"},"Central server"),(0,n.kt)("p",null,"In Centreon, the central server is the main console where you monitor resources. The central server allows you to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"configure the monitoring of your whole infrastructure,"),(0,n.kt)("li",{parentName:"ul"},"monitor resources"),(0,n.kt)("li",{parentName:"ul"},"see what all your Centreon servers monitor (central server, ",(0,n.kt)("a",{parentName:"li",href:"#remote-server"},"remote servers")," and ",(0,n.kt)("a",{parentName:"li",href:"#poller"},"pollers"),"), using its web interface.")),(0,n.kt)("h2",{id:"remote-server"},"Remote server"),(0,n.kt)("p",null,"A remote server is attached to a central server. Pollers can be attached to a remote server."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A remote server monitors resources. It has a monitoring engine."),(0,n.kt)("li",{parentName:"ul"},"It has a graphical interface, but no configuration menus."),(0,n.kt)("li",{parentName:"ul"},"The resources it monitors are displayed in its interface, and in the interface of the central server it is attached to.")),(0,n.kt)("h2",{id:"poller"},"Poller"),(0,n.kt)("p",null,"A poller can be attached to a ",(0,n.kt)("a",{parentName:"p",href:"#remote-server"},"remote server"),", or directly to a ",(0,n.kt)("a",{parentName:"p",href:"#central-server"},"central server"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A Centreon poller monitors resources. It has a monitoring engine."),(0,n.kt)("li",{parentName:"ul"},"A poller has no graphical interface: the resources it monitors are displayed in the interface of the central server and of the remote server it is attached to.")),(0,n.kt)("h2",{id:"distributed-architecture"},"Distributed architecture"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(29521).Z,width:"1211",height:"581"})),(0,n.kt)("p",null,"See also ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/installation/architectures"},(0,n.kt)("strong",{parentName:"a"},"Architectures")),"."))}f.isMDXComponent=!0},29521:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/archi-df7f616720298fb72f21cbc1f389a491.png"}}]);