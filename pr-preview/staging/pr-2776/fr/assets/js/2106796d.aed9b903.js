"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[80234],{68977:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>s,default:()=>N,frontMatter:()=>c,metadata:()=>u,toc:()=>m});n(67294);var a=n(3905),r=n(51715),i=n(7626);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const c={id:"applications-netbackup-nrpe",title:"Symantec Netbackup NSClient++ NRPE"},s=void 0,u={unversionedId:"integrations/plugin-packs/procedures/applications-netbackup-nrpe",id:"integrations/plugin-packs/procedures/applications-netbackup-nrpe",title:"Symantec Netbackup NSClient++ NRPE",description:"Hello community! We're looking for a contributor to help us to translate the",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-netbackup-nrpe.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-netbackup-nrpe",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/applications-netbackup-nrpe",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-netbackup-nrpe.md",tags:[],version:"current",frontMatter:{id:"applications-netbackup-nrpe",title:"Symantec Netbackup NSClient++ NRPE"},sidebar:"pp",previous:{title:"Squid SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/applications-squid-snmp"},next:{title:"Symantec Netbackup SSH",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/applications-netbackup-ssh"}},k={},m=[{value:"Overview",id:"overview",level:2},{value:"Pack assets",id:"pack-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Collected metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"NSClient++",id:"nsclient",level:3},{value:"NetBackup cli",id:"netbackup-cli",level:3},{value:"Netbackup on Windows",id:"netbackup-on-windows",level:3},{value:"Installation",id:"installation",level:2},{value:"Host configuration",id:"host-configuration",level:2}],d={toc:m},g="wrapper";function N(e){var{components:t}=e,n=p(e,["components"]);return(0,a.kt)(g,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Hello community! We're looking for a contributor to help us to translate the\ncontent in french and provide a sample execution command. If it's you, let us\nknow and ping us on ",(0,a.kt)("a",{parentName:"p",href:"https://centreon.slack.com"},"slack"))),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The Monitoring Connector ",(0,a.kt)("em",{parentName:"p"},"Symantec Netbackup")," works with the Centreon NSClient++ monitoring\nagent or a NRPE agent on Linux to check Netbackup backup solutions."),(0,a.kt)("h2",{id:"pack-assets"},"Pack assets"),(0,a.kt)("h3",{id:"monitored-objects"},"Monitored objects"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Veritas Netbackup solutions including: ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Deduplication"),(0,a.kt)("li",{parentName:"ul"},"Drives"),(0,a.kt)("li",{parentName:"ul"},"Jobs "),(0,a.kt)("li",{parentName:"ul"},"Tapes")))),(0,a.kt)("h3",{id:"collected-metrics"},"Collected metrics"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Coming soon")," "),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h3",{id:"nsclient"},"NSClient++"),(0,a.kt)("p",null,"To monitor ",(0,a.kt)("em",{parentName:"p"},"Netbackup")," software with NRPE, install the Centreon packaged version\nof the NSClient++ agent. Please follow our ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/centreon-nsclient-tutorial"},"official documentation"),"\nand make sure that the ",(0,a.kt)("strong",{parentName:"p"},"NRPE Server")," configuration is correct. "),(0,a.kt)("h3",{id:"netbackup-cli"},"NetBackup cli"),(0,a.kt)("p",null,"The NetBackup CLI is available on both Windows and Linux and the Plugin uses it so it\nhas to be installed."),(0,a.kt)("h3",{id:"netbackup-on-windows"},"Netbackup on Windows"),(0,a.kt)("p",null,"When using Netbackup on a Windows system, add these options ",(0,a.kt)("inlineCode",{parentName:"p"},'--statefile-concat-cwd\n--statefile-dir="scripts/centreon/tmp"')," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"EXTRAOPTIONS")," Macro within\n",(0,a.kt)("inlineCode",{parentName:"p"},"App-Netbackup-Job-Status-NRPE-Custom")," Service Template. "),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"|")," character in your Centreon Macro definitions is not possible. "),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon NRPE Client package on every Poller expected to monitor ",(0,a.kt)("em",{parentName:"li"},"Symantec NetBackup"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-nrpe-plugin\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the Centreon Pack ",(0,a.kt)("em",{parentName:"li"},"NetBackup"),"\nfrom the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page"))),(0,a.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every Poller expected to monitor ",(0,a.kt)("em",{parentName:"li"},"Symantec NetBackup"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-nrpe-plugin\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Pack RPM on the Central server:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-netbackup-nrpe\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the Centreon Pack ",(0,a.kt)("em",{parentName:"li"},"Symantec Netbackup"),"\nfrom the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page")))),(0,a.kt)("h2",{id:"host-configuration"},"Host configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Log into Centreon and add a new Host through ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,a.kt)("li",{parentName:"ul"},"Apply the ",(0,a.kt)("em",{parentName:"li"},"App-Netbackup-NRPE-custom")," template and configure all the mandatory Macros:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NRPECLIENT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NRPE Plugin binary to use (Default: 'check_centreon_nrpe')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NRPEPORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NRPE Port of the target server (Default: '5666')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NRPETIMEOUT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Timeout value (Default: '30')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NRPEEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Extraoptions to use with the NRPE binary (default: '-u -m 8192')")))))}N.isMDXComponent=!0}}]);