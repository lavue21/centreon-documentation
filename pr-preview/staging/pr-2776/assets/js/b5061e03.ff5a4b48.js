"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[13498],{3529:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>k,contentTitle:()=>m,default:()=>N,frontMatter:()=>s,metadata:()=>d,toc:()=>c});a(67294);var n=a(3905),r=a(51715),l=a(7626);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function p(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const s={id:"applications-databases-mssql",title:"Microsoft SQL Server"},m=void 0,d={unversionedId:"integrations/plugin-packs/procedures/applications-databases-mssql",id:"integrations/plugin-packs/procedures/applications-databases-mssql",title:"Microsoft SQL Server",description:"Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/applications-databases-mssql.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-databases-mssql",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/applications-databases-mssql",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-databases-mssql.md",tags:[],version:"current",frontMatter:{id:"applications-databases-mssql",title:"Microsoft SQL Server"},sidebar:"pp",previous:{title:"Informix DB SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/applications-databases-informix-snmp"},next:{title:"MongoDB",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/applications-databases-mongodb"}},k={},c=[{value:"Pack Assets",id:"pack-assets",level:2},{value:"Templates",id:"templates",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Monitoring user",id:"monitoring-user",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Freetds configuration",id:"freetds-configuration",level:3},{value:"Setup",id:"setup",level:2},{value:"Monitoring Pack",id:"monitoring-pack",level:3},{value:"Plugin",id:"plugin",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"How to check in the CLI that the configuration is OK and what are the main options for?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}],g={toc:c},u="wrapper";function N(t){var{components:e}=t,a=o(t,["components"]);return(0,n.kt)(u,p(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){i(t,e,a[e])}))}return t}({},g,a),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,n.kt)("h3",{id:"templates"},"Templates"),(0,n.kt)("p",null,"The Centreon Monitoring Connector ",(0,n.kt)("strong",{parentName:"p"},"Microsoft SQL Server")," brings a host template:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"App-DB-MSSQL-custom")),(0,n.kt)("p",null,"It brings the following service templates:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Alias"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Template"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Service Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Backup-Age"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-DB-MSSQL-Backup-Age"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check database backups of the server"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Blocked-Processes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-DB-MSSQL-Blocked-Processes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check blocked processes on the server."),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Cache-Hitratio"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-DB-MSSQL-Cache-Hitratio"),(0,n.kt)("td",{parentName:"tr",align:"left"},'Check the "Data Buffer Cache Hit Ratio" of the server. No alerts by default'),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Connected-Users"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-DB-MSSQL-Connected-Users"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check number of connected users on the database"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Connection-Time"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-DB-MSSQL-Connection-Time"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check the connection time to the server. This time is given in seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Databases-Size"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-DB-MSSQL-Databases-Size"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check database data and logs files"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Deadlocks"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-DB-MSSQL-Deadlocks"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check deadlocks per second of the server"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Failed-Jobs"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-DB-MSSQL-Failed-Jobs"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check MSSQL failed jobs"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Locks-Waits"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-DB-MSSQL-Locks-Waits"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check locks-waits per second of the server"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Page-Life-Expectancy"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-DB-MSSQL-Page-Life-Expectancy"),(0,n.kt)("td",{parentName:"tr",align:"left"},'Check the "Page Life Expectancy" of the server. No alerts by default'),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Sql-Statement"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-DB-MSSQL-Sql-Statement"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check allowing to execute a custom SQL query returning a number"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Sql-Statement-String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-DB-MSSQL-Sql-Statement-String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check allowing to execute a custom SQL query returning a string"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Transactions"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-DB-MSSQL-Transactions"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check transactions per second of the server. No alerts by default"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")))),(0,n.kt)("h3",{id:"collected-metrics--status"},"Collected metrics & status"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Backup-Age",label:"Backup-Age",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"last-duration"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"last-execution"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Blocked-Processes",label:"Blocked-Processes",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"blocked-processes"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"processes"),"#wait-time"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Cache-Hitratio",label:"Cache-Hitratio",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mssql.cache.hitratio.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,n.kt)(l.Z,{value:"Connected-Users",label:"Connected-Users",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mssql.users.connected.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,n.kt)(l.Z,{value:"Connection-Time",label:"Connection-Time",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"connection.time.milliseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ms"))))),(0,n.kt)(l.Z,{value:"Databases-Size",label:"Databases-Size",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"datafiles.space.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"datafiles.space.free.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"datafiles.space.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"logfiles.space.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"logfiles.space.free.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"logfiles.space.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,n.kt)(l.Z,{value:"Deadlocks",label:"Deadlocks",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mssql.deadlocks.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,n.kt)(l.Z,{value:"Failed-Jobs",label:"Failed-Jobs",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"jobs."),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"jobs.total.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"critical-"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"job.duration.seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"warning-"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Locks-Waits",label:"Locks-Waits",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mssql.lockswaits.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,n.kt)(l.Z,{value:"Page-Life-Expectancy",label:"Page-Life-Expectancy",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"page.life.expectancy.seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"s"))))),(0,n.kt)(l.Z,{value:"Sql-Statement",label:"Sql-Statement",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sqlrequest.execution.time.seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"value"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Sql-Statement-String",label:"Sql-Statement-String",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"rows"),"#string"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Transactions",label:"Transactions",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"databases.transactions.persecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"database"),"#database.transactions.persecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"/s")))))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("h3",{id:"monitoring-user"},"Monitoring user"),(0,n.kt)("p",null,"To use this probe, the configuration of a monitoring user with specific privileges is required. The ",(0,n.kt)("inlineCode",{parentName:"p"},"serveradmin")," role\ncan be used for testing purposes but should never be used in production because of the security risk involved. "),(0,n.kt)("p",null,"Birk Bohne, who is a valuable contributor of the ",(0,n.kt)("em",{parentName:"p"},"check","_","mssql","_","health")," probe, wrote a script to assign a less-privileged user.\nHis script can be found under the ",(0,n.kt)("strong",{parentName:"p"},"Preparation of the database")," section of the following ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/lausser/check_mssql_health/blob/master/doc/check_mssql_health.en.txt"},"documentation"),". "),(0,n.kt)("p",null,"We recommend you use a domain user to better manage its properties and privileges. "),(0,n.kt)("h3",{id:"dependencies"},"Dependencies"),(0,n.kt)("p",null,"These packages are required: ",(0,n.kt)("inlineCode",{parentName:"p"},"freetds perl-DBD-Sybase unixODBC")),(0,n.kt)("h3",{id:"freetds-configuration"},"Freetds configuration"),(0,n.kt)("p",null,"The default version used by freetds is 4.2. To guarantee optimal operations and security, edit the ",(0,n.kt)("inlineCode",{parentName:"p"},"freetds.conf")," file,\nuncomment this line ",(0,n.kt)("inlineCode",{parentName:"p"},"version = 4.2"),"and replace ",(0,n.kt)("inlineCode",{parentName:"p"},"4.2")," with ",(0,n.kt)("inlineCode",{parentName:"p"},"8.0"),". The 8.0 version is the minimal supported version."),(0,n.kt)("p",null,"The configuration file is located under different paths depending on your operating system: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"RedHat-like: /etc/freetds.conf"),(0,n.kt)("li",{parentName:"ul"},"Debian 11: /etc/freetds/freetds.conf")),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)("h3",{id:"monitoring-pack"},"Monitoring Pack"),(0,n.kt)("p",null,"If the platform uses an ",(0,n.kt)("em",{parentName:"p"},"online")," license, you can skip the package installation\ninstruction below as it is not required to have the pack displayed within the\n",(0,n.kt)("strong",{parentName:"p"},"Configuration > Monitoring Connectors Manager")," menu.\nIf the platform uses an ",(0,n.kt)("em",{parentName:"p"},"offline")," license, install the package on the ",(0,n.kt)("strong",{parentName:"p"},"central server"),"\nwith the command corresponding to the operating system's package manager:"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-pack-applications-databases-mssql\n"))),(0,n.kt)(l.Z,{value:"CentOS 7",label:"CentOS 7",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-databases-mssql\n"))),(0,n.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"apt install centreon-pack-applications-databases-mssql\n")))),(0,n.kt)("p",null,"Whatever the license type (",(0,n.kt)("em",{parentName:"p"},"online")," or ",(0,n.kt)("em",{parentName:"p"},"offline"),"), install the ",(0,n.kt)("strong",{parentName:"p"},"Microsoft SQL Server")," Pack through\nthe ",(0,n.kt)("strong",{parentName:"p"},"Configuration > Monitoring Connectors Manager")," menu."),(0,n.kt)("h3",{id:"plugin"},"Plugin"),(0,n.kt)("p",null,"Since Centreon 22.04, you can benefit from the 'Automatic plugin installation' feature.\nWhen this feature is enabled, you can skip the installation part below."),(0,n.kt)("p",null,"You still have to manually install the plugin on the poller(s) when:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Automatic plugin installation is turned off"),(0,n.kt)("li",{parentName:"ul"},"You want to run a discovery job from a poller that doesn't monitor any resource of this kind yet")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"More information in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/monitoring/pluginpacks/#installing-the-plugin"},"Installing the plugin")," section.")),(0,n.kt)("p",null,"Use the commands below according to your operating system's package manager:"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-plugin-Applications-Databases-Mssql\n"))),(0,n.kt)(l.Z,{value:"CentOS 7",label:"CentOS 7",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Databases-Mssql\n"))),(0,n.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"apt install centreon-plugin-applications-databases-mssql\n")))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("h3",{id:"host"},"Host"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Log into Centreon and add a new host through ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,n.kt)("li",{parentName:"ul"},"Fill the ",(0,n.kt)("strong",{parentName:"li"},"Name"),", ",(0,n.kt)("strong",{parentName:"li"},"Alias")," & ",(0,n.kt)("strong",{parentName:"li"},"IP Address/DNS")," fields according to your ",(0,n.kt)("strong",{parentName:"li"},"SQL Server database")," server settings."),(0,n.kt)("li",{parentName:"ul"},"Apply the ",(0,n.kt)("strong",{parentName:"li"},"App-DB-MSSQL-custom")," template to the host."),(0,n.kt)("li",{parentName:"ul"},"Once the template is applied, fill in the corresponding macros. Some macros are mandatory.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command line (eg. a --verbose flag)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"MSSQLPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Monitoring user password (Default: 'PASSWORD')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"MSSQLPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"MSSQL instance listening port (Default: '1433')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"MSSQLUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Monitoring user login string (Default: 'USERNAME')")))),(0,n.kt)("h2",{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for"},"How to check in the CLI that the configuration is OK and what are the main options for?"),(0,n.kt)("p",null,"Once the plugin is installed, log into your Centreon poller's CLI using the\n",(0,n.kt)("strong",{parentName:"p"},"centreon-engine")," user account (",(0,n.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") and test the plugin by\nrunning the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_mssql.pl \\\n    --plugin database::mssql::plugin \\\n    --hostname 10.0.0.1 \\\n    --port 1433 \\\n    --username 'USERNAME' \\\n    --password 'PASSWORD'  \\\n    --mode=connected-users \\\n    --warning-connected-user='' \\\n    --critical-connected-user='' \\\n    --verbose \\\n    --use-new-perfdata\n")),(0,n.kt)("p",null,"The expected command output is shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: 20 connected user(s) | 'mssql.users.connected.count'=20;;;0; \n")),(0,n.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_mssql.pl \\\n    --plugin database::mssql::plugin \\\n    --hostname 10.0.0.1 \\\n    --help\n")),(0,n.kt)("p",null,"All available modes can be displayed by adding the ",(0,n.kt)("inlineCode",{parentName:"p"},"--list-mode")," parameter to\nthe command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_mssql.pl \\\n    --plugin database::mssql::plugin \\\n    --list-mode\n")),(0,n.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"Please find the ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"troubleshooting documentation"),"\nfor Centreon Plugins typical issues."))}N.isMDXComponent=!0}}]);