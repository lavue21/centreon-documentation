"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[78681],{53213:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>k,contentTitle:()=>m,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>c});a(67294);var n=a(3905),r=a(51715),l=a(7626);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const s={id:"applications-databases-redis",title:"Redis Database"},m=void 0,d={unversionedId:"integrations/plugin-packs/procedures/applications-databases-redis",id:"integrations/plugin-packs/procedures/applications-databases-redis",title:"Redis Database",description:"Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/applications-databases-redis.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-databases-redis",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/applications-databases-redis",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-databases-redis.md",tags:[],version:"current",frontMatter:{id:"applications-databases-redis",title:"Redis Database"},sidebar:"pp",previous:{title:"PostgreSQL DB",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/applications-databases-postgresql"},next:{title:"Redis Cli (deprecated)",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/applications-redis-cli"}},k={},c=[{value:"Pack Assets",id:"pack-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Host configuration",id:"host-configuration",level:2},{value:"How to install <em>redis-cli</em> 6.x ?",id:"how-to-install-redis-cli-6x-",level:2},{value:"How to test the Plugin and what are the main options for?",id:"how-to-test-the-plugin-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],g={toc:c},N="wrapper";function u(t){var{components:e}=t,a=p(t,["components"]);return(0,n.kt)(N,o(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){i(t,e,a[e])}))}return t}({},g,a),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,n.kt)("h3",{id:"monitored-objects"},"Monitored Objects"),(0,n.kt)("p",null,"The Pack Redis collects metrics for:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Clients"),(0,n.kt)("li",{parentName:"ul"},"Commands"),(0,n.kt)("li",{parentName:"ul"},"Connections"),(0,n.kt)("li",{parentName:"ul"},"Cpu"),(0,n.kt)("li",{parentName:"ul"},"Memory"),(0,n.kt)("li",{parentName:"ul"},"Persistence"),(0,n.kt)("li",{parentName:"ul"},"Replication")),(0,n.kt)("h3",{id:"collected-metrics"},"Collected Metrics"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Clients",label:"Clients",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"clients.connected.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of client connections (excluding replica connections)"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"clients.blocked.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of clients pending on a blocking call"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"clients.longest_output_list.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Longest output list among current client connections"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"clients.biggest_input_buffer.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Biggest input buffer among current client connections"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Commands",label:"Commands",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"commands.processed.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Total number of commands processed by the server"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"commands.processed.persecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of commands processed per second"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Connections",label:"Connections",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"connections.received.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of connections accepted by the server"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"connections.rejected.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of connections rejected because of maxclients limit"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"network.traffic.in.bitspersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Incoming traffic going through from the network"),(0,n.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"network.traffic.out.bitspersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Outgoing traffic going through from the network"),(0,n.kt)("td",{parentName:"tr",align:"left"},"b/s"))))),(0,n.kt)(l.Z,{value:"Cpu",label:"Cpu",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cpu.system.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"System CPU consumed by the Redis server"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cpu.user.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"User CPU consumed by the Redis server"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cpu.system.children.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"System CPU consumed by the background processes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cpu.user.children.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"User CPU consumed by the background processes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,n.kt)(l.Z,{value:"Memory",label:"Memory",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"memory.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of bytes allocated by Redis using its allocator"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"memory.rss.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of bytes that Redis allocated as seen by the operating system"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"memory.peak.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Peak memory consumed by Redis"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"memory.overhead.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The sum in bytes of all overheads that the server allocated for managing its internal data structures"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"memory.startup.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Initial amount of memory consumed by Redis at startup in bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"memory.dataset.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The size in bytes of the dataset"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"memory.lua.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of bytes used by the Lua engine"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"memory.fragmentation.ratio.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Ratio between used_memory_rss and used_memory"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"memory.defragmentation.running.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Indicates whether defragmentation is currently active"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"memory.lazy_pending_objects.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The number of objects waiting to be freed"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Persistence",label:"Persistence",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"RDB status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of the last RDB save operation and if RDB save is on-going"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"rdb.changes.since_last_save.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of changes since the last dump"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"rdb.last_successful_save.seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Time since last successful save"),(0,n.kt)("td",{parentName:"tr",align:"left"},"s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"rdb.last_save.size.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Size of copy-on-write memory during the last RDB save operation"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"rdb.last_save.duration.seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Duration of the last RDB save operation"),(0,n.kt)("td",{parentName:"tr",align:"left"},"s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"rdb.current_save.duration.seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NDuration of the on-going RDB save operation"),(0,n.kt)("td",{parentName:"tr",align:"left"},"s"))))),(0,n.kt)(l.Z,{value:"Replication",label:"Replication",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"replication status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of the link with the master and if master is syncing"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"replication.slaves.connected.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of connected replicas"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"replication.master.offset.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The server's current replication offset"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"replication.master.last_interaction.seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of seconds since the last interaction with master"),(0,n.kt)("td",{parentName:"tr",align:"left"},"s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"replication.slave.offset.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The replication offset of the replica instance"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"replication.slave.priority.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The priority of the instance as a candidate for failover"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"replication.slave.readonly.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Flag indicating if the replica is read-only"),(0,n.kt)("td",{parentName:"tr",align:"left"})))))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"To control your Redis database, the poller can execute ",(0,n.kt)("em",{parentName:"p"},"INFO")," command (Eg: ",(0,n.kt)("a",{parentName:"p",href:"https://redis.io/commands/INFO"},"https://redis.io/commands/INFO"),")"),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Databases-Redis\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,n.kt)("em",{parentName:"li"},"Redis Database")," Pack"))),(0,n.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Databases-Redis\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Central server, install the Pack from the RPM:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-databases-redis\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,n.kt)("em",{parentName:"li"},"Redis Database")," Pack")))),(0,n.kt)("h2",{id:"host-configuration"},"Host configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add a new Host and apply the ",(0,n.kt)("em",{parentName:"li"},"App-DB-Redis-custom")," Host Template")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Once the template applied, some Macros have to be configured.")),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"cli",label:"cli",mdxType:"TabItem"},(0,n.kt)("p",null,"With that configuration, the Plugin uses ",(0,n.kt)("em",{parentName:"p"},"redis-cli")," executable. ",(0,n.kt)("em",{parentName:"p"},"tls")," is supported (redis-cli >= 6.x mandatory)."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"REDISCUSTOMMODE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Name of the backend: ",(0,n.kt)("inlineCode",{parentName:"td"},"cli"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"REDISPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Port used (Default: 6379)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"REDISUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Redis username (redis-cli >= 6.x mandatory)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"REDISPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Redis password")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"REDISSENTINEL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sentinel server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"REDISSENTINELORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sentinel port (Default: 26379)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"REDISSERVICE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Service parameter (mandatory if ",(0,n.kt)("em",{parentName:"td"},"REDISENTINEL")," macro used)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"REDISEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command (eg. a --tls --insecure)"))))),(0,n.kt)(l.Z,{value:"perlmod (default)",label:"perlmod (default)",mdxType:"TabItem"},(0,n.kt)("p",null,"With that configuration, the Plugin uses Perl ",(0,n.kt)("em",{parentName:"p"},"Redis")," module (eg: ",(0,n.kt)("a",{parentName:"p",href:"https://metacpan.org/pod/Redis"},"https://metacpan.org/pod/Redis"),"). ",(0,n.kt)("em",{parentName:"p"},"tls")," is unsupported."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"REDISCUSTOMMODE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Name of the backend: ",(0,n.kt)("inlineCode",{parentName:"td"},"perlmod"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"REDISPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Port used (Default: 6379)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"REDISPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Redis password")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"REDISSENTINEL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sentinel server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"REDISSENTINELORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sentinel port (Default: 26379)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"REDISSERVICE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Service parameter (mandatory if ",(0,n.kt)("em",{parentName:"td"},"REDISENTINEL")," macro used)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"REDISEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command")))))),(0,n.kt)("h2",{id:"how-to-install-redis-cli-6x-"},"How to install ",(0,n.kt)("em",{parentName:"h2"},"redis-cli")," 6.x ?"),(0,n.kt)("p",null,"To use ",(0,n.kt)("em",{parentName:"p"},"tls")," and/or ACL users, you need ",(0,n.kt)("em",{parentName:"p"},"redis-cli")," >= 6.x."),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Centos 7",label:"Centos 7",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install epel-release\nyum install http://rpms.remirepo.net/enterprise/remi-release-7.rpm \nyum --enablerepo=remi install redis\n")))),(0,n.kt)("h2",{id:"how-to-test-the-plugin-and-what-are-the-main-options-for"},"How to test the Plugin and what are the main options for?"),(0,n.kt)("p",null,"Once the plugin installed, log into your Centreon Poller CLI using the ",(0,n.kt)("em",{parentName:"p"},"centreon-engine")," user account\nand test the Plugin by running the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_database_redis.pl \\\n    --plugin=database::redis::plugin \\\n    --custommode=perlmod \\\n    --mode=clients \\\n    --server='10.30.2.79' \\\n    --port='6379' \\\n    --verbose\n")),(0,n.kt)("p",null,"Expected command output is shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Clients connected: 1, blocked: 0 | 'clients.connected.count'=1;;;0; 'clients.blocked.count'=0;;;0;\n")),(0,n.kt)("p",null,"The command above monitors client connections (",(0,n.kt)("inlineCode",{parentName:"p"},"--mode=clients"),")."),(0,n.kt)("p",null,"It connects to the host ",(0,n.kt)("em",{parentName:"p"},"10.30.2.79")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--hostname='10.30.2.79'"),") on the port 6379 (",(0,n.kt)("inlineCode",{parentName:"p"},"--port='6379'"),")."),(0,n.kt)("p",null,"All the options as well as all the available thresholds can be displayed by adding the  ",(0,n.kt)("inlineCode",{parentName:"p"},"--help"),"\nparameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_database_redis.pl \\\n    --plugin=database::redis::plugin \\\n    --custommode=perlmod \\\n    --mode=clients \\\n    --help\n")),(0,n.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"Troubleshooting plugins")))}u.isMDXComponent=!0}}]);