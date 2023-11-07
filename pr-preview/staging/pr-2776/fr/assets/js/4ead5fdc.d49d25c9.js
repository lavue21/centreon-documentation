"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[85719],{93212:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>N,frontMatter:()=>s,metadata:()=>m,toc:()=>d});n(67294);var a=n(3905),r=n(51715),l=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"hardware-ups-phoenixtec-snmp",title:"Phoenixtec UPS SNMP"},u=void 0,m={unversionedId:"integrations/plugin-packs/procedures/hardware-ups-phoenixtec-snmp",id:"integrations/plugin-packs/procedures/hardware-ups-phoenixtec-snmp",title:"Phoenixtec UPS SNMP",description:"Contenu du Pack",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/hardware-ups-phoenixtec-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-ups-phoenixtec-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/hardware-ups-phoenixtec-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/hardware-ups-phoenixtec-snmp.md",tags:[],version:"current",frontMatter:{id:"hardware-ups-phoenixtec-snmp",title:"Phoenixtec UPS SNMP"},sidebar:"pp",previous:{title:"Nitram UPS SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/hardware-ups-nitram-snmp"},next:{title:"Powerware UPS",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/hardware-ups-powerware-snmp"}},c={},d=[{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostique",id:"diagnostique",level:2}],g={toc:d},k="wrapper";function N(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)(k,p(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"contenu-du-pack"},"Contenu du Pack"),(0,a.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,a.kt)("p",null,"Le Pack Phoenixtec collecte les donn\xe9es pour:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Battery status"),(0,a.kt)("li",{parentName:"ul"},"Input lines"),(0,a.kt)("li",{parentName:"ul"},"Output lines")),(0,a.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Battery-status",label:"Battery-status",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Battery status"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"battery.charge.remaining.percent"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Battery capacity in percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"battery.charge.remaining.minutes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Battery capacity in minutes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"min")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"battery.voltage.volt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Battery voltage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"V")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"battery.temperature.celsius"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Battery temperature"),(0,a.kt)("td",{parentName:"tr",align:"left"},"C"))))),(0,a.kt)(l.Z,{value:"Input-lines",label:"Input-lines",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"lines.input.frequence.hertz"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Current input line frequency"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Hz")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"lines.input.voltage.volt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Current input line voltage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"V"))))),(0,a.kt)(l.Z,{value:"Output-lines",label:"Output-lines",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Output status"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"lines.output.load.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Current output load"),(0,a.kt)("td",{parentName:"tr",align:"left"},"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"lines.output.voltage.volt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Current output voltage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"V")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"lines.output.frequence.hertz"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Current output frequency"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Hz")))))),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("p",null,"Afin de contr\xf4ler votre \xe9quipement Phoenixtec UPS, le SNMP doit \xeatre configur\xe9. "),(0,a.kt)("p",null,"Le flux SNMP UDP/161 doit \xeatre ouvert entre le Collecteur et l'\xe9quipement."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Ups-Phoenixtec-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Pack ",(0,a.kt)("em",{parentName:"li"},"Phoenixtec UPS SNMP")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,a.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Ups-Phoenixtec-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le Pack via le RPM:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-hardware-ups-phoenixtec-snmp\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Pack ",(0,a.kt)("em",{parentName:"li"},"Phoenixtec UPS SNMP")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ajoutez un nouvel H\xf4te depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes")),(0,a.kt)("li",{parentName:"ul"},"Compl\xe9tez les champs ",(0,a.kt)("em",{parentName:"li"},"Adresse IP/DNS"),", ",(0,a.kt)("em",{parentName:"li"},"Communaut\xe9 SNMP")," et ",(0,a.kt)("em",{parentName:"li"},"Version SNMP")),(0,a.kt)("li",{parentName:"ul"},"Appliquez le Mod\xe8le d'H\xf4te ",(0,a.kt)("em",{parentName:"li"},"HW-Ups-Phoenixtec-SNMP-custom"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Si vous utilisez SNMP en version 3, vous devez configurer les param\xe8tres sp\xe9cifiques associ\xe9s via la macro SNMPEXTRAOPTIONS.\nPlus d'informations dans la section ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP"),". ")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Extra options SNMP")))),(0,a.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,a.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande\ndepuis un collecteur Centreon en vous connectant avec l'utilisateur ",(0,a.kt)("em",{parentName:"p"},"centreon-engine"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_ups_phoenixtec_snmp.pl \\\n    --plugin=hardware::ups::phoenixtec::snmp::plugin \\\n    --mode=battery-status \\\n    --hostname=10.30.2.114 \\\n    --snmp-version='2c' \\\n    --snmp-community='phoenixtec_ro' \\\n    --warning-charge-remaining='50:' \\\n    --critical-charge-remaining='20:' \\\n    --verbose\n")),(0,a.kt)("p",null,"La commande devrait retourner un message de sortie de la forme ci-dessous:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: battery status is 'normal', remaining capacity: 100 % | 'battery.charge.remaining.percent'=100%;50:;20:;0;100 'battery.voltage.volt'=2.2V;;;; 'battery.temperature.celsius'=31.5C;;;;\n")),(0,a.kt)("p",null,"Cette commande contr\xf4le la batterie (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=battery-status"),") d'un \xe9quipement UPS Phoenixtec ayant pour adresse ",(0,a.kt)("em",{parentName:"p"},"10.30.2.114")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--hostname=10.30.2.114"),")\nen version ",(0,a.kt)("em",{parentName:"p"},"2c")," du protocol SNMP (",(0,a.kt)("inlineCode",{parentName:"p"},"--snmp-version='2c'"),") et avec la communaut\xe9 ",(0,a.kt)("em",{parentName:"p"},"phoenixtec_ro")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--snmp-community='phoenixtec_ro'"),")."),(0,a.kt)("p",null,"Cette commande d\xe9clenchera une alarme WARNING si la charge restante de la batterie est inf\xe9rieur \xe0 50% (",(0,a.kt)("inlineCode",{parentName:"p"},"--warning-charge-remaining='50:'"),")\net une alarme CRITICAL si inf\xe9rieur \xe0 20% (",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-charge-remaining='20:'"),")."),(0,a.kt)("p",null,"Pour chaque mode, la liste de toutes les m\xe9triques, seuils associ\xe9s et options compl\xe9mentaires peut \xeatre affich\xe9e\nen ajoutant le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_ups_phoenixtec_snmp.pl \\\n    --plugin=hardware::ups::phoenixtec::snmp::plugin \\\n    --mode=battery-status \\\n    --help\n")),(0,a.kt)("h2",{id:"diagnostique"},"Diagnostique"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"Diagnostique des plugins")))}N.isMDXComponent=!0}}]);