"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[43669],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(a),c=r,g=d["".concat(p,".").concat(c)]||d[c]||m[c]||i;return a?n.createElement(g,l(l({ref:t},s),{},{components:a})):n.createElement(g,l({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},71014:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>g,frontMatter:()=>p,metadata:()=>s,toc:()=>d});a(67294);var n=a(3905),r=a(67709),i=a(7626);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const p={id:"network-ubiquiti-edge-snmp",title:"Ubiquiti Edge SNMP"},u=void 0,s={unversionedId:"integrations/plugin-packs/procedures/network-ubiquiti-edge-snmp",id:"integrations/plugin-packs/procedures/network-ubiquiti-edge-snmp",title:"Ubiquiti Edge SNMP",description:"Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/network-ubiquiti-edge-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-ubiquiti-edge-snmp",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/network-ubiquiti-edge-snmp",draft:!1,tags:[],version:"current",frontMatter:{id:"network-ubiquiti-edge-snmp",title:"Ubiquiti Edge SNMP"},sidebar:"pp",previous:{title:"Ubiquiti AirFiber SNMP",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/network-ubiquiti-airfiber-snmp"},next:{title:"Ubiquiti UniFi SNMP",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/network-ubiquiti-unifi-snmp"}},m={},d=[{value:"Pack Assets",id:"pack-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Discovery rules",id:"discovery-rules",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Host configuration",id:"host-configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How to test the Plugin and what are the main options for?",id:"how-to-test-the-plugin-and-what-are-the-main-options-for",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],c={toc:d};function g(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)("wrapper",l({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",l({},{id:"pack-assets"}),"Pack Assets"),(0,n.kt)("h3",l({},{id:"monitored-objects"}),"Monitored Objects"),(0,n.kt)("p",null,"The Plugin-Pack Ubiquiti Edge SNMP collects metrics for:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Cpu"),(0,n.kt)("li",{parentName:"ul"},"Hardware"),(0,n.kt)("li",{parentName:"ul"},"Interfaces"),(0,n.kt)("li",{parentName:"ul"},"Memory")),(0,n.kt)("h3",l({},{id:"discovery-rules"}),"Discovery rules"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Services",label:"Services",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Rule name"),(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Net-Ubiquiti-Edge-SNMP-Interface-Name"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Discover network interfaces and monitor bandwidth utilization")))))),(0,n.kt)("h3",l({},{id:"collected-metrics"}),"Collected Metrics"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Cpu",label:"Cpu",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"cpu.utilization.5s.percentage"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"CPU utilization during last 5 seconds."),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"cpu.utilization.1m.percentage"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"CPU utilization during last minute."),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"cpu.utilization.5m.percentage"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"CPU utilization during last 5 minutes."),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"%"))))),(0,n.kt)(i.Z,{value:"Hardware",label:"Hardware",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"disk.status"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Status of the disk"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"raid.status"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Status of the raid"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"fan.status"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Status of the fan"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"temperature.status"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Status of the temperature"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"voltage.status"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Status of the voltage"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"hardware.fan.speed.rpm"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Speed of fan"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"rpm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"hardware.temperature.celsius"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"temperature of the different sensors"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"hardware.voltage.millivolt"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Voltage of the different sensors"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"mV"))))),(0,n.kt)(i.Z,{value:"Interfaces",label:"Interfaces",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"status"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Status of the interface"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.traffic.in.bitspersecond"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Incoming traffic going through the interface."),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.traffic.out.bitspersecond"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Outgoing traffic going through the interface."),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.packets.in.error.percentage"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Incoming errored packets going through the interface."),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.packets.in.discard.percentage"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Incoming discarded packets going through the interface."),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.packets.out.error.percentage"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Outgoing errored packets going through the interface."),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.packets.out.discard.percentage"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Outgoing discarded packets going through the interface."),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"%"))))),(0,n.kt)(i.Z,{value:"Memory",label:"Memory",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"memory.usage.bytes"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Memory usage"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"B")))))),(0,n.kt)("h2",l({},{id:"prerequisites"}),"Prerequisites"),(0,n.kt)("p",null,"To monitor your Ubiquiti Edge, the SNMP must be configured.\nThe Poller should be able to perform SNMP requests toward the Lenovo device over SNMP UDP/161 port."),(0,n.kt)("h2",l({},{id:"setup"}),"Setup"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Network-Ubiquiti-Edge-Snmp\n")),(0,n.kt)("ol",l({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Plugin packs > Manager"),", install the ",(0,n.kt)("em",{parentName:"li"},"Ubiquiti Edge SNMP")," Pack"))),(0,n.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Network-Ubiquiti-Edge-Snmp\n")),(0,n.kt)("ol",l({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"On the Centreon Central server, install the Centreon Plugin-Pack from the RPM:")),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"yum install centreon-pack-network-ubiquiti-edge-snmp\n")),(0,n.kt)("ol",l({},{start:3}),(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Plugin packs > Manager"),", install the ",(0,n.kt)("em",{parentName:"li"},"Ubiquiti Edge SNMP")," Pack")))),(0,n.kt)("h2",l({},{id:"host-configuration"}),"Host configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add a new Host and fill the ",(0,n.kt)("em",{parentName:"li"},"IP Address/FQDN"),", ",(0,n.kt)("em",{parentName:"li"},"SNMP Version")," and ",(0,n.kt)("em",{parentName:"li"},"SNMP Community")," fields according to the device's configuration"),(0,n.kt)("li",{parentName:"ul"},"Apply the ",(0,n.kt)("em",{parentName:"li"},"Net-Ubiquiti-Edge-SNMP-Custom")," Host Template")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Mandatory"),(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Name"),(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"})),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"SNMPEXTRAOPTIONS"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Configure your own SNMPv3 credentials combo")))),(0,n.kt)("h2",l({},{id:"faq"}),"FAQ"),(0,n.kt)("h3",l({},{id:"how-to-test-the-plugin-and-what-are-the-main-options-for"}),"How to test the Plugin and what are the main options for?"),(0,n.kt)("p",null,"Once the plugin installed, log into your Centreon Poller CLI using the ",(0,n.kt)("em",{parentName:"p"},"centreon-engine")," user account\nand test the Plugin by running the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_ubiquiti_edge__snmp.pl \\\n    --plugin=network::ubiquiti::edge::snmp::plugin \\\n    --mode=cpu \\\n    --hostname=10.30.2.114 \\\n    --snmp-version='2c' \\\n    --snmp-community='ubiquiti_ro' \\\n    --warning-1m='80' \\\n    --critical-1m='90' \\\n    --verbose\n")),(0,n.kt)("p",null,"Expected command output is shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"OK: CPU 53.59 % (5sec), 38.13 % (1m), 21.37 % (5min) | 'cpu.utilization.5s.percentage'=53.59%;;;0;100 'cpu.utilization.1m.percentage'=38.13%;0:80;0:90;0;100 'cpu.utilization.5m.percentage'=21.37%;;;0;100\n")),(0,n.kt)("p",null,"The command above monitors Ubiquiti Edge (",(0,n.kt)("inlineCode",{parentName:"p"},"--plugin=network::ubiquiti::edge::snmp::plugin --mode=load"),") identified\nby the IP address ",(0,n.kt)("em",{parentName:"p"},"10.30.2.114")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--hostname=10.30.2.114"),"). As the Plugin is using the SNMP protocol to request the device, the related\n",(0,n.kt)("em",{parentName:"p"},"community")," and ",(0,n.kt)("em",{parentName:"p"},"version")," are specified (",(0,n.kt)("inlineCode",{parentName:"p"},"--snmp-version='2c' --snmp-community='ubiquiti_ro'"),")."),(0,n.kt)("p",null,"This command would trigger a WARNING alarm if cpu utilization over 90% on the last minute\n(",(0,n.kt)("inlineCode",{parentName:"p"},"--warning-1m='90'"),") and a CRITICAL alarm over 95% on the last minute (",(0,n.kt)("inlineCode",{parentName:"p"},"--critical-1m='95'"),")."),(0,n.kt)("p",null,"All the options as well as all the available thresholds can be displayed by adding the  ",(0,n.kt)("inlineCode",{parentName:"p"},"--help"),"\nparameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_ubiquiti_edge_snmp.pl \\\n    --plugin=network::ubiquiti::edge::snmp::plugin \\\n    --mode=cpu \\\n    --help\n")),(0,n.kt)("h2",l({},{id:"troubleshooting"}),"Troubleshooting"),(0,n.kt)("p",null,(0,n.kt)("a",l({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"}),"Troubleshooting plugins")))}g.isMDXComponent=!0},7626:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const i="tabItem_Ymn6";function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function o({children:e,hidden:t,className:a}){return n.createElement("div",l({role:"tabpanel",className:(0,r.Z)(i,a)},{hidden:t}),e)}},67709:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(67294),r=a(86010),i=a(90980),l=a(35715),o=a(8854),p=a(8241);const u="tabList__CuJ",s="tabItem_LNqP";function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},m.apply(this,arguments)}function d(e){var t;const{lazy:a,block:i,defaultValue:d,values:c,groupId:g,className:k}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=c?c:f.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),b=(0,l.l)(N,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var h;const v=null===d?d:null!==(h=null!=d?d:null===(t=f.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==h?h:f[0].props.value;if(null!==v&&!N.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,o.U)(),[P,O]=(0,n.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:S}=(0,p.o5)();if(null!=g){const e=y[g];null!=e&&e!==P&&N.some((t=>t.value===e))&&O(e)}const q=e=>{const t=e.currentTarget,a=T.indexOf(t),n=N[a].value;n!==P&&(S(t),O(n),null!=g&&w(g,String(n)))},C=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;var a;t=null!==(a=T[n])&&void 0!==a?a:T[0];break}case"ArrowLeft":{const a=T.indexOf(e.currentTarget)-1;var n;t=null!==(n=T[a])&&void 0!==n?n:T[T.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},k)},N.map((({value:e,label:t,attributes:a})=>n.createElement("li",m({role:"tab",tabIndex:P===e?0:-1,"aria-selected":P===e,key:e,ref:e=>T.push(e),onKeyDown:C,onFocus:q,onClick:q},a,{className:(0,r.Z)("tabs__item",s,null==a?void 0:a.className,{"tabs__item--active":P===e})}),null!=t?t:e)))),a?(0,n.cloneElement)(f.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function c(e){const t=(0,i.Z)();return n.createElement(d,m({key:String(t)},e))}}}]);