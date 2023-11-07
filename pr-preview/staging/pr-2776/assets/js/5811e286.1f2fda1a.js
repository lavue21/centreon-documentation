"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[97381],{30673:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>m});a(67294);var n=a(3905),r=a(51715),o=a(7626);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const d={id:"cloud-azure-network-loadbalancer",title:"Azure Load Balancer"},c=void 0,s={unversionedId:"integrations/plugin-packs/procedures/cloud-azure-network-loadbalancer",id:"integrations/plugin-packs/procedures/cloud-azure-network-loadbalancer",title:"Azure Load Balancer",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/cloud-azure-network-loadbalancer.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-azure-network-loadbalancer",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/cloud-azure-network-loadbalancer",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/cloud-azure-network-loadbalancer.md",tags:[],version:"current",frontMatter:{id:"cloud-azure-network-loadbalancer",title:"Azure Load Balancer"},sidebar:"pp",previous:{title:"Azure Kubernetes Service",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/cloud-azure-compute-aks"},next:{title:"Azure Log Analytics",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/cloud-azure-management-loganalytics"}},u={},m=[{value:"Overview",id:"overview",level:2},{value:"Monitoring Connector Assets",id:"monitoring-connector-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Discovery rules",id:"discovery-rules",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"FAQ",id:"faq",level:2},{value:"How to check in the CLI that the configuration is OK and what are the main options for ?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"<code>UNKNOWN: Login endpoint API returns error code &#39;ERROR_NAME&#39; (add --debug option for detailed message)</code>",id:"unknown-login-endpoint-api-returns-error-code-error_name-add---debug-option-for-detailed-message",level:4},{value:"The Azure credentials have changed and the Plugin does not work anymore",id:"the-azure-credentials-have-changed-and-the-plugin-does-not-work-anymore",level:4},{value:"UNKNOWN: 500 Can&#39;t connect to login.microsoftonline.com:443",id:"unknown-500-cant-connect-to-loginmicrosoftonlinecom443",level:4}],k={toc:m},g="wrapper";function h(e){var{components:t}=e,d=p(e,["components"]);return(0,n.kt)(g,i(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){l(e,t,a[t])}))}return e}({},k,d),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Azure Load Balancer operates at layer four of the Open Systems Interconnection (OSI) model. It's the single point of contact for\nclients. Load Balancer distributes inbound flows that arrive at the load balancer's front end to backend pool instances.\nThese flows are according to configured load balancing rules and health probes. The backend pool instances can be Azure Virtual\nMachines or instances in a virtual machine scale set."),(0,n.kt)("p",null,"The Centreon Monitoring Connector ",(0,n.kt)("em",{parentName:"p"},"Azure Load Balancer")," can rely on Azure API or Azure CLI to collect the metrics related to the\nLoad Balancer service."),(0,n.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector Assets"),(0,n.kt)("h3",{id:"monitored-objects"},"Monitored Objects"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Azure ",(0,n.kt)("em",{parentName:"li"},"Load Balancer")," instances")),(0,n.kt)("h3",{id:"discovery-rules"},"Discovery rules"),(0,n.kt)("p",null,"The Centreon Monitoring Connector ",(0,n.kt)("em",{parentName:"p"},"Azure Load Balancer")," includes a Host Discovery ",(0,n.kt)("em",{parentName:"p"},"provider")," to automatically discover the Azure instancesof a given\nsubscription and add them to the Centreon configuration.\nThis provider is named ",(0,n.kt)("strong",{parentName:"p"},"Microsoft Azure Load Balancer"),":"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(1400).Z,width:"606",height:"186"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This discovery feature is only compatible with the 'api' custom mode. 'azcli' is not supported yet.")),(0,n.kt)("p",null,"More information about the Host Discovery module is available in the Centreon documentation:\n",(0,n.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/hosts-discovery"},"Host Discovery")),(0,n.kt)("h3",{id:"collected-metrics"},"Collected Metrics"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Datapath",label:"Datapath",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"loadbalancer.datapath.availability.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Datapath availability"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,n.kt)(o.Z,{value:"Healthprobe",label:"Healthprobe",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"loadbalancer.healthprobe.availability.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Healthprobe availability"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,n.kt)(o.Z,{value:"Snat",label:"Snat",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"loadbalancer.snat.ports.allocated.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of allocated SNAT ports"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"loadbalancer.snat.ports.used.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of used SNAT ports"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"loadbalancer.snat.connection.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of current SNAT connections"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count"))))),(0,n.kt)(o.Z,{value:"Throughput",label:"Throughput",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"loadbalancer.throughput.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Processed data throughput"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"loadbalancer.packets.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Processed packets throughput"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")))))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"Please find all the prerequisites needed for Centreon to get information from Azure on the ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/getting-started/how-to-guides/azure-credential-configuration"},"dedicated page"),"."),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor Azure Load Balancer resources:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Azure-Network-LoadBalancer-Api\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,n.kt)("em",{parentName:"li"},"Azure Load Balancer")," Centreon Monitoring Connector on the ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page"))),(0,n.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor Azure Load Balancer resources:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Azure-Network-LoadBalancer-Api\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Monitoring Connector RPM on the Centreon Central server:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-azure-network-loadbalancer.noarch\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,n.kt)("em",{parentName:"li"},"Azure Load Balancer")," Centreon Monitoring Connector on the ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page")))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("h3",{id:"host"},"Host"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Log into Centreon and add a new Host through "Configuration > Hosts".')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("em",{parentName:"p"},"IP Address/FQDN")," field, set the following IP address: '127.0.0.1'.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Select the ",(0,n.kt)("em",{parentName:"p"},"Cloud-Azure-Network-LoadBalancer-custom")," template to apply to the Host.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Once the template applied, some Macros marked as 'Mandatory' hereafter have to be configured.\nThese mandatory Macros differ regarding the custom mode used:"))),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Azure Monitor API",label:"Azure Monitor API",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURECUSTOMMODE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Custom mode 'api'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURESUBSCRIPTION"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Subscription ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURETENANT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Tenant ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURECLIENTID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Client ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURECLIENTSECRET"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Client secret")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Id of the Load Balancer instance"))))),(0,n.kt)(o.Z,{value:"Azure AZ CLI",label:"Azure AZ CLI",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURECUSTOMMODE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Custom mode 'azcli'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURESUBSCRIPTION"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Subscription ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Id of the Load Balancer instance")))))),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("h3",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-"},"How to check in the CLI that the configuration is OK and what are the main options for ?"),(0,n.kt)("p",null,"Once the Plugin installed, log into your Centreon Poller CLI using the ",(0,n.kt)("em",{parentName:"p"},"centreon-engine"),"\nuser account and test the Plugin by running the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_azure_network_loadbalancer_api.pl \\\n    --plugin=cloud::azure::network::loadbalancer::plugin \\\n    --mode=datapath \\\n    --custommode=api \\\n    --subscription='xxxxxxxxx' \\\n    --tenant='xxxxxxxxx' \\\n    --client-id='xxxxxxxxx' \\\n    --client-secret='xxxxxxxxx' \\\n    --resource='LBA001ABCD' \\\n    --timeframe='900' \\\n    --interval='PT5M' \\\n    --aggregation='average' \\\n    --warning-datapath-availability-percentage='95:' \\\n    --critical-datapath-availability-percentage='50:' \\\n    --verbose\n")),(0,n.kt)("p",null,"Expected command output is shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Instance 'LBA001ABCD' Statistic 'average' Metrics Data Path (VIP) Availability: 100.00% |\n'LBA001ABCD~average#loadbalancer.datapath.availability.percentage'=100.00%;;;0;100\n")),(0,n.kt)("p",null,"The command collects the ",(0,n.kt)("em",{parentName:"p"},"datapath")," availability rate of a Azure Load Balancer instance using the 'api' custom-mode\n(",(0,n.kt)("inlineCode",{parentName:"p"},"--plugin=cloud::azure::network::loadbalancer::plugin --mode=datapath --custommode=api"),").\nThis Load Balancer is identified by its id (",(0,n.kt)("inlineCode",{parentName:"p"},"--resource='LBA001ABCD'"),") and the authentication parameters\nto be used with the custom mode are specified in the options (",(0,n.kt)("inlineCode",{parentName:"p"},"--subscription='xxxxxxxxx' --tenant='xxxxxxx'\n--client-id='xxxxxxxx' --client-secret='xxxxxxxxxx'"),")."),(0,n.kt)("p",null,"The calculated metrics are an average (",(0,n.kt)("inlineCode",{parentName:"p"},"--aggregation='average'"),") of values on a 900 secondes / 15 min period (",(0,n.kt)("inlineCode",{parentName:"p"},"--timeframe='900'"),")\nwith one sample per 5 minutes (",(0,n.kt)("inlineCode",{parentName:"p"},"--interval='PT5M'"),")."),(0,n.kt)("p",null,"This command would trigger a WARNING alarm if the reported availability rate during the period is below 95%\n(",(0,n.kt)("inlineCode",{parentName:"p"},"--warning-datapath-availability-percentage='95:'"),") and a CRITICAL alarm below 50% (",(0,n.kt)("inlineCode",{parentName:"p"},"--critical-datapath-availability-percentage='50:'"),")."),(0,n.kt)("p",null,"All the available options for a given mode can be displayed by adding the ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_azure_network_loadbalancer_api.pl \\\n    --plugin=cloud::azure::network::loadbalancer::plugin \\\n    --mode=datapath \\\n    --help\n")),(0,n.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("h4",{id:"unknown-login-endpoint-api-returns-error-code-error_name-add---debug-option-for-detailed-message"},(0,n.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: Login endpoint API returns error code 'ERROR_NAME' (add --debug option for detailed message)")),(0,n.kt)("p",null,"When I run my command I obtain the following error message:\n",(0,n.kt)("inlineCode",{parentName:"p"},"UNKNOWN: Login endpoint API returns error code 'ERROR_NAME' (add --debug option for detailed message)"),"."),(0,n.kt)("p",null,"It means that some parameters used to authenticate the API request are wrong. The 'ERROR_NAME' string gives\nsome hints about where the problem stands. "),(0,n.kt)("p",null,"As an example, if my Client ID or Client Secret are wrong, 'ERROR_DESC' value will be 'invalid_client'. "),(0,n.kt)("h4",{id:"the-azure-credentials-have-changed-and-the-plugin-does-not-work-anymore"},"The Azure credentials have changed and the Plugin does not work anymore"),(0,n.kt)("p",null,"The Plugin is using a cache file to keep connection information and avoid an authentication at each call.\nIf some of the authentication parameters change, you must delete the cache file. "),(0,n.kt)("p",null,"The cache file can be found within  ",(0,n.kt)("inlineCode",{parentName:"p"},"/var/lib/centreon/centplugins/")," folder with a name similar to azure",(0,n.kt)("em",{parentName:"p"},"api"),(0,n.kt)("inlineCode",{parentName:"p"},"<md5>_<md5>_<md5>_<md5>"),"."),(0,n.kt)("h4",{id:"unknown-500-cant-connect-to-loginmicrosoftonlinecom443"},"UNKNOWN: 500 Can't connect to login.microsoftonline.com:443"),(0,n.kt)("p",null,"This error message means that the Centreon Plugin couldn't successfully connect to the Azure Login API. Check that no third party\ndevice (such as a firewall) is blocking the request. A proxy connection may also be necessary to connect to the API.\nThis can be done by using this option in the command: ",(0,n.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany:8080'"),"."))}h.isMDXComponent=!0},1400:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cloud-azure-network-loadbalancer-provider-bf7bb143e7ea45e3f65065e409e1586d.png"}}]);