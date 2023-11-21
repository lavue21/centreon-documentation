"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[81041],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76817:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={id:"introduction-map",title:"Introduction to Centreon MAP"},p=void 0,s={unversionedId:"graph-views/introduction-map",id:"version-23.10/graph-views/introduction-map",title:"Introduction to Centreon MAP",description:"Centreon MAP is a solution fully available in the Centreon web interface while offering you the best possible experience in creating, visualizing and sharing graphical representations of your monitored infrastructure.",source:"@site/versioned_docs/version-23.10/graph-views/introduction-map.md",sourceDirName:"graph-views",slug:"/graph-views/introduction-map",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/graph-views/introduction-map",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/next/versioned_docs/version-23.10/graph-views/introduction-map.md",tags:[],version:"23.10",lastUpdatedAt:1700565273,formattedLastUpdatedAt:"Nov 21, 2023",frontMatter:{id:"introduction-map",title:"Introduction to Centreon MAP"},sidebar:"version-23.10/docs",previous:{title:"Graphical views",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/category/graphical-views"},next:{title:"Installing MAP",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/graph-views/map-web-install"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Procedures",id:"procedures",level:2},{value:"Administrating MAP",id:"administrating-map",level:3},{value:"Using MAP",id:"using-map",level:3}],u={toc:c};function m(e){var{components:t}=e,o=i(e,["components"]);return(0,r.kt)("wrapper",a({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Centreon MAP is a solution fully available in the Centreon web interface while offering you the best possible experience in creating, visualizing and sharing graphical representations of your monitored infrastructure."),(0,r.kt)("p",null,"The difference with the MAP (Legacy) version is that MAP provides you with an editing tool fully embedded in the web interface. You do not need to install anything on your desktop. You can navigate easily between the editing mode and viewing mode."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you have already used the MAP (Legacy) version, note that you can easily ",(0,r.kt)("a",a({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/docs/graph-views/import-into-map-web#importing-legacy-maps-into-map"}),"import your legacy maps")," into the MAP interface.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"See how to manage views using the Centreon MAP REST API ",(0,r.kt)("a",a({parentName:"p"},{href:"https://docs-api.centreon.com/api/centreon-map/"}),"here"),".")),(0,r.kt)("h2",a({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"Create, customize, and view your maps within a single web interface."),(0,r.kt)("p",null,"First, you need to create logical views using the MAP editor:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(93506).Z,width:"1310",height:"856"})),(0,r.kt)("p",null,"Then you can view your map directly in viewing mode:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(86154).Z,width:"1202",height:"625"})),(0,r.kt)("p",null,"Your maps can be displayed in two ways in the interface:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Monitoring > Map")," page, in view mode."),(0,r.kt)("li",{parentName:"ul"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Home > Custom Views")," page, using a dedicated MAP ",(0,r.kt)("a",a({parentName:"li"},{href:"/centreon-documentation/pr-preview/pr-2832/docs/alerts-notifications/custom-views"}),"widget"),".")),(0,r.kt)("h2",a({},{id:"procedures"}),"Procedures"),(0,r.kt)("p",null,"Use the following procedures to use and administer Centreon MAP."),(0,r.kt)("h3",a({},{id:"administrating-map"}),"Administrating MAP"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/centreon-documentation/pr-preview/pr-2832/docs/graph-views/map-web-install"}),"Installing MAP")," describes prerequisites and procedures to install MAP."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/centreon-documentation/pr-preview/pr-2832/docs/graph-views/map-web-install-remote"}),"Installing MAP on a remote server")," explains how to install MAP on a remote server."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/centreon-documentation/pr-preview/pr-2832/docs/graph-views/map-web-update"}),"Updating MAP")," describes the update process for MAP."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/centreon-documentation/pr-preview/pr-2832/docs/graph-views/import-into-map-web"}),"Switching from Map (Legacy) to MAP")," explains how to migrate your legacy maps into the MAP interface."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/centreon-documentation/pr-preview/pr-2832/docs/graph-views/map-web-manage"}),"Managing access rights in MAP")," describes the different rights and permissions on maps.")),(0,r.kt)("h3",a({},{id:"using-map"}),"Using MAP"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/centreon-documentation/pr-preview/pr-2832/docs/graph-views/map-web-manage"}),"Managing maps in MAP")," gives you information about how to manage maps from the Centreon MAP interface."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/centreon-documentation/pr-preview/pr-2832/docs/graph-views/map-web-create-standard-map"}),"Creating a standard map")," describes how to create standard maps and how to customize them using the MAP editor."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/centreon-documentation/pr-preview/pr-2832/docs/graph-views/map-web-create-geoview"}),"Creating a geographic view")," explains how to display your resources across a defined geographical area."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/centreon-documentation/pr-preview/pr-2832/docs/graph-views/map-web-known-issues"}),"MAP known issues")," is a list of issues you may encounter using MAP."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/centreon-documentation/pr-preview/pr-2832/docs/graph-views/map-web-troubleshooting"}),"MAP troubleshooting")," helps you to solve some issues occurring in MAP.")))}m.isMDXComponent=!0},93506:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/map-web-editor-view-b1f1cf5b4120f6138d093b3bfceb37fb.png"},86154:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/map-web-global-view-eb05a99bf563417aeeaae8b968b1d06e.png"}}]);