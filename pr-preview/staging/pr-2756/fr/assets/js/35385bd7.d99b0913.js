"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[40751],{78661:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>h,frontMatter:()=>p,metadata:()=>d,toc:()=>g});n(67294);var a=n(3905),r=n(51715),o=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"applications-cisco-dnac-restapi",title:"Cisco DNA Center Rest API"},s=void 0,d={unversionedId:"integrations/plugin-packs/procedures/applications-cisco-dnac-restapi",id:"integrations/plugin-packs/procedures/applications-cisco-dnac-restapi",title:"Cisco DNA Center Rest API",description:"Monitoring Connector Assets",source:"@site/pp/integrations/plugin-packs/procedures/applications-cisco-dnac-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-cisco-dnac-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/applications-cisco-dnac-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-cisco-dnac-restapi.md",tags:[],version:"current",frontMatter:{id:"applications-cisco-dnac-restapi",title:"Cisco DNA Center Rest API"},sidebar:"pp",previous:{title:"Cisco CMS",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/applications-cisco-cms-restapi"},next:{title:"Cisco ISE",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/applications-cisco-ise-restapi"}},m={},g=[{value:"Monitoring Connector Assets",id:"monitoring-connector-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Host configuration",id:"host-configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How to check in the CLI that the configuration is OK and what are the main options for ?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-",level:3},{value:"Why do I get the following error:",id:"why-do-i-get-the-following-error",level:3},{value:"<code>UNKNOWN: 500 Can&#39;t connect to 10.30.2.79:443</code>",id:"unknown-500-cant-connect-to-1030279443",level:4},{value:"<code>UNKNOWN: 501 Protocol scheme &#39;connect&#39; is not supported</code>",id:"unknown-501-protocol-scheme-connect-is-not-supported",level:4}],k={toc:g},u="wrapper";function h(e){var{components:t}=e,n=c(e,["components"]);return(0,a.kt)(u,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector Assets"),(0,a.kt)("h3",{id:"monitored-objects"},"Monitored Objects"),(0,a.kt)("p",null,"The Monitoring Connector includes monitoring of Network devices and Sites."),(0,a.kt)("h3",{id:"collected-metrics"},"Collected Metrics"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Network-devices",label:"Network-devices",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"network.devices.total.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of devices"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"categoryname"),"#category.network.devices.health.good.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of good health devices by category"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"categoryname"),"#category.network.devices.health.good.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of good health devices by category"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"categoryname"),"#category.network.devices.health.fair.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of fair health devices by category"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"categoryname"),"#category.network.devices.health.fair.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of fair health devices by category"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"categoryname"),"#category.network.devices.health.bad.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of bad health devices by category"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"categoryname"),"#category.network.devices.health.bad.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of bad health devices by category"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"categoryname"),"#category.network.devices.health.unmonitored.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of unmonitored health devices by category"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"categoryname"),"#category.network.devices.health.unmonitored.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of unmonitored health devices by category"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,a.kt)(o.Z,{value:"Sites",label:"Sites",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"sitename"),"#site.network.devices.healthy.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of healthy devices"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"sitename"),"#site.network.devices.healthy.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of healthy devices"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"sitename"),"#site.clients.healthy.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of healthy clients"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"sitename"),"#site.clients.healthy.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of healthy clients"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")))))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To control your Cisco DNA Center, the Rest API must be configured."),(0,a.kt)("p",null,"E.g: ",(0,a.kt)("inlineCode",{parentName:"p"},"https://developer.cisco.com/docs/dna-center/#!cisco-dna-center-platform-overview")),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Cisco-Dnac-Restapi\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,a.kt)("em",{parentName:"li"},"Cisco DNA Center Rest API")," Monitoring Connector"))),(0,a.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Cisco-Dnac-Restapi\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Central server, install the Centreon Monitoring Connector from the RPM:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-cisco-dnac-restapi\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,a.kt)("em",{parentName:"li"},"Cisco DNA Center Rest API")," Monitoring Connector")))),(0,a.kt)("h2",{id:"host-configuration"},"Host configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add a new Host and apply the ",(0,a.kt)("em",{parentName:"li"},"App-Cisco-Dnac-Restapi-custom")," Host Template")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Once the template applied, some Macros have to be configured:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"DNACAPIPORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Port used (Default: 443)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"DNACAPIPROTO"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Specify https if needed (Default: 'https')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"DNACAPIUSERNAME"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Cisco DNA Center username")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"DNACAPIPASSWORD"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Cisco DNA Center password")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"DNACAPIEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command (eg. a --verbose flag)")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-"},"How to check in the CLI that the configuration is OK and what are the main options for ?"),(0,a.kt)("p",null,"Once the Plugin installed, log into your poller using the ",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," user account and test by running the following command\n(Parameters such as ",(0,a.kt)("inlineCode",{parentName:"p"},"api-username")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"api-password"),"have to be adjusted):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_cisco_dnac_restapi.pl \\\n    --plugin=apps::cisco::dnac::restapi::plugin \\\n    --mode=network-devices \\\n    --hostname='10.30.2.79' \\\n    --port='443' \\\n    --proto='https' \\\n    --api-username='myapiusername' \\\n    --api-password='myapipassword' \\\n    --filter-category-name='Access|Core' \\\n    --critical-category-devices-health-bad-usage-prct='0' \\\n    --verbose\n")),(0,a.kt)("p",null,"Output example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"OK: All network categories are ok | 'network.devices.total.count'=14;;;0; 'Access#category.network.devices.health.good.count'=13;;;0;13 'Access#category.network.devices.health.good.percentage'=13.00;;;0;100 'Access#category.network.devices.health.fair.count'=0;;;0;13 'Access#category.network.devices.health.fair.percentage'=0.00;;;0;100 'Access#category.network.devices.health.bad.count'=0;;;0;13 'Access#category.network.devices.health.bad.percentage'=0.00;;;0;100 'Access#category.network.devices.health.unmonitored.count'=0;;;0;13 'Access#category.network.devices.health.unmonitored.percentage'=0.00;;;0;100 'Core#category.network.devices.health.good.count'=1;;;0;1 'Core#category.network.devices.health.good.percentage'=1.00;;;0;100 'Core#category.network.devices.health.fair.count'=0;;;0;1 'Core#category.network.devices.health.fair.percentage'=0.00;;;0;100 'Core#category.network.devices.health.bad.count'=0;;;0;1 'Core#category.network.devices.health.bad.percentage'=0.00;;;0;100 'Core#category.network.devices.health.unmonitored.count'=0;;;0;1 'Core#category.network.devices.health.unmonitored.percentage'=0.00;;;0;100\nchecking network category 'Access'\n    good devices: 100.00% (13 on 13)\n    fair devices: 0.00% (0 on 13)\n    bad devices: 0.00% (0 on 13)\n    unmonitored devices: 0.00% (0 on 13)\nchecking network category 'Core'\n    good devices: 100.00% (1 on 1)\n    fair devices: 0.00% (0 on 1)\n    bad devices: 0.00% (0 on 1)\n    unmonitored devices: 0.00% (0 on 1)\n")),(0,a.kt)("p",null,"The command above monitors Cisco DNA Center network devices usage  (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=network-devices"),") in category ",(0,a.kt)("em",{parentName:"p"},"Access")," and ",(0,a.kt)("em",{parentName:"p"},"Core")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--filter-category-name='Access|Core'"),")."),(0,a.kt)("p",null,"It uses api-username (",(0,a.kt)("inlineCode",{parentName:"p"},"--api-username='myapiusername'"),"), an api-password (",(0,a.kt)("inlineCode",{parentName:"p"},"--api-password='myapipassword'"),")\nand it connects to the host ",(0,a.kt)("em",{parentName:"p"},"10.30.2.79")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--hostname='10.30.2.79'"),")\non the port 7002 (",(0,a.kt)("inlineCode",{parentName:"p"},"--port='443'"),") using https (",(0,a.kt)("inlineCode",{parentName:"p"},"--proto='https'"),")."),(0,a.kt)("p",null,"This command would trigger a CRITICAL alert if the number of bad health devices is over 0% (--critical-category-devices-health-bad-usage-prct='0')."),(0,a.kt)("p",null,"All the options that can be used with this plugin can be found over the ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_cisco_dnac_restapi.pl --plugin=apps::cisco::dnac::restapi::plugin \\\n    --mode=network-devices \\\n    --help\n")),(0,a.kt)("h3",{id:"why-do-i-get-the-following-error"},"Why do I get the following error:"),(0,a.kt)("h4",{id:"unknown-500-cant-connect-to-1030279443"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 500 Can't connect to 10.30.2.79:443")),(0,a.kt)("p",null,"This error message means that the Centreon Plugin couldn't successfully connect to the Cisco DNA Center API.\nCheck that no third party device (such as a firewall) is blocking the request.\nA proxy connection may also be necessary to connect to the API. This can be done by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany:8080'")," option in the command."),(0,a.kt)("h4",{id:"unknown-501-protocol-scheme-connect-is-not-supported"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 501 Protocol scheme 'connect' is not supported")),(0,a.kt)("p",null,"When using a proxy to connect to the Cisco DNA Center API, this error message means that the Centreon Plugin library does not support\nthe proxy connection protocol."),(0,a.kt)("p",null,"In order to prevent this issue, use the ",(0,a.kt)("em",{parentName:"p"},"curl")," HTTP backend by adding the following option to the command: ",(0,a.kt)("inlineCode",{parentName:"p"},"--http-backend='curl'"),"."))}h.isMDXComponent=!0}}]);