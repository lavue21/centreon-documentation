"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[9732],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),c=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},l=function(e){var r=c(e.components);return a.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=n,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return t?a.createElement(f,u(u({ref:r},l),{},{components:t})):a.createElement(f,u({ref:r},l))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,u=new Array(o);u[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,u[1]=i;for(var c=2;c<o;c++)u[c]=t[c];return a.createElement.apply(null,u)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},73152:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>u,metadata:()=>s,toc:()=>l});t(67294);var a=t(3905);function n(){return n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},n.apply(this,arguments)}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}const u={id:"map-web-manage",title:"G\xe9rer les cartes dans MAP"},i=void 0,s={unversionedId:"graph-views/map-web-manage",id:"version-23.10/graph-views/map-web-manage",title:"G\xe9rer les cartes dans MAP",description:"Cette page d\xe9crit comment cr\xe9er et g\xe9rer les cartes \xe0 partir de l'interface Centreon MAP. Vous pouvez cr\xe9er deux types de cartes :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/graph-views/map-web-manage.md",sourceDirName:"graph-views",slug:"/graph-views/map-web-manage",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/docs/graph-views/map-web-manage",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/next/i18n/fr/docusaurus-plugin-content-docs/version-23.10/graph-views/map-web-manage.md",tags:[],version:"23.10",lastUpdatedAt:1700565273,formattedLastUpdatedAt:"21 nov. 2023",frontMatter:{id:"map-web-manage",title:"G\xe9rer les cartes dans MAP"},sidebar:"version-23.10/docs",previous:{title:"G\xe9rer les droits d'acc\xe8s dans MAP",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/docs/graph-views/map-web-access"},next:{title:"Cr\xe9er une carte standard",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/docs/graph-views/map-web-create-standard-map"}},c={},l=[{value:"Information sur le statut d&#39;une carte",id:"information-sur-le-statut-dune-carte",level:2},{value:"Proc\xe9der \xe0 des actions sur une carte",id:"proc\xe9der-\xe0-des-actions-sur-une-carte",level:2},{value:"Dupliquer une carte",id:"dupliquer-une-carte",level:3},{value:"Supprimer une carte",id:"supprimer-une-carte",level:3},{value:"Modifier les propri\xe9t\xe9s de la carte",id:"modifier-les-propri\xe9t\xe9s-de-la-carte",level:3},{value:"Partager une carte",id:"partager-une-carte",level:3},{value:"Copier l&#39;URL de la carte",id:"copier-lurl-de-la-carte",level:3}],p={toc:l};function d(e){var{components:r}=e,t=o(e,["components"]);return(0,a.kt)("wrapper",n({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Cette page d\xe9crit comment cr\xe9er et g\xe9rer les cartes \xe0 partir de l'interface Centreon MAP. Vous pouvez cr\xe9er deux types de cartes :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cartes standard : pour visualiser des repr\xe9sentations graphiques de votre infrastructure supervis\xe9e."),(0,a.kt)("li",{parentName:"ul"},"Vues g\xe9ographiques : pour afficher les ressources de votre infrastructure sur une zone g\xe9ographique d\xe9finie.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Les options disponibles dans l'interface MAP d\xe9pendent des permissions qui vous ont \xe9t\xe9 attribu\xe9es par votre administrateur. Voir la page ",(0,a.kt)("a",n({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/fr/docs/graph-views/map-web-access"}),"G\xe9rer les droits d'acc\xe8s dans MAP")," pour plus d'informations sur les privil\xe8ges et permissions.")),(0,a.kt)("p",null,"L'affichage du bouton ",(0,a.kt)("strong",{parentName:"p"},"Add a Map")," et du bouton ",(0,a.kt)("strong",{parentName:"p"},"Add a Geographic view")," signifie que vous \xeates autoris\xe9 \xe0 cr\xe9er une carte et que vous appartenez \xe0 un groupe d'acc\xe8s auquel est attribu\xe9 le r\xf4le de cr\xe9ateur."),(0,a.kt)("h2",n({},{id:"information-sur-le-statut-dune-carte"}),"Information sur le statut d'une carte"),(0,a.kt)("p",null,"La page d'accueil affiche la liste des cartes existantes et vous pouvez visualiser pour chaque carte, le statut le plus d\xe9favorable de toutes les ressources ou conteneurs inclus dans la carte."),(0,a.kt)("h2",n({},{id:"proc\xe9der-\xe0-des-actions-sur-une-carte"}),"Proc\xe9der \xe0 des actions sur une carte"),(0,a.kt)("p",null,"Vous pouvez effectuer des actions sur chaque carte standard et chaque vue g\xe9ographique \xe0 laquelle vous avez acc\xe8s. Suivez ces proc\xe9dures si vous souhaitez modifier les propri\xe9t\xe9s d'une carte, la partager ou la supprimer."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Les fonctionnalit\xe9s de partage et de copie d'URL d'une carte ne sont pas disponibles sur une vue g\xe9ographique.")),(0,a.kt)("h3",n({},{id:"dupliquer-une-carte"}),"Dupliquer une carte"),(0,a.kt)("p",null,"Cliquez sur le menu avec les trois points verticaux en haut \xe0 droite de la carte, puis cliquez sur ",(0,a.kt)("strong",{parentName:"p"},"Dupliquer"),'.\nUne nouvelle carte est automatiquement cr\xe9\xe9e, avec "- copie" ajout\xe9 au nom initial.'),(0,a.kt)("h3",n({},{id:"supprimer-une-carte"}),"Supprimer une carte"),(0,a.kt)("p",null,"Cliquez sur le bouton de la corbeille et confirmez la suppression en cliquant sur le bouton ",(0,a.kt)("strong",{parentName:"p"},"Supprimer"),"."),(0,a.kt)("h3",n({},{id:"modifier-les-propri\xe9t\xe9s-de-la-carte"}),"Modifier les propri\xe9t\xe9s de la carte"),(0,a.kt)("p",null,"Cliquez sur le bouton de cl\xe9 \xe0 molette pour modifier les propri\xe9t\xe9s de la carte et confirmez les modifications en cliquant sur le bouton ",(0,a.kt)("strong",{parentName:"p"},"Modifier"),"."),(0,a.kt)("h3",n({},{id:"partager-une-carte"}),"Partager une carte"),(0,a.kt)("p",null,"Cliquez sur le bouton de partage pour modifier les privil\xe8ges du groupe d'acc\xe8s et confirmez les modifications en cliquant sur le bouton ",(0,a.kt)("strong",{parentName:"p"},"Sauvegarder"),"."),(0,a.kt)("h3",n({},{id:"copier-lurl-de-la-carte"}),"Copier l'URL de la carte"),(0,a.kt)("p",null,"Un bouton de copie d'URL de la carte est disponible en mode visualisation, ce qui vous permet de partager facilement la carte que vous avez ouverte."))}d.isMDXComponent=!0}}]);