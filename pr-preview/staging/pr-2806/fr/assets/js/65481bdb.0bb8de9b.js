"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[40695],{57782:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>v,frontMatter:()=>a,metadata:()=>u,toc:()=>p});s(67294);var r=s(3905);function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))})),e}function l(e,t){if(null==e)return{};var s,r,n=function(e,t){if(null==e)return{};var s,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)s=i[r],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)s=i[r],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}const a={id:"display-view",title:"Afficher les vues"},o=void 0,u={unversionedId:"graph-views/display-view",id:"version-23.10/graph-views/display-view",title:"Afficher les vues",description:"Les vues standard et g\xe9ographiques existantes sont accessibles \xe0 partir de l'interface utilisateur web de Centreon, si vous avez les droits d'acc\xe8s correspondants.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/graph-views/display-view.md",sourceDirName:"graph-views",slug:"/graph-views/display-view",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/graph-views/display-view",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/graph-views/display-view.md",tags:[],version:"23.10",lastUpdatedAt:1699872045,formattedLastUpdatedAt:"13 nov. 2023",frontMatter:{id:"display-view",title:"Afficher les vues"},sidebar:"version-23.10/docs",previous:{title:"Cr\xe9er une vue g\xe9ographique",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/graph-views/create-geo-view"},next:{title:"Partager une vue",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/graph-views/share-view"}},c={},p=[{value:"Comprendre les infobulles",id:"comprendre-les-infobulles",level:2},{value:"G\xe9rer la couleur des liens",id:"g\xe9rer-la-couleur-des-liens",level:2},{value:"Utiliser le widget",id:"utiliser-le-widget",level:2}],d={toc:p},f="wrapper";function v(e){var{components:t}=e,a=l(e,["components"]);return(0,r.kt)(f,i(function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},r=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),r.forEach((function(t){n(e,t,s[t])}))}return e}({},d,a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Les vues standard et g\xe9ographiques existantes sont accessibles \xe0 partir de l'interface utilisateur web de Centreon, si vous avez les droits d'acc\xe8s correspondants.\nVous pouvez les afficher en utilisant le menu ",(0,r.kt)("strong",{parentName:"p"},"Monitoring > Map")," ou en utilisant le widget Centreon MAP d\xe9di\xe9."),(0,r.kt)("p",null,"Vous trouverez ci-dessous les fonctions d\xe9di\xe9es de l'interface web Centreon MAP qui facilitent l'utilisation et les interactions avec les vues."),(0,r.kt)("h2",{id:"comprendre-les-infobulles"},"Comprendre les infobulles"),(0,r.kt)("p",null,"Sur l'interface web, il existe des fen\xeatres d'information appel\xe9es tooltips.\nElles apparaissent lorsque vous passez la souris sur certains types d'objets dans une vue : les liens (liens d'\xe9tat et liens m\xe9triques), les services, les m\xe9taservices, les h\xf4tes, les groupes d'h\xf4tes et les groupes de services.\nCette fen\xeatre reste ouverte tant que votre curseur est au dessus de l'info-bulle."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:s(39169).Z,width:"1359",height:"626"})),(0,r.kt)("p",null,"Selon le type d'objet GUI qui se trouve sous votre souris, diff\xe9rentes informations seront affich\xe9es.\nPar exemple, un lien (liens d'\xe9tat et liens m\xe9triques, services et m\xe9taservice) affichera :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Informations sur l'acquittement (si pr\xe9sent)"),(0,r.kt)("li",{parentName:"ul"},"Informations sur les temps d'arr\xeat (si elles sont pr\xe9sentes)"),(0,r.kt)("li",{parentName:"ul"},"Dur\xe9e."),(0,r.kt)("li",{parentName:"ul"},"Sortie.")),(0,r.kt)("p",null,"Dans le cas des h\xf4tes, des groupes d'h\xf4tes et des objets de service, ces informations r\xe9capitulatives \"au passage de la souris\" comprennent une liste des cinq ressources les plus r\xe9cemment utilis\xe9es dans le sous-niveau qui ont actuellement un impact sur l'h\xf4te/groupe d'h\xf4tes ou le groupe de service."),(0,r.kt)("p",null,"Les r\xe8gles suivantes s'appliquent :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Si un h\xf4te est indisponible, les services rattach\xe9s ne sont jamais affich\xe9s dans une infobulle."),(0,r.kt)("li",{parentName:"ul"},'Pour un h\xf4te : les services affich\xe9s correspondent au statut h\xe9rit\xe9 de l\'h\xf4te.\nPar exemple, si un h\xf4te est "rouge", alors seuls les services critiques seront affich\xe9s.'),(0,r.kt)("li",{parentName:"ul"},"Pour un groupe de services : les services affich\xe9s correspondent \xe0 l'\xe9tat h\xe9rit\xe9 du groupe de services."),(0,r.kt)("li",{parentName:"ul"},"Pour un groupe d'h\xf4tes : les h\xf4tes ayant le m\xeame statut que le groupe d'h\xf4tes sont affich\xe9s dans une infobulle ; et les services (si leur h\xf4te est OK) ayant le m\xeame statut h\xe9rit\xe9 que leur groupe d'h\xf4tes sont affich\xe9s.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Dans le widget des vues personnalis\xe9es, par d\xe9faut, les infobulles ne sont pas affich\xe9es. Il est possible de les activer par une case \xe0 cocher dans les param\xe8tres du widget.")),(0,r.kt)("h2",{id:"g\xe9rer-la-couleur-des-liens"},"G\xe9rer la couleur des liens"),(0,r.kt)("p",null,"Dans la version pr\xe9c\xe9dente de Centreon MAP, la couleur des liens \xe9tait d\xe9finie au niveau de l'utilisateur et chaque utilisateur devait configurer sa propre couleur en utilisant le client lourd.\nNous avons modifi\xe9 ce m\xe9canisme afin que vous puissiez d\xe9finir une m\xe9thode de coloration des liens pour ",(0,r.kt)("strong",{parentName:"p"},"tous les utilisateurs")," \xe0 la fois.\nPour ce faire :"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Allez dans ",(0,r.kt)("strong",{parentName:"li"},"Administration > Extension > Map | Options"),"."),(0,r.kt)("li",{parentName:"ol"},'Dans la section "D\xe9finition de la couleur du lien", s\xe9lectionnez la m\xe9thode et le param\xe8tre de coloration que vous souhaitez appliquer.')),(0,r.kt)("p",null,"Exemple : coloration lin\xe9aire du gris au bleu"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:s(72794).Z,width:"1904",height:"919"})),(0,r.kt)("p",null,"Autre exemple : gamme de couleurs"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:s(76081).Z,width:"1904",height:"919"})),(0,r.kt)("h2",{id:"utiliser-le-widget"},"Utiliser le widget"),(0,r.kt)("p",null,'Centreon MAP est livr\xe9 avec un widget que vous pouvez utiliser dans les vues personnalis\xe9es Centreon. Pour ce faire, ajoutez un nouveau widget sur la vue personnalis\xe9e et recherchez "MAP".'),(0,r.kt)("p",null,"Lorsque vous ajoutez le widget, vous pouvez s\xe9lectionner une vue et enregistrer la position et le zoom \xe0 n'importe quel niveau."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:s(40348).Z,width:"1884",height:"924"})))}v.isMDXComponent=!0},72794:(e,t,s)=>{s.d(t,{Z:()=>r});const r=s.p+"assets/images/links_color_1-6307c5286ccd8fafd1b878eaacc319d1.png"},76081:(e,t,s)=>{s.d(t,{Z:()=>r});const r=s.p+"assets/images/links_color_2-f908053a1f6e2a724fc9beb110d7851f.png"},39169:(e,t,s)=>{s.d(t,{Z:()=>r});const r=s.p+"assets/images/tooltips-920fad595cabd1a5cee9a6b9b2b65566.gif"},40348:(e,t,s)=>{s.d(t,{Z:()=>r});const r=s.p+"assets/images/widget-77f850729469683f4da5184527b00c88.png"}}]);