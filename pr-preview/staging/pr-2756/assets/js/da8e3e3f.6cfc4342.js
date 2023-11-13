"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[28228],{21700:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>u});n(67294);var a=n(3905),r=n(51715),l=n(7626);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"network-ibm-bladecenter-snmp",title:"IBM Bladecenter Switch"},m=void 0,c={unversionedId:"integrations/plugin-packs/procedures/network-ibm-bladecenter-snmp",id:"integrations/plugin-packs/procedures/network-ibm-bladecenter-snmp",title:"IBM Bladecenter Switch",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/network-ibm-bladecenter-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-ibm-bladecenter-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/network-ibm-bladecenter-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/network-ibm-bladecenter-snmp.md",tags:[],version:"current",frontMatter:{id:"network-ibm-bladecenter-snmp",title:"IBM Bladecenter Switch"}},d={},u=[{value:"Overview",id:"overview",level:2},{value:"Monitoring Connector assets",id:"monitoring-connector-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Network flow",id:"network-flow",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How do I run my plugin through the CLI and what do the main parameters stand for ?",id:"how-do-i-run-my-plugin-through-the-cli-and-what-do-the-main-parameters-stand-for-",level:3},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:3},{value:"UNKNOWN: SNMP GET Request : Cant get a single value.",id:"unknown-snmp-get-request--cant-get-a-single-value",level:3}],k={toc:u},g="wrapper";function f(e){var{components:t}=e,n=p(e,["components"]);return(0,a.kt)(g,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"IBM develops, manufactures and sells hardware, middleware, software and other\nservices and products. Created in 2002, IBM BladeCenter was IBM's blade server\narchitecture. "),(0,a.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector assets"),(0,a.kt)("h3",{id:"monitored-objects"},"Monitored objects"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"IBM Bladecenter switch module")),(0,a.kt)("h3",{id:"collected-metrics"},"Collected Metrics"),(0,a.kt)("p",null,"In addition to modes and metrics described here, it is also possible to monitor\nthe following indicators:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ntp: Check time offset of server with ntp server"),(0,a.kt)("li",{parentName:"ul"},"Uptime: Elapsed time since the last reboot")),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Cpu",label:"Cpu",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cpu.utilization.1m.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"CPU utilization for the last minute"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cpu.utilization.5m.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"CPU utilization for the last 5 minutes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,a.kt)(l.Z,{value:"Storage",label:"Storage",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"storage.partitions.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total number of partition"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"partition#storage.space.usage.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Used space on a disk partition"),(0,a.kt)("td",{parentName:"tr",align:null},"Bytes"))))),(0,a.kt)(l.Z,{value:"Memory-Usage",label:"Memory-Usage",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"memory.usage.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total current memory usage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Bytes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"memory.usage.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total current memory usage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"memory.free.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Current free memory"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Bytes"))))),(0,a.kt)(l.Z,{value:"Traffic",label:"Traffic",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Interface status"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"interface.traffic.","*",".bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"*","in/out. Incoming/outgoing traffic going through the interface"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Bytes/s & %")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"interface.packets.","*",".errors.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"*","in/out. Incoming/outgoing errored packets going through an interface"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count & %")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"interface.packets.","*",".discards.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"*","in/out. Incoming/outgoing discarded packets going through an interface"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count & %")))),(0,a.kt)("p",null,"A regexp filter is available to target a specific interface identifier/ifName ","[",(0,a.kt)("inlineCode",{parentName:"p"},"--interface='^my-interface-name$' --name"),"]"," ")),(0,a.kt)(l.Z,{value:"Environment",label:"Environment",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"hardware.temperature.celsius"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Temperature of the system"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Celsius")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"faultled"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the fault LED (On/Off)"),(0,a.kt)("td",{parentName:"tr",align:"left"})))),(0,a.kt)("p",null,"You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"--no-component")," if you want to alert when a component is\nabsent/removed. You can also overload the default status using the\n",(0,a.kt)("inlineCode",{parentName:"p"},"--threshold-overload option"),". "))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To use this pack, the SNMP service must be properly configured on your\nIBM BladeCenter server. Lenovo provides an official documentation\nto achieve this: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Throught BladeCenter Web Interface: ",(0,a.kt)("a",{parentName:"li",href:"https://bladecenter.lenovofiles.com/help/index.jsp?topic=%2Fcom.lenovo.bladecenter.mgtmod.doc%2Fkp1ag_bc_mmug_configsnmp"},"https://bladecenter.lenovofiles.com/help/index.jsp?topic=%2Fcom.lenovo.bladecenter.mgtmod.doc%2Fkp1ag_bc_mmug_configsnmp")),(0,a.kt)("li",{parentName:"ul"},"Throught BladeCenter Command-Line Interface : ",(0,a.kt)("a",{parentName:"li",href:"https://bladecenter.lenovofiles.com/help/index.jsp?topic=%2Fcom.lenovo.bladecenter.advmgtmod.doc%2Fkp1bc_bc_cli_snmp"},"https://bladecenter.lenovofiles.com/help/index.jsp?topic=%2Fcom.lenovo.bladecenter.advmgtmod.doc%2Fkp1bc_bc_cli_snmp"))),(0,a.kt)("h3",{id:"network-flow"},"Network flow"),(0,a.kt)("p",null,"The target IBM BladeCenter server must be reachable from the Centreon\nPoller on the UDP/161 SNMP port."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the package on every Centreon poller expected to monitor an IBM BladeCenter switch module:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Ibm-Bladecenter-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the centreon Web interface, install the ",(0,a.kt)("em",{parentName:"li"},"IBM BladeCenter Switch")," Centreon Monitoring Connector on the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page"))),(0,a.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Plugin on every Centreon poller expected to monitor an IBM BladeCenter switch module:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Ibm-Bladecenter-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Monitoring Connector RPM on the Centreon Central server:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-network-ibm-bladecenter-snmp\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On the centreon Web interface, install the ",(0,a.kt)("em",{parentName:"li"},"IBM BladeCenter Switch")," Centreon Monitoring Connector on the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Go to ",(0,a.kt)("em",{parentName:"p"},"Configuration")," > ",(0,a.kt)("em",{parentName:"p"},"Host")," > and click ",(0,a.kt)("em",{parentName:"p"},"Add"),". Then fill the ",(0,a.kt)("em",{parentName:"p"},"SNMP Community"),"\nand ",(0,a.kt)("em",{parentName:"p"},"SNMP Version")," fields and apply the template\n",(0,a.kt)("em",{parentName:"p"},"Net-Ibm-Bladecenter-SNMP-custom"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters\nMore information in the ",(0,a.kt)("a",{parentName:"p",href:"../../getting-started/how-to-guides/troubleshooting-plugins/#snmpv3-options-mapping"},"Troubleshooting SNMP")," section.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Configure your own SNMPv3 credentials combo")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"how-do-i-run-my-plugin-through-the-cli-and-what-do-the-main-parameters-stand-for-"},"How do I run my plugin through the CLI and what do the main parameters stand for ?"),(0,a.kt)("p",null,"Once you've installed the plugin, you can test it logging with ",(0,a.kt)("em",{parentName:"p"},"centreon-engine"),"\nuser:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_net_bladecenter_snmp.pl \\\n  --plugin=network::ibm::bladecenter::snmp::plugin \\\n  --mode=interfaces --hostname=10.30.2.138 \\\n  --snmp-community='public' \\\n  --snmp-version='2c' \\\n  --add-status \\\n  --add-traffic\n")),(0,a.kt)("p",null,"Expected command output is shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"OK: All interfaces are ok | 'traffic_in_lo'=19795.35b/s;;;0;10000000 'traffic_out_lo'=19795.35b/s;;;0;10000000 'traffic_in_ens192'=26001.62b/s;;;0;10000000000 'traffic_out_ens192'=24438.38b/s;;;0;10000000000\n")),(0,a.kt)("p",null,"All available modes with the plugin can be displayed with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_net_bladecenter_snmp.pl \\\n  ---plugin=network::ibm::bladecenter::snmp::plugin \\\n  --list-mode\n")),(0,a.kt)("p",null,"The available options for a mode can be displayed using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," parameter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_net_bladecenter_snmp.pl \\\n  --plugin=network::ibm::bladecenter::snmp::plugin \\\n  --mode=interfaces \\\n  --help\n")),(0,a.kt)("h3",{id:"unknown-snmp-get-request--timeout"},"UNKNOWN: SNMP GET Request : Timeout"),(0,a.kt)("p",null,"If you get this message, you're probably facing one of theses issues:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Your SNMP server isn't started or misconfigured"),(0,a.kt)("li",{parentName:"ul"},"An external device is blocking your request (firewall, ...)")),(0,a.kt)("h3",{id:"unknown-snmp-get-request--cant-get-a-single-value"},"UNKNOWN: SNMP GET Request : Cant get a single value."),(0,a.kt)("p",null,"This message generally means that SNMP privileges are not wide enough for the\nmode/plugin to work properly."))}f.isMDXComponent=!0}}]);