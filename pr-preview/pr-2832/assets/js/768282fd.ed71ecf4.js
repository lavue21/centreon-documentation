"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[42902],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},82849:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>d});a(67294);var n=a(3905),r=a(67709),l=a(7626);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const s={id:"cloud-aws-efs",title:"Amazon EFS"},c=void 0,p={unversionedId:"integrations/plugin-packs/procedures/cloud-aws-efs",id:"integrations/plugin-packs/procedures/cloud-aws-efs",title:"Amazon EFS",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/cloud-aws-efs.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-aws-efs",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/cloud-aws-efs",draft:!1,tags:[],version:"current",frontMatter:{id:"cloud-aws-efs",title:"Amazon EFS"},sidebar:"pp",previous:{title:"Amazon ElastiCache",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/cloud-aws-elasticache"},next:{title:"Amazon FSx",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/cloud-aws-fsx"}},u={},d=[{value:"Overview",id:"overview",level:2},{value:"Plugin Pack Assets",id:"plugin-pack-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Discovery Rules",id:"discovery-rules",level:3},{value:"Collected Metrics",id:"collected-metrics",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"AWS Privileges",id:"aws-privileges",level:3},{value:"Plugin dependencies",id:"plugin-dependencies",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How to check in the CLI that the configuration is OK and what are the main options for ?",id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-",level:3},{value:"Why do I get the following result <code>UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values</code> ?",id:"why-do-i-get-the-following-result-unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values-",level:3}],m={toc:d};function f(e){var{components:t}=e,a=i(e,["components"]);return(0,n.kt)("wrapper",o({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",o({},{id:"overview"}),"Overview"),(0,n.kt)("p",null,"Amazon Elastic File System (Amazon EFS) provides a simple, scalable, fully managed elastic NFS file system for use with AWS Cloud services and on-premises resources. It is built to scale on demand to petabytes without disrupting applications, growing and shrinking automatically as you add and remove files, eliminating the need to provision and manage capacity to accommodate growth."),(0,n.kt)("h2",o({},{id:"plugin-pack-assets"}),"Plugin Pack Assets"),(0,n.kt)("h3",o({},{id:"monitored-objects"}),"Monitored Objects"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Filesystems")),(0,n.kt)("h3",o({},{id:"discovery-rules"}),"Discovery Rules"),(0,n.kt)("p",null,"This pack provides a host discovery rule:"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Hosts",label:"Hosts",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:"left"}),"Rule name"),(0,n.kt)("th",o({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"Cloud-Aws-Efs-Api-HostDiscovery"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"Discover File Systems from your Cloudwatch endpoint"))))),(0,n.kt)(l.Z,{value:"Services",label:"Services",mdxType:"TabItem"},(0,n.kt)("p",null,"No services discovery rule available on this pack"))),(0,n.kt)("h2",o({},{id:"collected-metrics"}),"Collected Metrics"),(0,n.kt)("p",null,"More information about collected metrics is available in the official Amazon documentation: ",(0,n.kt)("a",o({parentName:"p"},{href:"https://docs.aws.amazon.com/efs/latest/ug/monitoring-cloudwatch"}),"https://docs.aws.amazon.com/efs/latest/ug/monitoring-cloudwatch")),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Connections",label:"Connections",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",o({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"ClientConnections"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"The number of client connections to a file system. Unit: Count"))))),(0,n.kt)(l.Z,{value:"Data Usage",label:"Data Usage",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",o({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"DataReadIOBytes"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"The number of bytes for each file system read operation. Unit: Bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"DataWriteIOBytes"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"The number of bytes for each file write operation. Unit: Bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"MetadataIOBytes"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"The number of bytes for each metadata operation. Unit: Bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"TotalIOBytes"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"The number of bytes for each file system operation, including data read, data write, and metadata operations. Unit: Bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"BurstCreditBalance"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"The number of burst credits that a file system has. Burst credits allow a file system to burst to throughput levels above a file system\u2019s baseline level for periods of time. Unit: Bytes")))))),(0,n.kt)("h2",o({},{id:"prerequisites"}),"Prerequisites"),(0,n.kt)("h3",o({},{id:"aws-privileges"}),"AWS Privileges"),(0,n.kt)("p",null,"Whether using a service account or a dedicated monitoring account to monitor Cloudwatch metrics, the following rights have to be granted to the IAM role (accesskey/secretkey):"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:"left"}),"AWS Privilege"),(0,n.kt)("th",o({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"elasticfilesystem:DescribeFileSystems"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"List all EFS Filesystems IDs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"cloudwatch:listMetrics"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"List all metrics from Cloudwatch AWS/EFS namespace")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"cloudwatch:getMetricStatistics"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"Get metrics values from Cloudwatch AWS/EFS namespace")))),(0,n.kt)("h3",o({},{id:"plugin-dependencies"}),"Plugin dependencies"),(0,n.kt)("p",null,"To interact with Amazon APIs, you can use either use awscli binary or paws, a perl AWS SDK (recommended). You must install it on every poller that will monitor AWS resources. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Warning")," At the moment it is not possible to use perl-Paws if you are using a proxy to talk with AWS Cloudwatch APIs. "),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"perl-Paws-installation",label:"perl-Paws-installation",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yum install perl-Paws\n"))),(0,n.kt)(l.Z,{value:"aws-cli-installation",label:"aws-cli-installation",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yum install awscli\n")))),(0,n.kt)("h2",o({},{id:"installation"}),"Installation"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every poller monitoring EFS ressources:")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Cloud-Aws-Efs-Api\n")),(0,n.kt)("ol",o({},{start:2}),(0,n.kt)("li",{parentName:"ol"},'On Centreon Web interface in "Configuration > Plugin packs > Manager", install the "Amazon EFS" Plugin-Pack'))),(0,n.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every poller monitoring EFS ressources:")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Cloud-Aws-Efs-Api\n")),(0,n.kt)("ol",o({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"Installer the Centreon Plugin-Pack from the RPM:")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yum install centreon-pack-cloud-aws-efs.noarch\n")),(0,n.kt)("ol",o({},{start:3}),(0,n.kt)("li",{parentName:"ol"},'On Centreon Web interface in "Configuration > Plugin packs > Manager", install the "Amazon EFS" Plugin-Pack:')))),(0,n.kt)("h2",o({},{id:"configuration"}),"Configuration"),(0,n.kt)("p",null,'Adding a host into Centreon, link it to the template named "Cloud-Aws-EFS-custom". Once the template applied, some macros have to be configured:'),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:"left"}),"Mandatory"),(0,n.kt)("th",o({parentName:"tr"},{align:"left"}),"Name"),(0,n.kt)("th",o({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"X"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"AWSSECRETKEY"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"AWS Secret key of your IAM role. Password checkbox must be checked")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"X"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"AWSACESSKEY"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"AWS Access key of your IAM role. Password checkbox must be checked")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"X"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"AWSREGION"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"Region where the instance is running")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"X"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"AWSCUSTOMMODE"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"Custom mode to get metrics, 'awscli' is the default, you can also use 'paws' perl library")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"X"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"AWSFILESYSTEMID"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"Name of the FileSystem to be monitored")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"})),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"PROXYURL"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"Configure proxy URL information")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"})),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"EXTRAOPTIONS"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"Any extraoptions you may want to add to every command","_","line (eg. a --verbose flag)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"})),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"DUMMYSTATUS"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"Host state. Default is OK, do not modify it until you know what you are doing")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"})),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"DUMMYOUTPUT"),(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"Host check output. Default is 'This is a dummy check'. Customize it with your own if needed")))),(0,n.kt)("h2",o({},{id:"faq"}),"FAQ"),(0,n.kt)("h3",o({},{id:"how-to-check-in-the-cli-that-the-configuration-is-ok-and-what-are-the-main-options-for-"}),"How to check in the CLI that the configuration is OK and what are the main options for ?"),(0,n.kt)("p",null,"Once the plugin installed, log into your poller using the centreon-engine user account and test by running the following command (Parameters such as ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"proxyurl"),"have to be adjusted):"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins//centreon_aws_efs_api.pl \\\n    --plugin=cloud::aws::efs::plugin \\\n    --mode=connections \\\n    --custommode='awscli' \\\n    --aws-secret-key='*******************' \\\n    --aws-access-key='**********' \\\n    --region='eu-west-1' \\\n    --name='fs-1234abcd' \\\n    --proxyurl='http://myproxy.mycompany.org:8080'\n    --filter-metric='' \\\n    --statistic='average' \\\n    --timeframe='600' \\\n    --period='60' \\\n    --warning-client-connections='25' \\\n    --critical-client-connections='50' \\\n    --verbose\n\nOK: 'fs-1234abcd' Statistic 'Sum' Metrics ClientConnections: 19.00 | 'client-connections_sum'=19;;;;\nEFS FileSystemId'fs-1234abcd'\nStatistic 'Sum' Metrics ClientConnections: 19.00\n\n")),(0,n.kt)("p",null,"The command above gets the number of client connections (",(0,n.kt)("inlineCode",{parentName:"p"},"--mode=connections"),") on the ",(0,n.kt)("em",{parentName:"p"},"fs-1234abcd")," filesystem (",(0,n.kt)("inlineCode",{parentName:"p"},"--name='fs-1234abcd'"),"). This filesystem is hosted on the ",(0,n.kt)("em",{parentName:"p"},"eu-west-1")," AWS region cloud (",(0,n.kt)("inlineCode",{parentName:"p"},"--region='eu-west-1'"),"). The calculated metric is a sum of values (",(0,n.kt)("inlineCode",{parentName:"p"},"--statistic='sum'"),") on a 600 secondes / 10 min period (",(0,n.kt)("inlineCode",{parentName:"p"},"--timeframe='600'"),") with one sample per 60s / 1 minute (",(0,n.kt)("inlineCode",{parentName:"p"},"--period='60'"),")."),(0,n.kt)("p",null,"This command would trigger a WARNING alert if the calculated value raises beyond 25 and a CRITICAL value beyond 50."),(0,n.kt)("p",null,"All the options that can be used with this plugin can be found over the ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," command:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"/usr/lib/centreon/plugins//centreon_aws_efs_api.pl --plugin=cloud::aws::efs::plugin --mode=connections --help")),(0,n.kt)("h3",o({},{id:"why-do-i-get-the-following-result-unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values-"}),"Why do I get the following result ",(0,n.kt)("inlineCode",{parentName:"h3"},"UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values")," ?"),(0,n.kt)("p",null,"This command result means that Amazon Cloudwatch does not have any value for the requested period.\nThis result can be overriden by adding the ",(0,n.kt)("inlineCode",{parentName:"p"},"--zeroed")," option in the command. This will force a value of 0 when no metric has been collected and will prevent the UNKNOWN error message"))}f.isMDXComponent=!0},7626:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function i({children:e,hidden:t,className:a}){return n.createElement("div",o({role:"tabpanel",className:(0,r.Z)(l,a)},{hidden:t}),e)}},67709:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(67294),r=a(86010),l=a(90980),o=a(35715),i=a(8854),s=a(8241);const c="tabList__CuJ",p="tabItem_LNqP";function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u.apply(this,arguments)}function d(e){var t;const{lazy:a,block:l,defaultValue:d,values:m,groupId:f,className:k}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=m?m:h.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),y=(0,o.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var b;const v=null===d?d:null!==(b=null!=d?d:null===(t=h.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==b?b:h[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:w}=(0,i.U)(),[O,T]=(0,n.useState)(v),C=[],{blockElementScrollPositionUntilNextRender:S}=(0,s.o5)();if(null!=f){const e=N[f];null!=e&&e!==O&&g.some((t=>t.value===e))&&T(e)}const A=e=>{const t=e.currentTarget,a=C.indexOf(t),n=g[a].value;n!==O&&(S(t),T(n),null!=f&&w(f,String(n)))},P=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;var a;t=null!==(a=C[n])&&void 0!==a?a:C[0];break}case"ArrowLeft":{const a=C.indexOf(e.currentTarget)-1;var n;t=null!==(n=C[a])&&void 0!==n?n:C[C.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},k)},g.map((({value:e,label:t,attributes:a})=>n.createElement("li",u({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>C.push(e),onKeyDown:P,onFocus:A,onClick:A},a,{className:(0,r.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":O===e})}),null!=t?t:e)))),a?(0,n.cloneElement)(h.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,l.Z)();return n.createElement(d,u({key:String(t)},e))}}}]);