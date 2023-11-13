"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[89697],{22895:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>m});n(67294);var a=n(3905),r=n(51715),l=n(7626);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={id:"upgrade-from-22-04",title:"Mont\xe9e de version depuis Centreon 22.04"},u=void 0,c={unversionedId:"upgrade/upgrade-from-22-04",id:"version-23.10/upgrade/upgrade-from-22-04",title:"Mont\xe9e de version depuis Centreon 22.04",description:"Ce chapitre d\xe9crit la proc\xe9dure de mont\xe9e de version de votre plateforme",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/upgrade/upgrade-from-22-04.md",sourceDirName:"upgrade",slug:"/upgrade/upgrade-from-22-04",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/upgrade/upgrade-from-22-04",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/upgrade/upgrade-from-22-04.md",tags:[],version:"23.10",lastUpdatedAt:1699633150,formattedLastUpdatedAt:"10 nov. 2023",frontMatter:{id:"upgrade-from-22-04",title:"Mont\xe9e de version depuis Centreon 22.04"},sidebar:"version-23.10/docs",previous:{title:"Mont\xe9e de version depuis Centreon 22.10",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/upgrade/upgrade-from-22-10"},next:{title:"Mont\xe9e de version depuis Centreon 21.10",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/upgrade/upgrade-from-21-10"}},d={},m=[{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Sauvegarde",id:"sauvegarde",level:3},{value:"Mont\xe9e de version du serveur Centreon Central",id:"mont\xe9e-de-version-du-serveur-centreon-central",level:2},{value:"Installer les nouveaux d\xe9p\xf4ts",id:"installer-les-nouveaux-d\xe9p\xf4ts",level:3},{value:"Mont\xe9e de version de PHP",id:"mont\xe9e-de-version-de-php",level:3},{value:"Mont\xe9e de version de la solution Centreon",id:"mont\xe9e-de-version-de-la-solution-centreon",level:3},{value:"Mettre \xe0 jour une configuration Apache personnalis\xe9e",id:"mettre-\xe0-jour-une-configuration-apache-personnalis\xe9e",level:3},{value:"Configuration Apache personnalis\xe9e : activer la compression du texte",id:"configuration-apache-personnalis\xe9e--activer-la-compression-du-texte",level:4},{value:"Finalisation de la mise \xe0 jour",id:"finalisation-de-la-mise-\xe0-jour",level:3},{value:"Actions post mont\xe9e de version",id:"actions-post-mont\xe9e-de-version",level:3},{value:"Mont\xe9e de version des Remote Servers",id:"mont\xe9e-de-version-des-remote-servers",level:2},{value:"Mont\xe9e de version des collecteurs",id:"mont\xe9e-de-version-des-collecteurs",level:2},{value:"Mise \xe0 jour des d\xe9p\xf4ts",id:"mise-\xe0-jour-des-d\xe9p\xf4ts",level:3},{value:"Mont\xe9e de version de la solution Centreon",id:"mont\xe9e-de-version-de-la-solution-centreon-1",level:3}],k={toc:m},v="wrapper";function g(e){var{components:t}=e,i=p(e,["components"]);return(0,a.kt)(v,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){s(e,t,n[t])}))}return e}({},k,i),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Ce chapitre d\xe9crit la proc\xe9dure de mont\xe9e de version de votre plateforme\nCentreon depuis la version 22.04 vers la version 23.04."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Lorsque vous effectuez la mont\xe9e de version de votre serveur central, assurez-vous d'\xe9galement mettre \xe0 jour tous vos serveurs distants et vos collecteurs. Dans votre architecture, tous les serveurs doivent avoir la m\xeame version de Centreon. De plus, tous les serveurs doivent utiliser la m\xeame ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/developer/developer-broker-bbdo#changement-de-version-de-bbdo"},"version du protocole BBDO"),".")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Si vous souhaitez migrer votre serveur Centreon vers Oracle Linux\n/ RHEL 8, vous devez suivre la ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/migrate/introduction"},"proc\xe9dure de migration"),".")),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("h3",{id:"sauvegarde"},"Sauvegarde"),(0,a.kt)("p",null,"Avant toute chose, il est pr\xe9f\xe9rable de s\u2019assurer de l\u2019\xe9tat et de la consistance\ndes sauvegardes de l\u2019ensemble des serveurs centraux de votre plate-forme :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Serveur Centreon Central,"),(0,a.kt)("li",{parentName:"ul"},"Serveur de gestion de base de donn\xe9es.")),(0,a.kt)("h2",{id:"mont\xe9e-de-version-du-serveur-centreon-central"},"Mont\xe9e de version du serveur Centreon Central"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Lorsque vous lancez une commande, v\xe9rifiez les messagez obtenus. En cas de message d'erreur, arr\xeatez la proc\xe9dure et d\xe9pannez les probl\xe8mes.")),(0,a.kt)("h3",{id:"installer-les-nouveaux-d\xe9p\xf4ts"},"Installer les nouveaux d\xe9p\xf4ts"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Mettez \xe0 jour votre Centreon 22.04 jusqu'\xe0 la derni\xe8re version mineure.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Supprimez le fichier ",(0,a.kt)("strong",{parentName:"p"},"centreon.repo")," :"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"rm /etc/yum.repos.d/centreon.repo\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Installez le nouveau d\xe9p\xf4t :"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/23.04/el8/centreon-23.04.repo\n"))),(0,a.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'echo "deb https://packages.centreon.com/apt-standard-23.04-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon.list\necho "deb https://packages.centreon.com/apt-plugins-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon-plugins.list\n')),(0,a.kt)("p",null,"Ensuite, importez la cl\xe9 du d\xe9p\xf4t :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"wget -O- https://apt-key.centreon.com | gpg --dearmor | tee /etc/apt/trusted.gpg.d/centreon.gpg > /dev/null 2>&1\napt update\n")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Si vous avez une ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/administration/licenses#types-de-licences"},"licence offline"),", supprimez \xe9galement l'ancien d\xe9p\xf4t des connecteurs de supervision, puis installez le nouveau d\xe9p\xf4t."),(0,a.kt)("p",{parentName:"blockquote"},"Si vous avez une \xe9dition Business, faites de m\xeame avec le d\xe9p\xf4t Business."),(0,a.kt)("p",{parentName:"blockquote"},"Vous pouvez trouver l'adresse des d\xe9p\xf4ts sur le ",(0,a.kt)("a",{parentName:"p",href:"https://support.centreon.com/hc/fr/categories/10341239833105-D%C3%A9p%C3%B4ts"},"portail support Centreon"),".")),(0,a.kt)("h3",{id:"mont\xe9e-de-version-de-php"},"Mont\xe9e de version de PHP"),(0,a.kt)("p",null,"Centreon 23.04 utilise PHP en version 8.1."),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"RHEL 8",label:"RHEL 8",mdxType:"TabItem"},(0,a.kt)("p",null,"Vous devez changer le flux PHP de la version 8.0 \xe0 8.1 en ex\xe9cutant les commandes suivantes et en r\xe9pondant ",(0,a.kt)("strong",{parentName:"p"},"y"),"\npour confirmer :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dnf module reset php\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dnf module install php:remi-8.1\n"))),(0,a.kt)(l.Z,{value:"Alma / Oracle Linux 8",label:"Alma / Oracle Linux 8",mdxType:"TabItem"},(0,a.kt)("p",null,"Vous devez changer le flux PHP de la version 8.0 \xe0 8.1 en ex\xe9cutant les commandes suivantes et en r\xe9pondant ",(0,a.kt)("strong",{parentName:"p"},"y"),"\npour confirmer :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dnf module reset php\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dnf module install php:remi-8.1\n"))),(0,a.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl stop php8.0-fpm\n")))),(0,a.kt)("h3",{id:"mont\xe9e-de-version-de-la-solution-centreon"},"Mont\xe9e de version de la solution Centreon"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Assurez-vous que tous les utilisateurs sont d\xe9connect\xe9s avant de commencer\nla proc\xe9dure de mise \xe0 jour.")),(0,a.kt)("p",null,"Si vous avez des extensions Business install\xe9es, mettez \xe0 jour le d\xe9p\xf4t business en 23.04.\nRendez-vous sur le ",(0,a.kt)("a",{parentName:"p",href:"https://support.centreon.com/hc/fr/categories/10341239833105-D%C3%A9p%C3%B4ts"},"portail du support")," pour en r\xe9cup\xe9rer l'adresse."),(0,a.kt)("p",null,"Si votre OS est Debian 11 et que vous avez une configuration Apache personnalis\xe9e, faites une sauvegarde de votre fichier de configuration (",(0,a.kt)("strong",{parentName:"p"},"/etc/apache2/sites-available/centreon.conf"),")."),(0,a.kt)("p",null,"Arr\xeatez le processus Centreon Broker :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl stop cbd\n")),(0,a.kt)("p",null,"Supprimez les fichiers de r\xe9tention pr\xe9sents :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"rm /var/lib/centreon-broker/* -f\n")),(0,a.kt)("p",null,"Videz le cache :"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dnf clean all --enablerepo=*\n"))),(0,a.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"apt clean all\napt update\n")))),(0,a.kt)("p",null,"Mettez \xe0 jour l'ensemble des composants :"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dnf update centreon\\* php-pecl-gnupg\n"))),(0,a.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"apt upgrade centreon\n")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Acceptez les nouvelles cl\xe9s GPG des d\xe9p\xf4ts si n\xe9cessaire.")),(0,a.kt)("h3",{id:"mettre-\xe0-jour-une-configuration-apache-personnalis\xe9e"},"Mettre \xe0 jour une configuration Apache personnalis\xe9e"),(0,a.kt)("p",null,"Cette section s'applique uniquement si vous avez personnalis\xe9 votre configuration Apache. "),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,a.kt)("p",null,"Lors de la mont\xe9e de version, le fichier de configuration Apache n'est pas mis \xe0 jour automatiquement : le nouveau fichier de configuration amen\xe9 par le rpm ne remplace pas l'ancien. Vous devez reporter les changements manuellement dans votre fichier de configuration personnalis\xe9e."),(0,a.kt)("p",null,"Faites un diff entre l'ancien et le nouveau fichier de configuration Apache :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"diff -u /etc/httpd/conf.d/10-centreon.conf /etc/httpd/conf.d/10-centreon.conf.rpmnew\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"10-centreon.conf")," (post mont\xe9e de version) : ce fichier contient la configuration personnalis\xe9e. Il ne contient pas les nouveaut\xe9s apport\xe9es par la mont\xe9e de version."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"10-centreon.conf.rpmnew")," (post mont\xe9e de version) : ce fichier est fourni par le rpm; il ne contient pas la configuration personnalis\xe9e.")),(0,a.kt)("p",null,"Pour chaque diff\xe9rence entre les fichiers, \xe9valuez si celle-ci doit \xeatre report\xe9e du fichier ",(0,a.kt)("strong",{parentName:"p"},"10-centreon.conf.rpmnew")," au fichier ",(0,a.kt)("strong",{parentName:"p"},"10-centreon.conf"),"."),(0,a.kt)("p",null,"V\xe9rifiez qu'Apache est bien configur\xe9, en ex\xe9cutant la commande suivante :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"apachectl configtest\n")),(0,a.kt)("p",null,"Le r\xe9sultat attendu est le suivant :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Syntax OK\n")),(0,a.kt)("p",null,"Red\xe9marrez Apache pour appliquer les modifications :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart php-fpm httpd\n")),(0,a.kt)("p",null,"Puis v\xe9rifiez le statut :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl status httpd\n")),(0,a.kt)("p",null,"Si tout est correct, vous devriez avoir quelque chose comme :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'\u25cf httpd.service - The Apache HTTP Server\n   Loaded: loaded (/usr/lib/systemd/system/httpd.service; enabled; vendor preset: disabled)\n  Drop-In: /usr/lib/systemd/system/httpd.service.d\n           \u2514\u2500php-fpm.conf\n   Active: active (running) since Tue 2020-10-27 12:49:42 GMT; 2h 35min ago\n     Docs: man:httpd.service(8)\n Main PID: 1483 (httpd)\n   Status: "Total requests: 446; Idle/Busy workers 100/0;Requests/sec: 0.0479; Bytes served/sec: 443 B/sec"\n    Tasks: 278 (limit: 5032)\n   Memory: 39.6M\n   CGroup: /system.slice/httpd.service\n           \u251c\u25001483 /usr/sbin/httpd -DFOREGROUND\n           \u251c\u25001484 /usr/sbin/httpd -DFOREGROUND\n           \u251c\u25001485 /usr/sbin/httpd -DFOREGROUND\n           \u251c\u25001486 /usr/sbin/httpd -DFOREGROUND\n           \u251c\u25001487 /usr/sbin/httpd -DFOREGROUND\n           \u2514\u25001887 /usr/sbin/httpd -DFOREGROUND\n\n'))),(0,a.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,a.kt)("p",null,"Utilisez la sauvegarde que vous avez effectu\xe9e \xe0 l'\xe9tape pr\xe9c\xe9dente pour reporter vos personnalisations dans le fichier ",(0,a.kt)("strong",{parentName:"p"},"/etc/apache2/sites-available/centreon.conf"),"."),(0,a.kt)("p",null,"V\xe9rifiez qu'Apache est bien configur\xe9, en ex\xe9cutant la commande suivante :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"apache2ctl configtest\n")),(0,a.kt)("p",null,"Le r\xe9sultat attendu est le suivant :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Syntax OK\n")),(0,a.kt)("p",null,"Red\xe9marrez Apache pour appliquer les modifications :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart php8.1-fpm apache2\n")),(0,a.kt)("p",null,"Puis v\xe9rifiez le statut :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl status apache2\n")),(0,a.kt)("p",null,"Si tout est correct, vous devriez avoir quelque chose comme :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\u25cf apache2.service - The Apache HTTP Server\n    Loaded: loaded (/lib/systemd/system/apache2.service; enabled; vendor pres>\n     Active: active (running) since Tue 2022-08-09 05:01:36 UTC; 3h 56min ago\n       Docs: https://httpd.apache.org/docs/2.4/\n   Main PID: 518 (apache2)\n      Tasks: 11 (limit: 2356)\n     Memory: 18.1M\n        CPU: 1.491s\n     CGroup: /system.slice/apache2.service\n             \u251c\u2500 518 /usr/sbin/apache2 -k start\n             \u251c\u25001252 /usr/sbin/apache2 -k start\n             \u251c\u25001254 /usr/sbin/apache2 -k start\n             \u251c\u25001472 /usr/sbin/apache2 -k start\n             \u251c\u25003857 /usr/sbin/apache2 -k start\n             \u251c\u25003858 /usr/sbin/apache2 -k start\n             \u251c\u25003859 /usr/sbin/apache2 -k start\n             \u251c\u25003860 /usr/sbin/apache2 -k start\n             \u251c\u25003876 /usr/sbin/apache2 -k start\n             \u251c\u25006261 /usr/sbin/apache2 -k start\n             \u2514\u25006509 /usr/sbin/apache2 -k start\n")))),(0,a.kt)("h4",{id:"configuration-apache-personnalis\xe9e--activer-la-compression-du-texte"},"Configuration Apache personnalis\xe9e : activer la compression du texte"),(0,a.kt)("p",null,"Pour am\xe9liorer le temps de chargement des pages, vous pouvez activer la compression du texte sur le serveur Apache. Le paquet ",(0,a.kt)("strong",{parentName:"p"},"brotli")," est n\xe9cessaire. Cette configuration est optionnelle mais vous fournira une meilleure exp\xe9rience utilisateur."),(0,a.kt)("p",null,"Ajoutez le code suivant \xe0 votre fichier de configuration Apache, dans les \xe9l\xe9ments ",(0,a.kt)("inlineCode",{parentName:"p"},"<VirtualHost *:80>")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"<VirtualHost *:443>")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"<IfModule mod_brotli.c>\n    AddOutputFilterByType BROTLI_COMPRESS text/html text/plain text/xml text/css text/javascript application/javascript application/json\n</IfModule>\nAddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json\n")),(0,a.kt)("h3",{id:"finalisation-de-la-mise-\xe0-jour"},"Finalisation de la mise \xe0 jour"),(0,a.kt)("p",null,"Avant de d\xe9marrer la mont\xe9e de version via l'interface web, rechargez le serveur Apache avec les commandes suivantes :"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl reload php-fpm httpd\n"))),(0,a.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"apt autoremove\nsystemctl daemon-reload\nsystemctl stop php8.0-fpm.service\nsystemctl enable php8.1-fpm\nsystemctl start php8.1-fpm\nsystemctl restart apache2\n")))),(0,a.kt)("p",null,"Vous devez ensuite finaliser le processus de mise \xe0 jour :"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Avec l'assistant d'interface",label:"Avec l'assistant d'interface",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Connectez-vous \xe0 l'interface web Centreon, l'assistant d'interface s'affiche. Cliquez sur ",(0,a.kt)("strong",{parentName:"p"},"Next")," :"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"image",src:n(17068).Z,width:"650",height:"300"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Cliquez sur ",(0,a.kt)("strong",{parentName:"p"},"Next")," :"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"image",src:n(63986).Z,width:"650",height:"300"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"La note de version pr\xe9sente les principaux changements, cliquez sur ",(0,a.kt)("strong",{parentName:"p"},"Next")," :"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"image",src:n(88358).Z,width:"650",height:"300"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Le processus r\xe9alise les diff\xe9rentes mises \xe0 jour, cliquez sur ",(0,a.kt)("strong",{parentName:"p"},"Next")," :"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"image",src:n(83376).Z,width:"650",height:"300"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Votre serveur Centreon est maintenant \xe0 jour, cliquez sur ",(0,a.kt)("strong",{parentName:"p"},"Finish")," pour\nacc\xe9der \xe0 la page de connexion :"),(0,a.kt)("p",{parentName:"li"},"  ",(0,a.kt)("img",{alt:"image",src:n(81229).Z,width:"650",height:"300"}),"\n")))),(0,a.kt)(l.Z,{value:"Avec une API d\xe9di\xe9e",label:"Avec une API d\xe9di\xe9e",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Connectez-vous au serveur Central via le terminal pour poursuivre le processus de\nmise \xe0 jour."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"Vous avez besoin d'un token d'authentification pour acc\xe9der \xe0 l'endpoint de l'API. Suivez la proc\xe9dure ci-dessous pour obtenir un token.")),(0,a.kt)("p",{parentName:"li"},"  Dans notre cas, nous avons la configuration d\xe9crite ci-dessous (vous devez adapter la proc\xe9dure \xe0 votre configuration)."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"adresse : 10.25.XX.XX"),(0,a.kt)("li",{parentName:"ul"},"port : 80"),(0,a.kt)("li",{parentName:"ul"},"version : 23.04"),(0,a.kt)("li",{parentName:"ul"},"identifiant : Admin"),(0,a.kt)("li",{parentName:"ul"},"mot de passe : xxxxx"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Entrez la requ\xeate suivante :"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'10.25.XX.XX:80/centreon/api/v23.04/login\' \\\n--header \'Content-Type: application/json\' \\\n--header \'Accept: application/json\' \\\n--data \'{\n  "security": {\n    "credentials": {\n      "login": "Admin",\n      "password": "xxxxx"\n    }\n  }\n}\'\n')),(0,a.kt)("p",{parentName:"li"},"Voici \xe0 quoi ressemble le r\xe9sultat :"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'{"contact":{"id":1,"name":"Admin Centreon","alias":"admin","email":"admin@localhost",  "is_admin":true},"security":{"token":"hwwE7w/ukiiMce2lwhNi2mcFxLNYPhB9bYSKVP3xeTRUeN8FuGQms3RhpLreDX/S"}}\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"R\xe9cup\xe9rez le num\xe9ro du token pour l'utiliser lors de la prochaine requ\xeate.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Entrez ensuite cette requ\xeate :"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request PATCH 'http://10.25.XX.XX:80/centreon/api/latest/platform/updates' \\\n--header 'X-AUTH-TOKEN: hwwE7w/ukiiMce2lwhNi2mcFxLNYPhB9bYSKVP3xeTRUeN8FuGQms3RhpLreDX/S' \\\n--header 'Content-Type: application/json' \\\n--data '{\n    \"components\": [\n        {\n            \"name\": \"centreon-web\"\n        }\n    ]\n}'\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Cette requ\xeate ne renvoie aucun r\xe9sultat. Pour v\xe9rifier que la mise \xe0 jour a bien \xe9t\xe9 appliqu\xe9e, consultez le num\xe9ro de version affich\xe9 sur la page de connexion \xe0 l'interface web Centreon."))))),(0,a.kt)("p",null,"Enfin, red\xe9marrez Broker, Engine et Gorgone sur le serveur Central en ex\xe9cutant la commande suivante :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart cbd centengine gorgoned\n")),(0,a.kt)("p",null,"Mettez \xe0 jour les permissions sur les fichiers de configurations de centreon-broker."),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"usermod -a -G centreon-broker apache\nusermod -a -G apache centreon-broker\n"))),(0,a.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"usermod -a -G centreon-broker www-data\nusermod -a -G www-data centreon-broker\n")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"La pr\xe9sentation de l'interface ayant \xe9t\xe9 modifi\xe9e dans la version 22.10, vous devez vider le cache de votre navigateur pour afficher le nouveau th\xe8me.")),(0,a.kt)("p",null,"Si le module Centreon BAM est install\xe9, r\xe9f\xe9rez-vous \xe0 la ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/service-mapping/upgrade"},"documentation\nassoci\xe9e")," pour le mettre \xe0 jour."),(0,a.kt)("h3",{id:"actions-post-mont\xe9e-de-version"},"Actions post mont\xe9e de version"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Mont\xe9e de version des extensions :"),(0,a.kt)("p",{parentName:"li"},"Depuis le menu ",(0,a.kt)("strong",{parentName:"p"},"Administration > Extensions > Gestionnaire"),", mettez \xe0 jour\ntoutes les extensions, en commen\xe7ant par les suivantes :"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"License Manager,")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Gestionnaire de connecteurs de supervision,")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Auto Discovery."),(0,a.kt)("p",{parentName:"li"},"Vous pouvez alors mettre \xe0 jour toutes les autres extensions commerciales.")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/monitoring/monitoring-servers/deploying-a-configuration"},"D\xe9ployez la configuration"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Red\xe9marrez les processus Centreon :"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart cbd centengine centreontrapd gorgoned\n")))),(0,a.kt)("h2",{id:"mont\xe9e-de-version-des-remote-servers"},"Mont\xe9e de version des Remote Servers"),(0,a.kt)("p",null,"Cette proc\xe9dure est identique \xe0 la mont\xe9e de version d'un serveur Centreon\nCentral."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"En fin de mise \xe0 jour, la configuration doit \xeatre d\xe9ploy\xe9e depuis le serveur Central.")),(0,a.kt)("h2",{id:"mont\xe9e-de-version-des-collecteurs"},"Mont\xe9e de version des collecteurs"),(0,a.kt)("h3",{id:"mise-\xe0-jour-des-d\xe9p\xf4ts"},"Mise \xe0 jour des d\xe9p\xf4ts"),(0,a.kt)("p",null,"Ex\xe9cutez la commande suivante :"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/23.04/el8/centreon-23.04.repo\n"))),(0,a.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'echo "deb https://packages.centreon.com/apt-standard-23.04-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon.list\napt update\n')))),(0,a.kt)("h3",{id:"mont\xe9e-de-version-de-la-solution-centreon-1"},"Mont\xe9e de version de la solution Centreon"),(0,a.kt)("p",null,"Videz le cache :"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dnf clean all --enablerepo=*\n"))),(0,a.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"apt clean all\napt update\n")))),(0,a.kt)("p",null,"Mettez \xe0 jour l'ensemble des composants :"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dnf update centreon\\*\n"))),(0,a.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"apt upgrade centreon-poller\n")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Acceptez les nouvelles cl\xe9s GPG des d\xe9p\xf4ts si n\xe9cessaire.")),(0,a.kt)("p",null,"Red\xe9marrez ",(0,a.kt)("strong",{parentName:"p"},"centreon")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart centreon\n")))}g.isMDXComponent=!0},17068:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/web_update_1-229784d5ed7986045c49b65b99ce38cd.png"},63986:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/web_update_2-f12be23b17ba9e83853cbdbaaea65402.png"},88358:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/web_update_3-d505e49a3b4f60dfd887ff45ddbf006b.png"},83376:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/web_update_4-97901eb976096c68fb2bd9d37c4de9bc.png"},81229:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/web_update_5-01f8c54614c006d7c1bf9e03799c1b81.png"}}]);