"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[10130],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=i(r),d=o,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||a;return r?n.createElement(k,l(l({ref:t},m),{},{components:r})):n.createElement(k,l({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},91238:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>m});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={id:"poller-display-to-remote-server",title:"Migrate a platform with Poller Display module"},s=void 0,p={unversionedId:"migrate/poller-display-to-remote-server",id:"version-23.10/migrate/poller-display-to-remote-server",title:"Migrate a platform with Poller Display module",description:"Migrate your Centreon Central server",source:"@site/versioned_docs/version-23.10/migrate/poller-display-to-remote-server.md",sourceDirName:"migrate",slug:"/migrate/poller-display-to-remote-server",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/migrate/poller-display-to-remote-server",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/next/versioned_docs/version-23.10/migrate/poller-display-to-remote-server.md",tags:[],version:"23.10",lastUpdatedAt:1700565273,formattedLastUpdatedAt:"Nov 21, 2023",frontMatter:{id:"poller-display-to-remote-server",title:"Migrate a platform with Poller Display module"},sidebar:"version-23.10/docs",previous:{title:"Nagios Reader to Centreon CLAPI",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/migrate/nagios-to-centreon"},next:{title:"Migrating from Centreon Centcore",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/developer/developer-gorgone-migrate-from-centcore"}},i={},m=[{value:"Migrate your Centreon Central server",id:"migrate-your-centreon-central-server",level:2},{value:"Migrate a Poller from Poller Display module to Remote Server",id:"migrate-a-poller-from-poller-display-module-to-remote-server",level:2},{value:"Main errors messages",id:"main-errors-messages",level:3}],u={toc:m};function c(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",o({},{id:"migrate-your-centreon-central-server"}),"Migrate your Centreon Central server"),(0,n.kt)("p",null,"If the module ",(0,n.kt)("strong",{parentName:"p"},"centreon-poller-display-central-1.6.x")," is installed:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the ",(0,n.kt)("strong",{parentName:"p"},"Administration > Extensions > Modules")," menu and uninstall the\n",(0,n.kt)("strong",{parentName:"p"},"centreon-poller-display-central"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Remove the associated package:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"yum remove centreon-poller-display-central\n")))),(0,n.kt)("p",null,"Refer to the ",(0,n.kt)("a",o({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/docs/migrate/migrate-from-3-4"}),"migration procedure"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If you use the Centreon EMS modules, you must update these repositories. Be sure\nto contact Centreon support and request new licenses.")),(0,n.kt)("h2",o({},{id:"migrate-a-poller-from-poller-display-module-to-remote-server"}),"Migrate a Poller from Poller Display module to Remote Server"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the ",(0,n.kt)("strong",{parentName:"p"},"Administration > Extensions > Modules")," menu and uninstall the\n",(0,n.kt)("strong",{parentName:"p"},"Centreon Poller Display")," module.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If you installed the module using an RPM package, remove it with the\nfollowing command:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"yum remove centreon-poller-display\n")))),(0,n.kt)("p",null,"Refer to the ",(0,n.kt)("a",o({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/docs/migrate/migrate-from-3-4"}),"migration procedure"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{}),"> If you use Centreon EMS modules, you must update the repositories. Be sure to\n> contact your Centreon support and request new licenses.\n")),(0,n.kt)("ol",o({},{start:4}),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"Administration > Extensions > Modules")," menu and install the\n",(0,n.kt)("strong",{parentName:"p"},"centreon-license-manager")," module.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("h2",o({parentName:"li"},{id:"register-the-server"}),"Register the server"))),(0,n.kt)("p",null,"To transform the server into a Remote Server and register it to the Centreon Central server, execute the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"/usr/share/centreon/bin/registerServerTopology.sh -u <API_ACCOUNT> \\\n-t remote -h <IP_TARGET_NODE> -n <REMOTE_SERVER_NAME>\n")),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"/usr/share/centreon/bin/registerServerTopology.sh -u admin -t remote -h 192.168.0.1 -n remote-1\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Replace ",(0,n.kt)("strong",{parentName:"p"},"<IP_TARGET_NODE>")," by the IP of the Centreon server seen by the Remote Server.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The ",(0,n.kt)("strong",{parentName:"p"},"<API_ACCOUNT>")," must have access to configuration API. You can use default ",(0,n.kt)("strong",{parentName:"p"},"admin")," account.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If you need to change the HTTP method or the port, you can use the following format for the ",(0,n.kt)("strong",{parentName:"p"},"-h")," option:\nHTTPS://<IP_TARGET_NODE>:PORT")),(0,n.kt)("p",null,"Then follow instructions by"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Entering your password:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"192.168.0.1: please enter your password:\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the IP address if multiple network interfaces exist:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"Which IP do you want to use as CURRENT NODE IP ?\n1) 192.168.0.2\n2) 192.168.0.3\n1\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Then validate the information:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"Summary of the informations that will be send:\n\nApi Connection:\nusername: admin\npassword: ******\ntarget server: 192.168.0.1\n\nPending Registration Server:\nname: remote-1\ntype: remote\naddress: 192.168.0.2\n\nDo you want to register this server with those informations ? (y/n)y\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add additional information to enable future communication between your Remote Server and its Central,\nKindly fill in the required information to convert your platform into Remote :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"<CURRENT_NODE_ADDRESS> : Please enter your username:\nadmin\n<CURRENT_NODE_ADDRESS> : Please enter your password:\n\n<CURRENT_NODE_ADDRESS> : Protocol [http]:\n<CURRENT_NODE_ADDRESS> : Port [80]:\n<CURRENT_NODE_ADDRESS> : centreon root folder [centreon]:\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If you use a proxy, please define credentials:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"Are you using a proxy ? (y/n)\ny\nenter your proxy Host:\nmyproxy.example.com\nenter your proxy Port [3128]:\nAre you using a username/password ? (y/n)\ny\nenter your username:\nmy_proxy_username\nenter your password:\n\n")))),(0,n.kt)("p",null,"You will receive the validation of the Centreon central server:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"2020-10-16T17:19:37+02:00 [INFO]: The CURRENT NODE 'remote: 'remote-1@192.168.0.2' has been converted and registered successfully.\n")),(0,n.kt)("h3",o({},{id:"main-errors-messages"}),"Main errors messages"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"2020-10-20T10:23:15+02:00 [ERROR]: Invalid credentials\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Your credentials are incorrect for the ",(0,n.kt)("strong",{parentName:"p"},"<API_ACCOUNT>"),".")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"2020-10-20T10:24:59+02:00 [ERROR]: Access Denied.\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The ",(0,n.kt)("strong",{parentName:"p"},"<API_ACCOUNT>")," doesn't have access to configuration API.")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"Failed connect to 192.168.0.1:444; Connection refused\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Unable to access to the API. Please check ",(0,n.kt)("strong",{parentName:"p"},"<IP_TARGET_NODE>"),", scheme and port.")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"2020-10-20T10:39:30+02:00 [ERROR]: Can\u2019t connect to the API using: https://192.168.0.1:443/centreon/api/latest/login\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The access url is not complete or is invalid. Use the ",(0,n.kt)("strong",{parentName:"p"},"--root")," option to define the API URL Path. For example: ",(0,n.kt)("strong",{parentName:"p"},"--root monitoring"),".")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"2020-10-20T10:42:23+02:00 [ERROR]: No route found for \u201cPOST /centreon/api/latest/platform/topology\u201d\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Your Centreon target version is invalid. It should be greater or equal to 21.04.")),(0,n.kt)("ol",o({},{start:6}),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add rights to centreon database user to use ",(0,n.kt)("strong",{parentName:"p"},"LOAD DATA INFILE")," command:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",o({parentName:"pre"},{className:"language-SQL"}),"GRANT FILE on *.* to 'centreon'@'localhost';\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"On the Centreon Central server"),", edit all pollers and attach them to the\n",(0,n.kt)("strong",{parentName:"p"},"Remote Server")," using the selection list."))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Remember to ",(0,n.kt)("a",o({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/docs/monitoring/monitoring-servers/deploying-a-configuration"}),"generate the configuration")," for your\n",(0,n.kt)("strong",{parentName:"p"},"Remote Server"),".")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"A Centreon Remote Server is self-administered."),(0,n.kt)("p",{parentName:"blockquote"},"Thus, the configuration of the\nLDAP directory, users and ACLs are specific to this server and must be\nconfigured through the ",(0,n.kt)("strong",{parentName:"p"},"Administration")," menu.")))}c.isMDXComponent=!0}}]);