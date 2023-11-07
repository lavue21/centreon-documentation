"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[81054],{45482:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>p});n(67294);var o=n(3905);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function i(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const c={id:"notif-advanced",title:"To go further"},s=void 0,l={unversionedId:"alerts-notifications/notif-advanced",id:"version-23.10/alerts-notifications/notif-advanced",title:"To go further",description:"Commands",source:"@site/versioned_docs/version-23.10/alerts-notifications/notif-advanced.md",sourceDirName:"alerts-notifications",slug:"/alerts-notifications/notif-advanced",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/docs/alerts-notifications/notif-advanced",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/alerts-notifications/notif-advanced.md",tags:[],version:"23.10",lastUpdatedAt:1699375250,formattedLastUpdatedAt:"Nov 7, 2023",frontMatter:{id:"notif-advanced",title:"To go further"},sidebar:"version-23.10/docs",previous:{title:"Flapping",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/docs/alerts-notifications/notif-flapping"},next:{title:"Installing Open Tickets",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/docs/alerts-notifications/ticketing-install"}},d={},p=[{value:"Commands",id:"commands",level:2},{value:"Chatops",id:"chatops",level:2},{value:"Stream connector",id:"stream-connector",level:2}],u={toc:p},m="wrapper";function f(t){var{components:e}=t,n=i(t,["components"]);return(0,o.kt)(m,a(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),o.forEach((function(e){r(t,e,n[e])}))}return t}({},u,n),{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"commands"},"Commands"),(0,o.kt)("p",null,"The notification is based on a command that will be executed by the scheduler\nwhen the notification is issued. This command is attached to each contact to be\nnotified. Centreon has default commands that you can modify."),(0,o.kt)("p",null,"Go to the ",(0,o.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/docs/monitoring/basic-objects/commands#definition"},"configuration commands\nchapter")," to edit / add new notification\ncommands."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Some plugins ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/centreon/centreon-plugins/tree/master/src/notification"},"available here")," allow you to send preformated HTML or emails.\nYou have to install the plugin on your pollers, create a new notification command based on this plugin and bind this command to the contacts you want to be notified by this plugin.")),(0,o.kt)("h2",{id:"chatops"},"Chatops"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/centreon/centreon-chatops"},"Centreon-Chatops")," community\nproject has been developed to allow communication in a team chat like\nMattermost or Slack and Centreon through slash commands."),(0,o.kt)("h2",{id:"stream-connector"},"Stream connector"),(0,o.kt)("p",null,"You can also forward events to a third-party application using the ",(0,o.kt)("strong",{parentName:"p"},"Centreon\nStream Connector")," feature."),(0,o.kt)("p",null,"See the ",(0,o.kt)("strong",{parentName:"p"},"Integration / Stream-Connectors")," chapter."))}f.isMDXComponent=!0}}]);