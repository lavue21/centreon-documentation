"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[61466],{18402:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>c});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={id:"monitoring-guide",title:"Monitoring Centreon-HA"},l=void 0,p={unversionedId:"administration/centreon-ha/monitoring-guide",id:"version-23.10/administration/centreon-ha/monitoring-guide",title:"Monitoring Centreon-HA",description:"Monitoring the cluster processes and resources",source:"@site/versioned_docs/version-23.10/administration/centreon-ha/monitoring-guide.md",sourceDirName:"administration/centreon-ha",slug:"/administration/centreon-ha/monitoring-guide",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/administration/centreon-ha/monitoring-guide",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/administration/centreon-ha/monitoring-guide.md",tags:[],version:"23.10",lastUpdatedAt:1699633150,formattedLastUpdatedAt:"Nov 10, 2023",frontMatter:{id:"monitoring-guide",title:"Monitoring Centreon-HA"},sidebar:"version-23.10/docs",previous:{title:"Cluster acceptance guide",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/administration/centreon-ha/acceptance-guide"},next:{title:"Operating guide",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/administration/centreon-ha/operating-guide"}},d={},c=[{value:"Monitoring the cluster processes and resources",id:"monitoring-the-cluster-processes-and-resources",level:2},{value:"Monitoring the MariaDB Replication",id:"monitoring-the-mariadb-replication",level:2},{value:"Monitoring the Quorum Device",id:"monitoring-the-quorum-device",level:2}],m={toc:c},u="wrapper";function g(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(u,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"monitoring-the-cluster-processes-and-resources"},"Monitoring the cluster processes and resources"),(0,r.kt)("p",null,"First, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/pp/integrations/plugin-packs/procedures/operatingsystems-linux-snmp"},"Linux SNMP Plugin-Pack documentation page")," to install all the required components and monitor the basic system health indicators of both of the central nodes."),(0,r.kt)("p",null,"Then refer to the ",(0,r.kt)("a",{parentName:"p",href:"/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-ha"},"Centreon-HA Plugin-Pack documentation page")," to monitor the clustering services and cluster resources on both of the central nodes."),(0,r.kt)("h2",{id:"monitoring-the-mariadb-replication"},"Monitoring the MariaDB Replication"),(0,r.kt)("p",null,"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"/pp/integrations/plugin-packs/procedures/applications-databases-mysql"},"MySQL/MariaDB Plugin-Pack documentation page")," to install all the required components and monitor the standard MariaDB health indicators of both of the central nodes."),(0,r.kt)("p",null,"The poller's IP address must be a recognized login source for the databases. These ",(0,r.kt)("em",{parentName:"p"},"GRANT")," requests must therefore be run on the primary database and they will be immediately replicated to the secondary node (replace the fields between brackets):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER '<login>'@'<poller ip address>' IDENTIFIED BY '<password>';\nGRANT SELECT on centreon.* TO '<login>'@'<poller ip address>' ;\nGRANT SELECT on centreon_storage.* TO '<login>'@'<poller ip address>' ;\nGRANT REPLICATION CLIENT on *.* TO '<login>'@'<poller ip address>' ;\n")),(0,r.kt)("p",null,"After applying the ",(0,r.kt)("em",{parentName:"p"},"App-DB-MySQL-custom")," host template and setting the correct values for ",(0,r.kt)("em",{parentName:"p"},"PORT"),", ",(0,r.kt)("em",{parentName:"p"},"USERNAME")," and ",(0,r.kt)("em",{parentName:"p"},"PASSWORD")," macros, make sure that all the default services are checked successfully (no ",(0,r.kt)("em",{parentName:"p"},"UNKNOWN")," states)."),(0,r.kt)("p",null,"Then add a new service by browsing to ",(0,r.kt)("strong",{parentName:"p"},"Configuration > Services > Services by host")," and clicking ",(0,r.kt)("strong",{parentName:"p"},"Add"),", and then complete the form according to this table:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:"left"},"MariaDB-Replication")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Linked with Hosts")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Central node")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Template")),(0,r.kt)("td",{parentName:"tr",align:"left"},"App-DB-MySQL-MariaDB-Replication-custom")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"PEERHOST")),(0,r.kt)("td",{parentName:"tr",align:"left"},"IP address of the other central node")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"PEERPORT")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Port of the other central node's MariaDB server (default: 3306)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"PEERUSERNAME")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Login of the other central node's MariaDB server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"PEERPASSWORD")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Password of the other central node's MariaDB server")))),(0,r.kt)("p",null,"Then click ",(0,r.kt)("inlineCode",{parentName:"p"},"Save")," and export and apply your poller's configuration."),(0,r.kt)("p",null,"The output of this service should look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"OK: No problems. Replication is ok.\nConnection Status 'mysql:host=<host ip address>;port=3306' [OK]\nConnection Status 'mysql:host=<peer node ip address>;port=3306' [OK]\nSlave Thread Status [OK]\nPosition Status [OK]\n")),(0,r.kt)("h2",{id:"monitoring-the-quorum-device"},"Monitoring the Quorum Device"),(0,r.kt)("p",null,"First refer to the ",(0,r.kt)("a",{parentName:"p",href:"/pp/integrations/plugin-packs/procedures/operatingsystems-linux-snmp"},"Linux SNMP Plugin-Pack documentation page")," to install all the required components and monitor the basic system health indicators of the server supporting the Quorum Device."),(0,r.kt)("p",null,"Then add a new service by browsing to ",(0,r.kt)("strong",{parentName:"p"},"Configuration > Services > Services by host")," and clicking ",(0,r.kt)("strong",{parentName:"p"},"Add"),", and then complete the form according to this table:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Description")),(0,r.kt)("td",{parentName:"tr",align:"left"},"proc-corosync-qnetd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Linked with Hosts")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Server supporting the Quorum Device")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Template")),(0,r.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Centreon-HA-Process-corosync-qnetd-custom")))))}g.isMDXComponent=!0}}]);