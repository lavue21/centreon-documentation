"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[98778],{21164:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>p,metadata:()=>c,toc:()=>m});t(67294);var r=t(3905),a=t(51715),i=t(7626);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const p={id:"applications-monitoring-centreon-ha",title:"Centreon-HA"},u=void 0,c={unversionedId:"integrations/plugin-packs/procedures/applications-monitoring-centreon-ha",id:"integrations/plugin-packs/procedures/applications-monitoring-centreon-ha",title:"Centreon-HA",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-monitoring-centreon-ha.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-monitoring-centreon-ha",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-ha",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-monitoring-centreon-ha.md",tags:[],version:"current",frontMatter:{id:"applications-monitoring-centreon-ha",title:"Centreon-HA"},sidebar:"pp",previous:{title:"Centreon SQL Metrics",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-sql-metrics"},next:{title:"Amazon API Gateway",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/cloud-aws-apigateway"}},d={},m=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Configuration SNMP de l&#39;\xe9quipement",id:"configuration-snmp-de-l\xe9quipement",level:3},{value:"Configuration de la connexion SSH sans mot de passe",id:"configuration-de-la-connexion-ssh-sans-mot-de-passe",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:3},{value:"J&#39;obtiens le message d&#39;erreur suivant:",id:"jobtiens-le-message-derreur-suivant",level:3},{value:"The authenticity of host &#39;x.x.x.x (x.x.x.x)&#39; can&#39;t be established",id:"the-authenticity-of-host-xxxx-xxxx-cant-be-established",level:4},{value:"UNKNOWN: Command error: Permission denied, please try again",id:"unknown-command-error-permission-denied-please-try-again",level:4}],k={toc:m},x="wrapper";function g(e){var{components:n}=e,t=o(e,["components"]);return(0,r.kt)(x,s(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){l(e,n,t[n])}))}return e}({},k,t),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,r.kt)("p",null,"Centreon-HA est l'impl\xe9mentation en haute disponibilit\xe9 de la fonction centrale de Centreon. Plus d'informations sont disponibles ",(0,r.kt)("a",{parentName:"p",href:"/docs/installation/installation-of-centreon-ha/overview"},"ici"),"."),(0,r.kt)("p",null,"Le connecteur de supervision Centreon-HA s'appuie sur deux autre connecteurs de supervision :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/applications-pacemaker-ssh"},"Pacemaker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/operatingsystems-linux-snmp"},"Linux SNMP"))),(0,r.kt)("p",null,"Par cons\xe9quent, il utilise les protocoles de ces deux connecteurs de supervision - ",(0,r.kt)("strong",{parentName:"p"},"SNMP")," et ",(0,r.kt)("strong",{parentName:"p"},"SSH")," - pour se connecter aux n\u0153uds du cluster Centreon-HA et r\xe9cup\xe9rer informations et m\xe9triques relatives aux processus et \xe0 la sant\xe9 du cluster."),(0,r.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,r.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"N\u0153uds d'un cluster Centreon-HA"),(0,r.kt)("li",{parentName:"ul"},"Noeud actif d'un cluster Centreon-HA ",(0,r.kt)("em",{parentName:"li"},"via")," la VIP"),(0,r.kt)("li",{parentName:"ul"},"Serveur tiers fournissant le service de Quorum Device (service ",(0,r.kt)("inlineCode",{parentName:"li"},"corosync-qnetd"),")")),(0,r.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"PCS-Status",label:"PCS-Status",mdxType:"TabItem"},(0,r.kt)("p",null,"Ce mod\xe8le ne collecte pas de m\xe9trique, mais donne l'\xe9tat g\xe9n\xe9ral du cluster :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'remont\xe9e des "failed actions"'),(0,r.kt)("li",{parentName:"ul"},"\xe9tat des ressources :",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"php")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cbd_rrd")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"vip")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"http")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gorgone")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"centreon_central_sync")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cbd_central_broker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"centengine")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"centreontrapd")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"snmptrapd")))))),(0,r.kt)(i.Z,{value:"proc-corosync",label:"proc-corosync",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"nbproc"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Nombre de processus dont le nom correpond au filtre ",(0,r.kt)("inlineCode",{parentName:"td"},"corosync")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Count"))))),(0,r.kt)(i.Z,{value:"proc-pacemakerd",label:"proc-pacemakerd",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"nbproc"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Nombre de processus dont le nom correpond au filtre ",(0,r.kt)("inlineCode",{parentName:"td"},"pacemakerd")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Count"))))),(0,r.kt)(i.Z,{value:"proc-pcsd",label:"proc-pcsd",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"nbproc"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Nombre de processus dont le nom correpond au filtre ",(0,r.kt)("inlineCode",{parentName:"td"},"pcsd")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Count")))))),(0,r.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,r.kt)("h3",{id:"configuration-snmp-de-l\xe9quipement"},"Configuration SNMP de l'\xe9quipement"),(0,r.kt)("p",null,"La configuration de SNMP sur un serveur Linux est expliqu\xe9e dans ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/operatingsystems-linux-snmp#configuration-du-serveur-snmp"},"la page de documentation du connecteur de supervision Linux SNMP"),"."),(0,r.kt)("h3",{id:"configuration-de-la-connexion-ssh-sans-mot-de-passe"},"Configuration de la connexion SSH sans mot de passe"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NB : Il est tr\xe8s fortement recommand\xe9 de surveiller le cluster \xe0 partir d'un poller plut\xf4t qu'\xe0 partir du cluster.")),(0,r.kt)("p",null,"Ouvrir une session en ligne de commande sur :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"le poller qui sera charg\xe9 de superviser le cluster"),(0,r.kt)("li",{parentName:"ul"},"chaque n\u0153ud de ce cluster")),(0,r.kt)("p",null,"Une fois ces sessions ouvertes, lancer cette commande :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"su - centreon-engine\n")),(0,r.kt)("p",null,"\xc0 pr\xe9sent nous sommes dans l'environnement ",(0,r.kt)("inlineCode",{parentName:"p"},"bash")," de ",(0,r.kt)("inlineCode",{parentName:"p"},"centreon-engine"),". Lancer ensuite cette commande :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-keygen -t ed25519 -a 100\n")),(0,r.kt)("p",null,"Nous avons g\xe9n\xe9r\xe9 une paire de cl\xe9s sur chaque serveur, ainsi que le r\xe9pertoire ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.ssh"),". "),(0,r.kt)("p",null,"Sur le poller lancer cette commande pour afficher la cl\xe9 publique cr\xe9\xe9e :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat ~/.ssh/id_ed25519.pub\n")),(0,r.kt)("p",null,"Apr\xe8s avoir lanc\xe9 cette commande, copier le contenu du fichier qui s'est affich\xe9 sous la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"cat")," et le coller \xe0 la fin du fichier (probablement \xe0 cr\xe9er) ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.ssh/authorized_keys")," des n\u0153uds centraux, puis appliquer les bons droits sur le fichier (toujours en tant que ",(0,r.kt)("inlineCode",{parentName:"p"},"centreon-engine"),") :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chmod 600 ~/.ssh/authorized_keys\n")),(0,r.kt)("p",null,"Une fois cette \xe9tape effectu\xe9e sur chaque n\u0153ud central, il ne reste plus qu'\xe0 initialiser une premi\xe8re connexion depuis le poller vers chacun des n\u0153uds :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ssh <cluster-node-ip-address>\n")),(0,r.kt)("p",null,"L'utilisateur ",(0,r.kt)("inlineCode",{parentName:"p"},"centreon-engine")," du poller est alors capable d'ouvrir une session SSH sur les deux n\u0153uds centraux. "),(0,r.kt)("p",null,"Il ne reste plus qu'\xe0 l'int\xe9grer au groupe ",(0,r.kt)("inlineCode",{parentName:"p"},"haclient")," pour lui permettre d'ex\xe9cuter les commandes n\xe9cessaires \xe0 la surveillance du cluster :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"usermod -a -G haclient centreon-engine\n")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur chaque collecteur Centreon devant superviser un cluster Centreon-HA :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Operatingsystems-Linux-Snmp centreon-plugin-Applications-Pacemaker-Ssh\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,r.kt)("em",{parentName:"li"},"Centreon-HA")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")," "))),(0,r.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur chaque collecteur Centreon devant superviser un cluster Centreon-HA :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Operatingsystems-Linux-Snmp centreon-plugin-Applications-Pacemaker-Ssh\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Installer le RPM du connecteur de supervision sur le serveur Centreon Central:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-monitoring-centreon-ha\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,r.kt)("em",{parentName:"li"},"Centreon-HA")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Ajoutez un nouvel H\xf4te depuis la page "Configuration > H\xf4tes"'),(0,r.kt)("li",{parentName:"ul"},"Compl\xe9tez les champs ",(0,r.kt)("em",{parentName:"li"},"Communaut\xe9 SNMP")," et ",(0,r.kt)("em",{parentName:"li"},"Version SNMP")),(0,r.kt)("li",{parentName:"ul"},"Appliquez le Mod\xe8le d'H\xf4te ",(0,r.kt)("em",{parentName:"li"},"App-Monitoring-Centreon-HA-Cluster-Node-custom"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Si vous utilisez la version 3 du protocole SNMP, utilisez la Macro ",(0,r.kt)("em",{parentName:"p"},"SNMPEXTRAOPTIONS")," afin de renseigner les param\xe8tres d'authentification et de chiffrement ad\xe9quats.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Extra options SNMP")))),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("h3",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,r.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande depuis un collecteur Centreon ",(0,r.kt)("strong",{parentName:"p"},"en vous connectant avec l'utilisateur ",(0,r.kt)("inlineCode",{parentName:"strong"},"centreon-engine"))," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_pacemaker_ssh.pl \\\n    --plugin=apps::pacemaker::local::plugin \\\n    --mode=crm \\\n    --hostname=10.0.0.1 \\\n    --remote \\\n    --command='pcs' \\\n    --command-options='status --full' \\\n    --verbose\n")),(0,r.kt)("p",null,"La commande devrait retourner un message de sortie de la forme ci-dessous:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"OK: Cluster is OK |\nResource 'php' is started on node 'central-primary'\nResource 'php' is started on node 'central-secondary'\nResource 'cbd_rrd' is started on node 'central-primary'\nResource 'cbd_rrd' is started on node 'central-secondary'\nResource 'vip' is started on node 'central-secondary'\nResource 'http' is started on node 'central-secondary'\nResource 'gorgone' is started on node 'central-secondary'\nResource 'centreon_central_sync' is started on node 'central-secondary'\nResource 'cbd_central_broker' is started on node 'central-secondary'\nResource 'centengine' is started on node 'central-secondary'\nResource 'centreontrapd' is started on node 'central-secondary'\nResource 'snmptrapd' is started on node 'central-secondary'\n")),(0,r.kt)("p",null,"Dans cet exemple, le Plugin r\xe9cup\xe8re les informations concernant l'\xe9tat g\xe9n\xe9ral du cluster Centreon-HA par l'interm\xe9diaire du n\u0153ud identifi\xe9 par l'adresse IP ",(0,r.kt)("em",{parentName:"p"},"10.0.0.1")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--hostname=10.0.0.1"),"). "),(0,r.kt)("p",null,"Une alarme WARNING sera ainsi d\xe9clench\xe9e si une ou plusieurs ",(0,r.kt)("em",{parentName:"p"},"failed actions")," sont remont\xe9es par la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"pcs status --full"),". L'alarme sera de type CRITICAL si une ou plusieurs ressource sont arr\xeat\xe9es alors qu'elles devraient \xeatre d\xe9marr\xe9es."),(0,r.kt)("p",null,"Pour chaque mode, la liste de toutes les m\xe9triques, seuils associ\xe9s et options compl\xe9mentaires peut \xeatre affich\xe9e en ajoutant le param\xe8tre ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_pacemaker_ssh.pl --plugin=apps::pacemaker::local::plugin --mode=crm --help\n")),(0,r.kt)("p",null,"Les options ",(0,r.kt)("inlineCode",{parentName:"p"},"--command='pcs'")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"--command-options='status --full'")," permettent de surcharger le fonctionnement du plugin en rempla\xe7ant la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"crm_mon -1 -r -f 2>&1")," par ",(0,r.kt)("inlineCode",{parentName:"p"},"pcs status --full"),"."),(0,r.kt)("h3",{id:"jobtiens-le-message-derreur-suivant"},"J'obtiens le message d'erreur suivant:"),(0,r.kt)("h4",{id:"the-authenticity-of-host-xxxx-xxxx-cant-be-established"},"The authenticity of host 'x.x.x.x (x.x.x.x)' can't be established"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Attention, la tentative d'ex\xe9cution du plugin et de connexion via SSH doivent imp\xe9rativement se faire depuis le compte ",(0,r.kt)("inlineCode",{parentName:"p"},"centreon-engine"),".")),(0,r.kt)("p",null,"Le message complet ressemble \xe0 ce qui suit :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"The authenticity of host 'x.x.x.x (x.x.x.x)' can't be established.\nECDSA key fingerprint is SHA256:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.\nECDSA key fingerprint is MD5:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.\nAre you sure you want to continue connecting (yes/no)? UNKNOWN: Command too long to execute (timeout)...\n")),(0,r.kt)("p",null,"Si vous obtenez ce message, cela signifie que vous n'avez pas accept\xe9 l'empreinte du serveur."),(0,r.kt)("p",null,"Pour y rem\xe9dier il faut initier une premi\xe8re connexion :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ssh x.x.x.x\n")),(0,r.kt)("p",null,"Puis taper 'yes' \xe0 l'invite suivante :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"The authenticity of host 'x.x.x.x (x.x.x.x)' can't be established.\nECDSA key fingerprint is SHA256:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.\nECDSA key fingerprint is MD5:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.\nAre you sure you want to continue connecting (yes/no)?\n")),(0,r.kt)("h4",{id:"unknown-command-error-permission-denied-please-try-again"},"UNKNOWN: Command error: Permission denied, please try again"),(0,r.kt)("p",null,"Le message complet ressemble \xe0 ce qui suit :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"UNKNOWN: Command error: Permission denied, please try again. - Permission denied, please try again. - Permission denied (publickey,gssapi-keyex,gssapi-with-mic,password).\n")),(0,r.kt)("p",null,"Si l'ex\xe9cution de la sonde renvoie ce message, c'est que la cl\xe9 publique du compte ",(0,r.kt)("inlineCode",{parentName:"p"},"centreon-engine")," du poller n'est pas correctement d\xe9pos\xe9e sur le n\u0153ud que l'on cherche \xe0 superviser."),(0,r.kt)("p",null,"Il faut tout d'abord s'assurer que celle-ci (contenue dans ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/centreon-engine/.ssh/id_ed25519.pub"),") est bien pr\xe9sente dans le fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/centreon-engine/.ssh/authorized_keys"),"."),(0,r.kt)("p",null,"Si le point pr\xe9c\xe9dent est bien valid\xe9, alors s'assurer que les permissions du fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"authorized_keys")," et du r\xe9pertoire ",(0,r.kt)("inlineCode",{parentName:"p"},".ssh")," qui le contient sont conformes \xe0 ce qui s'affiche suite \xe0 la commande :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ls -al /var/lib/centreon-engine/.ssh\n")),(0,r.kt)("p",null,"Le r\xe9sultat doit \xeatre conforme \xe0 ce qui suit :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"total 20\ndrwx------  2 centreon-engine centreon-engine 4096 Sep  4 14:44 .\ndrwxr-xr-x. 5 centreon-engine centreon-engine 4096 Sep  4 14:44 ..\n-rw-------  1 centreon-engine centreon-engine    0 Sep  4 14:44 authorized_keys\n")),(0,r.kt)("p",null,"Dans le cas contraire, lancer ces commandes :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chmod 700 /var/lib/centreon-engine/.ssh\nchmod 600 /var/lib/centreon-engine/.ssh/authorized_keys\n")))}g.isMDXComponent=!0}}]);