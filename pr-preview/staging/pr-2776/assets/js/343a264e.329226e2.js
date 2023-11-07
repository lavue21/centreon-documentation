"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[940],{31258:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>u,default:()=>h,frontMatter:()=>p,metadata:()=>c,toc:()=>k});n(67294);var a=n(3905),r=n(51715),o=n(7626);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const p={id:"applications-antivirus-kaspersky-snmp",title:"Kaspersky"},u=void 0,c={unversionedId:"integrations/plugin-packs/procedures/applications-antivirus-kaspersky-snmp",id:"integrations/plugin-packs/procedures/applications-antivirus-kaspersky-snmp",title:"Kaspersky",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/applications-antivirus-kaspersky-snmp.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-antivirus-kaspersky-snmp",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/applications-antivirus-kaspersky-snmp",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/applications-antivirus-kaspersky-snmp.md",tags:[],version:"current",frontMatter:{id:"applications-antivirus-kaspersky-snmp",title:"Kaspersky"},sidebar:"pp",previous:{title:"Kafka",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/applications-kafka-jmx"},next:{title:"Keepalived SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/applications-keepalived-snmp"}},m={},k=[{value:"Overview",id:"overview",level:2},{value:"Monitoring Connector assets",id:"monitoring-connector-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Kasperky Security Center configuration",id:"kasperky-security-center-configuration",level:3},{value:"Network flow",id:"network-flow",level:3},{value:"Setup",id:"setup",level:2},{value:"Host configuration",id:"host-configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How do I run my plugin through the CLI and what do the main parameters stand for?",id:"how-do-i-run-my-plugin-through-the-cli-and-what-do-the-main-parameters-stand-for",level:3},{value:"UNKNOWN: SNMP GET Request : Timeout",id:"unknown-snmp-get-request--timeout",level:3},{value:"UNKNOWN: SNMP GET Request : Cant get a single value.",id:"unknown-snmp-get-request--cant-get-a-single-value",level:3}],d={toc:k},g="wrapper";function h(t){var{components:e}=t,n=s(t,["components"]);return(0,a.kt)(g,l(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){i(t,e,n[e])}))}return t}({},d,n),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Kasperky is a cybersecurity and anti-virus provider founded in 1997 by Eugene\nKaspersky, Natalya Kaspersky and Alexey De-Monderik."),(0,a.kt)("p",null,"The Centreon Monitoring Connector ",(0,a.kt)("em",{parentName:"p"},"Kaspersky")," aims to collect the condition of the\nAdministration Server and managed products with the SNMP protocol."),(0,a.kt)("h2",{id:"monitoring-connector-assets"},"Monitoring Connector assets"),(0,a.kt)("h3",{id:"monitored-objects"},"Monitored objects"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Kaspersky Security Center")),(0,a.kt)("h3",{id:"collected-metrics"},"Collected Metrics"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Deployment",label:"Deployment",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"hosts.antivirus.installed.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of successful remote installations")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"hosts.antivirus.install.failed.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of failed remote installations")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"hosts.expiring.licence.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of hosts with expiring licence")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"hosts.expired.licence.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of hosts with expired licence"))))),(0,a.kt)(o.Z,{value:"Events",label:"Events",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"events.critical.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of critical events"))))),(0,a.kt)(o.Z,{value:"Logical-Network",label:"Logical-Network",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"hosts.new.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of new hosts")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"groups.total.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of groups on the server")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"hosts.notconnected.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of hosts that have not connected for a long time")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"hosts.uncontrolled.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of uncontrolled hosts"))))),(0,a.kt)(o.Z,{value:"Protection",label:"Protection",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"protection.hosts.antivirus.notrunning.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of hosts without a running antivirus")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"protection.hosts.realtime.notrunning.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of hosts without a running real time protection")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"protection.hosts.realtime.unacceptable.level.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of hosts with unacceptable protection level")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"protection.hosts.uncured.objects.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of hosts with uncured objects")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"protection.hosts.toomanythreats.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of hosts with too many threats"))))),(0,a.kt)(o.Z,{value:"Updates",label:"Updates",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"update.server.freshness.seconds"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Date of the last server update"),(0,a.kt)("td",{parentName:"tr",align:"left"},"s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"update.hosts.outdated.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of outdated hosts"),(0,a.kt)("td",{parentName:"tr",align:"left"}))))),(0,a.kt)(o.Z,{value:"Full-Scan",label:"Full-Scan",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"hosts.unscanned.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of hosts not recently scanned")))))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h3",{id:"kasperky-security-center-configuration"},"Kasperky Security Center configuration"),(0,a.kt)("p",null,"To use this pack, the SNMP service must be properly configured on your\nKaspersky Security Center. Kaspersky provides an official documentation\nto achieve this: ",(0,a.kt)("a",{parentName:"p",href:"https://support.kaspersky.com/12603#block3"},"https://support.kaspersky.com/12603#block3")),(0,a.kt)("h3",{id:"network-flow"},"Network flow"),(0,a.kt)("p",null,"The Kaspersky Security Center must be reachable from the Centreon Poller on the\nUDP/161 SNMP port."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Kaspersky package on every Centreon poller expected to monitor a Kaspersky Security Center:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Antivirus-Kaspersky-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"On the centreon Web interface, install the ",(0,a.kt)("em",{parentName:"li"},"Kaspersky")," Centreon Monitoring Connector on the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page"))),(0,a.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Kaspersky package on every Centreon poller expected to monitor a Kaspersky Security Center:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Antivirus-Kaspersky-Snmp\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Monitoring Connector RPM on the Centreon Central server:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-antivirus-kaspersky-snmp\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,a.kt)("em",{parentName:"li"},"Kaspersky")," Centreon Monitoring Connector on the ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page")))),(0,a.kt)("h2",{id:"host-configuration"},"Host configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Log into Centreon and add a new Host through "Configuration > Hosts".'),(0,a.kt)("li",{parentName:"ul"},'Fill the "Name", "Alias" & "IP Address / DNS" fields according to your Kaspersky Security Center settings'),(0,a.kt)("li",{parentName:"ul"},"Select the ",(0,a.kt)("em",{parentName:"li"},"App-Antivirus-Kaspersky-SNMP-custom")," template to apply to the Host.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters\nMore information in the ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#snmpv3-options-mapping"},"Troubleshooting SNMP")," section.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"SNMPEXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Configure your own SNMPv3 credentials combo")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"how-do-i-run-my-plugin-through-the-cli-and-what-do-the-main-parameters-stand-for"},"How do I run my plugin through the CLI and what do the main parameters stand for?"),(0,a.kt)("p",null,"Once you've installed the plugin, you can test it logging with ",(0,a.kt)("em",{parentName:"p"},"centreon-engine"),"\nuser:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_kaspersky_snmp.pl \\\n  --plugin=apps::antivirus::kaspersky::snmp::plugin --mode=protection \\\n  --hostname=10.0.0.1 --snmp-version='2c' --snmp-community='kaseprsky_ro' \\\n  --warning-status='%{status} =~ /Warning/i' --critical-status='%{status} =~ /Critical/i'\n  --warning-no-antivirus='0' --critical-no-antivirus='' --warning-no-real-time='0' --critical-no-real-time='' \\\n  --warning-not-acceptable-level='0' --critical-not-acceptable-level='' \\\n  --warning-not-cured-objects='0' --critical-not-cured-objects='' \\\n  --warning-too-many-threats='0' --critical-too-many-threats='' \\\n  --warning-too-many-threats='0' --critical-too-many-threats='' \\\n  --use-new-perfdata\n")),(0,a.kt)("p",null,"Expected command output is shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"WARNING: 2 host(s) without running antivirus - 1 hosts(s) without running real time protection - 8 host(s) with not cured objects - 5 host(s) with too many threats | 'protection.hosts.antivirus.notrunning.count'=2;0:0;;0; 'protection.hosts.realtime.notrunning.count'=1;0:0;;0; 'protection.hosts.realtime.unacceptable.level.count'=0;0:0;;0; 'protection.hosts.uncured.objects.count'=8;0:0;;0; 'protection.hosts.toomanythreats.count'=5;0:0;;0;\n")),(0,a.kt)("p",null,"In this example, the Plugin gets protection status of the hosts managed by the Kaspersky Antivirus Manager\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--plugin=apps::antivirus::kaspersky::snmp::plugin--mode=protection"),") by\nrequesting the Kaspersky Security Center using the SNMP protocol at 10.0.0.1\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--hostname='10.0.0.1'  --snmp-version='2c' --snmp-community='kaseprsky_ro'"),")."),(0,a.kt)("p",null,"This command will trigger an alarm when the global protection status is not OK (",(0,a.kt)("inlineCode",{parentName:"p"},"--warning-status='%{status} =~ /Warning/i' --critical-status='%{status} =~ /Critical/i'"),")\nor when the number of host without antivirus or an unsatisfying level of protection is above 0 (",(0,a.kt)("inlineCode",{parentName:"p"},"--warning-no-antivirus='0' --warning-not-acceptable-level='0'"),")."),(0,a.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_kaspersky_snmp.pl \\\n  --plugin=apps::antivirus::kaspersky::snmp::plugin \\\n  --mode=deployment \\\n  --help\n")),(0,a.kt)("p",null,"All Plugin modes can be listed with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_kaspersky_snmp.pl \\\n  --plugin=apps::antivirus::kaspersky::snmp::plugin \\\n  --list-mode\n")),(0,a.kt)("h3",{id:"unknown-snmp-get-request--timeout"},"UNKNOWN: SNMP GET Request : Timeout"),(0,a.kt)("p",null,"If you get this message, you're probably facing one of theses issues:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Your SNMP server isn't started or misconfigured"),(0,a.kt)("li",{parentName:"ul"},"An external device is blocking your request (firewall, ...)")),(0,a.kt)("h3",{id:"unknown-snmp-get-request--cant-get-a-single-value"},"UNKNOWN: SNMP GET Request : Cant get a single value."),(0,a.kt)("p",null,"This message generally means that SNMP privileges are not wide enough for the\nmode/plugin to work properly."))}h.isMDXComponent=!0}}]);