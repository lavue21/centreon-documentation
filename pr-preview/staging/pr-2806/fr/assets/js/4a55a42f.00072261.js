"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[35379],{14712:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>g,frontMatter:()=>a,metadata:()=>p,toc:()=>c});n(67294);var r=n(3905);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}const a={id:"monitor-ups-snmp",title:"Superviser un onduleur en SNMP"},u=void 0,p={unversionedId:"getting-started/monitor-ups-snmp",id:"version-23.10/getting-started/monitor-ups-snmp",title:"Superviser un onduleur en SNMP",description:"Rendez-vous dans le menu Configuration > Gestionnaire de connecteurs de supervision et installez le connecteur de supervision UPS Standard :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/getting-started/monitor-ups-with-snmp.md",sourceDirName:"getting-started",slug:"/getting-started/monitor-ups-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/getting-started/monitor-ups-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/getting-started/monitor-ups-with-snmp.md",tags:[],version:"23.10",lastUpdatedAt:1699872045,formattedLastUpdatedAt:"13 nov. 2023",frontMatter:{id:"monitor-ups-snmp",title:"Superviser un onduleur en SNMP"},sidebar:"version-23.10/docs",previous:{title:"Superviser une imprimante en SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/getting-started/monitor-printer-snmp"},next:{title:"Monitoring resources in real time",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/category/monitoring-resources-in-real-time"}},l={},c=[],d={toc:c},m="wrapper";function g(e){var{components:t}=e,a=i(e,["components"]);return(0,r.kt)(m,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}({},d,a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Rendez-vous dans le menu ",(0,r.kt)("strong",{parentName:"p"},"Configuration > Gestionnaire de connecteurs de supervision")," et installez le connecteur de supervision ",(0,r.kt)("strong",{parentName:"p"},"UPS Standard")," :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(73183).Z,width:"995",height:"561"})),(0,r.kt)("p",null,"Rendez-vous maintenant dans le menu ",(0,r.kt)("strong",{parentName:"p"},"Configuration > H\xf4tes > H\xf4tes")," et cliquez sur le bouton ",(0,r.kt)("strong",{parentName:"p"},"Ajouter")," :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(60915).Z,width:"1245",height:"491"})),(0,r.kt)("p",null,"Renseignez les informations suivantes :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Le nom de votre serveur"),(0,r.kt)("li",{parentName:"ul"},"Une description de votre serveur"),(0,r.kt)("li",{parentName:"ul"},"Son adresse IP"),(0,r.kt)("li",{parentName:"ul"},"La communaut\xe9 et la version SNMP")),(0,r.kt)("p",null,"Cliquez sur le bouton ",(0,r.kt)("strong",{parentName:"p"},"+ Ajouter une nouvelle entr\xe9e")," pour le champ ",(0,r.kt)("strong",{parentName:"p"},"Mod\xe8les")," puis s\xe9lectionnez le mod\xe8le\n",(0,r.kt)("strong",{parentName:"p"},"HW-UPS-Standard-Rfc1628-SNMP-custom"),"."),(0,r.kt)("p",null,"Cliquez sur le bouton ",(0,r.kt)("strong",{parentName:"p"},"Sauvegarder"),"."),(0,r.kt)("p",null,"Votre \xe9quipement a \xe9t\xe9 ajout\xe9 \xe0 la configuration de la supervision :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(73358).Z,width:"1245",height:"286"})),(0,r.kt)("p",null,"Rendez-vous dans le menu ",(0,r.kt)("strong",{parentName:"p"},"Configuration > Services > Services par h\xf4te"),". Un ensemble d'indicateurs a \xe9t\xe9 d\xe9ploy\xe9\nautomatiquement :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(23560).Z,width:"1245",height:"466"})),(0,r.kt)("p",null,"Il est maintenant temps de ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/fr/docs/getting-started/first-supervision#d%C3%A9ployer-une-configuration"},"d\xe9ployer la supervision"),"."),(0,r.kt)("p",null,"Rendez-vous ensuite dans le menu ",(0,r.kt)("strong",{parentName:"p"},"Supervision > D\xe9tails des statuts > Regroupement par h\xf4te")," et s\xe9lectionnez la valeur ",(0,r.kt)("strong",{parentName:"p"},"Tous")," pour le\nfiltre ",(0,r.kt)("strong",{parentName:"p"},"Afficher les d\xe9tails"),". Apr\xe8s quelques minutes, les premiers r\xe9sultats de la supervision apparaissent :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(52647).Z,width:"1245",height:"422"})))}g.isMDXComponent=!0},73183:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/quick_start_ups_0-f6914ce1dd4c8245fbf993e236884fd9.gif"},60915:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/quick_start_ups_1-1ba1dcc11598b2a765eb05acedd22485.png"},73358:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/quick_start_ups_2-c8f586c66c5d06a5049c2c85059080f9.png"},23560:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/quick_start_ups_3-d738668ecc5ee393a0db0e32bb5c59d0.png"},52647:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/quick_start_ups_4-60f1555ea067241324cefba1d58dbe67.png"}}]);