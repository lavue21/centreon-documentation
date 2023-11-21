"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[95475],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},99925:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>c});a(67294);var n=a(3905),r=a(67709),l=a(7626);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const s={id:"network-infoblox-snmp",title:"Infoblox SNMP"},p=void 0,u={unversionedId:"integrations/plugin-packs/procedures/network-infoblox-snmp",id:"integrations/plugin-packs/procedures/network-infoblox-snmp",title:"Infoblox SNMP",description:"Contenu du Plugin Pack",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/network-infoblox-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-infoblox-snmp",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/network-infoblox-snmp",draft:!1,tags:[],version:"current",frontMatter:{id:"network-infoblox-snmp",title:"Infoblox SNMP"},sidebar:"pp",previous:{title:"Huawei",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/network-huawei-snmp"},next:{title:"Juniper EX Series",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/network-switchs-juniper-ex-snmp"}},m={},c=[{value:"Contenu du Plugin Pack",id:"contenu-du-plugin-pack",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"R\xe8gles de d\xe9couvertes",id:"r\xe8gles-de-d\xe9couvertes",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"J&#39;obtiens le message d&#39;erreur suivant:",id:"jobtiens-le-message-derreur-suivant",level:2},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:3},{value:"UNKNOWN: SNMP GET Request : Cant get a single value.",id:"unknown-snmp-get-request--cant-get-a-single-value",level:3}],d={toc:c};function f(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)("wrapper",i({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",i({},{id:"contenu-du-plugin-pack"}),"Contenu du Plugin Pack"),(0,n.kt)("h3",i({},{id:"objets-supervis\xe9s"}),"Objets supervis\xe9s"),(0,n.kt)("p",null,"Le Plugin Pack Infoblox SNMP collecte les donn\xe9es pour:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Dhcp"),(0,n.kt)("li",{parentName:"ul"},"Dns"),(0,n.kt)("li",{parentName:"ul"},"Interfaces"),(0,n.kt)("li",{parentName:"ul"},"Services"),(0,n.kt)("li",{parentName:"ul"},"System")),(0,n.kt)("h3",i({},{id:"r\xe8gles-de-d\xe9couvertes"}),"R\xe8gles de d\xe9couvertes"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Services",label:"Services",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Nom de la r\xe8gle"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Net-Infoblox-SNMP-Interface-Name"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"D\xe9couvre les interfaces r\xe9seaux et supervise le statut et l'utilisation de la bande passante")))))),(0,n.kt)("h3",i({},{id:"m\xe9triques-collect\xe9es"}),"M\xe9triques collect\xe9es"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Dhcp",label:"Dhcp",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"dhcp.discovers.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of discovery messages received"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"dhcp.requests.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of requests received"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"dhcp.releases.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of releases received"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"dhcp.offers.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of offers sent"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"dhcp.acks.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of acks sent"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"dhcp.nacks.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of nacks sent"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"dhcp.declines.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of declines received"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"dhcp.informs.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of informs received"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"dhcp.others.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of other messages received"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"subnet","_","ipaddr"),"#","subnet.addresses.usage.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Percentage of dynamic DHCP address for subnet leased out"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%"))))),(0,n.kt)(l.Z,{value:"Dns",label:"Dns",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"dns.queries.persecond"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of dns queries"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"dns.hits.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Dns hit ratio"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"dns.queries.authoritative.latency.1m.microseconds"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Average latencies for incoming DNS queries during the last 1 minute where the reply was authoritative"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"dns.queries.authoritative.latency.5m.microseconds"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Average latencies for incoming DNS queries during the last 5 minute where the reply was authoritative"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"dns.queries.authoritative.latency.15m.microseconds"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Average latencies for incoming DNS queries during the last 15 minute where the reply was authoritative"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"dns.queries.non_authoritative.latency.1m.microseconds"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Average latencies for incoming DNS queries during the last 1 minute where the reply was non authoritative"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"dns.queries.non_authoritative.latency.5m.microseconds"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Average latencies for incoming DNS queries during the last 5 minute where the reply was non authoritative"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"dns.queries.non_authoritative.latency.15m.microseconds"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Average latencies for incoming DNS queries during the last 15 minute where the reply was non authoritative"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"zone","_","name"),"#","zone.responses.succeeded.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of successful responses"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"zone","_","name"),"#","zone.referrals.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of DNS referrals"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"zone","_","name"),"#","zone.queries.nxrrset.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of DNS query received for non-existent record"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"zone","_","name"),"#","zone.queries.failed.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of Failed queries"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"})))))),(0,n.kt)(l.Z,{value:"Interfaces",label:"Interfaces",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"status"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Status of the interface"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.traffic.in.bitspersecond"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Incoming traffic going through the interface"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.traffic.in.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Percentage of the interface's ",(0,n.kt)("em",{parentName:"td"},"in")," bandwidth usage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.traffic.out.bitspersecond"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Outgoing traffic going through the interface"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"b/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"interface","_","name"),"#","interface.traffic.out.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Percentage of the interface's ",(0,n.kt)("em",{parentName:"td"},"out")," bandwidth usage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%")))),(0,n.kt)("p",null,"A regexp filter is available to target a specific interface identifier - ifName ","[",(0,n.kt)("inlineCode",{parentName:"p"},"--interface='^eth0$' --name"),"]")),(0,n.kt)(l.Z,{value:"Services",label:"Services",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"service status"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Status of the service"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"})))))),(0,n.kt)(l.Z,{value:"System",label:"System",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"cpu.utilization.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"CPU utilization"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"memory.usage.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Memory usage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"swap.usage.percentage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Swap usage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"system.cpu1.temperature.celsius"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"CPU1 temperature"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"system.cpu2.temperature.celsius"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"CPU2 temperature"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"ha status"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Status of high-availability"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))))))),(0,n.kt)("h2",i({},{id:"pr\xe9requis"}),"Pr\xe9requis"),(0,n.kt)("p",null,"Afin de contr\xf4ler votre \xe9quipement Infoblox, le SNMP doit \xeatre configur\xe9. "),(0,n.kt)("p",null,"Le flux SNMP UDP/161 doit \xeatre ouvert entre le Collecteur et l'\xe9quipement."),(0,n.kt)("h2",i({},{id:"installation"}),"Installation"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Network-Infoblox-Snmp\n")),(0,n.kt)("ol",i({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Plugin Pack ",(0,n.kt)("em",{parentName:"li"},"Infoblox SNMP"),' depuis la page "Configuration > Plugin packs > Manager"'))),(0,n.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Network-Infoblox-Snmp\n")),(0,n.kt)("ol",i({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le Plugin Pack via le RPM:")),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-pack-network-infoblox-snmp\n")),(0,n.kt)("ol",i({},{start:3}),(0,n.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Plugin Pack ",(0,n.kt)("em",{parentName:"li"},"Infoblox SNMP"),' depuis la page "Configuration > Plugin packs > Manager"')))),(0,n.kt)("h2",i({},{id:"configuration"}),"Configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Ajoutez un nouvel H\xf4te depuis la page "Configuration > H\xf4tes"'),(0,n.kt)("li",{parentName:"ul"},"Compl\xe9tez les champs ",(0,n.kt)("em",{parentName:"li"},"Adresse IP/DNS"),", ",(0,n.kt)("em",{parentName:"li"},"Communaut\xe9 SNMP")," et ",(0,n.kt)("em",{parentName:"li"},"Version SNMP")),(0,n.kt)("li",{parentName:"ul"},"Appliquez le Mod\xe8le d'H\xf4te ",(0,n.kt)("em",{parentName:"li"},"Net-Infoblox-SNMP-custom"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Si vous utilisez la version 3 du protocole SNMP, utilisez la Macro ",(0,n.kt)("em",{parentName:"p"},"SNMPEXTRAOPTIONS")," afin de renseigner les param\xe8tres\nd'authentification et de chiffrement ad\xe9quats")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Mandatory"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"})),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"SNMPEXTRAOPTIONS"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Extra options SNMP")))),(0,n.kt)("h2",i({},{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"}),"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,n.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande\ndepuis un collecteur Centreon en vous connectant avec l'utilisateur ",(0,n.kt)("em",{parentName:"p"},"centreon-engine"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_infoblox_snmp.pl \\\n    --plugin=network::infoblox::snmp::plugin \\\n    --mode=system \\\n    --hostname=10.30.2.114 \\\n    --snmp-version='2c' \\\n    --snmp-community='infoblox_ro' \\\n    --warning-cpu-load='90' \\\n    --critical-cpu-load='95' \\\n    --verbose\n")),(0,n.kt)("p",null,"La commande devrait retourner un message de sortie de la forme ci-dessous:"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"OK: System 'IB-825' is ok | 'cpu.utilization.percentage'=3.00%;0:90;0:95;0;100 'memory.usage.percentage'=2.00%;;;0;100 'swap.usage.percentage'=0.00%;;;0;100 'system.cpu1.temperature.celsius'=20.00C;;;;\nchecking system 'IB-825'\n    cpu load: 3.00 %\n    memory used: 2.00 %\n    swap used: 0.00 %\n    cpu1 temperature: 20.00 C\n    high-availablity status is 'Not Configured'\n")),(0,n.kt)("p",null,"Cette commande contr\xf4le le syst\xe8me (",(0,n.kt)("inlineCode",{parentName:"p"},"--mode=system"),") d'un \xe9quipement Infoblox ayant pour adresse ",(0,n.kt)("em",{parentName:"p"},"10.30.2.114")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--hostname=10.30.2.114"),")\nen version ",(0,n.kt)("em",{parentName:"p"},"2c")," du protocol SNMP (",(0,n.kt)("inlineCode",{parentName:"p"},"--snmp-version='2c'"),") et avec la communaut\xe9 ",(0,n.kt)("em",{parentName:"p"},"infoblox_ro")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--snmp-community='infoblox_ro'"),")."),(0,n.kt)("p",null,"Cette commande d\xe9clenchera une alarme WARNING si l'utilisation processeur est sup\xe9rieur \xe0 90% (",(0,n.kt)("inlineCode",{parentName:"p"},"--warning-cpu-load='90'"),")\net une alarme CRITICAL si sup\xe9rieur \xe0 95% (",(0,n.kt)("inlineCode",{parentName:"p"},"--critical-cpu-load='95'"),")."),(0,n.kt)("p",null,"Pour chaque mode, la liste de toutes les m\xe9triques, seuils associ\xe9s et options compl\xe9mentaires peut \xeatre affich\xe9e\nen ajoutant le param\xe8tre ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_infoblox_snmp.pl \\\n    --plugin=network::infoblox::snmp::plugin \\\n    --mode=system \\\n    --help\n")),(0,n.kt)("h2",i({},{id:"jobtiens-le-message-derreur-suivant"}),"J'obtiens le message d'erreur suivant:"),(0,n.kt)("h3",i({},{id:"unknown-snmp-get-request--timeout"}),"UNKNOWN: SNMP GET Request : Timeout"),(0,n.kt)("p",null,"Si vous obtenez ce message, cela signifie que vous ne parvenez pas \xe0 contacter l'\xe9quipement sur le port 161,\nou alors que la communaut\xe9 SNMP configur\xe9e n'est pas correcte.\nIl est \xe9galement possible qu'un firewall bloque le flux."),(0,n.kt)("h3",i({},{id:"unknown-snmp-get-request--cant-get-a-single-value"}),"UNKNOWN: SNMP GET Request : Cant get a single value."),(0,n.kt)("p",null,"Si vous rencontrez cette erreur, il est probable que les autorisations donn\xe9es \xe0 l'agent SNMP soient trop restreintes. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"L'\xe9quipement ne prend pas en charge la MIB utilis\xe9e par le Plugin (branche: .1.3.6.1.4.1.7779)."),(0,n.kt)("li",{parentName:"ul"},"L'OID SNMP cibl\xe9 ne peut pas \xeatre r\xe9cup\xe9r\xe9 en raison de privil\xe8ges d'\xe9quipement insuffisants.")))}f.isMDXComponent=!0},7626:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function o({children:e,hidden:t,className:a}){return n.createElement("div",i({role:"tabpanel",className:(0,r.Z)(l,a)},{hidden:t}),e)}},67709:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(67294),r=a(86010),l=a(90980),i=a(35715),o=a(8854),s=a(8241);const p="tabList__CuJ",u="tabItem_LNqP";function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},m.apply(this,arguments)}function c(e){var t;const{lazy:a,block:l,defaultValue:c,values:d,groupId:f,className:k}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=d?d:g.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),b=(0,i.l)(N,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var v;const h=null===c?c:null!==(v=null!=c?c:null===(t=g.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==v?v:g[0].props.value;if(null!==h&&!N.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:P}=(0,o.U)(),[w,S]=(0,n.useState)(h),O=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=f){const e=y[f];null!=e&&e!==w&&N.some((t=>t.value===e))&&S(e)}const q=e=>{const t=e.currentTarget,a=O.indexOf(t),n=N[a].value;n!==w&&(x(t),S(n),null!=f&&P(f,String(n)))},C=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=O.indexOf(e.currentTarget)+1;var a;t=null!==(a=O[n])&&void 0!==a?a:O[0];break}case"ArrowLeft":{const a=O.indexOf(e.currentTarget)-1;var n;t=null!==(n=O[a])&&void 0!==n?n:O[O.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",p)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},k)},N.map((({value:e,label:t,attributes:a})=>n.createElement("li",m({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>O.push(e),onKeyDown:C,onFocus:q,onClick:q},a,{className:(0,r.Z)("tabs__item",u,null==a?void 0:a.className,{"tabs__item--active":w===e})}),null!=t?t:e)))),a?(0,n.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,l.Z)();return n.createElement(c,m({key:String(t)},e))}}}]);