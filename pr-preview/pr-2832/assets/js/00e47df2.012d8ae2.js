"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[91586],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64082:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>p,toc:()=>m});n(67294);var a=n(3905),r=n(67709),o=n(7626);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const c={id:"network-cisco-callmanager-sxml",title:"Cisco Callmanager SXML"},s=void 0,p={unversionedId:"integrations/plugin-packs/procedures/network-cisco-callmanager-sxml",id:"integrations/plugin-packs/procedures/network-cisco-callmanager-sxml",title:"Cisco Callmanager SXML",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/network-cisco-callmanager-sxml.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/network-cisco-callmanager-sxml",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/network-cisco-callmanager-sxml",draft:!1,tags:[],version:"current",frontMatter:{id:"network-cisco-callmanager-sxml",title:"Cisco Callmanager SXML"},sidebar:"pp",previous:{title:"Cisco Call Manager",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/network-cisco-callmanager-snmp"},next:{title:"Cisco ESA Rest API",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/network-cisco-esa-restapi"}},u={},m=[{value:"Overview",id:"overview",level:2},{value:"Plugin-Pack Assets",id:"plugin-pack-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How to check in the CLI that the configuration is OK and what are the main options for ?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-",level:3},{value:"Why do I get the following error:",id:"why-do-i-get-the-following-error",level:3},{value:"<code>UNKNOWN: 500 Can&#39;t connect to mycucm.com:443</code>",id:"unknown-500-cant-connect-to-mycucmcom443",level:4},{value:"<code>UNKNOWN: 501 Protocol scheme &#39;connect&#39; is not supported |</code>",id:"unknown-501-protocol-scheme-connect-is-not-supported-",level:4}],d={toc:m};function g(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",l({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",l({},{id:"overview"}),"Overview"),(0,a.kt)("p",null,"Using SXML, this Cisco Call Manager Plugin-Pack monitors alerts from the Cisco Unified Communications components."),(0,a.kt)("h2",l({},{id:"plugin-pack-assets"}),"Plugin-Pack Assets"),(0,a.kt)("h3",l({},{id:"monitored-objects"}),"Monitored Objects"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Alerts")),(0,a.kt)("h3",l({},{id:"collected-metrics"}),"Collected Metrics"),(0,a.kt)("p",null,"More information about collected metrics is available in the official Cisco Callmanager documentation :\n",(0,a.kt)("a",l({parentName:"p"},{href:"https://www.cisco.com/c/en/us/support/docs/unified-communications/unified-communications-manager-callmanager/213291-real-time-monitoring-tool-alerts.html#anc8"}),"https://www.cisco.com/c/en/us/support/docs/unified-communications/unified-communications-manager-callmanager/213291-real-time-monitoring-tool-alerts.html#anc8")),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Alerts",label:"Alerts",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"alerts.total.count"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Total number of alerts"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"severity-$alerts.severity.count"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Number of different severities"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"count")))))),(0,a.kt)("h2",l({},{id:"prerequisites"}),"Prerequisites"),(0,a.kt)("h2",l({},{id:"setup"}),"Setup"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller monitoring Cisco Callmanager resources:")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Network-Cisco-Callmanager-Sxml.noarch\n")),(0,a.kt)("ol",l({},{start:2}),(0,a.kt)("li",{parentName:"ol"},'On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the ',(0,a.kt)("em",{parentName:"li"},"Cisco Callmanager SXML")," Plugin-Pack"))),(0,a.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller monitoring Cisco Callmanager resources:")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Network-Cisco-Callmanager-Sxml.noarch\n")),(0,a.kt)("ol",l({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"On the Centreon Central server, install the Centreon Plugin-Pack from the RPM:")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"yum install centreon-pack-network-cisco-callmanager-sxml.noarch\n")),(0,a.kt)("ol",l({},{start:3}),(0,a.kt)("li",{parentName:"ol"},'On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the ',(0,a.kt)("em",{parentName:"li"},"Cisco Callmanager SXML")," Plugin-Pack")))),(0,a.kt)("h2",l({},{id:"configuration"}),"Configuration"),(0,a.kt)("p",null,"The Plugin-Pack is designed to monitor resources based on one Host per Cisco Callmanager SXML environment.\nAdding a Host into Centreon, link it to the Template named ",(0,a.kt)("em",{parentName:"p"},"Net-Cisco-Callmanager-Sxml-custom"),".\nOnce the Template applied, some Macros have to be configured:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Mandatory"),(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Name"),(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"CUCMSXMLAPIPORT"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Port used. Default is 8443")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"CUCMSXMLAPIPROTO"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Protocol used. Default is https")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"})),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"CUCMSXMLAPIEXTRAOPTIONS"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Any extra option you may want to add to the command")))),(0,a.kt)("h2",l({},{id:"faq"}),"FAQ"),(0,a.kt)("h3",l({},{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-"}),"How to check in the CLI that the configuration is OK and what are the main options for ?"),(0,a.kt)("p",null,"Once the Plugin installed, log into your poller using the ",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," user account and test by running the following command\n(Parameters such as ",(0,a.kt)("inlineCode",{parentName:"p"},"api-username")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"api-password")," have to be adjusted):"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_cisco_cucm_sxml.pl \\\n    --plugin=network::cisco::callmanager::sxml::plugin \\\n    --mode=alerts \\\n    --Hostname='mycucm.com' \\\n    --api-username='centreoncucm' \\\n    --api-password='myapipassword' \\\n    --port='8443' \\\n    --proto='https' \\ \n    --http-backend=curl \\\n    --curl-opt=\"CURLOPT_SSL_VERIFYPEER => 0\" \\\n    --verbose \\\n    --display-alerts\nOK: Alerts total: 1, informational: 0, error: 0, debugging: 0, critical: 1, alert: 0, warning: 0, emergency: 0, notice: 0 \n| 'alerts.total.count'=1;;;0; 'alerts.severity.informational.count'=0;;;0;1 'alerts.severity.error.count'=0;;;0;1 'alerts.severity.debugging.count'=0;;;0;1 \n'alerts.severity.critical.count'=1;;;0;1 'alerts.severity.alert.count'=0;;;0;1 'alerts.severity.warning.count'=0;;;0;1 'alerts.severity.emergency.count'=0;;;0;1 \n'alerts.severity.notice.count'=0;;;0;1\nalert [name: CDRFileDeliveryFailureContinues] [severity: critical] [date: Tue Oct  6 05:42:12 2020]:  BillingServerAddress : 172.28.172.105 \nAppID : Cisco CDR Repository Manager ClusterID :  NodeID : server.centreon.com  TimeStamp : Tue Oct 06 05:41:50 EDT 2020. \nThe alarm is generated on Tue Oct 06 05:41:50 EDT 2020. \n")),(0,a.kt)("p",null,"The command above gets the alerts of a Cisco Callmanager using SXML (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=alerts"),").\nIt uses api-username (",(0,a.kt)("inlineCode",{parentName:"p"},"--api-username='centreoncum'"),"), an api-password (",(0,a.kt)("inlineCode",{parentName:"p"},"--api-password='myapipassword'"),")\nand it connects to the Host ",(0,a.kt)("em",{parentName:"p"},"mycucm.com")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--Hostname='mycucm.com'"),")\non the port 443 (",(0,a.kt)("inlineCode",{parentName:"p"},"--port='443'"),") using https (",(0,a.kt)("inlineCode",{parentName:"p"},"--proto='https'"),").\nBy default, the backend method is ",(0,a.kt)("em",{parentName:"p"},"curl")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--http-backend=curl"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins//centreon_cisco_cucm_sxml.pl \n    --plugin=network::cisco::callmanager::sxml::plugin \\\n    --mode=alerts \\\n    --help\n")),(0,a.kt)("h3",l({},{id:"why-do-i-get-the-following-error"}),"Why do I get the following error:"),(0,a.kt)("h4",l({},{id:"unknown-500-cant-connect-to-mycucmcom443"}),(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 500 Can't connect to mycucm.com:443")),(0,a.kt)("p",null,"This error message means that the Centreon Plugin couldn't successfully connect to the Cisco Callmanager SXML.\nCheck that no third party device (such as a firewall) is blocking the request.\nA proxy connection may also be necessary to connect to the API. This can be done by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany:8080'")," option in the command."),(0,a.kt)("h4",l({},{id:"unknown-501-protocol-scheme-connect-is-not-supported-"}),(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 501 Protocol scheme 'connect' is not supported |")),(0,a.kt)("p",null,"When using a proxy to connect to the Cisco Callmanager SXML, this error message means that the Centreon Plugin library does not support\nthe proxy connection protocol."),(0,a.kt)("p",null,"In order to prevent this issue, use the ",(0,a.kt)("em",{parentName:"p"},"lwp")," HTTP backend by adding the following option to the command: ",(0,a.kt)("inlineCode",{parentName:"p"},"--http-backend='lwp'"),"."))}g.isMDXComponent=!0},7626:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function i({children:e,hidden:t,className:n}){return a.createElement("div",l({role:"tabpanel",className:(0,r.Z)(o,n)},{hidden:t}),e)}},67709:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(67294),r=n(86010),o=n(90980),l=n(35715),i=n(8854),c=n(8241);const s="tabList__CuJ",p="tabItem_LNqP";function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}function m(e){var t;const{lazy:n,block:o,defaultValue:m,values:d,groupId:g,className:h}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=null!=d?d:k.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),v=(0,l.l)(f,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var b;const y=null===m?m:null!==(b=null!=m?m:null===(t=k.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==b?b:k[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:C}=(0,i.U)(),[w,O]=(0,a.useState)(y),P=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=g){const e=N[g];null!=e&&e!==w&&f.some((t=>t.value===e))&&O(e)}const x=e=>{const t=e.currentTarget,n=P.indexOf(t),a=f[n].value;a!==w&&(T(t),O(a),null!=g&&C(g,String(a)))},M=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=P.indexOf(e.currentTarget)+1;var n;t=null!==(n=P[a])&&void 0!==n?n:P[0];break}case"ArrowLeft":{const n=P.indexOf(e.currentTarget)-1;var a;t=null!==(a=P[n])&&void 0!==a?a:P[P.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},h)},f.map((({value:e,label:t,attributes:n})=>a.createElement("li",u({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>P.push(e),onKeyDown:M,onFocus:x,onClick:x},n,{className:(0,r.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":w===e})}),null!=t?t:e)))),n?(0,a.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,o.Z)();return a.createElement(m,u({key:String(t)},e))}}}]);