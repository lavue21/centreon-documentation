"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[3505],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,k=c["".concat(i,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7626:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function s({children:e,hidden:t,className:n}){return a.createElement("div",o({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},67709:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(67294),r=n(86010),l=n(90980),o=n(35715),s=n(8854),i=n(8241);const u="tabList__CuJ",p="tabItem_LNqP";function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}function c(e){var t;const{lazy:n,block:l,defaultValue:c,values:d,groupId:k,className:g}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=d?d:h.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),f=(0,o.l)(v,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var N;const b=null===c?c:null!==(N=null!=c?c:null===(t=h.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==N?N:h[0].props.value;if(null!==b&&!v.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:_}=(0,s.U)(),[w,O]=(0,a.useState)(b),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,i.o5)();if(null!=k){const e=y[k];null!=e&&e!==w&&v.some((t=>t.value===e))&&O(e)}const E=e=>{const t=e.currentTarget,n=x.indexOf(t),a=v[n].value;a!==w&&(T(t),O(a),null!=k&&_(k,String(a)))},j=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=x.indexOf(e.currentTarget)+1;var n;t=null!==(n=x[a])&&void 0!==n?n:x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;var a;t=null!==(a=x[n])&&void 0!==a?a:x[x.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},g)},v.map((({value:e,label:t,attributes:n})=>a.createElement("li",m({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>x.push(e),onKeyDown:j,onFocus:E,onClick:E},n,{className:(0,r.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":w===e})}),null!=t?t:e)))),n?(0,a.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,l.Z)();return a.createElement(c,m({key:String(t)},e))}},39620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>c});n(67294);var a=n(3905),r=n(67709),l=n(7626);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={id:"sc-splunk-metrics",title:"Splunk Metrics"},u=void 0,p={unversionedId:"integrations/data-analytics/sc-splunk-metrics",id:"version-23.10/integrations/data-analytics/sc-splunk-metrics",title:"Splunk Metrics",description:"Before starting",source:"@site/versioned_docs/version-23.10/integrations/data-analytics/sc-splunk-metrics.md",sourceDirName:"integrations/data-analytics",slug:"/integrations/data-analytics/sc-splunk-metrics",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/integrations/data-analytics/sc-splunk-metrics",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/next/versioned_docs/version-23.10/integrations/data-analytics/sc-splunk-metrics.md",tags:[],version:"23.10",lastUpdatedAt:1700565273,formattedLastUpdatedAt:"Nov 21, 2023",frontMatter:{id:"sc-splunk-metrics",title:"Splunk Metrics"},sidebar:"version-23.10/docs",previous:{title:"Datadog Metrics",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/integrations/data-analytics/sc-datadog-metrics"},next:{title:"Splunk Events",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/integrations/data-analytics/sc-splunk-events"}},m={},c=[{value:"Before starting",id:"before-starting",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Add Splunk mandatory parameters",id:"add-splunk-mandatory-parameters",level:3},{value:"Add Splunk optional parameters",id:"add-splunk-optional-parameters",level:3},{value:"Standard parameters",id:"standard-parameters",level:3},{value:"Event bulking",id:"event-bulking",level:2},{value:"Event format",id:"event-format",level:2},{value:"service_status event",id:"service_status-event",level:3},{value:"host_status event",id:"host_status-event",level:3},{value:"Custom event format",id:"custom-event-format",level:3},{value:"Curl commands",id:"curl-commands",level:2},{value:"Send events",id:"send-events",level:3}],d={toc:c};function k(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)("wrapper",o({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",o({},{id:"before-starting"}),"Before starting"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can send events from a central server, a remote server or a poller."),(0,a.kt)("li",{parentName:"ul"},"By default, this stream connector sends ",(0,a.kt)("strong",{parentName:"li"},"metrics")," from ",(0,a.kt)("strong",{parentName:"li"},"host_status")," and ",(0,a.kt)("strong",{parentName:"li"},"service_status")," events. The event format is shown ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",o({parentName:"strong"},{href:"#event-format"}),"there")),"."),(0,a.kt)("li",{parentName:"ul"},"Aformentioned events are fired each time a host or a service is checked. Various parameters let you filter out events.")),(0,a.kt)("h2",o({},{id:"installation"}),"Installation"),(0,a.kt)("p",null,"Login as ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," on the Centreon central server using your favorite SSH client."),(0,a.kt)("p",null,"Run the command according on your system:"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"dnf install centreon-stream-connector-splunk\n"))),(0,a.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"dnf install centreon-stream-connector-splunk\n"))),(0,a.kt)(l.Z,{value:"Debian 11",label:"Debian_11",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"apt install centreon-stream-connector-splunk\n")))),(0,a.kt)("h2",o({},{id:"configuration"}),"Configuration"),(0,a.kt)("p",null,"To configure your stream connector, you must ",(0,a.kt)("strong",{parentName:"p"},"head over")," the ",(0,a.kt)("strong",{parentName:"p"},"Configuration --\x3e Poller --\x3e Broker configuration")," menu. ",(0,a.kt)("strong",{parentName:"p"},"Select")," the ",(0,a.kt)("strong",{parentName:"p"},"central-broker-master")," configuration (or the appropriate broker configuration if it is a poller or a remote server that will send events) and ",(0,a.kt)("strong",{parentName:"p"},"click")," the ",(0,a.kt)("strong",{parentName:"p"},"Output tab")," when the broker form is displayed."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Add")," a new ",(0,a.kt)("strong",{parentName:"p"},"generic - stream connector")," output and ",(0,a.kt)("strong",{parentName:"p"},"set")," the following fields as follow:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Field"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Splunk metrics")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Path"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"/usr/share/centreon-broker/lua/splunk-metrics-apiv2.lua")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Filter category"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Neb")))),(0,a.kt)("h3",o({},{id:"add-splunk-mandatory-parameters"}),"Add Splunk mandatory parameters"),(0,a.kt)("p",null,"Each stream connector has a set of mandatory parameters. To add them you must ",(0,a.kt)("strong",{parentName:"p"},"click")," on the ",(0,a.kt)("strong",{parentName:"p"},"+Add a new entry")," button located ",(0,a.kt)("strong",{parentName:"p"},"below")," the ",(0,a.kt)("strong",{parentName:"p"},"filter category")," input."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Value explanation"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Value exemple"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"http_server_url"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"the url of the Splunk service collector"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"https://mysplunk.centreon.com:8088/services/collector"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"splunk_token"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Token to use the event collector api"),(0,a.kt)("td",o({parentName:"tr"},{align:null}))))),(0,a.kt)("h3",o({},{id:"add-splunk-optional-parameters"}),"Add Splunk optional parameters"),(0,a.kt)("p",null,"Some stream connectors have a set of optional parameters dedicated to the Software that are associated with. To add them you must ",(0,a.kt)("strong",{parentName:"p"},"click")," on the ",(0,a.kt)("strong",{parentName:"p"},"+Add a new entry")," button located ",(0,a.kt)("strong",{parentName:"p"},"below")," the ",(0,a.kt)("strong",{parentName:"p"},"filter category")," input."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Value explanation"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"splunk_sourcetype"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Identifies the data structure of the event"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"_json")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"splunk_host"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Name or address of the server that generated the event"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Central")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"splunk_index"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Index where the events are stored"),(0,a.kt)("td",o({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"splunk_source"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"source of the http event collector. like ",(0,a.kt)("inlineCode",{parentName:"td"},"http:<name_of_index>")),(0,a.kt)("td",o({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"logfile"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"the file in which logs are written"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"/var/log/centreon-broker/splunk-metrics.log")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"number"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"log_level"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"logging level from 1 (errors) to 3 (debug)"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"1")))),(0,a.kt)("h3",o({},{id:"standard-parameters"}),"Standard parameters"),(0,a.kt)("p",null,"All stream connectors can use a set of optional parameters that are made available through Centreon stream connectors lua modules."),(0,a.kt)("p",null,"All those parameters are documented ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",o({parentName:"strong"},{href:"https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters"}),"here"))),(0,a.kt)("p",null,"Some of them are overridden by this stream connector."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Default value for the stream connector"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"accepted_categories"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"neb")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"accepted_elements"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"host_status,service_status")))),(0,a.kt)("h2",o({},{id:"event-bulking"}),"Event bulking"),(0,a.kt)("p",null,"This stream connector is compatible with event bulking. Meaning that it is able to send more that one event in each call to the Splunk REST API."),(0,a.kt)("p",null,"To use this feature you must add the following parameter in your stream connector configuration."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"number"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"max_buffer_size"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"more than one"))))),(0,a.kt)("h2",o({},{id:"event-format"}),"Event format"),(0,a.kt)("p",null,"This stream connector will send event with the following format."),(0,a.kt)("h3",o({},{id:"service_status-event"}),"service_status event"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-json"}),'{\n  "sourcetype": "_json",\n  "source": "http:my_index",\n  "index": "my_index",\n  "host": "Central",\n  "time": 1630590530,\n  "fields": {\n    "event_type": "service",\n    "state": 2,\n    "state_type": 1,\n    "hostname": "my_host",\n    "service_description": "my_service",\n    "ctime": 1630590520,\n    "metric: pl": 0,\n    "metric: rta": 10,\n    "metric: rtmin": 5,\n    "metric: rtmax": 15\n  }\n}\n')),(0,a.kt)("h3",o({},{id:"host_status-event"}),"host_status event"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-json"}),'{\n  "sourcetype": "_json",\n  "source": "http:my_index",\n  "index": "my_index",\n  "host": "Central",\n  "time": 1630590530,\n  "fields": {\n    "event_type": "host",\n    "state": 1,\n    "state_type": 1,\n    "hostname": "my_host",\n    "ctime": 1630590520,\n    "metric: pl": 0,\n    "metric: rta": 10,\n    "metric: rtmin": 5,\n    "metric: rtmax": 15\n  }\n}\n')),(0,a.kt)("h3",o({},{id:"custom-event-format"}),"Custom event format"),(0,a.kt)("p",null,'You can"t change the format of the event for metrics oriented stream connectors.'),(0,a.kt)("h2",o({},{id:"curl-commands"}),"Curl commands"),(0,a.kt)("p",null,"Here is the list of all the curl commands that are used by the stream connector."),(0,a.kt)("h3",o({},{id:"send-events"}),"Send events"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-shell"}),'curl -X POST -H "content-type: application/json" -H "authorization: Splunk <splunk_token>" \'<http_server_url>\' -d \'{"sourcetype": "<splunk_sourcetype>","source": "<splunk_source>","index": "<splunk_index>","host": "<splunk_host>","time": <epoch_timestamp>,"event": {"event_type": "host","state": 1,"state_type": 1,"hostname":"my_host","ctime": 1630590520,"metric: pl": 0,"metric: rta": 10,"metric: rtmin": 5,"metric: rtmax": 15}}\'\n')),(0,a.kt)("p",null,"You must replace all the ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"em"},"<xxxx>"))," inside the above command with their appropriate value. ",(0,a.kt)("em",{parentName:"p"},"<splunk_sourcetype>")," may become ",(0,a.kt)("em",{parentName:"p"},"_json"),"."))}k.isMDXComponent=!0}}]);