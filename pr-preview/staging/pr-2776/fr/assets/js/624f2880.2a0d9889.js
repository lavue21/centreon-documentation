"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[4837],{5324:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>N,frontMatter:()=>o,metadata:()=>u,toc:()=>c});a(67294);var n=a(3905),r=a(51715),l=a(7626);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o={id:"hardware-devices-polycom-rprm-snmp",title:"Polycom RPRM SNMP"},m=void 0,u={unversionedId:"integrations/plugin-packs/procedures/hardware-devices-polycom-rprm-snmp",id:"integrations/plugin-packs/procedures/hardware-devices-polycom-rprm-snmp",title:"Polycom RPRM SNMP",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/hardware-devices-polycom-rprm-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-devices-polycom-rprm-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/hardware-devices-polycom-rprm-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/hardware-devices-polycom-rprm-snmp.md",tags:[],version:"current",frontMatter:{id:"hardware-devices-polycom-rprm-snmp",title:"Polycom RPRM SNMP"},sidebar:"pp",previous:{title:"Polycom RMX",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/network-polycom-rmx-snmp"},next:{title:"Sonus SBC SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/network-sonus-sbc-snmp"}},d={},c=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Configuration SNMP de l&#39;\xe9quipement",id:"configuration-snmp-de-l\xe9quipement",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:3},{value:"Comment puis-je superviser les resources syst\xe8me tels que CPU, disques...?",id:"comment-puis-je-superviser-les-resources-syst\xe8me-tels-que-cpu-disques",level:3},{value:"J&#39;obtiens le message d&#39;erreur suivant:",id:"jobtiens-le-message-derreur-suivant",level:3},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:4},{value:"UNKNOWN: SNMP GET Request : Cant get a single value.",id:"unknown-snmp-get-request--cant-get-a-single-value",level:4}],k={toc:c},g="wrapper";function N(e){var{components:t}=e,a=p(e,["components"]);return(0,n.kt)(g,s(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){i(e,t,a[t])}))}return e}({},k,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,n.kt)("p",null,"Polycom RealPresence Resource Manager (RPRM) offre une gestion centralis\xe9e de tous vos p\xe9riph\xe9riques pris en charge, des t\xe9l\xe9phones mobiles\naux t\xe9l\xe9phones de bureau et de conf\xe9rence, tout au long de vos syst\xe8mes de salle de visioconf\xe9rence et de t\xe9l\xe9pr\xe9sence.\nLors d'un d\xe9ploiement dans le cadre de la solution RealPresence Clariti, les entreprises b\xe9n\xe9ficient d'applications pour assurer\nla liaison, la redondance, la travers\xe9e de pare-feu, la signalisation d'appels et la vid\xe9o mobile."),(0,n.kt)("p",null,"Le connecteur de supervision Centreon utilise le protocole SNMP pour se connecter et r\xe9cup\xe9rer informations et m\xe9triques relatives aux \xe9quipements\nPolycom RPRM."),(0,n.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,n.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Appliances Polycom RPRM")),(0,n.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Cluster-Status",label:"Cluster-Status",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cluster-status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current status of the RPRM SuperCluster")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"cluster-change-cause"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Reason of the last cluster state change"))))),(0,n.kt)(l.Z,{value:"License",label:"License",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"rprm.license.total.usage.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current usage of assets vs the license maximum capability"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"rprm.license.audio.usage.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current usage of audio assets vs the license maximum capability"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"rprm.license.video.usage.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current usage of video assets vs the license maximum capability"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count"))))),(0,n.kt)(l.Z,{value:"Provisioning",label:"Provisioning",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"provisioning-status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current provisioning jobs status"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"rprm.provisioning.failed.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of failed provisioning jobs"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"rprm.provisioning.success.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of successed provisioning jobs"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count"))))),(0,n.kt)(l.Z,{value:"SiteLinks",label:"SiteLinks",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Global")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"rprm.sitelinks.total.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Total number of SiteLinks managed by the RPRM"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Par ",(0,n.kt)("em",{parentName:"li"},"SiteLink"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sitelink-status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current SiteLink status"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"rprm.sitelink.calls.active.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of active calls on the SiteLink"),(0,n.kt)("td",{parentName:"tr",align:null},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"rprm.sitelink.bandwidth.used.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Percentage rate of used bandwidth"),(0,n.kt)("td",{parentName:"tr",align:null},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"rprm.sitelink.bandwidth.total.bytespersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Total bandwidth allocated to the SiteLink"),(0,n.kt)("td",{parentName:"tr",align:null},"B/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"rprm.sitelink.callbitrate.average.ratio"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Average Call Bit Rate of calls made on the SiteLink"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"rprm.sitelink.packetloss.average.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Average packet-loss percentage rate on the SiteLink"),(0,n.kt)("td",{parentName:"tr",align:null},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"rprm.sitelink.jitter.average.milliseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Average jitter time on the SiteLink"),(0,n.kt)("td",{parentName:"tr",align:null},"ms")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"rprm.sitelink.delay.average.milliseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Average delay time on the SiteLink"),(0,n.kt)("td",{parentName:"tr",align:null},"ms"))))),(0,n.kt)(l.Z,{value:"Sites",label:"Sites",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Global")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"rprm.sites.total.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Total number of Sites managed by the RPRM"),(0,n.kt)("td",{parentName:"tr",align:null},"Count")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Par ",(0,n.kt)("em",{parentName:"li"},"Site"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"rprm.site.calls.active.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of active calls on the Site"),(0,n.kt)("td",{parentName:"tr",align:null},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"rprm.site.bandwidth.used.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Percentage rate of used bandwidth"),(0,n.kt)("td",{parentName:"tr",align:null},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"rprm.site.bandwidth.total.bytespersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Total bandwidth allocated to the Site"),(0,n.kt)("td",{parentName:"tr",align:null},"B/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"rprm.site.callbitrate.average.ratio"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Average Call Bit Rate of calls made on the Site"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"rprm.site.packetloss.average.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Average packet-loss percentage rate on the Site"),(0,n.kt)("td",{parentName:"tr",align:null},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"rprm.site.jitter.average.milliseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Average jitter time on the Site"),(0,n.kt)("td",{parentName:"tr",align:null},"ms")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"rprm.site.delay.average.milliseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Average delay time on the Site"),(0,n.kt)("td",{parentName:"tr",align:null},"ms"))))),(0,n.kt)(l.Z,{value:"Updates",label:"Updates",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"updates-status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current updates jobs status"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"rprm.updates.failed.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of failed updates jobs"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"rprm.updates.success.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of successed updates jobs"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Count")))))),(0,n.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,n.kt)("h3",{id:"configuration-snmp-de-l\xe9quipement"},"Configuration SNMP de l'\xe9quipement"),(0,n.kt)("p",null,"La documentation officielle Polycom (en anglais, lien ci-dessous) d\xe9taille les \xe9tapes pour activer et configurer le service SNMP:\n",(0,n.kt)("a",{parentName:"p",href:"https://documents.polycom.com/bundle/rprm-ops-10-5/page/rprm_ops/SNMP_Operations/SNMP_Operations.htm"},"https://documents.polycom.com/bundle/rprm-ops-10-5/page/rprm_ops/SNMP_Operations/SNMP_Operations.htm")),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installer le Plugin sur chaque collecteur Centreon devant superviser des \xe9quipements Polycom RPRM:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Devices-Polycom-Rprm-Snmp\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,n.kt)("em",{parentName:"li"},"Polycom RPRM SNMP"),"\ndepuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")," "))),(0,n.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installer le Plugin sur chaque collecteur Centreon devant superviser des \xe9quipements Polycom RPRM:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Devices-Polycom-Rprm-Snmp\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Installer le RPM du connecteur de supervision sur le serveur Centreon Central:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-hardware-devices-polycom-rprm-snmp\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,n.kt)("em",{parentName:"li"},"Polycom RPRM SNMP"),"\ndepuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Ajoutez un nouvel H\xf4te depuis la page "Configuration > H\xf4tes"'),(0,n.kt)("li",{parentName:"ul"},"Compl\xe9tez les champs ",(0,n.kt)("em",{parentName:"li"},"Communaut\xe9 SNMP")," et ",(0,n.kt)("em",{parentName:"li"},"Version SNMP")),(0,n.kt)("li",{parentName:"ul"},"Appliquez le Mod\xe8le d'H\xf4te ",(0,n.kt)("em",{parentName:"li"},"HW-Device-Polycom-Rprm-SNMP-Custom"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Si vous utilisez SNMP en version 3, vous devez configurer les param\xe8tres sp\xe9cifiques associ\xe9s via la macro SNMPEXTRAOPTIONS.\nPlus d'informations dans la section ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP"),". ")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Extra options SNMP")))),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("h3",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,n.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande\ndepuis un collecteur Centreon en vous connectant avec l'utilisateur ",(0,n.kt)("em",{parentName:"p"},"centreon-engine"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_polycom_rprm_snmp.pl \\\n    --plugin=hardware::devices::polycom::rprm::snmp::plugin \\\n    --mode=sites \\\n    --hostname=10.0.0.1 \\\n    --snmp-version='2c'\n    --snmp-community='mysnmpcommunity' \\\n    --warning-site-bandwidth-used-prct='80' \\\n    --critical-site-bandwidth-used-prct='90' \\\n    --warning-site-packetloss-prct='5' \\\n    --critical-site-packetloss-prct='10' \\\n    --verbose\n")),(0,n.kt)("p",null,"La commande devrait retourner un message de sortie de la forme ci-dessous:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Total sites : 1 - Site 'My_Poly_Site_1' current active calls : 27, current bandwidth usage : 12.50 %, Total allowed bandwidth: 25.00 Mb/s, \nAverage call bit rate : 1.11, Average packetloss : 1.03 %, Average jitter time : 0.77 ms, Average delay time : 1.10 ms | \n'rprm.sites.total.count'=3;;;0; 'My_Poly_Site_1#rprm.site.calls.active.count'=27;;;0; 'My_Poly_Site_1#rprm.site.bandwidth.used.percentage'=12.50%;80;90;0;100 \n'My_Poly_Site_1#rprm.site.bandwidth.total.bytespersecond'=25000000.00B/s;;;0; 'My_Poly_Site_1#rprm.site.callbitrate.average.ratio'=1.11;;;0; \n'My_Poly_Site_1#rprm.site.packetloss.average.percentage'=1.03%;5;10;0;100 'My_Poly_Site_1#rprm.site.jitter.average.milliseconds'=0.77ms;;;0; 'My_Poly_Site_1#rprm.site.delay.average.milliseconds'=1.10ms;;;0;\nSite 'My_Poly_Site_1' current active calls : 27, current bandwidth usage : 12.50 %, Total allowed bandwidth: 25.00 Mb/s, \nAverage call bit rate : 1.11, Average packetloss : 1.03 %, Average jitter time : 0.77 ms, Average delay time : 1.10 ms\n")),(0,n.kt)("p",null,"Dans cet exemple, le Plugin r\xe9cup\xe8re les informations concernant les ",(0,n.kt)("em",{parentName:"p"},"Sites")," d'un \xe9quipement Polycom RPRM (",(0,n.kt)("inlineCode",{parentName:"p"},"--plugin=hardware::devices::polycom::rprm::snmp::plugin --mode=sites"),")\nidentif\xe9 par l'adresse IP ",(0,n.kt)("em",{parentName:"p"},"10.0.0.1")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--hostname=10.0.0.1"),"). Les param\xe8tres de communaut\xe9 et de version SNMP (",(0,n.kt)("inlineCode",{parentName:"p"},"--snmp-version='2c' --snmp-community='mysnmpcommunity'"),")\ncorrespondants sont renseign\xe9s afin de pouvoir joindre l'\xe9quipement."),(0,n.kt)("p",null,"Une alarme WARNING sera ainsi d\xe9clench\xe9e si l'utilisation de la bande passante du ",(0,n.kt)("em",{parentName:"p"},"site")," est sup\xe9rieure \xe0 80% (",(0,n.kt)("inlineCode",{parentName:"p"},"--warning-site-bandwidth-used-prct='80'"),");\nl'alarme sera de type CRITICAL au del\xe0 de 90% d'utilisation (",(0,n.kt)("inlineCode",{parentName:"p"},"--critical-site-bandwidth-used-prct='90'"),").\nDe la m\xeame mani\xe8re, des alarmes seront d\xe9clench\xe9es lors du d\xe9passement des seuils fix\xe9s pour le taux de ",(0,n.kt)("em",{parentName:"p"},"packetloss")," observ\xe9\n(",(0,n.kt)("inlineCode",{parentName:"p"},"--warning-site-packetloss-prct='5' --critical-site-packetloss-prct='10'"),")."),(0,n.kt)("p",null,"Pour chaque mode, la liste de toutes les m\xe9triques, seuils associ\xe9s et options compl\xe9mentaires peut \xeatre affich\xe9e\nen ajoutant le param\xe8tre ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_polycom_rprm_snmp.pl --plugin=hardware::devices::polycom::rprm::snmp::plugin --mode=sites --help\n")),(0,n.kt)("h3",{id:"comment-puis-je-superviser-les-resources-syst\xe8me-tels-que-cpu-disques"},"Comment puis-je superviser les resources syst\xe8me tels que CPU, disques...?"),(0,n.kt)("p",null,"Les \xe9quipements Polycom RPRM sont bas\xe9s sur des syst\xe8mes Linux. Il est ainsi possible de superviser les resources de la couche OS\nen appliquant le Mod\xe8le d'H\xf4te ",(0,n.kt)("em",{parentName:"p"},"OS-Linux-Snmp-Custom")," en compl\xe9ment du Mod\xe8le ",(0,n.kt)("em",{parentName:"p"},"HW-Device-Polycom-Rprm-SNMP-Custom")," d\xe9crit pr\xe9c\xe9demment."),(0,n.kt)("h3",{id:"jobtiens-le-message-derreur-suivant"},"J'obtiens le message d'erreur suivant:"),(0,n.kt)("h4",{id:"unknown-snmp-get-request--timeout"},"UNKNOWN: SNMP GET Request : Timeout"),(0,n.kt)("p",null,"Si vous obtenez ce message, cela signifie que vous ne parvenez pas \xe0 contacter l'\xe9quipement Polycom RPRM sur le port UDP/161,\nou que la communaut\xe9 SNMP configur\xe9e n'est pas correcte. Il est \xe9galement possible qu'un pare-feu bloque le flux."),(0,n.kt)("h4",{id:"unknown-snmp-get-request--cant-get-a-single-value"},"UNKNOWN: SNMP GET Request : Cant get a single value."),(0,n.kt)("p",null,"Les causes de cette erreur peuvent \xeatre les suivantes: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"cet \xe9quipement ne supporte ou n'embarque pas la MIB utilis\xe9e par ce mode"),(0,n.kt)("li",{parentName:"ul"},"les autorisations donn\xe9es \xe0 l'utilisateur en SNMP sont trop restreintes.")))}N.isMDXComponent=!0}}]);