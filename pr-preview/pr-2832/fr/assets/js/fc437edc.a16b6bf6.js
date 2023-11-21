"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[87753],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,g=c["".concat(i,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7626:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function s({children:e,hidden:t,className:n}){return a.createElement("div",o({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},67709:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(67294),r=n(86010),l=n(90980),o=n(35715),s=n(8854),i=n(8241);const u="tabList__CuJ",p="tabItem_LNqP";function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}function c(e){var t;const{lazy:n,block:l,defaultValue:c,values:d,groupId:g,className:h}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=d?d:k.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),y=(0,o.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var f;const b=null===c?c:null!==(f=null!=c?c:null===(t=k.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==f?f:k[0].props.value;if(null!==b&&!v.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:_}=(0,s.U)(),[w,O]=(0,a.useState)(b),C=[],{blockElementScrollPositionUntilNextRender:T}=(0,i.o5)();if(null!=g){const e=N[g];null!=e&&e!==w&&v.some((t=>t.value===e))&&O(e)}const x=e=>{const t=e.currentTarget,n=C.indexOf(t),a=v[n].value;a!==w&&(T(t),O(a),null!=g&&_(g,String(a)))},E=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=C.indexOf(e.currentTarget)+1;var n;t=null!==(n=C[a])&&void 0!==n?n:C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;var a;t=null!==(a=C[n])&&void 0!==a?a:C[C.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},h)},v.map((({value:e,label:t,attributes:n})=>a.createElement("li",m({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>C.push(e),onKeyDown:E,onFocus:x,onClick:x},n,{className:(0,r.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":w===e})}),null!=t?t:e)))),n?(0,a.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,l.Z)();return a.createElement(c,m({key:String(t)},e))}},49683:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>c});n(67294);var a=n(3905),r=n(67709),l=n(7626);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={id:"sc-pagerduty-events",title:"PagerDuty Events"},u=void 0,p={unversionedId:"integrations/event-management/sc-pagerduty-events",id:"version-23.10/integrations/event-management/sc-pagerduty-events",title:"PagerDuty Events",description:"Hello community! We're looking for a contributor to help us to translate the content in french. If it's you, let us know and ping us on slack.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/integrations/event-management/sc-pagerduty-events.md",sourceDirName:"integrations/event-management",slug:"/integrations/event-management/sc-pagerduty-events",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/docs/integrations/event-management/sc-pagerduty-events",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/next/i18n/fr/docusaurus-plugin-content-docs/version-23.10/integrations/event-management/sc-pagerduty-events.md",tags:[],version:"23.10",lastUpdatedAt:1700565273,formattedLastUpdatedAt:"21 nov. 2023",frontMatter:{id:"sc-pagerduty-events",title:"PagerDuty Events"},sidebar:"version-23.10/docs",previous:{title:"Opsgenie integration",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/docs/integrations/event-management/sc-opsgenie"},next:{title:"ServiceNow Incident",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/docs/integrations/event-management/sc-service-now-incident-events"}},m={},c=[{value:"PagerDuty + Centreon Integration Benefits",id:"pagerduty--centreon-integration-benefits",level:2},{value:"How it Works",id:"how-it-works",level:2},{value:"Before starting",id:"before-starting",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Add PagerDuty mandatory parameters",id:"add-pagerduty-mandatory-parameters",level:3},{value:"Add PagerDuty optional parameters",id:"add-pagerduty-optional-parameters",level:3},{value:"Standard parameters",id:"standard-parameters",level:3},{value:"Event bulking",id:"event-bulking",level:2},{value:"Event format",id:"event-format",level:2},{value:"service_status event",id:"service_status-event",level:3},{value:"host_status event",id:"host_status-event",level:3},{value:"Custom event format",id:"custom-event-format",level:3},{value:"Curl commands",id:"curl-commands",level:2},{value:"Send events",id:"send-events",level:3}],d={toc:c};function g(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)("wrapper",o({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Hello community! We're looking for a contributor to help us to translate the content in french. If it's you, let us know and ping us on ",(0,a.kt)("a",o({parentName:"p"},{href:"https://centreon.slack.com"}),"slack"),".")),(0,a.kt)("h2",o({},{id:"pagerduty--centreon-integration-benefits"}),"PagerDuty + Centreon Integration Benefits"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Notify on-call system or application administrators when an alert is detected by Centreon."),(0,a.kt)("li",{parentName:"ul"},"Incidents will automatically resolve in PagerDuty when Centreon detects that the check point is back to normal."),(0,a.kt)("li",{parentName:"ul"},"Create high and low urgency incidents based on the state of the alert."),(0,a.kt)("li",{parentName:"ul"},"Send metrics when available to give more insight about the alert.")),(0,a.kt)("h2",o({},{id:"how-it-works"}),"How it Works"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Every time a service or a host's state is checked, the event passes through Centreon Broker, which loads the Stream Connector to send state changes."),(0,a.kt)("li",{parentName:"ul"},"State changes can occur in case of an anomaly detection or metrics falling out of range."),(0,a.kt)("li",{parentName:"ul"},"Once the check point is back to normal, a resolve event will be sent to the PagerDuty service to resolve the alert."),(0,a.kt)("li",{parentName:"ul"},"You can choose from where the stream connector is sending data. Pick the implementation which best meets your needs:")),(0,a.kt)("h2",o({},{id:"before-starting"}),"Before starting"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can send events from a central server, a remote server or a poller."),(0,a.kt)("li",{parentName:"ul"},"By default, this stream connector sends ",(0,a.kt)("strong",{parentName:"li"},"host_status")," and ",(0,a.kt)("strong",{parentName:"li"},"service_status")," events. The event format is shown ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",o({parentName:"strong"},{href:"#event-format"}),"there")),"."),(0,a.kt)("li",{parentName:"ul"},"Aformentioned events are fired each time a host or a service is checked. Various parameters let you filter out events.")),(0,a.kt)("h2",o({},{id:"installation"}),"Installation"),(0,a.kt)("p",null,"Connectez vous en tant que ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," sur le serveur Centreon central en utilisant votre client SSH pr\xe9f\xe9r\xe9."),(0,a.kt)("p",null,"Lancer la commande adapt\xe9e \xe0 votre syst\xe8me :"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"dnf install centreon-stream-connector-pagerduty\n"))),(0,a.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"dnf install centreon-stream-connector-pagerduty\n"))),(0,a.kt)(l.Z,{value:"Debian 11",label:"Debian_11",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"apt install centreon-stream-connector-pagerduty\n")))),(0,a.kt)("h2",o({},{id:"configuration"}),"Configuration"),(0,a.kt)("p",null,"To configure your stream connector, you must ",(0,a.kt)("strong",{parentName:"p"},"head over")," the ",(0,a.kt)("strong",{parentName:"p"},"Configuration --\x3e Poller --\x3e Broker configuration")," menu. ",(0,a.kt)("strong",{parentName:"p"},"Select")," the ",(0,a.kt)("strong",{parentName:"p"},"central-broker-master")," configuration (or the appropriate broker configuration if it is a poller or a remote server that will send events) and ",(0,a.kt)("strong",{parentName:"p"},"click")," the ",(0,a.kt)("strong",{parentName:"p"},"Output tab")," when the broker form is displayed."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Add")," a new ",(0,a.kt)("strong",{parentName:"p"},"generic - stream connector")," output and ",(0,a.kt)("strong",{parentName:"p"},"set")," the following fields as follow:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Field"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"PagerDuty events")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Path"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"/usr/share/centreon-broker/lua/pagerduty-events-apiv2.lua")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Filter category"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Neb")))),(0,a.kt)("h3",o({},{id:"add-pagerduty-mandatory-parameters"}),"Add PagerDuty mandatory parameters"),(0,a.kt)("p",null,"Each stream connector has a set of mandatory parameters. To add them you must ",(0,a.kt)("strong",{parentName:"p"},"click")," on the ",(0,a.kt)("strong",{parentName:"p"},"+Add a new entry")," button located ",(0,a.kt)("strong",{parentName:"p"},"below")," the ",(0,a.kt)("strong",{parentName:"p"},"filter category")," input."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Value explanation"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Value exemple"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"pdy_routing_key"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"the event api key for pagerduty"),(0,a.kt)("td",o({parentName:"tr"},{align:null}))))),(0,a.kt)("h3",o({},{id:"add-pagerduty-optional-parameters"}),"Add PagerDuty optional parameters"),(0,a.kt)("p",null,"Some stream connectors have a set of optional parameters dedicated to the Software that they are associated with. To add them you must ",(0,a.kt)("strong",{parentName:"p"},"click")," on the ",(0,a.kt)("strong",{parentName:"p"},"+Add a new entry")," button located ",(0,a.kt)("strong",{parentName:"p"},"below")," the ",(0,a.kt)("strong",{parentName:"p"},"filter category")," input."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Value explanation"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"pdy_centreon_url"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"url of your Centreon server"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"http://set.pdy_centreon_url.parameter"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"http_server_url"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"url of the PagerDuty event endpoint"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"https://events.pagerduty.com/v2/enqueue"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"client"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"the PagerDuty client"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"Centreon Stream Connector")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"pdy_source"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"source of the event"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"nil"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"logfile"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"the file in which logs are written"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"/var/log/centreon-broker/pagerduty-events.log")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"number"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"log_level"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"logging level from 1 (errors) to 3 (debug)"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"1")))),(0,a.kt)("h3",o({},{id:"standard-parameters"}),"Standard parameters"),(0,a.kt)("p",null,"All stream connectors can use a set of optional parameters that are made available through Centreon stream connectors lua modules."),(0,a.kt)("p",null,"All those parameters are documented ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",o({parentName:"strong"},{href:"https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters"}),"here")),"."),(0,a.kt)("p",null,"Some of them are overridden by this stream connector."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Default value for the stream connector"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"accepted_categories"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"neb")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"accepted_elements"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"host_status,service_status")))),(0,a.kt)("h2",o({},{id:"event-bulking"}),"Event bulking"),(0,a.kt)("p",null,"This stream connector is not compatible with event bulking. Meaning that the option ",(0,a.kt)("inlineCode",{parentName:"p"},"max_buffer_size")," can't be higher than 1"),(0,a.kt)("h2",o({},{id:"event-format"}),"Event format"),(0,a.kt)("p",null,"This stream connector will send event with the following format."),(0,a.kt)("h3",o({},{id:"service_status-event"}),"service_status event"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-json"}),'{\n   "payload": {\n      "summary": "my_host/my_service: it is on fire",\n      "timestamp": "2021-09-24T14:37:22.000",\n      "severity": "critical",\n      "source": "my_host",\n      "component": "my_service",\n      "group": "hg_1, hg_2",\n      "class": "service",\n      "custom_details": {\n         "Hostseverity": 5,\n         "Serviceseverity": 3,\n         "Hosgroups": "hg_1, hg_2",\n         "Servicegroups": "sg_1, sg_2"\n      },\n      "routing_key": "dzajzd321dzad412",\n      "event_action": "trigger",\n      "dedup_key": "my_host_my_service",\n      "client": "Centreon Stream Connector",\n      "client_url": "https://my_super_centreon.bzh",\n      "links": [\n         {\n            "href": "https://my_super_centreon.bzh/centreon/main.php?p=20202&o=h&host_name=my_host",\n            "text": "Link to Centreon host summary"\n         }\n      ]\n   }\n}\n')),(0,a.kt)("h3",o({},{id:"host_status-event"}),"host_status event"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-json"}),'{\n   "payload": {\n      "summary": "my_host: it is on fire",\n      "timestamp": "2021-09-24T14:37:22.000",\n      "severity": "critical",\n      "source": "my_host",\n      "component": "my_host",\n      "group": "hg_1, hg_2",\n      "class": "host",\n      "custom_details": {\n         "Hostseverity": 5,\n         "Hosgroups": "hg_1, hg_2",\n      },\n      "routing_key": "dzajzd321dzad412",\n      "event_action": "trigger",\n      "dedup_key": "my_host_H",\n      "client": "Centreon Stream Connector",\n      "client_url": "https://my_super_centreon.bzh",\n      "links": [\n         {\n            "href": "https://my_super_centreon.bzh/centreon/main.php?p=20202&o=h&host_name=my_host",\n            "text": "Link to Centreon host summary"\n         }\n      ]\n   }\n}\n')),(0,a.kt)("h3",o({},{id:"custom-event-format"}),"Custom event format"),(0,a.kt)("p",null,"This stream connector allows you to change the format of the event to suit your needs. Only the ",(0,a.kt)("strong",{parentName:"p"},"event")," part of the json is customisable. It also allows you to handle events type that are not handled by default such as ",(0,a.kt)("strong",{parentName:"p"},"ba_status events"),"."),(0,a.kt)("p",null,"In order to use this feature you need to configure a json event format file and add a new stream connector parameter."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",o({parentName:"tr"},{align:null}),"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"format_file"),(0,a.kt)("td",o({parentName:"tr"},{align:null}),"/etc/centreon-broker/pagerduty-events-format.json")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The event format configuration file must be readable by the centreon-broker user")),(0,a.kt)("p",null,"To learn more about custom event format and templating file, head over the following ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",o({parentName:"strong"},{href:"https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/templating.md#templating-documentation"}),"documentation")),"."),(0,a.kt)("h2",o({},{id:"curl-commands"}),"Curl commands"),(0,a.kt)("p",null,"Here is the list of all the curl commands that are used by the stream connector."),(0,a.kt)("h3",o({},{id:"send-events"}),"Send events"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-shell"}),'curl -X POST -H \'content-type: application/json\' \'https://events.pagerduty.com/v2/enqueue\' -d \'{"dedup_key":"<my_host>_H","payload":{"component":"<my_host>","group":"<hg_1>","summary":"winter is coming","class":"host","severity":"info","timestamp":"2021-09-24T14:37:22.000","custom_details":{"Hostgroups":"<hg_1>","Hostseverity":2},"source":"<my_host>"},"event_action":"trigger","client":"Centreon Stream Connector","routing_key":"dzada32193dzbe1fz51xz","links":[{"href":"<centreon_url>","text":"Link to Centreon host summary"}]}\'\n')),(0,a.kt)("p",null,"You must replace all the ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"em"},"<xxxx>"))," inside the above command with their appropriate value. ",(0,a.kt)("em",{parentName:"p"},"<my_host>")," may become ",(0,a.kt)("em",{parentName:"p"},"linuxServerA"),"."))}g.isMDXComponent=!0}}]);