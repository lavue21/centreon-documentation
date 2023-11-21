"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[61090],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},52530:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>s,metadata:()=>c,toc:()=>m});a(67294);var n=a(3905),r=a(67709),l=a(7626);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const s={id:"applications-voip-asterisk-ami",title:"Asterisk VoIP Server"},p=void 0,c={unversionedId:"integrations/plugin-packs/procedures/applications-voip-asterisk-ami",id:"integrations/plugin-packs/procedures/applications-voip-asterisk-ami",title:"Asterisk VoIP Server",description:"Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/applications-voip-asterisk-ami.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-voip-asterisk-ami",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/applications-voip-asterisk-ami",draft:!1,tags:[],version:"current",frontMatter:{id:"applications-voip-asterisk-ami",title:"Asterisk VoIP Server"},sidebar:"pp",previous:{title:"Apache Server",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/applications-webservers-apache-serverstatus"},next:{title:"Asterisk VoIP SNMP",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/applications-voip-asterisk-snmp"}},u={},m=[{value:"Pack Assets",id:"pack-assets",level:2},{value:"Templates",id:"templates",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Asterisk Manager Interface (AMI)",id:"asterisk-manager-interface-ami",level:3},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"How to check in the CLI that the configuration is OK and what are the main options for?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}],d={toc:m};function k(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)("wrapper",i({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",i({},{id:"pack-assets"}),"Pack Assets"),(0,n.kt)("h3",i({},{id:"templates"}),"Templates"),(0,n.kt)("p",null,"The Centreon Plugin Pack Asterisk VoIP Server brings 1 host template:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"App-VoIP-Asterisk-AMI-custom")),(0,n.kt)("p",null,"It brings the following Service Templates:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Service Alias"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Service Template"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Service Description"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Channel-Usage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"App-Voip-Asterisk-AMI-Channel-Usage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Check number of calls and channels"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Dahdi-Status"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"App-Voip-Asterisk-AMI-Dahdi-Status"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Check status of dahdi lines"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Sip-Peers-Usage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"App-Voip-Asterisk-AMI-Sip-Peers-Usage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Check SIP peers usage"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"X")))),(0,n.kt)("h3",i({},{id:"collected-metrics--status"}),"Collected metrics & status"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Channel-Usage",label:"Channel-Usage",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric Name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"calls.active.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"calls.processed.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"channels.active.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"extcalls.active.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"count"))))),(0,n.kt)(l.Z,{value:"Dahdi-Status",label:"Dahdi-Status",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric Name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"status"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"string"))))),(0,n.kt)(l.Z,{value:"Sip-Peers-Usage",label:"Sip-Peers-Usage",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Metric Name"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"sip.peers.monitor.offline.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"sip.peers.monitor.online.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"sip.peers.total.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"sip.peers.unmonitor.offline.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"sip.peers.unmonitor.online.count"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"status"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"string")))))),(0,n.kt)("h2",i({},{id:"prerequisites"}),"Prerequisites"),(0,n.kt)("h3",i({},{id:"asterisk-manager-interface-ami"}),"Asterisk Manager Interface (AMI)"),(0,n.kt)("p",null,'In order to collect the necessary metrics and status, a user account with the\n"read" permission needs to be configured in the ',(0,n.kt)("strong",{parentName:"p"},"/etc/asterisk/manager.conf file"),".\nMore information in the ",(0,n.kt)("a",i({parentName:"p"},{href:"https://wiki.asterisk.org/wiki/pages/viewpage.action?pageId=4817239"}),"official documentation"),"."),(0,n.kt)("h2",i({},{id:"setup"}),"Setup"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Plugin package on every Centreon poller expected to monitor ",(0,n.kt)("strong",{parentName:"li"},"Asterisk")," resources:")),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Applications-Voip-Asterisk-Ami\n")),(0,n.kt)("ol",i({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,n.kt)("strong",{parentName:"li"},"Asterisk VoIP Server")," Centreon Plugin Pack on the ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Plugin Packs")," page."))),(0,n.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Plugin package on every Centreon poller expected to monitor ",(0,n.kt)("strong",{parentName:"li"},"Asterisk")," resources:")),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Applications-Voip-Asterisk-Ami\n")),(0,n.kt)("ol",i({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"Install the ",(0,n.kt)("strong",{parentName:"li"},"Asterisk VoIP Server")," Centreon Plugin Pack RPM on the Centreon Central server:")),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-pack-applications-voip-asterisk-ami\n")),(0,n.kt)("ol",i({},{start:3}),(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,n.kt)("strong",{parentName:"li"},"Asterisk VoIP Server")," Centreon Plugin Pack on the ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Plugin Packs")," page.")))),(0,n.kt)("h2",i({},{id:"configuration"}),"Configuration"),(0,n.kt)("h3",i({},{id:"host"}),"Host"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Log into Centreon and add a new Host through ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,n.kt)("li",{parentName:"ul"},"Fill the ",(0,n.kt)("strong",{parentName:"li"},"Name"),", ",(0,n.kt)("strong",{parentName:"li"},"Alias")," & ",(0,n.kt)("strong",{parentName:"li"},"IP Address/DNS")," fields according to your ",(0,n.kt)("strong",{parentName:"li"},"Asterisk")," server settings."),(0,n.kt)("li",{parentName:"ul"},"Select the ",(0,n.kt)("strong",{parentName:"li"},"App-VoIP-Asterisk-AMI-custom")," template to apply to the Host."),(0,n.kt)("li",{parentName:"ul"},"Once the template is applied, fill in the corresponding macros. Some macros are mandatory.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Mandatory"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Macro"),(0,n.kt)("th",i({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"})),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"ASTERISKAMIEXTRAOPTIONS"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"Any extra option you may want to add to every command","_","line (eg. a --verbose flag)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"X"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"ASTERISKAMIPASSWORD"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"AMI user password")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"})),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"ASTERISKAMIPORT"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"AMI port")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"X"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"ASTERISKAMIUSERNAME"),(0,n.kt)("td",i({parentName:"tr"},{align:"left"}),"AMI user")))),(0,n.kt)("h2",i({},{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for"}),"How to check in the CLI that the configuration is OK and what are the main options for?"),(0,n.kt)("p",null,"Once the plugin is installed, log into your Centreon Poller CLI using the\n",(0,n.kt)("strong",{parentName:"p"},"centreon-engine")," user account (",(0,n.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") and test the Plugin by\nrunning the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins//centreon_asterisk_ami.pl \\\n    --plugin=apps::voip::asterisk::ami::plugin \\\n    --mode=channel-usage \\\n    --ami-hostname='10.0.0.1' \\\n    --ami-port='' \\\n    --ami-username='' \\\n    --ami-password='' \\\n    --warning-channels-active='' \\\n    --critical-channels-active='' \\\n    --warning-calls-active='100' \\\n    --critical-calls-active='200' \\\n    --warning-calls-count='' \\\n    --critical-calls-count='' \\\n    --warning-extcalls-active='' \\\n    --critical-extcalls-active='' \\\n    --verbose \\\n    --use-new-perfdata \n")),(0,n.kt)("p",null,"The expected command output is shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"OK: channels active: 54 calls active: 73 external calls active: 5 calls count: 746 | 'channels.active.count'=54;;;0; 'calls.active.count'=73;0:100;0:200;0; 'extcalls.active.count'=5;;;0; 'calls.processed.count'=746;;;0;\n")),(0,n.kt)("p",null,"This command would trigger a WARNING alarm if the number of active calls is\nreported as over 100 (",(0,n.kt)("inlineCode",{parentName:"p"},"--warning-calls-active='100'"),") and a CRITICAL alarm if\nover 200than 50% (",(0,n.kt)("inlineCode",{parentName:"p"},"--critical-calls-active='200'"),")."),(0,n.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins//centreon_asterisk_ami.pl \\\n    --plugin=apps::voip::asterisk::ami::plugin \\\n    --mode=channel-usage \\\n    --help\n")),(0,n.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,n.kt)("inlineCode",{parentName:"p"},"--list-mode")," parameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins//centreon_asterisk_ami.pl \\\n    --plugin=apps::voip::asterisk::ami::plugin \\\n    --list-mode\n")),(0,n.kt)("h3",i({},{id:"troubleshooting"}),"Troubleshooting"),(0,n.kt)("p",null,"Please find all the troubleshooting documentation for the Centreon Plugins\nin the ",(0,n.kt)("a",i({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"}),"dedicated page")))}k.isMDXComponent=!0},7626:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function o({children:e,hidden:t,className:a}){return n.createElement("div",i({role:"tabpanel",className:(0,r.Z)(l,a)},{hidden:t}),e)}},67709:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(67294),r=a(86010),l=a(90980),i=a(35715),o=a(8854),s=a(8241);const p="tabList__CuJ",c="tabItem_LNqP";function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u.apply(this,arguments)}function m(e){var t;const{lazy:a,block:l,defaultValue:m,values:d,groupId:k,className:g}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=d?d:f.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),v=(0,i.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var N;const b=null===m?m:null!==(N=null!=m?m:null===(t=f.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==N?N:f[0].props.value;if(null!==b&&!h.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:A}=(0,o.U)(),[w,P]=(0,n.useState)(b),I=[],{blockElementScrollPositionUntilNextRender:O}=(0,s.o5)();if(null!=k){const e=y[k];null!=e&&e!==w&&h.some((t=>t.value===e))&&P(e)}const C=e=>{const t=e.currentTarget,a=I.indexOf(t),n=h[a].value;n!==w&&(O(t),P(n),null!=k&&A(k,String(n)))},T=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=I.indexOf(e.currentTarget)+1;var a;t=null!==(a=I[n])&&void 0!==a?a:I[0];break}case"ArrowLeft":{const a=I.indexOf(e.currentTarget)-1;var n;t=null!==(n=I[a])&&void 0!==n?n:I[I.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",p)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},g)},h.map((({value:e,label:t,attributes:a})=>n.createElement("li",u({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>I.push(e),onKeyDown:T,onFocus:C,onClick:C},a,{className:(0,r.Z)("tabs__item",c,null==a?void 0:a.className,{"tabs__item--active":w===e})}),null!=t?t:e)))),a?(0,n.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,l.Z)();return n.createElement(m,u({key:String(t)},e))}}}]);