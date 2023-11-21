"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[46881],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,v=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(v,i(i({ref:t},c),{},{components:r})):n.createElement(v,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},33826:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"migrate",title:"Migrate the extension"},s=void 0,l={unversionedId:"graph-views/migrate",id:"version-23.10/graph-views/migrate",title:"Migrate the extension",description:"This section explains how to move Centreon MAP server over to another server.",source:"@site/versioned_docs/version-23.10/graph-views/migrate.md",sourceDirName:"graph-views",slug:"/graph-views/migrate",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/graph-views/migrate",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/next/versioned_docs/version-23.10/graph-views/migrate.md",tags:[],version:"23.10",lastUpdatedAt:1700565273,formattedLastUpdatedAt:"Nov 21, 2023",frontMatter:{id:"migrate",title:"Migrate the extension"},sidebar:"version-23.10/docs",previous:{title:"Upgrading the extension",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/graph-views/upgrade"},next:{title:"Configure",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/graph-views/configuration"}},p={},c=[{value:"Install the new Centreon MAP server",id:"install-the-new-centreon-map-server",level:3},{value:"Synchronize the data",id:"synchronize-the-data",level:3}],u={toc:c};function m(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This section explains how to move Centreon MAP server over to another server."),(0,n.kt)("p",null,"This task may be useful if you need to migrate your reporting server from\nCentOS 6 to CentOS 7."),(0,n.kt)("h3",o({},{id:"install-the-new-centreon-map-server"}),"Install the new Centreon MAP server"),(0,n.kt)("p",null,"Please refer to the installation chapter in this documentation to install\nyour new Centreon MAP server."),(0,n.kt)("h3",o({},{id:"synchronize-the-data"}),"Synchronize the data"),(0,n.kt)("p",null,"Stop the Centreon MAP service on both Centreon MAP servers:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"systemctl stop centreon-map\n")),(0,n.kt)("p",null,"Dump the Centreon MAP data:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"mysqldump -u XXXXXX -p centreon_studio > /tmp/centreon_studio.sql\n")),(0,n.kt)("p",null,"Upload centreon_studio.sql to the new Centreon MAP (in /tmp) server and import it into the database:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"mysql -u XXXXXX -p centreon_studio < /tmp/centreon_studio.sql\n")),(0,n.kt)("p",null,"Start the Centreon Map service on the new Centreon MAP servers:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"systemctl start centreon-map\n")))}m.isMDXComponent=!0}}]);