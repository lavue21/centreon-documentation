"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[62578],{3986:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>N,frontMatter:()=>s,metadata:()=>u,toc:()=>d});n(67294);var a=n(3905),r=n(51715),i=n(7626);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"applications-proxmox-mg-api",title:"Proxmox Mail Gateway"},m=void 0,u={unversionedId:"integrations/plugin-packs/procedures/applications-proxmox-mg-api",id:"integrations/plugin-packs/procedures/applications-proxmox-mg-api",title:"Proxmox Mail Gateway",description:"Contenu du connecteur de supervision",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-proxmox-mg-api.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-proxmox-mg-api",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/applications-proxmox-mg-api",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-proxmox-mg-api.md",tags:[],version:"current",frontMatter:{id:"applications-proxmox-mg-api",title:"Proxmox Mail Gateway"},sidebar:"pp",previous:{title:"PineApp Mail Secure",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/applications-pineapp-securemail-snmp"},next:{title:"Quadstor NSClient++ NRPE",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/applications-quadstor-nrpe"}},c={},d=[{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"J&#39;obtiens le message d&#39;erreur suivant:",id:"jobtiens-le-message-derreur-suivant",level:2},{value:"<code>UNKNOWN: 500 Can&#39;t connect to 10.30.2.79:8006 |</code>",id:"unknown-500-cant-connect-to-10302798006-",level:3},{value:"<code>UNKNOWN: 501 Protocol scheme &#39;connect&#39; is not supported |</code>",id:"unknown-501-protocol-scheme-connect-is-not-supported-",level:3}],g={toc:d},k="wrapper";function N(e){var{components:t}=e,n=p(e,["components"]);return(0,a.kt)(k,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,a.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,a.kt)("p",null,"Le connecteur de supervision Proxmox Mail Gateway collecte les donn\xe9es pour:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mail"),(0,a.kt)("li",{parentName:"ul"},"Version")),(0,a.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Mail",label:"Mail",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"mails.incoming.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of incoming mails"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"mails.outgoing.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of outgoing mails"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"mails.traffic.in.bytespersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Incoming mail traffic"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"mails.traffic.out.bytespersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Outgoing mail traffic"),(0,a.kt)("td",{parentName:"tr",align:"left"},"B/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"mails.spam.incoming.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of incoming spam mails"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"mails.spam.outgoing.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of outgoing spam mails"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"mails.virus.incoming.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of incoming virus mails"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"mails.virus.outgoing.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of outgoing virus mails"),(0,a.kt)("td",{parentName:"tr",align:"left"}))))),(0,a.kt)(i.Z,{value:"Version",label:"Version",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"version status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Proxmox Mail Gateway version"),(0,a.kt)("td",{parentName:"tr",align:"left"})))))),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("p",null,"Afin de contr\xf4ler l'application Proxmox Mail Gateway, l'API Rest doit \xeatre configur\xe9 (cf: ",(0,a.kt)("a",{parentName:"p",href:"https://pmg.proxmox.com/pmg-docs/api-viewer/index.html"},"https://pmg.proxmox.com/pmg-docs/api-viewer/index.html"),")"),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Proxmox-Mg-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Proxmox Mail Gateway")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,a.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Proxmox-Mg-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le connecteur de supervision via le RPM:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-proxmox-mg-api\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Proxmox Mail Gateway")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Ce connecteur de supervision est con\xe7u de mani\xe8re \xe0 avoir dans Centreon un h\xf4te par application Proxmox Mail Gateway.\nLorsque vous ajoutez un h\xf4te \xe0 Centreon, appliquez-lui le mod\xe8le ",(0,a.kt)("em",{parentName:"p"},"App-Proxmox-Mg-Api-custom"),".\nUne fois celui-ci configur\xe9, certaines macros doivent \xeatre renseign\xe9es:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"PROXMOXMGAPIPORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Port used (Default: 8006)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"PROXMOXMGAPIPROTO"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Specify https if needed (Default: 'https')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"PROMOXMGAPIURLPATH"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Api endpoint (Default: '/api2/json')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"PROXMOXMGAPIUSERNAME"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Api username")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"PROXMOXMGAPIPASSWORD"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Api password")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"PROMOXMGAPIREALM"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Api realm (Default: 'pmg')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"PROXMOXMGAPIEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command (eg. a --verbose flag)")))),(0,a.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,a.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur ",(0,a.kt)("em",{parentName:"p"},"centreon-engine"),"\n(Les param\xe8tres tels que ",(0,a.kt)("inlineCode",{parentName:"p"},"api-username")," ou ",(0,a.kt)("inlineCode",{parentName:"p"},"api-password")," doivront \xeatre ajust\xe9s):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_proxmox_mg_api.pl \\\n    --plugin=apps::proxmox::mg::restapi::plugin \\\n    --mode=mail \\\n    --hostname='10.30.2.79' \\\n    --port='8006' \\\n    --proto='https' \\\n    --api-username='myapiusername' \\\n    --api-password='myapipassword' \\\n    --hours=1 \\\n    --timespan=1800 \\\n    --verbose\n")),(0,a.kt)("p",null,"Exemple de sortie:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"OK: Mail statistics are ok | 'mails.incoming.count'=71;;;0; 'mails.outgoing.count'=31;;;0; 'mails.traffic.in.bytespersecond'=4255.35B/s;;;0; 'mails.traffic.out.bytespersecond'=2780.03B/s;;;0; 'mails.spam.incoming.count'=5;;;0; 'mails.spam.outgoing.count'=0;;;0; 'mails.virus.incoming.count'=0;;;0; 'mails.virus.outgoing.count'=0;;;0;\nchecking mail statistics\n    number of mails incoming: 71, outgoing: 31\n    traffic in: 4.16 KB/s, out: 2.71 KB/s\n    number of spam mails incoming: 5, outgoing: 0\n    number of virus mails incoming: 0, outgoing: 0\n")),(0,a.kt)("p",null,"La commande ci-dessus contr\xf4le statistiques mails (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=mail"),").\nLe Plugin utilise l'api-username (",(0,a.kt)("inlineCode",{parentName:"p"},"--api-username='myapiusername'"),"), l'api-password (",(0,a.kt)("inlineCode",{parentName:"p"},"--api-password='myapipassword'"),")\net il se connecte \xe0 l'h\xf4te ",(0,a.kt)("em",{parentName:"p"},"10.30.2.79")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--hostname='10.30.2.79'"),") sur le port ",(0,a.kt)("em",{parentName:"p"},"8006")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--port='8006'"),") utilisant le protocol ",(0,a.kt)("em",{parentName:"p"},"https")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--proto='https'"),")."),(0,a.kt)("p",null,"Toutes les options et leur utilisation peuvent \xeatre consult\xe9es avec le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," ajout\xe9 \xe0 la commande:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_proxmox_mg_api.pl \\\n    --plugin=apps::proxmox::mg::restapi::plugin \\\n    --mode=mail \\\n    --help\n")),(0,a.kt)("h2",{id:"jobtiens-le-message-derreur-suivant"},"J'obtiens le message d'erreur suivant:"),(0,a.kt)("h3",{id:"unknown-500-cant-connect-to-10302798006-"},(0,a.kt)("inlineCode",{parentName:"h3"},"UNKNOWN: 500 Can't connect to 10.30.2.79:8006 |")),(0,a.kt)("p",null,"Lors du d\xe9ploiement de mes contr\xf4les, j'obtiens le message suivant ",(0,a.kt)("inlineCode",{parentName:"p"},"UNKNOWN: 500 Can't connect to 10.30.2.79:8006 |"),".\nCela signifie que Centreon n'a pas r\xe9ussi \xe0 se connecter au Proxmox Mail Gateway API (",(0,a.kt)("em",{parentName:"p"},"10.30.2.79"),").\nLa plupart du temps, il faut pr\xe9ciser le proxy \xe0 utiliser pour requ\xeater l'URL ",(0,a.kt)("em",{parentName:"p"},"10.30.2.79")," en utilisant l'option ",(0,a.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany:8080'"),"."),(0,a.kt)("h3",{id:"unknown-501-protocol-scheme-connect-is-not-supported-"},(0,a.kt)("inlineCode",{parentName:"h3"},"UNKNOWN: 501 Protocol scheme 'connect' is not supported |")),(0,a.kt)("p",null,"Suite \xe0 la mise en place du proxy, j'obtiens le message suivant ",(0,a.kt)("inlineCode",{parentName:"p"},"UNKNOWN: 501 Protocol scheme 'connect' is not supported |"),"\nCela signifie que le protocole de connexion au proxy n'est pas support\xe9 par la libraire ",(0,a.kt)("em",{parentName:"p"},"LWP")," utlis\xe9e par d\xe9faut par le Plugin Centreon.\nCette erreur peut \xeatre r\xe9solue en utilisant le backend HTTP ",(0,a.kt)("em",{parentName:"p"},"curl"),". Pour ce faire, ajoutez l'option ",(0,a.kt)("inlineCode",{parentName:"p"},"--http-backend='curl'")," \xe0 la commande."))}N.isMDXComponent=!0}}]);