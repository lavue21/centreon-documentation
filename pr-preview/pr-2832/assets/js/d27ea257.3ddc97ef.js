"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[78681],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=s(a),u=r,k=c["".concat(p,".").concat(u)]||c[u]||d[u]||l;return a?n.createElement(k,i(i({ref:e},m),{},{components:a})):n.createElement(k,i({ref:e},m))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},53213:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>k,frontMatter:()=>p,metadata:()=>m,toc:()=>c});a(67294);var n=a(3905),r=a(67709),l=a(7626);function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},i.apply(this,arguments)}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const p={id:"applications-databases-redis",title:"Redis Database"},s=void 0,m={unversionedId:"integrations/plugin-packs/procedures/applications-databases-redis",id:"integrations/plugin-packs/procedures/applications-databases-redis",title:"Redis Database",description:"Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/applications-databases-redis.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-databases-redis",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/applications-databases-redis",draft:!1,tags:[],version:"current",frontMatter:{id:"applications-databases-redis",title:"Redis Database"},sidebar:"pp",previous:{title:"PostgreSQL DB",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/applications-databases-postgresql"},next:{title:"RRDtool",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/applications-databases-rrdtool"}},d={},c=[{value:"Pack Assets",id:"pack-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Host configuration",id:"host-configuration",level:2},{value:"How to install <em>redis-cli</em> 6.x ?",id:"how-to-install-redis-cli-6x-",level:2},{value:"How to test the Plugin and what are the main options for?",id:"how-to-test-the-plugin-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],u={toc:c};function k(t){var{components:e}=t,a=o(t,["components"]);return(0,n.kt)("wrapper",i({},u,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",i({},{id:"pack-assets"}),"Pack Assets"),(0,n.kt)("h3",i({},{id:"monitored-objects"}),"Monitored Objects"),(0,n.kt)("p",null,"The Pack Redis collects metrics for:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Clients"),(0,n.kt)("li",{parentName:"ul"},"Commands"),(0,n.kt)("li",{parentName:"ul"},"Connections"),(0,n.kt)("li",{parentName:"ul"},"Cpu"),(0,n.kt)("li",{parentName:"ul"},"Memory"),(0,n.kt)("li",{parentName:"ul"},"Persistence"),(0,n.kt)("li",{parentName:"ul"},"Replication")),(0,n.kt)("h3",i({},{id:"collected-metrics"}),"Collected Metrics"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Clients",label:"Clients",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"clients.connected.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of client connections (excluding replica connections)"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"clients.blocked.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of clients pending on a blocking call"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"clients.longest_output_list.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Longest output list among current client connections"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"clients.biggest_input_buffer.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Biggest input buffer among current client connections"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"})))))),(0,n.kt)(l.Z,{value:"Commands",label:"Commands",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"commands.processed.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Total number of commands processed by the server"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"commands.processed.persecond"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of commands processed per second"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"})))))),(0,n.kt)(l.Z,{value:"Connections",label:"Connections",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"connections.received.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of connections accepted by the server"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"connections.rejected.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of connections rejected because of maxclients limit"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"network.traffic.in.bitspersecond"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Incoming traffic going through from the network"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"network.traffic.out.bitspersecond"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Outgoing traffic going through from the network"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"b/s"))))),(0,n.kt)(l.Z,{value:"Cpu",label:"Cpu",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"cpu.system.usage.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"System CPU consumed by the Redis server"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"cpu.user.usage.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"User CPU consumed by the Redis server"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"cpu.system.children.usage.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"System CPU consumed by the background processes"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"cpu.user.children.usage.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"User CPU consumed by the background processes"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%"))))),(0,n.kt)(l.Z,{value:"Memory",label:"Memory",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"memory.usage.bytes"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of bytes allocated by Redis using its allocator"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"memory.rss.usage.bytes"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of bytes that Redis allocated as seen by the operating system"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"memory.peak.usage.bytes"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Peak memory consumed by Redis"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"memory.overhead.usage.bytes"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"The sum in bytes of all overheads that the server allocated for managing its internal data structures"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"memory.startup.usage.bytes"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Initial amount of memory consumed by Redis at startup in bytes"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"memory.dataset.usage.bytes"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"The size in bytes of the dataset"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"memory.lua.usage.bytes"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of bytes used by the Lua engine"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"memory.fragmentation.ratio.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Ratio between used_memory_rss and used_memory"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"memory.defragmentation.running.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Indicates whether defragmentation is currently active"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"memory.lazy_pending_objects.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"The number of objects waiting to be freed"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"})))))),(0,n.kt)(l.Z,{value:"Persistence",label:"Persistence",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"RDB status"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Status of the last RDB save operation and if RDB save is on-going"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"rdb.changes.since_last_save.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of changes since the last dump"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"rdb.last_successful_save.seconds"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Time since last successful save"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"rdb.last_save.size.bytes"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Size of copy-on-write memory during the last RDB save operation"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"rdb.last_save.duration.seconds"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Duration of the last RDB save operation"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"rdb.current_save.duration.seconds"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"NDuration of the on-going RDB save operation"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"s"))))),(0,n.kt)(l.Z,{value:"Replication",label:"Replication",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"replication status"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Status of the link with the master and if master is syncing"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"replication.slaves.connected.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of connected replicas"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"replication.master.offset.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"The server's current replication offset"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"replication.master.last_interaction.seconds"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of seconds since the last interaction with master"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"replication.slave.offset.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"The replication offset of the replica instance"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"replication.slave.priority.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"The priority of the instance as a candidate for failover"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"replication.slave.readonly.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Flag indicating if the replica is read-only"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))))))),(0,n.kt)("h2",i({},{id:"prerequisites"}),"Prerequisites"),(0,n.kt)("p",null,"To control your Redis database, the poller can execute ",(0,n.kt)("em",{parentName:"p"},"INFO")," command (Eg: ",(0,n.kt)("a",i({parentName:"p"},{href:"https://redis.io/commands/INFO"}),"https://redis.io/commands/INFO"),")"),(0,n.kt)("h2",i({},{id:"setup"}),"Setup"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Applications-Databases-Redis\n")),(0,n.kt)("ol",i({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Plugin packs > Manager"),", install the ",(0,n.kt)("em",{parentName:"li"},"Redis Database")," Pack"))),(0,n.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Applications-Databases-Redis\n")),(0,n.kt)("ol",i({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"On the Centreon Central server, install the Pack from the RPM:")),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-pack-applications-databases-redis\n")),(0,n.kt)("ol",i({},{start:3}),(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Plugin packs > Manager"),", install the ",(0,n.kt)("em",{parentName:"li"},"Redis Database")," Pack")))),(0,n.kt)("h2",i({},{id:"host-configuration"}),"Host configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add a new Host and apply the ",(0,n.kt)("em",{parentName:"li"},"App-DB-Redis-custom")," Host Template")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Once the template applied, some Macros have to be configured.")),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"cli",label:"cli",mdxType:"TabItem"},(0,n.kt)("p",null,"With that configuration, the Plugin uses ",(0,n.kt)("em",{parentName:"p"},"redis-cli")," executable. ",(0,n.kt)("em",{parentName:"p"},"tls")," is supported (redis-cli >= 6.x mandatory)."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Mandatory"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"X"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"REDISCUSTOMMODE"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Name of the backend: ",(0,n.kt)("inlineCode",{parentName:"td"},"cli"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"})),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"REDISPORT"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Port used (Default: 6379)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"})),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"REDISUSERNAME"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Redis username (redis-cli >= 6.x mandatory)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"})),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"REDISPASSWORD"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Redis password")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"})),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"REDISSENTINEL"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Sentinel server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"})),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"REDISSENTINELORT"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Sentinel port (Default: 26379)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"})),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"REDISSERVICE"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Service parameter (mandatory if ",(0,n.kt)("em",{parentName:"td"},"REDISENTINEL")," macro used)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"})),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"REDISEXTRAOPTIONS"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Any extra option you may want to add to the command (eg. a --tls --insecure)"))))),(0,n.kt)(l.Z,{value:"perlmod (default)",label:"perlmod (default)",mdxType:"TabItem"},(0,n.kt)("p",null,"With that configuration, the Plugin uses Perl ",(0,n.kt)("em",{parentName:"p"},"Redis")," module (eg: ",(0,n.kt)("a",i({parentName:"p"},{href:"https://metacpan.org/pod/Redis"}),"https://metacpan.org/pod/Redis"),"). ",(0,n.kt)("em",{parentName:"p"},"tls")," is unsupported."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Mandatory"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"X"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"REDISCUSTOMMODE"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Name of the backend: ",(0,n.kt)("inlineCode",{parentName:"td"},"perlmod"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"})),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"REDISPORT"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Port used (Default: 6379)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"})),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"REDISPASSWORD"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Redis password")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"})),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"REDISSENTINEL"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Sentinel server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"})),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"REDISSENTINELORT"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Sentinel port (Default: 26379)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"})),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"REDISSERVICE"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Service parameter (mandatory if ",(0,n.kt)("em",{parentName:"td"},"REDISENTINEL")," macro used)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"})),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"REDISEXTRAOPTIONS"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Any extra option you may want to add to the command")))))),(0,n.kt)("h2",i({},{id:"how-to-install-redis-cli-6x-"}),"How to install ",(0,n.kt)("em",{parentName:"h2"},"redis-cli")," 6.x ?"),(0,n.kt)("p",null,"To use ",(0,n.kt)("em",{parentName:"p"},"tls")," and/or ACL users, you need ",(0,n.kt)("em",{parentName:"p"},"redis-cli")," >= 6.x."),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Centos 7",label:"Centos 7",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install epel-release\nyum install http://rpms.remirepo.net/enterprise/remi-release-7.rpm \nyum --enablerepo=remi install redis\n")))),(0,n.kt)("h2",i({},{id:"how-to-test-the-plugin-and-what-are-the-main-options-for"}),"How to test the Plugin and what are the main options for?"),(0,n.kt)("p",null,"Once the plugin installed, log into your Centreon Poller CLI using the ",(0,n.kt)("em",{parentName:"p"},"centreon-engine")," user account\nand test the Plugin by running the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_database_redis.pl \\\n    --plugin=database::redis::plugin \\\n    --custommode=perlmod \\\n    --mode=clients \\\n    --server='10.30.2.79' \\\n    --port='6379' \\\n    --verbose\n")),(0,n.kt)("p",null,"Expected command output is shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"OK: Clients connected: 1, blocked: 0 | 'clients.connected.count'=1;;;0; 'clients.blocked.count'=0;;;0;\n")),(0,n.kt)("p",null,"The command above monitors client connections (",(0,n.kt)("inlineCode",{parentName:"p"},"--mode=clients"),")."),(0,n.kt)("p",null,"It connects to the host ",(0,n.kt)("em",{parentName:"p"},"10.30.2.79")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--hostname='10.30.2.79'"),") on the port 6379 (",(0,n.kt)("inlineCode",{parentName:"p"},"--port='6379'"),")."),(0,n.kt)("p",null,"All the options as well as all the available thresholds can be displayed by adding the  ",(0,n.kt)("inlineCode",{parentName:"p"},"--help"),"\nparameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_database_redis.pl \\\n    --plugin=database::redis::plugin \\\n    --custommode=perlmod \\\n    --mode=clients \\\n    --help\n")),(0,n.kt)("h2",i({},{id:"troubleshooting"}),"Troubleshooting"),(0,n.kt)("p",null,(0,n.kt)("a",i({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"}),"Troubleshooting plugins")))}k.isMDXComponent=!0},7626:(t,e,a)=>{a.d(e,{Z:()=>o});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},i.apply(this,arguments)}function o({children:t,hidden:e,className:a}){return n.createElement("div",i({role:"tabpanel",className:(0,r.Z)(l,a)},{hidden:e}),t)}},67709:(t,e,a)=>{a.d(e,{Z:()=>u});var n=a(67294),r=a(86010),l=a(90980),i=a(35715),o=a(8854),p=a(8241);const s="tabList__CuJ",m="tabItem_LNqP";function d(){return d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},d.apply(this,arguments)}function c(t){var e;const{lazy:a,block:l,defaultValue:c,values:u,groupId:k,className:g}=t,f=n.Children.map(t.children,(t=>{if((0,n.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=u?u:f.map((({props:{value:t,label:e,attributes:a}})=>({value:t,label:e,attributes:a}))),b=(0,i.l)(N,((t,e)=>t.value===e.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var h;const y=null===c?c:null!==(h=null!=c?c:null===(e=f.find((t=>t.props.default)))||void 0===e?void 0:e.props.value)&&void 0!==h?h:f[0].props.value;if(null!==y&&!N.some((t=>t.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${N.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:T}=(0,o.U)(),[O,w]=(0,n.useState)(y),E=[],{blockElementScrollPositionUntilNextRender:R}=(0,p.o5)();if(null!=k){const t=v[k];null!=t&&t!==O&&N.some((e=>e.value===t))&&w(t)}const D=t=>{const e=t.currentTarget,a=E.indexOf(e),n=N[a].value;n!==O&&(R(e),w(n),null!=k&&T(k,String(n)))},I=t=>{let e=null;switch(t.key){case"ArrowRight":{const n=E.indexOf(t.currentTarget)+1;var a;e=null!==(a=E[n])&&void 0!==a?a:E[0];break}case"ArrowLeft":{const a=E.indexOf(t.currentTarget)-1;var n;e=null!==(n=E[a])&&void 0!==n?n:E[E.length-1];break}}null==e||e.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",s)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},g)},N.map((({value:t,label:e,attributes:a})=>n.createElement("li",d({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:t=>E.push(t),onKeyDown:I,onFocus:D,onClick:D},a,{className:(0,r.Z)("tabs__item",m,null==a?void 0:a.className,{"tabs__item--active":O===t})}),null!=e?e:t)))),a?(0,n.cloneElement)(f.filter((t=>t.props.value===O))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((t,e)=>(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==O})))))}function u(t){const e=(0,l.Z)();return n.createElement(c,d({key:String(e)},t))}}}]);