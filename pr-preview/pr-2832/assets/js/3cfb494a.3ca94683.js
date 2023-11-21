"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[28960],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});n(67294);var r=n(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const o={id:"widgets",title:"Widgets"},s=void 0,l={unversionedId:"service-mapping/widgets",id:"version-23.10/service-mapping/widgets",title:"Widgets",description:"Live Business Activity Status",source:"@site/versioned_docs/version-23.10/service-mapping/widgets.md",sourceDirName:"service-mapping",slug:"/service-mapping/widgets",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/service-mapping/widgets",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/next/versioned_docs/version-23.10/service-mapping/widgets.md",tags:[],version:"23.10",lastUpdatedAt:1700565273,formattedLastUpdatedAt:"Nov 21, 2023",frontMatter:{id:"widgets",title:"Widgets"},sidebar:"version-23.10/docs",previous:{title:"Settings",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/service-mapping/ba-settings"},next:{title:"Install the Centreon BAM extension",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/service-mapping/install"}},c={},p=[{value:"Live Business Activity Status",id:"live-business-activity-status",level:2},{value:"Parameters",id:"parameters",level:3}],u={toc:p};function d(e){var{components:t}=e,o=a(e,["components"]);return(0,r.kt)("wrapper",i({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",i({},{id:"live-business-activity-status"}),"Live Business Activity Status"),(0,r.kt)("p",null,"This widget displays the live business activity status and current level in a\nlisting widget that you can add to your home page."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(58434).Z,width:"929",height:"616"})),(0,r.kt)("h3",i({},{id:"parameters"}),"Parameters"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select a Business View for filtering."),(0,r.kt)("li",{parentName:"ul"},"Number of Business Activities to display."),(0,r.kt)("li",{parentName:"ul"},"Status filter: Select BA status for filtering."),(0,r.kt)("li",{parentName:"ul"},"Downtime filter: Retain only the BA with or without downtime."),(0,r.kt)("li",{parentName:"ul"},"Acknowledged filter: Retain only acknowledged or non-acknowledged BA."),(0,r.kt)("li",{parentName:"ul"},"Order By: Criteria for sorting the BAs."),(0,r.kt)("li",{parentName:"ul"},"Display description."),(0,r.kt)("li",{parentName:"ul"},"Display status duration."),(0,r.kt)("li",{parentName:"ul"},"Display only top level BA: Only display BA without a parent. For a\nnon-admin user, this is calculated based on the ACL."),(0,r.kt)("li",{parentName:"ul"},"Refresh Interval (in seconds).")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(12597).Z,width:"855",height:"440"})))}d.isMDXComponent=!0},58434:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/widget_bam-ba-listing-a67064e0bd39464a6405abaaacf6e95d.png"},12597:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/widget_bam-ba-listing_param-ca142ff36ba896c77cf4a87be22cf391.png"}}]);