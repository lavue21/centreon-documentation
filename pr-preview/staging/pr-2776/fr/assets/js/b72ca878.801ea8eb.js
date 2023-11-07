"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[71980],{84799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>m});n(67294);var r=n(3905),a=n(51715),l=n(7626);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={id:"offline",title:"Installation offline"},i=void 0,u={unversionedId:"installation/offline",id:"version-23.10/installation/offline",title:"Installation offline",description:"Pour pouvoir installer Centreon sur des serveurs sans acc\xe8s internet, cr\xe9ez une copie locale du d\xe9p\xf4t Centreon sur un serveur avec acc\xe8s internet, puis faites pointer vos serveurs Centreon sans acc\xe8s internet sur celui-ci.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/installation/offline.md",sourceDirName:"installation",slug:"/installation/offline",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/installation/offline",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/installation/offline.md",tags:[],version:"23.10",lastUpdatedAt:1699375250,formattedLastUpdatedAt:"7 nov. 2023",frontMatter:{id:"offline",title:"Installation offline"},sidebar:"version-23.10/docs",previous:{title:"Configuration avanc\xe9e",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/monitoring/monitoring-servers/advanced-configuration"},next:{title:"S\xe9curisez votre plateforme",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/administration/secure-platform"}},d={},m=[{value:"Cr\xe9er une copie locale du d\xe9p\xf4t Centreon",id:"cr\xe9er-une-copie-locale-du-d\xe9p\xf4t-centreon",level:2},{value:"Garder votre d\xe9p\xf4t local \xe0 jour",id:"garder-votre-d\xe9p\xf4t-local-\xe0-jour",level:2}],g={toc:m},k="wrapper";function f(e){var{components:t}=e,n=p(e,["components"]);return(0,r.kt)(k,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Pour pouvoir installer Centreon sur des serveurs sans acc\xe8s internet, cr\xe9ez une copie locale du d\xe9p\xf4t Centreon sur un serveur avec acc\xe8s internet, puis faites pointer vos serveurs Centreon sans acc\xe8s internet sur celui-ci."),(0,r.kt)("h2",{id:"cr\xe9er-une-copie-locale-du-d\xe9p\xf4t-centreon"},"Cr\xe9er une copie locale du d\xe9p\xf4t Centreon"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installez le d\xe9p\xf4t sur votre serveur miroir.")),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/23.04/el8/centreon-23.04.repo\ndnf clean all --enablerepo=*\ndnf update\n")),(0,r.kt)("p",null,"Puis r\xe9cup\xe9rez la cl\xe9 gpg pour les paquets :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"rpm --import https://yum-gpg.centreon.com/RPM-GPG-KEY-CES\n"))),(0,r.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/23.04/el9/centreon-23.04.repo\ndnf clean all --enablerepo=*\ndnf update\n")),(0,r.kt)("p",null,"Puis r\xe9cup\xe9rez la cl\xe9 gpg pour les paquets :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"rpm --import https://yum-gpg.centreon.com/RPM-GPG-KEY-CES\n"))),(0,r.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,r.kt)("p",null,"Pour installer le d\xe9p\xf4t Centreon, ex\xe9cutez la commande suivante :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'echo "deb https://packages.centreon.com/apt-standard-23.04-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon.list\necho "deb https://packages.centreon.com/apt-plugins-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon-plugins.list\n')),(0,r.kt)("p",null,"Puis importez la cl\xe9 du d\xe9p\xf4t :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wget -O- https://apt-key.centreon.com | gpg --dearmor | tee /etc/apt/trusted.gpg.d/centreon.gpg > /dev/null 2>&1\napt update\n")))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Cr\xe9ez un r\xe9pertoire pour le d\xe9p\xf4t local :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p /var/www/html/repos/centreon\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Installez les paquets n\xe9cessaires :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yum install yum-utils createrepo httpd\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Synchronisez les d\xe9p\xf4ts :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"reposync -p /var/www/html/repos/centreon/ -r centreon-stable-noarch\nreposync -p /var/www/html/repos/centreon/ -r centreon-stable\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Cr\xe9ez le d\xe9p\xf4t :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"createrepo /var/www/html/repos/centreon/\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"D\xe9marrez le serveur web :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"service httpd start\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sur votre serveur Centreon, \xe9ditez le fichier suivant :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"vi /etc/yum.repos.d/centreon.repo\n")),(0,r.kt)("p",{parentName:"li"},"Ajoutez les lignes suivantes :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"[centreon]\nname=centreon\nbaseurl=http://<mirror_ip_address>/repos/centreon\ngpgcheck=1\nenabled=1\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Remplacez ",(0,r.kt)("inlineCode",{parentName:"p"},"<mirror_ip_address>")," par la v\xe9ritable adresse de votre d\xe9p\xf4t local.")))),(0,r.kt)("h2",{id:"garder-votre-d\xe9p\xf4t-local-\xe0-jour"},"Garder votre d\xe9p\xf4t local \xe0 jour"),(0,r.kt)("p",null,"Afin de synchroniser r\xe9guli\xe8rement votre miroir avec le d\xe9p\xf4t Centreon, cr\xe9ez un fichier cron :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd  /var/spool/cron\ncrontab -e\n")),(0,r.kt)("p",null,"Les commandes suivantes programmeront une synchronisation tous les jours \xe0 2h pour le d\xe9p\xf4t ",(0,r.kt)("strong",{parentName:"p"},"centreon-stable-noarch")," et tous les jours \xe0 3h pour le d\xe9p\xf4t ",(0,r.kt)("strong",{parentName:"p"},"centreon-stable"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"* 2 * * * reposync -p /var/www/html/repos/centreon/ -r centreon-stable-noarch\n* 3 * * * reposync -p /var/www/html/repos/centreon/ -r centreon-stable\n")))}f.isMDXComponent=!0}}]);