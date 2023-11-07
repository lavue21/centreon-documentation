"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[53970],{52646:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>N,frontMatter:()=>s,metadata:()=>c,toc:()=>u});n(67294);var r=n(3905),a=n(51715),l=n(7626);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={id:"applications-monitoring-centreon-central",title:"Centreon Central"},m=void 0,c={unversionedId:"integrations/plugin-packs/procedures/applications-monitoring-centreon-central",id:"integrations/plugin-packs/procedures/applications-monitoring-centreon-central",title:"Centreon Central",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-monitoring-centreon-central.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-monitoring-centreon-central",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-central",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-monitoring-centreon-central.md",tags:[],version:"current",frontMatter:{id:"applications-monitoring-centreon-central",title:"Centreon Central"},sidebar:"pp",previous:{title:"Parity Ethpoller API",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/blockchain-parity-ethpoller-restapi"},next:{title:"Centreon Database",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-database"}},d={},u=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Mod\xe8les",id:"mod\xe8les",level:3},{value:"M\xe9triques &amp; statuts collect\xe9s",id:"m\xe9triques--statuts-collect\xe9s",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"SNMP",id:"snmp",level:3},{value:"SSH key exchange",id:"ssh-key-exchange",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4te",id:"h\xf4te",level:3},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:3}],k={toc:u},g="wrapper";function N(e){var{components:t}=e,n=p(e,["components"]);return(0,r.kt)(g,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,r.kt)("p",null,"Le connecteur de supervision Centreon Central permet de faciliter la mise en place de la supervision pour le serveur central."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Nous recommandons fortement que le serveur central soit supervis\xe9 par un collecteur, si votre architecture en dispose d'un. Dans le cas contraire, vous devrez ajouter l'option ",(0,r.kt)("inlineCode",{parentName:"p"},"--hostname=''")," \xe0 la macro ",(0,r.kt)("inlineCode",{parentName:"p"},"EXTRAOPTIONS")," de l'h\xf4te pour \xe9viter d'avoir des erreurs de v\xe9rification de la clef de l'h\xf4te.")),(0,r.kt)("h2",{id:"contenu-du-pack"},"Contenu du Pack"),(0,r.kt)("h3",{id:"mod\xe8les"},"Mod\xe8les"),(0,r.kt)("p",null,"Le connecteur de supervision Centreon Centreon Central apporte un mod\xe8le d'h\xf4te :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"App-Monitoring-Centreon-Central-custom")),(0,r.kt)("p",null,"Il apporte les Mod\xe8les de Service suivants :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Alias"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Mod\xe8le de service"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"D\xe9faut"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Broker-Stats"),(0,r.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Centreon-Broker-Stats-Central"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le les statistiques des processus Centreon Broker"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"proc-broker-rrd"),(0,r.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Centreon-Process-broker-rrd"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le permettant de v\xe9rifier le fonctionnement du processus Broker RRD"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"proc-broker-sql"),(0,r.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Centreon-Process-broker-sql"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le permettant de v\xe9rifier le fonctionnement du processus Broker SQL"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"proc-centcore"),(0,r.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Centreon-Process-centcore"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le permettant de v\xe9rifier le fonctionnement du processus centcore"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"proc-centengine"),(0,r.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Centreon-Process-centengine"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le permettant de v\xe9rifier le fonctionnement du processus centreon-engine"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"proc-centreontrapd"),(0,r.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Centreon-Process-centreontrapd"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le permettant de v\xe9rifier le fonctionnement du processus centreontrapd"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"proc-crond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Centreon-Process-crond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le permettant de v\xe9rifier le fonctionnement du processus crond"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"proc-gorgoned"),(0,r.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Centreon-Process-gorgoned"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le permettant de v\xe9rifier le fonctionnement du processus gorgoned"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"proc-httpd"),(0,r.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Centreon-Process-httpd"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le permettant de v\xe9rifier le fonctionnement du processus Apache"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"proc-ntpd"),(0,r.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Centreon-Process-ntpd"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le permettant de v\xe9rifier le fonctionnement du processus NTP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"proc-snmptrapd"),(0,r.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Centreon-Process-snmptrapd"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le permettant de v\xe9rifier le fonctionnement du processus snmptrapd"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"proc-sshd"),(0,r.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Centreon-Process-sshd"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le permettant de v\xe9rifier le fonctionnement du processus sshd"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")))),(0,r.kt)("h3",{id:"m\xe9triques--statuts-collect\xe9s"},"M\xe9triques & statuts collect\xe9s"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Broker-Stats",label:"Broker-Stats",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"endpoint"),"#queued_events"),(0,r.kt)("td",{parentName:"tr",align:"left"},"events")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"endpoint"),"#speed_events"),(0,r.kt)("td",{parentName:"tr",align:"left"},"events/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"endpoint"),"#unacknowledged_events"),(0,r.kt)("td",{parentName:"tr",align:"left"},"events"))))),(0,r.kt)(l.Z,{value:"proc-broker-rrd",label:"proc-broker-rrd",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"nbproc"),(0,r.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,r.kt)(l.Z,{value:"proc-broker-sql",label:"proc-broker-sql",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"nbproc"),(0,r.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,r.kt)(l.Z,{value:"proc-centcore",label:"proc-centcore",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"nbproc"),(0,r.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,r.kt)(l.Z,{value:"proc-centengine",label:"proc-centengine",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"nbproc"),(0,r.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,r.kt)(l.Z,{value:"proc-centreontrapd",label:"proc-centreontrapd",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"nbproc"),(0,r.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,r.kt)(l.Z,{value:"proc-crond",label:"proc-crond",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"nbproc"),(0,r.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,r.kt)(l.Z,{value:"proc-gorgoned",label:"proc-gorgoned",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"nbproc"),(0,r.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,r.kt)(l.Z,{value:"proc-httpd",label:"proc-httpd",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"nbproc"),(0,r.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,r.kt)(l.Z,{value:"proc-ntpd",label:"proc-ntpd",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"nbproc"),(0,r.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,r.kt)(l.Z,{value:"proc-snmptrapd",label:"proc-snmptrapd",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"nbproc"),(0,r.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,r.kt)(l.Z,{value:"proc-sshd",label:"proc-sshd",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"nbproc"),(0,r.kt)("td",{parentName:"tr",align:"left"},"count")))))),(0,r.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,r.kt)("h3",{id:"snmp"},"SNMP"),(0,r.kt)("p",null,"SNMP doit \xeatre configur\xe9 sur le serveur central. Vous pouvez vous aider de cette ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/operatingsystems-linux-snmp#prerequisites"},"documentation")," pour mettre en place rapidement une simple configuration SNMP. "),(0,r.kt)("h3",{id:"ssh-key-exchange"},"SSH key exchange"),(0,r.kt)("p",null,"Les v\xe9rifications li\xe9es au service ",(0,r.kt)("strong",{parentName:"p"},"Broker-Stats")," devraient \xeatre effectu\xe9es depuis un collecteur et sont r\xe9alis\xe9es par SSH. Si vous ne disposez que d'un central, les v\xe9rifications seront faites depuis et sur le central lui-m\xeame. Vous pouvez ignorer les \xe9tapes ci-dessous si vous \xeates dans ce cas-l\xe0."),(0,r.kt)("p",null,"Le collecteur r\xe9alise les v\xe9rifications en tant qu'utilisateur syst\xe8me ",(0,r.kt)("strong",{parentName:"p"},"centreon-engine")," et se connectera au serveur central en tant qu'utilisateur ",(0,r.kt)("strong",{parentName:"p"},"centreon"),"."),(0,r.kt)("p",null,"Les \xe9tapes ci-dessous d\xe9crivent l'\xe9change de clef SSH entre le collecteur et le central : "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Depuis le central, param\xe9trer un mot de passe pour l'utilisateur ",(0,r.kt)("strong",{parentName:"li"},"centreon")," :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"passwd centreon\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Depuis le collecteur, cr\xe9er et copier la nouvelle clef SSH de l'utilisateur ",(0,r.kt)("strong",{parentName:"li"},"centreon-engine")," vers le central : ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"su - centreon-engine\nssh-keygen -t ed25519 -a 100\nssh-copy-id -i ~/.ssh/id_ed25519.pub centreon@<IP_CENTRAL>\n")),(0,r.kt)("p",null,"Il faudra ensuite sp\xe9cifier dans la configuration du service ",(0,r.kt)("strong",{parentName:"p"},"Broker-Stats")," que la v\xe9rification se fera \xe0 distance. Pour ce faire, apr\xe8s avoir appliqu\xe9 le mod\xe8le d'h\xf4te, vous devrez param\xe9trer la macro EXTRAOPTIONS sur le service ",(0,r.kt)("strong",{parentName:"p"},"Broker-Stats")," : "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Macro name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--verbose --remote --ssh-option='-l=centreon'")))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin Centreon sur le collecteur ou directement sur le central si vous ne disposez pas de collecteur :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Monitoring-Centreon-Central centreon-plugin-Operatingsystems-Linux-Snmp\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,r.kt)("strong",{parentName:"li"},"Centreon Central")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),"."))),(0,r.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin Centreon sur le collecteur ou directement sur le central si vous ne disposez pas de collecteur :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Monitoring-Centreon-Central centreon-plugin-Operatingsystems-Linux-Snmp\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le RPM du Pack ",(0,r.kt)("strong",{parentName:"li"},"Centreon Central")," :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-monitoring-centreon-central\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,r.kt)("strong",{parentName:"li"},"Centreon Central")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),".")))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h3",{id:"h\xf4te"},"H\xf4te"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ajoutez un H\xf4te \xe0 Centreon depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes"),"."),(0,r.kt)("li",{parentName:"ul"},"Compl\xe9tez les champs ",(0,r.kt)("strong",{parentName:"li"},"Nom"),", ",(0,r.kt)("strong",{parentName:"li"},"Alias")," & ",(0,r.kt)("strong",{parentName:"li"},"IP Address/DNS")," correspondant \xe0 votre serveur ",(0,r.kt)("em",{parentName:"li"},"Centreon Central"),"."),(0,r.kt)("li",{parentName:"ul"},"Appliquez le Mod\xe8le d'H\xf4te ",(0,r.kt)("strong",{parentName:"li"},"App-Monitoring-Centreon-Central-custom"),"."),(0,r.kt)("li",{parentName:"ul"},"Une fois le mod\xe8le appliqu\xe9, les Macros ci-dessous indiqu\xe9es comme requises (",(0,r.kt)("em",{parentName:"li"},"Obligatoire"),") doivent \xeatre renseign\xe9es.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Obligatoire"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"MODULESTATSFILE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"/var/lib/centreon-engine/central-module-master-stats.json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"RRDSTATSFILE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"/var/lib/centreon-broker/central-rrd-master-stats.json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Options suppl\xe9mentaire \xe0 ajouter \xe0 l'ensemble des commandes de l'h\xf4te (ex: --verbose)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"SQLSTATSFILE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"/var/lib/centreon-broker/central-broker-master-stats.json")))),(0,r.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,r.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne\nde commande depuis votre collecteur Centreon en vous connectant avec\nl'utilisateur ",(0,r.kt)("strong",{parentName:"p"},"centreon-engine")," (",(0,r.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_linux_snmp.pl \\\n    --plugin=os::linux::snmp::plugin \\\n    --mode=processcount \\\n    --hostname=10.0.0.1 \\\n    --snmp-version='2c' \\\n    --snmp-community='my-snmp-community' \\\n    --process-name='sshd' \\\n    --process-path='' \\\n    --process-args='' \\\n    --regexp-name \\\n    --regexp-path \\\n    --regexp-args \\\n    --warning='' \\\n    --critical='' \\\n    --use-new-perfdata \n")),(0,r.kt)("p",null,"La commande devrait retourner un message de sortie similaire \xe0 :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Number of current processes running: 1 | 'nbproc'=1;;;0; \n")),(0,r.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification peut \xeatre\naffich\xe9e en ajoutant le param\xe8tre ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_linux_snmp.pl \\\n    --plugin=os::linux::snmp::plugin \\\n    --mode=processcount \\\n    --help\n")),(0,r.kt)("p",null,"Tous les modes disponibles peuvent \xeatre affich\xe9s en ajoutant le param\xe8tre\n",(0,r.kt)("inlineCode",{parentName:"p"},"--list-mode")," \xe0 la commande :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_linux_snmp.pl \\\n    --plugin=os::linux::snmp::plugin \\\n    --list-mode\n")),(0,r.kt)("h3",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,r.kt)("p",null,"Rendez-vous sur la ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"documentation d\xe9di\xe9e"),"\npour le diagnostic des erreurs communes des Plugins Centreon."))}N.isMDXComponent=!0}}]);