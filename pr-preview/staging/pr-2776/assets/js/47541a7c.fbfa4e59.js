"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[93889],{44437:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>p,metadata:()=>c,toc:()=>d});r(67294);var o=r(3905);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const p={id:"introduction",title:"Introduction to upgrade"},s=void 0,c={unversionedId:"upgrade/introduction",id:"version-23.10/upgrade/introduction",title:"Introduction to upgrade",description:"This chapter describes how to upgrade your Centreon monitoring platform, i.e. switching between major versions (for instance, from 21.10 to 23.04).",source:"@site/versioned_docs/version-23.10/upgrade/introduction.md",sourceDirName:"upgrade",slug:"/upgrade/introduction",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/docs/upgrade/introduction",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/upgrade/introduction.md",tags:[],version:"23.10",lastUpdatedAt:1699375250,formattedLastUpdatedAt:"Nov 7, 2023",frontMatter:{id:"introduction",title:"Introduction to upgrade"},sidebar:"version-23.10/docs",previous:{title:"Update a Centreon 23.04 platform",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/docs/update/update-centreon-platform"},next:{title:"Upgrade from Centreon 22.10",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/docs/upgrade/upgrade-from-22-10"}},u={},d=[],l={toc:d},m="wrapper";function g(e){var{components:t}=e,r=a(e,["components"]);return(0,o.kt)(m,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){n(e,t,r[t])}))}return e}({},l,r),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This chapter describes how to upgrade your Centreon monitoring platform, i.e. switching between major versions (for instance, from 21.10 to 23.04)."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"As of version 23.04, Centreon no longer supports CentOS 7. If your Centreon platform was installed on CentOS 7, you cannot simply upgrade it; you must change to a ",(0,o.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/docs/installation/compatibility#operating-systems"},"supported OS")," using a ",(0,o.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/docs/migrate/introduction"},"migration procedure"),".")),(0,o.kt)("p",null,"This procedure is linked to your initial version of Centreon. You will have to\n",(0,o.kt)("strong",{parentName:"p"},"use packages")," if you already installed using Centreon ISO or an RPM, and\nsource files if you installed from sources. Before upgrading Centreon, remember\nto make a backup of your system."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you are using at least one of the BAM, MAP or MBI modules, you must install\ntheir new repository to avoid dependency problems.\nRefer to ",(0,o.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/docs/reporting/upgrade#update-the-repository"},"this page"),".")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you want to change the OS of the host server, follow the ",(0,o.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/docs/migrate/introduction"},"migration procedure"),". (If you want to migrate a platform that uses ",(0,o.kt)("strong",{parentName:"p"},"Centreon Poller Display 1.6.x"),", refer\nto the corresponding ",(0,o.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/docs/migrate/poller-display-to-remote-server"},"migration procedure"),".)")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The upgrade process can start only from versions ",(0,o.kt)("strong",{parentName:"p"},"2.8.0")," and later. If you\nhave an earlier version, please update to the latest ",(0,o.kt)("em",{parentName:"p"},"2.8.x")," version first.")))}g.isMDXComponent=!0}}]);