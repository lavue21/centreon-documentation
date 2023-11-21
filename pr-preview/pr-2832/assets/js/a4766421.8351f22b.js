"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[10338],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27242:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>d});n(67294);var a=n(3905),r=n(67709),l=n(7626);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"hardware-storage-bdt-multistak-snmp",title:"BDT MultiStak SNMP"},u=void 0,p={unversionedId:"integrations/plugin-packs/procedures/hardware-storage-bdt-multistak-snmp",id:"integrations/plugin-packs/procedures/hardware-storage-bdt-multistak-snmp",title:"BDT MultiStak SNMP",description:"Plugin Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/hardware-storage-bdt-multistak-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-storage-bdt-multistak-snmp",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/hardware-storage-bdt-multistak-snmp",draft:!1,tags:[],version:"current",frontMatter:{id:"hardware-storage-bdt-multistak-snmp",title:"BDT MultiStak SNMP"},sidebar:"pp",previous:{title:"Avid Isis",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/hardware-storage-avid-isis-snmp"},next:{title:"Buffalo TeraStation SNMP",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/hardware-storage-buffalo-terastation-snmp"}},c={},d=[{value:"Plugin Pack Assets",id:"plugin-pack-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Host configuration",id:"host-configuration",level:2},{value:"How to test the Plugin and what are the main options for?",id:"how-to-test-the-plugin-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:3},{value:"UNKNOWN: SNMP GET Request : Cant get a single value.",id:"unknown-snmp-get-request--cant-get-a-single-value",level:4}],m={toc:d};function g(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",o({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",o({},{id:"plugin-pack-assets"}),"Plugin Pack Assets"),(0,a.kt)("h3",o({},{id:"monitored-objects"}),"Monitored Objects"),(0,a.kt)("p",null,"The Plugin Pack BDT MutliStak SNMP collects metrics for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Hardware")),(0,a.kt)("h3",o({},{id:"collected-metrics"}),"Collected Metrics"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Hardware",label:"Hardware",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"device status"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Status of the device"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"module status"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Status of the module"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"module board status"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Status of the module board"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"module psu status"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Status of the module power supply"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}))))))),(0,a.kt)("h2",o({},{id:"prerequisites"}),"Prerequisites"),(0,a.kt)("p",null,"To monitor your BDT MultiStak device, the SNMP must be configured."),(0,a.kt)("h2",o({},{id:"setup"}),"Setup"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Hardware-Storage-Bdt-Multistak-Snmp\n")),(0,a.kt)("ol",o({},{start:2}),(0,a.kt)("li",{parentName:"ol"},'On the Centreon Web interface in "Configuration > Plugin \xa8Packs > Manager", install the ',(0,a.kt)("em",{parentName:"li"},"BDT MultiStak SNMP")," Plugin-Pack"))),(0,a.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Hardware-Storage-Bdt-Multistak-Snmp\n")),(0,a.kt)("ol",o({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"On the Centreon Central server, install the Centreon Plugin Pack from the RPM:")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yum install centreon-pack-hardware-storage-bdt-multistak-snmp\n")),(0,a.kt)("ol",o({},{start:3}),(0,a.kt)("li",{parentName:"ol"},'On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the ',(0,a.kt)("em",{parentName:"li"},"BDT MultiStak SNMP")," Plugin-Pack")))),(0,a.kt)("h2",o({},{id:"host-configuration"}),"Host configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add a new Host and fill the ",(0,a.kt)("em",{parentName:"li"},"IP Address/FQDN"),", ",(0,a.kt)("em",{parentName:"li"},"SNMP Version")," and ",(0,a.kt)("em",{parentName:"li"},"SNMP Community")," fields according to the device's configuration"),(0,a.kt)("li",{parentName:"ul"},"Apply the ",(0,a.kt)("em",{parentName:"li"},"HW-Storage-Bdt-Multistak-SNMP-Custom")," Host Template")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Mandatory"),(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Name"),(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"})),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"SNMPEXTRAOPTIONS"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Configure your own SNMPv3 credentials combo")))),(0,a.kt)("h2",o({},{id:"how-to-test-the-plugin-and-what-are-the-main-options-for"}),"How to test the Plugin and what are the main options for?"),(0,a.kt)("p",null,"Once the plugin installed, log into your Centreon Poller CLI using the ",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," user account\nand test the Plugin by running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_bdt_multistak_snmp.pl  \\\n    --plugin=storage::bdt::multistak::snmp::plugin \\\n    --mode=hardware \\\n    --hostname=10.30.2.114 \\\n    --snmp-version='2c' \\\n    --snmp-community='bdtms_ro' \\\n    --verbose\n")),(0,a.kt)("p",null,"Expected command output is shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"OK: All 2 components are ok [1/1 device, 1/1 modules]. | 'hardware.device.count'=1;;;; 'hardware.module.count'=1;;;;\nvendor: BDT, product: MULTISTAK, serial: DE56400414, revision: 1.2.0-A000\nchecking device\ndevice health status is 'ok' [instance: 0]\nchecking modules\nmodule '4' status is 'OK' [board status: N/A] [power supply: OK][instance: 4].\n")),(0,a.kt)("p",null,"The command above monitors BDT MultiStak equipment (",(0,a.kt)("inlineCode",{parentName:"p"},"--plugin=storage::bdt::multistak::snmp::plugin --mode=hardware"),") identified\nby the IP address ",(0,a.kt)("em",{parentName:"p"},"10.30.2.114")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--hostname=10.30.2.114"),"). As the Plugin is using the SNMP protocol to request the device, the related\n",(0,a.kt)("em",{parentName:"p"},"community")," and ",(0,a.kt)("em",{parentName:"p"},"version")," are specified (",(0,a.kt)("inlineCode",{parentName:"p"},"--snmp-version='2c' --snmp-community='bdtms_ro'"),")."),(0,a.kt)("p",null,"All the options as well as all the available thresholds can be displayed by adding the  ",(0,a.kt)("inlineCode",{parentName:"p"},"--help"),"\nparameter to the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_bdt_multistak_snmp.pl  \\\n    --plugin=storage::bdt::multistak::snmp::plugin \\\n    --mode=hardware \\\n    --help\n")),(0,a.kt)("h2",o({},{id:"troubleshooting"}),"Troubleshooting"),(0,a.kt)("h3",o({},{id:"unknown-snmp-get-request--timeout"}),"UNKNOWN: SNMP GET Request : Timeout"),(0,a.kt)("p",null,"If you get this message, you're probably facing one of theses issues:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The SNMP agent of the device isn't started or is misconfigured"),(0,a.kt)("li",{parentName:"ul"},"An external device is blocking the request (firewall, ...)")),(0,a.kt)("h4",o({},{id:"unknown-snmp-get-request--cant-get-a-single-value"}),"UNKNOWN: SNMP GET Request : Cant get a single value."),(0,a.kt)("p",null,"This error message often refers to the following issues: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The agent doesn't support the MIB used by the plugin"),(0,a.kt)("li",{parentName:"ul"},"The targeted SNMP OID cannot be fetched because of insufficient privileges on the device.\nSNMP Agent must be capable of accessing to the enterprise branch: .1.3.6.1.4.1.20884")))}g.isMDXComponent=!0},7626:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i({children:e,hidden:t,className:n}){return a.createElement("div",o({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},67709:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(67294),r=n(86010),l=n(90980),o=n(35715),i=n(8854),s=n(8241);const u="tabList__CuJ",p="tabItem_LNqP";function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function d(e){var t;const{lazy:n,block:l,defaultValue:d,values:m,groupId:g,className:k}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=null!=m?m:h.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),b=(0,o.l)(f,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var v;const N=null===d?d:null!==(v=null!=d?d:null===(t=h.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==v?v:h[0].props.value;if(null!==N&&!f.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,i.U)(),[P,O]=(0,a.useState)(N),T=[],{blockElementScrollPositionUntilNextRender:S}=(0,s.o5)();if(null!=g){const e=y[g];null!=e&&e!==P&&f.some((t=>t.value===e))&&O(e)}const M=e=>{const t=e.currentTarget,n=T.indexOf(t),a=f[n].value;a!==P&&(S(t),O(a),null!=g&&w(g,String(a)))},C=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;var n;t=null!==(n=T[a])&&void 0!==n?n:T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;var a;t=null!==(a=T[n])&&void 0!==a?a:T[T.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},k)},f.map((({value:e,label:t,attributes:n})=>a.createElement("li",c({role:"tab",tabIndex:P===e?0:-1,"aria-selected":P===e,key:e,ref:e=>T.push(e),onKeyDown:C,onFocus:M,onClick:M},n,{className:(0,r.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":P===e})}),null!=t?t:e)))),n?(0,a.cloneElement)(h.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function m(e){const t=(0,l.Z)();return a.createElement(d,c({key:String(t)},e))}}}]);