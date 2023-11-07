"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[52991],{3496:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>p,metadata:()=>m,toc:()=>d});n(67294);var a=n(3905),r=n(51715),l=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"network-adva-fsp150-snmp",title:"Adva FSP 150 SNMP"},u=void 0,m={unversionedId:"integrations/plugin-packs/procedures/network-adva-fsp150-snmp",id:"integrations/plugin-packs/procedures/network-adva-fsp150-snmp",title:"Adva FSP 150 SNMP",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/network-adva-fsp150-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-adva-fsp150-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/network-adva-fsp150-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/network-adva-fsp150-snmp.md",tags:[],version:"current",frontMatter:{id:"network-adva-fsp150-snmp",title:"Adva FSP 150 SNMP"},sidebar:"pp",previous:{title:"Acme Packet SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/network-acmepacket-snmp"},next:{title:"Adva FSP 3000 SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/network-adva-fsp3000-snmp"}},c={},d=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du pack de supervision",id:"contenu-du-pack-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques Collect\xe9es",id:"m\xe9triques-collect\xe9es",level:2},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Configuration de l&#39;\xe9quipement Adva FSP 150",id:"configuration-de-l\xe9quipement-adva-fsp-150",level:3},{value:"Flux r\xe9seau",id:"flux-r\xe9seau",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment tester en ligne de commande et quelles significations portent les options principales ?",id:"comment-tester-en-ligne-de-commande-et-quelles-significations-portent-les-options-principales-",level:3},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:3},{value:"UNKNOWN: SNMP GET Request : Cant get a single value.",id:"unknown-snmp-get-request--cant-get-a-single-value",level:3}],k={toc:d},g="wrapper";function f(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)(g,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,a.kt)("p",null,"Adva Optical Networking d\xe9veloppe et des \xe9quipements r\xe9seaux avec des connectiques fibres utilis\xe9 pour le stockage, la voix sur IP ou encore la vid\xe9o. "),(0,a.kt)("h2",{id:"contenu-du-pack-de-supervision"},"Contenu du pack de supervision"),(0,a.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fiber Service Platform 150 ")),(0,a.kt)("h2",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques Collect\xe9es"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Alarms",label:"Alarms",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Nom de m\xe9trique"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"alerts.problems.current.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total des alarmes courantes ou nouvelles alarmes. Unit\xe9: Count"))))),(0,a.kt)(l.Z,{value:"Hardware",label:"Hardware",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Nom de m\xe9trique"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"hardware.card.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Nombre de cartes. Unit\xe9: Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"hardware.shelf.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Nombre d'\xe9tag\xe8res. Unit\xe9: Count"))))),(0,a.kt)(l.Z,{value:"Interfaces",label:"Interfaces",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Nom de m\xe9trique"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"interface.traffic.in.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Trafic entrant passant par l'interface. Unit\xe9: b/s & %")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"interface.packets.in.error.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Paquets en erreur entrants passant par une interface. Unit\xe9: Count & %")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"interface.packets.in.discard.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Paquets rejet\xe9s entrants passant par une interface. Unit\xe9: Count & %")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"interface.traffic.out.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Trafic sortant passant par l'interface. Unit\xe9: b/s & %")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"interface.packets.out.error.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Paquets en erreur sortants passant par une interface. Unit\xe9: Count & %")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"interface.packets.out.discard.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Paquets rejet\xe9s sortants passant par une interface. Unit\xe9: Count & %")))),(0,a.kt)("p",null,"Il est possible de filtrer sur le nom d'une interface en utilisant une REGEXP de la forme (",(0,a.kt)("inlineCode",{parentName:"p"},"--interface='^my-interface-name$' --name"),")")),(0,a.kt)(l.Z,{value:"Systems",label:"Systems",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Nom de m\xe9trique"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"system.cpu.utilization.15min.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Utilisation du CPU pendant les 15 derni\xe8res minutes. Unit\xe9: %")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"system.memory.usage.bytes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Utilisation de la m\xe9moire sur l'appareil. Unit\xe9: Bytes")))))),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("h3",{id:"configuration-de-l\xe9quipement-adva-fsp-150"},"Configuration de l'\xe9quipement Adva FSP 150"),(0,a.kt)("p",null,"Afin de superviser vos \xe9quipements Adva le SNMP v2 doit \xeatre configur\xe9."),(0,a.kt)("h3",{id:"flux-r\xe9seau"},"Flux r\xe9seau"),(0,a.kt)("p",null,"La communication doit \xeatre possible sur le port UDP 161 depuis le Collecteur Centreon vers l'\xe9quipement Adva supervis\xe9."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur l'ensemble des Collecteurs Centreon supervisant des \xe9quipements Adva FSP 150:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Adva-Fsp150-Snmp\n")),(0,a.kt)("p",null,"Installer le connecteur de supervision 'Adva Fsp 150 SNMP' depuis la page ",(0,a.kt)("strong",{parentName:"p"},"Configuration > Gestionnaire de connecteurs de supervision")," sur l'interface Web de Centreon."),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Installer le pack depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"),":"))),(0,a.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur l'ensemble des Collecteurs Centreon supervisant des \xe9quipemnts Adva FSP 150:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Adva-Fsp150-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Installer le RPM contenant les mod\xe8les de supervision:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-network-adva-fsp150-snmp\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Installer le pack depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"),":")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,'Dans le formulaire de cr\xe9ation de l\'H\xf4te sur l\'interface Web de Centreon, il est n\xe9cessaire de renseigner les champs "Snmp Community" et "Snmp Version". '),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Si vous utilisez SNMP en version 3, vous devez configurer les param\xe8tres sp\xe9cifiques associ\xe9s via la macro SNMPEXTRAOPTIONS.\nPlus d'informations dans la section ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP"),". ")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Obligatoire"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Configurez votre propre combo d'identifiants SNMPv3")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"comment-tester-en-ligne-de-commande-et-quelles-significations-portent-les-options-principales-"},"Comment tester en ligne de commande et quelles significations portent les options principales ?"),(0,a.kt)("p",null,"A partir du moment o\xf9 la sonde est install\xe9e, connectez vous \xe0 votre Collecteur et ex\xe9cutez la commande ci-dessous avec l'utilisateur centreon-engine:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_adva_fsp150_snmp.pl \\\n    --plugin=network::adva::fsp150::snmp::plugin \\\n    --mode=systems \\\n    --hostname=10.30.2.114 \\\n    --snmp-version='2c' \\\n    --snmp-community='public' \\\n    --verbose \n")),(0,a.kt)("p",null,"La commande v\xe9rifie l'utilisation CPU et m\xe9moire (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=systems"),") de l'\xe9quipement ayant pour adresse 10.30.2.114 (",(0,a.kt)("inlineCode",{parentName:"p"},"--hostname=10.30.2.114"),") en version 2 du protocol SNMP et avec la communaut\xe9 public  (",(0,a.kt)("inlineCode",{parentName:"p"},"--snmp-community='public'"),")."),(0,a.kt)("p",null,"Tous les modes sont affichables via la commande suivante:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_adva_fsp150_snmp.pl \\\n    --plugin=network::adva::fsp150::snmp::plugin \\\n    --list-mode\n")),(0,a.kt)("p",null,"Les options des diff\xe9rents modes sont consultables en ajoutant le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_adva_fsp150_snmp.pl \\\n    --plugin=network::adva::fsp150::snmp::plugin \\\n    --mode=systems \\\n    --help\n")),(0,a.kt)("h3",{id:"unknown-snmp-get-request--timeout"},"UNKNOWN: SNMP GET Request : Timeout"),(0,a.kt)("p",null,"Si vous obtenez ce message, cela signifie que vous ne parvenez pas \xe0 contacter l'\xe9quipemnt Adva sur le port 161, ou alors que la communaut\xe9 SNMP configur\xe9e n'est pas correcte. Il est \xe9galement possible qu'un pare-feu bloque le flux."),(0,a.kt)("h3",{id:"unknown-snmp-get-request--cant-get-a-single-value"},"UNKNOWN: SNMP GET Request : Cant get a single value."),(0,a.kt)("p",null,"Ce message d'erreur fait souvent r\xe9f\xe9rence aux probl\xe8mes suivants : "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"L'\xe9quipement Adva Optical cible ne contient pas la MIB utilis\xe9e par le plugin."),(0,a.kt)("li",{parentName:"ul"},"L'OID cibl\xe9 n'est pas accessible du fait de privil\xe8ges insuffisants.")))}f.isMDXComponent=!0}}]);