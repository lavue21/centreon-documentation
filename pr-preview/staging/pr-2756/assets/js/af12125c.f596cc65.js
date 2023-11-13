"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[91186],{7587:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>m,default:()=>N,frontMatter:()=>p,metadata:()=>d,toc:()=>u});n(67294);var a=n(3905),r=n(51715),i=n(7626);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const p={id:"operatingsystems-windows-nsclient-05-restapi",title:"Windows NSClient API"},m=void 0,d={unversionedId:"integrations/plugin-packs/procedures/operatingsystems-windows-nsclient-05-restapi",id:"integrations/plugin-packs/procedures/operatingsystems-windows-nsclient-05-restapi",title:"Windows NSClient API",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/operatingsystems-windows-nsclient-05-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/operatingsystems-windows-nsclient-05-restapi",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/operatingsystems-windows-nsclient-05-restapi",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/operatingsystems-windows-nsclient-05-restapi.md",tags:[],version:"current",frontMatter:{id:"operatingsystems-windows-nsclient-05-restapi",title:"Windows NSClient API"},sidebar:"pp",previous:{title:"Windows NRPE 0.5",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/operatingsystems-windows-nsclient-05-nrpe"},next:{title:"Windows SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/operatingsystems-windows-snmp"}},c={},u=[{value:"Overview",id:"overview",level:2},{value:"Monitoring Connector assets",id:"monitoring-connector-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Monitored metrics",id:"monitored-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Centreon NSClient++",id:"centreon-nsclient",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"How do I test my configuration through the CLI and what do the main parameters stand for ?",id:"how-do-i-test-my-configuration-through-the-cli-and-what-do-the-main-parameters-stand-for-",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"UNKNOWN: Cannot decode json response: malformed UTF-8 character in JSON string",id:"unknown-cannot-decode-json-response-malformed-utf-8-character-in-json-string",level:4},{value:"&quot;UNKNOWN: 500 Can&#39;t connect to x.x.x.x:8443&quot;",id:"unknown-500-cant-connect-to-xxxx8443",level:4}],k={toc:u},g="wrapper";function N(t){var{components:e}=t,n=s(t,["components"]);return(0,a.kt)(g,l(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){o(t,e,n[e])}))}return t}({},k,n),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"NSClient++ provides its own REST API using the webserver module.\nThis REST API give the possibility to exploit monitoring data from Windows servers\nthrough HTTPS connections."),(0,a.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector assets"),(0,a.kt)("h3",{id:"monitored-objects"},"Monitored objects"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Windows Server OS from 2003 SP2 version"),(0,a.kt)("li",{parentName:"ul"},"Windows Workstation from XP version")),(0,a.kt)("h3",{id:"monitored-metrics"},"Monitored metrics"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"query/Counter-Active-Sessions",label:"query/Counter-Active-Sessions",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Sessions","_","value"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of actived sessions. Unit: Count"))))),(0,a.kt)(i.Z,{value:"query/Counter-Generic",label:"query/Counter-Generic",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Counter","_","value"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of counter found. Unit: Count"))))),(0,a.kt)(i.Z,{value:"query/Cpu",label:"query/Cpu",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"total 5m"),(0,a.kt)("td",{parentName:"tr",align:"left"},"CPU Utilization of Windows serveur over 5 minutes. Unit: Percent")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"total 1m"),(0,a.kt)("td",{parentName:"tr",align:"left"},"CPU Utilization of Windows serveur over 1 minutes. Unit: Percent")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"total 5s"),(0,a.kt)("td",{parentName:"tr",align:"left"},"CPU Utilization of Windows serveur over 5 seconds. Unit: Percent"))))),(0,a.kt)(i.Z,{value:"query/Disk",label:"query/Disk",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"used"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Used and Total Storage allocated. Unit: Bytes"))))),(0,a.kt)(i.Z,{value:"query/Eventlog-Generic",label:"query/Eventlog-Generic",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"problemCount"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of event log found. Unit: Count"))))),(0,a.kt)(i.Z,{value:"query/Files-Generic",label:"query/Files-Generic",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of files found. Unit: Count"))))),(0,a.kt)(i.Z,{value:"query/Logfiles-Generic",label:"query/Logfiles-Generic",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"default","_","lines"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of line that match with tag word found in logfile. Unit: Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"default","_","warnings"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of line that match with warning pattern found in logfile. Unit: Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"default","_","criticals"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of line that match with critical pattern found in logfile. Unit: Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"default","_","unknowns"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of line that match with unknown pattern found in logfile. Unit: Count"))))),(0,a.kt)(i.Z,{value:"query/Memory",label:"query/Memory",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"used"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total usage of memory. Unit: Bytes"))))),(0,a.kt)(i.Z,{value:"query/Swap",label:"query/Swap",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"swap"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total usage of swap memory. Unit: Bytes"))))),(0,a.kt)(i.Z,{value:"query/Sessions",label:"query/Sessions",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"sessions-created"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of created users session. Unit: Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"sessions-disconnected"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of disconnected users session. Unit: Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"sessions-reconnected"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of reconnected users session. Unit: Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"sessions-active"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of active users session. Unit: Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"sessions-disconnected-current"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of current disconnected users session. Unit: Count"))))),(0,a.kt)(i.Z,{value:"query/Updates",label:"query/Updates",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"windows.pending.updates.count"),(0,a.kt)("td",{parentName:"tr",align:"left"})))))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h3",{id:"centreon-nsclient"},"Centreon NSClient++"),(0,a.kt)("p",null,"To monitor an ",(0,a.kt)("em",{parentName:"p"},"Windows Servers")," through NSClient++ API, install the Centreon packaged version\nof the NSClient++ agent. Please follow our ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/getting-started/how-to-guides/centreon-nsclient-tutorial"},"official documentation"),"\nand make sure that the ",(0,a.kt)("strong",{parentName:"p"},"Webserver / RESTApi")," configuration is correct."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon Poller expected to monitor Windows ressources using REST API:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Operatingsystems-Windows-Restapi\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,a.kt)("em",{parentName:"li"},"Windows NSClient API")," Centreon Pack on the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page"))),(0,a.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon package on every Centreon Poller expected to monitor Windows ressources using REST API:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Operatingsystems-Windows-Restapi\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Pack RPM on the Centreon Central server:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-operatingsystems-windows-nsclient-05-restapi\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,a.kt)("em",{parentName:"li"},"Windows NSClient API")," Pack on the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Log into Centreon and add a new Host through ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,a.kt)("li",{parentName:"ul"},"Apply the ",(0,a.kt)("em",{parentName:"li"},"OS-Windows-NSClient-05-Restapi-custom")," template and configure all the mandatory Macros:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPIPORT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Port of the REST API NSclient++ (default: 8443)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPIPROTO"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Protocol used (default: https)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPILEGACYPASSWORD"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Password used (configured in the prerequisites section)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"NSCPRESTAPIEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to the command (eg. a --verbose flag)")))),(0,a.kt)("h2",{id:"how-do-i-test-my-configuration-through-the-cli-and-what-do-the-main-parameters-stand-for-"},"How do I test my configuration through the CLI and what do the main parameters stand for ?"),(0,a.kt)("p",null,"Once the Centreon plugin installed, you can test it logging with the centreon-engine user:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_nsclient_restapi.pl \\\n  --plugin=apps::nsclient::restapi::plugin \\\n  --mode=query --hostname='192.168.1.24' \\\n  --port='8443' \\\n  --proto='https' \\\n  --legacy-password='centreon' \\\n  --command=check_cpu \\\n  --arg=\"warning=time = '5m' and load > 80\" \\\n  --arg=\"critical=time = '5m' and load > 90\" \\\n  --arg=show-all\n\nOK: 5m: 40%, 1m: 42%, 5s: 39% | \n'total 5m'=40%;80;90;; \n'total 1m'=42%;80;90;; \n'total 5s'=39%;80;90;;\n")),(0,a.kt)("p",null,"The command above request the REST API NSclient++ (",(0,a.kt)("inlineCode",{parentName:"p"},"--plugin=apps::nsclient::restapi::plugin"),") on the port 8443 (",(0,a.kt)("inlineCode",{parentName:"p"},"--port='8443'"),").\nIt uses HTTPS protocol (",(0,a.kt)("inlineCode",{parentName:"p"},"--proto='https'"),") and the password created in the ",(0,a.kt)("em",{parentName:"p"},"prerequisites")," section (",(0,a.kt)("inlineCode",{parentName:"p"},"--legacy-password='centreon'"),").\nThis command checks the cpu usage of the server (",(0,a.kt)("inlineCode",{parentName:"p"},"--command=check_cpu"),")."),(0,a.kt)("p",null,"This command will trigger alerts :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'a WARNING alert if the metric "total 5m" (',(0,a.kt)("inlineCode",{parentName:"li"},"warning=time = 5m"),") is superior to 80% (",(0,a.kt)("inlineCode",{parentName:"li"},"load > 80%"),")"),(0,a.kt)("li",{parentName:"ul"},'a CRITICAL alert if the metric "total 5m" (',(0,a.kt)("inlineCode",{parentName:"li"},"warning=time = 5m"),") is superior to 90% (",(0,a.kt)("inlineCode",{parentName:"li"},"load > 90%"),")")),(0,a.kt)("p",null,"You can display all of the modes that come with the Plugin with the command below: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_nsclient_restapi.pl \\\n  --plugin=apps::nsclient::restapi::plugin \\\n  --list-mode\n")),(0,a.kt)("p",null,"The available thresholds as well as all of the options that can be used with this Plugin can be displayed by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_nsclient_restapi.pl \\\n  --plugin=apps::nsclient::restapi::plugin \\\n  --mode=query \\\n  --help\n")),(0,a.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("h4",{id:"unknown-cannot-decode-json-response-malformed-utf-8-character-in-json-string"},"UNKNOWN: Cannot decode json response: malformed UTF-8 character in JSON string"),(0,a.kt)("p",null,"If you receive this message, enable debug messages by adding ",(0,a.kt)("inlineCode",{parentName:"p"},"--debug"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_nsclient_restapi.pl \\\n  --plugin=apps::nsclient::restapi::plugin \\\n  --mode=query \\\n  --hostname='192.168.1.24' \\\n  --port='8443' \\\n  --proto='https' \\\n  --legacy-password='centreon' \\\n  --http-backend=curl  \\\n  --curl-opt=\"CURLOPT_SSL_VERIFYPEER => 0\" \\\n  --timeout=30 \\\n  --command=check_centreon_plugins \\\n  --arg='os::windows::local::plugin' \\\n  --arg='sessions' \\\n  --arg='--filter-sessionname=\"\" \\\n  --config=\"scripts/centreon/conf/qwinsta.xml\" \\\n  --language=\"fr\" \\\n  --debug\n\nUNKNOWN: Cannot decode json response: malformed UTF-8 character in JSON string, at character offset 724 (before \"\\x{fffd}u0090RIPH\\x{fffd}...\") at /usr/lib/centreon/plugins//centreon_nsclient_restapi.pl line 133.\n== Info: About to connect() to 192.168.1.24 port 8443 (#0)\n== Info:   Trying 192.168.1.24...\n== Info: Connected to 192.168.1.24 (192.168.1.24) port 8443 (#0)\n.......\nCannot write statefile '/var/lib/centreon/centplugins/windows_sessions_a181a603769c1f98ad927e7367c7aa51_a181a603769c1f98ad927e7367c7aa51'. \nNeed write/exec permissions on directory.\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The folder ",(0,a.kt)("em",{parentName:"li"},"/var/lib/centreon/centplugins")," doesn't exist on your Windows Server, change the cache directory by using the options ",(0,a.kt)("inlineCode",{parentName:"li"},"--statefile-dir"))),(0,a.kt)("h4",{id:"unknown-500-cant-connect-to-xxxx8443"},'"UNKNOWN: 500 Can\'t connect to x.x.x.x:8443"'),(0,a.kt)("p",null,"To fix this issue, add the option ",(0,a.kt)("inlineCode",{parentName:"p"},"--http-backend=curl")," to the host macro ",(0,a.kt)("em",{parentName:"p"},"NSCPRESTAPIEXTRAOPTIONS"),"."))}N.isMDXComponent=!0}}]);