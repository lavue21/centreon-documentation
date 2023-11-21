"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[80076],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,f=c["".concat(o,".").concat(d)]||c[d]||m[d]||l;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},57439:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>c});a(67294);var n=a(3905),r=a(67709),l=a(7626);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o={id:"applications-mulesoft-restapi",title:"Mulesoft Anypoint"},p=void 0,u={unversionedId:"integrations/plugin-packs/procedures/applications-mulesoft-restapi",id:"integrations/plugin-packs/procedures/applications-mulesoft-restapi",title:"Mulesoft Anypoint",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-mulesoft-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-mulesoft-restapi",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/applications-mulesoft-restapi",draft:!1,tags:[],version:"current",frontMatter:{id:"applications-mulesoft-restapi",title:"Mulesoft Anypoint"},sidebar:"pp",previous:{title:"BlueMind",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/applications-mail-bluemind"},next:{title:"Netbackup NSClient++ API",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/applications-netbackup-nsclient-05-restapi"}},m={},c=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du Plugin-Pack",id:"contenu-du-plugin-pack",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"R\xe8gles de d\xe9couvertes",id:"r\xe8gles-de-d\xe9couvertes",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Privil\xe8ges API",id:"privil\xe8ges-api",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"FAQ",id:"faq",level:2},{value:"Comment tester un contr\xf4le en ligne de commandes et que signifient les options principales ?",id:"comment-tester-un-contr\xf4le-en-ligne-de-commandes-et-que-signifient-les-options-principales-",level:3},{value:"Comment puis-je supprimer les perfdatas <em>count</em> dans le cas o\xf9 je ne souhaite v\xe9rifier qu&#39;une seule application ?",id:"comment-puis-je-supprimer-les-perfdatas-count-dans-le-cas-o\xf9-je-ne-souhaite-v\xe9rifier-quune-seule-application-",level:3}],d={toc:c};function f(e){var{components:t}=e,a=s(e,["components"]);return(0,n.kt)("wrapper",i({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",i({},{id:"vue-densemble"}),"Vue d'ensemble"),(0,n.kt)("p",null,"Mulesoft offre une plateforme d'int\xe9gration la plus utilis\xe9e pour connecter les applications SaaS et d'entreprise dans le cloud et/ou on-prem."),(0,n.kt)("p",null,"Le Plugin Centreon associ\xe9 permet d'interroger l'API Rest de Mulesoft Anypoint afin de r\xe9cup\xe9rer le statut de diverses ressources Mulesoft."),(0,n.kt)("h2",i({},{id:"contenu-du-plugin-pack"}),"Contenu du Plugin-Pack"),(0,n.kt)("h3",i({},{id:"objets-supervis\xe9s"}),"Objets supervis\xe9s"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Applications"),(0,n.kt)("li",{parentName:"ul"},"Serveurs"),(0,n.kt)("li",{parentName:"ul"},"Clusters"),(0,n.kt)("li",{parentName:"ul"},"Messages des queues MQ")),(0,n.kt)("h3",i({},{id:"r\xe8gles-de-d\xe9couvertes"}),"R\xe8gles de d\xe9couvertes"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Services",label:"Services",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Rule name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"App-Mulesoft-Restapi-Application-Name"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Discover Anypoint applications and monitor their status")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"App-Mulesoft-Restapi-Server-Name"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Discover Anypoint servers and monitor their status")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"App-Mulesoft-Restapi-Queue-Messages-Name"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Discover Anypoint MQ queues and monitor the related messages count")))))),(0,n.kt)("h3",i({},{id:"m\xe9triques-collect\xe9es"}),"M\xe9triques collect\xe9es"),(0,n.kt)("p",null,"Vous pouvez vous renseigner en d\xe9tails sur les m\xe9triques pr\xe9sent\xe9es ci-apr\xe8s sur la documentation officielle de\nl'API Rest Mulesoft: ",(0,n.kt)("a",i({parentName:"p"},{href:"https://anypoint.mulesoft.com/exchange/portals/anypoint-platform/f1e97bc6-315a-4490-82a7-23abe036327a.anypoint-platform/arm-rest-services/"}),"https://anypoint.mulesoft.com/exchange/portals/anypoint-platform/f1e97bc6-315a-4490-82a7-23abe036327a.anypoint-platform/arm-rest-services/")),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Applications",label:"Applications",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"status"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Current status of each application")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"mulesoft.applications.total.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Total number of applications")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"mulesoft.applications.status.started.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of started applications")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"mulesoft.applications.status.stopped.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of stopped applications")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"mulesoft.applications.status.failed.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of failed applications"))))),(0,n.kt)(l.Z,{value:"Clusters",label:"Clusters",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"status"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Current status of each cluster")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"mulesoft.clusters.total.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Total number of clusters")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"mulesoft.clusters.status.running.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of running clusters")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"mulesoft.clusters.status.disconnected.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of disconnected clusters"))))),(0,n.kt)(l.Z,{value:"Messages",label:"Messages",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"mulesoft.mq.messages.total.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Total number of messages in the queue")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"mulesoft.mq.inflight.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of inflight messages in the queue")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"mulesoft.mq.received.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of received messages in the queue")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"mulesoft.mq.sent.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of sent messages in the queue")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"mulesoft.mq.visible.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of visible messages in the queue")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"mulesoft.mq.acked.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of acknowledged messages in the queue"))))),(0,n.kt)(l.Z,{value:"Servers",label:"Servers",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"status"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Current status of each server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"mulesoft.servers.total.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Total number of servers")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"mulesoft.servers.status.running.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of running servers")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"mulesoft.servers.status.disconnected.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of disconnected servers")))))),(0,n.kt)("h2",i({},{id:"pr\xe9requis"}),"Pr\xe9requis"),(0,n.kt)("h3",i({},{id:"privil\xe8ges-api"}),"Privil\xe8ges API"),(0,n.kt)("p",null,"Un compte de service est requis pour interroger l'API Mulesoft. Celui-ci doit avoir suffisamment de privil\xe8ges en lecture dans l'environnement\net l'organisation Anypoint cibl\xe9es.\nCe compte doit \xe9galement \xeatre en mesure d'acc\xe9der aux Applications, Serveurs, Clusters et services MQ de l'environnement\net de l'organisation en question."),(0,n.kt)("h2",i({},{id:"installation"}),"Installation"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources Mulesoft Anypoint :")),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Applications-Mulesoft-Restapi.noarch\n")),(0,n.kt)("ol",i({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Plugin-Pack ",(0,n.kt)("em",{parentName:"li"},"Mulesoft Anypoint"),' depuis la page "Configuration > Plugin packs > Manager"'))),(0,n.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources Mulesoft Anypoint :")),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Applications-Mulesoft-Restapi.noarch\n")),(0,n.kt)("ol",i({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le Plugin-Pack via le RPM:")),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-pack-applications-mulesoft-restapi.noarch\n")),(0,n.kt)("ol",i({},{start:3}),(0,n.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Plugin-Pack ",(0,n.kt)("em",{parentName:"li"},"Mulesoft Anypoint"),' depuis la page "Configuration > Plugin packs > Manager"')))),(0,n.kt)("h2",i({},{id:"configuration"}),"Configuration"),(0,n.kt)("h3",i({},{id:"host"}),"Host"),(0,n.kt)("p",null," Ce Plugin-Pack est conc\xe7u de mani\xe8re \xe0 avoir dans Centreon un h\xf4te par environnement/organisation\nLorsque vous ajoutez un h\xf4te \xe0 Centreon, appliquez-lui le mod\xe8le ",(0,n.kt)("em",{parentName:"p"},"App-Mulesoft-Restapi-custom"),". Une fois celui-ci configur\xe9, certaines macros doivent \xeatre renseign\xe9es:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Mandatory"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"X"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"ENVID"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Mulesoft Environment ID fetched from the Mulesoft Web console")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"X"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"ORGID"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Mulesoft Organization ID fetched from the Mulesoft Web console")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"(X)"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"REGIONID"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Mulesoft MQ region ID to use (only mandatory for ",(0,n.kt)("em",{parentName:"td"},"messages")," mode)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"X"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"APIUSERNAME"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"API username")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"X"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"APIPASSWORD"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"API password (",(0,n.kt)("em",{parentName:"td"},"password")," type should be ticked)")))),(0,n.kt)("h2",i({},{id:"faq"}),"FAQ"),(0,n.kt)("h3",i({},{id:"comment-tester-un-contr\xf4le-en-ligne-de-commandes-et-que-signifient-les-options-principales-"}),"Comment tester un contr\xf4le en ligne de commandes et que signifient les options principales ?"),(0,n.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commandes depuis votre collecteur Centreon avec l'utilisateur ",(0,n.kt)("em",{parentName:"p"},"centreon-engine"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_mulesoft_restapi.pl \\\n    --plugin=apps::mulesoft::restapi::plugin \\\n    --mode=applications \\\n    --environment-id='1234abc-56de-78fg-90hi-1234abcdefg' \\\n    --organization-id='1234abcd-56ef-78fg-90hi-1234abcdefg' \\\n    --api-username='myapiuser' \\\n    --api-password='myapipassword' \\\n    --filter-name='myapplication1' \\\n    --warning-status='%{status} =~ /STOPPED/' \\\n    --critical-status='%{status} =~ /FAILED/' \\\n    --verbose\n    \n\nOK: Total applications Total : 1, Started : 1, Stopped : 0, Failed : 0 - Application 'myapplication1' Id: 123456, Status: STARTED |\n'mulesoft.applications.total.count'=1;;;0; 'mulesoft.applications.status.started.count'=1;;;0; 'mulesoft.applications.status.stopped.count'=0;;;0; 'mulesoft.applications.status.failed.count'=0;;;0;\nApplication 'myapplication1' Id: 123456, Status: STARTED\n\n")),(0,n.kt)("p",null,"La commande ci-dessus contr\xf4le le statut d'une application Mulesoft (",(0,n.kt)("inlineCode",{parentName:"p"},"--mode=applications"),") nomm\xe9e ",(0,n.kt)("em",{parentName:"p"},"myapplication1")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--filter-name='myapplication1'"),").\nThe command above gets the status of a Mulesoft application (",(0,n.kt)("inlineCode",{parentName:"p"},"--mode=applications"),") named ",(0,n.kt)("em",{parentName:"p"},"myapplication1")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--filter-name='myapplication1'"),").\nCette application appartient \xe0 l'environnement ",(0,n.kt)("em",{parentName:"p"},"1234abc-56de-78fg-90hi-1234abcdefg")," de l'organisation ",(0,n.kt)("em",{parentName:"p"},"234abcd-56ef-78fg-90hi-1234abcdefg"),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"---environment-id='1234abc-56de-78fg-90hi-1234abcdefg' --organization-id='1234abcd-56ef-78fg-90hi-1234abcdefg'"),"). "),(0,n.kt)("p",null,"Cette commande d\xe9clenchera une alarme WARNING si le statut de l'application contient le mot ",(0,n.kt)("em",{parentName:"p"},"STOPPED")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--warning-status='%{status} =~ /STOPPED/'"),")\net une alarme CRITICAL s'il contient le mot ",(0,n.kt)("em",{parentName:"p"},"FAILED")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--critical-status='%{status} =~ /FAILED/'"),")."),(0,n.kt)("p",null,"Toutes les options et leur utilisation peuvent \xeatre consult\xe9es avec le param\xe8tre ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," ajout\xe9 \xe0 la commande:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"/usr/lib/centreon/plugins/centreon_mulesoft_restapi.pl --plugin=apps::mulesoft::restapi::plugin --mode=applications --help")),(0,n.kt)("h3",i({},{id:"comment-puis-je-supprimer-les-perfdatas-count-dans-le-cas-o\xf9-je-ne-souhaite-v\xe9rifier-quune-seule-application-"}),"Comment puis-je supprimer les perfdatas ",(0,n.kt)("em",{parentName:"h3"},"count")," dans le cas o\xf9 je ne souhaite v\xe9rifier qu'une seule application ?"),(0,n.kt)("p",null,"Le Plugin permet de filtrer sur un ou plusieurs \xe9l\xe9ments mais permet \xe9galement de r\xe9cup\xe9rer l'ensemble des \xe9l\xe9ments si aucun filtre n'est sp\xe9cifi\xe9.\nDe ce fait, des perfdatas \"globales\" sur les statistiques des objets sont ajout\xe9es par d\xe9faut. Il est possible de supprimer ces donn\xe9es de performance en appliquant le filtre suivant: ",(0,n.kt)("inlineCode",{parentName:"p"},"--filter-perfdata='^$'"),"."))}f.isMDXComponent=!0},7626:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function s({children:e,hidden:t,className:a}){return n.createElement("div",i({role:"tabpanel",className:(0,r.Z)(l,a)},{hidden:t}),e)}},67709:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(67294),r=a(86010),l=a(90980),i=a(35715),s=a(8854),o=a(8241);const p="tabList__CuJ",u="tabItem_LNqP";function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},m.apply(this,arguments)}function c(e){var t;const{lazy:a,block:l,defaultValue:c,values:d,groupId:f,className:g}=e,k=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=d?d:k.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),N=(0,i.l)(b,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var v;const y=null===c?c:null!==(v=null!=c?c:null===(t=k.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==v?v:k[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:O}=(0,s.U)(),[P,C]=(0,n.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:A}=(0,o.o5)();if(null!=f){const e=h[f];null!=e&&e!==P&&b.some((t=>t.value===e))&&C(e)}const I=e=>{const t=e.currentTarget,a=T.indexOf(t),n=b[a].value;n!==P&&(A(t),C(n),null!=f&&O(f,String(n)))},M=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;var a;t=null!==(a=T[n])&&void 0!==a?a:T[0];break}case"ArrowLeft":{const a=T.indexOf(e.currentTarget)-1;var n;t=null!==(n=T[a])&&void 0!==n?n:T[T.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",p)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},g)},b.map((({value:e,label:t,attributes:a})=>n.createElement("li",m({role:"tab",tabIndex:P===e?0:-1,"aria-selected":P===e,key:e,ref:e=>T.push(e),onKeyDown:M,onFocus:I,onClick:I},a,{className:(0,r.Z)("tabs__item",u,null==a?void 0:a.className,{"tabs__item--active":P===e})}),null!=t?t:e)))),a?(0,n.cloneElement)(k.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function d(e){const t=(0,l.Z)();return n.createElement(c,m({key:String(t)},e))}}}]);