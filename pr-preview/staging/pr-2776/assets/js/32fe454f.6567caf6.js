"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[75607],{99525:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>k,frontMatter:()=>p,metadata:()=>u,toc:()=>m});n(67294);var r=n(3905),a=n(51715),o=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={id:"applications-protocol-dns",title:"DNS Service"},c=void 0,u={unversionedId:"integrations/plugin-packs/procedures/applications-protocol-dns",id:"integrations/plugin-packs/procedures/applications-protocol-dns",title:"DNS Service",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/applications-protocol-dns.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-protocol-dns",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/applications-protocol-dns",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-protocol-dns.md",tags:[],version:"current",frontMatter:{id:"applications-protocol-dns",title:"DNS Service"},sidebar:"pp",previous:{title:"DHCP Server",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/infrastructure-dhcp"},next:{title:"FTP Server",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/applications-protocol-ftp"}},d={},m=[{value:"Overview",id:"overview",level:2},{value:"Monitoring Connector assets",id:"monitoring-connector-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Monitored metrics",id:"monitored-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How can I test the Plugin in the CLI and what do the main parameters stand for ?",id:"how-can-i-test-the-plugin-in-the-cli-and-what-do-the-main-parameters-stand-for-",level:3},{value:"Why do I get the following message: <code>CRITICAL: DNS query failed: query timed out |</code>",id:"why-do-i-get-the-following-message-critical-dns-query-failed-query-timed-out-",level:3}],g={toc:m},h="wrapper";function k(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)(h,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Domain Name System (DNS) is a naming system for resources connected to the Internet or a private network. A DNS Service provides a way to match domain names to IP addresses."),(0,r.kt)("p",null,"The Centreon Monitoring Connector ",(0,r.kt)("em",{parentName:"p"}," DNS Service ")," checks if a resolution for a domain name (default: google.com) can be obtained."),(0,r.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector assets"),(0,r.kt)("h3",{id:"monitored-objects"},"Monitored objects"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DNS Server")),(0,r.kt)("h3",{id:"monitored-metrics"},"Monitored metrics"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"DNS-Request-1",label:"DNS-Request",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"time"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Elapsed time to complete DNS request"),(0,r.kt)("td",{parentName:"tr",align:"left"},"s")))),(0,r.kt)("p",null,"This mode allow to check that the server executing the probe correctly resolve its own address.")),(0,r.kt)(o.Z,{value:"DNS-Request-2",label:"DNS-Request",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"time"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Elapsed time to complete DNS request"),(0,r.kt)("td",{parentName:"tr",align:"left"},"s")))),(0,r.kt)("p",null,"This mode is meant to be used on a server with the DNS role. "))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the Centreon package on every poller expected to monitor a DNS server:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Protocol-Dns\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the Centreon Monitoring Connector ",(0,r.kt)("em",{parentName:"li"},"DNS Service")," from the ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page"))),(0,r.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the Centreon package on every poller expected to monitor a DNS server:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Protocol-Dns\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Install the Centreon Monitoring Connector RPM on the Centreon Central server:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-protocol-dns\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the Centreon Monitoring Connector ",(0,r.kt)("em",{parentName:"li"},"DNS Service")," from the ",(0,r.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page")))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Log into Centreon and add a new Host through "Configuration > Hosts".'),(0,r.kt)("li",{parentName:"ul"},"Apply the ",(0,r.kt)("em",{parentName:"li"},"App-Protocol-DNS-custom")," template and fill the form.  ")),(0,r.kt)("p",null,"Once the Host created, you can configure the Services following macro on the Services:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"SEARCH"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The domain name for which you want a resolution")))),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("h3",{id:"how-can-i-test-the-plugin-in-the-cli-and-what-do-the-main-parameters-stand-for-"},"How can I test the Plugin in the CLI and what do the main parameters stand for ?"),(0,r.kt)("p",null,"Once the Centreon Plugin installed, you can test it directly in the CLI of the\nCentreon poller by logging with the ",(0,r.kt)("em",{parentName:"p"},"centreon-engine")," user:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_protocol_dns.pl \\\n--plugin=apps::protocols::dns::plugin \\\n--mode=request \\\n--nameservers 10.0.0.1 \\\n--search='google.com' \n")),(0,r.kt)("p",null,"Expected output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Response time 0.011 second(s) (answer: 142.250.74.238) | 'time'=0.011s;;;;\n")),(0,r.kt)("p",null,"The available thresholds as well as all of the options that can be used with\nthis Plugin can be displayed by adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the\ncommand:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_protocol_dns.pl \\\n--plugin=apps::protocols::dns::plugin \\\n--mode=request \\\n--search='google.com' \\\n--help\n")),(0,r.kt)("p",null,"You can display all of the modes that come with the Plugin with the command\nbelow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_protocol_dns.pl \\\n--plugin=apps::protocols::dns::plugin \\\n--list-mode\n")),(0,r.kt)("h3",{id:"why-do-i-get-the-following-message-critical-dns-query-failed-query-timed-out-"},"Why do I get the following message: ",(0,r.kt)("inlineCode",{parentName:"h3"},"CRITICAL: DNS query failed: query timed out |")),(0,r.kt)("p",null,"This message indicates that the number of seconds to wait for the DNS request to complete has elapsed.\nIt means that there is probably no DNS server providing DNS service on the specified server.\nThe command ",(0,r.kt)("inlineCode",{parentName:"p"},"time")," can be used to determine how long the DNS request takes to execute."))}k.isMDXComponent=!0}}]);