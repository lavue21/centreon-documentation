"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[7567],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97487:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={id:"centreon-ui",title:"Centreon UI"},s=void 0,l={unversionedId:"administration/parameters/centreon-ui",id:"version-23.10/administration/parameters/centreon-ui",title:"Centreon UI",description:"This part covers the configuration of the general options of the Centreon web",source:"@site/versioned_docs/version-23.10/administration/parameters/centreon-ui.md",sourceDirName:"administration/parameters",slug:"/administration/parameters/centreon-ui",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/administration/parameters/centreon-ui",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/next/versioned_docs/version-23.10/administration/parameters/centreon-ui.md",tags:[],version:"23.10",lastUpdatedAt:1700565273,formattedLastUpdatedAt:"Nov 21, 2023",frontMatter:{id:"centreon-ui",title:"Centreon UI"},sidebar:"version-23.10/docs",previous:{title:"Backup & restore",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/reporting/backup-restore"},next:{title:"Monitoring",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/administration/parameters/monitoring"}},p={},c=[{value:"General options",id:"general-options",level:2},{value:"Proxy configuration",id:"proxy-configuration",level:2}],m={toc:c};function u(e){var{components:t}=e,a=i(e,["components"]);return(0,r.kt)("wrapper",o({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This part covers the configuration of the general options of the Centreon web\ninterface."),(0,r.kt)("p",null,"Go to ",(0,r.kt)("strong",{parentName:"p"},"Administration > Parameters > Centreon UI"),"."),(0,r.kt)("h2",o({},{id:"general-options"}),"General options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Directory")," indicates the directory where Centreon is installed"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contacts & Contact groups method calculation")," allows to define how\nnotification inheritance for hosts and services will be calculated."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Limit per page (default)")," field defines the number of objects displayed\nper ",(0,r.kt)("strong",{parentName:"li"},"Configuration")," page"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Limit per page for Monitoring")," field defines the number of objects\ndisplayed per page in the ",(0,r.kt)("strong",{parentName:"li"},"Monitoring")," menu"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Graph per page for Performances")," field defines the maximum number of\ndisplayed charts on ",(0,r.kt)("strong",{parentName:"li"},"Performance")," page"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Number of elements loaded in select")," field defines the maximum number in\nselect box"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Sessions Expiration Time")," field, expressed in minutes, indicates the\nmaximum session duration"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Refresh Interval for statistics")," field, expressed in seconds, indicates\nthe refreshment interval for the statistics page"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Refresh Interval for monitoring")," field, expressed in seconds, indicates\nthe refreshment interval for the objects on the monitoring page"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Sort problems by")," field is used to choose how to sort the incidents in\nthe ",(0,r.kt)("strong",{parentName:"li"},"Monitoring")," menu"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Order sort problems")," field indicates the display order for incidents, by\nrising or falling order of gravity"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Display downtime and acknowledgment on chart")," allows to display downtime\nand acknowledgment on chart"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Display comment on chart")," allows to display comment from service on chart"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Timezone")," field indicates timezone of your monitoring server."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Centreon Support Email")," field indicates the e-mail address of the\n",(0,r.kt)("strong",{parentName:"li"},"Customer\u2019s service support centre")," for the Centreon platform. This e-mail\naddress will be displayed at the bottom of the page on the link ",(0,r.kt)("strong",{parentName:"li"},"Centreon\nSupport")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Send anonymous statistics")," box defines wether or not the platform will\nsend anonymous information for the ",(0,r.kt)("strong",{parentName:"li"},"Centreon Customer Experience Improvement"))),(0,r.kt)("h2",o({},{id:"proxy-configuration"}),"Proxy configuration"),(0,r.kt)("p",null,"The proxy configuration is mandatory to use Centreon IT Edition."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(12032).Z,width:"851",height:"182"})),(0,r.kt)("p",null,"Define needed information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Proxy URL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Proxy port")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Proxy user")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Proxy password"))),(0,r.kt)("p",null,"Once you defined settings, test your configuration by clicking on the ",(0,r.kt)("strong",{parentName:"p"},"Test Internet Connection")," button."),(0,r.kt)("p",null,"To validate the configuration, click on the ",(0,r.kt)("strong",{parentName:"p"},"Test Internet Connection")," button. If the message\n",(0,r.kt)("strong",{parentName:"p"},"Connection Successful")," appears, your configuration is valid, otherwise modify your parameters."))}u.isMDXComponent=!0},12032:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/proxy_configuration-fea5f292e0126ee31e92ab9948e8c1fd.png"}}]);