"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[93464],{56830:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>k,contentTitle:()=>m,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>N});a(67294);var n=a(3905),r=a(51715),l=a(7626);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const s={id:"operatingsystems-windows-nsclient-05-nrpe",title:"Windows NRPE 0.5"},m=void 0,d={unversionedId:"integrations/plugin-packs/procedures/operatingsystems-windows-nsclient-05-nrpe",id:"integrations/plugin-packs/procedures/operatingsystems-windows-nsclient-05-nrpe",title:"Windows NRPE 0.5",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/operatingsystems-windows-nsclient-05-nrpe.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/operatingsystems-windows-nsclient-05-nrpe",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/operatingsystems-windows-nsclient-05-nrpe",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/operatingsystems-windows-nsclient-05-nrpe.md",tags:[],version:"current",frontMatter:{id:"operatingsystems-windows-nsclient-05-nrpe",title:"Windows NRPE 0.5"},sidebar:"pp",previous:{title:"Windows NRPE (deprecated)",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/operatingsystems-windows-nrpe"},next:{title:"Windows NSClient API",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/operatingsystems-windows-nsclient-05-restapi"}},k={},N=[{value:"Overview",id:"overview",level:2},{value:"Templates",id:"templates",level:3},{value:"Discovery rules",id:"discovery-rules",level:3},{value:"Collected metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Centreon NSClient++",id:"centreon-nsclient",level:3},{value:"Installation",id:"installation",level:2},{value:"Host configuration",id:"host-configuration",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],g={toc:N},c="wrapper";function u(t){var{components:e}=t,a=p(t,["components"]);return(0,n.kt)(c,o(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){i(t,e,a[e])}))}return t}({},g,a),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"This Monitoring Connector allows to get metrics and statuses collected thanks to the NSClient++\nmonitoring agent and its embedded NRPE Server. "),(0,n.kt)("h3",{id:"templates"},"Templates"),(0,n.kt)("p",null,"The Centreon Monitoring Connector ",(0,n.kt)("strong",{parentName:"p"},"Windows NSClient 0.5")," brings 1 host template:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"OS-Windows-NSClient-05-NRPE-custom")),(0,n.kt)("p",null,"It brings the following service templates:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Discovery"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Active-Sessions"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-Windows-NSClient05-Counter-Active-Sessions-NRPE-custom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check active sessions using NRPE protocol"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Counter-Generic"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-Windows-NSClient05-Counter-Generic-NRPE-custom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check generic counter using NRPE protocol"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Cpu"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-Windows-NSClient05-Cpu-NRPE-custom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check Cpu usage using NRPE protocol"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Disks"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-Windows-NSClient05-Disks-NRPE-custom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check disks usage using NRPE protocol"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Eventlog-Generic"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-Windows-NSClient05-Eventlog-Generic-NRPE-custom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check event logs using NRPE protocol"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Files-Generic"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-Windows-NSClient05-Files-Generic-NRPE-custom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check files (dates, size, etc...) using NRPE protocol"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Logfiles-Generic"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-Windows-NSClient05-Logfiles-Generic-NRPE-custom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check log file using NRPE protocol"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Memory"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-Windows-NSClient05-Memory-NRPE-custom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check memory usage using NRPE protocol"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Ntp"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-Windows-NSClient05-Ntp-NRPE-custom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check Ntp time synchronization using NRPE protocol"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Pending-Reboot"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-Windows-NSClient05-Pending-Reboot-NRPE-custom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check pending reboot using NRPE protocol"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Process-generic"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-Windows-NSClient05-Process-Generic-NRPE-custom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check processes state using NRPE protocol"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Remote-Ping"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-Windows-NSClient05-Remote-Ping-NRPE-custom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check remote ping using NRPE protocol"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Services-Auto"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-Windows-NSClient05-Services-Auto-NRPE-custom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check automatic started services state using NRPE protocol"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Services-Generic-Name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-Windows-NSClient05-Services-Generic-Name-NRPE-custom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check services state using NRPE protocol"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Sessions"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-Windows-NSClient05-Sessions-NRPE-custom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check sessions using NRPE protocol"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Swap"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-Windows-NSClient05-Swap-NRPE-custom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check swap usage using NRPE protocol"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Task-Generic"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-Windows-NSClient05-Task-Generic-NRPE-custom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check scheduled tasks using NRPE protocol"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Updates"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-Windows-Updates-NRPE-custom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check windows pending updates"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Uptime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-Windows-NSClient05-Uptime-NRPE-custom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check uptime using NRPE protocol"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h3",{id:"discovery-rules"},"Discovery rules"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Service",label:"Service",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Rule Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-Winfows-NRPE-Disk-Name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Discover disk name.")))),(0,n.kt)("p",null,"More information about discovering services automatically is available on the ",(0,n.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/services-discovery"},"dedicated page"),"."))),(0,n.kt)("h3",{id:"collected-metrics"},"Collected metrics"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Counter-Active-Sessions",label:"Counter-Active-Sessions",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Sessions","_","value"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count"))))),(0,n.kt)(l.Z,{value:"Counter-Generic",label:"Counter-Generic",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Counter","_","value"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count"))))),(0,n.kt)(l.Z,{value:"Cpu",label:"Cpu",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"total 5m"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"total 1m"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"total 5s"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,n.kt)(l.Z,{value:"Disk",label:"Disk",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"used"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bytes"))))),(0,n.kt)(l.Z,{value:"Eventlog-Generic",label:"Eventlog-Generic",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"problemCount"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count"))))),(0,n.kt)(l.Z,{value:"Files-Generic",label:"Files-Generic",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count"))))),(0,n.kt)(l.Z,{value:"Logfiles-Generic",label:"Logfiles-Generic",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"default","_","lines"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"default","_","warnings"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"default","_","criticals"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"default","_","unknowns"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count"))))),(0,n.kt)(l.Z,{value:"Memory",label:"Memory",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"used"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bytes"))))),(0,n.kt)(l.Z,{value:"Swap",label:"Swap",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"swap"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bytes"))))),(0,n.kt)(l.Z,{value:"Sessions",label:"Sessions",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sessions-created"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sessions-disconnected"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sessions-reconnected"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sessions-active"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sessions-disconnected-current"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count"))))),(0,n.kt)(l.Z,{value:"Updates",label:"Updates",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"windows.pending.updates.count"),(0,n.kt)("td",{parentName:"tr",align:"left"})))))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("h3",{id:"centreon-nsclient"},"Centreon NSClient++"),(0,n.kt)("p",null,"To monitor an ",(0,n.kt)("em",{parentName:"p"},"Active Directory")," domain controller through NRPE, install the Centreon packaged version\nof the NSClient++ agent. Please follow our ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/getting-started/how-to-guides/centreon-nsclient-tutorial"},"official documentation"),"\nand make sure that the ",(0,n.kt)("strong",{parentName:"p"},"NRPE Server")," configuration is correct."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon NRPE Client package on every Poller expected to monitor ",(0,n.kt)("em",{parentName:"li"},"Windows")," resources:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-nrpe3-plugin\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,n.kt)("strong",{parentName:"li"},"Windows NRPE 0.5")," Centreon Monitoring Connector on the ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page."))),(0,n.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon NRPE Client package on every Poller expected to monitor ",(0,n.kt)("em",{parentName:"li"},"Windows")," resources:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-nrpe3-plugin\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Install the ",(0,n.kt)("strong",{parentName:"li"},"Windows NRPE 0.5")," Centreon Pack RPM on the Centreon Central server:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-operatingsystems-windows-nsclient-05-nrpe\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,n.kt)("strong",{parentName:"li"},"Windows NRPE 0.5")," Centreon Monitoring Connector on the ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page.")))),(0,n.kt)("h2",{id:"host-configuration"},"Host configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Log into Centreon and add a new Host through ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,n.kt)("li",{parentName:"ul"},"Fill the ",(0,n.kt)("strong",{parentName:"li"},"Name"),", ",(0,n.kt)("strong",{parentName:"li"},"Alias")," & ",(0,n.kt)("strong",{parentName:"li"},"IP Address/DNS")," fields according to your ",(0,n.kt)("em",{parentName:"li"},"Windows")," server settings."),(0,n.kt)("li",{parentName:"ul"},"Select the ",(0,n.kt)("em",{parentName:"li"},"OS-Windows-NSClient-05-NRPE-custom")," template to apply to the Host."),(0,n.kt)("li",{parentName:"ul"},"Once the template is applied, fill in the corresponding macros. If you're in 21.10 or higher version and you've just installed ",(0,n.kt)("strong",{parentName:"li"},"centreon-nrpe3-plugin"),", you will have to replace the default macro values by the bold ones:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NRPECLIENT"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"check_centreon_nrpe3")),(0,n.kt)("td",{parentName:"tr",align:"left"},"NRPE Plugin binary to use (Default: 'check_centreon_nrpe')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NRPEPORT"),(0,n.kt)("td",{parentName:"tr",align:null},"5666"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NRPE Port of the target server (Default: '5666')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NRPETIMEOUT"),(0,n.kt)("td",{parentName:"tr",align:null},"30"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Timeout value (Default: '30')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NRPEEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"-u -2 -P 8192")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Extraoptions to use with the NRPE binary (default: '-u -m 8192')")))),(0,n.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"Please find the troubleshooting documentation for NRPE checks in the ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#nrpe-checks"},"dedicated chapter")," of the Centreon documentation."))}u.isMDXComponent=!0}}]);