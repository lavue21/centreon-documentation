"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[43094],{64384:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>h,frontMatter:()=>p,metadata:()=>u,toc:()=>d});n(67294);var a=n(3905),r=n(51715),i=n(7626);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"applications-varnish-nrpe",title:"Varnish NRPE"},c=void 0,u={unversionedId:"integrations/plugin-packs/procedures/applications-varnish-nrpe",id:"integrations/plugin-packs/procedures/applications-varnish-nrpe",title:"Varnish NRPE",description:"Hello community! We're looking for a contributor to help us to translate the",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-varnish-nrpe.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-varnish-nrpe",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/applications-varnish-nrpe",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-varnish-nrpe.md",tags:[],version:"current",frontMatter:{id:"applications-varnish-nrpe",title:"Varnish NRPE"},sidebar:"pp",previous:{title:"TrendMicro Iwsva",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/applications-trendmicro-iwsva-snmp"},next:{title:"Veeam Backup Enterprise Manager",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/applications-veeam-vbem-restapi"}},m={},d=[{value:"Overview",id:"overview",level:2},{value:"Pack assets",id:"pack-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Collected metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Command-line utility",id:"command-line-utility",level:3},{value:"NRPE Server",id:"nrpe-server",level:3},{value:"Installation",id:"installation",level:2},{value:"Host configuration",id:"host-configuration",level:2}],k={toc:d},g="wrapper";function h(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)(g,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Hello community! We're looking for a contributor to help us to translate the\ncontent in french and provide a sample execution command. If it's you, let us\nknow by making a PR or pinging us on ",(0,a.kt)("a",{parentName:"p",href:"https://centreon.slack.com"},"slack"))),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The Monitoring Connector ",(0,a.kt)("em",{parentName:"p"},"Varnish")," works with the Centreon NSClient++ monitoring agent on Windows\nand NRPE Server on Linux to check the performance and behavior of a Varnish HTTP Cache Server. "),(0,a.kt)("h2",{id:"pack-assets"},"Pack assets"),(0,a.kt)("h3",{id:"monitored-objects"},"Monitored objects"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Varnish Cache statistics")),(0,a.kt)("h3",{id:"collected-metrics"},"Collected metrics"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Coming soon")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h3",{id:"command-line-utility"},"Command-line utility"),(0,a.kt)("p",null,"The Plugin uses the ",(0,a.kt)("em",{parentName:"p"},"varnishstat")," binary. "),(0,a.kt)("h3",{id:"nrpe-server"},"NRPE Server"),(0,a.kt)("p",null,"On RPM-Based distribution, you can use the centreon-nrpe3-daemon package deploying\na preconfigured version of the NRPE Server. "),(0,a.kt)("p",null,"Most of the Linux distributions provide a NRPE package you can deploy using the system\npackage default manager. When using these, it's important to modify following directives\nin the config files: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"allowed_hosts"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"[...]\n# ALLOWED HOST ADDRESSES\n# This is an optional comma-delimited list of IP address or hostnames\n# that are allowed to talk to the NRPE daemon. Network addresses with a bit mask\n# (i.e. 192.168.1.0/24) are also supported. Hostname wildcards are not currently\n# supported.\nallowed_hosts=X.X.X.X,X.Y.Z.V\n[...]\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dont_blame_nrpe"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"[...]\n# ALLOWED HOST ADDRESSES\n# This is an optional comma-delimited list of IP address or hostnames\n# that are allowed to talk to the NRPE daemon. Network addresses with a bit mask\n# (i.e. 192.168.1.0/24) are also supported. Hostname wildcards are not currently\n# supported.\ndont_blame_nrpe=1\n[...]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Important note: the ",(0,a.kt)("inlineCode",{parentName:"strong"},"NASTY_METACHARS")," parameter should be left as its default value.\nModifying it might open serious security hole and RCE exploitation from an attacker.")," "),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon NRPE Client package on every Poller expected to monitor ",(0,a.kt)("em",{parentName:"li"},"Varnish"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-nrpe3-plugin\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the Centreon Pack ",(0,a.kt)("em",{parentName:"li"},"Varnish"),"\nfrom the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page"))),(0,a.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every Poller expected to monitor ",(0,a.kt)("em",{parentName:"li"},"Varnish"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-nrpe-plugin\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Pack RPM on the Centreon Central server:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-varnish-nrpe\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the Centreon Pack ",(0,a.kt)("em",{parentName:"li"},"Varnish"),"\nfrom the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page")))),(0,a.kt)("h2",{id:"host-configuration"},"Host configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Log into Centreon and add a new Host through "Configuration > Hosts".'),(0,a.kt)("li",{parentName:"ul"},"Apply the ",(0,a.kt)("em",{parentName:"li"},"App-Varnish-NRPE-custom")," template and configure all the mandatory Macros:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NRPECLIENT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NRPE Plugin binary to use (Default: 'check_centreon_nrpe')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NRPEPORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NRPE Port of the target server (Default: '5666')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NRPETIMEOUT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Timeout value (Default: '30')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NRPEEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Extraoptions to use with the NRPE binary (default: '-u -m 8192')")))))}h.isMDXComponent=!0}}]);