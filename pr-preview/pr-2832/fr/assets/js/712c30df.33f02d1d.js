"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[69731],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,v=p["".concat(c,".").concat(m)]||p[m]||d[m]||s;return r?n.createElement(v,l(l({ref:t},i),{},{components:r})):n.createElement(v,l({ref:t},i))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<s;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7626:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(86010);const s="tabItem_Ymn6";function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function o({children:e,hidden:t,className:r}){return n.createElement("div",l({role:"tabpanel",className:(0,a.Z)(s,r)},{hidden:t}),e)}},67709:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(67294),a=r(86010),s=r(90980),l=r(35715),o=r(8854),c=r(8241);const u="tabList__CuJ",i="tabItem_LNqP";function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}function p(e){var t;const{lazy:r,block:s,defaultValue:p,values:m,groupId:v,className:g}=e,k=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),A=null!=m?m:k.map((({props:{value:e,label:t,attributes:r}})=>({value:e,label:t,attributes:r}))),b=(0,l.l)(A,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var N;const _=null===p?p:null!==(N=null!=p?p:null===(t=k.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==N?N:k[0].props.value;if(null!==_&&!A.some((e=>e.value===_)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${_}" but none of its children has the corresponding value. Available values are: ${A.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:E}=(0,o.U)(),[h,y]=(0,n.useState)(_),T=[],{blockElementScrollPositionUntilNextRender:S}=(0,c.o5)();if(null!=v){const e=f[v];null!=e&&e!==h&&A.some((t=>t.value===e))&&y(e)}const R=e=>{const t=e.currentTarget,r=T.indexOf(t),n=A[r].value;n!==h&&(S(t),y(n),null!=v&&E(v,String(n)))},M=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;var r;t=null!==(r=T[n])&&void 0!==r?r:T[0];break}case"ArrowLeft":{const r=T.indexOf(e.currentTarget)-1;var n;t=null!==(n=T[r])&&void 0!==n?n:T[T.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:(0,a.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":s},g)},A.map((({value:e,label:t,attributes:r})=>n.createElement("li",d({role:"tab",tabIndex:h===e?0:-1,"aria-selected":h===e,key:e,ref:e=>T.push(e),onKeyDown:M,onFocus:R,onClick:R},r,{className:(0,a.Z)("tabs__item",i,null==r?void 0:r.className,{"tabs__item--active":h===e})}),null!=t?t:e)))),r?(0,n.cloneElement)(k.filter((e=>e.props.value===h))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}function m(e){const t=(0,s.Z)();return n.createElement(p,d({key:String(t)},e))}},58316:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>v,frontMatter:()=>c,metadata:()=>i,toc:()=>p});r(67294);var n=r(3905),a=r(67709),s=r(7626);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const c={id:"upgrade-centreon-ha-from-21-10",title:"Mont\xe9e de version de Centreon HA depuis Centreon 21.10"},u=void 0,i={unversionedId:"upgrade/centreon-ha/upgrade-centreon-ha-from-21-10",id:"version-23.10/upgrade/centreon-ha/upgrade-centreon-ha-from-21-10",title:"Mont\xe9e de version de Centreon HA depuis Centreon 21.10",description:"Ce chapitre d\xe9crit comment mettre \xe0 niveau votre plate-forme Centreon HA de la version 21.10 vers la version 23.04.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/upgrade/centreon-ha/upgrade-from-21-10.md",sourceDirName:"upgrade/centreon-ha",slug:"/upgrade/centreon-ha/upgrade-centreon-ha-from-21-10",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/docs/upgrade/centreon-ha/upgrade-centreon-ha-from-21-10",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/next/i18n/fr/docusaurus-plugin-content-docs/version-23.10/upgrade/centreon-ha/upgrade-from-21-10.md",tags:[],version:"23.10",lastUpdatedAt:1700565273,formattedLastUpdatedAt:"21 nov. 2023",frontMatter:{id:"upgrade-centreon-ha-from-21-10",title:"Mont\xe9e de version de Centreon HA depuis Centreon 21.10"},sidebar:"version-23.10/docs",previous:{title:"Mont\xe9e de version de Centreon HA depuis Centreon 21.04",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/docs/upgrade/centreon-ha/upgrade-centreon-ha-from-21-04"},next:{title:"Mont\xe9e de version de Centreon HA depuis Centreon 22.04",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/docs/upgrade/centreon-ha/upgrade-centreon-ha-from-22-04"}},d={},p=[{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Suspendre la gestion des ressources du cluster",id:"suspendre-la-gestion-des-ressources-du-cluster",level:3},{value:"Sauvegarde",id:"sauvegarde",level:3},{value:"Mettre \xe0 jour la cl\xe9 de signature RPM",id:"mettre-\xe0-jour-la-cl\xe9-de-signature-rpm",level:3},{value:"Processus de mise \xe0 jour",id:"processus-de-mise-\xe0-jour",level:2},{value:"Suppression des crons",id:"suppression-des-crons",level:3},{value:"R\xe9initialiser les autorisations de la ressource centreon_central_sync",id:"r\xe9initialiser-les-autorisations-de-la-ressource-centreon_central_sync",level:3},{value:"Ugprade du cluster",id:"ugprade-du-cluster",level:2},{value:"Mode maintenance et sauvegarde",id:"mode-maintenance-et-sauvegarde",level:3},{value:"Supprimer les ressources",id:"supprimer-les-ressources",level:3},{value:"Reconfigure MariaDB",id:"reconfigure-mariadb",level:3},{value:"Lancer la r\xe9plication GTID",id:"lancer-la-r\xe9plication-gtid",level:3},{value:"Red\xe9marrer les processus de Centreon",id:"red\xe9marrer-les-processus-de-centreon",level:3},{value:"Nettoyer les fichiers de m\xe9moire de broker",id:"nettoyer-les-fichiers-de-m\xe9moire-de-broker",level:3},{value:"Recr\xe9er les ressources du cluster",id:"recr\xe9er-les-ressources-du-cluster",level:3},{value:"PHP ressource",id:"php-ressource",level:4},{value:"Ressource RRD broker",id:"ressource-rrd-broker",level:4},{value:"Recr\xe9er le groupe de ressources <em>centreon</em>",id:"recr\xe9er-le-groupe-de-ressources-centreon",level:4},{value:"Recr\xe9er les contraintes",id:"recr\xe9er-les-contraintes",level:4},{value:"Reprise de la gestion des ressources du cluster",id:"reprise-de-la-gestion-des-ressources-du-cluster",level:2},{value:"V\xe9rifier la sant\xe9 du cluster",id:"v\xe9rifier-la-sant\xe9-du-cluster",level:2},{value:"Ressources d\xe9sactiv\xe9es",id:"ressources-d\xe9sactiv\xe9es",level:3},{value:"V\xe9rification de la stabilit\xe9 de la plate-forme",id:"v\xe9rification-de-la-stabilit\xe9-de-la-plate-forme",level:2}],m={toc:p};function v(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",l({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Ce chapitre d\xe9crit comment mettre \xe0 niveau votre plate-forme Centreon HA de la version 21.10 vers la version 23.04."),(0,n.kt)("h2",l({},{id:"pr\xe9requis"}),"Pr\xe9requis"),(0,n.kt)("h3",l({},{id:"suspendre-la-gestion-des-ressources-du-cluster"}),"Suspendre la gestion des ressources du cluster"),(0,n.kt)("p",null,"Afin d'\xe9viter un basculement du cluster pendant la mise \xe0 jour, il est n\xe9cessaire de suspendre toutes les ressources Centreon, ainsi que MariaDB."),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"pcs property set maintenance-mode=true\n")),(0,n.kt)("h3",l({},{id:"sauvegarde"}),"Sauvegarde"),(0,n.kt)("p",null,"Avant toute chose, il est pr\xe9f\xe9rable de s\u2019assurer de l\u2019\xe9tat et de la consistance des sauvegardes de l\u2019ensemble des serveurs centraux de votre plateforme :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Serveur Centreon Central"),(0,n.kt)("li",{parentName:"ul"},"Serveur de Base de donn\xe9es")),(0,n.kt)("h3",l({},{id:"mettre-\xe0-jour-la-cl\xe9-de-signature-rpm"}),"Mettre \xe0 jour la cl\xe9 de signature RPM"),(0,n.kt)("p",null,"Pour des raisons de s\xe9curit\xe9, les cl\xe9s utilis\xe9es pour signer les RPMs Centreon sont chang\xe9es r\xe9guli\xe8rement. Le dernier changement a eu lieu le 14 octobre 2021.\nLorsque vous mettez Centreon \xe0 jour depuis une version plus ancienne, vous devez suivre la ",(0,n.kt)("a",l({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/fr/docs/security/key-rotation#existing-installation"}),"proc\xe9dure de changement de cl\xe9"),", afin de supprimer l'ancienne cl\xe9 et d'installer la nouvelle."),(0,n.kt)("h2",l({},{id:"processus-de-mise-\xe0-jour"}),"Processus de mise \xe0 jour"),(0,n.kt)("p",null,"Pour effectuer la mont\xe9e de version:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Pour le ",(0,n.kt)("strong",{parentName:"p"},"n\u0153ud central actif")," et ",(0,n.kt)("strong",{parentName:"p"},"le n\u0153ud base de donn\xe9es actif s'il existe")," merci de ",(0,n.kt)("a",l({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/fr/docs/upgrade/upgrade-from-21-10"}),"suivre la documentation officielle")," ",(0,n.kt)("strong",{parentName:"p"},"jusqu'\xe0 l'\xe9tape \"Actions post mont\xe9e de version\" incluse"),".")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Pour le ",(0,n.kt)("strong",{parentName:"p"},"n\u0153ud central passif")," et ",(0,n.kt)("strong",{parentName:"p"},"le n\u0153ud base de donn\xe9es passif s'il existe"),", merci de ",(0,n.kt)("a",l({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/fr/docs/upgrade/upgrade-from-21-10"}),"suivre la documentation officielle")," ",(0,n.kt)("strong",{parentName:"p"},"jusqu'\xe0 l'\xe9tape \"Mettre \xe0 jour une configuration Apache personnalis\xe9e\" incluse uniquement. Ne pas proc\xe9der \xe0 l'\xe9tape \"Finalisation de la mise \xe0 jour"),".")),(0,n.kt)("p",null,"Uniquement sur les serveurs deux n\u0153uds centraux, restaurer le fichier ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/centreon-ha/centreon_central_sync.pm"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"mv /etc/centreon-ha/centreon_central_sync.pm.rpmsave /etc/centreon-ha/centreon_central_sync.pm\n")),(0,n.kt)("p",null,"Sur le n\u0153ud central passif, d\xe9placez le r\xe9pertoire ",(0,n.kt)("strong",{parentName:"p"},"install")," pour \xe9viter d'obtenir l'\xe9cran \"upgrade\" dans l'interface en cas de nouvel \xe9change de r\xf4les et rechargez le cache Apache."),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"mv /usr/share/centreon/www/install /var/lib/centreon/installs/install-update-`date +%Y-%m-%d`\nsudo -u apache /usr/share/centreon/bin/console cache:clear\n")),(0,n.kt)("h3",l({},{id:"suppression-des-crons"}),"Suppression des crons"),(0,n.kt)("p",null,"La mise \xe0 jour RPM remet en place les crons sur les serveurs Central et Bases de donn\xe9es. Supprimez-les pour \xe9viter les ex\xe9cutions simultan\xe9es : "),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"rm -rf /etc/cron.d/centreon\nrm -rf /etc/cron.d/centstorage\nrm -f /etc/cron.d/centreon-ha-mysql\n")),(0,n.kt)("p",null,"Le cron ",(0,n.kt)("strong",{parentName:"p"},"centreon-ha-mysql")," \xe9tant supprim\xe9, v\xe9rifiez que vous avez bien la ligne suivante dans la section ",(0,n.kt)("strong",{parentName:"p"},"server")," du fichier ",(0,n.kt)("strong",{parentName:"p"},"/etc/my.cnf.d/server.cnf")," :"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-shell"}),"expire_logs_days=7\n")),(0,n.kt)("p",null,"Si ce n'est pas le cas, ajoutez-la et red\xe9marrez la ressource ",(0,n.kt)("strong",{parentName:"p"},"ms_mysql")," :"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-shell"}),"pcs resource restart ms_mysql\n")),(0,n.kt)("h3",l({},{id:"r\xe9initialiser-les-autorisations-de-la-ressource-centreon_central_sync"}),"R\xe9initialiser les autorisations de la ressource centreon_central_sync"),(0,n.kt)("p",null,"L'upgrade RPM remet les permissions en place sur les serveurs centraux. Modifiez-les en utilisant ces commandes :"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),'chmod 775 /var/log/centreon-engine/\nmkdir /var/log/centreon-engine/archives\nchown centreon-engine: /var/log/centreon-engine/archives\nchmod 775 /var/log/centreon-engine/archives/\nfind /var/log/centreon-engine/ -type f -exec chmod 664 {} \\;\nfind /usr/share/centreon/www/img/media -type d -exec chmod 775 {} \\;\nfind /usr/share/centreon/www/img/media -type f \\( ! -iname ".keep" ! -iname ".htaccess" \\) -exec chmod 664 {} \\;\n')),(0,n.kt)("h2",l({},{id:"ugprade-du-cluster"}),"Ugprade du cluster"),(0,n.kt)("p",null,"Depuis Centreon 22.04, la r\xe9plication de MariaDB est maintenant bas\xe9e sur ",(0,n.kt)("a",l({parentName:"p"},{href:"https://mariadb.com/kb/en/gtid/"}),"GTID"),".\nIl est n\xe9cessaire de d\xe9truire compl\xe8tement le cluster et de le configurer \xe0 nouveau avec la derni\xe8re version de Centreon et les m\xe9canismes de r\xe9plication de MariaDB GTID."),(0,n.kt)("h3",l({},{id:"mode-maintenance-et-sauvegarde"}),"Mode maintenance et sauvegarde"),(0,n.kt)("p",null,"R\xe9alisez une sauvegarde du cluster en ex\xe9cutant les commandes suivantes :"),(0,n.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"pcs config backup centreon_cluster\npcs resource config --output-format=cmd | sed -e :a -e '/\\\\$/N; s/\\\\\\n//; ta' | sed 's/-f tmp-cib.xml//' | egrep \"create|group\" | egrep -v \"(mysql|php|cbd_rrd)\" > centreon_pcs_command.sh\n")))),(0,n.kt)("p",null,"V\xe9rifiez que le fichier ",(0,n.kt)("inlineCode",{parentName:"p"},"centreon_cluster.tar.bz2")," existe avant de continuer cette proc\xe9dure."),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"ls -l centreon_cluster.tar.bz2\n")),(0,n.kt)("p",null,"Vous devriez obtenir un r\xe9sultat comme celui-ci :"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-text"}),"-rw------- 1 root root 2777 May  3 17:49 centreon_cluster.tar.bz2\n")),(0,n.kt)("p",null,"V\xe9rifiez ensuite le fichier centreon_pcs_command.sh, la commande d'exportation peut afficher quelques lignes d'avertissement mais elle n'est pas bloquante."),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"cat centreon_pcs_command.sh\n")),(0,n.kt)("p",null,"Le contenu doit ressembler \xe0 ceci :"),(0,n.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-text"}),"pcs resource create --no-default-ops --force -- vip ocf:heartbeat:IPaddr2   broadcast=@VIP_BROADCAST_IPADDR@ cidr_netmask=@VIP_CIDR_NETMASK@ flush_routes=true ip=@VIP_IPADDR@ nic=@VIP_IFNAME@   op     monitor interval=10s id=vip-monitor-interval-10s timeout=20s     start interval=0s id=vip-start-interval-0s timeout=20s     stop interval=0s id=vip-stop-interval-0s timeout=20s   meta target-role=started;\npcs resource create --no-default-ops --force -- http systemd:httpd   op     monitor interval=5s id=http-monitor-interval-5s timeout=20s     start interval=0s id=http-start-interval-0s timeout=40s     stop interval=0s id=http-stop-interval-0s timeout=40s   meta target-role=started;\npcs resource create --no-default-ops --force -- gorgone systemd:gorgoned   op     monitor interval=5s id=gorgone-monitor-interval-5s timeout=20s     start interval=0s id=gorgone-start-interval-0s timeout=90s     stop interval=0s id=gorgone-stop-interval-0s timeout=90s   meta target-role=started;\npcs resource create --no-default-ops --force -- centreon_central_sync systemd:centreon-central-sync   op     monitor interval=5s id=centreon_central_sync-monitor-interval-5s timeout=20s     start interval=0s id=centreon_central_sync-start-interval-0s timeout=90s     stop interval=0s id=centreon_central_sync-stop-interval-0s timeout=90s   meta target-role=started;\npcs resource create --no-default-ops --force -- cbd_central_broker systemd:cbd-sql   op     monitor interval=5s id=cbd_central_broker-monitor-interval-5s timeout=30s     start interval=0s id=cbd_central_broker-start-interval-0s timeout=90s     stop interval=0s id=cbd_central_broker-stop-interval-0s timeout=90s   meta target-role=started;\npcs resource create --no-default-ops --force -- centengine systemd:centengine   op     monitor interval=5s id=centengine-monitor-interval-5s timeout=30s     start interval=0s id=centengine-start-interval-0s timeout=90s     stop interval=0s id=centengine-stop-interval-0s timeout=90s   meta multiple-active=stop_start target-role=started;\npcs resource create --no-default-ops --force -- centreontrapd systemd:centreontrapd   op     monitor interval=5s id=centreontrapd-monitor-interval-5s timeout=20s     start interval=0s id=centreontrapd-start-interval-0s timeout=30s     stop interval=0s id=centreontrapd-stop-interval-0s timeout=30s   meta target-role=started;\npcs resource create --no-default-ops --force -- snmptrapd systemd:snmptrapd   op     monitor interval=5s id=snmptrapd-monitor-interval-5s timeout=20s     start interval=0s id=snmptrapd-start-interval-0s timeout=30s     stop interval=0s id=snmptrapd-stop-interval-0s timeout=30s   meta target-role=started;\npcs resource group add centreon   vip http gorgone centreon_central_sync cbd_central_broker centengine centreontrapd snmptrapd;\n")))),(0,n.kt)("p",null,"Ce fichier sera n\xe9cessaire pour recr\xe9er toutes les ressources de votre cluster."),(0,n.kt)("h3",l({},{id:"supprimer-les-ressources"}),"Supprimer les ressources"),(0,n.kt)("p",null,"Ces commandes ne doivent \xeatre ex\xe9cut\xe9es que sur le n\u0153ud central actif :"),(0,n.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"HA 2 Nodes",label:"HA 2 Nodes",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"pcs resource delete ms_mysql --force\npcs resource delete cbd_rrd --force\npcs resource delete php --force\npcs resource delete centreon --force\n"))),(0,n.kt)(s.Z,{value:"HA 4 Nodes",label:"HA 4 Nodes",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"pcs resource delete ms_mysql --force\npcs resource delete vip_mysql --force\npcs resource delete cbd_rrd --force\npcs resource delete php --force\npcs resource delete centreon --force\n")))),(0,n.kt)("h3",l({},{id:"reconfigure-mariadb"}),"Reconfigure MariaDB"),(0,n.kt)("p",null,"Il est n\xe9cessaire de modifier la configuration de MySQL en \xe9ditant ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/my.cnf.d/server.cnf")," :"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Sur les 2 serveurs centraux dans une HA 2 n\u0153uds\nSur les 2 serveurs de base de donn\xe9es dans une HA 4 noeuds.")),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"[server]\n...\nskip-slave-start\nlog-slave-updates\ngtid_strict_mode=ON\nexpire_logs_days=7\nignore-db-dir=lost+found\n...\n")),(0,n.kt)("h3",l({},{id:"lancer-la-r\xe9plication-gtid"}),"Lancer la r\xe9plication GTID"),(0,n.kt)("p",null,"Ex\xe9cutez cette commande ",(0,n.kt)("strong",{parentName:"p"},"sur le n\u0153ud de base de donn\xe9es secondaire:"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"mysqladmin -p shutdown\n")),(0,n.kt)("p",null,"Il est important de s'assurer que MariaDB est compl\xe8tement arr\xeat\xe9. Vous allez ex\xe9cuter cette commande et v\xe9rifier qu'elle ne renvoie aucun r\xe9sultat :"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"ps -ef | grep mariadb[d]\n")),(0,n.kt)("p",null,"Une fois le service arr\xeat\xe9 ",(0,n.kt)("strong",{parentName:"p"},"sur le n\u0153ud de base de donn\xe9es secondaire"),", vous allez ex\xe9cuter le script de synchronisation ",(0,n.kt)("strong",{parentName:"p"},"depuis le n\u0153ud de base de donn\xe9es primaire")," :"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"mysqladmin -p shutdown\nsystemctl restart mariadb\n/usr/share/centreon-ha/bin/mysql-sync-bigdb.sh\n")),(0,n.kt)("p",null,"La sortie de ce script est tr\xe8s verbeuse : pour vous assurer que tout s'est bien pass\xe9, concentrez-vous sur les derni\xe8res lignes de la sortie, en v\xe9rifiant qu'elles ressemblent \xe0 ceci :"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-text"}),'Umount and Delete LVM snapshot\n  Logical volume "dbbackupdatadir" successfully removed\nStart MySQL Slave\nStart Replication\nId  User    Host    db  Command Time    State   Info    Progress\n[variable number of lines]\n')),(0,n.kt)("p",null,"La chose importante \xe0 v\xe9rifier est que ",(0,n.kt)("inlineCode",{parentName:"p"},"Start MySQL Slave")," et ",(0,n.kt)("inlineCode",{parentName:"p"},"Start Replication")," sont pr\xe9sents et qu'aucune erreur ne les suit."),(0,n.kt)("p",null,"De plus, la sortie de cette commande ne doit afficher que des r\xe9sultats ",(0,n.kt)("inlineCode",{parentName:"p"},"OK")," :"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"/usr/share/centreon-ha/bin/mysql-check-status.sh\n")),(0,n.kt)("p",null,"La sortie attendue est :"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-text"}),"Connection MASTER Status '@CENTRAL_MASTER_NAME@' [OK]\nConnection SLAVE Status '@CENTRAL_SLAVE_NAME@' [OK]\nSlave Thread Status [OK]\nPosition Status [OK]\n")),(0,n.kt)("h3",l({},{id:"red\xe9marrer-les-processus-de-centreon"}),"Red\xe9marrer les processus de Centreon"),(0,n.kt)("p",null,"Puis de red\xe9marrer tous les processus sur le ",(0,n.kt)("strong",{parentName:"p"},"n\u0153ud central actif")," :"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"systemctl restart cbd-sql cbd gorgoned centengine centreontrapd \n")),(0,n.kt)("p",null,"Et sur le ",(0,n.kt)("strong",{parentName:"p"},"n\u0153ud central passif")," :"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"systemctl restart cbd\n")),(0,n.kt)("h3",l({},{id:"nettoyer-les-fichiers-de-m\xe9moire-de-broker"}),"Nettoyer les fichiers de m\xe9moire de broker"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"WARNING:")," ex\xe9cuter cette commande uniquement sur le noeud central passif.")),(0,n.kt)("p",null,"Avant de reprendre la gestion des ressources du cluster, pour \xe9viter les probl\xe8mes de broker, il faut nettoyer tous les fichiers ",(0,n.kt)("em",{parentName:"p"},".memory."),", ",(0,n.kt)("em",{parentName:"p"},".unprocessed.")," ou ",(0,n.kt)("em",{parentName:"p"},".queue.")," :"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"rm -rf /var/lib/centreon-broker/central-broker-master.memory*\nrm -rf /var/lib/centreon-broker/central-broker-master.queue*\nrm -rf /var/lib/centreon-broker/central-broker-master.unprocessed*\n")),(0,n.kt)("h3",l({},{id:"recr\xe9er-les-ressources-du-cluster"}),"Recr\xe9er les ressources du cluster"),(0,n.kt)("p",null,"\xc0 ex\xe9cuter ",(0,n.kt)("strong",{parentName:"p"},"seulement sur un n\u0153ud central")," :"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"WARNING:")," la syntaxe de la commande suivante d\xe9pend de la distribution Linux que vous utilisez.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Vous pouvez trouver les variables @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ @MARIADB_REPL_USER@ @MARIADB_REPL_USER@ dans ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/centreon-ha/mysql-resources.sh"),".")),(0,n.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),'pcs resource create "ms_mysql" \\\n    ocf:heartbeat:mariadb-centreon \\\n    config="/etc/my.cnf.d/server.cnf" \\\n    pid="/var/lib/mysql/mysql.pid" \\\n    datadir="/var/lib/mysql" \\\n    socket="/var/lib/mysql/mysql.sock" \\\n    binary="/usr/bin/mysqld_safe" \\\n    node_list="@CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@" \\\n    replication_user="@MARIADB_REPL_USER@" \\\n    replication_passwd=\'@MARIADB_REPL_PASSWD@\' \\\n    test_user="@MARIADB_REPL_USER@" \\\n    test_passwd="@MARIADB_REPL_PASSWD@" \\\n    test_table=\'centreon.host\'\n')))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"WARNING:")," la syntaxe de la commande suivante d\xe9pend de la distribution Linux que vous utilisez.")),(0,n.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"HA 2 Nodes",label:"HA 2 Nodes",mdxType:"TabItem"},(0,n.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),'pcs resource promotable ms_mysql \\\n    master-node-max="1" \\\n    clone_max="2" \\\n    globally-unique="false" \\\n    clone-node-max="1" \\\n    notify="true"\n'))))),(0,n.kt)(s.Z,{value:"HA 4 Nodes",label:"HA 4 Nodes",mdxType:"TabItem"},(0,n.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),'pcs resource promotable ms_mysql \\\n    master-node-max="1" \\\n    clone_max="2" \\\n    globally-unique="false" \\\n    clone-node-max="1" \\\n    notify="true"\n')),(0,n.kt)("p",null,"Adresse VIP des serveurs de bases de donn\xe9es"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),'pcs resource create vip_mysql \\\n    ocf:heartbeat:IPaddr2 \\\n    ip="@VIP_SQL_IPADDR@" \\\n    nic="@VIP_SQL_IFNAME@" \\\n    cidr_netmask="@VIP_SQL_CIDR_NETMASK@" \\\n    broadcast="@VIP_SQL_BROADCAST_IPADDR@" \\\n    flush_routes="true" \\\n    meta target-role="stopped" \\\n    op start interval="0s" timeout="20s" \\\n    stop interval="0s" timeout="20s" \\\n    monitor interval="10s" timeout="20s"\n')))))),(0,n.kt)("h4",l({},{id:"php-ressource"}),"PHP ressource"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),'pcs resource create "php" \\\n    systemd:php-fpm \\\n    meta target-role="started" \\\n    op start interval="0s" timeout="30s" \\\n    stop interval="0s" timeout="30s" \\\n    monitor interval="5s" timeout="30s" \\\n    clone\n')),(0,n.kt)("h4",l({},{id:"ressource-rrd-broker"}),"Ressource RRD broker"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),'pcs resource create "cbd_rrd" \\\n    systemd:cbd \\\n    meta target-role="started" \\\n    op start interval="0s" timeout="90s" \\\n    stop interval="0s" timeout="90s" \\\n    monitor interval="20s" timeout="30s" \\\n    clone\n')),(0,n.kt)("h4",l({},{id:"recr\xe9er-le-groupe-de-ressources-centreon"}),"Recr\xe9er le groupe de ressources ",(0,n.kt)("em",{parentName:"h4"},"centreon")),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"bash centreon_pcs_command.sh\n")),(0,n.kt)("h4",l({},{id:"recr\xe9er-les-contraintes"}),"Recr\xe9er les contraintes"),(0,n.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"HA 2 Nodes",label:"HA 2 Nodes",mdxType:"TabItem"},(0,n.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),'pcs constraint colocation add master "ms_mysql-clone" with "centreon"\npcs constraint colocation add master "centreon" with "ms_mysql-clone"\n'))))),(0,n.kt)(s.Z,{value:"HA 4 Nodes",label:"HA 4 Nodes",mdxType:"TabItem"},(0,n.kt)("p",null,"Afin de fixer le r\xf4le de la base de donn\xe9es primaire avec l'IP virtuelle, d\xe9finissez une contrainte mutuelle :"),(0,n.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),'pcs constraint colocation add "vip_mysql" with master "ms_mysql-clone"\npcs constraint colocation add master "ms_mysql-clone" with "vip_mysql"\n')))),(0,n.kt)("p",null,"Recr\xe9ez ensuite les contraintes qui emp\xeachent les processus Centreon de s'ex\xe9cuter sur les n\u0153uds de base de donn\xe9es et vice-versa :"),(0,n.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"pcs constraint location centreon avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY\npcs constraint location ms_mysql-clone avoids @CENTRAL_MASTER_NAME@=INFINITY @CENTRAL_SLAVE_NAME@=INFINITY\npcs constraint location cbd_rrd-clone avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY\npcs constraint location php-clone avoids @DATABASE_MASTER_NAME@=INFINITY @DATABASE_SLAVE_NAME@=INFINITY\n")))))),(0,n.kt)("h2",l({},{id:"reprise-de-la-gestion-des-ressources-du-cluster"}),"Reprise de la gestion des ressources du cluster"),(0,n.kt)("p",null,"Maintenant que la mise \xe0 jour est termin\xe9e, les ressources peuvent \xeatre g\xe9r\xe9es \xe0 nouveau :"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"pcs property set maintenance-mode=false\npcs resource cleanup ms_mysql\n")),(0,n.kt)("h2",l({},{id:"v\xe9rifier-la-sant\xe9-du-cluster"}),"V\xe9rifier la sant\xe9 du cluster"),(0,n.kt)("p",null,"Vous pouvez surveiller les ressources du cluster en temps r\xe9el en utilisant la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"crm_mon -fr")," :"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"INFO:")," L'option ",(0,n.kt)("inlineCode",{parentName:"p"},"-fr")," vous permet d'afficher toutes les resources m\xeame si elles sont disable.")),(0,n.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"HA 2 Nodes",label:"HA 2 Nodes",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-text"}),"Stack: corosync\nCurrent DC: @CENTRAL_SLAVE_NAME@ (version 1.1.20-5.el7_7.2-3c4c782f70) - partition with quorum\nLast updated: Thu Feb 20 13:14:17 2020\nLast change: Thu Feb 20 09:25:54 2020 by root via crm_attribute on @CENTRAL_MASTER_NAME@\n\n2 nodes configured\n14 resources configured\n\nOnline: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]\n\nActive resources:\n\n Master/Slave Set: ms_mysql-master [ms_mysql]\n     Masters: [ @CENTRAL_MASTER_NAME@ ]\n     Slaves: [ @CENTRAL_SLAVE_NAME@ ]\n Clone Set: cbd_rrd-clone [cbd_rrd]\n     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]\n Resource Group: centreon\n     vip        (ocf::heartbeat:IPaddr2):   Started @CENTRAL_MASTER_NAME@\n     http   (systemd:httpd24-httpd):        Started @CENTRAL_MASTER_NAME@\n     gorgone    (systemd:gorgoned):     Started @CENTRAL_MASTER_NAME@\n     centreon_central_sync  (systemd:centreon-central-sync):        Started @CENTRAL_MASTER_NAME@\n     centreontrapd  (systemd:centreontrapd):        Started @CENTRAL_MASTER_NAME@\n     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_MASTER_NAME@\n     cbd_central_broker (systemd:cbd-sql):  Started @CENTRAL_MASTER_NAME@\n     centengine (systemd:centengine):   Started @CENTRAL_MASTER_NAME@\n Clone Set: php-clone [php]\n     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]\n"))),(0,n.kt)(s.Z,{value:"HA 4 Nodes",label:"HA 4 Nodes",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-text"}),"[...]\n4 nodes configured\n21 resources configured\n\nOnline: [@CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@]\n\nActive resources:\n\n Master/Slave Set: ms_mysql-master [ms_mysql]\n     Masters: [ @DATABASE_MASTER_NAME@ ]\n     Slaves: [ @DATABASE_SLAVE_NAME@ ]\n     Stopped: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]\nvip_mysql       (ocf::heartbeat:IPaddr2):       Started @DATABASE_MASTER_NAME@\n Clone Set: php-clone [php]\n     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]\n     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]\n Clone Set: cbd_rrd-clone [cbd_rrd]\n     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]\n     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]\n Resource Group: centreon\n     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_MASTER_NAME@\n     http       (systemd:httpd24-httpd):        Started @CENTRAL_MASTER_NAME@\n     gorgone    (systemd:gorgoned):     Started @CENTRAL_MASTER_NAME@\n     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_MASTER_NAME@\n     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_MASTER_NAME@\n     centengine (systemd:centengine):   Started @CENTRAL_MASTER_NAME@\n     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_MASTER_NAME@\n     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_MASTER_NAME@\n")))),(0,n.kt)("h3",l({},{id:"ressources-d\xe9sactiv\xe9es"}),"Ressources d\xe9sactiv\xe9es"),(0,n.kt)("p",null,"Lorsque vous faite une ",(0,n.kt)("inlineCode",{parentName:"p"},"crm_mon -fr")," et que vous une ressource qui est disable :"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-text"}),"...\n Master/Slave Set: ms_mysql-master [ms_mysql]\n     Masters: [ @DATABASE_MASTER_NAME@ ]\n     Slaves: [ @DATABASE_SLAVE_NAME@ ]\n     Stopped: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]\nvip_mysql       (ocf::heartbeat:IPaddr2):       Stopped (disabled)\n...\n")),(0,n.kt)("p",null,"Vous devez faire enable la resource avec la commande suivante :"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"pcs resource enable @RESSOURCE_NAME@\n")),(0,n.kt)("p",null,"Dans notre cas :"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"pcs resource enable vip_mysql\n")),(0,n.kt)("h2",l({},{id:"v\xe9rification-de-la-stabilit\xe9-de-la-plate-forme"}),"V\xe9rification de la stabilit\xe9 de la plate-forme"),(0,n.kt)("p",null,"Vous devez maintenant v\xe9rifier que tout fonctionne bien :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Acc\xe8s aux menus de l'interface utilisateur web."),(0,n.kt)("li",{parentName:"ul"},"G\xe9n\xe9ration de la configuration des pollers + m\xe9thode de rechargement et de red\xe9marrage."),(0,n.kt)("li",{parentName:"ul"},"Planification des contr\xf4les imm\xe9diats (Central + Pollers), des accus\xe9s de r\xe9ception, des temps d'arr\xeat, etc."),(0,n.kt)("li",{parentName:"ul"},"D\xe9placer des ressources ou red\xe9marrer le serveur actif et v\xe9rifier \xe0 nouveau que tout va bien.")))}v.isMDXComponent=!0}}]);