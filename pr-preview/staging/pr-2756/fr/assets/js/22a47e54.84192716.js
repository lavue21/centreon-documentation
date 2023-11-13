"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[50799],{33354:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>b,frontMatter:()=>u,metadata:()=>m,toc:()=>c});n(67294);var r=n(3905),a=n(51715),i=n(7626);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const u={id:"hardware-storage-nimble-snmp",title:"Nimble Storage"},p=void 0,m={unversionedId:"integrations/plugin-packs/procedures/hardware-storage-nimble-snmp",id:"integrations/plugin-packs/procedures/hardware-storage-nimble-snmp",title:"Nimble Storage",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/hardware-storage-nimble-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-storage-nimble-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/hardware-storage-nimble-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/hardware-storage-nimble-snmp.md",tags:[],version:"current",frontMatter:{id:"hardware-storage-nimble-snmp",title:"Nimble Storage"},sidebar:"pp",previous:{title:"Netgear Readynas SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/hardware-storage-netgear-readynas-snmp"},next:{title:"Nimble Storage Rest API",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/hardware-storage-nimble-restapi"}},d={},c=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"Services disponibles",id:"services-disponibles",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Configuration du SNMP sur l&#39;\xe9quipement",id:"configuration-du-snmp-sur-l\xe9quipement",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"J&#39;obtiens le message d&#39;erreur suivant:",id:"jobtiens-le-message-derreur-suivant",level:3},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:4},{value:"UNKNOWN: SNMP GET Request : Cant get a single value.",id:"unknown-snmp-get-request--cant-get-a-single-value",level:4}],g={toc:c},k="wrapper";function b(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)(k,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,r.kt)("p",null,"HPE Nimble Storage est une technologue de solutions de stockage de donn\xe9es sur des baies Flash dont le si\xe8ge\nest bas\xe9 \xe0 San Jos\xe9 en Californie. C'est une entit\xe9 de Hewlett Packard Enterprise. "),(0,r.kt)("p",null,"Nimble Storage produit des solutions mat\xe9rielles et logicielles pour le stockage de donn\xe9es en utilisant les protocoles\niSCSI et Fiber Channel. Des solutions de sauvegarde et de protection de donn\xe9es sont \xe9galement disponibles."),(0,r.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,r.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Nimble Flash Arrays")),(0,r.kt)("h3",{id:"services-disponibles"},"Services disponibles"),(0,r.kt)("p",null,"Les Services suivants sont mis \xe0 disposition au travers du connecteur de supervision: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Global-Stats"),(0,r.kt)("li",{parentName:"ul"},"Volumes")),(0,r.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Volume-Usage",label:"Volume-Usage",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"volume.space.usage.bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Per volume space usage (in Bytes)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Bytes"))))),(0,r.kt)(i.Z,{value:"Global-Stats",label:"Global-Stats",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"system.io.read.usage.bytespersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sytem read I/O"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Bytes/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"system.io.write.usage.bytespersecond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sytem write I/O"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Bytes/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"system.io.read.usage.iops"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sytem read IOPS count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Iops")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"system.io.write.usage.iops"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sytem write IOPS count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Iops")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"system.io.read.time.seconds"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sytem read time"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"system.io.write.time.seconds"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sytem write time"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Seconds")))))),(0,r.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,r.kt)("h3",{id:"configuration-du-snmp-sur-l\xe9quipement"},"Configuration du SNMP sur l'\xe9quipement"),(0,r.kt)("p",null,"Il est n\xe9cessaire de se r\xe9f\xe9rer \xe0 la documentation officielle du constructeur pour activer le SNMP:\n",(0,r.kt)("a",{parentName:"p",href:"https://infosight.hpe.com/InfoSight/media/cms/active/public/pubs_GUI_Administration_Guide_NOS_50x.whz/qzz1501525219979"},"https://infosight.hpe.com/InfoSight/media/cms/active/public/pubs_GUI_Administration_Guide_NOS_50x.whz/qzz1501525219979")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur chaque Collecteur Centreon devant superviser des \xe9quipements Nimble:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Storage-Nimble-Snmp\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, rendez-vous sur la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")," et installer le connecteur de supervision ",(0,r.kt)("em",{parentName:"li"},"Nimble SNMP")))),(0,r.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur chaque Collecteur Centreon devant superviser des \xe9quipements Nimble:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Storage-Nimble-Snmp\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Installer le RPM du connecteur de supervision sur le serveur Centreon Central:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-hardware-storage-nimble-snmp\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, rendez-vous sur la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")," et installer le connecteur de supervision ",(0,r.kt)("em",{parentName:"li"},"Nimble SNMP"))))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Ajouter un nouvel H\xf4te via le menu "Configuration > Hosts".'),(0,r.kt)("li",{parentName:"ul"},"Compl\xe9ter les champs ",(0,r.kt)("em",{parentName:"li"},"Communaut\xe9 SNMP")," et ",(0,r.kt)("em",{parentName:"li"},"Version SNMP")," avec les valeurs configur\xe9es sur le Nimble"),(0,r.kt)("li",{parentName:"ul"},"Appliquer le Mod\xe8le d'H\xf4te ",(0,r.kt)("em",{parentName:"li"},"HW-Storage-Nimble-SNMP"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Si vous utilisez SNMP en version 3, vous devez configurer les param\xe8tres sp\xe9cifiques associ\xe9s via la macro SNMPEXTRAOPTIONS.\nPlus d'informations dans la section ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP"),". ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Extra options SNMP")))),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("h3",{id:"jobtiens-le-message-derreur-suivant"},"J'obtiens le message d'erreur suivant:"),(0,r.kt)("h4",{id:"unknown-snmp-get-request--timeout"},"UNKNOWN: SNMP GET Request : Timeout"),(0,r.kt)("p",null,"Si vous obtenez ce message, cela signifie que vous ne parvenez pas \xe0 contacter l'\xe9quipement Nimble sur le port UDP/161,\nou alors que la communaut\xe9 SNMP configur\xe9e n'est pas correcte. Il est \xe9galement possible qu'un firewall bloque le flux."),(0,r.kt)("h4",{id:"unknown-snmp-get-request--cant-get-a-single-value"},"UNKNOWN: SNMP GET Request : Cant get a single value."),(0,r.kt)("p",null,"Les causes de cette erreur peuvent \xeatre les suivantes: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"cet \xe9quipement ne supporte ou n'embarque pas la MIB utilis\xe9e par ce mode"),(0,r.kt)("li",{parentName:"ul"},"les autorisations donn\xe9es \xe0 l'utilisateur en SNMP sont trop restreintes.\nL'agent SNMP doit \xeatre en mesure d'acc\xe9der \xe0 la branche entreprise HPE Nimble: .1.3.6.1.4.1.37447")))}b.isMDXComponent=!0}}]);