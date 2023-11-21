"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[74787],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=p(n),d=r,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(k,o(o({ref:e},u),{},{components:n})):a.createElement(k,o({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},90071:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>s,metadata:()=>u,toc:()=>c});n(67294);var a=n(3905),r=n(67709),l=n(7626);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},o.apply(this,arguments)}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const s={id:"operatingsystems-windows-nsclient-05-nrpe",title:"Windows NRPE 0.5"},p=void 0,u={unversionedId:"integrations/plugin-packs/procedures/operatingsystems-windows-nsclient-05-nrpe",id:"integrations/plugin-packs/procedures/operatingsystems-windows-nsclient-05-nrpe",title:"Windows NRPE 0.5",description:"Hello community! We're looking for a contributor to help us to translate the",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/operatingsystems-windows-nsclient-05-nrpe.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/operatingsystems-windows-nsclient-05-nrpe",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/operatingsystems-windows-nsclient-05-nrpe",draft:!1,tags:[],version:"current",frontMatter:{id:"operatingsystems-windows-nsclient-05-nrpe",title:"Windows NRPE 0.5"},sidebar:"pp",previous:{title:"Windows NRPE",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/operatingsystems-windows-nrpe"},next:{title:"Windows NSClient API",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/operatingsystems-windows-nsclient-05-restapi"}},m={},c=[{value:"Overview",id:"overview",level:2},{value:"Pack assets",id:"pack-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Collected metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Centreon NSClient++",id:"centreon-nsclient",level:3},{value:"Installation",id:"installation",level:2},{value:"Host configuration",id:"host-configuration",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],d={toc:c};function k(t){var{components:e}=t,n=i(t,["components"]);return(0,a.kt)("wrapper",o({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Hello community! We're looking for a contributor to help us to translate the\ncontent in french and provide a sample execution command. If it's you, let us\nknow and ping us on our community website ",(0,a.kt)("a",o({parentName:"p"},{href:"https://thewatch.centreon.com/"}),"The Watch"),".")),(0,a.kt)("h2",o({},{id:"overview"}),"Overview"),(0,a.kt)("p",null,"This Plugin Pack allow to get metrics and statuses collected thanks to the NSClient++\nmonitoring agent and its embedded NRPE Server. "),(0,a.kt)("h2",o({},{id:"pack-assets"}),"Pack assets"),(0,a.kt)("h3",o({},{id:"monitored-objects"}),"Monitored objects"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Windows Server OS from 2003 SP2 version"),(0,a.kt)("li",{parentName:"ul"},"Windows Workstation from XP version")),(0,a.kt)("h3",o({},{id:"collected-metrics"}),"Collected metrics"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Counter-Active-Sessions",label:"Counter-Active-Sessions",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Sessions","_","value"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Number of actived sessions. Unit: Count"))))),(0,a.kt)(l.Z,{value:"Counter-Generic",label:"Counter-Generic",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Counter","_","value"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Number of counter found. Unit: Count"))))),(0,a.kt)(l.Z,{value:"Cpu",label:"Cpu",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"total 5m"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"CPU Utilization of Windows serveur over 5 minutes. Unit: Percent")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"total 1m"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"CPU Utilization of Windows serveur over 1 minutes. Unit: Percent")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"total 5s"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"CPU Utilization of Windows serveur over 5 seconds. Unit: Percent"))))),(0,a.kt)(l.Z,{value:"Disk",label:"Disk",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"used"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Used and Total Storage allocated. Unit: Bytes"))))),(0,a.kt)(l.Z,{value:"Eventlog-Generic",label:"Eventlog-Generic",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"problemCount"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Number of event log found. Unit: Count"))))),(0,a.kt)(l.Z,{value:"Files-Generic",label:"Files-Generic",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"count"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Number of files found. Unit: Count"))))),(0,a.kt)(l.Z,{value:"Logfiles-Generic",label:"Logfiles-Generic",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"default","_","lines"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Number of line that match with tag word found in logfile. Unit: Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"default","_","warnings"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Number of line that match with warning pattern found in logfile. Unit: Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"default","_","criticals"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Number of line that match with critical pattern found in logfile. Unit: Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"default","_","unknowns"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Number of line that match with unknown pattern found in logfile. Unit: Count"))))),(0,a.kt)(l.Z,{value:"Memory",label:"Memory",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"used"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Total usage of memory. Unit: Bytes"))))),(0,a.kt)(l.Z,{value:"Swap",label:"Swap",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"swap"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Total usage of swap memory. Unit: Bytes"))))),(0,a.kt)(l.Z,{value:"Sessions",label:"Sessions",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"sessions-created"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Number of created users session. Unit: Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"sessions-disconnected"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Number of disconnected users session. Unit: Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"sessions-reconnected"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Number of reconnected users session. Unit: Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"sessions-active"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Number of active users session. Unit: Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"sessions-disconnected-current"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Number of current disconnected users session. Unit: Count")))))),(0,a.kt)("h2",o({},{id:"prerequisites"}),"Prerequisites"),(0,a.kt)("h3",o({},{id:"centreon-nsclient"}),"Centreon NSClient++"),(0,a.kt)("p",null,"To monitor ",(0,a.kt)("em",{parentName:"p"},"Windows")," resources through NRPE, install the Centreon packaged version\nof the NSClient++ agent. Please follow our ",(0,a.kt)("a",o({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/centreon-nsclient-tutorial"}),"official documentation"),"\nand make sure that the ",(0,a.kt)("strong",{parentName:"p"},"NRPE Server")," configuration is correct."),(0,a.kt)("h2",o({},{id:"installation"}),"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon NRPE Client package on every Poller expected to monitor ",(0,a.kt)("em",{parentName:"li"},"Windows")," resources:")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yum install centreon-nrpe3-plugin\n")),(0,a.kt)("ol",o({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,a.kt)("strong",{parentName:"li"},"Windows NRPE 0.5")," Centreon Plugin Pack on the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Plugin Packs")," page."))),(0,a.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin package on every Poller expected to monitor ",(0,a.kt)("em",{parentName:"li"},"Windows")," resources:")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yum install centreon-nrpe3-plugin\n")),(0,a.kt)("ol",o({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"Install the ",(0,a.kt)("strong",{parentName:"li"},"Windows NRPE 0.5")," Centreon Pack RPM on the Centreon Central server:")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yum install centreon-pack-operatingsystems-windows-nsclient-05-nrpe\n")),(0,a.kt)("p",null,"3.On the Centreon Web interface, install the ",(0,a.kt)("strong",{parentName:"p"},"Windows NRPE 0.5")," Centreon Plugin Pack on the ",(0,a.kt)("strong",{parentName:"p"},"Configuration > Plugin Packs")," page."))),(0,a.kt)("h2",o({},{id:"host-configuration"}),"Host configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Log into Centreon and add a new Host through "Configuration > Hosts".'),(0,a.kt)("li",{parentName:"ul"},"Fill the ",(0,a.kt)("strong",{parentName:"li"},"Name"),", ",(0,a.kt)("strong",{parentName:"li"},"Alias")," & ",(0,a.kt)("strong",{parentName:"li"},"IP Address/DNS")," fields according to your ",(0,a.kt)("em",{parentName:"li"},"Windows")," server settings."),(0,a.kt)("li",{parentName:"ul"},"Select the ",(0,a.kt)("em",{parentName:"li"},"OS-Windows-NSClient-05-NRPE-custom")," template to apply to the Host."),(0,a.kt)("li",{parentName:"ul"},"Once the template is applied, fill in the corresponding macros. If you're in 21.10 or higher version and you've just installed ",(0,a.kt)("strong",{parentName:"li"},"centreon-nrpe3-plugin"),", you will have to replace the default macro values by the bold ones:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Mandatory"),(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Name"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Value"),(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"NRPECLIENT"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"check_centreon_nrpe3")),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"NRPE Plugin binary to use (Default: 'check_centreon_nrpe')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"NRPEPORT"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"5666"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"NRPE Port of the target server (Default: '5666')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"NRPETIMEOUT"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"30"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Timeout value (Default: '30')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"NRPEEXTRAOPTIONS"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"-u -2 -P 8192")),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Extraoptions to use with the NRPE binary (default: '-u -m 8192')")))),(0,a.kt)("h2",o({},{id:"troubleshooting"}),"Troubleshooting"),(0,a.kt)("p",null,"Please find the troubleshooting documentation for NRPE checks in the ",(0,a.kt)("a",o({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#nrpe-checks"}),"dedicated chapter")," of the Centreon documentation."))}k.isMDXComponent=!0},7626:(t,e,n)=>{n.d(e,{Z:()=>i});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},o.apply(this,arguments)}function i({children:t,hidden:e,className:n}){return a.createElement("div",o({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:e}),t)}},67709:(t,e,n)=>{n.d(e,{Z:()=>d});var a=n(67294),r=n(86010),l=n(90980),o=n(35715),i=n(8854),s=n(8241);const p="tabList__CuJ",u="tabItem_LNqP";function m(){return m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},m.apply(this,arguments)}function c(t){var e;const{lazy:n,block:l,defaultValue:c,values:d,groupId:k,className:f}=t,g=a.Children.map(t.children,(t=>{if((0,a.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=d?d:g.map((({props:{value:t,label:e,attributes:n}})=>({value:t,label:e,attributes:n}))),b=(0,o.l)(N,((t,e)=>t.value===e.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var h;const v=null===c?c:null!==(h=null!=c?c:null===(e=g.find((t=>t.props.default)))||void 0===e?void 0:e.props.value)&&void 0!==h?h:g[0].props.value;if(null!==v&&!N.some((t=>t.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${N.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,i.U)(),[P,C]=(0,a.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,s.o5)();if(null!=k){const t=y[k];null!=t&&t!==P&&N.some((e=>e.value===t))&&C(t)}const E=t=>{const e=t.currentTarget,n=T.indexOf(e),a=N[n].value;a!==P&&(O(e),C(a),null!=k&&w(k,String(a)))},I=t=>{let e=null;switch(t.key){case"ArrowRight":{const a=T.indexOf(t.currentTarget)+1;var n;e=null!==(n=T[a])&&void 0!==n?n:T[0];break}case"ArrowLeft":{const n=T.indexOf(t.currentTarget)-1;var a;e=null!==(a=T[n])&&void 0!==a?a:T[T.length-1];break}}null==e||e.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},f)},N.map((({value:t,label:e,attributes:n})=>a.createElement("li",m({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:t=>T.push(t),onKeyDown:I,onFocus:E,onClick:E},n,{className:(0,r.Z)("tabs__item",u,null==n?void 0:n.className,{"tabs__item--active":P===t})}),null!=e?e:t)))),n?(0,a.cloneElement)(g.filter((t=>t.props.value===P))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((t,e)=>(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==P})))))}function d(t){const e=(0,l.Z)();return a.createElement(c,m({key:String(e)},t))}}}]);