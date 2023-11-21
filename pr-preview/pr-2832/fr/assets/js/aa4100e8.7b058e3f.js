"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[56106],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(a),d=n,g=c["".concat(p,".").concat(d)]||c[d]||m[d]||l;return a?r.createElement(g,i(i({ref:t},s),{},{components:a})):r.createElement(g,i({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},47710:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>g,frontMatter:()=>p,metadata:()=>s,toc:()=>c});a(67294);var r=a(3905),n=a(67709),l=a(7626);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const p={id:"network-fortinet-fortiadc-snmp",title:"Fortinet FortiADC SNMP"},u=void 0,s={unversionedId:"integrations/plugin-packs/procedures/network-fortinet-fortiadc-snmp",id:"integrations/plugin-packs/procedures/network-fortinet-fortiadc-snmp",title:"Fortinet FortiADC SNMP",description:"Contenu du Pack",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/network-fortinet-fortiadc-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-fortinet-fortiadc-snmp",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/network-fortinet-fortiadc-snmp",draft:!1,tags:[],version:"current",frontMatter:{id:"network-fortinet-fortiadc-snmp",title:"Fortinet FortiADC SNMP"}},m={},c=[{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Mod\xe8les",id:"mod\xe8les",level:3},{value:"R\xe8gles de d\xe9couverte",id:"r\xe8gles-de-d\xe9couverte",level:3},{value:"M\xe9triques &amp; statuts collect\xe9s",id:"m\xe9triques--statuts-collect\xe9s",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Configuration SNMP",id:"configuration-snmp",level:3},{value:"Flux r\xe9seau",id:"flux-r\xe9seau",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4te",id:"h\xf4te",level:3},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:3}],d={toc:c};function g(e){var{components:t}=e,a=o(e,["components"]);return(0,r.kt)("wrapper",i({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",i({},{id:"contenu-du-pack"}),"Contenu du Pack"),(0,r.kt)("h3",i({},{id:"mod\xe8les"}),"Mod\xe8les"),(0,r.kt)("p",null,"Le Pack Centreon Fortinet FortiADC SNMP apporte 1 mod\xe8le d'h\xf4te :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Net-Fortinet-Fortiadc-SNMP-custom")),(0,r.kt)("p",null,"Il apporte les Mod\xe8les de Service suivants :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Service Alias"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Service Template"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Default"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Discovery"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Cpu"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Net-Fortinet-Fortiadc-Cpu-SNMP"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"X"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Hardware"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Net-Fortinet-Fortiadc-Hardware-SNMP"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"X"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Interfaces"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Net-Fortinet-Fortiadc-Interfaces-SNMP"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"})),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Memory"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Net-Fortinet-Fortiadc-Memory-SNMP"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"X"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Security"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Net-Fortinet-Fortiadc-Security-SNMP"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"X"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Uptime"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Net-Fortinet-Fortiadc-Uptime-SNMP"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"X"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Virtual-Servers"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Net-Fortinet-Fortiadc-Virtual-Servers-SNMP"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"X"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"X")))),(0,r.kt)("h3",i({},{id:"r\xe8gles-de-d\xe9couverte"}),"R\xe8gles de d\xe9couverte"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Rule name"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Net-Fortinet-Fortiadc-SNMP-Interface-Name"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"D\xe9couvre les interfaces r\xe9seaux et supervise le statut et l'utilisation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Net-Fortinet-Fortiadc-SNMP-Virtual-Server-Name"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"D\xe9couvre les serveurs virtuels et supervise le statut et l'utilisation")))),(0,r.kt)("h3",i({},{id:"m\xe9triques--statuts-collect\xe9s"}),"M\xe9triques & statuts collect\xe9s"),(0,r.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Cpu",label:"Cpu",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"cpu.utilization.2s.percentage"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"CPU utilization for the last 2 seconds"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"cpu.utilization.1m.percentage"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"CPU utilization for the last minute"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"cpu.utilization.5m.percentage"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"CPU utilization for the last 5 minutes"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),(0,r.kt)("em",{parentName:"td"},"core_name"),"#core.cpu.utilization.2s.percentage"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"CPU Core utilization for the last 2 seconds"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),(0,r.kt)("em",{parentName:"td"},"core_name"),"#core.cpu.utilization.1m.percentage"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"CPU Core utilization for the last minute"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),(0,r.kt)("em",{parentName:"td"},"core_name"),"#core.cpu.utilization.5m.percentage"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"CPU Core utilization for the last 5 minutes"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"%"))))),(0,r.kt)(l.Z,{value:"Hardware",label:"Hardware",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"fan status"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Status of the fan"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),(0,r.kt)("em",{parentName:"td"},"fan_name"),"hardware.fan.speed.rpm"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Current fan speed"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"rpm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"temperature status"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Status of temperature probes (cpu and device)"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),(0,r.kt)("em",{parentName:"td"},"probe_name"),"#hardware.temperature.celsius"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Current temperature"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"C"))))),(0,r.kt)(l.Z,{value:"Interfaces",label:"Interfaces",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"status"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Status of the interface"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),(0,r.kt)("em",{parentName:"td"},"interface_name"),"#interface.traffic.in.bitspersecond"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Incoming traffic going through the interface"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"b/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),(0,r.kt)("em",{parentName:"td"},"interface_name"),"#interface.traffic.out.bitspersecond"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Outgoing traffic going through the interface"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"b/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),(0,r.kt)("em",{parentName:"td"},"interface_name"),"#interface.packets.in.error.percentage"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Incoming errored packets going through the interface"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),(0,r.kt)("em",{parentName:"td"},"interface_name"),"#interface.packets.in.discard.percentage"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Incoming discarded packets going through the interface"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),(0,r.kt)("em",{parentName:"td"},"interface_name"),"#interface.packets.out.error.percentage"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Outgoing errored packets going through the interface"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),(0,r.kt)("em",{parentName:"td"},"interface_name"),"#interface.packets.out.discard.percentage"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Outgoing discarded packets going through the interface"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"%"))))),(0,r.kt)(l.Z,{value:"Memory",label:"Memory",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"memory.usage.percentage"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Memory usage in percentage"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"%"))))),(0,r.kt)(l.Z,{value:"Security",label:"Security",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"ddos status"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Current DDoS attack status"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"})))))),(0,r.kt)(l.Z,{value:"Uptime",label:"Uptime",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"system.uptime.seconds"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"System uptime"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"s"))))),(0,r.kt)(l.Z,{value:"Virtual-servers",label:"Virtual-servers",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"virtual_servers.detected.count"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of virtual servers detected"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"virtual_servers.healthy.count"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of virtual servers with status healthy"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"status"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Status for the virtual server"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),(0,r.kt)("em",{parentName:"td"},"vdom_name~vs_name"),"#virtual_server.connections.count"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Concurrent connection rate for the virtual server"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),(0,r.kt)("em",{parentName:"td"},"vdom_name~vs_name"),"#virtual_server.throughput.bitspersecond"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Throughput rate for the virtual server"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"bps")))))),(0,r.kt)("h2",i({},{id:"pr\xe9requis"}),"Pr\xe9requis"),(0,r.kt)("h3",i({},{id:"configuration-snmp"}),"Configuration SNMP"),(0,r.kt)("p",null,"Afin de superviser votre \xe9quipement, le SNMP v2 ou v3 doit \xeatre configur\xe9 comme indiqu\xe9 sur\nla documentation officielle :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",i({parentName:"li"},{href:"https://docs.fortinet.com/product/fortiadc/"}),"https://docs.fortinet.com/product/fortiadc/"))),(0,r.kt)("h3",i({},{id:"flux-r\xe9seau"}),"Flux r\xe9seau"),(0,r.kt)("p",null,"La communication doit \xeatre possible sur le port UDP 161 depuis le collecteur\nCentreon vers l'\xe9quipement supervis\xe9."),(0,r.kt)("h2",i({},{id:"installation"}),"Installation"),(0,r.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources ",(0,r.kt)("strong",{parentName:"li"},"Fortinet FortiADC SNMP")," :")),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Network-Fortinet-Fortiadc-Snmp\n")),(0,r.kt)("ol",i({},{start:2}),(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Pack ",(0,r.kt)("strong",{parentName:"li"},"Fortinet FortiADC SNMP")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),"."))),(0,r.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources ",(0,r.kt)("strong",{parentName:"li"},"Fortinet FortiADC SNMP")," :")),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Network-Fortinet-Fortiadc-Snmp\n")),(0,r.kt)("ol",i({},{start:2}),(0,r.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le RPM du Pack ",(0,r.kt)("strong",{parentName:"li"},"Fortinet FortiADC SNMP")," :")),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-pack-network-fortinet-fortiadc-snmp\n")),(0,r.kt)("ol",i({},{start:3}),(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Pack ",(0,r.kt)("strong",{parentName:"li"},"Fortinet FortiADC SNMP")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),".")))),(0,r.kt)("h2",i({},{id:"configuration"}),"Configuration"),(0,r.kt)("h3",i({},{id:"h\xf4te"}),"H\xf4te"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ajoutez un H\xf4te \xe0 Centreon depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes")),(0,r.kt)("li",{parentName:"ul"},"Compl\xe9tez les champs ",(0,r.kt)("strong",{parentName:"li"},"Nom"),", ",(0,r.kt)("strong",{parentName:"li"},"Alias")," & ",(0,r.kt)("strong",{parentName:"li"},"IP Address / DNS")," correspondant \xe0 votre serveur ",(0,r.kt)("strong",{parentName:"li"},"Fortinet FortiADC SNMP"),"."),(0,r.kt)("li",{parentName:"ul"},"Appliquez le Mod\xe8le d'H\xf4te ",(0,r.kt)("strong",{parentName:"li"},"Net-Fortinet-Fortiadc-SNMP-custom"))),(0,r.kt)("p",null,"Si vous utilisez SNMP en version 3, vous devez configurer les param\xe8tres\nsp\xe9cifiques associ\xe9s via la macro SNMPEXTRAOPTIONS."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Mandatory"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Name"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"})),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"SNMPEXTRAOPTIONS"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"(Default: 'Configure your own SNMPv3 credentials combo')")))),(0,r.kt)("h2",i({},{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"}),"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,r.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne\nde commande depuis votre collecteur Centreon en vous connectant avec\nl'utilisateur ",(0,r.kt)("strong",{parentName:"p"},"centreon-engine"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_fotinet_fortiadc_snmp.pl \\\n    --plugin=network::fortinet::fortiadc::snmp::plugin \\\n    --mode=cpu \\\n    --hostname='10.0.0.1' \\\n    --snmp-version='2c' \\\n    --snmp-community='my-snmp-community' \\\n    --warning-average-5m='' \\\n    --critical-average-5m='' \\\n    --verbose\n")),(0,r.kt)("p",null,"La commande devrait retourner un message de sortie similaire \xe0 :"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"OK: 16 CPU(s) average usage is 0.81 % (2s) 0.00 % (1m) 0.12 % (5m) - All core cpu are ok | 'cpu.utilization.2s.percentage'=0.81%;;;0;100 'cpu.utilization.1m.percentage'=0.00%;;;0;100 'cpu.utilization.5m.percentage'=0.12%;;;0;100 'Core 0#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 0#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 0#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 1#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 1#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 1#core.cpu.utilization.5m.percentage'=2.00%;;;0;100 'Core 10#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 10#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 10#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 11#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 11#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 11#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 12#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 12#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 12#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 13#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 13#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 13#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 14#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 14#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 14#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 15#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 15#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 15#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 2#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 2#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 2#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 3#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 3#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 3#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 4#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 4#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 4#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 5#core.cpu.utilization.2s.percentage'=0.00%;;;0;100 'Core 5#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 5#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 6#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 6#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 6#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 7#core.cpu.utilization.2s.percentage'=0.00%;;;0;100 'Core 7#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 7#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 8#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 8#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 8#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 9#core.cpu.utilization.2s.percentage'=0.00%;;;0;100 'Core 9#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 9#core.cpu.utilization.5m.percentage'=0.00%;;;0;100\nCPU '1' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)\nCPU '2' usage 1.00 % (2s) 0.00 % (1m) 2.00 % (5m)\nCPU '11' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)\nCPU '12' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)\nCPU '13' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)\nCPU '14' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)\nCPU '15' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)\nCPU '16' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)\nCPU '3' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)\nCPU '4' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)\nCPU '5' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)\nCPU '6' usage 0.00 % (2s) 0.00 % (1m) 0.00 % (5m)\nCPU '7' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)\nCPU '8' usage 0.00 % (2s) 0.00 % (1m) 0.00 % (5m)\nCPU '9' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)\nCPU '10' usage 0.00 % (2s) 0.00 % (1m) 0.00 % (5m)\n")),(0,r.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification peut \xeatre\naffich\xe9e en ajoutant le param\xe8tre ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_fotinet_fortiadc_snmp.pl \\\n    --plugin=network::fortinet::fortiadc::snmp::plugin \\\n    --mode=cpu \\\n    --help\n")),(0,r.kt)("p",null,"Tous les modes disponibles peuvent \xeatre affich\xe9s en ajoutant le param\xe8tre\n",(0,r.kt)("inlineCode",{parentName:"p"},"--list-mode")," \xe0 la commande:"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_fotinet_fortiadc_snmp.pl \\\n    --plugin=network::fortinet::fortiadc::snmp::plugin \\\n    --list-mode\n")),(0,r.kt)("h3",i({},{id:"diagnostic-des-erreurs-communes"}),"Diagnostic des erreurs communes"),(0,r.kt)("p",null,"Rendez-vous sur la ",(0,r.kt)("a",i({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#troubleshooting-snmp"}),"documentation d\xe9di\xe9e"),"\npour le diagnostic des erreurs communes des Plugins Centreon."))}g.isMDXComponent=!0},7626:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(86010);const l="tabItem_Ymn6";function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function o({children:e,hidden:t,className:a}){return r.createElement("div",i({role:"tabpanel",className:(0,n.Z)(l,a)},{hidden:t}),e)}},67709:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(67294),n=a(86010),l=a(90980),i=a(35715),o=a(8854),p=a(8241);const u="tabList__CuJ",s="tabItem_LNqP";function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},m.apply(this,arguments)}function c(e){var t;const{lazy:a,block:l,defaultValue:c,values:d,groupId:g,className:k}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=d?d:f.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),b=(0,i.l)(N,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var v;const h=null===c?c:null!==(v=null!=c?c:null===(t=f.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==v?v:f[0].props.value;if(null!==h&&!N.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:C}=(0,o.U)(),[P,z]=(0,r.useState)(h),S=[],{blockElementScrollPositionUntilNextRender:O}=(0,p.o5)();if(null!=g){const e=y[g];null!=e&&e!==P&&N.some((t=>t.value===e))&&z(e)}const w=e=>{const t=e.currentTarget,a=S.indexOf(t),r=N[a].value;r!==P&&(O(t),z(r),null!=g&&C(g,String(r)))},M=e=>{let t=null;switch(e.key){case"ArrowRight":{const r=S.indexOf(e.currentTarget)+1;var a;t=null!==(a=S[r])&&void 0!==a?a:S[0];break}case"ArrowLeft":{const a=S.indexOf(e.currentTarget)-1;var r;t=null!==(r=S[a])&&void 0!==r?r:S[S.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:(0,n.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":l},k)},N.map((({value:e,label:t,attributes:a})=>r.createElement("li",m({role:"tab",tabIndex:P===e?0:-1,"aria-selected":P===e,key:e,ref:e=>S.push(e),onKeyDown:M,onFocus:w,onClick:w},a,{className:(0,n.Z)("tabs__item",s,null==a?void 0:a.className,{"tabs__item--active":P===e})}),null!=t?t:e)))),a?(0,r.cloneElement)(f.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function d(e){const t=(0,l.Z)();return r.createElement(c,m({key:String(t)},e))}}}]);