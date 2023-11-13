"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[37271],{67223:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>m,toc:()=>u});n(67294);var a=n(3905),o=n(51715),r=n(7626);function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function i(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}const s={id:"applications-emc-ppma-restapi",title:"EMC PPMA Rest API"},c=void 0,m={unversionedId:"integrations/plugin-packs/procedures/applications-emc-ppma-restapi",id:"integrations/plugin-packs/procedures/applications-emc-ppma-restapi",title:"EMC PPMA Rest API",description:"Monitoring Connector Assets",source:"@site/pp/integrations/plugin-packs/procedures/applications-emc-ppma-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-emc-ppma-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/applications-emc-ppma-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-emc-ppma-restapi.md",tags:[],version:"current",frontMatter:{id:"applications-emc-ppma-restapi",title:"EMC PPMA Rest API"},sidebar:"pp",previous:{title:"Dynatrace Rest API",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/applications-monitoring-dynatrace-restapi"},next:{title:"Ericsson ENM API",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/applications-ericsson-enm-api"}},d={},u=[{value:"Monitoring Connector Assets",id:"monitoring-connector-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Host configuration",id:"host-configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How to check in the CLI that the configuration is OK and what are the main options for ?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-",level:3},{value:"Why do I get the following error:",id:"why-do-i-get-the-following-error",level:3},{value:"<code>UNKNOWN: 500 Can&#39;t connect to 10.30.2.79:443</code>",id:"unknown-500-cant-connect-to-1030279443",level:4},{value:"<code>UNKNOWN: 501 Protocol scheme &#39;connect&#39; is not supported</code>",id:"unknown-501-protocol-scheme-connect-is-not-supported",level:4}],h={toc:u},k="wrapper";function g(t){var{components:e}=t,n=i(t,["components"]);return(0,a.kt)(k,l(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){p(t,e,n[e])}))}return t}({},h,n),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector Assets"),(0,a.kt)("h3",{id:"monitored-objects"},"Monitored Objects"),(0,a.kt)("p",null,"The Monitoring Connector EMC PowerPath Management Appliance collects metrics for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Hosts")),(0,a.kt)("h3",{id:"collected-metrics"},"Collected Metrics"),(0,a.kt)(o.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"Hosts",label:"Hosts",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"host status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Host powerpath status, possible to set string-based alerts"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"hostname"),"#host.paths.total.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of total paths for the host"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"hostname"),"#host.paths.dead.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of dead paths for the host"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"hostname"),"#host.volumes.total.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of volumes attached"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"hostname"),"#host.volumes.dead.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of dead volumes attached"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"hostname"),"#host.volumes.degraded.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of degraded volumes attached"),(0,a.kt)("td",{parentName:"tr",align:"left"})))))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To control your EMC PPMA, the Rest API must be configured."),(0,a.kt)("p",null,"E.g: ",(0,a.kt)("a",{parentName:"p",href:"https://dl.dell.com/content/docu98223_PowerPath-Management-Appliance-3.x-Rest-API-Reference.pdf?language=en_US"},"https://dl.dell.com/content/docu98223_PowerPath-Management-Appliance-3.x-Rest-API-Reference.pdf?language=en_US")),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)(o.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Emc-Ppma-Restapi\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,a.kt)("em",{parentName:"li"},"Emc PPMA Rest API")," Monitoring Connector"))),(0,a.kt)(r.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Emc-Ppma-Restapi\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Central server, install the Centreon Monitoring Connector from the RPM:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-emc-ppma-restapi\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,a.kt)("em",{parentName:"li"},"Emc PPMA Rest API")," Monitoring Connector")))),(0,a.kt)("h2",{id:"host-configuration"},"Host configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add a new Host and apply the ",(0,a.kt)("em",{parentName:"li"},"App-Emc-Ppma-Restapi-custom")," Host Template")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Once the template applied, some Macros have to be configured:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"PPMAAPIPORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Port used (Default: 443)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"PPMAAPIPROTO"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Specify https if needed (Default: 'https')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"PPMAAPIUSERNAME"),(0,a.kt)("td",{parentName:"tr",align:"left"},"EMC PPMA username")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"PPMAAPIPASSWORD"),(0,a.kt)("td",{parentName:"tr",align:"left"},"EMC PPMA password")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"PPMAAPIEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command (eg. a --verbose flag)")))),(0,a.kt)("p",null,"By default, Host Template ",(0,a.kt)("em",{parentName:"p"},"App-Emc-Ppma-Restapi")," doesn't have Service Template attached. You may want to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"attach Service Template to Host Template ",(0,a.kt)("em",{parentName:"li"},"App-Emc-Ppma-Restapi-custom")),(0,a.kt)("li",{parentName:"ul"},"use service discovery")),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-"},"How to check in the CLI that the configuration is OK and what are the main options for ?"),(0,a.kt)("p",null,"Once the Plugin installed, log into your Poller using the ",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," user account and test by running the following command\n(Parameters such as ",(0,a.kt)("inlineCode",{parentName:"p"},"api-username")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"api-password"),"have to be adjusted):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_emc_ppma_restapi.pl \\\n    --plugin=apps::emc::ppma::restapi::plugin \\\n    --mode=hosts \\\n    --hostname='10.30.2.79' \\\n    --port='443' \\\n    --proto='https' \\\n    --api-username='myapiusername' \\\n    --api-password='myapipassword' \\\n    --filter-name='centreontest' \\\n    --warning-paths-dead='0' \\\n    --critical-paths-dead='1' \\\n    --verbose\n")),(0,a.kt)("p",null,"Output example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"OK: All hosts are ok | 'centreontest1#host.paths.total.count'=976;;;0; 'centreontest1#host.paths.dead.count'=0;0;0:1;0;976 'centreontest1#host.volumes.total.count'=136;;;0; 'centreontest1#host.volumes.dead.count'=0;;;0;136 'centreontest1#host.volumes.degraded.count'=0;;;0;136 'centreontest2#host.paths.total.count'=976;;;0; 'centreontest2#host.paths.dead.count'=0;0;0:1;0;976 'centreontest2#host.volumes.total.count'=136;;;0; 'centreontest2#host.volumes.dead.count'=0;;;0;136 'centreontest2#host.volumes.degraded.count'=0;;;0;136\nchecking host 'centreontest1'\n    status: powerPathManagedpath total: 976, dead: 0\n    volume total: 136, dead: 0, degraded: 0\nchecking host 'centreontest2'\n    status: powerPathManagedpath total: 976, dead: 0\n    volume total: 136, dead: 0, degraded: 0\n")),(0,a.kt)("p",null,"The command above monitors hosts named ",(0,a.kt)("em",{parentName:"p"},"centreontest")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--filter-name='centreontest'"),") and managed by EMC PPMA  (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=hosts"),")."),(0,a.kt)("p",null,"It uses api-username (",(0,a.kt)("inlineCode",{parentName:"p"},"--api-username='myapiusername'"),"), an api-password (",(0,a.kt)("inlineCode",{parentName:"p"},"--api-password='myapipassword'"),")\nand it connects to the host ",(0,a.kt)("em",{parentName:"p"},"10.30.2.79")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--hostname='10.30.2.79'"),")\non the port 443 (",(0,a.kt)("inlineCode",{parentName:"p"},"--port='443'"),") using https (",(0,a.kt)("inlineCode",{parentName:"p"},"--proto='https'"),")."),(0,a.kt)("p",null,"This command would trigger a WARNING alert if the number of dead paths is over 0 (",(0,a.kt)("inlineCode",{parentName:"p"},"--warning-paths-dead='0'"),") and a CRITICAL alarm over 1 (",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-paths-dead='1'"),")."),(0,a.kt)("p",null,"All the options that can be used with this plugin can be found over the ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_emc_ppma_restapi.pl \\\n    --plugin=apps::emc::ppma::restapi::plugin \\\n    --mode=hosts \\\n    --help\n")),(0,a.kt)("h3",{id:"why-do-i-get-the-following-error"},"Why do I get the following error:"),(0,a.kt)("h4",{id:"unknown-500-cant-connect-to-1030279443"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 500 Can't connect to 10.30.2.79:443")),(0,a.kt)("p",null,"This error message means that the Centreon Plugin couldn't successfully connect to the EMC PPMA Rest API.\nCheck that no third party device (such as a firewall) is blocking the request.\nA proxy connection may also be necessary to connect to the API. This can be done by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany:8080'")," option in the command."),(0,a.kt)("h4",{id:"unknown-501-protocol-scheme-connect-is-not-supported"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 501 Protocol scheme 'connect' is not supported")),(0,a.kt)("p",null,"When using a proxy to connect to the EMC PPMA Rest API, this error message means that the Centreon Plugin library does not support\nthe proxy connection protocol."),(0,a.kt)("p",null,"In order to prevent this issue, use the ",(0,a.kt)("em",{parentName:"p"},"curl")," HTTP backend by adding the following option to the command: ",(0,a.kt)("inlineCode",{parentName:"p"},"--http-backend='curl'"),"."))}g.isMDXComponent=!0}}]);