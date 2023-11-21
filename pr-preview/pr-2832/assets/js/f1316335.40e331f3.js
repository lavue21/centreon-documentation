"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[99205],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},86311:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o={id:"cloud-aws-apigateway",title:"Amazon API Gateway"},i=void 0,p={unversionedId:"integrations/plugin-packs/procedures/cloud-aws-apigateway",id:"integrations/plugin-packs/procedures/cloud-aws-apigateway",title:"Amazon API Gateway",description:"Prerequisites",source:"@site/pp/integrations/plugin-packs/procedures/cloud-aws-apigateway.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-aws-apigateway",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/cloud-aws-apigateway",draft:!1,tags:[],version:"current",frontMatter:{id:"cloud-aws-apigateway",title:"Amazon API Gateway"},sidebar:"pp",previous:{title:"Centreon SQL Metrics",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-sql-metrics"},next:{title:"Amazon Backup Vault",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/cloud-aws-backup"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Centreon Plugin",id:"centreon-plugin",level:3},{value:"Install awscli",id:"install-awscli",level:3},{value:"Centreon Configuration",id:"centreon-configuration",level:2},{value:"Create a host using the appropriate template",id:"create-a-host-using-the-appropriate-template",level:3}],u={toc:c};function m(e){var{components:t}=e,a=l(e,["components"]);return(0,n.kt)("wrapper",r({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",r({},{id:"prerequisites"}),"Prerequisites"),(0,n.kt)("h3",r({},{id:"centreon-plugin"}),"Centreon Plugin"),(0,n.kt)("p",null,"Install this plugin on each needed poller:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-shell"}),"yum install centreon-plugin-Cloud-Aws-ApiGateway-Api\n")),(0,n.kt)("p",null,"To use it, you can either install 'awscli' (AWS Command Line Interface) or\n'paws' (Perl AWS SDK)."),(0,n.kt)("h3",r({},{id:"install-awscli"}),"Install awscli"),(0,n.kt)("p",null,"On CentOS, install with following commands:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-shell"}),"yum install awscli\n")),(0,n.kt)("h2",r({},{id:"centreon-configuration"}),"Centreon Configuration"),(0,n.kt)("h3",r({},{id:"create-a-host-using-the-appropriate-template"}),"Create a host using the appropriate template"),(0,n.kt)("p",null,"Go to ",(0,n.kt)("em",{parentName:"p"},"Configuration ",">"," Hosts")," and click ",(0,n.kt)("em",{parentName:"p"},"Add"),". Then, fill the form as shown by\nthe following table:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Name"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"Name of the host"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Alias"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"Description"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"IP Address / DNS"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"Can be localhost"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Monitored from"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"Poller used to monitor"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Templates"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"Cloud-Aws-Lambda-custom")))),(0,n.kt)("p",null,"The following host macros should be set as shown:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Macro"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"AWSACCESSKEY"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"AWS access key"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"AWSSECRETKEY"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"AWS secret key"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"AWSCUSTOMMODE"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"Plugin custom mode: awscli or paws"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"AWSREGION"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"AWS region"))))),(0,n.kt)("p",null,"Check the ",(0,n.kt)("em",{parentName:"p"},"Create Services linked to the Template too")," box and click on the\n",(0,n.kt)("em",{parentName:"p"},"Save")," button."),(0,n.kt)("p",null,"The following service will be created:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Streams"),(0,n.kt)("li",{parentName:"ul"},"Records-Statistics")),(0,n.kt)("p",null,"The following service macros should be set as shown:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Macro"),(0,n.kt)("th",r({parentName:"tr"},{align:"left"}),"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),"APINAME"),(0,n.kt)("td",r({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"Name of you AWS API"))))))}m.isMDXComponent=!0}}]);