"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[36146],{21281:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>f});t(67294);var n=t(3905),r=t(51715),a=t(7626);function c(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function i(A,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(e)):function(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}(Object(e)).forEach((function(t){Object.defineProperty(A,t,Object.getOwnPropertyDescriptor(e,t))})),A}function s(A,e){if(null==A)return{};var t,n,r=function(A,e){if(null==A)return{};var t,n,r={},a=Object.keys(A);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||(r[t]=A[t]);return r}(A,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(r[t]=A[t])}return r}const o={id:"submit",title:"Submitting a status"},l=void 0,u={unversionedId:"alerts-notifications/submit",id:"version-23.10/alerts-notifications/submit",title:"Submitting a status",description:"Principle",source:"@site/versioned_docs/version-23.10/alerts-notifications/submit.md",sourceDirName:"alerts-notifications",slug:"/alerts-notifications/submit",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/alerts-notifications/submit",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/alerts-notifications/submit.md",tags:[],version:"23.10",lastUpdatedAt:1699633150,formattedLastUpdatedAt:"Nov 10, 2023",frontMatter:{id:"submit",title:"Submitting a status"},sidebar:"version-23.10/docs",previous:{title:"Planning downtime",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/alerts-notifications/downtimes"},next:{title:"Other actions",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/alerts-notifications/other"}},p={},f=[{value:"Principle",id:"principle",level:3},{value:"Practice",id:"practice",level:3}],g={toc:f},k="wrapper";function m(A){var{components:e}=A,o=s(A,["components"]);return(0,n.kt)(k,i(function(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(A){return Object.getOwnPropertyDescriptor(t,A).enumerable})))),n.forEach((function(e){c(A,e,t[e])}))}return A}({},g,o),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"principle"},"Principle"),(0,n.kt)("p",null,"For passively checked services, it is possible send a result manually to the\nscheduler so that it is taken into account."),(0,n.kt)("h3",{id:"practice"},"Practice"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(a.Z,{value:"From the Resources status page",label:"From the Resources status page",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"Monitoring > Resources Status"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the service you want.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the ",(0,n.kt)("strong",{parentName:"p"},"More actions")," menu, click ",(0,n.kt)("strong",{parentName:"p"},"Submit a status"),"."),(0,n.kt)("p",{parentName:"li"},"The following window appears:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"image",src:t(60489).Z,width:"519",height:"266"})),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Status")," field defines the status the service will have once the result is submitted"),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Output")," field defines the message to be displayed for the service in the ",(0,n.kt)("strong",{parentName:"li"},"Information")," column"),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Performance data")," field can be used to define performance data for the generation of graphs."))))),(0,n.kt)(a.Z,{value:"From real-time monitoring",label:"From real-time monitoring",mdxType:"TabItem"},(0,n.kt)("p",null,"To submit a result, access the details page of the object. In the category\n",(0,n.kt)("strong",{parentName:"p"},"Service Commands"),", click ",(0,n.kt)("strong",{parentName:"p"},"Submit result for this service")),(0,n.kt)("p",null,"The following window appears:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:t(43434).Z,width:"1636",height:"394"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Host Name")," and ",(0,n.kt)("strong",{parentName:"li"},"Service")," fields define the host and the\nservice for which the result will be submitted"),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Check result")," field defines the status of the service"),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Check output")," field defines the message to be displayed for\nthe service"),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Performance data")," field can be used to define performance\ndata to generate graphs")))))}m.isMDXComponent=!0},60489:(A,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/png;base64,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"},43434:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/submitresult-1b228638f81bf27ef28cbe251ad5a43b.png"}}]);