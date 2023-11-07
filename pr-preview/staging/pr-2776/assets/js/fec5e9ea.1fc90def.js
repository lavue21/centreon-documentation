"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[56346],{77082:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>k,frontMatter:()=>s,metadata:()=>m,toc:()=>u});n(67294);var a=n(3905),r=n(51715),i=n(7626);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"applications-antivirus-mcafee-webgateway-snmp",title:"McAfee Web Gateway"},c=void 0,m={unversionedId:"integrations/plugin-packs/procedures/applications-antivirus-mcafee-webgateway-snmp",id:"integrations/plugin-packs/procedures/applications-antivirus-mcafee-webgateway-snmp",title:"McAfee Web Gateway",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/applications-antivirus-mcafee-webgateway-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-antivirus-mcafee-webgateway-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/applications-antivirus-mcafee-webgateway-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-antivirus-mcafee-webgateway-snmp.md",tags:[],version:"current",frontMatter:{id:"applications-antivirus-mcafee-webgateway-snmp",title:"McAfee Web Gateway"},sidebar:"pp",previous:{title:"Maltem Insight Rest API",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/applications-monitoring-mip-restapi"},next:{title:"Microsoft Active Directory",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/infrastructure-active-directory-nrpe"}},d={},u=[{value:"Overview",id:"overview",level:2},{value:"Monitoring Connector assets",id:"monitoring-connector-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Monitored metrics",id:"monitored-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"McAfee Web Gateway proxy configuration",id:"mcafee-web-gateway-proxy-configuration",level:3},{value:"Network flow",id:"network-flow",level:3},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Host configuration",id:"host-configuration",level:3},{value:"FAQ",id:"faq",level:2},{value:"How do I run my plugin through the CLI and what do the main parameters stand for?",id:"how-do-i-run-my-plugin-through-the-cli-and-what-do-the-main-parameters-stand-for",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:3},{value:"UNKNOWN: SNMP GET Request : Cant get a single value.",id:"unknown-snmp-get-request--cant-get-a-single-value",level:3}],g={toc:u},f="wrapper";function k(e){var{components:t}=e,n=p(e,["components"]);return(0,a.kt)(f,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"McAfee Web Gateway is a proxy platform that provides proactive Web traffic\nscanning and threat blocking with advanced real-time malware inspection\ntechniques."),(0,a.kt)("p",null,"The Centreon Monitoring Connector ",(0,a.kt)("em",{parentName:"p"},"McAfee Web Gateway")," aims to collect signature\ndatabases versions and Web and malware detections statistics using the SNMP\nprotocol."),(0,a.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector assets"),(0,a.kt)("h3",{id:"monitored-objects"},"Monitored objects"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"McAfee Web Gateway proxy")),(0,a.kt)("h3",{id:"monitored-metrics"},"Monitored metrics"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Clients",label:"Clients",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"clients.connected.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of connected client")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"sockets.connected.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of open network sockets"))))),(0,a.kt)(i.Z,{value:"Connections",label:"Connections",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"connections.legitimate.persecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of legitimate connections per second"),(0,a.kt)("td",{parentName:"tr",align:"left"},"connections/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"connections.blocked.persecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of blocked connections per second"),(0,a.kt)("td",{parentName:"tr",align:"left"},"connections/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"connections.antimalware.blocked.persecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of connections blocked by the Anti Malware per second"),(0,a.kt)("td",{parentName:"tr",align:"left"},"connections/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"connections.mediafilter.blocked.persecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of connections blocked by the Media Filter per second"),(0,a.kt)("td",{parentName:"tr",align:"left"},"connections/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"connections.urlfilter.blocked.persecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of connections blocked by the URL Filter per second"),(0,a.kt)("td",{parentName:"tr",align:"left"},"connections/s"))))),(0,a.kt)(i.Z,{value:"Detections",label:"Detections",mdxType:"TabItem"},(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Global")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"malwares.detected.persecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of malware detected per second"),(0,a.kt)("td",{parentName:"tr",align:"left"},"detections/s")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Per ",(0,a.kt)("em",{parentName:"li"},"categories"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"categoryname"),"#category.malwares.detected.persecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of malware detected per second"),(0,a.kt)("td",{parentName:"tr",align:"left"},"detections/s"))))),(0,a.kt)(i.Z,{value:"Ftpstatistics",label:"Ftpstatistics",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ftp.traffic.clienttoproxy.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"FTP traffic from client to proxy"),(0,a.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ftp.traffic.servertoproxy.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"FTP traffic from server to proxy"),(0,a.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ftp.traffic.proxytoclient.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"FTP traffic from proxy to client"),(0,a.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ftp.traffic.proxytoserver.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"FTP traffic from proxy to server"),(0,a.kt)("td",{parentName:"tr",align:"left"},"b/s"))))),(0,a.kt)(i.Z,{value:"Httpstatistics",label:"Httpstatistics",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"http.requests.persecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of HTTP request per second"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"http.traffic.clienttoproxy.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"HTTP traffic from client to proxy"),(0,a.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"http.traffic.servertoproxy.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"HTTP traffic from server to proxy"),(0,a.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"http.traffic.proxytoclient.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"HTTP traffic from proxy to client"),(0,a.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"http.traffic.proxytoserver.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"HTTP traffic from proxy to server"),(0,a.kt)("td",{parentName:"tr",align:"left"},"b/s"))))),(0,a.kt)(i.Z,{value:"Httpsstatistics",label:"Httpsstatistics",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"https.requests.persecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of HTTPS request per second"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"https.traffic.clienttoproxy.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"HTTPS traffic from client to proxy"),(0,a.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"https.traffic.servertoproxy.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"HTTPS traffic from server to proxy"),(0,a.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"https.traffic.proxytoclient.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"HTTPS traffic from proxy to client"),(0,a.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"https.traffic.proxytoserver.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"HTTPS traffic from proxy to server"),(0,a.kt)("td",{parentName:"tr",align:"left"},"b/s"))))),(0,a.kt)(i.Z,{value:"Versions",label:"Versions",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"dat-version"),(0,a.kt)("td",{parentName:"tr",align:"left"},"DAT version")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"tsdb-version"),(0,a.kt)("td",{parentName:"tr",align:"left"},"TrustedSource Database Version")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"proactive-version"),(0,a.kt)("td",{parentName:"tr",align:"left"},"ProActive Database Version")))))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h3",{id:"mcafee-web-gateway-proxy-configuration"},"McAfee Web Gateway proxy configuration"),(0,a.kt)("p",null,"To use this pack, the SNMP service must be properly configured on your McAfee\nWeb Gateway. McAfee provides an official documentation to achieve this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.mcafee.com/bundle/web-gateway-8.2.x-product-guide/page/GUID-7F25543B-2BE5-47A5-BC40-AEEF65F5D156.html"},"https://docs.mcafee.com/bundle/web-gateway-8.2.x-product-guide/page/GUID-7F25543B-2BE5-47A5-BC40-AEEF65F5D156.html")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.mcafee.com/bundle/web-gateway-8.2.x-interface-reference-guide/page/GUID-92B0527B-9709-43DD-AEDC-FE82966AC6EF.html"},"https://docs.mcafee.com/bundle/web-gateway-8.2.x-interface-reference-guide/page/GUID-92B0527B-9709-43DD-AEDC-FE82966AC6EF.html"))),(0,a.kt)("h3",{id:"network-flow"},"Network flow"),(0,a.kt)("p",null,"The McAfee Web Gateway proxy must be reachable from the Centreon Poller on the\nUDP/161 SNMP port."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon McAfee Web Gateway package on every Centreon Poller expected to monitor a McAfee Web Gateway proxy:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Antivirus-Mcafee-Webgateway-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,a.kt)("em",{parentName:"li"},"McAfee Web Gateway")," Centreon Monitoring Connector on the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page"))),(0,a.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon McAfee Web Gateway package on every Centreon Poller expected to monitor a McAfee Web Gateway proxy:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Antivirus-Mcafee-Webgateway-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Monitoring Connector RPM on the Centreon Central server:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-antivirus-mcafee-webgateway-snmp\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,a.kt)("em",{parentName:"li"},"McAfee Web Gateway")," Centreon Monitoring Connector on the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"host-configuration"},"Host configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Log into Centreon and add a new Host through "Configuration > Hosts".'),(0,a.kt)("li",{parentName:"ul"},'Fill the "Name", "Alias" & "IP Address / DNS" fields according to your a McAfee Web Gateway proxy settings'),(0,a.kt)("li",{parentName:"ul"},"Select the ",(0,a.kt)("em",{parentName:"li"},"App-Antivirus-Mcafee-Webgateway-SNMP-custom")," template to apply to the Host.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters\nMore information in the ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP")," section.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Configure your own SNMPv3 credentials combo")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"how-do-i-run-my-plugin-through-the-cli-and-what-do-the-main-parameters-stand-for"},"How do I run my plugin through the CLI and what do the main parameters stand for?"),(0,a.kt)("p",null,"Once you've installed the plugin, you can test it logging with centreon-engine\nuser:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_mcafee_webgateway_snmp.pl \\\n    --plugin=apps::antivirus::mcafee::webgateway::snmp::plugin \\\n    --mode=clients \\\n    --hostname=10.0.0.1 \\\n    --snmp-version='2c' \\\n    --snmp-community='my-snmp-community' \\\n    --filter-counters='' \\\n    --warning-clients='' \\\n    --critical-clients='30' \\\n    --warning-sockets='' \\\n    --critical-sockets='70' \\\n    --use-new-perfdata\n")),(0,a.kt)("p",null,"Expected command output is shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Connected clients: 10, Open network sockets: 50 | 'clients.connected.count'=10;0:20;0:30;0;  'sockets.connected.count'=50;0:60;0:70;0;\n")),(0,a.kt)("p",null,"In this example, the Plugin gets the number of connected clients\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--plugin=apps::antivirus::mcafee::webgateway::snmp::plugin--mode=client"),")\nby requesting the McAfee Web Gateway using the SNMP protocol at 10.0.0.1\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--hostname='10.0.0.1'  --snmp-version='2c' --snmp-community='mysnmpcommunity'"),")."),(0,a.kt)("p",null,"This command will trigger an alarm when the number of connected clients is greater\nthan 30 (",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-clients='30'"),") or the number of open network sockets is\ngreater then 70 (",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-sockets='70'"),")"),(0,a.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_mcafee_webgateway_snmp.pl \\\n    --plugin=apps::antivirus::mcafee::webgateway::snmp::plugin \\\n    --mode=clients \\\n    --help\n")),(0,a.kt)("p",null,"All Plugin modes can be listed with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_mcafee_webgateway_snmp.pl \\\n    --plugin=apps::antivirus::mcafee::webgateway::snmp::plugin \\\n    --list-mode\n")),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("h3",{id:"unknown-snmp-get-request--timeout"},"UNKNOWN: SNMP GET Request : Timeout"),(0,a.kt)("p",null,"If you get this message, you're probably facing one of theses issues:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Your SNMP server isn't started or misconfigured")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"An external device is blocking your request (firewall, ...)"))),(0,a.kt)("h3",{id:"unknown-snmp-get-request--cant-get-a-single-value"},"UNKNOWN: SNMP GET Request : Cant get a single value."),(0,a.kt)("p",null,"This message generally means that SNMP privileges are not wide enough for the\nmode/plugin to work properly. The SNMP agent must be able to access the branch\n.1.3.6.1.4.1.1230."))}k.isMDXComponent=!0}}]);