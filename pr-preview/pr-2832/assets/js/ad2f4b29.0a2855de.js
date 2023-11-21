"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[50774],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40511:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"applications-mail-bluemind",title:"BlueMind"},o=void 0,p={unversionedId:"integrations/plugin-packs/procedures/applications-mail-bluemind",id:"integrations/plugin-packs/procedures/applications-mail-bluemind",title:"BlueMind",description:"Prerequisites",source:"@site/pp/integrations/plugin-packs/procedures/applications-mail-bluemind.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-mail-bluemind",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/applications-mail-bluemind",draft:!1,tags:[],version:"current",frontMatter:{id:"applications-mail-bluemind",title:"BlueMind"},sidebar:"pp",previous:{title:"Graylog",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/applications-graylog-restapi"},next:{title:"Mulesoft Anypoint",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/applications-mulesoft-restapi"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Centreon Plugin",id:"centreon-plugin",level:3},{value:"centreon user for check by ssh",id:"centreon-user-for-check-by-ssh",level:2},{value:"SSH key exchange",id:"ssh-key-exchange",level:3},{value:"Install InfluxDB",id:"install-influxdb",level:3},{value:"Configure bm-iptables",id:"configure-bm-iptables",level:3},{value:"Centreon configuration",id:"centreon-configuration",level:2},{value:"Create a Bluemind server",id:"create-a-bluemind-server",level:3}],c={toc:u};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",a({},{id:"prerequisites"}),"Prerequisites"),(0,r.kt)("h3",a({},{id:"centreon-plugin"}),"Centreon Plugin"),(0,r.kt)("p",null,"Install this plugin on each needed poller:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-shell"}),"yum install centreon-plugin-Applications-Mail-Bluemind\n")),(0,r.kt)("h2",a({},{id:"centreon-user-for-check-by-ssh"}),"centreon user for check by ssh"),(0,r.kt)("p",null,"You must create the centreon user on your bluemind server and setup its password\nwith these following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"$ useradd -m -s /bin/bash centreon\n$ passwd centreon\n")),(0,r.kt)("h3",a({},{id:"ssh-key-exchange"}),"SSH key exchange"),(0,r.kt)("p",null,"You must make a ssh key exchange between the user centreon-engine of your\nmonitoring poller and centreon user of your Bluemind server with these following\ncommands:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"$ su - centreon-engine \n$ ssh-keygen\n$ ssh-copy-id centreon@bluemind_server_@IP\n$ ssh centreon@centreon@bluemind_server_@IP\n$ exit\n")),(0,r.kt)("h3",a({},{id:"install-influxdb"}),"Install InfluxDB"),(0,r.kt)("p",null,"Install InfluDB metric database on Bluemind web interface."),(0,r.kt)("h3",a({},{id:"configure-bm-iptables"}),"Configure bm-iptables"),(0,r.kt)("p",null,"You must allow the monitoring poller to access the Bluemind server. Log on\nBluemind web interface with Global Admin and go to ",(0,r.kt)("em",{parentName:"p"},"Security-",">","Firewall\nsettings"),". Add the ip address of your monitoring poller and click the ",(0,r.kt)("em",{parentName:"p"},"Save"),"\nbutton."),(0,r.kt)("h2",a({},{id:"centreon-configuration"}),"Centreon configuration"),(0,r.kt)("h3",a({},{id:"create-a-bluemind-server"}),"Create a Bluemind server"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("em",{parentName:"p"},"Configuration ",">"," Hosts")," and click ",(0,r.kt)("em",{parentName:"p"},"Add"),". Then, fill the form as shown by\nthe following table:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"Field"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"Host name"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),(0,r.kt)("em",{parentName:"td"},"Name of the host"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"Alias"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),(0,r.kt)("em",{parentName:"td"},"Host description"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"IP"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),(0,r.kt)("em",{parentName:"td"},"Host IP Address"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"Monitored from"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),(0,r.kt)("em",{parentName:"td"},"Monitoring Poller to use"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"Host Multiple Templates"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),(0,r.kt)("em",{parentName:"td"},"App-Mail-Bluemind-custom"))))),(0,r.kt)("p",null,"Click the ",(0,r.kt)("em",{parentName:"p"},"Save")," button."))}d.isMDXComponent=!0}}]);