"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[2878],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,k=m["".concat(o,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89644:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>m});n(67294);var a=n(3905),r=n(67709),l=n(7626);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={id:"applications-antivirus-kaspersky-snmp",title:"Kaspersky"},u=void 0,p={unversionedId:"integrations/plugin-packs/procedures/applications-antivirus-kaspersky-snmp",id:"integrations/plugin-packs/procedures/applications-antivirus-kaspersky-snmp",title:"Kaspersky",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-antivirus-kaspersky-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-antivirus-kaspersky-snmp",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/applications-antivirus-kaspersky-snmp",draft:!1,tags:[],version:"current",frontMatter:{id:"applications-antivirus-kaspersky-snmp",title:"Kaspersky"},sidebar:"pp",previous:{title:"Kadiska Rest API",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-kadiska-restapi"},next:{title:"Keepalived SNMP",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/applications-keepalived-snmp"}},c={},m=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du Plugin-Pack",id:"contenu-du-plugin-pack",level:2},{value:"El\xe9ment supervis\xe9s",id:"el\xe9ment-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Configuration de l&#39;\xe9quipement",id:"configuration-de-l\xe9quipement",level:3},{value:"Flux r\xe9seaux",id:"flux-r\xe9seaux",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration de l&#39;H\xf4te",id:"configuration-de-lh\xf4te",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment tester mes configurations et le Plugin en ligne de commande ?",id:"comment-tester-mes-configurations-et-le-plugin-en-ligne-de-commande-",level:3},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:3},{value:"UNKNOWN: SNMP GET Request : Cant get a single value.",id:"unknown-snmp-get-request--cant-get-a-single-value",level:3}],d={toc:m};function k(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)("wrapper",i({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",i({},{id:"vue-densemble"}),"Vue d'ensemble"),(0,a.kt)("p",null,"Kaspersky est une soci\xe9t\xe9 priv\xe9e qui fournit des solutions de cybers\xe9curit\xe9 et\nantivirus. Elle a \xe9t\xe9 fond\xe9e en 1997 par Eugene Kaspersky, Natalya Kaspersky et\nAlexey De-Monderik."),(0,a.kt)("p",null,"Le Plugin-Pack Centreon Kaspersky permet de r\xe9cup\xe9rer, par l'interm\xe9diaire du\nprotocole SNMP, le statut du Serveur d'Administration et des applications\nadministr\xe9es."),(0,a.kt)("h2",i({},{id:"contenu-du-plugin-pack"}),"Contenu du Plugin-Pack"),(0,a.kt)("h3",i({},{id:"el\xe9ment-supervis\xe9s"}),"El\xe9ment supervis\xe9s"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Kaspersky Security Center")),(0,a.kt)("h3",i({},{id:"m\xe9triques-collect\xe9es"}),"M\xe9triques collect\xe9es"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Deployment",label:"Deployment",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"hosts.antivirus.installed.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of successful remote installations")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"hosts.antivirus.install.failed.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of failed remote installations")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"hosts.expiring.licence.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of hosts with expiring licence")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"hosts.expired.licence.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of hosts with expired licence"))))),(0,a.kt)(l.Z,{value:"Events",label:"Events",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"events.critical.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of critical events"))))),(0,a.kt)(l.Z,{value:"Logical-Network",label:"Logical-Network",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"hosts.new.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of new hosts")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"groups.total.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of groups on the server")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"hosts.notconnected.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of hosts that have not connected for a long time")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"hosts.uncontrolled.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of uncontrolled hosts"))))),(0,a.kt)(l.Z,{value:"Protection",label:"Protection",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"protection.hosts.antivirus.notrunning.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of hosts without a running antivirus")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"protection.hosts.realtime.notrunning.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of hosts without a running real time protection")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"protection.hosts.realtime.unacceptable.level.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of hosts with unacceptable protection level")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"protection.hosts.uncured.objects.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of hosts with uncured objects")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"protection.hosts.2manythreats.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of hosts with too many threats"))))),(0,a.kt)(l.Z,{value:"Updates",label:"Updates",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"update.server.freshness.seconds"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Date of the last server update"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"update.hosts.outdated.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of outdated hosts"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"})))))),(0,a.kt)(l.Z,{value:"Full-Scan",label:"Full-Scan",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"hosts.unscanned.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of hosts not recently scanned")))))),(0,a.kt)("h2",i({},{id:"pr\xe9requis"}),"Pr\xe9requis"),(0,a.kt)("h3",i({},{id:"configuration-de-l\xe9quipement"}),"Configuration de l'\xe9quipement"),(0,a.kt)("p",null,"Afin de superviser le serveur Kaspersky Security Center, le SNMP v2 ou v3 doit\n\xeatre configur\xe9 comme indiqu\xe9 sur la documentation officielle :\n",(0,a.kt)("a",i({parentName:"p"},{href:"https://support.kaspersky.com/fr/12603#block3"}),"https://support.kaspersky.com/fr/12603#block3")),(0,a.kt)("h3",i({},{id:"flux-r\xe9seaux"}),"Flux r\xe9seaux"),(0,a.kt)("p",null,"La communication doit \xeatre possible depuis le collecteur Centreon vers le port\nSNMP (UDP/161) du Kaspersky Security Center."),(0,a.kt)("h2",i({},{id:"installation"}),"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin Centreon Kaspersky sur l'ensemble des collecteurs Centreon supervisant des ressources Kaspersky Security Center :")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Applications-Antivirus-Kaspersky-Snmp\n")),(0,a.kt)("ol",i({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin-Pack 'Kaspersky' depuis la page \"Configuration > Plugin packs > Manager\" de l'interface Web Centreon"))),(0,a.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin Centreon Kaspersky sur l'ensemble des collecteurs Centreon supervisant des ressources Kaspersky Security Center :")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Applications-Antivirus-Kaspersky-Snmp\n")),(0,a.kt)("ol",i({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"Installer le RPM du Plugin-Pack contenant les Mod\xe8les de supervision sur le serveur Central Centreon :")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-pack-applications-antivirus-kaspersky-snmp\n")),(0,a.kt)("ol",i({},{start:3}),(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin-Pack 'Kaspersky' depuis la page \"Configuration > Plugin packs > Manager\" de l'interface Web Centreon")))),(0,a.kt)("h2",i({},{id:"configuration-de-lh\xf4te"}),"Configuration de l'H\xf4te"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Ajoutez un nouvel H\xf4te depuis la page "Configuration > H\xf4tes"'),(0,a.kt)("li",{parentName:"ul"},'Compl\xe9tez les champs "Nom","Alias" & "IP Address / DNS" correspondant \xe0 votre serveur Kaspersky Security Center'),(0,a.kt)("li",{parentName:"ul"},"Appliquez le Mod\xe8le d'H\xf4te ",(0,a.kt)("em",{parentName:"li"},"App-Antivirus-Kaspersky-SNMP-custom"))),(0,a.kt)("p",null,"Si vous utilisez SNMP en version 3, vous devez configurer les param\xe8tres\nsp\xe9cifiques associ\xe9s via la macro SNMPEXTRAOPTIONS"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Obligatoire"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Nom"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"})),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"SNMPEXTRAOPTIONS"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Configure your own SNMPv3 credentials combo")))),(0,a.kt)("h2",i({},{id:"faq"}),"FAQ"),(0,a.kt)("h3",i({},{id:"comment-tester-mes-configurations-et-le-plugin-en-ligne-de-commande-"}),"Comment tester mes configurations et le Plugin en ligne de commande ?"),(0,a.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne\nde commande depuis un collecteur Centreon en vous connectant avec l'utilisateur\n",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins//centreon_kaspersky_snmp.pl \\\n  --plugin=apps::antivirus::kaspersky::snmp::plugin --mode=protection \\\n  --hostname=10.0.0.1 --snmp-version='2c' --snmp-community='kaseprsky_ro' \\\n  --warning-status='%{status} =~ /Warning/i' --critical-status='%{status} =~ /Critical/i'\n  --warning-no-antivirus='0' --critical-no-antivirus='' --warning-no-real-time='0' --critical-no-real-time='' \\\n  --warning-not-acceptable-level='0' --critical-not-acceptable-level='' \\\n  --warning-not-cured-objects='0' --critical-not-cured-objects='' \\\n  --warning-too-many-threats='0' --critical-too-many-threats='' \\\n  --warning-too-many-threats='0' --critical-too-many-threats='' \\\n  --use-new-perfdata\n")),(0,a.kt)("p",null,"La commande devrait retourner un message de sortie de la forme ci-dessous :"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"WARNING: 2 host(s) without running antivirus - 1 hosts(s) without running real time protection - 8 host(s) with not cured objects - 5 host(s) with too many threats | 'protection.hosts.antivirus.notrunning.count'=2;0:0;;0; 'protection.hosts.realtime.notrunning.count'=1;0:0;;0; 'protection.hosts.realtime.unacceptable.level.count'=0;0:0;;0; 'protection.hosts.uncured.objects.count'=8;0:0;;0; 'protection.hosts.toomanythreats.count'=5;0:0;;0;\n")),(0,a.kt)("p",null,"Dans cet exemple, le Plugin contr\xf4le le statut de la protection des \xe9l\xe9ments du parc\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--plugin=apps::antivirus::kaspersky::snmp::plugin--mode=protection"),") indiqu\xe9 par\nle Kasperky Security Center \xe0 l'adresse 10.0.0.1 par l'interm\xe9diaire du\nprotocole SNMP\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--hostname='10.0.0.1'  --snmp-version='2c' --snmp-community='kaseprsky_ro'"),")."),(0,a.kt)("p",null,"Dans cet exemple, une alarme est d\xe9clench\xe9e si le statut global de la protection est diff\xe9rent de 'OK'\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--warning-status='%{status} =~ /Warning/i'")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-status='%{status} =~ /Critical/i'"),")\nou alors que le nombre de PC sans protection ou avec une protection insuffisante est sup\xe9rieur \xe0 0 (",(0,a.kt)("inlineCode",{parentName:"p"},"--warning-no-antivirus='0'"),")."),(0,a.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification\npeut \xeatre affich\xe9e en ajoutant le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins//centreon_kaspersky_snmp.pl \\\n  --plugin=apps::antivirus::kaspersky::snmp::plugin \\\n  --mode=deployment \\\n  --help\n")),(0,a.kt)("p",null,"Tous les modes disponibles peuvent \xeatre affich\xe9s via l'option\n",(0,a.kt)("inlineCode",{parentName:"p"},"--list-mode")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins//centreon_kaspersky_snmp.pl \\\n  --plugin=apps::antivirus::kaspersky::snmp::plugin \\\n  --list-mode\n")),(0,a.kt)("h3",i({},{id:"unknown-snmp-get-request--timeout"}),"UNKNOWN: SNMP GET Request : Timeout"),(0,a.kt)("p",null,"Si vous obtenez ce message, cela signifie le collecteur Centreon ne parvient\npas \xe0 contacter le serveur Kaspersky Security Center sur le port 161 (firewall\nou autre \xe9quipement en coupure) ou que la communaut\xe9 SNMP configur\xe9e n'est pas\ncorrecte."),(0,a.kt)("h3",i({},{id:"unknown-snmp-get-request--cant-get-a-single-value"}),"UNKNOWN: SNMP GET Request : Cant get a single value."),(0,a.kt)("p",null,"Les autorisations donn\xe9es \xe0 l'utilisateur en SNMP sont trop restreintes pour\nfaire fonctionner le mode/plugin."))}k.isMDXComponent=!0},7626:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function s({children:e,hidden:t,className:n}){return a.createElement("div",i({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},67709:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(67294),r=n(86010),l=n(90980),i=n(35715),s=n(8854),o=n(8241);const u="tabList__CuJ",p="tabItem_LNqP";function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function m(e){var t;const{lazy:n,block:l,defaultValue:m,values:d,groupId:k,className:g}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=d?d:f.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),b=(0,i.l)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var N;const h=null===m?m:null!==(N=null!=m?m:null===(t=f.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==N?N:f[0].props.value;if(null!==h&&!v.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:P}=(0,s.U)(),[w,O]=(0,a.useState)(h),C=[],{blockElementScrollPositionUntilNextRender:T}=(0,o.o5)();if(null!=k){const e=y[k];null!=e&&e!==w&&v.some((t=>t.value===e))&&O(e)}const S=e=>{const t=e.currentTarget,n=C.indexOf(t),a=v[n].value;a!==w&&(T(t),O(a),null!=k&&P(k,String(a)))},x=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=C.indexOf(e.currentTarget)+1;var n;t=null!==(n=C[a])&&void 0!==n?n:C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;var a;t=null!==(a=C[n])&&void 0!==a?a:C[C.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},g)},v.map((({value:e,label:t,attributes:n})=>a.createElement("li",c({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>C.push(e),onKeyDown:x,onFocus:S,onClick:S},n,{className:(0,r.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":w===e})}),null!=t?t:e)))),n?(0,a.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,l.Z)();return a.createElement(m,c({key:String(t)},e))}}}]);