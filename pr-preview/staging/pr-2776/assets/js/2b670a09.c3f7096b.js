"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[66710],{73553:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>d});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={id:"hardware-storage-dell-compellent-api",title:"Dell Compellent API"},p=void 0,s={unversionedId:"integrations/plugin-packs/procedures/hardware-storage-dell-compellent-api",id:"integrations/plugin-packs/procedures/hardware-storage-dell-compellent-api",title:"Dell Compellent API",description:"Prerequisites",source:"@site/pp/integrations/plugin-packs/procedures/hardware-storage-dell-compellent-api.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-storage-dell-compellent-api",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/hardware-storage-dell-compellent-api",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/hardware-storage-dell-compellent-api.md",tags:[],version:"current",frontMatter:{id:"hardware-storage-dell-compellent-api",title:"Dell Compellent API"},sidebar:"pp",previous:{title:"Dell Compellent",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/hardware-storage-dell-compellent-snmp"},next:{title:"Dell Equallogic",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/hardware-storage-dell-equallogic-snmp"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Centreon Configuration",id:"centreon-configuration",level:2},{value:"Create a new Exchange server",id:"create-a-new-exchange-server",level:3}],u={toc:d},m="wrapper";function g(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)(m,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"This Monitoring Connector requires the use of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the Dell Storage Enterprise Manager provided\n",(0,r.kt)("a",{parentName:"li",href:"http://www.dell.com/support/home/us/en/19/Drivers/DriversDetails?driverId=7KXTW"},"here")),(0,r.kt)("li",{parentName:"ul"},"NSClient++ package provided by Centreon, installed and configured on your\ntarget server as described on\n",(0,r.kt)("a",{parentName:"li",href:"http://documentation.centreon.com"},"documentation"))),(0,r.kt)("p",null,"Powershell and ",(0,r.kt)("inlineCode",{parentName:"p"},"DellStorage.ApiCommandSet.dll")," have to be installed on\nWindows Server. You'll need to add the file ",(0,r.kt)("inlineCode",{parentName:"p"},"powershell.exe.config")," in directory\n",(0,r.kt)("inlineCode",{parentName:"p"},"C:WindowsSystem32WindowsPowerShellv1.0"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<?xml version="1.0"?>\n<configuration>\n    <startup useLegacyV2RuntimeActivationPolicy="true">\n        <supportedRuntime version="v4.0.30319"/>\n        <supportedRuntime version="v2.0.50727"/>\n    </startup> \n</configuration>\n')),(0,r.kt)("p",null,"If you use the NSClient++ installer provided by Centreon, the plugin is\nalready included in centreon","_","plugins.exe configured in NSClient++"),(0,r.kt)("p",null,"The plugin uses the Compellent Entreprise Manager. So you need information\nto connect."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Set host macro ",(0,r.kt)("inlineCode",{parentName:"p"},"CEMUSER"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"CEMPASSWORD"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"CEMADDRESS"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"DELLSTORAGESDKDLL")," (the complete path of ",(0,r.kt)("inlineCode",{parentName:"p"},"DellStorage.ApiCommandSet.dll")," file)")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Don't use the '!' character in centreon macro configuration!")),(0,r.kt)("h2",{id:"centreon-configuration"},"Centreon Configuration"),(0,r.kt)("h3",{id:"create-a-new-exchange-server"},"Create a new Exchange server"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("em",{parentName:"p"},"Configuration ",">"," Hosts")," and click ",(0,r.kt)("em",{parentName:"p"},"Add"),". Then, fill the form as shown by\nthe following table:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Host name"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Name of the host"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Alias"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Host description"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"IP"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Host IP Address"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Monitored from"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("em",{parentName:"td"},"Monitoring Poller to use"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Host Multiple Templates"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HW-Storage-Dell-Compellent-NRPE-custom")))),(0,r.kt)("p",null,"Click on the ",(0,r.kt)("em",{parentName:"p"},"Save")," button."))}g.isMDXComponent=!0}}]);