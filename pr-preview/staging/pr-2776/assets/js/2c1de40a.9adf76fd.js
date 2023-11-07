"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[51492],{20749:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>N,frontMatter:()=>p,metadata:()=>s,toc:()=>g});a(67294);var n=a(3905),r=a(51715),o=a(7626);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const p={id:"cloud-gcp-cloudsql-mysql",title:"Google CloudSQL MySQL"},m=void 0,s={unversionedId:"integrations/plugin-packs/procedures/cloud-gcp-cloudsql-mysql",id:"integrations/plugin-packs/procedures/cloud-gcp-cloudsql-mysql",title:"Google CloudSQL MySQL",description:"Monitoring Connector Assets",source:"@site/pp/integrations/plugin-packs/procedures/cloud-gcp-cloudsql-mysql.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-gcp-cloudsql-mysql",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/cloud-gcp-cloudsql-mysql",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/cloud-gcp-cloudsql-mysql.md",tags:[],version:"current",frontMatter:{id:"cloud-gcp-cloudsql-mysql",title:"Google CloudSQL MySQL"},sidebar:"pp",previous:{title:"Docker",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/applications-docker-restapi"},next:{title:"Google Compute Engine",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/cloud-gcp-compute-computeengine"}},c={},g=[{value:"Monitoring Connector Assets",id:"monitoring-connector-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Discovery rules",id:"discovery-rules",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Google Cloud Configuration",id:"google-cloud-configuration",level:3},{value:"Centreon",id:"centreon",level:3},{value:"Setup",id:"setup",level:2},{value:"Host configuration",id:"host-configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How to test the Plugin and what are the main options for?",id:"how-to-test-the-plugin-and-what-are-the-main-options-for",level:3},{value:"Why do I get the following result <code>UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values</code> ?",id:"why-do-i-get-the-following-result-unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values-",level:3}],u={toc:g},k="wrapper";function N(e){var{components:t}=e,p=d(e,["components"]);return(0,n.kt)(k,i(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){l(e,t,a[t])}))}return e}({},u,p),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector Assets"),(0,n.kt)("h3",{id:"monitored-objects"},"Monitored Objects"),(0,n.kt)("p",null,"The Monitoring Connector Google CloudSQL MySQL collects metrics for:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Cpu"),(0,n.kt)("li",{parentName:"ul"},"Innodb"),(0,n.kt)("li",{parentName:"ul"},"Network"),(0,n.kt)("li",{parentName:"ul"},"Queries"),(0,n.kt)("li",{parentName:"ul"},"Storage")),(0,n.kt)("h3",{id:"discovery-rules"},"Discovery rules"),(0,n.kt)("p",null,"The Centreon Monitoring Connector ",(0,n.kt)("em",{parentName:"p"},"Google CloudSQL MySQL")," includes a Host Discovery ",(0,n.kt)("em",{parentName:"p"},"provider")," to automatically discover databases\nfor a given Google Cloud Project. "),(0,n.kt)("p",null,"This provider is named ",(0,n.kt)("strong",{parentName:"p"},"Google CloudSQL MySQL"),":"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(53433).Z,width:"410",height:"132"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note that the key file must be deployed on the Poller(s) expected to discover GCP assets.")),(0,n.kt)("p",null,"More information about the Host Discovery module is available in the Centreon documentation:\n",(0,n.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/hosts-discovery"},"Host Discovery")),(0,n.kt)("h3",{id:"collected-metrics"},"Collected Metrics"),(0,n.kt)("p",null,"For all collected metrics, we can choose the ",(0,n.kt)("em",{parentName:"p"},"aggregation"),": ",(0,n.kt)("em",{parentName:"p"},"average"),", ",(0,n.kt)("em",{parentName:"p"},"minimum"),", ",(0,n.kt)("em",{parentName:"p"},"maximum")," and ",(0,n.kt)("em",{parentName:"p"},"total"),"."),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Cpu",label:"Cpu",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"database_id"),"~",(0,n.kt)("em",{parentName:"td"},"aggregation"),"#database.cpu.utilization.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Utilization of the reserved CPU"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"database_id"),"~",(0,n.kt)("em",{parentName:"td"},"aggregation"),"#database.cpu.reserved_cores.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of cores reserved for the database instance"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(o.Z,{value:"Innodb",label:"Innodb",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"database_id"),"~",(0,n.kt)("em",{parentName:"td"},"aggregation"),"#database.mysql.innodb.data_fsyncs.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count of InnoDB fsync() calls"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"database_id"),"~",(0,n.kt)("em",{parentName:"td"},"aggregation"),"#database.mysql.innodb.data_fsyncs.persecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count of InnoDB fsync() calls per second"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"database_id"),"~",(0,n.kt)("em",{parentName:"td"},"aggregation"),"#database.mysql.innodb.os_log_fsyncs.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count of InnoDB fsync() calls to the log file"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"database_id"),"~",(0,n.kt)("em",{parentName:"td"},"aggregation"),"#database.mysql.innodb.os_log_fsyncs.persecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count of InnoDB fsync() calls per second to the log file"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"database_id"),"~",(0,n.kt)("em",{parentName:"td"},"aggregation"),"#database.mysql.innodb.pages_read.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count of InnoDB pages read"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"database_id"),"~",(0,n.kt)("em",{parentName:"td"},"aggregation"),"#database.mysql.innodb.pages_read.persecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count of InnoDB pages read per second"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"database_id"),"~",(0,n.kt)("em",{parentName:"td"},"aggregation"),"#database.mysql.innodb.pages_written.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count of InnoDB pages written"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"database_id"),"~",(0,n.kt)("em",{parentName:"td"},"aggregation"),"#database.mysql.innodb.pages_written.persecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count of InnoDB pages written per second"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(o.Z,{value:"Network",label:"Network",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"database_id"),"~",(0,n.kt)("em",{parentName:"td"},"aggregation"),"#database.network.connections.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of connections to databases"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"database_id"),"~",(0,n.kt)("em",{parentName:"td"},"aggregation"),"#database.network.received.volume.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count of bytes received through the network"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"database_id"),"~",(0,n.kt)("em",{parentName:"td"},"aggregation"),"#database.network.received.volume.bytespersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count of bytes received per second through the network"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"database_id"),"~",(0,n.kt)("em",{parentName:"td"},"aggregation"),"#database.network.sent.volume.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count of bytes sent through the network"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"database_id"),"~",(0,n.kt)("em",{parentName:"td"},"aggregation"),"#database.network.sent.volume.bytespersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count of bytes sent per second through the network"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B/s"))))),(0,n.kt)(o.Z,{value:"Queries",label:"Queries",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"database_id"),"~",(0,n.kt)("em",{parentName:"td"},"aggregation"),"#database.mysql.questions.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count of statements executed by the server sent by the client"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"database_id"),"~",(0,n.kt)("em",{parentName:"td"},"aggregation"),"#database.mysql.questions.persecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count of statements per second executed by the server sent by the client"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"database_id"),"~",(0,n.kt)("em",{parentName:"td"},"aggregation"),"#database.mysql.queries.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count of statements executed by the server"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"database_id"),"~",(0,n.kt)("em",{parentName:"td"},"aggregation"),"#database.mysql.queries.persecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count of statements per second executed by the server"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(o.Z,{value:"Storage",label:"Storage",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"database_id"),"~",(0,n.kt)("em",{parentName:"td"},"aggregation"),"#database.space.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Data utilization"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"database_id"),"~",(0,n.kt)("em",{parentName:"td"},"aggregation"),"#database.disk.read.io.operations.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count of data disk read IO operations"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"database_id"),"~",(0,n.kt)("em",{parentName:"td"},"aggregation"),"#database.disk.read.io.operations.persecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count of data disk read IO operations per second"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"database_id"),"~",(0,n.kt)("em",{parentName:"td"},"aggregation"),"#database.disk.write.io.operations.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count of data disk write IO operations"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"database_id"),"~",(0,n.kt)("em",{parentName:"td"},"aggregation"),"#database.disk.write.io.operations.persecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count of data disk write IO operations per second"),(0,n.kt)("td",{parentName:"tr",align:"left"})))))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("h3",{id:"google-cloud-configuration"},"Google Cloud Configuration"),(0,n.kt)("p",null,"Configure a service account key (download its private key as a JSON file) for which the following privileges have to be granted:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Google Scope"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://www.googleapis.com/auth/cloud-platform"},"https://www.googleapis.com/auth/cloud-platform")),(0,n.kt)("td",{parentName:"tr",align:"left"},"View and manage your data across Google Cloud Platform services")))),(0,n.kt)("p",null,"How to create a service account key: ",(0,n.kt)("a",{parentName:"p",href:"https://developers.google.com/identity/protocols/oauth2/service-account"},"https://developers.google.com/identity/protocols/oauth2/service-account")),(0,n.kt)("h3",{id:"centreon"},"Centreon"),(0,n.kt)("p",null,"Deploy the key file on every Poller expected to monitor Google Cloud resources. The key file\nshould be readable by centreon-engine poller."),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Gcp-CloudSQL-MySQL-Api\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,n.kt)("em",{parentName:"li"},"Google CloudSQL MySQL")," Monitoring Connector"))),(0,n.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Gcp-CloudSQL-MySQL-Api\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Central server, install the Centreon Monitoring Connector from the RPM:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-gcp-cloudsql-mysql\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,n.kt)("em",{parentName:"li"},"Google CloudSQL MySQL")," Monitoring Connector")))),(0,n.kt)("h2",{id:"host-configuration"},"Host configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add a new Host and apply the ",(0,n.kt)("em",{parentName:"li"},"Cloud-Gcp-CloudSQL-MySQL-custom")," Host Template")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Once the template applied, some Macros have to be configured:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"GCPKEYFILEPATH"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Service account key json file")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"GCPSCOPEENDPOINT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Google Scope. Default: ",(0,n.kt)("a",{parentName:"td",href:"https://www.googleapis.com/auth/cloud-platform"},"https://www.googleapis.com/auth/cloud-platform"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"GCPDIMENSIONNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The name of the dimension to filter on. Default: resource.labels.database_id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"GCPDIMENSIONOPERATOR"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Define the type of filter match to use. Default: equals")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"GCPDIMENSIONVALUE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ID of the database you want to monitor.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"PROXYURL"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Configure proxy URL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"GCPEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command_line (eg. a --verbose flag)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"DUMMYSTATUS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Host state. Default is OK, do not modify it until you know what you are doing")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"DUMMYOUTPUT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Host check output. Default is 'This is a dummy check'. Customize it with your own if needed")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"WARNING"),": Service account key file must be stored on Centreon Poller. ",(0,n.kt)("em",{parentName:"p"},"centreon-engine")," user account must have read privileges on that file. ")),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("h3",{id:"how-to-test-the-plugin-and-what-are-the-main-options-for"},"How to test the Plugin and what are the main options for?"),(0,n.kt)("p",null,"Once the plugin installed, log into your Centreon Poller CLI using the ",(0,n.kt)("em",{parentName:"p"},"centreon-engine")," user account\nand test the Plugin by running the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_gcp_cloudsql_mysql_api.pl \\\n    --plugin=cloud::google::gcp::cloudsql::mysql::plugin \\\n    --mode=cpu \\\n    --key-file=/var/lib/centreon-engine/centreon-dev-6e5531fc9e82.json \\\n    --dimension-name='resource.labels.database_id' \\\n    --dimension-operator='equals' \\\n    --dimension-value='centreon-dev:centreon-mysql' \\\n    --aggregation='average' \\\n    --warning-utilization='90' \\\n    --critical-utilization='95' \\\n    --verbose\n")),(0,n.kt)("p",null,"Expected command output is shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Instance 'centreon-dev:centreon-mysql' aggregation 'average' metrics cpu utilization: 2.40 %, cpu reserved cores: 1.00 | 'centreon-dev:centreon-mysql~average#database.cpu.utilization.percentage'=2.40%;0:95;;0;100 'centreon-dev:centreon-mysql~average#database.cpu.reserved_cores.count'=1.00;;;;\nChecking 'centreon-dev:centreon-mysql' \n    aggregation 'average' metrics cpu utilization: 2.40 %, cpu reserved cores: 1.00\n")),(0,n.kt)("p",null,"The command above monitors cpu usage of a Google MySQL instance (",(0,n.kt)("inlineCode",{parentName:"p"},"--plugin=cloud::google::gcp::cloudsql::mysql::plugin --mode=cpu"),") identified\nby the name ",(0,n.kt)("em",{parentName:"p"},"centreon-dev:centreon-mysql")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--dimension-name='resource.labels.database_id' --dimension-operator='equals' --dimension-value='centreon-dev:centreon-mysql'"),")."),(0,n.kt)("p",null,"This command would trigger a WARNING alarm if cpu utilization is more than 90%\n(",(0,n.kt)("inlineCode",{parentName:"p"},"--warning-utilization='90'"),") and a CRITICAL alarm for more than 95% (",(0,n.kt)("inlineCode",{parentName:"p"},"--critical-utilization='95'"),")."),(0,n.kt)("p",null,"All the options as well as all the available thresholds can be displayed by adding the  ",(0,n.kt)("inlineCode",{parentName:"p"},"--help"),"\nparameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_gcp_cloudsql_mysql_api.pl \\\n    --plugin=cloud::google::gcp::cloudsql::mysql::plugin \\\n    --mode=cpu \\\n    --help\n")),(0,n.kt)("h3",{id:"why-do-i-get-the-following-result-unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values-"},"Why do I get the following result ",(0,n.kt)("inlineCode",{parentName:"h3"},"UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values")," ?"),(0,n.kt)("p",null,"This command result means that Google Cloud does not have any value for the requested period."),(0,n.kt)("p",null,"This result can be overriden by adding the ",(0,n.kt)("inlineCode",{parentName:"p"},"--zeroed")," option in the command. This will force a value of 0 when no metric\nhas been collected and will prevent the UNKNOWN error message."))}N.isMDXComponent=!0},53433:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZoAAACECAYAAACpre08AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAACaUSURBVHhe7Z15dFzVnef91/w1M2f+6j5ZpsOSQAJOOiYEuhNIN52YZtIQApPhsA3QLIE2gdMT9i1ms31Yw+Z9AW94wxhvGGyM8Qbed0u2vMiWZMuWZGsrqbT/pj7X9ZOvHq9UVVKVUZV+n3N+9qv37rv3vluq3/fdfUAkEpH6+nqpq6uT2tpaZzU1NVJdXW1mZmZmZpbU0AzVD7QETUFb1AaowBDw5MmTcuLECamqqnJWUVFhZmZmZmaW0FQv0A40REUHbekUGk6gSATipmPHjkl5ebkcOXJEysrKOq20tNTMzMzMzKyLNqAVaAbagYagJWiKLzYDOFFZWekCLf2kQK777SL52/8+Wf7Hf3nXzMzMzMwsqaEZaAcagpagKb7YDKDKgxp9umS3CYyZmZmZWY8NDUFL0BS0RcVmwPHjx11V6NqrFriA99+9Wqoqo2IYqbBz5874kWEY/RU0A+1AQ9ASNAVtoRmNPpsBR48elUOHDnXWZkxkjHQwoTEMA9AOrdWgKWiLNqENoDPnwIEDLgBmGOlgQmMYhqI6gqagLVqrGVBSUiJFRUUmNEaPMKExDENRHUFT0BYGBjihoYpTWFhoQmP0CBMawzAU1RE0BW3RQQEDDh48KAUFBSY0Ro8woTEMQ1EdQVPQFubY0E8zgLa0Xbt2mdAYPcKExjAMRXUETUFbEBomcQ7Yv3+/cxYmNEZPMKExDENRHcEvoC0MCHBCs2/fPtm+fbsJjdEjTGgMw1BUR9AUtIUBAYw8M6ExeoUJjWEYSkKh2bt3r2zbts2ExugRJjSGYSiqI2gK2nL48GE3xNmExugVJjSGYSgmNEZWMKExDENJKDR79uyRrVu3mtAYPcKExjAMRXUETUFbTGiMjGBCYxiGEhQaVgcwoTF6jQmNYRiKCY2RFUxoDMNQTGiMrGBCYxiGYkJjZAUTGsMwFBMaIyuY0BiGoZjQGFnBhMYwDMWExsgKJjSGYSgmNEZWyIbQtLe3u1nFr732mlx//fVy9tlnO7v66qvlxRdfdNcIkwtEo1F56qmn5Le//a3bnyPbsP/HmDFj5MYbb+wsN47Hjx/vttQNcqbzlwrJ8nTy5EmZPHmy3HLLLTJw4MAufxss5NjR0REPGQ7xr1ixQv70pz/JZZdd5u7n/4cfflhWr14tzc3N8ZBdId3bb7/dGcfG1zGhMbJCpoWGvSseffRR9+MfNGiQ3H///TJy5EhnHHOOa6+88oo0NDTE7+q7nClHjnOcMmWKKx+/3N566y3nkCmzX//61/LFF190ccS5JjSbN29251Ucbr31Vrntttvcs3EO4UGE2tra4nd0hb/XP/zhD53lMWLECBk9erT7X+O466673F4qQUxokmNCY2SFTAoNW77+8Y9/dM4CB1lfXx+/chreyp944gnnEMaOHZvQofQVzoQjpwxwlpQJZROsuSAsmzZtcnnAOXOs5JLQ1NTUOAHlGRYtWtTlu+cZWZr+uuuuc38/q1atil85DbUdrnP/vHnzvlZz4fOcOXOcUBOO8D4mNMkxoTGyQqaEBqcxatQo5yxxmt0JCLWeO++8UwYPHixFRUXxs32TM+HI165d65zrQw89FCrOytKlS124Rx55pLM2mEtCs2XLFpf/l19+OeHfBwJDGO4nHkVF6tJLL5Uvv/wyfvbrIFjz588PLU8TmuSY0BhZIVNCwwZJvEXefPPNUl5eHj+bGN48//znP8uOHTviZ07DGz1iRbu9NpHQfl9aWhoP0RX6e3A+2jSHk7njjjtkyZIloe31OKOCggLnsLWpipoE8VMT8x1kd46cuGnKuvfee12axPPggw+6MvWbt7pD4+d+BKc7cLaU2fDhw51YQ3f5S6cceW7C+LUlhXNcI0wQ4qLstBxpEuX7D8uTxvPGG28kLB/yTHMa5cjzKirGzz33XOh36oMI890Gy9SEJjkmNEZWyJTQfPTRR86JvP322yk72TDIjzaf4GxwlDgtnBhNJuvWrYuHPAWOFsdF2ldddZW8+uqrziHecMMN7twzzzzTpS+IvC1YsKAzPpw293Av6SJQqQgNceJU/XQ1HvLOW3Uq5cAP+ZprrpGbbrrJ/aDTJVH+0i3HnggNcRAXcRK3ljuDF3jhCOaJ2iu1WPJF7SbVASHUfqgFkQc6+1Phk08+ceH9v0cTmuSY0BhZIRNCww9Znf2yZcviZ9OHt9n77rvPOS9qKL6jVsdJR7D/Ro5o4EyffvppiUQi8bNdBWjSpEmdceH4cIDE5bfhcy9xED4VoVFh5W2+uro6fvZ0PxXPEFZbC6JOnDRIK13C8teTckxXaKqqquSee+5x6dK3olDb0CbUYJkhGPTLcQ0jH8RJ/HV1dfFQX4drQ4YMcSIe1skfRmFhoVxxxRWuBqh/FyY0yTGhMbJCJoRGnV0iR5UqiBRx4KjC2vBnzZrlrk+fPt19VgcUdGgKe53TDOPXFriXOHjjDUIcxOXHF+bIadLBkSfqY2LTKPoSXn/99W77qiAbQpNuOUK6QkPNgnMTJkzoImSg5R72vZAfXg4QDe73DeFhxFlQBFQgwuJLBOEI74uKCU1yTGiMrHAmhEZ/4EHHgvnOS9+E169fHz/TFd5mcVA0hzU1NXU2Oz3++OPS2NgYD3UarWlR46Gphnu4N5HDIg7i8q+HOXJ9W06UrvYzMODB72cIIxtCk245QrpC010aLS0t8sILLyQsZ6DZrKyszImdP+wd4z6GQSsmNGcOE5oY7bEXp5rYb7G8rkPKarJrR2NpnGzskLauL2t5RyaEhrfU7trQcbY4ZeZLqOlETnVe6py6ax7hD57aiTaHkHdqDt11LmsNhnyRD5x/IkejwuQ7tDBHro6X56DvI2j0C9A0lYpj1JFYiUQrGcH89aQcIV2h4RixRXTD4Hoqz6/wN4QvY6QYafmDSqzp7MzRb4UG/1EXe+naWNIhYze2ytOfN8sDS5pkyMfRrNqflkTlseVNMnJTs3xZ1ia1TR2Sj5qTCaEB7bMIa0oJI+i80nGQ6pTTERrevJM5mnSFJpml4mh5q0eUUhkMQP5YNYAZ8Nr/0xuh8cXtmxYahecZOnSoS0/7+5K9yIShzYf+UGoTmuT0W6GhVvHpnnb5PzOb5MIxETl3VL2cfYbsnJj9cGy9/G5Oo3y8v1VORPNPajIlNDqiiA5iOoqTEea8kjX56Ftqqk1n6qC06SxMNHyIg7j862H3aD66E7hUofOcIbvkMdnwZu378PuGwvKXbjlCukLTXRphgk1tktFvqQiqvrTwv5LO8GYtk2CZmtAkp18KTWvsRWRxQbsMfi8qZ48MF4MzZZdPicjcPa3SkhtLdKVMpoQGp67Oh+YjfYtMRJjzSrUTe+LEie5zqoMBqDFQcwDuJY6wwQA6FyiZ0OCkGAbNgIBkfTCpgLOmZkZfRaL4cN7Mhifvw4YN63S2YflLtxxBnbvWIny0Vuh/V+r4wwY88AyUjZ8nrWlxT3dDv4mLYeNBkWDiJc1qnGedM/9+HCHrnlHbY604m7DZc/ql0Oyv7JB75zfJD0aHO/8zad+P5eGORVEpPJFfSpMpoQF/CZqXXnrJdYoHwZEwHJb1qILOK5VhuVhxcXH8bGrDm/2lbnB8OECcjT+8l3kxvOETPpnQkK8ZM2a4sDhz/w2ba+SdGkMwT4kgb4gz8dGnEJzwSsf54sWLXbnw/P6w7LD89aQcVTgoA3/eEQugEjb4XSEmupyMn4b/LH6egJcLwmOzZ8/+2ioIfB43bpzLR5joJlqChni5hzTVguUEJjTJ6VdCw59sS8wv/HVlq1w6sSHU8X8T9rNJERm2tlmaY3k7/dPNbTIpNMCcEkSGHz7GrHkWh8T5MFvbXzyRyZLBZhR1hFwPm2gYfJv1BYV+ieCEzeA8F+7VN17iIw8aHnG48soru9SAwhw54Iyff/75TqdGujynrhLAcyZqugrDnwDKs+JoiY941dGTB380FiTKX7rlqMJBOpQFZaLhaa7Scz7q+DUN8ssLBPGTn2CeSI+apP4NYAwKYVAF8RMP5/jsi6AP/U76kkI8YYtqahzBPioVGp6JwQaECTNWHdcmxf5GvxKa1lilYWtZu1zzfmOsNhMJdfrfhFGruWpmg6w/0pY3TWiZFhrAoVBboCnDXwoeR4BDwtF314/DGznOI5tL0OCwCU9YHCPNOjhFnKv/xpvIkQNxkwZp6TOSZ0ad0YSTLjwH3weOXZ8dY6Z92PwS6C5/6ZYjgkx4ddh8dwgDNVXKJCg0gBOiH4wypAwQWlYMePPNN0PzBDzH+++/7wSD74u0+J/vgxqqX6MKg3Jn6Z9E2wSwvBBx8xz8renfgAoN4bszypNy7Y/0G6FxQ5gbO2ToshYZNKHviIza30+MyKOfN8nJaIfLa66TDaHJVXBEiIY/JNbITfQlgMEdui6ckZx+IzTRFpEvD7bLxeMb3KivMGf/TRp5+mlMbFYcapPGltxXmv4mNHR684ZPDciH2gTt/ryV+0vWGEZ/ot8IzeHqDrlvXpOcP6bv1WbUzhtbL7cvjEpxTe63n/U3oaHtn34FmmqoudBURJOQbi7GubBBDIbRH+gXQlMXFZm/q00GjTuz82XStXNG18uPJ0RkdkGr1DTl9ptvf2w6o/+EfhTtu9A+Hdrzk/UPGEY+k/dCg7vedqRdbpkdlXO+4Tkzqdr1cxtlU3lbTo9Asz4awzCUvBea2lht5s01LfL3Y/tuk1nQBo6PyMtfNed0rcaExjAMJa+Fhn7X9Yfa5boZ0VCH3ls7d/QpC7vWW/u32Q2yuiRWq8lRrTGhMQxDyVuhwUE3xGoE/7mwSQZmoTbzgzH1csl7EWcch4Xpjf1oXET++HFU6ps7clJsTGgMw1DyVmiYZf9xQZv885SGjA4AYHLl5VMj8uQXUdlwtM3Z0NVN8qtpEXct7J6eGAMDLp/aIPP2tkpT1yWfcgITGsMwlLwUGlYAOFrbIXd8EJWBsZpBmCNP1xCRf5wckSGfRuXDvS1SWtcubbF02FfmSH27zC9qlQeXRuWXUzInOBfE8n7jvEYpq+twz5RLmNAYhqHkpdDURDtk2qZW+UnMUfd2cuZ5Y+rlokkR+d2cBhm7tVkO17aH1jBYQw3xeXd7i/z+gwa3fhn3hsWZjjEwYMK2FqnOsa0ETGgMw1DyTmhYvqXgeLtcO531zMKddypG0xV7xvzz9Ii8vK5J9p+M1WDivp4+k5bYh/pou9TFrLn1dD8KYZhw+UrsHu79USyO3gwY+H5MrK6c0SA7K06nnwuY0BiGoeSd0FTWd8hba5rlvJhz72ltBpFhOZhHP4/KxvI2aWjpuvVyfVO7rNpXL3dOOSy3v3dIlu+pk9ro6WoOYbln67E215fzs4m9F5uX1zXLsUjuKI0JjWEYSl4JDbWZz4paZfCU3m0B8KNx9TJqS7McjNVMGmO1FeBfai7byxrlyY+OyGWv7JUfPLPL2S9f3iNPzCuT7aWN0kTtxt0hEo0dF1e3yah1sThHVcvZI+tC00vF/mlag9uNM1cW3MyU0OhGZtiQIUPcpmTdsW3bNrfZF+HDVgVOF53tz7Lzmg+OU11Jmb1QWBnAX1GY1X9ZSZmVnlkLLQxdEdhf8dkwcpW8Epry2g55YmmTXNDLvhH6RRbHnHokvrglAlNyolnGr66U68cckAuf3S3ffnSHfCtuHF8QO/f70Qdk9MpKORwLi+AAtZ+FO2vl/BHF8r2/VvVYbM4fWy9//iwqZXW5MSogG0KDgHQXLwtWTpgwoTN8b4RG9zjR5eIRB/YUYWdNfwl5woQtlMk5lpzXpfF1bxnWQGPjMo3j0UcfDV0F2ITGyCfyRmgYlTVvR6tcMbn3G5ohNNQeVGgamttlzuaTctVb++S8v+ySbz92WmQ6xSZ2jtrN4DeKZPamk+4ecEKzoyZ2bbd859n9vRKby6ZGZMbulpwYgZZpocFhIzT+NsFBdDn+TNRo2FuFjcrY+2TDhg1dah4cf/75504s2GefvfKDsHcK17mfvUyCNRfWPiN/rIfG7qHszeJjQmPkE3khNDQnHa3pkJtmNcoPQhx0uobQLIoJTX1caHhhRTgW76yRP4w9IOcP3S3/8/GdnSLD8Xl/2S3XxWo087fVSCQWVl9yEZoF2xGaXS7sd549IGe9eSImNuFpd2f081w3t0FK6/r+njWZFhpqAWwj3N2eLoS9+OKL3eZYvRWahQsXujjY1z4Maiy67TLNaH6txhep4La/Pv72xOyCqdtCgwmNkU/khdBEY4Iw+stmuWRSZubMXDi+Xt6P1Rz8tcbwIzShVdS1yqS1VfKvsdoNTWbYv765T8atrpRjtS2n+mg8EahubJOp607I958+JTTfemynfGfovpjYnOyR2Fz8bkReX9/c2XfUV8m00CAeNIuxLXJYDQJHj8OnRkNzli80XNMmtWXLlrlzQfQe/gf2l+Hz3Llz3ecw2NKXlZrZYtrfonfWrFnuXtL0BSiM48ePu+Y4akZFRUXxsyY0Rn6R80LT3Cqy93i7DJ7cIOdnYN4KxoTLK6ZH5JW1jbKnsjUmZKebPdpiVYmTDW2yrbRRXl163BnHnOOaguDsORaVEZ8ck1+8tEe+69WAvvX4rrjYULNJrxmNuTkMDNhV0R5LI55YHyTTQoNoaEd/WC0DZ4zIIDb+PQr54V62Vm5paYmfPQW7JtI5f9NNN7k/fli7dq1r1rrzzjvdXjPJBEOhtkWtK5EgBvFFEHFTTGiMfCLnhaYy0iGvrGiSC8eGO+aeGELziykR+aep9XLHh9Xy3oYa2VfR1GW+DPNoEBeMY+Bfjg9UNsmUr07Ibe8Wyz/EROZnwwpjQhMXGTVqNs8e6FGfDaPinl/dJMf78HDnbAhNTU1NwuYzwtEnghiFCY0KAJ3yJSUl8bOnYP95mrlef/31zuYr9nYfOnSoiwdjAzP6h3iu7vZ9Lysrc81m1FJS3eiMPhzSYI98Td+Exsgncl5o9sbe7K+e2tCryZlBY6LmS181ywNLozJ4Wq38aky53DezTFYW1cvRmpYuNRyFGkx5bYus2VcvD8wscUOef/XqXrl76iF58eNyOetJr0bjWU8GCDCvZvCMBims6rujArIhNPr2H6wtcJ6aDCKEGIUJDWiTljaPKdQkqL1wnw+CwvbLOkLMN4QnbEMzFa10BELz+9RTT3WKmAmNkU/kvNBsPdomP3mn55Mzw0xHnVU2dMgXh1tlyOJ6ufDVErlo+B554qMjsqWk0Q0OoKkMa4wd7yhrlL8sOCoXDy+U8/+yW+5475As3V0rx2pb46PO4n00IZbuAAGelWbCzeWnO4/7GtkQGghrPsMR02ymfSKJhIY+EPpCaCajuQxw7Dh4FakwqGVwLzUa0kGUVHAY8kzTmmJCYxhfx4QmxFRoWKKfNcyqGtrl46ImuX5iqVz4fKGbrPnqsuOuiexQVbO8sfy4q71c+Nxu+d2o/fLh1mo3aICmNpaoSSY0nQME3khtgMApoYn0S6EJaz4jjDab6ecwoVFR8ZvPVHwSjS4Lgz6e9evXu0mYpPPQQw+5iZlgTWeG8XVyXmiy0XQWnEdDF0wkJjpFFc0yce0JuWbkfrlkRKEbbcbcmktH7JF/e2e/m6y591g0Ji6nBwacnkfTjdBgaQwQcIMVpjXI7sr+1XQGweYzHDN9K36NJJHQQHB0Gc1pwRFfqYIA3Hvvva6Gpc+b7mAAoKZEnoK1NBMaI1/IeaHJxmAA+mge+zwqW462SG1MKHxORFpdP8xzi446oWGC5tCFR2V17FxVfddhYKx/trWkQR6ZW5awj6aLpThAgPw9sTwq5fX9azCAos1niIQOD/YncnYnNFrjoPkMB/7II490abKCw4cPuzjDBh0EIQ3SIk0lneHNVVVVcs8999jwZiOvyXmh0eHNV06OZGx4MxMjB02sl5vmVMu8nfVy6ESz65NRn0FlBcFZsbdePt9TJ1WxYx3ZTJjGlna3DA1NaDeMPygDnyuQ74SsJpDIuhsgwG6ev4g96/rStlg63Tuxb5JsCo02nyES1ExoNvPT605oqAHRRIXYsEQM/SnBwQGspzZkyBAXLzP8E0FzGc1mQZEoLy+Xm2++2Z0PlgO1HGpB77//vlsNwCZsGv2BnBcaYMLmmC+b5NJJvd9/BqNpij37L5pYJz8feUzumlbqVmumhtLaFr61MqdaY2pDs9lXByNyz9TDMujFQtdvQ62nyzyaFMwNEHjj6wMEBk2MyPMrm9zq0H2ZbAqNNp8hEvSTIAr+YpvdCQ3oHJkHHnigy9wZnwULFrgwpPHZZ591qfEANanhw4e7dIYNG9Y5uEBJtASNTgT1zZagMfKdvBAaahMsqHlzTBzO85xyT40+mrl7WuSz4lZ58JOIXPTWURn4wh7XBLalpCHh8GZGnrGy84+fL3CG2CzaUSOzN1efXhkgVQsZIICIXj2rQfZWntrdsy+TTaEBbT7jWnD9s2RCo81thPHnzvhwbtq0aZ0rLiM6N9xwgxtl5q/kTPNaWKc/YsjqzNdee60Ll2hRTY0juLCmCg3pUzsi3TB77bXXuqxKYBh9kbwQGsDxfrSzRf5lcu+XodHBABUNHVJS2y6L90bl1mlH5eIRe+Q3fy2SEUvKpbA86iZnUothAMArS4/Fai773PDmG8YdlHlbq6W4qlmO1yUf3pzQdICAq9nUyT++F5HRG5ulOeYX+3Z9JvtCo81nYZ3uyYQGEWDeTdjcmSBsBTBmzBg3b0aHNSMSDz/8sKupBGsyQZhnk2ibANLeuHGjEyNszZo1nTUfFRrCd2fB/iXD6IvkjdBAeUwUnvw0mpFtAnTUGc1kDHPeeaxF3l5RKdeOOuCGMt888aBMWFMlE9dWyf99t9idu3rkfnn9s1NL0tCE5u5NddRZIosPEDjnrxVy78J6Ka7u41WZOJkSmmwQNlLtmwQxovZEE1xwAqhh5AN5JTQ0obmNz3pZq7lgXL1M2dksFZFTkzKBf2ke23y4QR75oMwJy0XDCl0/DMf/ObtUNhQ3uMmbCAxwL/Np3v2ySs5Nt+ksYD99+YBM3VidE1sEQF8WGvJGRz2jwwzDyD55JTRQWd8ub69ukvNjgtHTgQGM7Lp+dp3M3RmRivpTEy/j2uGobWxz2zf/++RDcvu7h2R5YZ07pxC2ua0jlpdWt20A827+7on0BgP4xoi1u6cUuwmiuUJfExpqLoxSo7+DJixqM6lOqDQMo3fkndBQASk43ibXTov0ahInYvPjkZVy98xy+SwmJE00o8XToMais/4xf7FNJzKxzwjRXVMOyQ+H7nYi4+/ImY4hMgOf2y3riyOuPyhX6GtCQ4e5jhJDZPxlYwzDyC55JzRQE+2Q6Zua5Sfjerc0zTkja+XCtyvk8jeL5cFZpbLpcIPre0lEfdOp7QMe/qBMLn9lr+uXCduNMx07+6md8sS8UrfXTS7Rl5vODMM4s+Sl0NCPwXDnf/+gQQbGxCZMRFK1s96pkbNeOybnvbBPrhl1wK1rpp39Ch3+O480ytufV8jvRx9wu22mO28mzL735E657OVC2X20UZpypXMmjgmNYRhKXgoNMAR4SUGLXDE5IueGCEg6dtY7tfJ3rx6Tbz9VKD98tsANX56/vUYOVja7IczMlbl5QrFc8OzuUMHoqf3k+QIZvfK4W2kg1zChMQxDyVuhoc+ksblD/t+CRhmYiaVpRtZ1ig1Djul7uWVSsdz27qGMCwz23cd3yNXv7JOyk02dI99yCRMawzCUvBUaQGw2HGqV62f0fhKnMxWbZ/a4Tno6+b8Xs3TWMUvVLhleIFO/rMhJkQETGsMwlLwWGqiNdshba5rkpxla3bmzGe3pPaECkQn77mPb5eE5JTk3AMDHhMYwDCXvhYb6wPYjbXLrrIick+IOlsmMAQJas6EZLUwsemO/fKlQluw8mbO1GTChMQxDyXuhgbpYrWb+rmYZFKvV9HZggJo/QCBTYsNcG/ateWFBbtdmwITGMAylXwgNlFS3y3/Ma5AfZmJggFpggECYeKRjDAC44tVCKTjaGM917mJCYxiG0m+Ehj1rvjrQIj8fl7lajTNvgECYeKRjbCUwaXW51DR23akzFzGhMQxD6TdCQ3dHTWOHPPtpowyaECIYvbBMDBA496md8ru3CqS8pjmnlppJhAmNYRhKvxEaYHL9ttJW+d30iJzXi3XQwqy3AwQuGVEg87dU5dwKAIkwoTEMQ+lXQkM9oaVN5I0vonLpxHDB6I31dIDA95/eKXe8WyS1jS2xmlfu12bAhMYwDKVfCY1yoLJN7pvf0KvVnRNamgMEmOz5m9cLZPXe6nju8gMTGsMwlH4pNK2xWs3i3c3ym/dChCITlsYAgQue3SVjVh6TaA6uZ9YdmRAadpscP36820fGN3+Jf47nzp0rLS25MRycfJJf/3m2bNkSv5p5KioqZPr06Wnt3Mk97EAaLFfNO9cIk4xly5Z1ec7g1gzBsgjGq99/si0devs3QPmTVyN79EuhgerGDllW1CL/e2ZEfjSmd9sJhFmyAQIMZf75sF0yesUROVrd3LnXTb6QSaHxHY06wWTOpy+iz+M7tVSdaU/pqdCQJ7aX9h0/x5zjmn8+DJ7Rd/6E97+3sLLgmi9I2S4bxYQm+/RboaErpK6pQ9YfbpXRG5vkyeVReWBJowxZnDm784NKuXHiPrnu7d3y+7hd906B3D5xrwz/+Ih8uLlCKupacnoFgERkS2gAx6BOjGt6rM4s7O3Yv+Y7QHVu/nmMYz9dHJHWPMLuAcLgiDkfVkvx8+0TdHSJ4gfC6TU/DS0rvQdx4ZkxX2i6i1vRe1atWtUlDY45p3ETlx8H5xYtWuTS4rx/L5B3fU6uhaXvn09VaPx8ED95SPZdEy/x++c0b/45TNPnf54d43zwb4y86z3+s/vx+fnh3kR/r/lGvxUaH/w8NZyjte1SVpM5K65olD1lNbK7tFZ2xa2grE4OVzZIU0tb566c+Ug2hYYfpDpPrvHjVefmOwV1HFxT5wicxxHoD52w/Pi533eEYfdj5In/g/fwv+9IfDSs74DCSJYndZB+OCCMH04dF6ZlxXGivPvoPbt27ep8HgwHTnpaFsFyJV19Pv7HgYbFD5zXsD5+Hok/7PsPwnXNJ/GGlVGyvGo+/fSBaxo38fBM/B8sPz8Pflp+fP49esx9er/GlY+Y0BhZ4ZsWGh8Nw4/bJ3iez+qkgscaznc8eo9+xlEkchZcJxzhFcIG33T9+MDPB+HVOYKmxzXfifqf/bLqLu8+eo//P4bQ1NTUdEmL9ImHOLiu54E0ybs+I2GBsKTrP4vi513v98ssDP85tExA0+G6H28Q8qH3BPHj5li/C/Dv4/+w50lU5sSheesPmNAYWSGbQuP/4PWHyw9Zw+PUgg7B/7ErwfM4IZwR92HqmHwnwv/qONU0rUTOBkiDtMKu+8+QKE84+OD9HJMmYciDOlE/73o/5wifKO8+/j3ET/40LT9u4JrmAaEJlrESfP5EZUU8+iykxTFpdIdffn68mqbeT5zUcHhuv4z12RSO/TLSsH46oPdpOmHPwzk/LkzLXJ/PP5evmNAYWeGb6KPx8c+nEkY/+z94nMi6deu6vKkHnZIP58OcjeLn26e7vPp5CsbPZ4xrvvP3P2O+0CTKu49/D+nz/OSJ47C0uOb35+g5/vfx0w+WRVFRkQvvn+dz2PcfxC8zv4z4zPmw+4N50WPC+n8Dftz+Mfj3+en6+GG6Ixh3vmFCY2SFbAkNDs7vm9AfaLBJh/P6A+cc8eg1zmN+XOqUfKfAed42fQcQFpde5zjM2Sj6PH4aek7j6C5PxE1Y7vHDAWH8cFwjDKaiwXGivPsE7yEuTRfzyxmIR9NT/PwA9xGHlo9+1jAIDXH48WgYfcZEcD3sO9Dy47r/TEAYDcf/mg/C6rPq/Rq3nw7493Gs1/x8ky7H+kyEJ1x3f6/5iAmNkRUyKTR+swPGj1Lxf/wcaxh1Fop/zXcWic6Dpq8OSUmUju/kuoNwej/WXfzBPPn3+vf5ZeWPDAs62O7KSPHvIW3yoE6Qc76DBOIM5hOSPafGrdc5pvbEMXH6z+Qb13z89P3vQOPX8JzXOPz8cp1z3OvnCdFjQISWhZ8OEJ+WC/jP6z+rxo/5ZZ7ofD5iQmNkhUwIjdEzcGBn0nH5zt0wwjChMbKCCc2Zw38Lx4LNWNlC0/Xf8g0jDBMaIyuY0BiGoZjQGFnBhMYwDMWExsgKJjSGYSgmNEZWMKExDEMxoTGyggmNYRiKCY2RFUxoDMNQTGiMrGBCYxiGYkJjZAUTGsMwFBMaIyuY0BiGoZjQGFnBhMYwDMWExsgKJjSGYSgmNEZWMKExDEMxoTGyggmNYRiKCY2RFUxoDMNQTGiMrGBCYxiGYkJjZAUTGsMwFBMaIyuY0BiGoZjQGFnBhMYwDMWExsgKJjSGYSgmNEZWMKExDEMxoTGyggmNYRhKUGgOHz58Smj27t0r27ZtM6ExeoQJjWEYiuoImoK2lJSUnBKaoqIi2b59u/ztf3vPBaiqjMZvMYzkmNAYhgFoBxqClqApaEun0Ozbt0927Ngh/+tfPnCB7r97tYmNkTImNIZhoBloBxqClqApaEun0Bw4cEB27dol06eulL+J12rMzMzMzMzSNTQELUFT0JaysjKpqKiQAYwKKCwslC1btsh7k5bL4F/NlL/5ryY4ZmZmZmapGZqBdqAhaAmagrYcOXLklNCUlpbK/v37XRPIhg0bZNWqVbJ06VJZuHChfPjhhzJnzhyZNWuWzJw509mMGTPMzMzMzPqhqQ6gCWgDGoFWoBloBxqClqApaAvNZlVVVTIAxSkuLnZD0ejAUbFZvny5fPLJJ7J48WJZtGiRiwxbsGCBmZmZmVk/NNUBNAFtQCPQChUZNAQtQVPQluPHj58SmvLycteOdvDgQTccjU6czZs3y7p162TNmjUugpUrV8oXX3whK1asMDMzMzPrx4YWoAloAxqBVqAZaAcagpagKWhLZWWlnDx5UgbQfsYJqjmoECMFCgoKXPWHsdC0txHJpk2bnG3cuNHMzMzMrB+a6gCagDagEWgFmoF2oCFoCZqCtpw4cUKqq6tlANUaqjdas2EmJ4pEGxvjoFEoOnZ8I1IzMzMzs/5jQR1AG9AItALNQDu0JqNNZtRmqqur5f8DaMnnKVczBNwAAAAASUVORK5CYII="}}]);