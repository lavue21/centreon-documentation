"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[276],{54001:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>u});r(67294);var n=r(3905);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})),t}function a(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}const s={id:"ot-mail",title:"Mail"},l=void 0,c={unversionedId:"integrations/itsm/ot-mail",id:"version-23.10/integrations/itsm/ot-mail",title:"Mail",description:"How it works",source:"@site/versioned_docs/version-23.10/integrations/itsm/ot-mail.md",sourceDirName:"integrations/itsm",slug:"/integrations/itsm/ot-mail",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/integrations/itsm/ot-mail",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/integrations/itsm/ot-mail.md",tags:[],version:"23.10",lastUpdatedAt:1699633150,formattedLastUpdatedAt:"Nov 10, 2023",frontMatter:{id:"ot-mail",title:"Mail"},sidebar:"version-23.10/docs",previous:{title:"Jira",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/integrations/itsm/ot-jira"},next:{title:"OTRS RestAPI",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/integrations/itsm/ot-otrs-restapi"}},p={},u=[{value:"How it works",id:"how-it-works",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Possibilities",id:"possibilities",level:2}],m={toc:u},d="wrapper";function b(t){var{components:e}=t,s=a(t,["components"]);return(0,n.kt)(d,o(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),n.forEach((function(e){i(t,e,r[e])}))}return t}({},m,s),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"how-it-works"},"How it works"),(0,n.kt)("p",null,"The Mail provider sends a mail to a mailbox that an ITSM software will read and\ncreate a ticket based upon it"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"architecture",src:r(83809).Z,width:"780",height:"725"})),(0,n.kt)("h2",{id:"compatibility"},"Compatibility"),(0,n.kt)("p",null,"This integration is compatible with any ITSM software that is able to create a\nticket from a mail."),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("p",null,"Before going any further, make sure that you correctly setup\n",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/docs/alerts-notifications/ticketing#advanced-configuration"},"centreon-open-ticket"),"\ninto your Centreon instance"),(0,n.kt)("p",null,"Our provider requires the following parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Example of value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"From"),(0,n.kt)("td",{parentName:"tr",align:null},"{$user.email}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"To"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h2",{id:"possibilities"},"Possibilities"),(0,n.kt)("p",null,"You can add custom headers when sending your email"))}b.isMDXComponent=!0},83809:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/ot-mail-architecture-f387b5666b66a8e821aee2b533ef0a7b.png"}}]);