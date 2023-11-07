"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[30588],{89367:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>N,frontMatter:()=>m,metadata:()=>c,toc:()=>k});a(67294);var n=a(3905),r=a(51715),o=a(7626);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const m={id:"applications-oracle-ovm-api",title:"Oracle VM Manager API"},s=void 0,c={unversionedId:"integrations/plugin-packs/procedures/applications-oracle-ovm-api",id:"integrations/plugin-packs/procedures/applications-oracle-ovm-api",title:"Oracle VM Manager API",description:"Monitoring Connector Assets",source:"@site/pp/integrations/plugin-packs/procedures/applications-oracle-ovm-api.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-oracle-ovm-api",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/applications-oracle-ovm-api",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-oracle-ovm-api.md",tags:[],version:"current",frontMatter:{id:"applications-oracle-ovm-api",title:"Oracle VM Manager API"},sidebar:"pp",previous:{title:"Oracle UCP JMX",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/applications-oracle-ucp-jmx"},next:{title:"Pacemaker",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/applications-pacemaker-ssh"}},d={},k=[{value:"Monitoring Connector Assets",id:"monitoring-connector-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Host configuration",id:"host-configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How to check in the CLI that the configuration is OK and what are the main options for ?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-",level:3},{value:"Why do I get the following error:",id:"why-do-i-get-the-following-error",level:3},{value:"<code>UNKNOWN: 500 Can&#39;t connect to 10.30.2.79:443</code>",id:"unknown-500-cant-connect-to-1030279443",level:4},{value:"<code>UNKNOWN: 501 Protocol scheme &#39;connect&#39; is not supported</code>",id:"unknown-501-protocol-scheme-connect-is-not-supported",level:4}],u={toc:k},g="wrapper";function N(e){var{components:t}=e,a=i(e,["components"]);return(0,n.kt)(g,p(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){l(e,t,a[t])}))}return e}({},u,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector Assets"),(0,n.kt)("h3",{id:"monitored-objects"},"Monitored Objects"),(0,n.kt)("p",null,"The Monitoring Connector includes monitoring of File-servers, Manager, Server-pools, Servers and Vm."),(0,n.kt)("h3",{id:"collected-metrics"},"Collected Metrics"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"File-servers",label:"File-servers",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"serverpoolname"),"~",(0,n.kt)("em",{parentName:"td"},"filesystemname"),"#serverpool.space.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Space usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"serverpoolname"),"~",(0,n.kt)("em",{parentName:"td"},"filesystemname"),"#serverpool.space.free.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Free space"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"serverpoolname"),"~",(0,n.kt)("em",{parentName:"td"},"filesystemname"),"#serverpool.space.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Space usage in percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,n.kt)(o.Z,{value:"Manager",label:"Manager",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"manager status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Manager status, possible to set string-based alerts"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"managername"),"#manager.jobs.succeeded.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of jobs succeeded"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"managername"),"#manager.jobs.failed.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of jobs failed"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(o.Z,{value:"Server-pools",label:"Server-pools",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"serverpoolname"),"#serverpool.servers.running.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of servers running"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"serverpoolname"),"#serverpool.servers.stopped.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of servers stopped"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"serverpoolname"),"#serverpool.vm.running.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of vm running"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"serverpoolname"),"#serverpool.vm.stopped.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of vm stopped"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"serverpoolname"),"#serverpool.memory.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Memory usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"serverpoolname"),"#serverpool.memory.free.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Free memory"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"serverpoolname"),"#serverpool.memory.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Memory usage in percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,n.kt)(o.Z,{value:"Servers",label:"Servers",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"servers.running.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of servers running"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"servers.stopped.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of servers stopped"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"server status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"server status"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"servername"),"#server.memory.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Memory usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"servername"),"#server.memory.free.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Free memory"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"servername"),"#server.memory.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Memory usage in percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,n.kt)(o.Z,{value:"Vm",label:"Vm",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"virtualmachines.running.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of vm running"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"virtualmachines.stopped.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of vm stopped"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"vm status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"vm status"),(0,n.kt)("td",{parentName:"tr",align:"left"})))))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"To control your Oracle VM Manager, the Rest API must be configured (SOAP legacy is not supported)."),(0,n.kt)("p",null,"E.g: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/virtualization/oracle-vm/3.4/developer/vmapi-preface"},"https://docs.oracle.com/en/virtualization/oracle-vm/3.4/developer/vmapi-preface")),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Oracle-Ovm-Api\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,n.kt)("em",{parentName:"li"},"Oracle VM Manager API")," Monitoring Connector"))),(0,n.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Oracle-Ovm-Api\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Central server, install the Centreon Monitoring Connector from the RPM:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-oracle-ovm-api\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,n.kt)("em",{parentName:"li"},"Oracle VM Manager API")," Monitoring Connector")))),(0,n.kt)("h2",{id:"host-configuration"},"Host configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add a new Host and apply the ",(0,n.kt)("em",{parentName:"li"},"App-Oracle-Ovm-Api-custom")," Host Template")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Once the template applied, some Macros have to be configured:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OVMAPICUSTOMMODE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"API mode (Default: 'rest')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OVMAPIPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Port used (Default: 7002)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OVMAPIPROTO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specify https if needed (Default: 'https')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OVMAPIPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Oracle VM Manager username")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OVMAPIUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Oracle VM Manager password")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"OVMAPIEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command (eg. a --verbose flag)")))),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("h3",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-"},"How to check in the CLI that the configuration is OK and what are the main options for ?"),(0,n.kt)("p",null,"Once the Plugin installed, log into your poller using the ",(0,n.kt)("em",{parentName:"p"},"centreon-engine")," user account and test by running the following command\n(Parameters such as ",(0,n.kt)("inlineCode",{parentName:"p"},"api-username")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"api-password"),"have to be adjusted):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_oracle_ovm_api.pl \\\n    --plugin=apps::oracle::ovm::api::plugin \\\n    --mode=server-pools \\\n    --hostname='10.30.2.79' \\\n    --port='7002' \\\n    --proto='https' \\\n    --api-username='myapiusername' \\\n    --api-password='myapipassword' \\\n    --filter-server-pool-name='TESTPOOL01' \\\n    --warning-memory-usage-prct='90' \\\n    --critical-memory-usage-prct='95' \\\n    --verbose\n")),(0,n.kt)("p",null,"Output example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"OK: Server pool 'TESTPOOL01' servers running: 2, stopped: 0 - virtual machines running: 3, stopped: 0 - memory usage total: 255.32 GB used: 217.87 GB (85.33%) free: 37.45 GB (14.67%) | 'TESTPOOL01#serverpool.servers.running.count'=2;;;0;2 'TESTPOOL01#serverpool.servers.stopped.count'=0;;;0;2 'TESTPOOL01#serverpool.vm.running.count'=3;;;0;3 'TESTPOOL01#serverpool.vm.stopped.count'=0;;;0;3 'TESTPOOL01#serverpool.memory.usage.bytes'=233939402752B;;;0;274148098048 'TESTPOOL01#serverpool.memory.free.bytes'=40208695296B;;;0;274148098048 'TESTPOOL01#serverpool.memory.usage.percentage'=85.33%;90;95;0;100\nchecking server pool 'TESTPOOL01'\nservers running: 2, stopped: 0\nvirtual machines running: 3, stopped: 0\nmemory usage total: 255.32 GB used: 217.87 GB (85.33%) free: 37.45 GB (14.67%)\n")),(0,n.kt)("p",null,"The command above monitors Oracle VM Manager server pools usage  (",(0,n.kt)("inlineCode",{parentName:"p"},"--mode=server-pools"),") named ",(0,n.kt)("em",{parentName:"p"},"TESTPOOL01")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--filter-server-pool-name='TESTPOOL01'"),")."),(0,n.kt)("p",null,"It uses api-username (",(0,n.kt)("inlineCode",{parentName:"p"},"--api-username='myapiusername'"),"), an api-password (",(0,n.kt)("inlineCode",{parentName:"p"},"--api-password='myapipassword'"),")\nand it connects to the host ",(0,n.kt)("em",{parentName:"p"},"10.30.2.79")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--hostname='10.30.2.79'"),")\non the port 7002 (",(0,n.kt)("inlineCode",{parentName:"p"},"--port='7002'"),") using https (",(0,n.kt)("inlineCode",{parentName:"p"},"--proto='https'"),")."),(0,n.kt)("p",null,"This command would trigger a WARNING alert if the memory used to raise over 90% of the memory capacity (--warning-memory-usage-prct='60') and a CRITICAL alarm over 95% (--critical-memory-usage-prct='75')."),(0,n.kt)("p",null,"All the options that can be used with this plugin can be found over the ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_oracle_ovm_api.pl --plugin=apps::oracle::ovm::api::plugin \\\n     --mode=server-pools \\\n     --help\n")),(0,n.kt)("h3",{id:"why-do-i-get-the-following-error"},"Why do I get the following error:"),(0,n.kt)("h4",{id:"unknown-500-cant-connect-to-1030279443"},(0,n.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 500 Can't connect to 10.30.2.79:443")),(0,n.kt)("p",null,"This error message means that the Centreon Plugin couldn't successfully connect to the Oracle VM Manager API.\nCheck that no third party device (such as a firewall) is blocking the request.\nA proxy connection may also be necessary to connect to the API. This can be done by using the ",(0,n.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany:8080'")," option in the command."),(0,n.kt)("h4",{id:"unknown-501-protocol-scheme-connect-is-not-supported"},(0,n.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 501 Protocol scheme 'connect' is not supported")),(0,n.kt)("p",null,"When using a proxy to connect to the Oracle VM Manager API, this error message means that the Centreon Plugin library does not support\nthe proxy connection protocol."),(0,n.kt)("p",null,"In order to prevent this issue, use the ",(0,n.kt)("em",{parentName:"p"},"curl")," HTTP backend by adding the following option to the command: ",(0,n.kt)("inlineCode",{parentName:"p"},"--http-backend='curl'"),"."))}N.isMDXComponent=!0}}]);