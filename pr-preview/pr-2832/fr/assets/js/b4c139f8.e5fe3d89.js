"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[82517],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,v=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(v,a(a({ref:t},u),{},{components:n})):r.createElement(v,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44251:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={id:"troubleshooting-hosts-discovery",title:"D\xe9panner les incidents sur la d\xe9couverte des h\xf4tes"},s=void 0,l={unversionedId:"monitoring/discovery/troubleshooting-hosts-discovery",id:"version-23.10/monitoring/discovery/troubleshooting-hosts-discovery",title:"D\xe9panner les incidents sur la d\xe9couverte des h\xf4tes",description:"Les t\xe2ches de d\xe9couverte ne s'affichent plus",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/monitoring/discovery/troubleshooting-hosts-discovery.md",sourceDirName:"monitoring/discovery",slug:"/monitoring/discovery/troubleshooting-hosts-discovery",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/docs/monitoring/discovery/troubleshooting-hosts-discovery",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/next/i18n/fr/docusaurus-plugin-content-docs/version-23.10/monitoring/discovery/troubleshooting-hosts-discovery.md",tags:[],version:"23.10",lastUpdatedAt:1700565273,formattedLastUpdatedAt:"21 nov. 2023",frontMatter:{id:"troubleshooting-hosts-discovery",title:"D\xe9panner les incidents sur la d\xe9couverte des h\xf4tes"},sidebar:"version-23.10/docs",previous:{title:"Administration",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/docs/monitoring/discovery/administration"},next:{title:"Groupes",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/docs/monitoring/groups"}},c={},u=[{value:"Les t\xe2ches de d\xe9couverte ne s&#39;affichent plus",id:"les-t\xe2ches-de-d\xe9couverte-ne-saffichent-plus",level:2},{value:"Probl\xe8me",id:"probl\xe8me",level:3},{value:"Solution",id:"solution",level:3},{value:"Le scan de d\xe9couverte reste bloqu\xe9 \xe0 l&#39;\xe9tat planifi\xe9",id:"le-scan-de-d\xe9couverte-reste-bloqu\xe9-\xe0-l\xe9tat-planifi\xe9",level:2},{value:"Probl\xe8me",id:"probl\xe8me-1",level:3},{value:"Solution",id:"solution-1",level:3},{value:"V\xe9rifications compl\xe9mentaires",id:"v\xe9rifications-compl\xe9mentaires",level:3},{value:"Le message &quot;Aucun fournisseur trouv\xe9&quot; appara\xeet lors de la cr\xe9ation d&#39;une t\xe2che de d\xe9couverte des h\xf4tes",id:"le-message-aucun-fournisseur-trouv\xe9-appara\xeet-lors-de-la-cr\xe9ation-dune-t\xe2che-de-d\xe9couverte-des-h\xf4tes",level:2},{value:"V\xe9rifications",id:"v\xe9rifications",level:3}],p={toc:u};function d(e){var{components:t}=e,a=i(e,["components"]);return(0,r.kt)("wrapper",o({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",o({},{id:"les-t\xe2ches-de-d\xe9couverte-ne-saffichent-plus"}),"Les t\xe2ches de d\xe9couverte ne s'affichent plus"),(0,r.kt)("p",null,"La page ",(0,r.kt)("strong",{parentName:"p"},"D\xe9couverte")," (dans ",(0,r.kt)("strong",{parentName:"p"},"Configuration > H\xf4tes"),") est vide et n'affiche plus aucune t\xe2che de d\xe9couverte des h\xf4tes."),(0,r.kt)("h3",o({},{id:"probl\xe8me"}),"Probl\xe8me"),(0,r.kt)("p",null,"L'erreur suivante appara\xeet dans le fichier ",(0,r.kt)("strong",{parentName:"p"},"gorgoned.log")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"ERROR - [autodiscovery] -class- host discovery - cannot get host discovery jobs - request error [code: '500'] [message: 'Call to a member function getUuidAttributes() on null']\n")),(0,r.kt)("h3",o({},{id:"solution"}),"Solution"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Ne supprimez pas le connecteur de supervision pour l'installer \xe0 nouveau !")),(0,r.kt)("p",null,"Vous devez r\xe9installer le connecteur de supervision correspondant en cliquant sur le bouton de r\xe9installation : ",(0,r.kt)("img",{alt:"image",src:n(5075).Z,width:"32",height:"32"}),"."),(0,r.kt)("h2",o({},{id:"le-scan-de-d\xe9couverte-reste-bloqu\xe9-\xe0-l\xe9tat-planifi\xe9"}),"Le scan de d\xe9couverte reste bloqu\xe9 \xe0 l'\xe9tat planifi\xe9"),(0,r.kt)("p",null,"Lorsqu'un scan de d\xe9couverte est lanc\xe9, il reste bloqu\xe9 \xe0 l'\xe9tat planifi\xe9."),(0,r.kt)("h3",o({},{id:"probl\xe8me-1"}),"Probl\xe8me"),(0,r.kt)("p",null,"L'erreur suivante appara\xeet dans le fichier ",(0,r.kt)("strong",{parentName:"p"},"gorgoned.log")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"ERROR - [autodiscovery] -class- host discovery - cannot get platform versions - Login error [code: '401'] [message: 'Unauthorized']\n")),(0,r.kt)("h3",o({},{id:"solution-1"}),"Solution"),(0,r.kt)("p",null,"Dans le fichier ",(0,r.kt)("strong",{parentName:"p"},"/etc/centreon-gorgone/config.d/31-centreon-api.yaml"),", remplacez la valeur ",(0,r.kt)("strong",{parentName:"p"},"base_url")," par ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",o({parentName:"strong"},{href:"http://127.0.0.1/centreon/api/latest/"}),"http://127.0.0.1/centreon/api/latest/"))),(0,r.kt)("h3",o({},{id:"v\xe9rifications-compl\xe9mentaires"}),"V\xe9rifications compl\xe9mentaires"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"V\xe9rifiez que le nom d'utilisateur et le mot de passe sont corrects dans le fichier ",(0,r.kt)("strong",{parentName:"p"},"/etc/centreon-gorgone/config.d/31-centreon-api.yaml"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"V\xe9rifiez que le nom d'utilisateur sp\xe9cifi\xe9 dans le fichier ",(0,r.kt)("strong",{parentName:"p"},"/etc/centreon-gorgone/config.d/31-centreon-api.yaml")," acc\xe8de bien \xe0 la configuration de l'API. Dans l'interface Centreon, allez \xe0 la page  ",(0,r.kt)("strong",{parentName:"p"},"Configuration > Utilisateurs > Contacts / Utilisateurs"),". Puis dans l'onglet ",(0,r.kt)("strong",{parentName:"p"},"Authentification Centreon"),", v\xe9rifiez que le champ ",(0,r.kt)("strong",{parentName:"p"},"Acc\xe8s \xe0 l'API de configuration")," est param\xe9tr\xe9 \xe0 ",(0,r.kt)("strong",{parentName:"p"},"Oui"),"."))),(0,r.kt)("h2",o({},{id:"le-message-aucun-fournisseur-trouv\xe9-appara\xeet-lors-de-la-cr\xe9ation-dune-t\xe2che-de-d\xe9couverte-des-h\xf4tes"}),'Le message "Aucun fournisseur trouv\xe9" appara\xeet lors de la cr\xe9ation d\'une t\xe2che de d\xe9couverte des h\xf4tes'),(0,r.kt)("p",null,"Lorsque vous cliquez sur le bouton ",(0,r.kt)("strong",{parentName:"p"},"Ajouter")," dans la page ",(0,r.kt)("strong",{parentName:"p"},"Configuration > H\xf4tes > D\xe9couverte"),", le message \"Aucun fournisseur trouv\xe9\" s'affiche dans l'assistant de cr\xe9ation."),(0,r.kt)("h3",o({},{id:"v\xe9rifications"}),"V\xe9rifications"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"V\xe9rifiez que le module Auto Discovery est bien \xe0 jour dans la page ",(0,r.kt)("strong",{parentName:"p"},"Administration > Extensions > Gestionnaire"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"R\xe9installez le connecteur de supervision correspondant en cliquant sur le bouton de r\xe9installation : ",(0,r.kt)("img",{alt:"image",src:n(5075).Z,width:"32",height:"32"}),"."))))}d.isMDXComponent=!0},5075:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ2OTU2RUE2RDY3NTExRTZCQzQ2OTMxOTU1RTQ4RDc0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ2OTU2RUE3RDY3NTExRTZCQzQ2OTMxOTU1RTQ4RDc0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDY5NTZFQTRENjc1MTFFNkJDNDY5MzE5NTVFNDhENzQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDY5NTZFQTVENjc1MTFFNkJDNDY5MzE5NTVFNDhENzQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7F6+9UAAACAUlEQVR42rxXzU3DMBROrd5rTlyzAWGChgkaJqBM0HaCpjduhQkIE1COnCgTkE7QdgOzAc/SZ8lYfo5TJXnSJ0WJY3/vx+9n9PR5nbSQgjAjpARJyPC+JijCibAjfMRuOI5Yow9b43DJrMms5znIaCIrPLMiGg4vsdEv4Z5wSxgB+vmO8EI4O/9JEDmCfGsCEgefoN2SsIepE8vse3zTVnpkiGglfjjrCcacJTSoWsRHhX/fmD2Pjqu8BKSlsUraiwLxFWPVL9cSwlmQt9Sak2fCJkDCSyCF37sS7cbvgIv/EZAIuK6lwA1yZWFcYRNQPRBQcIfPFc82gT60t+PBJzNDQCb9imJiQZ9biGQY4YI7NwS2SBSNqfNCqbkaMsaVWDjX5wrJqEs3+GQikLm8ATKEBTSBCVOCuxZfPjhrAodAH9D3dazGAf+kHeeH0lw9q3qWInBI1oMbTO+QmnogAne0GCA/SGG1XK5Mh8iSoiFTLXs8PLWL0bKpbHZtehP8IqJsvvdAIHMJmGviywm53cF01KTUXFOaM65YO/XiUpmjlVccARUgoV30emFMmA6odhOfYApHyrhjjiHjoaXWFdxYx05GCoGy8VgjxYZH9BFTJ2tmqKZbS5mCS/mjiOnYmK9gKidX+XYxA07MdKysnqEAzHh+g/cHrDPzYvR88SfAAE7qd/eVYzFTAAAAAElFTkSuQmCC"}}]);