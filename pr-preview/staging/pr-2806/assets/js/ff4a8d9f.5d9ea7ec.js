"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[75051],{27228:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>m,default:()=>N,frontMatter:()=>o,metadata:()=>d,toc:()=>c});a(67294);var n=a(3905),r=a(51715),l=a(7626);function p(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const o={id:"applications-wsus-nsclient",title:"Microsoft WSUS Server"},m=void 0,d={unversionedId:"integrations/plugin-packs/procedures/applications-wsus-nsclient",id:"integrations/plugin-packs/procedures/applications-wsus-nsclient",title:"Microsoft WSUS Server",description:"Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/applications-wsus-nsclient.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-wsus-nsclient",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/applications-wsus-nsclient",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-wsus-nsclient.md",tags:[],version:"current",frontMatter:{id:"applications-wsus-nsclient",title:"Microsoft WSUS Server"},sidebar:"pp",previous:{title:"Microsoft SCCM",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/applications-sccm-nsclient"},next:{title:"MS Biztalk",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/procedures/applications-biztalk"}},u={},c=[{value:"Pack Assets",id:"pack-assets",level:2},{value:"Templates",id:"templates",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Centreon NSClient++",id:"centreon-nsclient",level:3},{value:"Setup",id:"setup",level:2},{value:"Monitoring Pack",id:"monitoring-pack",level:3},{value:"Plugin",id:"plugin",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"How to check in the CLI that the configuration is OK and what are the main options for?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}],k={toc:c},g="wrapper";function N(t){var{components:e}=t,a=s(t,["components"]);return(0,n.kt)(g,i(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){p(t,e,a[e])}))}return t}({},k,a),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,n.kt)("h3",{id:"templates"},"Templates"),(0,n.kt)("p",null,"The Centreon Monitoring Connector ",(0,n.kt)("strong",{parentName:"p"},"Microsoft WSUS")," brings 2 different host templates:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"App-Wsus-NRPE-custom"),(0,n.kt)("li",{parentName:"ul"},"App-Wsus-NSClient-05-Restapi-custom")),(0,n.kt)("p",null,"They bring the following service templates:"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"App-Wsus-NRPE-custom",label:"App-Wsus-NRPE-custom",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Computers-Status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Wsus-Computers-Status-NRPE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check computers status count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Server-Statistics"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Wsus-Server-Statistics-NRPE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check serveral WSUS server statistics"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Synchronisation-Status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Wsus-Synchronisation-Status-NRPE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check updates synchronisation with WSUS server status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Update-Status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Wsus-Update-Status-NRPE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check updates status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X"))))),(0,n.kt)(l.Z,{value:"App-Wsus-NSClient-05-Restapi-custom",label:"App-Wsus-NSClient-05-Restapi-custom",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Computers-Status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Wsus-Computers-Status-NSClient05-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check computers status count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Server-Statistics"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Wsus-Server-Statistics-NSClient05-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check serveral WSUS server statistics"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Synchronisation-Status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Wsus-Synchronisation-Status-NSClient05-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check updates synchronisation with WSUS server status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Update-Status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-Wsus-Update-Status-NSClient05-Restapi"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check updates status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")))))),(0,n.kt)("h3",{id:"collected-metrics--status"},"Collected metrics & status"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Computers-Status",label:"Computers-Status",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"needing-updates"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"not-contacted"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"unassigned"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"up-to-date"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"with-update-errors"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Server-Statistics",label:"Server-Statistics",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"approved-updates"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"computer-groups"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"computers"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"declined-updates"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"expired-updates"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"not-approved-updates"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"stale-updates"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"updates"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Synchronisation-Status",label:"Synchronisation-Status",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"synchronisation-progress"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"synchronisation-status"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"last-synchronisation-duration"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"last-synchronisation-status"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Update-Status",label:"Update-Status",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"needed-by-computers"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"needing-files"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"up-to-date"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"with-client-errors"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"with-server-errors"),(0,n.kt)("td",{parentName:"tr",align:"left"})))))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("h3",{id:"centreon-nsclient"},"Centreon NSClient++"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"App-Wsus-NRPE-custom",label:"App-Wsus-NRPE-custom",mdxType:"TabItem"},(0,n.kt)("p",null,"To monitor a ",(0,n.kt)("em",{parentName:"p"},"WSUS Server")," through NSClient++ API, install the Centreon packaged version\nof the NSClient++ agent. Please follow our ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/getting-started/how-to-guides/centreon-nsclient-tutorial"},"official documentation"),"\nand make sure that the ",(0,n.kt)("strong",{parentName:"p"},"NRPE Server")," configuration is correct.")),(0,n.kt)(l.Z,{value:"App-Wsus-NSClient-05-Restapi-custom",label:"App-Wsus-NSClient-05-Restapi-custom",mdxType:"TabItem"},(0,n.kt)("p",null,"To monitor a ",(0,n.kt)("em",{parentName:"p"},"WSUS Server")," through NSClient++ API, install the Centreon packaged version\nof the NSClient++ agent. Please follow our ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/getting-started/how-to-guides/centreon-nsclient-tutorial"},"official documentation"),"\nand make sure that the ",(0,n.kt)("strong",{parentName:"p"},"Webserver / RESTApi")," configuration is correct."))),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)("h3",{id:"monitoring-pack"},"Monitoring Pack"),(0,n.kt)("p",null,"If the platform uses an ",(0,n.kt)("em",{parentName:"p"},"online")," license, you can skip the package installation\ninstructions below as it is not required in order to have the pack displayed within the\n",(0,n.kt)("strong",{parentName:"p"},"Configuration > Monitoring Connectors Manager")," menu."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If you want to use the ",(0,n.kt)("strong",{parentName:"p"},"NRPE")," host template, please install centreon-nrpe3 package.")),(0,n.kt)("p",null,"If the platform uses an ",(0,n.kt)("em",{parentName:"p"},"offline")," license, install the package on the ",(0,n.kt)("strong",{parentName:"p"},"central server"),"\nwith the command corresponding to the operating system's package manager:"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-pack-applications-wsus-nsclient\n"))),(0,n.kt)(l.Z,{value:"CentOS 7",label:"CentOS 7",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-wsus-nsclient\n"))),(0,n.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"apt install centreon-pack-applications-wsus-nsclient\n")))),(0,n.kt)("p",null,"Whatever the license type (",(0,n.kt)("em",{parentName:"p"},"online")," or ",(0,n.kt)("em",{parentName:"p"},"offline"),"), install the ",(0,n.kt)("strong",{parentName:"p"},"Microsoft WSUS")," Pack through\nthe ",(0,n.kt)("strong",{parentName:"p"},"Configuration > Monitoring Connectors Manager")," menu."),(0,n.kt)("h3",{id:"plugin"},"Plugin"),(0,n.kt)("p",null,"Use the commands below according to your operating system's package manager:"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-nrpe3-plugin\n"))),(0,n.kt)(l.Z,{value:"CentOS 7",label:"CentOS 7",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-nrpe3-plugin\nyum install centreon-plugin-Operatingsystems-Windows-Restapi\n"))),(0,n.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"apt install centreon-nrpe3-plugin\napt install centreon-plugin-operatingsystems-windows-restapi\n")))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("h3",{id:"host"},"Host"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Log into Centreon and add a new host through ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,n.kt)("li",{parentName:"ul"},"Fill the ",(0,n.kt)("strong",{parentName:"li"},"Name"),", ",(0,n.kt)("strong",{parentName:"li"},"Alias")," & ",(0,n.kt)("strong",{parentName:"li"},"IP Address/DNS")," fields according to your ",(0,n.kt)("strong",{parentName:"li"},"WSUS Server")," server settings."),(0,n.kt)("li",{parentName:"ul"},"Apply the chosen template to the host: ",(0,n.kt)("strong",{parentName:"li"},"App-Wsus-NRPE-custom")," or ",(0,n.kt)("strong",{parentName:"li"},"App-Wsus-NSClient-05-Restapi-custom"),"."),(0,n.kt)("li",{parentName:"ul"},"Depending on the Host template, fill the Macro fields as follows:")),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"App-Wsus-NRPE-custom",label:"App-Wsus-NRPE-custom",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"NRPECLIENT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Recommend check_centreon_nrpe3 (Default: 'check_centreon_nrpe')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"NRPEEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-u -m 8192")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"NRPEPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"(Default: '5666')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"NRPETIMEOUT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"(Default: '55')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"WSUSPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"WSUS Server port")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"WSUSSERVER"),(0,n.kt)("td",{parentName:"tr",align:"left"},"WSUS Server name"))))),(0,n.kt)(l.Z,{value:"App-Wsus-NSClient-05-Restapi-custom",label:"App-Wsus-NSClient-05-Restapi-custom",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPIEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command line (eg. a --verbose flag)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPILEGACYPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"API Password")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPIPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"API Port")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPIPROTO"),(0,n.kt)("td",{parentName:"tr",align:"left"},"API Protocol")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"WSUSPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"WSUS Server port")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"WSUSSERVER"),(0,n.kt)("td",{parentName:"tr",align:"left"},"WSUS Server name")))))),(0,n.kt)("h2",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for"},"How to check in the CLI that the configuration is OK and what are the main options for?"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The following examples come for the RestAPI template.")),(0,n.kt)("p",null,"Once the plugin is installed, log into your Centreon poller's CLI using the\n",(0,n.kt)("strong",{parentName:"p"},"centreon-engine")," user account (",(0,n.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") and test the plugin by\nrunning the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'/usr/lib/centreon/plugins//centreon_nsclient_restapi.pl \\\n    --plugin=apps::nsclient::restapi::plugin \\\n    --mode=query \\\n    --hostname=10.0.0.1 \\\n    --port=\'\' \\\n    --proto=\'\' \\\n    --legacy-password=\'\' \\\n    --command=check_centreon_plugins \\\n    --arg=\'apps::microsoft::wsus::local::plugin\' \\\n    --arg=\'server-statistics\' \\\n    --arg=\' \\\n    --wsus-server="my.wsus.server.domain" \\\n    --wsus-port="443" \\\n    --filter-counters="" \\\n    --warning-computers="" \\\n    --critical-computers="" \\\n    --warning-computer-groups="" \\\n    --critical-computer-groups="" \\\n    --warning-updates="" \\\n    --critical-updates="" \\\n    --warning-approved-updates="" \\\n    --critical-approved-updates="" \\\n    --warning-declined-updates="" \\\n    --critical-declined-updates=""\\\n    --warning-not-approved-updates="" \\\n    --critical-declined-updates="" \\\n    --warning-stale-updates="" \\\n    --critical-stale-updates="" \\\n    --warning-expired-updates="" \\\n    --critical-expired-updates="" \\\n    --verbose\'\\\n    --use-new-perfdata\n')),(0,n.kt)("p",null,"The expected command output is shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Computers: 120 Computer Groups: 6 Updates: 19 Approved Updates: 3 Declined Updates: 14 Not Approved Updates: 22 Stale Updates: 1 Expired Updates: 5 | \n")),(0,n.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_nsclient_restapi.pl \\\n    --plugin=apps::nsclient::restapi::plugin \\\n    --mode=query \\\n    --help\n")),(0,n.kt)("p",null,"All available modes can be displayed by adding the ",(0,n.kt)("inlineCode",{parentName:"p"},"--list-mode")," parameter to\nthe command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_nsclient_restapi.pl \\\n    --plugin=apps::nsclient::restapi::plugin \\\n    --list-mode\n")),(0,n.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"Please find the ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"troubleshooting documentation here"),"\nfor Centreon Plugins typical issues."))}N.isMDXComponent=!0}}]);