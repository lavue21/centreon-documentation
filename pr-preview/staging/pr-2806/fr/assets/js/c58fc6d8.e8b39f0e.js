"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[69306],{11827:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>u,metadata:()=>p,toc:()=>c});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const u={id:"introduction",title:"Introduction \xe0 la mont\xe9e de version"},s=void 0,p={unversionedId:"upgrade/introduction",id:"version-23.10/upgrade/introduction",title:"Introduction \xe0 la mont\xe9e de version",description:"Ce chapitre d\xe9crit le processus de mont\xe9e de version (upgrade) d'une plate-forme Centreon, c'est-\xe0-dire le passage d'une version majeure \xe0 une autre (par exemple, 21.10 \xe0 23.04).",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/upgrade/introduction.md",sourceDirName:"upgrade",slug:"/upgrade/introduction",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/upgrade/introduction",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/upgrade/introduction.md",tags:[],version:"23.10",lastUpdatedAt:1699872045,formattedLastUpdatedAt:"13 nov. 2023",frontMatter:{id:"introduction",title:"Introduction \xe0 la mont\xe9e de version"},sidebar:"version-23.10/docs",previous:{title:"Mise \xe0 jour d'une plateforme Centreon 23.04",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/update/update-centreon-platform"},next:{title:"Mont\xe9e de version depuis Centreon 22.10",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/upgrade/upgrade-from-22-10"}},d={},c=[],l={toc:c},m="wrapper";function g(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)(m,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},l,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Ce chapitre d\xe9crit le processus de mont\xe9e de version (upgrade) d'une plate-forme Centreon, c'est-\xe0-dire le passage d'une version majeure \xe0 une autre (par exemple, 21.10 \xe0 23.04)."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\xe0 partir de la version 23.04, Centreon ne supporte plus CentOS 7. Si votre plateforme Centreon \xe9tait install\xe9e sous CentOS 7, vous ne pouvez pas simplement monter de version : passez \xe0 un ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/installation/compatibility#syst%C3%A8me-dexploitation"},"OS support\xe9")," en suivant une ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/migrate/introduction"},"proc\xe9dure de migration"),".")),(0,n.kt)("p",null,"La proc\xe9dure d\xe9pend de la m\xe9thode d'installation de votre plate-forme Centreon.\nFaites une ",(0,n.kt)("strong",{parentName:"p"},"Mise \xe0 jour RPM")," si vous avez install\xe9 Centreon \xe0 partir de\nl'ISO ou des RPMS, et utilisez les fichiers source si vous avez install\xe9 Centreon \xe0 partir des sources. Avant de mettre\n\xe0 jour, r\xe9alisez une sauvegarde."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Si vous utilisez au moins un des modules BAM, MAP ou MBI, vous devez mettre\nen place leur nouveau d\xe9p\xf4t afin d'\xe9viter les probl\xe8mes de d\xe9pendances.\nVoir ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/reporting/upgrade#monter-de-version-du-paquet"},"cette page"),"\nqui vous indique comment le r\xe9cup\xe9rer.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Si vous souhaitez changer l'OS du serveur h\xf4te, suivez la ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/migrate/introduction"},"proc\xe9dure de migration"),". (Idem en cas de migration d'une plate-forme disposant du module ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/migrate/poller-display-to-remote-server"},"Centreon Poller\nDisplay 1.6.x")),").")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Le processus de mise \xe0 jour ne peut d\xe9marrer qu'\xe0 partir des versions ",(0,n.kt)("strong",{parentName:"p"},"2.8.0"),"\net ult\xe9rieures. Si vous avez une version pr\xe9c\xe9dente, veuillez d'abord mettre \xe0\njour vers la derni\xe8re version 2.8.x.")))}g.isMDXComponent=!0}}]);