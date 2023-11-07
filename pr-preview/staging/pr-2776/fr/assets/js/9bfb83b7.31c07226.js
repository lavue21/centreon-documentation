"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[51139],{28793:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>p});r(67294);var n=r(3905);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const o={id:"chart-virtual-metrics",title:"M\xe9triques virtuelles"},s=void 0,u={unversionedId:"metrology/chart-virtual-metrics",id:"version-23.10/metrology/chart-virtual-metrics",title:"M\xe9triques virtuelles",description:"Definition",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/metrology/chart_virtual_metrics.md",sourceDirName:"metrology",slug:"/metrology/chart-virtual-metrics",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/metrology/chart-virtual-metrics",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/metrology/chart_virtual_metrics.md",tags:[],version:"23.10",lastUpdatedAt:1699375250,formattedLastUpdatedAt:"7 nov. 2023",frontMatter:{id:"chart-virtual-metrics",title:"M\xe9triques virtuelles"},sidebar:"version-23.10/docs",previous:{title:"Courbes",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/metrology/chart-curves"},next:{title:"Plugin Centreon pour Grafana",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/metrology/grafana"}},c={},p=[{value:"Definition",id:"definition",level:2},{value:"CDEF vs VDEF",id:"cdef-vs-vdef",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Exemple",id:"exemple",level:2}],d={toc:p},m="wrapper";function f(e){var{components:t}=e,o=a(e,["components"]);return(0,n.kt)(m,l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},d,o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"definition"},"Definition"),(0,n.kt)("p",null,"Les m\xe9triques virtuelles sont l'affichage de courbes r\xe9sultant du traitement / agr\xe9gation de donn\xe9es issues d'un jeu de\ndonn\xe9es. Le jeu de donn\xe9es correspond aux diff\xe9rentes valeurs des courbes sur la p\xe9riode de pr\xe9sentation du graphique.\nLa cr\xe9ation de m\xe9triques virtuelles repose sur le langage RPN (Reverse Polish Notation)."),(0,n.kt)("p",null,"Deux types de jeu de donn\xe9es sont disponibles :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"CDEF : Cette commande cr\xe9e un nouvel ensemble de points \xe0 partir d'une ou plusieurs s\xe9ries de donn\xe9es. L'agr\xe9gation est\nr\xe9alis\xe9e sur chaque point (donn\xe9es). "),(0,n.kt)("li",{parentName:"ul"},"VDEF : Le r\xe9sultat de chaque agr\xe9gation est une valeur et une composante temporelle. Ce r\xe9sultant peut \xe9galement \xeatre\nutilis\xe9 dans les divers \xe9l\xe9ments de graphique et d'impression. ")),(0,n.kt)("h3",{id:"cdef-vs-vdef"},"CDEF vs VDEF"),(0,n.kt)("p",null,"Le type CDEF travaille sur un ensemble de points (tableau de donn\xe9es). Le r\xe9sultat du traitement (exemple : multiplication\npar 8 pour convertir des bits en octets) sera un ensemble de point. Le type VDEF permet d'extraire le maximum d'un ensemble\nde point."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Pour plus d'informations sur la notation de type RPN, r\xe9f\xe9rencez-vous \xe0 la\n",(0,n.kt)("a",{parentName:"p",href:"https://oss.oetiker.ch/rrdtool/doc/rrdgraph_rpn.en.html"},"documentation officielle RRD"),".")),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"Se rendre dans le menu ",(0,n.kt)("strong",{parentName:"p"},"Monitoring ",">"," Performances ",">"," Virtual Metrics")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(72229).Z,width:"1063",height:"481"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Le champ ",(0,n.kt)("strong",{parentName:"li"},"Metric name")," d\xe9finit le nom de la m\xe9trique."),(0,n.kt)("li",{parentName:"ul"},"La liste ",(0,n.kt)("strong",{parentName:"li"},"Host/Service Data Source")," permet de d\xe9finir le service depuis lequel exploiter les m\xe9triques."),(0,n.kt)("li",{parentName:"ul"},"Le champ ",(0,n.kt)("strong",{parentName:"li"},"DEF Type")," d\xe9finit le type de jeu de donn\xe9es utilis\xe9 pour calculer la courbe virtuelle."),(0,n.kt)("li",{parentName:"ul"},"Le champ ",(0,n.kt)("strong",{parentName:"li"},"RPN (Reverse Polish Notation) Function"),"  d\xe9finit la formule permettant de calculer la m\xe9trique virtuelle. ")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Il n'est pas possible d'ajouter ensemble les m\xe9triques de diff\xe9rents services. Cependant, il est possible d'ajouter\ndes m\xe9triques virtuelles pour le calcul d'une nouvelle m\xe9trique.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Le champ ",(0,n.kt)("strong",{parentName:"li"},"Metric Unit")," d\xe9finit l'unit\xe9 de la m\xe9trique."),(0,n.kt)("li",{parentName:"ul"},"Le champ ",(0,n.kt)("strong",{parentName:"li"},"Warning threshold")," d\xe9finit le seuil d'alerte \xe0 afficher dans le graphique."),(0,n.kt)("li",{parentName:"ul"},"Le champ ",(0,n.kt)("strong",{parentName:"li"},"Critical threshold")," d\xe9finit le seuil critique \xe0 afficher dans le graphique."),(0,n.kt)("li",{parentName:"ul"},"Si la case *Hidden Graph and Legend** est coch\xe9e, alors la courbe et la l\xe9gende sont cach\xe9es."),(0,n.kt)("li",{parentName:"ul"},"Le champ ",(0,n.kt)("strong",{parentName:"li"},"Comment")," permet de commenter la m\xe9trique.")),(0,n.kt)("h2",{id:"exemple"},"Exemple"),(0,n.kt)("p",null,"Configuration :"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(74862).Z,width:"2736",height:"639"})),(0,n.kt)("p",null,"R\xe9sultat :"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(94893).Z,width:"2742",height:"718"})))}f.isMDXComponent=!0},72229:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/02addvmetric-f2a5dc11795f3765deeed3d8a7e727ef.png"},74862:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/02virtualmetric_conf-330000d821ea689bf969c2cb4180637a.png"},94893:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/02virtualmetric_example-b3a3f18d02492c8a142f9e03ed6d7c70.png"}}]);