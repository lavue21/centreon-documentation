"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[27279],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),m=p(a),k=r,u=m["".concat(s,".").concat(k)]||m[k]||d[k]||i;return a?n.createElement(u,l(l({ref:e},c),{},{components:a})):n.createElement(u,l({ref:e},c))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},14743:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>m});a(67294);var n=a(3905),r=a(67709),i=a(7626);function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},l.apply(this,arguments)}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const s={id:"applications-monitoring-kadiska-restapi",title:"Kadiska Rest API"},p=void 0,c={unversionedId:"integrations/plugin-packs/procedures/applications-monitoring-kadiska-restapi",id:"integrations/plugin-packs/procedures/applications-monitoring-kadiska-restapi",title:"Kadiska Rest API",description:"Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/applications-monitoring-kadiska-restapi.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-monitoring-kadiska-restapi",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/applications-monitoring-kadiska-restapi",draft:!1,tags:[],version:"current",frontMatter:{id:"applications-monitoring-kadiska-restapi",title:"Kadiska Rest API"},sidebar:"pp",previous:{title:"Kafka",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/applications-kafka-jmx"},next:{title:"Kaspersky",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/applications-antivirus-kaspersky-snmp"}},d={},m=[{value:"Pack Assets",id:"pack-assets",level:2},{value:"Templates",id:"templates",level:3},{value:"Discovery rules",id:"discovery-rules",level:3},{value:"Collected metrics &amp; status",id:"collected-metrics--status",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Host",id:"host",level:3},{value:"Kadiska Station",id:"kadiska-station",level:4},{value:"Kadiska Watcher",id:"kadiska-watcher",level:4},{value:"How to check in the CLI that the configuration is OK and what are the main options for?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}],k={toc:m};function u(t){var{components:e}=t,a=o(t,["components"]);return(0,n.kt)("wrapper",l({},k,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",l({},{id:"pack-assets"}),"Pack Assets"),(0,n.kt)("h3",l({},{id:"templates"}),"Templates"),(0,n.kt)("p",null,"The Centreon Plugin Pack ",(0,n.kt)("strong",{parentName:"p"},"Kadiska Rest API")," brings 2 different host templates:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"App-Monitoring-Kadiska-Station-Restapi-custom"),(0,n.kt)("li",{parentName:"ul"},"App-Monitoring-Kadiska-Watcher-Restapi-custom")),(0,n.kt)("p",null,"It brings the following service templates:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Service Alias"),(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Service Template"),(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Service Description"),(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Default"),(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Discovery"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Target-Statistics"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"App-Monitoring-Kadiska-Restapi-Target-Statistics"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Checking performance metrics from Kadiska targets using Rest API"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"X"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Watcher-Statistics"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"App-Monitoring-Kadiska-Restapi-Watcher-Statistics"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Checking performance metrics from Kadiska watchers using Rest API"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"X"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}))))),(0,n.kt)("h3",l({},{id:"discovery-rules"}),"Discovery rules"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Host",label:"Host",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Rule Name"),(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Stations"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Discover Kadiska stations")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Watchers"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Discover Kadiska watchers")))),(0,n.kt)("p",null,"More information about discovering hosts automatically is available on the ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/monitoring/discovery/hosts-discovery"}),"dedicated page"),".")),(0,n.kt)(i.Z,{value:"Service",label:"Service",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Rule Name"),(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"App-Monitoring-Kadiska-Restapi-Target-Statistics"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Discover kadiska targets associated to a station and monitor its performance.")))),(0,n.kt)("p",null,"More information about discovering services automatically is available on the ",(0,n.kt)("a",l({parentName:"p"},{href:"/docs/monitoring/discovery/services-discovery"}),"dedicated page"),"."))),(0,n.kt)("h3",l({},{id:"collected-metrics--status"}),"Collected metrics & status"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Target-Statistics",label:"Target-Statistics",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Metric Name"),(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"targets"),"#tracer.packets.loss.percentage"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"targets"),"#tracer.path.length"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"targets"),"#tracer.round.trip.persecond"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"ms"))))),(0,n.kt)(i.Z,{value:"Watcher-Statistics",label:"Watcher-Statistics",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Metric Name"),(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"watchers"),"#watcher.errors.percentage"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"watchers"),"#watcher.pages.count"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"watchers"),"#watcher.requests.count"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"watchers"),"#watcher.sessions.count"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"count")))))),(0,n.kt)("h2",l({},{id:"prerequisites"}),"Prerequisites"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"client ID")," and ",(0,n.kt)("strong",{parentName:"p"},"client secret")," are needed to be able to request Kadisa API."),(0,n.kt)("p",null,"To get these tokens, go to ",(0,n.kt)("a",l({parentName:"p"},{href:"https://app.kadiska.com/"}),"https://app.kadiska.com/")," and in ",(0,n.kt)("strong",{parentName:"p"},"Configuration > API Clients")," to create a client with ",(0,n.kt)("strong",{parentName:"p"},"Data Analyst")," role.\nEnsure to keep the client secret because you will not be able to retrieve it from Kadiska interface afterwards."),(0,n.kt)("h2",l({},{id:"setup"}),"Setup"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the plugin package on every Centreon poller expected to monitor ",(0,n.kt)("strong",{parentName:"li"},"Kadiska Rest API")," resources:")),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Applications-Monitoring-Kadiska-Restapi\n")),(0,n.kt)("ol",l({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"On the Centreon web interface, on page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Plugin Packs"),", install the ",(0,n.kt)("strong",{parentName:"li"},"Kadiska Rest API")," Centreon Plugin Pack."))),(0,n.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the plugin package on every Centreon poller expected to monitor ",(0,n.kt)("strong",{parentName:"li"},"Kadiska Rest API")," resources:")),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Applications-Monitoring-Kadiska-Restapi\n")),(0,n.kt)("ol",l({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"Install the ",(0,n.kt)("strong",{parentName:"li"},"Kadiska Rest API")," Centreon Plugin Pack RPM on the Centreon central server:")),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"yum install centreon-pack-applications-monitoring-kadiska-restapi\n")),(0,n.kt)("ol",l({},{start:3}),(0,n.kt)("li",{parentName:"ol"},"On the Centreon web interface, on page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Plugin Packs"),", install the ",(0,n.kt)("strong",{parentName:"li"},"Kadiska Rest API")," Centreon Plugin Pack.")))),(0,n.kt)("h2",l({},{id:"configuration"}),"Configuration"),(0,n.kt)("h3",l({},{id:"host"}),"Host"),(0,n.kt)("h4",l({},{id:"kadiska-station"}),"Kadiska Station"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Log into Centreon and add a new host through ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,n.kt)("li",{parentName:"ul"},"Fill the ",(0,n.kt)("strong",{parentName:"li"},"Name"),", ",(0,n.kt)("strong",{parentName:"li"},"Alias")," & ",(0,n.kt)("strong",{parentName:"li"},"IP Address/DNS")," fields according to your ",(0,n.kt)("strong",{parentName:"li"},"Kadiska Rest API")," server settings."),(0,n.kt)("li",{parentName:"ul"},"Apply the ",(0,n.kt)("strong",{parentName:"li"},"App-Monitoring-Kadiska-Station-Restapi-custom")," template to the host."),(0,n.kt)("li",{parentName:"ul"},"Once the template is applied, fill in the corresponding macros. Some macros are mandatory.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Mandatory"),(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Macro"),(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"})),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"EXTRAOPTIONS"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Any extra option you may want to add to every command","_","line (eg. a --verbose flag)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"X"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"KADISKAAPICLIENTID"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Kadiska Client ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"X"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"KADISKAAPICLIENTSECRET"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Kadiska Client Secret")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"})),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"KADISKAAPIPORT"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"(Default: '443')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"})),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"KADISKAAPIPROTO"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"(Default: 'https')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"X"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"STATIONNAME"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Specify Kadiska station name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"})),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"TIMEOUT"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}))))),(0,n.kt)("h4",l({},{id:"kadiska-watcher"}),"Kadiska Watcher"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Log into Centreon and add a new host through ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Hosts"),"."),(0,n.kt)("li",{parentName:"ul"},"Fill the ",(0,n.kt)("strong",{parentName:"li"},"Name"),", ",(0,n.kt)("strong",{parentName:"li"},"Alias")," & ",(0,n.kt)("strong",{parentName:"li"},"IP Address/DNS")," fields according to your ",(0,n.kt)("strong",{parentName:"li"},"Kadiska Rest API")," server settings."),(0,n.kt)("li",{parentName:"ul"},"Apply the ",(0,n.kt)("strong",{parentName:"li"},"App-Monitoring-Kadiska-Watcher-Restapi-custom")," template to the host."),(0,n.kt)("li",{parentName:"ul"},"Once the template is applied, fill in the corresponding macros. Some macros are mandatory.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Mandatory"),(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Macro"),(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"})),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"EXTRAOPTIONS"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Any extra option you may want to add to every command","_","line (eg. a --verbose flag)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"X"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"KADISKAAPICLIENTID"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Kadiska Client ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"X"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"KADISKAAPICLIENTSECRET"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Kadiska Client Secret")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"})),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"KADISKAAPIPORT"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"(Default: '443')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"})),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"KADISKAAPIPROTO"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"(Default: 'https')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"X"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"WATCHERNAME"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Specify Kadiska watcher name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"})),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"TIMEOUT"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}))))),(0,n.kt)("h2",l({},{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for"}),"How to check in the CLI that the configuration is OK and what are the main options for?"),(0,n.kt)("p",null,"Once the plugin is installed, log into your Centreon poller's CLI using the\n",(0,n.kt)("strong",{parentName:"p"},"centreon-engine")," user account (",(0,n.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") and test the plugin by\nrunning the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins//centreon_monitoring_kadiska_restapi.pl \\\n    --plugin=apps::monitoring::kadiska::plugin \\\n    --mode=tracer-statistics \\\n    --client-id='client:xxx' \\\n    --client-secret='my-secret' \\\n    --filter-station-name='Paris-RT' \\\n    --filter-tracer='tracer:xxx' \\\n    --period=15 \\\n    --port='443' \\\n    --proto='https' \\\n    --timeout='' \\\n    --verbose \\\n")),(0,n.kt)("p",null,"The expected command output is shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"OK: Round trip: 2 ms Path length: 9 Packets Loss: 3 % | 'tracer.round.trip.persecond'=2ms;;;0; 'tracer.path.length'=9;;;0; 'tracer.packets.loss.percentage'=3%;;;0;100 \n")),(0,n.kt)("p",null,"All available options for a given mode can be displayed by adding the\n",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," parameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins//centreon_monitoring_kadiska_restapi.pl \\\n    --plugin=apps::monitoring::kadiska::plugin \\\n    --mode=tracer-statistics \\\n    --help\n")),(0,n.kt)("p",null,"All available modes can be displayed by adding the ",(0,n.kt)("inlineCode",{parentName:"p"},"--list-mode")," parameter to\nthe command:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins//centreon_monitoring_kadiska_restapi.pl \\\n    --plugin=apps::monitoring::kadiska::plugin \\\n    --list-mode\n")),(0,n.kt)("h3",l({},{id:"troubleshooting"}),"Troubleshooting"),(0,n.kt)("p",null,"Please find the troubleshooting documentation for the API-based plugins in\nthis ",(0,n.kt)("a",l({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#http-and-api-checks"}),"chapter"),"."))}u.isMDXComponent=!0},7626:(t,e,a)=>{a.d(e,{Z:()=>o});var n=a(67294),r=a(86010);const i="tabItem_Ymn6";function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},l.apply(this,arguments)}function o({children:t,hidden:e,className:a}){return n.createElement("div",l({role:"tabpanel",className:(0,r.Z)(i,a)},{hidden:e}),t)}},67709:(t,e,a)=>{a.d(e,{Z:()=>k});var n=a(67294),r=a(86010),i=a(90980),l=a(35715),o=a(8854),s=a(8241);const p="tabList__CuJ",c="tabItem_LNqP";function d(){return d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},d.apply(this,arguments)}function m(t){var e;const{lazy:a,block:i,defaultValue:m,values:k,groupId:u,className:g}=t,f=n.Children.map(t.children,(t=>{if((0,n.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=k?k:f.map((({props:{value:t,label:e,attributes:a}})=>({value:t,label:e,attributes:a}))),h=(0,l.l)(N,((t,e)=>t.value===e.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var b;const y=null===m?m:null!==(b=null!=m?m:null===(e=f.find((t=>t.props.default)))||void 0===e?void 0:e.props.value)&&void 0!==b?b:f[0].props.value;if(null!==y&&!N.some((t=>t.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${N.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:A}=(0,o.U)(),[I,P]=(0,n.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,s.o5)();if(null!=u){const t=v[u];null!=t&&t!==I&&N.some((e=>e.value===t))&&P(t)}const w=t=>{const e=t.currentTarget,a=T.indexOf(e),n=N[a].value;n!==I&&(O(e),P(n),null!=u&&A(u,String(n)))},K=t=>{let e=null;switch(t.key){case"ArrowRight":{const n=T.indexOf(t.currentTarget)+1;var a;e=null!==(a=T[n])&&void 0!==a?a:T[0];break}case"ArrowLeft":{const a=T.indexOf(t.currentTarget)-1;var n;e=null!==(n=T[a])&&void 0!==n?n:T[T.length-1];break}}null==e||e.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",p)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},g)},N.map((({value:t,label:e,attributes:a})=>n.createElement("li",d({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:t=>T.push(t),onKeyDown:K,onFocus:w,onClick:w},a,{className:(0,r.Z)("tabs__item",c,null==a?void 0:a.className,{"tabs__item--active":I===t})}),null!=e?e:t)))),a?(0,n.cloneElement)(f.filter((t=>t.props.value===I))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((t,e)=>(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==I})))))}function k(t){const e=(0,i.Z)();return n.createElement(m,d({key:String(e)},t))}}}]);