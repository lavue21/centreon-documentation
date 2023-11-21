"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[20870],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47935:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>m});n(67294);var a=n(3905),r=n(67709),l=n(7626);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"applications-veeam-nsclient-05-restapi",title:"Veeam NSClient++ API"},p=void 0,c={unversionedId:"integrations/plugin-packs/procedures/applications-veeam-nsclient-05-restapi",id:"integrations/plugin-packs/procedures/applications-veeam-nsclient-05-restapi",title:"Veeam NSClient++ API",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/applications-veeam-nsclient-05-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-veeam-nsclient-05-restapi",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/applications-veeam-nsclient-05-restapi",draft:!1,tags:[],version:"current",frontMatter:{id:"applications-veeam-nsclient-05-restapi",title:"Veeam NSClient++ API"},sidebar:"pp",previous:{title:"Veeam NSClient++ NRPE",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/applications-veeam-nrpe"},next:{title:"Veritas Backup Exec NSCP Rest API",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/applications-backupexec-nscp-restapi"}},u={},m=[{value:"Overview",id:"overview",level:2},{value:"Pack assets",id:"pack-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Collected metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"NSClient++",id:"nsclient",level:3},{value:"Powershell",id:"powershell",level:3},{value:"Installation",id:"installation",level:2},{value:"Host configuration",id:"host-configuration",level:2}],d={toc:m};function f(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",i({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",i({},{id:"overview"}),"Overview"),(0,a.kt)("p",null,"The Plugin Pack ",(0,a.kt)("em",{parentName:"p"},"Veeam")," works with the Centreon NSClient++ monitoring agent and\nPowershell to check operating status of a Veeam Server. It uses the built-in NSClient++\nAPI. "),(0,a.kt)("h2",i({},{id:"pack-assets"}),"Pack assets"),(0,a.kt)("h3",i({},{id:"monitored-objects"}),"Monitored objects"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Veeam Servers: ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Jobs "),(0,a.kt)("li",{parentName:"ul"},"Tapes")))),(0,a.kt)("h3",i({},{id:"collected-metrics"}),"Collected metrics"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Coming soon")),(0,a.kt)("h2",i({},{id:"prerequisites"}),"Prerequisites"),(0,a.kt)("h3",i({},{id:"nsclient"}),"NSClient++"),(0,a.kt)("p",null,"To monitor ",(0,a.kt)("em",{parentName:"p"},"Veeam")," solutions through NSClient++ API, install the Centreon packaged version\nof the NSClient++ agent. Please follow our ",(0,a.kt)("a",i({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/getting-started/how-to-guides/centreon-nsclient-tutorial"}),"official documentation"),"\nand make sure that the ",(0,a.kt)("strong",{parentName:"p"},"Webserver / RESTApi")," configuration is correct. "),(0,a.kt)("h3",i({},{id:"powershell"}),"Powershell"),(0,a.kt)("p",null,"Powershell and the ",(0,a.kt)("inlineCode",{parentName:"p"},"Veeam.Backup.PowerShell")," snap-in must be installed\non the target Server. "),(0,a.kt)("p",null,"Starting with Veeam 11, the Plugin will try to find the most recent version of\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"VeeamPSSnapin"),". "),(0,a.kt)("h2",i({},{id:"installation"}),"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin package on every Centreon Poller expected to monitor ",(0,a.kt)("em",{parentName:"li"},"Veeam")," using REST API:")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Operatingsystems-Windows-Restapi\n")),(0,a.kt)("ol",i({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,a.kt)("em",{parentName:"li"},"Veeam")," Centreon Pack on the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Plugin Packs > Manager")," page"))),(0,a.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin package on every Centreon Poller expected to monitor ",(0,a.kt)("em",{parentName:"li"},"Veeam")," using REST API:")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Operatingsystems-Windows-Restapi\n")),(0,a.kt)("ol",i({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Pack RPM on the Centreon Central server:")),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-pack-applications-veeam-nsclient-05-restapi\n")),(0,a.kt)("ol",i({},{start:3}),(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,a.kt)("em",{parentName:"li"},"Veeam")," Pack on the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Plugin Packs > Manager")," page")))),(0,a.kt)("h2",i({},{id:"host-configuration"}),"Host configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Log into Centreon and add a new Host through ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,a.kt)("li",{parentName:"ul"},"Apply the ",(0,a.kt)("em",{parentName:"li"},"App-Veeam-NSClient-05-Restapi-custom")," template and configure all the mandatory Macros:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Mandatory"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Name"),(0,a.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"NSCPRESTAPIPORT"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"NSClient++ RestAPI port (Default: '8443')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"NSCPRESTAPIPROTO"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"NSClient++ RestAPI protocol to use (Default: 'https')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"})),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"NSCPRESTAPILEGACYPASSWORD"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Password to authenticate against the API if relevant")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"left"})),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"NSCPRESTAPIEXTRAOPTIONS"),(0,a.kt)("td",i({parentName:"tr"},{align:"left"}),"Any extra option you may want to add to the command (eg. a --verbose flag)")))))}f.isMDXComponent=!0},7626:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function o({children:e,hidden:t,className:n}){return a.createElement("div",i({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},67709:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(67294),r=n(86010),l=n(90980),i=n(35715),o=n(8854),s=n(8241);const p="tabList__CuJ",c="tabItem_LNqP";function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}function m(e){var t;const{lazy:n,block:l,defaultValue:m,values:d,groupId:f,className:v}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=null!=d?d:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),h=(0,i.l)(k,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var b;const N=null===m?m:null!==(b=null!=m?m:null===(t=g.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==b?b:g[0].props.value;if(null!==N&&!k.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:P}=(0,o.U)(),[O,w]=(0,a.useState)(N),C=[],{blockElementScrollPositionUntilNextRender:S}=(0,s.o5)();if(null!=f){const e=y[f];null!=e&&e!==O&&k.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,n=C.indexOf(t),a=k[n].value;a!==O&&(S(t),w(a),null!=f&&P(f,String(a)))},E=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=C.indexOf(e.currentTarget)+1;var n;t=null!==(n=C[a])&&void 0!==n?n:C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;var a;t=null!==(a=C[n])&&void 0!==a?a:C[C.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},v)},k.map((({value:e,label:t,attributes:n})=>a.createElement("li",u({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>C.push(e),onKeyDown:E,onFocus:T,onClick:T},n,{className:(0,r.Z)("tabs__item",c,null==n?void 0:n.className,{"tabs__item--active":O===e})}),null!=t?t:e)))),n?(0,a.cloneElement)(g.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function d(e){const t=(0,l.Z)();return a.createElement(m,u({key:String(t)},e))}}}]);