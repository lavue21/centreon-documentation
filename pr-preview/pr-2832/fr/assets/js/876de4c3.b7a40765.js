"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[77773],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),o=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=o(a),c=n,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||l;return a?r.createElement(k,i(i({ref:t},u),{},{components:a})):r.createElement(k,i({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7565:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>k,frontMatter:()=>s,metadata:()=>u,toc:()=>d});a(67294);var r=a(3905),n=a(67709),l=a(7626);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const s={id:"hardware-servers-hp-snmp",title:"HP Proliant"},o=void 0,u={unversionedId:"integrations/plugin-packs/procedures/hardware-servers-hp-snmp",id:"integrations/plugin-packs/procedures/hardware-servers-hp-snmp",title:"HP Proliant",description:"Contenu du Pack",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/hardware-servers-hp-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-servers-hp-snmp",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/hardware-servers-hp-snmp",draft:!1,tags:[],version:"current",frontMatter:{id:"hardware-servers-hp-snmp",title:"HP Proliant"},sidebar:"pp",previous:{title:"HP OneView Rest API",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/hardware-servers-hp-oneview-restapi"},next:{title:"Huawei HMM",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/hardware-servers-huawei-hmm-snmp"}},m={},d=[{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Mod\xe8les",id:"mod\xe8les",level:3},{value:"M\xe9triques &amp; statuts collect\xe9s",id:"m\xe9triques--statuts-collect\xe9s",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Configuration SNMP",id:"configuration-snmp",level:3},{value:"Flux r\xe9seau",id:"flux-r\xe9seau",level:3},{value:"Configuration de l&#39;agent snmp HP sur le collecteur Centreon",id:"configuration-de-lagent-snmp-hp-sur-le-collecteur-centreon",level:2},{value:"Installation du plugin",id:"installation-du-plugin",level:2},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4te",id:"h\xf4te",level:3},{value:"Comment puis-je tester le plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:3}],c={toc:d};function k(e){var{components:t}=e,a=p(e,["components"]);return(0,r.kt)("wrapper",i({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",i({},{id:"contenu-du-pack"}),"Contenu du Pack"),(0,r.kt)("h3",i({},{id:"mod\xe8les"}),"Mod\xe8les"),(0,r.kt)("p",null,"Le Plugin Pack Centreon ",(0,r.kt)("strong",{parentName:"p"},"HP Proliant")," apporte un mod\xe8le d'h\xf4te :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"HW-Server-Hp-Server-SNMP-custom")),(0,r.kt)("p",null,"Il apporte les mod\xe8les de service suivants :"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Alias"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Mod\xe8le de service"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"D\xe9faut"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Hardware-Cpu"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"HW-Hp-Server-Hardware-Cpu-SNMP"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Contr\xf4le les cpu"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Hardware-Fan"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"HW-Hp-Server-Hardware-Fan-SNMP"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Contr\xf4le les ventilateurs"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Hardware-Global"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"HW-Hp-Server-Hardware-Global-SNMP"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Contr\xf4le l'ensemble des sondes"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Hardware-Network"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"HW-Hp-Server-Hardware-Network-SNMP"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Contr\xf4le les cartes r\xe9seaux"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Hardware-Pc"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"HW-Hp-Server-Hardware-Pc-SNMP"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Contr\xf4le les convertisseurs de puissance"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Hardware-Psu"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"HW-Hp-Server-Hardware-Psu-SNMP"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Contr\xf4le les alimentations"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Hardware-Storage"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"HW-Hp-Server-Hardware-Storage-SNMP"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Contr\xf4le le stockage"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Hardware-Temperature"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"HW-Hp-Server-Hardware-Temperature-SNMP"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Contr\xf4le les temp\xe9ratures mat\xe9rielles"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}))))),(0,r.kt)("h3",i({},{id:"m\xe9triques--statuts-collect\xe9s"}),"M\xe9triques & statuts collect\xe9s"),(0,r.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Hardware-Cpu",label:"Hardware-Cpu",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"status"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"CPU status"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"})))))),(0,r.kt)(l.Z,{value:"Hardware-Fan",label:"Hardware-Fan",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"status"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Fan status"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"hardware.fan.speed.rpm"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Fan speed"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Rpm"))))),(0,r.kt)(l.Z,{value:"Hardware-Global",label:"Hardware-Global",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"status"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Components global status"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"})))))),(0,r.kt)(l.Z,{value:"Hardware-Network",label:"Hardware-Network",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"status"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"NIC status"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"})))))),(0,r.kt)(l.Z,{value:"Hardware-Pc",label:"Hardware-Pc",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"status"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Power Converter status"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"})))))),(0,r.kt)(l.Z,{value:"Hardware-Psu",label:"Hardware-Psu",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"status"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Power supply status"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"hardware.powersupply.power.watt"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Power supply watt capacity used"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"W")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"hardware.powersupply.voltage.volt"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Power supply voltage"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"V"))))),(0,r.kt)(l.Z,{value:"Hardware-Storage",label:"Hardware-Storage",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"status"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Storage status"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"})))))),(0,r.kt)(l.Z,{value:"Hardware-Temperature",label:"Hardware-Temperature",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"status"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Temperature status"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"hardware.temperature.celsius"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Temperature  in celsius"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"C")))))),(0,r.kt)("h2",i({},{id:"pr\xe9requis"}),"Pr\xe9requis"),(0,r.kt)("h3",i({},{id:"configuration-snmp"}),"Configuration SNMP"),(0,r.kt)("p",null,"Pour utiliser ce Plugin pack, le service SNMP doit d\xe9marr\xe9 et configur\xe9 sur le serveur ",(0,r.kt)("strong",{parentName:"p"},"HP Proliant"),"."),(0,r.kt)("h3",i({},{id:"flux-r\xe9seau"}),"Flux r\xe9seau"),(0,r.kt)("p",null,"La communication doit \xeatre possible sur le port UDP 161 depuis le collecteur\nCentreon vers le serveur supervis\xe9."),(0,r.kt)("h2",i({},{id:"configuration-de-lagent-snmp-hp-sur-le-collecteur-centreon"}),"Configuration de l'agent snmp HP sur le collecteur Centreon"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Attention : La proc\xe9dure qui suit est valide seulement pour Centos 7. Les paquets HP health et HP snmp-agents sont en version 10.50 et disponibles uniquement pour Centos 7.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Pour le bon fonctionnement de l'agent et du plugin, le collecteur Centreon doit \xeatre install\xe9 sur un HP Proliant.")),(0,r.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Centos 7",label:"Centos 7",mdxType:"TabItem"},(0,r.kt)("p",null,"Installez les paquets HP health et snmp-agents sur le collecteur Centreon : "),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install https://downloads.linux.hpe.com/SDR/repo/mcp/centos/7.0/x86_64/10.50/hp-health-10.50-1826.40.rhel7.x86_64.rpm\nyum install https://downloads.linux.hpe.com/SDR/repo/mcp/centos/7.0/x86_64/10.50/hp-snmp-agents-10.50-2926.49.rhel7.x86_64.rpm\n")),(0,r.kt)("p",null,"Ajoutez la ligne suivante dans ",(0,r.kt)("em",{parentName:"p"},"/etc/snmp/snmpd.conf")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"dlmod cmaX /usr/lib64/libcmaX64.so\n")),(0,r.kt)("p",null,"Red\xe9marrez les services suivants : "),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"systemctl restart hp-snmp-agents\nsystemctl restart snmpd\n")))),(0,r.kt)("h2",i({},{id:"installation-du-plugin"}),"Installation du plugin"),(0,r.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources ",(0,r.kt)("strong",{parentName:"li"},"HP Proliant")," :")),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Hardware-Servers-Hp-Snmp\n")),(0,r.kt)("ol",i({},{start:2}),(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installez le Plugin Pack ",(0,r.kt)("strong",{parentName:"li"},"HP Proliant")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),"."))),(0,r.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources ",(0,r.kt)("strong",{parentName:"li"},"HP Proliant")," :")),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Hardware-Servers-Hp-Snmp\n")),(0,r.kt)("ol",i({},{start:2}),(0,r.kt)("li",{parentName:"ol"},"Sur le serveur central Centreon, installez le RPM du Plugin Pack ",(0,r.kt)("strong",{parentName:"li"},"HP Proliant")," :")),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-pack-hardware-servers-hp-snmp\n")),(0,r.kt)("ol",i({},{start:3}),(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installez le Plugin Pack ",(0,r.kt)("strong",{parentName:"li"},"HP Proliant")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),".")))),(0,r.kt)("h2",i({},{id:"configuration"}),"Configuration"),(0,r.kt)("h3",i({},{id:"h\xf4te"}),"H\xf4te"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ajoutez un h\xf4te \xe0 Centreon depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes"),"."),(0,r.kt)("li",{parentName:"ul"},"Compl\xe9tez les champs ",(0,r.kt)("strong",{parentName:"li"},"Nom"),", ",(0,r.kt)("strong",{parentName:"li"},"Alias")," & ",(0,r.kt)("strong",{parentName:"li"},"IP Address/DNS")," correspondant \xe0 votre serveur ",(0,r.kt)("strong",{parentName:"li"},"HP Proliant"),"."),(0,r.kt)("li",{parentName:"ul"},"Appliquez le Mod\xe8le d'h\xf4te ",(0,r.kt)("strong",{parentName:"li"},"HW-Server-Hp-Server-SNMP-custom"),".")),(0,r.kt)("p",null,"Si vous utilisez SNMP en version 3, vous devez configurer les param\xe8tres\nsp\xe9cifiques associ\xe9s via la macro ",(0,r.kt)("strong",{parentName:"p"},"SNMPEXTRAOPTIONS"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Obligatoire"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Macro"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"})),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"SNMPEXTRAOPTIONS"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Configurer vos param\xe8tres de s\xe9curit\xe9 SNMPv3")))),(0,r.kt)("h2",i({},{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"}),"Comment puis-je tester le plugin et que signifient les options des commandes ?"),(0,r.kt)("p",null,"Une fois le plugin install\xe9, vous pouvez tester celui-ci directement en ligne\nde commande depuis votre collecteur Centreon en vous connectant avec\nl'utilisateur ",(0,r.kt)("strong",{parentName:"p"},"centreon-engine")," (",(0,r.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") :"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins//centreon_hp_proliant.pl \\\n    --plugin=hardware::server::hp::proliant::snmp::plugin \\\n    --mode=hardware \\\n    --hostname=10.0.0.1 \\\n    --snmp-version='2c' \\\n    --snmp-community='my-snmp-community' \\\n    --component='.*' \\\n    --verbose \\\n    --use-new-perfdata\n")),(0,r.kt)("p",null,"La commande devrait retourner un message de sortie similaire \xe0 :"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"OK: All 18 components are ok [1/1 cpus, 1/1 da accelerator boards, 1/1 da controllers, 3/3 da logical drives, 12/12 da physical drives]. | 'hardware.cpu.count'=1;;;; 'hardware.daacc.count'=1;;;; 'hardware.dactl.count'=1;;;; 'hardware.daldrive.count'=3;;;; 'hardware.dapdrive.count'=12;;;;\n")),(0,r.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification peut \xeatre\naffich\xe9e en ajoutant le param\xe8tre ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande :"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins//centreon_hp_proliant.pl \\\n    --plugin=hardware::server::hp::proliant::snmp::plugin \\\n    --mode=hardware \\\n    --help\n")),(0,r.kt)("p",null,"Tous les modes disponibles peuvent \xeatre affich\xe9s en ajoutant le param\xe8tre\n",(0,r.kt)("inlineCode",{parentName:"p"},"--list-mode")," \xe0 la commande :"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins//centreon_hp_proliant.pl \\\n    --plugin=hardware::server::hp::proliant::snmp::plugin \\\n    --list-mode\n")),(0,r.kt)("h3",i({},{id:"diagnostic-des-erreurs-communes"}),"Diagnostic des erreurs communes"),(0,r.kt)("p",null,"Rendez-vous sur la ",(0,r.kt)("a",i({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"}),"documentation d\xe9di\xe9e"),"\npour le diagnostic des erreurs communes des plugins Centreon."))}k.isMDXComponent=!0},7626:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(67294),n=a(86010);const l="tabItem_Ymn6";function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function p({children:e,hidden:t,className:a}){return r.createElement("div",i({role:"tabpanel",className:(0,n.Z)(l,a)},{hidden:t}),e)}},67709:(e,t,a)=>{a.d(t,{Z:()=>c});var r=a(67294),n=a(86010),l=a(90980),i=a(35715),p=a(8854),s=a(8241);const o="tabList__CuJ",u="tabItem_LNqP";function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},m.apply(this,arguments)}function d(e){var t;const{lazy:a,block:l,defaultValue:d,values:c,groupId:k,className:g}=e,N=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=null!=c?c:N.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),h=(0,i.l)(f,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var b;const v=null===d?d:null!==(b=null!=d?d:null===(t=N.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==b?b:N[0].props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,p.U)(),[P,H]=(0,r.useState)(v),C=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=k){const e=y[k];null!=e&&e!==P&&f.some((t=>t.value===e))&&H(e)}const O=e=>{const t=e.currentTarget,a=C.indexOf(t),r=f[a].value;r!==P&&(T(t),H(r),null!=k&&w(k,String(r)))},S=e=>{let t=null;switch(e.key){case"ArrowRight":{const r=C.indexOf(e.currentTarget)+1;var a;t=null!==(a=C[r])&&void 0!==a?a:C[0];break}case"ArrowLeft":{const a=C.indexOf(e.currentTarget)-1;var r;t=null!==(r=C[a])&&void 0!==r?r:C[C.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:(0,n.Z)("tabs-container",o)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":l},g)},f.map((({value:e,label:t,attributes:a})=>r.createElement("li",m({role:"tab",tabIndex:P===e?0:-1,"aria-selected":P===e,key:e,ref:e=>C.push(e),onKeyDown:S,onFocus:O,onClick:O},a,{className:(0,n.Z)("tabs__item",u,null==a?void 0:a.className,{"tabs__item--active":P===e})}),null!=t?t:e)))),a?(0,r.cloneElement)(N.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},N.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function c(e){const t=(0,l.Z)();return r.createElement(d,m({key:String(t)},e))}}}]);