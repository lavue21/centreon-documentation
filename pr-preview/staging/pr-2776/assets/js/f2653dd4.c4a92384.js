"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[39290],{76583:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>k,frontMatter:()=>i,metadata:()=>u,toc:()=>m});a(67294);var n=a(3905),r=a(51715),o=a(7626);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={id:"upgrade-from-22-04",title:"Upgrade from Centreon 22.04"},c=void 0,u={unversionedId:"upgrade/upgrade-from-22-04",id:"version-23.10/upgrade/upgrade-from-22-04",title:"Upgrade from Centreon 22.04",description:"This chapter describes how to upgrade your Centreon platform from version 22.04",source:"@site/versioned_docs/version-23.10/upgrade/upgrade-from-22-04.md",sourceDirName:"upgrade",slug:"/upgrade/upgrade-from-22-04",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/docs/upgrade/upgrade-from-22-04",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/upgrade/upgrade-from-22-04.md",tags:[],version:"23.10",lastUpdatedAt:1699375250,formattedLastUpdatedAt:"Nov 7, 2023",frontMatter:{id:"upgrade-from-22-04",title:"Upgrade from Centreon 22.04"},sidebar:"version-23.10/docs",previous:{title:"Upgrade from Centreon 22.10",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/docs/upgrade/upgrade-from-22-10"},next:{title:"Upgrade from Centreon 21.10",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/docs/upgrade/upgrade-from-21-10"}},d={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Perform a backup",id:"perform-a-backup",level:3},{value:"Upgrade the Centreon Central server",id:"upgrade-the-centreon-central-server",level:2},{value:"Install the new repositories",id:"install-the-new-repositories",level:3},{value:"Upgrade PHP",id:"upgrade-php",level:3},{value:"Upgrade the Centreon solution",id:"upgrade-the-centreon-solution",level:3},{value:"Update your customized Apache configuration",id:"update-your-customized-apache-configuration",level:3},{value:"Customized Apache configuration: enable text compression",id:"customized-apache-configuration-enable-text-compression",level:4},{value:"Finalizing the upgrade",id:"finalizing-the-upgrade",level:3},{value:"Post-upgrade actions",id:"post-upgrade-actions",level:3},{value:"Upgrade the Remote Servers",id:"upgrade-the-remote-servers",level:2},{value:"Upgrade the Pollers",id:"upgrade-the-pollers",level:2},{value:"Update the Centreon repository",id:"update-the-centreon-repository",level:3},{value:"Upgrade the Centreon solution",id:"upgrade-the-centreon-solution-1",level:3}],h={toc:m},g="wrapper";function k(e){var{components:t}=e,i=s(e,["components"]);return(0,n.kt)(g,p(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){l(e,t,a[t])}))}return e}({},h,i),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This chapter describes how to upgrade your Centreon platform from version 22.04\nto version 23.04."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"When you upgrade your central server, make sure you also upgrade all your remote servers and your pollers. All servers in your architecture must have the same version of Centreon. In addition, all servers must use the same ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/docs/developer/developer-broker-bbdo#switching-versions-of-bbdo"},"version of the BBDO protocol"),".")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If you want to migrate your Centreon platform to another server/OS, please read our chapter on migration.\nyou need to follow the ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/docs/migrate/introduction"},"migration procedure"),".")),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("h3",{id:"perform-a-backup"},"Perform a backup"),(0,n.kt)("p",null,"Be sure that you have fully backed up your environment for the following\nservers:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Central server"),(0,n.kt)("li",{parentName:"ul"},"Database server")),(0,n.kt)("h2",{id:"upgrade-the-centreon-central-server"},"Upgrade the Centreon Central server"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"When you run a command, check its output. If you get an error message, stop the procedure and fix the issue.")),(0,n.kt)("h3",{id:"install-the-new-repositories"},"Install the new repositories"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Update your Centreon 22.04 to the latest minor version.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Remove the ",(0,n.kt)("strong",{parentName:"p"},"centreon.repo")," file:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"rm /etc/yum.repos.d/centreon.repo\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install the new repository:"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/23.04/el8/centreon-23.04.repo\n"))),(0,n.kt)(o.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'echo "deb https://packages.centreon.com/apt-standard-23.04-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon.list\necho "deb https://packages.centreon.com/apt-plugins-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon-plugins.list\n')),(0,n.kt)("p",null,"Then import the repository key:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"wget -O- https://apt-key.centreon.com | gpg --dearmor | tee /etc/apt/trusted.gpg.d/centreon.gpg > /dev/null 2>&1\napt update\n")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If you have an ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/docs/administration/licenses#types-of-licenses"},"offline license"),", also remove the old Monitoring Connectors repository, then install the new one."),(0,n.kt)("p",{parentName:"blockquote"},"If you have a Business edition, do the same with the Business repository."),(0,n.kt)("p",{parentName:"blockquote"},"You can find the address of these repositories on the ",(0,n.kt)("a",{parentName:"p",href:"https://support.centreon.com/hc/en-us/categories/10341239833105-Repositories"},"support portal"),".")),(0,n.kt)("h3",{id:"upgrade-php"},"Upgrade PHP"),(0,n.kt)("p",null,"Centreon 23.04 uses PHP in version 8.1."),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"RHEL 8",label:"RHEL 8",mdxType:"TabItem"},(0,n.kt)("p",null,"You need to change the PHP stream from version 8.0 to 8.1 by executing the following commands and answering ",(0,n.kt)("strong",{parentName:"p"},"y"),"\nto confirm:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf module reset php\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf module install php:remi-8.1\n"))),(0,n.kt)(o.Z,{value:"Alma / Oracle Linux 8",label:"Alma / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("p",null,"You need to change the PHP stream from version 8.0 to 8.1 by executing the following commands and answering ",(0,n.kt)("strong",{parentName:"p"},"y"),"\nto confirm:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf module reset php\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf module install php:remi-8.1\n"))),(0,n.kt)(o.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl stop php8.0-fpm\n")))),(0,n.kt)("h3",{id:"upgrade-the-centreon-solution"},"Upgrade the Centreon solution"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Make sure all users are logged out from the Centreon web interface\nbefore starting the upgrade procedure.")),(0,n.kt)("p",null,"If you have installed Business extensions, update the Business repository to version 23.04.\nVisit the ",(0,n.kt)("a",{parentName:"p",href:"https://support.centreon.com/hc/en-us/categories/10341239833105-Repositories"},"support portal")," to get its address."),(0,n.kt)("p",null,"If your OS is Debian 11 and you have a customized Apache configuration, perform a backup of your configuration file (",(0,n.kt)("strong",{parentName:"p"},"/etc/apache2/sites-available/centreon.conf"),")."),(0,n.kt)("p",null,"Stop the Centreon Broker process:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl stop cbd\n")),(0,n.kt)("p",null,"Delete existing retention files:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"rm /var/lib/centreon-broker/* -f\n")),(0,n.kt)("p",null,"Clean the cache:"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf clean all --enablerepo=*\n"))),(0,n.kt)(o.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"apt clean all\napt update\n")))),(0,n.kt)("p",null,"Then upgrade all the components with the following command:"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf update centreon\\* php-pecl-gnupg\n"))),(0,n.kt)(o.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"apt upgrade centreon\n")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Accept new GPG keys from the repositories as needed.")),(0,n.kt)("h3",{id:"update-your-customized-apache-configuration"},"Update your customized Apache configuration"),(0,n.kt)("p",null,"This section only applies if you customized your Apache configuration. "),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("p",null,"When you upgrade your platform, the Apache configuration file is not upgraded automatically. The new configuration file brought by the rpm does not replace the old file. You must copy the changes manually to your customized configuration file."),(0,n.kt)("p",null,"Run a diff between the old and the new Apache configuration files:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"diff -u /etc/httpd/conf.d/10-centreon.conf /etc/httpd/conf.d/10-centreon.conf.rpmnew\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"10-centreon.conf")," (post upgrade): this file contains the custom configuration. It does not contain anything new brought by the upgrade."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"10-centreon.conf.rpmnew")," (post upgrade): this file is provided by the rpm; it does not contain any custom configuration.")),(0,n.kt)("p",null,"For each difference between the files, assess whether you should copy it from ",(0,n.kt)("strong",{parentName:"p"},"10-centreon.conf.rpmnew")," to ",(0,n.kt)("strong",{parentName:"p"},"10-centreon.conf"),"."),(0,n.kt)("p",null,"Check that Apache is configured properly by running the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"apachectl configtest\n")),(0,n.kt)("p",null,"The expected result is the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"Syntax OK\n")),(0,n.kt)("p",null,"Restart the Apache and PHP processes to take the new configuration into account:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart php-fpm httpd\n")),(0,n.kt)("p",null,"Then check its status:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl status httpd\n")),(0,n.kt)("p",null,"If everything is ok, you should have:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'\u25cf httpd.service - The Apache HTTP Server\n   Loaded: loaded (/usr/lib/systemd/system/httpd.service; enabled; vendor preset: disabled)\n  Drop-In: /usr/lib/systemd/system/httpd.service.d\n           \u2514\u2500php-fpm.conf\n   Active: active (running) since Tue 2020-10-27 12:49:42 GMT; 2h 35min ago\n     Docs: man:httpd.service(8)\n Main PID: 1483 (httpd)\n   Status: "Total requests: 446; Idle/Busy workers 100/0;Requests/sec: 0.0479; Bytes served/sec: 443 B/sec"\n    Tasks: 278 (limit: 5032)\n   Memory: 39.6M\n   CGroup: /system.slice/httpd.service\n           \u251c\u25001483 /usr/sbin/httpd -DFOREGROUND\n           \u251c\u25001484 /usr/sbin/httpd -DFOREGROUND\n           \u251c\u25001485 /usr/sbin/httpd -DFOREGROUND\n           \u251c\u25001486 /usr/sbin/httpd -DFOREGROUND\n           \u251c\u25001487 /usr/sbin/httpd -DFOREGROUND\n           \u2514\u25001887 /usr/sbin/httpd -DFOREGROUND\n\n'))),(0,n.kt)(o.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("p",null,"Use the backup file you created in the previous step to copy your customizations to the file ",(0,n.kt)("strong",{parentName:"p"},"/etc/apache2/sites-available/centreon.conf"),"."),(0,n.kt)("p",null,"Check that Apache is configured properly by running the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"apache2ctl configtest\n")),(0,n.kt)("p",null,"The expected result is the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"Syntax OK\n")),(0,n.kt)("p",null,"Restart the Apache and PHP processes to take the new configuration into account:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart php8.0-fpm apache2\n")),(0,n.kt)("p",null,"Then check its status:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl status apache2\n")),(0,n.kt)("p",null,"If everything is ok, you should have:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"\u25cf apache2.service - The Apache HTTP Server\n    Loaded: loaded (/lib/systemd/system/apache2.service; enabled; vendor pres>\n     Active: active (running) since Tue 2022-08-09 05:01:36 UTC; 3h 56min ago\n       Docs: https://httpd.apache.org/docs/2.4/\n   Main PID: 518 (apache2)\n      Tasks: 11 (limit: 2356)\n     Memory: 18.1M\n        CPU: 1.491s\n     CGroup: /system.slice/apache2.service\n             \u251c\u2500 518 /usr/sbin/apache2 -k start\n             \u251c\u25001252 /usr/sbin/apache2 -k start\n             \u251c\u25001254 /usr/sbin/apache2 -k start\n             \u251c\u25001472 /usr/sbin/apache2 -k start\n             \u251c\u25003857 /usr/sbin/apache2 -k start\n             \u251c\u25003858 /usr/sbin/apache2 -k start\n             \u251c\u25003859 /usr/sbin/apache2 -k start\n             \u251c\u25003860 /usr/sbin/apache2 -k start\n             \u251c\u25003876 /usr/sbin/apache2 -k start\n             \u251c\u25006261 /usr/sbin/apache2 -k start\n             \u2514\u25006509 /usr/sbin/apache2 -k start\n")))),(0,n.kt)("h4",{id:"customized-apache-configuration-enable-text-compression"},"Customized Apache configuration: enable text compression"),(0,n.kt)("p",null,"In order to improve page loading speed, you can activate text compression on the Apache server. It requires the ",(0,n.kt)("strong",{parentName:"p"},"brotli")," package to work. This is optional, but it provides a better user experience."),(0,n.kt)("p",null,"Add the following code to your Apache configuration file, in both the ",(0,n.kt)("inlineCode",{parentName:"p"},"<VirtualHost *:80>")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"<VirtualHost *:443>")," elements:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"<IfModule mod_brotli.c>\n    AddOutputFilterByType BROTLI_COMPRESS text/html text/plain text/xml text/css text/javascript application/javascript application/json\n</IfModule>\nAddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json\n")),(0,n.kt)("h3",{id:"finalizing-the-upgrade"},"Finalizing the upgrade"),(0,n.kt)("p",null,"Before starting the web upgrade process, reload the Apache server with the\nfollowing command:"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl reload php-fpm httpd\n"))),(0,n.kt)(o.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"apt autoremove\nsystemctl daemon-reload\nsystemctl stop php8.0-fpm.service\nsystemctl enable php8.1-fpm\nsystemctl start php8.1-fpm\nsystemctl restart apache2\n")))),(0,n.kt)("p",null,"Then you need to finalize the upgrade process:"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Using the wizard",label:"Using the wizard",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Log on to the Centreon web interface to continue the update process. Click ",(0,n.kt)("strong",{parentName:"p"},"Next"),":"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"image",src:a(81137).Z,width:"650",height:"300"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Next"),":"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"image",src:a(79778).Z,width:"650",height:"300"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The release notes describe the main changes. Click ",(0,n.kt)("strong",{parentName:"p"},"Next"),":"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"image",src:a(91003).Z,width:"650",height:"300"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"This process performs the various upgrades. Click ",(0,n.kt)("strong",{parentName:"p"},"Next"),":"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"image",src:a(36221).Z,width:"650",height:"300"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Your Centreon server is now up to date. Click ",(0,n.kt)("strong",{parentName:"p"},"Finish")," to access the login\npage:"),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{alt:"image",src:a(41978).Z,width:"650",height:"300"})),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"If the Centreon BAM module is installed, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/docs/service-mapping/update"},"update procedure"),"."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Deploy the central's configuration from the Centreon web UI by following ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/docs/monitoring/monitoring-servers/deploying-a-configuration"},"this\nprocedure"),".\n")))),(0,n.kt)(o.Z,{value:"Using a dedicated API endpoint",label:"Using a dedicated API endpoint",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Log on to the central server through your terminal to continue the update process."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"You need an authentication token to reach the API endpoint. Perform the following procedure to get a token.")),(0,n.kt)("p",{parentName:"li"},"In our case, we have the configuration described below (you need to adapt the procedure to your configuration)."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"address: 10.25.XX.XX"),(0,n.kt)("li",{parentName:"ul"},"port: 80"),(0,n.kt)("li",{parentName:"ul"},"version: 23.04"),(0,n.kt)("li",{parentName:"ul"},"login: Admin"),(0,n.kt)("li",{parentName:"ul"},"password: xxxxx"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter the following request:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'10.25.XX.XX:80/centreon/api/v23.04/login\' \\\n--header \'Content-Type: application/json\' \\\n--header \'Accept: application/json\' \\\n--data \'{\n  "security": {\n    "credentials": {\n      "login": "Admin",\n      "password": "xxxxx"\n    }\n  }\n}\'\n')),(0,n.kt)("p",{parentName:"li"},"This is how the result should look:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'{"contact":{"id":1,"name":"Admin Centreon","alias":"admin","email":"admin@localhost","is_admin":true},"security":{"token":"hwwE7w/ukiiMce2lwhNi2mcFxLNYPhB9bYSKVP3xeTRUeN8FuGQms3RhpLreDX/S"}}\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Retrieve the token number to use it in the next request.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Then enter this request:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request PATCH 'http://10.25.XX.XX:80/centreon/api/latest/platform/updates' \\\n--header 'X-AUTH-TOKEN: hwwE7w/ukiiMce2lwhNi2mcFxLNYPhB9bYSKVP3xeTRUeN8FuGQms3RhpLreDX/S' \\\n--header 'Content-Type: application/json' \\\n--data '{\n    \"components\": [\n        {\n            \"name\": \"centreon-web\"\n        }\n    ]\n}'\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"This request does not return any result. To check if the update has been successfully applied, read the version number displayed on the Centreon web interface login page."))))),(0,n.kt)("p",null,"Finally, restart Broker, Engine and Gorgone on the central server by running this command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart cbd centengine gorgoned\n")),(0,n.kt)("p",null,"Update the permissions on the centreon-broker configuration files."),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"usermod -a -G centreon-broker apache\nusermod -a -G apache centreon-broker\n"))),(0,n.kt)(o.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"usermod -a -G centreon-broker www-data\nusermod -a -G www-data centreon-broker\n")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"As the interface layout has changed in version 22.10, you need to clear your browser cache to display the new theme.")),(0,n.kt)("p",null,"If the Centreon BAM module is installed, refer to the\n",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/docs/service-mapping/upgrade"},"upgrade procedure"),"."),(0,n.kt)("h3",{id:"post-upgrade-actions"},"Post-upgrade actions"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Upgrade extensions. From ",(0,n.kt)("strong",{parentName:"p"},"Administration > Extensions > Manager"),", upgrade all extensions, starting\nwith the following:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"License Manager,")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Monitoring Connector Manager,")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Auto Discovery."),(0,n.kt)("p",{parentName:"li"},"Then you can upgrade all other commercial extensions.")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/docs/monitoring/monitoring-servers/deploying-a-configuration"},"Deploy the configuration"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Restart the processes:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart cbd centengine centreontrapd gorgoned\n")))),(0,n.kt)("h2",{id:"upgrade-the-remote-servers"},"Upgrade the Remote Servers"),(0,n.kt)("p",null,"This procedure is the same as for upgrading a Centreon Central server."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"At the end of the update, the configuration should be deployed from the Central server.")),(0,n.kt)("h2",{id:"upgrade-the-pollers"},"Upgrade the Pollers"),(0,n.kt)("h3",{id:"update-the-centreon-repository"},"Update the Centreon repository"),(0,n.kt)("p",null,"Run the following command:"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/23.04/el8/centreon-23.04.repo\n"))),(0,n.kt)(o.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'echo "deb https://packages.centreon.com/apt-standard-23.04-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon.list\napt update\n')))),(0,n.kt)("h3",{id:"upgrade-the-centreon-solution-1"},"Upgrade the Centreon solution"),(0,n.kt)("p",null,"Clean the cache:"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf clean all --enablerepo=*\n"))),(0,n.kt)(o.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"apt clean all\napt update\n")))),(0,n.kt)("p",null,"Then upgrade all the components with the following command:"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf update centreon\\*\n"))),(0,n.kt)(o.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"apt upgrade centreon-poller\n")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Accept new GPG keys from the repositories as needed.")),(0,n.kt)("p",null,"Restart ",(0,n.kt)("strong",{parentName:"p"},"centreon"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart centreon\n")))}k.isMDXComponent=!0},81137:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/web_update_1-229784d5ed7986045c49b65b99ce38cd.png"},79778:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/web_update_2-f12be23b17ba9e83853cbdbaaea65402.png"},91003:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/web_update_3-d505e49a3b4f60dfd887ff45ddbf006b.png"},36221:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/web_update_4-97901eb976096c68fb2bd9d37c4de9bc.png"},41978:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/web_update_5-01f8c54614c006d7c1bf9e03799c1b81.png"}}]);