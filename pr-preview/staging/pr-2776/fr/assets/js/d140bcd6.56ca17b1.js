"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[88754],{47002:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>c});n(67294);var i=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={id:"plugins-guidelines",title:"Plugins development guidelines"},l=void 0,u={unversionedId:"integrations/plugin-packs/dev-resources/plugins-guidelines",id:"integrations/plugin-packs/dev-resources/plugins-guidelines",title:"Plugins development guidelines",description:"A large part of these guidelines come from the Monitoring Plugins project. Indeed, some of these are outdated, not relevant anymore or related to a language you don\u2019t use. We will focus on those that we consider as the most important, but this is still a great piece of content you should read.",source:"@site/pp/integrations/plugin-packs/dev-resources/plugins-guidelines.md",sourceDirName:"integrations/plugin-packs/dev-resources",slug:"/integrations/plugin-packs/dev-resources/plugins-guidelines",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/dev-resources/plugins-guidelines",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/dev-resources/plugins-guidelines.md",tags:[],version:"current",frontMatter:{id:"plugins-guidelines",title:"Plugins development guidelines"},sidebar:"pp",previous:{title:"Getting started - Plugin development",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/dev-resources/introduction"},next:{title:"Develop with centreon-plugins",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/dev-resources/develop-with-centreon-plugins"}},p={},c=[{value:"Programming languages",id:"programming-languages",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Formatting",id:"formatting",level:3},{value:"Short output",id:"short-output",level:3},{value:"Centreon Plugin example",id:"centreon-plugin-example",level:4},{value:"Performance data and metrics",id:"performance-data-and-metrics",level:3},{value:"Centreon Plugin Performance Data / Metrics examples",id:"centreon-plugin-performance-data--metrics-examples",level:4},{value:"Extended output",id:"extended-output",level:3},{value:"Centreon Plugin example",id:"centreon-plugin-example-1",level:4},{value:"Options",id:"options",level:2},{value:"Discovery",id:"discovery",level:2},{value:"Hosts",id:"hosts",level:3},{value:"Services",id:"services",level:3},{value:"Performances",id:"performances",level:2},{value:"Execution time",id:"execution-time",level:3},{value:"Cache",id:"cache",level:3},{value:"Algorithm",id:"algorithm",level:3},{value:"Timeout",id:"timeout",level:3},{value:"Security",id:"security",level:2},{value:"System commands",id:"system-commands",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Help and documentation",id:"help-and-documentation",level:2}],m={toc:c},d="wrapper";function h(e){var{components:t}=e,n=r(e,["components"]);return(0,i.kt)(d,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){a(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A large part of these guidelines come from the ",(0,i.kt)("a",{parentName:"p",href:"https://www.monitoring-plugins.org/doc/guidelines.html"},"Monitoring Plugins project"),". Indeed, some of these are outdated, not relevant anymore or related to a language you don\u2019t use. We will focus on those that we consider as the most important, but this is still a great piece of content you should read."),(0,i.kt)("h2",{id:"programming-languages"},"Programming languages"),(0,i.kt)("p",null,"You can use your favourite programming language to develop monitoring plugins. The only prerequisite is to stick with all the best practices to obtain something reliable and efficient."),(0,i.kt)("p",null,"Indeed, we recommend you use our centreon-plugins library whenever it is possible. It results from years of monitoring probes development, and it ships ready-to-use methods to meet all requirements and obtain a flexible monitoring probe."),(0,i.kt)("p",null,"We initially chose the Perl programming language for its stability, and since then we are still convinced we have made the right choice. Perl is still\nshipped with all enterprise-grade operating systems, and often a prerequisite. Give it a try!"),(0,i.kt)("h2",{id:"outputs"},"Outputs"),(0,i.kt)("h3",{id:"formatting"},"Formatting"),(0,i.kt)("p",null,"The output of a monitoring probe must always be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"STATUS:\xa0Information\xa0text | metric1=<value>[UOM];<warning_value>;<critical_value>;<minimum>;<maximum> metric2=value[OEM];<warning_value>;<critical_value>;<minimum>;<maximum> \\n\nLine 1 containing additional details \\n\nLine 2 containing additional details \\n \nLine 3 containing additional details \\n\n")),(0,i.kt)("p",null,"Let\u2019s identify and name its three main parts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Short output: everything before the pipe (",(0,i.kt)("inlineCode",{parentName:"li"},"|"),")"),(0,i.kt)("li",{parentName:"ul"},"Performance data and Metrics: everything after the pipe (",(0,i.kt)("inlineCode",{parentName:"li"},"|"),")"),(0,i.kt)("li",{parentName:"ul"},"Extended output: Everything after the first carriage return (",(0,i.kt)("inlineCode",{parentName:"li"},"\\n"),"), splitting each detail line is the best practice.")),(0,i.kt)("h3",{id:"short-output"},"Short output"),(0,i.kt)("p",null,"This part is the one users will more likely see in their monitoring tool or obtain as part of a push/alert message. The information should be straightforward and help identify what is going on quickly."),(0,i.kt)("p",null,"A plugin must always propose at least such output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"STATUS:\xa0Information\xa0text \n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"STATUS"),"must stick with return codes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"0: OK"),(0,i.kt)("li",{parentName:"ul"},"1: WARNING"),(0,i.kt)("li",{parentName:"ul"},"2: CRITICAL"),(0,i.kt)("li",{parentName:"ul"},"3: UNKNOWN")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Information text")," should display only relevant information. That implies:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"showing only the bits of information that led to the NOT-OK state when an alarm is active"),(0,i.kt)("li",{parentName:"ul"},"keeping it short. When checking a large number of a single component (e.g. all partitions on a filer), try to construct a global message, then switch to the format above when an alarm arises.")),(0,i.kt)("h4",{id:"centreon-plugin-example"},"Centreon Plugin example"),(0,i.kt)("p",null,"The output when checking several storage partitions on a server, when everything is OK:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"OK: All storages are ok |")),(0,i.kt)("p",null,"The output of the same plugin, when one of the storage partition space usages triggers a WARNING threshold:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"WARNING: Storage '/var/lib' Usage Total: 9.30 GB Used: 956.44 MB (10.04%) Free: 8.37 GB (89.96%) |")),(0,i.kt)("h3",{id:"performance-data-and-metrics"},"Performance data and metrics"),(0,i.kt)("p",null,"This part is not mandatory. However, if you want to benefit from Centreon or Nagios\xa9-like tools with built-in metrology features, you will need to adopt this format:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"metric1=<value>[UOM];<warning_value>;<critical_value>;<minimum>;<maximum>")),(0,i.kt)("p",null,"After the equals sign, split each piece of information about the metric using a semi-colon."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"metric1="),": The metric\u2019s name is everything before the equals (=) sign. The more detailed it is, the easier it will be to understand a graph or to extend the usability of the metric in a third-party analytics/observability platform. De facto, a metric name must not contain an equals sign. Try to make it self-explanatory even without the Host/Service context."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<value>"),": The measurement result, must be a number (int, float)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[UOM]"),": Optional Unit Of Measurement. You can also include the unit in the metric\u2019s name as we do in the Centreon metric naming philosophy. It is one of the following:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"none (no unit specified), when dealing with a number of things (e.g. users, licences, viruses\u2026)"),(0,i.kt)("li",{parentName:"ul"},"'s' when dealing with seconds. \u2018us\u2019 and \u2018ms\u2019 are also valid for microseconds or milliseconds (e.g. response or connection time)"),(0,i.kt)("li",{parentName:"ul"},"'%' when dealing with percentage (e.g. memory, CPU, storage space\u2026)"),(0,i.kt)("li",{parentName:"ul"},"'B' (Bytes), when dealing with storage, memory\u2026 The Byte must be the default as it ensures compatibility with all Centreon extensions"),(0,i.kt)("li",{parentName:"ul"},"When dealing with a network metric or any throughput, \u2018b' (Bits). When computing a rate per second, you can use \u2018b/s\u2019"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<warning_value>"),":  Optional. Fill it with the user\u2019s value as a WARNING threshold for the metric."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<critical_value>"),": Optional. Fill it with the user-supplied value as a CRITICAL threshold for the metric."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<minimum>"),": Optional. Fill it with the lowest value the metric can take."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<maximum>"),": Optional. Fill it with the highest value the metric can take.")),(0,i.kt)("p",null,"Frequently, you have to manage the case where you have to display the same metric for several instances of things. The best practice is to choose a character to separate the metric name from its instance with a given character. At Centreon, we use the ",(0,i.kt)("inlineCode",{parentName:"p"},"#")," sign, and we strongly recommend you do the same (it is recognised and processed by Centreon-Broker)."),(0,i.kt)("p",null,"Less frequently, you may want to add even more context; that\u2019s why we created a sub-instance concept following the same principles. Append it to the instance of your metric and use a splitting character to clarify that it is another dimension and not confuse it with the primary instance. We use the ",(0,i.kt)("inlineCode",{parentName:"p"},"~")," sign; once again, we strongly advise you to stick with it whenever it is possible."),(0,i.kt)("h4",{id:"centreon-plugin-performance-data--metrics-examples"},"Centreon Plugin Performance Data / Metrics examples"),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"system boot partition")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"'/boot#storage.space.usage.bytes'=255832064B;;0:99579084;0;995790848")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/boot")," is the instance"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"storage.space.usage.bytes")," is the metric name (note the .bytes at the end specifying the unit)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"B")," is the legacy metric\u2019s unit for Bytes."),(0,i.kt)("p",null,"Pay attention to the critical threshold (0:99579084), always use the same unit."),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"network interface")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"'eth0#interface.traffic.in.bitspersecond'=0.00b/s;;;0;")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"eth0")," is the instance"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"interface.traffic.in.bitspersecond")," is the metric name (note the ",(0,i.kt)("inlineCode",{parentName:"p"},".persecond")," at the end specifying the unit)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"b/s")," is the legacy metric\u2019s unit for bits per second"),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"cloud metric")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"'azure-central~/var/lib/mysql#azure.insights.logicaldisk.free.percentage'=94.82%;;;0;100")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"azure-central")," is the instance"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/mysql")," is the sub-instance"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"azure.insights.logicaldisk.free.percentage")," is the metric name (note the ",(0,i.kt)("inlineCode",{parentName:"p"},"free")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"usage"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},".percentage")," at the end to specify the unit)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"%")," is the legacy metric\u2019s unit"),(0,i.kt)("h3",{id:"extended-output"},"Extended output"),(0,i.kt)("p",null,"The extended output's primary purpose is to display each bit of collected information separately on a single line. It will only print if the user adds a ",(0,i.kt)("inlineCode",{parentName:"p"},"--verbose")," flag to its command."),(0,i.kt)("p",null,"Overall, you should use it to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"add extra context (numbered instance, serial number) about a checked component"),(0,i.kt)("li",{parentName:"ul"},"print items the check excludes because plugin options have filtered them out"),(0,i.kt)("li",{parentName:"ul"},"organize how the information is displayed using groups that follow the logic of the check.")),(0,i.kt)("h4",{id:"centreon-plugin-example-1"},"Centreon Plugin example"),(0,i.kt)("p",null,"Here is an example of a Cisco device environment check:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"<STATUS>: <information_text> | <perfdata>\nEnvironment type: other\nChecking fans\n  fan 'Switch X - FAN - T1 1, Normal' status is normal [instance: 1014].\n  fan 'Switch X - FAN - T1 2, Normal' status is normal [instance: 1015].\n  fan 'Switch X <SERIAL-NUMBER> - FAN 1' status is up [instance: 1014]\n  fan 'Switch X <SERIAL-NUMBER> - FAN 2' status is up [instance: 1015]\nChecking power supplies\n  power supply 'Switch X - Power Supply B, Normal' status is normal [instance: 1013] [source: ac]\n  Power supply 'Switch X - Power Supply B' status is on [instance: 1013]\nChecking temperatures\n  temperature 'Switch X - Inlet Temp Sensor, GREEN ' status is normal [instance: 1010] [value: 23 C]\n  temperature 'Switch X - Outlet Temp Sensor, GREEN ' status is normal [instance: 1011] [value: 30 C]\n  temperature 'Switch X - HotSpot Temp Sensor, GREEN ' status is normal [instance: 1012] [value: 41 C]\nChecking voltages\nChecking modules\n  module 'C9200L-48P-4G' status is ok [instance: 1000]\nChecking physicals\nChecking sensors\n  sensor 'Switch X <SERIAL-NUMBER> - Temp Inlet Sensor 0' status is 'ok' [instance: 1010] [value: 23 celsius]\n  sensor 'Switch X <SERIAL-NUMBER> - Temp Outlet Sensor 1' status is 'ok' [instance: 1011] [value: 30 celsius]\n  sensor 'Switch X <SERIAL-NUMBER> - Temp Hotspot Sensor 2' status is 'ok' [instance: 1012] [value: 41 celsius]\n  sensor 'GigabitEthernet1/1/1 Module Temperature Sensor' status is 'ok' [instance: 1115] [value: 29.2 celsius]\n  sensor 'GigabitEthernet1/1/1 Supply Voltage Sensor' status is 'ok' [instance: 1116] [value: 3.3 voltsDC]\n  sensor 'GigabitEthernet1/1/1 Bias Current Sensor' status is 'ok' [instance: 1117] [value: 0.0202 amperes]\n  sensor 'GigabitEthernet1/1/1 Transmit Power Sensor' status is 'ok' [instance: 1118] [value: -4.5 dBm]\n  sensor 'GigabitEthernet1/1/1 Receive Power Sensor' status is 'ok' [instance: 1119] [value: -1.2 dBm]\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,"Option management is a central piece of a successful plugin. You should:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Carefully name your options to make them ",(0,i.kt)("strong",{parentName:"li"},"self-explanatory")),(0,i.kt)("li",{parentName:"ul"},"For a given option, ",(0,i.kt)("strong",{parentName:"li"},"only one format")," is possible (either a flag or a value, but not both)"),(0,i.kt)("li",{parentName:"ul"},"Always ",(0,i.kt)("strong",{parentName:"li"},"check")," for values supplied by the user and print a ",(0,i.kt)("strong",{parentName:"li"},"clear message")," when they do not fit with plugin requirements"),(0,i.kt)("li",{parentName:"ul"},"Set default option value when relevant")),(0,i.kt)("h2",{id:"discovery"},"Discovery"),(0,i.kt)("p",null,"This section describes how you should format your data to comply with the requirements of Centreon Discovery UI modules."),(0,i.kt)("p",null,"In a nutshell:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/monitoring/discovery/hosts-discovery"},"host discovery")," allows you to return a JSON list the autodiscovery module will understand so the user can choose to automatically or manually add to its monitoring configuration. Optionally, it can use one of the discovered items properties to make some decisions (filter in or out, create or assign a specific host group, etc.)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/monitoring/discovery/services-discovery"},"service discovery")," allows you to return XML data to help users configure unitary checks and link them to a given host (e.g. each VPN definition in AWS VPN, each network interface on a router...).")),(0,i.kt)("p",null,"There's no choice here; you should stick with the guidelines described hereafter if you want your code to be fully compliant with our modules."),(0,i.kt)("h3",{id:"hosts"},"Hosts"),(0,i.kt)("p",null,"The discovery plugin can be a specific script or a particular execution mode enabled with an option. In centreon-plugins, we do it through dedicated ",(0,i.kt)("inlineCode",{parentName:"p"},"discovery*.pm")," modes."),(0,i.kt)("p",null,"This execution mode is limited to a query toward a cloud provider, an application, or whatever contains a list of assets. The expected output must hold some keys:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"end_time"),": the unix timestamp when the execution stops"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"start_time"),": the unix timestamp when the execution starts"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"duration"),": the duration in seconds (",(0,i.kt)("inlineCode",{parentName:"li"},"end_time - start_time"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"discovered_items"),": the number of discovered items "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"results"),": an array of hashes, each hash being a collection of key/values describing the discovered assets. ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='Sample host discovery output'",title:"'Sample",host:!0,discovery:!0,"output'":!0},'{\n   "end_time" : 1649431535,\n   "start_time" : 1649431534,\n   "duration" : 1,\n   "discovered_items" : 2,\n   "results" : [\n         {\n         "public_dns_name" : "ec2-name.eu-west-1.compute.amazonaws.com",\n         "name" : "prod-ec2",\n         "key_name" : "prd-aws-ec2",\n         "tags" : [\n            {\n               "value" : "Licences Management",\n               "key" : "Desc"\n            },\n            {\n               "value" : "CI",\n               "key" : "Billing"\n            }\n         ],\n         "state" : "running",\n         "private_dns_name" : "ip-W-X-Y-Z.eu-west-1.compute.internal",\n         "vpc_id" : "vpc-xxxveafea",\n         "type" : "ec2",\n         "id" : "i-3feafea",\n         "private_ip" : "W.X.Y.Z",\n         "instance_type" : "t2.medium"\n      },\n      {\n         "public_dns_name" : "other-ec2-name.eu-west-1.compute.amazonaws.com",\n         "name" : "prod-other-ec2",\n         "key_name" : "prd-aws-ec2",\n         "tags" : [\n            {\n               "value" : "Licences Management",\n               "key" : "Desc"\n            },\n            {\n               "value" : "CI",\n               "key" : "Billing"\n            }\n         ],\n         "state" : "running",\n         "private_dns_name" : "ip-A-B-C-D.eu-west-1.compute.internal",\n         "vpc_id" : "vpc-xxxveafea",\n         "type" : "ec2",\n         "id" : "i-3gfbgfb",\n         "private_ip" : "A.B.C.D",\n         "instance_type" : "t2.medium"\n      }\n   ]\n}\n')),(0,i.kt)("p",null,"You can use more advanced structures for values in the result sets, it can be: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"an array of hashes:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='Nmap discovery - Tags'",title:"'Nmap",discovery:!0,"-":!0,"Tags'":!0},'"services" : [\n  {\n    "name" : "ssh",\n    "port" : "22/tcp"\n  },\n  {\n    "port" : "80/tcp",\n    "name" : "http"\n  }\n]\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a flat array: ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='VMWare discovery - IP vMotion'",title:"'VMWare",discovery:!0,"-":!0,IP:!0,"vMotion'":!0},'"ip_vmotion": [\n  "10.10.5.21",\n  "10.30.5.21"\n],\n')),(0,i.kt)("p",null,"Using these structures is convenient when you need to group object properties behind a single key. "),(0,i.kt)("p",null,"On the users' side, it allows using these values to filter in or out some of the results or make a better choice\nabout the host template for a given discovered host."),(0,i.kt)("h3",{id:"services"},"Services"),(0,i.kt)("p",null,"Service discovery relies on XML to return information that will be parsed and used by the UI module to\ncreate new services efficiently."),(0,i.kt)("p",null,"As for hosts, it can be an option at runtime, or an execution mode. In centreon-plugins, we choose to have dedicated\n",(0,i.kt)("inlineCode",{parentName:"p"},"list<objectname>.pm")," modes. "),(0,i.kt)("p",null,"All ",(0,i.kt)("inlineCode",{parentName:"p"},"list<objectname>.pm")," modes contain two options that will return properties and results that will be used in the\ndiscovery rules definitions. "),(0,i.kt)("p",null,"The first service discovery option is ",(0,i.kt)("inlineCode",{parentName:"p"},"--disco-format"),", it enables the plugin to return the supported keys in the rule: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title='Linux Network int --disco-format output'",title:"'Linux",Network:!0,int:!0,"--disco-format":!0,"output'":!0},'-bash-4.2$ /usr/lib/centreon/plugins/centreon_linux_snmp.pl --plugin=os::linux::snmp::plugin --mode=list-interfaces --hostname=127.0.0.1 --disco-format\n<?xml version="1.0" encoding="utf-8"?>\n<data>\n  <element>name</element>\n  <element>total</element>\n  <element>status</element>\n  <element>interfaceid</element>\n  <element>type</element>\n</data>\n')),(0,i.kt)("p",null,"The output above shows that the discovery of network interfaces on Linux will return those properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),": the name of the interface"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"total"),": the maximum bandwidth supported"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"status"),": the configuration status of the interface (convenient to exclude administratively down interfaces)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"interfaceid"),": the id"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type"),": interface type (like ethernet, fiber, loopback, etc.)")),(0,i.kt)("p",null,"Executing exactly the same command, substituting ",(0,i.kt)("inlineCode",{parentName:"p"},"--disco-format")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"--disco-show")," will output the discovered interfaces:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title='Linux Network int --disco-show output'",title:"'Linux",Network:!0,int:!0,"--disco-show":!0,"output'":!0},'/usr/lib/centreon/plugins/centreon_linux_snmp.pl --plugin=os::linux::snmp::plugin --mode=list-interfaces --hostname=127.0.0.1 --disco-show\n<?xml version="1.0" encoding="utf-8"?>\n<data>\n  <label status="up" name="lo" type="softwareLoopback" total="10" interfaceid="1"/>\n  <label status="up" name="ens5" type="ethernetCsmacd" total="" interfaceid="2"/>\n</data>\n')),(0,i.kt)("p",null,"The result contains one line per interface and each line contains each set of properties as a ",(0,i.kt)("inlineCode",{parentName:"p"},'key="value"')," pair. Note that even if\nno data is obtained for a given key, it still has to be displayed (e.g ",(0,i.kt)("inlineCode",{parentName:"p"},'total=""'),")."),(0,i.kt)("h2",{id:"performances"},"Performances"),(0,i.kt)("p",null,"A monitoring plugin has to do one thing and do it right - it's important to code your plugin with the idea to make\nit as efficient as possible. Keep in mind that your Plugin might run every minute, against a large\nnumber of devices, so a minor optimization can result in important benefits at scale."),(0,i.kt)("p",null,"Also think about the 'thing' you're monitoring, it's important to always try to reduce the overhead of a check\nfrom the monitored object point of view."),(0,i.kt)("h3",{id:"execution-time"},"Execution time"),(0,i.kt)("p",null,"The most basic way to bench a plugin performance is its execution time. Use the\n",(0,i.kt)("inlineCode",{parentName:"p"},"time")," command utility to run your check and measure over several runs how it behaves."),(0,i.kt)("h3",{id:"cache"},"Cache"),(0,i.kt)("p",null,"In some cases, it can be interesting to cache some information."),(0,i.kt)("p",null,"Caching in a local file might save some calls against an API, for example do not authenticate at every check.\nWhen possible, use the token obtained at the first check and stored in the cache file to only call the\nauthentication endpoint when it's absolutely necessary."),(0,i.kt)("p",null,"More generally, when an identifier, name or anything that would never change across different executions requires a\nrequest against the third-party system, cache it to optimize single-check processing time."),(0,i.kt)("h3",{id:"algorithm"},"Algorithm"),(0,i.kt)("p",null,"Optimizing the number of requests against a third-party system can also lie in the check algorithm. Prefer scraping\nthe maximum of data in one check and then filter the results programmatically instead of issuing multiple very specific\nrequests that would result in longer execution time and greater load on the target system."),(0,i.kt)("h3",{id:"timeout"},"Timeout"),(0,i.kt)("p",null,"A Plugin must always include a timeout to avoid never ending checks that might overload your monitoring\nsystem when something is broken and that, for any reason, the plugin cannot obtain the information."),(0,i.kt)("h2",{id:"security"},"Security"),(0,i.kt)("h3",{id:"system-commands"},"System commands"),(0,i.kt)("p",null,"If the plugin requires to execute a command at the operating system level, and users can modify the command name or\nits parameters, make sure that nobody can leverage your plugin's capabilities to break the underlying\nsystem or access sensitive information."),(0,i.kt)("h3",{id:"dependencies"},"Dependencies"),(0,i.kt)("p",null,"There is no need to re-invent the wheel: standard centreon-plugins dependencies provide you with the most common\nexternal libraries that might be required to write a new plugin."),(0,i.kt)("p",null,"Don't overuse large libraries that might end being unsupported or where some governance modification might lead to\nsecurity problems."),(0,i.kt)("h2",{id:"help-and-documentation"},"Help and documentation"),(0,i.kt)("p",null,"For each plugin, the minimum documentation is the help, you have to explain to users what the plugin\nis doing and how they can use the built-in options to achieve their own alerting scenario."),(0,i.kt)("p",null,"You can look at how we handle help at mode level with the centreon-plugins framework ",(0,i.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/dev-resources/develop-with-centreon-plugins"},"here"),"."))}h.isMDXComponent=!0}}]);