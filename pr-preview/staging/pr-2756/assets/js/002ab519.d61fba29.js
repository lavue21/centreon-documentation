"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[34516],{63675:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>f,frontMatter:()=>p,metadata:()=>s,toc:()=>u});n(67294);var a=n(3905),r=n(51715),o=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"cloud-gcp-compute-computeengine",title:"Google Compute Engine"},d=void 0,s={unversionedId:"integrations/plugin-packs/procedures/cloud-gcp-compute-computeengine",id:"integrations/plugin-packs/procedures/cloud-gcp-compute-computeengine",title:"Google Compute Engine",description:"Monitoring Connector Assets",source:"@site/pp/integrations/plugin-packs/procedures/cloud-gcp-compute-computeengine.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-gcp-compute-computeengine",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/cloud-gcp-compute-computeengine",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/cloud-gcp-compute-computeengine.md",tags:[],version:"current",frontMatter:{id:"cloud-gcp-compute-computeengine",title:"Google Compute Engine"},sidebar:"pp",previous:{title:"Google CloudSQL MySQL",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/cloud-gcp-cloudsql-mysql"},next:{title:"Google Stackdriver",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/cloud-gcp-management-stackdriver"}},c={},u=[{value:"Monitoring Connector Assets",id:"monitoring-connector-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Discovery rules",id:"discovery-rules",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Google Cloud Configuration",id:"google-cloud-configuration",level:3},{value:"Setup",id:"setup",level:2},{value:"Host configuration",id:"host-configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How to test the Plugin and what are the main options for?",id:"how-to-test-the-plugin-and-what-are-the-main-options-for",level:3},{value:"Why do I get the following result <code>UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values</code> ?",id:"why-do-i-get-the-following-result-unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values-",level:3}],g={toc:u},k="wrapper";function f(e){var{components:t}=e,p=m(e,["components"]);return(0,a.kt)(k,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},g,p),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector Assets"),(0,a.kt)("h3",{id:"monitored-objects"},"Monitored Objects"),(0,a.kt)("p",null,"The Monitoring Connector Google Compute Engine collects metrics for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cpu"),(0,a.kt)("li",{parentName:"ul"},"Diskio"),(0,a.kt)("li",{parentName:"ul"},"Network")),(0,a.kt)("h3",{id:"discovery-rules"},"Discovery rules"),(0,a.kt)("p",null,"The Centreon Monitoring Connector ",(0,a.kt)("em",{parentName:"p"},"Google Compute Engine")," includes a Host Discovery ",(0,a.kt)("em",{parentName:"p"},"provider")," to automatically discover virtual machines\nfor a given Google Cloud Project."),(0,a.kt)("p",null,"This provider is named ",(0,a.kt)("strong",{parentName:"p"},"Google Compute Engine"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(84913).Z,width:"411",height:"133"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note that the key file must be deployed on the Poller(s) expected to discover GCP assets.")),(0,a.kt)("p",null,"More information about the Host Discovery module is available in the Centreon documentation:\n",(0,a.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/hosts-discovery"},"Host Discovery")),(0,a.kt)("h3",{id:"collected-metrics"},"Collected Metrics"),(0,a.kt)("p",null,"For all collected metrics, we can choose the ",(0,a.kt)("em",{parentName:"p"},"aggregation"),": ",(0,a.kt)("em",{parentName:"p"},"average"),", ",(0,a.kt)("em",{parentName:"p"},"minimum"),", ",(0,a.kt)("em",{parentName:"p"},"maximum")," and ",(0,a.kt)("em",{parentName:"p"},"total"),"."),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Cpu",label:"Cpu",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"instance_name"),"~",(0,a.kt)("em",{parentName:"td"},"aggregation"),"#computeengine.cpu.utilization.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Utilization of allocated CPU"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"instance_name"),"~",(0,a.kt)("em",{parentName:"td"},"aggregation"),"#computeengine.cpu.reserved_cores.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of vCPUs reserved on the host of the instance"),(0,a.kt)("td",{parentName:"tr",align:"left"}))))),(0,a.kt)(o.Z,{value:"Diskio",label:"Diskio",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"instance_name"),"~",(0,a.kt)("em",{parentName:"td"},"aggregation"),"#computeengine.disk.read.volume.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count of bytes read from disk"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"instance_name"),"~",(0,a.kt)("em",{parentName:"td"},"aggregation"),"#computeengine.disk.read.volume.bytespersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count of bytes read per seconds from disk"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"instance_name"),"~",(0,a.kt)("em",{parentName:"td"},"aggregation"),"#computeengine.disk.throttled.read.volume.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count of bytes in throttled read operations"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"instance_name"),"~",(0,a.kt)("em",{parentName:"td"},"aggregation"),"#computeengine.disk.throttled.read.volume.bytespersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count of bytes per seconds in throttled read operations"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"instance_name"),"~",(0,a.kt)("em",{parentName:"td"},"aggregation"),"#computeengine.disk.write.volume.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count of bytes write from disk"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"instance_name"),"~",(0,a.kt)("em",{parentName:"td"},"aggregation"),"#computeengine.disk.write.volume.bytespersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count of bytes write per seconds from disk"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"instance_name"),"~",(0,a.kt)("em",{parentName:"td"},"aggregation"),"#computeengine.disk.throttled.write.volume.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count of bytes in throttled write operations"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"instance_name"),"~",(0,a.kt)("em",{parentName:"td"},"aggregation"),"#computeengine.disk.throttled.write.volume.bytespersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count of bytes per seconds in throttled write operations"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"instance_name"),"~",(0,a.kt)("em",{parentName:"td"},"aggregation"),"#computeengine.disk.read.ops.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count of data disk read IO operations"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"instance_name"),"~",(0,a.kt)("em",{parentName:"td"},"aggregation"),"#computeengine.disk.read.ops.persecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count of data disk read IOPs operations"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"instance_name"),"~",(0,a.kt)("em",{parentName:"td"},"aggregation"),"#computeengine.disk.write.ops.persecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count of data disk write IO operations"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"instance_name"),"~",(0,a.kt)("em",{parentName:"td"},"aggregation"),"#computeengine.disk.write.ops.persecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count of data disk write IOPs operations"),(0,a.kt)("td",{parentName:"tr",align:"left"}))))),(0,a.kt)(o.Z,{value:"Network",label:"Network",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"instance_name"),"~",(0,a.kt)("em",{parentName:"td"},"aggregation"),"#computeengine.network.received.volume.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count of bytes received from the network"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"instance_name"),"~",(0,a.kt)("em",{parentName:"td"},"aggregation"),"#computeengine.network.received.volume.bytespersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count of bytes received per seconds from the network"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"instance_name"),"~",(0,a.kt)("em",{parentName:"td"},"aggregation"),"#computeengine.network.sent.volume.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count of bytes sent over the network"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"instance_name"),"~",(0,a.kt)("em",{parentName:"td"},"aggregation"),"#computeengine.network.sent.volume.bytespersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count of bytes sent per seconds over the network"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"instance_name"),"~",(0,a.kt)("em",{parentName:"td"},"aggregation"),"#computeengine.network.received.packets.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count of packets received from the network"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"instance_name"),"~",(0,a.kt)("em",{parentName:"td"},"aggregation"),"#computeengine.network.received.packets.persecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count of packets received per seconds from the network"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"instance_name"),"~",(0,a.kt)("em",{parentName:"td"},"aggregation"),"#computeengine.network.sent.packets.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count of packets sent over the network"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"instance_name"),"~",(0,a.kt)("em",{parentName:"td"},"aggregation"),"#computeengine.network.sent.packets.persecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count of packets sent per seconds over the network"),(0,a.kt)("td",{parentName:"tr",align:"left"})))))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h3",{id:"google-cloud-configuration"},"Google Cloud Configuration"),(0,a.kt)("p",null,"Configure a service account key (download its private key as a JSON file) for which the following privileges have to be granted:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Google Scope"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://www.googleapis.com/auth/cloud-platform"},"https://www.googleapis.com/auth/cloud-platform")),(0,a.kt)("td",{parentName:"tr",align:"left"},"View and manage your data across Google Cloud Platform services")))),(0,a.kt)("p",null,"How to create a service account key: ",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/identity/protocols/oauth2/service-account"},"https://developers.google.com/identity/protocols/oauth2/service-account")),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Gcp-Compute-ComputeEngine-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,a.kt)("em",{parentName:"li"},"Google Compute Engine")," Monitoring Connector"))),(0,a.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Gcp-Compute-ComputeEngine-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Central server, install the Centreon Monitoring Connector from the RPM:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-gcp-compute-computeengine\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,a.kt)("em",{parentName:"li"},"Google Compute Engine")," Monitoring Connector")))),(0,a.kt)("h2",{id:"host-configuration"},"Host configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add a new Host and apply the ",(0,a.kt)("em",{parentName:"li"},"Cloud-Gcp-Compute-ComputeEngine-custom")," Host Template")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Once the template applied, some Macros have to be configured:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"GCPKEYFILEPATH"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Service account key json file")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"GCPSCOPEENDPOINT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Google Scope. Default: ",(0,a.kt)("a",{parentName:"td",href:"https://www.googleapis.com/auth/cloud-platform"},"https://www.googleapis.com/auth/cloud-platform"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"GCPDIMENSIONNAME"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The name of the dimension to filter on. Default: resource.labels.instance_id")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"GCPDIMENSIONOPERATOR"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Define the type of filter match to use. Default: equals")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"GCPDIMENSIONVALUE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"ID of the instance you want to monitor.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"PROXYURL"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Configure proxy URL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"GCPEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command_line (eg. a --verbose flag)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"DUMMYSTATUS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Host state. Default is OK, do not modify it until you know what you are doing")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"DUMMYOUTPUT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Host check output. Default is 'This is a dummy check'. Customize it with your own if needed")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Service account key file must be stored on Centreon Poller. ",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," user account must have read privileges on that file. ")),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"how-to-test-the-plugin-and-what-are-the-main-options-for"},"How to test the Plugin and what are the main options for?"),(0,a.kt)("p",null,"Once the plugin installed, log into your Centreon Poller CLI using the ",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," user account\nand test the Plugin by running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_gcp_compute_computeengine_api.pl \\\n    --plugin=cloud::google::gcp::compute::computeengine::plugin \\\n    --mode=cpu \\\n    --key-file=/var/lib/centreon-engine/centreon-dev-6e5531fc9e82.json \\\n    --dimension-name='metric.labels.instance_name' \\\n    --dimension-operator='equals' \\\n    --dimension-value='instance-centreon1-drb5' \\\n    --aggregation='average' \\\n    --warning-utilization='90' \\\n    --critical-utilization='95' \\\n    --verbose\n")),(0,a.kt)("p",null,"Expected command output is shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Instance 'instance-centreon1-drb5' aggregation 'average' metrics cpu utilization: 1.04 %, cpu reserved cores: 0.20 | 'instance-centreon1-drb5~average#computeengine.cpu.utilization.percentage'=1.04%;0:90;0:95;0;100 'instance-centreon1-drb5~average#computeengine.cpu.reserved_cores.count'=0.20;;;;\nChecking 'instance-centreon1-drb5'\n    aggregation 'average' metrics cpu utilization: 1.04 %, cpu reserved cores: 0.20\n")),(0,a.kt)("p",null,"The command above monitors cpu usage of a Google Compute Engine instance (",(0,a.kt)("inlineCode",{parentName:"p"},"--plugin=cloud::google::gcp::compute::computeengine::plugin --mode=cpu"),") identified\nby the name ",(0,a.kt)("em",{parentName:"p"},"instance-centreon1-drb5")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--dimension-name='metric.labels.instance_name' --dimension-operator='equals' --dimension-value='instance-centreon1-drb5'"),")."),(0,a.kt)("p",null,"This command would trigger a WARNING alarm if cpu utilization is more than 90%\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--warning-utilization='90'"),") and a CRITICAL alarm for more than 95% (",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-utilization='95'"),")."),(0,a.kt)("p",null,"All the options as well as all the available thresholds can be displayed by adding the  ",(0,a.kt)("inlineCode",{parentName:"p"},"--help"),"\nparameter to the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_gcp_compute_computeengine_api.pl \\\n    --plugin=cloud::google::gcp::compute::computeengine::plugin \\\n    --mode=cpu \\\n    --help\n")),(0,a.kt)("h3",{id:"why-do-i-get-the-following-result-unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values-"},"Why do I get the following result ",(0,a.kt)("inlineCode",{parentName:"h3"},"UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values")," ?"),(0,a.kt)("p",null,"This command result means that Google Cloud does not have any value for the requested period."),(0,a.kt)("p",null,"This result can be overriden by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"--zeroed")," option in the command. This will force a value of 0 when no metric\nhas been collected and will prevent the UNKNOWN error message."))}f.isMDXComponent=!0},84913:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);