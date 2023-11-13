"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[87401],{75336:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>N,frontMatter:()=>s,metadata:()=>m,toc:()=>d});n(67294);var a=n(3905),r=n(51715),l=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"hardware-ups-socomec-netvision-snmp",title:"UPS Socomec Net Vision SNMP"},u=void 0,m={unversionedId:"integrations/plugin-packs/procedures/hardware-ups-socomec-netvision-snmp",id:"integrations/plugin-packs/procedures/hardware-ups-socomec-netvision-snmp",title:"UPS Socomec Net Vision SNMP",description:"Monitoring Connector Assets",source:"@site/pp/integrations/plugin-packs/procedures/hardware-ups-socomec-netvision-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-ups-socomec-netvision-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/hardware-ups-socomec-netvision-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/hardware-ups-socomec-netvision-snmp.md",tags:[],version:"current",frontMatter:{id:"hardware-ups-socomec-netvision-snmp",title:"UPS Socomec Net Vision SNMP"},sidebar:"pp",previous:{title:"Schleifenbauer Gateway SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/hardware-pdu-schleifenbauer-gateway-snmp"},next:{title:"UPS Standard SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/hardware-ups-standard-rfc1628-snmp"}},c={},d=[{value:"Monitoring Connector Assets",id:"monitoring-connector-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Host configuration",id:"host-configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How to test the Plugin and what are the main options for?",id:"how-to-test-the-plugin-and-what-are-the-main-options-for",level:3},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:3},{value:"UNKNOWN: SNMP GET Request : Cant get a single value.",id:"unknown-snmp-get-request--cant-get-a-single-value",level:4}],g={toc:d},k="wrapper";function N(e){var{components:t}=e,n=p(e,["components"]);return(0,a.kt)(k,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector Assets"),(0,a.kt)("h3",{id:"monitored-objects"},"Monitored Objects"),(0,a.kt)("p",null,"The Monitoring Connector Socomec Net Vision SNMP including Alarms, Battery, Input-lines, Output-lines."),(0,a.kt)("h3",{id:"collected-metrics"},"Collected Metrics"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Alarms",label:"Alarms",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"alarms.current.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of alarms"),(0,a.kt)("td",{parentName:"tr",align:"left"}))))),(0,a.kt)(l.Z,{value:"Battery",label:"Battery",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Battery status"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"battery.charge.remaining.percent"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Battery load"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"battery.charge.remaining.minutes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Battery charge remaining"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"battery.current.ampere"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Battery current"),(0,a.kt)("td",{parentName:"tr",align:"left"},"A")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"battery.voltage.volt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Battery voltage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"V")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"battery.temperature.celsius"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Battery temperature"),(0,a.kt)("td",{parentName:"tr",align:"left"},"C"))))),(0,a.kt)(l.Z,{value:"Input-lines",label:"Input-lines",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"lines.input.frequence.hertz"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Lines frequency"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Hz")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"linenumber"),"#line.input.current.ampere"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Line current"),(0,a.kt)("td",{parentName:"tr",align:"left"},"A")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"linenumber"),"#line.input.voltage.volt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Line voltage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"V"))))),(0,a.kt)(l.Z,{value:"Output-lines",label:"Output-lines",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"source status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Input source status"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"linenumber"),"#line.output.load.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Line load"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"linenumber"),"#line.output.current.ampere"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Line current"),(0,a.kt)("td",{parentName:"tr",align:"left"},"A")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("em",{parentName:"td"},"linenumber"),"#line.output.voltage.volt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Line voltage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"V")))))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To control your Socomec, the SNMP must be configured."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Ups-Socomec-Netvision-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,a.kt)("em",{parentName:"li"},"Socomec Net Vision UPS SNMP")," Monitoring Connector"))),(0,a.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Ups-Socomec-Netvision-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Central server, install the Centreon Monitoring Connector from the RPM:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-hardware-ups-socomec-netvision-snmp\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,a.kt)("em",{parentName:"li"},"Socomec Net Vision UPS SNMP")," Monitoring Connector")))),(0,a.kt)("h2",{id:"host-configuration"},"Host configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add a new Host and fill the ",(0,a.kt)("em",{parentName:"li"},"IP Address/FQDN"),", ",(0,a.kt)("em",{parentName:"li"},"SNMP Version")," and ",(0,a.kt)("em",{parentName:"li"},"SNMP Community")," fields according to the device's configuration"),(0,a.kt)("li",{parentName:"ul"},"Apply the ",(0,a.kt)("em",{parentName:"li"},"HW-UPS-Socomec-Netvision-SNMP-Custom")," Host Template")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters\nMore information in the ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP")," section.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Configure your own SNMPv3 credentials combo")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"how-to-test-the-plugin-and-what-are-the-main-options-for"},"How to test the Plugin and what are the main options for?"),(0,a.kt)("p",null,"Once the plugin installed, log into your Centreon Poller CLI using the ",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," user account\nand test the Plugin by running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_ups_socomec_netvision_snmp.pl \\\n    --plugin=hardware::ups::socomec::netvision::snmp::plugin \\\n    --mode=output-lines \\\n    --hostname=10.30.2.114 \\\n    --snmp-version='2c' \\\n    --snmp-community='socomec_ro' \\\n    --warning-voltage='235' \\\n    --critical-voltage='240' \\\n    --verbose\n")),(0,a.kt)("p",null,"Expected command output is shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Output source status is 'onInverter' - All output lines are ok | '1#line.output.load.percentage'=33.00%;;;0;100 '1#line.output.current.ampere'=5.70A;;;0; '1#line.output.voltage.volt'=230.00V;235;240;; '2#line.output.load.percentage'=20.00%;;;0;100 '2#line.output.current.ampere'=1.80A;;;0; '2#line.output.voltage.volt'=229.00V;235;240;; '3#line.output.load.percentage'=29.00%;;;0;100 '3#line.output.current.ampere'=5.20A;;;0; '3#line.output.voltage.volt'=230.00V;235;240;;\nOutput line '1' load: 33.00 %, current: 5.70 A, voltage: 230.00 V\nOutput line '2' load: 20.00 %, current: 1.80 A, voltage: 229.00 V\nOutput line '3' load: 29.00 %, current: 5.20 A, voltage: 230.00 V\n")),(0,a.kt)("p",null,"The command above monitors UPS Socomec (",(0,a.kt)("inlineCode",{parentName:"p"},"--plugin=hardware::ups::socomec::netvision::snmp::plugin --mode=output-lines"),") identified\nby the IP address ",(0,a.kt)("em",{parentName:"p"},"10.30.2.114")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--hostname=10.30.2.114"),"). As the Plugin is using the SNMP protocol to request the device, the related\n",(0,a.kt)("em",{parentName:"p"},"community")," and ",(0,a.kt)("em",{parentName:"p"},"version")," are specified (",(0,a.kt)("inlineCode",{parentName:"p"},"--snmp-version='2c' --snmp-community='socomec_ro'"),")."),(0,a.kt)("p",null,"This command would trigger a WARNING alarm if input line voltage over 235V\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--warning-voltage='235'"),") and a CRITICAL alarm over 240V (",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-voltage='240'"),")."),(0,a.kt)("p",null,"All the options as well as all the available thresholds can be displayed by adding the  ",(0,a.kt)("inlineCode",{parentName:"p"},"--help"),"\nparameter to the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_ups_socomec_netvision_snmp.pl \\\n    --plugin=hardware::ups::socomec::netvision::snmp::plugin \\\n    --mode=output-lines \\\n    --help\n")),(0,a.kt)("h3",{id:"unknown-snmp-get-request--timeout"},"UNKNOWN: SNMP GET Request : Timeout"),(0,a.kt)("p",null,"If you get this message, you're probably facing one of theses issues:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The SNMP agent of the device isn't started or is misconfigured"),(0,a.kt)("li",{parentName:"ul"},"An external device is blocking the request (firewall, ...)")),(0,a.kt)("h4",{id:"unknown-snmp-get-request--cant-get-a-single-value"},"UNKNOWN: SNMP GET Request : Cant get a single value."),(0,a.kt)("p",null,"This error message often refers to the following issues: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The agent doesn't support the MIB used by the plugin"),(0,a.kt)("li",{parentName:"ul"},"The targeted SNMP OID cannot be fetched because of insufficient privileges on the device.\nSNMP Agent must be capable of accessing to the enterprise branch: .1.3.6.1.4.1.4555")))}N.isMDXComponent=!0}}]);