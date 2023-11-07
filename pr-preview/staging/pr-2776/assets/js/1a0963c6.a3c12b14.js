"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[17762],{63725:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>b,frontMatter:()=>s,metadata:()=>u,toc:()=>d});a(67294);var n=a(3905),r=a(51715),i=a(7626);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const s={id:"applications-ibmmq-restapi",title:"IBM MQ Rest API"},m=void 0,u={unversionedId:"integrations/plugin-packs/procedures/applications-ibmmq-restapi",id:"integrations/plugin-packs/procedures/applications-ibmmq-restapi",title:"IBM MQ Rest API",description:"Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/applications-ibmmq-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-ibmmq-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/applications-ibmmq-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-ibmmq-restapi.md",tags:[],version:"current",frontMatter:{id:"applications-ibmmq-restapi",title:"IBM MQ Rest API"},sidebar:"pp",previous:{title:"IBM MQ MQI",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/applications-ibmmq-mqi"},next:{title:"IBM Tivoli Storage M",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/applications-ibm-tsm-dsmadmc"}},c={},d=[{value:"Pack Assets",id:"pack-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Discovery rules",id:"discovery-rules",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Host configuration",id:"host-configuration",level:2},{value:"How to test the Plugin and what are the main options for?",id:"how-to-test-the-plugin-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],k={toc:d},g="wrapper";function b(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)(g,p(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){l(e,t,a[t])}))}return e}({},k,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,n.kt)("h3",{id:"monitored-objects"},"Monitored Objects"),(0,n.kt)("p",null,"The Pack IBM MQ collects metrics for:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Queue-managers"),(0,n.kt)("li",{parentName:"ul"},"Queues")),(0,n.kt)("h3",{id:"discovery-rules"},"Discovery rules"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Services",label:"Services",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Rule name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Ibmmq-Restapi-Queue-Manager-Name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Discover queue managers and monitor statistics")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Ibmmq-Restapi-Queue-Name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Discover queues and monitor statistics")))))),(0,n.kt)("h3",{id:"collected-metrics"},"Collected Metrics"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Queue-managers",label:"Queue-managers",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"queue manager status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Queue manager status"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"queue","_","manager_name"),"#","queuemanager.connections.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current number of connections"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(i.Z,{value:"Queues",label:"Queues",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"queue","_","manager_name"),"~",(0,n.kt)("em",{parentName:"td"},"queue","_","name"),"#","queue.connections.input.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current input connections"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"queue","_","manager_name"),"~",(0,n.kt)("em",{parentName:"td"},"queue","_","name"),"#","queue.messages.depth.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current messages depth"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"queue","_","manager_name"),"~",(0,n.kt)("em",{parentName:"td"},"queue","_","name"),"#","queue.message.oldest.seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Oldest message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"s")))))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"To control your IBM MQ, the Rest API must be configured.\nE.g: ",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/ibm-mq/9.0?topic=api-getting-started-administrative-rest"},"https://www.ibm.com/docs/en/ibm-mq/9.0?topic=api-getting-started-administrative-rest")),(0,n.kt)("p",null,"The Pack supports only the basic authentification."),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Ibmmq-Restapi\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,n.kt)("em",{parentName:"li"},"IBM MQ Rest API")," Pack"))),(0,n.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Ibmmq-Restapi\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Central server, install the Centreon Pack from the RPM:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-ibmmq-restapi\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,n.kt)("em",{parentName:"li"},"IBM MQ Rest API")," Pack")))),(0,n.kt)("h2",{id:"host-configuration"},"Host configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add a new Host and apply the ",(0,n.kt)("em",{parentName:"li"},"App-Ibmmq-Restapi-custom")," Host Template")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Once the template applied, some Macros have to be configured:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"IBMMQAPIPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Port used (Default: 9443)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"IBMMQAPIPROTO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specify https if needed (Default: 'https')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"IBMMQAPIURLPATH"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specify api prefix (Default: '/ibmmq/rest/v1/admin')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"IBMMQAPIUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Api username")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"IBMMQAPIPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Api password")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"IBMMQAPIEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command (eg. a --verbose flag)")))),(0,n.kt)("h2",{id:"how-to-test-the-plugin-and-what-are-the-main-options-for"},"How to test the Plugin and what are the main options for?"),(0,n.kt)("p",null,"Once the plugin installed, log into your Centreon Poller CLI using the ",(0,n.kt)("em",{parentName:"p"},"centreon-engine")," user account\nand test the Plugin by running the following command (Parameters such as ",(0,n.kt)("inlineCode",{parentName:"p"},"api-username")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"api-password"),"have to be adjusted):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_ibmmq_restapi.pl \\\n    --plugin=apps::mq::ibmmq::restapi::plugin \\\n    --mode=queue-managers \\\n    --hostname='10.30.2.79' \\\n    --port='9443' \\\n    --proto='https' \\\n    --url-path='/ibmmq/rest/v1/admin' \\\n    --api-username='myapiusername' \\\n    --api-password='myapipassword' \\\n    --verbose\n")),(0,n.kt)("p",null,"Expected command output is shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Queue manager 'MQPRD' status: running [channel initiator: running], current number of connections: 43 | 'MQPRD#queuemanager.connections.count'=43;;;0;\n")),(0,n.kt)("p",null,"The command above monitors queue managers (",(0,n.kt)("inlineCode",{parentName:"p"},"--mode=queue-managers"),")."),(0,n.kt)("p",null,"It uses api-username (",(0,n.kt)("inlineCode",{parentName:"p"},"--api-username='myapiusername'"),"), an api-password (",(0,n.kt)("inlineCode",{parentName:"p"},"--api-password='myapipassword'"),")\nand it connects to the host ",(0,n.kt)("em",{parentName:"p"},"10.30.2.79")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--hostname='10.30.2.79'"),")\non the port 9443 (",(0,n.kt)("inlineCode",{parentName:"p"},"--port='9443'"),") using https (",(0,n.kt)("inlineCode",{parentName:"p"},"--proto='https'"),")."),(0,n.kt)("p",null,"All the options as well as all the available thresholds can be displayed by adding the  ",(0,n.kt)("inlineCode",{parentName:"p"},"--help"),"\nparameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_ibmmq_restapi.pl \\\n    --plugin=apps::mq::ibmmq::restapi::plugin \\\n    --mode=queue-managers \\\n    --help\n")),(0,n.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#http-and-api-checks"},"Troubleshooting plugins")))}b.isMDXComponent=!0}}]);