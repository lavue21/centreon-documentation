"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[9270],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,g=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return a?n.createElement(g,l(l({ref:t},s),{},{components:a})):n.createElement(g,l({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},47614:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>g,frontMatter:()=>p,metadata:()=>s,toc:()=>c});a(67294);var n=a(3905),r=a(67709),i=a(7626);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const p={id:"network-ubiquiti-edge-snmp",title:"Ubiquiti Edge SNMP"},u=void 0,s={unversionedId:"integrations/plugin-packs/procedures/network-ubiquiti-edge-snmp",id:"integrations/plugin-packs/procedures/network-ubiquiti-edge-snmp",title:"Ubiquiti Edge SNMP",description:"Contenu du Pack de supervision",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/network-ubiquiti-edge-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-ubiquiti-edge-snmp",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/network-ubiquiti-edge-snmp",draft:!1,tags:[],version:"current",frontMatter:{id:"network-ubiquiti-edge-snmp",title:"Ubiquiti Edge SNMP"},sidebar:"pp",previous:{title:"Ubiquiti AirFiber SNMP",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/network-ubiquiti-airfiber-snmp"},next:{title:"Ubiquiti UniFi SNMP",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/network-ubiquiti-unifi-snmp"}},m={},c=[{value:"Contenu du Pack de supervision",id:"contenu-du-pack-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"R\xe8gles de d\xe9couvertes",id:"r\xe8gles-de-d\xe9couvertes",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostique",id:"diagnostique",level:2}],d={toc:c};function g(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)("wrapper",l({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",l({},{id:"contenu-du-pack-de-supervision"}),"Contenu du Pack de supervision"),(0,n.kt)("h3",l({},{id:"objets-supervis\xe9s"}),"Objets supervis\xe9s"),(0,n.kt)("p",null,"Le Pack Ubiquiti Edge collecte les donn\xe9es pour:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Cpu"),(0,n.kt)("li",{parentName:"ul"},"Hardware"),(0,n.kt)("li",{parentName:"ul"},"Interfaces"),(0,n.kt)("li",{parentName:"ul"},"Memory")),(0,n.kt)("h3",l({},{id:"r\xe8gles-de-d\xe9couvertes"}),"R\xe8gles de d\xe9couvertes"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Services",label:"Services",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Rule name"),(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Net-Ubiquiti-Edge-SNMP-Interface-Name"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"D\xe9couvre les interfaces r\xe9seaux et supervise le statut et l'utilisation de la bande passante")))))),(0,n.kt)("h3",l({},{id:"m\xe9triques-collect\xe9es"}),"M\xe9triques collect\xe9es"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Cpu",label:"Cpu",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"cpu.utilization.5s.percentage"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"CPU utilization during last 5 seconds."),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"cpu.utilization.1m.percentage"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"CPU utilization during last minute."),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"cpu.utilization.5m.percentage"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"CPU utilization during last 5 minutes."),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"%"))))),(0,n.kt)(i.Z,{value:"Hardware",label:"Hardware",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"disk.status"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Status of the disk"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"raid.status"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Status of the raid"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"fan.status"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Status of the fan"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"temperature.status"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Status of the temperature"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"voltage.status"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Status of the voltage"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"hardware.fan.speed.rpm"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Speed of fan"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"rpm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"hardware.temperature.celsius"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"temperature of the different sensors"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"hardware.voltage.millivolt"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Voltage of the different sensors"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"mV"))))),(0,n.kt)(i.Z,{value:"Interfaces",label:"Interfaces",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"status"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Status of the interface"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.traffic.in.bitspersecond"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Incoming traffic going through the interface."),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.traffic.out.bitspersecond"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Outgoing traffic going through the interface."),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.packets.in.error.percentage"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Incoming errored packets going through the interface."),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.packets.in.discard.percentage"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Incoming discarded packets going through the interface."),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.packets.out.error.percentage"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Outgoing errored packets going through the interface."),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.packets.out.discard.percentage"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Outgoing discarded packets going through the interface."),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"%"))))),(0,n.kt)(i.Z,{value:"Memory",label:"Memory",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"memory.usage.bytes"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Memory usage"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"B")))))),(0,n.kt)("h2",l({},{id:"pr\xe9requis"}),"Pr\xe9requis"),(0,n.kt)("p",null,"Afin de contr\xf4ler vos \xe9quipements Edge Ubiquiti, le SNMP doit \xeatre configur\xe9."),(0,n.kt)("p",null,"Les collecteurs Centreon doivent pouvoir communiquer via le port UDP/161 SNMP avec l'\xe9quipement."),(0,n.kt)("h2",l({},{id:"installation"}),"Installation"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Network-Ubiquiti-Edge-Snmp\n")),(0,n.kt)("ol",l({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Pack ",(0,n.kt)("em",{parentName:"li"},"Ubiquiti Edge SNMP")," depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Plugin Packs > Gestionnaire")))),(0,n.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Network-Ubiquiti-Edge-Snmp\n")),(0,n.kt)("ol",l({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le Pack via le RPM:")),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"yum install centreon-pack-network-ubiquiti-edge-snmp\n")),(0,n.kt)("ol",l({},{start:3}),(0,n.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Pack ",(0,n.kt)("em",{parentName:"li"},"Ubiquiti Edge SNMP")," depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Plugin Packs > Gestionnaire"))))),(0,n.kt)("h2",l({},{id:"configuration"}),"Configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ajoutez un nouvel H\xf4te depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes")),(0,n.kt)("li",{parentName:"ul"},"Compl\xe9tez les champs ",(0,n.kt)("em",{parentName:"li"},"Adresse IP/DNS"),", ",(0,n.kt)("em",{parentName:"li"},"Communaut\xe9 SNMP")," et ",(0,n.kt)("em",{parentName:"li"},"Version SNMP")),(0,n.kt)("li",{parentName:"ul"},"Appliquez le Mod\xe8le d'H\xf4te ",(0,n.kt)("em",{parentName:"li"},"Net-Ubiquiti-Edge-SNMP-custom"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Si vous utilisez la version 3 du protocole SNMP, utilisez la Macro ",(0,n.kt)("em",{parentName:"p"},"SNMPEXTRAOPTIONS")," afin de renseigner les param\xe8tres\nd'authentification et de chiffrement ad\xe9quats")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Mandatory"),(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Name"),(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"})),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"SNMPEXTRAOPTIONS"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Extra options SNMP")))),(0,n.kt)("h2",l({},{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"}),"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,n.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande depuis un collecteur Centreon en vous connectant avec l'utilisateur ",(0,n.kt)("em",{parentName:"p"},"centreon-engine")," :"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_ubiquiti_edge__snmp.pl \\\n    --plugin=network::ubiquiti::edge::snmp::plugin \\\n    --mode=cpu \\\n    --hostname=10.30.2.114 \\\n    --snmp-version='2c' \\\n    --snmp-community='ubiquiti_ro' \\\n    --warning-1m='90' \\\n    --critical-1m='95' \\\n    --verbose\n")),(0,n.kt)("p",null,"La commande devrait retourner un message de sortie de la forme ci-dessous:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"OK: CPU 53.59 % (5sec), 38.13 % (1m), 21.37 % (5min) | 'cpu.utilization.5s.percentage'=53.59%;;;0;100 'cpu.utilization.1m.percentage'=38.13%;0:90;0:95;0;100 'cpu.utilization.5m.percentage'=21.37%;;;0;100\n")),(0,n.kt)("p",null,"Cette commande contr\xf4le l'utilisation CPU (",(0,n.kt)("inlineCode",{parentName:"p"},"--mode=cpu"),") d'un \xe9quipement ayant pour adresse ",(0,n.kt)("em",{parentName:"p"},"10.30.2.114")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--hostname=10.30.2.114"),")\nen version ",(0,n.kt)("em",{parentName:"p"},"2c")," du protocol SNMP (",(0,n.kt)("inlineCode",{parentName:"p"},"--snmp-version='2c'"),") et avec la communaut\xe9 ",(0,n.kt)("em",{parentName:"p"},"ubiquiti_ro")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--snmp-community='ubiquiti_ro'"),")."),(0,n.kt)("p",null,"Cette commande d\xe9clenchera une alarme WARNING si l'utilisation CPU sur la derni\xe8re minute est \xe0 plus de 90% (",(0,n.kt)("inlineCode",{parentName:"p"},"--warning-1m='90'"),")\net une alarme CRITICAL si plus de 95% sur la derni\xe8re minute  (",(0,n.kt)("inlineCode",{parentName:"p"},"--critical-1m='95'"),")."),(0,n.kt)("p",null,"Pour chaque mode, la liste de toutes les m\xe9triques, seuils associ\xe9s et options compl\xe9mentaires peut \xeatre affich\xe9e\nen ajoutant le param\xe8tre ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_ubiquiti_edge_snmp.pl \\\n    --plugin=network::ubiquiti::edge::snmp::plugin \\\n    --mode=cpu \\\n    --help\n")),(0,n.kt)("h2",l({},{id:"diagnostique"}),"Diagnostique"),(0,n.kt)("p",null,(0,n.kt)("a",l({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"}),"Diagnostique des plugins")))}g.isMDXComponent=!0},7626:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const i="tabItem_Ymn6";function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function o({children:e,hidden:t,className:a}){return n.createElement("div",l({role:"tabpanel",className:(0,r.Z)(i,a)},{hidden:t}),e)}},67709:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(67294),r=a(86010),i=a(90980),l=a(35715),o=a(8854),p=a(8241);const u="tabList__CuJ",s="tabItem_LNqP";function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},m.apply(this,arguments)}function c(e){var t;const{lazy:a,block:i,defaultValue:c,values:d,groupId:g,className:k}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=d?d:f.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),b=(0,l.l)(N,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var v;const h=null===c?c:null!==(v=null!=c?c:null===(t=f.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==v?v:f[0].props.value;if(null!==h&&!N.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:P}=(0,o.U)(),[O,q]=(0,n.useState)(h),w=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=g){const e=y[g];null!=e&&e!==O&&N.some((t=>t.value===e))&&q(e)}const S=e=>{const t=e.currentTarget,a=w.indexOf(t),n=N[a].value;n!==O&&(C(t),q(n),null!=g&&P(g,String(n)))},T=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;var a;t=null!==(a=w[n])&&void 0!==a?a:w[0];break}case"ArrowLeft":{const a=w.indexOf(e.currentTarget)-1;var n;t=null!==(n=w[a])&&void 0!==n?n:w[w.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},k)},N.map((({value:e,label:t,attributes:a})=>n.createElement("li",m({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>w.push(e),onKeyDown:T,onFocus:S,onClick:S},a,{className:(0,r.Z)("tabs__item",s,null==a?void 0:a.className,{"tabs__item--active":O===e})}),null!=t?t:e)))),a?(0,n.cloneElement)(f.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function d(e){const t=(0,i.Z)();return n.createElement(c,m({key:String(t)},e))}}}]);