"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[96552],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(a),d=r,f=c["".concat(p,".").concat(d)]||c[d]||u[d]||l;return a?n.createElement(f,i(i({ref:t},m),{},{components:a})):n.createElement(f,i({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},29675:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>p,metadata:()=>m,toc:()=>c});a(67294);var n=a(3905),r=a(67709),l=a(7626);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const p={id:"network-infoblox-snmp",title:"Infoblox SNMP"},s=void 0,m={unversionedId:"integrations/plugin-packs/procedures/network-infoblox-snmp",id:"integrations/plugin-packs/procedures/network-infoblox-snmp",title:"Infoblox SNMP",description:"Plugin Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/network-infoblox-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-infoblox-snmp",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/network-infoblox-snmp",draft:!1,tags:[],version:"current",frontMatter:{id:"network-infoblox-snmp",title:"Infoblox SNMP"},sidebar:"pp",previous:{title:"Huawei",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/network-huawei-snmp"},next:{title:"Juniper EX Series",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/network-switchs-juniper-ex-snmp"}},u={},c=[{value:"Plugin Pack Assets",id:"plugin-pack-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Discovery rules",id:"discovery-rules",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Host configuration",id:"host-configuration",level:2},{value:"How to test the Plugin and what are the main options for?",id:"how-to-test-the-plugin-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:3},{value:"UNKNOWN: SNMP GET Request : Cant get a single value.",id:"unknown-snmp-get-request--cant-get-a-single-value",level:4}],d={toc:c};function f(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)("wrapper",i({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",i({},{id:"plugin-pack-assets"}),"Plugin Pack Assets"),(0,n.kt)("h3",i({},{id:"monitored-objects"}),"Monitored Objects"),(0,n.kt)("p",null,"The Plugin Pack Infoblox SNMP collects metrics for:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Dhcp"),(0,n.kt)("li",{parentName:"ul"},"Dns"),(0,n.kt)("li",{parentName:"ul"},"Interfaces"),(0,n.kt)("li",{parentName:"ul"},"Services"),(0,n.kt)("li",{parentName:"ul"},"System")),(0,n.kt)("h3",i({},{id:"discovery-rules"}),"Discovery rules"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Services",label:"Services",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Rule name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Net-Infoblox-SNMP-Interface-Name"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Discover network interfaces and monitor bandwidth utilization")))))),(0,n.kt)("h3",i({},{id:"collected-metrics"}),"Collected Metrics"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Dhcp",label:"Dhcp",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"dhcp.discovers.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of discovery messages received"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"dhcp.requests.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of requests received"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"dhcp.releases.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of releases received"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"dhcp.offers.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of offers sent"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"dhcp.acks.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of acks sent"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"dhcp.nacks.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of nacks sent"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"dhcp.declines.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of declines received"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"dhcp.informs.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of informs received"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"dhcp.others.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of other messages received"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"subnet","_","ipaddr"),"#","subnet.addresses.usage.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Percentage of dynamic DHCP address for subnet leased out"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%"))))),(0,n.kt)(l.Z,{value:"Dns",label:"Dns",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"dns.queries.persecond"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of dns queries"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"dns.hits.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Dns hit ratio"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"dns.queries.authoritative.latency.1m.microseconds"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Average latencies for incoming DNS queries during the last 1 minute where the reply was authoritative"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"dns.queries.authoritative.latency.5m.microseconds"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Average latencies for incoming DNS queries during the last 5 minute where the reply was authoritative"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"dns.queries.authoritative.latency.15m.microseconds"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Average latencies for incoming DNS queries during the last 15 minute where the reply was authoritative"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"dns.queries.non_authoritative.latency.1m.microseconds"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Average latencies for incoming DNS queries during the last 1 minute where the reply was non authoritative"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"dns.queries.non_authoritative.latency.5m.microseconds"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Average latencies for incoming DNS queries during the last 5 minute where the reply was non authoritative"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"dns.queries.non_authoritative.latency.15m.microseconds"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Average latencies for incoming DNS queries during the last 15 minute where the reply was non authoritative"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"zone","_","name"),"#","zone.responses.succeeded.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of successful responses"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"zone","_","name"),"#","zone.referrals.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of DNS referrals"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"zone","_","name"),"#","zone.queries.nxrrset.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of DNS query received for non-existent record"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"zone","_","name"),"#","zone.queries.failed.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of Failed queries"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"})))))),(0,n.kt)(l.Z,{value:"Interfaces",label:"Interfaces",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"status"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Status of the interface"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.traffic.in.bitspersecond"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Incoming traffic going through the interface"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.traffic.in.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Percentage of the interface's ",(0,n.kt)("em",{parentName:"td"},"in")," bandwidth usage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.traffic.out.bitspersecond"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Outgoing traffic going through the interface"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.traffic.out.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Percentage of the interface's ",(0,n.kt)("em",{parentName:"td"},"out")," bandwidth usage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%")))),(0,n.kt)("p",null,"A regexp filter is available to target a specific interface identifier - ifName ","[",(0,n.kt)("inlineCode",{parentName:"p"},"--interface='^eth0$' --name"),"]")),(0,n.kt)(l.Z,{value:"Services",label:"Services",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"service status"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Status of the service"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"})))))),(0,n.kt)(l.Z,{value:"System",label:"System",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"cpu.utilization.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"CPU utilization"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"memory.usage.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Memory usage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"swap.usage.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Swap usage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"system.cpu1.temperature.celsius"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"CPU1 temperature"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"system.cpu2.temperature.celsius"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"CPU2 temperature"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"ha status"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Status of high-availability"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))))))),(0,n.kt)("h2",i({},{id:"prerequisites"}),"Prerequisites"),(0,n.kt)("p",null,"To monitor your Infoblox, the SNMP must be configured.\nThe Poller should be able to perform SNMP requests toward the Infoblox device over SNMP UDP/161 port."),(0,n.kt)("h2",i({},{id:"setup"}),"Setup"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Network-Infoblox-Snmp\n")),(0,n.kt)("ol",i({},{start:2}),(0,n.kt)("li",{parentName:"ol"},'On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the ',(0,n.kt)("em",{parentName:"li"},"Infoblox SNMP")," Plugin Pack"))),(0,n.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Network-Infoblox-Snmp\n")),(0,n.kt)("ol",i({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"On the Centreon Central server, install the Centreon Plugin Pack from the RPM:")),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-pack-network-infoblox-snmp\n")),(0,n.kt)("ol",i({},{start:3}),(0,n.kt)("li",{parentName:"ol"},'On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the ',(0,n.kt)("em",{parentName:"li"},"Infoblox SNMP")," Plugin Pack")))),(0,n.kt)("h2",i({},{id:"host-configuration"}),"Host configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add a new Host and fill the ",(0,n.kt)("em",{parentName:"li"},"IP Address/FQDN"),", ",(0,n.kt)("em",{parentName:"li"},"SNMP Version")," and ",(0,n.kt)("em",{parentName:"li"},"SNMP Community")," fields according to the device's configuration"),(0,n.kt)("li",{parentName:"ul"},"Apply the ",(0,n.kt)("em",{parentName:"li"},"Net-Infoblox-SNMP-custom")," Host Template")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Mandatory"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"})),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"SNMPEXTRAOPTIONS"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Configure your own SNMPv3 credentials combo")))),(0,n.kt)("h2",i({},{id:"how-to-test-the-plugin-and-what-are-the-main-options-for"}),"How to test the Plugin and what are the main options for?"),(0,n.kt)("p",null,"Once the plugin installed, log into your Centreon Poller CLI using the ",(0,n.kt)("em",{parentName:"p"},"centreon-engine")," user account\nand test the Plugin by running the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_infoblox_snmp.pl \\\n    --plugin=network::infoblox::snmp::plugin \\\n    --mode=system \\\n    --hostname=10.30.2.114 \\\n    --snmp-version='2c' \\\n    --snmp-community='infoblox_ro' \\\n    --warning-cpu-load='90' \\\n    --critical-cpu-load='95' \\\n    --verbose\n")),(0,n.kt)("p",null,"Expected command output is shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"OK: System 'IB-825' is ok | 'cpu.utilization.percentage'=3.00%;0:90;0:95;0;100 'memory.usage.percentage'=2.00%;;;0;100 'swap.usage.percentage'=0.00%;;;0;100 'system.cpu1.temperature.celsius'=20.00C;;;;\nchecking system 'IB-825'\n    cpu load: 3.00 %\n    memory used: 2.00 %\n    swap used: 0.00 %\n    cpu1 temperature: 20.00 C\n    high-availablity status is 'Not Configured'\n")),(0,n.kt)("p",null,"The command above monitors Infoblox (",(0,n.kt)("inlineCode",{parentName:"p"},"--plugin=network::infoblox::snmp::plugin --mode=system"),") identified\nby the IP address ",(0,n.kt)("em",{parentName:"p"},"10.30.2.114")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--hostname=10.30.2.114"),"). As the Plugin is using the SNMP protocol to request the device, the related\n",(0,n.kt)("em",{parentName:"p"},"community")," and ",(0,n.kt)("em",{parentName:"p"},"version")," are specified (",(0,n.kt)("inlineCode",{parentName:"p"},"--snmp-version='2c' --snmp-community='infoblox_ro'"),")."),(0,n.kt)("p",null,"This command would trigger a WARNING alarm if cpu utilization over 90%\n(",(0,n.kt)("inlineCode",{parentName:"p"},"--warning-cpu-load='90'"),") and a CRITICAL alarm over 95% (",(0,n.kt)("inlineCode",{parentName:"p"},"--critical-cpu-load='95'"),")."),(0,n.kt)("p",null,"All the options as well as all the available thresholds can be displayed by adding the  ",(0,n.kt)("inlineCode",{parentName:"p"},"--help"),"\nparameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_infoblox_snmp.pl \\\n    --plugin=network::infoblox::snmp::plugin \\\n    --mode=system \\\n    --help\n")),(0,n.kt)("h2",i({},{id:"troubleshooting"}),"Troubleshooting"),(0,n.kt)("h3",i({},{id:"unknown-snmp-get-request--timeout"}),"UNKNOWN: SNMP GET Request : Timeout"),(0,n.kt)("p",null,"If you get this message, you're probably facing one of theses issues:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The SNMP agent of the device isn't started or is misconfigured"),(0,n.kt)("li",{parentName:"ul"},"An external device is blocking the request (firewall, ...)")),(0,n.kt)("h4",i({},{id:"unknown-snmp-get-request--cant-get-a-single-value"}),"UNKNOWN: SNMP GET Request : Cant get a single value."),(0,n.kt)("p",null,"This error message often refers to the following issues: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The agent doesn't support the MIB used by the plugin"),(0,n.kt)("li",{parentName:"ul"},"The targeted SNMP OID cannot be fetched because of insufficient privileges on the device.\nSNMP Agent must be capable of accessing to the enterprise branch: .1.3.6.1.4.1.7779")))}f.isMDXComponent=!0},7626:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function o({children:e,hidden:t,className:a}){return n.createElement("div",i({role:"tabpanel",className:(0,r.Z)(l,a)},{hidden:t}),e)}},67709:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(67294),r=a(86010),l=a(90980),i=a(35715),o=a(8854),p=a(8241);const s="tabList__CuJ",m="tabItem_LNqP";function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u.apply(this,arguments)}function c(e){var t;const{lazy:a,block:l,defaultValue:c,values:d,groupId:f,className:k}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=d?d:g.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),b=(0,i.l)(N,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var h;const v=null===c?c:null!==(h=null!=c?c:null===(t=g.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==h?h:g[0].props.value;if(null!==v&&!N.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,o.U)(),[P,O]=(0,n.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:S}=(0,p.o5)();if(null!=f){const e=y[f];null!=e&&e!==P&&N.some((t=>t.value===e))&&O(e)}const x=e=>{const t=e.currentTarget,a=T.indexOf(t),n=N[a].value;n!==P&&(S(t),O(n),null!=f&&w(f,String(n)))},I=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;var a;t=null!==(a=T[n])&&void 0!==a?a:T[0];break}case"ArrowLeft":{const a=T.indexOf(e.currentTarget)-1;var n;t=null!==(n=T[a])&&void 0!==n?n:T[T.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",s)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},k)},N.map((({value:e,label:t,attributes:a})=>n.createElement("li",u({role:"tab",tabIndex:P===e?0:-1,"aria-selected":P===e,key:e,ref:e=>T.push(e),onKeyDown:I,onFocus:x,onClick:x},a,{className:(0,r.Z)("tabs__item",m,null==a?void 0:a.className,{"tabs__item--active":P===e})}),null!=t?t:e)))),a?(0,n.cloneElement)(g.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function d(e){const t=(0,l.Z)();return n.createElement(c,u({key:String(t)},e))}}}]);