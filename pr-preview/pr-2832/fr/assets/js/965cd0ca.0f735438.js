"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[33526],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(k,l(l({ref:t},s),{},{components:r})):n.createElement(k,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},12125:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>s});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={id:"cloud-azure-network-networkinterface",title:"Azure Network Interface"},i=void 0,c={unversionedId:"integrations/plugin-packs/procedures/cloud-azure-network-networkinterface",id:"integrations/plugin-packs/procedures/cloud-azure-network-networkinterface",title:"Azure Network Interface",description:"Prerequisites",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-azure-network-networkinterface.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-azure-network-networkinterface",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/cloud-azure-network-networkinterface",draft:!1,tags:[],version:"current",frontMatter:{id:"cloud-azure-network-networkinterface",title:"Azure Network Interface"},sidebar:"pp",previous:{title:"Azure CDN",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/cloud-azure-network-cdn"},next:{title:"Azure Public IP",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/cloud-azure-network-publicip"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Centreon Plugin",id:"centreon-plugin",level:3},{value:"Perl dependencies (for &#39;api&#39; custom mode)",id:"perl-dependencies-for-api-custom-mode",level:3},{value:"Azure CLI 2.0 (for &#39;azcli&#39; custom mode)",id:"azure-cli-20-for-azcli-custom-mode",level:3},{value:"Centreon Configuration",id:"centreon-configuration",level:2},{value:"Create a new host",id:"create-a-new-host",level:3},{value:"Set host macros",id:"set-host-macros",level:3},{value:"Common macros",id:"common-macros",level:4},{value:"&#39;api&#39; custom mode macros",id:"api-custom-mode-macros",level:4},{value:"&#39;azcli&#39; custom mode macros",id:"azcli-custom-mode-macros",level:4},{value:"Available metrics",id:"available-metrics",level:2}],u={toc:s};function m(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",a({},{id:"prerequisites"}),"Prerequisites"),(0,n.kt)("h3",a({},{id:"centreon-plugin"}),"Centreon Plugin"),(0,n.kt)("p",null,"Install this plugin on each needed poller:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-shell"}),"yum install centreon-plugin-Cloud-Azure-Network-NetworkInterface-Api\n")),(0,n.kt)("h3",a({},{id:"perl-dependencies-for-api-custom-mode"}),"Perl dependencies (for 'api' custom mode)"),(0,n.kt)("p",null,"By installing the plugin, some perl depencies will be installed :"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"JSON::XS\nDateTime\nDigest::MD5\nDigest::SHA\nLWP::UserAgent\nLWP::Protocol::https\nIO::Socket::SSL\nURI\nHTTP::ProxyPAC\n")),(0,n.kt)("p",null,"The login and access token handling will be made by the plugin itself."),(0,n.kt)("h3",a({},{id:"azure-cli-20-for-azcli-custom-mode"}),"Azure CLI 2.0 (for 'azcli' custom mode)"),(0,n.kt)("p",null,"The CLI needs at least Python version 2.7\n(",(0,n.kt)("a",a({parentName:"p"},{href:"https://github.com/Azure/azure-cli/blob/dev/doc/install_linux_prerequisites.md"}),"https://github.com/Azure/azure-cli/blob/dev/doc/install_linux_prerequisites.md"),")."),(0,n.kt)("p",null,"On CentOS/RedHat, install with following commands:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),'(As root)\n# rpm --import https://packages.microsoft.com/keys/microsoft.asc\n# echo -e "[azure-cli]\\nname=Azure CLI\\nbaseurl=https://packages.microsoft.com/yumrepos/azure-cli\\nenabled=1\\ngpgcheck=1\\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/azure-cli.repo\n# yum install azure-cli\n(As centreon-engine)\n# az login\n')),(0,n.kt)("p",null,"The shell should prompt:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),"To sign in, use a web browser to open the page https://microsoft.com/devicelogin and enter the code CWT4WQZAD to authenticate.\n")),(0,n.kt)("p",null,"Go to ",(0,n.kt)("a",a({parentName:"p"},{href:"https://microsoft.com/devicelogin"}),"https://microsoft.com/devicelogin")," and enter the given code."),(0,n.kt)("p",null,"Log in with your account credentials. You should use a service account.\nApplication is not yet supported."),(0,n.kt)("p",null,"The command line should now show:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{}),'[\n  {\n    "cloudName": "AzureCloud",\n    "id": "0ef83f3a-d83e-2039-d930-309df93acd93d",\n    "isDefault": true,\n    "name": "N/A(tenant level account)",\n    "state": "Enabled",\n    "tenantId": "0ef83f3a-03cd-2039-d930-90fd39ecd048",\n    "user": {\n      "name": "email@mycompany.onmicrosoft.com",\n      "type": "user"\n    }\n  }\n]\n')),(0,n.kt)("p",null,"You now have a hidden azure directory where your token is stored in an\naccessTokens.json file."),(0,n.kt)("h2",a({},{id:"centreon-configuration"}),"Centreon Configuration"),(0,n.kt)("h3",a({},{id:"create-a-new-host"}),"Create a new host"),(0,n.kt)("p",null,"Go to ",(0,n.kt)("em",{parentName:"p"},"Configuration ",">"," Hosts")," and click ",(0,n.kt)("em",{parentName:"p"},"Add"),". Then, fill the form as shown by\nthe following table:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",a({parentName:"tr"},{align:"left"}),"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Host name"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"Name of the host"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Alias"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"Host description"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"IP"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"Host IP Address"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Monitored from"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"Monitoring Poller to use"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Host Multiple Templates"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Cloud-Azure-Network-NetworkInterface-custom")))),(0,n.kt)("p",null,"Click on the ",(0,n.kt)("em",{parentName:"p"},"Save")," button."),(0,n.kt)("h3",a({},{id:"set-host-macros"}),"Set host macros"),(0,n.kt)("p",null,"The following macros must be configured on host."),(0,n.kt)("h4",a({},{id:"common-macros"}),"Common macros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"left"}),"Macro"),(0,n.kt)("th",a({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"AZURERESOURCE"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Resource name or id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"AZURERESOURCEGROUP"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Resource group (Required if resource's name is used)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"AZURERESOURCENAMESPACE"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Resource namespace (Required if resource's name is used)")))),(0,n.kt)("h4",a({},{id:"api-custom-mode-macros"}),"'api' custom mode macros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"left"}),"Macro"),(0,n.kt)("th",a({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"AZURECUSTOMMODE"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Custom mode 'api'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"AZURESUBSCRIPTION"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Subscription ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"AZURETENANT"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Tenant ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"AZURECLIENTID"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Client ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"AZURECLIENTSECRET"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Client secret")))),(0,n.kt)("h4",a({},{id:"azcli-custom-mode-macros"}),"'azcli' custom mode macros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"left"}),"Macro"),(0,n.kt)("th",a({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"AZURECUSTOMMODE"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Custom mode 'azcli'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"AZURESUBSCRIPTION"),(0,n.kt)("td",a({parentName:"tr"},{align:"left"}),"Subscription ID")))),(0,n.kt)("p",null,"Click on the ",(0,n.kt)("em",{parentName:"p"},"Save")," button."),(0,n.kt)("h2",a({},{id:"available-metrics"}),"Available metrics"),(0,n.kt)("p",null,"Go to\n",(0,n.kt)("a",a({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/monitoring-and-diagnostics/monitoring-supported-metrics?toc=/azure/azure-monitor/toc.json#microsoftnetworknetworkinterfaces"}),"https://docs.microsoft.com/en-us/azure/monitoring-and-diagnostics/monitoring-supported-metrics?toc=/azure/azure-monitor/toc.json#microsoftnetworknetworkinterfaces"),"\nto see the description of return metrics for this Azure service."))}m.isMDXComponent=!0}}]);