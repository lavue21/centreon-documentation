"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[93889],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||l[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},44437:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"introduction",title:"Introduction to upgrade"},p=void 0,c={unversionedId:"upgrade/introduction",id:"version-23.10/upgrade/introduction",title:"Introduction to upgrade",description:"This chapter describes how to upgrade your Centreon monitoring platform, i.e. switching between major versions (for instance, from 21.10 to 23.04).",source:"@site/versioned_docs/version-23.10/upgrade/introduction.md",sourceDirName:"upgrade",slug:"/upgrade/introduction",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/upgrade/introduction",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/next/versioned_docs/version-23.10/upgrade/introduction.md",tags:[],version:"23.10",lastUpdatedAt:1700565273,formattedLastUpdatedAt:"Nov 21, 2023",frontMatter:{id:"introduction",title:"Introduction to upgrade"},sidebar:"version-23.10/docs",previous:{title:"Update a Centreon 23.04 platform",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/update/update-centreon-platform"},next:{title:"Upgrade from Centreon 22.10",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/upgrade/upgrade-from-22-10"}},u={},s=[],l={toc:s};function d(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This chapter describes how to upgrade your Centreon monitoring platform, i.e. switching between major versions (for instance, from 21.10 to 23.04)."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"As of version 23.04, Centreon no longer supports CentOS 7. If your Centreon platform was installed on CentOS 7, you cannot simply upgrade it: change to a ",(0,n.kt)("a",o({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/docs/installation/compatibility#operating-systems"}),"supported OS")," using a ",(0,n.kt)("a",o({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/docs/migrate/introduction"}),"migration procedure"),".")),(0,n.kt)("p",null,"This procedure is linked to your initial version of Centreon. You will have to\n",(0,n.kt)("strong",{parentName:"p"},"use packages")," if you already installed using Centreon ISO or an RPM, and\nsource files if you installed from sources. Before upgrading Centreon, remember\nto make a backup your system."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If you are using at least one of the BAM, MAP or MBI modules, you have to install\ntheir new repository to avoid dependency problems.\nRefer to ",(0,n.kt)("a",o({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/docs/reporting/upgrade#update-the-repository"}),"this page"),".")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If you want to change the OS of the host server, follow the ",(0,n.kt)("a",o({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/docs/migrate/introduction"}),"migration procedure"),". (If you want to migrate a platform that uses ",(0,n.kt)("strong",{parentName:"p"},"Centreon Poller Display 1.6.x"),", refer\nto the corresponding ",(0,n.kt)("a",o({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/docs/migrate/poller-display-to-remote-server"}),"migration procedure"),".)")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The upgrade process can start only from versions ",(0,n.kt)("strong",{parentName:"p"},"2.8.0")," and later. If you\nhave an earlier version, please update to the latest ",(0,n.kt)("em",{parentName:"p"},"2.8.x")," version first.")))}d.isMDXComponent=!0}}]);