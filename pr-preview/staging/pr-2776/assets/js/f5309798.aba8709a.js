"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[46198],{36593:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>u});n(67294);var a=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={id:"database-partitioning",title:"Database partitioning"},s=void 0,p={unversionedId:"administration/database-partitioning",id:"version-23.10/administration/database-partitioning",title:"Database partitioning",description:"Overview",source:"@site/versioned_docs/version-23.10/administration/database-partitioning.md",sourceDirName:"administration",slug:"/administration/database-partitioning",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/docs/administration/database-partitioning",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/administration/database-partitioning.md",tags:[],version:"23.10",lastUpdatedAt:1699375250,formattedLastUpdatedAt:"Nov 7, 2023",frontMatter:{id:"database-partitioning",title:"Database partitioning"},sidebar:"version-23.10/docs",previous:{title:"Licenses",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/docs/administration/licenses"},next:{title:"Backup",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/docs/administration/backup"}},c={},u=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Operation",id:"operation",level:2},{value:"Migrating unpartitioned tables",id:"migrating-unpartitioned-tables",level:2},{value:"Monitoring of partitioning operation",id:"monitoring-of-partitioning-operation",level:2}],m={toc:u},d="wrapper";function g(e){var{components:t}=e,l=o(e,["components"]);return(0,a.kt)(d,r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},m,l),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Some tables in the 'centreon","_","storage' database are partitioned to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Optimize the execution time of several queries,"),(0,a.kt)("li",{parentName:"ul"},"Optimize data purges,"),(0,a.kt)("li",{parentName:"ul"},"Minimize the reconstruction of the tables with an error during a crash of the\nDBMS.")),(0,a.kt)("p",null,"One partition per day is created for the following tables:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"data","_","bin"),": performance data"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"logs"),": event logs from the supervision engine collection."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"log","_","archive","_","host"),": availability data concerning hosts."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"log","_","archive","_","service"),": availability data concerning services.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"There are some limitations:"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"The maximum number of partitions (for a MariaDB table) is 1024"),(0,a.kt)("li",{parentName:"ul"},"Foreign keys are not supported"))),(0,a.kt)("p",null,"More details about MariaDB partitioning\n",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://mariadb.com/kb/en/library/partitioning-overview/"},"here")),"."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"The following packages are required:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"php-mysql"),(0,a.kt)("li",{parentName:"ul"},"Pear-DB"),(0,a.kt)("li",{parentName:"ul"},"MariaDB (",">","= 10.1)")),(0,a.kt)("p",null,"The MariaDB ",(0,a.kt)("strong",{parentName:"p"},"open","_","files","_","limit")," parameter must be set to 32000 in the ","[","server","]","\nsection:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"[server]\nopen_files_limit = 32000\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you install Centreon on your RedHat Linux version, you will be\nable to do it manually. Remember to restart the mariadb processes if you change\nthis value in my.cnf.")),(0,a.kt)("p",null,"If you use systemd, you need to create the\n",(0,a.kt)("strong",{parentName:"p"},"/etc/systemd/system/mariadb.service.d/mariadb.conf")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"[Service]\nLimitNOFILE=32000\n")),(0,a.kt)("p",null,"Then reload systemd and MariaDB:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl daemon-reload\nsystemctl restart mariadb\n")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"The data retention time is programmed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Administration > Parameters >\nOptions")," menu:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(87694).Z,width:"857",height:"151"})),(0,a.kt)("p",null,"The setting is as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Retention duration for partitioning"),": retention time for partitioned\ntables, by default ",(0,a.kt)("strong",{parentName:"li"},"365 days"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Forward provisioning"),": number of partitions created in advance, by\ndefault ",(0,a.kt)("strong",{parentName:"li"},"10 days"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Backup directory for partitioning"),": partition backup directory, by\ndefault ",(0,a.kt)("strong",{parentName:"li"},"/var/cache/centreon/backup"),".")),(0,a.kt)("h2",{id:"operation"},"Operation"),(0,a.kt)("p",null,"Partitioning uses XML files in the ",(0,a.kt)("strong",{parentName:"p"},"/usr/share/centreon/config/partition.d/"),"\ndirectory to create the necessary partitions."),(0,a.kt)("p",null,"Every day, a script launched by a cron creates missing tables\nor creates new tables in advance:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"0 4 * * * centreon /bin/php /usr/share/centreon/cron/centreon-partitioning.php >> /var/log/centreon/centreon-partitioning.log 2>&1\n")),(0,a.kt)("p",null,"Sample partitioning ",(0,a.kt)("strong",{parentName:"p"},"partitioning-data","_","bin.xml")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<centreon-partitioning>\n    <table name=\"data_bin\" schema=\"centreon_storage\">\n        <activate>1</activate>\n        <column>ctime</column>\n        <type>date</type>\n        <createstmt>\nCREATE TABLE IF NOT EXISTS `data_bin` (\n    `id_metric` int(11) DEFAULT NULL,\n    `ctime` int(11) DEFAULT NULL,\n    `value` float DEFAULT NULL,\n    `status` enum('0','1','2','3','4') DEFAULT NULL,\n    KEY `index_metric` (`id_metric`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n        </createstmt>\n    </table>\n</centreon-partitioning>\n")),(0,a.kt)("h2",{id:"migrating-unpartitioned-tables"},"Migrating unpartitioned tables"),(0,a.kt)("p",null,"The command line performs the following procedure:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Rename existing table (\u2018xxx\u2019 will be \u2018xxx","_","old\u2019)"),(0,a.kt)("li",{parentName:"ul"},"Create an empty partitioned table"),(0,a.kt)("li",{parentName:"ul"},"Migrate data into the partitioned table (with \u2018SELECT INSERT\u2019 statement)")),(0,a.kt)("p",null,"You need to check a few things before executing the command:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Enough space on the MariaDB Server (at least twice the size of the data and indexes)"),(0,a.kt)("li",{parentName:"ul"},"No data in the future (time is used for the partitioning)"),(0,a.kt)("li",{parentName:"ul"},"Enough memory on the database server")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The \u2018SELECT INSERT\u2019 statement will lock the table and maybe your production in\nsome points (for example table migration of \u2018logs\u2019).")),(0,a.kt)("p",null,"To perform table migration, use the ",(0,a.kt)("strong",{parentName:"p"},"-m")," option and specify the\nname of the table to migrate:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"/bin/php /usr/share/centreon/bin/centreon-partitioning.php -m data_bin\n")),(0,a.kt)("p",null,"If the table migration is ok, the old table can be deleted with the following\ncommands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE centreon_storage.data_bin_old;\n")),(0,a.kt)("h2",{id:"monitoring-of-partitioning-operation"},"Monitoring of partitioning operation"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Centreon Database")," Monitoring Connector allows you to check that the number of\npartitions created in advance is sufficient. It is recommended that you install and\ndeploy this Monitoring Connector."),(0,a.kt)("p",null,"It is also possible to view the partitioned tables and the consumption\nassociated with each partition via the ",(0,a.kt)("inlineCode",{parentName:"p"},"Administration > Platform Status >\nDatabases")," menu:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(20191).Z,width:"810",height:"453"})),(0,a.kt)("p",null,"More general information on the state of health of the databases is also\npresent:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(34729).Z,width:"547",height:"253"})))}g.isMDXComponent=!0},34729:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/database-information-d481307f1eab69dfb9d7d6073d1519fa.png"},87694:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/partitioning-configuration-e8446c4d86ac2400e5d98b02b5716136.png"},20191:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/partitioning-state-a40fa5a154534bc982fb536468ce3d47.png"}}]);