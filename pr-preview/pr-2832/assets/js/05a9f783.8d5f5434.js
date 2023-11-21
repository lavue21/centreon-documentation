"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[36777],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),k=a,m=d["".concat(s,".").concat(k)]||d[k]||u[k]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={id:"backup",title:"Backup"},l=void 0,s={unversionedId:"administration/backup",id:"version-23.10/administration/backup",title:"Backup",description:"How it works",source:"@site/versioned_docs/version-23.10/administration/backup.md",sourceDirName:"administration",slug:"/administration/backup",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/administration/backup",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/next/versioned_docs/version-23.10/administration/backup.md",tags:[],version:"23.10",lastUpdatedAt:1700565273,formattedLastUpdatedAt:"Nov 21, 2023",frontMatter:{id:"backup",title:"Backup"},sidebar:"version-23.10/docs",previous:{title:"Database partitioning",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/administration/database-partitioning"},next:{title:"Knowledge Base",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/administration/knowledge-base"}},c={},p=[{value:"How it works",id:"how-it-works",level:2},{value:"Daily execution",id:"daily-execution",level:3},{value:"Backup types",id:"backup-types",level:3},{value:"Database backup",id:"database-backup",level:4},{value:"Configuration files backup",id:"configuration-files-backup",level:4},{value:"Configuration",id:"configuration",level:2},{value:"Restore of Centreon central server",id:"restore-of-centreon-central-server",level:2},{value:"Configurations file restore",id:"configurations-file-restore",level:3},{value:"Databases restore",id:"databases-restore",level:3},{value:"SSH keys restore",id:"ssh-keys-restore",level:3},{value:"Plugins restore",id:"plugins-restore",level:3},{value:"Init script restore",id:"init-script-restore",level:3},{value:"Monitoring agent restore",id:"monitoring-agent-restore",level:3},{value:"Generate Centreon-Engine configuration files within centreon",id:"generate-centreon-engine-configuration-files-within-centreon",level:3},{value:"Graphs rebuild",id:"graphs-rebuild",level:3}],u={toc:p};function d(e){var{components:t}=e,i=o(e,["components"]);return(0,r.kt)("wrapper",a({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",a({},{id:"how-it-works"}),"How it works"),(0,r.kt)("h3",a({},{id:"daily-execution"}),"Daily execution"),(0,r.kt)("p",null,"The backup script is executed on a daily basis with a cron job located in\n",(0,r.kt)("strong",{parentName:"p"},"/etc/cron.d/centreon"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-text"}),"##########################\n# Cron for Centreon-Backup\n30 3 * * * root /usr/share/centreon/cron/centreon-backup.pl >> /var/log/centreon/centreon-backup.log 2&>1\n")),(0,r.kt)("p",null,"Each day at 3:30 AM, backup script checks if backup is planned on current day."),(0,r.kt)("h3",a({},{id:"backup-types"}),"Backup types"),(0,r.kt)("p",null,"There are two types of backup: database and configuration files."),(0,r.kt)("h4",a({},{id:"database-backup"}),"Database backup"),(0,r.kt)("p",null,"Database backup will be processed on two databases: ",(0,r.kt)("strong",{parentName:"p"},"centreon")," and\n",(0,r.kt)("strong",{parentName:"p"},"centreon","_","storage")),(0,r.kt)("p",null,"There are two kinds of database backup:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MySQLdump: mysqldump command is used to backup databases. Be careful,\nmysqldump can take long time on large databases."),(0,r.kt)("li",{parentName:"ul"},"LVM Snapshot  Binary copy of MariaDB files is done. You need to have a\nspecific LV for MariaDB (i.e. /var/lib/mysql) and 1GB of space in its VG.")),(0,r.kt)("p",null,"Backup filename format:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"YYYY-MM-DD-centreon.sql.gz"),(0,r.kt)("li",{parentName:"ul"},"YYYY-MM-DD-centreon","_","storage.sql.gz")),(0,r.kt)("h4",a({},{id:"configuration-files-backup"}),"Configuration files backup"),(0,r.kt)("p",null,"All configuration files of central server can be saved : MariaDB, Apache, PHP,\nSNMP, centreon, centreon-broker)"),(0,r.kt)("p",null,"Backup filename format:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"YYYY-MM-DD-centreon-engine.tar.gz (centreon-engine configuration files)"),(0,r.kt)("li",{parentName:"ul"},"YYYY-MM-DD-central.tar.gz (other configuration files)")),(0,r.kt)("h2",a({},{id:"configuration"}),"Configuration"),(0,r.kt)("p",null,"This part covers the configuration of the backup."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go into the menu: ",(0,r.kt)("strong",{parentName:"li"},"Administration > Parameters > Backup"))),(0,r.kt)("p",null,"The following window is displayed:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(19307).Z,width:"1361",height:"709"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Backup enabled")," Enable/Disable backup"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Backup directory")," Directory where backup will be stored"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Temporary directory")," Directory used during backup process"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Backup database centreon")," Enable backup on centreon database"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Backup database centreon","_","storage")," Enable backup on centreon","_","storage\ndatabase"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Backup type")," Type of backup (MySQLdump or LVM snapshot)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full backup")," Period for full backup"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Partial backup")," Period for partial backup (only available with LVM\nsnapshot backup)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Backup retention")," Retention for backups (in days)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Backup configuration files")," Enable backup of configuration files"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MySQL configuration file path")," Path for MariaDB configuration file"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SCP export enabled")," Enable SCP export of backups"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Remote user")," Remote user for SCP export"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Remote host")," Remote host for SCP export"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Remote directory")," Remote directory for SCP export")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Temporary directory")," can not be a folder of ",(0,r.kt)("strong",{parentName:"p"},"Backup directory"),".")),(0,r.kt)("h2",a({},{id:"restore-of-centreon-central-server"}),"Restore of Centreon central server"),(0,r.kt)("p",null,"Restore process is divided in two main steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Re-install the Centreon platform following the installation documentation.\nDo not forget to upgrade system."),(0,r.kt)("li",{parentName:"ul"},"Restore Centreon-Engines configuration files and Centreon databases")),(0,r.kt)("h3",a({},{id:"configurations-file-restore"}),"Configurations file restore"),(0,r.kt)("p",null,"Before databases restore, you have first to restore configuration files:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-shell"}),"cd /var/cache/centreon/backup/\ntar -xvf YYYY-MM-DD-central.tar.gz\ncd central/etc/centreon/\ncp -r * /etc/centreon/\n")),(0,r.kt)("h3",a({},{id:"databases-restore"}),"Databases restore"),(0,r.kt)("p",null,"Once Centreon server reinstalled (",(0,r.kt)("strong",{parentName:"p"},"same Centreon version"),"), unzip centreon and\ncentreon","_","storage databases backup."),(0,r.kt)("p",null,"Start by recreating databases with following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-sql"}),"DROP DATABASE centreon;\nDROP DATABASE centreon_storage;\nCREATE DATABASE centreon;\nCREATE DATABASE centreon_storage;\n")),(0,r.kt)("p",null,"Then unzip and load databases dumps into newly created databases:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-shell"}),"cd /var/cache/centreon/backup/\ngzip -d YYYY-MM-DD-centreon.sql.gz\nmysql centreon < YYYY-MM-DD-centreon.sql\ngzip -d YYYY-MM-DD-centreon_storage.sql.gz\nmysql centreon_storage < YYYY-MM-DD-centreon_storage.sql\n")),(0,r.kt)("p",null,'This may take a while due to the size of "centreon',"_",'storage" databases.'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Password is stored in configuration files previously restored. For example\n",(0,r.kt)("strong",{parentName:"p"},"$mysql","_","passwd"),' field in file "/etc/centreon/conf.pm".')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'The default configuration does not define any password for mysql root user.\nThat\'s why we can connect to database using only command "mysql".')),(0,r.kt)("h3",a({},{id:"ssh-keys-restore"}),"SSH keys restore"),(0,r.kt)("p",null,"This step is to restore the SSH key linked to user ",(0,r.kt)("strong",{parentName:"p"},"centreon")," and\n",(0,r.kt)("strong",{parentName:"p"},"centreon-engine")," within a distributed environment. Restoration must be done\nmanually. We must therefore initially extract this archive into a temporary\ndirectory and move the files one by one according to their location:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-shell"}),"cd /var/cache/centreon/backup/\ntar -xvf YYYY-MM-DD-centreon-engine.tar.gz\ncd central/ssh/\nmkdir -p /var/spool/centreon/.ssh/\nchmod 700 /var/spool/centreon/.ssh/\ncp -p id_rsa /var/spool/centreon/.ssh/\ncp -p id_rsa.pub /var/spool/centreon/.ssh/\n")),(0,r.kt)("p",null,"Connection test from central to poller:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-shell"}),"su - centreon\nssh <poller_ip_address>\n")),(0,r.kt)("p",null,'Answer "Yes" to the question. This is about adding the poller SSH fingerprint\non the central server.'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You have to do this operations only if you work with a distributed environment.")),(0,r.kt)("h3",a({},{id:"plugins-restore"}),"Plugins restore"),(0,r.kt)("p",null,'Plugins have been backed up in the archive: "YYYY-MM-DD-centreon-engine.tar.gz."\nRestoration must be done manually. We must therefore initially extract this\narchive into a temporary directory and move the files one by one according to\ntheir location.'),(0,r.kt)("p",null,"On each poller, you have to do:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-shell"}),"cd /var/cache/centreon/backup/\ntar -xvf YYYY-MM-DD-centreon-engine.tar.gz\ncd central/plugins\ncp -pRf * /usr/lib64/nagios/plugins/\n")),(0,r.kt)("h3",a({},{id:"init-script-restore"}),"Init script restore"),(0,r.kt)("p",null,"Some checkpoints of Oracle or SAP entail modifying the init script scheduler to\nadd environment variables. If you changed the init script of your scheduler, you\nwill have to restore it. Extract the archive into a temporary directory and move\nthe files according to their location:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-shell"}),"cd /var/backup\ntar -xvf YYYY-MM-DD-centreon-engine.tar.gz\ncd backup\ncp init_d_centengine /etc/init.d/centengine\n")),(0,r.kt)("h3",a({},{id:"monitoring-agent-restore"}),"Monitoring agent restore"),(0,r.kt)("p",null,"In case you're using NRPE or NSCA agents, you have to reinstall and then restore\nconfiguration:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-shell"}),"cd /var/backup\ntar -xvf YYYY-MM-DD-centreon-engine.tar.gz\ncd backup/etc\ncp nrpe.cfg /etc/centreon-engine/\ncp nsca.cfg /etc/centreon-engine/\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You have to do this only if you're using the monitoring agents.")),(0,r.kt)("h3",a({},{id:"generate-centreon-engine-configuration-files-within-centreon"}),"Generate Centreon-Engine configuration files within centreon"),(0,r.kt)("p",null,"Last step is to generate the Centreon-Engine configuration files from\nwithin Centreon UI."),(0,r.kt)("h3",a({},{id:"graphs-rebuild"}),"Graphs rebuild"),(0,r.kt)("p",null,"Once your monitoring platform is restored and all is doing well, you can rebuild\nRRD files in order to restore all performance graphs."),(0,r.kt)("p",null,"To rebuild performance graphics, go to the menu ",(0,r.kt)("inlineCode",{parentName:"p"},"Administration > Parameters >\nData"),". On this page, you must select all the services, click the drop-down\nmenu ",(0,r.kt)("strong",{parentName:"p"},"More actions...")," and select the option ",(0,r.kt)("strong",{parentName:"p"},"Rebuild RRD Database"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Your server is now restored.")))}d.isMDXComponent=!0},19307:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/parameters-backup-04fde21f5d31fc415a844f19b4d66d6e.png"}}]);