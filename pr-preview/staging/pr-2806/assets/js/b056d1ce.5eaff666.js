"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[15142],{44443:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/files/repair_mysql_upgrade-6a98ee17c4823471a8a24a06bf18f9ec.sql"},6430:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>d});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={id:"migrate",title:"Migrate the extension"},l=void 0,p={unversionedId:"reporting/migrate",id:"version-23.10/reporting/migrate",title:"Migrate the extension",description:"This chapter explains how to move your reporting server to another",source:"@site/versioned_docs/version-23.10/reporting/migrate.md",sourceDirName:"reporting",slug:"/reporting/migrate",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/reporting/migrate",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/reporting/migrate.md",tags:[],version:"23.10",lastUpdatedAt:1699872045,formattedLastUpdatedAt:"Nov 13, 2023",frontMatter:{id:"migrate",title:"Migrate the extension"},sidebar:"version-23.10/docs",previous:{title:"Upgrade the extension",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/reporting/upgrade"},next:{title:"Backup & restore",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/reporting/backup-restore"}},c={},d=[{value:"Install the new reporting server",id:"install-the-new-reporting-server",level:2},{value:"Synchronizing files &amp; data",id:"synchronizing-files--data",level:2},{value:"Move generated reports",id:"move-generated-reports",level:2}],u={toc:d},m="wrapper";function g(e){var{components:t}=e,s=a(e,["components"]);return(0,n.kt)(m,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},u,s),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This chapter explains how to move your reporting server to another\none (e.g. if you want to switch to another supported OS)."),(0,n.kt)("p",null,"The migration of the interface extension is done at the same time as the migration of the central server."),(0,n.kt)("h2",{id:"install-the-new-reporting-server"},"Install the new reporting server"),(0,n.kt)("p",null,"Install your new reporting server based on the Centreon Business\nrepository using the ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/reporting/installation"},"standard documentation"),"."),(0,n.kt)("h2",{id:"synchronizing-files--data"},"Synchronizing files & data"),(0,n.kt)("p",null,"Stop mysqld on ",(0,n.kt)("strong",{parentName:"p"},"both")," Reporting servers"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"service mysql stop\n")),(0,n.kt)("p",null,"Copy data from the old reporting server to the new one:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"rsync -avz /var/lib/mysql/* root@IP_New_Reporting_Server:/var/lib/mysql/\n")),(0,n.kt)("p",null,"Execute the following command to ensure compatibility of the database files:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"mysql_upgrade\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'If no error is visible, restart MariaDB and continue to the section\n"Move generated reports"')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you see errors, especially on the following tables mysql\ninnodb_index_stats, innodb_table_stats, gtid_slave_pos, it\nmight be caused by an incompatibility between MySQL/MariaDB 5.5 and\nMariaDB 10.5. In that case, follow the procedure below:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"service mysql stop\ncp -a /var/lib/mysql/ /var/lib/mysql.bak\ncd /var/lib/mysql/mysql/\nrm innodb_index_stats.frm innodb_index_stats.ibd innodb_table_stats.frm innodb_table_stats.ibd gtid_slave_pos.frm gtid_slave_pos.ibd\nservice mysql start\n")),(0,n.kt)("p",{parentName:"li"},"Then manually recreate the tables:"),(0,n.kt)("p",{parentName:"li"},"mysql mysql < repair_mysql_upgrade.sql"),(0,n.kt)("p",{parentName:"li"},"Download the following file: ",(0,n.kt)("a",{target:"_blank",href:r(44443).Z},"repair_mysql_upgrade.sql")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Be sure to copy the the custom report & resources you designed to your\nnew reporting server in the same folders.")),(0,n.kt)("h2",{id:"move-generated-reports"},"Move generated reports"),(0,n.kt)("p",null,"In case you also move your Centreon central server, you need to\nsynchronize the folders containing generated reports on your new\nCentreon server to be able to have them on the interface:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"rsync -avz /var/lib/centreon/centreon-bi-server/archives/ root@IP_New_Centreon_Server:/var/lib/centreon/centreon-bi-server/archives/\n")))}g.isMDXComponent=!0}}]);