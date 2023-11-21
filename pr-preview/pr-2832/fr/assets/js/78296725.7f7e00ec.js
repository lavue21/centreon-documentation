"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[2611],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74304:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>m});n(67294);var a=n(3905),r=n(67709),l=n(7626);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"network-ruckus-smartzone-snmp",title:"Ruckus Smartzone"},u=void 0,p={unversionedId:"integrations/plugin-packs/procedures/network-ruckus-smartzone-snmp",id:"integrations/plugin-packs/procedures/network-ruckus-smartzone-snmp",title:"Ruckus Smartzone",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/network-ruckus-smartzone-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-ruckus-smartzone-snmp",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/network-ruckus-smartzone-snmp",draft:!1,tags:[],version:"current",frontMatter:{id:"network-ruckus-smartzone-snmp",title:"Ruckus Smartzone"},sidebar:"pp",previous:{title:"Ruckus SCG",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/network-ruckus-scg-snmp"},next:{title:"Ruggedcom Network",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/network-ruggedcom"}},c={},m=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du Plugin-Pack",id:"contenu-du-plugin-pack",level:2},{value:"Elements supervis\xe9s",id:"elements-supervis\xe9s",level:3},{value:"R\xe8gles de d\xe9couverte",id:"r\xe8gles-de-d\xe9couverte",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Configuration de l&#39;\xe9quipement",id:"configuration-de-l\xe9quipement",level:3},{value:"Flux r\xe9seaux",id:"flux-r\xe9seaux",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment tester mes configurations et le Plugin en ligne de commande ?",id:"comment-tester-mes-configurations-et-le-plugin-en-ligne-de-commande-",level:3},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:3},{value:"UNKNOWN: SNMP GET Request : Cant get a single value.",id:"unknown-snmp-get-request--cant-get-a-single-value",level:3}],d={toc:m};function k(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",i({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",i({},{id:"vue-densemble"}),"Vue d'ensemble"),(0,a.kt)("p",null,"Les contr\xf4leurs r\xe9seau Ruckus SmartZone sont les premi\xe8res appliances du secteur \xe0 permettre au service informatique de g\xe9rer les r\xe9seaux LAN et WLAN en utilisant un seul syst\xe8me g\xe9r\xe9 par des contr\xf4leurs avec une seule interface utilisateur"),(0,a.kt)("h2",i({},{id:"contenu-du-plugin-pack"}),"Contenu du Plugin-Pack"),(0,a.kt)("h3",i({},{id:"elements-supervis\xe9s"}),"Elements supervis\xe9s"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Point d'acc\xe8s"),(0,a.kt)("li",{parentName:"ul"},"Contr\xf4leur")),(0,a.kt)("h3",i({},{id:"r\xe8gles-de-d\xe9couverte"}),"R\xe8gles de d\xe9couverte"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Rule name"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Net-Ruckus-Smartzone-SNMP-Ap-Name"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"D\xe9couverte des points d'acc\xe8s g\xe9r\xe9s par un contr\xf4leur")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Net-Ruckus-Smartzone-SNMP-Disk-Name"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"D\xe9couverte des points de montage d'un contr\xf4leur")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Net-Ruckus-Smartzone-SNMP-Traffic-Name"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"D\xe9couverte des interfaces d'un contr\xf4leur")))),(0,a.kt)("h3",i({},{id:"m\xe9triques-collect\xe9es"}),"M\xe9triques collect\xe9es"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Access-Point",label:"Access-Point",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"connection_status"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"The connection status.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"config_status"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"The registration status, which could either be pending, approved, rejected or swapped.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"registration_status"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"The AP configuration status.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"accesspoint.connection.client.devices.authorized.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"The number of stations. Unit: Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"accesspoint.traffic.in.bitspersecond"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Incoming traffic going through the access point. Unit: bits/second")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"accesspoint.traffic.out.bitspersecond"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Outgoing traffic going through the access point. Unit: bits/second"))))),(0,a.kt)(l.Z,{value:"Cpu",label:"Cpu",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"cpu.utilization.percentage"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"CPU utilization. Unit : %")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"core.cpu.utilization.percentage"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Per Core CPU utilization. Unit : %"))))),(0,a.kt)(l.Z,{value:"Interfaces",label:"Interfaces",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"status"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Status of the interface")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"interface.traffic.in.bitspersecond"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Incoming traffic going through the interface. Unit: bits/second")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"interface.traffic.out.bitspersecond"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Outgoing traffic going through the interface. Unit: bits/second")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"interface.packets.in.error.percentage"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Incoming errored packets going through the interface. Units: %")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"interface.packets.in.discard.percentage"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Incoming discarded packets going through the interface. Units: %")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"interface.packets.out.error.percentage"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Outgoing errored packets going through the interface. Units: %")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"interface.packets.out.discard.percentage"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Outgoing discarded packets going through the interface. Units: %"))))),(0,a.kt)(l.Z,{value:"Load",label:"Load",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"load1"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"System load 1 minute-sample")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"load5"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"System load 5 minutes-sample")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"load15"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"System load 15 minutes-sample"))))),(0,a.kt)(l.Z,{value:"Memory",label:"Memory",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"memory.usage.bytes"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Memory usage on the device. Unit : Bytes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"memory.free.bytes"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Free memory on the device. Unit : Bytes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"memory.usage.percentage"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Percentage of Memory usage on the device. Unit : %")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"memory.buffer.bytes"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Buffered Memory allocation. Unit : Bytes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"memory.cached.bytes"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Cached Memory allocation. Unit : Bytes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"memory.shared.bytes"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Shared Memory allocation. Unit : Bytes"))))),(0,a.kt)(l.Z,{value:"Storage",label:"Storage",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"storage.space.usage.bytes"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Used space on a disk partition. Unit: Bytes"))))),(0,a.kt)(l.Z,{value:"System",label:"System",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"system.connection.accesspoints.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"The number of APs. Unit: Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"system.connection.client.devices.authorized.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"The number of associated clients. Unit: Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"system.traffic.in.bitspersecond"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Incoming traffic going through the system. Unit: bits/second")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"system.traffic.out.bitspersecond"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Outgoing traffic going through the system. Unit: bits/second")))))),(0,a.kt)("h2",i({},{id:"pr\xe9requis"}),"Pr\xe9requis"),(0,a.kt)("h3",i({},{id:"configuration-de-l\xe9quipement"}),"Configuration de l'\xe9quipement"),(0,a.kt)("p",null,"Pour utiliser ce Plugin-Pack, vous devez configurer le service SNMP sur l'\xe9quipement. Une description compl\xe8te est disponible sur le site officiel de Ruckus: ",(0,a.kt)("a",i({parentName:"p"},{href:"http://docs.ruckuswireless.com/smartzone/3.6.1/sz100-vsze-administrator-guide/GUID-F08BF334-2116-47A5-900C-B6AA4FC5E62A"}),"http://docs.ruckuswireless.com/smartzone/3.6.1/sz100-vsze-administrator-guide/GUID-F08BF334-2116-47A5-900C-B6AA4FC5E62A")),(0,a.kt)("h3",i({},{id:"flux-r\xe9seaux"}),"Flux r\xe9seaux"),(0,a.kt)("p",null,"Les Collecteurs Centreon doivent pouvoir communiquer via le port UDP/161 SNMP avec l'\xe9quipement."),(0,a.kt)("h2",i({},{id:"installation"}),"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon supervisant des \xe9quipements Ruckus:")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Network-Ruckus-Smartzone-Snmp\n")),(0,a.kt)("ol",i({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin-Pack 'Ruckus Smartzone' depuis l'interface Web et la page \"Configuration > Plugin packs > Manager\""))),(0,a.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon supervisants des \xe9quipements Ruckus:")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Network-Ruckus-Smartzone-Snmp\n")),(0,a.kt)("ol",i({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"Installer le RPM pour avoir \xe0 disposition le Plugin-Pack dans l'interface Web de Centreon:")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-pack-network-ruckus-smartzone-snmp.noarch\n")),(0,a.kt)("ol",i({},{start:3}),(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin-Pack 'Ruckus Smartzone' depuis la page \"Configuration > Plugin Packs > Manager\" de l'interface Web. ")))),(0,a.kt)("h2",i({},{id:"configuration"}),"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Depuis l\'interface Web de Centreon, ajoutez un nouvel H\xf4te depuis la page "Configuration > H\xf4tes".'),(0,a.kt)("li",{parentName:"ul"},"Appliquer le mod\xe8le \"Net-Ruckus-Smartzone-SNMP-custom\" et configurer les champs 'SNMP Community' et 'SNMP Version' selon la configuration de l'\xe9quipement.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Si vous utilisez SNMP en version 3, vous devez configurer les param\xe8tres sp\xe9cifiques associ\xe9s via la macro SNMPEXTRAOPTIONS")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Mandatory"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Nom"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"})),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"SNMPEXTRAOPTIONS"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Any extra option you may want to add to the command (eg. a --verbose flag)")))),(0,a.kt)("h2",i({},{id:"faq"}),"FAQ"),(0,a.kt)("h3",i({},{id:"comment-tester-mes-configurations-et-le-plugin-en-ligne-de-commande-"}),"Comment tester mes configurations et le Plugin en ligne de commande ?"),(0,a.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez le tester en ligne de commande avec l'utilisateur centreon-engine: "),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins//centreon_ruckus_smartzone_snmp.pl \\\n    --plugin=network::ruckus::smartzone::snmp::plugin \\\n    --mode=cpu \\\n    --hostname=ruckus.int.centreon.com \\\n    --snmp-version='2c' \\\n    --snmp-community='ruckus_smartzone' \\\n        --verbose \n")),(0,a.kt)("p",null,"Cette commande contr\xf4le l'utilisation CPU (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=cpu"),") d'un \xe9quipement ayant pour adresse/FQDN ruckus.int.centreon.com (",(0,a.kt)("inlineCode",{parentName:"p"},"--hostname=ruckus.int.centreon.com"),") en version 2 du protocole SNMP et avec la communaut\xe9 ruckus_smartzone (",(0,a.kt)("inlineCode",{parentName:"p"},"--snmp-version='2c' --snmp-community='ruckus-smartzone'"),") "),(0,a.kt)("p",null,"Tous les modes disponibles peuvent \xeatre affich\xe9s via l'option --list-mode:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins//centreon_ruckus_smartzone_snmp.pl \\\n    --plugin=network::ruckus::smartzone::snmp::plugin \\\n    --list-mode\n")),(0,a.kt)("p",null,"Pour un mode en particulier, il est possible d'utiliser le param\xe8tre  ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," pour lister toutes les options disponibles. "),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins//centreon_ruckus_smartzone_snmp.pl \\\n    --plugin=network::ruckus::smartzone::snmp::plugin \\\n    --mode=cpu \\\n    --help\n")),(0,a.kt)("h3",i({},{id:"unknown-snmp-get-request--timeout"}),"UNKNOWN: SNMP GET Request : Timeout"),(0,a.kt)("p",null,"Si vous obtenez ce message, cela signifie le Collecteur Centreon ne parvient pas \xe0 contacter l'\xe9quipement Ruckus sur le port 161 (firewall ou autre \xe9quipement en coupure) ou que la communaut\xe9 SNMP configur\xe9e n'est pas correcte."),(0,a.kt)("h3",i({},{id:"unknown-snmp-get-request--cant-get-a-single-value"}),"UNKNOWN: SNMP GET Request : Cant get a single value."),(0,a.kt)("p",null,"Les causes de cette erreur peuvent \xeatre les suivantes: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"cet \xe9quipement ne supporte ou n'embarque pas la MIB utilis\xe9e par ce mode"),(0,a.kt)("li",{parentName:"ul"},"les autorisations donn\xe9es \xe0 l'utilisateur en SNMP sont trop restreintes. L'agent SNMP doit \xeatre en mesure d'acc\xe9der \xe0 la branche entreprise Ruckus: .1.3.6.1.4.1.25053.")))}k.isMDXComponent=!0},7626:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function o({children:e,hidden:t,className:n}){return a.createElement("div",i({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},67709:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(67294),r=n(86010),l=n(90980),i=n(35715),o=n(8854),s=n(8241);const u="tabList__CuJ",p="tabItem_LNqP";function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function m(e){var t;const{lazy:n,block:l,defaultValue:m,values:d,groupId:k,className:g}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=d?d:f.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),b=(0,i.l)(N,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var v;const h=null===m?m:null!==(v=null!=m?m:null===(t=f.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==v?v:f[0].props.value;if(null!==h&&!N.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:P}=(0,o.U)(),[O,w]=(0,a.useState)(h),T=[],{blockElementScrollPositionUntilNextRender:S}=(0,s.o5)();if(null!=k){const e=y[k];null!=e&&e!==O&&N.some((t=>t.value===e))&&w(e)}const C=e=>{const t=e.currentTarget,n=T.indexOf(t),a=N[n].value;a!==O&&(S(t),w(a),null!=k&&P(k,String(a)))},z=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;var n;t=null!==(n=T[a])&&void 0!==n?n:T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;var a;t=null!==(a=T[n])&&void 0!==a?a:T[T.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},g)},N.map((({value:e,label:t,attributes:n})=>a.createElement("li",c({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>T.push(e),onKeyDown:z,onFocus:C,onClick:C},n,{className:(0,r.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":O===e})}),null!=t?t:e)))),n?(0,a.cloneElement)(f.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function d(e){const t=(0,l.Z)();return a.createElement(m,c({key:String(t)},e))}}}]);