"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[60941],{99721:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>d});n(67294);var a=n(3905),s=n(51715),r=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}const c={id:"applications-cisco-ssms-restapi",title:"Cisco SSMS"},p=void 0,u={unversionedId:"integrations/plugin-packs/procedures/applications-cisco-ssms-restapi",id:"integrations/plugin-packs/procedures/applications-cisco-ssms-restapi",title:"Cisco SSMS",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-cisco-ssms-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-cisco-ssms-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/applications-cisco-ssms-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-cisco-ssms-restapi.md",tags:[],version:"current",frontMatter:{id:"applications-cisco-ssms-restapi",title:"Cisco SSMS"},sidebar:"pp",previous:{title:"Cisco ISE",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/applications-cisco-ise-restapi"},next:{title:"Commvault CommServe Rest API",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/applications-commvault-commserve-restapi"}},m={},d=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:3},{value:"J&#39;obtiens le message d&#39;erreur suivant:",id:"jobtiens-le-message-derreur-suivant",level:3},{value:"<code>UNKNOWN: 500 Can&#39;t connect to api.ssms.com:443 |</code>",id:"unknown-500-cant-connect-to-apissmscom443-",level:4},{value:"<code>UNKNOWN: 501 Protocol scheme &#39;connect&#39; is not supported |</code>",id:"unknown-501-protocol-scheme-connect-is-not-supported-",level:4},{value:"Comment puis-je supprimer les perfdatas <em>count</em> dans le cas o\xf9 je ne souhaite v\xe9rifier qu&#39;une seule application ?",id:"comment-puis-je-supprimer-les-perfdatas-count-dans-le-cas-o\xf9-je-ne-souhaite-v\xe9rifier-quune-seule-application-",level:3}],k={toc:d},g="wrapper";function f(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)(g,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,a.kt)("p",null,"Cisco Smart Software Manager On-Prem (anciennement connu sous le nom de Cisco Smart Software Manager satellite) est un composant de Cisco Smart Licensing\nqui fonctionne en conjonction avec Cisco Smart Software Manager (SSM).\nIl offre une visibilit\xe9 et des rapports sur les licences Cisco que vous achetez et consommez,\ntout en donnant aux organisations sensibles \xe0 la s\xe9curit\xe9 un moyen d'acc\xe9der \xe0 un sous-ensemble de fonctionnalit\xe9s de Cisco SSM\nsans utiliser de connexion Internet directe pour g\xe9rer leur base d'installation."),(0,a.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,a.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Applications"),(0,a.kt)("li",{parentName:"ul"},"Serveurs"),(0,a.kt)("li",{parentName:"ul"},"Licences"),(0,a.kt)("li",{parentName:"ul"},"Alertes")),(0,a.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,a.kt)(s.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"Alerts",label:"Alerts",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"account.alerts.minor.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of alerts minor.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"account.alerts.major.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of alerts major."))))),(0,a.kt)(r.Z,{value:"Licenses",label:"Licenses",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"licenses.usage.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of licenses usage.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"licenses.free.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of licenses free.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"licenses.usage.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Percentage of licenses usage. Unit : %")))))),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("p",null,"Un compte de service est requis pour interroger l'API Cisco SSMS. Celui-ci doit avoir suffisamment de privil\xe8ges en lecture du compte cibl\xe9es.\nPlus d'information sont disponible dans la documentation officielle de Cisco SSMS : ",(0,a.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/dam/en_us/buy/smart-accounts/smart-software-manager-satellite-enhanced-edition-6-2-0-user-guide.pdf"},"https://www.cisco.com/c/dam/en_us/buy/smart-accounts/smart-software-manager-satellite-enhanced-edition-6-2-0-user-guide.pdf")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(s.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources Cisco SSMS :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Cisco-Ssms-Restapi.noarch\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Cisco SSSM")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,a.kt)(r.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources Cisco SSMS :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Cisco-Ssms-Restapi.noarch\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le connecteur de supervision via le RPM:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-cisco-ssms-restapi.noarch\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Cisco SSMS")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Ce connecteur de supervision est con\xe7u de mani\xe8re \xe0 avoir dans Centreon un h\xf4te par compte.\nLorsque vous ajoutez un h\xf4te \xe0 Centreon, appliquez-lui le mod\xe8le ",(0,a.kt)("em",{parentName:"p"},"App-Cisco-Ssms-Restapi-custom"),". Une fois celui-ci configur\xe9, certaines macros doivent \xeatre renseign\xe9es:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"APIPORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Port used. Default is 8443")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"APIPROTO"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Protocol used. Default is https")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"CLIENTID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Client ID to access to the API.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"CLIENTSECRET"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Client Secret to access to the API.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"APIEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,a.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur ",(0,a.kt)("em",{parentName:"p"},"centreon-engine"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_cisco_ssms_restapi.pl \\\n      --plugin=apps::cisco::ssms::restapi::plugin \\\n      --mode=licenses \\\n      --hostname='myipaddress' \\\n      --client-id='myapiclientid' \\\n      --client-secret='myapiclientsecret' \\\n      --account='1234abc-56de-78fg-90hi-1234abcdefg' \\\n      --filter-counters='status' \\\n      --filter-license-name='mylicence'\n      --critical-license-status='%{status} !~ /in compliance/i' \\\n      --verbose\n")),(0,a.kt)("p",null,"La commande ci-dessus contr\xf4le le statut des licences Cisco SSMS (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=licences"),") nomm\xe9es ",(0,a.kt)("em",{parentName:"p"},"mylicence")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--filter-licences-name='mylicence'"),").\nCette licence appartient au compte ",(0,a.kt)("em",{parentName:"p"},"1234abc-56de-78fg-90hi-1234abcdefg")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--account='1234abc-56de-78fg-90hi-1234abcdefg'"),"). "),(0,a.kt)("p",null,"Cette commande d\xe9clenchera une alarme CRITICAL si le statut de la licence est diff\xe9rent de ",(0,a.kt)("em",{parentName:"p"},"in compliance")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-license-status='%{status} !~ /in compliance/i'"),")."),(0,a.kt)("p",null,"Toutes les options et leur utilisation peuvent \xeatre consult\xe9es avec le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," ajout\xe9 \xe0 la commande:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_cisco_ssms_restapi.pl --plugin=apps::cisco::ssms::restapi::plugin \n--mode=licences --help\n")),(0,a.kt)("h3",{id:"jobtiens-le-message-derreur-suivant"},"J'obtiens le message d'erreur suivant:"),(0,a.kt)("h4",{id:"unknown-500-cant-connect-to-apissmscom443-"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 500 Can't connect to api.ssms.com:443 |")),(0,a.kt)("p",null,"Lors du d\xe9ploiement de mes contr\xf4les, j'obtiens le message suivant ",(0,a.kt)("inlineCode",{parentName:"p"},"UNKNOWN: 500 Can't connect to api.ssms.com:443 |"),"."),(0,a.kt)("p",null,"Cela signifie que Centreon n'a pas r\xe9ussi \xe0 se connecter \xe0 l'API Cisco SSMS (",(0,a.kt)("em",{parentName:"p"},"api.ssms.com"),")."),(0,a.kt)("p",null,"La plupart du temps, il faut pr\xe9ciser le proxy \xe0 utiliser pour requ\xeater l'URL ",(0,a.kt)("em",{parentName:"p"},"api.ssms.com")," en utilisant l'option ",(0,a.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany:8080'"),"."),(0,a.kt)("h4",{id:"unknown-501-protocol-scheme-connect-is-not-supported-"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 501 Protocol scheme 'connect' is not supported |")),(0,a.kt)("p",null,"Suite \xe0 la mise en place du proxy, j'obtiens le message suivant ",(0,a.kt)("inlineCode",{parentName:"p"},"UNKNOWN: 501 Protocol scheme 'connect' is not supported |")),(0,a.kt)("p",null,"Cela signifie que le protocole de connexion au proxy n'est pas support\xe9 par la libraire ",(0,a.kt)("em",{parentName:"p"},"LWP")," utlis\xe9e par d\xe9faut par le Plugin Centreon."),(0,a.kt)("p",null,"Cette erreur peut \xeatre r\xe9solue en utilisant le backend HTTP ",(0,a.kt)("em",{parentName:"p"},"curl"),". Pour ce faire, ajoutez l'option ",(0,a.kt)("inlineCode",{parentName:"p"},"--http-backend='curl'")," \xe0 la commande."),(0,a.kt)("h3",{id:"comment-puis-je-supprimer-les-perfdatas-count-dans-le-cas-o\xf9-je-ne-souhaite-v\xe9rifier-quune-seule-application-"},"Comment puis-je supprimer les perfdatas ",(0,a.kt)("em",{parentName:"h3"},"count")," dans le cas o\xf9 je ne souhaite v\xe9rifier qu'une seule application ?"),(0,a.kt)("p",null,"Le Plugin permet de filtrer sur un ou plusieurs \xe9l\xe9ments mais permet \xe9galement de r\xe9cup\xe9rer l'ensemble des \xe9l\xe9ments si aucun filtre n'est sp\xe9cifi\xe9.\nDe ce fait, des perfdatas \"globales\" sur les statistiques des objets sont ajout\xe9es par d\xe9faut. Il est possible de supprimer ces donn\xe9es de performance en appliquant le filtre suivant: ",(0,a.kt)("inlineCode",{parentName:"p"},"--filter-perfdata='^$'"),"."))}f.isMDXComponent=!0}}]);