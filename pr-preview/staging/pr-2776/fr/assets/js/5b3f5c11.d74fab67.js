"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[26710],{39599:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>g,frontMatter:()=>p,metadata:()=>d,toc:()=>c});a(67294);var n=a(3905),r=a(51715),l=a(7626);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const p={id:"applications-bluemind-ssh",title:"BlueMind SSH"},u=void 0,d={unversionedId:"integrations/plugin-packs/procedures/applications-bluemind-ssh",id:"integrations/plugin-packs/procedures/applications-bluemind-ssh",title:"BlueMind SSH",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-bluemind-ssh.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-bluemind-ssh",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/applications-bluemind-ssh",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-bluemind-ssh.md",tags:[],version:"current",frontMatter:{id:"applications-bluemind-ssh",title:"BlueMind SSH"},sidebar:"pp",previous:{title:"BlueMind (d\xe9pr\xe9ci\xe9)",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/applications-mail-bluemind"},next:{title:"Cassandra",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/applications-databases-cassandra-jmx"}},m={},c=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du pack de supervision",id:"contenu-du-pack-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Configuration BlueMind",id:"configuration-bluemind",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment tester en ligne de commande et quelles significations portent les options principales ?",id:"comment-tester-en-ligne-de-commande-et-quelles-significations-portent-les-options-principales-",level:3},{value:"J&#39;ai ce message d&#39;erreur : <code>UNKNOWN: Command error: Host key verification failed.</code>. Qu&#39;est-ce que cela signifie ?",id:"jai-ce-message-derreur--unknown-command-error-host-key-verification-failed-quest-ce-que-cela-signifie-",level:3}],k={toc:c},N="wrapper";function g(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)(N,s(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){i(e,t,a[t])}))}return e}({},k,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,n.kt)("p",null,"BlueMind est une suite logicielle libre de messagerie d\u2019entreprise, d\u2019agendas et de travail collaboratif\nutilisant JavaScript et HTML5. "),(0,n.kt)("h2",{id:"contenu-du-pack-de-supervision"},"Contenu du pack de supervision"),(0,n.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Suite BlueMind dont: ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Lmtpd: Envoie/R\xe9c\xe9ption courriels"),(0,n.kt)("li",{parentName:"ul"},"Milter: Analyse et modification des courriels au niveau SMTP"),(0,n.kt)("li",{parentName:"ul"},"Webserver: Serveur d'application web / m\xe9ssagerie"),(0,n.kt)("li",{parentName:"ul"},"Chat/Xmpp: Communications unifi\xe9es")))),(0,n.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,n.kt)("p",null,"Au del\xe0 des m\xe9triques pr\xe9sent\xe9s ci-apr\xe8s, un r\xe9f\xe9rentiel est disponible dans la documentation\nofficielle : ",(0,n.kt)("a",{parentName:"p",href:"https://forge.bluemind.net/confluence/display/BM35/Reference+des+metriques"},"https://forge.bluemind.net/confluence/display/BM35/Reference+des+metriques")),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Core",label:"Core",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"core.calls.received.success.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of calls successfully received by the core. Unit: Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"core.calls.received.failure.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of calls received by the core with an error. Unit: Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"core.heartbeat.broadcast.running.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of heartbeat broadcast in running. Unit: Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"core.directory.cluster.events.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of direcotry cluster events. Unit: Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"core.request.handling.total.milliseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Total of core request handling. Unit: ms")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"core.request.handling.mean.milliseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mean of core request handling. Unit: ms"))))),(0,n.kt)(l.Z,{value:"Eas",label:"Eas",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"eas.responses.size.total.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Total eas reponses size. Unit: Bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"eas.execution.total.milliseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Total eas execution. Unit: ms")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"eas.execution.mean.milliseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mean eas execution. Unit: ms"))))),(0,n.kt)(l.Z,{value:"Hps",label:"Hps",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hps.authentication.success.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of hps authentication success. Unit: Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hps.authentication.failure.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of hps authentication failure. Unit: Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hps.requests.protected.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of protected requests. Unit: Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hps.requests.maintenance.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of maintenance requests. Unit: Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hps.upstream.requests.time.milliseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"By instances. e.g. /login /webmail ... Unit: ms")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hps.upstream.requests.time.mean.milliseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"By instances. e.g. /login /webmail ... Unit: ms")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hps.upstream.requests.size.total.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"By instances. e.g. /login /webmail ... Unit: ms")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hps.upstream.requests.total.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"By instances. e.g. /login /webmail ... Unit: ms"))))),(0,n.kt)(l.Z,{value:"Ips",label:"Ips",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ips.connections.active.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of ips connections active. Unit: Count"))))),(0,n.kt)(l.Z,{value:"Webserver",label:"Webserver",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"webserver.requests.time.milliseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Time of requests webserver. Unit: ms")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"webserver.requests.time.mean.milliseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mean time of requests webserver. Unit: ms")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"webserver.requests.total.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Total number of requests webserver. Unit: Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"webserver.requests.status.200.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of requests status webserver whith code 200. Unit: Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"webserver.requests.status.304.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of requests status webserver whith code 304. Unit: Count"))))),(0,n.kt)(l.Z,{value:"Xmpp",label:"Xmpp",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"xmpp.packets.all.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of all xmpp packets. Unit: Count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"xmpp.packets.chat.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of chat xmpp packets. Unit: Count")))))),(0,n.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,n.kt)("h3",{id:"configuration-bluemind"},"Configuration BlueMind"),(0,n.kt)("p",null,"Sur le serveur BlueMind, cr\xe9er un utilisateur ayant acc\xe8s \xe0 la socket Unix dans le rep\xe9rtoire ",(0,n.kt)("inlineCode",{parentName:"p"},"/var/run/bm-metrics/"),"\n(group telegraph)."),(0,n.kt)("p",null,"Afin de valider la cr\xe9ation de l'utilisateur, ex\xe9cutez cette commande cet utilisateur:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"user$ curl --unix-socket /var/run/bm-metrics/metrics-bm-core.sock http://127.0.0.1/metrics\nbm-core.callsByRPC,rpc=GET-/api/todolist/{containerUid}/{uid}/_itemchangelog,status=success,meterType=Counter count=1\nbm-core.callsByRPC,rpc=GET-/api/externaluser/{domainUid}/{uid}/groups,status=success,meterType=Counter count=2\nbm-core.heartbeat.broadcast,state=core.state.stopping,meterType=Counter count=2\n...\n")),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installer le Plugin sur l'ensemble des Collecteurs Centreon supervisant des serveurs BlueMind :")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Bluemind-Ssh\n")),(0,n.kt)("p",null,"Installer le connecteur de supervision 'BlueMind SSH' depuis la page ",(0,n.kt)("strong",{parentName:"p"},"Configuration > Gestionnaire de connecteurs de supervision")," sur l'interface Web de Centreon.")),(0,n.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installer le Plugin sur l'ensemble des Collecteurs Centreon supervisant des serveurs BlueMind :")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Bluemind-Ssh\n")),(0,n.kt)("p",null,"2.\xa0Installer\xa0le\xa0RPM\xa0contenant\xa0les\xa0Mod\xe8les\xa0de\xa0supervision:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-bluemind-ssh\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Installer le connecteur de supervision 'BlueMind' depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")," sur l'interface Web de Centreon.")))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"Vous pouvez choisir entre 3 backends SSH pour vous connecter sur votre serveur BlueMind."),(0,n.kt)("p",null,"Ajoutez un nouvel H\xf4te dans Centreon, appliquez le Mod\xe8le d'H\xf4te ",(0,n.kt)("inlineCode",{parentName:"p"},"App-Bluemind-SSH"),".\nUne fois le mod\xe8le choisi, vous devez d\xe9finir des valeurs en fonction du backend ssh. "),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"sshcli backend",label:"sshcli backend",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHBACKEND"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Nom du backend: ",(0,n.kt)("inlineCode",{parentName:"td"},"sshcli"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Par default, il utilise l'utilisateur en cours d'ex\xe9cution ",(0,n.kt)("inlineCode",{parentName:"td"},"centengine")," de votre collecteur")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Ne peut pas \xeatre utilis\xe9 avec le backend. Seulement avec la cl\xe9 d'authentication")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Par default: 22")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Personnalisez-le avec le v\xf4tre si n\xe9cessaire. E.g.: ",(0,n.kt)("inlineCode",{parentName:"td"},"--ssh-priv-key=/user/.ssh/id_rsa"))))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Avec ce backend, il est n\xe9cessaire d'effectuer une connexion manuelle entre l'utilisateur centreon-engine du Collecteur\net l'utilisateur applicatif cr\xe9\xe9 sur le serveur BlueMind. (Macro SSHUSERNAME)."))),(0,n.kt)(l.Z,{value:"plink backend",label:"plink backend",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHBACKEND"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Nom du backend: ",(0,n.kt)("inlineCode",{parentName:"td"},"plink"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Par default, il utilise l'utilisateur en cours d'ex\xe9cution ",(0,n.kt)("inlineCode",{parentName:"td"},"centengine")," de votre collecteur")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Peut \xeatre utilis\xe9. Si aucune valeur n'est d\xe9finie, l'authentification par cl\xe9 ssh est utilis\xe9e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Par default: 22")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Personnalisez-le avec le v\xf4tre si n\xe9cessaire. E.g.: ",(0,n.kt)("inlineCode",{parentName:"td"},"--ssh-priv-key=/user/.ssh/id_rsa"))))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Avec ce backend, il est n\xe9cessaire d'effectuer une connexion manuelle entre l'utilisateur centreon-engine du Collecteur\net l'utilisateur applicatif cr\xe9\xe9 sur le serveur BlueMind. (Macro SSHUSERNAME)."))),(0,n.kt)(l.Z,{value:"libssh backend",label:"libssh backend",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHBACKEND"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Nom du backend: ",(0,n.kt)("inlineCode",{parentName:"td"},"libssh"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Par default, il utilise l'utilisateur en cours d'ex\xe9cution ",(0,n.kt)("inlineCode",{parentName:"td"},"centengine")," de votre collecteur")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Peut \xeatre utilis\xe9. Si aucune valeur n'est pas d\xe9finie, l'authentification par cl\xe9 ssh est utilis\xe9e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Par default: 22")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Personnalisez-le avec le v\xf4tre si n\xe9cessaire. E.g.: ",(0,n.kt)("inlineCode",{parentName:"td"},"--ssh-priv-key=/user/.ssh/id_rsa"))))),(0,n.kt)("p",null,"Avec ce backend, vous n'avez pas \xe0 valider manuellement le fingerprint du serveur cible. Sympa :)"))),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("h3",{id:"comment-tester-en-ligne-de-commande-et-quelles-significations-portent-les-options-principales-"},"Comment tester en ligne de commande et quelles significations portent les options principales ?"),(0,n.kt)("p",null,"Tous les modes sont affichables via la commande suivante:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_bluemind.pl  \\\n    --plugin='apps::bluemind::local::plugin' \\\n    --list-mode\n")),(0,n.kt)("p",null,"Les options des diff\xe9rents modes sont consultables en ajoutant le param\xe8tre ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_bluemind.pl \\\n    --plugin='apps::bluemind::local::plugin' \\\n    --mode=incoming \\\n    --help\n")),(0,n.kt)("h3",{id:"jai-ce-message-derreur--unknown-command-error-host-key-verification-failed-quest-ce-que-cela-signifie-"},"J'ai ce message d'erreur : ",(0,n.kt)("inlineCode",{parentName:"h3"},"UNKNOWN: Command error: Host key verification failed."),". Qu'est-ce que cela signifie ?"),(0,n.kt)("p",null,"Cette erreur appara\xeet g\xe9n\xe9ralement avec les backends 'sshcli' ou 'plink'. Assurez-vous d'avoir r\xe9alis\xe9 une premi\xe8re connexion comme\nindiqu\xe9 dans la partie Configuration du backend utilis\xe9."))}g.isMDXComponent=!0}}]);