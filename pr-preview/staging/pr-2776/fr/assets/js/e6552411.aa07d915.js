"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[69694],{39030:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>c,toc:()=>p});n(67294);var r=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={id:"meta-services",title:"Cr\xe9er des m\xe9ta-services"},o=void 0,c={unversionedId:"monitoring/basic-objects/meta-services",id:"version-23.10/monitoring/basic-objects/meta-services",title:"Cr\xe9er des m\xe9ta-services",description:"Definition",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/monitoring/basic-objects/meta-services.md",sourceDirName:"monitoring/basic-objects",slug:"/monitoring/basic-objects/meta-services",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/monitoring/basic-objects/meta-services",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/monitoring/basic-objects/meta-services.md",tags:[],version:"23.10",lastUpdatedAt:1699375250,formattedLastUpdatedAt:"7 nov. 2023",frontMatter:{id:"meta-services",title:"Cr\xe9er des m\xe9ta-services"},sidebar:"version-23.10/docs",previous:{title:"Utiliser des mod\xe8les de services",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/monitoring/basic-objects/services-templates"},next:{title:"Introduction",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/monitoring/discovery/introduction"}},u={},p=[{value:"Definition",id:"definition",level:2},{value:"Les types de calcul",id:"les-types-de-calcul",level:3},{value:"Les types de sources de donn\xe9es",id:"les-types-de-sources-de-donn\xe9es",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Informations g\xe9n\xe9rales",id:"informations-g\xe9n\xe9rales",level:3},{value:"Etat du Meta Service",id:"etat-du-meta-service",level:3},{value:"Notification",id:"notification",level:3},{value:"Informations suppl\xe9mentaires",id:"informations-suppl\xe9mentaires",level:3},{value:"S\xe9lectionner manuellement des services",id:"s\xe9lectionner-manuellement-des-services",level:2}],m={toc:p},d="wrapper";function k(e){var{components:t}=e,l=s(e,["components"]);return(0,r.kt)(d,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},m,l),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("p",null,"Un m\xe9ta-service est un service virtuel permettant l\u2019agr\xe9gation de m\xe9triques issues de diff\xe9rents services au travers\nd\u2019une op\xe9ration math\xe9matique. Les m\xe9ta-services sont g\xe9r\xe9s de la m\xeame mani\xe8re qu\u2019un service c\u2019est \xe0 dire qu\u2019ils\nposs\xe8dent des seuils, un processus de notification, g\xe9n\xe8rent un graphique de performance..."),(0,r.kt)("p",null,"Exemple : Il est possible de d\xe9terminer la consommation totale de trafic WAN en additionnant au sein d\u2019un m\xe9ta-service\nl\u2019ensemble des services supervisant le trafic WAN unitairement."),(0,r.kt)("h3",{id:"les-types-de-calcul"},"Les types de calcul"),(0,r.kt)("p",null,"Plusieurs types de calculs sont possibles sur les m\xe9triques r\xe9cup\xe9r\xe9es :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Average")," : r\xe9alise la moyenne des donn\xe9es de performances"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Sum")," : r\xe9alise la somme des donn\xe9es de performances"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Min")," : r\xe9cup\xe8re le minimum de l\u2019ensemble des donn\xe9es de performances"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Max")," : r\xe9cup\xe8re le maximum de l\u2019ensemble des donn\xe9es de performances")),(0,r.kt)("h3",{id:"les-types-de-sources-de-donn\xe9es"},"Les types de sources de donn\xe9es"),(0,r.kt)("p",null,"Le r\xe9sultat du calcul est une donn\xe9e de performance (m\xe9trique) qui g\xe9n\xe8rera un graphique de performance. Afin de tracer\nau mieux le r\xe9sultat, il faut s\xe9lectionner le type de source de donn\xe9es (par d\xe9faut GAUGE). Les types de sources de\ndonn\xe9es disponibles sont :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Le type ",(0,r.kt)("strong",{parentName:"li"},"GAUGE")," enregistre une valeur instantan\xe9e (temp\xe9rature, humidit\xe9, CPU, ...)"),(0,r.kt)("li",{parentName:"ul"},"Le type ",(0,r.kt)("strong",{parentName:"li"},"COUNTER")," enregistre une valeur incr\xe9mentale par rapport au r\xe9sultat pr\xe9c\xe9dent"),(0,r.kt)("li",{parentName:"ul"},"Le type ",(0,r.kt)("strong",{parentName:"li"},"DRIFT")," stockera la d\xe9riv\xe9e de la ligne allant de la derni\xe8re \xe0 la valeur courante de la source de donn\xe9es.\nCela peut \xeatre utile pour des jauges, par exemple, de mesurer le taux de personnes entrant ou quittant une pi\xe8ce."),(0,r.kt)("li",{parentName:"ul"},"Le type ",(0,r.kt)("strong",{parentName:"li"},"ABSOLUTE")," est pour les compteurs qui se r\xe9initialisent \xe0 la lecture. Il est utilis\xe9 pour les compteurs\nrapides qui ont tendance \xe0 d\xe9border.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Plus d\u2019informations sur le site de ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"http://oss.oetiker.ch/rrdtool/doc/rrdcreate.en"},"RRDTools")),".")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Pour ajouter un m\xe9ta-service :"),(0,r.kt)("p",null,"Rendez-vous dans le menu : ",(0,r.kt)("strong",{parentName:"p"},"Configuration > Services > Meta Services")," et cliquez sur le bouton ",(0,r.kt)("strong",{parentName:"p"},"Add")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(53926).Z,width:"1141",height:"863"})),(0,r.kt)("h3",{id:"informations-g\xe9n\xe9rales"},"Informations g\xe9n\xe9rales"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Le champ ",(0,r.kt)("strong",{parentName:"li"},"Meta Service Name")," correspond au nom du m\xe9ta-service affich\xe9 dans l\u2019interface."),(0,r.kt)("li",{parentName:"ul"},"Le champ ",(0,r.kt)("strong",{parentName:"li"},"Output format string (printf-style)")," correspond au message de sortie (\u2018output\u2019) visible dans Centreon.\nLa valeur \u201c%d\u201d correspond \xe0 la valeur calcul\xe9e par le m\xe9ta-service."),(0,r.kt)("li",{parentName:"ul"},"Le champ ",(0,r.kt)("strong",{parentName:"li"},"Warning level")," and ",(0,r.kt)("strong",{parentName:"li"},"Critical level"),' correspondent respectivement aux seuils "WARNING" et\n"CRITICAL" du m\xe9ta-service.'),(0,r.kt)("li",{parentName:"ul"},"Les champs ",(0,r.kt)("strong",{parentName:"li"},"Calculation Type")," et ",(0,r.kt)("strong",{parentName:"li"},"Data source Type")," correspondent respectivement aux calculs et \xe0 la description\nde la source de donn\xe9es"),(0,r.kt)("li",{parentName:"ul"},"Le champ ",(0,r.kt)("strong",{parentName:"li"},"Selection Mode")," ermet de s\xe9lectionner les services contenant les m\xe9triques qui entreront dans le calcul\ndu m\xe9ta-service.")),(0,r.kt)("p",null,"Si l'option ",(0,r.kt)("strong",{parentName:"p"},"Service list")," est s\xe9lectionn\xe9e alors les m\xe9triques choisies seront issues de services s\xe9lectionn\xe9s\nmanuellement."),(0,r.kt)("p",null,"Si l\u2019option ",(0,r.kt)("strong",{parentName:"p"},"SQL matching"),"  est s\xe9lectionn\xe9e alors les services utilis\xe9s seront s\xe9lectionn\xe9s automatiquement par\nCentreon via une recherche \xe0 partir du champ Expression SQL \xe0 rechercher de type LIKE. La m\xe9trique \xe0 utiliser sera dans\nce cas \xe0 s\xe9lectionner dans la liste d\xe9roulante M\xe9trique."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Plus d\u2019informations sur le formatage ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"http://en.wikipedia.org/wiki/Printf_format_string"},"PRINTF")),".")),(0,r.kt)("h3",{id:"etat-du-meta-service"},"Etat du Meta Service"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Le champ ",(0,r.kt)("strong",{parentName:"li"},"Check Period")," d\xe9finit la p\xe9riode temporelle durant laquelle l\u2019ordonnanceur v\xe9rifie le statut du m\xe9ta-service."),(0,r.kt)("li",{parentName:"ul"},"Le champ ",(0,r.kt)("strong",{parentName:"li"},"Max Check Attempts")," d\xe9finit le nombre de contr\xf4les \xe0 effectuer avant de valider le statut du m\xe9ta-service\n: lorsque le statut est valid\xe9, une notification est envoy\xe9e."),(0,r.kt)("li",{parentName:"ul"},"Le champ ",(0,r.kt)("strong",{parentName:"li"},"Normal Check Interval")," est exprim\xe9 en minutes. Il d\xe9finit l\u2019intervalle entre chaque v\xe9rification lorsque\nle statut du m\xe9ta-service est OK."),(0,r.kt)("li",{parentName:"ul"},"Le champ ",(0,r.kt)("strong",{parentName:"li"},"Retry Check Interval")," est exprim\xe9 en minutes. Il d\xe9finit l\u2019intervalle de validation du statut non-OK du\nm\xe9ta-service.")),(0,r.kt)("h3",{id:"notification"},"Notification"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Le champ ",(0,r.kt)("strong",{parentName:"li"},"Notification Enabled")," permet d\u2019activer les notifications."),(0,r.kt)("li",{parentName:"ul"},"Le champ ",(0,r.kt)("strong",{parentName:"li"},"Linked Contacts Groups")," permet de d\xe9finir les groupes de contacts qui seront alert\xe9s."),(0,r.kt)("li",{parentName:"ul"},"Le champ ",(0,r.kt)("strong",{parentName:"li"},"Notification Interval")," est exprim\xe9 en minutes et permet de d\xe9finir l\u2019intervalle de temps entre l\u2019envoi\nde deux notifications."),(0,r.kt)("li",{parentName:"ul"},"Le champ ",(0,r.kt)("strong",{parentName:"li"},"Notification Period")," permet de d\xe9finir la p\xe9riode de notification."),(0,r.kt)("li",{parentName:"ul"},"Le champ ",(0,r.kt)("strong",{parentName:"li"},"Notification Type")," d\xe9finit les types de notifications envoy\xe9es.")),(0,r.kt)("h3",{id:"informations-suppl\xe9mentaires"},"Informations suppl\xe9mentaires"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"La liste ",(0,r.kt)("strong",{parentName:"li"},"Graphic Template")," d\xe9finit le mod\xe8le de graphique utilis\xe9 par ce m\xe9ta-service."),(0,r.kt)("li",{parentName:"ul"},"Les champs ",(0,r.kt)("strong",{parentName:"li"},"Status")," et ",(0,r.kt)("strong",{parentName:"li"},"Comments")," permettent d\u2019activer / d\xe9sactiver ou de commenter le m\xe9ta-service.")),(0,r.kt)("h2",{id:"s\xe9lectionner-manuellement-des-services"},"S\xe9lectionner manuellement des services"),(0,r.kt)("p",null,"Si vous avez choisi l\u2019option ",(0,r.kt)("strong",{parentName:"p"},"Service list"),", au sein de l\u2019\xe9cran regroupant l\u2019ensemble des m\xe9ta-services :"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Cliquez sur suivant pour s\xe9lectionner les m\xe9triques entrant en jeu dans le calcul du m\xe9ta-service. Ces m\xe9triques\nsont appel\xe9es indicateurs. ",(0,r.kt)("img",{alt:"image",src:n(3445).Z,width:"32",height:"32"})),(0,r.kt)("li",{parentName:"ol"},"Cliquez sur le bouton ",(0,r.kt)("strong",{parentName:"li"},"Add"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(16025).Z,width:"1080",height:"422"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Le champ ",(0,r.kt)("strong",{parentName:"li"},"Host")," permet de s\xe9lectionner l\u2019h\xf4te auquel le service \xe0 s\xe9lectionner appartient."),(0,r.kt)("li",{parentName:"ul"},"Le champ ",(0,r.kt)("strong",{parentName:"li"},"Service")," permet de choisir le service (premi\xe8re liste) ainsi que la m\xe9trique au sein de ce service\n(seconde liste)."),(0,r.kt)("li",{parentName:"ul"},"Les champs ",(0,r.kt)("strong",{parentName:"li"},"Status")," et ",(0,r.kt)("strong",{parentName:"li"},"Comment")," permettent d\u2019activer / d\xe9sactiver ou de commenter l\u2019indicateur.")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"R\xe9p\xe9tez l\u2019op\xe9ration jusqu\u2019\xe0 avoir ajout\xe9 tous les indicateurs n\xe9cessaires au calcul du m\xe9ta-service.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Un m\xe9ta-service est \xe0 consid\xe9rer comme service r\xe9gulier. Il est n\xe9cessaire de g\xe9n\xe9rer la configuration de\nl\u2019ordonnanceur central, d\u2019exporter cette derni\xe8re puis de red\xe9marrer l\u2019ordonnanceur.")))}k.isMDXComponent=!0},53926:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/02addmetaservice-680258807d55d3351231c7e7ea348334.png"},16025:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/02metaservicesindicators-b983599d815d99793320d82c479dc431.png"},3445:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADWElEQVRYR6VXi1UbMRAcVQBUEEQDgQoCFcRUEOQG4lQQqCDQgM+pIKSCmApiGkCkA6hAeXOrO31OOotk3/ODZ0u3s7M7u3sKb7HOLgB8BHAM4BDAqb++A/AC4BkO91jqn62PVXsPdpbOvgKgczptMYK5B/AFRvP/qs0D6Ow1gM9vcJw7ovNbGH1TQ1AG0FlG+iuiWO479wdKMTJ+XmA0qQc6y1TwzgIO51B4nznkuYsSG1MA8jA6D3Q7PEDhGkZvW/hHZ8/hcA2FD9F5skEQAtpbCkAitxnlzONtk+P8UGdXAL5lIHTMRACQ0+7cK5RaNEddQ9hZgmcdDbaD0WdTBqTgWO2Dka42yqeRUzmfAJABsnqXgbiB0fQHYUCk9jui/t9oZ+7F8dWIiYW7PDlGmg7WQ58KAbC2G6j+IsCCW2o+qN06S4ekeWhM8d0xWqztdixMh+9Y6isP4OkFSh34W23UC2sxzTXAR2PRCUNUGI0yPlKQ9vpDovd0zcVeorl23keZ/Ly2u6hPXKqEfhaL0SycsqURtKToLNc9UlXcEUDIizSKeuUPtSISHVJWBlKrpTgIhwcCiCmZIh4eLzlnk6IZ/7ebocHA6M3kd+m0VBxtxxpw4yGj68Np6BOMfnkibVqqfwpiXy1FPtsBrEelBFnVQaRnchoSAC0pSCNlA3lOnjllIkhv6jykwOGxrQgHkCVZBRY4dA5ROxNqKfQCX4ShC5ZkmEovqKTeiOqFLGDj4XSXNiIgmVQ96FF6eMRSn/azPu/3PMfIVb/9JPN+ooL10zOUeue/v5xvxan0uAVRiqHfy4ZEqdHx7O7nVRPRL2qaDiNgC6Mv/IV8RAtw2ZA2RZ3PNIak5yTDiMuIc6Rm6G4yjoP0BsdtNJdAxONYOulxGMdSHHm0LJaVX0TbaS47j6cgT2QLyXAp7Qn8dn44zdGdyo7TVrqn88Xsf58upWkqeGwFo7lSvd3ypTSifnhYeS13bptNO05I0ta2I4pU2ZhixTDv5/NreaCNHY1juvSCse3f/xRekxcThwOo/vWNH8o1GGlXoPOJVPe/mjm32jv7a8kRytkj+g24ZC0vp2TjFnCLZiB0DEWWWD//8XKaQ+b+6EaKD8cUkWIumQpsw2xk7JpN9hdksp32wRCQegAAAABJRU5ErkJggg=="}}]);