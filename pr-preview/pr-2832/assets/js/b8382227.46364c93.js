"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[68065],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(v,l(l({ref:t},u),{},{components:n})):r.createElement(v,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7626:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function i({children:e,hidden:t,className:n}){return r.createElement("div",l({role:"tabpanel",className:(0,a.Z)(o,n)},{hidden:t}),e)}},67709:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(67294),a=n(86010),o=n(90980),l=n(35715),i=n(8854),s=n(8241);const c="tabList__CuJ",u="tabItem_LNqP";function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function d(e){var t;const{lazy:n,block:o,defaultValue:d,values:m,groupId:v,className:f}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=m?m:y.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),b=(0,l.l)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var h;const k=null===d?d:null!==(h=null!=d?d:null===(t=y.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==h?h:y[0].props.value;if(null!==k&&!g.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:O,setTabGroupChoices:w}=(0,i.U)(),[N,T]=(0,r.useState)(k),E=[],{blockElementScrollPositionUntilNextRender:j}=(0,s.o5)();if(null!=v){const e=O[v];null!=e&&e!==N&&g.some((t=>t.value===e))&&T(e)}const x=e=>{const t=e.currentTarget,n=E.indexOf(t),r=g[n].value;r!==N&&(j(t),T(r),null!=v&&w(v,String(r)))},I=e=>{let t=null;switch(e.key){case"ArrowRight":{const r=E.indexOf(e.currentTarget)+1;var n;t=null!==(n=E[r])&&void 0!==n?n:E[0];break}case"ArrowLeft":{const n=E.indexOf(e.currentTarget)-1;var r;t=null!==(r=E[n])&&void 0!==r?r:E[E.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":o},f)},g.map((({value:e,label:t,attributes:n})=>r.createElement("li",p({role:"tab",tabIndex:N===e?0:-1,"aria-selected":N===e,key:e,ref:e=>E.push(e),onKeyDown:I,onFocus:x,onClick:x},n,{className:(0,a.Z)("tabs__item",u,null==n?void 0:n.className,{"tabs__item--active":N===e})}),null!=t?t:e)))),n?(0,r.cloneElement)(y.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,p({key:String(t)},e))}},24541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>v,frontMatter:()=>s,metadata:()=>u,toc:()=>d});n(67294);var r=n(3905),a=n(67709),o=n(7626);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={id:"installation",title:"Installation"},c=void 0,u={unversionedId:"monitoring/discovery/installation",id:"version-23.10/monitoring/discovery/installation",title:"Installation",description:"Installing the Autodiscovery module",source:"@site/versioned_docs/version-23.10/monitoring/discovery/installation.md",sourceDirName:"monitoring/discovery",slug:"/monitoring/discovery/installation",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/monitoring/discovery/installation",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/next/versioned_docs/version-23.10/monitoring/discovery/installation.md",tags:[],version:"23.10",lastUpdatedAt:1700565273,formattedLastUpdatedAt:"Nov 21, 2023",frontMatter:{id:"installation",title:"Installation"},sidebar:"version-23.10/docs",previous:{title:"Introduction",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/monitoring/discovery/introduction"},next:{title:"Discovering hosts automatically",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/monitoring/discovery/hosts-discovery"}},p={},d=[{value:"Installing the Autodiscovery module",id:"installing-the-autodiscovery-module",level:2}],m={toc:d};function v(e){var{components:t}=e,s=i(e,["components"]);return(0,r.kt)("wrapper",l({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",l({},{id:"installing-the-autodiscovery-module"}),"Installing the Autodiscovery module"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"To install packages, execute the following command on the Central server:")),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-shell"}),"dnf install -y centreon-auto-discovery-server\n"))),(0,r.kt)(o.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-shell"}),"dnf install -y centreon-auto-discovery-server\n"))),(0,r.kt)(o.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-shell"}),"apt update && apt install centreon-auto-discovery-server\n")))),(0,r.kt)("ol",l({},{start:2}),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Connect to the Centreon web interface using an account allowed to install\nproducts and go to the ",(0,r.kt)("strong",{parentName:"p"},"Administration > Extensions > Manager")," menu.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure the ",(0,r.kt)("strong",{parentName:"p"},"License Manager")," and ",(0,r.kt)("strong",{parentName:"p"},"Monitoring Connectors Manager")," modules are\nup to date before installing the ",(0,r.kt)("strong",{parentName:"p"},"Auto Discovery")," module.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the Installation icon corresponding to the ",(0,r.kt)("strong",{parentName:"p"},"Auto Discovery")," module.\nThe module is now installed:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:n(51741).Z,width:"564",height:"308"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To get ready-to-use discovery rules, go to the ",(0,r.kt)("strong",{parentName:"p"},"Configuration > Plugin\nPacks")," page and ",(0,r.kt)("a",l({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/docs/monitoring/pluginpacks#pack-installation"}),"install the Monitoring Connectors")," for the\ndiscovery providers you want."))))}v.isMDXComponent=!0},51741:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/install-after-dd0d51f6e89a7f12567170213f4a3c43.png"}}]);