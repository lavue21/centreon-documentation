"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[18027],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),g=o,d=m["".concat(c,".").concat(g)]||m[g]||u[g]||r;return n?a.createElement(d,l(l({ref:t},s),{},{components:n})):a.createElement(d,l({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7626:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),o=n(86010);const r="tabItem_Ymn6";function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function i({children:e,hidden:t,className:n}){return a.createElement("div",l({role:"tabpanel",className:(0,o.Z)(r,n)},{hidden:t}),e)}},67709:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(67294),o=n(86010),r=n(90980),l=n(35715),i=n(8854),c=n(8241);const p="tabList__CuJ",s="tabItem_LNqP";function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}function m(e){var t;const{lazy:n,block:r,defaultValue:m,values:g,groupId:d,className:h}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=null!=g?g:k.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),y=(0,l.l)(f,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var v;const N=null===m?m:null!==(v=null!=m?m:null===(t=k.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==v?v:k[0].props.value;if(null!==N&&!f.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:w}=(0,i.U)(),[C,x]=(0,a.useState)(N),A=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=d){const e=b[d];null!=e&&e!==C&&f.some((t=>t.value===e))&&x(e)}const O=e=>{const t=e.currentTarget,n=A.indexOf(t),a=f[n].value;a!==C&&(T(t),x(a),null!=d&&w(d,String(a)))},_=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=A.indexOf(e.currentTarget)+1;var n;t=null!==(n=A[a])&&void 0!==n?n:A[0];break}case"ArrowLeft":{const n=A.indexOf(e.currentTarget)-1;var a;t=null!==(a=A[n])&&void 0!==a?a:A[A.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},h)},f.map((({value:e,label:t,attributes:n})=>a.createElement("li",u({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>A.push(e),onKeyDown:_,onFocus:O,onClick:O},n,{className:(0,o.Z)("tabs__item",s,null==n?void 0:n.className,{"tabs__item--active":C===e})}),null!=t?t:e)))),n?(0,a.cloneElement)(k.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function g(e){const t=(0,r.Z)();return a.createElement(m,u({key:String(t)},e))}},47783:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>m});n(67294);var a=n(3905),o=n(67709),r=n(7626);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={id:"centreon-agent",title:"Installing the Centreon Agent"},p=void 0,s={unversionedId:"health/centreon-agent",id:"version-23.10/health/centreon-agent",title:"Installing the Centreon Agent",description:"Overview",source:"@site/versioned_docs/version-23.10/health/centreon-agent.md",sourceDirName:"health",slug:"/health/centreon-agent",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/health/centreon-agent",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/next/versioned_docs/version-23.10/health/centreon-agent.md",tags:[],version:"23.10",lastUpdatedAt:1700565273,formattedLastUpdatedAt:"Nov 21, 2023",frontMatter:{id:"centreon-agent",title:"Installing the Centreon Agent"},sidebar:"version-23.10/docs",previous:{title:"Upgrade Centreon HA from Centreon 22.10",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/upgrade/centreon-ha/upgrade-centreon-ha-from-22-10"},next:{title:"Centreon Platform 23.10",permalink:"/centreon-documentation/pr-preview/pr-2832/docs/releases/introduction"}},u={},m=[{value:"Overview",id:"overview",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Installing the Agent",id:"installing-the-agent",level:2},{value:"On a Centreon Central Server",id:"on-a-centreon-central-server",level:3},{value:"On other host machines (Remote Server, Poller, MAP, etc.)",id:"on-other-host-machines-remote-server-poller-map-etc",level:3},{value:"Configuring the Agent",id:"configuring-the-agent",level:2},{value:"Network",id:"network",level:3},{value:"Proxy Configuration",id:"proxy-configuration",level:4},{value:"Gateway Configuration",id:"gateway-configuration",level:4},{value:"Enabling the Collection of Centreon Logs",id:"enabling-the-collection-of-centreon-logs",level:3},{value:"Using the Templates",id:"using-the-templates",level:4},{value:"Finalize template configuration",id:"finalize-template-configuration",level:4},{value:"Start log collection",id:"start-log-collection",level:4},{value:"Tags",id:"tags",level:3},{value:"Remote Database",id:"remote-database",level:3},{value:"Log rotation",id:"log-rotation",level:3},{value:"Testing the Agent",id:"testing-the-agent",level:2},{value:"Testing the centreon-agent Service",id:"testing-the-centreon-agent-service",level:3},{value:"Testing Data Collection",id:"testing-data-collection",level:3},{value:"Testing that you can access the Centreon Cloud Platform",id:"testing-that-you-can-access-the-centreon-cloud-platform",level:3},{value:"Help",id:"help",level:3},{value:"Updating the Agent",id:"updating-the-agent",level:2}],g={toc:m};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",l({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",l({},{id:"overview"}),"Overview"),(0,a.kt)("p",null,"The Centreon Agent is a light piece of software that monitors its host machine and the services that run on it."),(0,a.kt)("p",null,"The Agent can be used to monitor servers that operate an On-Premise Centreon service (Central, Remote Server, Poller, Map, etc.). The Agent is available on Alma/RHEL/Oracle Linux 8 and 9."),(0,a.kt)("p",null,"The data is sent to the Centreon Cloud Platform. No personal data is collected."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Although the following procedure and the Agent configuration files in general allow for some customization, we strongly advise you to leave the filenames etc. as shown here.")),(0,a.kt)("h2",l({},{id:"requirements"}),"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In order for the metrics to reach the Centreon Cloud Platform (where the monitoring of the monitoring is done), a Centreon Agent must be able to access our public endpoint at the following URL:"),(0,a.kt)("p",{parentName:"li"},"  ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api.a.prod.mycentreon.com/v1/observability")," (port 443)"),(0,a.kt)("p",{parentName:"li"},"  You can test whether your machine can access our endpoint using the following command:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{}),"curl -v https://api.a.prod.mycentreon.com/v1/observability\n")),(0,a.kt)("p",{parentName:"li"},"  You can also go through a proxy using the following command:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{}),"curl -v https://api.a.prod.mycentreon.com/v1/observability \\\n--proxy [protocol://]host[:port] --proxy-insecure\n")),(0,a.kt)("p",{parentName:"li"},"  Example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{}),"curl -v https://api.a.prod.mycentreon.com/v1/observability \\\n--proxy http://proxy.local.net:3128 --proxy-insecure\n")),(0,a.kt)("p",{parentName:"li"},"  The following message will be returned in case of success:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{}),'"Missing Authentication Token"\n')),(0,a.kt)("p",{parentName:"li"},"  If you receive a different answer or no answer, your machine cannot reach our endpoint, probably because of your network rules (firewall, proxy, etc.)."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"If a proxy access is configured on the host machine, you need to copy the address and port of the proxy to the Agent\u2019s configuration file (see section ",(0,a.kt)("a",l({parentName:"p"},{href:"#network"}),"Network"),")."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If a host machine does not have direct access to the outside, two options that complement each other are provided: ",(0,a.kt)("a",l({parentName:"p"},{href:"#proxy-configuration"}),"proxy configuration")," and ",(0,a.kt)("a",l({parentName:"p"},{href:"#gateway-configuration"}),"gateway configuration"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The RPMs are available in the Centreon official repositories for the currently supported versions. The official Centreon repository must be installed:"))),(0,a.kt)(o.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-shell"}),"dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/23.04/el8/centreon-23.04.repo\ndnf clean all --enablerepo=*\ndnf update\n"))),(0,a.kt)(r.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-shell"}),"dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/23.04/el9/centreon-23.04.repo\ndnf clean all --enablerepo=*\ndnf update\n")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You must be in possession of your unique token that allows you to send data to our platform. This token is provided to you by our Support team.")),(0,a.kt)("h2",l({},{id:"installing-the-agent"}),"Installing the Agent"),(0,a.kt)("p",null,"All Centreon components you wish to monitor (Central, Poller, Remote Server, Database, etc.) must each have an Agent installed on their host machine."),(0,a.kt)("h3",l({},{id:"on-a-centreon-central-server"}),"On a Centreon Central Server"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install ",(0,a.kt)("strong",{parentName:"p"},"centreon-helios"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{}),"dnf install centreon-helios\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install the Agent:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{}),"dnf install centreon-agent\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If this is the first time you are installing the Agent on the server, generate the yaml configuration file with the following Shell command:"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"You need to carry out this step only if the Agent has not been previously configured; otherwise you will overwrite your previous configuration.")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{className:"language-yaml"}),"/usr/sbin/centreon-agent config \\\n--token [your-token] \\\n--type central \\\n--output /etc/centreon-agent/centreon-agent.yml\n")),(0,a.kt)("p",{parentName:"li"},"Example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{className:"language-yaml"}),"/usr/sbin/centreon-agent config \\\n--token aaaa-aaaa-aaaa-aaaa \\\n--type central \\\n--output /etc/centreon-agent/centreon-agent.yml\n")),(0,a.kt)("p",{parentName:"li"},"Some settings have default values. Edit the file ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/centreon-agent/centreon-agent.yml")," and check the following values:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"centreonengine_stats_file: are the name of the file and its path correct (i.e. have you customized them on your platform)?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"centreonbroker_stats_files: are the name of the file and its path correct (i.e. have you customized them on your platform)?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"centreonweb: are the database settings ok? This is the correct format:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{className:"language-yaml"}),"collect:\n  centreonweb:\n    config_dsn: [user]:[password]@tcp([dbhost])/[centreondbname]\n    storage_dsn: [user]:[password]@tcp([dbhost])/[centreon_storagedbname]\n")),(0,a.kt)("p",{parentName:"li"},"  Example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{className:"language-yaml"}),"collect:\n  centreonweb:\n    config_dsn: admin:UzG2b5wcMf8EqM2b@tcp(172.28.2.60)/centreon\n    storage_dsn: admin:UzG2b5wcMf8EqM2b@tcp(172.28.2.60)/centreon_storage\n")),(0,a.kt)("p",{parentName:"li"},"  This example is correct only if the database is on the same machine as the central server. If you have a remote database, see ",(0,a.kt)("a",l({parentName:"p"},{href:"#remote-database"}),"Remote database"),". "),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"The Topology function uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"centreon-agent.yml")," file to gather the information it needs: this is hard-coded. If you change the name of this YAML file, the function will fail."))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add an ",(0,a.kt)("strong",{parentName:"p"},"environment")," ",(0,a.kt)("a",l({parentName:"p"},{href:"#tags"}),"tag"),":"),(0,a.kt)("p",{parentName:"li"},"Open the ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/centreon-agent/centreon-agent.yml")," file generated at installation (cf. ",(0,a.kt)("inlineCode",{parentName:"p"},"--output")," option configured earlier) and add the following instructions under the ",(0,a.kt)("strong",{parentName:"p"},"collect")," section."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{className:"language-yaml"}),"collect:\n  tags:\n    environment: [staging|preproduction|production|your-custom-value]\n")),(0,a.kt)("p",{parentName:"li"},"Example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{className:"language-yaml"}),"collect:\n  tags:\n    environment: production\n")),(0,a.kt)("p",{parentName:"li"},'If you have multiple environments of the same kind, you can suffix your type of environment (for instance: "production_client1").')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enable the ",(0,a.kt)("strong",{parentName:"p"},"centreon-agent")," Service:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{}),"systemctl enable centreon-agent.service\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start the ",(0,a.kt)("strong",{parentName:"p"},"centreon-agent")," service:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{}),"systemctl start centreon-agent.service\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enable the topology scheduling: edit the cron file ",(0,a.kt)("strong",{parentName:"p"},"/etc/cron.d/centreon-helios")," and uncomment the following line (i.e. delete the ",(0,a.kt)("strong",{parentName:"p"},"#")," character):"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{}),"0 0 * * * centreon /usr/sbin/centreon-helios.phar\n")),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"If you already have a previous version of the agent installed, your file may contain a different line to uncomment, in which case you need to replace that line with the one provided above.")),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"The Topology function uses the ",(0,a.kt)("strong",{parentName:"p"},"centreon-agent.yml")," file to correctly gather the required pieces of information: this is hard coded. If you change the name of this YAML file, the function will fail."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You can now ",(0,a.kt)("a",l({parentName:"p"},{href:"#configuring-the-agent"}),"configure your Agent")," (gateway, proxy etc.) and then ",(0,a.kt)("a",l({parentName:"p"},{href:"#testing-the-agent"}),"test")," your overall configuration."))),(0,a.kt)("h3",l({},{id:"on-other-host-machines-remote-server-poller-map-etc"}),"On other host machines (Remote Server, Poller, MAP, etc.)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install the Agent:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{}),"dnf install centreon-agent\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If this is the first time you are installing the Agent on the machine, configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"centreon-agent.yml")," file:"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"You need to carry out this step only if the Agent has not been previously configured; otherwise you will overwrite your previous configuration.")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{className:"language-yaml"}),"/usr/sbin/centreon-agent config \\\n--token [your-token] \\\n--type [system|remote|poller|map] \\\n--output /etc/centreon-agent/centreon-agent.yml\n")),(0,a.kt)("p",{parentName:"li"},"Example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{className:"language-yaml"}),"/usr/sbin/centreon-agent config \\\n--token aaaa-aaaa-aaaa-aaaa \\\n--type poller \\\n--output /etc/centreon-agent/centreon-agent.yml\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add an ",(0,a.kt)("strong",{parentName:"p"},"environment")," ",(0,a.kt)("a",l({parentName:"p"},{href:"#tags"}),"tag"),":"),(0,a.kt)("p",{parentName:"li"},"Open the ",(0,a.kt)("inlineCode",{parentName:"p"},"centreon-agent.yml")," file generated at installation (cf. ",(0,a.kt)("inlineCode",{parentName:"p"},"--output")," option configured earlier) and add the following instructions under the ",(0,a.kt)("strong",{parentName:"p"},"collect")," section."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{className:"language-yaml"}),"collect:\n  tags:\n    environment: [staging|preproduction|production|your-custom-value]\n")),(0,a.kt)("p",{parentName:"li"},"Example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{className:"language-yaml"}),"collect:\n  tags:\n    environment: production\n")),(0,a.kt)("p",{parentName:"li"},'If you have multiple environments of the same kind, you can suffix your type of environment, for instance: "production_client1".')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enable the ",(0,a.kt)("strong",{parentName:"p"},"centreon-agent")," Service:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{}),"systemctl enable centreon-agent.service\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start the ",(0,a.kt)("strong",{parentName:"p"},"centreon-agent")," service:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{}),"systemctl start centreon-agent.service\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You can now ",(0,a.kt)("a",l({parentName:"p"},{href:"#configuring-the-agent"}),"configure your Agent")," (Gateway, proxy etc.) and then ",(0,a.kt)("a",l({parentName:"p"},{href:"#testing-the-agent"}),"test")," your overall configuration."))),(0,a.kt)("h2",l({},{id:"configuring-the-agent"}),"Configuring the Agent"),(0,a.kt)("h3",l({},{id:"network"}),"Network"),(0,a.kt)("p",null,"If an Agent does not have direct access to the outside, two options allow you to circumvent this: access through an HTTP proxy and/or access through the Gateway mode. For Gateway mode, the Agent that needs access (called \u201cGateway Client\u201d) can get through another Agent (called \u201cGateway Server\u201d) that does have access to the outside."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("p",null,"Your infrastructure is protected within a closed system and you have a proxy Server to manage all outgoing traffic. The Agent installed on the machine hosting the Centreon Central Server is the only one you want to grant access to the outside. In this case, you could configure your network as such:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Configure the proxy option on the Central Agent to grant it access to the outside")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Configure this same Agent as a Gateway Server")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Configure all other Agents (installed next to Pollers, Remote Servers, MAP, etc.) as Gateway Clients"))),(0,a.kt)("h4",l({},{id:"proxy-configuration"}),"Proxy Configuration"),(0,a.kt)("p",null,"If you have a proxy access configured on the host machine, copy the proxy settings to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/centreon-agent/centreon-agent.yml")," file under ",(0,a.kt)("strong",{parentName:"p"},"output"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-yaml"}),"output:\n  token: [your-token]\n  proxy_url: [your-proxy-address]:[your-desired-port]\n  proxy_ssl_insecure: [true|false]\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-yaml"}),"output:\n  token: aaaa-aaaa-aaaa-aaaa\n  proxy_url: http//proxy.local.net:3128\n  proxy_ssl_insecure: false\n")),(0,a.kt)("p",null,"You then need to restart the Agent:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),"systemctl restart centreon-agent.service\n")),(0,a.kt)("h4",l({},{id:"gateway-configuration"}),"Gateway Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Gateway Server: copy the following code to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/centreon-agent/centreon-agent.yml")," file of the Agent that will act as a Gateway server. To strengthen the security of communications between the gateway client and the gateway server, you can define an authentication token (",(0,a.kt)("inlineCode",{parentName:"p"},"auth-token"),"), i.e. the character string you want (this is not the same token as the one you used to configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"centreon-agent.yml")," file)."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{className:"language-yaml"}),"gateway:\n  enable: true\n  listen_port: [listening-port]\n  auth_token: [your-gateway-token]\n")),(0,a.kt)("p",{parentName:"li"},"  Example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{className:"language-yaml"}),"gateway:\n  enable: true\n  listen_port: 54321\n  auth_token: azerty1234\n")),(0,a.kt)("p",{parentName:"li"},"  You then need to restart the Agent"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{}),"systemctl restart centreon-agent.service\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Gateway Client"),(0,a.kt)("p",{parentName:"li"},"  In a Gateway configuration, the Gateway Client delegates the configuration of its main token to the Gateway Server (since only the latter communicates with our platform).\nAs a consequence, the ",(0,a.kt)("inlineCode",{parentName:"p"},"token")," line needs to be commented with the yaml comment operator \u201c#\u201d.\nIf you have defined an authentication token (",(0,a.kt)("inlineCode",{parentName:"p"},"auth_token"),") on the gateway server, you need to add it to the configuration of the gateway client also. "),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{className:"language-yaml"}),"output:\n#token: [your-token]\n  gateway:\n    url: http://[gateway-server-ip-address]:[listening-port]\n    auth_token: [your-gateway-token]\n")),(0,a.kt)("p",{parentName:"li"},"  Example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{className:"language-yaml"}),"output:\n#token: aaaa-aaaa-aaaa-aaaa\n  gateway:\n    url: http://172.28.6.145:54321\n    auth_token: azerty1234\n")),(0,a.kt)("p",{parentName:"li"},"  You then need to restart the Agent"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",l({parentName:"pre"},{}),"systemctl restart centreon-agent.service\n")))),(0,a.kt)("h3",l({},{id:"enabling-the-collection-of-centreon-logs"}),"Enabling the Collection of Centreon Logs"),(0,a.kt)("p",null,"Starting from version 2 and up of the ",(0,a.kt)("strong",{parentName:"p"},"centreon-agent"),", logs generated by the monitored Centreon component can be collected. "),(0,a.kt)("p",null,"To define which logs should be collected, you need to create yml configuration files in the following folder: ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/centreon-agent/conf.d"),".\nTo collect a specific log, the configuration file must contain the following arguments: path, type and pattern of the target log file. Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),'- path: /var/log/centreon-gorgone/gorgoned.log\n  pattern: "%{CENTREONGORGONE}"\n  type: file\n')),(0,a.kt)("p",null,"You can have several configuration files. Each file is parsed and its target log files are added to the collection. "),(0,a.kt)("h4",l({},{id:"using-the-templates"}),"Using the Templates"),(0,a.kt)("p",null,"To make log collection configuration easier, pre-configured templates are provided. Each template covers a specific scope depending on the target Centreon component, its version, etc."),(0,a.kt)("p",null,"Templates are located in the following folder:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),"/usr/share/centreon-agent/examples\n")),(0,a.kt)("p",null,"Based on your monitored Centreon component, you can simply copy/paste the corresponding template to your ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/centreon-agent/conf.d")," folder."),(0,a.kt)("h4",l({},{id:"finalize-template-configuration"}),"Finalize template configuration"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For a Centreon poller, log files are prefixed with the poller\u2019s name, so you need to adapt the poller template:\nOpen the poller template and replace all ",(0,a.kt)("inlineCode",{parentName:"p"},"POLLERNAME")," placeholders in the \u201cpath\u201d section with the actual poller\u2019s name.")),(0,a.kt)("p",null,"The templates provided will work out of the box with a standard Centreon installation. In case of doubt, you can locate the actual targeted log file and compare its path to the one written in your \u201cpath\u201d section of the template."),(0,a.kt)("p",null,"In case of errors, you will find detailed explanations of what happened within ",(0,a.kt)("strong",{parentName:"p"},"centreon-agent"),"'s own logs in ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/log/centreon-agent/centreon-agent.log"),"."),(0,a.kt)("h4",l({},{id:"start-log-collection"}),"Start log collection"),(0,a.kt)("p",null,"Once your log collection is properly configured, you need to restart the agent with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),"systemctl restart centreon-agent.service\n")),(0,a.kt)("h3",l({},{id:"tags"}),"Tags"),(0,a.kt)("p",null,"The Agent can contextualize data collection with your own custom tags to define the perimeter in which it operates. This is used later on to aggregate the monitoring data around your tags and create dashboards or reports in relevant contexts."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"We strongly advise you to define the \u201cenvironment\u201d tag before any others, so that we can establish a common baseline between all users.")),(0,a.kt)("p",null,"Tags can be configured in the YAML ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/centreon-agent/centreon-agent.yml")," file generated at installation. Tags are case-sensitive (",(0,a.kt)("inlineCode",{parentName:"p"},"production")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Production")," are seen as two different tags)."),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-yaml"}),"collect:\n  tags:\n    environment: [staging|preproduction|production|your-custom-value]\n    [tag2]: [your-custom-value2]    \n    [tag3]: [your-custom-value3]\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-yaml"}),"collect:\n  tags:\n    environment: production\n    City: Paris   \n")),(0,a.kt)("p",null,"You then need to restart the Agent:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),"systemctl restart centreon-agent.service\n")),(0,a.kt)("h3",l({},{id:"remote-database"}),"Remote Database"),(0,a.kt)("p",null,"If the Centreon component monitored by the Agent is configured with a specific or remote database, you can configure the Agent to access the database in the YAML ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/centreon-agent/centreon-agent.yml")," file generated at installation."),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-yaml"}),"collect:\n    centreonweb:\n      config_dsn: [user]:[password]@tcp([dbhost])/[centreondbname]\n      storage_dsn: [user]:[password]@tcp([dbhost])/[centreon_storagedbname]\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-yaml"}),"collect:\n    centreonweb:\n      config_dsn: admin:UzG2b5wcMf8EqM2b@tcp(172.28.2.60)/centreon\n      storage_dsn: admin:UzG2b5wcMf8EqM2b@tcp(172.28.2.60)/centreon_storage\n\n")),(0,a.kt)("p",null,"You then need to restart the Agent"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),"systemctl restart centreon-agent.service\n")),(0,a.kt)("h3",l({},{id:"log-rotation"}),"Log rotation"),(0,a.kt)("p",null,"The Agent logs all activity (nominal as well as erroneous) in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/log/centreon-agent/centreon-agent.log")," file."),(0,a.kt)("p",null,"A default ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/logrotate.d/centreon-agent")," file was created at installation and configured as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),"/var/log/centreon-agent/centreon-agent.log {\n  daily\n  copytruncate\n  rotate 7\n  compress\n}\n")),(0,a.kt)("p",null,"You can leave it as such or further adjust the log rotation policy to best fit your needs using the parameters of ",(0,a.kt)("a",l({parentName:"p"},{href:"https://www.unix.com/man-page/redhat/8/LOGROTATE/"}),"logrotate"),"."),(0,a.kt)("p",null,"Use the following command to apply the changes immediately:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),"logrotate /etc/logrotate.d/centreon-agent\n")),(0,a.kt)("h2",l({},{id:"testing-the-agent"}),"Testing the Agent"),(0,a.kt)("h3",l({},{id:"testing-the-centreon-agent-service"}),"Testing the centreon-agent Service"),(0,a.kt)("p",null,"At this stage, the ",(0,a.kt)("strong",{parentName:"p"},"centreon-agent")," Service should be running and set to launch at system start.\nThe following command checks that the service has been correctly configured:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),"systemctl status centreon-agent\n")),(0,a.kt)("p",null,"If all went well, the command will return results similar to the following example:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),"systemctl status centreon-agent\n\u25cf centreon-agent.service - The Centreon Agent collect metrics and send them to Centreon SaaS Platform\n   Loaded: loaded (/etc/systemd/system/centreon-agent.service; enabled; vendor preset: disabled)\n   Active: active (running) since ven. 2019-11-08 14:52:26 CET; 5 days ago\n Main PID: 22331 (centreon-agent)\n   CGroup: /system.slice/centreon-agent.service\n           \u2514\u250022331 /usr/sbin/centreon-agent run\n")),(0,a.kt)("h3",l({},{id:"testing-data-collection"}),"Testing Data Collection"),(0,a.kt)("p",null,"Once installation and configuration are done, the following command can be used to force a collection and return a full sample of collected data:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),"centreon-agent sample\n")),(0,a.kt)("p",null,"The output should look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),"1624977737000000// centreonengine_uptime_seconds{_cmaas=cmco,hostname=val-central.centreon.io,os=linux,osfamily=rhel} 693583\n1624977737000000// centreonengine_command_buffers_used{_cmaas=cmco,hostname=val-central.centreon.io,os=linux,osfamily=rhel} 0\n1624977737000000// centreonengine_command_buffers_high{_cmaas=cmco,hostname=val-central.centreon.io,os=linux,osfamily=rhel} 0\n1624977737000000// centreonengine_command_buffers_total{_cmaas=cmco,hostname=val-central.centreon.io,os=linux,osfamily=rhel} 4096\n1624977737000000// centreonengine_external_command_1m{_cmaas=cmco,hostname=val-central.centreon.io,os=linux,osfamily=rhel} 0\n1624977737000000// centreonengine_general_external_command_5m{_cmaas=cmco,hostname=val-central.centreon.io,os=linux,osfamily=rhel} 0\n")),(0,a.kt)("p",null,"In case of errors while testing the collection, the logs in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/log/centreon-agent/centreon-agent.log")," file can give you further information for troubleshooting purposes."),(0,a.kt)("h3",l({},{id:"testing-that-you-can-access-the-centreon-cloud-platform"}),"Testing that you can access the Centreon Cloud Platform"),(0,a.kt)("p",null,"Once installation and configuration are done, the following command can be used to test the connection between the Agent and the Centreon Cloud Platform:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),"centreon-agent ping --config [path to your centreon-agent.yml file]\n")),(0,a.kt)("p",null,"The Agent will then return one of the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Unable to reach the Centreon Cloud Platform, check your network configuration"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Centreon Cloud Platform reached successfully but your token is not recognized"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Centreon Cloud Platform reached successfully and authentication was successful"),": the Agent is properly connected to our platform."))),(0,a.kt)("h3",l({},{id:"help"}),"Help"),(0,a.kt)("p",null,"If you want to know more about ",(0,a.kt)("inlineCode",{parentName:"p"},"usr/sbin/centreon-agent"),", enter:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),"centreon-agent --help\n")),(0,a.kt)("h2",l({},{id:"updating-the-agent"}),"Updating the Agent"),(0,a.kt)("p",null,"To update the Agent, enter:"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),"dnf clean all --enablerepo=*\n")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{}),"dnf update centreon-agent\n")))}d.isMDXComponent=!0}}]);