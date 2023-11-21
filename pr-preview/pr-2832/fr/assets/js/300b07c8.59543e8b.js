"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[63985],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26832:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>m});n(67294);var r=n(3905),a=n(67709),l=n(7626);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={id:"network-fritzbox-upnp",title:"Fritz!Box UPnP"},p=void 0,u={unversionedId:"integrations/plugin-packs/procedures/network-fritzbox-upnp",id:"integrations/plugin-packs/procedures/network-fritzbox-upnp",title:"Fritz!Box UPnP",description:"Contenu du Pack",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/network-fritzbox-upnp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-fritzbox-upnp",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/network-fritzbox-upnp",draft:!1,tags:[],version:"current",frontMatter:{id:"network-fritzbox-upnp",title:"Fritz!Box UPnP"},sidebar:"pp",previous:{title:"Freebox",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/network-freebox-restapi"},next:{title:"Gorgy NTP Server",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/hardware-device-gorgy-ntpserver-snmp"}},c={},m=[{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostique",id:"diagnostique",level:2}],d={toc:m};function f(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",i({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",i({},{id:"contenu-du-pack"}),"Contenu du Pack"),(0,r.kt)("h3",i({},{id:"objets-supervis\xe9s"}),"Objets supervis\xe9s"),(0,r.kt)("p",null,"Le Pack Fritz!Box collecte les donn\xe9es pour:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"System"),(0,r.kt)("li",{parentName:"ul"},"Traffic")),(0,r.kt)("h3",i({},{id:"m\xe9triques-collect\xe9es"}),"M\xe9triques collect\xe9es"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"System",label:"System",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"connection status"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Connection and physical link status"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"system.uptime.seconds"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Elapsed time since the last reboot"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"s"))))),(0,r.kt)(l.Z,{value:"Traffic",label:"Traffic",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric name"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"system.interface.wan.traffic.in.bitspersecond"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Incoming traffic going through the WAN interface"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"b/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"system.interface.wan.traffic.out.bitspersecond"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Outgoing traffic going through the WAN interface"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"b/s")))))),(0,r.kt)("h2",i({},{id:"pr\xe9requis"}),"Pr\xe9requis"),(0,r.kt)("p",null,"Afin de contr\xf4ler votre \xe9quipement Fritz!Box, l'UPnP doit \xeatre configur\xe9."),(0,r.kt)("h2",i({},{id:"installation"}),"Installation"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Network-Fritzbox-Upnp\n")),(0,r.kt)("ol",i({},{start:2}),(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Pack ",(0,r.kt)("em",{parentName:"li"},"Fritz!Box UPnP")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Plugin Packs > Gestionnaire")))),(0,r.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Network-Fritzbox-Upnp\n")),(0,r.kt)("ol",i({},{start:2}),(0,r.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le Pack via le RPM:")),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-pack-network-fritzbox-upnp\n")),(0,r.kt)("ol",i({},{start:3}),(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Pack ",(0,r.kt)("em",{parentName:"li"},"Fritz!Box UPnP")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Plugin Packs > Gestionnaire"))))),(0,r.kt)("h2",i({},{id:"configuration"}),"Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ajoutez un nouvel H\xf4te depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes")),(0,r.kt)("li",{parentName:"ul"},"Compl\xe9tez les champs ",(0,r.kt)("em",{parentName:"li"},"Adresse IP/DNS"),", ",(0,r.kt)("em",{parentName:"li"},"Communaut\xe9 SNMP")," et ",(0,r.kt)("em",{parentName:"li"},"Version SNMP")),(0,r.kt)("li",{parentName:"ul"},"Appliquez le Mod\xe8le d'H\xf4te ",(0,r.kt)("em",{parentName:"li"},"Net-Fritzbox-UPNP-custom"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Une fois celui-ci configur\xe9, certaines macros doivent \xeatre renseign\xe9es:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Mandatory"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Name"),(0,r.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"X"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"UPNPPORT"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Port used (Default: 49000)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"X"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"UPNPPROTO"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Specify https if needed (Default: 'http')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",i({parentName:"tr"},{align:"left"})),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"UPNPEXTRAOPTIONS"),(0,r.kt)("td",i({parentName:"tr"},{align:"left"}),"Any extra option you may want to add to the command (eg. a --verbose flag)")))),(0,r.kt)("h2",i({},{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"}),"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,r.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande\ndepuis un collecteur Centreon en vous connectant avec l'utilisateur ",(0,r.kt)("em",{parentName:"p"},"centreon-engine"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_fritzbox_upnp.pl \\\n    --plugin=network::fritzbox::upnp::plugin \\\n    --mode=traffic \\\n    --hostname='10.30.2.79' \\\n    --port='49000' \\\n    --proto='http'\n")),(0,r.kt)("p",null,"La commande devrait retourner un message de sortie de la forme ci-dessous:"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"OK: Traffic In: 1.29 Mb/s, Traffic Out: 1.49 Mb/s | 'system.interface.wan.traffic.in.bitspersecond'=1287234b/s;;;0;10000000 'system.interface.wan.traffic.in.bitspersecond'=1487235b/s;;;0;10000000\n")),(0,r.kt)("p",null,"Cette commande contr\xf4le le traffic de l'interface WAN (",(0,r.kt)("inlineCode",{parentName:"p"},"--mode=traffic"),")."),(0,r.kt)("p",null,"La commande se connecte \xe0 l'h\xf4te ",(0,r.kt)("em",{parentName:"p"},"10.30.2.79")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--hostname='10.30.2.79'"),") sur le port ",(0,r.kt)("em",{parentName:"p"},"49000")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--port='49000'"),") utilisant le protocol ",(0,r.kt)("em",{parentName:"p"},"http")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--proto='http'"),")."),(0,r.kt)("p",null,"Pour chaque mode, la liste de toutes les m\xe9triques, seuils associ\xe9s et options compl\xe9mentaires peut \xeatre affich\xe9e\nen ajoutant le param\xe8tre ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_fritzbox_upnp.pl \\\n    --plugin=network::fritzbox::upnp::plugin \\\n    --mode=traffic \\\n    --help\n")),(0,r.kt)("h2",i({},{id:"diagnostique"}),"Diagnostique"),(0,r.kt)("p",null,(0,r.kt)("a",i({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"}),"Diagnostique des plugins")))}f.isMDXComponent=!0},7626:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const l="tabItem_Ymn6";function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o({children:e,hidden:t,className:n}){return r.createElement("div",i({role:"tabpanel",className:(0,a.Z)(l,n)},{hidden:t}),e)}},67709:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(67294),a=n(86010),l=n(90980),i=n(35715),o=n(8854),s=n(8241);const p="tabList__CuJ",u="tabItem_LNqP";function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function m(e){var t;const{lazy:n,block:l,defaultValue:m,values:d,groupId:f,className:k}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=d?d:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),v=(0,i.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var N;const h=null===m?m:null!==(N=null!=m?m:null===(t=g.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==N?N:g[0].props.value;if(null!==h&&!b.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:P}=(0,o.U)(),[O,w]=(0,r.useState)(h),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=f){const e=y[f];null!=e&&e!==O&&b.some((t=>t.value===e))&&w(e)}const C=e=>{const t=e.currentTarget,n=x.indexOf(t),r=b[n].value;r!==O&&(T(t),w(r),null!=f&&P(f,String(r)))},j=e=>{let t=null;switch(e.key){case"ArrowRight":{const r=x.indexOf(e.currentTarget)+1;var n;t=null!==(n=x[r])&&void 0!==n?n:x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;var r;t=null!==(r=x[n])&&void 0!==r?r:x[x.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":l},k)},b.map((({value:e,label:t,attributes:n})=>r.createElement("li",c({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>x.push(e),onKeyDown:j,onFocus:C,onClick:C},n,{className:(0,a.Z)("tabs__item",u,null==n?void 0:n.className,{"tabs__item--active":O===e})}),null!=t?t:e)))),n?(0,r.cloneElement)(g.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function d(e){const t=(0,l.Z)();return r.createElement(m,c({key:String(t)},e))}}}]);