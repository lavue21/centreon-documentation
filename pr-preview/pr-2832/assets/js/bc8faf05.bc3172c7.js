"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[73886],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(a),c=r,g=d["".concat(p,".").concat(c)]||d[c]||u[c]||l;return a?n.createElement(g,i(i({ref:t},m),{},{components:a})):n.createElement(g,i({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},37546:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>p,metadata:()=>m,toc:()=>d});a(67294);var n=a(3905),r=a(67709),l=a(7626);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const p={id:"network-dell-os10-snmp",title:"Dell OS10 SNMP"},s=void 0,m={unversionedId:"integrations/plugin-packs/procedures/network-dell-os10-snmp",id:"integrations/plugin-packs/procedures/network-dell-os10-snmp",title:"Dell OS10 SNMP",description:"Plugin-Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/network-dell-os10-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-dell-os10-snmp",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/network-dell-os10-snmp",draft:!1,tags:[],version:"current",frontMatter:{id:"network-dell-os10-snmp",title:"Dell OS10 SNMP"},sidebar:"pp",previous:{title:"Dell N4000",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/network-dell-n4000"},next:{title:"Dell S-series",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/network-dell-sseries-snmp"}},u={},d=[{value:"Plugin-Pack Assets",id:"plugin-pack-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Host configuration",id:"host-configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How to test the Plugin and what are the main options for ?",id:"how-to-test-the-plugin-and-what-are-the-main-options-for-",level:3},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:3},{value:"UNKNOWN: SNMP GET Request : Cant get a single value.",id:"unknown-snmp-get-request--cant-get-a-single-value",level:3}],c={toc:d};function g(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)("wrapper",i({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",i({},{id:"plugin-pack-assets"}),"Plugin-Pack Assets"),(0,n.kt)("h3",i({},{id:"monitored-objects"}),"Monitored Objects"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Dell OS 10 including CPU, Disk Usage, Hardware, Inodes, Interfaces, Load, Memory, Swap and Uptime.")),(0,n.kt)("h3",i({},{id:"collected-metrics"}),"Collected Metrics"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Cpu",label:"Cpu",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"cpu.utilization.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"CPU utilization."),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"core.cpu.utilization.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"CPU Core utilization."),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%"))))),(0,n.kt)(l.Z,{value:"Disk-usage",label:"Disk-usage",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"storage.partitions.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of partitions storage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"storage.space.usage.bytes"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Usage Space Storage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"storage.space.free.bytes"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Free Space storage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"storage.space.usage.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Usage Space in percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"storage.inodes.usage.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Inode usage in percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%")))),(0,n.kt)("p",null,"It is possible to filter the results on the given disk path by using a REGEXP on the ",(0,n.kt)("inlineCode",{parentName:"p"},"--disk-path")," parameter: ","[",(0,n.kt)("inlineCode",{parentName:"p"},"--disk-patch='^my-disk-path$'"),"]")),(0,n.kt)(l.Z,{value:"Inodes",label:"Inodes",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"used"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Inodes space usage on partitions."),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%"))))),(0,n.kt)(l.Z,{value:"Interfaces",label:"Interfaces",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"status"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Status of the interface"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"interface.traffic.in.bitspersecond"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Incoming traffic going through the interface."),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"interface.traffic.out.bitspersecond"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Outgoing traffic going through the interface."),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"interface.packets.in.error.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Incoming errored packets going through the interface."),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"interface.packets.in.discard.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Incoming discarded packets going through the interface."),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"interface.packets.out.error.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Outgoing errored packets going through the interface."),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"interface.packets.out.discard.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Outgoing discarded packets going through the interface."),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%")))),(0,n.kt)("p",null,"It is possible to filter on the name of an interface using a REGEXP of the form ","[",(0,n.kt)("inlineCode",{parentName:"p"},"--interface='^ens160$' --name"),"]",".")),(0,n.kt)(l.Z,{value:"Hardware",label:"Hardware",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Per intances :")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"os10CardStatus"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Status of the card"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"os10FanOperStatus"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Status of the fan"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"os10FanTrayOperStatus"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Status of the fantray"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"os10PowerSupplyOperStatus"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Status of the power supply"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"resource.oper_status"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Status of the resources"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"hardware.temperature.celsius"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"temperature of the different sensors"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"C"))))),(0,n.kt)(l.Z,{value:"Load",label:"Load",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"load1"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"System load 1 minute sample"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"load5"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"System load 5 minutes sample"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"load15"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"System load 15 minutes sample"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"})))))),(0,n.kt)(l.Z,{value:"Memory",label:"Memory",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"memory.usage.bytes"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Memory usage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"memory.free.bytes"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Free memory"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"memory.usage.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Memory usage in percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"memory.buffer.bytes"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Buffer memory"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"memory.cached.bytes"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Memory cached"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"memory.shared.bytes"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Shared Memory allocation"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"B"))))),(0,n.kt)(l.Z,{value:"Swap",label:"Swap",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"swap.usage.bytes"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Swap usage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"swap.free.bytes"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Swap free"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"swap.usage.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Swap usage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%"))))),(0,n.kt)(l.Z,{value:"Uptime",label:"Uptime",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"system.uptime"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Duration of system has been working and available."),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"s")))))),(0,n.kt)("h2",i({},{id:"prerequisites"}),"Prerequisites"),(0,n.kt)("p",null,"To control your Dell OS10 equipment, the SNMP v2 must be configured.\nFor more information, please refer to the official user documentation :\n",(0,n.kt)("a",i({parentName:"p"},{href:"https://www.dell.com/support/manuals/fr/fr/frbsdt1/networking-z9100/os10-enterprise-user-guide-10_4_2-pub/configure-snmp?guid=guid-cf75b1b6-5c24-4237-af0c-b9ed1f491b75&lang=en-us"}),"https://www.dell.com/support/manuals/fr/fr/frbsdt1/networking-z9100/os10-enterprise-user-guide-10_4_2-pub/configure-snmp?guid=guid-cf75b1b6-5c24-4237-af0c-b9ed1f491b75&lang=en-us")),(0,n.kt)("h2",i({},{id:"setup"}),"Setup"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller monitoring Dell OS10 resources:")),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Network-Dell-Os10-Snmp.noarch\n")),(0,n.kt)("ol",i({},{start:2}),(0,n.kt)("li",{parentName:"ol"},'On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the ',(0,n.kt)("em",{parentName:"li"},"Dell OS10 SNMP")," Plugin-Pack"))),(0,n.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller monitoring Dell OS10 resources:")),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Network-Dell-Os10-Snmp.noarch\n")),(0,n.kt)("ol",i({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"On the Centreon Central server, install the Centreon Plugin-Pack from the RPM:")),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-pack-network-dell-os10-snmp.noarch\n")),(0,n.kt)("ol",i({},{start:3}),(0,n.kt)("li",{parentName:"ol"},'On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the ',(0,n.kt)("em",{parentName:"li"},"Dell OS10 SNMP")," Plugin-Pack")))),(0,n.kt)("h2",i({},{id:"host-configuration"}),"Host configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add a new Host and apply the ",(0,n.kt)("em",{parentName:"li"},"Net-Dell-Os10-SNMP-custom")," Host Template"),(0,n.kt)("li",{parentName:"ul"},"Fill the SNMP Version and Community fields according to the device's configuration")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"When using SNMP v3, use the SNMPEXTRAOPTIONS Host Macro to add specific authentication parameters")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Mandatory"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"})),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"SNMPEXTRAOPTIONS"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Configure your own SNMPv3 credentials combo")))),(0,n.kt)("h2",i({},{id:"faq"}),"FAQ"),(0,n.kt)("h3",i({},{id:"how-to-test-the-plugin-and-what-are-the-main-options-for-"}),"How to test the Plugin and what are the main options for ?"),(0,n.kt)("p",null,"Once the Plugin installed, log into your Centreon Poller CLI using the ",(0,n.kt)("em",{parentName:"p"},"centreon-engine")," user account\nand test the Plugin by running the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_dell_os10_snmp.pl \\\n    --plugin=network::dell::os10::snmp::plugin \\\n    --mode=cpu \\\n    --hostname=10.30.2.114 \\\n    --snmp-version='2c' \\\n    --snmp-community='dell_os10_ro' \\\n    --warning-average='60' \\\n    --critical-average='75' \\\n    --verbose\n")),(0,n.kt)("p",null,"Expected command output is shown below: "),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"OK: CPU(s) average usage is 15.29 % - CPU '0' usage : 15.29 % \n| 'total_cpu_avg'=15.29%;0:60;0:75;0;100 'cpu'=15.29%;;;0;100\n")),(0,n.kt)("p",null,"The command above monitors a Dell OS10 cpu usage (",(0,n.kt)("inlineCode",{parentName:"p"},"--plugin=network::dell::os10::snmp::plugin --mode=cpu"),") identified"),(0,n.kt)("p",null,"by the IP address ",(0,n.kt)("em",{parentName:"p"},"10.30.2.114")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--hostname=10.30.2.114"),"). As the Plugin is using the SNMP protocol to request the device, the related\n",(0,n.kt)("em",{parentName:"p"},"community")," and ",(0,n.kt)("em",{parentName:"p"},"version")," are specified (",(0,n.kt)("inlineCode",{parentName:"p"},"--snmp-version='2c' --snmp-community='dell_os10_ro'"),")."),(0,n.kt)("p",null,"This command would trigger a WARNING alarm if the CPU average used to raise over 60% of the CPU capacity\n(",(0,n.kt)("inlineCode",{parentName:"p"},"--warning-average='60'"),") and a CRITICAL alarm over 75% (",(0,n.kt)("inlineCode",{parentName:"p"},"--critical-average='75'"),")."),(0,n.kt)("p",null,"For each Plugin mode, all the options as well as all the available thresholds can be displayed by adding the ",(0,n.kt)("inlineCode",{parentName:"p"},"--help"),"\nparameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_dell_os10_snmp.pl \n    --plugin=network::dell::os10::snmp::plugin \\\n    --mode=cpu \\\n    --help\n")),(0,n.kt)("h3",i({},{id:"unknown-snmp-get-request--timeout"}),"UNKNOWN: SNMP GET Request : Timeout"),(0,n.kt)("p",null,"If you get this message, you're probably facing one of these issues: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The SNMP agent of the device isn't started or is misconfigured "),(0,n.kt)("li",{parentName:"ul"},"An external device is blocking the request (firewall, ...)")),(0,n.kt)("h3",i({},{id:"unknown-snmp-get-request--cant-get-a-single-value"}),"UNKNOWN: SNMP GET Request : Cant get a single value."),(0,n.kt)("p",null,"This error message often refers to the following issues: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The Dell device doesn't support the MIB used by the plugin"),(0,n.kt)("li",{parentName:"ul"},"The targeted SNMP OID cannot be fetched because of insufficient privileges on the device.\nSNMP Agent must be capable of accessing to the enterprise branch Dell: 1.3.6.1.4.1.674.")))}g.isMDXComponent=!0},7626:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function o({children:e,hidden:t,className:a}){return n.createElement("div",i({role:"tabpanel",className:(0,r.Z)(l,a)},{hidden:t}),e)}},67709:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(67294),r=a(86010),l=a(90980),i=a(35715),o=a(8854),p=a(8241);const s="tabList__CuJ",m="tabItem_LNqP";function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u.apply(this,arguments)}function d(e){var t;const{lazy:a,block:l,defaultValue:d,values:c,groupId:g,className:k}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=c?c:f.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),b=(0,i.l)(N,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var h;const y=null===d?d:null!==(h=null!=d?d:null===(t=f.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==h?h:f[0].props.value;if(null!==y&&!N.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,o.U)(),[O,P]=(0,n.useState)(y),S=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=g){const e=v[g];null!=e&&e!==O&&N.some((t=>t.value===e))&&P(e)}const C=e=>{const t=e.currentTarget,a=S.indexOf(t),n=N[a].value;n!==O&&(T(t),P(n),null!=g&&w(g,String(n)))},M=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=S.indexOf(e.currentTarget)+1;var a;t=null!==(a=S[n])&&void 0!==a?a:S[0];break}case"ArrowLeft":{const a=S.indexOf(e.currentTarget)-1;var n;t=null!==(n=S[a])&&void 0!==n?n:S[S.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",s)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},k)},N.map((({value:e,label:t,attributes:a})=>n.createElement("li",u({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>S.push(e),onKeyDown:M,onFocus:C,onClick:C},a,{className:(0,r.Z)("tabs__item",m,null==a?void 0:a.className,{"tabs__item--active":O===e})}),null!=t?t:e)))),a?(0,n.cloneElement)(f.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function c(e){const t=(0,l.Z)();return n.createElement(d,u({key:String(t)},e))}}}]);