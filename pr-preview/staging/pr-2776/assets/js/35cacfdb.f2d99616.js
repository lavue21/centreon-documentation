"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[91243],{73966:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>u});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={id:"create-geo-view",title:"Create a geo view"},l=void 0,c={unversionedId:"graph-views/create-geo-view",id:"version-23.10/graph-views/create-geo-view",title:"Create a geo view",description:"Create a GeoView",source:"@site/versioned_docs/version-23.10/graph-views/create-geo-views.md",sourceDirName:"graph-views",slug:"/graph-views/create-geo-view",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/docs/graph-views/create-geo-view",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/graph-views/create-geo-views.md",tags:[],version:"23.10",lastUpdatedAt:1699375250,formattedLastUpdatedAt:"Nov 7, 2023",frontMatter:{id:"create-geo-view",title:"Create a geo view"},sidebar:"version-23.10/docs",previous:{title:"Create a standard view",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/docs/graph-views/create-standard-view"},next:{title:"Display views",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/docs/graph-views/display-view"}},p={},u=[{value:"Create a GeoView",id:"create-a-geoview",level:2},{value:"How access control limitations (ACL) are handled",id:"how-access-control-limitations-acl-are-handled",level:2},{value:"How resources are displayed",id:"how-resources-are-displayed",level:2},{value:"Clustering",id:"clustering",level:3},{value:"Blinking resources",id:"blinking-resources",level:3},{value:"Datalayers on Geoviews",id:"datalayers-on-geoviews",level:2}],d={toc:u},g="wrapper";function h(e){var{components:t}=e,s=i(e,["components"]);return(0,n.kt)(g,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},d,s),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"create-a-geoview"},"Create a GeoView"),(0,n.kt)("p",null,"A user that is a Centreon admin, or a Centreon Map admin, or has the right to\ncreate views, can create geographic views using the web interface. To do\nso:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"Monitoring > Map"),' and click the "+" on the Geographic section.'),(0,n.kt)("li",{parentName:"ol"},"You are asked to name the view and then to define resources to\ndisplay on the view."),(0,n.kt)("li",{parentName:"ol"},"After configuring these parameters, resources will appear on this\ngeographic view")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(24161).Z,width:"1665",height:"913"})),(0,n.kt)("p",null,"The following resources can be displayed on a GeoView:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Hosts belonging to hostgroup(s)"),(0,n.kt)("li",{parentName:"ul"},"Business Activity belonging to Business View(s)"),(0,n.kt)("li",{parentName:"ul"},"One or multiple Hostgroup(s)")),(0,n.kt)("p",null,"Prerequisites: Define lat/long coordinates in the resources configuration form\nfor hosts, hostgroups or business activities."),(0,n.kt)("p",null,"Example with a host:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(86712).Z,width:"1863",height:"798"})),(0,n.kt)("h2",{id:"how-access-control-limitations-acl-are-handled"},"How access control limitations (ACL) are handled"),(0,n.kt)("p",null,"As soon as you give access to ",(0,n.kt)("strong",{parentName:"p"},"Monitoring > Map")," or to a custom view\ncontaining a Map widget, GeoViews are accessible to every Centreon\nuser. A user will only see resources they are authorized to see, based on\ntheir ACL profile."),(0,n.kt)("h2",{id:"how-resources-are-displayed"},"How resources are displayed"),(0,n.kt)("p",null,"When a resource (host, hostgroup or a business activity) is positioned\non a geoview, it is displayed as a circle whose color is defined using\nthe following rules:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Host: worst state between the host and its services"),(0,n.kt)("li",{parentName:"ul"},"Hostgroups: worst state of hosts belonging to the hostgroups"),(0,n.kt)("li",{parentName:"ul"},"Business activity: current status")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Worst state order: Critical (red) ",">"," Down (red) ",">"," Warning(orange) ",">","\nUnknown(gray) ",">"," Unreachable(gray) ",">"," Ok(green) ",">"," Up(green) ",">"," Pending(blue)")),(0,n.kt)("h3",{id:"clustering"},"Clustering"),(0,n.kt)("p",null,'When multiple resources are geographically close and you are at\n"certain" zoom level, then they are grouped into one single circle\ndisplaying two things:'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Status of the worst object (displayed as a color between green, orange, red\nand gray)"),(0,n.kt)("li",{parentName:"ul"},"Number of resources in this state")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(74980).Z,width:"983",height:"577"})),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"This behavior can be disabled in the global Centreon Map parameters")),(0,n.kt)("h3",{id:"blinking-resources"},"Blinking resources"),(0,n.kt)("p",null,'If a resource is in a "not-ok" state, it blinks.'),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"This behavior can be disabled in the global Centreon Map parameters")),(0,n.kt)("h2",{id:"datalayers-on-geoviews"},"Datalayers on Geoviews"),(0,n.kt)("p",null,'Centreon MAP gives you the possibility to display additional "data layers" on\nmaps to add context to your real-time IT infrastructure status.'),(0,n.kt)("p",null,"First you need to add data layers in the Centreon Map option, and then, if the\ndata layer is enabled, you can make it visible or not by checking the\nlayer concerned using the top left icon."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Examples")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(49273).Z,width:"1665",height:"886"})))}h.isMDXComponent=!0},74980:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/geo_marker_clustering_infos-8d6371de13ef678753683ffd43c7f8f6.png"},24161:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/geo_view_creation-2573ca38e649337fce2674c09d719260.gif"},49273:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/geoview_datalayers-c02e2edc3eb84c21c4db25cb62daebfa.gif"},86712:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/host_geocoord-a0c49fc260f8a1920e16e4742beb1f8d.png"}}]);