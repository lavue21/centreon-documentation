"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[13251],{2659:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>p,metadata:()=>m,toc:()=>d});n(67294);var a=n(3905),r=n(51715),l=n(7626);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"network-lenovo-flexsystem-snmp",title:"Lenovo Flex System Switch"},u=void 0,m={unversionedId:"integrations/plugin-packs/procedures/network-lenovo-flexsystem-snmp",id:"integrations/plugin-packs/procedures/network-lenovo-flexsystem-snmp",title:"Lenovo Flex System Switch",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/network-lenovo-flexsystem-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-lenovo-flexsystem-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/network-lenovo-flexsystem-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/network-lenovo-flexsystem-snmp.md",tags:[],version:"current",frontMatter:{id:"network-lenovo-flexsystem-snmp",title:"Lenovo Flex System Switch"},sidebar:"pp",previous:{title:"Keysight NVOS Rest API",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/network-keysight-nvos-restapi"},next:{title:"Lenovo RackSwitch SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/network-lenovo-rackswitch-snmp"}},c={},d=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Flux r\xe9seaux",id:"flux-r\xe9seaux",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How do I run my plugin through the CLI and what do the main parameters stand for ?",id:"how-do-i-run-my-plugin-through-the-cli-and-what-do-the-main-parameters-stand-for-",level:3},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:3},{value:"UNKNOWN: SNMP GET Request : Cant get a single value.",id:"unknown-snmp-get-request--cant-get-a-single-value",level:3}],k={toc:d},g="wrapper";function f(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)(g,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,a.kt)("p",null,"Lenovo d\xe9veloppe, fabrique et vend du mat\xe9riel et logiciels informatiques.\nLenovo Flex System est l'architecture de serveurs lames de Lenovo."),(0,a.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,a.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Lenovo Flex System network switch")),(0,a.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,a.kt)("p",null,"En plus des modes et des m\xe9triques d\xe9taill\xe9s ci-apr\xe8s, il est \xe9galement possible\nde superviser les \xe9l\xe9ments suivants :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ntp : V\xe9rifier le d\xe9calage de temps du serveur avec le serveur NTP"),(0,a.kt)("li",{parentName:"ul"},"Uptime : Dur\xe9e depuis le dernier red\xe9marrage")),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Cpu",label:"Cpu",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cpu.utilization.1m.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"CPU utilization for the last minute"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cpu.utilization.5m.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"CPU utilization for the last 5 minutes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,a.kt)(l.Z,{value:"Storage",label:"Storage",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"storage.partitions.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total number of partition"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"partition#storage.space.usage.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Used space on a disk partition"),(0,a.kt)("td",{parentName:"tr",align:null},"Bytes"))))),(0,a.kt)(l.Z,{value:"Memory-Usage",label:"Memory-Usage",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"memory.usage.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total current memory usage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Bytes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"memory.usage.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total current memory usage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"memory.free.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Current free memory"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Bytes"))))),(0,a.kt)(l.Z,{value:"Traffic",label:"Traffic",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Interface status"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"interface.traffic.","*",".bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"*","in/out. Incoming/outgoing traffic going through the interface"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Bytes/s & %")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"interface.packets.","*",".errors.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"*","in/out. Incoming/outgoing errored packets going through an interface"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count & %")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"interface.packets.","*",".discards.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"*","in/out. Incoming/outgoing discarded packets going through an interface"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count & %")))),(0,a.kt)("p",null,"A regexp filter is available to target a specific interface identifier/ifName ","[",(0,a.kt)("inlineCode",{parentName:"p"},"--interface='^my-interface-name$' --name"),"]"," ")),(0,a.kt)(l.Z,{value:"Environment",label:"Environment",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"hardware.temperature.celsius"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Temperature of the system"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Celsius")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"faultled"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of the fault LED (On/Off)"),(0,a.kt)("td",{parentName:"tr",align:"left"})))),(0,a.kt)("p",null,"You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"--no-component")," if you want to alert when a component is\nabsent/removed. You can also overload the default status using the\n",(0,a.kt)("inlineCode",{parentName:"p"},"--threshold-overload option"),". "))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Pour utiliser ce connecteur de supervision, vous devez configurer le service SNMP sur le\nserveur de lames Lenovo Flex System . Une description compl\xe8te est disponible\nsur le site officiel de Lenovo :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Avec la console Web de CMM : ",(0,a.kt)("a",{parentName:"li",href:"https://sysmgt.lenovofiles.com/help/index.jsp?topic=%2Fcom.lenovo.lxci_hwmp_scom.doc%2Fhwmp_enable_snmp_agent"},"https://sysmgt.lenovofiles.com/help/index.jsp?topic=%2Fcom.lenovo.lxci_hwmp_scom.doc%2Fhwmp_enable_snmp_agent")),(0,a.kt)("li",{parentName:"ul"},"Avec l'interface en ligne de commande de CMM : ",(0,a.kt)("a",{parentName:"li",href:"https://flexsystem.lenovofiles.com/help/index.jsp?topic=%2Fcom.lenovo.acc.cmm.doc%2Fcli_command_snmp"},"https://flexsystem.lenovofiles.com/help/index.jsp?topic=%2Fcom.lenovo.acc.cmm.doc%2Fcli_command_snmp"))),(0,a.kt)("h3",{id:"flux-r\xe9seaux"},"Flux r\xe9seaux"),(0,a.kt)("p",null,"Les collecteurs Centreon doivent pouvoir communiquer via le port UDP/161 SNMP\navec le serveur de lames Lenovo Flex System."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon supervisant un switch Lenovo Flex System :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Lenovo-Flexsystem-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Lenovo Flex System Switch")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")," de l'interface Web Centreon"))),(0,a.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon supervisant un switch Lenovo Flex System :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Lenovo-Flexsystem-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Installer le RPM du connecteur de supervision contenant les mod\xe8les de supervision sur le serveur Centreon Central :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-network-lenovo-flexsystem-snmp\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Lenovo Flex System Switch")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")," de l'interface Web Centreon")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Aller dans Configuration > Host > et cliquer sur Ajouter. Puis compl\xe9tez les\nchamps SNMP Community et SNMP Version et appliquer le mod\xe8le d'h\xf4te\n",(0,a.kt)("em",{parentName:"p"},"Net-Lenovo-Flexsystem-SNMP-custom"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Si vous utilisez SNMP en version 3, vous devez configurer les param\xe8tres sp\xe9cifiques associ\xe9s via la macro SNMPEXTRAOPTIONS.\nPlus d'informations dans la section ",(0,a.kt)("a",{parentName:"p",href:"../../getting-started/how-to-guides/troubleshooting-plugins/#snmpv3-options-mapping"},"Troubleshooting SNMP"),". ")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Configure your own SNMPv3 credentials combo")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"how-do-i-run-my-plugin-through-the-cli-and-what-do-the-main-parameters-stand-for-"},"How do I run my plugin through the CLI and what do the main parameters stand for ?"),(0,a.kt)("p",null,"Une fois le Plugin est install\xe9, vous pouvez tester celui-ci directement en\nligne de commande depuis votre collecteur Centreon avec l'utilisateur\n",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_net_lenovo_flexsystem_snmp.pl \\\n  --plugin=network::lenovo::flexsystem::snmp::plugin \\\n  --mode=interfaces --hostname=10.30.2.138 \\\n  --snmp-community='public' \\\n  --snmp-version='2c' \\\n  --add-status \\\n  --add-traffic\n")),(0,a.kt)("p",null,"R\xe9sultat attendu :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"OK: All interfaces are ok | 'traffic_in_lo'=11723.33b/s;;;0;10000000 'traffic_out_lo'=11723.33b/s;;;0;10000000 'traffic_in_ens192'=14097.70b/s;;;0;10000000000 'traffic_out_ens192'=21796.60b/s;;;0;10000000000\n")),(0,a.kt)("p",null,"ous les modes disponibles dans le Plugin peuvent \xeatre list\xe9s via la commande\nsuivante :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_net_lenovo_flexsystem_snmp.pl \\\n  --plugin=network::lenovo::flexsystem::snmp::plugin \\\n  --list-mode\n")),(0,a.kt)("p",null,"Les options des diff\xe9rents modes sont consultables via le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help"),"\ndu mode :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_net_lenovo_flexsystem_snmp.pl \\\n  --plugin=network::lenovo::flexsystem::snmp::plugin \\\n  --mode=interfaces \\\n  --help\n")),(0,a.kt)("h3",{id:"unknown-snmp-get-request--timeout"},"UNKNOWN: SNMP GET Request : Timeout"),(0,a.kt)("p",null,"Si vous obtenez ce message, cela signifie que le collecteur Centreon ne parvient\npas \xe0 contacter votre cluster Nutanix sur le port UDP 161 ou bien que la communaut\xe9 SNMP configur\xe9e n'est pas correcte."),(0,a.kt)("h3",{id:"unknown-snmp-get-request--cant-get-a-single-value"},"UNKNOWN: SNMP GET Request : Cant get a single value."),(0,a.kt)("p",null,"Si vous rencontrez cette erreur, il est probable que les autorisations donn\xe9es \xe0\nl'agent SNMP soient trop restreintes."))}f.isMDXComponent=!0}}]);