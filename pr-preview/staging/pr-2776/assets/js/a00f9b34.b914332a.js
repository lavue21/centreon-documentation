"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[17360],{83926:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>N,frontMatter:()=>i,metadata:()=>m,toc:()=>u});a(67294);var n=a(3905),r=a(51715),l=a(7626);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function p(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const i={id:"hardware-storage-oracle-zs-restapi",title:"Oracle ZS Rest API"},c=void 0,m={unversionedId:"integrations/plugin-packs/procedures/hardware-storage-oracle-zs-restapi",id:"integrations/plugin-packs/procedures/hardware-storage-oracle-zs-restapi",title:"Oracle ZS Rest API",description:"Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/hardware-storage-oracle-zs-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-storage-oracle-zs-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/hardware-storage-oracle-zs-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/hardware-storage-oracle-zs-restapi.md",tags:[],version:"current",frontMatter:{id:"hardware-storage-oracle-zs-restapi",title:"Oracle ZS Rest API"},sidebar:"pp",previous:{title:"Oracle ZFS",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/hardware-storage-oracle-zfs-snmp"},next:{title:"Oracle ZS SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/hardware-storage-oracle-zs-snmp"}},d={},u=[{value:"Pack Assets",id:"pack-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Host configuration",id:"host-configuration",level:2},{value:"How to test the Plugin and what are the main options for?",id:"how-to-test-the-plugin-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],g={toc:u},k="wrapper";function N(t){var{components:e}=t,a=s(t,["components"]);return(0,n.kt)(k,p(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){o(t,e,a[e])}))}return t}({},g,a),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,n.kt)("h3",{id:"monitored-objects"},"Monitored Objects"),(0,n.kt)("p",null,"The Pack Oracle ZS collects metrics for:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Hardware"),(0,n.kt)("li",{parentName:"ul"},"Pools")),(0,n.kt)("h3",{id:"collected-metrics"},"Collected Metrics"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Hardware",label:"Hardware",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"chassis status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Chassis state"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cpu status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CPU state"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"disk status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Disk state"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"fan status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fan state"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"memory status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Memory state"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"power supply status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Power supply state"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"slot status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Slot state"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Pools",label:"Pools",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"pool status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Pool status"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"pool","_","name"),"#pool.space.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Space usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"pool","_","name"),"#pool.space.free.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Free space"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"pool","_","name"),"#pool.space.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Space usage in percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")))))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"To control your Oracle ZS, the Rest API must be configured.\nE.g: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.oracle.com/cd/E79446_01/html/E79460/index"},"https://docs.oracle.com/cd/E79446_01/html/E79460/index")),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Storage-Oracle-Zs-Restapi\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,n.kt)("em",{parentName:"li"},"Oracle ZS Rest API")," Pack"))),(0,n.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Storage-Oracle-Zs-Restapi\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Central server, install the Centreon Pack from the RPM:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-hardware-storage-oracle-zs-restapi\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,n.kt)("em",{parentName:"li"},"Oracle ZS Rest API")," Pack")))),(0,n.kt)("h2",{id:"host-configuration"},"Host configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add a new Host and apply the ",(0,n.kt)("em",{parentName:"li"},"HW-Storage-Oracle-Zs-Restapi-custom")," Host Template")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Once the template applied, some Macros have to be configured:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"APIPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Port used (Default: 215)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"APIPROTO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specify https if needed (Default: 'https')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"APIUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Api username")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"APIPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Api password")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"APIEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command (eg. a --verbose flag)")))),(0,n.kt)("h2",{id:"how-to-test-the-plugin-and-what-are-the-main-options-for"},"How to test the Plugin and what are the main options for?"),(0,n.kt)("p",null,"Once the plugin installed, log into your Centreon Poller CLI using the ",(0,n.kt)("em",{parentName:"p"},"centreon-engine")," user account\nand test the Plugin by running the following command (Parameters such as ",(0,n.kt)("inlineCode",{parentName:"p"},"api-username")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"api-password"),"have to be adjusted):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_oracle_zs_restapi.pl \\\n    --plugin=storage::oracle::zs::restapi::plugin \\\n    --mode=pools \\\n    --hostname='10.30.2.79' \\\n    --port='215' \\\n    --proto='https' \\\n    --api-username='myapiusername' \\\n    --api-password='myapipassword' \\\n    --verbose\n")),(0,n.kt)("p",null,"Expected command output is shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: All pools are ok | 'Pool_Exalogic#pool.space.usage.bytes'=19730301416448B;;;0;33432025432064 'Pool_Exalogic#pool.space.free.bytes'=13176557201408B;;;0;33432025432064 'Pool_Exalogic#pool.space.usage.percentage'=59.02%;;;0;100\nPool 'Pool_Exadata' status : exported\nPool 'Pool_Exalogic' status : online, space usage total: 30.41 TB used: 17.94 TB (59.02%) free: 11.98 TB (39.41%)\n")),(0,n.kt)("p",null,"The command above monitors pools (",(0,n.kt)("inlineCode",{parentName:"p"},"--mode=pools"),")."),(0,n.kt)("p",null,"It uses api-username (",(0,n.kt)("inlineCode",{parentName:"p"},"--api-username='myapiusername'"),"), an api-password (",(0,n.kt)("inlineCode",{parentName:"p"},"--api-password='myapipassword'"),")\nand it connects to the host ",(0,n.kt)("em",{parentName:"p"},"10.30.2.79")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--hostname='10.30.2.79'"),")\non the port 215 (",(0,n.kt)("inlineCode",{parentName:"p"},"--port='215'"),") using https (",(0,n.kt)("inlineCode",{parentName:"p"},"--proto='https'"),")."),(0,n.kt)("p",null,"All the options as well as all the available thresholds can be displayed by adding the  ",(0,n.kt)("inlineCode",{parentName:"p"},"--help"),"\nparameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_oracle_zs_restapi.pl \\\n    --plugin=storage::oracle::zs::restapi::plugin \\\n    --mode=pools \\\n    --help\n")),(0,n.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#http-and-api-checks"},"Troubleshooting plugins")))}N.isMDXComponent=!0}}]);