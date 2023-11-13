"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[53e3],{90435:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>u,metadata:()=>i,toc:()=>c});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const u={id:"known-issues",title:"Probl\xe8mes connus dans MAP (Legacy)"},l=void 0,i={unversionedId:"graph-views/known-issues",id:"version-23.10/graph-views/known-issues",title:"Probl\xe8mes connus dans MAP (Legacy)",description:"Vous trouverez ci-dessous une liste de probl\xe8mes et/ou de bugs connus que vous pouvez rencontrer lors de l'utilisation de Centreon MAP.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/graph-views/known-issues.md",sourceDirName:"graph-views",slug:"/graph-views/known-issues",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/graph-views/known-issues",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/graph-views/known-issues.md",tags:[],version:"23.10",lastUpdatedAt:1699872045,formattedLastUpdatedAt:"13 nov. 2023",frontMatter:{id:"known-issues",title:"Probl\xe8mes connus dans MAP (Legacy)"},sidebar:"version-23.10/docs",previous:{title:"Partager une vue",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/graph-views/share-view"},next:{title:"D\xe9pannage de MAP (Legacy)",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/graph-views/troubleshooter"}},p={},c=[],d={toc:c},m="wrapper";function g(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)(m,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Vous trouverez ci-dessous une liste de probl\xe8mes et/ou de bugs connus que vous pouvez rencontrer lors de l'utilisation de Centreon MAP.\nNous essayons de fournir des solutions de contournement. Nous appliquons des correctifs lorsque cela est n\xe9cessaire et nous am\xe9liorons constamment notre logiciel afin de r\xe9soudre les probl\xe8mes pour les prochaines versions."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Probl\xe8mes"),(0,r.kt)("th",{parentName:"tr",align:null},"Solution de contournement si elle existe"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dans certains cas rares, le contenu d'un conteneur peut sembler non modifiable. En fait, il peut \xeatre modifi\xe9 mais le rendu n'est pas mis \xe0 jour du c\xf4t\xe9 client."),(0,r.kt)("td",{parentName:"tr",align:null},"Pour mettre \xe0 jour le contenu : Red\xe9marrez centreon-map (tapez : systemctl restart centreon-map) et contactez le support pour que nous puissions analyser votre plateforme.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Il se peut que vous rencontriez parfois un retour \xe0 la ligne illogique pour les mots sur l'interface web (mots coup\xe9s en deux)."),(0,r.kt)("td",{parentName:"tr",align:null},"Ajustez la taille ou l'\xe9tiquette de l'\xe9l\xe9ment pour obtenir un rendu parfait sur l'interface web (mais peut-\xeatre pas sur le client lourd).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Il se peut que votre client lourd se d\xe9connecte sans raison apparente. Vous \xeates d\xe9connect\xe9 et revenez \xe0 la page de connexion. Cela peut se produire lors du d\xe9marrage du client lourd ou de la migration de MAP 3 \xe0 MAP 4."),(0,r.kt)("td",{parentName:"tr",align:null},"Cela peut \xeatre li\xe9 au temps n\xe9cessaire au transfert des donn\xe9es. Ouvrez le fichier Centreon-Map4.ini sur le client lourd et ajoutez -Dread.timeout=600 \xe0 la fin. Red\xe9marrez ensuite le client lourd pour appliquer les modifications.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Une fen\xeatre contextuelle ind\xe9sirable appara\xeet sur le client de bureau et affiche des donn\xe9es hexad\xe9cimales. Cela peut \xeatre d\xfb \xe0 certains caract\xe8res UTF-8 sp\xe9ciaux qui peuvent appara\xeetre dans la configuration Centreon ou la base de donn\xe9es en temps r\xe9el, rendant les fichiers XML invalides."),(0,r.kt)("td",{parentName:"tr",align:null},'Sur le serveur Centreon MAP, ex\xe9cutez le script suivant : /etc/centreon-studio/findSpecialCharacters.sh. Cela localisera tous les caract\xe8res sp\xe9ciaux. Si le script ne met aucun caract\xe8re en \xe9vidence, veuillez nous contacter. Ce script n\xe9cessite un utilisateur MariaDB disposant de privil\xe8ges de s\xe9lection, de cr\xe9ation et de suppression sur la base de donn\xe9es "centreon".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Lorsque vous ajoutez des groupes d'h\xf4tes \xe0 une vue g\xe9ographique affich\xe9e dans un widget, les h\xf4tes ne sont pas correctement positionn\xe9s."),(0,r.kt)("td",{parentName:"tr",align:null},"Faites un zoom arri\xe8re jusqu'\xe0 ce que vous voyiez les h\xf4tes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dans la liste des vues, vous ne pouvez pas entrer dans une vue en cliquant dessus."),(0,r.kt)("td",{parentName:"tr",align:null},"Appuyez sur ",(0,r.kt)("em",{parentName:"td"},"Entr\xe9e")," pour acc\xe9der \xe0 la vue.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Un polygone n'est pas rendu correctement, notamment apr\xe8s avoir \xe9t\xe9 redimensionn\xe9."),(0,r.kt)("td",{parentName:"tr",align:null},"Appelez des images au lieu de dessiner des polygones.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'Le message "Le serveur MAP est d\xe9connect\xe9 de Broker" peut occasionnellement appara\xeetre sur le client lourd.'),(0,r.kt)("td",{parentName:"tr",align:null},"Ignorez ce message.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dans l'interface web, lorsque vous double-cliquez sur un widget \"processus\", la commande sous-jacente n'est pas ex\xe9cut\xe9e sur l'h\xf4te cible."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"La suppression d'images sur le serveur central Centreon n'est pas appliqu\xe9e instantan\xe9ment au client lourd."),(0,r.kt)("td",{parentName:"tr",align:null},"Red\xe9marrez le client lourd pour que l'image ou les images supprim\xe9es disparaissent.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Lorsque vous cr\xe9ez une jauge avec une largeur ","<","200 et une hauteur ","<","80, le r\xe9sultat affich\xe9 peut diff\xe9rer entre les clients web et desktop."),(0,r.kt)("td",{parentName:"tr",align:null},"Ajustez la taille de la jauge.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Le redimensionnement des polygones peut ne pas fonctionner comme pr\xe9vu."),(0,r.kt)("td",{parentName:"tr",align:null},"Nous vous conseillons de les recr\xe9er si le rendu \xe9choue sur le client web.")))))}g.isMDXComponent=!0}}]);