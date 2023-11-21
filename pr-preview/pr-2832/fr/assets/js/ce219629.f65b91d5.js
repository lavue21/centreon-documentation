"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[84913],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,g=m["".concat(o,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>o,metadata:()=>u,toc:()=>m});n(67294);var a=n(3905),r=n(67709),l=n(7626);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={id:"applications-sccm-nsclient",title:"Microsoft SCCM"},p=void 0,u={unversionedId:"integrations/plugin-packs/procedures/applications-sccm-nsclient",id:"integrations/plugin-packs/procedures/applications-sccm-nsclient",title:"Microsoft SCCM",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-sccm-nsclient.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-sccm-nsclient",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/applications-sccm-nsclient",draft:!1,tags:[],version:"current",frontMatter:{id:"applications-sccm-nsclient",title:"Microsoft SCCM"},sidebar:"pp",previous:{title:"Microsoft IIS Server NSClient API (Deprecated)",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/applications-webservers-iis-nsclient-05-restapi"},next:{title:"Microsoft WSUS NSClient++",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/applications-wsus-nsclient"}},c={},m=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du Plugin-Pack",id:"contenu-du-plugin-pack",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:3}],d={toc:m};function g(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)("wrapper",i({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",i({},{id:"vue-densemble"}),"Vue d'ensemble"),(0,a.kt)("p",null,"System Center Configuration Manager (anciennement Microsoft Systems Management Server ou SMS) est un logiciel de gestion de syst\xe8me\n\xe9dit\xe9 par Microsoft. Il est destin\xe9 \xe0 g\xe9rer de grands parcs d\u2019ordinateurs sur syst\xe8mes Windows. Il permet la prise de main \xe0 distance,\nla gestion de correctifs, l\u2019automatisation de t\xe2ches, la t\xe9l\xe9distribution d\u2019applications, l\u2019inventaire mat\xe9riel et logiciel,\nla gestion de la conformit\xe9 et l\u2019administration des politiques de s\xe9curit\xe9."),(0,a.kt)("p",null,"Le Plugin-Pack Centreon ",(0,a.kt)("em",{parentName:"p"},"Microsoft SCCM")," permet de contr\xf4ler l'\xe9tat d'une infrastructure SCCM par l'utilisation de l'agent ",(0,a.kt)("em",{parentName:"p"},"centreon-nsclient"),"\npour Windows. Les deux m\xe9thodes de connexion \xe0 l'agent, NRPE & RestAPI, sont support\xe9es."),(0,a.kt)("h2",i({},{id:"contenu-du-plugin-pack"}),"Contenu du Plugin-Pack"),(0,a.kt)("h3",i({},{id:"objets-supervis\xe9s"}),"Objets supervis\xe9s"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Databases"),(0,a.kt)("li",{parentName:"ul"},"Sites ")),(0,a.kt)("h3",i({},{id:"m\xe9triques-collect\xe9es"}),"M\xe9triques collect\xe9es"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"database-replication-status",label:"database-replication-status",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"link-status"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Status of the replication link")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"site-status"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Status of the site replication"))))),(0,a.kt)(l.Z,{value:"site-status",label:"site-status",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"status"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Operational status of the site")))))),(0,a.kt)("h2",i({},{id:"pr\xe9requis"}),"Pr\xe9requis"),(0,a.kt)("p",null,"Le Plugin Centreon pour Microsoft SCCM est inclus dans l'agent ",(0,a.kt)("em",{parentName:"p"},"centreon-nsclient")," et est ex\xe9cut\xe9 localement par ce dernier.\nPour ce faire, l'agent ",(0,a.kt)("em",{parentName:"p"},"centreon-nsclient")," doit \xeatre install\xe9 et configur\xe9 sur les serveurs cible de l'infrastructure SCCM (ceux o\xf9 la console SCCM Admin est install\xe9e).\nVous pouvez utiliser au choix les m\xe9thodes de connexion NRPE & RestAPI depuis le Collecteur Centreon pour interroger l'agent.\nRendez-vous sur la documentation associ\xe9e pour plus d'informations sur l'agent et ses diff\xe9rentes m\xe9thodes de connexion:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",i({parentName:"li"},{href:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/operatingsystems-windows-nsclient-05-nrpe"}),"NRPE")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",i({parentName:"li"},{href:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/operatingsystems-windows-nsclient-05-restapi"}),"RestAPI"))),(0,a.kt)("h2",i({},{id:"installation"}),"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Selon la m\xe9thode de supervision choisie (NRPE ou RestAPI), installer le Plugin d\xe9di\xe9 sur chaque collecteur Centreon devant\nsuperviser les ressources ",(0,a.kt)("em",{parentName:"li"},"Microsoft SCCM")," via l'agent ",(0,a.kt)("em",{parentName:"li"},"centreon-nsclient"),":")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"NRPE")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-nrpe-plugin\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"RestAPI")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Operatingsystems-Windows-Restapi\n")),(0,a.kt)("ol",i({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Plugin-Pack ",(0,a.kt)("em",{parentName:"li"},"Microsoft SCCM"),'\ndepuis la page "Configuration > Plugin Packs > Gestionnaire"'))),(0,a.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Selon la m\xe9thode de supervision choisie (NRPE ou RestAPI), installer le Plugin d\xe9di\xe9 sur chaque collecteur Centreon devant\nsuperviser les ressources ",(0,a.kt)("em",{parentName:"li"},"Microsoft SCCM")," via l'agent ",(0,a.kt)("em",{parentName:"li"},"centreon-nsclient"),":")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"NRPE")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-nrpe-plugin\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"RestAPI")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Operatingsystems-Windows-Restapi\n")),(0,a.kt)("ol",i({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"Installer le RPM du Plugin-Pack sur le serveur Centreon Central:")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-pack-applications-sccm-nsclient\n")),(0,a.kt)("ol",i({},{start:3}),(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Plugin-Pack ",(0,a.kt)("em",{parentName:"li"},"Microsoft SCCM"),'\ndepuis la page "Configuration > Plugin Packs > Gestionnaire"')))),(0,a.kt)("h2",i({},{id:"configuration"}),"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Sur l\'interface Web de Centreon, ajoutez un nouvel H\xf4te depuis la page "Configuration > H\xf4tes"'),(0,a.kt)("li",{parentName:"ul"},"Renseignez l'adresse IP du serveur SCCM cible et appliquez le Mod\xe8le d'H\xf4te adapt\xe9 \xe0 votre configuration:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"App-Sccm-NRPE-custom")," pour NRPE"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"App-Sccm-NSClient-05-Restapi-custom")," pour RestAPI"))),(0,a.kt)("li",{parentName:"ul"},"Selon le Mod\xe8le s\xe9lectionn\xe9, remplissez les Macros d'H\xf4te associ\xe9es:")),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"App-Sccm-NRPE-custom",label:"App-Sccm-NRPE-custom",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Mandatory"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Name"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"NRPECLIENT"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"NRPE Plugin binary to use (Default: 'check_centreon_nrpe')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"NRPEPORT"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"NRPE Port of the target server (Default: '5666')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"NRPETIMEOUT"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Timeout value (Default: '30')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"})),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"NRPEEXTRAOPTIONS"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Any extra option you may want to add to every command","_","line (Default: '-u -m 8192')"))))),(0,a.kt)(l.Z,{value:"App-Sccm-NSClient-05-Restapi-custom",label:"App-Sccm-NSClient-05-Restapi-custom",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Mandatory"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Name"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"NSCPRESTAPIPORT"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"NSClient++ RestAPI port (Default: '8443')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"NSCPRESTAPIPROTO"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"NSClient++ RestAPI protocol to use (Default: 'https')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"})),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"NSCPRESTAPILEGACYPASSWORD"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Password to authenticate against the API if relevant")))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sauvegarder puis exporter la nouvelle configuration")),(0,a.kt)("h2",i({},{id:"faq"}),"FAQ"),(0,a.kt)("h3",i({},{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"}),"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,a.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande\ndepuis un collecteur Centreon en vous connectant avec l'utilisateur ",(0,a.kt)("em",{parentName:"p"},"centreon-engine"),":"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"NRPE",label:"NRPE",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib64/nagios/plugins/check_centreon_nrpe \\\n    -H 10.0.0.1 \\\n    -p 5666 \\\n    -t 30 \\\n    -u -m 8192 \\\n    -c check_centreon_plugins -a 'apps::sccm::local::plugin' 'site-status' '--critical-status=\"%{status} eq FAILED\"'\n")),(0,a.kt)("p",null,"La commande devrait retourner un message de sortie de la forme ci-dessous:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"OK: Site 'MySite' status is 'ACTIVE' [Type: PRIMARY] [Mode: 'Unknown'] |\n")),(0,a.kt)("p",null,"Dans cet exemple, la commande vise \xe0 interroger un agent ",(0,a.kt)("em",{parentName:"p"},"centreon-nsclient")," en utilisant le protocole NRPE (",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/lib64/nagios/plugins/check_centreon_nrpe"),")\net les param\xe8tres de connexion associ\xe9s d\xe9finis dans les Macros d'H\xf4te (",(0,a.kt)("inlineCode",{parentName:"p"},"-p 5666 -t 30 -u -m 8192"),").\nL'agent va alors ex\xe9cuter localement le mode ",(0,a.kt)("em",{parentName:"p"},"site-status")," du Plugin ",(0,a.kt)("em",{parentName:"p"},"SCCM")," integr\xe9 dans ",(0,a.kt)("em",{parentName:"p"},"centreon-nsclient"),".\n(",(0,a.kt)("inlineCode",{parentName:"p"},"-c check_centreon_plugins -a 'apps::sccm::local::plugin' 'site-status'"),")."),(0,a.kt)("p",null,"Une alarme de type CRITICAL sera d\xe9clench\xe9e si le status ",(0,a.kt)("em",{parentName:"p"},"site SCCM")," est report\xe9 en \xe9tat ",(0,a.kt)("em",{parentName:"p"},"FAILED")," (",(0,a.kt)("inlineCode",{parentName:"p"},'--critical-status="%{status} eq FAILED"'),")."),(0,a.kt)("p",null,"Pour chaque mode, la liste de toutes les m\xe9triques, seuils associ\xe9s et options compl\xe9mentaires peut \xeatre affich\xe9e\nen ajoutant le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib64/nagios/plugins/check_centreon_nrpe -c check_centreon_plugins -a 'apps::sccm::local::plugin' 'site-status' '--help'\n"))),(0,a.kt)(l.Z,{value:"RestAPI",label:"RestAPI",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_nsclient_restapi.pl \\\n    --plugin=apps::nsclient::restapi::plugin  \\\n    --mode=query  \\\n    --hostname=10.0.0.1  \\\n    --port='8443'  \\\n    --proto='https'  \\\n    --legacy-password='centreon' \\\n    --command=check_centreon_plugins  \\\n    --arg='apps::sccm::local::plugin'  \\\n    --arg='site-status' \\\n    --arg='--critical-status=\"%{status} eq FAILED\"'\n\n")),(0,a.kt)("p",null,"La commande devrait retourner un message de sortie de la forme ci-dessous:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"OK: Site 'MySite' status is 'ACTIVE' [Type: PRIMARY] [Mode: 'Unknown'] |\n")),(0,a.kt)("p",null,"Dans cet exemple, la commande vise \xe0 interroger un agent ",(0,a.kt)("em",{parentName:"p"},"centreon-nsclient")," en utilisant la m\xe9thode de connexion RestAPI\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--plugin=apps::nsclient::restapi::plugin --mode=query"),") et les param\xe8tres de connexion associ\xe9s d\xe9finis dans les Macros d'H\xf4te\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--port='8443' --proto='https' --legacy-password='centreon'"),"). L'agent va alors ex\xe9cuter localement le mode ",(0,a.kt)("em",{parentName:"p"},"site-status"),"\ndu Plugin ",(0,a.kt)("em",{parentName:"p"},"SCCM")," integr\xe9 dans ",(0,a.kt)("em",{parentName:"p"},"centreon-nsclient")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--command=check_centreon_plugins --arg='apps::sccm::local::plugin' --arg='site-status'"),")."),(0,a.kt)("p",null,"Une alarme de type CRITICAL sera d\xe9clench\xe9e si le status ",(0,a.kt)("em",{parentName:"p"},"site SCCM")," est report\xe9 en \xe9tat ",(0,a.kt)("em",{parentName:"p"},"FAILED")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--arg='--critical-status=\"%{status} eq FAILED\"'"),")."),(0,a.kt)("p",null,"Pour chaque mode, la liste de toutes les m\xe9triques, seuils associ\xe9s et options compl\xe9mentaires peut \xeatre affich\xe9e\nen ajoutant le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins//centreon_nsclient_restapi.pl --plugin=apps::nsclient::restapi::plugin --mode=query --command=check_centreon_plugins --arg='apps::sccm::local::plugin' --arg='site-status' --arg='--help'\n")))))}g.isMDXComponent=!0},7626:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function s({children:e,hidden:t,className:n}){return a.createElement("div",i({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},67709:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(67294),r=n(86010),l=n(90980),i=n(35715),s=n(8854),o=n(8241);const p="tabList__CuJ",u="tabItem_LNqP";function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function m(e){var t;const{lazy:n,block:l,defaultValue:m,values:d,groupId:g,className:k}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=d?d:f.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),b=(0,i.l)(N,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var v;const h=null===m?m:null!==(v=null!=m?m:null===(t=f.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==v?v:f[0].props.value;if(null!==h&&!N.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:P}=(0,s.U)(),[C,S]=(0,a.useState)(h),O=[],{blockElementScrollPositionUntilNextRender:I}=(0,o.o5)();if(null!=g){const e=y[g];null!=e&&e!==C&&N.some((t=>t.value===e))&&S(e)}const T=e=>{const t=e.currentTarget,n=O.indexOf(t),a=N[n].value;a!==C&&(I(t),S(a),null!=g&&P(g,String(a)))},E=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=O.indexOf(e.currentTarget)+1;var n;t=null!==(n=O[a])&&void 0!==n?n:O[0];break}case"ArrowLeft":{const n=O.indexOf(e.currentTarget)-1;var a;t=null!==(a=O[n])&&void 0!==a?a:O[O.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},k)},N.map((({value:e,label:t,attributes:n})=>a.createElement("li",c({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>O.push(e),onKeyDown:E,onFocus:T,onClick:T},n,{className:(0,r.Z)("tabs__item",u,null==n?void 0:n.className,{"tabs__item--active":C===e})}),null!=t?t:e)))),n?(0,a.cloneElement)(f.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function d(e){const t=(0,l.Z)();return a.createElement(m,c({key:String(t)},e))}}}]);