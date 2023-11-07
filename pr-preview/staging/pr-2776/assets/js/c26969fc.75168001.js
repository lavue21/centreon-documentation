"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[3557],{45965:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>p,toc:()=>m});n(67294);var a=n(3905),r=n(51715),o=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const c={id:"administration",title:"Administration"},d=void 0,p={unversionedId:"monitoring/discovery/administration",id:"version-23.10/monitoring/discovery/administration",title:"Administration",description:"Update",source:"@site/versioned_docs/version-23.10/monitoring/discovery/administration.md",sourceDirName:"monitoring/discovery",slug:"/monitoring/discovery/administration",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/docs/monitoring/discovery/administration",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/monitoring/discovery/administration.md",tags:[],version:"23.10",lastUpdatedAt:1699375250,formattedLastUpdatedAt:"Nov 7, 2023",frontMatter:{id:"administration",title:"Administration"},sidebar:"version-23.10/docs",previous:{title:"Discovering services automatically",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/docs/monitoring/discovery/services-discovery"},next:{title:"Troubleshooting host discovery issues",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/docs/monitoring/discovery/troubleshooting-hosts-discovery"}},u={},m=[{value:"Update",id:"update",level:2},{value:"Uninstallation",id:"uninstallation",level:2},{value:"Gorgone module configuration",id:"gorgone-module-configuration",level:2},{value:"Distributed architecture",id:"distributed-architecture",level:3},{value:"Service Discovery scheduled job",id:"service-discovery-scheduled-job",level:3},{value:"API accesses",id:"api-accesses",level:3}],g={toc:m},k="wrapper";function h(e){var{components:t}=e,c=s(e,["components"]);return(0,a.kt)(k,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},g,c),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"update"},"Update"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"To update the module, run the following command:")),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dnf update -y centreon-auto-discovery-server\n"))),(0,a.kt)(o.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dnf update -y centreon-auto-discovery-server\n"))),(0,a.kt)(o.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"apt update && apt update centreon-auto-discovery-server\n")))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Connect to the Centreon web interface using an account allowed to install\nproducts and go to the ",(0,a.kt)("strong",{parentName:"p"},"Administration > Extensions > Manager")," page.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make sure the ",(0,a.kt)("strong",{parentName:"p"},"License Manager")," and ",(0,a.kt)("strong",{parentName:"p"},"Monitoring Connectors Manager")," modules are\nup to date before updating the ",(0,a.kt)("strong",{parentName:"p"},"Auto Discovery")," module.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click the update icon corresponding to the ",(0,a.kt)("strong",{parentName:"p"},"Auto Discovery"),"\nmodule:"),(0,a.kt)("p",{parentName:"li"},"  ",(0,a.kt)("img",{alt:"image",src:n(17864).Z,width:"935",height:"410"})),(0,a.kt)("p",{parentName:"li"},"  The module is now updated:"),(0,a.kt)("p",{parentName:"li"},"  ",(0,a.kt)("img",{alt:"image",src:n(51741).Z,width:"564",height:"308"})))),(0,a.kt)("h2",{id:"uninstallation"},"Uninstallation"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Uninstalling the module will also remove all the associated data. Data won't\nbe restorable unless a database backup has been made.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Connect to the Centreon web interface using an account allowed to install\nproducts and go to the ",(0,a.kt)("strong",{parentName:"p"},"Administration > Extensions > Manager")," page.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click the delete icon corresponding to the ",(0,a.kt)("strong",{parentName:"p"},"Auto Discovery"),"\nmodule:"),(0,a.kt)("p",{parentName:"li"},"  ",(0,a.kt)("img",{alt:"image",src:n(51741).Z,width:"564",height:"308"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"A confirmation popup will appear. Confirm the action:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"image",src:n(41386).Z,width:"355",height:"251"})),(0,a.kt)("p",{parentName:"li"},"The module is now uninstalled:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"image",src:n(95819).Z,width:"935",height:"410"})))),(0,a.kt)("h2",{id:"gorgone-module-configuration"},"Gorgone module configuration"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Auto Discovery")," module brings a specific configuration for the Gorgone\nservice on the Central server. The default configuration is\n",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/centreon-gorgone/config.d/41-autodiscovery.yaml"),"."),(0,a.kt)("p",null,"A maximum duration for host discovery jobs is set globally. If it is necessary to\nchange it (large subnet SNMP discovery, for example), edit the configuration and\nadd the ",(0,a.kt)("em",{parentName:"p"},"global_timeout")," directive."),(0,a.kt)("p",null,"If mail notifications are enabled in service discovery rules, mail parameters\ncan be defined to choose the sender, subject or mail command."),(0,a.kt)("p",null,"Example configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'gorgone:\n  modules:\n    - name: autodiscovery\n      package: "gorgone::modules::centreon::autodiscovery::hooks"\n      enable: true\n      # Host Discovery\n      check_interval: 15\n      global_timeout: 300\n      # Service Discovery\n      mail_subject: Centreon Auto Discovery\n      mail_from: centreon-autodisco\n      mail_command: /bin/mail\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Be sure to restart the Gorgone service after any configuration modification:"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart gorgoned\n"))),(0,a.kt)("h3",{id:"distributed-architecture"},"Distributed architecture"),(0,a.kt)("p",null,"The host and service discoveries both rely on Gorgone to perform discoveries\non both Central and Remote Servers or Pollers."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"It is necessary to have a ZMQ communication between the Central server and a\nRemote Server to perform a discovery on a Poller attached to this Remote\nServer."),(0,a.kt)("p",{parentName:"blockquote"},"Look at the section presenting the different ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/docs/monitoring/monitoring-servers/communications"},"communication\ntypes")," to know more.")),(0,a.kt)("h3",{id:"service-discovery-scheduled-job"},"Service Discovery scheduled job"),(0,a.kt)("p",null,"All the active discovery rules are periodically executed through a scheduled job\nmanaged by Gorgone's cron module. The ",(0,a.kt)("strong",{parentName:"p"},"Auto Discovery")," module brings a cron\ndefinition in the following file:\n",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/centreon-gorgone/config.d/cron.d/41-service-discovery.yaml"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'- id: service_discovery\n  timespec: "30 22 * * *"\n  action: LAUNCHSERVICEDISCOVERY\n')),(0,a.kt)("p",null,"The default configuration runs the discovery every day at 10:30 PM."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you have changed the legacy ",(0,a.kt)("em",{parentName:"p"},"crond")," configuration file to adapt the schedule,\nyou must apply changes to the new configuration file.")),(0,a.kt)("p",null,"It is also possible to run multiple service discoveries with different\nparameters:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'- id: service_discovery_poller_1\n  timespec: "15 9 * * *"\n  action: LAUNCHSERVICEDISCOVERY\n  parameters:\n    filter_pollers:\n      - Poller-1\n- id: service_discovery_poller_2_linux\n  timespec: "30 9 * * *"\n  action: LAUNCHSERVICEDISCOVERY\n  parameters:\n    filter_pollers:\n      - Poller-2\n    filter_rules:\n      - OS-Linux-SNMP-Disk-Name\n      - OS-Linux-SNMP-Traffic-Name\n- id: service_discovery_poller_2_windows\n  timespec: "45 9 * * *"\n  action: LAUNCHSERVICEDISCOVERY\n  parameters:\n    filter_pollers:\n      - Poller-2\n    filter_rules:\n      - OS-Windows-SNMP-Disk-Name\n      - OS-Windows-SNMP-Traffic-Name\n')),(0,a.kt)("p",null,"Here is the list of all available parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Key"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"filter","_","rules"),(0,a.kt)("td",{parentName:"tr",align:null},"Array of rules to use for discovery (empty means all)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"force","_","rule"),(0,a.kt)("td",{parentName:"tr",align:null},"Run disabled rules ('0': not forced, '1': forced)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"filter","_","hosts"),(0,a.kt)("td",{parentName:"tr",align:null},"Array of hosts which will run the discovery (empty means all)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"filter","_","pollers"),(0,a.kt)("td",{parentName:"tr",align:null},"Array of pollers for which linked hosts will undergo discovery (empty means all)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"dry","_","run"),(0,a.kt)("td",{parentName:"tr",align:null},"Run discovery without configuration changes ('0': changes, '1': dry run)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"no","_","generate","_","config"),(0,a.kt)("td",{parentName:"tr",align:null},"No configuration generation (even if there are some changes) ('0': generation, '1': no generation)")))),(0,a.kt)("h3",{id:"api-accesses"},"API accesses"),(0,a.kt)("p",null,"When installing Gorgone, a default configuration to access the Centreon APIs is\nlocated at ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/centreon-gorgone/config.d/31-centreon-api.yaml"),"."),(0,a.kt)("p",null,"It defines accesses to both Centreon CLAPI and RestAPI to allow discovery to\ncommunicate with Centreon."),(0,a.kt)("p",null,"Example configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'gorgone:\n  tpapi:\n    - name: centreonv2\n      base_url: "http://127.0.0.1/centreon/api/latest/"\n      username: api\n      password: bpltc4aY\n    - name: clapi\n      username: cli\n      password: PYNM5kcc\n')),(0,a.kt)("p",null,"Access to RestAPI, represented by ",(0,a.kt)("em",{parentName:"p"},"centreonv2"),", requires credentials of a\nuser with ",(0,a.kt)("em",{parentName:"p"},"Reach API Configuration")," access. It is used for Host Discovery."),(0,a.kt)("p",null,"Access to CLAPI requires the credentials of an ",(0,a.kt)("em",{parentName:"p"},"Admin")," user. It is used for\nService Discovery."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"One user can be used for both accesses. Furthermore, users don't need\naccess to the Centreon UI.")))}h.isMDXComponent=!0},51741:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/install-after-dd0d51f6e89a7f12567170213f4a3c43.png"},95819:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/install-before-41deca4048b7c1be4406048eb2706df0.png"},41386:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/uninstall-popin-b7948c45f05ae065cae73c975a4582ea.png"},17864:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/update-29d114f6e00e0d73671fbb2e6b45a4a3.png"}}]);