"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[62496],{48413:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>h,frontMatter:()=>m,metadata:()=>u,toc:()=>c});a(67294);var n=a(3905),r=a(51715),l=a(7626);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const m={id:"sc-logstash-events",title:"Logstash Events"},p=void 0,u={unversionedId:"integrations/data-analytics/sc-logstash-events",id:"version-23.10/integrations/data-analytics/sc-logstash-events",title:"Logstash Events",description:"Before starting",source:"@site/versioned_docs/version-23.10/integrations/data-analytics/sc-logstash-events.md",sourceDirName:"integrations/data-analytics",slug:"/integrations/data-analytics/sc-logstash-events",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/docs/integrations/data-analytics/sc-logstash-events",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/integrations/data-analytics/sc-logstash-events.md",tags:[],version:"23.10",lastUpdatedAt:1699375250,formattedLastUpdatedAt:"Nov 7, 2023",frontMatter:{id:"sc-logstash-events",title:"Logstash Events"},sidebar:"version-23.10/docs",previous:{title:"Elastic metrics",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/docs/integrations/data-analytics/sc-elastic-metrics"},next:{title:"Datadog Events",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/docs/integrations/data-analytics/sc-datadog-events"}},d={},c=[{value:"Before starting",id:"before-starting",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Add Logstash mandatory parameters",id:"add-logstash-mandatory-parameters",level:3},{value:"Add Logstash optional parameters",id:"add-logstash-optional-parameters",level:3},{value:"Standard parameters",id:"standard-parameters",level:3},{value:"Event bulking",id:"event-bulking",level:2},{value:"Event format",id:"event-format",level:2},{value:"service_status event",id:"service_status-event",level:3},{value:"host_status event",id:"host_status-event",level:3},{value:"Custom event format",id:"custom-event-format",level:3},{value:"Curl commands",id:"curl-commands",level:2},{value:"Send events",id:"send-events",level:3}],g={toc:c},k="wrapper";function h(t){var{components:e}=t,a=i(t,["components"]);return(0,n.kt)(k,s(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){o(t,e,a[e])}))}return t}({},g,a),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"before-starting"},"Before starting"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You can send events from a central server, a remote server or a poller."),(0,n.kt)("li",{parentName:"ul"},"By default, this stream connector sends ",(0,n.kt)("strong",{parentName:"li"},"host_status")," and ",(0,n.kt)("strong",{parentName:"li"},"service_status")," events. The event format is shown ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"#event-format"},"there")),"."),(0,n.kt)("li",{parentName:"ul"},"Aformentioned events are fired each time a host or a service is checked. Various parameters let you filter out events.")),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("p",null,"Login as ",(0,n.kt)("inlineCode",{parentName:"p"},"root")," on the Centreon central server using your favorite SSH client."),(0,n.kt)("p",null,"Run the command according on your system:"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install centreon-stream-connector-logstash\n"))),(0,n.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install centreon-stream-connector-logstash\n"))),(0,n.kt)(l.Z,{value:"Debian 11",label:"Debian_11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"apt install centreon-stream-connector-logstash\n")))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"To configure your stream connector, you must ",(0,n.kt)("strong",{parentName:"p"},"head over")," the ",(0,n.kt)("strong",{parentName:"p"},"Configuration --\x3e Poller --\x3e Broker configuration")," menu. ",(0,n.kt)("strong",{parentName:"p"},"Select")," the ",(0,n.kt)("strong",{parentName:"p"},"central-broker-master")," configuration (or the appropriate broker configuration if it is a poller or a remote server that will send events) and ",(0,n.kt)("strong",{parentName:"p"},"click")," the ",(0,n.kt)("strong",{parentName:"p"},"Output tab")," when the broker form is displayed."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Add")," a new ",(0,n.kt)("strong",{parentName:"p"},"generic - stream connector")," output and ",(0,n.kt)("strong",{parentName:"p"},"set")," the following fields as follow:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Name"),(0,n.kt)("td",{parentName:"tr",align:null},"Logstash events")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Path"),(0,n.kt)("td",{parentName:"tr",align:null},"/usr/share/centreon-broker/lua/logstash-events-apiv2.lua")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Filter category"),(0,n.kt)("td",{parentName:"tr",align:null},"Neb")))),(0,n.kt)("h3",{id:"add-logstash-mandatory-parameters"},"Add Logstash mandatory parameters"),(0,n.kt)("p",null,"Each stream connector has a set of mandatory parameters. To add them you must ",(0,n.kt)("strong",{parentName:"p"},"click")," on the ",(0,n.kt)("strong",{parentName:"p"},"+Add a new entry")," button located ",(0,n.kt)("strong",{parentName:"p"},"below")," the ",(0,n.kt)("strong",{parentName:"p"},"filter category")," input."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Value explanation"),(0,n.kt)("th",{parentName:"tr",align:null},"Value exemple"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"http_server_url"),(0,n.kt)("td",{parentName:"tr",align:null},"the url of the logstash http plugin"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"https:/mylogstash.test"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"port"),(0,n.kt)("td",{parentName:"tr",align:null},"the port of your logstash http plugin"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"8443"))))),(0,n.kt)("h3",{id:"add-logstash-optional-parameters"},"Add Logstash optional parameters"),(0,n.kt)("p",null,"Some stream connectors have a set of optional parameters dedicated to the Software that they are associated with. To add them you must ",(0,n.kt)("strong",{parentName:"p"},"click")," on the ",(0,n.kt)("strong",{parentName:"p"},"+Add a new entry")," button located ",(0,n.kt)("strong",{parentName:"p"},"below")," the ",(0,n.kt)("strong",{parentName:"p"},"filter category")," input."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Value explanation"),(0,n.kt)("th",{parentName:"tr",align:null},"default value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"username"),(0,n.kt)("td",{parentName:"tr",align:null},"the username if your are using https with basic auth for your logstash http plugin"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"password"),(0,n.kt)("td",{parentName:"tr",align:null},"the password of your user if you are using https with basic auth for your logstash http plugin"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"logfile"),(0,n.kt)("td",{parentName:"tr",align:null},"the file in which logs are written"),(0,n.kt)("td",{parentName:"tr",align:null},"/var/log/centreon-broker/logstash-events.log")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"log_level"),(0,n.kt)("td",{parentName:"tr",align:null},"logging level from 1 (errors) to 3 (debug)"),(0,n.kt)("td",{parentName:"tr",align:null},"1")))),(0,n.kt)("h3",{id:"standard-parameters"},"Standard parameters"),(0,n.kt)("p",null,"All stream connectors can use a set of optional parameters that are made available through Centreon stream connectors lua modules."),(0,n.kt)("p",null,"All those parameters are documented ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters"},"here")),"."),(0,n.kt)("p",null,"Some of them are overridden by this stream connector."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Default value for the stream connector"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"accepted_categories"),(0,n.kt)("td",{parentName:"tr",align:null},"neb")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"accepted_elements"),(0,n.kt)("td",{parentName:"tr",align:null},"host_status,service_status")))),(0,n.kt)("h2",{id:"event-bulking"},"Event bulking"),(0,n.kt)("p",null,"This stream connector is compatible with event bulking. Meaning that it is able to send more that one event in each call to the Logstash HTTP plugin."),(0,n.kt)("p",null,"To use this feature you must add the following parameter in your stream connector configuration."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"max_buffer_size"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"more than one"))))),(0,n.kt)("h2",{id:"event-format"},"Event format"),(0,n.kt)("p",null,"This stream connector will send event with the following format."),(0,n.kt)("h3",{id:"service_status-event"},"service_status event"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event_timestamp": 1653434348,\n  "hostname": "my-host",\n  "output": "[CRITICAL] low power",\n  "service": "my-service",\n  "state": "CRITICAL",\n  "title": "CRITICAL: my-host, my-service"\n}\n')),(0,n.kt)("h3",{id:"host_status-event"},"host_status event"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event_timestamp": 1653434348,\n  "hostname": "my-host",\n  "output": "[DOWN] server is down",\n  "state": "DOWN",\n  "title": "DOWN: my-host"\n}\n')),(0,n.kt)("h3",{id:"custom-event-format"},"Custom event format"),(0,n.kt)("p",null,"This stream connector allows you to change the format of the event to suit your needs. Only the ",(0,n.kt)("strong",{parentName:"p"},"event")," part of the json is customisable. It also allows you to handle events type that are not handled by default such as ",(0,n.kt)("strong",{parentName:"p"},"ba_status events"),"."),(0,n.kt)("p",null,"In order to use this feature you need to configure a json event format file and add a new stream connector parameter."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"format_file"),(0,n.kt)("td",{parentName:"tr",align:null},"/etc/centreon-broker/logstash-events-format.json")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The event format configuration file must be readable by the centreon-broker user")),(0,n.kt)("p",null,"To learn more about custom event format and templating file, head over the following ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/templating.md#templating-documentation"},"documentation")),"."),(0,n.kt)("h2",{id:"curl-commands"},"Curl commands"),(0,n.kt)("p",null,"Here is the list of all the curl commands that are used by the stream connector."),(0,n.kt)("h3",{id:"send-events"},"Send events"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT -H "accept: application/json" curl -X PUT \'http://<logstash_address>:<logstash_port>\' -d \'{"event_timestamp": 1653434348,"hostname": "my-host","output": "[DOWN] server is down","state": "DOWN","title": "DOWN: my-host"}\'\n')),(0,n.kt)("p",null,"You must replace all the ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"em"},"<xxxx>"))," inside the above command with their appropriate value. ",(0,n.kt)("em",{parentName:"p"},"<logstash_port>")," may become ",(0,n.kt)("em",{parentName:"p"},"8080"),"."))}h.isMDXComponent=!0}}]);