"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[46236],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36475:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>m});n(67294);var a=n(3905),r=n(67709),l=n(7626);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"network-cisco-callmanager-sxml",title:"Cisco Call Manager SXML"},c=void 0,u={unversionedId:"integrations/plugin-packs/procedures/network-cisco-callmanager-sxml",id:"integrations/plugin-packs/procedures/network-cisco-callmanager-sxml",title:"Cisco Call Manager SXML",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/network-cisco-callmanager-sxml.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-cisco-callmanager-sxml",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/network-cisco-callmanager-sxml",draft:!1,tags:[],version:"current",frontMatter:{id:"network-cisco-callmanager-sxml",title:"Cisco Call Manager SXML"},sidebar:"pp",previous:{title:"Cisco Call Manager",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/network-cisco-callmanager-snmp"},next:{title:"Cisco ESA Rest API",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/network-cisco-esa-restapi"}},p={},m=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du Plugin-Pack",id:"contenu-du-plugin-pack",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:3},{value:"J&#39;obtiens le message d&#39;erreur suivant:",id:"jobtiens-le-message-derreur-suivant",level:3},{value:"<code>UNKNOWN: 500 Can&#39;t connect to mycucm.com:443 |</code>",id:"unknown-500-cant-connect-to-mycucmcom443-",level:4},{value:"<code>UNKNOWN: 501 Protocol scheme &#39;connect&#39; is not supported |</code>",id:"unknown-501-protocol-scheme-connect-is-not-supported-",level:4}],d={toc:m};function g(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",o({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",o({},{id:"vue-densemble"}),"Vue d'ensemble"),(0,a.kt)("p",null,"En utilisant le SXML, ce Plugin-Pack Cisco Call Manager, supervise les alertes du composant Cisco Unified Communications."),(0,a.kt)("h2",o({},{id:"contenu-du-plugin-pack"}),"Contenu du Plugin-Pack"),(0,a.kt)("h3",o({},{id:"objets-supervis\xe9s"}),"Objets supervis\xe9s"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Alertes")),(0,a.kt)("h3",o({},{id:"m\xe9triques-collect\xe9es"}),"M\xe9triques collect\xe9es"),(0,a.kt)("p",null,"Vous pouvez vous renseigner en d\xe9tails sur les m\xe9triques pr\xe9sent\xe9es ci-apr\xe8s sur la documentation officielle\nde Cisco Callmanager : ",(0,a.kt)("a",o({parentName:"p"},{href:"https://www.cisco.com/c/en/us/support/docs/unified-communications/unified-communications-manager-callmanager/213291-real-time-monitoring-tool-alerts.html#anc8"}),"https://www.cisco.com/c/en/us/support/docs/unified-communications/unified-communications-manager-callmanager/213291-real-time-monitoring-tool-alerts.html#anc8")),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Alerts",label:"Alerts",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"alerts.total.count"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Total number of alerts"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"severity-$alerts.severity.count"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Number of different severities"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"count")))))),(0,a.kt)("h2",o({},{id:"pr\xe9requis"}),"Pr\xe9requis"),(0,a.kt)("h2",o({},{id:"installation"}),"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon supervisant des ressources Cisco Callmanager :")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Network-Cisco-Callmanager-Sxml.noarch\n")),(0,a.kt)("ol",o({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Plugin-Pack ",(0,a.kt)("em",{parentName:"li"},"Cisco Callmanager SXML"),' depuis la page "Configuration > Plugin packs > Manager"'))),(0,a.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon supervisant des ressources Cisco Callmanager :")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Network-Cisco-Callmanager-Sxml.noarch\n")),(0,a.kt)("ol",o({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le Plugin-Pack via le RPM:")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yum install centreon-pack-network-cisco-callmanager-sxml.noarch\n")),(0,a.kt)("ol",o({},{start:3}),(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Plugin-Pack ",(0,a.kt)("em",{parentName:"li"},"Cisco Callmanager SXML"),' depuis la page "Configuration > Plugin packs > Manager"')))),(0,a.kt)("h2",o({},{id:"configuration"}),"Configuration"),(0,a.kt)("p",null,"Ce Plugin-Pack est con\xe7u de mani\xe8re \xe0 avoir dans Centreon un h\xf4te par environnement Cisco Callmanager\nLorsque vous ajoutez un h\xf4te \xe0 Centreon, appliquez-lui le mod\xe8le ",(0,a.kt)("em",{parentName:"p"},"Net-Cisco-Callmanager-Sxml-custom"),".\nUne fois celui-ci configur\xe9, certaines macros doivent \xeatre renseign\xe9es:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Mandatory"),(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Name"),(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"CUCMSXMLAPIPORT"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Port used. Default is 8443")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"CUCMSXMLAPIPROTO"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Protocol used. Default is https")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"})),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"CUCMSXMLAPIEXTRAOPTIONS"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Any extra option you may want to add to the command")))),(0,a.kt)("h2",o({},{id:"faq"}),"FAQ"),(0,a.kt)("h3",o({},{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"}),"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,a.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande depuis votre Collecteur Centreon avec l'utilisateur ",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_cisco_cucm_sxml.pl \\\n    --plugin=network::cisco::callmanager::sxml::plugin \\\n    --mode=alerts \\\n    --hostname='mycucm.com' \\\n    --api-username='centreoncucm' \\\n    --api-password='myapipassword' \\\n    --port='8443' \\\n    --proto='https' \\ \n    --http-backend=curl \\\n    --curl-opt=\"CURLOPT_SSL_VERIFYPEER => 0\" \\\n    --verbose \\\n    --display-alerts\nOK: Alerts total: 1, informational: 0, error: 0, debugging: 0, critical: 1, alert: 0, warning: 0, emergency: 0, notice: 0 \n| 'alerts.total.count'=1;;;0; 'alerts.severity.informational.count'=0;;;0;1 'alerts.severity.error.count'=0;;;0;1 'alerts.severity.debugging.count'=0;;;0;1 \n'alerts.severity.critical.count'=1;;;0;1 'alerts.severity.alert.count'=0;;;0;1 'alerts.severity.warning.count'=0;;;0;1 'alerts.severity.emergency.count'=0;;;0;1 \n'alerts.severity.notice.count'=0;;;0;1\nalert [name: CDRFileDeliveryFailureContinues] [severity: critical] [date: Tue Oct  6 05:42:12 2020]:  BillingServerAddress : 172.28.172.105 \nAppID : Cisco CDR Repository Manager ClusterID :  NodeID : server.centreon.com  TimeStamp : Tue Oct 06 05:41:50 EDT 2020. \nThe alarm is generated on Tue Oct 06 05:41:50 EDT 2020. \n")),(0,a.kt)("p",null,"La commande ci-dessus contr\xf4le les alertes de Cisco Callmanager via la SXML (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=alerts"),").\nLe Plugin utilise l'api-username (",(0,a.kt)("inlineCode",{parentName:"p"},"--api-username='centreoncucm'"),"), l'api-password (",(0,a.kt)("inlineCode",{parentName:"p"},"--api-password='myapipassword'"),")\net il se connecte \xe0 l'h\xf4te ",(0,a.kt)("em",{parentName:"p"},"mycucm.com")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--hostname='mycucm.com'"),")\nsur le port ",(0,a.kt)("em",{parentName:"p"},"443")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--port='443'"),") utilisant le protocol ",(0,a.kt)("em",{parentName:"p"},"https")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--proto='https'"),").\nPar defaut le m\xe9thode du backend est ",(0,a.kt)("em",{parentName:"p"},"curl")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--http-backend=curl"),")."),(0,a.kt)("p",null,"Toutes les options et leur utilisation peuvent \xeatre consult\xe9es avec le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," ajout\xe9 \xe0 la commande:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins//centreon_cisco_cucm_sxml.pl \\\n    --plugin=network::cisco::callmanager::sxml::plugin \\\n    --mode=alerts \\\n    --help\n")),(0,a.kt)("h3",o({},{id:"jobtiens-le-message-derreur-suivant"}),"J'obtiens le message d'erreur suivant:"),(0,a.kt)("h4",o({},{id:"unknown-500-cant-connect-to-mycucmcom443-"}),(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 500 Can't connect to mycucm.com:443 |")),(0,a.kt)("p",null,"Lors du d\xe9ploiement de mes contr\xf4les, j'obtiens le message suivant ",(0,a.kt)("inlineCode",{parentName:"p"},"UNKNOWN: 500 Can't connect to mycucm.com:443 |"),".\nCela signifie que Centreon n'a pas r\xe9ussi \xe0 se connecter \xe0 Cisco Callmanager SXML (",(0,a.kt)("em",{parentName:"p"},"mycucm.com"),").\nLa plupart du temps, il faut pr\xe9ciser le proxy \xe0 utiliser pour requ\xeater l'URL ",(0,a.kt)("em",{parentName:"p"},"mycucm.com")," en utilisant l'option ",(0,a.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany:8080'"),"."),(0,a.kt)("h4",o({},{id:"unknown-501-protocol-scheme-connect-is-not-supported-"}),(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 501 Protocol scheme 'connect' is not supported |")),(0,a.kt)("p",null,"Suite \xe0 la mise en place du proxy, j'obtiens le message suivant ",(0,a.kt)("inlineCode",{parentName:"p"},"UNKNOWN: 501 Protocol scheme 'connect' is not supported |"),"\nCela signifie que le protocole de connexion au proxy n'est pas support\xe9 par la libraire ",(0,a.kt)("em",{parentName:"p"},"LWP")," utlis\xe9e par d\xe9faut par le Plugin Centreon.\nCette erreur peut \xeatre r\xe9solue en utilisant le backend HTTP ",(0,a.kt)("em",{parentName:"p"},"lwp"),". Pour ce faire, ajoutez l'option ",(0,a.kt)("inlineCode",{parentName:"p"},"--http-backend='lwp'")," \xe0 la commande."))}g.isMDXComponent=!0},7626:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i({children:e,hidden:t,className:n}){return a.createElement("div",o({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},67709:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(67294),r=n(86010),l=n(90980),o=n(35715),i=n(8854),s=n(8241);const c="tabList__CuJ",u="tabItem_LNqP";function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p.apply(this,arguments)}function m(e){var t;const{lazy:n,block:l,defaultValue:m,values:d,groupId:g,className:k}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=d?d:f.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),b=(0,o.l)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var y;const N=null===m?m:null!==(y=null!=m?m:null===(t=f.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==y?y:f[0].props.value;if(null!==N&&!v.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:C}=(0,i.U)(),[w,O]=(0,a.useState)(N),P=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=g){const e=h[g];null!=e&&e!==w&&v.some((t=>t.value===e))&&O(e)}const x=e=>{const t=e.currentTarget,n=P.indexOf(t),a=v[n].value;a!==w&&(T(t),O(a),null!=g&&C(g,String(a)))},j=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=P.indexOf(e.currentTarget)+1;var n;t=null!==(n=P[a])&&void 0!==n?n:P[0];break}case"ArrowLeft":{const n=P.indexOf(e.currentTarget)-1;var a;t=null!==(a=P[n])&&void 0!==a?a:P[P.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},k)},v.map((({value:e,label:t,attributes:n})=>a.createElement("li",p({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>P.push(e),onKeyDown:j,onFocus:x,onClick:x},n,{className:(0,r.Z)("tabs__item",u,null==n?void 0:n.className,{"tabs__item--active":w===e})}),null!=t?t:e)))),n?(0,a.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,l.Z)();return a.createElement(m,p({key:String(t)},e))}}}]);