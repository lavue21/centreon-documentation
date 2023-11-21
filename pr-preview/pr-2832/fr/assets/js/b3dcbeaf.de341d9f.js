"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[18792],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(t),m=i,f=p["".concat(l,".").concat(m)]||p[m]||c[m]||a;return t?r.createElement(f,s(s({ref:n},d),{},{components:t})):r.createElement(f,s({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var u=2;u<a;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},87505:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});t(67294);var r=t(3905);function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const s={id:"knowledge-base",title:"Base de connaissance"},o=void 0,l={unversionedId:"administration/knowledge-base",id:"version-23.10/administration/knowledge-base",title:"Base de connaissance",description:"Introduction",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/administration/knowledge-base.md",sourceDirName:"administration",slug:"/administration/knowledge-base",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/docs/administration/knowledge-base",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/next/i18n/fr/docusaurus-plugin-content-docs/version-23.10/administration/knowledge-base.md",tags:[],version:"23.10",lastUpdatedAt:1700565273,formattedLastUpdatedAt:"21 nov. 2023",frontMatter:{id:"knowledge-base",title:"Base de connaissance"},sidebar:"version-23.10/docs",previous:{title:"Sauvegarde",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/docs/administration/backup"},next:{title:"Journalisation des modifications de configuration",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/docs/administration/logging-configuration-changes"}},u={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Pr\xe9-requis",id:"pr\xe9-requis",level:2},{value:"Configuration de l&#39;acc\xe8s au wiki",id:"configuration-de-lacc\xe8s-au-wiki",level:2},{value:"Guide utilisateur",id:"guide-utilisateur",level:2},{value:"D\xe9finition",id:"d\xe9finition",level:3},{value:"Algorithme d&#39;affichage : h\xe9ritage et surcharge",id:"algorithme-daffichage--h\xe9ritage-et-surcharge",level:3},{value:"Cr\xe9ation / Mise \xe0 jour / Suppression d&#39;une base de connaissances",id:"cr\xe9ation--mise-\xe0-jour--suppression-dune-base-de-connaissances",level:3},{value:"Lien avec l&#39;interface web de supervision",id:"lien-avec-linterface-web-de-supervision",level:3},{value:"Synchronisation",id:"synchronisation",level:2},{value:"Bonnes pratiques de d\xe9ploiement",id:"bonnes-pratiques-de-d\xe9ploiement",level:3}],c={toc:d};function p(e){var{components:n}=e,s=a(e,["components"]);return(0,r.kt)("wrapper",i({},c,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",i({},{id:"introduction"}),"Introduction"),(0,r.kt)("p",null,"Int\xe9gr\xe9 nativement depuis la version 2.8.0 de Centreon Web, ",(0,r.kt)("strong",{parentName:"p"},"Knowledge\nBase")," permet d'interfacer une base de connaissances techniques de proc\xe9dures\n(wiki)."),(0,r.kt)("p",null,"Pour cela, elle cr\xe9e des liens entre un h\xf4te/service et une proc\xe9dure sp\xe9cifique\nvers un wiki."),(0,r.kt)("p",null,"Pour plus de flexibilit\xe9, les proc\xe9dures peuvent \xeatre li\xe9es directement sur les\nmod\xe8les."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Knowledge Base")," est la solution id\xe9ale pour lier ais\xe9ment une base\nde connaissance avec Centreon Web."),(0,r.kt)("h2",i({},{id:"pr\xe9-requis"}),"Pr\xe9-requis"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Knowledge Base")," requiert que ",(0,r.kt)("strong",{parentName:"p"},"MediaWiki")," (version = 1.31) soit\ninstall\xe9 sur un serveur."),(0,r.kt)("p",null,"Alternativement vous pouvez ",(0,r.kt)("a",i({parentName:"p"},{href:"http://www.mediawiki.org/wiki/MediaWiki"}),"t\xe9l\xe9charger MediaWiki\nici")," et acc\xe9der \xe0 la ",(0,r.kt)("a",i({parentName:"p"},{href:"http://www.mediawiki.org/wiki/User_hub"}),"documentation\nici"),"."),(0,r.kt)("h2",i({},{id:"configuration-de-lacc\xe8s-au-wiki"}),"Configuration de l'acc\xe8s au wiki"),(0,r.kt)("p",null,"Afin d'utiliser ",(0,r.kt)("strong",{parentName:"p"},"Knowledge Base"),", vous devez le configurer pour qu'il\nacc\xe8de \xe0 la base de donn\xe9es du wiki."),(0,r.kt)("p",null,"Pour cela rendez-vous dans ",(0,r.kt)("strong",{parentName:"p"},"Administration > Param\xe8tres > Base de connaissance")," et\nrenseignez le formulaire."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:t(18276).Z,width:"1361",height:"284"})),(0,r.kt)("h2",i({},{id:"guide-utilisateur"}),"Guide utilisateur"),(0,r.kt)("h3",i({},{id:"d\xe9finition"}),"D\xe9finition"),(0,r.kt)("p",null,"Une proc\xe9dure est une documentation technique et/ou fonctionnelle qui met \xe0 la\ndisposition des exploitants un mode op\xe9ratoire dans le cadre du traitement d'une\nalerte."),(0,r.kt)("p",null,"Le contenu d'une proc\xe9dure peut \xeatre d'ordre g\xe9n\xe9ral ou sp\xe9cifique:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"D\xe9crire les actions n\xe9cessaires \xe0 la r\xe9solution d'un probl\xe8me."),(0,r.kt)("li",{parentName:"ul"},"Informer de l'existence d'une consigne particuli\xe8re (temporaire ou\npermanente)."),(0,r.kt)("li",{parentName:"ul"},"...")),(0,r.kt)("p",null,"Une proc\xe9dure peut \xeatre associ\xe9e \xe0 un h\xf4te ou un service."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:t(54162).Z,width:"1858",height:"534"})),(0,r.kt)("h3",i({},{id:"algorithme-daffichage--h\xe9ritage-et-surcharge"}),"Algorithme d'affichage : h\xe9ritage et surcharge"),(0,r.kt)("p",null,"Pour \xe9viter une trop grande charge de travail sur les proc\xe9dures de d\xe9ploiement,\ncette fonctionnalit\xe9 permet \xe0 l'administrateur de configurer une proc\xe9dure\nsimple pour les h\xf4tes/services."),(0,r.kt)("p",null,"Ainsi une proc\xe9dure peut \xeatre sp\xe9cifi\xe9e pour un h\xf4te/service donn\xe9 mais aussi\npour un mod\xe8le d'h\xf4te et de service."),(0,r.kt)("p",null,"Si une proc\xe9dure est d\xe9finie au niveau d'un mod\xe8le, tous les enfants du mod\xe8le\nparent b\xe9n\xe9ficieront de cette proc\xe9dure sauf en cas de surcharge. Ce syst\xe8me est\nidentique au syst\xe8me de mod\xe8le par h\xe9ritage pr\xe9sent dans Centreon Web."),(0,r.kt)("p",null,"La fonctionnalit\xe9 ",(0,r.kt)("strong",{parentName:"p"},"Knowledge Base")," est con\xe7u pour \xe9viter d'ajouter ou\nde mettre \xe0 jour manuellement plusieurs fois la m\xeame proc\xe9dure dans la base de\nconnaissances."),(0,r.kt)("p",null,"Quand un utilisateur clique sur la proc\xe9dure d'un h\xf4te :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"si une proc\xe9dure sp\xe9cifique est d\xe9finie pour cet h\xf4te, la page wiki de\nl'h\xf4te s'affichera"),(0,r.kt)("li",{parentName:"ul"},"si aucune proc\xe9dure sp\xe9cifique n'est d\xe9finie mais que le mod\xe8le d'h\xf4te a une\nproc\xe9dure alors c'est la page wiki de cette derni\xe8re qui s'affichera"),(0,r.kt)("li",{parentName:"ul"},"si le mod\xe8le d'h\xf4te n'a pas de proc\xe9dure de d\xe9finie, alors les mod\xe8les\nd'h\xf4te parents seront parcourus pour v\xe9rifier la pr\xe9sence d'une proc\xe9dure"),(0,r.kt)("li",{parentName:"ul"},"finalement si aucune proc\xe9dure n'est d\xe9finie dans l'arbre des mod\xe8les,\naucune proc\xe9dure ne sera accessible.")),(0,r.kt)("p",null,"Il en est de m\xeame pour les services."),(0,r.kt)("h3",i({},{id:"cr\xe9ation--mise-\xe0-jour--suppression-dune-base-de-connaissances"}),"Cr\xe9ation / Mise \xe0 jour / Suppression d'une base de connaissances"),(0,r.kt)("p",null,"Naviguer dans l'interface Web de Centreon vers les sous menus de\n",(0,r.kt)("inlineCode",{parentName:"p"},"Configuration > Base de connaissance")," pour :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Lister les h\xf4tes / services / mod\xe8les d'h\xf4tes / mod\xe8les de services avec\nleurs bases de connaissances li\xe9es"),(0,r.kt)("li",{parentName:"ul"},"Cr\xe9er / Visualiser / Editer / Visualiser l'historique pour un h\xf4te / service\n/ mod\xe8le d'h\xf4te / mod\xe8le de service"),(0,r.kt)("li",{parentName:"ul"},"Lister les h\xf4tes / services / mod\xe8les d'h\xf4tes / mod\xe8les de services sans\nbase de connaissances d\xe9finie.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Centreon Knowledge Base")," utilise un wiki pour stocker sa base de connaissance.\nToutes les cr\xe9ations / modifications sont donc r\xe9alis\xe9es \xe0 travers celui-ci."),(0,r.kt)("h3",i({},{id:"lien-avec-linterface-web-de-supervision"}),"Lien avec l'interface web de supervision"),(0,r.kt)("p",null,"La base de connaissance est accessible depuis l'interface Centreon Web \xe0 travers\nun ic\xf4ne cliquable (voir ci dessous)"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:t(39776).Z,width:"1674",height:"387"})),(0,r.kt)("p",null,"En cliquant sur l'ic\xf4ne, l'utilisateur est redirig\xe9 vers la base de connaissance\ncorrespondante."),(0,r.kt)("p",null,"Si l'ic\xf4ne est situ\xe9 \xe0 gauche du nom de l'h\xf4te, la base de connaissance\nconcernera l'h\xf4te."),(0,r.kt)("p",null,"Si l'ic\xf4ne est situ\xe9 \xe0 droite du nom du service, la base de connaissance\nconcernera le service."),(0,r.kt)("h2",i({},{id:"synchronisation"}),"Synchronisation"),(0,r.kt)("p",null,"Un cron se charge de r\xe9aliser les mises \xe0 jour de la configuration des h\xf4tes,\ndes services ainsi que des mod\xe8les."),(0,r.kt)("p",null,"Par exemple, si vous cr\xe9ez une page dans le wiki en utilisant le motif habituel\n(ex : ",(0,r.kt)("inlineCode",{parentName:"p"},"Host:Centreon-Server")," ou ",(0,r.kt)("inlineCode",{parentName:"p"},"Service:Centreon-Server Disk-/"),"), le cron\najoutera automatiquement le lien vers la page du wiki correspondante dans le\nchamp ",(0,r.kt)("strong",{parentName:"p"},"URL")," de la table ",(0,r.kt)("strong",{parentName:"p"},"Informations \xe9tendues"),"."),(0,r.kt)("h3",i({},{id:"bonnes-pratiques-de-d\xe9ploiement"}),"Bonnes pratiques de d\xe9ploiement"),(0,r.kt)("p",null,"Pour d\xe9ployer Centreon KnowledgeBase de la meilleure mani\xe8re, nous vous\nrecommandons fortement d'utiliser les diff\xe9rents niveaux du syst\xe8me d'h\xe9ritage."),(0,r.kt)("p",null,"La bonne pratique est donc de d\xe9finir les bases de connaissances au niveau des\nmod\xe8les."),(0,r.kt)("p",null,"Voici un exemple d'une configuration pour un mod\xe8le d'h\xf4te :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Linux ",">"," Generic-hosts"),(0,r.kt)("li",{parentName:"ul"},"Windows ",">"," Generic-hosts"),(0,r.kt)("li",{parentName:"ul"},"RedHat ",">"," Linux"),(0,r.kt)("li",{parentName:"ul"},"Debian ",">"," Linux"),(0,r.kt)("li",{parentName:"ul"},"Active-Directory ",">"," Windows"),(0,r.kt)("li",{parentName:"ul"},"LDAP ",">"," Linux")),(0,r.kt)("p",null,"Pour configurer Centreon KnowledgeBase pour le mod\xe8le d'h\xf4te ",(0,r.kt)("strong",{parentName:"p"},"RedHat"),", vous\npouvez suivre la d\xe9marche d\xe9crite dans la section suivante: ",(0,r.kt)("a",i({parentName:"p"},{href:"#lien-avec-linterface-web-de-supervision"}),"Lien avec l'interface web de\nsupervision"),"."),(0,r.kt)("p",null,"Dans l'arbre des mod\xe8les, il appara\xeet que le mod\xe8le ",(0,r.kt)("strong",{parentName:"p"},"RedHat")," h\xe9rite de deux\nautres mod\xe8les : ",(0,r.kt)("strong",{parentName:"p"},"Linux")," et ",(0,r.kt)("strong",{parentName:"p"},"Generic-hosts"),"."),(0,r.kt)("p",null,"Dans cet exemple tous les h\xf4tes utilisant le mod\xe8le d'h\xf4te ",(0,r.kt)("em",{parentName:"p"},"RedHat")," auront une\nnouvelle base de connaissances disponible."),(0,r.kt)("p",null,"Vous pouvez configurer une proc\xe9dure dans un niveau plus \xe9lev\xe9 dans l'arbre des\nmod\xe8les."),(0,r.kt)("p",null,"Par exemple si vous d\xe9finissez une proc\xe9dure pour le mod\xe8le d'h\xf4te ",(0,r.kt)("strong",{parentName:"p"},"Linux"),", tous\nles h\xf4tes utilisant les mod\xe8les d'h\xf4tes ",(0,r.kt)("strong",{parentName:"p"},"RedHat"),", ",(0,r.kt)("strong",{parentName:"p"},"Debian")," et ",(0,r.kt)("strong",{parentName:"p"},"LDAP")," h\xe9riteront\nde cette proc\xe9dure par h\xe9ritage."),(0,r.kt)("p",null,"Le comportement est le m\xeame pour les mod\xe8les de services."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Pour suprimmer le lien d'une base de connaissance pour un h\xf4te / service /\nmod\xe8le sp\xe9cifique, editer l'objet et supprimer le contenu du champ ",(0,r.kt)("strong",{parentName:"p"},"URL"),"\ndans l'onglet ",(0,r.kt)("strong",{parentName:"p"},"Informations d\xe9taill\xe9es"),"."),(0,r.kt)("p",{parentName:"blockquote"},"Si l'objet h\xe9rite d'une base de connaissance d'un mod\xe8le, la suppression du\ncontenu du champ surchargera la valeur du mod\xe8le et supprimera le lien de la\nbase de connaissance.")))}p.isMDXComponent=!0},54162:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/parameters-wiki-article-400bcb8826bfb12975e854ae173abcc8.png"},39776:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/parameters-wiki-host-monitoring-d0e3c00fda35eced9a9325f16632c00a.png"},18276:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/parameters-wiki-be037b25b5a937cd79dfc1fe2ecaafcb.png"}}]);