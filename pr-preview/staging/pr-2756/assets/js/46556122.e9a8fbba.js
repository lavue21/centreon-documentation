"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[63169],{87145:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>p,metadata:()=>g,toc:()=>m});a(67294);var r=a(3905),n=a(51715),l=a(7626);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const p={id:"hardware-storage-purestorage-flasharray-legacy-restapi",title:"Pure Storage FlashArray Legacy Rest API"},u=void 0,g={unversionedId:"integrations/plugin-packs/procedures/hardware-storage-purestorage-flasharray-legacy-restapi",id:"integrations/plugin-packs/procedures/hardware-storage-purestorage-flasharray-legacy-restapi",title:"Pure Storage FlashArray Legacy Rest API",description:"Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/hardware-storage-purestorage-flasharray-legacy-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-storage-purestorage-flasharray-legacy-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/hardware-storage-purestorage-flasharray-legacy-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/hardware-storage-purestorage-flasharray-legacy-restapi.md",tags:[],version:"current",frontMatter:{id:"hardware-storage-purestorage-flasharray-legacy-restapi",title:"Pure Storage FlashArray Legacy Rest API"},sidebar:"pp",previous:{title:"Panzura",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/hardware-storage-panzura-snmp"},next:{title:"Pure Storage FlashArray Rest API v2",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/hardware-storage-purestorage-flasharray-v2-restapi"}},c={},m=[{value:"Pack Assets",id:"pack-assets",level:2},{value:"Templates",id:"templates",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Monitoring Pack",id:"monitoring-pack",level:3},{value:"Plugin",id:"plugin",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"How to check in the CLI that the configuration is OK and what are the main options for?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}],d={toc:m},k="wrapper";function h(e){var{components:t}=e,a=i(e,["components"]);return(0,r.kt)(k,s(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){o(e,t,a[t])}))}return e}({},d,a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,r.kt)("h3",{id:"templates"},"Templates"),(0,r.kt)("p",null,"The Centreon Pack ",(0,r.kt)("strong",{parentName:"p"},"Pure Storage FlashArray Legacy Rest API")," brings a host template:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"HW-Storage-Purestorage-Flasharray-Legacy-Restapi-custom")),(0,r.kt)("p",null,"It brings the following service templates:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Service Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Alarms"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Storage-Purestorage-Flasharray-Legacy-Alarms-Restapi"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Check alarms"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Hardware"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Storage-Purestorage-Flasharray-Legacy-Hardware-Restapi"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Check hardware state"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Volume-Usage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Storage-Purestorage-Flasharray-Legacy-Volume-Usage-Restapi"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Check volumes usage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")))),(0,r.kt)("h3",{id:"collected-metrics--status"},"Collected metrics & status"),(0,r.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Alarms",label:"Alarms",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"alerts.detected.count"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"alert status"),(0,r.kt)("td",{parentName:"tr",align:"left"}))))),(0,r.kt)(l.Z,{value:"Hardware",label:"Hardware",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"entity status"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"entity_name"),"#hardware.entity.temperature.celsius"),(0,r.kt)("td",{parentName:"tr",align:"left"}))))),(0,r.kt)(l.Z,{value:"Volume-Usage",label:"Volume-Usage",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"volume_name"),"#volume.space.usage.bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"volume_name"),"#volume.data.reduction.count"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"volume_name"),"#volume.total.reduction.count"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"volume_name"),"#volume.snapshots.usage.bytes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"B")))))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"The Pack uses the old legacy API. You should try to use the Pack ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/hardware-storage-purestorage-flasharray-v2-restapi"},"Pure Storage FlashArray Rest API v2"),"."),(0,r.kt)("p",null,'A service account has to be created on the device. This account must have at least a "read only" access to the storage array.'),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("h3",{id:"monitoring-pack"},"Monitoring Pack"),(0,r.kt)("p",null,"If the platform uses an ",(0,r.kt)("em",{parentName:"p"},"online")," license, you can skip the package installation\ninstruction below as it is not required to have the pack displayed within the\n",(0,r.kt)("strong",{parentName:"p"},"Configuration > Monitoring Connectors Manager")," menu.\nIf the platform uses an ",(0,r.kt)("em",{parentName:"p"},"offline")," license, install the package on the ",(0,r.kt)("strong",{parentName:"p"},"central server"),"\nwith the command corresponding to the operating system's package manager:"),(0,r.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-pack-hardware-storage-purestorage-flasharray-legacy-restapi\n"))),(0,r.kt)(l.Z,{value:"CentOS 7",label:"CentOS 7",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-hardware-storage-purestorage-flasharray-legacy-restapi\n"))),(0,r.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt install centreon-pack-hardware-storage-purestorage-flasharray-legacy-restapi\n")))),(0,r.kt)("p",null,"Whatever the license type (",(0,r.kt)("em",{parentName:"p"},"online")," or ",(0,r.kt)("em",{parentName:"p"},"offline"),"), install the ",(0,r.kt)("strong",{parentName:"p"},"Pure Storage FlashArray Legacy Rest API")," Pack through\nthe ",(0,r.kt)("strong",{parentName:"p"},"Configuration > Monitoring Connectors Manager")," menu."),(0,r.kt)("h3",{id:"plugin"},"Plugin"),(0,r.kt)("p",null,"Since Centreon 22.04, you can benefit from the 'Automatic plugin installation' feature.\nWhen this feature is enabled, you can skip the installation part below."),(0,r.kt)("p",null,"You still have to manually install the plugin on the poller(s) when:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Automatic plugin installation is turned off"),(0,r.kt)("li",{parentName:"ul"},"You want to run a discovery job from a poller that doesn't monitor any resource of this kind yet")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"More information in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/monitoring/pluginpacks/#installing-the-plugin"},"Installing the plugin")," section.")),(0,r.kt)("p",null,"Use the commands below according to your operating system's package manager:"),(0,r.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-plugin-Hardware-Storage-Purestorage-Flasharray-Legacy-Restapi\n"))),(0,r.kt)(l.Z,{value:"CentOS 7",label:"CentOS 7",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Storage-Purestorage-Flasharray-Legacy-Restapi\n"))),(0,r.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt install centreon-plugin-hardware-storage-purestorage-flasharray-legacy-restapi\n")))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h3",{id:"host"},"Host"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Log into Centreon and add a new host through ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,r.kt)("li",{parentName:"ul"},"Fill the ",(0,r.kt)("strong",{parentName:"li"},"Name"),", ",(0,r.kt)("strong",{parentName:"li"},"Alias")," & ",(0,r.kt)("strong",{parentName:"li"},"IP Address/DNS")," fields according to your ",(0,r.kt)("strong",{parentName:"li"},"Pure Storage FlashArray")," server settings."),(0,r.kt)("li",{parentName:"ul"},"Apply the ",(0,r.kt)("strong",{parentName:"li"},"HW-Storage-Purestorage-Flasharray-Legacy-Restapi-custom")," template to the host."),(0,r.kt)("li",{parentName:"ul"},"Once the template is applied, fill in the corresponding macros. Some macros are mandatory.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"APIUSERNAME"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"APIPASSWORD"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"APIURLPATH"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(Default: '/api/1.11')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command line (eg. a --verbose flag)")))),(0,r.kt)("h2",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for"},"How to check in the CLI that the configuration is OK and what are the main options for?"),(0,r.kt)("p",null,"Once the plugin is installed, log into your Centreon poller's CLI using the\n",(0,r.kt)("strong",{parentName:"p"},"centreon-engine")," user account (",(0,r.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") and test the plugin by\nrunning the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_purestorage_flasharray_legacy_restapi.pl \\\n    --plugin=storage::purestorage::flasharray::legacy::restapi::plugin \\\n    --mode=volume-usage \\\n    --hostname=10.0.0.1 \\\n    --api-path='/api/1.11' \\\n    --username='myuser' \\\n    --password='mypass' \\\n    --verbose\n")),(0,r.kt)("p",null,"The expected command output is shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"OK: All volumes are ok | 'PURE-M50R2-ADM24-CLU04-Oracle-prod1#volume.space.usage.bytes'=327296252612B;;;0;3298534883328 'PURE-M50R2-ADM24-CLU04-Oracle-prod1#volume.data.reduction.count'=5.436;;;0; 'PURE-M50R2-ADM24-CLU04-Oracle-prod1#volume.total.reduction.count'=8.870;;;0; 'PURE-M50R2-ADM24-CLU04-Oracle-prod1#volume.snapshots.usage.bytes'=1454226866B;;;0; 'PURE-M50R2-ADM24-CLU04-Oracle-prod2#volume.space.usage.bytes'=327296252612B;;;0;4298534883328 'PURE-M50R2-ADM24-CLU04-Oracle-prod2#volume.data.reduction.count'=4.436;;;0; 'PURE-M50R2-ADM24-CLU04-Oracle-prod2#volume.total.reduction.count'=7.870;;;0; 'PURE-M50R2-ADM24-CLU04-Oracle-prod2#volume.snapshots.usage.bytes'=1854226866B;;;0;\nVolume 'PURE-M50R2-ADM24-CLU04-Oracle-prod1' usage total: 3.00 TB used: 304.82 GB (9.92%) free: 2.70 TB (90.08%), data reduction: 5.436, total reduction: 8.870, snapshots: 1.35 GB\nVolume 'PURE-M50R2-ADM24-CLU04-Oracle-prod2' usage total: 3.91 TB used: 304.82 GB (7.61%) free: 3.61 TB (92.39%), data reduction: 4.436, total reduction: 7.870, snapshots: 1.73 GB\n")),(0,r.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_purestorage_flasharray_legacy_restapi.pl \\\n    --plugin=storage::purestorage::flasharray::legacy::restapi::plugin \\\n    --mode=volume-usage \\\n    --help\n")),(0,r.kt)("p",null,"All available modes can be displayed by adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"--list-mode")," parameter to\nthe command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_purestorage_flasharray_legacy_restapi.pl \\\n    --plugin=storage::purestorage::flasharray::legacy::restapi::plugin \\\n    --list-mode\n")),(0,r.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"Please find the troubleshooting documentation for the API-based plugins in\nthis ",(0,r.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#http-and-api-checks"},"chapter"),"."))}h.isMDXComponent=!0}}]);