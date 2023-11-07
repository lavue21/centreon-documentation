"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[6927],{72649:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>p,metadata:()=>m,toc:()=>d});n(67294);var o=n(3905),a=n(51715),r=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={id:"applications-protocol-whois",title:"Protocol WHOIS"},c=void 0,m={unversionedId:"integrations/plugin-packs/procedures/applications-protocol-whois",id:"integrations/plugin-packs/procedures/applications-protocol-whois",title:"Protocol WHOIS",description:"Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/applications-protocol-whois.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-protocol-whois",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/applications-protocol-whois",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-protocol-whois.md",tags:[],version:"current",frontMatter:{id:"applications-protocol-whois",title:"Protocol WHOIS"},sidebar:"pp",previous:{title:"Protocol UDP",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/applications-protocol-udp"},next:{title:"Radius Service",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/applications-protocol-radius"}},u={},d=[{value:"Pack Assets",id:"pack-assets",level:2},{value:"Templates",id:"templates",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"How to check in the CLI that the configuration is OK and what are the main options for?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}],g={toc:d},k="wrapper";function h(e){var{components:t}=e,n=s(e,["components"]);return(0,o.kt)(k,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){i(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,o.kt)("h3",{id:"templates"},"Templates"),(0,o.kt)("p",null,"The Centreon Pack WHOIS brings a host template:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"App-Protocol-Whois-custom")),(0,o.kt)("p",null,"It brings the following service template:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Discovery"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Domain"),(0,o.kt)("td",{parentName:"tr",align:"left"},"App-Protocol-Whois-Domain"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("h3",{id:"collected-metrics--status"},"Collected metrics & status"),(0,o.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"Domain",label:"Domain",mdxType:"TabItem"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"domain status"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Domain status: checkError, notRegistered,..."),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"domain_name"),"#whois.response.time.milliseconds"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Time to retrieve whois domain information"),(0,o.kt)("td",{parentName:"tr",align:"left"},"ms")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("em",{parentName:"td"},"domain_name"),"#domain.expires.seconds"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Registration expiration time"),(0,o.kt)("td",{parentName:"tr",align:"left"},"s")))))),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To monitor your domains, the system command ",(0,o.kt)("inlineCode",{parentName:"p"},"whois")," must be operational."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor ",(0,o.kt)("strong",{parentName:"li"},"Protocol WHOIS")," resources:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Protocol-Whois\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"On the Centreon web interface, install the ",(0,o.kt)("strong",{parentName:"li"},"Protocol WHOIS")," Centreon Pack on the ",(0,o.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page."))),(0,o.kt)(r.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon poller expected to monitor ",(0,o.kt)("strong",{parentName:"li"},"Protocol WHOIS")," resources:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Protocol-Whois\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Install the ",(0,o.kt)("strong",{parentName:"li"},"Protocol WHOIS")," Centreon Pack RPM on the Centreon Central server:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-protocol-whois\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"On the Centreon web interface, install the ",(0,o.kt)("strong",{parentName:"li"},"Protocol WHOIS")," Centreon Pack on the ",(0,o.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page.")))),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("h3",{id:"host"},"Host"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Log into Centreon and add a new host through ",(0,o.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,o.kt)("li",{parentName:"ul"},"Fill the ",(0,o.kt)("strong",{parentName:"li"},"Name"),", ",(0,o.kt)("strong",{parentName:"li"},"Alias")," & ",(0,o.kt)("strong",{parentName:"li"},"IP Address / DNS")," fields according to your ",(0,o.kt)("strong",{parentName:"li"},"Protocol WHOIS")," domain settings."),(0,o.kt)("li",{parentName:"ul"},"Apply the ",(0,o.kt)("strong",{parentName:"li"},"App-Protocol-Whois-custom")," template to the host."),(0,o.kt)("li",{parentName:"ul"},"Once the template is applied, fill in the corresponding macros. Some macros are mandatory.")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"PROTOCOLWHOISEXTRAOPTIONS"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command (eg. a --verbose flag)")))),(0,o.kt)("h2",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for"},"How to check in the CLI that the configuration is OK and what are the main options for?"),(0,o.kt)("p",null,"Once the plugin is installed, log into your Centreon poller's CLI using the\n",(0,o.kt)("strong",{parentName:"p"},"centreon-engine")," user account (",(0,o.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") and test the plugin by\nrunning the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_protocol_whois.pl \\\n    --plugin=apps::protocols::whois::plugin \\\n    --mode=domain \\\n    --domain='centreon.com' \\\n    --domain='centreon.fr' \\\n    --verbose\n")),(0,o.kt)("p",null,"The expected command output is shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"OK: All domains are ok | 'centreon.com#whois.response.time.milliseconds'=237ms;;;0; 'centreon.com#domain.expires.seconds'=27417843s;;;0; 'centreon.fr#whois.response.time.milliseconds'=125ms;;;0; 'centreon.fr#domain.expires.seconds'=24120041s;;;0;\nchecking domain 'centreon.com'\n    whois reponse time: 237 ms\n    status: clientDeleteProhibited,clientTransferProhibited,clientDeleteProhibited,clientTransferProhibited\n    expires in 10M 1w 5d 23h 13m 33s\nchecking domain 'centreon.fr'\n    whois reponse time: 125 ms\n    status: ACTIVE\n    expires in 9M 5d 5h 39m 14s\n")),(0,o.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,o.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_protocol_whois.pl \\\n    --plugin=apps::protocols::whois::plugin \\\n    --mode=domain \\\n    --help\n")),(0,o.kt)("p",null,"All available modes can be displayed by adding the\n",(0,o.kt)("inlineCode",{parentName:"p"},"--list-mode")," parameter to the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_protocol_whois.pl \\\n    --plugin=apps::protocols::whois::plugin \\\n    --list-mode\n")),(0,o.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"Please find the troubleshooting documentation for plugins in\nthis ",(0,o.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"chapter"),"."))}h.isMDXComponent=!0}}]);