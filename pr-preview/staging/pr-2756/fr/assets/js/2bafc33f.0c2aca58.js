"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[15237],{24218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>c});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={},p="Report publication rules {#publication_rules}",u={unversionedId:"reporting/reports-publication-rule",id:"version-23.10/reporting/reports-publication-rule",title:"Report publication rules {#publication_rules}",description:'The \\"Reporting \\> Business Intelligence \\> Publication rules\\\u201d menu',source:"@site/versioned_docs/version-23.10/reporting/reports-publication-rule.md",sourceDirName:"reporting",slug:"/reporting/reports-publication-rule",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/reporting/reports-publication-rule",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/reporting/reports-publication-rule.md",tags:[],version:"23.10",lastUpdatedAt:1699633150,formattedLastUpdatedAt:"10 nov. 2023",frontMatter:{}},a={},c=[{value:"On the monitoring server",id:"on-the-monitoring-server",level:2},{value:"On the reporting server",id:"on-the-reporting-server",level:2},{value:"On the interface Centreon",id:"on-the-interface-centreon",level:2}],h={toc:c},d="wrapper";function f(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)(d,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"publication_rules"},"Report publication rules"),(0,r.kt)("p",null,'The \\"Reporting ',">"," Business Intelligence ",">"," Publication rules\\\u201d menu\nallows you to publish the reports generated by CBIS on different\nplatforms using different protocols."),(0,r.kt)("p",null,"In order to publish all the generated reports on the monitoring server,\na default rule must be defined using SFTP."),(0,r.kt)("h2",{id:"on-the-monitoring-server"},"On the monitoring server"),(0,r.kt)("p",null,'A system user \\"centreonBI\\" user has been created. Set a password for\nthis user for future SSH communications between the two servers:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"passwd centreonBI\n")),(0,r.kt)("h2",{id:"on-the-reporting-server"},"On the reporting server"),(0,r.kt)("p",null,'Generate SSH keys for the system user \\"centreonBI\\" in order to avoid\nusing the password when CBIS copies the generated reports onto the\nmonitoring server.:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"su - centreonBI\nssh-keygen\n  Enter file in which to save the key (/home/centreonBI/.ssh/id_rsa):\n  > Created directory '/usr/local/centreon-bi/.ssh'.\n  > Enter passphrase (empty for no passphrase):\n  > Enter same passphrase again:\n  > Your identification has been saved in /home/centreonBI/.ssh/id_rsa.\n")),(0,r.kt)("p",null,"::: {.note}\n::: {.title}\nNote\n:::"),(0,r.kt)("p",null,'At the \\"Enter passphrase\\" request, confirm without entering a\npassphrase.\n:::'),(0,r.kt)("p",null,"Transfer the key to the ",(0,r.kt)("strong",{parentName:"p"},"Centreon")," server. The ",(0,r.kt)("strong",{parentName:"p"},"centreonBI")," user\nmust be configured with a password on the monitoring server):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ssh-copy-id -i ~/.ssh/id_rsa.pub centreonBI@{MONITORING_IP_ADDRESS}\n")),(0,r.kt)("p",null,"Test the SSH connection from the reporting server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ssh centreonBI@{MONITORING_IP_ADDRESS}\n")),(0,r.kt)("p",null,"You should be able to connect without entering any password."),(0,r.kt)("h2",{id:"on-the-interface-centreon"},"On the interface Centreon"),(0,r.kt)("p",null,'In the \\"Reporting ',">"," Business Intelligence ",">",' Publication rules\\" menu of\nCentreon, edit the \\"default\\" publication rule and specify the\nfollowing configuration:'),(0,r.kt)("hr",null),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"Field"),"                        ",(0,r.kt)("strong",{parentName:"p"},"Value")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"  Name                             Default"),(0,r.kt)("p",null,"  Publication protocol             SFTP"),(0,r.kt)("p",null,"  Global                           ","(","x",")"," Yes"),(0,r.kt)("p",null,"  Description                      Default publication rule"),(0,r.kt)("p",null,"  Host                             ",(0,r.kt)("strong",{parentName:"p"},"\\<Centreon server IP address",">")),(0,r.kt)("p",null,"  Port                             22"),(0,r.kt)("p",null,"  Authentication type              User/Key"),(0,r.kt)("p",null,"  User                             centreonBI"),(0,r.kt)("p",null,"  Path to the SSH key              /home/centreonBI/.ssh/id","_","rsa"),(0,r.kt)("p",null,"  Passphrase for SSH key           "),(0,r.kt)("p",null,"  Confirm passphrase for SSH key   "),(0,r.kt)("p",null,"  Root directory                   /var/lib/centreon/centreon-bi-server/archives"),(0,r.kt)("p",null,"  Subdirectory                     \\@JOBNAME@"),(0,r.kt)("hr",null),(0,r.kt)("p",null,'Click the \\"Test\\" button to validate the configuration and save the\nform.'),(0,r.kt)("p",null,"Go to the next chapter to continue the installation."))}f.isMDXComponent=!0}}]);