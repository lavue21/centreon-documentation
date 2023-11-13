"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[31948],{2246:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>u,metadata:()=>l,toc:()=>p});r(67294);var n=r(3905);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}const u={id:"create-graphical-view",title:"Cr\xe9er une vue graphique",descritption:"Tutoriel MAP"},o=void 0,l={unversionedId:"getting-started/create-graphical-view",id:"version-23.10/getting-started/create-graphical-view",title:"Cr\xe9er une vue graphique",description:"L'objectif de ce tutoriel est de vous aider \xe0 comprendre comment utiliser",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/getting-started/create-graphical-view.md",sourceDirName:"getting-started",slug:"/getting-started/create-graphical-view",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/getting-started/create-graphical-view",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/getting-started/create-graphical-view.md",tags:[],version:"23.10",lastUpdatedAt:1699872045,formattedLastUpdatedAt:"13 nov. 2023",frontMatter:{id:"create-graphical-view",title:"Cr\xe9er une vue graphique",descritption:"Tutoriel MAP"},sidebar:"version-23.10/docs",previous:{title:"Tutorials for Business modules",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/category/tutorials-for-business-modules"},next:{title:"Mod\xe9liser un service IT",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/getting-started/model-it-services"}},c={},p=[{value:"Avant de cr\xe9er la vue : d\xe9finir les objectifs",id:"avant-de-cr\xe9er-la-vue--d\xe9finir-les-objectifs",level:3},{value:"L&#39;espace de travail",id:"lespace-de-travail",level:3},{value:"Cr\xe9er une nouvelle vue",id:"cr\xe9er-une-nouvelle-vue",level:3},{value:"Cr\xe9er une vue g\xe9ographique",id:"cr\xe9er-une-vue-g\xe9ographique",level:2},{value:"Afficher et partager une vue",id:"afficher-et-partager-une-vue",level:2}],d={toc:p},v="wrapper";function g(e){var{components:t}=e,u=i(e,["components"]);return(0,n.kt)(v,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}({},d,u),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"L'objectif de ce tutoriel est de vous aider \xe0 comprendre comment utiliser\nl'extension de pr\xe9sentation de donn\xe9es Centreon MAP afin de fournir un aper\xe7u des statuts\nde votre infrastructure IT en temps r\xe9el \xe0 vos \xe9quipes ITOM et \xe0 vos utilisateurs op\xe9rationnels."),(0,n.kt)("p",null,"Avec Centreon MAP, vous pouvez de mani\xe8re simple cr\xe9er et partager des vues de supervision temps r\xe9el afin de\nsuperviser les performances de votre infrastructure IT, de votre r\xe9seau, vos applications et vos services."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(87909).Z,width:"1290",height:"717"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(26986).Z,width:"1443",height:"791"})),(0,n.kt)("p",null,"Exemple : Gr\xe2ce \xe0 ces vues temps r\xe9el, les \xe9quipes ITOM et leurs managers peuvent visualiser instantan\xe9ment la disponibilit\xe9\nde services et d'applications m\xe9tier critiques. Cela garantit un meilleur temps de r\xe9action en cas de panne et optimise le\ntemps moyen de r\xe9tablissement du service (MTRS : Mean Time to Restore Service)."),(0,n.kt)("p",null,"Dans ce tutoriel, nous montrerons comment cr\xe9er des vues avec Centreon MAP.\nApr\xe8s avoir lu cet article, vous aurez d\xe9couvert les fonctionnalit\xe9s principales de Centreon MAP\net vous serez capable de cr\xe9er des vues qui r\xe9pondent aux besoins de vos utilisateurs techniques et m\xe9tier."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Centreon MAP est une ",(0,n.kt)("strong",{parentName:"p"},"extension")," Centreon qui demande une cl\xe9 de licence valide. Pour en acheter une et r\xe9cup\xe9rer les d\xe9p\xf4ts n\xe9cessaires, contactez ",(0,n.kt)("a",{parentName:"p",href:"mailto:sales@centreon.com"},"Centreon"),"."),(0,n.kt)("h2",{parentName:"blockquote",id:"cr\xe9er-une-vue-logique"},"Cr\xe9er une vue logique")),(0,n.kt)("h3",{id:"avant-de-cr\xe9er-la-vue--d\xe9finir-les-objectifs"},"Avant de cr\xe9er la vue : d\xe9finir les objectifs"),(0,n.kt)("p",null,"D\xe9finissez l'objectif principal de la vue : \xe0 quel besoin r\xe9pond-elle, \xe0 qui s'adresse-t-elle ?\nVoil\xe0 quelques questions \xe0 prendre en compte :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\xc0 qui s'adresse la vue ? (profils utilisateur)"),(0,n.kt)("li",{parentName:"ul"},"De quel niveau d'information les utilisateurs ont-ils besoin ?"),(0,n.kt)("li",{parentName:"ul"},"Toutes les ressources et tous les indicateurs dont j'ai besoin pour cr\xe9er cette vue sont-ils bien en supervision ?"),(0,n.kt)("li",{parentName:"ul"},"Quel type d'informations doit contenir la vue ? (ressources, indicateurs,\ngraphiques, liens r\xe9seau, etc). Il peut \xeatre utile de sch\xe9matiser la vue sur papier.")),(0,n.kt)("p",null,"Maintenant que les objectifs de la vue sont d\xe9finis, voyons comment la r\xe9aliser."),(0,n.kt)("h3",{id:"lespace-de-travail"},"L'espace de travail"),(0,n.kt)("p",null,"Connectez-vous au serveur Centreon MAP gr\xe2ce au client desktop : l'espace de travail suivant appara\xeet.\nVoici une illustration. Par d\xe9faut aucune vue n'est ouverte."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(52530).Z,width:"1791",height:"877"})),(0,n.kt)("p",null,"L'interface est organis\xe9e de la mani\xe8re suivante :"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Vues")," : Vues existantes auxquelles vous avez acc\xe8s"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"\xc9l\xe9ments")," : Objets utilis\xe9s dans les vues ouvertes"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"M\xe9dias"),": Images disponibles"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Ressources")," : Objets Centreon pouvant \xeatre utilis\xe9s dans la vue (par glisser-d\xe9poser)"),(0,n.kt)("li",{parentName:"ol"},"Contenu de la vue"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Palette")," : \xc9l\xe9ments graphiques pouvant \xeatre utilis\xe9s dans la vue"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Propri\xe9t\xe9s")," : Propri\xe9t\xe9s de l'\xe9l\xe9ment s\xe9lectionn\xe9")),(0,n.kt)("h3",{id:"cr\xe9er-une-nouvelle-vue"},"Cr\xe9er une nouvelle vue"),(0,n.kt)("p",null,"Pour cr\xe9er une nouvelle vue, faites un clic droit sur le panneau ",(0,n.kt)("strong",{parentName:"p"},"Vues")," puis cliquez sur ",(0,n.kt)("strong",{parentName:"p"},"Ajouter"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(44788).Z,width:"1582",height:"886"})),(0,n.kt)("p",null,"Positionnez des ressources, des widgets et autres \xe9l\xe9ments, en utilisant le glisser-d\xe9poser et les raccourcis."),(0,n.kt)("p",null,"Voici ci-dessous un exemple de vue sur le statut temps r\xe9el d'une infrastructure IT cr\xe9\xe9e en moins de 4 minutes (en Anglais) :"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(15097).Z,width:"234",height:"300"})),(0,n.kt)("div",{align:"center"},(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/tsgYRpYqaAU",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,n.kt)("h2",{id:"cr\xe9er-une-vue-g\xe9ographique"},"Cr\xe9er une vue g\xe9ographique"),(0,n.kt)("p",null,"Que votre infrastructure IT soit r\xe9partie g\xe9ographiquement sur une ville, un pays ou \xe0 travers le monde,\nvous avez besoin de visualiser l'\xe9tat de votre infrastrcture IT de la fa\xe7on la plus appropri\xe9e."),(0,n.kt)("p",null,"Vous pouvez faire cela facilement en utilisant une ",(0,n.kt)("strong",{parentName:"p"},"GeoView"),". Le seul pr\xe9requis est d'avoir rempli le champ\n",(0,n.kt)("strong",{parentName:"p"},"Coordonn\xe9es g\xe9ographiques")," pour vos h\xf4tes (\xe0 la page ",(0,n.kt)("strong",{parentName:"p"},"Configuration > H\xf4tes > H\xf4tes"),", onglet ",(0,n.kt)("strong",{parentName:"p"},"Informations d\xe9taill\xe9es de l'h\xf4te"),")."),(0,n.kt)("p",null,"Pour cr\xe9er une ",(0,n.kt)("strong",{parentName:"p"},"GeoView"),", allez \xe0 la page ",(0,n.kt)("strong",{parentName:"p"},"Supervision ",">"," Map"),' et cliquez sur le "+"\ndans la section ',(0,n.kt)("strong",{parentName:"p"},"G\xe9ographique"),'. (Si vous ne voyez pas le "+", cela signifie que vous n\'avez pas les droits n\xe9cessaires.)'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(161).Z,width:"1517",height:"857"})),(0,n.kt)("h2",{id:"afficher-et-partager-une-vue"},"Afficher et partager une vue"),(0,n.kt)("p",null,"Gr\xe2ce \xe0 un m\xe9canisme de contr\xf4le d'acc\xe8s bas\xe9 sur les objets ACL Centreon, vous pouvez facilement partager les vues que vous voulez avec les \xe9quipes d\xe9sir\xe9es. D\xe8s qu'une vue est partag\xe9e avec un utilisateur, elle est accessible pour lui \xe0 la page\n",(0,n.kt)("strong",{parentName:"p"},"Supervision > Map"),", ou m\xeame directement dans un tableau de bord en utilisant le widget Centreon Map (exemple ci-dessous)."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(24660).Z,width:"1920",height:"944"})),(0,n.kt)("p",null,"Vous avez maintenant assez d'informations pour commencer \xe0 utiliser Centreon MAP."))}g.isMDXComponent=!0},161:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/create_geo_view-b5d75fcc878399aebf3aa2a3753ecdba.gif"},44788:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/create_view-f9f537fdc7f4015126fc64c6e8a4b198.gif"},15097:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ex_view-b8380659b2aef45ad841a85abb13af16.jpg"},24660:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/share_view-7a69715bc8e3516300409fb1517b7f8a.png"},87909:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/tuto_ex_1-f6c59894a2e0886ea61a629786abb0ca.png"},26986:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/tuto_ex_2-abc819a9f8f9eb8465d6d947bd1e5ab1.png"},52530:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/tuto_workspace-cb9cad4380701e4d96eec41111a65240.png"}}]);