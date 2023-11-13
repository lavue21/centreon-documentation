"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[40200],{70744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={id:"debug-snmp-traps-management",title:"Debug SNMP Traps management"},p=void 0,l={unversionedId:"monitoring/passive-monitoring/debug-snmp-traps-management",id:"version-23.10/monitoring/passive-monitoring/debug-snmp-traps-management",title:"Debug SNMP Traps management",description:"Debug SNMP Traps",source:"@site/versioned_docs/version-23.10/monitoring/passive-monitoring/debug-snmp-traps-management.md",sourceDirName:"monitoring/passive-monitoring",slug:"/monitoring/passive-monitoring/debug-snmp-traps-management",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/monitoring/passive-monitoring/debug-snmp-traps-management",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/monitoring/passive-monitoring/debug-snmp-traps-management.md",tags:[],version:"23.10",lastUpdatedAt:1699872045,formattedLastUpdatedAt:"Nov 13, 2023",frontMatter:{id:"debug-snmp-traps-management",title:"Debug SNMP Traps management"},sidebar:"version-23.10/docs",previous:{title:"Monitoring with SNMP Traps",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/monitoring/passive-monitoring/monitoring-with-snmp-traps"},next:{title:"Dynamic Service Management",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/monitoring/passive-monitoring/dsm"}},c={},d=[{value:"Debug SNMP Traps",id:"debug-snmp-traps",level:2},{value:"Sender settings",id:"sender-settings",level:3},{value:"Firewall, routing",id:"firewall-routing",level:3},{value:"Snmptrapd",id:"snmptrapd",level:3},{value:"Centreontrapdforward",id:"centreontrapdforward",level:3},{value:"Centreontrapd",id:"centreontrapd",level:3},{value:"Centreon Gorgone",id:"centreon-gorgone",level:3},{value:"Centreon Engine",id:"centreon-engine",level:3},{value:"Centreon UI",id:"centreon-ui",level:3},{value:"Detailed diagram",id:"detailed-diagram",level:3}],m={toc:d},g="wrapper";function u(e){var{components:t}=e,s=i(e,["components"]);return(0,r.kt)(g,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},m,s),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"debug-snmp-traps"},"Debug SNMP Traps"),(0,r.kt)("p",null,"Several elements are involved in the management of SNMP traps. In case of a problem, it is necessary to check the proper\nfunctioning of its architecture. There are several things to check."),(0,r.kt)("h3",{id:"sender-settings"},"Sender settings"),(0,r.kt)("p",null,"The first point is to check the configuration of the equipment or application that issued the trap that you should\nhave received. Check the IP address or DNS name, the SNMP community and version."),(0,r.kt)("h3",{id:"firewall-routing"},"Firewall, routing"),(0,r.kt)("p",null,"The second point is to check the network firewalls and software permissions and the implementation of a specific routing.\nIf one or more network firewalls are present or if a port translation and/or IP address is in place, make sure the\nconnection between the emitter and the poller is possible. The use of network probes, debug network devices (firewalls\nand routers) or software tcpdump/wireshark on the poller may help you to confirm receipt of data on UDP port 162."),(0,r.kt)("h3",{id:"snmptrapd"},"Snmptrapd"),(0,r.kt)("p",null,"After validation of the connection, check the operating status of snmptrapd process (which must be running) and its\nconfiguration options. It is possible to enable logging of the process. To do this, change the\n",(0,r.kt)("strong",{parentName:"p"},"/etc/sysconfig/snmptrapd"),' file and replace the "OPTIONS" line:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# snmptrapd command line options\n# OPTIONS="-On -d -t -n -p /var/run/snmptrapd.pid"\nOPTIONS="-On -Lf /var/log/snmptrapd.log -p /var/run/snmptrapd.pid"\n')),(0,r.kt)("p",null,"Restart the process to take the changes into account. Thus, for any receiving SNMP traps, these events will be listed\nin the ",(0,r.kt)("strong",{parentName:"p"},"/var/log/snmptrapd.log")," log."),(0,r.kt)("p",null,"In case you filter by SNMP community, check the allowed communities in the configuration file ",(0,r.kt)("strong",{parentName:"p"},"/etc/snmp/snmptrapd.conf"),".\nIf after all these checks, SNMP traps are not included in the log, verify that the process is listening on UDP port 162\nfor remote equipment using the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"netstat -ano | grep 162\n")),(0,r.kt)("p",null,"You must have a result like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"udp        0      0 0.0.0.0:162             0.0.0.0:*                           off (0.00/0/0)\n")),(0,r.kt)("p",null,"If not, change the listening port of the process."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Don't forget to deactivate the logs after your check. Otherwise, the volume of the logs can be very large.")),(0,r.kt)("h3",{id:"centreontrapdforward"},"Centreontrapdforward"),(0,r.kt)("p",null,"Once the snmptrapd process is validated, check the centreontrapdforward process. The first step is to check the access\nparameters of this process, snmptrapd, in the file ",(0,r.kt)("strong",{parentName:"p"},"/etc/snmp/snmptrapd.conf")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check that the snmptrapd service executes centreontrapdforward. To do this, edit the file ",(0,r.kt)("strong",{parentName:"li"},"/etc/snmp/snmptrapd.conf"),"\nand verify that its contains:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'traphandle default su -l centreon -c "/usr/share/centreon/bin/centreontrapdforward"\n')),(0,r.kt)("p",null,"If the path to the file is incorrect, change it and restart the snmptrapd process.\nYou can check the proper functioning of binary centreontrapdforward by checking the configuration part of\n",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/monitoring/passive-monitoring/enable-snmp-traps#centreontrapdforward"},"centreontrapdforward")),"."),(0,r.kt)("h3",{id:"centreontrapd"},"Centreontrapd"),(0,r.kt)("p",null,"The next process to check is Centreontrapd. This daemon is used to connect an SNMP trap to a passive service linked to a\nhost in Centreon using an IP address or DNS from a remote resource.\nTo check its operation, check the centreontrapd configuration settings."),(0,r.kt)("p",null,"You can check the proper functioning of binary centreontrapd by checking the configuration part of\n",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"/centreon-documentation/pr-preview/staging/pr-2806/docs/monitoring/passive-monitoring/enable-snmp-traps#centreontrapd"},"centreontrapd")),"."),(0,r.kt)("p",null,"You can set up debug mode for the ",(0,r.kt)("strong",{parentName:"p"},"centreontrapd")," service. Edit the following file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"vi /etc/sysconfig/centreontrapd\n")),(0,r.kt)("p",null,"Then modify the option ",(0,r.kt)("strong",{parentName:"p"},"severity")," to ",(0,r.kt)("strong",{parentName:"p"},"debug"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'OPTIONS="--logfile=/var/log/centreon/centreontrapd.log --severity=debug --config=/etc/centreon/conf.pm  --config-extra=/etc/centreon/centreontrapd.pm"\n')),(0,r.kt)("p",null,"Then restart ",(0,r.kt)("strong",{parentName:"p"},"centreontrapd"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart centreontrapd\n")),(0,r.kt)("h3",{id:"centreon-gorgone"},"Centreon Gorgone"),(0,r.kt)("p",null,"Gorgoned daemon must be running to forward information from Centreontrapd to the monitoring engine as an external command.\nEnable the debug mode via ",(0,r.kt)("strong",{parentName:"p"},"Administration > Parameters > Debug")," menu and restart the process."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can change the logging level via the ",(0,r.kt)("strong",{parentName:"p"},"Administration > Parameters > Debug")," menu.")),(0,r.kt)("p",null,'If any external commands are sent to the monitoring engine, please check the path to "$cmdFile"" in the ',(0,r.kt)("strong",{parentName:"p"},"/etc/centreon/conf.pm"),"\nconfiguration file. The path should be ",(0,r.kt)("strong",{parentName:"p"},"/var/lib/centreon/centcore.cmd")," for a central Centreon server."),(0,r.kt)("h3",{id:"centreon-engine"},"Centreon Engine"),(0,r.kt)("p",null,"The monitoring engine must receive external commands from the Centreon Gorgone process in order to change the status and output of the\npassive service. Please check the event log. For Centreon Engine, the path is ",(0,r.kt)("strong",{parentName:"p"},"/var/log/centreon-engine/centengine.log"),".\nYou should find lines such as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"[1352838428] EXTERNAL COMMAND: PROCESS_SERVICE_CHECK_RESULT;Centreon-Server;Traps-SNMP;2;Critical problem\n[1352838433] PASSIVE SERVICE CHECK: Centreon-Server;Traps-SNMP;2;Critical problem\n")),(0,r.kt)("p",null,'If only the external command appears, but not its acknowledgement by the scheduler ("PASSIVE SERVICE CHECK"), there may be a system clock synchronizing issue.\nEither the server is late and the command will be processed later, or it is ahead and the command will not be taken into account.'),(0,r.kt)("h3",{id:"centreon-ui"},"Centreon UI"),(0,r.kt)("p",null,'To display the result in Centreon, the monitoring engine must forward information to the broker using the NEB module to\nstore it in the database. Centreon will display a result from the "centreon_storage" database. If you can reach the Centreon web\ninterface, you should see the changed output and possibly the status of the passive service. If any change appears, a\nconnection failure between the monitoring engine and the broker can be the root cause of this issue. Possible problems could be:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The monitoring engine doesn't load the NEB module to connect to the remote broker."),(0,r.kt)("li",{parentName:"ul"},"The NEB module settings are not appropriate for connecting to the remote broker."),(0,r.kt)("li",{parentName:"ul"},"A firewall stops the connection.")),(0,r.kt)("h3",{id:"detailed-diagram"},"Detailed diagram"),(0,r.kt)("p",null,"Below is a detailed diagram of all the processes used and/or present at the reception of an SNMP trap:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(75228).Z,width:"1119",height:"699"})))}u.isMDXComponent=!0},75228:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/kcentreontrapd_schema-97a5f37cafd87843373b4d9247d9a3bd.png"}}]);