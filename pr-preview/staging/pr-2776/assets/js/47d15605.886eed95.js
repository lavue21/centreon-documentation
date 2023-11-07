"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[24475],{27261:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>m,default:()=>N,frontMatter:()=>s,metadata:()=>c,toc:()=>d});a(67294);var n=a(3905),r=a(51715),o=a(7626);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const s={id:"applications-commvault-commserve-restapi",title:"Commvault CommServe Rest API"},m=void 0,c={unversionedId:"integrations/plugin-packs/procedures/applications-commvault-commserve-restapi",id:"integrations/plugin-packs/procedures/applications-commvault-commserve-restapi",title:"Commvault CommServe Rest API",description:"Monitoring Connector Assets",source:"@site/pp/integrations/plugin-packs/procedures/applications-commvault-commserve-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-commvault-commserve-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/applications-commvault-commserve-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-commvault-commserve-restapi.md",tags:[],version:"current",frontMatter:{id:"applications-commvault-commserve-restapi",title:"Commvault CommServe Rest API"},sidebar:"pp",previous:{title:"Cisco SSMS",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/applications-cisco-ssms-restapi"},next:{title:"Control-M Rest API",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/applications-controlm-restapi"}},u={},d=[{value:"Monitoring Connector Assets",id:"monitoring-connector-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Host configuration",id:"host-configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How to check in the CLI that the configuration is OK and what are the main options for ?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-",level:3},{value:"Why do I get the following error:",id:"why-do-i-get-the-following-error",level:3},{value:"<code>UNKNOWN: 500 Can&#39;t connect to 10.30.2.79:443</code>",id:"unknown-500-cant-connect-to-1030279443",level:4},{value:"<code>UNKNOWN: 501 Protocol scheme &#39;connect&#39; is not supported</code>",id:"unknown-501-protocol-scheme-connect-is-not-supported",level:4}],g={toc:d},k="wrapper";function N(t){var{components:e}=t,a=p(t,["components"]);return(0,n.kt)(k,i(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){l(t,e,a[e])}))}return t}({},g,a),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector Assets"),(0,n.kt)("h3",{id:"monitored-objects"},"Monitored Objects"),(0,n.kt)("p",null,"The Monitoring Connector includes monitoring of Alerts, Jobs, Media-agents and Storage-pools."),(0,n.kt)("h3",{id:"collected-metrics"},"Collected Metrics"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Alerts",label:"Alerts",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"alert status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"alert status, possible to set string-based alerts"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"alerts.total.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of alerts"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"alerts.critical.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of critical alerts"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"alerts.warning.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of warning alerts"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"alerts.info.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of informational alerts"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(o.Z,{value:"Jobs",label:"Jobs",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"job status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of on job status"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"job long status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status on job time duration"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"jobs.total.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of jobs"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(o.Z,{value:"Media-agents",label:"Media-agents",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"media agent status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Media agent status"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"media.agents.total.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of media agents"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(o.Z,{value:"Storage-pools",label:"Storage-pools",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"storage status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Storage status, possible to set string-based alerts"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"storagepoolname"),"#storagepool.space.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Space usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"storagepoolname"),"#storagepool.space.free.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Free space"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"storagepoolname"),"#storagepool.space.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Space usage in percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")))))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"To control your Commvault CommServe, the Rest API must be configured."),(0,n.kt)("p",null,"E.g: ",(0,n.kt)("a",{parentName:"p",href:"https://api.commvault.com/"},"https://api.commvault.com/")),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Commvault-Commserve-Restapi\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,n.kt)("em",{parentName:"li"},"Commvault Commserve Rest API")," Monitoring Connector"))),(0,n.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Commvault-Commserve-Restapi\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Central server, install the Centreon Monitoring Connector from the RPM:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-commvault-commserve-restapi\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,n.kt)("em",{parentName:"li"},"Commvault Commserve Rest API")," Monitoring Connector")))),(0,n.kt)("h2",{id:"host-configuration"},"Host configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add a new Host and apply the ",(0,n.kt)("em",{parentName:"li"},"App-Commvault-Commserve-Restapi-custom")," Host Template")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Once the template applied, some Macros have to be configured:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"COMMSERVEAPIPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Port used (Default: 443)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"COMMSERVEAPIPROTO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specify https if needed (Default: 'https')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"COMMSERVEAPIUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Commvault CommServe username")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"COMMSERVEAPIPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Commvault CommServe password")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"COMMSERVEAPIPROTO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command (eg. a --verbose flag)")))),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("h3",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-"},"How to check in the CLI that the configuration is OK and what are the main options for ?"),(0,n.kt)("p",null,"Once the Plugin installed, log into your poller using the ",(0,n.kt)("em",{parentName:"p"},"centreon-engine")," user account and test by running the following command\n(Parameters such as ",(0,n.kt)("inlineCode",{parentName:"p"},"api-username")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"api-password"),"have to be adjusted):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_commvault_commserve_restapi.pl \\\n    --plugin=apps::backup::commvault::commserve::restapi::plugin \\\n    --mode=storage-pools \\\n    --hostname='10.30.2.79' \\\n    --port='443' \\\n    --proto='https' \\\n    --api-username='myapiusername' \\\n    --api-password='myapipassword' \\\n    --filter-name='IPL' \\\n    --warning-space-usage-prct='90' \\\n    --critical-space-usage-prct='95' \\\n    --verbose\n")),(0,n.kt)("p",null,"Output example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"OK: All storage pools are ok | 'IPL1-TEST#storagepool.space.usage.bytes'=22104757B;;;0;37192871 'IPL1-TEST#storagepool.space.free.bytes'=15088114B;;;0;37192871 'IPL1-TEST#storagepool.space.usage.percentage'=59.43%;90;95;0;100 'IPL2-TEST#storagepool.space.usage.bytes'=6469140B;;;0;7340013 'IPL2-TEST#storagepool.space.free.bytes'=870873B;;;0;7340013 'IPL2-TEST#storagepool.space.usage.percentage'=88.14%;90;95;0;100\nStorage pool 'IPL1-TEST' status: online, space usage total: 35.47 MB used: 21.08 MB (59.43%) free: 14.39 MB (40.57%)\nStorage pool 'IPL2-TEST' status: online, space usage total: 7.00 MB used: 6.17 MB (88.14%) free: 850.46 KB (11.86%)\n")),(0,n.kt)("p",null,"The command above monitors Commvault CommServe storage pools usage  (",(0,n.kt)("inlineCode",{parentName:"p"},"--mode=storage-pools"),") named ",(0,n.kt)("em",{parentName:"p"},"IPL")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--filter-name='IPL'"),")."),(0,n.kt)("p",null,"It uses api-username (",(0,n.kt)("inlineCode",{parentName:"p"},"--api-username='myapiusername'"),"), an api-password (",(0,n.kt)("inlineCode",{parentName:"p"},"--api-password='myapipassword'"),")\nand it connects to the host ",(0,n.kt)("em",{parentName:"p"},"10.30.2.79")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--hostname='10.30.2.79'"),")\non the port 443 (",(0,n.kt)("inlineCode",{parentName:"p"},"--port='443'"),") using https (",(0,n.kt)("inlineCode",{parentName:"p"},"--proto='https'"),")."),(0,n.kt)("p",null,"This command would trigger a WARNING alert if the space used to raise over 90% of the storage capacity (",(0,n.kt)("inlineCode",{parentName:"p"},"--warning-space-usage-prct='60'"),") and a CRITICAL alarm over 95% (",(0,n.kt)("inlineCode",{parentName:"p"},"--critical-space-usage-prct='95'"),")."),(0,n.kt)("p",null,"All the options that can be used with this plugin can be found over the ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_commvault_commserve_restapi.pl \\\n    --plugin=apps::backup::commvault::commserve::restapi::plugin \\\n    --mode=storage-pools \\\n    --help\n")),(0,n.kt)("h3",{id:"why-do-i-get-the-following-error"},"Why do I get the following error:"),(0,n.kt)("h4",{id:"unknown-500-cant-connect-to-1030279443"},(0,n.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 500 Can't connect to 10.30.2.79:443")),(0,n.kt)("p",null,"This error message means that the Centreon Plugin couldn't successfully connect to the Commvault CommServe Rest API.\nCheck that no third party device (such as a firewall) is blocking the request.\nA proxy connection may also be necessary to connect to the API. This can be done by using the ",(0,n.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany:8080'")," option in the command."),(0,n.kt)("h4",{id:"unknown-501-protocol-scheme-connect-is-not-supported"},(0,n.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 501 Protocol scheme 'connect' is not supported")),(0,n.kt)("p",null,"When using a proxy to connect to the Commvault CommServe Rest API, this error message means that the Centreon Plugin library does not support\nthe proxy connection protocol."),(0,n.kt)("p",null,"In order to prevent this issue, use the ",(0,n.kt)("em",{parentName:"p"},"curl")," HTTP backend by adding the following option to the command: ",(0,n.kt)("inlineCode",{parentName:"p"},"--http-backend='curl'"),"."))}N.isMDXComponent=!0}}]);