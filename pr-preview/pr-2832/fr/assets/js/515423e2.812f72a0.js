"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[9557],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3136:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>m});n(67294);var a=n(3905),r=n(67709),l=n(7626);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"applications-wsus-nsclient",title:"Microsoft WSUS NSClient++"},p=void 0,u={unversionedId:"integrations/plugin-packs/procedures/applications-wsus-nsclient",id:"integrations/plugin-packs/procedures/applications-wsus-nsclient",title:"Microsoft WSUS NSClient++",description:"Hello community! We're looking for a contributor to help us to translate the",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-wsus-nsclient.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-wsus-nsclient",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/applications-wsus-nsclient",draft:!1,tags:[],version:"current",frontMatter:{id:"applications-wsus-nsclient",title:"Microsoft WSUS NSClient++"},sidebar:"pp",previous:{title:"Microsoft SCCM",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/applications-sccm-nsclient"},next:{title:"Graylog",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/applications-graylog-restapi"}},c={},m=[{value:"Overview",id:"overview",level:2},{value:"Pack assets",id:"pack-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Collected metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Centreon NSClient++",id:"centreon-nsclient",level:3},{value:"Powershell",id:"powershell",level:3},{value:"Installation",id:"installation",level:2},{value:"Host configuration",id:"host-configuration",level:2}],d={toc:m};function f(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",o({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Hello community! We're looking for a contributor to help us to translate the\ncontent in french and provide a sample execution command. If it's you, let us\nknow and ping us on ",(0,a.kt)("a",o({parentName:"p"},{href:"https://centreon.slack.com"}),"slack"))),(0,a.kt)("h2",o({},{id:"overview"}),"Overview"),(0,a.kt)("p",null,"This Pack monitors server statistics, computer updates and global synchronisation\nof the Windows Server Update Services Server and the devices under its management. "),(0,a.kt)("h2",o({},{id:"pack-assets"}),"Pack assets"),(0,a.kt)("h3",o({},{id:"monitored-objects"}),"Monitored objects"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Windows Server Update Services Server, including these specific items: ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Computer Status"),(0,a.kt)("li",{parentName:"ul"},"Update Status"),(0,a.kt)("li",{parentName:"ul"},"Synchronisation status "),(0,a.kt)("li",{parentName:"ul"},"Server statistics")))),(0,a.kt)("h3",o({},{id:"collected-metrics"}),"Collected metrics"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Coming soon")),(0,a.kt)("h2",o({},{id:"prerequisites"}),"Prerequisites"),(0,a.kt)("h3",o({},{id:"centreon-nsclient"}),"Centreon NSClient++"),(0,a.kt)("p",null,"The Windows WSUS Plugin is hosted by the ",(0,a.kt)("em",{parentName:"p"},"centreon-nsclient")," agent which must be\ninstalled, configured and running on the Windows server running the WSUS Admin console. "),(0,a.kt)("p",null,"The Centreon Poller can connect to the agent using either the NRPE method or the\nRestAPI method. More information on how to achieve the installation and the configuration\nof the agent can be found ",(0,a.kt)("a",o({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/centreon-nsclient-tutorial"}),"here"),"."),(0,a.kt)("h3",o({},{id:"powershell"}),"Powershell"),(0,a.kt)("p",null,"The Plugin uses Powershell to collect monitoring datas. It's important that the following\nmodule can be loaded: ",(0,a.kt)("inlineCode",{parentName:"p"},"Microsoft.UpdateServices.Administration"),"."),(0,a.kt)("h2",o({},{id:"installation"}),"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Depending on the monitoring method chosen (NRPE or RestAPI), install the relevant Centreon Plugin package on every Centreon\nPoller expected to monitor WSUS through ",(0,a.kt)("em",{parentName:"li"},"centreon-nsclient"),":")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"NRPE")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yum install centreon-nrpe-plugin\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"RestAPI")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Operatingsystems-Windows-Restapi\n")),(0,a.kt)("ol",o({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,a.kt)("em",{parentName:"li"},"Microsoft WSUS")," Centreon Pack from the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Plugin Packs > Manager")," page"))),(0,a.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Depending on the monitoring method chosen (NRPE or RestAPI), install the relevant Centreon Plugin package on every Centreon\nPoller expected to monitor WSUS through ",(0,a.kt)("em",{parentName:"li"},"centreon-nsclient"),":")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"NRPE")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yum install centreon-nrpe-plugin\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"RestAPI")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Operatingsystems-Windows-Restapi\n")),(0,a.kt)("ol",o({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"On the Central Server, install the Centreon Pack RPM:")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yum install centreon-pack-applications-wsus-nsclient\n")),(0,a.kt)("ol",o({},{start:3}),(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,a.kt)("em",{parentName:"li"},"Microsoft WSUS")," Centreon Pack from the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Plugin Packs > Manager")," page")))),(0,a.kt)("h2",o({},{id:"host-configuration"}),"Host configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"On the Centreon Web Interface, go to ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Hosts")," and add a new Host"),(0,a.kt)("li",{parentName:"ul"},"Set the Host IP address and select the relevant Host template according to the monitoring method chosen:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"App-Wsus-NRPE-custom")," for NRPE"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"App-Wsus-NSClient-05-Restapi-custom")," for RestAPI"))),(0,a.kt)("li",{parentName:"ul"},"Depending on the Host template, fill the Macro fields as follows:")),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"App-Wsus-NRPE-custom",label:"App-Wsus-NRPE-custom",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Mandatory"),(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Name"),(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"NRPECLIENT"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"NRPE Plugin binary to use (Default: 'check_centreon_nrpe')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"NRPEPORT"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"NRPE Port of the target server (Default: '5666')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"NRPETIMEOUT"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Timeout value (Default: '30')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"})),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"NRPEEXTRAOPTIONS"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Any extra option you may want to add to every command","_","line (Default: '-u -m 8192')"))))),(0,a.kt)(l.Z,{value:"App-Wsus-NSClient-05-Restapi-custom",label:"App-Wsus-NSClient-05-Restapi-custom",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Mandatory"),(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Name"),(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"NSCPRESTAPIPORT"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"NSClient++ RestAPI port (Default: '8443')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"NSCPRESTAPIPROTO"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"NSClient++ RestAPI protocol to use (Default: 'https')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"})),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"NSCPRESTAPILEGACYPASSWORD"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Password to authenticate against the API if relevant")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"})),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"NSCPRESTAPIEXTRAOPTIONS"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Any extra option you may want to add to the command (eg. a --verbose flag)")))))))}f.isMDXComponent=!0},7626:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i({children:e,hidden:t,className:n}){return a.createElement("div",o({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},67709:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(67294),r=n(86010),l=n(90980),o=n(35715),i=n(8854),s=n(8241);const p="tabList__CuJ",u="tabItem_LNqP";function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function m(e){var t;const{lazy:n,block:l,defaultValue:m,values:d,groupId:f,className:k}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=d?d:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),N=(0,o.l)(h,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var v;const b=null===m?m:null!==(v=null!=m?m:null===(t=g.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==v?v:g[0].props.value;if(null!==b&&!h.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:P}=(0,i.U)(),[w,O]=(0,a.useState)(b),S=[],{blockElementScrollPositionUntilNextRender:C}=(0,s.o5)();if(null!=f){const e=y[f];null!=e&&e!==w&&h.some((t=>t.value===e))&&O(e)}const T=e=>{const t=e.currentTarget,n=S.indexOf(t),a=h[n].value;a!==w&&(C(t),O(a),null!=f&&P(f,String(a)))},E=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=S.indexOf(e.currentTarget)+1;var n;t=null!==(n=S[a])&&void 0!==n?n:S[0];break}case"ArrowLeft":{const n=S.indexOf(e.currentTarget)-1;var a;t=null!==(a=S[n])&&void 0!==a?a:S[S.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},k)},h.map((({value:e,label:t,attributes:n})=>a.createElement("li",c({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>S.push(e),onKeyDown:E,onFocus:T,onClick:T},n,{className:(0,r.Z)("tabs__item",u,null==n?void 0:n.className,{"tabs__item--active":w===e})}),null!=t?t:e)))),n?(0,a.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,l.Z)();return a.createElement(m,c({key:String(t)},e))}}}]);