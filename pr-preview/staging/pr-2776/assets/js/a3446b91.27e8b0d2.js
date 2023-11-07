"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[35199],{27658:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>N,frontMatter:()=>p,metadata:()=>m,toc:()=>g});a(67294);var r=a(3905),n=a(51715),l=a(7626);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}const p={id:"hardware-storage-hp-storeonce3-restapi",title:"HP StoreOnce 3.x Rest API"},c=void 0,m={unversionedId:"integrations/plugin-packs/procedures/hardware-storage-hp-storeonce3-restapi",id:"integrations/plugin-packs/procedures/hardware-storage-hp-storeonce3-restapi",title:"HP StoreOnce 3.x Rest API",description:"Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/hardware-storage-hp-storeonce3-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-storage-hp-storeonce3-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/hardware-storage-hp-storeonce3-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/hardware-storage-hp-storeonce3-restapi.md",tags:[],version:"current",frontMatter:{id:"hardware-storage-hp-storeonce3-restapi",title:"HP StoreOnce 3.x Rest API"},sidebar:"pp",previous:{title:"HP P2000",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/hardware-storage-hp-p2000-xmlapi"},next:{title:"HP StoreOnce 4.x Rest API",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/hardware-storage-hp-storeonce4-restapi"}},d={},g=[{value:"Pack Assets",id:"pack-assets",level:2},{value:"Templates",id:"templates",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"How to check in the CLI that the configuration is OK and what are the main options for?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}],u={toc:g},k="wrapper";function N(t){var{components:e}=t,a=s(t,["components"]);return(0,r.kt)(k,i(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),r.forEach((function(e){o(t,e,a[e])}))}return t}({},u,a),{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,r.kt)("h3",{id:"templates"},"Templates"),(0,r.kt)("p",null,"The Centreon Pack HP StoreOnce brings a host template:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"HW-Storage-Hp-Storeonce3-Restapi-custom")),(0,r.kt)("p",null,"It brings the following service templates:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Discovery"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Cluster-Usage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Storage-Hp-Storeonce3-Cluster-Usage-Restapi"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Fcs-Usage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Storage-Hp-Storeonce3-Fcs-Usage-Restapi"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Nas-Usage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Storage-Hp-Storeonce3-Nas-Usage-Restapi"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Serviceset-Usage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Storage-Hp-Storeonce3-Serviceset-Usage-Restapi"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h3",{id:"collected-metrics--status"},"Collected metrics & status"),(0,r.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Cluster-Usage",label:"Cluster-Usage",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cluster status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current overall cluster status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"appliance_name"),"#cluster.space.usage.bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Space used on the cluster"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"appliance_name"),"#cluster.deduplication.ratio.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Deduplication ratio on the cluster"),(0,r.kt)("td",{parentName:"tr",align:"left"}))))),(0,r.kt)(l.Z,{value:"Fcs-Usage",label:"Fcs-Usage",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"fcs status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current overall federated catalyst store status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"fcs_name"),"#fcs.space.usage.bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Space used on the federated catalyst store"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"fcs_name"),"#fcs.deduplication.ratio.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Deduplication ratio on the federated catalyst store"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"fcs_name"),"#fcs.items.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current number of items on the federated catalyst store"),(0,r.kt)("td",{parentName:"tr",align:"left"}))))),(0,r.kt)(l.Z,{value:"Nas-Usage",label:"Nas-Usage",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"nas status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current overall nas status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"share status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current overall share status"),(0,r.kt)("td",{parentName:"tr",align:"left"}))))),(0,r.kt)(l.Z,{value:"Serviceset-Usage",label:"Serviceset-Usage",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"service set status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current overall service set status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"serviceset_alias"),"#serviceset.space.usage.bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Space used on the service set"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"serviceset_alias"),"#serviceset.deduplication.ratio.count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Deduplication ratio on the service set"),(0,r.kt)("td",{parentName:"tr",align:"left"})))))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"The Pack only supports the version 3.x of HP StoreOnce.\nTo monitor your HP StoreOnce, a user with read privileges is required. Please refer to their official documentation: ",(0,r.kt)("a",{parentName:"p",href:"https://support.hpe.com/hpesc/public/docDisplay?docId=c05273975"},"https://support.hpe.com/hpesc/public/docDisplay?docId=c05273975")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor ",(0,r.kt)("strong",{parentName:"li"},"HP StoreOnce 3.x Rest API")," resources:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Storage-Hp-Storeonce3-Restapi\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"On the Centreon web interface, install the ",(0,r.kt)("strong",{parentName:"li"},"HP StoreOnce 3.x Rest API")," Centreon Pack on the ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page."))),(0,r.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor ",(0,r.kt)("strong",{parentName:"li"},"HP StoreOnce 3.x Rest API")," resources:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Storage-Hp-Storeonce3-Restapi\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Install the ",(0,r.kt)("strong",{parentName:"li"},"HP StoreOnce 3.x Rest API")," Centreon Pack RPM on the Centreon Central server:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-hardware-storage-hp-storeonce3-restapi\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"On the Centreon web interface, install the ",(0,r.kt)("strong",{parentName:"li"},"HP StoreOnce 3.x Rest API")," Centreon Pack on the ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page.")))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h3",{id:"host"},"Host"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Log into Centreon and add a new host through ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,r.kt)("li",{parentName:"ul"},"Fill the ",(0,r.kt)("strong",{parentName:"li"},"Name"),", ",(0,r.kt)("strong",{parentName:"li"},"Alias")," & ",(0,r.kt)("strong",{parentName:"li"},"IP Address / DNS")," fields according to your ",(0,r.kt)("strong",{parentName:"li"},"HP StoreOnce 3.x Rest API")," server settings."),(0,r.kt)("li",{parentName:"ul"},"Apply the ",(0,r.kt)("strong",{parentName:"li"},"HW-Storage-Hp-Storeonce3-Restapi-custom")," template to the host."),(0,r.kt)("li",{parentName:"ul"},"Once the template is applied, fill in the corresponding macros. Some macros are mandatory.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"STOREONCEUSERNAME"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Api username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"STOREONCEPASSWORD"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Api password")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"STOREONCEEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command (eg. a --verbose flag)")))),(0,r.kt)("h2",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for"},"How to check in the CLI that the configuration is OK and what are the main options for?"),(0,r.kt)("p",null,"Once the plugin is installed, log into your Centreon poller's CLI using the\n",(0,r.kt)("strong",{parentName:"p"},"centreon-engine")," user account (",(0,r.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") and test the plugin by\nrunning the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$CENTREONPLUGINS$/centreon_hp_storeonce3_restapi.pl \\\n    --plugin=storage::hp::storeonce::3::restapi::plugin \\\n    --mode=cluster-usage \\\n    --hostname='10.0.0.1' \\\n    --port='443' \\\n    --proto='https' \\\n    --username='my-username' \\\n    --password='my-password' \\\n    --verbose\n")),(0,r.kt)("p",null,"The expected command output is shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Cluster 'TABZ37161Q01' status: ok, Usage Total: 62.17 TB Used: 59.78 TB (96.15%) Free: 2.39 TB (3.85%), Dedup Ratio: 14.51 | 'TABZ37161Q01#cluster.space.usage.bytes'=65731753164800B;;;0;68360696004608 'TABZ37161Q01#cluster.deduplication.ratio.count'=14.51;;;0;\n")),(0,r.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$CENTREONPLUGINS$/centreon_hp_storeonce3_restapi.pl \\\n    --plugin=storage::hp::storeonce::3::restapi::plugin \\\n    --mode=cluster-usage \\\n    --help\n")),(0,r.kt)("p",null,"All available modes can be displayed by adding the\n",(0,r.kt)("inlineCode",{parentName:"p"},"--list-mode")," parameter to the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$CENTREONPLUGINS$/centreon_hp_storeonce3_restapi.pl \\\n    --plugin=storage::hp::storeonce::3::restapi::plugin \\\n    --list-mode\n")),(0,r.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"Please find the troubleshooting documentation for the API-based plugins in\nthis ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#http-and-api-checks"},"chapter"),"."))}N.isMDXComponent=!0}}]);