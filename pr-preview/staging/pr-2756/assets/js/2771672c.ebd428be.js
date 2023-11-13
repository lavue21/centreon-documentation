"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[21006],{73895:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>k,frontMatter:()=>c,metadata:()=>u,toc:()=>m});n(67294);var o=n(3905),r=n(51715),a=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const c={id:"cloud-azure-management-discover",title:"Azure Discover"},p=void 0,u={unversionedId:"integrations/plugin-packs/procedures/cloud-azure-management-discover",id:"integrations/plugin-packs/procedures/cloud-azure-management-discover",title:"Azure Discover",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/cloud-azure-management-discover.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-azure-management-discover",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/cloud-azure-management-discover",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/cloud-azure-management-discover.md",tags:[],version:"current",frontMatter:{id:"cloud-azure-management-discover",title:"Azure Discover"},sidebar:"pp",previous:{title:"Azure Database for MySQL",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/cloud-azure-database-mysql"},next:{title:"Azure Elastic Pool",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/procedures/cloud-azure-database-elasticpool"}},d={},m=[{value:"Overview",id:"overview",level:2},{value:"Pack Assets",id:"pack-assets",level:2},{value:"Discovery rules",id:"discovery-rules",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Set up a discovery job",id:"set-up-a-discovery-job",level:2},{value:"Access parameters",id:"access-parameters",level:3},{value:"Discovery parameters",id:"discovery-parameters",level:3},{value:"Run the discovery job and display results",id:"run-the-discovery-job-and-display-results",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"The Azure credentials have changed and the Plugin does not work anymore",id:"the-azure-credentials-have-changed-and-the-plugin-does-not-work-anymore",level:3},{value:"<code>UNKNOWN: Login endpoint API returns error code &#39;ERROR_NAME&#39; (add --debug option for detailed message)</code>",id:"unknown-login-endpoint-api-returns-error-code-error_name-add---debug-option-for-detailed-message",level:3},{value:"<code>UNKNOWN: 500 Can&#39;t connect to login.microsoftonline.com:443</code>",id:"unknown-500-cant-connect-to-loginmicrosoftonlinecom443",level:3}],h={toc:m},g="wrapper";function k(e){var{components:t}=e,c=l(e,["components"]);return(0,o.kt)(g,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){i(e,t,n[t])}))}return e}({},h,c),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The Centreon Monitoring Connector ",(0,o.kt)("em",{parentName:"p"},"Azure Discover")," is a ",(0,o.kt)("em",{parentName:"p"},"super")," Pack allowing to discover a whole Azure infrastructure for a given\nsubscription.\nThis Pack relies on the Azure Monitor API to fetch the resources of the Azure infrastructure and on all of the Centreon Monitoring Connectors\nfor Azure to set templates and proper monitoring indicators for each type of resource."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This Monitoring Connector is only compatible with the 'api' custom-mode. 'azcli' is not supported for this usage.")),(0,o.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The Centreon Monitoring Connector ",(0,o.kt)("em",{parentName:"p"},"Azure Discover")," is only a ",(0,o.kt)("em",{parentName:"p"},"discovery")," pack. It doesn't natively provide any templates nor\nindicators to monitor Azure resources")),(0,o.kt)("h3",{id:"discovery-rules"},"Discovery rules"),(0,o.kt)("p",null,"The Centreon Monitoring Connector ",(0,o.kt)("em",{parentName:"p"},"Azure Discover")," includes a Host Discovery ",(0,o.kt)("em",{parentName:"p"},"provider")," to automatically discover all of the Azure resources\nof a given subscription and add them to the Centreon configuration using the dedicated Host Templates.\nThis provider is named ",(0,o.kt)("strong",{parentName:"p"},"Microsoft Azure Management Discover"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This discovery feature is only compatible with the 'api' custom mode.")),(0,o.kt)("p",null,"More information about the Host Discovery module is available in the Centreon documentation:\n",(0,o.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/hosts-discovery"},"Host Discovery")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Please find all the prerequisites needed for Centreon to get information from Azure on the ",(0,o.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/getting-started/how-to-guides/azure-credential-configuration"},"dedicated page"),"."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,o.kt)(a.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install the Plugin on every Centreon Poller expected to discover Azure resources:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Azure-Management-Discover-Api\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,o.kt)("em",{parentName:"li"},"Azure Discover")," Centreon Monitoring Connector on the ",(0,o.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page\nYou'll be prompted to install several other Azure Monitoring Connectors as dependencies (they will be used to set the proper templates/indicators\non the discovered elements)."))),(0,o.kt)(a.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install the Plugin on every Centreon Poller expected to discover Azure resources:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Azure-Management-Discover-Api\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Install the Centreon Monitoring Connector RPM on the Centreon Central server, install all of the Centreon Monitoring Connectors for Azure, in order\nto make all the dependencies available:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-azure\\*\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,o.kt)("em",{parentName:"li"},"Azure Discover")," Centreon Monitoring Connector on the ",(0,o.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager")," page\nYou'll be prompted to install several other Azure Monitoring Connectors as dependencies (they will be used to set the proper templates/indicators\non the discovered elements).")))),(0,o.kt)("h2",{id:"set-up-a-discovery-job"},"Set up a discovery job"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The general specifications and mechanics of the ",(0,o.kt)("em",{parentName:"p"},"Host Discovery")," feature is available ",(0,o.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/hosts-discovery"},"here"))),(0,o.kt)("h3",{id:"access-parameters"},"Access parameters"),(0,o.kt)("p",null,"Create a new discovery job and select ",(0,o.kt)("strong",{parentName:"p"},"Azure Management Discover")," as the provider. Click on ",(0,o.kt)("em",{parentName:"p"},"next")," and set the authentication parameters\nas well as optional access parameters:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(49700).Z,width:"1440",height:"787"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"Centreon Poller")," from where the discovery job will be launched"),(0,o.kt)("li",{parentName:"ul"},"If necessary, add an entreprise ",(0,o.kt)("strong",{parentName:"li"},"proxy URL and port")," to use to reach the Azure API"),(0,o.kt)("li",{parentName:"ul"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"Azure credentials profile")," linked to the subscription to be used")),(0,o.kt)("p",null,"The first time, a new credentials profile has to be created. You can do so by clicking the '+' button and set the proper Azure\nauthentication parameters:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(92328).Z,width:"888",height:"588"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"All of the fields of the ",(0,o.kt)("em",{parentName:"p"},"credentials")," form must be filled.")),(0,o.kt)("p",null,"Click on ",(0,o.kt)("em",{parentName:"p"},"confirm")," then ",(0,o.kt)("em",{parentName:"p"},"next")," to go to the next step of the wizard and adjust the discovery parameters."),(0,o.kt)("h3",{id:"discovery-parameters"},"Discovery parameters"),(0,o.kt)("p",null,"If necessary, adjust the following settings:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(23291).Z,width:"1420",height:"989"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"All the fields of this form are optional")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Azure Location/Resource Group: allows to filter the discovery on a specific ",(0,o.kt)("em",{parentName:"li"},"Location")," or ",(0,o.kt)("em",{parentName:"li"},"Resource Group")),(0,o.kt)("li",{parentName:"ul"},"Filter on namespace/type: only discovers elements of a given namespace/type relative to Azure resources, for example:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Resource namepsace"),": 'Microsoft.Compute'"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Resource type"),": 'virtualMachines'",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"}," Warning ")," To use this filter, it's mandatory to fill ",(0,o.kt)("strong",{parentName:"p"},"both")," ",(0,o.kt)("em",{parentName:"p"},"Resource namespace")," and ",(0,o.kt)("em",{parentName:"p"},"Resource type")," fields")))))),(0,o.kt)("h3",{id:"run-the-discovery-job-and-display-results"},"Run the discovery job and display results"),(0,o.kt)("p",null,"The step 4 of the wizard allows to adjust and set ",(0,o.kt)("strong",{parentName:"p"},"mappers")," if necessary; the Monitoring Connector comes along with predefined ",(0,o.kt)("strong",{parentName:"p"},"mappers")," that\ndon't typically need to be changed. If you have a specific need and want to edit the ",(0,o.kt)("strong",{parentName:"p"},"mappers")," section, refer to\n",(0,o.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/hosts-discovery#how-to-use-the-mappers"},"this documentation")," to do so."),(0,o.kt)("p",null,"Final steps 5 & 6 will allow you to define a specific policy about the data modeling of the discovered results. Although the default configuration\nis usually enough to proceed, ",(0,o.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/hosts-discovery#define-analysis-and-update-policies"},"this documentation"),"\nwill help you to customize it if needed. Coming to step 6, just click on ",(0,o.kt)("em",{parentName:"p"},"finish")," to launch the discovery job."),(0,o.kt)("p",null,"Once the discovery job complete, you can display the results by clicking on ",(0,o.kt)("em",{parentName:"p"},"job results"),". All the available Host Templates\ncorresponding to the discovered Azure resources will be automatically set, like in the example below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(33067).Z,width:"2345",height:"1214"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Some discovered elements may come up without any predefined Host Template; this is usually due to the following reasons:"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"These elements are not supposed to be monitored (Azure ",(0,o.kt)("em",{parentName:"li"},"technical")," assets or dependencies of other assets)"),(0,o.kt)("li",{parentName:"ul"},"These ressources cannot yet be monitored using the Centreon Monitoring Connectors"))),(0,o.kt)("p",null,"Just select the elements you want to add to the Centreon configuration and click on ",(0,o.kt)("em",{parentName:"p"},"save"),". And... you're done !"),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("h3",{id:"the-azure-credentials-have-changed-and-the-plugin-does-not-work-anymore"},"The Azure credentials have changed and the Plugin does not work anymore"),(0,o.kt)("p",null,"The Plugin is using a cache file to keep connection information and avoid an authentication at each call.\nIf some of the authentication parameters change, you must delete the cache file. "),(0,o.kt)("p",null,"The cache file can be found within  ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/centreon/centplugins/")," folder with a name similar to azure",(0,o.kt)("em",{parentName:"p"},"api"),(0,o.kt)("inlineCode",{parentName:"p"},"<md5>_<md5>_<md5>_<md5>"),"."),(0,o.kt)("h3",{id:"unknown-login-endpoint-api-returns-error-code-error_name-add---debug-option-for-detailed-message"},(0,o.kt)("inlineCode",{parentName:"h3"},"UNKNOWN: Login endpoint API returns error code 'ERROR_NAME' (add --debug option for detailed message)")),(0,o.kt)("p",null,"When I run my command I obtain the following error message:\n",(0,o.kt)("inlineCode",{parentName:"p"},"UNKNOWN: Login endpoint API returns error code 'ERROR_NAME' (add --debug option for detailed message)"),"."),(0,o.kt)("p",null,"It means that some parameters used to authenticate the API request are wrong. The 'ERROR_NAME' string gives\nsome hints about where the problem stands. "),(0,o.kt)("h3",{id:"unknown-500-cant-connect-to-loginmicrosoftonlinecom443"},(0,o.kt)("inlineCode",{parentName:"h3"},"UNKNOWN: 500 Can't connect to login.microsoftonline.com:443")),(0,o.kt)("p",null,"This error message means that the Centreon Plugin couldn't successfully connect to the Azure Login API. Check that no third party\ndevice (such as a firewall) is blocking the request. A proxy connection may also be necessary to connect to the API."))}k.isMDXComponent=!0},49700:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/cloud-azure-management-discover-accessparameters-c85305f4c20a6c1f72508719a8a6b34d.png"},92328:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/cloud-azure-management-discover-credentials-8a4b16407ab727352e57ebbee1cc2904.png"},23291:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/cloud-azure-management-discover-discoparameters-d99e258a4afa59a434f57b762ebebfc1.png"},33067:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/cloud-azure-management-discover-results-908bb9d1f1a2e54a6e4420867347e16b.png"}}]);