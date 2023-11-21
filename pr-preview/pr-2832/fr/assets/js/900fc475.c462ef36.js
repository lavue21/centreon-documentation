"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[85820],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>m});n(67294);var r=n(3905),a=n(67709),l=n(7626);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={id:"applications-nmap-cli",title:"Nmap CLI Discovery"},c=void 0,u={unversionedId:"integrations/plugin-packs/procedures/applications-nmap-cli",id:"integrations/plugin-packs/procedures/applications-nmap-cli",title:"Nmap CLI Discovery",description:"Contenu du Pack",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-nmap-cli.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-nmap-cli",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/applications-nmap-cli",draft:!1,tags:[],version:"current",frontMatter:{id:"applications-nmap-cli",title:"Nmap CLI Discovery"},sidebar:"pp",previous:{title:"Microsoft DHCP SNMP",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/applications-microsoft-dhcp-snmp"},next:{title:"JBoss Server",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/applications-jboss-jmx"}},p={},m=[{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Installation",id:"installation",level:2},{value:"Ressources compl\xe9mentaires",id:"ressources-compl\xe9mentaires",level:2}],d={toc:m};function f(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",o({},{id:"contenu-du-pack"}),"Contenu du Pack"),(0,r.kt)("p",null,"Ce Pack fournit exclusivement une r\xe8gle de d\xe9couverte d'H\xf4te. "),(0,r.kt)("p",null,"\xc0 l'aide du fournisseur ",(0,r.kt)("strong",{parentName:"p"},"Nmap Discovery")," vous pouvez facilement d\xe9couvrir les H\xf4tes au\nsein de sous-r\xe9seaux donn\xe9s. "),(0,r.kt)("h2",o({},{id:"installation"}),"Installation"),(0,r.kt)("p",null,"Pour installer le Plugin et le Pack, suivez les \xe9tapes ci-apr\xe8s. "),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Online Licence",label:"Online Licence",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin Centreon sur tous les collecteurs Centreon utilisant le binaire ",(0,r.kt)("strong",{parentName:"li"},"Nmap")," pour d\xe9couvrir des ressources: ")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Applications-Nmap-Cli\n")),(0,r.kt)("ol",o({},{start:2}),(0,r.kt)("li",{parentName:"ol"},"Sur l'interface web de Centreon, installer le Plugin Pack ",(0,r.kt)("strong",{parentName:"li"},"Nmap CLI")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),"."))),(0,r.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installez le paquet Centreon Plugin sur les collecteurs allant d\xe9couvrir des ressources gr\xe2ce \xe0 ",(0,r.kt)("strong",{parentName:"li"},"Nmap"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Applications-Nmap-Cli\n")),(0,r.kt)("ol",o({},{start:2}),(0,r.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le RPM du Pack ",(0,r.kt)("strong",{parentName:"li"},"Nmap CLI"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yum install centreon-pack-applications-nmap-cli\n")),(0,r.kt)("ol",o({},{start:3}),(0,r.kt)("li",{parentName:"ol"},"Sur l'interface web de Centreon, installer le Plugin Pack ",(0,r.kt)("strong",{parentName:"li"},"Nmap CLI")," depuis la page ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),".")))),(0,r.kt)("h2",o({},{id:"ressources-compl\xe9mentaires"}),"Ressources compl\xe9mentaires"),(0,r.kt)("p",null,"Plusieurs articles existent pour vous aider \xe0 utiliser ce Pack : "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",o({parentName:"li"},{href:"https://thewatch.centreon.com/product-how-to-21/discovery-pack-speed-up-your-monitoring-and-make-it-more-reliable-using-the-new-nmap-discovery-tools-149"}),"Comment configurer une t\xe2che de d\xe9couverte ?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",o({parentName:"li"},{href:"https://thewatch.centreon.com/product-how-to-21/network-discovery-nmap-snmp-how-does-it-work-and-how-can-you-help-162"}),"Comment am\xe9liorer la d\xe9tection d'\xe9quipement et am\xe9liorer les propositions de Mod\xe8les associ\xe9s ?"))))}f.isMDXComponent=!0},7626:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const l="tabItem_Ymn6";function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i({children:e,hidden:t,className:n}){return r.createElement("div",o({role:"tabpanel",className:(0,a.Z)(l,n)},{hidden:t}),e)}},67709:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(67294),a=n(86010),l=n(90980),o=n(35715),i=n(8854),s=n(8241);const c="tabList__CuJ",u="tabItem_LNqP";function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function m(e){var t;const{lazy:n,block:l,defaultValue:m,values:d,groupId:f,className:v}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=d?d:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),k=(0,o.l)(b,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var y;const h=null===m?m:null!==(y=null!=m?m:null===(t=g.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==y?y:g[0].props.value;if(null!==h&&!b.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:O,setTabGroupChoices:N}=(0,i.U)(),[w,P]=(0,r.useState)(h),C=[],{blockElementScrollPositionUntilNextRender:j}=(0,s.o5)();if(null!=f){const e=O[f];null!=e&&e!==w&&b.some((t=>t.value===e))&&P(e)}const T=e=>{const t=e.currentTarget,n=C.indexOf(t),r=b[n].value;r!==w&&(j(t),P(r),null!=f&&N(f,String(r)))},E=e=>{let t=null;switch(e.key){case"ArrowRight":{const r=C.indexOf(e.currentTarget)+1;var n;t=null!==(n=C[r])&&void 0!==n?n:C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;var r;t=null!==(r=C[n])&&void 0!==r?r:C[C.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":l},v)},b.map((({value:e,label:t,attributes:n})=>r.createElement("li",p({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>C.push(e),onKeyDown:E,onFocus:T,onClick:T},n,{className:(0,a.Z)("tabs__item",u,null==n?void 0:n.className,{"tabs__item--active":w===e})}),null!=t?t:e)))),n?(0,r.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,l.Z)();return r.createElement(m,p({key:String(t)},e))}}}]);