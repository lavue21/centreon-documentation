"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[98555],{98256:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>N,frontMatter:()=>p,metadata:()=>c,toc:()=>m});n(67294);var a=n(3905),r=n(51715),i=n(7626);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"applications-nginx-plus-restapi",title:"Nginx Plus Restapi"},u=void 0,c={unversionedId:"integrations/plugin-packs/procedures/applications-nginx-plus-restapi",id:"integrations/plugin-packs/procedures/applications-nginx-plus-restapi",title:"Nginx Plus Restapi",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-nginx-plus-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-nginx-plus-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/applications-nginx-plus-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-nginx-plus-restapi.md",tags:[],version:"current",frontMatter:{id:"applications-nginx-plus-restapi",title:"Nginx Plus Restapi"},sidebar:"pp",previous:{title:"Netdata RestAPI",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-netdata-restapi"},next:{title:"Nginx Server",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/applications-webservers-nginx-serverstatus"}},d={},m=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:3},{value:"J&#39;obtiens le message d&#39;erreur suivant:",id:"jobtiens-le-message-derreur-suivant",level:3},{value:"<code>UNKNOWN: 500 Can&#39;t connect to mynginxplus.com:443 |</code>",id:"unknown-500-cant-connect-to-mynginxpluscom443-",level:4},{value:"<code>UNKNOWN: 501 Protocol scheme &#39;connect&#39; is not supported |</code>",id:"unknown-501-protocol-scheme-connect-is-not-supported-",level:4},{value:"Comment puis-je supprimer les perfdatas <em>count</em> dans le cas o\xf9 je ne souhaite v\xe9rifier qu&#39;une seule application ?",id:"comment-puis-je-supprimer-les-perfdatas-count-dans-le-cas-o\xf9-je-ne-souhaite-v\xe9rifier-quune-seule-application-",level:3}],g={toc:m},k="wrapper";function N(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)(k,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){s(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,a.kt)("p",null,"NGINX Plus est un logiciel de Load Balancer, de serveur web et de cache de contenu construit sur le NGINX open source."),(0,a.kt)("p",null,"Le Plugin Centreon associ\xe9 permet d'interroger l'API Rest de Nginx Plus afin de r\xe9cup\xe9rer le statut de diverses ressources Nginx."),(0,a.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,a.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Applications"),(0,a.kt)("li",{parentName:"ul"},"Serveurs Web"),(0,a.kt)("li",{parentName:"ul"},"Load Balancer"),(0,a.kt)("li",{parentName:"ul"},"Cache")),(0,a.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,a.kt)("p",null,"Vous pouvez vous renseigner en d\xe9tails sur les m\xe9triques pr\xe9sent\xe9es ci-apr\xe8s sur la documentation officielle de\nl'API Rest Nginx Plus: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.nginx.com/nginx/admin-guide/load-balancer/dynamic-configuration-api/"},"https://docs.nginx.com/nginx/admin-guide/load-balancer/dynamic-configuration-api/")),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Connections",label:"Connections",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"connections.active.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of active connections")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"connections.idle.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of idle connections")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"connections.accepted.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of accepted connections")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"connections.dropped.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of dropped connections"))))),(0,a.kt)(i.Z,{value:"Http-Zone",label:"Http-Zone",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"http.$name.zone.requests.persecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Requests http-zone per second. Unit : /s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"http.$name.zone.requests.discarded.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of requests http-zone discarded.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"http.$name.zone.traffic.in.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Traffic in of http-zone in Bytes per second. Unit : b/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"http.$name.zone.traffic.out.bitspersecond"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Traffic out of http-zone in Bytes per second. Unit : b/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"http.$name.zone.responses.total.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number total of http-zone responses")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"http.$name.zone.responses.","[1xx,2xx,3xx,4xx,5xx]",".count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number 1xx,2xx,3xx,4xx,5xx of http-zone responses"))))),(0,a.kt)(i.Z,{value:"Ssl",label:"Ssl",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ssl.handshakes.succeeded.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of SSL Handshakes succeeded")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ssl.handshakes.failed.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of SSL Handshakes failed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ssl.sessions.reuses.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of SSL Sessions reuses")))))),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("p",null,"Un compte de service est requis pour interroger l'API Nginx Plus. Celui-ci doit avoir suffisamment de privil\xe8ges en lecture dans l'environnement.\nPlus d'informations sont disponible sur la documentation officielle de Nginx : ",(0,a.kt)("a",{parentName:"p",href:"https://docs.nginx.com/nginx/admin-guide/monitoring/live-activity-monitoring/#getting-statistics-with-the-api"},"https://docs.nginx.com/nginx/admin-guide/monitoring/live-activity-monitoring/#getting-statistics-with-the-api")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources Nginx Plus :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Nginx-Plus-Restapi.noarch\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Nginx Plus")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,a.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources Nginx Plus :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Nginx-Plus-Restapi.noarch\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le connecteur de supervision via le RPM:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-nginx-plus-restapi.noarch\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Nginx Plus")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Ce connecteur de supervision est con\xe7u de mani\xe8re \xe0 avoir dans Centreon un h\xf4te par environnement Nginx Plus\nLorsque vous ajoutez un h\xf4te \xe0 Centreon, appliquez-lui le mod\xe8le ",(0,a.kt)("em",{parentName:"p"},"App-Nginx-Plus-Restapi-custom"),". Une fois celui-ci configur\xe9, certaines macros doivent \xeatre renseign\xe9es:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"APIPORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Port used (Default: 443)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"APIPROTO"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Specify https if needed (Default: 'https')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"APIUSERNAME"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Nginx basic username")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"APIPASSWORD"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Nginx basic password.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"APIPATH"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Specify api path (Default: '/api/6')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"APIEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command (eg. a --verbose flag)")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,a.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur ",(0,a.kt)("em",{parentName:"p"},"centreon-engine"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_nginx_plus_restapi.pl \\\n    --plugin=apps::nginx::nginxplus::restapi::plugin \\\n    --hostname=mynginxplus.com \\ \n    --mode=connections \\\n    --port='443' \\\n    --proto='https' \\\n    --api-username='myapiuser' \\\n    --api-password='myapipassword' \\\n    --api-path='/api/6' \\\n    --filter-counters='mycountersfilter' \\\n    --warning-active='60' \\\n    --critical-active='80' \\\n    --warning-idle='8' \\\n    --critical-idle='10' \\\n    --warning-accepted='50' \\\n    --critical-accepted='65' \\\n    --warning-dropped='3' \\\n    --critical-dropped='5' \\\n    --verbose   \n\nOK: Active : 5, Idle : 0, Accepted : 5, Dropped : 0|\n'connections.active.count'=5;;60;80; 'connections.idle.count'=1;;8;10; 'connections.accepted.count'=5;;50;65; 'connections.dropped.count'=0;;3;5;\n")),(0,a.kt)("p",null,"La commande ci-dessus contr\xf4le les connexions de Nginx Plus (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=connections"),")\nIl utilisde base le nom d'utilisateur Nginx  ",(0,a.kt)("em",{parentName:"p"},"myapiuser")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--api-username='myapiuser'"),"), comme mot de passe ",(0,a.kt)("em",{parentName:"p"},"myapipassword")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--api-password='myapipassword'"),")\net le chemin d'acc\xe8s \xe0 l'URL de l'API par d\xe9faut ",(0,a.kt)("em",{parentName:"p"},"/api/6")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--api-path='/api/6'"),")."),(0,a.kt)("p",null,"Cette commande d\xe9clenchera une alarme WARNING si les connexions activent d\xe9passe 60 (",(0,a.kt)("inlineCode",{parentName:"p"},"--warning-active='60'"),")\net une alarme CRITICAL s'il d\xe9passe 80 (",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-active='80'"),").\nDes seuils peuvent \xeatre positionn\xe9s \xe0 l'aide des options ",(0,a.kt)("inlineCode",{parentName:"p"},"--warning-*")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-*")," sur les m\xe9triques."),(0,a.kt)("p",null,"Toutes les options et leur utilisation peuvent \xeatre consult\xe9es avec le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," ajout\xe9 \xe0 la commande:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_nginx_plus_restapi.pl --plugin=apps::nginx::nginxplus::restapi::plugin \n--mode=connections --help\n")),(0,a.kt)("h3",{id:"jobtiens-le-message-derreur-suivant"},"J'obtiens le message d'erreur suivant:"),(0,a.kt)("h4",{id:"unknown-500-cant-connect-to-mynginxpluscom443-"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 500 Can't connect to mynginxplus.com:443 |")),(0,a.kt)("p",null,"Lors du d\xe9ploiement de mes contr\xf4les, j'obtiens le message suivant ",(0,a.kt)("inlineCode",{parentName:"p"},"UNKNOWN: 500 Can't connect to mynginxplus.com:443 |"),"."),(0,a.kt)("p",null,"Cela signifie que Centreon n'a pas r\xe9ussi \xe0 se connecter \xe0 l'API Nginx Plus (",(0,a.kt)("em",{parentName:"p"},"mynginxplus.com"),")."),(0,a.kt)("p",null,"La plupart du temps, il faut pr\xe9ciser le proxy \xe0 utiliser pour requ\xeater l'URL ",(0,a.kt)("em",{parentName:"p"},"mynginxplus.com")," en utilisant l'option ",(0,a.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany:8080'"),"."),(0,a.kt)("h4",{id:"unknown-501-protocol-scheme-connect-is-not-supported-"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 501 Protocol scheme 'connect' is not supported |")),(0,a.kt)("p",null,"Suite \xe0 la mise en place du proxy, j'obtiens le message suivant ",(0,a.kt)("inlineCode",{parentName:"p"},"UNKNOWN: 501 Protocol scheme 'connect' is not supported |")),(0,a.kt)("p",null,"Cela signifie que le protocole de connexion au proxy n'est pas support\xe9 par la libraire ",(0,a.kt)("em",{parentName:"p"},"LWP")," utlis\xe9e par d\xe9faut par le Plugin Centreon."),(0,a.kt)("p",null,"Cette erreur peut \xeatre r\xe9solue en utilisant le backend HTTP ",(0,a.kt)("em",{parentName:"p"},"curl"),". Pour ce faire, ajoutez l'option ",(0,a.kt)("inlineCode",{parentName:"p"},"--http-backend='curl'")," \xe0 la commande."),(0,a.kt)("h3",{id:"comment-puis-je-supprimer-les-perfdatas-count-dans-le-cas-o\xf9-je-ne-souhaite-v\xe9rifier-quune-seule-application-"},"Comment puis-je supprimer les perfdatas ",(0,a.kt)("em",{parentName:"h3"},"count")," dans le cas o\xf9 je ne souhaite v\xe9rifier qu'une seule application ?"),(0,a.kt)("p",null,"Le Plugin permet de filtrer sur un ou plusieurs \xe9l\xe9ments mais permet \xe9galement de r\xe9cup\xe9rer l'ensemble des \xe9l\xe9ments si aucun filtre n'est sp\xe9cifi\xe9.\nDe ce fait, des perfdatas \"globales\" sur les statistiques des objets sont ajout\xe9es par d\xe9faut. Il est possible de supprimer ces donn\xe9es de performance en appliquant le filtre suivant: ",(0,a.kt)("inlineCode",{parentName:"p"},"--filter-perfdata='^$'"),"."))}N.isMDXComponent=!0}}]);