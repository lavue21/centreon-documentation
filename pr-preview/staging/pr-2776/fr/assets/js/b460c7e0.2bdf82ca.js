"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[86845],{43492:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>c});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"autologin",title:"Configurer une authentification par Autologin"},u=void 0,p={unversionedId:"connect/autologin",id:"version-23.10/connect/autologin",title:"Configurer une authentification par Autologin",description:"La fonctionnalit\xe9 d'Autologin vous permet de donner acc\xe8s \xe0 la plateforme via une simple URL, sans login ni mot de passe. Utilisez l'Autologin par exemple pour afficher des custom views sur un grand \xe9cran dans votre espace de travail.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/connect/autologin.md",sourceDirName:"connect",slug:"/connect/autologin",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/connect/autologin",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/connect/autologin.md",tags:[],version:"23.10",lastUpdatedAt:1699375250,formattedLastUpdatedAt:"7 nov. 2023",frontMatter:{id:"autologin",title:"Configurer une authentification par Autologin"},sidebar:"version-23.10/docs",previous:{title:"Configurer une authentification par SAML",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/connect/saml"},next:{title:"Extensions",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/administration/extensions"}},s={},c=[{value:"\xc9tape 1 : Activer l&#39;autologin",id:"\xe9tape-1--activer-lautologin",level:2},{value:"\xc9tape 2 : Cr\xe9er un utilisateur autologin",id:"\xe9tape-2--cr\xe9er-un-utilisateur-autologin",level:2},{value:"\xc9tape 3 : R\xe9cup\xe9rer l&#39;URL de connexion",id:"\xe9tape-3--r\xe9cup\xe9rer-lurl-de-connexion",level:2}],m={toc:c},d="wrapper";function g(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(d,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"La fonctionnalit\xe9 d'Autologin vous permet de donner acc\xe8s \xe0 la plateforme via une simple URL, sans login ni mot de passe. Utilisez l'Autologin par exemple pour afficher des custom views sur un grand \xe9cran dans votre espace de travail. "),(0,r.kt)("h2",{id:"\xe9tape-1--activer-lautologin"},"\xc9tape 1 : Activer l'autologin"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Allez \xe0 la page ",(0,r.kt)("strong",{parentName:"p"},"Administration > Param\xe8tres > Centreon web"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Dans la section ",(0,r.kt)("strong",{parentName:"p"},"Propri\xe9t\xe9s d'authentification"),", cochez les cases suivantes :"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Activer la connexion automatique")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Afficher le raccourci de connexion automatique"),". "))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Cliquez sur ",(0,r.kt)("strong",{parentName:"p"},"Sauvegarder"),"."))),(0,r.kt)("h2",{id:"\xe9tape-2--cr\xe9er-un-utilisateur-autologin"},"\xc9tape 2 : Cr\xe9er un utilisateur autologin"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/monitoring/basic-objects/contacts-create"},"Cr\xe9ez un utilisateur")," ",(0,r.kt)("strong",{parentName:"p"},"autologin"),", et ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/administration/access-control-lists"},"donnez-lui des droits d'acc\xe8s")," uniquement sur les pages qui devront \xeatre affich\xe9es.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\xc9ditez l'utilisateur. Allez \xe0 l'onglet ",(0,r.kt)("strong",{parentName:"p"},"Authentification")," :"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"activez l'option ",(0,r.kt)("strong",{parentName:"li"},"Autoriser l'utilisateur \xe0 se connecter \xe0 l'interface web"),"."),(0,r.kt)("li",{parentName:"ul"},"\xe0 droite du champ ",(0,r.kt)("strong",{parentName:"li"},"Cl\xe9 d'auto-connexion"),", cliquez sur ",(0,r.kt)("strong",{parentName:"li"},"G\xe9n\xe9rer"),". Notez la cl\xe9 ainsi g\xe9n\xe9r\xe9e."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Cliquez sur ",(0,r.kt)("strong",{parentName:"p"},"Sauvegarder"),"."))),(0,r.kt)("h2",{id:"\xe9tape-3--r\xe9cup\xe9rer-lurl-de-connexion"},"\xc9tape 3 : R\xe9cup\xe9rer l'URL de connexion"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Connectez-vous \xe0 Centreon en tant que l'utilisateur ",(0,r.kt)("strong",{parentName:"p"},"autologin"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Allez \xe0 la page que vous voudrez afficher, puis cliquez sur l'ic\xf4ne profil en haut \xe0 droite de l'\xe9cran.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Cliquez sur ",(0,r.kt)("strong",{parentName:"p"},"Copier le lien de connexion automatique")," pour obtenir l'URL \xe0 utiliser. Les URLs d'autologin ont la structure suivante :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"http://[IP_CENTREON]/centreon/main.php?p=[num\xe9ro_page]&autologin=1&useralias=[login_utilisateur]&token=[cl\xe9_autologin]\n")),(0,r.kt)("p",{parentName:"li"},"Exemple : Le lien suivant permet \xe0 l'utilisateur ",(0,r.kt)("strong",{parentName:"p"},"admin")," de se connecter \xe0 la page ",(0,r.kt)("strong",{parentName:"p"},"Accueil > Vues personnalis\xe9es")," : "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"http://10.29.11.2/centreon/main.php?p=103&autologin=1&useralias=admin&token=3sWymDJk\n")),(0,r.kt)("p",{parentName:"li"},"Pour afficher Centreon en plein \xe9cran, sans les menus ni l'en-t\xeate, ajoutez ",(0,r.kt)("strong",{parentName:"p"},"&min=1")," \xe0 la fin de l'URL."))))}g.isMDXComponent=!0}}]);