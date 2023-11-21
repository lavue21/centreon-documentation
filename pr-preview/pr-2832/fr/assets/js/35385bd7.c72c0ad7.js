"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[40751],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},78661:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>k,frontMatter:()=>c,metadata:()=>p,toc:()=>u});n(67294);var a=n(3905),r=n(67709),o=n(7626);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const c={id:"applications-cisco-dnac-restapi",title:"Cisco DNA Center Rest API"},s=void 0,p={unversionedId:"integrations/plugin-packs/procedures/applications-cisco-dnac-restapi",id:"integrations/plugin-packs/procedures/applications-cisco-dnac-restapi",title:"Cisco DNA Center Rest API",description:"Plugin-Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/applications-cisco-dnac-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-cisco-dnac-restapi",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/applications-cisco-dnac-restapi",draft:!1,tags:[],version:"current",frontMatter:{id:"applications-cisco-dnac-restapi",title:"Cisco DNA Center Rest API"},sidebar:"pp",previous:{title:"Cisco CMS",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/applications-cisco-cms-restapi"},next:{title:"Cisco ISE",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/applications-cisco-ise-restapi"}},d={},u=[{value:"Plugin-Pack Assets",id:"plugin-pack-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Host configuration",id:"host-configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How to check in the CLI that the configuration is OK and what are the main options for ?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-",level:3},{value:"Why do I get the following error:",id:"why-do-i-get-the-following-error",level:3},{value:"<code>UNKNOWN: 500 Can&#39;t connect to 10.30.2.79:443</code>",id:"unknown-500-cant-connect-to-1030279443",level:4},{value:"<code>UNKNOWN: 501 Protocol scheme &#39;connect&#39; is not supported</code>",id:"unknown-501-protocol-scheme-connect-is-not-supported",level:4}],m={toc:u};function k(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",l({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",l({},{id:"plugin-pack-assets"}),"Plugin-Pack Assets"),(0,a.kt)("h3",l({},{id:"monitored-objects"}),"Monitored Objects"),(0,a.kt)("p",null,"The Plugin-Pack includes monitoring of Network devices and Sites."),(0,a.kt)("h3",l({},{id:"collected-metrics"}),"Collected Metrics"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Network-devices",label:"Network-devices",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"network.devices.total.count"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Number of devices"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),(0,a.kt)("em",{parentName:"td"},"categoryname"),"#category.network.devices.health.good.count"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Number of good health devices by category"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),(0,a.kt)("em",{parentName:"td"},"categoryname"),"#category.network.devices.health.good.percentage"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Number of good health devices by category"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),(0,a.kt)("em",{parentName:"td"},"categoryname"),"#category.network.devices.health.fair.count"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Number of fair health devices by category"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),(0,a.kt)("em",{parentName:"td"},"categoryname"),"#category.network.devices.health.fair.percentage"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Number of fair health devices by category"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),(0,a.kt)("em",{parentName:"td"},"categoryname"),"#category.network.devices.health.bad.count"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Number of bad health devices by category"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),(0,a.kt)("em",{parentName:"td"},"categoryname"),"#category.network.devices.health.bad.percentage"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Number of bad health devices by category"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),(0,a.kt)("em",{parentName:"td"},"categoryname"),"#category.network.devices.health.unmonitored.count"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Number of unmonitored health devices by category"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),(0,a.kt)("em",{parentName:"td"},"categoryname"),"#category.network.devices.health.unmonitored.percentage"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Number of unmonitored health devices by category"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"%"))))),(0,a.kt)(o.Z,{value:"Sites",label:"Sites",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),(0,a.kt)("em",{parentName:"td"},"sitename"),"#site.network.devices.healthy.count"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Number of healthy devices"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),(0,a.kt)("em",{parentName:"td"},"sitename"),"#site.network.devices.healthy.percentage"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Number of healthy devices"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"%")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),(0,a.kt)("em",{parentName:"td"},"sitename"),"#site.clients.healthy.count"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Number of healthy clients"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),(0,a.kt)("em",{parentName:"td"},"sitename"),"#site.clients.healthy.percentage"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Number of healthy clients"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"%")))))),(0,a.kt)("h2",l({},{id:"prerequisites"}),"Prerequisites"),(0,a.kt)("p",null,"To control your Cisco DNA Center, the Rest API must be configured."),(0,a.kt)("p",null,"E.g: ",(0,a.kt)("inlineCode",{parentName:"p"},"https://developer.cisco.com/docs/dna-center/#!cisco-dna-center-platform-overview")),(0,a.kt)("h2",l({},{id:"setup"}),"Setup"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Applications-Cisco-Dnac-Restapi\n")),(0,a.kt)("ol",l({},{start:2}),(0,a.kt)("li",{parentName:"ol"},'On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the ',(0,a.kt)("em",{parentName:"li"},"Cisco DNA Center Rest API")," Plugin-Pack"))),(0,a.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Applications-Cisco-Dnac-Restapi\n")),(0,a.kt)("ol",l({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"On the Centreon Central server, install the Centreon Plugin-Pack from the RPM:")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"yum install centreon-pack-applications-cisco-dnac-restapi\n")),(0,a.kt)("ol",l({},{start:3}),(0,a.kt)("li",{parentName:"ol"},'On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the ',(0,a.kt)("em",{parentName:"li"},"Cisco DNA Center Rest API")," Plugin-Pack")))),(0,a.kt)("h2",l({},{id:"host-configuration"}),"Host configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add a new Host and apply the ",(0,a.kt)("em",{parentName:"li"},"App-Cisco-Dnac-Restapi-custom")," Host Template")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Once the template applied, some Macros have to be configured:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Mandatory"),(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Name"),(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"DNACAPIPORT"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Port used (Default: 443)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"DNACAPIPROTO"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Specify https if needed (Default: 'https')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"DNACAPIUSERNAME"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Cisco DNA Center username")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"DNACAPIPASSWORD"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Cisco DNA Center password")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"})),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"DNACAPIEXTRAOPTIONS"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Any extra option you may want to add to the command (eg. a --verbose flag)")))),(0,a.kt)("h2",l({},{id:"faq"}),"FAQ"),(0,a.kt)("h3",l({},{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-"}),"How to check in the CLI that the configuration is OK and what are the main options for ?"),(0,a.kt)("p",null,"Once the Plugin installed, log into your poller using the ",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," user account and test by running the following command\n(Parameters such as ",(0,a.kt)("inlineCode",{parentName:"p"},"api-username")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"api-password"),"have to be adjusted):"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_cisco_dnac_restapi.pl \\\n    --plugin=apps::cisco::dnac::restapi::plugin \\\n    --mode=network-devices \\\n    --hostname='10.30.2.79' \\\n    --port='443' \\\n    --proto='https' \\\n    --api-username='myapiusername' \\\n    --api-password='myapipassword' \\\n    --filter-category-name='Access|Core' \\\n    --critical-category-devices-health-bad-usage-prct='0' \\\n    --verbose\n")),(0,a.kt)("p",null,"Output example:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),"OK: All network categories are ok | 'network.devices.total.count'=14;;;0; 'Access#category.network.devices.health.good.count'=13;;;0;13 'Access#category.network.devices.health.good.percentage'=13.00;;;0;100 'Access#category.network.devices.health.fair.count'=0;;;0;13 'Access#category.network.devices.health.fair.percentage'=0.00;;;0;100 'Access#category.network.devices.health.bad.count'=0;;;0;13 'Access#category.network.devices.health.bad.percentage'=0.00;;;0;100 'Access#category.network.devices.health.unmonitored.count'=0;;;0;13 'Access#category.network.devices.health.unmonitored.percentage'=0.00;;;0;100 'Core#category.network.devices.health.good.count'=1;;;0;1 'Core#category.network.devices.health.good.percentage'=1.00;;;0;100 'Core#category.network.devices.health.fair.count'=0;;;0;1 'Core#category.network.devices.health.fair.percentage'=0.00;;;0;100 'Core#category.network.devices.health.bad.count'=0;;;0;1 'Core#category.network.devices.health.bad.percentage'=0.00;;;0;100 'Core#category.network.devices.health.unmonitored.count'=0;;;0;1 'Core#category.network.devices.health.unmonitored.percentage'=0.00;;;0;100\nchecking network category 'Access'\n    good devices: 100.00% (13 on 13)\n    fair devices: 0.00% (0 on 13)\n    bad devices: 0.00% (0 on 13)\n    unmonitored devices: 0.00% (0 on 13)\nchecking network category 'Core'\n    good devices: 100.00% (1 on 1)\n    fair devices: 0.00% (0 on 1)\n    bad devices: 0.00% (0 on 1)\n    unmonitored devices: 0.00% (0 on 1)\n")),(0,a.kt)("p",null,"The command above monitors Cisco DNA Center network devices usage  (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=network-devices"),") in category ",(0,a.kt)("em",{parentName:"p"},"Access")," and ",(0,a.kt)("em",{parentName:"p"},"Core")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--filter-category-name='Access|Core'"),")."),(0,a.kt)("p",null,"It uses api-username (",(0,a.kt)("inlineCode",{parentName:"p"},"--api-username='myapiusername'"),"), an api-password (",(0,a.kt)("inlineCode",{parentName:"p"},"--api-password='myapipassword'"),")\nand it connects to the host ",(0,a.kt)("em",{parentName:"p"},"10.30.2.79")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--hostname='10.30.2.79'"),")\non the port 7002 (",(0,a.kt)("inlineCode",{parentName:"p"},"--port='443'"),") using https (",(0,a.kt)("inlineCode",{parentName:"p"},"--proto='https'"),")."),(0,a.kt)("p",null,"This command would trigger a CRITICAL alert if the number of bad health devices is over 0% (--critical-category-devices-health-bad-usage-prct='0')."),(0,a.kt)("p",null,"All the options that can be used with this plugin can be found over the ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_cisco_dnac_restapi.pl --plugin=apps::cisco::dnac::restapi::plugin \\\n    --mode=network-devices \\\n    --help\n")),(0,a.kt)("h3",l({},{id:"why-do-i-get-the-following-error"}),"Why do I get the following error:"),(0,a.kt)("h4",l({},{id:"unknown-500-cant-connect-to-1030279443"}),(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 500 Can't connect to 10.30.2.79:443")),(0,a.kt)("p",null,"This error message means that the Centreon Plugin couldn't successfully connect to the Cisco DNA Center API.\nCheck that no third party device (such as a firewall) is blocking the request.\nA proxy connection may also be necessary to connect to the API. This can be done by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany:8080'")," option in the command."),(0,a.kt)("h4",l({},{id:"unknown-501-protocol-scheme-connect-is-not-supported"}),(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 501 Protocol scheme 'connect' is not supported")),(0,a.kt)("p",null,"When using a proxy to connect to the Cisco DNA Center API, this error message means that the Centreon Plugin library does not support\nthe proxy connection protocol."),(0,a.kt)("p",null,"In order to prevent this issue, use the ",(0,a.kt)("em",{parentName:"p"},"curl")," HTTP backend by adding the following option to the command: ",(0,a.kt)("inlineCode",{parentName:"p"},"--http-backend='curl'"),"."))}k.isMDXComponent=!0},7626:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function i({children:e,hidden:t,className:n}){return a.createElement("div",l({role:"tabpanel",className:(0,r.Z)(o,n)},{hidden:t}),e)}},67709:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(67294),r=n(86010),o=n(90980),l=n(35715),i=n(8854),c=n(8241);const s="tabList__CuJ",p="tabItem_LNqP";function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function u(e){var t;const{lazy:n,block:o,defaultValue:u,values:m,groupId:k,className:h}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=null!=m?m:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),N=(0,l.l)(f,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var y;const b=null===u?u:null!==(y=null!=u?u:null===(t=g.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==y?y:g[0].props.value;if(null!==b&&!f.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,i.U)(),[C,O]=(0,a.useState)(b),P=[],{blockElementScrollPositionUntilNextRender:A}=(0,c.o5)();if(null!=k){const e=v[k];null!=e&&e!==C&&f.some((t=>t.value===e))&&O(e)}const T=e=>{const t=e.currentTarget,n=P.indexOf(t),a=f[n].value;a!==C&&(A(t),O(a),null!=k&&w(k,String(a)))},I=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=P.indexOf(e.currentTarget)+1;var n;t=null!==(n=P[a])&&void 0!==n?n:P[0];break}case"ArrowLeft":{const n=P.indexOf(e.currentTarget)-1;var a;t=null!==(a=P[n])&&void 0!==a?a:P[P.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},h)},f.map((({value:e,label:t,attributes:n})=>a.createElement("li",d({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>P.push(e),onKeyDown:I,onFocus:T,onClick:T},n,{className:(0,r.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":C===e})}),null!=t?t:e)))),n?(0,a.cloneElement)(g.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function m(e){const t=(0,o.Z)();return a.createElement(u,d({key:String(t)},e))}}}]);