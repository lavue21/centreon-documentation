"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[36043],{52006:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={id:"sso",title:"Configuring a Web SSO connection"},l=void 0,c={unversionedId:"connect/sso",id:"version-23.10/connect/sso",title:"Configuring a Web SSO connection",description:"Web SSO authentication relies on the Apache web server. According to its configuration, Apache is",source:"@site/versioned_docs/version-23.10/connect/sso.md",sourceDirName:"connect",slug:"/connect/sso",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/docs/connect/sso",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/connect/sso.md",tags:[],version:"23.10",lastUpdatedAt:1699375250,formattedLastUpdatedAt:"Nov 7, 2023",frontMatter:{id:"sso",title:"Configuring a Web SSO connection"},sidebar:"version-23.10/docs",previous:{title:"Connecting Centreon to an LDAP directory",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/docs/administration/parameters/ldap"},next:{title:"Configuring connection via OpenId Connect",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/docs/connect/openid"}},p={},u=[{value:"Configure Web SSO authentication",id:"configure-web-sso-authentication",level:2},{value:"Step 1: Enable authentication",id:"step-1-enable-authentication",level:3},{value:"Step 2: Configure your identity provider&#39;s access credentials",id:"step-2-configure-your-identity-providers-access-credentials",level:3},{value:"Step 3: Configure client addresses",id:"step-3-configure-client-addresses",level:3},{value:"Step 4: Configure the Apache web server",id:"step-4-configure-the-apache-web-server",level:3},{value:"Step 5: Configure your Identity Provider (IdP)",id:"step-5-configure-your-identity-provider-idp",level:3}],d={toc:u},h="wrapper";function m(e){var{components:t}=e,s=i(e,["components"]);return(0,r.kt)(h,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},d,s),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Web SSO authentication relies on the Apache web server. According to its configuration, Apache is\nresponsible for authenticating the user before allowing access to the Centreon web interface.\nMany Apache modules allow authentication via OIDC, SAMLv2, TLS, Kerberos, and other protocols."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Users must be present in the Centreon configuration to access the interface.")),(0,r.kt)("h2",{id:"configure-web-sso-authentication"},"Configure Web SSO authentication"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("strong",{parentName:"p"},"Administration > Authentication > Web SSO Configuration"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(95293).Z,width:"1430",height:"1254"})),(0,r.kt)("h3",{id:"step-1-enable-authentication"},"Step 1: Enable authentication"),(0,r.kt)("p",null,"Enable authentication:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Enable Web SSO authentication"),": enables/disables Web SSO authentication."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Authentication mode"),": indicates whether authentication should take place using only Web SSO or using local\nauthentication as well (",(0,r.kt)("strong",{parentName:"li"},"Mixed"),").")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'When setting the parameters, we recommend that you activate the "mixed" mode. This will allow you to retain access to\nthe local ',(0,r.kt)("inlineCode",{parentName:"p"},"admin")," account in the event of a misconfiguration.")),(0,r.kt)("h3",{id:"step-2-configure-your-identity-providers-access-credentials"},"Step 2: Configure your identity provider's access credentials"),(0,r.kt)("p",null,"Configure identity provider information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Login header attribute name"),": which variable from the headers should be used to retrieve the user's login.\nFor example ",(0,r.kt)("inlineCode",{parentName:"li"},"REMOTE_USER"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pattern match login (regex)"),": a pattern to search for in the login header attribute name.\nFor instance, type ",(0,r.kt)("inlineCode",{parentName:"li"},"/@.*/")," to find the end of the email address in your login."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pattern replace login (regex)"),": the string that will replace the string defined in the ",(0,r.kt)("strong",{parentName:"li"},"Pattern match login (regex)")," field.\nLeave ",(0,r.kt)("strong",{parentName:"li"},"Pattern replace login (regex)")," blank to delete the string found by ",(0,r.kt)("strong",{parentName:"li"},"Pattern match login (regex)"),".")),(0,r.kt)("h3",{id:"step-3-configure-client-addresses"},"Step 3: Configure client addresses"),(0,r.kt)("p",null,"If you leave both fields blank, all IP addresses will be allowed to access the Centreon interface."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Trusted client addresses"),": If you enter IP addresses in this field, only these IP addresses will be allowed to access the Centreon interface. All other IP addresses will be blocked. IP addresses must be separated by commas."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Blacklist client addresses"),": These IP addresses will be blocked. All other IP addresses will be allowed to access the Centreon interface.")),(0,r.kt)("h3",{id:"step-4-configure-the-apache-web-server"},"Step 4: Configure the Apache web server"),(0,r.kt)("p",null,"You must configure the Apache module that allows authentication with the identity provider.\nOnce this configuration is done, you must modify the Centreon configuration for Apache in order to allow access only\nto authenticated users."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Edit ",(0,r.kt)("strong",{parentName:"p"},"/etc/httpd/conf.d/10-centreon.conf")," and search for the following block:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-apache"},'    Header set X-Frame-Options: "sameorigin"\n    Header always edit Set-Cookie ^(.*)$ $1;HttpOnly;SameSite=Strict\n    ServerSignature Off\n    TraceEnable Off\n\n    Alias ${base_uri}/api ${install_dir}\n    Alias ${base_uri} ${install_dir}/www/\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Replace it with:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-apache"},'    Header set X-Frame-Options: "sameorigin"\n    Header always edit Set-Cookie ^(.*)$ $1;HttpOnly;SameSite=Strict\n    ServerSignature Off\n    TraceEnable Off\n\n    RequestHeader set X-Forwarded-Proto "http" early\n\n    Alias ${base_uri}/api ${install_dir}\n    Alias ${base_uri} ${install_dir}/www/\n\n    <Location ${base_uri}>\n        AuthType openid-connect\n        Require valid-user\n    </Location>\n')),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"In this example, the Apache module used was ",(0,r.kt)("strong",{parentName:"p"},"mod_auth_openidc"),". This is why authentication is ",(0,r.kt)("strong",{parentName:"p"},"openid-connect"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Validate the Apache configuration using:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/opt/rh/httpd24/root/usr/sbin/httpd -t\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Then restart Apache web server:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart httpd24-httpd\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To conclude, rebuild the cache:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo -u apache /usr/share/centreon/bin/console cache:clear\n")))),(0,r.kt)("h3",{id:"step-5-configure-your-identity-provider-idp"},"Step 5: Configure your Identity Provider (IdP)"),(0,r.kt)("p",null,"Configure your IdP to add the Centreon application to use your protocol to authenticate your users,\nand to authorize the following ",(0,r.kt)("inlineCode",{parentName:"p"},"redirect URI")," to forward your connected users to Centreon:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"{protocol}://{server}:{port}/centreon/websso\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"{protocol}"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"{server}")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"{port}")," with the URI to access to your Centreon server.\nFor example: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://centreon.domain.net/centreon/centreon/websso"))))}m.isMDXComponent=!0},95293:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/web-sso-configuration-c45d182db39b20afba9cef08a5ce8bc9.png"}}]);