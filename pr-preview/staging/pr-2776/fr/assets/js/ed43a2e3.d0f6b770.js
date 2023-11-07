"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[46236],{36475:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>p,toc:()=>d});n(67294);var r=n(3905),a=n(51715),l=n(7626);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={id:"network-cisco-callmanager-sxml",title:"Cisco Call Manager SXML"},u=void 0,p={unversionedId:"integrations/plugin-packs/procedures/network-cisco-callmanager-sxml",id:"integrations/plugin-packs/procedures/network-cisco-callmanager-sxml",title:"Cisco Call Manager SXML",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/network-cisco-callmanager-sxml.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-cisco-callmanager-sxml",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/network-cisco-callmanager-sxml",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/network-cisco-callmanager-sxml.md",tags:[],version:"current",frontMatter:{id:"network-cisco-callmanager-sxml",title:"Cisco Call Manager SXML"},sidebar:"pp",previous:{title:"Cisco Call Manager",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/network-cisco-callmanager-snmp"},next:{title:"Cisco ESA Rest API",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/network-cisco-esa-restapi"}},m={},d=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:3},{value:"J&#39;obtiens le message d&#39;erreur suivant:",id:"jobtiens-le-message-derreur-suivant",level:3},{value:"<code>UNKNOWN: 500 Can&#39;t connect to mycucm.com:443 |</code>",id:"unknown-500-cant-connect-to-mycucmcom443-",level:4},{value:"<code>UNKNOWN: 501 Protocol scheme &#39;connect&#39; is not supported |</code>",id:"unknown-501-protocol-scheme-connect-is-not-supported-",level:4}],g={toc:d},k="wrapper";function f(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)(k,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,r.kt)("p",null,"En utilisant le SXML, ce connecteur de supervision Cisco Call Manager, supervise les alertes du composant Cisco Unified Communications."),(0,r.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,r.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Alertes")),(0,r.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,r.kt)("p",null,"Vous pouvez vous renseigner en d\xe9tails sur les m\xe9triques pr\xe9sent\xe9es ci-apr\xe8s sur la documentation officielle\nde Cisco Callmanager : ",(0,r.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/en/us/support/docs/unified-communications/unified-communications-manager-callmanager/213291-real-time-monitoring-tool-alerts.html#anc8"},"https://www.cisco.com/c/en/us/support/docs/unified-communications/unified-communications-manager-callmanager/213291-real-time-monitoring-tool-alerts.html#anc8")),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Alerts",label:"Alerts",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"alerts.total.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Total number of alerts"),(0,r.kt)("td",{parentName:"tr",align:"left"},"count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"severity-$alerts.severity.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of different severities"),(0,r.kt)("td",{parentName:"tr",align:"left"},"count")))))),(0,r.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon supervisant des ressources Cisco Callmanager :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Cisco-Callmanager-Sxml.noarch\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,r.kt)("em",{parentName:"li"},"Cisco Callmanager SXML")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,r.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon supervisant des ressources Cisco Callmanager :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Cisco-Callmanager-Sxml.noarch\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le connecteur de supervision via le RPM:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-network-cisco-callmanager-sxml.noarch\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,r.kt)("em",{parentName:"li"},"Cisco Callmanager SXML")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Ce connecteur de supervision est con\xe7u de mani\xe8re \xe0 avoir dans Centreon un h\xf4te par environnement Cisco Callmanager\nLorsque vous ajoutez un h\xf4te \xe0 Centreon, appliquez-lui le mod\xe8le ",(0,r.kt)("em",{parentName:"p"},"Net-Cisco-Callmanager-Sxml-custom"),".\nUne fois celui-ci configur\xe9, certaines macros doivent \xeatre renseign\xe9es:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"CUCMSXMLAPIPORT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Port used. Default is 8443")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"CUCMSXMLAPIPROTO"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Protocol used. Default is https")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"CUCMSXMLAPIEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command")))),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("h3",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,r.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande depuis votre Collecteur Centreon avec l'utilisateur ",(0,r.kt)("em",{parentName:"p"},"centreon-engine")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_cisco_cucm_sxml.pl \\\n    --plugin=network::cisco::callmanager::sxml::plugin \\\n    --mode=alerts \\\n    --hostname='mycucm.com' \\\n    --api-username='centreoncucm' \\\n    --api-password='myapipassword' \\\n    --port='8443' \\\n    --proto='https' \\ \n    --http-backend=curl \\\n    --curl-opt=\"CURLOPT_SSL_VERIFYPEER => 0\" \\\n    --verbose \\\n    --display-alerts\nOK: Alerts total: 1, informational: 0, error: 0, debugging: 0, critical: 1, alert: 0, warning: 0, emergency: 0, notice: 0 \n| 'alerts.total.count'=1;;;0; 'alerts.severity.informational.count'=0;;;0;1 'alerts.severity.error.count'=0;;;0;1 'alerts.severity.debugging.count'=0;;;0;1 \n'alerts.severity.critical.count'=1;;;0;1 'alerts.severity.alert.count'=0;;;0;1 'alerts.severity.warning.count'=0;;;0;1 'alerts.severity.emergency.count'=0;;;0;1 \n'alerts.severity.notice.count'=0;;;0;1\nalert [name: CDRFileDeliveryFailureContinues] [severity: critical] [date: Tue Oct  6 05:42:12 2020]:  BillingServerAddress : 172.28.172.105 \nAppID : Cisco CDR Repository Manager ClusterID :  NodeID : server.centreon.com  TimeStamp : Tue Oct 06 05:41:50 EDT 2020. \nThe alarm is generated on Tue Oct 06 05:41:50 EDT 2020. \n")),(0,r.kt)("p",null,"La commande ci-dessus contr\xf4le les alertes de Cisco Callmanager via la SXML (",(0,r.kt)("inlineCode",{parentName:"p"},"--mode=alerts"),").\nLe Plugin utilise l'api-username (",(0,r.kt)("inlineCode",{parentName:"p"},"--api-username='centreoncucm'"),"), l'api-password (",(0,r.kt)("inlineCode",{parentName:"p"},"--api-password='myapipassword'"),")\net il se connecte \xe0 l'h\xf4te ",(0,r.kt)("em",{parentName:"p"},"mycucm.com")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--hostname='mycucm.com'"),")\nsur le port ",(0,r.kt)("em",{parentName:"p"},"443")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--port='443'"),") utilisant le protocol ",(0,r.kt)("em",{parentName:"p"},"https")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--proto='https'"),").\nPar defaut le m\xe9thode du backend est ",(0,r.kt)("em",{parentName:"p"},"curl")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--http-backend=curl"),")."),(0,r.kt)("p",null,"Toutes les options et leur utilisation peuvent \xeatre consult\xe9es avec le param\xe8tre ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," ajout\xe9 \xe0 la commande:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_cisco_cucm_sxml.pl \\\n    --plugin=network::cisco::callmanager::sxml::plugin \\\n    --mode=alerts \\\n    --help\n")),(0,r.kt)("h3",{id:"jobtiens-le-message-derreur-suivant"},"J'obtiens le message d'erreur suivant:"),(0,r.kt)("h4",{id:"unknown-500-cant-connect-to-mycucmcom443-"},(0,r.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 500 Can't connect to mycucm.com:443 |")),(0,r.kt)("p",null,"Lors du d\xe9ploiement de mes contr\xf4les, j'obtiens le message suivant ",(0,r.kt)("inlineCode",{parentName:"p"},"UNKNOWN: 500 Can't connect to mycucm.com:443 |"),".\nCela signifie que Centreon n'a pas r\xe9ussi \xe0 se connecter \xe0 Cisco Callmanager SXML (",(0,r.kt)("em",{parentName:"p"},"mycucm.com"),").\nLa plupart du temps, il faut pr\xe9ciser le proxy \xe0 utiliser pour requ\xeater l'URL ",(0,r.kt)("em",{parentName:"p"},"mycucm.com")," en utilisant l'option ",(0,r.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany:8080'"),"."),(0,r.kt)("h4",{id:"unknown-501-protocol-scheme-connect-is-not-supported-"},(0,r.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 501 Protocol scheme 'connect' is not supported |")),(0,r.kt)("p",null,"Suite \xe0 la mise en place du proxy, j'obtiens le message suivant ",(0,r.kt)("inlineCode",{parentName:"p"},"UNKNOWN: 501 Protocol scheme 'connect' is not supported |"),"\nCela signifie que le protocole de connexion au proxy n'est pas support\xe9 par la libraire ",(0,r.kt)("em",{parentName:"p"},"LWP")," utlis\xe9e par d\xe9faut par le Plugin Centreon.\nCette erreur peut \xeatre r\xe9solue en utilisant le backend HTTP ",(0,r.kt)("em",{parentName:"p"},"lwp"),". Pour ce faire, ajoutez l'option ",(0,r.kt)("inlineCode",{parentName:"p"},"--http-backend='lwp'")," \xe0 la commande."))}f.isMDXComponent=!0}}]);