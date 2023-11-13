"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[58902],{66103:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>c,metadata:()=>m,toc:()=>d});n(67294);var a=n(3905),i=n(51715),o=n(7626);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const c={id:"applications-cisco-ssms-restapi",title:"Cisco SSMS"},p=void 0,m={unversionedId:"integrations/plugin-packs/procedures/applications-cisco-ssms-restapi",id:"integrations/plugin-packs/procedures/applications-cisco-ssms-restapi",title:"Cisco SSMS",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/applications-cisco-ssms-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-cisco-ssms-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/applications-cisco-ssms-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-cisco-ssms-restapi.md",tags:[],version:"current",frontMatter:{id:"applications-cisco-ssms-restapi",title:"Cisco SSMS"},sidebar:"pp",previous:{title:"Cisco ISE",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/applications-cisco-ise-restapi"},next:{title:"Commvault CommServe Rest API",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/applications-commvault-commserve-restapi"}},u={},d=[{value:"Overview",id:"overview",level:2},{value:"Monitoring Connector Assets",id:"monitoring-connector-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How to check in the CLI that the configuration is OK and what are the main options for ?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-",level:3},{value:"Why do I get the following error:",id:"why-do-i-get-the-following-error",level:3},{value:"<code>UNKNOWN: 500 Can&#39;t connect to api.ssms.com:443</code>",id:"unknown-500-cant-connect-to-apissmscom443",level:4},{value:"<code>UNKNOWN: 501 Protocol scheme &#39;connect&#39; is not supported |</code>",id:"unknown-501-protocol-scheme-connect-is-not-supported-",level:4},{value:"How do I remove the <em>count</em> perfdatas if I want to filter on just one application ?",id:"how-do-i-remove-the-count-perfdatas-if-i-want-to-filter-on-just-one-application-",level:3}],g={toc:d},h="wrapper";function k(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)(h,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Cisco Smart Software Manager On-Prem (formerly known as Cisco Smart Software Manager satellite) is a component of Cisco Smart Licensing\nthat works in conjunction with Cisco Smart Software Manager (SSM).\nIt offers near real-time visibility and reporting of the Cisco licensesyou purchase and consume while giving security-sensitive organizations,\na way to access a subset of Cisco SSM functionality without using a direct Internet connection to manage their install base."),(0,a.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector Assets"),(0,a.kt)("h3",{id:"monitored-objects"},"Monitored Objects"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Applications"),(0,a.kt)("li",{parentName:"ul"},"Servers"),(0,a.kt)("li",{parentName:"ul"},"Licences"),(0,a.kt)("li",{parentName:"ul"},"Alerts")),(0,a.kt)("h3",{id:"collected-metrics"},"Collected Metrics"),(0,a.kt)(i.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Alerts",label:"Alerts",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"account.alerts.minor.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of alerts minor.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"account.alerts.major.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of alerts major."))))),(0,a.kt)(o.Z,{value:"Licenses",label:"Licenses",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Status of licenses.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"licenses.usage.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of licenses usage.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"licenses.free.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of licenses free.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"licenses.usage.percentage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Percentage of licenses usage. Unit : %")))))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"A service account is required to query the Cisco SSMS API. It must have sufficient read privileges in the account targeted.\nMore information is available in the official Cisco SSMS API : ",(0,a.kt)("a",{parentName:"p",href:"https://www.cisco.com/c/dam/en_us/buy/smart-accounts/smart-software-manager-satellite-enhanced-edition-6-2-0-user-guide.pdf"},"https://www.cisco.com/c/dam/en_us/buy/smart-accounts/smart-software-manager-satellite-enhanced-edition-6-2-0-user-guide.pdf")),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)(i.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every poller monitoring Cisco SSMS resources:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Cisco-Ssms-Restapi.noarch\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,a.kt)("em",{parentName:"li"},"Cisco SSMS")," Monitoring Connector"))),(0,a.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every poller monitoring Cisco SSMS resources:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Cisco-Ssms-Restapi.noarch\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Central server, install the Centreon Monitoring Connector from the RPM:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-cisco-ssms-restapi.noarch\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,a.kt)("em",{parentName:"li"},"Cisco SSMS")," Monitoring Connector")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"The Monitoring Connector is designed to monitor resources based on one host per account.\nAdding a host into Centreon, link it to the template named ",(0,a.kt)("em",{parentName:"p"},"App-Cisco-Ssms-Restapi-custom"),".\nOnce the template applied, some Macros have to be configured:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"APIPORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Port used. Default is 8443")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"APIPROTO"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Protocol used. Default is https")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"CLIENTID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Client ID to access to the API.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"CLIENTSECRET"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Client Secret to access to the API.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"APIEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-"},"How to check in the CLI that the configuration is OK and what are the main options for ?"),(0,a.kt)("p",null,"Once the Plugin installed, log into your poller using the ",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," user account and test by running the following command\n(Parameters such as ",(0,a.kt)("inlineCode",{parentName:"p"},"account")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"client-id"),"have to be adjusted):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_cisco_ssms_restapi.pl \\\n    --plugin=apps::cisco::ssms::restapi::plugin \\\n    --mode=licenses \\\n    --hostname='api.ssms.com' \\\n    --client-id='myapiclientid' \\\n    --client-secret='myapiclientsecret' \\\n    --account='1234abc-56de-78fg-90hi-1234abcdefg' \\\n    --filter-counters='status' \\\n    --filter-license-name='mylicence'\n    --critical-license-status='%{status} !~ /in compliance/i' \\\n    --verbose\n")),(0,a.kt)("p",null,"The command above gets the status of a Cisco SSMS licenses (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=licenses"),") named ",(0,a.kt)("em",{parentName:"p"},"mylicense")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--filter-licence-name='mylicence'"),").\nThis license belongs to account ",(0,a.kt)("em",{parentName:"p"},"1234abc-56de-78fg-90hi-1234abcdefg")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--account='1234abc-56de-78fg-90hi-1234abcdefg'"),"). "),(0,a.kt)("p",null,"This command will trigger a CRITICAL alarm if the status of the license is different from ",(0,a.kt)("em",{parentName:"p"},"in compliance")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-license-status='%{status} !~ /in compliance/i'"),") "),(0,a.kt)("p",null,"All the options that can be used with this plugin can be found over the ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_cisco_ssms_restapi.pl --plugin=apps::cisco::ssms::restapi::plugin \n--mode=licences --help\n")),(0,a.kt)("h3",{id:"why-do-i-get-the-following-error"},"Why do I get the following error:"),(0,a.kt)("h4",{id:"unknown-500-cant-connect-to-apissmscom443"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 500 Can't connect to api.ssms.com:443")),(0,a.kt)("p",null,"This error message means that the Centreon Plugin couldn't successfully connect to the Cisco SSMS API.\nCheck that no third party device (such as a firewall) is blocking the request.\nA proxy connection may also be necessary to connect to the API. This can be done by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--proxyurl")," option in the command."),(0,a.kt)("h4",{id:"unknown-501-protocol-scheme-connect-is-not-supported-"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 501 Protocol scheme 'connect' is not supported |")),(0,a.kt)("p",null,"When using a proxy to connect to the Cisco SSMS API, this error message means that the Centreon Plugin library does not support\nthe proxy connection protocol."),(0,a.kt)("p",null,"In order to prevent this issue, use the ",(0,a.kt)("em",{parentName:"p"},"curl")," HTTP backend by adding the following option to the command: ",(0,a.kt)("inlineCode",{parentName:"p"},"--http-backend='curl'"),"."),(0,a.kt)("h3",{id:"how-do-i-remove-the-count-perfdatas-if-i-want-to-filter-on-just-one-application-"},"How do I remove the ",(0,a.kt)("em",{parentName:"h3"},"count")," perfdatas if I want to filter on just one application ?"),(0,a.kt)("p",null,"The Plugin adds the count of objects by default. This can be useless if the objects are filtered with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--filter-license-name")," parameter.\nTherefore, these useless perfdatas can be omitted by adding a perfdata filter : ",(0,a.kt)("inlineCode",{parentName:"p"},"--filter-perfdata='^$'"),"."))}k.isMDXComponent=!0}}]);