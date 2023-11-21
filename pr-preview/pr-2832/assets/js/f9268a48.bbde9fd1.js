"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[37458],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),k=a,d=u["".concat(p,".").concat(k)]||u[k]||m[k]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5434:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={id:"applications-voip-asterisk",title:"Asterisk VoIP Server"},s=void 0,p={unversionedId:"integrations/plugin-packs/procedures/applications-voip-asterisk",id:"integrations/plugin-packs/procedures/applications-voip-asterisk",title:"Asterisk VoIP Server",description:"Prerequisites",source:"@site/pp/integrations/plugin-packs/procedures/applications-voip-asterisk.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-voip-asterisk",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/applications-voip-asterisk",draft:!1,tags:[],version:"current",frontMatter:{id:"applications-voip-asterisk",title:"Asterisk VoIP Server"},sidebar:"pp",previous:{title:"Alcatel OXE",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/hardware-telephony-alcatel-oxe-snmp"},next:{title:"AudioCodes",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/network-audiocodes-snmp"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Centreon Plugin",id:"centreon-plugin",level:3},{value:"Asterisk server configuration",id:"asterisk-server-configuration",level:3},{value:"SNMP mode",id:"snmp-mode",level:3},{value:"Remote mode",id:"remote-mode",level:3}],m={toc:c};function u(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",a({},{id:"prerequisites"}),"Prerequisites"),(0,r.kt)("h3",a({},{id:"centreon-plugin"}),"Centreon Plugin"),(0,r.kt)("p",null,"Install this plugin on each needed poller:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-shell"}),"yum install centreon-plugin-Applications-Voip-Asterisk\n")),(0,r.kt)("h3",a({},{id:"asterisk-server-configuration"}),"Asterisk server configuration"),(0,r.kt)("p",null,"After connecting with root account to your Asterisk server, you must do the\nfollowing configurations."),(0,r.kt)("h3",a({},{id:"snmp-mode"}),"SNMP mode"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install ",(0,r.kt)("em",{parentName:"p"},"snmpd")," daemon.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Modify the file ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/asterisk/modules.conf")," by commenting out the line\ncontaining ",(0,r.kt)("inlineCode",{parentName:"p"},"res_snmp.so"),":"),(0,r.kt)("p",{parentName:"li"},"vi /etc/asterisk/modules.conf"))),(0,r.kt)("p",null,"example:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"[modules] autoload=yes\n... noload => res_config_pgsql.so noload => res_phoneprov.so #noload => res_snmp.so noload => res_speech.so noload => res_config_sqlite.so ...\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Modify or create the file ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/asterisk/res_snmp.conf")," to add the following\nparameters:"),(0,r.kt)("p",{parentName:"li"},"vi /etc/asterisk/res","_","snmp.conf"),(0,r.kt)("p",{parentName:"li"},"[","general","]"," subagent = yes enabled = yes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Modify the file ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/snmp/snmpd.conf")," to add some parameters:"),(0,r.kt)("p",{parentName:"li"},"/etc/snmp/snmpd.conf"))),(0,r.kt)("p",null,"exemple:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"# Acces to Asterisk snmp\n# Asterisk user\ncreateUser asteriskUser SHA \"password\" AES\nrwuser asteriskUser priv\n# Enable AgentX support\nmaster agentx\nagentXSocket /var/agentx/master\n# Set permissions on AgentX socket and containing\n# directory such that process in group 'asterisk'\n# will be able to connect\nagentXPerms  0660 0550 nobody asterisk\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Download the following 2 files and place them into /usr/share/snmp/mibs (or\nmib2c-data):"),(0,r.kt)("p",{parentName:"li"},"wget ",(0,r.kt)("a",a({parentName:"p"},{href:"https://wiki.asterisk.org/wiki/display/AST/Asterisk+MIB+Definitions"}),"https://wiki.asterisk.org/wiki/display/AST/Asterisk+MIB+Definitions"),"\nwget ",(0,r.kt)("a",a({parentName:"p"},{href:"https://wiki.asterisk.org/wiki/display/AST/Digium+MIB+Definitions"}),"https://wiki.asterisk.org/wiki/display/AST/Digium+MIB+Definitions"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Restart snmpd and asterisk server:"),(0,r.kt)("p",{parentName:"li"},"/etc/init.d/snmpd restart /etc/init.d/asterisk restart"))),(0,r.kt)("p",null,"Here is an exemple of a command to check the snmp functionality:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),'snmpwalk -v 3 -u asteriskUser -l authPriv -a SHA -A "password" -x AES -X "password" <xivo serveur IP> .1.3.6.1.4.1.22736\n')),(0,r.kt)("h3",a({},{id:"remote-mode"}),"Remote mode"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Commun")),(0,r.kt)("p",null,"For any remote acces, you must create an Asterisk user:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"vi /etc/aserisk/manager.conf\n")),(0,r.kt)("p",null,"example of user:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"[xivo_centreon_user]\nsecret = centreon\ndeny=0.0.0.0/0.0.0.0\npermit=127.0.0.1/255.255.255.0\nread = system,call,log,verbose,command,agent,user,dtmf\nwrite = system,call,log,verbose,command,agent,user,dtmf\n")),(0,r.kt)("ol",a({},{start:2}),(0,r.kt)("li",{parentName:"ol"},"AMI")),(0,r.kt)("p",null,"In te newly created user, add a ",(0,r.kt)("em",{parentName:"p"},"permit")," line to allow the centreon server to\nconect to the AMI:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"vi /etc/aserisk/manager.conf\n")),(0,r.kt)("p",null,"example:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"permit=10.30.2.32/255.255.255.0\n")),(0,r.kt)("ol",a({},{start:3}),(0,r.kt)("li",{parentName:"ol"},"SSH")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create a system user, ",(0,r.kt)("em",{parentName:"p"},"centreon")," for exemple:"),(0,r.kt)("p",{parentName:"li"},"useradd centreon passwd centreon")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Echange ssh keys from the centreon server to the asterisk server (user\n",(0,r.kt)("em",{parentName:"p"},"centreon")," in our exemple):"),(0,r.kt)("p",{parentName:"li"},"ssh-copy-id centreon@",(0,r.kt)("inlineCode",{parentName:"p"},"<asterisk server>"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Push the script\n",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib/nagios/plugins/apps/voip/asterisk/remote/remote-script/asterisk_sendcommand.pm"),"\nto ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/centreon/bin"),":"),(0,r.kt)("p",{parentName:"li"},"scp\n/usr/lib/nagios/plugins/apps/voip/asterisk/remote/remote-script/asterisk","_","sendcommand.pm\n/home/centreon/bin/.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Push from the centreon server\n",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib/nagios/plugins/apps/voip/asterisk/remote/remote-script/asterisk_sendcommand.conf"),"or\ncreate it at ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/centreon/bin/asterisk_centreon.conf")," directly on the\nasterisk server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Copy the ",(0,r.kt)("em",{parentName:"p"},"user name")," and the ",(0,r.kt)("em",{parentName:"p"},"secret")," of the centreon user contained into\n",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/asterisk/manager.conf")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/centreon/bin/asterisk_centreon.conf"),":"),(0,r.kt)("p",{parentName:"li"},"vi /home/centreon/bin/asterisk","_","centreon.conf"))),(0,r.kt)("p",null,"add the line:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{}),"xivo_centreon_user centreon\n")),(0,r.kt)("p",null,"Warning: this file must contain only one line"),(0,r.kt)("p",null,"Warning: the files ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/centreon/bin/asterisk_centreon.conf")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"/home/centreon/bin/asterisk_centreon.conf")," must be executable and readable by\nthe ",(0,r.kt)("em",{parentName:"p"},"centreon")," user"))}u.isMDXComponent=!0}}]);