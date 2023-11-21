"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[48309],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,g=u["".concat(s,".").concat(d)]||u[d]||c[d]||l;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},56080:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>s,metadata:()=>m,toc:()=>u});n(67294);var a=n(3905),r=n(67709),l=n(7626);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"network-switchs-symbol-wing-snmp",title:"Symbol WiNG Switchs SNMP"},p=void 0,m={unversionedId:"integrations/plugin-packs/procedures/network-switchs-symbol-wing-snmp",id:"integrations/plugin-packs/procedures/network-switchs-symbol-wing-snmp",title:"Symbol WiNG Switchs SNMP",description:"Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/network-switchs-symbol-wing-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-switchs-symbol-wing-snmp",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/network-switchs-symbol-wing-snmp",draft:!1,tags:[],version:"current",frontMatter:{id:"network-switchs-symbol-wing-snmp",title:"Symbol WiNG Switchs SNMP"},sidebar:"pp",previous:{title:"Stormshield SSH",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/network-stormshield-ssh"},next:{title:"Teltonika SNMP",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/network-teltonika-snmp"}},c={},u=[{value:"Pack Assets",id:"pack-assets",level:2},{value:"Templates",id:"templates",level:3},{value:"Discovery rules",id:"discovery-rules",level:3},{value:"Collected metrics &amp; statuses",id:"collected-metrics--statuses",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Network flow",id:"network-flow",level:3},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"How to check in the CLI that the configuration is OK and what are the main options for?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}],d={toc:u};function g(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",i({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",i({},{id:"pack-assets"}),"Pack Assets"),(0,a.kt)("h3",i({},{id:"templates"}),"Templates"),(0,a.kt)("p",null,"The Centreon Plugin Pack ",(0,a.kt)("strong",{parentName:"p"},"Symbol WiNG switch SNMP")," brings 1 host template:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Net-Symbol-Wing-SNMP-custom")),(0,a.kt)("p",null,"It brings the following service templates:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Service Alias"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Service Template"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Default"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Discovery"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Systems"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Net-Symbol-Wing-Systems-SNMP"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Traffic-Generic-Id"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Net-Symbol-Wing-Traffic-Generic-Id-SNMP"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"})),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Traffic-Generic-Name"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Net-Symbol-Wing-Traffic-Generic-Name-SNMP"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"})),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"X")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Traffic-Global"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Net-Symbol-Wing-Traffic-Global-SNMP"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"})),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Packet-Errors"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Net-Symbol-wing-Packet-Errors-Global-SNMP"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"})),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"X")))),(0,a.kt)("h3",i({},{id:"discovery-rules"}),"Discovery rules"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Rule name"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Net-Symbol-Wing-SNMP-Traffic-Name"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Discover network interfaces and monitor bandwidth utilization")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Net-Symbol-Wing-SNMP-Packet-Errors-Name"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Discover network interfaces and monitor errored and discarded packets")))),(0,a.kt)("h3",i({},{id:"collected-metrics--statuses"}),"Collected metrics & statuses"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Systems",label:"Systems",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"devices.total.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of total devices"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),(0,a.kt)("em",{parentName:"td"},"core"),"#cpu.utilization.1m.percentage"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Cpu usage for 1m"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),(0,a.kt)("em",{parentName:"td"},"core"),"#cpu.utilization.5m.percentage"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Cpu usage for 5m"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),(0,a.kt)("em",{parentName:"td"},"core"),"#cpu.utilization.15m.percentage"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Cpu usage for 15m"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),(0,a.kt)("em",{parentName:"td"},"memory"),"#device.memory.usage.bytes"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Used memory"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),(0,a.kt)("em",{parentName:"td"},"memory"),"#device.memory.free.bytes"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Free memory"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),(0,a.kt)("em",{parentName:"td"},"memory"),"#device.memory.usage.percentage"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Percentage of used memory"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"%"))))),(0,a.kt)(l.Z,{value:"Interfaces",label:"Interfaces",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"status"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Status of the interface"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"String")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),(0,a.kt)("em",{parentName:"td"},"ifname"),"#interface.traffic.in.bitspersecond"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Incoming traffic going through the interface."),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Bits/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),(0,a.kt)("em",{parentName:"td"},"ifname"),"#interface.traffic.out.bitspersecond"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Outgoing traffic going through the interface."),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Bits/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),(0,a.kt)("em",{parentName:"td"},"ifname"),"#interface.packets.in.error.percentage"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Incoming errored packets going through the interface."),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),(0,a.kt)("em",{parentName:"td"},"ifname"),"#interface.packets.in.discard.percentage"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Incoming discarded packets going through the interface."),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),(0,a.kt)("em",{parentName:"td"},"ifname"),"#interface.packets.out.error.percentage"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Outgoing errored packets going through the interface."),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),(0,a.kt)("em",{parentName:"td"},"ifname"),"#interface.packets.out.discard.percentage"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Outgoing discarded packets going through the interface."),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"%")))))),(0,a.kt)("h2",i({},{id:"prerequisites"}),"Prerequisites"),(0,a.kt)("p",null,"Configure SNMP on your Symbol WiNG device."),(0,a.kt)("h3",i({},{id:"network-flow"}),"Network flow"),(0,a.kt)("p",null,"The target device must be reachable from the Centreon Poller on the UDP/161 SNMP\nport."),(0,a.kt)("h2",i({},{id:"setup"}),"Setup"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin package on every Centreon poller expected to monitor ",(0,a.kt)("strong",{parentName:"li"},"Symbol WiNG")," resources:")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Network-Symbol-Wing-Snmp\n")),(0,a.kt)("ol",i({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"On the Centreon web interface, install the ",(0,a.kt)("strong",{parentName:"li"},"Symbol WiNG switch SNMP")," Centreon Plugin Pack on the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Plugin Packs")," page."))),(0,a.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin package on every Centreon poller expected to monitor ",(0,a.kt)("strong",{parentName:"li"},"Symbol WiNG")," resources:")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Network-Symbol-Wing-Snmp\n")),(0,a.kt)("ol",i({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"Install the ",(0,a.kt)("strong",{parentName:"li"},"Symbol WiNG switch SNMP")," Centreon Plugin Pack RPM on the Centreon central server:")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-pack-network-switchs-symbol-wing-snmp\n")),(0,a.kt)("ol",i({},{start:3}),(0,a.kt)("li",{parentName:"ol"},"On the Centreon web interface, install the ",(0,a.kt)("strong",{parentName:"li"},"Symbol WiNG switch SNMP")," Centreon Plugin Pack on the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Plugin Packs")," page.")))),(0,a.kt)("h2",i({},{id:"configuration"}),"Configuration"),(0,a.kt)("h3",i({},{id:"host"}),"Host"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Log into Centreon and add a new host through ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,a.kt)("li",{parentName:"ul"},"Fill the ",(0,a.kt)("strong",{parentName:"li"},"Name"),", ",(0,a.kt)("strong",{parentName:"li"},"Alias")," and ",(0,a.kt)("strong",{parentName:"li"},"IP Address/DNS")," fields according to your ",(0,a.kt)("strong",{parentName:"li"},"Symbol WiNG")," server settings."),(0,a.kt)("li",{parentName:"ul"},"Apply the ",(0,a.kt)("strong",{parentName:"li"},"Net-Symbol-Wing-SNMP-custom")," template to the host.")),(0,a.kt)("p",null,"If you are using SNMP Version 3, use the SNMPEXTRAOPTIONS macro to configure\nyour own SNMPv3 credentials combo."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Mandatory"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Name"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"})),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"SNMPEXTRAOPTIONS"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Configure your own SNMPv3 credentials combo")))),(0,a.kt)("h2",i({},{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for"}),"How to check in the CLI that the configuration is OK and what are the main options for?"),(0,a.kt)("p",null,"Once the plugin is installed, log into your Centreon Poller CLI using the\n",(0,a.kt)("strong",{parentName:"p"},"centreon-engine")," user account and test the Plugin by running the following\ncommand:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins//centreon_symbol_wing.pl \\\n    --plugin=network::symbol::wing::snmp::plugin \\\n    --mode=systems \\\n    --hostname='10.0.0.1' \\\n    --snmp-community='my-snmp-community' \\\n    --snmp-version='2c' \\\n    --filter-name='' \\\n    --warning-cpu-utilization-1m='' \\\n    --critical-cpu-utilization-1m='' \\\n    --warning-cpu-utilization-5m='80' \\\n    --critical-cpu-utilization-5m='90' \\\n    --warning-cpu-utilization-15m='' \\\n    --critical-cpu-utilization-15m='' \\\n    --warning-memory-usage='' \\\n    --critical-memory-usage='' \\\n    --warning-memory-usage-free='' \\\n    --critical-memory-usage-free='' \\\n    --warning-memory-usage-prct='' \\\n    --critical-memory-usage-prct='' \\\n    --warning-devices-total='' \\\n    --critical-devices-total='' \n")),(0,a.kt)("p",null,"The expected command output is shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"OK: total devices: %s %.2f %% (1m) %.2f %% (5m) %.2f %% (15m)    | 'devices.total.count'=1;;;0; 'cpu.utilization.1m.percentage'=1%;;;0;100 'cpu.utilization.5m.percentage'=3%;80;90;0;100 'cpu.utilization.15m.percentage'=20%;;;0;100 'device.memory.usage.bytes'=8000B;;;0; 'device.memory.free.bytes'=192B;;;0; 'device.memory.usage.percentage'=99%;;;0;100 \n")),(0,a.kt)("p",null,"This command would trigger a WARNING alarm if the CPU was reported as over 80% during the last 5 minutes\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--warning-cpu-utilization-5m='80'"),") and a CRITICAL alarm if over\n90% during the last 5 minutes (",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-cpu-utilization-5m='90'"),")."),(0,a.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins//centreon_symbol_wing.pl \\\n    --plugin=network::symbol::wing::snmp::plugin \\\n    --mode=systems \\\n    --help\n")),(0,a.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,a.kt)("inlineCode",{parentName:"p"},"--list-mode")," parameter to the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins//centreon_symbol_wing.pl \\\n    --plugin=network::symbol::wing::snmp::plugin \\\n    --list-mode \n")),(0,a.kt)("h3",i({},{id:"troubleshooting"}),"Troubleshooting"),(0,a.kt)("p",null,"Please find all the troubleshooting documentation for the Centreon Plugins\non the ",(0,a.kt)("a",i({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#troubleshooting-snmp"}),"dedicated page"),"."))}g.isMDXComponent=!0},7626:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function o({children:e,hidden:t,className:n}){return a.createElement("div",i({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},67709:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(67294),r=n(86010),l=n(90980),i=n(35715),o=n(8854),s=n(8241);const p="tabList__CuJ",m="tabItem_LNqP";function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function u(e){var t;const{lazy:n,block:l,defaultValue:u,values:d,groupId:g,className:k}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=d?d:f.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),h=(0,i.l)(N,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var b;const y=null===u?u:null!==(b=null!=u?u:null===(t=f.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==b?b:f[0].props.value;if(null!==y&&!N.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,o.U)(),[P,S]=(0,a.useState)(y),O=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=g){const e=v[g];null!=e&&e!==P&&N.some((t=>t.value===e))&&S(e)}const C=e=>{const t=e.currentTarget,n=O.indexOf(t),a=N[n].value;a!==P&&(T(t),S(a),null!=g&&w(g,String(a)))},I=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=O.indexOf(e.currentTarget)+1;var n;t=null!==(n=O[a])&&void 0!==n?n:O[0];break}case"ArrowLeft":{const n=O.indexOf(e.currentTarget)-1;var a;t=null!==(a=O[n])&&void 0!==a?a:O[O.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},k)},N.map((({value:e,label:t,attributes:n})=>a.createElement("li",c({role:"tab",tabIndex:P===e?0:-1,"aria-selected":P===e,key:e,ref:e=>O.push(e),onKeyDown:I,onFocus:C,onClick:C},n,{className:(0,r.Z)("tabs__item",m,null==n?void 0:n.className,{"tabs__item--active":P===e})}),null!=t?t:e)))),n?(0,a.cloneElement)(f.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function d(e){const t=(0,l.Z)();return a.createElement(u,c({key:String(t)},e))}}}]);