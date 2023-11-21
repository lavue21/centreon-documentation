"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[11124],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},94814:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>s,metadata:()=>u,toc:()=>c});a(67294);var n=a(3905),r=a(67709),l=a(7626);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const s={id:"network-lenovo-rackswitch-snmp",title:"Lenovo RackSwitch SNMP"},p=void 0,u={unversionedId:"integrations/plugin-packs/procedures/network-lenovo-rackswitch-snmp",id:"integrations/plugin-packs/procedures/network-lenovo-rackswitch-snmp",title:"Lenovo RackSwitch SNMP",description:"Contenu du Pack",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/network-lenovo-rackswitch-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-lenovo-rackswitch-snmp",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/network-lenovo-rackswitch-snmp",draft:!1,tags:[],version:"current",frontMatter:{id:"network-lenovo-rackswitch-snmp",title:"Lenovo RackSwitch SNMP"},sidebar:"pp",previous:{title:"Lenovo Flex System Switch",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/network-lenovo-flexsystem-snmp"},next:{title:"Fiberstore SNMP",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/network-fiberstore-snmp"}},m={},c=[{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Mod\xe8les",id:"mod\xe8les",level:3},{value:"R\xe8gles de d\xe9couverte",id:"r\xe8gles-de-d\xe9couverte",level:3},{value:"M\xe9triques &amp; statuts collect\xe9s",id:"m\xe9triques--statuts-collect\xe9s",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Configuration SNMP",id:"configuration-snmp",level:3},{value:"Flux r\xe9seau",id:"flux-r\xe9seau",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4te",id:"h\xf4te",level:3},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:3}],d={toc:c};function k(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)("wrapper",i({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",i({},{id:"contenu-du-pack"}),"Contenu du Pack"),(0,n.kt)("h3",i({},{id:"mod\xe8les"}),"Mod\xe8les"),(0,n.kt)("p",null,"Le Pack Centreon Lenovo RackSwitch SNMP apporte 1 mod\xe8le d'h\xf4te :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Net-Lenovo-Rackswitch-SNMP-custom")),(0,n.kt)("p",null,"Il apporte les Mod\xe8les de Service suivants :"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Service Alias"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Service Template"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Default"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Discovery"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Cpu"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Net-Lenovo-Rackswitch-Cpu-SNMP"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"X"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Hardware"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Net-Lenovo-Rackswitch-Hardware-SNMP"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"X"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Interfaces"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Net-Lenovo-Rackswitch-Interfaces-SNMP"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"})),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Memory"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Net-Lenovo-Rackswitch-Memory-SNMP"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"X"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Uptime"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Net-Lenovo-Rackswitch-Uptime-SNMP"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"X"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))))),(0,n.kt)("h3",i({},{id:"r\xe8gles-de-d\xe9couverte"}),"R\xe8gles de d\xe9couverte"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Rule name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Net-Lenovo-Rackswitch-SNMP-Interface-Name"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"D\xe9couvre les interfaces r\xe9seaux et supervise le statut et l'utilisation")))),(0,n.kt)("h3",i({},{id:"m\xe9triques--statuts-collect\xe9s"}),"M\xe9triques & statuts collect\xe9s"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Cpu",label:"Cpu",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"cpu.utilization.5s.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"CPU utilization for the last 5 seconds"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"cpu.utilization.1m.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"CPU utilization for the last minute"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"cpu.utilization.5m.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"CPU utilization for the last 5 minutes"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%"))))),(0,n.kt)(l.Z,{value:"Hardware",label:"Hardware",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"status"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Global health status of the device"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"sensor_num"),"#hardware.sensor.temperature.celsius"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Temperature of the sensor"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"fan_num"),"#hardware.fan.speed.rpm"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Speed of the fan"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"rpm"))))),(0,n.kt)(l.Z,{value:"Interfaces",label:"Interfaces",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"status"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Status of the interface"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"interface_name"),"#interface.traffic.in.bitspersecond"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Incoming traffic going through the interface"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"interface_name"),"#interface.traffic.out.bitspersecond"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Outgoing traffic going through the interface"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"interface_name"),"#interface.packets.in.error.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Incoming errored packets going through the interface"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"interface_name"),"#interface.packets.in.discard.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Incoming discarded packets going through the interface"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"interface_name"),"#interface.packets.out.error.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Outgoing errored packets going through the interface"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"interface_name"),"#interface.packets.out.discard.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Outgoing discarded packets going through the interface"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%"))))),(0,n.kt)(l.Z,{value:"Memory",label:"Memory",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"memory.usage.bytes"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Memory usage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"memory.free.bytes"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Free memory"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"memory.usage.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Memory usage in percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%"))))),(0,n.kt)(l.Z,{value:"Uptime",label:"Uptime",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"system.uptime.seconds"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"System uptime"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"s")))))),(0,n.kt)("h2",i({},{id:"pr\xe9requis"}),"Pr\xe9requis"),(0,n.kt)("h3",i({},{id:"configuration-snmp"}),"Configuration SNMP"),(0,n.kt)("p",null,"Afin de superviser votre \xe9quipement, le SNMP v2 ou v3 doit \xeatre configur\xe9."),(0,n.kt)("h3",i({},{id:"flux-r\xe9seau"}),"Flux r\xe9seau"),(0,n.kt)("p",null,"La communication doit \xeatre possible sur le port UDP 161 depuis le collecteur\nCentreon vers l'\xe9quipement supervis\xe9."),(0,n.kt)("h2",i({},{id:"installation"}),"Installation"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources ",(0,n.kt)("strong",{parentName:"li"},"Lenovo RackSwitch SNMP")," :")),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Network-Lenovo-Rackswitch-Snmp\n")),(0,n.kt)("ol",i({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Pack ",(0,n.kt)("strong",{parentName:"li"},"Lenovo RackSwitch SNMP")," depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),"."))),(0,n.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources ",(0,n.kt)("strong",{parentName:"li"},"Lenovo RackSwitch SNMP")," :")),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Network-Lenovo-Rackswitch-Snmp\n")),(0,n.kt)("ol",i({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le RPM du Pack ",(0,n.kt)("strong",{parentName:"li"},"Lenovo RackSwitch SNMP")," :")),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-pack-network-lenovo-rackswitch-snmp\n")),(0,n.kt)("ol",i({},{start:3}),(0,n.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Pack ",(0,n.kt)("strong",{parentName:"li"},"Lenovo RackSwitch SNMP")," depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),".")))),(0,n.kt)("h2",i({},{id:"configuration"}),"Configuration"),(0,n.kt)("h3",i({},{id:"h\xf4te"}),"H\xf4te"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ajoutez un H\xf4te \xe0 Centreon depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes")),(0,n.kt)("li",{parentName:"ul"},"Compl\xe9tez les champs ",(0,n.kt)("strong",{parentName:"li"},"Nom"),", s",(0,n.kt)("strong",{parentName:"li"},"Alias")," & ",(0,n.kt)("strong",{parentName:"li"},"IP Address / DNS")," correspondant \xe0 votre serveur ",(0,n.kt)("strong",{parentName:"li"},"Lenovo RackSwitch SNMP"),"."),(0,n.kt)("li",{parentName:"ul"},"Appliquez le Mod\xe8le d'H\xf4te ",(0,n.kt)("strong",{parentName:"li"},"Net-Lenovo-Rackswitch-SNMP-custom"))),(0,n.kt)("p",null,"Si vous utilisez SNMP en version 3, vous devez configurer les param\xe8tres\nsp\xe9cifiques associ\xe9s via la macro SNMPEXTRAOPTIONS."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Mandatory"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"})),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"SNMPEXTRAOPTIONS"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"(Default: 'Configure your own SNMPv3 credentials combo')")))),(0,n.kt)("h2",i({},{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"}),"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,n.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne\nde commande depuis votre collecteur Centreon en vous connectant avec\nl'utilisateur ",(0,n.kt)("strong",{parentName:"p"},"centreon-engine"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_lenovo_rackswitch_snmp.pl \\\n    --plugin=network::lenovo::rackswitch::snmp::plugin \\\n    --mode=memory \\\n    --hostname='10.0.0.1' \\\n    --snmp-version='2c' \\\n    --snmp-community='my-snmp-community' \\\n    --warning-usage-prct='' \\\n    --critical-usage-prct='' \\\n    --verbose\n")),(0,n.kt)("p",null,"La commande devrait retourner un message de sortie similaire \xe0 :"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"OK: Memory total: 502.43 MB used: 164.67 MB (32.77%) free: 337.76 MB (67.23%) | 'memory.usage.bytes'=172666880B;;;0;526831616 'memory.free.bytes'=354164736B;;;0;526831616 'memory.usage.percentage'=32.77%;;;0;100\n")),(0,n.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification peut \xeatre\naffich\xe9e en ajoutant le param\xe8tre ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_lenovo_rackswitch_snmp.pl \\\n    --plugin=network::lenovo::rackswitch::snmp::plugin \\\n    --mode=memory \\\n    --help\n")),(0,n.kt)("p",null,"Tous les modes disponibles peuvent \xeatre affich\xe9s en ajoutant le param\xe8tre\n",(0,n.kt)("inlineCode",{parentName:"p"},"--list-mode")," \xe0 la commande:"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_lenovo_rackswitch_snmp.pl \\\n    --plugin=network::lenovo::rackswitch::snmp::plugin \\\n    --list-mode\n")),(0,n.kt)("h3",i({},{id:"diagnostic-des-erreurs-communes"}),"Diagnostic des erreurs communes"),(0,n.kt)("p",null,"Rendez-vous sur la ",(0,n.kt)("a",i({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#troubleshooting-snmp"}),"documentation d\xe9di\xe9e"),"\npour le diagnostic des erreurs communes des Plugins Centreon."))}k.isMDXComponent=!0},7626:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function o({children:e,hidden:t,className:a}){return n.createElement("div",i({role:"tabpanel",className:(0,r.Z)(l,a)},{hidden:t}),e)}},67709:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(67294),r=a(86010),l=a(90980),i=a(35715),o=a(8854),s=a(8241);const p="tabList__CuJ",u="tabItem_LNqP";function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},m.apply(this,arguments)}function c(e){var t;const{lazy:a,block:l,defaultValue:c,values:d,groupId:k,className:g}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=d?d:f.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),v=(0,i.l)(N,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var h;const b=null===c?c:null!==(h=null!=c?c:null===(t=f.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==h?h:f[0].props.value;if(null!==b&&!N.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,o.U)(),[P,S]=(0,n.useState)(b),O=[],{blockElementScrollPositionUntilNextRender:M}=(0,s.o5)();if(null!=k){const e=y[k];null!=e&&e!==P&&N.some((t=>t.value===e))&&S(e)}const C=e=>{const t=e.currentTarget,a=O.indexOf(t),n=N[a].value;n!==P&&(M(t),S(n),null!=k&&w(k,String(n)))},T=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=O.indexOf(e.currentTarget)+1;var a;t=null!==(a=O[n])&&void 0!==a?a:O[0];break}case"ArrowLeft":{const a=O.indexOf(e.currentTarget)-1;var n;t=null!==(n=O[a])&&void 0!==n?n:O[O.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",p)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},g)},N.map((({value:e,label:t,attributes:a})=>n.createElement("li",m({role:"tab",tabIndex:P===e?0:-1,"aria-selected":P===e,key:e,ref:e=>O.push(e),onKeyDown:T,onFocus:C,onClick:C},a,{className:(0,r.Z)("tabs__item",u,null==a?void 0:a.className,{"tabs__item--active":P===e})}),null!=t?t:e)))),a?(0,n.cloneElement)(f.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function d(e){const t=(0,l.Z)();return n.createElement(c,m({key:String(t)},e))}}}]);