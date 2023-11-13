"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[68769],{36928:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>N,frontMatter:()=>p,metadata:()=>c,toc:()=>m});a(67294);var n=a(3905),r=a(51715),i=a(7626);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const p={id:"hardware-storage-netapp-santricity-restapi",title:"Netapp Santricity Restapi"},u=void 0,c={unversionedId:"integrations/plugin-packs/procedures/hardware-storage-netapp-santricity-restapi",id:"integrations/plugin-packs/procedures/hardware-storage-netapp-santricity-restapi",title:"Netapp Santricity Restapi",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/hardware-storage-netapp-santricity-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-storage-netapp-santricity-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/hardware-storage-netapp-santricity-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/hardware-storage-netapp-santricity-restapi.md",tags:[],version:"current",frontMatter:{id:"hardware-storage-netapp-santricity-restapi",title:"Netapp Santricity Restapi"},sidebar:"pp",previous:{title:"Netapp RestAPI (d\xe9pr\xe9ci\xe9)",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/hardware-storage-netapp-restapi"},next:{title:"Netapp SNMP (d\xe9pr\xe9ci\xe9)",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/hardware-storage-netapp-snmp"}},d={},m=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"\xc9l\xe9ments supervis\xe9s",id:"\xe9l\xe9ments-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Configuration de l&#39;API SANtricity",id:"configuration-de-lapi-santricity",level:3},{value:"Ressources en ligne",id:"ressources-en-ligne",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:3},{value:"J&#39;obtiens le message d&#39;erreur suivant:",id:"jobtiens-le-message-derreur-suivant",level:3},{value:"<code>UNKNOWN: 500 Can&#39;t connect to santricity.int.centreon.com:8080 |</code>",id:"unknown-500-cant-connect-to-santricityintcentreoncom8080-",level:4},{value:"<code>UNKNOWN: 501 Protocol scheme &#39;connect&#39; is not supported |</code>",id:"unknown-501-protocol-scheme-connect-is-not-supported-",level:4},{value:"<code>UNKNOWN: Cannot load module &#39;Net::Curl::Easy&#39;</code>",id:"unknown-cannot-load-module-netcurleasy",level:4}],k={toc:m},g="wrapper";function N(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)(g,s(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){l(e,t,a[t])}))}return e}({},k,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,n.kt)("p",null,"Le syst\xe8me d'exploitation SANtricity, d\xe9livr\xe9 par l'entreprise NetApp, acc\xe9l\xe8re et fiabilise vos donn\xe9es de stockage tout en renfor\xe7ant la protection de celles-ci.\nLe service SANtricity Web Services Proxy (WSP) permet d'acc\xe9der de mani\xe8re normalis\xe9e \xe0 la configuration et aux indicateurs des \xe9quipements NetApp par l'utilisation d'une API Rest HTTP."),(0,n.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,n.kt)("h3",{id:"\xe9l\xe9ments-supervis\xe9s"},"\xc9l\xe9ments supervis\xe9s"),(0,n.kt)("p",null,"Le connecteur de supervision SANtricity permet de superviser les ressources NetApp accessibles au travers de l'API SANtricity:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Contr\xf4leurs"),(0,n.kt)("li",{parentName:"ul"},"Volumes")),(0,n.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,n.kt)("p",null,"Les m\xe9triques collect\xe9es sont les suivantes:"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Hardware",label:"Hardware",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check components operational status: battery, cbd, ctrl, drive, fan, psu, storage, thsensor. Unit: count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hardware.drive.temperature.celsius"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check drives temperature. Unit: \xb0C"))))),(0,n.kt)(i.Z,{value:"Storage Pools",label:"Storage Pools",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"raid","_","status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Raid status information"))))),(0,n.kt)(i.Z,{value:"Storage Controllers",label:"Storage Controllers",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Controller operational status")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"volume.cpu.utilization.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CPU volume utilization. Unit: %")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"volume.io.read.usage.bytespersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Volume IO read usage. Unit: B/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"volume.io.write.usage.bytespersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Volume IO write usage. Unit: B/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"system.io.read.usage.iops"),(0,n.kt)("td",{parentName:"tr",align:"left"},"System read IOPS usage. Unit: count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"system.io.write.usage.iops"),(0,n.kt)("td",{parentName:"tr",align:"left"},"System write IOPS usage. Unit: count"))))),(0,n.kt)(i.Z,{value:"Storage Systems",label:"Storage Systems",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"System operational status")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"pool.space.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Pool space usage. Unit: B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"pool.space.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Pool space percentage usage. Unit: %")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"pool.space.free.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Pool free space. Unit: B"))))),(0,n.kt)(i.Z,{value:"Storage Volumes",label:"Storage Volumes",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Volume operational status")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"volume.io.read.usage.bytespersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Volume IO read usage. Unit: B/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"volume.io.write.usage.bytespersecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Volume IO write usage. Unit: B/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"system.io.read.usage.iops"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Volume read IOPS usage. Unit: count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"system.io.write.usage.iops"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Volume write IOPS usage. Unit: count")))))),(0,n.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,n.kt)("h3",{id:"configuration-de-lapi-santricity"},"Configuration de l'API SANtricity"),(0,n.kt)("p",null,"Le Plugin Centreon ",(0,n.kt)("em",{parentName:"p"},"Netapp Santricity Restapi")," s'appuie sur l'API Rest NetApp SANtricity fournie par la solution Web Services Proxy (WSP).\nCelle-ci doit \xeatre pr\xe9alablement install\xe9e et op\xe9rationnelle sur un serveur d\xe9di\xe9 (Windows/Linux) afin de pouvoir utiliser l'API Rest.\nLes ressources ci-apr\xe8s d\xe9crivent les m\xe9thodes d'installation ainsi que le fonctionnement de l'API."),(0,n.kt)("h3",{id:"ressources-en-ligne"},"Ressources en ligne"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Installation de SANtricity Web Services: ",(0,n.kt)("a",{parentName:"li",href:"https://library.netapp.com/ecm/ecm_download_file/ECMLP2846165"},"https://library.netapp.com/ecm/ecm_download_file/ECMLP2846165")),(0,n.kt)("li",{parentName:"ul"},"Prise en main et exploitation de l'API Rest: ",(0,n.kt)("a",{parentName:"li",href:"https://library.netapp.com/ecmdocs/ECMLP2839901/html/v2.html"},"https://library.netapp.com/ecmdocs/ECMLP2839901/html/v2.html"))),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources Netapp SANtricity:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Storage-Netapp-Santricity-Restapi\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Depuis l'interface Web de Centreon, installer le connecteur de supervision ",(0,n.kt)("em",{parentName:"li"},"Netapp Santricity Restapi")," depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,n.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources Netapp SANtricity:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Storage-Netapp-Santricity-Restapi\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Installer le RPM du connecteur de supervision sur le serveur Centreon Central:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"centreon-pack-hardware-storage-netapp-santricity-restapi.noarch\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Depuis l'interface Web de Centreon, installer le connecteur de supervision ",(0,n.kt)("em",{parentName:"li"},"Netapp Santricity Restapi")," depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Depuis l\'interface Web de Centreon, ajoutez un nouvel H\xf4te depuis la page "Configuration > H\xf4tes".'),(0,n.kt)("li",{parentName:"ul"},'Appliquez le mod\xe8le d\'H\xf4te "HW-Storage-Netapp-Santricity-Restapi-custom" et configurer les macros n\xe9cessaires :')),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"APIPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Port used (Default: 8080)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"APIUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Santricity API username.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"APIPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Santricity API password. Password checkbox must be checked")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"APIPATH"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specify api path (Default: '/devmgr/v2')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"APIPROTO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specify https if needed (Default: 'http')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"APIEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command (eg. a --verbose flag)")))),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("h3",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,n.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur\nCentreon avec l'utilisateur ",(0,n.kt)("em",{parentName:"p"},"centreon-engine"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_netapp_santricity_restapi.pl \\\n    --plugin=storage::netapp::santricity::restapi::plugin \\\n    --hostname=sancitricy.int.centreon.com \\\n    --port=8080 \\\n    --proto=http \\\n    --api-path='/devmgr/v2' \\\n    --api-username='admin' \\\n    --api-password='xxxx' \\\n    --mode=storage-volumes \\\n    --verbose \\\n    --warning-volume-status='%{status} =~ /degraded/i' \\\n    --critical-volume-status='%{status} =~ /failed/i'\n")),(0,n.kt)("p",null,"La commande doit retourner un r\xe9sultat de la forme:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: storage system 'SAN-XXX' volumes are ok |\nchecking storage system 'SAN-XXXX'\n    volume 'Datastore_X' status: optimal\n    volume 'Datastore_Y' status: optimal\n")),(0,n.kt)("p",null,"Cette\xa0commande\xa0v\xe9rifie le statut des volumes NetApp (",(0,n.kt)("inlineCode",{parentName:"p"},"--mode=storage-volumes"),") en requ\xeatant l'API SANtricity du serveur ",(0,n.kt)("em",{parentName:"p"},"santricity.int.centreon.com")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--hostname=sancitricy.int.centreon.com"),").\nL'authentification \xe0 l'API s'effectue avec un utilisateur ",(0,n.kt)("em",{parentName:"p"},"admin")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--api-user=admin"),") et un mot de passe ",(0,n.kt)("em",{parentName:"p"},"xxxx")," associ\xe9 (",(0,n.kt)("inlineCode",{parentName:"p"},"api-password='xxxx'"),")."),(0,n.kt)("p",null,"Cette commande d\xe9clenchera une alarme WARNING si l'un des volumes est en statut ",(0,n.kt)("em",{parentName:"p"},"degraded")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--warning-volume-status='%{status} =~ /degraded/i'"),")\net une alarme de type CRITICAL pour un statut ",(0,n.kt)("em",{parentName:"p"},"failed")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--critical-volume-status='%{status} =~ /failed/i'"),")."),(0,n.kt)("p",null,"Pour chaque mode, les options disponibles peuvent \xeatre consult\xe9es en ajoutant l'option ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/usr/lib/centreon/plugins/centreon_netapp_santricity_restapi.pl \\\n    --plugin=storage::netapp::santricity::restapi::plugin \\\n    --mode=storage-volumes \\\n      --help\n")),(0,n.kt)("h3",{id:"jobtiens-le-message-derreur-suivant"},"J'obtiens le message d'erreur suivant:"),(0,n.kt)("h4",{id:"unknown-500-cant-connect-to-santricityintcentreoncom8080-"},(0,n.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 500 Can't connect to santricity.int.centreon.com:8080 |")),(0,n.kt)("p",null,"Lors du d\xe9ploiement de mes contr\xf4les, j'obtiens le message suivant: ",(0,n.kt)("inlineCode",{parentName:"p"},"UNKNOWN: 500 Can't connect to santricity.int.centreon.com:8080 |"),"."),(0,n.kt)("p",null,"Cela signifie que Centreon n'a pas r\xe9ussi \xe0 se connecter \xe0 l'API Netapp SANtricity."),(0,n.kt)("p",null,"Si l'utilisation d'un proxy est requise pour les connexions HTTP depuis le collecteur Centreon,\nil est n\xe9cessaire de le pr\xe9ciser dans la commande en utilisant l'option ",(0,n.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany:8080'"),"."),(0,n.kt)("h4",{id:"unknown-501-protocol-scheme-connect-is-not-supported-"},(0,n.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 501 Protocol scheme 'connect' is not supported |")),(0,n.kt)("p",null,"Suite \xe0 la mise en place du proxy, j'obtiens le message suivant ",(0,n.kt)("inlineCode",{parentName:"p"},"UNKNOWN: 501 Protocol scheme 'connect' is not supported |")),(0,n.kt)("p",null,"Cela signifie que le protocole de connexion au proxy n'est pas support\xe9 par la libraire ",(0,n.kt)("em",{parentName:"p"},"lwp")," utlis\xe9e par d\xe9faut par le Plugin Centreon."),(0,n.kt)("p",null,"Cette erreur peut \xeatre r\xe9solue en utilisant le backend HTTP ",(0,n.kt)("em",{parentName:"p"},"curl"),". Pour ce faire, ajoutez l'option ",(0,n.kt)("inlineCode",{parentName:"p"},"--http-backend='curl'")," \xe0 la commande."),(0,n.kt)("h4",{id:"unknown-cannot-load-module-netcurleasy"},(0,n.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: Cannot load module 'Net::Curl::Easy'")),(0,n.kt)("p",null,"Ce message d'erreur signifie qu'une librairie Perl est manquante."),(0,n.kt)("p",null,"Dans le cas pr\xe9sent, vous pouvez installer la librairie manquante en lan\xe7ant la commande suivante:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install perl-Net-Curl\n")))}N.isMDXComponent=!0}}]);