"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[91718],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80590:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>m});n(67294);var a=n(3905),r=n(67709),o=n(7626);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"virtualization-vmware2-vcenter-5",title:"VMware vCenter v5"},p=void 0,u={unversionedId:"integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-5",id:"integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-5",title:"VMware vCenter v5",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-5.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-5",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-5",draft:!1,tags:[],version:"current",frontMatter:{id:"virtualization-vmware2-vcenter-5",title:"VMware vCenter v5"},sidebar:"pp",previous:{title:"VMware vCenter v4",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-4"},next:{title:"VMware vCenter v6",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-6"}},c={},m=[{value:"Overview",id:"overview",level:2},{value:"Plugin-Pack Assets",id:"plugin-pack-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Centreon VMWare Connector",id:"centreon-vmware-connector",level:3},{value:"Network flows",id:"network-flows",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How do I run my plugin through the CLI and what do the main parameters stand for ?",id:"how-do-i-run-my-plugin-through-the-cli-and-what-do-the-main-parameters-stand-for-",level:3},{value:"Why do I get the following error:",id:"why-do-i-get-the-following-error",level:3},{value:"UNKNOWN: Unknown container name &#39;default&#39; |",id:"unknown-unknown-container-name-default-",level:4},{value:"UNKNOWN: Cannot get response (timeout received)",id:"unknown-cannot-get-response-timeout-received",level:4},{value:"UNKNOWN: Container connection problem |",id:"unknown-container-connection-problem-",level:4}],d={toc:m};function h(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",l({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",l({},{id:"overview"}),"Overview"),(0,a.kt)("p",null,"VMware is an software compagny based in USA. VMware provides cloud computing and virtualization software and services."),(0,a.kt)("p",null,"The Centreon Plugin and Plugin-Packs rely on the Centreon VMWare Connector to request the VCenter SDK."),(0,a.kt)("h2",l({},{id:"plugin-pack-assets"}),"Plugin-Pack Assets"),(0,a.kt)("h3",l({},{id:"monitored-objects"}),"Monitored Objects"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Snapshots"),(0,a.kt)("li",{parentName:"ul"},"VM-tools")),(0,a.kt)("h3",l({},{id:"collected-metrics"}),"Collected Metrics"),(0,a.kt)("p",null,'This pack uses "VMware vCenter" pack to extend monitored indicators (virtualization-vmware2-vcenter-generic).'),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Vm-Snapshot-Global",label:"Vm-Snapshot-Global",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"num_warning"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Number of snapshots older than 3 days (default treshold)"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"num_critical"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Number of snapshots older than 5 days (default threshold)"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Count"))))),(0,a.kt)(o.Z,{value:"Vm-Tools-Global",label:"Vm-Tools-Global",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"not_updated"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Number of VMs with VM-Tools not updated (default threshold)"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"not_running"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Number of VMs with VM-Tools not running (default threshold)"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"not_installed"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Number of VMs with VM-Tools not installed (default threshold)"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Count")))))),(0,a.kt)("h2",l({},{id:"prerequisites"}),"Prerequisites"),(0,a.kt)("h3",l({},{id:"centreon-vmware-connector"}),"Centreon VMWare Connector"),(0,a.kt)("p",null,"For the VMWare monitoring, Centreon use daemon to connect and request the Vcenter."),(0,a.kt)("p",null,"Install this daemon on each needed poller:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),"yum install centreon-plugin-Virtualization-VMWare-daemon\n")),(0,a.kt)("p",null,'To configure the access to your infrastructure, edit the\n"/etc/centreon/centreon',"_",'vmware.pm" configuration file:'),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-perl"}),"%centreon_vmware_config = (\n    vsphere_server => {\n        default => {\n            url => 'https://<ip_hostname>/sdk',\n            username => '<username>',\n            password => '<password>'\n        }\n    }\n);\n\n1;\n")),(0,a.kt)("p",null,"Make sure to replace variables with needed information:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"ip","_","hostname"),": IP address or hostname of the vCenter or ESX (if standalone),"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"username"),': username with at least "read only" access to the vCenter or ESX (you can use domain user),'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"password"),": password of the username.")),(0,a.kt)("p",null,"You can configure multiple vCenter or ESXi connections using this\nstructure:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-perl"}),"%centreon_vmware_config = (\n    vsphere_server => {\n        'my_first_vcenter' => {\n            url => 'https://<ip_hostname>/sdk',\n            username => '<username>',\n            password => '<password>'\n        },\n        'my_other_vcenter' => {\n            url => 'https://<ip_hostname>/sdk',\n            username => '<DOMAIN>\\<username>',\n            password => '<password>'\n        },\n    },\n    port => 5700\n);\n\n1;\n")),(0,a.kt)("p",null,"Each entry is called a ",(0,a.kt)("strong",{parentName:"p"},"container"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'You can also define the "port" attribute to change listening port.')),(0,a.kt)("p",null,"Then start the daemon and make sure it is configured to start at server boot:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"systemctl start centreon_vmware\nsystemctl enable centreon_vmware\n")),(0,a.kt)("p",null,'Make sure that the daemon configuration works fine by looking for errors in\n"/var/log/centreon/centreon',"_",'vmware.log".'),(0,a.kt)("h3",l({},{id:"network-flows"}),"Network flows"),(0,a.kt)("p",null,"The Poller with the Centreon VMware Connector installed need to access in TCP/443 HTTPS to the Vcenter."),(0,a.kt)("p",null,"The Pollers that request the Centreon VMWare Connector host need to access in TCP/5700 to the Centreon VMWare Connector host."),(0,a.kt)("h2",l({},{id:"installation"}),"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the VMWare Connector Centreon Plugin on every poller expected to monitor VMWare infrastructures:")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Virtualization-Vmware2-Connector-Plugin\n")),(0,a.kt)("ol",l({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"Install the 'Vmware vCenter v5' Centreon Plugin-Pack on the \"Configuration > Plugin packs > Manager\" page "))),(0,a.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the VMWare Connector Centreon Plugin on every poller expected to monitor the VMWare Infrastructures:")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Virtualization-Vmware2-Connector-Plugin\n")),(0,a.kt)("ol",l({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin-Pack RPM: ")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"yum install centreon-pack-virtualization-vmware2-vcenter-5.noarch\n")),(0,a.kt)("ol",l({},{start:3}),(0,a.kt)("li",{parentName:"ol"},"Install the 'Vmware  vCenter v5' Centreon Plugin-Pack on the \"Configuration > Plugin packs > Manager\" page ")))),(0,a.kt)("h2",l({},{id:"configuration"}),"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Log into Centreon and add a new Host through "Configuration > Hosts".'),(0,a.kt)("li",{parentName:"ul"},'Apply the relevant Host Template "Virt-VMWare2-VCenter-5-custom", and configure the mandatory Macros:')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Mandatory"),(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Name"),(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"CENTREONVMWARECONTAINER"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Name of your container in the file centreon_vmware.pm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"CENTREONVMWAREHOST"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"The Centreon server that launches the connection")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"CENTREONVMWAREPORT"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"By default: 5700")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"})),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"CENTREONVMWAREEXTRAOPTIONS"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Customize it with your own if needed")))),(0,a.kt)("h2",l({},{id:"faq"}),"FAQ"),(0,a.kt)("h3",l({},{id:"how-do-i-run-my-plugin-through-the-cli-and-what-do-the-main-parameters-stand-for-"}),"How do I run my plugin through the CLI and what do the main parameters stand for ?"),(0,a.kt)("p",null,"Once you've installed the plugin, you can test it logging with centreon-engine user:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins//centreon_vmware_connector_client.pl \\\n    --plugin=apps::vmware::connector::plugin \\\n    --mode=snapshot-vm \\\n    --custommode=connector \\\n    --connector-hostname='localhost' \\\n    --connector-port='5700' \\\n    --container='vcenter01' \\\n    --vm-hostname='.*' \\\n    --filter \\\n    --filter-uuid='' \\\n    --warning='259200' \\\n    --critical='432000' \\\n    --disconnect-status='ok' \\\n    --nopoweredon-skip \\\n    --check-consolidation \\\n    --verbose\n")),(0,a.kt)("p",null,"Expected command output is shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"CRITICAL: Snapshots for VM older than 432000 seconds: [TLS-LIN-001] | 'num_warning'=0;;;0; 'num_critical'=1;;;0;\n'TLS-LIN-001' snapshot create time: 2020-07-20T12:19:16.246902Z [only base os image]\n")),(0,a.kt)("p",null,"This command above checks the virtual machine snapshots (",(0,a.kt)("inlineCode",{parentName:"p"},"--plugin=apps::vmware::connector::plugin --mode=snapshot-vm"),").\nIt connects to the VMWare daemon on ",(0,a.kt)("strong",{parentName:"p"},"localhost")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--connector-hostname='localhost'"),") on the port ",(0,a.kt)("strong",{parentName:"p"},"5700")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--connector-port='5700'"),").\nThen the command requests the container ",(0,a.kt)("strong",{parentName:"p"},"vcenter01")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--container='vcenter01'"),")."),(0,a.kt)("p",null,"It will trigger a WARNING alarm if the age of the snapshot is older than 3 days / 259200s (",(0,a.kt)("inlineCode",{parentName:"p"},"--warning='259200'"),")\nand a CRITICAL alarm if the snapshot is older than 5 days / 432000s (",(0,a.kt)("inlineCode",{parentName:"p"},"--critical='432000'"),")."),(0,a.kt)("p",null,"All available modes with the plugin can be displayed with: "),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/./centreon_vmware_connector_client.pl \\\n    --plugin=apps::vmware::connector::plugin \\\n    --list-mode\n")),(0,a.kt)("p",null,"The available options for a mode can be displayed using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," parameter: "),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/./centreon_vmware_connector_client.pl \\\n    --plugin=apps::vmware::connector::plugin \\\n    --mode=snapshot-vm  \\\n    --help\n")),(0,a.kt)("h3",l({},{id:"why-do-i-get-the-following-error"}),"Why do I get the following error:"),(0,a.kt)("h4",l({},{id:"unknown-unknown-container-name-default-"}),"UNKNOWN: Unknown container name 'default' |"),(0,a.kt)("p",null,"This error message means that the container invoked in the command doesn't exist in your VMWare connector configuration.\nCheck your macro ",(0,a.kt)("strong",{parentName:"p"},"CENTREONVMWARECONTAINER")," on your host or check the file ",(0,a.kt)("em",{parentName:"p"},"/etc/centreon/centreon_vmware.pm")),(0,a.kt)("h4",l({},{id:"unknown-cannot-get-response-timeout-received"}),"UNKNOWN: Cannot get response (timeout received)"),(0,a.kt)("p",null,"This error message means that the Plugin didn't get a response off the VMWare Daemon.\nCheck your connection parameters and the macros ",(0,a.kt)("strong",{parentName:"p"},"CENTREONVMWAREHOST")," and ",(0,a.kt)("strong",{parentName:"p"},"CENTREONVMWAREPORT"),"."),(0,a.kt)("h4",l({},{id:"unknown-container-connection-problem-"}),"UNKNOWN: Container connection problem |"),(0,a.kt)("p",null,"This error message means that you have a issue with the credentials provided for your Container.\nCheck your credentials in ",(0,a.kt)("em",{parentName:"p"},"/etc/centreon/centreon_vmware.pm"),".\nYou can also take a look into the log for more information: ",(0,a.kt)("em",{parentName:"p"},"/var/log/centreon/centreon_vmware.log")))}h.isMDXComponent=!0},7626:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function i({children:e,hidden:t,className:n}){return a.createElement("div",l({role:"tabpanel",className:(0,r.Z)(o,n)},{hidden:t}),e)}},67709:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(67294),r=n(86010),o=n(90980),l=n(35715),i=n(8854),s=n(8241);const p="tabList__CuJ",u="tabItem_LNqP";function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function m(e){var t;const{lazy:n,block:o,defaultValue:m,values:d,groupId:h,className:k}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=d?d:v.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),f=(0,l.l)(g,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var N;const b=null===m?m:null!==(N=null!=m?m:null===(t=v.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==N?N:v[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:y}=(0,i.U)(),[C,O]=(0,a.useState)(b),T=[],{blockElementScrollPositionUntilNextRender:V}=(0,s.o5)();if(null!=h){const e=w[h];null!=e&&e!==C&&g.some((t=>t.value===e))&&O(e)}const M=e=>{const t=e.currentTarget,n=T.indexOf(t),a=g[n].value;a!==C&&(V(t),O(a),null!=h&&y(h,String(a)))},E=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;var n;t=null!==(n=T[a])&&void 0!==n?n:T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;var a;t=null!==(a=T[n])&&void 0!==a?a:T[T.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},k)},g.map((({value:e,label:t,attributes:n})=>a.createElement("li",c({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>T.push(e),onKeyDown:E,onFocus:M,onClick:M},n,{className:(0,r.Z)("tabs__item",u,null==n?void 0:n.className,{"tabs__item--active":C===e})}),null!=t?t:e)))),n?(0,a.cloneElement)(v.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function d(e){const t=(0,o.Z)();return a.createElement(m,c({key:String(t)},e))}}}]);