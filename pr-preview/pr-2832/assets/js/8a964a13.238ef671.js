"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[92079],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22185:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});n(67294);var a=n(3905),r=n(67709),o=n(7626);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"applications-monitoring-centreon-ha",title:"Centreon-HA"},p=void 0,c={unversionedId:"integrations/plugin-packs/procedures/applications-monitoring-centreon-ha",id:"integrations/plugin-packs/procedures/applications-monitoring-centreon-ha",title:"Centreon-HA",description:"Overview",source:"@site/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-ha.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-monitoring-centreon-ha",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-ha",draft:!1,tags:[],version:"current",frontMatter:{id:"applications-monitoring-centreon-ha",title:"Centreon-HA"},sidebar:"pp",previous:{title:"Centreon Database",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-database"},next:{title:"Centreon Map (Deprecated)",permalink:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-map-jmx"}},u={},d=[{value:"Overview",id:"overview",level:2},{value:"Plugin-Pack assets",id:"plugin-pack-assets",level:2},{value:"Monitored objects",id:"monitored-objects",level:3},{value:"Collected metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Device Configuration",id:"device-configuration",level:3},{value:"Network flows",id:"network-flows",level:3},{value:"SSH keys exchange",id:"ssh-keys-exchange",level:3},{value:"Installation",id:"installation",level:2},{value:"Host configuration",id:"host-configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"How to test the Plugin and what are the main options for?",id:"how-to-test-the-plugin-and-what-are-the-main-options-for",level:3},{value:"I get this error message. What does it mean?",id:"i-get-this-error-message-what-does-it-mean",level:3},{value:"The authenticity of host &#39;x.x.x.x (x.x.x.x)&#39; can&#39;t be established",id:"the-authenticity-of-host-xxxx-xxxx-cant-be-established",level:4},{value:"UNKNOWN: Command error: Permission denied, please try again",id:"unknown-command-error-permission-denied-please-try-again",level:4}],m={toc:d};function h(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",l({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",l({},{id:"overview"}),"Overview"),(0,a.kt)("p",null,"Centreon-HA is Centreon central server's high availability implementation. More information available ",(0,a.kt)("a",l({parentName:"p"},{href:"/docs/installation/installation-of-centreon-ha/overview"}),"here"),"."),(0,a.kt)("p",null,"This Plugin-Pack relies on two other Plugin-Packs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",l({parentName:"li"},{href:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/applications-pacemaker-ssh"}),"Pacemaker")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",l({parentName:"li"},{href:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/operatingsystems-linux-snmp"}),"Linux SNMP"))),(0,a.kt)("p",null,"It consequently uses both ",(0,a.kt)("strong",{parentName:"p"},"SNMP")," and ",(0,a.kt)("strong",{parentName:"p"},"SSH")," protocols to access a Centreon-HA cluster's nodes to get status and metrics related to the cluster's health."),(0,a.kt)("h2",l({},{id:"plugin-pack-assets"}),"Plugin-Pack assets"),(0,a.kt)("h3",l({},{id:"monitored-objects"}),"Monitored objects"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Centreon-HA cluster nodes"),(0,a.kt)("li",{parentName:"ul"},"Centreon-HA cluster's active member ",(0,a.kt)("em",{parentName:"li"},"via")," the virtual IP address"),(0,a.kt)("li",{parentName:"ul"},"Third party server supporting the Quorum Device role (",(0,a.kt)("inlineCode",{parentName:"li"},"corosync-qnetd")," service)")),(0,a.kt)("h3",l({},{id:"collected-metrics"}),"Collected metrics"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"PCS-Status",label:"PCS-Status",mdxType:"TabItem"},(0,a.kt)("p",null,"This template does not collect metrics, but provides the general state of the cluster:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'presence of "failed actions"'),(0,a.kt)("li",{parentName:"ul"},"resources state:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"php7")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cbd_rrd")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"vip")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"http")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gorgone")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"centreon_central_sync")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cbd_central_broker")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"centengine")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"centreontrapd")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"snmptrapd")))))),(0,a.kt)(o.Z,{value:"proc-corosync",label:"proc-corosync",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"nbproc"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Number of processes matching the filter: ",(0,a.kt)("inlineCode",{parentName:"td"},"corosync")),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Count"))))),(0,a.kt)(o.Z,{value:"proc-pacemakerd",label:"proc-pacemakerd",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"nbproc"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Number of processes matching the filter: ",(0,a.kt)("inlineCode",{parentName:"td"},"pacemakerd")),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Count"))))),(0,a.kt)(o.Z,{value:"proc-pcsd",label:"proc-pcsd",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"nbproc"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Number of processes matching the filter: ",(0,a.kt)("inlineCode",{parentName:"td"},"pcsd")),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Count")))))),(0,a.kt)("h2",l({},{id:"prerequisites"}),"Prerequisites"),(0,a.kt)("h3",l({},{id:"device-configuration"}),"Device Configuration"),(0,a.kt)("p",null,"The configuration of SNMP on a Linux server is detailed in ",(0,a.kt)("a",l({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/pp/integrations/plugin-packs/procedures/operatingsystems-linux-snmp#net-snmp-server-configuration"}),"the ",(0,a.kt)("em",{parentName:"a"},"Linux SNMP")," Plugin-Pack's documentation page"),"."),(0,a.kt)("h3",l({},{id:"network-flows"}),"Network flows"),(0,a.kt)("p",null,"The Centreon Poller must be able to reach UDP/161 (SNMP) and TCP/22 (SSH) ports of the central nodes."),(0,a.kt)("h3",l({},{id:"ssh-keys-exchange"}),"SSH keys exchange"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"NB : It is strongly recommended to monitor the cluster from an external poller rather than from the cluster's active node.")),(0,a.kt)("p",null,"Open a ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," command-line session on:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the poller that will monitor the cluster"),(0,a.kt)("li",{parentName:"ul"},"both of the cluster nodes")),(0,a.kt)("p",null,"Then switch to ",(0,a.kt)("inlineCode",{parentName:"p"},"centreon-engine"),"'s bash environment on both nodes:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),"su - centreon-engine\n")),(0,a.kt)("p",null,"Then run these commands on both nodes:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"ssh-keygen -t ed25519 -a 100\n")),(0,a.kt)("p",null,"We have generated a pair of keys on each server, and the ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.ssh")," directory. "),(0,a.kt)("p",null,"Run this command on the poller to display the user's public key:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"cat ~/.ssh/id_ed25519.pub\n")),(0,a.kt)("p",null,"Once done, copy the content of the public key file displayed by ",(0,a.kt)("inlineCode",{parentName:"p"},"cat")," and paste it to ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.ssh/authorized_keys")," (must be created) on both of the cluster's nodes and apply the correct file permissions (sill as ",(0,a.kt)("inlineCode",{parentName:"p"},"centreon-engine")," user):"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),"chmod 600 ~/.ssh/authorized_keys\n")),(0,a.kt)("p",null,"The keys exchange must be validated by an initial connection from each node to the other in order to accept and register the peer node's SSH fingerprint (sill as ",(0,a.kt)("inlineCode",{parentName:"p"},"centreon-engine")," user):"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),"ssh <cluster-node-ip-address>\n")),(0,a.kt)("p",null,"Then exit the ",(0,a.kt)("inlineCode",{parentName:"p"},"centreon-engine")," session typing ",(0,a.kt)("inlineCode",{parentName:"p"},"exit")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl-D"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"centreon-engine")," user is now able to log in ",(0,a.kt)("em",{parentName:"p"},"via")," SSH to both central nodes."),(0,a.kt)("p",null,"Now add the ",(0,a.kt)("inlineCode",{parentName:"p"},"centreon-engine")," user to the ",(0,a.kt)("inlineCode",{parentName:"p"},"haclient")," group to entitle it to run the cluster management commands."),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"usermod -a -G haclient centreon-engine\n")),(0,a.kt)("h2",l({},{id:"installation"}),"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin package on every Centreon Poller expected to monitor the Centreon-HA cluster:")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Operatingsystems-Linux-Snmp centreon-plugin-Applications-Pacemaker-Ssh\n")),(0,a.kt)("ol",l({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,a.kt)("em",{parentName:"li"},"Centreon-HA"),' Plugin-Pack through "Configuration > Plugin packs > Manager" page.'))),(0,a.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin package on every Centreon Poller expected to monitor the Centreon-HA cluster:")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Operatingsystems-Linux-Snmp centreon-plugin-Applications-Pacemaker-Ssh\n")),(0,a.kt)("ol",l({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"Install the Centreon Plugin-Pack RPM on the Centreon Central server:")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"yum install centreon-pack-applications-monitoring-centreon-ha\n")),(0,a.kt)("ol",l({},{start:3}),(0,a.kt)("li",{parentName:"ol"},"On the Centreon Web interface, install the ",(0,a.kt)("em",{parentName:"li"},"Centreon-HA"),' Plugin-Pack through "Configuration > Plugin packs > Manager" page.')))),(0,a.kt)("h2",l({},{id:"host-configuration"}),"Host configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add a new Host and apply the ",(0,a.kt)("em",{parentName:"li"},"App-Monitoring-Centreon-HA-Cluster-Node-custom")," Host Template"),(0,a.kt)("li",{parentName:"ul"},"Fill the SNMP Version and Community fields according to the device's configuration")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When using SNMP v3, use the SNMPEXTRAOPTIONS Host Macro to add specific authentication parameters")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Mandatory"),(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Name"),(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"})),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"SNMPEXTRAOPTIONS"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Configure your own SNMPv3 credentials combo")))),(0,a.kt)("h2",l({},{id:"faq"}),"FAQ"),(0,a.kt)("h3",l({},{id:"how-to-test-the-plugin-and-what-are-the-main-options-for"}),"How to test the Plugin and what are the main options for?"),(0,a.kt)("p",null,"Once the prerequisites have been met and the Plugin has been installed, the monitoring can be performed from the poller, using the command-line interface, running this command ",(0,a.kt)("strong",{parentName:"p"},"as user ",(0,a.kt)("inlineCode",{parentName:"strong"},"centreon-engine")),":"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_pacemaker_ssh.pl \\\n    --plugin=apps::pacemaker::local::plugin \\\n    --mode=crm \\\n    --hostname=10.0.0.1 \\\n    --command='pcs' \\\n    --command-options='status --full' \\\n    --verbose\n")),(0,a.kt)("p",null,"The output of this command should look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-text"}),"OK: Cluster is OK |\nResource 'php7' is started on node 'central-primary'\nResource 'php7' is started on node 'central-secondary'\nResource 'cbd_rrd' is started on node 'central-primary'\nResource 'cbd_rrd' is started on node 'central-secondary'\nResource 'vip' is started on node 'central-secondary'\nResource 'http' is started on node 'central-secondary'\nResource 'gorgone' is started on node 'central-secondary'\nResource 'centreon_central_sync' is started on node 'central-secondary'\nResource 'cbd_central_broker' is started on node 'central-secondary'\nResource 'centengine' is started on node 'central-secondary'\nResource 'centreontrapd' is started on node 'central-secondary'\nResource 'snmptrapd' is started on node 'central-secondary'\n")),(0,a.kt)("p",null,"In this example, the Plugin queries the node at ",(0,a.kt)("em",{parentName:"p"},"10.0.0.1")," to collect the overall state of the cluster and makes sure that all resources are started."),(0,a.kt)("p",null,"It will return a ",(0,a.kt)("em",{parentName:"p"},"WARNING")," state if ",(0,a.kt)("em",{parentName:"p"},"failed actions")," are displayed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"pcs status --full")," command. It will return a ",(0,a.kt)("em",{parentName:"p"},"CRITICAL")," state if one or more resources are stopped."),(0,a.kt)("p",null,"For each mode, all the available options can be displayed by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," option:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_pacemaker_ssh.pl --plugin=apps::pacemaker::local::plugin --mode=crm --help\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"--command='pcs'")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"--command-options='status --full'")," overload the default command and options, using ",(0,a.kt)("inlineCode",{parentName:"p"},"pcs status --full")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"crm_mon -1 -r -f 2>&1"),"."),(0,a.kt)("h3",l({},{id:"i-get-this-error-message-what-does-it-mean"}),"I get this error message. What does it mean?"),(0,a.kt)("h4",l({},{id:"the-authenticity-of-host-xxxx-xxxx-cant-be-established"}),"The authenticity of host 'x.x.x.x (x.x.x.x)' can't be established"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Warning: all the SSH and monitoring commands must be executed as ",(0,a.kt)("inlineCode",{parentName:"p"},"centreon-engine")," on the poller.")),(0,a.kt)("p",null,"The full message looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-text"}),"The authenticity of host 'x.x.x.x (x.x.x.x)' can't be established.\nECDSA key fingerprint is SHA256:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.\nECDSA key fingerprint is MD5:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.\nAre you sure you want to continue connecting (yes/no)? UNKNOWN: Command too long to execute (timeout)...\n")),(0,a.kt)("p",null,"If you are getting this error message, this means that you have not yet accepted the server's fingerprint."),(0,a.kt)("p",null,"To fix that issue, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"ssh x.x.x.x\n")),(0,a.kt)("p",null,"Then type 'yes' (without quotes) at this prompt:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-text"}),"The authenticity of host 'x.x.x.x (x.x.x.x)' can't be established.\nECDSA key fingerprint is SHA256:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.\nECDSA key fingerprint is MD5:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.\nAre you sure you want to continue connecting (yes/no)?\n")),(0,a.kt)("h4",l({},{id:"unknown-command-error-permission-denied-please-try-again"}),"UNKNOWN: Command error: Permission denied, please try again"),(0,a.kt)("p",null,"The full message looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-text"}),"UNKNOWN: Command error: Permission denied, please try again. - Permission denied, please try again. - Permission denied (publickey,gssapi-keyex,gssapi-with-mic,password).\n")),(0,a.kt)("p",null,"If the Plugin returns this message, it means that ",(0,a.kt)("inlineCode",{parentName:"p"},"centreon-engine"),"'s public key has not correctly been added to the list of authorized keys on the server that we are trying to monitor."),(0,a.kt)("p",null,"First we have to make sure that this key (stored in ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/centreon-engine/.ssh/id_ed25519.pub"),") is present in the file ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/centreon-engine/.ssh/authorized_keys"),"."),(0,a.kt)("p",null,"If the check point above is valid, then make sure that the ",(0,a.kt)("inlineCode",{parentName:"p"},"authorized_keys")," file and ",(0,a.kt)("inlineCode",{parentName:"p"},".ssh")," directory permissions are correct. You can check the permissions with this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"ls -al /var/lib/centreon-engine/.ssh\n")),(0,a.kt)("p",null,"The permissions (first part of the line) should be the same as:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-text"}),"total 20\ndrwx------  2 centreon-engine centreon-engine 4096 Sep  4 14:44 .\ndrwxr-xr-x. 5 centreon-engine centreon-engine 4096 Sep  4 14:44 ..\n-rw-------  1 centreon-engine centreon-engine    0 Sep  4 14:44 authorized_keys\n")),(0,a.kt)("p",null,"To fix any read/write/execute permission difference, just run:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"chmod 700 /var/lib/centreon-engine/.ssh\nchmod 600 /var/lib/centreon-engine/.ssh/authorized_keys\n")))}h.isMDXComponent=!0},7626:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function i({children:e,hidden:t,className:n}){return a.createElement("div",l({role:"tabpanel",className:(0,r.Z)(o,n)},{hidden:t}),e)}},67709:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(67294),r=n(86010),o=n(90980),l=n(35715),i=n(8854),s=n(8241);const p="tabList__CuJ",c="tabItem_LNqP";function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}function d(e){var t;const{lazy:n,block:o,defaultValue:d,values:m,groupId:h,className:k}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),x=null!=m?m:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),f=(0,l.l)(x,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var N;const b=null===d?d:null!==(N=null!=d?d:null===(t=g.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==N?N:g[0].props.value;if(null!==b&&!x.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${x.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:v}=(0,i.U)(),[C,w]=(0,a.useState)(b),P=[],{blockElementScrollPositionUntilNextRender:O}=(0,s.o5)();if(null!=h){const e=y[h];null!=e&&e!==C&&x.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,n=P.indexOf(t),a=x[n].value;a!==C&&(O(t),w(a),null!=h&&v(h,String(a)))},S=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=P.indexOf(e.currentTarget)+1;var n;t=null!==(n=P[a])&&void 0!==n?n:P[0];break}case"ArrowLeft":{const n=P.indexOf(e.currentTarget)-1;var a;t=null!==(a=P[n])&&void 0!==a?a:P[P.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},k)},x.map((({value:e,label:t,attributes:n})=>a.createElement("li",u({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>P.push(e),onKeyDown:S,onFocus:T,onClick:T},n,{className:(0,r.Z)("tabs__item",c,null==n?void 0:n.className,{"tabs__item--active":C===e})}),null!=t?t:e)))),n?(0,a.cloneElement)(g.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function m(e){const t=(0,o.Z)();return a.createElement(d,u({key:String(t)},e))}}}]);