"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[57632],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,v=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(v,o(o({ref:t},u),{},{components:n})):r.createElement(v,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84798:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>v,frontMatter:()=>p,metadata:()=>u,toc:()=>m});n(67294);var r=n(3905),a=n(67709),l=n(7626);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={id:"virtualization-hyperv-2012-nrpe",title:"Hyper-V 2012 NSClient++ NRPE"},s=void 0,u={unversionedId:"integrations/plugin-packs/procedures/virtualization-hyperv-2012-nrpe",id:"integrations/plugin-packs/procedures/virtualization-hyperv-2012-nrpe",title:"Hyper-V 2012 NSClient++ NRPE",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/virtualization-hyperv-2012-nrpe.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/virtualization-hyperv-2012-nrpe",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/virtualization-hyperv-2012-nrpe",draft:!1,tags:[],version:"current",frontMatter:{id:"virtualization-hyperv-2012-nrpe",title:"Hyper-V 2012 NSClient++ NRPE"},sidebar:"pp",previous:{title:"HPE Simplivity Rest API",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/virtualization-hpe-simplivity-restapi"},next:{title:"Hyper-V NSCP Rest API",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/virtualization-hyperv-nscp-restapi"}},c={},m=[{value:"Overview",id:"overview",level:2},{value:"Pack assets",id:"pack-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Collected metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Centreon NSClient++",id:"centreon-nsclient",level:3},{value:"Installation",id:"installation",level:2},{value:"Host configuration",id:"host-configuration",level:2}],d={toc:m};function v(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",o({},{id:"overview"}),"Overview"),(0,r.kt)("p",null,"The Plugin Pack ",(0,r.kt)("em",{parentName:"p"},"Hyper-V")," monitors nodes and virtual machine managers included in the\nMicrosoft Hypervisor and Virtualization solutions. "),(0,r.kt)("h2",o({},{id:"pack-assets"}),"Pack assets"),(0,r.kt)("h3",o({},{id:"monitored-objects"}),"Monitored objects"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Microsoft HyperV Servers from 2k12 to latest versions",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Nodes"),(0,r.kt)("li",{parentName:"ul"},"System Center Virtual Machine Manager")))),(0,r.kt)("h3",o({},{id:"collected-metrics"}),"Collected metrics"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Coming soon")),(0,r.kt)("h2",o({},{id:"prerequisites"}),"Prerequisites"),(0,r.kt)("h3",o({},{id:"centreon-nsclient"}),"Centreon NSClient++"),(0,r.kt)("p",null,"To monitor ",(0,r.kt)("em",{parentName:"p"},"HyperV")," components through NRPE, install the Centreon packaged version\nof the NSClient++ agent. Please follow our ",(0,r.kt)("a",o({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/getting-started/how-to-guides/centreon-nsclient-tutorial"}),"official documentation"),"\nand make sure that the ",(0,r.kt)("strong",{parentName:"p"},"NRPE Server")," configuration is correct."),(0,r.kt)("h2",o({},{id:"installation"}),"Installation"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the Centreon NRPE Client package on every Poller expected to monitor ",(0,r.kt)("em",{parentName:"li"},"Varnish"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yum install centreon-nrpe-plugin\n")),(0,r.kt)("ol",o({},{start:2}),(0,r.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the Centreon Pack ",(0,r.kt)("em",{parentName:"li"},"Varnish"),"\nfrom the ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Plugin Packs > Manager")," page"))),(0,r.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the Centreon Plugin package on every Poller expected to monitor ",(0,r.kt)("em",{parentName:"li"},"Varnish"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yum install centreon-nrpe-plugin\n")),(0,r.kt)("ol",o({},{start:2}),(0,r.kt)("li",{parentName:"ol"},"Install the Centreon Pack RPM on the Centreon Central server:")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yum install centreon-pack-virtualization-hyperv-2012-nrpe\n")),(0,r.kt)("ol",o({},{start:3}),(0,r.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the Centreon Pack ",(0,r.kt)("em",{parentName:"li"},"Varnish"),"\nfrom the ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Plugin Packs > Manager")," page")))),(0,r.kt)("h2",o({},{id:"host-configuration"}),"Host configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Log into Centreon and add a new Host through ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,r.kt)("li",{parentName:"ul"},"Apply the ",(0,r.kt)("em",{parentName:"li"},"Virt-Hyperv-2012-Node-NRPE-custom")," or ",(0,r.kt)("em",{parentName:"li"},"Virt-Hyperv-2012-Scvmm-NRPE-custom"),"\ntemplate according to the componenent you want to monitor and configure all the mandatory Macros:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"left"}),"Mandatory"),(0,r.kt)("th",o({parentName:"tr"},{align:"left"}),"Name"),(0,r.kt)("th",o({parentName:"tr"},{align:"left"}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"X"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"NRPECLIENT"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"NRPE Plugin binary to use (Default: 'check_centreon_nrpe')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"X"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"NRPEPORT"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"NRPE Port of the target server (Default: '5666')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"X"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"NRPETIMEOUT"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"Timeout value (Default: '30')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"X"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"NRPEEXTRAOPTIONS"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"Extraoptions to use with the NRPE binary (default: '-u -m 8192')")))))}v.isMDXComponent=!0},7626:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const l="tabItem_Ymn6";function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i({children:e,hidden:t,className:n}){return r.createElement("div",o({role:"tabpanel",className:(0,a.Z)(l,n)},{hidden:t}),e)}},67709:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(67294),a=n(86010),l=n(90980),o=n(35715),i=n(8854),p=n(8241);const s="tabList__CuJ",u="tabItem_LNqP";function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function m(e){var t;const{lazy:n,block:l,defaultValue:m,values:d,groupId:v,className:f}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=null!=d?d:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),h=(0,o.l)(k,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var y;const b=null===m?m:null!==(y=null!=m?m:null===(t=g.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==y?y:g[0].props.value;if(null!==b&&!k.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:P}=(0,i.U)(),[O,w]=(0,r.useState)(b),E=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=v){const e=N[v];null!=e&&e!==O&&k.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,n=E.indexOf(t),r=k[n].value;r!==O&&(C(t),w(r),null!=v&&P(v,String(r)))},j=e=>{let t=null;switch(e.key){case"ArrowRight":{const r=E.indexOf(e.currentTarget)+1;var n;t=null!==(n=E[r])&&void 0!==n?n:E[0];break}case"ArrowLeft":{const n=E.indexOf(e.currentTarget)-1;var r;t=null!==(r=E[n])&&void 0!==r?r:E[E.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":l},f)},k.map((({value:e,label:t,attributes:n})=>r.createElement("li",c({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>E.push(e),onKeyDown:j,onFocus:T,onClick:T},n,{className:(0,a.Z)("tabs__item",u,null==n?void 0:n.className,{"tabs__item--active":O===e})}),null!=t?t:e)))),n?(0,r.cloneElement)(g.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function d(e){const t=(0,l.Z)();return r.createElement(m,c({key:String(t)},e))}}}]);