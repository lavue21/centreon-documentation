"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[35645],{90354:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>N,frontMatter:()=>o,metadata:()=>u,toc:()=>c});a(67294);var n=a(3905),r=a(51715),l=a(7626);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o={id:"operatingsystems-picos-snmp",title:"PICOS SNMP"},m=void 0,u={unversionedId:"integrations/plugin-packs/procedures/operatingsystems-picos-snmp",id:"integrations/plugin-packs/procedures/operatingsystems-picos-snmp",title:"PICOS SNMP",description:"Contenu du Pack",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/operatingsystems-picos-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/operatingsystems-picos-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/operatingsystems-picos-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/operatingsystems-picos-snmp.md",tags:[],version:"current",frontMatter:{id:"operatingsystems-picos-snmp",title:"PICOS SNMP"},sidebar:"pp",previous:{title:"Mac SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/operatingsystems-mac-snmp"},next:{title:"Solaris SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/operatingsystems-solaris-snmp"}},d={},c=[{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Mod\xe8les",id:"mod\xe8les",level:3},{value:"R\xe8gles de d\xe9couverte",id:"r\xe8gles-de-d\xe9couverte",level:3},{value:"M\xe9triques &amp; statuts collect\xe9s",id:"m\xe9triques--statuts-collect\xe9s",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Configuration SNMP",id:"configuration-snmp",level:3},{value:"Flux r\xe9seau",id:"flux-r\xe9seau",level:3},{value:"Installation",id:"installation",level:2},{value:"Pack de supervision",id:"pack-de-supervision",level:3},{value:"Plugin",id:"plugin",level:3},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4te",id:"h\xf4te",level:3},{value:"Comment puis-je tester le plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:3}],g={toc:c},k="wrapper";function N(e){var{components:t}=e,a=s(e,["components"]);return(0,n.kt)(k,p(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){i(e,t,a[t])}))}return e}({},g,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"contenu-du-pack"},"Contenu du Pack"),(0,n.kt)("h3",{id:"mod\xe8les"},"Mod\xe8les"),(0,n.kt)("p",null,"Le connecteur de supervision Centreon ",(0,n.kt)("strong",{parentName:"p"},"PICOS SNMP")," apporte un mod\xe8le d'h\xf4te :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"OS-PICOS-SNMP-custom")),(0,n.kt)("p",null,"Il apporte les mod\xe8les de service suivants :"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Alias"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Mod\xe8le de service"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"D\xe9faut"),(0,n.kt)("th",{parentName:"tr",align:"left"},"D\xe9couverte"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Cpu"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-PICOS-Cpu-SNMP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le du taux d'utilisation du CPU du l'\xe9quipement"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Hardware"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-PICOS-Hardware-SNMP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le les composants hardware de l'\xe9quipement"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Interfaces"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-PICOS-Interfaces-SNMP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le le trafic r\xe9seau et l'\xe9tat des interfaces r\xe9seau"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Memory"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-PICOS-Memory-SNMP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le du taux d'utilisation m\xe9moire"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Temperature"),(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-PICOS-Temperature-SNMP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le la temp\xe9rature du switch, du microcontr\xf4leur du switch ainsi que du CPU"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h3",{id:"r\xe8gles-de-d\xe9couverte"},"R\xe8gles de d\xe9couverte"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Nom de la r\xe8gle"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"OS-PICOS-SNMP-Interface-Name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Discover network interfaces and monitor bandwidth utilization")))),(0,n.kt)("p",null,"Rendez-vous sur la ",(0,n.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/services-discovery"},"documentation d\xe9di\xe9e"),"\npour en savoir plus sur la d\xe9couverte automatique de services et sa ",(0,n.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/services-discovery/#r%C3%A8gles-de-d%C3%A9couverte"},"planification"),"."),(0,n.kt)("h3",{id:"m\xe9triques--statuts-collect\xe9s"},"M\xe9triques & statuts collect\xe9s"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Cpu",label:"Cpu",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cpu.utilization.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cpu.temperature.celsius"),(0,n.kt)("td",{parentName:"tr",align:"left"},"C"))))),(0,n.kt)(l.Z,{value:"Hardware",label:"Hardware",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"psu_instance"),"#hardware.powersupply.temperature.celsius"),(0,n.kt)("td",{parentName:"tr",align:"left"},"C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"psu_instance"),"#hardware.powersupply.fan.speed.rpm"),(0,n.kt)("td",{parentName:"tr",align:"left"},"rpm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"power supply status"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"fan_instance"),"#hardware.fan.speed.rpm"),(0,n.kt)("td",{parentName:"tr",align:"left"},"C"))))),(0,n.kt)(l.Z,{value:"Interface",label:"Interface",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"interface_name"),"#interface.traffic.in.bitspersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"interface_name"),"#interface.traffic.out.bitspersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"interface_name"),"#interface.packets.in.error.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"interface_name"),"#interface.packets.in.discard.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"interface_name"),"#interface.packets.out.error.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"interface_name"),"#interface.packets.out.discard.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,n.kt)(l.Z,{value:"Memory",label:"Memory",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"memory.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"memory.free.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"memory.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,n.kt)(l.Z,{value:"Temperature",label:"Temperature",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"chip.temperature.celsius"),(0,n.kt)("td",{parentName:"tr",align:"left"},"C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cpu.temperature.celsius"),(0,n.kt)("td",{parentName:"tr",align:"left"},"C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"switch.temperature.celsius"),(0,n.kt)("td",{parentName:"tr",align:"left"},"C")))))),(0,n.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,n.kt)("h3",{id:"configuration-snmp"},"Configuration SNMP"),(0,n.kt)("p",null,"Afin de superviser votre \xe9quipement ",(0,n.kt)("strong",{parentName:"p"},"PICOS")," en SNMP,  il est n\xe9cessaire de configurer l'agent sur le serveur comme indiqu\xe9 sur la documentation officielle :\n",(0,n.kt)("a",{parentName:"p",href:"https://docs.pica8.com/display/picos2102cg/Configuring+snmp"},"https://docs.pica8.com/display/picos2102cg/Configuring+snmp")),(0,n.kt)("h3",{id:"flux-r\xe9seau"},"Flux r\xe9seau"),(0,n.kt)("p",null,"La communication doit \xeatre possible sur le port UDP 161 depuis le collecteur\nCentreon vers le serveur supervis\xe9."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("h3",{id:"pack-de-supervision"},"Pack de supervision"),(0,n.kt)("p",null,"Si la plateforme est configur\xe9e avec une licence ",(0,n.kt)("em",{parentName:"p"},"online"),", l'installation d'un paquet\nn'est pas requise pour voir appara\xeetre le pack dans le menu ",(0,n.kt)("strong",{parentName:"p"},"Configuration > Gestionnaire de connecteurs de supervision"),"."),(0,n.kt)("p",null,"Au contraire, si la plateforme utilise une licence ",(0,n.kt)("em",{parentName:"p"},"offline"),", installez le paquet\nsur le ",(0,n.kt)("strong",{parentName:"p"},"serveur central")," via la commande correspondant au gestionnaire de paquet\nassoci\xe9 \xe0 sa distribution :"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-pack-operatingsystems-picos-snmp\n"))),(0,n.kt)(l.Z,{value:"CentOS 7",label:"CentOS 7",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-operatingsystems-picos-snmp\n"))),(0,n.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"apt install centreon-pack-operatingsystems-picos-snmp\n")))),(0,n.kt)("p",null,"Quel que soit le type de la licence (",(0,n.kt)("em",{parentName:"p"},"online")," ou ",(0,n.kt)("em",{parentName:"p"},"offline"),"), installez le Pack ",(0,n.kt)("strong",{parentName:"p"},"PICOS SNMP"),"\ndepuis l'interface web et le menu ",(0,n.kt)("strong",{parentName:"p"},"Configuration > Gestionnaire de connecteurs de supervision"),"."),(0,n.kt)("h3",{id:"plugin"},"Plugin"),(0,n.kt)("p",null,"\xc0 partir de Centreon 22.04, il est possible de demander le d\xe9ploiement automatique\ndu plugin lors de l'utilisation d'un pack. Si cette fonctionnalit\xe9 est activ\xe9e, et\nque vous ne souhaitez pas d\xe9couvrir des \xe9l\xe9ments pour la premi\xe8re fois, alors cette\n\xe9tape n'est pas requise."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Plus d'informations dans la section ",(0,n.kt)("a",{parentName:"p",href:"/docs/monitoring/pluginpacks/#installer-le-plugin"},"Installer le plugin"),".")),(0,n.kt)("p",null,"Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre syst\xe8me d'exploitation :"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-plugin-Operatingsystems-Picos-Snmp\n"))),(0,n.kt)(l.Z,{value:"CentOS 7",label:"CentOS 7",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Operatingsystems-Picos-Snmp\n"))),(0,n.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"apt install centreon-plugin-operatingsystems-picos-snmp\n")))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("h3",{id:"h\xf4te"},"H\xf4te"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ajoutez un h\xf4te \xe0 Centreon depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes"),"."),(0,n.kt)("li",{parentName:"ul"},"Compl\xe9tez les champs ",(0,n.kt)("strong",{parentName:"li"},"Nom"),", ",(0,n.kt)("strong",{parentName:"li"},"Alias")," & ",(0,n.kt)("strong",{parentName:"li"},"IP Address/DNS")," correspondant \xe0 votre serveur ",(0,n.kt)("strong",{parentName:"li"},"PICOS"),"."),(0,n.kt)("li",{parentName:"ul"},"Appliquez le mod\xe8le d'h\xf4te ",(0,n.kt)("strong",{parentName:"li"},"OS-PICOS-SNMP-custom"),".")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Si vous utilisez SNMP en version 3, vous devez configurer les param\xe8tres sp\xe9cifiques associ\xe9s via la macro SNMPEXTRAOPTIONS.\nPlus d'informations dans la section ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP"),".")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Obligatoire"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Configurer vos param\xe8tres de s\xe9curit\xe9 SNMPv3")))),(0,n.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le plugin et que signifient les options des commandes ?"),(0,n.kt)("p",null,"Une fois le plugin install\xe9, vous pouvez tester celui-ci directement en ligne\nde commande depuis votre collecteur Centreon en vous connectant avec\nl'utilisateur ",(0,n.kt)("strong",{parentName:"p"},"centreon-engine")," (",(0,n.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_picos_snmp.pl \\\n    --plugin=os::picos::snmp::plugin \\\n    --mode=memory \\\n    --hostname=10.0.0.1 \\\n    --snmp-version='2c' \\\n    --snmp-community='my-snmp-community' \\\n    --warning-usage='' \\\n    --critical-usage='' \\\n    --warning-usage-free='' \\\n    --critical-usage-free='' \\\n    --warning-usage-prct='' \\\n    --critical-usage-prct='' \\\n    --use-new-perfdata\n")),(0,n.kt)("p",null,"La commande devrait retourner un message de sortie similaire \xe0 :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Memory total: 1011.41 MB used: 444.87 MB (43.98%) free: 566.54 MB (56.02%) | 'memory.usage.bytes'=466477056B;;;0;1060540416 'memory.free.bytes'=594063360B;;;0;1060540416 'memory.usage.percentage'=43.98%;;;0;100 \n")),(0,n.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification peut \xeatre\naffich\xe9e en ajoutant le param\xe8tre ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_picos_snmp.pl \\\n    --plugin=os::picos::snmp::plugin \\\n    --mode=memory \\\n    --help\n")),(0,n.kt)("p",null,"Tous les modes disponibles peuvent \xeatre affich\xe9s en ajoutant le param\xe8tre\n",(0,n.kt)("inlineCode",{parentName:"p"},"--list-mode")," \xe0 la commande :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_picos_snmp.pl \\\n    --plugin=os::picos::snmp::plugin \\\n    --list-mode\n")),(0,n.kt)("h3",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,n.kt)("p",null,"Rendez-vous sur la ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"documentation d\xe9di\xe9e"),"\npour le diagnostic des erreurs communes des plugins Centreon."))}N.isMDXComponent=!0}}]);