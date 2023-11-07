"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[4848],{47017:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>v,frontMatter:()=>u,metadata:()=>c,toc:()=>l});n(67294);var r=n(3905);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}const u={id:"concepts",title:"Bases de la supervision"},a=void 0,c={unversionedId:"getting-started/concepts",id:"version-23.10/getting-started/concepts",title:"Bases de la supervision",description:"Que supervise Centreon?",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/getting-started/concepts.md",sourceDirName:"getting-started",slug:"/getting-started/concepts",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/getting-started/concepts",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/getting-started/concepts.md",tags:[],version:"23.10",lastUpdatedAt:1699375250,formattedLastUpdatedAt:"7 nov. 2023",frontMatter:{id:"concepts",title:"Bases de la supervision"},sidebar:"version-23.10/docs",previous:{title:"D\xe9couvrir l'interface web Centreon",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/getting-started/interface"},next:{title:"Setting up the monitoring",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/category/setting-up-the-monitoring"}},p={},l=[{value:"Que supervise Centreon?",id:"que-supervise-centreon",level:2},{value:"Comment fonctionne la supervision?",id:"comment-fonctionne-la-supervision",level:2},{value:"Comment voir les ressources en cours de supervision?",id:"comment-voir-les-ressources-en-cours-de-supervision",level:2},{value:"Quelles fonctionnalit\xe9s m&#39;aident \xe0 superviser des ressources?",id:"quelles-fonctionnalit\xe9s-maident-\xe0-superviser-des-ressources",level:2},{value:"Voir aussi",id:"voir-aussi",level:2}],d={toc:l},m="wrapper";function v(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)(m,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"que-supervise-centreon"},"Que supervise Centreon?"),(0,r.kt)("p",null,"Centreon vous permet de superviser des ressources. Les ressources peuvent \xeatre des h\xf4tes ou des services :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Un ",(0,r.kt)("strong",{parentName:"li"},"h\xf4te")," est tout \xe9quipement qui poss\xe8de une adresse IP et que l'on souhaite superviser : un serveur physique, une machine virtuelle, une sonde de temp\xe9rature, une cam\xe9ra IP, une imprimante ou un espace de stockage, par exemple. L\u2019h\xf4te peut avoir un ou plusieurs services associ\xe9s."),(0,r.kt)("li",{parentName:"ul"},"Un ",(0,r.kt)("strong",{parentName:"li"},"service")," est un point de contr\xf4le, ou indicateur, \xe0 superviser sur un h\xf4te. Cela peut \xeatre le taux d'utilisation du CPU, la temp\xe9rature, la d\xe9tection de mouvement, le taux d'utilisation de la bande passante, les I/O disque, etc. Un service peut avoir une ou plusieurs m\xe9triques associ\xe9es.")),(0,r.kt)("h2",{id:"comment-fonctionne-la-supervision"},"Comment fonctionne la supervision?"),(0,r.kt)("p",null,"Afin de mesurer chaque indicateur, on utilise des sondes de supervision (plugin en anglais) qui sont ex\xe9cut\xe9es p\xe9riodiquement par un moteur de collecte appel\xe9 Centreon Engine."),(0,r.kt)("h2",{id:"comment-voir-les-ressources-en-cours-de-supervision"},"Comment voir les ressources en cours de supervision?"),(0,r.kt)("p",null,"Une fois les h\xf4tes et services mis en supervision, ceux-ci ont un statut dans Centreon (",(0,r.kt)("strong",{parentName:"p"},"OK"),", ",(0,r.kt)("strong",{parentName:"p"},"Alerte"),", ",(0,r.kt)("strong",{parentName:"p"},"Critique"),"...). Vous pouvez suivre leur \xe9volution \xe0 la page ",(0,r.kt)("strong",{parentName:"p"},"Statut des ressources"),"."),(0,r.kt)("p",null,"En cas d'alerte (statut non-OK/non-DISPONIBLE), les ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/monitoring/basic-objects/contacts-create"},"contacts")," pourront recevoir des ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/alerts-notifications/notif-configuration"},"notifications"),", suivant des p\xe9riodes de temps d\xe9finies."),(0,r.kt)("h2",{id:"quelles-fonctionnalit\xe9s-maident-\xe0-superviser-des-ressources"},"Quelles fonctionnalit\xe9s m'aident \xe0 superviser des ressources?"),(0,r.kt)("p",null,"Avec Centreon, la supervision est rendue facile par les \xe9l\xe9ments suivants :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"les mod\xe8les d'h\xf4tes et de services, qui permettent de d\xe9finir des valeurs par d\xe9faut afin d\u2019acc\xe9l\xe9rer la cr\xe9ation de ces objets.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"les ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/monitoring/pluginpacks"},"connecteurs de supervision"),", qui fournissent des mod\xe8les d'h\xf4tes et de services pr\xeats \xe0 l'emploi. Ceux-ci simplifient \xe9norm\xe9ment la configuration des h\xf4tes et des services : par exemple, il suffit d'appliquer les mod\xe8les issus d'un connecteur de supervision \xe0 un h\xf4te afin de mettre celui-ci en supervision.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"la fonctionnalit\xe9 d'autod\xe9couverte d'h\xf4tes et de services qui permet d'obtenir une liste des nouveaux h\xf4tes ou services et de les ajouter automatiquement \xe0 la liste des ressources supervis\xe9es."))),(0,r.kt)("h2",{id:"voir-aussi"},"Voir aussi"),(0,r.kt)("p",null,"Pour vous familiariser avec la terminologie Centreon, vous pouvez consulter le ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/resources/glossary"},(0,r.kt)("strong",{parentName:"a"},"Glossaire des concepts Centreon")),"."))}v.isMDXComponent=!0}}]);