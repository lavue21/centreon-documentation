"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[86035],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),g=i,m=u["".concat(c,".").concat(g)]||u[g]||d[g]||a;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},86680:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});r(67294);var n=r(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const o={id:"introduction",title:"Introduction to Centreon MAP (Legacy)"},s=void 0,c={unversionedId:"graph-views/introduction",id:"version-23.10/graph-views/introduction",title:"Introduction to Centreon MAP (Legacy)",description:"The graphical view capabilities in Centreon rely on the Centreon MAP",source:"@site/versioned_docs/version-23.10/graph-views/introduction.md",sourceDirName:"graph-views",slug:"/graph-views/introduction",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/graph-views/introduction",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/next/versioned_docs/version-23.10/graph-views/introduction.md",tags:[],version:"23.10",lastUpdatedAt:1700565273,formattedLastUpdatedAt:"Nov 21, 2023",frontMatter:{id:"introduction",title:"Introduction to Centreon MAP (Legacy)"},sidebar:"version-23.10/docs",previous:{title:"MAP troubleshooting",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/graph-views/map-web-troubleshooting"},next:{title:"Install Centreon MAP extension",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/graph-views/install"}},p={},l=[{value:"Overview",id:"overview",level:2},{value:"Procedures",id:"procedures",level:2},{value:"Administrating MAP (Legacy)",id:"administrating-map-legacy",level:3},{value:"Using MAP (Legacy)",id:"using-map-legacy",level:3}],d={toc:l};function u(e){var{components:t}=e,o=a(e,["components"]);return(0,n.kt)("wrapper",i({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The graphical view capabilities in Centreon rely on the Centreon MAP\nmodule."),(0,n.kt)("p",null,"Centreon MAP is a data-mapping and visualization tool designed for IT\nOperations management (ITOM) administrators and developers. It is\ncapable of displaying efficient graphic insights and mapping correlated\ndata in customized user-relevant views."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Centreon MAP is a Centreon extension that requires a valid ",(0,n.kt)("a",i({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/docs/administration/licenses"}),"license"),".\nTo purchase one and retrieve the necessary repositories, contact ",(0,n.kt)("a",i({parentName:"p"},{href:"mailto:sales@centreon.com"}),"Centreon"),".")),(0,n.kt)("h2",i({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Here is an overview of MAP (Legacy). You need first to create logical views using the Desktop client:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(25766).Z,width:"1332",height:"751"})),(0,n.kt)("p",null,"Then you can visualize them directly in your browser:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(9649).Z,width:"2868",height:"1614"})),(0,n.kt)("p",null,"You can also use the geographical view to display resources in the way your IT is spread\nover a city, country or world:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(36412).Z,width:"1665",height:"883"})),(0,n.kt)("p",null,"Both types of view may be displayed in the same Centreon web user interface:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Either from the Centreon MAP dedicated user interface, which also includes a search facility."),(0,n.kt)("li",{parentName:"ul"},"Or within a Custom View, using the dedicated Centreon MAP widget.")),(0,n.kt)("h2",i({},{id:"procedures"}),"Procedures"),(0,n.kt)("p",null,"Use the following procedures to administrate and use Centreon MAP (Legacy)."),(0,n.kt)("h3",i({},{id:"administrating-map-legacy"}),"Administrating MAP (Legacy)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/centreon-documentation/pr-preview/pr-2832/docs/graph-views/install"}),"Installing Centreon MAP (Legacy) extension")," describes prerequisites and procedures to install the MAP (Legacy), also named Map4 desktop client."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/centreon-documentation/pr-preview/pr-2832/docs/graph-views/remote-server"}),"Installing on a remote server")," explains how to install MAP (Legacy) on a remote server."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/centreon-documentation/pr-preview/pr-2832/docs/graph-views/update"}),"Updating the extension")," describes the update process for MAP (Legacy)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/centreon-documentation/pr-preview/pr-2832/docs/graph-views/upgrade"}),"Upgrading the extension")," describes the update process for  MAP (Legacy)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/centreon-documentation/pr-preview/pr-2832/docs/graph-views/migrate"}),"Migrating the extension")," describes how to move the MAP (Legacy) server to another server."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/centreon-documentation/pr-preview/pr-2832/docs/graph-views/configuration"}),"Configuring rights")," explains how to administer users\ufffd rights and describes customization settings."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/centreon-documentation/pr-preview/pr-2832/docs/graph-views/advanced-configuration"}),"Advanced configuration")," describes advanced procedures to configure MAP (Legacy).")),(0,n.kt)("h3",i({},{id:"using-map-legacy"}),"Using MAP (Legacy)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/centreon-documentation/pr-preview/pr-2832/docs/graph-views/create-standard-view"}),"Creating a standard view")," using MAP (Legacy). This topic also describes best practices and limitations."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/centreon-documentation/pr-preview/pr-2832/docs/graph-views/create-geo-view"}),"Creating a geo view")," using the web interface. This procedure explains how to display your resources across a defined geographical area."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/centreon-documentation/pr-preview/pr-2832/docs/graph-views/display-view"}),"Displaying views")," from the web interface. This topic also describes dedicated features."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/centreon-documentation/pr-preview/pr-2832/docs/graph-views/share-view"}),"Sharing a view")," allows you to share views to a limited audience."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/centreon-documentation/pr-preview/pr-2832/docs/graph-views/known-issues"}),"MAP (Legacy) known issues")," is a list of issues you may encounter using MAP (Legacy)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",i({parentName:"li"},{href:"/centreon-documentation/pr-preview/pr-2832/docs/graph-views/troubleshooter"}),"MAP (Legacy) troubleshooting")," helps you to solve some issues occurring in MAP (Legacy).")))}u.isMDXComponent=!0},25766:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/desktop-198466dd6f5c90d4bd77fda57f36b43f.gif"},36412:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/display_geo_view-3751f53cc1d19c2e488226b6877423d0.gif"},9649:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/first_page_web-3948f74931ce18f91039f95118febf42.png"}}]);