"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[19229],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),g=a,d=m["".concat(u,".").concat(g)]||m[g]||c[g]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={id:"azure-credential-configuration",title:"Azure Monitoring Prerequisites"},l=void 0,u={unversionedId:"integrations/plugin-packs/getting-started/how-to-guides/azure-credential-configuration",id:"integrations/plugin-packs/getting-started/how-to-guides/azure-credential-configuration",title:"Azure Monitoring Prerequisites",description:"Two methods are available to get metrics from Azure:",source:"@site/pp/integrations/plugin-packs/getting-started/how-to-guides/azure-credential-configuration.md",sourceDirName:"integrations/plugin-packs/getting-started/how-to-guides",slug:"/integrations/plugin-packs/getting-started/how-to-guides/azure-credential-configuration",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/getting-started/how-to-guides/azure-credential-configuration",draft:!1,tags:[],version:"current",frontMatter:{id:"azure-credential-configuration",title:"Azure Monitoring Prerequisites"},sidebar:"pp",previous:{title:"Introduction to Plugin Packs",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/getting-started/introduction"},next:{title:"Centreon NSClient++",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/getting-started/how-to-guides/centreon-nsclient-tutorial"}},s={},p=[{value:"Azure API setup",id:"azure-api-setup",level:2},{value:"Azure CLI setup",id:"azure-cli-setup",level:2}],c={toc:p};function m(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Two methods are available to get metrics from Azure:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Azure API ('api')."),(0,r.kt)("li",{parentName:"ul"},"Azure CLI ('azcli').")),(0,r.kt)("p",null,"Centreon recommends to use Azure Monitor API instead of Azure CLI for the following reasons: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The API is much more efficient by avoiding CLI binary execution"),(0,r.kt)("li",{parentName:"ul"},"The API supports application authentication while CLI does not (yet)")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This discovery feature is only compatible with Azure Monitor API.")),(0,r.kt)("p",null,"More information about the Host Discovery module is available in the Centreon documentation:\n",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/monitoring/discovery/hosts-discovery"}),"Host Discovery")),(0,r.kt)("h2",a({},{id:"azure-api-setup"}),"Azure API setup"),(0,r.kt)("p",null,"4 tokens are needed for Centreon to request Azure Monitor API:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"subscription ID"),(0,r.kt)("li",{parentName:"ul"},"tenant ID"),(0,r.kt)("li",{parentName:"ul"},"client ID"),(0,r.kt)("li",{parentName:"ul"},"client secret ")),(0,r.kt)("p",null,"You need to create a new application in Azure to obtain these tokens. The steps below detail how to create this application and set the right permissions to monitor Azure resources."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create an ",(0,r.kt)("em",{parentName:"li"},"Application")," in Azure Active Directory:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Log in to Azure Portal."),(0,r.kt)("li",{parentName:"ul"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Azure Active Directory"),"."),(0,r.kt)("li",{parentName:"ul"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"App registrations")," in the sidebar on the left."),(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"+ New registration"),", put the name of your application and then click on ",(0,r.kt)("strong",{parentName:"li"},"Register"),"."))),(0,r.kt)("li",{parentName:"ul"},"Add the ",(0,r.kt)("strong",{parentName:"li"},"Monitoring Reader role")," to your new application:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Go back to the Azure Portal home menu."),(0,r.kt)("li",{parentName:"ul"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Resource groups"),"."),(0,r.kt)("li",{parentName:"ul"},"Choose the resource group containing the resources you want to monitor. "),(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Access Control (IAM)")," and ",(0,r.kt)("strong",{parentName:"li"},"+ Add > Add role assignment"),"."),(0,r.kt)("li",{parentName:"ul"},"Search for the ",(0,r.kt)("em",{parentName:"li"},"Monitoring Reader")," role, select it and click Next."),(0,r.kt)("li",{parentName:"ul"},"Select your new application as a member for this role by clicking on ",(0,r.kt)("strong",{parentName:"li"},"+ Select members"),"."),(0,r.kt)("li",{parentName:"ul"},"Review and assign.")))),(0,r.kt)("p",null,"Now that the application is created, the steps below will guide you to retrieve the 4 tokens: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get the ",(0,r.kt)("strong",{parentName:"li"},"subscription ID"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Subscriptions")," in Azure portal. "),(0,r.kt)("li",{parentName:"ul"},"Copy the ",(0,r.kt)("em",{parentName:"li"},"Subscription ID")," next to the name of your subscription."))),(0,r.kt)("li",{parentName:"ul"},"Get the ",(0,r.kt)("strong",{parentName:"li"},"Tenant ID"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Azure Active Directory"),"."),(0,r.kt)("li",{parentName:"ul"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Overview")," and copy the ",(0,r.kt)("em",{parentName:"li"},"Tenant ID"),"."))),(0,r.kt)("li",{parentName:"ul"},"Get the ",(0,r.kt)("strong",{parentName:"li"},"Client ID"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Azure Active Directory"),"."),(0,r.kt)("li",{parentName:"ul"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"App registrations")," in the sidebar on the left and click on your application."),(0,r.kt)("li",{parentName:"ul"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Overview")," and copy the ",(0,r.kt)("em",{parentName:"li"},"Application (client) ID"),"."))),(0,r.kt)("li",{parentName:"ul"},"Get the ",(0,r.kt)("strong",{parentName:"li"},"Client secret"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Still in ",(0,r.kt)("strong",{parentName:"li"},"Azure Active Directory > App registrations"),", go to ",(0,r.kt)("strong",{parentName:"li"},"Certificates & secrets"),"."),(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"+ New client secret"),", set description as well as expiration date and Add."),(0,r.kt)("li",{parentName:"ul"},"Save the ",(0,r.kt)("strong",{parentName:"li"},"key value"),", it is the ",(0,r.kt)("strong",{parentName:"li"},"client secret")," and you won't be able to retrieve it after you leave this page.")))),(0,r.kt)("p",null,"These 4 tokens will be mandatory when using host autodiscovery and Centreon Azure based plugins. "),(0,r.kt)("h2",a({},{id:"azure-cli-setup"}),"Azure CLI setup"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"These steps are not required if you can use Azure Monitor API.")),(0,r.kt)("p",null,"Install Azure CLI on every Centreon poller expected to monitor Azure Resources:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-bash"}),'sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc\nsudo echo -e "[azure-cli]\\nname=Azure CLI\\nbaseurl=https://packages.microsoft.com/yumrepos/azure-cli\\nenabled=1\\ngpgcheck=1\\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/azure-cli.repo\nsudo yum install azure-cli-2.29.2-1.el7\n')),(0,r.kt)("p",null,"Then, use the ",(0,r.kt)("strong",{parentName:"p"},"centreon-engine")," account to obtain a token:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"su - centreon-engine\naz login\n")),(0,r.kt)("p",null,"The shell will output this message including an authentication code:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"To sign in, use a web browser to open the page https://microsoft.com/devicelogin\nand enter the code CWT4WQZAD to authenticate.*\n\nGo to <https://microsoft.com/devicelogin> and enter the code, then log in with the dedicated monitoring service account.\n")),(0,r.kt)("p",null,"As a result, the shell should prompt the information below:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-bash"}),'    [\n      {\n        "cloudName": "AzureCloud",\n        "id": "0ef83f3a-d83e-2039-d930-309df93acd93d",\n        "isDefault": true,\n        "name": "N/A(tenant level account)",\n        "state": "Enabled",\n        "tenantId": "0ef83f3a-03cd-2039-d930-90fd39ecd048",\n        "user": {\n          "name": "email@mycompany.onmicrosoft.com",\n          "type": "user"\n        }\n      }\n    ]\n')),(0,r.kt)("p",null,"Credentials are now stored locally in the ",(0,r.kt)("strong",{parentName:"p"},"accessTokens.json"),", Centreon Azure based plugins will be able to retrieve them."))}m.isMDXComponent=!0}}]);