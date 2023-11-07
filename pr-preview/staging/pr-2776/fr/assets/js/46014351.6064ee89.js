"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[22118],{34346:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>k,frontMatter:()=>u,metadata:()=>c,toc:()=>d});n(67294);var r=n(3905),a=n(51715),s=n(7626);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const u={id:"dsm",title:"Dynamic Service Management"},m=void 0,c={unversionedId:"monitoring/passive-monitoring/dsm",id:"version-23.10/monitoring/passive-monitoring/dsm",title:"Dynamic Service Management",description:"Le module Centreon Dynamic Service Management (Centreon-DSM) est une extension pour g\xe9rer les alarmes avec un syst\xe8me de",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/monitoring/passive-monitoring/dsm.md",sourceDirName:"monitoring/passive-monitoring",slug:"/monitoring/passive-monitoring/dsm",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/monitoring/passive-monitoring/dsm",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/monitoring/passive-monitoring/dsm.md",tags:[],version:"23.10",lastUpdatedAt:1699375250,formattedLastUpdatedAt:"7 nov. 2023",frontMatter:{id:"dsm",title:"Dynamic Service Management"},sidebar:"version-23.10/docs",previous:{title:"D\xe9boguer la gestion des traps SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/monitoring/passive-monitoring/debug-snmp-traps-management"},next:{title:"Auto Remediation",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/monitoring/event-handler"}},p={},d=[{value:"Installation",id:"installation",level:2},{value:"Sur un serveur central",id:"sur-un-serveur-central",level:3},{value:"Sur un collecteur",id:"sur-un-collecteur",level:3},{value:"Architecture",id:"architecture",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Configurer les emplacements (slot)",id:"configurer-les-emplacements-slot",level:3},{value:"Configuration des traps",id:"configuration-des-traps",level:3},{value:"Configurer les liens d&#39;\xe9v\xe8nement",id:"configurer-les-liens-d\xe9v\xe8nement",level:3},{value:"Administration",id:"administration",level:2},{value:"Configuration avanc\xe9e",id:"configuration-avanc\xe9e",level:3},{value:"Purge du cache",id:"purge-du-cache",level:3}],g={toc:d},v="wrapper";function k(e){var{components:t}=e,u=i(e,["components"]);return(0,r.kt)(v,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({},g,u),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Le module Centreon Dynamic Service Management (Centreon-DSM) est une extension pour g\xe9rer les alarmes avec un syst\xe8me de\njournaux d'\xe9v\xe9nements. Avec DSM, Centreon peut recevoir des \xe9v\xe9nements tels que des interruptions SNMP r\xe9sultant de la\nd\xe9tection d'un probl\xe8me et attribuer des \xe9v\xe9nements dynamiquement vers un emplacement d\xe9fini dans Centreon, comme une\nconsole d'\xe9v\xe9nements."),(0,r.kt)("p",null,"Une ressource a un nombre d\xe9fini d'emplacement (slot) sur lesquels des alertes seront attribu\xe9es (stock\xe9es). Tant que\ncet \xe9v\xe9nement ne sera pas pris en compte, par une action humaine, il restera visible dans l'interface Centreon. Quand\nl'\xe9v\xe9nement est acquitt\xe9, l'emplacement devient disponible pour de nouveaux \xe9v\xe9nements."),(0,r.kt)("p",null,"L'objectif de ce module est d'am\xe9liorer le syst\xe8me de base de gestion des trap SNMP de Centreon.  C'est un compl\xe9ment\nindispensable \xe0 la gestion des traps SNMP."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("h3",{id:"sur-un-serveur-central"},"Sur un serveur central"),(0,r.kt)("p",null,"Cette partie consiste \xe0 installer ",(0,r.kt)("strong",{parentName:"p"},"Centreon DSM")," sur un serveur central. Le serveur et le client Centreon DSM seront\ninstall\xe9s sur le serveur principal."),(0,r.kt)("p",null,"Ex\xe9cutez la commande :"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install centreon-dsm-server centreon-dsm-client\n"))),(0,r.kt)(s.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install centreon-dsm-server centreon-dsm-client\n"))),(0,r.kt)(s.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"apt install centreon-dsm-server centreon-dsm-client\n")))),(0,r.kt)("p",null,"Apr\xe8s avoir install\xe9 le rpm, vous devez terminer l'installation du module via l'interface Web. Rendez-vous dans le menu\n",(0,r.kt)("strong",{parentName:"p"},"Administration > Extensions > Manager")," et recherchez ",(0,r.kt)("strong",{parentName:"p"},"dsm"),". Cliquez sur ",(0,r.kt)("strong",{parentName:"p"},"Install selection"),".\nVotre module Centreon DSM est maintenant install\xe9."),(0,r.kt)("p",null,"Vous pouvez maintenant d\xe9marrer et activer le service sur votre serveur :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl enable dsmd\nsystemctl start dsmd\n")),(0,r.kt)("h3",{id:"sur-un-collecteur"},"Sur un collecteur"),(0,r.kt)("p",null,"Cette partie consiste \xe0 installer ",(0,r.kt)("strong",{parentName:"p"},"Centreon DSM")," sur un poller. Seul le client sera install\xe9."),(0,r.kt)("p",null,"Ex\xe9cutez la commande :"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install centreon-dsm-client\n"))),(0,r.kt)(s.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install centreon-dsm-client\n"))),(0,r.kt)(s.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"apt install centreon-dsm-client\n")))),(0,r.kt)("p",null,"Vous devez maintenant cr\xe9er un acc\xe8s du poller au serveur SGBD sur la base de donn\xe9es ",(0,r.kt)("strong",{parentName:"p"},"centreon_storage"),"."),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,"L'\xe9v\xe9nement doit \xeatre transmis au serveur via une interruption SNMP. Le trap SNMP est ainsi collect\xe9 par le service\n",(0,r.kt)("strong",{parentName:"p"},"snmptrapd"),". Si les param\xe8tres de r\xe9ception ne sont pas valides (communaut\xe9 autoris\xe9e), le trap SNMP est supprim\xe9."),(0,r.kt)("p",null,"Une fois le trap SNMP re\xe7u, il est envoy\xe9 au processus ",(0,r.kt)("strong",{parentName:"p"},"centreontrapdforward")," pour inscrire les informations dans\nun cache situ\xe9 dans le r\xe9pertoire ",(0,r.kt)("strong",{parentName:"p"},"/var/spool/centreontrapd/")," par d\xe9faut."),(0,r.kt)("p",null,"Le processus ",(0,r.kt)("strong",{parentName:"p"},"centreontrapd")," lit les informations re\xe7ues dans le cache et ex\xe9cute la ",(0,r.kt)("strong",{parentName:"p"},"special command")," li\xe9e au trap SNMP."),(0,r.kt)("p",null,"Cette commande sp\xe9ciale ex\xe9cute binaire ",(0,r.kt)("strong",{parentName:"p"},"dsmclient.pl")," avec des arguments. Ce client stockera l'\xe9v\xe8nement dans une\nfile d'attente que le processus ",(0,r.kt)("strong",{parentName:"p"},"dsmd")," lit toutes les 5 secondes."),(0,r.kt)("p",null,"Le processus ",(0,r.kt)("strong",{parentName:"p"},"dsmd.pl")," recherchera dans la base de donn\xe9es \"centreon\" les emplacements associ\xe9s \xe0 l'h\xf4te (slots). Si\naucun slot n'est configur\xe9, l'\xe9v\xe9nement est supprim\xe9. Sinon, le processus cherchera s'il y a au moins un emplacement\nlibre. Si au moins un emplacement est libre, il transmettra au moteur de surveillance des commandes externes pour\nmodifier l'\xe9tat de l'emplacement. Sinon, les donn\xe9es resteront en attend de la lib\xe9ration d'un slot."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h3",{id:"configurer-les-emplacements-slot"},"Configurer les emplacements (slot)"),(0,r.kt)("p",null,"Rendez-vous dans le menu ",(0,r.kt)("strong",{parentName:"p"},"Administration > Modules > Dynamic Services")," et cliquez sur ",(0,r.kt)("strong",{parentName:"p"},"Add")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(42023).Z,width:"770",height:"470"})),(0,r.kt)("p",null,"Veuillez suivre le tableau ci-dessous afin de comprendre le r\xf4le de tous les param\xe8tres:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Name")," : Nom du groupe d'emplacements."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description")," : Description du groupe."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Host Name")," : Nom de l'h\xf4te auquel seront ajout\xe9 les emplacements."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Service template based"),": Le mod\xe8le de service de base permet de cr\xe9er des emplacements de service sur l'h\xf4te. Ce\nmod\xe8le doit \xeatre 100% passif et une macro personnalis\xe9e doit \xeatre cr\xe9\xe9e dessus. La macro est nomm\xe9e ",(0,r.kt)("strong",{parentName:"li"},"ALARM_ID")," et\nla valeur par d\xe9faut doit \xeatre ",(0,r.kt)("strong",{parentName:"li"},"empty"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Number of slots"),": Nombre d'emplacements qui seront cr\xe9\xe9s."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Slot name prefix"),": Le pr\xe9fixe est utilis\xe9 pour donner le nom des emplacements. Le nom sera suivi d'un incr\xe9ment\nde 0 juqu'au nombre d'emplacements d\xe9sir\xe9s."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Check command"),": Cette commande de v\xe9rification est utilis\xe9e lorsque le service doit \xeatre forc\xe9 pour lib\xe9rer un\nslot. La commande doit envoyer un code retour correct."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Status"),": Le statut de la configuration.")),(0,r.kt)("p",null,"Un exemple de mod\xe8le de service passif est disponible ci-dessous:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(3505).Z,width:"815",height:"664"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"La macro ",(0,r.kt)("strong",{parentName:"p"},"ALARM_ID")," est obligatoire. La valeur par d\xe9faut ",(0,r.kt)("strong",{parentName:"p"},"empty")," est \xe9galement n\xe9cessaire.")),(0,r.kt)("p",null,"Lorsque vous validez le formulaire, Centreon cr\xe9e ou met \xe0 jour tous les emplacements. Si vous n'avez modifi\xe9 aucune\nvaleur, vous n'avez pas \xe0 effectuer d'autre action. Sinon, vous avez devez\n",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/monitoring/monitoring-servers/deploying-a-configuration"},"g\xe9n\xe9rer et exporter la configuration")),"."),(0,r.kt)("h3",{id:"configuration-des-traps"},"Configuration des traps"),(0,r.kt)("p",null,"La derni\xe8re \xe9tape consiste \xe0 configurer les traps que vous souhaitez rediriger vers vos emplacements."),(0,r.kt)("p",null,"Modifiez un trap SNMP que vous souhaitez rediriger vers les syst\xe8mes de emplacements. Rendez-vous dans le menu\n",(0,r.kt)("strong",{parentName:"p"},"Configuration > SNMP traps > SNMP traps")," et \xe9ditez un trap."),(0,r.kt)("p",null,"Pour rediriger les alarmes vers les emplacements, vous devez activer l'option ",(0,r.kt)("strong",{parentName:"p"},"Execute special command")," dans le\nformulaire et ajoutez cette commande dans le champ ",(0,r.kt)("strong",{parentName:"p"},"special command")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/usr/share/centreon/bin/dsmclient.pl -H @HOSTADDRESS@ -o 'Example output : $*' -i 'linkdown' -s 1 -t @TIME@\n")),(0,r.kt)("p",null,"Cette commande sera ex\xe9cut\xe9e \xe0 chaque r\xe9ception du trap pour rediriger l'\xe9v\xe8nement vers le processus dsmd."),(0,r.kt)("p",null,"Cette commande accepte certains param\xe8tres. Vous trouverez dans le tableau suivant la liste et la description de chaque\nparam\xe8tre :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"-H")," : Adresse ip ou nom d'h\xf4te vers lequel vous souhaitez rediriger l'alarme. Vous pouvez passer la valeur\n@HOSTADDRESS@ afin de garder le m\xeame h\xf4te ou vous pouvez utiliser ce que vous voulez afin de centraliser toutes les\nalarmes sur le m\xeame h\xf4te virtuel par exemple qui h\xe9berge toutes les alarmes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"-o")," : Message d'information que dsm mettra lorsque la commande soumettra le r\xe9sultat dans le bon emplacement. Ce\nmessage peut \xeatre construit avec toutes les valeurs $* et avec une cha\xeene sp\xe9cifique que vous passez en param\xe8tre."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"-i")," : Identifiant de l'alarme. L'ID d'alarme peut \xeatre construit avec la concat\xe9nation de certaines variables\ncomme \"$ 1- $ 4\". L'identifiant permet d'utiliser l'option d'acquittement automatique de l'alarme lorsque vous avez la\npossibilit\xe9 de cr\xe9er le m\xeame identifiant pendant le traitement d'ouverture et de fermeture de l'alarme."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"-s")," : Etat que vous souhaitez transmettre en param\xe8tre \xe0 l'alarme. Vous pouvez utiliser @STATUS@ afin d'utiliser\nla g\xe9n\xe9ration de statut h\xe9rit\xe9e du syst\xe8me de r\xe8gles correspondant."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"-t")," : Temps que vous souhaitez passer \xe0 dsm afin de conserver le temps r\xe9el de r\xe9ception du trap."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"-m")," : Liste des macros et de ses valeurs que vous souhaitez mettre \xe0 jour lors du traitement de l'alarme. Veuillez\nsuivre la syntaxe ci-dessous: macro1=valeur1|macro2=valeur2|macro3=valeur3 Cette fonction est utilis\xe9e pour mettre \xe0\njour certains param\xe8tres en direct sur la m\xe9moire centrale Centreon-Engine sans red\xe9marrage.")),(0,r.kt)("p",null,"Votre formulaire devrait maintenant \xeatre comme \xe7a :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(14361).Z,width:"1030",height:"646"})),(0,r.kt)("p",null,"Apr\xe8s avoir enregistr\xe9 le formulaire, veuillez g\xe9n\xe9rer la\n",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/monitoring/passive-monitoring/monitoring-with-snmp-traps#Applying-the-changes"},"d\xe9finition des traps SNMP")),"."),(0,r.kt)("h3",{id:"configurer-les-liens-d\xe9v\xe8nement"},"Configurer les liens d'\xe9v\xe8nement"),(0,r.kt)("p",null,"Une chose est diff\xe9rente par rapport au syst\xe8me Centreon Trap, c'est que vous ne devez pas lier directement le mod\xe8le de\nservice de l'emplacement au trap afin de ne pas recevoir x fois le trap (x repr\xe9sente ici le nombre d'emplacements)."),(0,r.kt)("p",null,"Vous devez lier les interruptions \xe0 un service actif de la ressource, par exemple le service ",(0,r.kt)("strong",{parentName:"p"},"Ping"),"."),(0,r.kt)("h2",{id:"administration"},"Administration"),(0,r.kt)("h3",{id:"configuration-avanc\xe9e"},"Configuration avanc\xe9e"),(0,r.kt)("p",null,"Il est possible de modifier la configuration par d\xe9faut du module en cr\xe9ant / \xe9ditant le fichier\n",(0,r.kt)("strong",{parentName:"p"},"/etc/centreon/centreon_dsmd.pm")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"%centreon_dsmd_config = (\n    # which user will send action\n    centreon_user => 'centreon',\n    # timeout to send command\n    submit_command_timeout => 5,\n    # custom macro used to keep alarm ID\n    macro_config => 'ALARM_ID',\n    # number of alarms retrieve from the cache for analysis\n    sql_fetch => 1000,\n    # interval in seconds to clean locks\n    clean_locks_time => 3600,\n    # duration in seconds to keep locks\n    clean_locks_keep_stored => 3600,\n);\n\n1;\n")),(0,r.kt)("h3",{id:"purge-du-cache"},"Purge du cache"),(0,r.kt)("p",null,"Toutes les actions effectu\xe9es par le moteur DSMD sont enregistr\xe9es dans la base de donn\xe9es\n",(0,r.kt)("strong",{parentName:"p"},"centreon_storage"),". Un cron est fourni pour supprimer les donn\xe9es bas\xe9es sur la r\xe9tention."),(0,r.kt)("p",null,"Pour modifier la p\xe9riode de r\xe9tention, par d\xe9faut ",(0,r.kt)("strong",{parentName:"p"},"180 jours"),", vous pouvez cr\xe9er / modifier le fichier\n",(0,r.kt)("strong",{parentName:"p"},"/etc/centreon/centreon_dsm_purge.pm")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"%centreon_dsm_purge_config = (\n    # period in days\n    history_time => 180,\n);\n\n1;\n")),(0,r.kt)("p",null,"Pour modifier l'heure de la t\xe2che cron, vous pouvez modifier le fichier ",(0,r.kt)("strong",{parentName:"p"},"/etc/cron.d/centreon-dsm")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"#####################################\n# Centreon DSM\n#\n\n30 22 * * * root /usr/share/centreon/www/modules/centreon-dsm//cron/centreon_dsm_purge.pl --config='/etc/centreon/conf.pm' --severity=error >> /var/log/centreon/centreon_dsm_purge.log 2>&1\n")))}k.isMDXComponent=!0},3505:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/form-passive-service-e5c48215ae0046f00fc69a85a7c68052.png"},42023:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/form-slot-608269a8170d39da1cf7f7dcbf4728cf.png"},14361:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/trap-form-2-f1eadb2826eff5675a8b420e15dc2b7b.png"}}]);