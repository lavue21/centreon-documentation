"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[46198],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36593:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});n(67294);var a=n(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const o={id:"database-partitioning",title:"Database partitioning"},l=void 0,s={unversionedId:"administration/database-partitioning",id:"version-23.10/administration/database-partitioning",title:"Database partitioning",description:"Overview",source:"@site/versioned_docs/version-23.10/administration/database-partitioning.md",sourceDirName:"administration",slug:"/administration/database-partitioning",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/administration/database-partitioning",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/next/versioned_docs/version-23.10/administration/database-partitioning.md",tags:[],version:"23.10",lastUpdatedAt:1700565273,formattedLastUpdatedAt:"Nov 21, 2023",frontMatter:{id:"database-partitioning",title:"Database partitioning"},sidebar:"version-23.10/docs",previous:{title:"Licenses",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/administration/licenses"},next:{title:"Backup",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/administration/backup"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Operation",id:"operation",level:2},{value:"Migrating unpartitioned tables",id:"migrating-unpartitioned-tables",level:2},{value:"Monitoring of partitioning operation",id:"monitoring-of-partitioning-operation",level:2}],u={toc:c};function m(e){var{components:t}=e,o=r(e,["components"]);return(0,a.kt)("wrapper",i({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",i({},{id:"overview"}),"Overview"),(0,a.kt)("p",null,"Some tables in the 'centreon","_","storage' database are partitioned to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Optimize the execution time of several queries,"),(0,a.kt)("li",{parentName:"ul"},"Optimize the purge of data,"),(0,a.kt)("li",{parentName:"ul"},"Minimize the reconstruction of the tables in error during a crash of the\nDBMS.")),(0,a.kt)("p",null,"One partition per day is created for the following tables:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"data","_","bin"),": performance data"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"logs"),": event logs from the supervision engine collection."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"log","_","archive","_","host"),": availability data of hosts."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"log","_","archive","_","service"),": availability data of services.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"There are some limitations:"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Maximum number of partitions (for a MariaDB table) is 1024"),(0,a.kt)("li",{parentName:"ul"},"Foreign keys are not supported"))),(0,a.kt)("p",null,"More details about MariaDB partitioning\n",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",i({parentName:"em"},{href:"https://mariadb.com/kb/en/library/partitioning-overview/"}),"here")),"."),(0,a.kt)("h2",i({},{id:"prerequisites"}),"Prerequisites"),(0,a.kt)("p",null,"The following packages are required:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"php-mysql"),(0,a.kt)("li",{parentName:"ul"},"Pear-DB"),(0,a.kt)("li",{parentName:"ul"},"MariaDB (",">","= 10.1)")),(0,a.kt)("p",null,"MariaDB ",(0,a.kt)("strong",{parentName:"p"},"open","_","files","_","limit")," parameter must be set to 32000 in ","[","server","]","\nsection:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-text"}),"[server]\nopen_files_limit = 32000\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you install Centreon on your RedHat Linux version, you will be\nable to do it manually. Don't forget to restart the mariadb processes if you change\nthis value in my.cnf.")),(0,a.kt)("p",null,"If you use systemd, you need to create the\n",(0,a.kt)("strong",{parentName:"p"},"/etc/systemd/system/mariadb.service.d/mariadb.conf")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-text"}),"[Service]\nLimitNOFILE=32000\n")),(0,a.kt)("p",null,"Then reload systemd and MariaDB:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-shell"}),"systemctl daemon-reload\nsystemctl restart mariadb\n")),(0,a.kt)("h2",i({},{id:"configuration"}),"Configuration"),(0,a.kt)("p",null,"The data retention time is programmed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Administration > Parameters >\nOptions")," menu:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(87694).Z,width:"857",height:"151"})),(0,a.kt)("p",null,"The setting is as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Retention duration for partitioning"),": retention time for partitioned\ntables, by default ",(0,a.kt)("strong",{parentName:"li"},"365 days"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Forward provisioning"),": number of partitions created in advance, by\ndefault ",(0,a.kt)("strong",{parentName:"li"},"10 days"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Backup directory for partitioning"),": partition backup directory, by\ndefault ",(0,a.kt)("strong",{parentName:"li"},"/var/cache/centreon/backup"),".")),(0,a.kt)("h2",i({},{id:"operation"}),"Operation"),(0,a.kt)("p",null,"Partitioning uses XML files in the ",(0,a.kt)("strong",{parentName:"p"},"/usr/share/centreon/config/partition.d/"),"\ndirectory to create the necessary partitions."),(0,a.kt)("p",null,"Every day, a script launched by a cron realizes the creation of missing tables\nor those in advance:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-text"}),"0 4 * * * centreon /bin/php /usr/share/centreon/cron/centreon-partitioning.php >> /var/log/centreon/centreon-partitioning.log 2>&1\n")),(0,a.kt)("p",null,"Sample partitioning ",(0,a.kt)("strong",{parentName:"p"},"partitioning-data","_","bin.xml")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-xml"}),"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<centreon-partitioning>\n    <table name=\"data_bin\" schema=\"centreon_storage\">\n        <activate>1</activate>\n        <column>ctime</column>\n        <type>date</type>\n        <createstmt>\nCREATE TABLE IF NOT EXISTS `data_bin` (\n    `id_metric` int(11) DEFAULT NULL,\n    `ctime` int(11) DEFAULT NULL,\n    `value` float DEFAULT NULL,\n    `status` enum('0','1','2','3','4') DEFAULT NULL,\n    KEY `index_metric` (`id_metric`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n        </createstmt>\n    </table>\n</centreon-partitioning>\n")),(0,a.kt)("h2",i({},{id:"migrating-unpartitioned-tables"}),"Migrating unpartitioned tables"),(0,a.kt)("p",null,"The command line does the following procedure:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Rename existing table (\u2018xxx\u2019 will be \u2018xxx","_","old\u2019)"),(0,a.kt)("li",{parentName:"ul"},"Create an empty partitioned table"),(0,a.kt)("li",{parentName:"ul"},"Migrate data in partitioned table (with \u2018SELECT INSERT\u2019 statement)")),(0,a.kt)("p",null,"You need to make some checks before:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Enough space on MariaDB Server (at least twice the size of the table.\nIndexes and Data)"),(0,a.kt)("li",{parentName:"ul"},"No data in futures (time is used for the partitioning)"),(0,a.kt)("li",{parentName:"ul"},"Enough memory on database server")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The \u2018SELECT INSERT\u2019 statement will lock the table and maybe your production in\nsome points (per example table migration of \u2018logs\u2019).")),(0,a.kt)("p",null,"The migration of the table is done by using the ",(0,a.kt)("strong",{parentName:"p"},"-m")," option and specifying the\nname of the table to migrate:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-shell"}),"/bin/php /usr/share/centreon/bin/centreon-partitioning.php -m data_bin\n")),(0,a.kt)("p",null,"If the table migration is ok, the old table can be deleted with the following\ncommands:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-sql"}),"DROP TABLE centreon_storage.data_bin_old;\n")),(0,a.kt)("h2",i({},{id:"monitoring-of-partitioning-operation"}),"Monitoring of partitioning operation"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Centreon Database")," Monitoring Connector allows you to control that the number of\npartitions created in advance is sufficient. It is recommended to install and\ndeploy this Monitoring Connector."),(0,a.kt)("p",null,"It is also possible to view the partitioned tables and the consumption\nassociated with each partition via the ",(0,a.kt)("inlineCode",{parentName:"p"},"Administration > Platform Status >\nDatabases")," menu:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(20191).Z,width:"810",height:"453"})),(0,a.kt)("p",null,"More general information on the state of health of the databases is also\npresent:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(34729).Z,width:"547",height:"253"})))}m.isMDXComponent=!0},34729:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/database-information-d481307f1eab69dfb9d7d6073d1519fa.png"},87694:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/partitioning-configuration-e8446c4d86ac2400e5d98b02b5716136.png"},20191:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/partitioning-state-a40fa5a154534bc982fb536468ce3d47.png"}}]);