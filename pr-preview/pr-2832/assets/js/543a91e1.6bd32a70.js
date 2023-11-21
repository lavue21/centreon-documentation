"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[62066],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64515:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});n(67294);var a=n(3905),r=n(67709),o=n(7626);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"cloud-aws-health",title:"AWS Health"},u=void 0,c={unversionedId:"integrations/plugin-packs/procedures/cloud-aws-health",id:"integrations/plugin-packs/procedures/cloud-aws-health",title:"AWS Health",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/cloud-aws-health.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-aws-health",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/cloud-aws-health",draft:!1,tags:[],version:"current",frontMatter:{id:"cloud-aws-health",title:"AWS Health"},sidebar:"pp",previous:{title:"AWS ELB",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/cloud-aws-elb"},next:{title:"AWS Lambda",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/cloud-aws-lambda"}},p={},d=[{value:"Overview",id:"overview",level:2},{value:"Plugin-Pack assets",id:"plugin-pack-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Monitored metrics",id:"monitored-metrics",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"AWS Configuration",id:"aws-configuration",level:3},{value:"Plugin dependencies",id:"plugin-dependencies",level:3},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How to check in the CLI that the configuration is OK and what are the main options for ?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-",level:3},{value:"Why do I get the following result:",id:"why-do-i-get-the-following-result",level:3},{value:"<code>UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values</code> ?",id:"unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values-",level:4},{value:"<code>UNKNOWN: Command error:  - An error occurred (AuthFailure) [...]</code> ?",id:"unknown-command-error----an-error-occurred-authfailure--",level:4},{value:"<code>UNKNOWN: 500 Can&#39;t connect to health.us-east-1.amazonaws.com:443 |</code>",id:"unknown-500-cant-connect-to-healthus-east-1amazonawscom443-",level:4}],m={toc:d};function h(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",l({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",l({},{id:"overview"}),"Overview"),(0,a.kt)("p",null,"AWS Health provides personalized information about events that can affect your AWS infrastructure,\nguides you through scheduled changes, and accelerates the troubleshooting of issues that affect your AWS resources and accounts."),(0,a.kt)("p",null,"The AWS Health Centreon Plugin uses the Amazon Health API to collect the related metrics and details about events."),(0,a.kt)("h2",l({},{id:"plugin-pack-assets"}),"Plugin-Pack assets"),(0,a.kt)("h3",l({},{id:"monitored-objects"}),"Monitored objects"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Events related to AWS accounts and resources")),(0,a.kt)("h2",l({},{id:"monitored-metrics"}),"Monitored metrics"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Events",label:"Events",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"events.total.count"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Total number of events")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"events.open.count"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Number of open events")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"events.closed.count"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Number of closed events")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"events.upcoming.count"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Number of upcoming events")))))),(0,a.kt)("h2",l({},{id:"prerequisites"}),"Prerequisites"),(0,a.kt)("h3",l({},{id:"aws-configuration"}),"AWS Configuration"),(0,a.kt)("p",null,"Configure a service account (",(0,a.kt)("em",{parentName:"p"},"access/secret keys")," combo) for which the following privileges have to be granted:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"AWS Privilege"),(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"health:DescribeEvents"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Returns information about events that meet the specified filter criteria.")))),(0,a.kt)("h3",l({},{id:"plugin-dependencies"}),"Plugin dependencies"),(0,a.kt)("p",null,"To interact with Amazon APIs, you can use either use the ",(0,a.kt)("em",{parentName:"p"},"awscli")," binary provided by Amazon or ",(0,a.kt)("em",{parentName:"p"},"paws"),", a Perl AWS SDK (recommended).\nYou must install it on every Centreon poller expected to monitor AWS Health: "),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"perl-Paws-installation",label:"perl-Paws-installation",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"yum install perl-Paws\n"))),(0,a.kt)(o.Z,{value:"aws-cli-installation",label:"aws-cli-installation",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"yum install awscli\n")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For now, it is not possible to use ",(0,a.kt)("em",{parentName:"p"},"paws")," in the following situations:"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"if you are using a proxy to reach AWS Cloudwatch APIs. "),(0,a.kt)("li",{parentName:"ul"},"to automatically add Hosts in Centreon using the ",(0,a.kt)("em",{parentName:"li"},"Host Discovery")," feature"))),(0,a.kt)("h2",l({},{id:"setup"}),"Setup"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin package on every Centreon poller expected to monitor AWS Health:")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Cloud-Aws-Health-Api\n")),(0,a.kt)("ol",l({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,a.kt)("em",{parentName:"li"},"AWS Health"),' Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page'))),(0,a.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin package on every Centreon poller expected to monitor AWS Health:")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Cloud-Aws-Health-Api\n")),(0,a.kt)("ol",l({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin-Pack RPM on the Centreon Central server:")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"yum install centreon-pack-cloud-aws-health.noarch\n")),(0,a.kt)("ol",l({},{start:3}),(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,a.kt)("em",{parentName:"li"},"AWS Health"),' Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page')))),(0,a.kt)("h2",l({},{id:"configuration"}),"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Log into Centreon and add a new Host through "Configuration > Hosts". '),(0,a.kt)("li",{parentName:"ul"},"Select the ",(0,a.kt)("em",{parentName:"li"},"Cloud-Aws-Health")," template to apply to the Host."),(0,a.kt)("li",{parentName:"ul"},"Once the template applied, some Macros marked as 'Mandatory' hereafter have to be configured:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Mandatory"),(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Nom"),(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"AWSSECRETKEY"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"AWS Secret key of your IAM role. Password checkbox must be checked")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"AWSACESSKEY"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"AWS Access key of your IAM role. Password checkbox must be checked")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"AWSREGION"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Region where the instance is running")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"AWSCUSTOMMODE"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Custom mode to get metrics, 'awscli' is the default, you can also use 'paws' perl library")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"})),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"PROXYURL"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Configure proxy URL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"})),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"EXTRAOPTIONS"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Any extra option you may want to add to every command","_","line (eg. a --verbose flag)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"})),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"DUMMYSTATUS"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Host state. Default is OK, do not modify it unless you know what you are doing")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"})),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"DUMMYOUTPUT"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Host check output. Default is 'This is a dummy check'. Customize it with your own if needed")))),(0,a.kt)("h2",l({},{id:"faq"}),"FAQ"),(0,a.kt)("h3",l({},{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-"}),"How to check in the CLI that the configuration is OK and what are the main options for ?"),(0,a.kt)("p",null,"Once the plugin installed, log into your Centreon Poller CLI using the ",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," user account and test the Plugin\nby running the following command (Some of the parameters such as ",(0,a.kt)("inlineCode",{parentName:"p"},"proxyurl")," have to be adjusted):"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_aws_health_api.pl \\\n    --plugin=cloud::aws::health::plugin \\\n    --mode=events \\\n    --custommode='awscli' \\\n    --aws-secret-key='****' \\\n    --aws-access-key='****' \\\n    --proxyurl='http://myproxy.mycompany.org:8080' \\\n    --filter-service='' \\\n    --filter-region='' \\\n    --filter-entity-value='' \\\n    --filter-event-category='issue' \\\n    --filter-event-status='open' \\\n    --warning-total='0' \\\n    --critical-total='1' \\\n    --display-affected-entities \\\n    --verbose\n")),(0,a.kt)("p",null,"Expected command output is shown below: "),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"CRITICAL: Events total: 1 | 'events.total.count'=1;;0:0;0; 'events.open.count'=1;;;0; 'events.closed.count'=0;;;0; 'events.upcoming.count'=0;;;0;\n[service: RDS][region: eu-west-1][status: open][type: AWS_RDS_HARDWARE_MAINTENANCE_SCHEDULED][start: Wed Jul 15 13:00:00 2020][affected entity: doh-sfetoto3]\n")),(0,a.kt)("p",null,"The command above monitors the ",(0,a.kt)("em",{parentName:"p"},"events")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=events"),") of an AWS account identified by the usage of API credentials (",(0,a.kt)("inlineCode",{parentName:"p"},"--aws-secret-key='****' --aws-access-key='****'"),").\nBy default, all types of events will be collected by the Plugin; it's possible though to use a set of specific filters\nto customize the types of results that will be returned by the command. In the example above, only the events categorized as ",(0,a.kt)("em",{parentName:"p"},"issues")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--filter-event-category='issue'"),")\nand having an ",(0,a.kt)("em",{parentName:"p"},"open")," status (",(0,a.kt)("inlineCode",{parentName:"p"},"--filter-event-status='open'"),") will be displayed.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"--display-affected-entities")," option is used to include the reference of the resource to which the event is related."),(0,a.kt)("p",null,"This command would trigger a WARNING alert if the number of events is more than 0 (",(0,a.kt)("inlineCode",{parentName:"p"},"--warning-total='0'"),") and a CRITICAL alert\nfor more than 1 event (",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-total='1'"),")."),(0,a.kt)("p",null,"All the filters that can be used as well as all the available thresholds parameters can be displayed by adding the  ",(0,a.kt)("inlineCode",{parentName:"p"},"--help"),"\nparameter to the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_aws_health_api.pl --plugin=cloud::aws::health::plugin --mode=events --help\n")),(0,a.kt)("h3",l({},{id:"why-do-i-get-the-following-result"}),"Why do I get the following result:"),(0,a.kt)("h4",l({},{id:"unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values-"}),(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values")," ?"),(0,a.kt)("p",null,"This command result means that Amazon Cloudwatch does not have any value for the requested period."),(0,a.kt)("p",null,"This result can be overriden by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"--zeroed")," option in the command. This will force a value of 0 when no metric\nhas been collected and will prevent the UNKNOWN error message. "),(0,a.kt)("h4",l({},{id:"unknown-command-error----an-error-occurred-authfailure--"}),(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: Command error:  - An error occurred (AuthFailure) [...]")," ?"),(0,a.kt)("p",null,"This command result means that the credentials provided don't have enough privileges to perform the underlying AWS Operation."),(0,a.kt)("h4",l({},{id:"unknown-500-cant-connect-to-healthus-east-1amazonawscom443-"}),(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 500 Can't connect to health.us-east-1.amazonaws.com:443 |")),(0,a.kt)("p",null,"This error message means that the Centreon Plugin couldn't successfully connect to the AWS Health API.\nCheck that no third party device (such as a firewall) is blocking the request.\nA proxy connection may also be necessary to connect to the API.\nThis can be done by using this option in the command: ",(0,a.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany:8080'"),"."))}h.isMDXComponent=!0},7626:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function i({children:e,hidden:t,className:n}){return a.createElement("div",l({role:"tabpanel",className:(0,r.Z)(o,n)},{hidden:t}),e)}},67709:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(67294),r=n(86010),o=n(90980),l=n(35715),i=n(8854),s=n(8241);const u="tabList__CuJ",c="tabItem_LNqP";function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p.apply(this,arguments)}function d(e){var t;const{lazy:n,block:o,defaultValue:d,values:m,groupId:h,className:k}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=m?m:f.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),v=(0,l.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var b;const y=null===d?d:null!==(b=null!=d?d:null===(t=f.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==b?b:f[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:w}=(0,i.U)(),[C,O]=(0,a.useState)(y),A=[],{blockElementScrollPositionUntilNextRender:P}=(0,s.o5)();if(null!=h){const e=N[h];null!=e&&e!==C&&g.some((t=>t.value===e))&&O(e)}const T=e=>{const t=e.currentTarget,n=A.indexOf(t),a=g[n].value;a!==C&&(P(t),O(a),null!=h&&w(h,String(a)))},S=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=A.indexOf(e.currentTarget)+1;var n;t=null!==(n=A[a])&&void 0!==n?n:A[0];break}case"ArrowLeft":{const n=A.indexOf(e.currentTarget)-1;var a;t=null!==(a=A[n])&&void 0!==a?a:A[A.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},k)},g.map((({value:e,label:t,attributes:n})=>a.createElement("li",p({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>A.push(e),onKeyDown:S,onFocus:T,onClick:T},n,{className:(0,r.Z)("tabs__item",c,null==n?void 0:n.className,{"tabs__item--active":C===e})}),null!=t?t:e)))),n?(0,a.cloneElement)(f.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function m(e){const t=(0,o.Z)();return a.createElement(d,p({key:String(t)},e))}}}]);