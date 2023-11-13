"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[78305],{61095:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>p});r(67294);var n=r(3905);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}const i={id:"platform",title:"\xc9l\xe9ments d'une plateforme Centreon"},l=void 0,o={unversionedId:"getting-started/platform",id:"version-23.10/getting-started/platform",title:"\xc9l\xe9ments d'une plateforme Centreon",description:"Selon vos besoins, votre plateforme peut \xeatre constitu\xe9e de plusieurs \xe9l\xe9ments : un serveur central, un ou plusieurs serveurs distants, et un ou plusieurs collecteurs.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/getting-started/platform.md",sourceDirName:"getting-started",slug:"/getting-started/platform",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/getting-started/platform",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/getting-started/platform.md",tags:[],version:"23.10",lastUpdatedAt:1699633150,formattedLastUpdatedAt:"10 nov. 2023",frontMatter:{id:"platform",title:"\xc9l\xe9ments d'une plateforme Centreon"},sidebar:"version-23.10/docs",previous:{title:"Quelle installation choisir ?",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/getting-started/which-install"},next:{title:"Mettre en place sa solution gratuite IT-100",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/getting-started/IT100"}},c={},p=[{value:"Serveur central",id:"serveur-central",level:2},{value:"Serveur distant",id:"serveur-distant",level:2},{value:"Collecteur",id:"collecteur",level:2},{value:"Architecture distribu\xe9e",id:"architecture-distribu\xe9e",level:2}],d={toc:p},v="wrapper";function f(e){var{components:t}=e,i=a(e,["components"]);return(0,n.kt)(v,u(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}({},d,i),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Selon vos besoins, votre plateforme peut \xeatre constitu\xe9e de plusieurs \xe9l\xe9ments : un ",(0,n.kt)("a",{parentName:"p",href:"#serveur-central"},"serveur central"),", un ou plusieurs ",(0,n.kt)("a",{parentName:"p",href:"#serveur-distant"},"serveurs distants"),", et un ou plusieurs ",(0,n.kt)("a",{parentName:"p",href:"#collecteur"},"collecteurs"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Si vous ne supervisez que quelques ressources, vous n'aurez besoin que d'un serveur central."),(0,n.kt)("li",{parentName:"ul"},"Si vous supervisez un grand nombre de ressources, r\xe9partissez la charge sur une ",(0,n.kt)("a",{parentName:"li",href:"#architecture-distribu%C3%A9e"},"architecture distribu\xe9e"),".")),(0,n.kt)("h2",{id:"serveur-central"},"Serveur central"),(0,n.kt)("p",null,"Dans Centreon, le serveur central est la console principale de votre supervision. Il permet :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"de configurer toute la supervision de votre infrastructure,"),(0,n.kt)("li",{parentName:"ul"},"des superviser des ressources,"),(0,n.kt)("li",{parentName:"ul"},"de consulter la supervision de tous les serveurs Centreon (serveur central, ",(0,n.kt)("a",{parentName:"li",href:"#serveur-distant"},"serveurs distants")," et ",(0,n.kt)("a",{parentName:"li",href:"#collecteur"},"collecteurs"),") dans son interface web.")),(0,n.kt)("h2",{id:"serveur-distant"},"Serveur distant"),(0,n.kt)("p",null,"Un serveur distant est rattach\xe9 \xe0 un ",(0,n.kt)("a",{parentName:"p",href:"#serveur-central"},"serveur central"),". Des collecteurs peuvent \xeatre rattach\xe9s \xe0 un ",(0,n.kt)("a",{parentName:"p",href:"#serveur-distant"},"serveur distant"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Un serveur distant supervise des ressources. Il poss\xe8de un moteur de supervision."),(0,n.kt)("li",{parentName:"ul"},"Il a une interface graphique, mais pas de menus de configuration."),(0,n.kt)("li",{parentName:"ul"},"Les ressources qu\u2019il supervise s\u2019affichent dans son interface et dans l\u2019interface du serveur central auquel il est rattach\xe9.")),(0,n.kt)("h2",{id:"collecteur"},"Collecteur"),(0,n.kt)("p",null,"Un collecteur peut \xeatre rattach\xe9 \xe0 un ",(0,n.kt)("a",{parentName:"p",href:"#serveur-distant"},"serveur distant")," ou bien directement \xe0 un ",(0,n.kt)("a",{parentName:"p",href:"#serveur-central"},"serveur central"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Un collecteur Centreon supervise des ",(0,n.kt)("a",{parentName:"li",href:"#ressource"},"ressources"),". Il poss\xe8de un ",(0,n.kt)("a",{parentName:"li",href:"#moteur-de-supervision"},"moteur de supervision"),"."),(0,n.kt)("li",{parentName:"ul"},"Il n\u2019a pas d\u2019interface graphique : les ressources qu\u2019il supervise s\u2019affichent dans l\u2019interface du serveur central et du serveur distant auxquels il est rattach\xe9.")),(0,n.kt)("h2",{id:"architecture-distribu\xe9e"},"Architecture distribu\xe9e"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:r(11265).Z,width:"1203",height:"564"})),(0,n.kt)("p",null,"Voir aussi ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/installation/architectures"},(0,n.kt)("strong",{parentName:"a"},"Architectures")),"."))}f.isMDXComponent=!0},11265:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/archi-d58fa90199568cd102d0ed66db704628.png"}}]);