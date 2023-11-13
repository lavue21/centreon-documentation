"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[60781],{44037:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>k,contentTitle:()=>m,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>u});a(67294);var r=a(3905),n=a(51715),l=a(7626);function p(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}const s={id:"hardware-servers-hp-snmp",title:"HP Proliant"},m=void 0,d={unversionedId:"integrations/plugin-packs/procedures/hardware-servers-hp-snmp",id:"integrations/plugin-packs/procedures/hardware-servers-hp-snmp",title:"HP Proliant",description:"Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/hardware-servers-hp-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-servers-hp-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/hardware-servers-hp-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/hardware-servers-hp-snmp.md",tags:[],version:"current",frontMatter:{id:"hardware-servers-hp-snmp",title:"HP Proliant"},sidebar:"pp",previous:{title:"HP OneView Rest API",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/hardware-servers-hp-oneview-restapi"},next:{title:"Huawei HMM",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/hardware-servers-huawei-hmm-snmp"}},k={},u=[{value:"Pack Assets",id:"pack-assets",level:2},{value:"Templates",id:"templates",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"SNMP Configuration",id:"snmp-configuration",level:3},{value:"Network flow",id:"network-flow",level:3},{value:"HP snmp agent install on Centreon poller",id:"hp-snmp-agent-install-on-centreon-poller",level:2},{value:"Plugin Setup",id:"plugin-setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"How to check in the CLI that the configuration is OK and what are the main options for?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}],g={toc:u},c="wrapper";function h(t){var{components:e}=t,a=i(t,["components"]);return(0,r.kt)(c,o(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),r.forEach((function(e){p(t,e,a[e])}))}return t}({},g,a),{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,r.kt)("h3",{id:"templates"},"Templates"),(0,r.kt)("p",null,"The Centreon Monitoring Connector ",(0,r.kt)("strong",{parentName:"p"},"HP Proliant")," brings a host template:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"HW-Server-Hp-Server-SNMP-custom")),(0,r.kt)("p",null,"It brings the following service templates:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Service Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Hardware-Cpu"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Hp-Server-Hardware-Cpu-SNMP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Check cpu hardware"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Hardware-Fan"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Hp-Server-Hardware-Fan-SNMP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Check fan hardware"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Hardware-Global"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Hp-Server-Hardware-Global-SNMP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Check all hardware"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Hardware-Network"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Hp-Server-Hardware-Network-SNMP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Check network hardware"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Hardware-Pc"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Hp-Server-Hardware-Pc-SNMP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Check power converter hardware"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Hardware-Psu"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Hp-Server-Hardware-Psu-SNMP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Check power supply hardware"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Hardware-Storage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Hp-Server-Hardware-Storage-SNMP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Check storage hardware"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Hardware-Temperature"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Hp-Server-Hardware-Temperature-SNMP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Check hardware temperatures"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h3",{id:"collected-metrics--status"},"Collected metrics & status"),(0,r.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Hardware-Cpu",label:"Hardware-Cpu",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"CPU status"),(0,r.kt)("td",{parentName:"tr",align:"left"}))))),(0,r.kt)(l.Z,{value:"Hardware-Fan",label:"Hardware-Fan",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fan status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"hardware.fan.speed.rpm"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Fan speed"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Rpm"))))),(0,r.kt)(l.Z,{value:"Hardware-Global",label:"Hardware-Global",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Components global status"),(0,r.kt)("td",{parentName:"tr",align:"left"}))))),(0,r.kt)(l.Z,{value:"Hardware-Network",label:"Hardware-Network",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NIC status"),(0,r.kt)("td",{parentName:"tr",align:"left"}))))),(0,r.kt)(l.Z,{value:"Hardware-Pc",label:"Hardware-Pc",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Power Converter status"),(0,r.kt)("td",{parentName:"tr",align:"left"}))))),(0,r.kt)(l.Z,{value:"Hardware-Psu",label:"Hardware-Psu",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Power supply status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"hardware.powersupply.power.watt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Power supply watt capacity used"),(0,r.kt)("td",{parentName:"tr",align:"left"},"W")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"hardware.powersupply.voltage.volt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Power supply voltage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"V"))))),(0,r.kt)(l.Z,{value:"Hardware-Storage",label:"Hardware-Storage",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Storage status"),(0,r.kt)("td",{parentName:"tr",align:"left"}))))),(0,r.kt)(l.Z,{value:"Hardware-Temperature",label:"Hardware-Temperature",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Temperature status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"hardware.temperature.celsius"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Temperature  in celsius"),(0,r.kt)("td",{parentName:"tr",align:"left"},"C")))))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h3",{id:"snmp-configuration"},"SNMP Configuration"),(0,r.kt)("p",null,"To use this pack, the SNMP service must be properly configured on your ",(0,r.kt)("strong",{parentName:"p"},"HP Proliant"),"\nserver. "),(0,r.kt)("h3",{id:"network-flow"},"Network flow"),(0,r.kt)("p",null,"The target server must be reachable from the Centreon poller on the UDP/161\nSNMP port."),(0,r.kt)("h2",{id:"hp-snmp-agent-install-on-centreon-poller"},"HP snmp agent install on Centreon poller"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Warning: The following procedure is valid only for Centos 7, required HP packages health and snmp-agents are in version 10.50 and only available for Centos 7.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that the poller should be running on HP Proliant hardware for the plugin to be working.")),(0,r.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Centos 7",label:"Centos 7",mdxType:"TabItem"},(0,r.kt)("p",null,"Install on Centreon poller HP health and snmp-agents packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install https://downloads.linux.hpe.com/SDR/repo/mcp/centos/7.0/x86_64/10.50/hp-health-10.50-1826.40.rhel7.x86_64.rpm\nyum install https://downloads.linux.hpe.com/SDR/repo/mcp/centos/7.0/x86_64/10.50/hp-snmp-agents-10.50-2926.49.rhel7.x86_64.rpm\n")),(0,r.kt)("p",null,"Add the following line in ",(0,r.kt)("em",{parentName:"p"},"/etc/snmp/snmpd.conf"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dlmod cmaX /usr/lib64/libcmaX64.so\n")),(0,r.kt)("p",null,"Restart the following services: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl restart hp-snmp-agents\nsystemctl restart snmpd\n")))),(0,r.kt)("h2",{id:"plugin-setup"},"Plugin Setup"),(0,r.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the package on every Centreon poller expected to monitor ",(0,r.kt)("strong",{parentName:"li"},"HP Proliant")," resources:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Servers-Hp-Snmp\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"On the Centreon web interface, on page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,r.kt)("strong",{parentName:"li"},"HP Proliant")," Centreon Monitoring Connector."))),(0,r.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the package on every Centreon poller expected to monitor ",(0,r.kt)("strong",{parentName:"li"},"HP Proliant")," resources:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Servers-Hp-Snmp\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Install the ",(0,r.kt)("strong",{parentName:"li"},"HP Proliant")," Centreon Monitoring Connector RPM on the Centreon central server:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-hardware-servers-hp-snmp\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"On the Centreon web interface, on page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,r.kt)("strong",{parentName:"li"},"HP Proliant")," Centreon Monitoring Connector.")))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h3",{id:"host"},"Host"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Log into Centreon and add a new host through ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,r.kt)("li",{parentName:"ul"},"Fill the ",(0,r.kt)("strong",{parentName:"li"},"Name"),", ",(0,r.kt)("strong",{parentName:"li"},"Alias")," & ",(0,r.kt)("strong",{parentName:"li"},"IP Address/DNS")," fields according to your ",(0,r.kt)("strong",{parentName:"li"},"HP Proliant")," server settings."),(0,r.kt)("li",{parentName:"ul"},"Apply the ",(0,r.kt)("strong",{parentName:"li"},"HW-Server-Hp-Server-SNMP-custom")," template to the host.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters\nMore information in the ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP")," section.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Configure your own SNMPv3 credentials combo")))),(0,r.kt)("h2",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for"},"How to check in the CLI that the configuration is OK and what are the main options for?"),(0,r.kt)("p",null,"Once the plugin is installed, log into your Centreon poller's CLI using the\n",(0,r.kt)("strong",{parentName:"p"},"centreon-engine")," user account (",(0,r.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") and test the plugin by\nrunning the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_hp_proliant.pl \\\n    --plugin=hardware::server::hp::proliant::snmp::plugin \\\n    --mode=hardware \\\n    --hostname=10.0.0.1 \\\n    --snmp-version='2c' \\\n    --snmp-community='my-snmp-community' \\\n    --component='.*' \\\n    --verbose \\\n    --use-new-perfdata\n")),(0,r.kt)("p",null,"The expected command output is shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"OK: All 18 components are ok [1/1 cpus, 1/1 da accelerator boards, 1/1 da controllers, 3/3 da logical drives, 12/12 da physical drives]. | 'hardware.cpu.count'=1;;;; 'hardware.daacc.count'=1;;;; 'hardware.dactl.count'=1;;;; 'hardware.daldrive.count'=3;;;; 'hardware.dapdrive.count'=12;;;;\n")),(0,r.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_hp_proliant.pl \\\n    --plugin=hardware::server::hp::proliant::snmp::plugin \\\n    --mode=hardware \\\n    --help\n")),(0,r.kt)("p",null,"All available modes can be displayed by adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"--list-mode")," parameter to\nthe command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_hp_proliant.pl \\\n    --plugin=hardware::server::hp::proliant::snmp::plugin \\\n    --list-mode\n")),(0,r.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"Please find the ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"troubleshooting documentation"),"\nfor Centreon Plugins typical issues."))}h.isMDXComponent=!0}}]);