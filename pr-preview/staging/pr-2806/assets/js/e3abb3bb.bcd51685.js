"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[39485],{26518:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>k,frontMatter:()=>s,metadata:()=>m,toc:()=>u});n(67294);var a=n(3905),o=n(51715),r=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={id:"cloud-microsoft-office365-teams",title:"Office365 Teams"},p=void 0,m={unversionedId:"integrations/plugin-packs/procedures/cloud-microsoft-office365-teams",id:"integrations/plugin-packs/procedures/cloud-microsoft-office365-teams",title:"Office365 Teams",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/cloud-microsoft-office365-teams.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-microsoft-office365-teams",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/cloud-microsoft-office365-teams",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/cloud-microsoft-office365-teams.md",tags:[],version:"current",frontMatter:{id:"cloud-microsoft-office365-teams",title:"Office365 Teams"},sidebar:"pp",previous:{title:"Office365 Skype",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/cloud-microsoft-office365-skype"},next:{title:"Outscale API",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/cloud-outscale"}},d={},u=[{value:"Overview",id:"overview",level:2},{value:"Monitoring Connector assets",id:"monitoring-connector-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Monitored metrics",id:"monitored-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Register an application",id:"register-an-application",level:3},{value:"Office365 Management API authorization",id:"office365-management-api-authorization",level:3},{value:"More information",id:"more-information",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How can I test the Plugin in the CLI and what do the main parameters stand for?",id:"how-can-i-test-the-plugin-in-the-cli-and-what-do-the-main-parameters-stand-for",level:3},{value:"Why do I get the following error:",id:"why-do-i-get-the-following-error",level:3},{value:"<code>UNKNOWN: 500 Can&#39;t connect to ...:443</code>",id:"unknown-500-cant-connect-to-443",level:4},{value:"<code>UNKNOWN: 501 Protocol scheme &#39;connect&#39; is not supported |</code>",id:"unknown-501-protocol-scheme-connect-is-not-supported-",level:4}],f={toc:u},g="wrapper";function k(e){var{components:t}=e,n=c(e,["components"]);return(0,a.kt)(g,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Microsoft\u2019s Office365 suite includes Teams, which is a business application that\nprovides workspaces, video and text chat, file storage and application\nintegration."),(0,a.kt)("p",null,"The monitoring information of Microsoft's Office365 is available\nthrough the Office365 API Management."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The data provided by the Office365 Management API are not real-time.\nThey're based on a 7 days reporting period")),(0,a.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector assets"),(0,a.kt)("h3",{id:"monitored-objects"},"Monitored objects"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Teams devices usage"),(0,a.kt)("li",{parentName:"ul"},"Teams users activity")),(0,a.kt)("h3",{id:"monitored-metrics"},"Monitored metrics"),(0,a.kt)("p",null,"See link for details about metrics : "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/microsoft-365/admin/activity-reports/microsoft-teams-device-usage-preview?view=o365-worldwide"},"https://docs.microsoft.com/en-us/microsoft-365/admin/activity-reports/microsoft-teams-device-usage-preview?view=o365-worldwide")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/microsoft-365/admin/activity-reports/microsoft-teams-user-activity-preview?view=o365-worldwide"},"https://docs.microsoft.com/en-us/microsoft-365/admin/activity-reports/microsoft-teams-user-activity-preview?view=o365-worldwide"))),(0,a.kt)(o.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"Devices-Usage",label:"Devices-Usage",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"teams.devices.active.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of active devices"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"teams.devices.","*",".count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of windows/mac/web/iOS/android devices"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count"))))),(0,a.kt)(r.Z,{value:"User-Activity",label:"User-Activity",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"teams.users.active.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total number of active users"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"teams.users.messages.team.total.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total number of Team chat messages"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"teams.users.messages.private.total.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total number of Private chat messages"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"teams.users.call.total.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total number of calls"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"teams.users.meeting.total.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total number of meetings"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Count")))))),(0,a.kt)("p",null,"Once the host created, you can configure some macros on the service to filter\ninformation by user. More info in the ",(0,a.kt)("a",{parentName:"p",href:"#Configuration"},"Configuration"),"\nsection."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Refer to the official documentation of Office365 Management or follow the link\nin the 'More information' section to create an Office365 account and get help\nabout the management features."),(0,a.kt)("h3",{id:"register-an-application"},"Register an application"),(0,a.kt)("p",null,"The Office365 Management API use Azure AD to authenticate against Office365.\nTo access the Office365 Management API, you need to register your application in\nAzure AD. ",(0,a.kt)("em",{parentName:"p"},"Application"),' is here used by Microsoft as a conceptual term,\nreferring not only to the application software, but also to the Azure AD\nregistration and role in authentication/authorization "conversations" at runtime.\n(',(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/app-objects-and-service-principals"},"https://docs.microsoft.com/en-us/azure/active-directory/develop/app-objects-and-service-principals"),")"),(0,a.kt)("h3",{id:"office365-management-api-authorization"},"Office365 Management API authorization"),(0,a.kt)("p",null,"To collect data from Teams Online, you need to specify the following\nauthorization:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Microsoft Graph :",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Reports.Read.All (Type : Application)"),(0,a.kt)("li",{parentName:"ul"},"User.Read (Type : Delegated)"))),(0,a.kt)("li",{parentName:"ul"},"Office365 Management APIs :",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ServiceHealth.Read (Type : Application)"),(0,a.kt)("li",{parentName:"ul"},"ActivityFeed.Read (Type : Application)")))),(0,a.kt)("h3",{id:"more-information"},"More information"),(0,a.kt)("p",null,"You can access to the official documentation to register your application,\nget your ",(0,a.kt)("em",{parentName:"p"},"ID client"),", ",(0,a.kt)("em",{parentName:"p"},"ID secret")," and your ",(0,a.kt)("em",{parentName:"p"},"Tenant ID")," by following this link:\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/office/office-365-management-api/get-started-with-office-365-management-apis"},"https://docs.microsoft.com/en-us/office/office-365-management-api/get-started-with-office-365-management-apis")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(o.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every poller expected to monitor Office365 Teams:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Microsoft-Office365-Teams-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the Centreon Monitoring Connector ",(0,a.kt)("em",{parentName:"li"},"Office365 Teams")," from the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page"))),(0,a.kt)(r.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every poller expected to monitor Office365 Teams:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Microsoft-Office365-Teams-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Monitoring Connector RPM on the Centreon Central server:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-microsoft-office365-teams\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the Centreon Monitoring Connector ",(0,a.kt)("em",{parentName:"li"},"Office365 Teams")," from the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Log into Centreon and add a new Host through "Configuration > Hosts".'),(0,a.kt)("li",{parentName:"ul"},"Apply the ",(0,a.kt)("em",{parentName:"li"},"Cloud-Microsoft-Office365-Teams-Api-custom")," template and configure all the mandatory Macros :")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"OFFICE365CUSTOMMODE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Access mode for the Plugin (default: 'graphapi')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"OFFICE365TENANT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Tenant-id of your Office365 organization")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"OFFICE365CLIENTID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Client-id of your registered application")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"OFFICE365CLIENTSECRET"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Secret-if of your registered application")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"OFFICE365EXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command (eg. a --verbose flag)")))),(0,a.kt)("p",null,"The metric perfdateY will record the date the metric was collected. You can\nfilter it by entering ",(0,a.kt)("inlineCode",{parentName:"p"},"--filter-perfdata='^(?!.*perfdate).*$'")," into the\n",(0,a.kt)("em",{parentName:"p"},"OFFICE365EXTRAOPTIONS")," macro."),(0,a.kt)("p",null,"Once the host created, you can configure some Macros on the services to filter\ninformation:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"FILTERUSERS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Filter by specific users")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"FILTERCOUNTER"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Filter specific counters")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"how-can-i-test-the-plugin-in-the-cli-and-what-do-the-main-parameters-stand-for"},"How can I test the Plugin in the CLI and what do the main parameters stand for?"),(0,a.kt)("p",null,"Once the Centreon Plugin installed, you can test it directly in the CLI of the\nCentreon poller by logging with the ",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," user:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_office365_teams_api.pl \\\n  --plugin=cloud::microsoft::office365::teams::plugin \\\n  --mode=devices-usage \\\n  --tenant='abcd1234-5678-90ab-cd12-34567890abcd' \\\n  --client-id='9876dcba-5432-10dc-ba98-76543210dcba' \\\n  --client-secret='8/RON4vUGhAcg6DRmSxc4AwgxSRoNfKg4d8xNizIMnwg='\n")),(0,a.kt)("p",null,"Expected output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Active devices on 2020-09-26 : 45/598 (7.53%) - Users count by device type \n: Windows: 35, Mac: 2, Web: 0, iOS: 4, Android Phone: 4, Windows Phone: 0\n'active_devices'=45devices;;;0;598\n'windows'=35;;;0;\n'mac'=2;;;0;\n'web'=0;;;0;\n'ios'=4;;;0;\n'android_phone'=4;;;0;\n'windows_phone'=0;;;0;\n")),(0,a.kt)("p",null,"The available thresholds as well as all of the options that can be used with\nthis Plugin can be displayed by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_office365_teams_api.pl \\\n  --plugin=cloud::microsoft::office365::teams::plugin \\\n  --mode=devices-usage \\\n  --custommode='graphapi'\\\n  --help\n")),(0,a.kt)("p",null,"You can display all of the modes that come with the Plugin with the command below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_office365_teams_api.pl \\\n  --plugin=cloud::microsoft::office365::teams::plugin \\\n  --list-mode\n")),(0,a.kt)("h3",{id:"why-do-i-get-the-following-error"},"Why do I get the following error:"),(0,a.kt)("h4",{id:"unknown-500-cant-connect-to-443"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 500 Can't connect to ...:443")),(0,a.kt)("p",null,"This error message means that the Centreon Plugin couldn't successfully connect to the Office365 Management API.\nCheck that no third party device (such as a firewall) is blocking the request.\nA proxy connection may also be necessary to connect to the API. This can be done by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--proxyurl")," option in the command."),(0,a.kt)("h4",{id:"unknown-501-protocol-scheme-connect-is-not-supported-"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 501 Protocol scheme 'connect' is not supported |")),(0,a.kt)("p",null,"When using a proxy to connect to the Office365 Management API, this error message means that the Centreon Plugin library does not support\nthe proxy connection protocol."),(0,a.kt)("p",null,"In order to prevent this issue, use the ",(0,a.kt)("em",{parentName:"p"},"curl")," HTTP backend by adding the following option to the command: ",(0,a.kt)("inlineCode",{parentName:"p"},"--http-backend='curl'"),"."))}k.isMDXComponent=!0}}]);