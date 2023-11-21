"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[30145],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>c});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),s=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=s(t.components);return n.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),d=s(a),c=r,k=d["".concat(o,".").concat(c)]||d[c]||u[c]||l;return a?n.createElement(k,i(i({ref:e},m),{},{components:a})):n.createElement(k,i({ref:e},m))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=d;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},30021:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>k,frontMatter:()=>o,metadata:()=>m,toc:()=>d});a(67294);var n=a(3905),r=a(67709),l=a(7626);function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},i.apply(this,arguments)}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const o={id:"network-ubiquiti-unifi-snmp",title:"Ubiquiti UniFi SNMP"},s=void 0,m={unversionedId:"integrations/plugin-packs/procedures/network-ubiquiti-unifi-snmp",id:"integrations/plugin-packs/procedures/network-ubiquiti-unifi-snmp",title:"Ubiquiti UniFi SNMP",description:"Contenu du Pack",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/network-ubiquiti-unifi-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-ubiquiti-unifi-snmp",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/network-ubiquiti-unifi-snmp",draft:!1,tags:[],version:"current",frontMatter:{id:"network-ubiquiti-unifi-snmp",title:"Ubiquiti UniFi SNMP"},sidebar:"pp",previous:{title:"Ubiquiti Edge SNMP",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/network-ubiquiti-edge-snmp"},next:{title:"Traffic Director",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/network-oracle-otd-snmp"}},u={},d=[{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"R\xe8gles de d\xe9couvertes",id:"r\xe8gles-de-d\xe9couvertes",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostique",id:"diagnostique",level:2}],c={toc:d};function k(t){var{components:e}=t,a=p(t,["components"]);return(0,n.kt)("wrapper",i({},c,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",i({},{id:"contenu-du-pack"}),"Contenu du Pack"),(0,n.kt)("h3",i({},{id:"objets-supervis\xe9s"}),"Objets supervis\xe9s"),(0,n.kt)("p",null,"Le Pack Ubiquiti UniFi collecte les donn\xe9es pour:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Cpu"),(0,n.kt)("li",{parentName:"ul"},"Disks"),(0,n.kt)("li",{parentName:"ul"},"Interfaces"),(0,n.kt)("li",{parentName:"ul"},"Load"),(0,n.kt)("li",{parentName:"ul"},"Memory"),(0,n.kt)("li",{parentName:"ul"},"Swap"),(0,n.kt)("li",{parentName:"ul"},"Uptime"),(0,n.kt)("li",{parentName:"ul"},"Virtual Access Points")),(0,n.kt)("h3",i({},{id:"r\xe8gles-de-d\xe9couvertes"}),"R\xe8gles de d\xe9couvertes"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Services",label:"Services",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Nom de la r\xe8gle"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Net-Ubiquiti-Unifi-SNMP-Interface-Name"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"D\xe9couvre les interfaces r\xe9seaux et supervise le statut et l'utilisation de la bande passante")))))),(0,n.kt)("h3",i({},{id:"m\xe9triques-collect\xe9es"}),"M\xe9triques collect\xe9es"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Cpu",label:"Cpu",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"cpu.user.utilization.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"CPU User utilization"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"cpu.nice.utilization.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"CPU Nice utilization"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"cpu.system.utilization.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"CPU System utilization"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"cpu.idle.utilization.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"CPU Idle utilization"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"cpu.wait.utilization.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"CPU Wait utilization"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"cpu.kernel.utilization.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"CPU Kernel utilization"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"cpu.interrupt.utilization.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"CPU Interrupt utilization"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"cpu.softirq.utilization.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"CPU SoftIrq utilization"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"cpu.steal.utilization.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"CPU Steal utilization"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"cpu.guest.utilization.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"CPU Guest utilization"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"cpu.guestnice.utilization.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"CPU Guest Nice utilization"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%"))))),(0,n.kt)(l.Z,{value:"Disks",label:"Disks",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"storage.partitions.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of partitions storage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"storage.space.usage.bytes"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Usage Space Storage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"storage.space.free.bytes"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Free Space storage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"storage.space.usage.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Usage Space in percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"storage.inodes.usage.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Inode usage in percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%"))))),(0,n.kt)(l.Z,{value:"Interfaces",label:"Interfaces",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"status"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Status of the interface"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.traffic.in.bitspersecond"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Incoming traffic going through the interface"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.traffic.in.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Percentage of the interface's ",(0,n.kt)("em",{parentName:"td"},"in")," bandwidth usage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.traffic.out.bitspersecond"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Outgoing traffic going through the interface"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.traffic.out.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Percentage of the interface's ",(0,n.kt)("em",{parentName:"td"},"out")," bandwidth usage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%")))),(0,n.kt)("p",null,"A regexp filter is available to target a specific interface identifier - ifName ","[",(0,n.kt)("inlineCode",{parentName:"p"},"--interface='^eth0$' --name"),"]")),(0,n.kt)(l.Z,{value:"Load",label:"Load",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"load.1m.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"System load 1 minute-sample"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"load.5m.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"System load 5 minutes-sample"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"load.15m.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"System load 15 minutes-sample"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"load.1m.average.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"System load 1 minute-sample divided by the number of processors"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"load.5m.average.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"System load 5 minutes-sample divided by the number of processors"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"load.15m.average.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"System load 15 minutes-sample divided by the number of processors"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"})))))),(0,n.kt)(l.Z,{value:"Memory",label:"Memory",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"memory.usage.bytes"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Memory usage on the device"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"memory.free.bytes"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Free memory on the device"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"memory.usage.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Percentage of memory usage on the device"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"memory.buffer.bytes"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Buffered memory allocation"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"memory.cached.bytes"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Cached memory allocation"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"memory.shared.bytes"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Shared memory allocation"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"B"))))),(0,n.kt)(l.Z,{value:"Swap",label:"Swap",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"swap.usage.bytes"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Used swap"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"swap.free.bytes"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Free swap"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"swap.usage.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Percentage of used swap"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%"))))),(0,n.kt)(l.Z,{value:"Uptime",label:"Uptime",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"system.uptime.seconds"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"System uptime"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"s"))))),(0,n.kt)(l.Z,{value:"Virtual-access-points",label:"Virtual-access-points",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"virtual_access_points.total.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of virtual access points"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"virtual_access_points.clients.connected.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of virtual access points connected"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"status"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Status of the virtual access point"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"vap_name"),"#","virtual_access_point.clients.connected.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of clients connected"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"dBm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"vap_name"),"#","virtual_access_point.traffic.in.bitspersecond"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Incoming traffic"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"vap_name"),"#","virtual_access_point.traffic.out.bitspersecond"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Outgoing traffic"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"b/s")))))),(0,n.kt)("h2",i({},{id:"pr\xe9requis"}),"Pr\xe9requis"),(0,n.kt)("p",null,"Afin de contr\xf4ler votre \xe9quipement Ubiquiti UniFi, le SNMP doit \xeatre configur\xe9. "),(0,n.kt)("p",null,"Le flux SNMP UDP/161 doit \xeatre ouvert entre le Collecteur et l'\xe9quipement."),(0,n.kt)("h2",i({},{id:"installation"}),"Installation"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Network-Ubiquiti-Unifi-Snmp\n")),(0,n.kt)("ol",i({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Pack ",(0,n.kt)("em",{parentName:"li"},"Ubiquiti UniFi SNMP")," depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Plugin Packs > Gestionnaire")))),(0,n.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Network-Ubiquiti-Unifi-Snmp\n")),(0,n.kt)("ol",i({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le Pack via le RPM:")),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-pack-network-ubiquiti-unifi-snmp\n")),(0,n.kt)("ol",i({},{start:3}),(0,n.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Pack ",(0,n.kt)("em",{parentName:"li"},"Ubiquiti UniFi SNMP")," depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Plugin Packs > Gestionnaire"))))),(0,n.kt)("h2",i({},{id:"configuration"}),"Configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ajoutez un nouvel H\xf4te depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes")),(0,n.kt)("li",{parentName:"ul"},"Compl\xe9tez les champs ",(0,n.kt)("em",{parentName:"li"},"Adresse IP/DNS"),", ",(0,n.kt)("em",{parentName:"li"},"Communaut\xe9 SNMP")," et ",(0,n.kt)("em",{parentName:"li"},"Version SNMP")),(0,n.kt)("li",{parentName:"ul"},"Appliquez le Mod\xe8le d'H\xf4te ",(0,n.kt)("em",{parentName:"li"},"Net-Ubiquiti-Unifi-SNMP-custom"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Si vous utilisez la version 3 du protocole SNMP, utilisez la Macro ",(0,n.kt)("em",{parentName:"p"},"SNMPEXTRAOPTIONS")," afin de renseigner les param\xe8tres\nd'authentification et de chiffrement ad\xe9quats")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Mandatory"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"})),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"SNMPEXTRAOPTIONS"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Extra options SNMP")))),(0,n.kt)("h2",i({},{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"}),"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,n.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande\ndepuis un collecteur Centreon en vous connectant avec l'utilisateur ",(0,n.kt)("em",{parentName:"p"},"centreon-engine"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_ubiquiti_unifi_snmp.pl \\\n    --plugin=network::ubiquiti::unifi::snmp::plugin \\\n    --mode=disks \\\n    --hostname=10.30.2.114 \\\n    --snmp-version='2c' \\\n    --snmp-community='ubiquiti_ro' \\\n    --filter-disk-path='^/$' \\\n    --warning-usage-prct='90' \\\n    --critical-usage-prct='95' \\\n    --verbose\n")),(0,n.kt)("p",null,"La commande devrait retourner un message de sortie de la forme ci-dessous:"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"OK: Partition '/' usage total: 46.82 GB used: 26.41 GB (56.40%) free: 20.41 GB (43.60%), Inodes used: 2 % | 'storage.partitions.count'=1;;;0; '/#storage.space.usage.bytes'=28356739072B;;;0;50273779712 '/#storage.space.free.bytes'=21917040640B;;;0;50273779712 '/#storage.space.usage.percentage'=56.40%;0:90;0:95;0;100 '/#storage.inodes.usage.percentage'=2%;;;0;100\nPartition '/' usage total: 46.82 GB used: 26.41 GB (56.40%) free: 20.41 GB (43.60%), Inodes used: 2 %\n")),(0,n.kt)("p",null,"Cette commande contr\xf4le les disques (",(0,n.kt)("inlineCode",{parentName:"p"},"--mode=disks"),") d'un \xe9quipement Ubiquiti UniFi ayant pour adresse ",(0,n.kt)("em",{parentName:"p"},"10.30.2.114")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--hostname=10.30.2.114"),")\nen version ",(0,n.kt)("em",{parentName:"p"},"2c")," du protocol SNMP (",(0,n.kt)("inlineCode",{parentName:"p"},"--snmp-version='2c'"),") et avec la communaut\xe9 ",(0,n.kt)("em",{parentName:"p"},"ubiquiti_ro")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--snmp-community='ubiquiti_ro'"),")."),(0,n.kt)("p",null,"Cette commande d\xe9clenchera une alarme WARNING si l'utilisation disque est sup\xe9rieur \xe0 90% (",(0,n.kt)("inlineCode",{parentName:"p"},"--warning-usage-prct='90'"),")\net une alarme CRITICAL si sup\xe9rieur \xe0 95% (",(0,n.kt)("inlineCode",{parentName:"p"},"--critical-usage-prct='95'"),")."),(0,n.kt)("p",null,"Pour chaque mode, la liste de toutes les m\xe9triques, seuils associ\xe9s et options compl\xe9mentaires peut \xeatre affich\xe9e\nen ajoutant le param\xe8tre ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_ubiquiti_unifi_snmp.pl \\\n    --plugin=network::ubiquiti::unifi::snmp::plugin \\\n    --mode=disks \\\n    --help\n")),(0,n.kt)("h2",i({},{id:"diagnostique"}),"Diagnostique"),(0,n.kt)("p",null,(0,n.kt)("a",i({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"}),"Diagnostique des plugins")))}k.isMDXComponent=!0},7626:(t,e,a)=>{a.d(e,{Z:()=>p});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},i.apply(this,arguments)}function p({children:t,hidden:e,className:a}){return n.createElement("div",i({role:"tabpanel",className:(0,r.Z)(l,a)},{hidden:e}),t)}},67709:(t,e,a)=>{a.d(e,{Z:()=>c});var n=a(67294),r=a(86010),l=a(90980),i=a(35715),p=a(8854),o=a(8241);const s="tabList__CuJ",m="tabItem_LNqP";function u(){return u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},u.apply(this,arguments)}function d(t){var e;const{lazy:a,block:l,defaultValue:d,values:c,groupId:k,className:g}=t,f=n.Children.map(t.children,(t=>{if((0,n.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=c?c:f.map((({props:{value:t,label:e,attributes:a}})=>({value:t,label:e,attributes:a}))),b=(0,i.l)(N,((t,e)=>t.value===e.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var y;const v=null===d?d:null!==(y=null!=d?d:null===(e=f.find((t=>t.props.default)))||void 0===e?void 0:e.props.value)&&void 0!==y?y:f[0].props.value;if(null!==v&&!N.some((t=>t.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${N.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:P}=(0,p.U)(),[w,q]=(0,n.useState)(v),C=[],{blockElementScrollPositionUntilNextRender:O}=(0,o.o5)();if(null!=k){const t=h[k];null!=t&&t!==w&&N.some((e=>e.value===t))&&q(t)}const S=t=>{const e=t.currentTarget,a=C.indexOf(e),n=N[a].value;n!==w&&(O(e),q(n),null!=k&&P(k,String(n)))},U=t=>{let e=null;switch(t.key){case"ArrowRight":{const n=C.indexOf(t.currentTarget)+1;var a;e=null!==(a=C[n])&&void 0!==a?a:C[0];break}case"ArrowLeft":{const a=C.indexOf(t.currentTarget)-1;var n;e=null!==(n=C[a])&&void 0!==n?n:C[C.length-1];break}}null==e||e.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",s)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},g)},N.map((({value:t,label:e,attributes:a})=>n.createElement("li",u({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:t=>C.push(t),onKeyDown:U,onFocus:S,onClick:S},a,{className:(0,r.Z)("tabs__item",m,null==a?void 0:a.className,{"tabs__item--active":w===t})}),null!=e?e:t)))),a?(0,n.cloneElement)(f.filter((t=>t.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((t,e)=>(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==w})))))}function c(t){const e=(0,l.Z)();return n.createElement(d,u({key:String(e)},t))}}}]);