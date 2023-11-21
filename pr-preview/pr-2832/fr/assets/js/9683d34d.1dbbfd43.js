"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[70434],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(a),d=n,k=c["".concat(i,".").concat(d)]||c[d]||u[d]||l;return a?r.createElement(k,o(o({ref:t},m),{},{components:a})):r.createElement(k,o({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},13223:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>m,toc:()=>c});a(67294);var r=a(3905),n=a(67709),l=a(7626);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const i={id:"applications-oracle-ovm-api",title:"Oracle VM Manager API"},s=void 0,m={unversionedId:"integrations/plugin-packs/procedures/applications-oracle-ovm-api",id:"integrations/plugin-packs/procedures/applications-oracle-ovm-api",title:"Oracle VM Manager API",description:"Contenu du Plugin-Pack",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-oracle-ovm-api.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-oracle-ovm-api",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/applications-oracle-ovm-api",draft:!1,tags:[],version:"current",frontMatter:{id:"applications-oracle-ovm-api",title:"Oracle VM Manager API"},sidebar:"pp",previous:{title:"Oracle GoldenGate SSH",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/applications-oracle-goldengate-ssh"},next:{title:"Pacemaker",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/applications-pacemaker-ssh"}},u={},c=[{value:"Contenu du Plugin-Pack",id:"contenu-du-plugin-pack",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment faire le test en ligne de commande et que signifient les principales options ?",id:"comment-faire-le-test-en-ligne-de-commande-et-que-signifient-les-principales-options-",level:4},{value:"J&#39;obtiens le message d&#39;erreur suivant:",id:"jobtiens-le-message-derreur-suivant",level:3},{value:"<code>UNKNOWN: 500 Can&#39;t connect to 10.30.2.79:443 |</code>",id:"unknown-500-cant-connect-to-1030279443-",level:4},{value:"<code>UNKNOWN: 501 Protocol scheme &#39;connect&#39; is not supported |</code>",id:"unknown-501-protocol-scheme-connect-is-not-supported-",level:4}],d={toc:c};function k(e){var{components:t}=e,a=p(e,["components"]);return(0,r.kt)("wrapper",o({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",o({},{id:"contenu-du-plugin-pack"}),"Contenu du Plugin-Pack"),(0,r.kt)("h3",o({},{id:"objets-supervis\xe9s"}),"Objets supervis\xe9s"),(0,r.kt)("p",null,"Le plugin-pack inclue la supervision File-servers, Manager, Server-pools, Servers et Vm."),(0,r.kt)("h3",o({},{id:"m\xe9triques-collect\xe9es"}),"M\xe9triques collect\xe9es"),(0,r.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"File-servers",label:"File-servers",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"left"}),"Metric name"),(0,r.kt)("th",o({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",o({parentName:"tr"},{align:"left"}),"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),(0,r.kt)("em",{parentName:"td"},"serverpoolname"),"~",(0,r.kt)("em",{parentName:"td"},"filesystemname"),"#serverpool.space.usage.bytes"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"Space usage"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),(0,r.kt)("em",{parentName:"td"},"serverpoolname"),"~",(0,r.kt)("em",{parentName:"td"},"filesystemname"),"#serverpool.space.free.bytes"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"Free space"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),(0,r.kt)("em",{parentName:"td"},"serverpoolname"),"~",(0,r.kt)("em",{parentName:"td"},"filesystemname"),"#serverpool.space.usage.percentage"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"Space usage in percentage"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"%"))))),(0,r.kt)(l.Z,{value:"Manager",label:"Manager",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"left"}),"Metric name"),(0,r.kt)("th",o({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",o({parentName:"tr"},{align:"left"}),"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"manager status"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"Manager status, possible to set string-based alerts"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),(0,r.kt)("em",{parentName:"td"},"managername"),"#manager.jobs.succeeded.count"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"Number of jobs succeeded"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),(0,r.kt)("em",{parentName:"td"},"managername"),"#manager.jobs.failed.count"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"Number of jobs failed"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"})))))),(0,r.kt)(l.Z,{value:"Server-pools",label:"Server-pools",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"left"}),"Metric name"),(0,r.kt)("th",o({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",o({parentName:"tr"},{align:"left"}),"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),(0,r.kt)("em",{parentName:"td"},"serverpoolname"),"#serverpool.servers.running.count"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"Number of servers running"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),(0,r.kt)("em",{parentName:"td"},"serverpoolname"),"#serverpool.servers.stopped.count"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"Number of servers stopped"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),(0,r.kt)("em",{parentName:"td"},"serverpoolname"),"#serverpool.vm.running.count"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"Number of vm running"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),(0,r.kt)("em",{parentName:"td"},"serverpoolname"),"#serverpool.vm.stopped.count"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"Number of vm stopped"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),(0,r.kt)("em",{parentName:"td"},"serverpoolname"),"#serverpool.memory.usage.bytes"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"Memory usage"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),(0,r.kt)("em",{parentName:"td"},"serverpoolname"),"#serverpool.memory.free.bytes"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"Free memory"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),(0,r.kt)("em",{parentName:"td"},"serverpoolname"),"#serverpool.memory.usage.percentage"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"Memory usage in percentage"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"%"))))),(0,r.kt)(l.Z,{value:"Servers",label:"Servers",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"left"}),"Metric name"),(0,r.kt)("th",o({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",o({parentName:"tr"},{align:"left"}),"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"servers.running.count"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"Number of servers running"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"servers.stopped.count"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"Number of servers stopped"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"server status"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"server status"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),(0,r.kt)("em",{parentName:"td"},"servername"),"#server.memory.usage.bytes"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"Memory usage"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),(0,r.kt)("em",{parentName:"td"},"servername"),"#server.memory.free.bytes"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"Free memory"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),(0,r.kt)("em",{parentName:"td"},"servername"),"#server.memory.usage.percentage"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"Memory usage in percentage"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"%"))))),(0,r.kt)(l.Z,{value:"Vm",label:"Vm",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"left"}),"Metric name"),(0,r.kt)("th",o({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",o({parentName:"tr"},{align:"left"}),"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"virtualmachines.running.count"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"Number of vm running"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"virtualmachines.stopped.count"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"Number of vm stopped"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"vm status"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"vm status"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}))))))),(0,r.kt)("h2",o({},{id:"pr\xe9requis"}),"Pr\xe9requis"),(0,r.kt)("p",null,"Afin de contr\xf4ler l'application Oracle VM Manager, l'API Rest doit \xeatre configur\xe9 (cf: ",(0,r.kt)("a",o({parentName:"p"},{href:"https://docs.oracle.com/en/virtualization/oracle-vm/3.4/developer/vmapi-preface"}),"https://docs.oracle.com/en/virtualization/oracle-vm/3.4/developer/vmapi-preface"),")"),(0,r.kt)("h2",o({},{id:"installation"}),"Installation"),(0,r.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Applications-Oracle-Ovm-Api\n")),(0,r.kt)("ol",o({},{start:2}),(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Plugin-Pack ",(0,r.kt)("em",{parentName:"li"},"Oracle VM Manager API"),' depuis la page "Configuration > Plugin packs > Manager"'))),(0,r.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Applications-Oracle-Ovm-Api\n")),(0,r.kt)("ol",o({},{start:2}),(0,r.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le Plugin-Pack via le RPM:")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yum install centreon-pack-applications-oracle-ovm-api\n")),(0,r.kt)("ol",o({},{start:3}),(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Plugin-Pack ",(0,r.kt)("em",{parentName:"li"},"Oracle VM Manager API"),' depuis la page "Configuration > Plugin packs > Manager"')))),(0,r.kt)("h2",o({},{id:"configuration"}),"Configuration"),(0,r.kt)("p",null,"Ce Plugin-Pack est con\xe7u de mani\xe8re \xe0 avoir dans Centreon un h\xf4te par application Oracle VM Manager.\nLorsque vous ajoutez un h\xf4te \xe0 Centreon, appliquez-lui le mod\xe8le ",(0,r.kt)("em",{parentName:"p"},"App-Oracle-Ovm-Api-custom"),".\nUne fois celui-ci configur\xe9, certaines macros doivent \xeatre renseign\xe9es:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"left"}),"Mandatory"),(0,r.kt)("th",o({parentName:"tr"},{align:"left"}),"Name"),(0,r.kt)("th",o({parentName:"tr"},{align:"left"}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"X"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"OVMAPICUSTOMMODE"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"API mode (Default: 'rest')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"X"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"OVMAPIPORT"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"Port used (Default: 7002)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"X"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"OVMAPIPROTO"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"Specify https if needed (Default: 'https')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"X"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"OVMAPIPASSWORD"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"Oracle VM Manager username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"X"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"OVMAPIUSERNAME"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"Oracle VM Manager password")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"left"})),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"OVMAPIEXTRAOPTIONS"),(0,r.kt)("td",o({parentName:"tr"},{align:"left"}),"Any extra option you may want to add to the command (eg. a --verbose flag)")))),(0,r.kt)("h2",o({},{id:"faq"}),"FAQ"),(0,r.kt)("h4",o({},{id:"comment-faire-le-test-en-ligne-de-commande-et-que-signifient-les-principales-options-"}),"Comment faire le test en ligne de commande et que signifient les principales options ?"),(0,r.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur ",(0,r.kt)("em",{parentName:"p"},"centreon-engine"),"\n(Les param\xe8tres tels que ",(0,r.kt)("inlineCode",{parentName:"p"},"api-username")," ou ",(0,r.kt)("inlineCode",{parentName:"p"},"api-password")," doivront \xeatre ajust\xe9s):"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_oracle_ovm_api.pl \\\n    --plugin=apps::oracle::ovm::api::plugin \\\n    --mode=server-pools \\\n    --hostname='10.30.2.79' \\\n    --port='7002' \\\n    --proto='https' \\\n    --api-username='myapiusername' \\\n    --api-password='myapipassword' \\\n    --filter-server-pool-name='TESTPOOL01' \\\n    --warning-memory-usage-prct='90' \\\n    --critical-memory-usage-prct='95' \\\n    --verbose\n")),(0,r.kt)("p",null,"Exemple de sortie:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"OK: Server pool 'TESTPOOL01' servers running: 2, stopped: 0 - virtual machines running: 3, stopped: 0 - memory usage total: 255.32 GB used: 217.87 GB (85.33%) free: 37.45 GB (14.67%) | 'TESTPOOL01#serverpool.servers.running.count'=2;;;0;2 'TESTPOOL01#serverpool.servers.stopped.count'=0;;;0;2 'TESTPOOL01#serverpool.vm.running.count'=3;;;0;3 'TESTPOOL01#serverpool.vm.stopped.count'=0;;;0;3 'TESTPOOL01#serverpool.memory.usage.bytes'=233939402752B;;;0;274148098048 'TESTPOOL01#serverpool.memory.free.bytes'=40208695296B;;;0;274148098048 'TESTPOOL01#serverpool.memory.usage.percentage'=85.33%;90;95;0;100\nchecking server pool 'TESTPOOL01'\nservers running: 2, stopped: 0\nvirtual machines running: 3, stopped: 0\nmemory usage total: 255.32 GB used: 217.87 GB (85.33%) free: 37.45 GB (14.67%)\n")),(0,r.kt)("p",null,"La commande ci-dessus contr\xf4le les pools serveurs de l'application Oracle VM Manager via l'API (",(0,r.kt)("inlineCode",{parentName:"p"},"--mode=server-pools"),") nomm\xe9e ",(0,r.kt)("em",{parentName:"p"},"TESTPOOL01")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--filter-server-pool-name='TESTPOOL01'"),").\nLe Plugin utilise l'api-username (",(0,r.kt)("inlineCode",{parentName:"p"},"--api-username='myapiusername'"),"), l'api-password (",(0,r.kt)("inlineCode",{parentName:"p"},"--api-password='myapipassword'"),")\net il se connecte \xe0 l'h\xf4te ",(0,r.kt)("em",{parentName:"p"},"10.30.2.79")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--hostname='10.30.2.79'"),") sur le port ",(0,r.kt)("em",{parentName:"p"},"7002")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--port='7002'"),") utilisant le protocol ",(0,r.kt)("em",{parentName:"p"},"https")," (",(0,r.kt)("inlineCode",{parentName:"p"},"--proto='https'"),")."),(0,r.kt)("p",null,"Cette commande d\xe9clenchera une alarme WARNING si la m\xe9moire utilis\xe9e est sup\xe9rieur \xe0 90% (",(0,r.kt)("inlineCode",{parentName:"p"},"--warning-memory-usage-prct='90'"),")\net une alarme CRITICAL si la m\xe9moire utilis\xe9e est sup\xe9rieur \xe0 95% (",(0,r.kt)("inlineCode",{parentName:"p"},"--critical-memory-usage-prct='95'"),")."),(0,r.kt)("p",null,"Toutes les options et leur utilisation peuvent \xeatre consult\xe9es avec le param\xe8tre ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," ajout\xe9 \xe0 la commande:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_oracle_ovm_api.pl --plugin=apps::oracle::ovm::api::plugin \\\n     --mode=server-pools \\\n     --help\n")),(0,r.kt)("h3",o({},{id:"jobtiens-le-message-derreur-suivant"}),"J'obtiens le message d'erreur suivant:"),(0,r.kt)("h4",o({},{id:"unknown-500-cant-connect-to-1030279443-"}),(0,r.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 500 Can't connect to 10.30.2.79:443 |")),(0,r.kt)("p",null,"Lors du d\xe9ploiement de mes contr\xf4les, j'obtiens le message suivant ",(0,r.kt)("inlineCode",{parentName:"p"},"UNKNOWN: 500 Can't connect to 10.30.2.79:443 |"),".\nCela signifie que Centreon n'a pas r\xe9ussi \xe0 se connecter \xe0 l'Oracle VM Manager API (",(0,r.kt)("em",{parentName:"p"},"10.30.2.79"),").\nLa plupart du temps, il faut pr\xe9ciser le proxy \xe0 utiliser pour requ\xeater l'URL ",(0,r.kt)("em",{parentName:"p"},"10.30.2.79")," en utilisant l'option ",(0,r.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany:8080'"),"."),(0,r.kt)("h4",o({},{id:"unknown-501-protocol-scheme-connect-is-not-supported-"}),(0,r.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 501 Protocol scheme 'connect' is not supported |")),(0,r.kt)("p",null,"Suite \xe0 la mise en place du proxy, j'obtiens le message suivant ",(0,r.kt)("inlineCode",{parentName:"p"},"UNKNOWN: 501 Protocol scheme 'connect' is not supported |"),"\nCela signifie que le protocole de connexion au proxy n'est pas support\xe9 par la libraire ",(0,r.kt)("em",{parentName:"p"},"LWP")," utlis\xe9e par d\xe9faut par le Plugin Centreon.\nCette erreur peut \xeatre r\xe9solue en utilisant le backend HTTP ",(0,r.kt)("em",{parentName:"p"},"curl"),". Pour ce faire, ajoutez l'option ",(0,r.kt)("inlineCode",{parentName:"p"},"--http-backend='curl'")," \xe0 la commande."))}k.isMDXComponent=!0},7626:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(67294),n=a(86010);const l="tabItem_Ymn6";function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function p({children:e,hidden:t,className:a}){return r.createElement("div",o({role:"tabpanel",className:(0,n.Z)(l,a)},{hidden:t}),e)}},67709:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(67294),n=a(86010),l=a(90980),o=a(35715),p=a(8854),i=a(8241);const s="tabList__CuJ",m="tabItem_LNqP";function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},u.apply(this,arguments)}function c(e){var t;const{lazy:a,block:l,defaultValue:c,values:d,groupId:k,className:g}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=d?d:f.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),v=(0,o.l)(N,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var b;const y=null===c?c:null!==(b=null!=c?c:null===(t=f.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==b?b:f[0].props.value;if(null!==y&&!N.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:O}=(0,p.U)(),[P,T]=(0,r.useState)(y),C=[],{blockElementScrollPositionUntilNextRender:M}=(0,i.o5)();if(null!=k){const e=h[k];null!=e&&e!==P&&N.some((t=>t.value===e))&&T(e)}const w=e=>{const t=e.currentTarget,a=C.indexOf(t),r=N[a].value;r!==P&&(M(t),T(r),null!=k&&O(k,String(r)))},j=e=>{let t=null;switch(e.key){case"ArrowRight":{const r=C.indexOf(e.currentTarget)+1;var a;t=null!==(a=C[r])&&void 0!==a?a:C[0];break}case"ArrowLeft":{const a=C.indexOf(e.currentTarget)-1;var r;t=null!==(r=C[a])&&void 0!==r?r:C[C.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:(0,n.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":l},g)},N.map((({value:e,label:t,attributes:a})=>r.createElement("li",u({role:"tab",tabIndex:P===e?0:-1,"aria-selected":P===e,key:e,ref:e=>C.push(e),onKeyDown:j,onFocus:w,onClick:w},a,{className:(0,n.Z)("tabs__item",m,null==a?void 0:a.className,{"tabs__item--active":P===e})}),null!=t?t:e)))),a?(0,r.cloneElement)(f.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function d(e){const t=(0,l.Z)();return r.createElement(c,u({key:String(t)},e))}}}]);