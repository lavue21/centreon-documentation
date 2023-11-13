"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[65275],{57330:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});n(67294);var o=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"troubleshooting-plugins",title:"Troubleshooting Plugin errors"},l=void 0,c={unversionedId:"integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins",id:"integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins",title:"Troubleshooting Plugin errors",description:"Hello community! We're looking for a contributor to help us to translate the",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins.md",sourceDirName:"integrations/plugin-packs/getting-started/how-to-guides",slug:"/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins.md",tags:[],version:"current",frontMatter:{id:"troubleshooting-plugins",title:"Troubleshooting Plugin errors"},sidebar:"pp",previous:{title:"Collecter des OpenMetrics",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/collect-openmetrics"},next:{title:"Tutoriel de configuration de Windows WSMAN",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/windows-winrm-wsman-tutorial"}},u={},p=[{value:"Common problems",id:"common-problems",level:2},{value:"(no output returned from plugin)",id:"no-output-returned-from-plugin",level:3},{value:"UNKNOWN: Cannot write statefile &#39;/var/lib/centreon/centplugins/&lt;cache_file_name&gt;&#39;",id:"unknown-cannot-write-statefile-varlibcentreoncentpluginscache_file_name",level:3},{value:"(Process Timeout)",id:"process-timeout",level:3},{value:"Check output or metrics is not complete",id:"check-output-or-metrics-is-not-complete",level:3},{value:"Troubleshooting SNMP",id:"troubleshooting-snmp",level:2},{value:"SNMPv3 options mapping",id:"snmpv3-options-mapping",level:3},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:3},{value:"UNKNOWN: SNMP GET Request : Can&#39;t get a single value",id:"unknown-snmp-get-request--cant-get-a-single-value",level:3},{value:"UNKNOWN: SNMP Session: Unable to create",id:"unknown-snmp-session-unable-to-create",level:3},{value:"UNKNOWN: Can&#39;t construct cache...",id:"unknown-cant-construct-cache",level:3},{value:"HTTP and API checks",id:"http-and-api-checks",level:2},{value:"UNKNOWN: Cannot decode response (add --debug option to display returned content)",id:"unknown-cannot-decode-response-add---debug-option-to-display-returned-content",level:3},{value:"UNKNOWN: 500 Can&#39;t connect to <code>&lt;ip_address&gt;:&lt;port&gt;</code> (&lt;extra_reason_if_available&gt;)",id:"unknown-500-cant-connect-to-ip_addressport-extra_reason_if_available",level:3},{value:"UNKNOWN: 500 Can&#39;t connect to <code>&lt;ip_address&gt;:&lt;port&gt;</code> (Connection refused)",id:"unknown-500-cant-connect-to-ip_addressport-connection-refused",level:4},{value:"UNKNOWN: 500 Can&#39;t connect to <code>&lt;ip_address&gt;:&lt;port&gt;</code> (Timeout)",id:"unknown-500-cant-connect-to-ip_addressport-timeout",level:4},{value:"UNKNOWN: 500 Can&#39;t connect to <code>&lt;ip_address&gt;:&lt;port&gt;</code> (<code>&lt;SSL Error&gt;</code>)",id:"unknown-500-cant-connect-to-ip_addressport-ssl-error",level:4},{value:"SSH and CLI checks",id:"ssh-and-cli-checks",level:2},{value:"UNKNOWN: Command error: <code>&lt;interpreter&gt;</code>: <code>&lt;command_name&gt;</code>: command not found",id:"unknown-command-error-interpreter-command_name-command-not-found",level:3},{value:"UNKNOWN: Command error: Host key verification failed.",id:"unknown-command-error-host-key-verification-failed",level:3},{value:"NRPE checks",id:"nrpe-checks",level:2},{value:"CHECK_NRPE STATE (CRITICAL|UNKNOWN): Socket timeout after 10 seconds",id:"check_nrpe-state-criticalunknown-socket-timeout-after-10-seconds",level:3},{value:"connect to address x.x.x.x port 5666: Connection refused",id:"connect-to-address-xxxx-port-5666-connection-refused",level:3},{value:"NRPE: Command &lt;a_command&gt; not defined",id:"nrpe-command-a_command-not-defined",level:3},{value:"NRPE: unable to read output",id:"nrpe-unable-to-read-output",level:3}],d={toc:p},h="wrapper";function m(e){var{components:t}=e,n=a(e,["components"]);return(0,o.kt)(h,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Hello community! We're looking for a contributor to help us to translate the\ncontent in french and provide a sample execution command. If it's you, let us\nknow by offering a PR or pinging us on ",(0,o.kt)("a",{parentName:"p",href:"https://centreon.slack.com"},"slack"),"\nWhen using Plugins and deploying a new monitoring probe, some errors might show up. ")),(0,o.kt)("p",null,"Most of the time, the cause of these failures is a misconfiguration or a third-party\ndevice. This section compiles the most common errors you may face and some hints to\nidentify the root cause."),(0,o.kt)("p",null,'Remember that most of the Plugin Packs have documentation and, more specifically,\n"Prerequisites" and "Host Configuration" sections to help you avoid some of the\nmost common pitfalls.'),(0,o.kt)("p",null,"The Centreon Pollers run a scheduler responsible for planning and executing checks.\nTo troubleshoot a Plugin, you must always:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Copy/Paste the command from the Centreon Web UI to troubleshoot it from the CLI"),(0,o.kt)("li",{parentName:"ul"},"Use the centreon-engine user to execute the Plugin manually (and never root!).")),(0,o.kt)("h2",{id:"common-problems"},"Common problems"),(0,o.kt)("h3",{id:"no-output-returned-from-plugin"},"(no output returned from plugin)"),(0,o.kt)("p",null,"When getting this error, please focus on the command line executed and ensure that\nthe binary it uses exists or doesn't contain a typo."),(0,o.kt)("p",null,"On RPM-based systems, you can use the following command to identify what's the\npackage is providing the missing binary: ",(0,o.kt)("inlineCode",{parentName:"p"},'yum whatprovides "*/the_binary_name"')),(0,o.kt)("h3",{id:"unknown-cannot-write-statefile-varlibcentreoncentpluginscache_file_name"},"UNKNOWN: Cannot write statefile '/var/lib/centreon/centplugins/<cache_file_name>'"),(0,o.kt)("p",null,"The most common cause is inappropriate rights on the cache directory (",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/centreon/centplugins"),")\nor the cache file itself.  It can also be the result of an inconsistent installation\nor simply that the directory doesn't exist. "),(0,o.kt)("p",null,"Check that the directory exists and has the appropriate rights using the stat utility:\n",(0,o.kt)("inlineCode",{parentName:"p"},"stat /var/lib/centreon/centplugins"),". The expected result is: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"File: '/var/lib/centreon/centplugins'\n[...]\nAccess: (0775/drwxrwxr-x)  Uid: (  998/centreon)   Gid: (  997/centreon)`\n[...]\n")),(0,o.kt)("p",null,"If directory rights are ok, check also the rights of the cache file:\n",(0,o.kt)("inlineCode",{parentName:"p"},"stat /var/lib/centreon/centplugins/<cache_file_name>"),". The expected result is: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"File: '/var/lib/centreon/centplugins/<cache_file_name>'\n[...]\nAccess: (0664/-rw-rw-r--)  Uid: (  994/centreon-engine)   Gid: (  991/centreon-engine)\n[...]\n")),(0,o.kt)("h3",{id:"process-timeout"},"(Process Timeout)"),(0,o.kt)("p",null,"This error means that a command reached the timeout defined at the engine's level.\nCentreon-engine has its own timeout allowing him to kill\na Plugin execution as soon as it overrides a given number of seconds. It prevents\ninfinite Plugin execution. "),(0,o.kt)("p",null,"By default, this value is 60 seconds for Services and 10 seconds for Hosts."),(0,o.kt)("p",null,"Frequently, this error is a consequence of a misconfiguration or a lack of a timeout\nconfigured at the Plugin level. "),(0,o.kt)("p",null,"In some cases, it can be normal just because of the complexity of the check or the\nprocessing time on the monitoring object side. To measure the time required to finish\na check, copy/paste the command-line and execute it through CLI using centreon-engine users. "),(0,o.kt)("p",null,"You can modify the engine timeout value in the ",(0,o.kt)("strong",{parentName:"p"},"Configuration > Pollers > Engine Configuration")," menu.\nTo apply it, export the Poller's configuration and ",(0,o.kt)("strong",{parentName:"p"},"restart")," it.  "),(0,o.kt)("h3",{id:"check-output-or-metrics-is-not-complete"},"Check output or metrics is not complete"),(0,o.kt)("p",null,"When a Plugin execution looks partial or incomplete, it usually means that there's\na bug somewhere in the code. If this is the case, you will likely see some ",(0,o.kt)("em",{parentName:"p"},"stderr"),"\nlines printed when executing the check through the CLI. "),(0,o.kt)("p",null,"A message similar to the one below confirms that this is a bug: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'Use of uninitialized value $options{"value"} in pattern match (m//) and critical return\n')),(0,o.kt)("p",null,"In this situation, reach us on ",(0,o.kt)("a",{parentName:"p",href:"https://centreon.github.io"},"slack")," or, even better,\ntrack an issue within the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/centreon/centreon-plugins/issues"},"centreon-plugins"),"\nGithub repository so we can patch it. "),(0,o.kt)("h2",{id:"troubleshooting-snmp"},"Troubleshooting SNMP"),(0,o.kt)("h3",{id:"snmpv3-options-mapping"},"SNMPv3 options mapping"),(0,o.kt)("p",null,'To set up SNMPv3, Centreon is advising first to try to query your device by using the "snmpwalk"\ncommand line and options, then using the following mapping table to make it work with the centreon-plugin.'),(0,o.kt)("p",null,"Configure those extra SNMP options in the host/host template configuration in the SNMPEXTRAOPTIONS macro. "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"snmpwalk"),(0,o.kt)("th",{parentName:"tr",align:"left"},"centreon-plugins"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"-a"),(0,o.kt)("td",{parentName:"tr",align:"left"},"--authprotocol")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"-A"),(0,o.kt)("td",{parentName:"tr",align:"left"},"--authpassphrase")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"-u"),(0,o.kt)("td",{parentName:"tr",align:"left"},"--snmp-username")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"-x"),(0,o.kt)("td",{parentName:"tr",align:"left"},"--privprotocol")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"-X"),(0,o.kt)("td",{parentName:"tr",align:"left"},"--privpassphrase")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"-l"),(0,o.kt)("td",{parentName:"tr",align:"left"},"not needed (automatic)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"-e"),(0,o.kt)("td",{parentName:"tr",align:"left"},"--securityengineid")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"-E"),(0,o.kt)("td",{parentName:"tr",align:"left"},"--contextengineid")))),(0,o.kt)("h3",{id:"unknown-snmp-get-request--timeout"},"UNKNOWN: SNMP GET Request : Timeout"),(0,o.kt)("p",null,"Often, a timeout comes from: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An SNMP Agent or Centreon Host misconfiguration, like a wrong SNMP port, version,\nor community string"),(0,o.kt)("li",{parentName:"ul"},"Third-party equipment (e.g., a firewall) blocking the communication between the\nPoller and the remote device")),(0,o.kt)("p",null,"To go further, troubleshoot using an SNMP utility to mimic the Plugin behavior and\nsee if you get a timeout. On Linux, the ",(0,o.kt)("inlineCode",{parentName:"p"},"net-snmp")," package provides a ",(0,o.kt)("inlineCode",{parentName:"p"},"snmpwalk")," binary.\nHere is a sample command: "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"snmpwalk -v <1/2c> -c <community-string> <IP_ADDR> .1")),(0,o.kt)("h3",{id:"unknown-snmp-get-request--cant-get-a-single-value"},"UNKNOWN: SNMP GET Request : Can't get a single value"),(0,o.kt)("p",null,"SNMP Plugins request one or several OIDs from the target devices' MIBS. When it\ndoesn't obtain a value for one of these OIDs, it returns an UNKNOWN state to warn\nthe user. "),(0,o.kt)("p",null,"Frequently, the device doesn't ship the MIB or one of the OIDs the Plugin utilizes.\nIn other words, the Plugin used is not suitable for this device.  "),(0,o.kt)("h3",{id:"unknown-snmp-session-unable-to-create"},"UNKNOWN: SNMP Session: Unable to create"),(0,o.kt)("p",null,"This error is specific to SNMP v3 checks. It means that the credentials provided\nare either wrong or incomplete. "),(0,o.kt)("p",null,"It can also happen when performing SNMPv3 requests on a device or server where the\nSNMP process is not running, or the port is not listening. "),(0,o.kt)("h3",{id:"unknown-cant-construct-cache"},"UNKNOWN: Can't construct cache..."),(0,o.kt)("p",null,"To check the storage attached to a device or system, Centreon Plugins use standard\nOIDs. From time to time, only some of these are implemented by the manufacturer."),(0,o.kt)("p",null,"You should look for available OIDs using the ",(0,o.kt)("inlineCode",{parentName:"p"},"snmpwalk")," utility and modify the check\ncommand to use the available ones."),(0,o.kt)("p",null,"The interfaces' bandwidth and status monitoring is a textbook case: the Plugin default\nbehavior uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"ifName")," OID to build its cache. If it cannot find it then you\nrun into this error. "),(0,o.kt)("p",null,"For interfaces and storage checks, options exist to ask the probe to use\nan other OID (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"--oid-filter='ifDesc' --oid-display='ifDesc'"),")."),(0,o.kt)("h2",{id:"http-and-api-checks"},"HTTP and API checks"),(0,o.kt)("h3",{id:"unknown-cannot-decode-response-add---debug-option-to-display-returned-content"},"UNKNOWN: Cannot decode response (add --debug option to display returned content)"),(0,o.kt)("p",null,"Plugins perform API calls and decode the content obtained from the API to use it as\nstatus, message, or metrics. This way, it expects a specific data formatting depending\non what the API supports (XML or JSON)."),(0,o.kt)("p",null,"If the API doesn't send the data a Plugin expects, the library it uses will fail\nto decode the data."),(0,o.kt)("p",null,"The most common cause is that a Proxy blocks the primary query and returns an error\nmessage that is not in the expected format. You can specify the address and the port\nof a proxy through the ",(0,o.kt)("inlineCode",{parentName:"p"},"--proxyurl=<proto>://<address>:<port>")," option."),(0,o.kt)("p",null,"It may also happen when the API returns an error instead of the expected data structure.\nYou may want to dig deeper into this by adding the ",(0,o.kt)("inlineCode",{parentName:"p"},"--debug")," flag to your command line\nto get more information on the query and data received."),(0,o.kt)("h3",{id:"unknown-500-cant-connect-to-ip_addressport-extra_reason_if_available"},"UNKNOWN: 500 Can't connect to ",(0,o.kt)("inlineCode",{parentName:"h3"},"<ip_address>:<port>")," (<extra_reason_if_available>)"),(0,o.kt)("p",null,"When grabbing metrics or statuses from an API, multiple issues can show up because\nof proxies, remote devices' certificates, or simply the check configuration."),(0,o.kt)("p",null,"This section focuses on the most common error reasons and shares some tips to solve them. "),(0,o.kt)("p",null,"An important thing to know is that Plugins can rely on several ",(0,o.kt)("em",{parentName:"p"},"backends")," to perform\nHTTP requests. You can specify which backend you want to use to perform checks using\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"--http-backend")," option. The default value is ",(0,o.kt)("inlineCode",{parentName:"p"},"lwp"),", though ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," is also\navailable and generally easier to debug."),(0,o.kt)("p",null,"In the same way, if you use a proxy, you can tell the Plugin how to go through\nby adding the ",(0,o.kt)("inlineCode",{parentName:"p"},"--proxyurl")," option to your command line. The expecte format is:\n",(0,o.kt)("inlineCode",{parentName:"p"},"--proxyurl='<proto>://<proxy_addr>:<proxy_port>"),". "),(0,o.kt)("h4",{id:"unknown-500-cant-connect-to-ip_addressport-connection-refused"},"UNKNOWN: 500 Can't connect to ",(0,o.kt)("inlineCode",{parentName:"h4"},"<ip_address>:<port>")," (Connection refused)"),(0,o.kt)("p",null,"This issue generally means that the port or protocol used by the Plugin is incorrect,\nmisconfigured, or unsupported. "),(0,o.kt)("p",null,"In this situation, at the Host configuration level, double-check that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the port used is correct, primarily if you use a non-standard port for security reasons"),(0,o.kt)("li",{parentName:"ul"},"the protocol used (http or https) matches the one configured on the API-side")),(0,o.kt)("p",null,"Each Plugin using HTTP backends does have ",(0,o.kt)("inlineCode",{parentName:"p"},"--proto")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--port")," options allowing\nyou to specify these values."),(0,o.kt)("h4",{id:"unknown-500-cant-connect-to-ip_addressport-timeout"},"UNKNOWN: 500 Can't connect to ",(0,o.kt)("inlineCode",{parentName:"h4"},"<ip_address>:<port>")," (Timeout)"),(0,o.kt)("p",null,"The timeout error occurs when the Plugin doesn't succeed in contacting the server\nor when a third-party device is blocking or filtering the client's request. "),(0,o.kt)("h4",{id:"unknown-500-cant-connect-to-ip_addressport-ssl-error"},"UNKNOWN: 500 Can't connect to ",(0,o.kt)("inlineCode",{parentName:"h4"},"<ip_address>:<port>")," (",(0,o.kt)("inlineCode",{parentName:"h4"},"<SSL Error>"),")"),(0,o.kt)("p",null,"SSL Errors indicate that the Plugin has some trouble establishing a secure connection\nto get the monitoring information."),(0,o.kt)("p",null,"The primary cause could be the certificate used. In this case, the best practice\nwould be either to: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"renew the certificate when it expired "),(0,o.kt)("li",{parentName:"ul"},"sign the remote certificate officially"),(0,o.kt)("li",{parentName:"ul"},"deploy the certificate locally so the Plugin can recognize it")),(0,o.kt)("p",null,"Regardless of what HTTP backend you're using, it's possible to ignore SSL certificate\nerrors by adding specific flags: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"lwp backend: ",(0,o.kt)("inlineCode",{parentName:"li"},"--ssl-opt='--ssl-opt=\"SSL_verify_mode => SSL_VERIFY_NONE'")),(0,o.kt)("li",{parentName:"ul"},"curl backend: ",(0,o.kt)("inlineCode",{parentName:"li"},"--curl-opt='CURLOPT_SSL_VERIFYPEER => 0'"))),(0,o.kt)("p",null,"Sometimes, the remote host doesn't support negotiation about the SSL implementation,\nso you must specify explicitly which one the Plugin has to use thanks to the ",(0,o.kt)("inlineCode",{parentName:"p"},"--ssl"),"\noption (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"--ssl='tlsv1'"),"). Refer to the manufacturer or software publisher documentation."),(0,o.kt)("h2",{id:"ssh-and-cli-checks"},"SSH and CLI checks"),(0,o.kt)("h3",{id:"unknown-command-error-interpreter-command_name-command-not-found"},"UNKNOWN: Command error: ",(0,o.kt)("inlineCode",{parentName:"h3"},"<interpreter>"),": ",(0,o.kt)("inlineCode",{parentName:"h3"},"<command_name>"),": command not found"),(0,o.kt)("p",null,"This error warns that the Plugin is not able to execute the ",(0,o.kt)("inlineCode",{parentName:"p"},"<command_name>")," because it\ndoesn't exist in PATH or is not installed."),(0,o.kt)("p",null,"Depending on how the check is performed (locally or remotely), make sure that the\nutility the Plugin uses is available to your monitoring user. "),(0,o.kt)("h3",{id:"unknown-command-error-host-key-verification-failed"},"UNKNOWN: Command error: Host key verification failed."),(0,o.kt)("p",null,"SSH-Based checks can use several ",(0,o.kt)("em",{parentName:"p"},"backends"),". Whether you use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"plink")," backend,\nyou have to manually validate the remote system fingerprint from the ",(0,o.kt)("em",{parentName:"p"},"centreon-engine"),"\nuser on the monitoring Poller. If you don't do that, the Plugin will hang and cause a timeout\nbecause it cannot accept the fingerprint for obvious security reasons."),(0,o.kt)("h2",{id:"nrpe-checks"},"NRPE checks"),(0,o.kt)("h3",{id:"check_nrpe-state-criticalunknown-socket-timeout-after-10-seconds"},"CHECK_NRPE STATE (CRITICAL|UNKNOWN): Socket timeout after 10 seconds"),(0,o.kt)("p",null,"Here are the questions you may want to ask yourself when obtaining this result: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Does my IP Address and port parameters are correct? "),(0,o.kt)("li",{parentName:"ul"},"Is the NRPE daemon running on the remote system?"),(0,o.kt)("li",{parentName:"ul"},"Is there any firewall or security policy that might block the request? ")),(0,o.kt)("h3",{id:"connect-to-address-xxxx-port-5666-connection-refused"},"connect to address x.x.x.x port 5666: Connection refused"),(0,o.kt)("p",null,"This error means that the client made a successful connection to the remote host and port\nbut the server refused the connection."),(0,o.kt)("p",null,"Frequently, this is because the client is trying to connect to a server from an\nunauthorized IP. "),(0,o.kt)("p",null,"Check that the ",(0,o.kt)("inlineCode",{parentName:"p"},"allowed_hosts")," directive defined in the NRPE Server config file\nallows your monitoring server to send remote command execution. "),(0,o.kt)("p",null,"Do not forget to restart your NRPE daemon to update the configuration."),(0,o.kt)("h3",{id:"nrpe-command-a_command-not-defined"},"NRPE: Command <a_command> not defined"),(0,o.kt)("p",null,"The NRPE Server throws this error when the client asks to run a command it doesn't understand. "),(0,o.kt)("p",null,"It might highlight either a configuration issue on the server-side or a typo in the\ncommand line on the client-side. "),(0,o.kt)("p",null,"Check the NRPE Server configuration to ensure that the command exists: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"[a_command]=/path/to/a/command --option1='<value_or_macro>' --optionN='<value_or_macro>'\n")),(0,o.kt)("p",null,"Do not forget to restart your NRPE daemon to update the configuration."),(0,o.kt)("h3",{id:"nrpe-unable-to-read-output"},"NRPE: unable to read output"),(0,o.kt)("p",null,"This error can occur when the NRPE server fails to execute the command for some reason.\nIn this situation, connect to the server running the NRPE server and execute the\ncommand manually with the NRPE user."),(0,o.kt)("p",null,"Most of the time, it's due to unsufficient rights (missing execution bit or wrong\nowner) or a missing dependency at code level."))}m.isMDXComponent=!0}}]);