"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[37267],{92416:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>f,frontMatter:()=>p,metadata:()=>d,toc:()=>c});a(67294);var n=a(3905),r=a(51715),l=a(7626);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const p={id:"network-firewalls-paloalto-standard-ssh",title:"Palo Alto firewall SSH"},u=void 0,d={unversionedId:"integrations/plugin-packs/procedures/network-firewalls-paloalto-standard-ssh",id:"integrations/plugin-packs/procedures/network-firewalls-paloalto-standard-ssh",title:"Palo Alto firewall SSH",description:"Contenu du connecteur de supervision",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/network-firewalls-paloalto-standard-ssh.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-firewalls-paloalto-standard-ssh",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/network-firewalls-paloalto-standard-ssh",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/network-firewalls-paloalto-standard-ssh.md",tags:[],version:"current",frontMatter:{id:"network-firewalls-paloalto-standard-ssh",title:"Palo Alto firewall SSH"},sidebar:"pp",previous:{title:"Palo Alto firewall SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/network-firewalls-paloalto-standard-snmp"},next:{title:"Patton SmartNode SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/network-patton-smartnode-snmp"}},m={},c=[{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"R\xe8gles de d\xe9couvertes",id:"r\xe8gles-de-d\xe9couvertes",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"J&#39;ai ce message d&#39;erreur : <code>UNKNOWN: Command error: Host key verification failed.</code>. Qu&#39;est-ce que cela signifie ?",id:"jai-ce-message-derreur--unknown-command-error-host-key-verification-failed-quest-ce-que-cela-signifie-",level:3}],k={toc:c},N="wrapper";function f(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)(N,s(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){i(e,t,a[t])}))}return e}({},k,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,n.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,n.kt)("p",null,"Le connecteur de supervision inclue la supervision du syst\xe8me, des interfaces, des licences, des ipsec, de la haute disponibilit\xe9 entre les n\u0153uds et des composants mat\xe9riels en\nutilisant des commandes syst\xe8mes."),(0,n.kt)("h3",{id:"r\xe8gles-de-d\xe9couvertes"},"R\xe8gles de d\xe9couvertes"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Services",label:"Services",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Rule name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Net-PaloAlto-Standard-SNMP-Packet-Errors-Name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"D\xe9couverte des interfaces et contr\xf4le des paquets en erreurs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Net-PaloAlto-Standard-SNMP-Traffic-Name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"D\xe9couverte des interfaces et contr\xf4le de leur statut et de la bande-passante")))))),(0,n.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Environnement",label:"Environnement",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hardware.temperature.celsius"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Temperature of the different sensors"),(0,n.kt)("td",{parentName:"tr",align:"left"},"C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"hardware.voltage.volt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Voltage of the different sensors"),(0,n.kt)("td",{parentName:"tr",align:"left"},"V"))))),(0,n.kt)(l.Z,{value:"HA",label:"HA",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sync status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"HA Sync status"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"member status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"HA member status"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"link status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"HA Link status"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Interfaces",label:"Interfaces",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"interfaces.total.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Total number of interfaces"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"interfaces status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Status of the interface operationnal and high availability state"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"IPSec",label:"IPSec",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"tunnels.ipsec.total.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Total number of ipsec tunnels"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,n.kt)(l.Z,{value:"Licenses",label:"Licenses",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Licence validity check of enabled features Sync status"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"System",label:"System",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"system.antivirus.lastupdate.time.seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Last antivirus update"),(0,n.kt)("td",{parentName:"tr",align:"left"},"s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"system.threat.lastupdate.time.seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Last threat update"),(0,n.kt)("td",{parentName:"tr",align:"left"},"s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"system.sessions.traffic.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of traffic sessions"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"system.sessions.total.active.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Total number of active sessions"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count")))))),(0,n.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,n.kt)("p",null,"Afin de fonctionner, le Plugin n\xe9cessite une connexion SSH entre le Collecteur et le pare-feu Palo Alto. L'utilisateur distant\ndoit avoir assez de privil\xe8ges pour ex\xe9cuter des commandes syst\xe8mes."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Firewalls-Paloalto-Standard-Ssh\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,n.kt)("em",{parentName:"li"},"Palo Alto firewall SSH")," depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,n.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Network-Firewalls-Paloalto-Standard-Ssh\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le connecteur de supervision via le RPM:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-network-firewalls-paloalto-standard-ssh\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,n.kt)("em",{parentName:"li"},"Palo Alto firewall SSH")," depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"Ce connecteur de supervision est con\xe7u de mani\xe8re \xe0 avoir dans Centreon un h\xf4te par pare-feu Palo Alto.\nLorsque vous ajoutez un H\xf4te \xe0 Centreon, appliquez-lui le mod\xe8le ",(0,n.kt)("em",{parentName:"p"},"Net-PaloAlto-Standard-SSH-custom"),".\nUne fois celui-ci configur\xe9, certaines macros doivent \xeatre renseign\xe9es:"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"sshcli backend",label:"sshcli backend",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHBACKEND"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Nom du backend: ",(0,n.kt)("inlineCode",{parentName:"td"},"sshcli"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Par default, il utilise l'utilisateur en cours d'ex\xe9cution ",(0,n.kt)("inlineCode",{parentName:"td"},"centengine")," de votre Collecteur")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Ne peut pas \xeatre utilis\xe9 avec le backend. Seulement avec la cl\xe9 d'authentication")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Par default: 22")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Personnalisez-le avec le v\xf4tre si n\xe9cessaire. E.g.: ",(0,n.kt)("inlineCode",{parentName:"td"},"--ssh-priv-key=/user/.ssh/id_rsa"))))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Avec ce backend, il est n\xe9cessaire d'effectuer une connexion manuelle entre l'utilisateur ",(0,n.kt)("em",{parentName:"p"},"centreon-engine")," du Collecteur\net l'utilisateur applicatif cr\xe9\xe9 sur le serveur distant. (Macro SSHUSERNAME)."))),(0,n.kt)(l.Z,{value:"plink backend",label:"plink backend",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHBACKEND"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Nom du backend: ",(0,n.kt)("inlineCode",{parentName:"td"},"plink"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Par default, il utilise l'utilisateur en cours d'ex\xe9cution ",(0,n.kt)("inlineCode",{parentName:"td"},"centengine")," de votre Collecteur")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Peut \xeatre utilis\xe9. Si aucune valeur n'est d\xe9finie, l'authentification par cl\xe9 ssh est utilis\xe9e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Par default: 22")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Personnalisez-le avec le v\xf4tre si n\xe9cessaire. E.g.: ",(0,n.kt)("inlineCode",{parentName:"td"},"--ssh-priv-key=/user/.ssh/id_rsa"))))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Avec ce backend, il est n\xe9cessaire d'effectuer une connexion manuelle entre l'utilisateur ",(0,n.kt)("em",{parentName:"p"},"centreon-engine")," du Collecteur\net l'utilisateur applicatif cr\xe9\xe9 sur le serveur distant. (Macro SSHUSERNAME)."))),(0,n.kt)(l.Z,{value:"libssh backend (par d\xe9faut)",label:"libssh backend (par d\xe9faut)",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHBACKEND"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Nom du backend: ",(0,n.kt)("inlineCode",{parentName:"td"},"libssh"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Par default, il utilise l'utilisateur en cours d'ex\xe9cution ",(0,n.kt)("inlineCode",{parentName:"td"},"centengine")," de votre Collecteur")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Peut \xeatre utilis\xe9. Si aucune valeur n'est d\xe9finie, l'authentification par cl\xe9 ssh est utilis\xe9e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Par default: 22")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Personnalisez-le avec le v\xf4tre si n\xe9cessaire. E.g.: ",(0,n.kt)("inlineCode",{parentName:"td"},"--ssh-priv-key=/user/.ssh/id_rsa"))))),(0,n.kt)("p",null,"Avec ce backend, vous n'avez pas \xe0 valider manuellement le fingerprint du serveur cible. "))),(0,n.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,n.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande depuis votre Collecteur Centreon avec l'utilisateur ",(0,n.kt)("em",{parentName:"p"},"centreon-engine")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_paloalto_ssh.pl \\\n    --plugin=network::paloalto::ssh::plugin \\\n    --mode=environment \\\n    --hostname=10.30.2.81 \\\n    --ssh-username=centreon \\\n    --ssh-password='centreon-password' \\\n    --ssh-backend=sshcli \\\n    --component='.*' \\\n    --verbose\n")),(0,n.kt)("p",null,"Exemple de sortie:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: All 12 components are ok [4/4 psus, 4/4 temperatures, 4/4 voltages].\nChecking power supplies\nPower supply 'Power Supply A1' status is normal [instance: 1].\nPower supply 'Power Supply B1' status is normal [instance: 2].\nPower supply 'Power Supply A2' status is normal [instance: 1].\nPower supply 'Power Supply B2' status is normal [instance: 2].\nChecking temperatures\nTemperature sensor on slot 1' temperature is 69C [instance: 18.1].\nTemperature sensor on slot 2' temperature is 59C [instance: 40.1].\nTemperature sensor on slot 3' temperature is 57C [instance: 89.1].\nTemperature sensor on slot 4' temperature is 67C [instance: 89.2].\nChecking voltages\n1,500V voltage sensor, slot 1' voltage is 1,732 V [instance: 18.1].\n1,800V voltage sensor, slot 1' voltage is 1,072 V [instance: 18.2].\n1,500V voltage sensor, slot 2' voltage is 1,732 V [instance: 89.1].\n1,800V voltage sensor, slot 2' voltage is 1,072 V [instance: 89.2].\n")),(0,n.kt)("p",null,"La commande ci-dessus contr\xf4le les composants mat\xe9riels du pare-feu Palo Alto (",(0,n.kt)("inlineCode",{parentName:"p"},"--mode=environment"),").\nLe Plugin utilise le Backend ",(0,n.kt)("em",{parentName:"p"},"sshcli")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--ssh-backend='sshcli'"),") avec l'utisateur ",(0,n.kt)("em",{parentName:"p"},"centreon")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--ssh-username=centreon"),"),\nson mot de passe (",(0,n.kt)("inlineCode",{parentName:"p"},"--ssh-password='centreon-password'"),") et il se connecte \xe0 l'h\xf4te ",(0,n.kt)("em",{parentName:"p"},"10.30.2.81")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--hostname='10.30.2.81'"),")."),(0,n.kt)("p",null,"Toutes les options et leur utilisation peuvent \xeatre consult\xe9es avec le param\xe8tre ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," ajout\xe9 \xe0 la commande :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_paloalto_ssh.pl \\\n    --plugin=network::paloalto::ssh::plugin \\\n    --mode=environment \\\n    --help\n")),(0,n.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("h3",{id:"jai-ce-message-derreur--unknown-command-error-host-key-verification-failed-quest-ce-que-cela-signifie-"},"J'ai ce message d'erreur : ",(0,n.kt)("inlineCode",{parentName:"h3"},"UNKNOWN: Command error: Host key verification failed."),". Qu'est-ce que cela signifie ?"),(0,n.kt)("p",null,"Cela signifie que vous n'avez pas valid\xe9 manuellement la signature (fingerprint) du serveur cible avec ",(0,n.kt)("inlineCode",{parentName:"p"},"libssh")," ou ",(0,n.kt)("inlineCode",{parentName:"p"},"plink")," sur le Collecteur Centreon."))}f.isMDXComponent=!0}}]);