"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[35278],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return a?r.createElement(f,o(o({ref:t},c),{},{components:a})):r.createElement(f,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},23427:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});a(67294);var r=a(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const o={id:"applications-databases-sybase",title:"Sybase"},i=void 0,p={unversionedId:"integrations/plugin-packs/procedures/applications-databases-sybase",id:"integrations/plugin-packs/procedures/applications-databases-sybase",title:"Sybase",description:"Prerequisites",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-databases-sybase.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-databases-sybase",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/applications-databases-sybase",draft:!1,tags:[],version:"current",frontMatter:{id:"applications-databases-sybase",title:"Sybase"},sidebar:"pp",previous:{title:"RRDtool",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/applications-databases-rrdtool"},next:{title:"Warp10 Sensision",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/applications-databases-warp10-sensision"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Centreon Plugin",id:"centreon-plugin",level:3},{value:"Username",id:"username",level:2},{value:"RPM",id:"rpm",level:3},{value:"Centreon Configuration",id:"centreon-configuration",level:2},{value:"Create a new Sybase database server",id:"create-a-new-sybase-database-server",level:3},{value:"Host Macro Configuration",id:"host-macro-configuration",level:3}],u={toc:c};function d(e){var{components:t}=e,a=l(e,["components"]);return(0,r.kt)("wrapper",n({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",n({},{id:"prerequisites"}),"Prerequisites"),(0,r.kt)("h3",n({},{id:"centreon-plugin"}),"Centreon Plugin"),(0,r.kt)("p",null,"Install this plugin on each needed poller:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-shell"}),"yum install centreon-plugin-Applications-Databases-Sybase\n")),(0,r.kt)("h2",n({},{id:"username"}),"Username"),(0,r.kt)("p",null,"The username string should not be longer than 32 chararacters. Username must be\nin the following form: ","[","Servername|Domainname","]","\\","Username"),(0,r.kt)("h3",n({},{id:"rpm"}),"RPM"),(0,r.kt)("p",null,"In order to use this template, the following RPM are needed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"freetds-0.82"),(0,r.kt)("li",{parentName:"ul"},"perl-DBD-Sybase-1.10-1"),(0,r.kt)("li",{parentName:"ul"},"unixODBC-2.2.11-10"),(0,r.kt)("li",{parentName:"ul"},"unixODBC-devel-2.2.11-10")),(0,r.kt)("h2",n({},{id:"centreon-configuration"}),"Centreon Configuration"),(0,r.kt)("h3",n({},{id:"create-a-new-sybase-database-server"}),"Create a new Sybase database server"),(0,r.kt)("p",null,'Go to "Configuration ',">",' Hosts" and click "Add". Then, fill the form as shown by\nthe following table :'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"Field"),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Host name"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),(0,r.kt)("em",{parentName:"td"},"Name of the host"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Alias"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),(0,r.kt)("em",{parentName:"td"},"Host description"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"IP"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),(0,r.kt)("em",{parentName:"td"},"Host IP Address"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Monitored from"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),(0,r.kt)("em",{parentName:"td"},"Monitoring Poller to use"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Host Multiple Templates"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"App-DB-Sybase-custom")))),(0,r.kt)("p",null,'Click "Save" button.'),(0,r.kt)("p",null,"Those services were automatically created for this host:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"Service"),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Blocked-Processes"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Check blocked processes on the server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Connection-Time"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Check the connection time to the server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Database-Size"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Check Size space of databases on the server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Connected-User"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Check connected user.")))),(0,r.kt)("h3",n({},{id:"host-macro-configuration"}),"Host Macro Configuration"),(0,r.kt)("p",null,"The following macros must be configured on host:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"Macro"),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"Default value"),(0,r.kt)("th",n({parentName:"tr"},{align:"left"}),"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"SYBASEUSERNAME"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"the Sybase user"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"USERNAME"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"root")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"SYBASEPASSWORD"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"the Sybase password"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"PASSWORD"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"p@ssw0rd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"SYBASEPORT"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"Port Of the Sybase Database"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"2638"),(0,r.kt)("td",n({parentName:"tr"},{align:"left"}),"2638")))))}d.isMDXComponent=!0}}]);