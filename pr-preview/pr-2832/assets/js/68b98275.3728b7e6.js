"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[91688],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(a),c=r,k=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7102:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>k,frontMatter:()=>p,metadata:()=>u,toc:()=>d});a(67294);var n=a(3905),r=a(67709),l=a(7626);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const p={id:"hardware-storage-netapp-ontap-restapi",title:"NetApp Ontap Rest API"},s=void 0,u={unversionedId:"integrations/plugin-packs/procedures/hardware-storage-netapp-ontap-restapi",id:"integrations/plugin-packs/procedures/hardware-storage-netapp-ontap-restapi",title:"NetApp Ontap Rest API",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/hardware-storage-netapp-ontap-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-storage-netapp-ontap-restapi",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/hardware-storage-netapp-ontap-restapi",draft:!1,tags:[],version:"current",frontMatter:{id:"hardware-storage-netapp-ontap-restapi",title:"NetApp Ontap Rest API"},sidebar:"pp",previous:{title:"NetApp Ontap OnCommand API",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/hardware-storage-netapp-ontap-oncommandapi"},next:{title:"NetApp Ontap SNMP",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/hardware-storage-netapp-ontap-snmp"}},m={},d=[{value:"Overview",id:"overview",level:2},{value:"Plugin-Pack assets",id:"plugin-pack-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Discovery rules",id:"discovery-rules",level:3},{value:"Monitored metrics",id:"monitored-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"NetApp ONTAP configuration",id:"netapp-ontap-configuration",level:3},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How do I test my configuration through the CLI and what do the main parameters stand for ?",id:"how-do-i-test-my-configuration-through-the-cli-and-what-do-the-main-parameters-stand-for-",level:3}],c={toc:d};function k(e){var{components:t}=e,a=i(e,["components"]);return(0,n.kt)("wrapper",o({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",o({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"ONTAP or Data ONTAP or Clustered Data ONTAP (cDOT) or Data ONTAP 7-Mode is NetApp's proprietary operating system used in storage disk arrays such as NetApp FAS and AFF, ONTAP Select and Cloud Volumes ONTAP"),(0,n.kt)("h2",o({},{id:"plugin-pack-assets"}),"Plugin-Pack assets"),(0,n.kt)("h3",o({},{id:"monitored-objects"}),"Monitored objects"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Cluster"),(0,n.kt)("li",{parentName:"ul"},"Hardware"),(0,n.kt)("li",{parentName:"ul"},"Luns"),(0,n.kt)("li",{parentName:"ul"},"Snapmirrors"),(0,n.kt)("li",{parentName:"ul"},"Volumes")),(0,n.kt)("h3",o({},{id:"discovery-rules"}),"Discovery rules"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:"left"}),"Rule name"),(0,n.kt)("th",o({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"HW-Storage-Netapp-Ontap-Restapi-Volume-Name"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"Discover volumes attached to your storage")))),(0,n.kt)("h3",o({},{id:"monitored-metrics"}),"Monitored metrics"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Cluster",label:"Cluster",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",o({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"node_status"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"The node status")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"cluster.io.read.usage.bytespersecond"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"I/O read. Unit: B/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"cluster.io.write.usage.bytespersecond"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"I/O written. Unit: B/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"cluster.io.read.usage.iops"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"I/O read per seconds. Unit: iops")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"cluster.io.write.usage.iops"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"I/O written per seconds. Unit: iops")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"cluster.io.read.latency.milliseconds"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"I/O read latency. Unit: ms")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"cluster.io.write.latency.milliseconds"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"I/O written latency. Unit: ms"))))),(0,n.kt)(l.Z,{value:"Hardware",label:"Hardware",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",o({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"status"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"Check components operational status: bay, fru, shelf. Unit: count"))))),(0,n.kt)(l.Z,{value:"Luns",label:"Luns",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",o({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"status"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"The LUN status"))))),(0,n.kt)(l.Z,{value:"Snapmirrors",label:"Snapmirrors",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",o({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"status"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"The snapmirror status"))))),(0,n.kt)(l.Z,{value:"Volumes",label:"Volumes",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",o({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"status"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"The volume status")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"volume.space.usage.bytes"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"Volume space usage. Unit: B. By instances (",(0,n.kt)("inlineCode",{parentName:"td"},"volume_name"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"volume.space.usage.percentage"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"Volume space percentage usage. Unit: %. By instances (",(0,n.kt)("inlineCode",{parentName:"td"},"volume_name"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"volume.space.free.bytes"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"Volume free space. Unit: B. By instances (",(0,n.kt)("inlineCode",{parentName:"td"},"volume_name"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"volume.io.read.usage.bytespersecond"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"Volume I/O read. Unit: B/s. By instances (",(0,n.kt)("inlineCode",{parentName:"td"},"volume_name"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"volume.io.write.usage.bytespersecond"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"Volume I/O written. Unit: B/s. By instances (",(0,n.kt)("inlineCode",{parentName:"td"},"volume_name"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"volume.io.read.usage.iops"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"Volume I/O read per seconds. Unit: iops. By instances (",(0,n.kt)("inlineCode",{parentName:"td"},"volume_name"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"volume.io.write.usage.iops"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"Volume I/O written per seconds. Unit: iops. By instances (",(0,n.kt)("inlineCode",{parentName:"td"},"volume_name"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"volume.io.read.latency.milliseconds"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"Volume I/O read latency. Unit: ms. By instances (",(0,n.kt)("inlineCode",{parentName:"td"},"volume_name"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"volume.io.write.latency.milliseconds"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"Volume I/O written latency. Unit: ms. By instances (",(0,n.kt)("inlineCode",{parentName:"td"},"volume_name"),")")))))),(0,n.kt)("h2",o({},{id:"prerequisites"}),"Prerequisites"),(0,n.kt)("h3",o({},{id:"netapp-ontap-configuration"}),"NetApp ONTAP configuration"),(0,n.kt)("p",null,"A read-only account (login/password) is required."),(0,n.kt)("h2",o({},{id:"setup"}),"Setup"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Plugin package on every Centreon poller expected to monitor NetApp ONTAP ressources:")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Hardware-Storage-Netapp-Ontap-Restapi\n")),(0,n.kt)("ol",o({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the 'NetApp Ontap Rest API' Centreon Plugin-Pack on the \"Configuration > Plugin Packs > Manager\" page"))),(0,n.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Plugin package on every Centreon poller expected to monitor NetApp ONTAP ressources:")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Hardware-Storage-Netapp-Ontap-Restapi\n")),(0,n.kt)("ol",o({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Plugin-Pack RPM on the Centreon Central server:")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yum install centreon-pack-hardware-storage-netapp-ontap-restapi\n")),(0,n.kt)("ol",o({},{start:3}),(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the 'NetApp Ontap Rest API' Centreon Plugin-Pack on the \"Configuration > Plugin Packs > Manager\" page")))),(0,n.kt)("h2",o({},{id:"configuration"}),"Configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Log into Centreon and add a new Host through "Configuration > Hosts".'),(0,n.kt)("li",{parentName:"ul"},"Apply the template ",(0,n.kt)("em",{parentName:"li"},"HW-Storage-NetApp-Ontap-Restapi-custom")," and configure all the Macros:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:"left"}),"Mandatory"),(0,n.kt)("th",o({parentName:"tr"},{align:"left"}),"Nom"),(0,n.kt)("th",o({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"X"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"APIPORT"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"Port used. Default is 443")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"X"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"APIPROTO"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"Protocol used. Default is https")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"X"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"APIUSERNAME"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"Username to access to the API.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"X"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"APIPASSWORD"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"Password to access to the API.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"})),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"APIEXTRAOPTIONS"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"Any extra option you may want to add to the command")))),(0,n.kt)("h2",o({},{id:"faq"}),"FAQ"),(0,n.kt)("h3",o({},{id:"how-do-i-test-my-configuration-through-the-cli-and-what-do-the-main-parameters-stand-for-"}),"How do I test my configuration through the CLI and what do the main parameters stand for ?"),(0,n.kt)("p",null,"Once the Centreon plugin installed, you can test it logging with the centreon-engine user:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_netapp_ontap_restapi.pl \\    \n    --plugin=storage::netapp::ontap::restapi::plugin \\\n    --hostname=netapp.centreon.com \\\n    --port=443 \\\n    --proto=https \\\n    --api-username='admin' \\\n    --api-password='xxxx' \\\n    --mode=volumes \\\n    --verbose\n")),(0,n.kt)("p",null,"The command above checks the status of the volumes (",(0,n.kt)("inlineCode",{parentName:"p"},"--mode=volumes"),") of the NetApp storage ",(0,n.kt)("em",{parentName:"p"},"netapp.centreon.com")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--hostname=netapp.centreon.com"),")\nusing the API username ",(0,n.kt)("em",{parentName:"p"},"admin")," and the related password (",(0,n.kt)("inlineCode",{parentName:"p"},"--api-username='admin' --api-password='xxxx'"),").\nThe API connection uses the ",(0,n.kt)("em",{parentName:"p"},"HTTPS")," protocol (",(0,n.kt)("inlineCode",{parentName:"p"},"--proto=https"),") on the port ",(0,n.kt)("em",{parentName:"p"},"443")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--port=443"),")."))}k.isMDXComponent=!0},7626:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function i({children:e,hidden:t,className:a}){return n.createElement("div",o({role:"tabpanel",className:(0,r.Z)(l,a)},{hidden:t}),e)}},67709:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(67294),r=a(86010),l=a(90980),o=a(35715),i=a(8854),p=a(8241);const s="tabList__CuJ",u="tabItem_LNqP";function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},m.apply(this,arguments)}function d(e){var t;const{lazy:a,block:l,defaultValue:d,values:c,groupId:k,className:g}=e,N=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=null!=c?c:N.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),h=(0,o.l)(f,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var b;const y=null===d?d:null!==(b=null!=d?d:null===(t=N.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==b?b:N[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:O}=(0,i.U)(),[w,P]=(0,n.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:A}=(0,p.o5)();if(null!=k){const e=v[k];null!=e&&e!==w&&f.some((t=>t.value===e))&&P(e)}const I=e=>{const t=e.currentTarget,a=T.indexOf(t),n=f[a].value;n!==w&&(A(t),P(n),null!=k&&O(k,String(n)))},C=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;var a;t=null!==(a=T[n])&&void 0!==a?a:T[0];break}case"ArrowLeft":{const a=T.indexOf(e.currentTarget)-1;var n;t=null!==(n=T[a])&&void 0!==n?n:T[T.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",s)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},g)},f.map((({value:e,label:t,attributes:a})=>n.createElement("li",m({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>T.push(e),onKeyDown:C,onFocus:I,onClick:I},a,{className:(0,r.Z)("tabs__item",u,null==a?void 0:a.className,{"tabs__item--active":w===e})}),null!=t?t:e)))),a?(0,n.cloneElement)(N.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},N.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function c(e){const t=(0,l.Z)();return n.createElement(d,m({key:String(t)},e))}}}]);