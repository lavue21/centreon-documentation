"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[32844],{44197:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>m});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={id:"chart-template",title:"Graph template"},s=void 0,p={unversionedId:"metrology/chart-template",id:"version-23.10/metrology/chart-template",title:"Graph template",description:"Definition",source:"@site/versioned_docs/version-23.10/metrology/chart_template.md",sourceDirName:"metrology",slug:"/metrology/chart-template",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/metrology/chart-template",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/metrology/chart_template.md",tags:[],version:"23.10",lastUpdatedAt:1699872045,formattedLastUpdatedAt:"Nov 13, 2023",frontMatter:{id:"chart-template",title:"Graph template"},sidebar:"version-23.10/docs",previous:{title:"Chart management",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/metrology/chart-management"},next:{title:"Curves",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/metrology/chart-curves"}},c={},m=[{value:"Definition",id:"definition",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Using a graph template",id:"using-a-graph-template",level:2}],u={toc:m},d="wrapper";function h(e){var{components:t}=e,l=i(e,["components"]);return(0,a.kt)(d,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},u,l),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"Graph models are models that can be used to shape graph layouts. Graph models can be used to configure multiple\npresentation settings, including the y-axis measurement, the width and height of the graph, or colors, etc."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Go to the ",(0,a.kt)("strong",{parentName:"p"},"Monitoring ",">"," Performances ",">"," Templates")," menu"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(82434).Z,width:"1848",height:"778"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"Template name")," field represents the name for the graph model"),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"Vertical label")," field contains the legend for the y-axis (type of data measured)."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"Width")," and ",(0,a.kt)("strong",{parentName:"li"},"Height")," fields are expressed in pixels and express the width and the height of the model, respectively."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"Lower limit")," field defines the minimum limit of the y-axis."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"Upper limit")," field defines the maximum limit of the y-axis."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"Base")," list defines the calculation base for the data during the scaling of the graph y-axis. Use 1024 for\nmeasurements like bytes (1 KB = 1024 Bytes) and 1000 for measurements like the volt (1 kV = 1000 volts).",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"Regardless of the selected value, base 1024 will be used for the following metric units:"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"B"),(0,a.kt)("li",{parentName:"ul"},"bytes"),(0,a.kt)("li",{parentName:"ul"},"bytespersecond"),(0,a.kt)("li",{parentName:"ul"},"B/s"),(0,a.kt)("li",{parentName:"ul"},"B/sec"),(0,a.kt)("li",{parentName:"ul"},"o"),(0,a.kt)("li",{parentName:"ul"},"octets")))),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"Scale Graph Values")," checkbox enables auto scaling of the graph, and bypasses previous options"),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"Default Centreon Graph Template")," lets you display all charts without a predefined template using these values")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If the ",(0,a.kt)("strong",{parentName:"p"},"Size to max")," box is checked, the graph will automatically be scaled to the scale of the maximum value\nordinates shown on the given period.")),(0,a.kt)("h2",{id:"using-a-graph-template"},"Using a graph template"),(0,a.kt)("p",null,"You can add this layout model when editing a service (or a service template) by going into the ",(0,a.kt)("strong",{parentName:"p"},"Service Extended Info"),"\ntab in configuration form:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(50561).Z,width:"1350",height:"372"})))}h.isMDXComponent=!0},82434:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/02addgraph_template-842331f5e5cb8c2b20accd4863dd73c5.png"},50561:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/02linkgraph_template-7010563e4a85116d81c223b9c5dba3b2.png"}}]);