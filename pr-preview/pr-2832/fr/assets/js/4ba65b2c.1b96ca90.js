"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[66178],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>u});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),s=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=s(r),u=n,f=m["".concat(p,".").concat(u)]||m[u]||c[u]||l;return r?a.createElement(f,i(i({ref:e},d),{},{components:r})):a.createElement(f,i({ref:e},d))}));function u(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},67245:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});r(67294);var a=r(3905);function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},n.apply(this,arguments)}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}const i={id:"applications-databases-mysql",title:"MySQL/MariaDB"},o=void 0,p={unversionedId:"integrations/plugin-packs/procedures/applications-databases-mysql",id:"integrations/plugin-packs/procedures/applications-databases-mysql",title:"MySQL/MariaDB",description:"Prerequisites",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-databases-mysql.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-databases-mysql",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/applications-databases-mysql",draft:!1,tags:[],version:"current",frontMatter:{id:"applications-databases-mysql",title:"MySQL/MariaDB"},sidebar:"pp",previous:{title:"MongoDB",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/applications-databases-mongodb"},next:{title:"Oracle Database",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/applications-databases-oracle"}},s={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Centreon Plugin",id:"centreon-plugin",level:3},{value:"Creating a database user",id:"creating-a-database-user",level:3},{value:"MariaDB, perl-dbi, perl-dbd-mysql",id:"mariadb-perl-dbi-perl-dbd-mysql",level:3},{value:"Centreon Configuration",id:"centreon-configuration",level:2},{value:"Create a new MariaDB server",id:"create-a-new-mariadb-server",level:3},{value:"Host Macro Configuration",id:"host-macro-configuration",level:3}],c={toc:d};function m(t){var{components:e}=t,r=l(t,["components"]);return(0,a.kt)("wrapper",n({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",n({},{id:"prerequisites"}),"Prerequisites"),(0,a.kt)("p",null,"This chapter describes the prerequisites installation needed by plugins to run."),(0,a.kt)("h3",n({},{id:"centreon-plugin"}),"Centreon Plugin"),(0,a.kt)("p",null,"Install this plugin on each needed poller:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-shell"}),"yum install centreon-plugin-Applications-Databases-Mysql\n")),(0,a.kt)("h3",n({},{id:"creating-a-database-user"}),"Creating a database user"),(0,a.kt)("p",null,"In order to be able to collect the needed information from the database a\ndatabase user with specific privileges is required:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-shell"}),"grant usage on *.* to 'centreon'@'pollerip' identified by 'password'\n")),(0,a.kt)("h3",n({},{id:"mariadb-perl-dbi-perl-dbd-mysql"}),"MariaDB, perl-dbi, perl-dbd-mysql"),(0,a.kt)("p",null,"All prerequisites needed to run mysql plugins are packaged and installed with\nCentreon Entreprise Server: perl-DBI , perl-DBD-mysql , mysql."),(0,a.kt)("h2",n({},{id:"centreon-configuration"}),"Centreon Configuration"),(0,a.kt)("h3",n({},{id:"create-a-new-mariadb-server"}),"Create a new MariaDB server"),(0,a.kt)("p",null,'Go to "Configuration ',">",' Hosts" and click "Add". Then, fill the form as shown by\nthe following table :'),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:"left"}),"Fields"),(0,a.kt)("th",n({parentName:"tr"},{align:"left"}),"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"left"}),"Host name"),(0,a.kt)("td",n({parentName:"tr"},{align:"left"}),(0,a.kt)("em",{parentName:"td"},"Name of the host"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"left"}),"Alias"),(0,a.kt)("td",n({parentName:"tr"},{align:"left"}),(0,a.kt)("em",{parentName:"td"},"Host description"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"left"}),"IP"),(0,a.kt)("td",n({parentName:"tr"},{align:"left"}),(0,a.kt)("em",{parentName:"td"},"Host IP Address"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"left"}),"Monitored from"),(0,a.kt)("td",n({parentName:"tr"},{align:"left"}),(0,a.kt)("em",{parentName:"td"},"Monitoring Poller to use"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"left"}),"Host Multiple Templates"),(0,a.kt)("td",n({parentName:"tr"},{align:"left"}),"App-DB-MySQL-custom")))),(0,a.kt)("p",null,'Click "Save" button.'),(0,a.kt)("p",null,"Those services were automatically created for this host:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:"left"}),"Service"),(0,a.kt)("th",n({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"left"}),"Ping"),(0,a.kt)("td",n({parentName:"tr"},{align:"left"}),"Monitor host response time")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"left"}),"Connection-Time"),(0,a.kt)("td",n({parentName:"tr"},{align:"left"}),"Monitor to the connection time to the server")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"left"}),"Connections-Number"),(0,a.kt)("td",n({parentName:"tr"},{align:"left"}),"Monitor the number of open connections")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"left"}),"Database-Size"),(0,a.kt)("td",n({parentName:"tr"},{align:"left"}),"Monitor all the databases size")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"left"}),"Innodb-Bufferpool"),(0,a.kt)("td",n({parentName:"tr"},{align:"left"}),"Monitor the InnoDB buffer pool hitrate")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"left"}),"Myisam-Keycache"),(0,a.kt)("td",n({parentName:"tr"},{align:"left"}),"Monitor the MyISAM key cache hitrate")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"left"}),"Open-Files"),(0,a.kt)("td",n({parentName:"tr"},{align:"left"}),"percentage of openned files")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"left"}),"Queries"),(0,a.kt)("td",n({parentName:"tr"},{align:"left"}),"Monitor the average of queries per second")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"left"}),"Slowqueries"),(0,a.kt)("td",n({parentName:"tr"},{align:"left"}),"Monitor the number of slow queries")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:"left"}),"Optionnal Service"),(0,a.kt)("th",n({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"left"}),"Uptime"),(0,a.kt)("td",n({parentName:"tr"},{align:"left"}),"Monitor the server's uptime")))),(0,a.kt)("h3",n({},{id:"host-macro-configuration"}),"Host Macro Configuration"),(0,a.kt)("p",null,"The following macros must be configured on host:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:"left"}),"Macro"),(0,a.kt)("th",n({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",n({parentName:"tr"},{align:"left"}),"Default value"),(0,a.kt)("th",n({parentName:"tr"},{align:"left"}),"Example"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"left"}),"MYSQLPORT"),(0,a.kt)("td",n({parentName:"tr"},{align:"left"}),"Port used to connect to the DB server"),(0,a.kt)("td",n({parentName:"tr"},{align:"left"}),"MYSQLPORT"),(0,a.kt)("td",n({parentName:"tr"},{align:"left"}),"3306")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"left"}),"MYSQLUSERNAME"),(0,a.kt)("td",n({parentName:"tr"},{align:"left"}),"the mysql db user"),(0,a.kt)("td",n({parentName:"tr"},{align:"left"}),"MYSQLUSERNAME"),(0,a.kt)("td",n({parentName:"tr"},{align:"left"}),"root")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"left"}),"MYSQLPASSWORD"),(0,a.kt)("td",n({parentName:"tr"},{align:"left"}),"the mysql db user's password"),(0,a.kt)("td",n({parentName:"tr"},{align:"left"}),"MYSQLPASSWORD"),(0,a.kt)("td",n({parentName:"tr"},{align:"left"}),"HuGr6834")))))}m.isMDXComponent=!0}}]);