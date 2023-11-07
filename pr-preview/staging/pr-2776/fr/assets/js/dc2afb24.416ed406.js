"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[36025],{11956:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>l});r(67294);var n=r(3905);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const s={id:"introduction",title:"Introduction \xe0 Centreon MAP (Legacy)"},u=void 0,c={unversionedId:"graph-views/introduction",id:"version-23.10/graph-views/introduction",title:"Introduction \xe0 Centreon MAP (Legacy)",description:"Les capacit\xe9s de visualisation graphique de Centreon reposent sur le module Centreon MAP.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/graph-views/introduction.md",sourceDirName:"graph-views",slug:"/graph-views/introduction",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/graph-views/introduction",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/graph-views/introduction.md",tags:[],version:"23.10",lastUpdatedAt:1699375250,formattedLastUpdatedAt:"7 nov. 2023",frontMatter:{id:"introduction",title:"Introduction \xe0 Centreon MAP (Legacy)"},sidebar:"version-23.10/docs",previous:{title:"D\xe9pannage de MAP",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/graph-views/map-web-troubleshooting"},next:{title:"Installer l'extension MAP de Centreon",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/graph-views/install"}},p={},l=[{value:"Aper\xe7u de l&#39;interface",id:"aper\xe7u-de-linterface",level:2},{value:"Proc\xe9dures",id:"proc\xe9dures",level:2},{value:"G\xe9rer MAP (Legacy)",id:"g\xe9rer-map-legacy",level:3},{value:"Utiliser MAP (Legacy)",id:"utiliser-map-legacy",level:3}],d={toc:l},g="wrapper";function m(e){var{components:t}=e,s=o(e,["components"]);return(0,n.kt)(g,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},d,s),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Les capacit\xe9s de visualisation graphique de Centreon reposent sur le module ",(0,n.kt)("strong",{parentName:"p"},"Centreon MAP"),"."),(0,n.kt)("p",null,"Centreon MAP est un outil de visualisation et de cartographie de donn\xe9es con\xe7u pour les administrateurs et les d\xe9veloppeurs de la gestion des op\xe9rations informatiques (ITOM).\nIl est capable d'afficher des aper\xe7us graphiques efficaces et de cartographier des donn\xe9es corr\xe9l\xe9es dans des vues personnalis\xe9es pertinentes pour l'utilisateur."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Centreon MAP est une ",(0,n.kt)("strong",{parentName:"p"},"extension")," Centreon qui n\xe9cessite une ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/administration/licenses"},"licence")," valide.\nPour en acqu\xe9rir une et r\xe9cup\xe9rer les d\xe9p\xf4ts n\xe9cessaires, contactez ",(0,n.kt)("a",{parentName:"p",href:"mailto:sales@centreon.com"},"Centreon"),".")),(0,n.kt)("h2",{id:"aper\xe7u-de-linterface"},"Aper\xe7u de l'interface"),(0,n.kt)("p",null,"Voici un aper\xe7u de MAP (Legacy). Vous devez d'abord cr\xe9er des vues logiques \xe0 l'aide du client lourd :"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(84107).Z,width:"1332",height:"751"})),(0,n.kt)("p",null,"Vous pouvez ensuite les visualiser directement dans votre navigateur :"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(40396).Z,width:"2204",height:"1305"})),(0,n.kt)("p",null,"Vous pouvez \xe9galement utiliser la vue g\xe9ographique pour afficher les ressources de la mani\xe8re dont votre informatique est r\xe9partie dans une ville, un pays ou le monde."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(67122).Z,width:"1665",height:"883"})),(0,n.kt)("p",null,"Les deux types de vues peuvent \xeatre affich\xe9s dans la m\xeame interface utilisateur web Centreon :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Soit \xe0 partir de l'interface utilisateur d\xe9di\xe9e Centreon MAP, qui comprend \xe9galement une fonction de recherche."),(0,n.kt)("li",{parentName:"ul"},"Soit dans une vue personnalis\xe9e, \xe0 l'aide du widget Centreon MAP d\xe9di\xe9.")),(0,n.kt)("h2",{id:"proc\xe9dures"},"Proc\xe9dures"),(0,n.kt)("p",null,"Les proc\xe9dures suivantes permettent d'utiliser et de g\xe9rer Centreon MAP (Legacy)."),(0,n.kt)("h3",{id:"g\xe9rer-map-legacy"},"G\xe9rer MAP (Legacy)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/graph-views/install"},"Installer Centreon MAP (Legacy)")," d\xe9crit les pr\xe9requis et les proc\xe9dures d'installation de MAP (Legacy), \xe9galement appel\xe9 client lourd Map4."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/graph-views/update"},"Mettre \xe0 jour l'extension")," d\xe9crit le processus de mise \xe0 jour de MAP (Legacy)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/graph-views/upgrade"},"Monter de version l'extension")," d\xe9crit le processus de mont\xe9e de version de MAP (Legacy)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/graph-views/migrate"},"Migrer l'extension")," d\xe9crit comment migrer le serveur MAP (Legacy) vers un autre serveur."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/graph-views/configuration"},"Configurer les droits")," explique comment g\xe9rer les droits des utilisateurs et d\xe9crit les param\xe8tres de personnalisation."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/graph-views/remote-server"},"Installer MAP (Legacy) sur un serveur distant")," explique comment installer MAP (Legacy) sur un serveur distant."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/graph-views/advanced-configuration"},"Configuration avanc\xe9e")," d\xe9crit les proc\xe9dures avanc\xe9es pour configurer MAP (Legacy)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/graph-views/known-issues"},"Probl\xe8mes connus sur MAP (Legacy)")," est une liste d'incidents que vous pouvez rencontrer en utilisant MAP (Legacy)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/graph-views/troubleshooter"},"D\xe9pannage de MAP (Legacy)")," vous aide \xe0 r\xe9soudre certains probl\xe8mes survenant dans MAP (Legacy).")),(0,n.kt)("h3",{id:"utiliser-map-legacy"},"Utiliser MAP (Legacy)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/graph-views/create-standard-view"},"Cr\xe9er une vue standard")," en utilisant MAP (Legacy). Cette page d\xe9crit \xe9galement les bonnes pratiques et limitations."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/graph-views/create-geo-view"},"Cr\xe9er une vue g\xe9ographique")," en utilisant l'interface web. Cette proc\xe9dure explique comment afficher vos ressources dans une zone g\xe9ographique d\xe9finie."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/graph-views/display-view"},"Afficher les vues")," depuis l'interface Web. Cette page d\xe9crit \xe9galement les fonctions d\xe9di\xe9es."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/graph-views/share-view"},"Partager une vue")," vous permet de partager des vues avec un groupe limit\xe9 de personnes.")))}m.isMDXComponent=!0},84107:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/desktop-198466dd6f5c90d4bd77fda57f36b43f.gif"},67122:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/display_geo_view-3751f53cc1d19c2e488226b6877423d0.gif"},40396:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/first_page_web-87b6e464ac3fb88fe8c86a858c4f0066.png"}}]);