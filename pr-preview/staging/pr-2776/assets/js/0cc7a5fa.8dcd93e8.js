"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[66967],{1238:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>k,frontMatter:()=>p,metadata:()=>d,toc:()=>u});a(67294);var n=a(3905),r=a(51715),o=a(7626);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const p={id:"monitor-mysql-server",title:"Monitor a MySQL or MariaDB database"},c=void 0,d={unversionedId:"getting-started/monitor-mysql-server",id:"version-23.10/getting-started/monitor-mysql-server",title:"Monitor a MySQL or MariaDB database",description:"The objective of this tutorial is to monitor a Mysql/MariaDB database.",source:"@site/versioned_docs/version-23.10/getting-started/mysql_tuto.md",sourceDirName:"getting-started",slug:"/getting-started/monitor-mysql-server",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/docs/getting-started/monitor-mysql-server",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/getting-started/mysql_tuto.md",tags:[],version:"23.10",lastUpdatedAt:1699375250,formattedLastUpdatedAt:"Nov 7, 2023",frontMatter:{id:"monitor-mysql-server",title:"Monitor a MySQL or MariaDB database"},sidebar:"version-23.10/docs",previous:{title:"Monitor your first Cisco router",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/docs/getting-started/monitor-cisco-router-with-snmp"},next:{title:"Use Autodiscovery to monitor AWS EC2 instances",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/docs/getting-started/autodisco-aws"}},m={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"On the database you want to monitor",id:"on-the-database-you-want-to-monitor",level:3},{value:"On the poller",id:"on-the-poller",level:3},{value:"On the central server",id:"on-the-central-server",level:3},{value:"Set up the host and deploy the configuration",id:"set-up-the-host-and-deploy-the-configuration",level:2}],g={toc:u},h="wrapper";function k(e){var{components:t}=e,p=l(e,["components"]);return(0,n.kt)(h,s(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){i(e,t,a[t])}))}return e}({},g,p),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The objective of this tutorial is to monitor a Mysql/MariaDB database."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("h3",{id:"on-the-database-you-want-to-monitor"},"On the database you want to monitor"),(0,n.kt)("p",null,"To be able to collect the necessary information from the database, a database user with specific privileges is required. If the database you want to monitor is a Centreon database, a dedicated user already exists and is called ",(0,n.kt)("strong",{parentName:"p"},"centreon"),". Otherwise, start by creating a new user: log in to your database, then run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"CREATE USER 'username'@'IP_POLLER' IDENTIFIED BY 'password';\n")),(0,n.kt)("p",null,"Then, whether your database is a Centreon database or not, run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"GRANT SELECT ON *.* TO 'username'@'IP_POLLER';\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Replace the username, the IP address of the poller and the password with the values you want.")),(0,n.kt)("h3",{id:"on-the-poller"},"On the poller"),(0,n.kt)("p",null,"Install the following plugin on the poller that will monitor your database:"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install centreon-plugin-Applications-Databases-Mysql\n"))),(0,n.kt)(o.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install centreon-plugin-Applications-Databases-Mysql\n"))),(0,n.kt)(o.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"apt install centreon-plugin-applications-databases-mysql\n")))),(0,n.kt)("h3",{id:"on-the-central-server"},"On the central server"),(0,n.kt)("p",null,"The database will be monitored using the ",(0,n.kt)("a",{parentName:"p",href:"/pp/integrations/plugin-packs/procedures/applications-databases-mysql"},(0,n.kt)("strong",{parentName:"a"},"MySQL/MariaDB")," Monitoring Connector"),".\nGo to ",(0,n.kt)("strong",{parentName:"p"},"Configuration > Monitoring Connectors Manager")," and install the ",(0,n.kt)("strong",{parentName:"p"},"MySQL/MariaDB")," Monitoring Connector:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(65778).Z,width:"1756",height:"680"})),(0,n.kt)("h2",{id:"set-up-the-host-and-deploy-the-configuration"},"Set up the host and deploy the configuration"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"Configuration > Hosts > Hosts")," and click ",(0,n.kt)("strong",{parentName:"p"},"Add"),":"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"image",src:a(96564).Z,width:"1831",height:"680"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Input the following information:"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The name of your server"),(0,n.kt)("li",{parentName:"ul"},"A description of your server"),(0,n.kt)("li",{parentName:"ul"},"Its IP address"),(0,n.kt)("li",{parentName:"ul"},'Select the poller that will monitor the database (leave "Central" if you have no other poller)')),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click the ",(0,n.kt)("strong",{parentName:"p"},"+ Add New Entry")," button for the ",(0,n.kt)("strong",{parentName:"p"},"Templates")," field and select the ",(0,n.kt)("strong",{parentName:"p"},"App-DB-MySQL-custom")," template:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"image",src:a(24048).Z,width:"1732",height:"501"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"A list of macros matching the template will appear:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"image",src:a(97163).Z,width:"1411",height:"176"})),(0,n.kt)("p",{parentName:"li"},"Fill in the value of following macros:"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"MYSQLUSERNAME"),": the name of the user that will connect to the database."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"MySQLPASSWORD"),": the password associated with this user."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"MySQLPORT"),": the listening port of the database, by default 3306.")),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Save"),". Your device has been added to the list of hosts:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"image",src:a(22335).Z,width:"1757",height:"320"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"Configuration > Services > Services by host"),". A set of indicators has been deployed automatically:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"image",src:a(93683).Z,width:"1761",height:"639"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/docs/getting-started/first-supervision#deploying-a-configuration"},"Deploy the supervision"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"Monitoring > Status Details > Services")," and select ",(0,n.kt)("strong",{parentName:"p"},"All"),"\nfor the ",(0,n.kt)("strong",{parentName:"p"},"Service Status")," filter. At first, the resources appear with the status ",(0,n.kt)("strong",{parentName:"p"},"Pending"),",\nwhich means that no checks have been executed yet. After a few minutes, the first results of the monitoring appear:"),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{alt:"image",src:a(94162).Z,width:"1830",height:"680"})))))}k.isMDXComponent=!0},65778:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/quick_start_mysql_0-fb16a6cd287189a956617662a02b072b.gif"},96564:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/quick_start_mysql_1a-f28c828a85437cf1280ef3bbddbe17a6.gif"},24048:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/quick_start_mysql_1a-9d352d9b567a35d4b5fe82170d8b0469.png"},97163:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/quick_start_mysql_1b-7317d377ca9e1e53993e3d959a2c30b4.png"},22335:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/quick_start_mysql_2-953b6c15fd729843e5e5d03701e41a2d.png"},93683:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/quick_start_mysql_3-119041c96dacdf41e1714f2d6825a5e8.png"},94162:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/quick_start_mysql_4-da740cdc862559b2e35c444a7393aa5d.gif"}}]);