"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[84456],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38828:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>m});n(67294);var a=n(3905),r=n(67709),l=n(7626);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"hardware-servers-cisco-ucs-snmp",title:"Cisco UCS"},u=void 0,c={unversionedId:"integrations/plugin-packs/procedures/hardware-servers-cisco-ucs-snmp",id:"integrations/plugin-packs/procedures/hardware-servers-cisco-ucs-snmp",title:"Cisco UCS",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/hardware-servers-cisco-ucs-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-servers-cisco-ucs-snmp",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/hardware-servers-cisco-ucs-snmp",draft:!1,tags:[],version:"current",frontMatter:{id:"hardware-servers-cisco-ucs-snmp",title:"Cisco UCS"},sidebar:"pp",previous:{title:"Cisco Collaboration Endpoint Rest API",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/hardware-devices-cisco-ces-restapi"},next:{title:"Dell CMC",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/hardware-servers-dell-cmc-snmp"}},p={},m=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du Plugin Pack",id:"contenu-du-plugin-pack",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Comment tester le Plugin en ligne de commande et comment utiliser ses options ?",id:"comment-tester-le-plugin-en-ligne-de-commande-et-comment-utiliser-ses-options-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:2},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:3},{value:"UNKNOWN: SNMP GET Request : Cant get a single value.",id:"unknown-snmp-get-request--cant-get-a-single-value",level:3}],d={toc:m};function f(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",i({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",i({},{id:"vue-densemble"}),"Vue d'ensemble"),(0,a.kt)("p",null,"Cisco Unified Computing System (UCS) est un ensemble de ressources pour Datacenter comprenant du mat\xe9riel hardware, un support syst\xe8me de virtualisation, une matrice de commutation et un logiciel de gestion."),(0,a.kt)("p",null,"Le Plugin Pack ",(0,a.kt)("em",{parentName:"p"},"Cisco UCS")," utilise le protocole SNMP pour se connecter, r\xe9cup\xe9rer des informations et les m\xe9triques relatives aux ressources du serveur UCS."),(0,a.kt)("h2",i({},{id:"contenu-du-plugin-pack"}),"Contenu du Plugin Pack"),(0,a.kt)("h3",i({},{id:"objets-supervis\xe9s"}),"Objets supervis\xe9s"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Les ressources du serveur UCS: Serveurs, R\xe9seau, Disque,...")),(0,a.kt)("h3",i({},{id:"m\xe9triques-collect\xe9es"}),"M\xe9triques collect\xe9es"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Audit-Logs",label:"Audit-Logs",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"audit.total.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of audit logs"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"audit.cleared.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of cleared audit logs"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"audit.info.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of info audit logs"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"audit.condition.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of condition audit logs"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"audit.warning.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of warning audit logs"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"audit.minor.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of minor audit logs"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"audit.critical.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of critical audit logs"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"count"))))),(0,a.kt)(l.Z,{value:"Equipment",label:"Equipment",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"status"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Check Hardware status"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"})))))),(0,a.kt)(l.Z,{value:"Faults",label:"Faults",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"faults.problems.current.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of current faults"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"faults.total.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of faults"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"faults.cleared.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of cleared faults"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"faults.info.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of info faults"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"faults.condition.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of conditions faults"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"faults.warning.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of warning faults"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"faults.minor.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of minor faults"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"faults.major.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of major faults"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"faults.critical.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of critical faults"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"count"))))),(0,a.kt)(l.Z,{value:"Mgmt-Entities",label:"Mgmt-Entities",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"management_entities.total.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of management entities"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"count"))))),(0,a.kt)(l.Z,{value:"Service-Profile",label:"Service-Profile",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"serviceprofiles.total.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of service profiles"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"serviceprofiles.online.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of online service profiles"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"serviceprofiles.offline.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of offline service profiles"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"count")))))),(0,a.kt)("h2",i({},{id:"pr\xe9requis"}),"Pr\xe9requis"),(0,a.kt)("p",null,"La communaut\xe9 SNMP doit \xeatre activ\xe9e sur le serveur UCS en mode Read-only."),(0,a.kt)("p",null,"La communication doit \xeatre possible sur le port UDP 161 depuis le collecteur Centreon vers les ressources UCS."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"si vous utilisez SNMP v3, d\xe9finissez tous les param\xe8tres sp\xe9cifiques dans la macro h\xf4te SNMPEXTRAOPTIONS")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Mandatory"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Nom"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"})),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"SNMPEXTRAOPTIONS"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Configure your own SNMPv3 credentials combo")))),(0,a.kt)("h2",i({},{id:"installation"}),"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon devant superviser des serveurs UCS:")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Hardware-Servers-Cisco-Ucs-Snmp\n")),(0,a.kt)("ol",i({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Plugin Pack ",(0,a.kt)("em",{parentName:"li"},"Cisco UCS"),' depuis la page "Configuration > Plugin Packs > Manager"'))),(0,a.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon devant superviser des serveurs UCS:")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Hardware-Servers-Cisco-Ucs-Snmp\n")),(0,a.kt)("ol",i({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le RPM du Plugin Pack ",(0,a.kt)("em",{parentName:"li"},"Cisco UCS")," :")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-pack-hardware-servers-cisco-ucs-snmp\n")),(0,a.kt)("ol",i({},{start:3}),(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Plugin Pack ",(0,a.kt)("em",{parentName:"li"},"Cisco UCS"),' depuis la page "Configuration > Plugin Packs > Manager"')))),(0,a.kt)("h2",i({},{id:"configuration"}),"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Ajoutez un nouvel H\xf4te depuis la page "Configuration > H\xf4tes"".'),(0,a.kt)("li",{parentName:"ul"},'Compl\xe9tez les champs "Nom","Alias" & "IP Address / DNS" correspondant \xe0 votre serveur UCS'),(0,a.kt)("li",{parentName:"ul"},"Appliquez le Mod\xe8le d'H\xf4te ",(0,a.kt)("em",{parentName:"li"},"HW-Server-Cisco-Ucs-custom"))),(0,a.kt)("h2",i({},{id:"comment-tester-le-plugin-en-ligne-de-commande-et-comment-utiliser-ses-options-"}),"Comment tester le Plugin en ligne de commande et comment utiliser ses options ?"),(0,a.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne\nde commande depuis un collecteur Centreon en vous connectant avec l'utilisateur\n",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins//centreon_cisco_ucs.pl \\\n    --plugin=hardware::server::cisco::ucs::plugin \\\n    --mode=faults \\ \n    --hostname=10.30.2.11 \\\n    --snmp-version='2c' \\\n    --snmp-community='cisco_ucs' \\ \n    --filter-severity='critical|major=critical' \\\n    --filter-severity='warning|minor=warning' \\\n    --verbose\n               \n")),(0,a.kt)("p",null,"La commande ci-dessus contr\xf4le les d\xe9fauts sur un serveur UCS (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=faults"),"). Les informations importantes sont l'adresse IP/FQDN "),(0,a.kt)("p",null,"(",(0,a.kt)("inlineCode",{parentName:"p"},"--hostname=10.30.2.11"),") et la communaut\xe9 SNMP configur\xe9e sur l'\xe9quipement (",(0,a.kt)("inlineCode",{parentName:"p"},"--snmp-community='cisco_ucs'"),")."),(0,a.kt)("p",null,"Une alarme de type WARNING est d\xe9clench\xe9e si un probl\xe8me avec une gravit\xe9 WARNING ou MINOR est d\xe9tect\xe9 sur un composant du serveur UCS (",(0,a.kt)("inlineCode",{parentName:"p"},"--filter-severity='warning|minor=warning'"),")."),(0,a.kt)("p",null,"Une alarme CRITICAL est quant \xe0 elle d\xe9clench\xe9e si un probl\xe8me avec une gravit\xe9 CRITICAL ou MAJOR est d\xe9tect\xe9 sur un composant du serveur UCS (",(0,a.kt)("inlineCode",{parentName:"p"},"--filter-severity='critical|major=critical'"),")."),(0,a.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification peut \xeatre affich\xe9e en ajoutant le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins//centreon_cisco_ucs.pl \\\n    --plugin=hardware::server::cisco::ucs::plugin \\\n    --mode=faults \\\n    --help\n")),(0,a.kt)("p",null,"Tous les modes disponibles peuvent \xeatre affich\xe9s via l'option ",(0,a.kt)("inlineCode",{parentName:"p"},"--list-mode")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins//centreon_cisco_ucs.pl \\\n    --plugin=hardware::server::cisco::ucs::plugin \\\n    --list-mode\n")),(0,a.kt)("h2",i({},{id:"diagnostic-des-erreurs-communes"}),"Diagnostic des erreurs communes"),(0,a.kt)("h3",i({},{id:"unknown-snmp-get-request--timeout"}),"UNKNOWN: SNMP GET Request : Timeout"),(0,a.kt)("p",null,"Si vous obtenez ce message, cela signifie que le collecteur Centreon ne parvient pas \xe0 contacter le serveur UCS sur le port UDP 161, ou alors que la communaut\xe9 SNMP configur\xe9e n'est pas correcte."),(0,a.kt)("h3",i({},{id:"unknown-snmp-get-request--cant-get-a-single-value"}),"UNKNOWN: SNMP GET Request : Cant get a single value."),(0,a.kt)("p",null,"Si vous rencontrez cette erreur, il est probable que les autorisations donn\xe9es \xe0 l'agent SNMP soient trop restreintes. Ce dernier doit avoir acc\xe8s \xe0 la branche entreprise SNMP Cisco UCS: .1.3.6.1.4.1.9.9.719"))}f.isMDXComponent=!0},7626:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function o({children:e,hidden:t,className:n}){return a.createElement("div",i({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},67709:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(67294),r=n(86010),l=n(90980),i=n(35715),o=n(8854),s=n(8241);const u="tabList__CuJ",c="tabItem_LNqP";function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p.apply(this,arguments)}function m(e){var t;const{lazy:n,block:l,defaultValue:m,values:d,groupId:f,className:g}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=d?d:k.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),b=(0,i.l)(N,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var v;const h=null===m?m:null!==(v=null!=m?m:null===(t=k.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==v?v:k[0].props.value;if(null!==h&&!N.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:C}=(0,o.U)(),[P,w]=(0,a.useState)(h),O=[],{blockElementScrollPositionUntilNextRender:S}=(0,s.o5)();if(null!=f){const e=y[f];null!=e&&e!==P&&N.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,n=O.indexOf(t),a=N[n].value;a!==P&&(S(t),w(a),null!=f&&C(f,String(a)))},U=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=O.indexOf(e.currentTarget)+1;var n;t=null!==(n=O[a])&&void 0!==n?n:O[0];break}case"ArrowLeft":{const n=O.indexOf(e.currentTarget)-1;var a;t=null!==(a=O[n])&&void 0!==a?a:O[O.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},g)},N.map((({value:e,label:t,attributes:n})=>a.createElement("li",p({role:"tab",tabIndex:P===e?0:-1,"aria-selected":P===e,key:e,ref:e=>O.push(e),onKeyDown:U,onFocus:T,onClick:T},n,{className:(0,r.Z)("tabs__item",c,null==n?void 0:n.className,{"tabs__item--active":P===e})}),null!=t?t:e)))),n?(0,a.cloneElement)(k.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function d(e){const t=(0,l.Z)();return a.createElement(m,p({key:String(t)},e))}}}]);