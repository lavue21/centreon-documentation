"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[2882],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},80450:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={id:"map-web-create-geoview",title:"Creating a geographic view"},l=void 0,s={unversionedId:"graph-views/map-web-create-geoview",id:"version-23.10/graph-views/map-web-create-geoview",title:"Creating a geographic view",description:"This topic provides information about how to create geographic views from the Centreon MAP interface.",source:"@site/versioned_docs/version-23.10/graph-views/map-web-create-geoview.md",sourceDirName:"graph-views",slug:"/graph-views/map-web-create-geoview",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/graph-views/map-web-create-geoview",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/next/versioned_docs/version-23.10/graph-views/map-web-create-geoview.md",tags:[],version:"23.10",lastUpdatedAt:1700565273,formattedLastUpdatedAt:"Nov 21, 2023",frontMatter:{id:"map-web-create-geoview",title:"Creating a geographic view"},sidebar:"version-23.10/docs",previous:{title:"Creating a standard map",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/graph-views/map-web-create-standard-map"},next:{title:"MAP known issues",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/graph-views/map-web-known-issues"}},p={},c=[{value:"Requirement",id:"requirement",level:2},{value:"Create a geographic view",id:"create-a-geographic-view",level:2},{value:"Additional information",id:"additional-information",level:2},{value:"How resources are displayed",id:"how-resources-are-displayed",level:3},{value:"Clustering",id:"clustering",level:3},{value:"Blinking resources",id:"blinking-resources",level:3},{value:"Datalayers on geographic views",id:"datalayers-on-geographic-views",level:3}],g={toc:c};function u(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},g,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This topic provides information about how to create geographic views from the Centreon MAP interface."),(0,n.kt)("p",null,"The display of the ",(0,n.kt)("strong",{parentName:"p"},"Add a new Geographic view")," button on the ",(0,n.kt)("strong",{parentName:"p"},"Map")," page means that you are allowed to create a geographic view and that you belong to an access group that is granted the creator role."),(0,n.kt)("h2",a({},{id:"requirement"}),"Requirement"),(0,n.kt)("p",null,"In order to apply geographic coordinates while configuring a new geographic view, it is necessary to provide them on the ",(0,n.kt)("strong",{parentName:"p"},"Extended infos")," tab corresponding to the resource you want to monitor (a host, a hostgroup or a business activity)."),(0,n.kt)("p",null,"For example, to fill in geographic coordinates for the ",(0,n.kt)("strong",{parentName:"p"},"Central")," host:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Hosts > Hosts"),". Then click the ",(0,n.kt)("strong",{parentName:"li"},"Central")," host."),(0,n.kt)("li",{parentName:"ol"},"Click the ",(0,n.kt)("strong",{parentName:"li"},"Host Extended Infos")," tab."),(0,n.kt)("li",{parentName:"ol"},"Fill in the ",(0,n.kt)("strong",{parentName:"li"},"Geographic coordinates")," field with the ",(0,n.kt)("inlineCode",{parentName:"li"},"Latitude, Longitude")," format. Then click ",(0,n.kt)("strong",{parentName:"li"},"Save"),".")),(0,n.kt)("h2",a({},{id:"create-a-geographic-view"}),"Create a geographic view"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("strong",{parentName:"p"},"Monitoring > Map")," page, click the ",(0,n.kt)("strong",{parentName:"p"},"Add a new Geographic view")," button located in the ",(0,n.kt)("strong",{parentName:"p"},"Geographic views")," section.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Fill in the ",(0,n.kt)("strong",{parentName:"p"},"Add a new geographic view")," property:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Name: provide a name to the geographic view."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Add"),".\nThe new view is added to the ",(0,n.kt)("strong",{parentName:"p"},"Geographic views")," section. Click it to complete its configuration.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click the ",(0,n.kt)("strong",{parentName:"p"},"Edit")," button and fill in the following ",(0,n.kt)("strong",{parentName:"p"},"Edit view parameters"),":"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Hosts "),(0,n.kt)("li",{parentName:"ul"},"Hosts belonging to hostgroup(s)"),(0,n.kt)("li",{parentName:"ul"},"Business Activity belonging to Business View(s)"),(0,n.kt)("li",{parentName:"ul"},"Latitude"),(0,n.kt)("li",{parentName:"ul"},"Longitude"),(0,n.kt)("li",{parentName:"ul"},"Zoom")),(0,n.kt)("ol",a({},{start:5}),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Edit")," to confirm the parameters.")),(0,n.kt)("h2",a({},{id:"additional-information"}),"Additional information"),(0,n.kt)("h3",a({},{id:"how-resources-are-displayed"}),"How resources are displayed"),(0,n.kt)("p",null,"When a resource (host, hostgroup or business activity) is positioned on a geographic view, it is displayed as a circle whose color is defined using the following rules:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Host:")," worst state between the host and its services."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Hostgroups:")," worst state of hosts belonging to the hostgroups."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Business activity:")," current status.")),(0,n.kt)("p",null,"Worst state order: Critical (red) ",">"," Down (red) ",">"," Warning(orange) ",">","\nUnknown(gray) ",">"," Unreachable(gray) ",">"," Ok(green) ",">"," Up(green) ",">"," Pending(blue)"),(0,n.kt)("h3",a({},{id:"clustering"}),"Clustering"),(0,n.kt)("p",null,'When multiple resources are geographically close and you are at a "certain" zoom level, then they are grouped into one single circle\ndisplaying two elements:'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Status of the worst object (displayed as a color between green, orange, red\nand gray)."),(0,n.kt)("li",{parentName:"ul"},"Number of resources in this state.")),(0,n.kt)("p",null,"This behavior can be disabled in the global Centreon Map options, by setting the ",(0,n.kt)("strong",{parentName:"p"},"Clustering mode")," option to ",(0,n.kt)("strong",{parentName:"p"},"No"),"."),(0,n.kt)("h3",a({},{id:"blinking-resources"}),"Blinking resources"),(0,n.kt)("p",null,'If a resource is in a "non-ok" state, it blinks.\nThis behavior can be disabled in the global Centreon Map options by setting the ',(0,n.kt)("strong",{parentName:"p"},"Blink markers")," option to ",(0,n.kt)("strong",{parentName:"p"},"No"),"."),(0,n.kt)("h3",a({},{id:"datalayers-on-geographic-views"}),"Datalayers on geographic views"),(0,n.kt)("p",null,"Centreon MAP allows you to display additional data layers on maps to add context to your real time IT infrastructure status."),(0,n.kt)("p",null,"First you need to add data layers in Centreon Map options, in the ",(0,n.kt)("strong",{parentName:"p"},"Data Layers geographic services")," section.\nThen, if the data layer is enabled, you can make it visible or not by checking the dedicated layer using the top left icon."))}u.isMDXComponent=!0}}]);