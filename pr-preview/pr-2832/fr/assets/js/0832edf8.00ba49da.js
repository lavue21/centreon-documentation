"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[21486],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>m});n(67294);var a=n(3905),r=n(67709),l=n(7626);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"applications-antivirus-mcafee-webgateway-snmp",title:"McAfee Web Gateway"},p=void 0,c={unversionedId:"integrations/plugin-packs/procedures/applications-antivirus-mcafee-webgateway-snmp",id:"integrations/plugin-packs/procedures/applications-antivirus-mcafee-webgateway-snmp",title:"McAfee Web Gateway",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-antivirus-mcafee-webgateway-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-antivirus-mcafee-webgateway-snmp",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/applications-antivirus-mcafee-webgateway-snmp",draft:!1,tags:[],version:"current",frontMatter:{id:"applications-antivirus-mcafee-webgateway-snmp",title:"McAfee Web Gateway"},sidebar:"pp",previous:{title:"IP-Label Newtest Rest API",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/applications-monitoring-iplabel-newtest-restapi"},next:{title:"Microsoft Active Directory",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/infrastructure-active-directory-nrpe"}},u={},m=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du Plugin-Pack",id:"contenu-du-plugin-pack",level:2},{value:"El\xe9ments supervis\xe9s",id:"el\xe9ments-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Configuration du proxy McAfee Web Gateway",id:"configuration-du-proxy-mcafee-web-gateway",level:3},{value:"Flux r\xe9seaux",id:"flux-r\xe9seaux",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration de l&#39;H\xf4te",id:"configuration-de-lh\xf4te",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment tester mes configurations et le Plugin en ligne de commande ?",id:"comment-tester-mes-configurations-et-le-plugin-en-ligne-de-commande-",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:3},{value:"UNKNOWN: SNMP GET Request : Cant get a single value.",id:"unknown-snmp-get-request--cant-get-a-single-value",level:3}],d={toc:m};function f(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",i({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",i({},{id:"vue-densemble"}),"Vue d'ensemble"),(0,a.kt)("p",null,"McAfee Web Gateway est un proxy d'entreprise qui fournit une analyse proactive\ndu trafic Web et une protection contre les logiciels malveillants gr\xe2ce \xe0 des\ntechniques avanc\xe9es d'inspection en temps r\xe9el."),(0,a.kt)("p",null,"Le Centreon Plugin-Pack Centreon ",(0,a.kt)("em",{parentName:"p"},"McAfee Web Gateway")," permet de r\xe9cup\xe9rer les\nversions de signature des bases de donn\xe9es et les statistiques Web et de\nd\xe9tections des logiciels malveillants par l'interm\xe9diaire du protocole SNMP."),(0,a.kt)("h2",i({},{id:"contenu-du-plugin-pack"}),"Contenu du Plugin-Pack"),(0,a.kt)("h3",i({},{id:"el\xe9ments-supervis\xe9s"}),"El\xe9ments supervis\xe9s"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"McAfee Web Gateway proxy")),(0,a.kt)("h3",i({},{id:"m\xe9triques-collect\xe9es"}),"M\xe9triques collect\xe9es"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Clients",label:"Clients",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"clients.connected.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"The number of connected client")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"sockets.connected.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"The number of open network sockets"))))),(0,a.kt)(l.Z,{value:"Connections",label:"Connections",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"connections.legitimate.persecond"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"The number of legitimate connections per second"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"connections/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"connections.blocked.persecond"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"The number of blocked connections per second"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"connections/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"connections.antimalware.blocked.persecond"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"The number of connections blocked by the Anti Malware per second"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"connections/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"connections.mediafilter.blocked.persecond"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"The number of connections blocked by the Media Filter per second"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"connections/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"connections.urlfilter.blocked.persecond"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"The number of connections blocked by the URL Filter per second"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"connections/s"))))),(0,a.kt)(l.Z,{value:"Detections",label:"Detections",mdxType:"TabItem"},(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Global")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"malwares.detected.persecond"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"The number of malware detected per second"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"detections/s")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Per ",(0,a.kt)("em",{parentName:"li"},"categories"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),(0,a.kt)("em",{parentName:"td"},"categoryname"),"#category.malwares.detected.persecond"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"The number of malware detected per second"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"detections/s"))))),(0,a.kt)(l.Z,{value:"Ftpstatistics",label:"Ftpstatistics",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"ftp.traffic.clienttoproxy.bitspersecond"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"FTP traffic from client to proxy"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"b/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"ftp.traffic.servertoproxy.bitspersecond"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"FTP traffic from server to proxy"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"b/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"ftp.traffic.proxytoclient.bitspersecond"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"FTP traffic from proxy to client"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"b/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"ftp.traffic.proxytoserver.bitspersecond"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"FTP traffic from proxy to server"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"b/s"))))),(0,a.kt)(l.Z,{value:"Httpstatistics",label:"Httpstatistics",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"http.requests.persecond"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"The number of HTTP request per second"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"http.traffic.clienttoproxy.bitspersecond"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"HTTP traffic from client to proxy"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"b/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"http.traffic.servertoproxy.bitspersecond"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"HTTP traffic from server to proxy"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"b/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"http.traffic.proxytoclient.bitspersecond"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"HTTP traffic from proxy to client"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"b/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"http.traffic.proxytoserver.bitspersecond"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"HTTP traffic from proxy to server"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"b/s"))))),(0,a.kt)(l.Z,{value:"Httpsstatistics",label:"Httpsstatistics",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"https.requests.persecond"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"The number of HTTPS request per second"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"https.traffic.clienttoproxy.bitspersecond"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"HTTPS traffic from client to proxy"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"b/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"https.traffic.servertoproxy.bitspersecond"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"HTTPS traffic from server to proxy"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"b/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"https.traffic.proxytoclient.bitspersecond"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"HTTPS traffic from proxy to client"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"b/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"https.traffic.proxytoserver.bitspersecond"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"HTTPS traffic from proxy to server"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"b/s"))))),(0,a.kt)(l.Z,{value:"Versions",label:"Versions",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"dat-version"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"DAT version")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"tsdb-version"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"TrustedSource Database Version")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"proactive-version"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"ProActive Database Version")))))),(0,a.kt)("h2",i({},{id:"pr\xe9requis"}),"Pr\xe9requis"),(0,a.kt)("h3",i({},{id:"configuration-du-proxy-mcafee-web-gateway"}),"Configuration du proxy McAfee Web Gateway"),(0,a.kt)("p",null,"Afin de superviser le proxy McAfee Web Gateway, le SNMP v2 ou v3 doit \xeatre\nconfigur\xe9 comme indiqu\xe9 sur la documentation officielle :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",i({parentName:"p"},{href:"https://docs.mcafee.com/bundle/web-gateway-8.2.x-product-guide/page/GUID-7F25543B-2BE5-47A5-BC40-AEEF65F5D156.html"}),"https://docs.mcafee.com/bundle/web-gateway-8.2.x-product-guide/page/GUID-7F25543B-2BE5-47A5-BC40-AEEF65F5D156.html"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",i({parentName:"p"},{href:"https://docs.mcafee.com/bundle/web-gateway-8.2.x-interface-reference-guide/page/GUID-92B0527B-9709-43DD-AEDC-FE82966AC6EF.html"}),"https://docs.mcafee.com/bundle/web-gateway-8.2.x-interface-reference-guide/page/GUID-92B0527B-9709-43DD-AEDC-FE82966AC6EF.html")))),(0,a.kt)("h2",i({},{id:"flux-r\xe9seaux"}),"Flux r\xe9seaux"),(0,a.kt)("p",null,"La communication doit \xeatre possible depuis le Collecteur Centreon vers le port SNMP (UDP/161) du Kaspersky Security Center."),(0,a.kt)("h2",i({},{id:"installation"}),"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin Centreon McAfee Web Gatewaysur l'ensemble des Collecteurs Centreon supervisant un proxy McAfee Web Gateway :")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Applications-Antivirus-Mcafee-Webgateway-Snmp\n")),(0,a.kt)("ol",i({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin-Pack 'McAfee Web Gateway' depuis la page \"Configuration > Plugin packs > Manager\" de l'interface Web Centreon"))),(0,a.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin Centreon McAfee Web Gateway sur l'ensemble des Collecteurs Centreon supervisant un proxy McAfee Web Gateway :")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Applications-Antivirus-Mcafee-Webgateway-Snmp\n")),(0,a.kt)("ol",i({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"Installer le RPM du Plugin-Pack contenant les Mod\xe8les de supervision sur le serveur Central Centreon :")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-pack-applications-antivirus-mcafee-webgateway-snmp\n")),(0,a.kt)("ol",i({},{start:3}),(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin-Pack 'McAfee Web Gateway' depuis la page \"Configuration > Plugin packs > Manager\" de l'interface Web Centreon")))),(0,a.kt)("h2",i({},{id:"configuration-de-lh\xf4te"}),"Configuration de l'H\xf4te"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Ajoutez un nouvel H\xf4te depuis la page "Configuration > H\xf4tes".'),(0,a.kt)("li",{parentName:"ul"},'Compl\xe9tez les champs "Nom", "Alias" & "IP Address / DNS" correspondant \xe0 votre proxy McAfee Web Gateway'),(0,a.kt)("li",{parentName:"ul"},"Appliquez le Mod\xe8le d'H\xf4te ",(0,a.kt)("em",{parentName:"li"},"App-Antivirus-Mcafee-Webgateway-SNMP-custom"))),(0,a.kt)("p",null,"Si vous utilisez SNMP en version 3, vous devez configurer les param\xe8tres\nsp\xe9cifiques associ\xe9s via la macro SNMPEXTRAOPTIONS"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Mandatory"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Name"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"})),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"SNMPEXTRAOPTIONS"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Configure your own SNMPv3 credentials combo")))),(0,a.kt)("h2",i({},{id:"faq"}),"FAQ"),(0,a.kt)("h3",i({},{id:"comment-tester-mes-configurations-et-le-plugin-en-ligne-de-commande-"}),"Comment tester mes configurations et le Plugin en ligne de commande ?"),(0,a.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de\ncommande depuis un collecteur Centreon en vous connectant avec l'utilisateur\n",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_mcafee_webgateway_snmp.pl \\\n    --plugin=apps::antivirus::mcafee::webgateway::snmp::plugin \\\n    --mode=clients \\\n    --hostname=10.0.0.1 \\\n    --snmp-version='2c' \\\n    --snmp-community='my-snmp-community' \\\n    --filter-counters='' \\\n    --warning-clients='20' \\\n    --critical-clients='30' \\\n    --warning-sockets='60' \\\n    --critical-sockets='70' \\\n    --use-new-perfdata\n")),(0,a.kt)("p",null,"La commande devrait retourner un message de sortie de la forme ci-dessous :"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"OK: Connected clients: 10, Open network sockets: 50 | 'clients.connected.count'=10;0:20;0:30;0;  'sockets.connected.count'=50;0:60;0:70;0;;\n")),(0,a.kt)("p",null,"Dans cet exemple, le Plugin r\xe9cup\xe8re le nombre de clients connect\xe9s\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--plugin=apps::antivirus::mcafee::webgateway::snmp::plugin--mode=client"),")\nrenvoy\xe9 par McAfee Web Gateway \xe0 l'adresse 10.0.0.1 par l'interm\xe9diaire du\nprotocole SNMP\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--hostname='10.0.0.1'  --snmp-version='2c' --snmp-community='mysnmpcommunity'"),")."),(0,a.kt)("p",null,"Dans cet exemple, une alarme est d\xe9clench\xe9e si le nombre de client connect\xe9s est\nplus grand que 30 (",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-clients='30'"),") ou si le nombre de prise\nr\xe9seaux ouvertes est plus grand que 70 (",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-sockets='70'"),")"),(0,a.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification peut \xeatre\naffich\xe9e en ajoutant le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande :"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_mcafee_webgateway_snmp.pl \\\n    --plugin=apps::antivirus::mcafee::webgateway::snmp::plugin \\\n    --mode=clients \\\n    --help\n")),(0,a.kt)("p",null,"Tous les modes disponibles peuvent \xeatre affich\xe9s via l'option\n",(0,a.kt)("inlineCode",{parentName:"p"},"--list-mode")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_mcafee_webgateway_snmp.pl \\\n    --plugin=apps::antivirus::mcafee::webgateway::snmp::plugin \\\n    --list-mode\n")),(0,a.kt)("h2",i({},{id:"troubleshooting"}),"Troubleshooting"),(0,a.kt)("h3",i({},{id:"unknown-snmp-get-request--timeout"}),"UNKNOWN: SNMP GET Request : Timeout"),(0,a.kt)("p",null,"Si vous obtenez ce message, cela signifie le collecteur Centreon ne parvient\npas \xe0 contacter le proxy McAfee Web Gateway sur le port 161 (firewall\nou autre \xe9quipement en coupure) ou que la communaut\xe9 SNMP configur\xe9e n'est pas\ncorrecte."),(0,a.kt)("h3",i({},{id:"unknown-snmp-get-request--cant-get-a-single-value"}),"UNKNOWN: SNMP GET Request : Cant get a single value."),(0,a.kt)("p",null,"Les autorisations donn\xe9es \xe0 l'utilisateur en SNMP sont trop restreintes pour\nfaire fonctionner le mode/plugin. L'agent SNMP doit pouvoir acc\xe9der \xe0 la branche\n.1.3.6.1.4.1.1230."))}f.isMDXComponent=!0},7626:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function o({children:e,hidden:t,className:n}){return a.createElement("div",i({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},67709:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(67294),r=n(86010),l=n(90980),i=n(35715),o=n(8854),s=n(8241);const p="tabList__CuJ",c="tabItem_LNqP";function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}function m(e){var t;const{lazy:n,block:l,defaultValue:m,values:d,groupId:f,className:k}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=d?d:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),N=(0,i.l)(b,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var y;const v=null===m?m:null!==(y=null!=m?m:null===(t=g.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==y?y:g[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:w}=(0,o.U)(),[T,P]=(0,a.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:C}=(0,s.o5)();if(null!=f){const e=h[f];null!=e&&e!==T&&b.some((t=>t.value===e))&&P(e)}const M=e=>{const t=e.currentTarget,n=x.indexOf(t),a=b[n].value;a!==T&&(C(t),P(a),null!=f&&w(f,String(a)))},O=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=x.indexOf(e.currentTarget)+1;var n;t=null!==(n=x[a])&&void 0!==n?n:x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;var a;t=null!==(a=x[n])&&void 0!==a?a:x[x.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},k)},b.map((({value:e,label:t,attributes:n})=>a.createElement("li",u({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:e=>x.push(e),onKeyDown:O,onFocus:M,onClick:M},n,{className:(0,r.Z)("tabs__item",c,null==n?void 0:n.className,{"tabs__item--active":T===e})}),null!=t?t:e)))),n?(0,a.cloneElement)(g.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,l.Z)();return a.createElement(m,u({key:String(t)},e))}}}]);