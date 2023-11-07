"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[22896],{48594:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>N,frontMatter:()=>s,metadata:()=>d,toc:()=>c});a(67294);var n=a(3905),r=a(51715),o=a(7626);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const s={id:"cloud-azure-database-mysql",title:"Azure Database for MySQL"},m=void 0,d={unversionedId:"integrations/plugin-packs/procedures/cloud-azure-database-mysql",id:"integrations/plugin-packs/procedures/cloud-azure-database-mysql",title:"Azure Database for MySQL",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/cloud-azure-database-mysql.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-azure-database-mysql",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/cloud-azure-database-mysql",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/cloud-azure-database-mysql.md",tags:[],version:"current",frontMatter:{id:"cloud-azure-database-mysql",title:"Azure Database for MySQL"},sidebar:"pp",previous:{title:"Azure Database for MariaDB",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/cloud-azure-database-mariadb"},next:{title:"Azure Discover",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/cloud-azure-management-discover"}},u={},c=[{value:"Overview",id:"overview",level:2},{value:"Pack Assets",id:"pack-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Discovery rules",id:"discovery-rules",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"How to check in the CLI that the configuration is OK and what are the main options for ?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"The Azure credentials have changed and the Plugin does not work anymore",id:"the-azure-credentials-have-changed-and-the-plugin-does-not-work-anymore",level:4},{value:"<code>UNKNOWN: Login endpoint API returns error code &#39;ERROR_NAME&#39; (add --debug option for detailed message)</code>",id:"unknown-login-endpoint-api-returns-error-code-error_name-add---debug-option-for-detailed-message",level:4},{value:"<code>UNKNOWN: 500 Can&#39;t connect to login.microsoftonline.com:443</code>",id:"unknown-500-cant-connect-to-loginmicrosoftonlinecom443",level:4},{value:"<code>UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values</code>",id:"unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values",level:4}],k={toc:c},g="wrapper";function N(e){var{components:t}=e,s=p(e,["components"]);return(0,n.kt)(g,i(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){l(e,t,a[t])}))}return e}({},k,s),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Azure Database for MySQL allows you to easily set up scalable and secure high\navailability MySQL instances."),(0,n.kt)("p",null,"The Centreon Monitoring Connector ",(0,n.kt)("em",{parentName:"p"},"Azure Database for MySQL")," can rely on Azure API or Azure CLI to collect the metrics related to the\nAPI Management service."),(0,n.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,n.kt)("h3",{id:"monitored-objects"},"Monitored Objects"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Azure ",(0,n.kt)("em",{parentName:"li"},"Azure Database for MySQL")," instances",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Connections"),(0,n.kt)("li",{parentName:"ul"},"CPU"),(0,n.kt)("li",{parentName:"ul"},"IO consumption"),(0,n.kt)("li",{parentName:"ul"},"Memory"),(0,n.kt)("li",{parentName:"ul"},"Queries"),(0,n.kt)("li",{parentName:"ul"},"Replication"),(0,n.kt)("li",{parentName:"ul"},"Storage"),(0,n.kt)("li",{parentName:"ul"},"Traffic")))),(0,n.kt)("h3",{id:"discovery-rules"},"Discovery rules"),(0,n.kt)("p",null,"The Centreon Monitoring Connector ",(0,n.kt)("em",{parentName:"p"},"Azure Database for MySQL")," includes a Host Discovery ",(0,n.kt)("em",{parentName:"p"},"provider")," to automatically discover the Azure instances of a given\nsubscription and add them to the Centreon configuration.\nThis provider is named ",(0,n.kt)("strong",{parentName:"p"},"Microsoft Azure Database for MySQL"),":"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(56759).Z,width:"610",height:"193"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This discovery feature is only compatible with the 'api' custom mode. 'azcli' is not supported yet.")),(0,n.kt)("p",null,"More information about the Host Discovery module is available in the Centreon documentation:\n",(0,n.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/hosts-discovery"},"Host Discovery")),(0,n.kt)("h3",{id:"collected-metrics--status"},"Collected metrics & status"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Connections",label:"Connections",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azmysql.connections.active.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of active connections"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azmysql.connections.failed.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of failed Connections"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azmysql.connections.aborted.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of aborted Connections"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azmysql.connections.total.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of total Connections"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count"))))),(0,n.kt)(o.Z,{value:"Cpu",label:"Cpu",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azmysql.cpu.utilization.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CPU utilization"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Percentage"))))),(0,n.kt)(o.Z,{value:"IO-Consumption",label:"IO-Consumption",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azmysql.ioconsumption.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"IO consumption"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Percentage"))))),(0,n.kt)(o.Z,{value:"Memory",label:"Memory",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azmysql.memory.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Memory usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Percentage"))))),(0,n.kt)(o.Z,{value:"Queries",label:"Queries",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azmysql.queries.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of queries"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count"))))),(0,n.kt)(o.Z,{value:"Replication",label:"Replication",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azmysql.replication.lag.seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Replication Lag"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Seconds")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azmysql.replication.lag.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Replication Lag"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count"))))),(0,n.kt)(o.Z,{value:"Storage",label:"Storage",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azmysql.storage.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Storage used"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azmysql.storage.limit.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Storage limit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azmysql.storage.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Storage used"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Percentage")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azmysql.storage.backup.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Backup storage used"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azmysql.storage.serverlog.limit.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Server Log storage limit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azmysql.storage.serverlog.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Server Log storage used"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azmysql.storage.serverlog.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Server Log storage used"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Percentage"))))),(0,n.kt)(o.Z,{value:"Traffic",label:"Traffic",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azmysql.traffic.out.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Network Out"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azmysql.traffic.in.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Network In"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bytes")))))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"Please find all the prerequisites needed for Centreon to get information from Azure in the ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/getting-started/how-to-guides/azure-credential-configuration"},"dedicated page"),"."),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor Azure Database for MySQL resources:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Azure-Database-MySQL-Api\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,n.kt)("em",{parentName:"li"},"Azure Database for MySQL")," Centreon Monitoring Connector on the ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page"))),(0,n.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor Azure Database for MySQL resources:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Azure-Database-MySQL-Api\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Monitoring Connector RPM on the Centreon Central server:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-azure-database-mysql.noarch\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,n.kt)("em",{parentName:"li"},"Azure Database for MySQL")," Centreon Monitoring Connector on the ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page")))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("h3",{id:"host"},"Host"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Log into Centreon and add a new Host through "Configuration > Hosts".')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("em",{parentName:"p"},"IP Address/FQDN")," field, set the following IP address: '127.0.0.1'.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Select the ",(0,n.kt)("em",{parentName:"p"},"Cloud-Azure-Database-MySQL-custom")," template to apply to the Host.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Once the template applied, some Macros marked as 'Mandatory' hereafter have to be configured.\nThese mandatory Macros differ regarding the custom mode used."))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Two methods can be used to set the Macros:"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"full ID of the Resource (",(0,n.kt)("inlineCode",{parentName:"li"},"/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/Microsoft.Network/<resource_type>/<resource_name>"),")\nin ",(0,n.kt)("em",{parentName:"li"},"AZURERESOURCE")),(0,n.kt)("li",{parentName:"ul"},"Resource Name in ",(0,n.kt)("em",{parentName:"li"},"AZURERESOURCE")," associated with Resource Group (in ",(0,n.kt)("em",{parentName:"li"},"AZURERESOURCEGROUP"),") and Resource Type (in ",(0,n.kt)("em",{parentName:"li"},"AZURERESOURCETYPE"),")"))),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Azure Monitor API",label:"Azure Monitor API",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURECUSTOMMODE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Custom mode 'api'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURESUBSCRIPTION"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Subscription ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURETENANT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Tenant ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURECLIENTID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Client ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURECLIENTSECRET"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Client secret")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ID or name of the API Management resource")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCEGROUP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Associated Resource Group if resource name is used")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCETYPE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Associated Resource Type if resource name is used"))))),(0,n.kt)(o.Z,{value:"Azure AZ CLI",label:"Azure AZ CLI",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURECUSTOMMODE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Custom mode 'azcli'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURESUBSCRIPTION"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Subscription ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ID or name of the API Management resource")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCEGROUP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Associated Resource Group if resource name is used")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCETYPE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Associated Resource Type if resource name is used")))))),(0,n.kt)("h2",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-"},"How to check in the CLI that the configuration is OK and what are the main options for ?"),(0,n.kt)("p",null,"Once the Plugin installed, log into your Centreon Poller CLI using the ",(0,n.kt)("em",{parentName:"p"},"centreon-engine"),"\nuser account and test the Plugin by running the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_azure_database_mysql_api.pl \\\n    --plugin=cloud::azure::database::mysql::plugin \\\n    --mode=cpu \\\n    --custommode=api \\\n    --subscription='xxxxxxxxx' \\\n    --tenant='xxxxxxxxx' \\\n    --client-id='xxxxxxxxx' \\\n    --client-secret='xxxxxxxxx' \\\n    --resource='SQL001ABCD' \\\n    --resource-group='RSG1234' \\\n    --timeframe='900' \\\n    --interval='PT5M' \\\n    --aggregation='Average' \\\n    --warning-cpu-usage='80' \\\n    --critical-cpu-usage='90' \\\n")),(0,n.kt)("p",null,"Expected command output is shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Instance 'SQL001ABCD' Statistic 'average' Metrics CPU percent: 0.44 | 'SQL001ABCD~average#azmysql.cpu.utilization.percentage'=0.44;0:80;0:90;0;100\n")),(0,n.kt)("p",null,"The command above checks the ",(0,n.kt)("em",{parentName:"p"},"CPU")," utilization of an Azure ",(0,n.kt)("em",{parentName:"p"},"Azure Database for MySQL")," instance using the 'api' custom-mode\n(",(0,n.kt)("inlineCode",{parentName:"p"},"--plugin=cloud::azure::database::mysql::plugin --mode=cpu --custommode=api"),").\nThis instance is identified by its id (",(0,n.kt)("inlineCode",{parentName:"p"},"--resource='SQL001ABCD'"),") and its associated group (",(0,n.kt)("inlineCode",{parentName:"p"},"--resource-group='RSG1234'"),").\nThe authentication parameters to be used with the custom mode are specified in the options (",(0,n.kt)("inlineCode",{parentName:"p"},"--subscription='xxxxxxxxx'\n--tenant='xxxxxxx' --client-id='xxxxxxxx' --client-secret='xxxxxxxxxx'"),")."),(0,n.kt)("p",null,"The calculated metrics are the total values (",(0,n.kt)("inlineCode",{parentName:"p"},"--aggregation='Average'"),") of a 900 secondes / 15 min period (",(0,n.kt)("inlineCode",{parentName:"p"},"--timeframe='900'"),")\nwith one sample per 5 minutes (",(0,n.kt)("inlineCode",{parentName:"p"},"--interval='PT5M'"),")."),(0,n.kt)("p",null,"This command would trigger a WARNING alarm if the CPU utilization percentage\n(",(0,n.kt)("inlineCode",{parentName:"p"},"--filter-dimension=\"GatewayResponseCodeCategory eq '2XX'\""),") is reported as over 80 (",(0,n.kt)("inlineCode",{parentName:"p"},"--warning-cpu-usage='80'"),")\nand a CRITICAL alarm over 90 utilization percentage (",(0,n.kt)("inlineCode",{parentName:"p"},"--critical-cpu-usage='90'"),")."),(0,n.kt)("p",null,"All the available options for a given mode can be displayed by adding the ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_azure_database_mysql_api.pl \\\n    --plugin=cloud::azure::database::mysql::plugin \\\n    --mode=cpu \\\n    --help\n")),(0,n.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("h4",{id:"the-azure-credentials-have-changed-and-the-plugin-does-not-work-anymore"},"The Azure credentials have changed and the Plugin does not work anymore"),(0,n.kt)("p",null,"The Plugin is using a cache file to keep connection information and avoid an authentication at each call.\nIf some of the authentication parameters change, you must delete the cache file. "),(0,n.kt)("p",null,"The cache file can be found within  ",(0,n.kt)("inlineCode",{parentName:"p"},"/var/lib/centreon/centplugins/")," folder with a name similar to azure",(0,n.kt)("em",{parentName:"p"},"api"),(0,n.kt)("inlineCode",{parentName:"p"},"<md5>_<md5>_<md5>_<md5>"),".`"),(0,n.kt)("h4",{id:"unknown-login-endpoint-api-returns-error-code-error_name-add---debug-option-for-detailed-message"},(0,n.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: Login endpoint API returns error code 'ERROR_NAME' (add --debug option for detailed message)")),(0,n.kt)("p",null,"It means that some parameters used to authenticate the API request are wrong. The 'ERROR_NAME' string gives\nsome hints about where the problem stands. "),(0,n.kt)("p",null,"As an example, if my Client ID or Client Secret are wrong, 'ERROR_DESC' value will be 'invalid_client'. "),(0,n.kt)("h4",{id:"unknown-500-cant-connect-to-loginmicrosoftonlinecom443"},(0,n.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 500 Can't connect to login.microsoftonline.com:443")),(0,n.kt)("p",null,"This error message means that the Centreon Plugin couldn't successfully connect to the Azure Login API. Check that no third party\ndevice (such as a firewall) is blocking the request. A proxy connection may also be necessary to connect to the API.\nThis can be done by using this option in the command: ",(0,n.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany:8080'"),"."),(0,n.kt)("h4",{id:"unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values"},(0,n.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values")),(0,n.kt)("p",null,"This command result means that Azure does not have any value for the requested period.\nThis result can be overriden by adding the ",(0,n.kt)("inlineCode",{parentName:"p"},"--zeroed")," option in the command. This will force a value of 0 when no metric has\nbeen collected and will prevent the UNKNOWN error message."))}N.isMDXComponent=!0},56759:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cloud-azure-database-mysql-provider-6aa8324a01747b5d00575f2583c27bf1.png"}}]);