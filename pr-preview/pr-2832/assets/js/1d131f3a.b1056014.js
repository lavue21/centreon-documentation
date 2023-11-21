"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[32844],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},44197:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={id:"chart-template",title:"Graph template"},l=void 0,p={unversionedId:"metrology/chart-template",id:"version-23.10/metrology/chart-template",title:"Graph template",description:"Definition",source:"@site/versioned_docs/version-23.10/metrology/chart_template.md",sourceDirName:"metrology",slug:"/metrology/chart-template",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/metrology/chart-template",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/next/versioned_docs/version-23.10/metrology/chart_template.md",tags:[],version:"23.10",lastUpdatedAt:1700565273,formattedLastUpdatedAt:"Nov 21, 2023",frontMatter:{id:"chart-template",title:"Graph template"},sidebar:"version-23.10/docs",previous:{title:"Chart management",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/metrology/chart-management"},next:{title:"Curves",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/metrology/chart-curves"}},s={},c=[{value:"Definition",id:"definition",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Using a graph template",id:"using-a-graph-template",level:2}],m={toc:c};function u(e){var{components:t}=e,i=o(e,["components"]);return(0,n.kt)("wrapper",a({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",a({},{id:"definition"}),"Definition"),(0,n.kt)("p",null,"Graph models are models that can be used to shape graph layouts. Graph models can be used to configure multiple\npresentation settings, including the y-axis measurement, the width and height of the graph, or colors, etc."),(0,n.kt)("h2",a({},{id:"configuration"}),"Configuration"),(0,n.kt)("p",null,"Go to the ",(0,n.kt)("strong",{parentName:"p"},"Monitoring ",">"," Performances ",">"," Templates")," menu"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(82434).Z,width:"1848",height:"778"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Template name")," field represents the name for the graph model"),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Vertical label")," field contains the legend for the y-axis (type of data measured)."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Width")," and ",(0,n.kt)("strong",{parentName:"li"},"Height")," fields are expressed in pixels and express the width and the height of the model, respectively."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Lower limit")," field defines the minimum limit of the y-axis."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Upper limit")," field defines the maximum limit of the y-axis."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Base")," list defines the calculation base for the data during the scaling of the graph y-axis. Use 1024 for\nmeasurements like bytes (1 KB = 1024 Bytes) and 1000 for measurements like the volt (1 kV = 1000 volts).",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Regardless of the selected value, base 1024 will be used for the following metric units:"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"B"),(0,n.kt)("li",{parentName:"ul"},"bytes"),(0,n.kt)("li",{parentName:"ul"},"bytespersecond"),(0,n.kt)("li",{parentName:"ul"},"B/s"),(0,n.kt)("li",{parentName:"ul"},"B/sec"),(0,n.kt)("li",{parentName:"ul"},"o"),(0,n.kt)("li",{parentName:"ul"},"octets")))),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Scale Graph Values")," checkbox enables auto scaling of the graph, and bypasses previous options"),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Default Centreon Graph Template")," lets you display all charts without a predefined template using these values")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If the ",(0,n.kt)("strong",{parentName:"p"},"Size to max")," box is checked, the graph will automatically be scaled to the scale of the maximum value\nordinates shown on the given period.")),(0,n.kt)("h2",a({},{id:"using-a-graph-template"}),"Using a graph template"),(0,n.kt)("p",null,"You can add this layout model when editing a service (or a service template) by going into the ",(0,n.kt)("strong",{parentName:"p"},"Service Extended Info"),"\ntab in configuration form:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(50561).Z,width:"1350",height:"372"})))}u.isMDXComponent=!0},82434:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/02addgraph_template-842331f5e5cb8c2b20accd4863dd73c5.png"},50561:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/02linkgraph_template-7010563e4a85116d81c223b9c5dba3b2.png"}}]);