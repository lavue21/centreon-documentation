"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[6258],{52814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>b,frontMatter:()=>o,metadata:()=>c,toc:()=>d});n(67294);var a=n(3905),r=n(51715),l=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={id:"hardware-devices-eltek-enexus-snmp",title:"Eltek eNexus"},p=void 0,c={unversionedId:"integrations/plugin-packs/procedures/hardware-devices-eltek-enexus-snmp",id:"integrations/plugin-packs/procedures/hardware-devices-eltek-enexus-snmp",title:"Eltek eNexus",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/hardware-devices-eltek-enexus-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-devices-eltek-enexus-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/hardware-devices-eltek-enexus-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/hardware-devices-eltek-enexus-snmp.md",tags:[],version:"current",frontMatter:{id:"hardware-devices-eltek-enexus-snmp",title:"Eltek eNexus"},sidebar:"pp",previous:{title:"Dell VxRail Manager Rest API",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/hardware-servers-dell-vxm-restapi"},next:{title:"Fujitsu Server SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/hardware-servers-fujitsu-snmp"}},m={},d=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du pack de supervision",id:"contenu-du-pack-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Configuration des \xe9quipements Eltek eNexusL",id:"configuration-des-\xe9quipements-eltek-enexusl",level:3},{value:"Configuration d&#39;un \xe9quipement SNMP",id:"configuration-dun-\xe9quipement-snmp",level:3},{value:"Flux r\xe9seau",id:"flux-r\xe9seau",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment tester en ligne de commande et quelles significations portent les options principales ?",id:"comment-tester-en-ligne-de-commande-et-quelles-significations-portent-les-options-principales-",level:3},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:3},{value:"UNKNOWN: SNMP GET Request : Cant get a single value.",id:"unknown-snmp-get-request--cant-get-a-single-value",level:3}],k={toc:d},g="wrapper";function b(e){var{components:t}=e,n=u(e,["components"]);return(0,a.kt)(g,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,a.kt)("p",null,"Eltek est un sp\xe9cialiste mondial de la gestion et la transformation de l'\xe9nergie \xe9lectrique. Ils d\xe9veloppent et commercialisent des mat\xe9riels utilis\xe9s dans les secteurs de l'industrie et des t\xe9l\xe9communications."),(0,a.kt)("h2",{id:"contenu-du-pack-de-supervision"},"Contenu du pack de supervision"),(0,a.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SmartPack2 V2.x"),(0,a.kt)("li",{parentName:"ul"},"SmartPack S V2.x"),(0,a.kt)("li",{parentName:"ul"},"Compack V2.x")),(0,a.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Alarms",label:"Alarms",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"alarms.active.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Current total alarms. Unit: Count"))))),(0,a.kt)(l.Z,{value:"Battery",label:"Battery",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"battery.temperature.celsius"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Current battery temperature. Units: celsius & fahrenheit")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"battery.charge.remaining.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Current battery charge remaining. Units: percentage & amperehour")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"battery.charge.remaining.time.seconds"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Current battery charge remaining. Unit: seconds")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"battery.charge.remaining.time.seconds"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Current battery charge remaining time. Unit: seconds")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"battery.voltage.volt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Current battery voltage. Unit: volt")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"battery.current.ampere"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Current battery load. Unit: ampere"))))),(0,a.kt)(l.Z,{value:"Load",label:"Load",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"load.current.ampere"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Current load. Unit: ampere")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"load.energy.delivered.watt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Accumulated energy delivered. Unit: watt")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"phase.voltage.volt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"By phase instance. Current voltage. Unit: volt"))))),(0,a.kt)(l.Z,{value:"Outputs",label:"Outputs",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"outputs.disconnected.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Current disconnected outputs. Unit: Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"outputs.notenergized.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Current not energized outputs. Unit: Count")))))),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("h3",{id:"configuration-des-\xe9quipements-eltek-enexusl"},"Configuration des \xe9quipements Eltek eNexusL"),(0,a.kt)("p",null,"Afin\xa0de\xa0superviser\xa0vos\xa0\xe9quipements Eltek le\xa0SNMP\xa0v2\xa0doit\xa0\xeatre\xa0configur\xe9."),(0,a.kt)("h3",{id:"configuration-dun-\xe9quipement-snmp"},"Configuration d'un \xe9quipement SNMP"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Les instructions ci-apr\xe8s peuvent changer en fonction de la version de votre Eltek. Des documentations sont le cas \xe9ch\xe9ant disponibles sur le site officiel du constructeur.")),(0,a.kt)("p",null,"Sur l'interface Web:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Cliquer sur l\'ic\xf4ne "syst\xe8me Conf. " dans la barre de menu sup\xe9rieure.'),(0,a.kt)("li",{parentName:"ol"},'Dans la barre de menu de gauche, cliquer sur "Device Settings" pour d\xe9velopper le menu.'),(0,a.kt)("li",{parentName:"ol"},'Sous "Device Settings", cliquer sur "SNMP Settings". La page  "General SNMP configuration" appara\xeet.'),(0,a.kt)("li",{parentName:"ol"},"Enfin, ajouter vos informations SNMP")),(0,a.kt)("h3",{id:"flux-r\xe9seau"},"Flux r\xe9seau"),(0,a.kt)("p",null,"La communication doit \xeatre possible sur le port UDP 161 depuis le Collecteur Centreon vers l'\xe9quipemnt Eltek eNexus supervis\xe9. "),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("p",null,"1.\xa0Installer le Plugin sur l'ensemble des Collecteurs Centreon supervisant des \xe9quipements Eltek eNexus:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Devices-Eltek-Enexus-Snmp\n")),(0,a.kt)("p",null,"Installer le connecteur de supervision 'Eltek eNexus' depuis la page ",(0,a.kt)("strong",{parentName:"p"},"Configuration > Gestionnaire de connecteurs de supervision")," sur l'interface Web de Centreon."),(0,a.kt)("p",null,'2.\xa0Installer\xa0le\xa0pack\xa0depuis\xa0la\xa0page\xa0"Configuration\xa0>\xa0Plugin\xa0packs\xa0>\xa0Manager":')),(0,a.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("p",null,"1.\xa0Installer le Plugin sur l'ensemble des Collecteurs Centreon supervisant des \xe9quipemnts Eltek eNexus:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Devices-Eltek-Enexus-Snmp\n")),(0,a.kt)("p",null,"2.\xa0Installer\xa0le\xa0RPM\xa0contenant\xa0les\xa0Mod\xe8les\xa0de\xa0supervision:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install hardware-devices-eltek-enexus-snmp\n")),(0,a.kt)("p",null,'3.\xa0Installer\xa0le\xa0pack\xa0depuis\xa0la\xa0page\xa0"Configuration\xa0>\xa0Plugin\xa0packs\xa0>\xa0Manager":'))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,'Dans le formulaire de cr\xe9ation de l\'H\xf4te sur l\'interface Web de Centreon, il est n\xe9cessaire de renseigner les champs "Snmp Community" et "Snmp Version". '),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Si vous utilisez SNMP en version 3, vous devez configurer les param\xe8tres sp\xe9cifiques associ\xe9s via la macro SNMPEXTRAOPTIONS.\nPlus d'informations dans la section ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP"),". ")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Obligatoire"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Configurez votre propre combo d'identifiants SNMPv3")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"comment-tester-en-ligne-de-commande-et-quelles-significations-portent-les-options-principales-"},"Comment tester en ligne de commande et quelles significations portent les options principales ?"),(0,a.kt)("p",null,"A\xa0partir\xa0du\xa0moment\xa0ou\xa0la\xa0sonde\xa0est\xa0install\xe9e, connectez vous \xe0 votre Collecteur et executez la commande \xa0suivante avec l'utilisateur centreon-engine:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_eltek_enexus_snmp.pl \\\n    --plugin=hardware::devices::eltek::enexus::snmp::plugin \\\n    --mode=battery \\\n    --hostname=10.30.2.114 \\\n    --snmp-version='2c' \\\n    --snmp-community='public' \\\n  --verbose \n")),(0,a.kt)("p",null,"La\xa0commande\xa0v\xe9rifie le status de la batterie (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=battery"),") d'un \xe9quipement Eltek ayant pour adresse 10.30.2.114 (",(0,a.kt)("inlineCode",{parentName:"p"},"--hostname=10.30.2.114"),")\xa0en version 2 du protocol SNMP et avec la communaut\xe9 public \xa0(",(0,a.kt)("inlineCode",{parentName:"p"},"--snmp-community='public'"),")."),(0,a.kt)("p",null,"Tous\xa0les\xa0modes\xa0sont\xa0affichables\xa0via\xa0la\xa0commande\xa0suivante:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_eltek_enexus_snmp.pl \\\n    --plugin=hardware::devices::eltek::enexus::snmp::plugin \\\n    --list-mode\n")),(0,a.kt)("p",null,"Les\xa0options\xa0des\xa0diff\xe9rents\xa0modes\xa0sont\xa0consultables\xa0via\xa0le\xa0help\xa0du\xa0mode:\xa0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_eltek_enexus_snmp.pl \\\n    --plugin=hardware::devices::eltek::enexus::snmp::plugin \\\n    --mode=battery \\\n    --help\n")),(0,a.kt)("h3",{id:"unknown-snmp-get-request--timeout"},"UNKNOWN: SNMP GET Request : Timeout"),(0,a.kt)("p",null,"Si vous obtenez ce message, cela signifie que vous ne parvenez pas \xe0 contacter l'\xe9quipemnt Eltek sur le port 161, ou alors que la communaut\xe9 SNMP configur\xe9e n'est pas correcte. Il est \xe9galement possible qu'un pare-feu bloque le flux."),(0,a.kt)("h3",{id:"unknown-snmp-get-request--cant-get-a-single-value"},"UNKNOWN: SNMP GET Request : Cant get a single value."),(0,a.kt)("p",null,"Ce message d'erreur fait souvent r\xe9f\xe9rence aux probl\xe8mes suivants : "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"L'\xe9quipement Eltek ne supporte pas la MIB exploit\xe9e par le plugin"),(0,a.kt)("li",{parentName:"ul"},"Un des OIDs utilis\xe9 par le plugin n'est pas r\xe9cup\xe9rable du fait de privil\xe8ges insuffisants")))}b.isMDXComponent=!0}}]);