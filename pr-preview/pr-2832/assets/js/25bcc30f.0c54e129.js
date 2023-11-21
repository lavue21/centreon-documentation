"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[37271],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>p,metadata:()=>c,toc:()=>m});n(67294);var a=n(3905),r=n(67709),o=n(7626);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"applications-emc-ppma-restapi",title:"EMC PPMA Rest API"},s=void 0,c={unversionedId:"integrations/plugin-packs/procedures/applications-emc-ppma-restapi",id:"integrations/plugin-packs/procedures/applications-emc-ppma-restapi",title:"EMC PPMA Rest API",description:"Plugin-Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/applications-emc-ppma-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-emc-ppma-restapi",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/applications-emc-ppma-restapi",draft:!1,tags:[],version:"current",frontMatter:{id:"applications-emc-ppma-restapi",title:"EMC PPMA Rest API"},sidebar:"pp",previous:{title:"Dynatrace Rest API",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/applications-monitoring-dynatrace-restapi"},next:{title:"Ericsson ENM API",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/applications-ericsson-enm-api"}},u={},m=[{value:"Plugin-Pack Assets",id:"plugin-pack-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Host configuration",id:"host-configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How to check in the CLI that the configuration is OK and what are the main options for ?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-",level:3},{value:"Why do I get the following error:",id:"why-do-i-get-the-following-error",level:3},{value:"<code>UNKNOWN: 500 Can&#39;t connect to 10.30.2.79:443</code>",id:"unknown-500-cant-connect-to-1030279443",level:4},{value:"<code>UNKNOWN: 501 Protocol scheme &#39;connect&#39; is not supported</code>",id:"unknown-501-protocol-scheme-connect-is-not-supported",level:4}],d={toc:m};function h(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",l({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",l({},{id:"plugin-pack-assets"}),"Plugin-Pack Assets"),(0,a.kt)("h3",l({},{id:"monitored-objects"}),"Monitored Objects"),(0,a.kt)("p",null,"The Plugin-Pack EMC PowerPath Management Appliance collects metrics for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Hosts")),(0,a.kt)("h3",l({},{id:"collected-metrics"}),"Collected Metrics"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Hosts",label:"Hosts",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"host status"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Host powerpath status, possible to set string-based alerts"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),(0,a.kt)("em",{parentName:"td"},"hostname"),"#host.paths.total.count"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Number of total paths for the host"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),(0,a.kt)("em",{parentName:"td"},"hostname"),"#host.paths.dead.count"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Number of dead paths for the host"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),(0,a.kt)("em",{parentName:"td"},"hostname"),"#host.volumes.total.count"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Number of volumes attached"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),(0,a.kt)("em",{parentName:"td"},"hostname"),"#host.volumes.dead.count"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Number of dead volumes attached"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),(0,a.kt)("em",{parentName:"td"},"hostname"),"#host.volumes.degraded.count"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Number of degraded volumes attached"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}))))))),(0,a.kt)("h2",l({},{id:"prerequisites"}),"Prerequisites"),(0,a.kt)("p",null,"To control your EMC PPMA, the Rest API must be configured."),(0,a.kt)("p",null,"E.g: ",(0,a.kt)("a",l({parentName:"p"},{href:"https://dl.dell.com/content/docu98223_PowerPath-Management-Appliance-3.x-Rest-API-Reference.pdf?language=en_US"}),"https://dl.dell.com/content/docu98223_PowerPath-Management-Appliance-3.x-Rest-API-Reference.pdf?language=en_US")),(0,a.kt)("h2",l({},{id:"setup"}),"Setup"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Applications-Emc-Ppma-Restapi\n")),(0,a.kt)("ol",l({},{start:2}),(0,a.kt)("li",{parentName:"ol"},'On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the ',(0,a.kt)("em",{parentName:"li"},"Emc PPMA Rest API")," Plugin-Pack"))),(0,a.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Applications-Emc-Ppma-Restapi\n")),(0,a.kt)("ol",l({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"On the Centreon Central server, install the Centreon Plugin-Pack from the RPM:")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"yum install centreon-pack-applications-emc-ppma-restapi\n")),(0,a.kt)("ol",l({},{start:3}),(0,a.kt)("li",{parentName:"ol"},'On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the ',(0,a.kt)("em",{parentName:"li"},"Emc PPMA Rest API")," Plugin-Pack")))),(0,a.kt)("h2",l({},{id:"host-configuration"}),"Host configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add a new Host and apply the ",(0,a.kt)("em",{parentName:"li"},"App-Emc-Ppma-Restapi-custom")," Host Template")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Once the template applied, some Macros have to be configured:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Mandatory"),(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Name"),(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"PPMAAPIPORT"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Port used (Default: 443)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"PPMAAPIPROTO"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Specify https if needed (Default: 'https')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"PPMAAPIUSERNAME"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"EMC PPMA username")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"PPMAAPIPASSWORD"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"EMC PPMA password")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"})),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"PPMAAPIEXTRAOPTIONS"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Any extra option you may want to add to the command (eg. a --verbose flag)")))),(0,a.kt)("p",null,"By default, Host Template ",(0,a.kt)("em",{parentName:"p"},"App-Emc-Ppma-Restapi")," doesn't have Service Template attached. You may want to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"attach Service Template to Host Template ",(0,a.kt)("em",{parentName:"li"},"App-Emc-Ppma-Restapi-custom")),(0,a.kt)("li",{parentName:"ul"},"use service discovery")),(0,a.kt)("h2",l({},{id:"faq"}),"FAQ"),(0,a.kt)("h3",l({},{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-"}),"How to check in the CLI that the configuration is OK and what are the main options for ?"),(0,a.kt)("p",null,"Once the Plugin installed, log into your Poller using the ",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," user account and test by running the following command\n(Parameters such as ",(0,a.kt)("inlineCode",{parentName:"p"},"api-username")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"api-password"),"have to be adjusted):"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_emc_ppma_restapi.pl \\\n    --plugin=apps::emc::ppma::restapi::plugin \\\n    --mode=hosts \\\n    --hostname='10.30.2.79' \\\n    --port='443' \\\n    --proto='https' \\\n    --api-username='myapiusername' \\\n    --api-password='myapipassword' \\\n    --filter-name='centreontest' \\\n    --warning-paths-dead='0' \\\n    --critical-paths-dead='1' \\\n    --verbose\n")),(0,a.kt)("p",null,"Output example:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),"OK: All hosts are ok | 'centreontest1#host.paths.total.count'=976;;;0; 'centreontest1#host.paths.dead.count'=0;0;0:1;0;976 'centreontest1#host.volumes.total.count'=136;;;0; 'centreontest1#host.volumes.dead.count'=0;;;0;136 'centreontest1#host.volumes.degraded.count'=0;;;0;136 'centreontest2#host.paths.total.count'=976;;;0; 'centreontest2#host.paths.dead.count'=0;0;0:1;0;976 'centreontest2#host.volumes.total.count'=136;;;0; 'centreontest2#host.volumes.dead.count'=0;;;0;136 'centreontest2#host.volumes.degraded.count'=0;;;0;136\nchecking host 'centreontest1'\n    status: powerPathManagedpath total: 976, dead: 0\n    volume total: 136, dead: 0, degraded: 0\nchecking host 'centreontest2'\n    status: powerPathManagedpath total: 976, dead: 0\n    volume total: 136, dead: 0, degraded: 0\n")),(0,a.kt)("p",null,"The command above monitors hosts named ",(0,a.kt)("em",{parentName:"p"},"centreontest")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--filter-name='centreontest'"),") and managed by EMC PPMA  (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=hosts"),")."),(0,a.kt)("p",null,"It uses api-username (",(0,a.kt)("inlineCode",{parentName:"p"},"--api-username='myapiusername'"),"), an api-password (",(0,a.kt)("inlineCode",{parentName:"p"},"--api-password='myapipassword'"),")\nand it connects to the host ",(0,a.kt)("em",{parentName:"p"},"10.30.2.79")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--hostname='10.30.2.79'"),")\non the port 443 (",(0,a.kt)("inlineCode",{parentName:"p"},"--port='443'"),") using https (",(0,a.kt)("inlineCode",{parentName:"p"},"--proto='https'"),")."),(0,a.kt)("p",null,"This command would trigger a WARNING alert if the number of dead paths is over 0 (",(0,a.kt)("inlineCode",{parentName:"p"},"--warning-paths-dead='0'"),") and a CRITICAL alarm over 1 (",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-paths-dead='1'"),")."),(0,a.kt)("p",null,"All the options that can be used with this plugin can be found over the ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_emc_ppma_restapi.pl \\\n    --plugin=apps::emc::ppma::restapi::plugin \\\n    --mode=hosts \\\n    --help\n")),(0,a.kt)("h3",l({},{id:"why-do-i-get-the-following-error"}),"Why do I get the following error:"),(0,a.kt)("h4",l({},{id:"unknown-500-cant-connect-to-1030279443"}),(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 500 Can't connect to 10.30.2.79:443")),(0,a.kt)("p",null,"This error message means that the Centreon Plugin couldn't successfully connect to the EMC PPMA Rest API.\nCheck that no third party device (such as a firewall) is blocking the request.\nA proxy connection may also be necessary to connect to the API. This can be done by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany:8080'")," option in the command."),(0,a.kt)("h4",l({},{id:"unknown-501-protocol-scheme-connect-is-not-supported"}),(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 501 Protocol scheme 'connect' is not supported")),(0,a.kt)("p",null,"When using a proxy to connect to the EMC PPMA Rest API, this error message means that the Centreon Plugin library does not support\nthe proxy connection protocol."),(0,a.kt)("p",null,"In order to prevent this issue, use the ",(0,a.kt)("em",{parentName:"p"},"curl")," HTTP backend by adding the following option to the command: ",(0,a.kt)("inlineCode",{parentName:"p"},"--http-backend='curl'"),"."))}h.isMDXComponent=!0},7626:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function i({children:e,hidden:t,className:n}){return a.createElement("div",l({role:"tabpanel",className:(0,r.Z)(o,n)},{hidden:t}),e)}},67709:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(67294),r=n(86010),o=n(90980),l=n(35715),i=n(8854),p=n(8241);const s="tabList__CuJ",c="tabItem_LNqP";function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}function m(e){var t;const{lazy:n,block:o,defaultValue:m,values:d,groupId:h,className:k}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=null!=d?d:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),N=(0,l.l)(f,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var b;const v=null===m?m:null!==(b=null!=m?m:null===(t=g.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==b?b:g[0].props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:P}=(0,i.U)(),[w,O]=(0,a.useState)(v),A=[],{blockElementScrollPositionUntilNextRender:C}=(0,p.o5)();if(null!=h){const e=y[h];null!=e&&e!==w&&f.some((t=>t.value===e))&&O(e)}const E=e=>{const t=e.currentTarget,n=A.indexOf(t),a=f[n].value;a!==w&&(C(t),O(a),null!=h&&P(h,String(a)))},M=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=A.indexOf(e.currentTarget)+1;var n;t=null!==(n=A[a])&&void 0!==n?n:A[0];break}case"ArrowLeft":{const n=A.indexOf(e.currentTarget)-1;var a;t=null!==(a=A[n])&&void 0!==a?a:A[A.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},k)},f.map((({value:e,label:t,attributes:n})=>a.createElement("li",u({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>A.push(e),onKeyDown:M,onFocus:E,onClick:E},n,{className:(0,r.Z)("tabs__item",c,null==n?void 0:n.className,{"tabs__item--active":w===e})}),null!=t?t:e)))),n?(0,a.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,o.Z)();return a.createElement(m,u({key:String(t)},e))}}}]);