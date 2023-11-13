"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[91586],{64082:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>m,toc:()=>d});n(67294);var r=n(3905),a=n(51715),o=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={id:"network-cisco-callmanager-sxml",title:"Cisco Callmanager SXML"},p=void 0,m={unversionedId:"integrations/plugin-packs/procedures/network-cisco-callmanager-sxml",id:"integrations/plugin-packs/procedures/network-cisco-callmanager-sxml",title:"Cisco Callmanager SXML",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/network-cisco-callmanager-sxml.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-cisco-callmanager-sxml",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/network-cisco-callmanager-sxml",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/network-cisco-callmanager-sxml.md",tags:[],version:"current",frontMatter:{id:"network-cisco-callmanager-sxml",title:"Cisco Callmanager SXML"},sidebar:"pp",previous:{title:"Cisco Call Manager",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/network-cisco-callmanager-snmp"},next:{title:"Cisco ESA Rest API",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/network-cisco-esa-restapi"}},u={},d=[{value:"Overview",id:"overview",level:2},{value:"Monitoring Connector Assets",id:"monitoring-connector-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How to check in the CLI that the configuration is OK and what are the main options for ?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-",level:3},{value:"Why do I get the following error:",id:"why-do-i-get-the-following-error",level:3},{value:"<code>UNKNOWN: 500 Can&#39;t connect to mycucm.com:443</code>",id:"unknown-500-cant-connect-to-mycucmcom443",level:4},{value:"<code>UNKNOWN: 501 Protocol scheme &#39;connect&#39; is not supported |</code>",id:"unknown-501-protocol-scheme-connect-is-not-supported-",level:4}],g={toc:d},k="wrapper";function h(e){var{components:t}=e,n=c(e,["components"]);return(0,r.kt)(k,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Using SXML, this Cisco Call Manager Monitoring Connector monitors alerts from the Cisco Unified Communications components."),(0,r.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector Assets"),(0,r.kt)("h3",{id:"monitored-objects"},"Monitored Objects"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Alerts")),(0,r.kt)("h3",{id:"collected-metrics"},"Collected Metrics"),(0,r.kt)("p",null,"More information about collected metrics is available in the official Cisco Callmanager documentation :\n",(0,r.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/en/us/support/docs/unified-communications/unified-communications-manager-callmanager/213291-real-time-monitoring-tool-alerts.html#anc8"},"https://www.cisco.com/c/en/us/support/docs/unified-communications/unified-communications-manager-callmanager/213291-real-time-monitoring-tool-alerts.html#anc8")),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Alerts",label:"Alerts",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"alerts.total.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of alerts"),(0,r.kt)("td",{parentName:"tr",align:"left"},"count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"severity-$alerts.severity.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of different severities"),(0,r.kt)("td",{parentName:"tr",align:"left"},"count")))))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller monitoring Cisco Callmanager resources:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Cisco-Callmanager-Sxml.noarch\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,r.kt)("em",{parentName:"li"},"Cisco Callmanager SXML")," Monitoring Connector"))),(0,r.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller monitoring Cisco Callmanager resources:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Cisco-Callmanager-Sxml.noarch\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"On the Centreon Central server, install the Centreon Monitoring Connector from the RPM:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-network-cisco-callmanager-sxml.noarch\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,r.kt)("em",{parentName:"li"},"Cisco Callmanager SXML")," Monitoring Connector")))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"The Monitoring Connector is designed to monitor resources based on one Host per Cisco Callmanager SXML environment.\nAdding a Host into Centreon, link it to the Template named ",(0,r.kt)("em",{parentName:"p"},"Net-Cisco-Callmanager-Sxml-custom"),".\nOnce the Template applied, some Macros have to be configured:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"CUCMSXMLAPIPORT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Port used. Default is 8443")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"CUCMSXMLAPIPROTO"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Protocol used. Default is https")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"CUCMSXMLAPIEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command")))),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("h3",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-"},"How to check in the CLI that the configuration is OK and what are the main options for ?"),(0,r.kt)("p",null,"Once the Plugin installed, log into your poller using the ",(0,r.kt)("em",{parentName:"p"},"centreon-engine")," user account and test by running the following command\n(Parameters such as ",(0,r.kt)("inlineCode",{parentName:"p"},"api-username")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"api-password")," have to be adjusted):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_cisco_cucm_sxml.pl \\\n    --plugin=network::cisco::callmanager::sxml::plugin \\\n    --mode=alerts \\\n    --Hostname='mycucm.com' \\\n    --api-username='centreoncucm' \\\n    --api-password='myapipassword' \\\n    --port='8443' \\\n    --proto='https' \\ \n    --http-backend=curl \\\n    --curl-opt=\"CURLOPT_SSL_VERIFYPEER => 0\" \\\n    --verbose \\\n    --display-alerts\nOK: Alerts total: 1, informational: 0, error: 0, debugging: 0, critical: 1, alert: 0, warning: 0, emergency: 0, notice: 0 \n| 'alerts.total.count'=1;;;0; 'alerts.severity.informational.count'=0;;;0;1 'alerts.severity.error.count'=0;;;0;1 'alerts.severity.debugging.count'=0;;;0;1 \n'alerts.severity.critical.count'=1;;;0;1 'alerts.severity.alert.count'=0;;;0;1 'alerts.severity.warning.count'=0;;;0;1 'alerts.severity.emergency.count'=0;;;0;1 \n'alerts.severity.notice.count'=0;;;0;1\nalert [name: CDRFileDeliveryFailureContinues] [severity: critical] [date: Tue Oct  6 05:42:12 2020]:  BillingServerAddress : 172.28.172.105 \nAppID : Cisco CDR Repository Manager ClusterID :  NodeID : server.centreon.com  TimeStamp : Tue Oct 06 05:41:50 EDT 2020. \nThe alarm is generated on Tue Oct 06 05:41:50 EDT 2020. \n")),(0,r.kt)("p",null,"The command above gets the alerts of a Cisco Callmanager using SXML (",(0,r.kt)("inlineCode",{parentName:"p"},"--mode=alerts"),").\nIt uses api-username (",(0,r.kt)("inlineCode",{parentName:"p"},"--api-username='centreoncum'"),"), an api-password (",(0,r.kt)("inlineCode",{parentName:"p"},"--api-password='myapipassword'"),")\nand it connects to the Host ",(0,r.kt)("em",{parentName:"p"},"mycucm.com")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--Hostname='mycucm.com'"),")\non the port 443 (",(0,r.kt)("inlineCode",{parentName:"p"},"--port='443'"),") using https (",(0,r.kt)("inlineCode",{parentName:"p"},"--proto='https'"),").\nBy default, the backend method is ",(0,r.kt)("em",{parentName:"p"},"curl")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--http-backend=curl"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_cisco_cucm_sxml.pl \n    --plugin=network::cisco::callmanager::sxml::plugin \\\n    --mode=alerts \\\n    --help\n")),(0,r.kt)("h3",{id:"why-do-i-get-the-following-error"},"Why do I get the following error:"),(0,r.kt)("h4",{id:"unknown-500-cant-connect-to-mycucmcom443"},(0,r.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 500 Can't connect to mycucm.com:443")),(0,r.kt)("p",null,"This error message means that the Centreon Plugin couldn't successfully connect to the Cisco Callmanager SXML.\nCheck that no third party device (such as a firewall) is blocking the request.\nA proxy connection may also be necessary to connect to the API. This can be done by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany:8080'")," option in the command."),(0,r.kt)("h4",{id:"unknown-501-protocol-scheme-connect-is-not-supported-"},(0,r.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 501 Protocol scheme 'connect' is not supported |")),(0,r.kt)("p",null,"When using a proxy to connect to the Cisco Callmanager SXML, this error message means that the Centreon Plugin library does not support\nthe proxy connection protocol."),(0,r.kt)("p",null,"In order to prevent this issue, use the ",(0,r.kt)("em",{parentName:"p"},"lwp")," HTTP backend by adding the following option to the command: ",(0,r.kt)("inlineCode",{parentName:"p"},"--http-backend='lwp'"),"."))}h.isMDXComponent=!0}}]);