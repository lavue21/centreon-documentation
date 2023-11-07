"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[76351],{134:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>s,metadata:()=>u,toc:()=>d});n(67294);var a=n(3905);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const s={id:"concepts",title:"Statuts possibles d'une ressource"},o=void 0,u={unversionedId:"alerts-notifications/concepts",id:"version-23.10/alerts-notifications/concepts",title:"Statuts possibles d'une ressource",description:"Les statuts indiquent la disponibilit\xe9 d'un h\xf4te, et la disponibilit\xe9 ou la performance d'un service. Chaque",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/alerts-notifications/concepts.md",sourceDirName:"alerts-notifications",slug:"/alerts-notifications/concepts",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/alerts-notifications/concepts",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/alerts-notifications/concepts.md",tags:[],version:"23.10",lastUpdatedAt:1699375250,formattedLastUpdatedAt:"7 nov. 2023",frontMatter:{id:"concepts",title:"Statuts possibles d'une ressource"},sidebar:"version-23.10/docs",previous:{title:"Import/Export",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/monitoring/web-import-export"},next:{title:"Page Statut des ressources",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/alerts-notifications/resources-status"}},p={},d=[{value:"Statut des h\xf4tes",id:"statut-des-h\xf4tes",level:2},{value:"Statut des services",id:"statut-des-services",level:2},{value:"\xc9tats",id:"\xe9tats",level:2},{value:"Types de statuts",id:"types-de-statuts",level:2},{value:"Explication",id:"explication",level:3}],c={toc:d},m="wrapper";function k(t){var{components:e}=t,s=i(t,["components"]);return(0,a.kt)(m,l(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){r(t,e,n[e])}))}return t}({},c,s),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Les statuts indiquent la disponibilit\xe9 d'un h\xf4te, et la disponibilit\xe9 ou la performance d'un service. Chaque\nstatut a une signification bien pr\xe9cise pour la ressource."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Les statuts et \xe9tats d'une ressource sont affich\xe9s \xe0 la page\n",(0,a.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/alerts-notifications/resources-status"},"Statut des ressources"),". Vous pouvez filtrer cette page en fonction des statuts et de certains \xe9tats."),(0,a.kt)("li",{parentName:"ul"},"Certains statuts sont d\xe9termin\xe9s par des seuils d\xe9finis par l'utilisateur. ")),(0,a.kt)("h2",{id:"statut-des-h\xf4tes"},"Statut des h\xf4tes"),(0,a.kt)("p",null,"Le tableau ci-dessous r\xe9sume l'ensemble des statuts possibles pour un h\xf4te."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Status"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{style:{color:"#88b917"}},"DISPONIBLE")),(0,a.kt)("td",{parentName:"tr",align:null},"L'h\xf4te est disponible et joignable")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{style:{color:"#e00b3d"}},"INDISPONIBLE")),(0,a.kt)("td",{parentName:"tr",align:null},"L'h\xf4te est indisponible")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{style:{color:"#818185"}},"INJOIGNABLE")),(0,a.kt)("td",{parentName:"tr",align:null},"L'h\xf4te est injoignable : il ",(0,a.kt)("a",{parentName:"td",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/alerts-notifications/notif-dependencies"},"d\xe9pend")," d'un h\xf4te dont le statut est ",(0,a.kt)("strong",{parentName:"td"},"INDISPONIBLE"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{style:{color:"#2ad1d4"}},"EN ATTENTE")),(0,a.kt)("td",{parentName:"tr",align:null},"L'h\xf4te vient d'\xeatre cr\xe9\xe9 mais n'a pas encore \xe9t\xe9 contr\xf4l\xe9 par le moteur de supervision")))),(0,a.kt)("h2",{id:"statut-des-services"},"Statut des services"),(0,a.kt)("p",null,"Le tableau ci-dessous r\xe9sume l'ensemble des statuts possibles pour un service."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Status"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{style:{color:"#88b917"}},"OK")),(0,a.kt)("td",{parentName:"tr",align:null},"Le service ne pr\xe9sente aucun probl\xe8me")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{style:{color:"#ff9a13"}},"ALERTE")),(0,a.kt)("td",{parentName:"tr",align:null},"Le service a d\xe9pass\xe9 le seuil d'alerte")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{style:{color:"#e00b3d"}},"CRITIQUE")),(0,a.kt)("td",{parentName:"tr",align:null},"Le service a d\xe9pass\xe9 le seuil critique")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{style:{color:"#bcbdc0"}},"INCONNU")),(0,a.kt)("td",{parentName:"tr",align:null},"Le statut du service ne peut \xeatre v\xe9rifi\xe9 (exemple : agent SNMP DOWN\u2026)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{style:{color:"#2ad1d4"}},"EN ATTENTE")),(0,a.kt)("td",{parentName:"tr",align:null},"Le service vient d'\xeatre cr\xe9\xe9 mais n'a pas encore \xe9t\xe9 contr\xf4l\xe9 par le moteur de supervision")))),(0,a.kt)("h2",{id:"\xe9tats"},"\xc9tats"),(0,a.kt)("p",null,"En plus de leur statut, les ressources peuvent avoir diff\xe9rents \xe9tats :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/alerts-notifications/acknowledge"},"Acquitt\xe9")," : indique que l'incident sur le service ou l'h\xf4te est pris en\ncompte par un utilisateur. Les ressources acquitt\xe9es ont un fond jaune.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/alerts-notifications/downtimes"},"En maintenance")," : indique que les notifications sont temporairement suspendues pour cette ressource. Une plage de maintenance peut \xeatre ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/alerts-notifications/downtimes#les-temps-darr%C3%AAt-r%C3%A9currents"},"planifi\xe9e \xe0 l'avance")," pour \xe9viter de recevoir des alertes pendant une op\xe9ration de maintenance. Elle peut \xe9galement \xeatre d\xe9finie suite \xe0 un incident. Les ressources en maintenance ont un fond violet.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/alerts-notifications/notif-flapping"},"Flapping")," (bagotement) : le pourcentage de\nchangement de statut de la ressource est tr\xe8s \xe9lev\xe9. Ce pourcentage est\nobtenu \xe0 partir de calculs effectu\xe9s par le moteur de supervision. Les ressources dans un \xe9tat de bagotement affichent l'ic\xf4ne suivante dans leur panneau ",(0,a.kt)("strong",{parentName:"p"},"D\xe9tails")," :\n",(0,a.kt)("img",{alt:"image",src:n(64641).Z,width:"622",height:"342"})))),(0,a.kt)("h2",{id:"types-de-statuts"},"Types de statuts"),(0,a.kt)("p",null,"Le statut d'une ressource peut avoir deux types :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SOFT : Signifie qu'un incident vient d'\xeatre d\xe9tect\xe9 et que ce\ndernier doit \xeatre confirm\xe9."),(0,a.kt)("li",{parentName:"ul"},"HARD : Signifie que le statut de l'incident est confirm\xe9. Lorsque le\nstatut est confirm\xe9, le processus de notification est enclench\xe9\n(envoi d'un mail, SMS, \u2026).")),(0,a.kt)("p",null,"Vous pouvez filtrer la page ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/alerts-notifications/resources-status"},"Resources Status")," suivant le type de statut."),(0,a.kt)("h3",{id:"explication"},"Explication"),(0,a.kt)("p",null,"Un incident (statut non-OK) est confirm\xe9 \xe0 partir du moment o\xf9 le nombre\nd'essais de validation est arriv\xe9 \xe0 son terme. La configuration d'un\nobjet (h\xf4te ou service) implique un intervalle de contr\xf4le r\xe9gulier, un\nnombre d'essais pour valider un \xe9tat non-OK ainsi qu'un intervalle\nnon-r\xe9gulier de contr\xf4le. D\xe8s la d\xe9tection du premier incident, le\nstatut est dans un \xe9tat \u201cSOFT\u201d jusqu'\xe0 sa validation en \xe9tat \u201cHARD\u201d\nd\xe9clenchant le processus de notification."),(0,a.kt)("p",null,"Exemple :"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(56508).Z,width:"3300",height:"900"})),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Temps"),(0,a.kt)("th",{parentName:"tr",align:null},"Nombre de v\xe9rifications"),(0,a.kt)("th",{parentName:"tr",align:null},"Statut"),(0,a.kt)("th",{parentName:"tr",align:null},"Type de statut"),(0,a.kt)("th",{parentName:"tr",align:null},"Changement d'\xe9tat"),(0,a.kt)("th",{parentName:"tr",align:null},"Commentaire"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"t+0"),(0,a.kt)("td",{parentName:"tr",align:null},"1/3"),(0,a.kt)("td",{parentName:"tr",align:null},"OK"),(0,a.kt)("td",{parentName:"tr",align:null},"HARD"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"\xc9tat initial du service")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"t+5"),(0,a.kt)("td",{parentName:"tr",align:null},"1/3"),(0,a.kt)("td",{parentName:"tr",align:null},"CRITICAL"),(0,a.kt)("td",{parentName:"tr",align:null},"SOFT"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Premi\xe8re d\xe9tection d'un \xe9tat non-OK. Le gestionnaire d'\xe9v\xe9nements s'ex\xe9cute (event handlers).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"t+6"),(0,a.kt)("td",{parentName:"tr",align:null},"2/3"),(0,a.kt)("td",{parentName:"tr",align:null},"WARNING"),(0,a.kt)("td",{parentName:"tr",align:null},"SOFT"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Le service continue \xe0 \xeatre dans un statut non-OK. Le gestionnaire d'\xe9v\xe9nements s'ex\xe9cute.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"t+7"),(0,a.kt)("td",{parentName:"tr",align:null},"3/3"),(0,a.kt)("td",{parentName:"tr",align:null},"CRITICAL"),(0,a.kt)("td",{parentName:"tr",align:null},"HARD"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Le nombre maximal de tentatives de v\xe9rification a \xe9t\xe9 atteint, le service passe donc \xe0 l'\xe9tat HARD. Le gestionnaire d'\xe9v\xe9nements s'ex\xe9cute et une notification de probl\xe8me est envoy\xe9e. Le contr\xf4le # est remis \xe0 1 imm\xe9diatement apr\xe8s que cela se produit.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"t+12"),(0,a.kt)("td",{parentName:"tr",align:null},"3/3"),(0,a.kt)("td",{parentName:"tr",align:null},"WARNING"),(0,a.kt)("td",{parentName:"tr",align:null},"HARD"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Le service passe \xe0 un \xe9tat HARD WARNING. Le gestionnaire d'\xe9v\xe9nements s'ex\xe9cute et une notification de probl\xe8me est envoy\xe9e.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"t+17"),(0,a.kt)("td",{parentName:"tr",align:null},"3/3"),(0,a.kt)("td",{parentName:"tr",align:null},"WARNING"),(0,a.kt)("td",{parentName:"tr",align:null},"HARD"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Le service se stabilise dans un \xe9tat de probl\xe8me HARD. En fonction de l'intervalle de notification pour le service, une autre notification peut \xeatre envoy\xe9e.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"t+22"),(0,a.kt)("td",{parentName:"tr",align:null},"1/3"),(0,a.kt)("td",{parentName:"tr",align:null},"OK"),(0,a.kt)("td",{parentName:"tr",align:null},"HARD"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Le service revient \xe0 un statut OK HARD. Le gestionnaire d'\xe9v\xe9nements s'ex\xe9cute et une notification de r\xe9cup\xe9ration est envoy\xe9e.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"t+27"),(0,a.kt)("td",{parentName:"tr",align:null},"1/3"),(0,a.kt)("td",{parentName:"tr",align:null},"OK"),(0,a.kt)("td",{parentName:"tr",align:null},"HARD"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Le service est toujours OK.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"t+28"),(0,a.kt)("td",{parentName:"tr",align:null},"1/3"),(0,a.kt)("td",{parentName:"tr",align:null},"UNKNOWN"),(0,a.kt)("td",{parentName:"tr",align:null},"SOFT"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Le service passe \xe0 un \xe9tat SOFT non-OK. Le gestionnaire d'\xe9v\xe9nements s'ex\xe9cute.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"t+29"),(0,a.kt)("td",{parentName:"tr",align:null},"2/3"),(0,a.kt)("td",{parentName:"tr",align:null},"OK"),(0,a.kt)("td",{parentName:"tr",align:null},"SOFT"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"Le service revient \xe0 un \xe9tat OK SOFT. Le gestionnaire d'\xe9v\xe9nements s'ex\xe9cutent, mais les notifications ne sont pas envoy\xe9es, car ce n'\xe9tait pas un probl\xe8me \"r\xe9el\". Le type d'\xe9tat est d\xe9fini sur HARD et le contr\xf4le # est remis \xe0 1 imm\xe9diatement apr\xe8s que cela se produit.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"t+30"),(0,a.kt)("td",{parentName:"tr",align:null},"1/3"),(0,a.kt)("td",{parentName:"tr",align:null},"OK"),(0,a.kt)("td",{parentName:"tr",align:null},"HARD"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Le service se stabilise dans un \xe9tat OK HARD.")))))}k.isMDXComponent=!0},64641:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/flapping_icon-bcfb6b34d3243accd6308479e4504b81.png"},56508:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/soft_hard_states-89855b1b24628042e3a48efb2d231336.png"}}]);