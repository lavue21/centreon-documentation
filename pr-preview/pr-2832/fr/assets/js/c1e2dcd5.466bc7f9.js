"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[71240],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81418:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>p,metadata:()=>u,toc:()=>m});n(67294);var a=n(3905),r=n(67709),l=n(7626);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"blockchain-parity-restapi",title:"Parity API"},s=void 0,u={unversionedId:"integrations/plugin-packs/procedures/blockchain-parity-restapi",id:"integrations/plugin-packs/procedures/blockchain-parity-restapi",title:"Parity API",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/blockchain-parity-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/blockchain-parity-restapi",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/blockchain-parity-restapi",draft:!1,tags:[],version:"current",frontMatter:{id:"blockchain-parity-restapi",title:"Parity API"},sidebar:"pp",previous:{title:"Hyperledger API",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/blockchain-hyperledger-exporter"},next:{title:"Parity Ethpoller API",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/blockchain-parity-ethpoller-restapi"}},c={},m=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration d&#39;un H\xf4te",id:"configuration-dun-h\xf4te",level:2},{value:"Comment tester mes configurations et le Plugin en ligne de commande ?",id:"comment-tester-mes-configurations-et-le-plugin-en-ligne-de-commande-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:2},{value:"UNKNOWN: Can&#39;t connect to ...",id:"unknown-cant-connect-to-",level:3},{value:"J&#39;obtiens le message d&#39;erreur suivant:  ``UNKNOWN: 501 Protocol scheme &#39;connect&#39; is not supported |```",id:"jobtiens-le-message-derreur-suivant--unknown-501-protocol-scheme-connect-is-not-supported-",level:3}],d={toc:m};function k(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",i({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",i({},{id:"vue-densemble"}),"Vue d'ensemble"),(0,a.kt)("p",null,"Parity est un fork de la Blockchain Ethereum. "),(0,a.kt)("p",null,"Le Plugin Pack ",(0,a.kt)("em",{parentName:"p"},"Parity API")," collecte des informations et m\xe9triques sur l'activit\xe9\ndes noeuds d'un r\xe9seau Blockchain au travers d'une API. "),(0,a.kt)("h2",i({},{id:"contenu-du-pack"}),"Contenu du Pack"),(0,a.kt)("h3",i({},{id:"objets-supervis\xe9s"}),"Objets supervis\xe9s"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Noeud(s) d'une Blockchain Parity",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Parity"),(0,a.kt)("li",{parentName:"ul"},"Info"),(0,a.kt)("li",{parentName:"ul"},"Eth"),(0,a.kt)("li",{parentName:"ul"},"Net")))),(0,a.kt)("h3",i({},{id:"m\xe9triques-collect\xe9es"}),"M\xe9triques collect\xe9es"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Parity",label:"Parity",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"parity.pending.transactions"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of pending transactions"),(0,a.kt)("td",i({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"parity.mempol.usage"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Memory pool usage"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"parity.mempol.size"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Memory pool size"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"B")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"parity.peers.connected"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of connected peers"),(0,a.kt)("td",i({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"parity.peers.max"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Maximum number of peers"),(0,a.kt)("td",i({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"parity.peers.usage"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Peers usage expressed in percent"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"%"))))),(0,a.kt)(l.Z,{value:"Eth",label:"Eth",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"parity.eth.sync.status"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"State of node synchronization")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"parity.eth.block.gas"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Gas")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"parity.eth.block.usage"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Block Usage")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"parity.eth.block.size"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Size of Block")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"parity.eth.block.transactions.number"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of block transactions")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"parity.eth.block.uncles"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of block uncles")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"parity.eth.gas.limit"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Maximum Gas available")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"parity.eth.gas.price"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Gas price")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"parity.eth.gas.used"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Gas consumption"))))),(0,a.kt)(l.Z,{value:"Net",label:"Net",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"parity.network.peers.count"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Number of known peers")))))),(0,a.kt)("h2",i({},{id:"pr\xe9requis"}),"Pr\xe9requis"),(0,a.kt)("p",null,"Le Poller doit pouvoir communiquer avec le noeud Parity via le protocole HTTP et\nvia le port configur\xe9 (par d\xe9faut: 8545)."),(0,a.kt)("h2",i({},{id:"installation"}),"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon supervisant des noeuds Parity:")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Blockchain-Parity-Restapi\n")),(0,a.kt)("ol",i({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Plugin Pack ",(0,a.kt)("em",{parentName:"li"},"Parity API")," depuis\nla page  ",(0,a.kt)("inlineCode",{parentName:"li"},"Configuration > Plugin Packs"),"."))),(0,a.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon supervisant des noeuds Parity:")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Blockchain-Parity-Restapi\n")),(0,a.kt)("ol",i({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"Installer le RPM du Plugin Pack ",(0,a.kt)("em",{parentName:"li"},"Parity API")," sur le serveur Central: ")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-pack-blockchain-parity-restapi\n")),(0,a.kt)("ol",i({},{start:3}),(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Plugin Pack ",(0,a.kt)("em",{parentName:"li"},"Parity API")," depuis\nla page  ",(0,a.kt)("inlineCode",{parentName:"li"},"Configuration > Plugin Packs"),".")))),(0,a.kt)("h2",i({},{id:"configuration-dun-h\xf4te"}),"Configuration d'un H\xf4te"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ajoutez un nouvel H\xf4te via le menu ",(0,a.kt)("inlineCode",{parentName:"li"},"Configuration > Hosts")),(0,a.kt)("li",{parentName:"ul"},'Compl\xe9tez les champs "Nom","Alias" & "IP Address / DNS" correspondant \xe0 votre noeud Parity'),(0,a.kt)("li",{parentName:"ul"},"Appliquez le Mod\xe8le d'H\xf4te ",(0,a.kt)("em",{parentName:"li"},"Blockchain-Parity-Restapi-custom")," et configurer les macros associ\xe9es")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Mandatory"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Name"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"})),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"PARITYAPIPORT"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"(Default: '8545')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"})),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"PARITYPROTO"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"(Default: 'http')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"})),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"PARITYAPIURLPATH"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"(Default: '/')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"})),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"TIMEOUT"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"})),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"PARITYEXTRAOPTIONS"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Any extra option you may want to add to every command_line (eg. a --verbose flag)")))),(0,a.kt)("h2",i({},{id:"comment-tester-mes-configurations-et-le-plugin-en-ligne-de-commande-"}),"Comment tester mes configurations et le Plugin en ligne de commande ?"),(0,a.kt)("p",null,"Une fois le Plugin d\xe9ploy\xe9, connectez vous \xe0 votre Collecteur en SSH et executez\nla commande suivante au travers de l'utilisateur ",(0,a.kt)("em",{parentName:"p"},"centreon-engine"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins//centreon_blockchain_parity_api.pl  \\ \n   --plugin=blockchain::parity::restapi::plugin  \\ \n   --mode=net  \\ \n   --hostname=10.0.0.1  \\ \n   --port=8545  \\ \n   --proto=http \\\n   --timeout=10  \\ \n   --proto=http  \\ \n   --api-path=/  \\ \n   --warning-peers=''  \\ \n   --critical-peers='1:'   \n")),(0,a.kt)("p",null,"Le retour de la commande doit \xeatre similaire \xe0:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"OK: Parity network module: connected peers: 2")),(0,a.kt)("p",null,"Cette commande d\xe9clenchera une alerte WARNING si le nombre de peers connect\xe9 est\ninf\xe9rieur \xe0 1 (",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-peers=1:"),")."),(0,a.kt)("p",null,"Tous les modes d'un Plugin donn\xe9 peuvent \xeatre list\xe9s au moyen de la commande suivante:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins//centreon_blockchain_parity_api.pl  \\ \n    --plugin=blockchain::parity::restapi::plugin  \\ \n    --list-mode\n")),(0,a.kt)("h2",i({},{id:"diagnostic-des-erreurs-communes"}),"Diagnostic des erreurs communes"),(0,a.kt)("h3",i({},{id:"unknown-cant-connect-to-"}),"UNKNOWN: Can't connect to ..."),(0,a.kt)("p",null,"Cette erreur signifie que Centreon n'a pas r\xe9ussi \xe0 se connecter \xe0 l'API du\nBCM Poller. V\xe9rifiez que la requ\xeate n'est pas bloqu\xe9e par un outil externe\n(un pare-feu par exemple). Si vous utilisez un proxy, renseignez son URL dans la\nMacro EXTRAOPTIONS de l'H\xf4te ou directement dans la commande avec l'option\n",(0,a.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany:8080'"),"."),(0,a.kt)("p",null,"V\xe9rifiez \xe9galement que le port configur\xe9 est correct."),(0,a.kt)("h3",i({},{id:"jobtiens-le-message-derreur-suivant--unknown-501-protocol-scheme-connect-is-not-supported-"}),"J'obtiens le message d'erreur suivant:  ``UNKNOWN: 501 Protocol scheme 'connect' is not supported |```"),(0,a.kt)("p",null,"Dans certains cas, et plus sp\xe9cifiquement lors de l'usage d'un proxy\nd'entreprise, le protocole de connexion n'est pas support\xe9 par la libraire lwp\nutlis\xe9e par d\xe9faut par le Plugin Centreon.\nCette erreur peut \xeatre r\xe9solue en utilisant le backend HTTP curl. Pour ce faire,\najoutez l'option ",(0,a.kt)("inlineCode",{parentName:"p"},"--http-backend='curl'")," dans la Macro EXTRAOPTIONS de\nl'H\xf4te ou directement \xe0 la commande."))}k.isMDXComponent=!0},7626:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function o({children:e,hidden:t,className:n}){return a.createElement("div",i({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},67709:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(67294),r=n(86010),l=n(90980),i=n(35715),o=n(8854),p=n(8241);const s="tabList__CuJ",u="tabItem_LNqP";function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function m(e){var t;const{lazy:n,block:l,defaultValue:m,values:d,groupId:k,className:g}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=d?d:f.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),N=(0,i.l)(b,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var y;const v=null===m?m:null!==(y=null!=m?m:null===(t=f.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==y?y:f[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:P}=(0,o.U)(),[O,T]=(0,a.useState)(v),I=[],{blockElementScrollPositionUntilNextRender:w}=(0,p.o5)();if(null!=k){const e=h[k];null!=e&&e!==O&&b.some((t=>t.value===e))&&T(e)}const C=e=>{const t=e.currentTarget,n=I.indexOf(t),a=b[n].value;a!==O&&(w(t),T(a),null!=k&&P(k,String(a)))},x=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=I.indexOf(e.currentTarget)+1;var n;t=null!==(n=I[a])&&void 0!==n?n:I[0];break}case"ArrowLeft":{const n=I.indexOf(e.currentTarget)-1;var a;t=null!==(a=I[n])&&void 0!==a?a:I[I.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},g)},b.map((({value:e,label:t,attributes:n})=>a.createElement("li",c({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>I.push(e),onKeyDown:x,onFocus:C,onClick:C},n,{className:(0,r.Z)("tabs__item",u,null==n?void 0:n.className,{"tabs__item--active":O===e})}),null!=t?t:e)))),n?(0,a.cloneElement)(f.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function d(e){const t=(0,l.Z)();return a.createElement(m,c({key:String(t)},e))}}}]);