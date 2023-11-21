"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[81054],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},45482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});n(67294);var o=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={id:"notif-advanced",title:"To go further"},c=void 0,s={unversionedId:"alerts-notifications/notif-advanced",id:"version-23.10/alerts-notifications/notif-advanced",title:"To go further",description:"Commands",source:"@site/versioned_docs/version-23.10/alerts-notifications/notif-advanced.md",sourceDirName:"alerts-notifications",slug:"/alerts-notifications/notif-advanced",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/alerts-notifications/notif-advanced",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/next/versioned_docs/version-23.10/alerts-notifications/notif-advanced.md",tags:[],version:"23.10",lastUpdatedAt:1700565273,formattedLastUpdatedAt:"Nov 21, 2023",frontMatter:{id:"notif-advanced",title:"To go further"},sidebar:"version-23.10/docs",previous:{title:"Flapping",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/alerts-notifications/notif-flapping"},next:{title:"Installing Open Tickets",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/alerts-notifications/ticketing-install"}},l={},p=[{value:"Commands",id:"commands",level:2},{value:"Chatops",id:"chatops",level:2},{value:"Stream connector",id:"stream-connector",level:2}],d={toc:p};function u(e){var{components:t}=e,n=a(e,["components"]);return(0,o.kt)("wrapper",r({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",r({},{id:"commands"}),"Commands"),(0,o.kt)("p",null,"The notification is based on a command which will be executed by the scheduler\nwhen the notification is issued. This command is attached to each contact to be\nnotified. Centreon has default commands that you can modify."),(0,o.kt)("p",null,"Go to the ",(0,o.kt)("a",r({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/docs/monitoring/basic-objects/commands#definition"}),"configuration commands\nchapter")," to edit / add new notification\ncommands."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can also find in the ",(0,o.kt)("a",r({parentName:"p"},{href:"https://github.com/centreon/centreon-plugins/tree/master/notification"}),"Centreon\nplugins"),"\nto send preformated HTML email, etc. You must install the plugin on all\npollers, add a command to use this plugin and change the command of your\ncontacts.")),(0,o.kt)("h2",r({},{id:"chatops"}),"Chatops"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",r({parentName:"p"},{href:"https://github.com/centreon/centreon-chatops"}),"Centreon-Chatops")," community\nproject has been develop to allows communication between a Team chat like\nMattermost or Slack and Centreon throught slash command"),(0,o.kt)("h2",r({},{id:"stream-connector"}),"Stream connector"),(0,o.kt)("p",null,"You can also forward event to a third party application using the ",(0,o.kt)("strong",{parentName:"p"},"Centreon\nStream Connector")," functionality."),(0,o.kt)("p",null,"See the ",(0,o.kt)("strong",{parentName:"p"},"Intregration / Stream-Connectors")," chapter."))}u.isMDXComponent=!0}}]);