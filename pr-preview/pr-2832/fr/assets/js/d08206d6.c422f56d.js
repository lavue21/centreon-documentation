"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[66875],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,g=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},95493:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>m});a(67294);var n=a(3905),r=a(67709),i=a(7626);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const s={id:"hardware-devices-nvidia-gpu-smi-ssh",title:"NVIDIA GPU SMI SSH"},p=void 0,u={unversionedId:"integrations/plugin-packs/procedures/hardware-devices-nvidia-gpu-smi-ssh",id:"integrations/plugin-packs/procedures/hardware-devices-nvidia-gpu-smi-ssh",title:"NVIDIA GPU SMI SSH",description:"Contenu du Pack",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/hardware-devices-nvidia-gpu-smi-ssh.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-devices-nvidia-gpu-smi-ssh",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/hardware-devices-nvidia-gpu-smi-ssh",draft:!1,tags:[],version:"current",frontMatter:{id:"hardware-devices-nvidia-gpu-smi-ssh",title:"NVIDIA GPU SMI SSH"},sidebar:"pp",previous:{title:"Masterclock NTP100GP",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/hardware-devices-masterclock-ntp100gps-snmp"},next:{title:"Pexip Infinity ManagementAPI",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/hardware-devices-pexip-infinity-managementapi"}},d={},m=[{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostique",id:"diagnostique",level:2}],c={toc:m};function g(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)("wrapper",l({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",l({},{id:"contenu-du-pack"}),"Contenu du Pack"),(0,n.kt)("h3",l({},{id:"objets-supervis\xe9s"}),"Objets supervis\xe9s"),(0,n.kt)("p",null,"Le Pack NVIDIA GPU collecte les donn\xe9es pour:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Gpu-stats")),(0,n.kt)("h3",l({},{id:"m\xe9triques-collect\xe9es"}),"M\xe9triques collect\xe9es"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Gpu-stats",label:"Gpu-stats",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Metric name"),(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"devices.gpu.total.count"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Number of gpu devices"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"product","_","name:id"),"#device.gpu.utilization.percentage"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Percent of time over the past sample period (between 1 second and 1/6 second depending on the product) during which one or more kernels was executing on the GPU"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"product","_","name:id"),"#device.gpu.memory.utilization.percentage"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Percent of time over the past sample period (between 1 second and 1/6 second depending on the product) during which global (device) memory was being read or written"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"product","_","name:id"),"#device.gpu.encoder.utilization.percentage"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Percent of time over the past sample period (sampling rate is variable) during which the GPU video encoder was being used"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"product","_","name:id"),"#device.gpu.decoder.utilization.percentage"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Percent of time over the past sample period (sampling rate is variable) during which the GPU video decoder was being used"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"product","_","name:id"),"#device.gpu.frame_buffer.memory.usage.bytes"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"On-board frame buffer memory usage"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"product","_","name:id"),"#device.gpu.frame_buffer.memory.free.bytes"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"On-board frame buffer memory available usage"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"product","_","name:id"),"#device.gpu.frame_buffer.memory.usage.percentage"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"On-board frame buffer memory usage in percentage"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"product","_","name:id"),"#device.gpu.bar1.memory.usage.bytes"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"BAR1 memory usage"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"product","_","name:id"),"#device.gpu.bar1.memory.free.bytes"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"BAR1 memory available usage"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"product","_","name:id"),"#device.gpu.bar1.memory.usage.percentage"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"BAR1 memory usage in percentage"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"product","_","name:id"),"#device.gpu.fan.speed.percentage"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Fan speed value"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"product","_","name:id"),"#device.gpu.temperature.celsius"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Temperature value"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),(0,n.kt)("em",{parentName:"td"},"product","_","name:id"),"#device.gpu.power.consumption.watt"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"The last measured power draw for the  entire  board"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"W")))))),(0,n.kt)("h2",l({},{id:"pr\xe9requis"}),"Pr\xe9requis"),(0,n.kt)("p",null,"Afin de fonctionner, le Plugin n\xe9cessite une connexion SSH entre le Poller et le serveur avec les GPU NVIDIA. L'utilisateur distant\ndoit avoir assez de privil\xe8ges pour executer la commande ",(0,n.kt)("inlineCode",{parentName:"p"},"nvidia-smi"),". "),(0,n.kt)("h2",l({},{id:"installation"}),"Installation"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Hardware-Devices-Nvidia-Gpu-Smi-Ssh\n")),(0,n.kt)("ol",l({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Pack ",(0,n.kt)("em",{parentName:"li"},"NVIDIA GPU SMI SSH")," depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Plugin Packs > Gestionnaire")))),(0,n.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les Collecteurs Centreon :")),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Hardware-Devices-Nvidia-Gpu-Smi-Ssh\n")),(0,n.kt)("ol",l({},{start:2}),(0,n.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le Pack via le RPM:")),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"yum install centreon-pack-hardware-devices-nvidia-gpu-smi-ssh\n")),(0,n.kt)("ol",l({},{start:3}),(0,n.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le Pack ",(0,n.kt)("em",{parentName:"li"},"NVIDIA GPU SMI SSH")," depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Plugin Packs > Gestionnaire"))))),(0,n.kt)("h2",l({},{id:"configuration"}),"Configuration"),(0,n.kt)("p",null,"Lorsque vous ajoutez un h\xf4te \xe0 Centreon, appliquez-lui le mod\xe8le ",(0,n.kt)("em",{parentName:"p"},"HW-Device-Nvidia-Gpu-Smi-SSH-custom"),".\nUne fois celui-ci configur\xe9, certaines macros doivent \xeatre renseign\xe9es."),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"sshcli backend",label:"sshcli backend",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Mandatory"),(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Name"),(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"X"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"SSHBACKEND"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Nom du backend: ",(0,n.kt)("inlineCode",{parentName:"td"},"sshcli"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"X"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"SSHUSERNAME"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Par default, il utilise l'utilisateur en cours d'ex\xe9cution ",(0,n.kt)("inlineCode",{parentName:"td"},"centengine")," de votre Collecteur")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"})),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"SSHPASSWORD"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Ne peut pas \xeatre utilis\xe9 avec le backend. Seulement avec la cl\xe9 d'authentication")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"})),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"SSHPORT"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Par default: 22")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"})),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"SSHEXTRAOPTIONS"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Personnalisez-le avec le v\xf4tre si n\xe9cessaire. E.g.: ",(0,n.kt)("inlineCode",{parentName:"td"},"--ssh-priv-key=/user/.ssh/id_rsa"))))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Avec ce backend, il est n\xe9cessaire d'effectuer une connexion manuelle entre l'utilisateur centreon-engine du Collecteur\net l'utilisateur applicatif cr\xe9\xe9 sur le serveur distant (Macro SSHUSERNAME)."))),(0,n.kt)(i.Z,{value:"plink backend",label:"plink backend",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Mandatory"),(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Name"),(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"X"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"SSHBACKEND"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Nom du backend: ",(0,n.kt)("inlineCode",{parentName:"td"},"plink"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"X"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"SSHUSERNAME"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Par default, il utilise l'utilisateur en cours d'ex\xe9cution ",(0,n.kt)("inlineCode",{parentName:"td"},"centengine")," de votre Collecteur")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"})),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"SSHPASSWORD"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Peut \xeatre utilis\xe9. Si aucune valeur n'est d\xe9finie, l'authentification par cl\xe9 ssh est utilis\xe9e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"})),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"SSHPORT"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Par default: 22")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"})),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"SSHEXTRAOPTIONS"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Personnalisez-le avec le v\xf4tre si n\xe9cessaire. E.g.: ",(0,n.kt)("inlineCode",{parentName:"td"},"--ssh-priv-key=/user/.ssh/id_rsa"))))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Avec ce backend, il est n\xe9cessaire d'effectuer une connexion manuelle entre l'utilisateur centreon-engine du Collecteur\net l'utilisateur applicatif cr\xe9\xe9 sur le serveur distant (Macro SSHUSERNAME)."))),(0,n.kt)(i.Z,{value:"libssh backend (par d\xe9faut)",label:"libssh backend (par d\xe9faut)",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Mandatory"),(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Name"),(0,n.kt)("th",l({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"X"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"SSHBACKEND"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Nom du backend: ",(0,n.kt)("inlineCode",{parentName:"td"},"libssh"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"})),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"SSHUSERNAME"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Par default, il utilise l'utilisateur en cours d'ex\xe9cution ",(0,n.kt)("inlineCode",{parentName:"td"},"centengine")," de votre Collecteur")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"})),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"SSHPASSWORD"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Peut \xeatre utilis\xe9. Si aucune valeur n'est d\xe9finie, l'authentification par cl\xe9 ssh est utilis\xe9e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"})),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"SSHPORT"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Par default: 22")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"left"})),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"SSHEXTRAOPTIONS"),(0,n.kt)("td",l({parentName:"tr"},{align:"left"}),"Personnalisez-le avec le v\xf4tre si n\xe9cessaire. E.g.: ",(0,n.kt)("inlineCode",{parentName:"td"},"--ssh-priv-key=/user/.ssh/id_rsa"))))),(0,n.kt)("p",null,"Avec ce backend, vous n'avez pas \xe0 valider manuellement le fingerprint du serveur cible."))),(0,n.kt)("h2",l({},{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"}),"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,n.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande depuis votre Collecteur Centreon avec l'utilisateur ",(0,n.kt)("em",{parentName:"p"},"centreon-engine")),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_nvidia_gpu_smi_ssh.pl \\\n    --plugin=hardware::devices::nvidia::gpu::smi::plugin \\\n    --mode=stats \\\n    --hostname=10.30.2.81 \\\n    --ssh-username=centreon \\\n    --ssh-password='centreon-password' \\\n    --ssh-backend=libssh \\\n    --verbose\n")),(0,n.kt)("p",null,"La commande devrait retourner un message de sortie de la forme ci-dessous:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"OK: All devices are ok | 'devices.gpu.total.count'=2;;;0; 'Quadro K6000:00000000:08:00.0#device.gpu.utilization.percentage'=0.00%;;;0;100 'Quadro K6000:00000000:08:00.0#device.gpu.memory.utilization.percentage'=0.00%;;;0;100 'Quadro K6000:00000000:08:00.0#device.gpu.encoder.utilization.percentage'=0.00%;;;0;100 'Quadro K6000:00000000:08:00.0#device.gpu.decoder.utilization.percentage'=0.00%;;;0;100 'Quadro K6000:00000000:08:00.0#device.gpu.frame_buffer.memory.usage.bytes'=1349517312B;;;0;12798918656 'Quadro K6000:00000000:08:00.0#device.gpu.frame_buffer.memory.free.bytes'=11449401344B;;;0;12798918656 'Quadro K6000:00000000:08:00.0#device.gpu.frame_buffer.memory.usage.percentage'=10.54%;;;0;100 'Quadro K6000:00000000:08:00.0#device.gpu.bar1.memory.usage.bytes'=13631488B;;;0;268435456 'Quadro K6000:00000000:08:00.0#device.gpu.bar1.memory.free.bytes'=254803968B;;;0;268435456 'Quadro K6000:00000000:08:00.0#device.gpu.bar1.memory.usage.percentage'=5.08%;;;0;100 'Quadro K6000:00000000:08:00.0#device.gpu.fan.speed.percentage'=26.00%;;;0;100 'Quadro K6000:00000000:08:00.0#device.gpu.temperature.celsius'=40C;;;; 'Quadro K6000:00000000:08:00.0#device.gpu.power.consumption.watt'=24.16W;;;0; 'Quadro K6000:00000000:84:00.0#device.gpu.utilization.percentage'=0.00%;;;0;100 'Quadro K6000:00000000:84:00.0#device.gpu.memory.utilization.percentage'=0.00%;;;0;100 'Quadro K6000:00000000:84:00.0#device.gpu.encoder.utilization.percentage'=0.00%;;;0;100 'Quadro K6000:00000000:84:00.0#device.gpu.decoder.utilization.percentage'=0.00%;;;0;100 'Quadro K6000:00000000:84:00.0#device.gpu.frame_buffer.memory.usage.bytes'=732954624B;;;0;12798918656 'Quadro K6000:00000000:84:00.0#device.gpu.frame_buffer.memory.free.bytes'=12065964032B;;;0;12798918656 'Quadro K6000:00000000:84:00.0#device.gpu.frame_buffer.memory.usage.percentage'=5.73%;;;0;100 'Quadro K6000:00000000:84:00.0#device.gpu.bar1.memory.usage.bytes'=5242880B;;;0;268435456 'Quadro K6000:00000000:84:00.0#device.gpu.bar1.memory.free.bytes'=263192576B;;;0;268435456 'Quadro K6000:00000000:84:00.0#device.gpu.bar1.memory.usage.percentage'=1.95%;;;0;100 'Quadro K6000:00000000:84:00.0#device.gpu.fan.speed.percentage'=26.00%;;;0;100 'Quadro K6000:00000000:84:00.0#device.gpu.temperature.celsius'=40C;;;; 'Quadro K6000:00000000:84:00.0#device.gpu.power.consumption.watt'=23.86W;;;0;\nchecking device gpu 'Quadro K6000:00000000:08:00.0'\n    utilization gpu: 0.00 %, memory: 0.00 %, encoder: 0.00 %, decoder: 0.00 %\n    frame buffer memory usage total: 11.92 GB used: 1.26 GB (10.54%) free: 10.66 GB (89.46%)\n    bar1 memory usage total: 256.00 MB used: 13.00 MB (5.08%) free: 243.00 MB (94.92%)\n    fan speed: 26.00 %\n    gpu temperature: 40 C\n    power consumption: 24.16 W\nchecking device gpu 'Quadro K6000:00000000:84:00.0'\n    utilization gpu: 0.00 %, memory: 0.00 %, encoder: 0.00 %, decoder: 0.00 %\n    frame buffer memory usage total: 11.92 GB used: 699.00 MB (5.73%) free: 11.24 GB (94.27%)\n    bar1 memory usage total: 256.00 MB used: 5.00 MB (1.95%) free: 251.00 MB (98.05%)\n    fan speed: 26.00 %gpu temperature: 40 C\n    power consumption: 23.86 W\n")),(0,n.kt)("p",null,"La commande ci-dessus contr\xf4le les statistiques GPU (",(0,n.kt)("inlineCode",{parentName:"p"},"--mode=stats"),").\nLe Plugin utilise le Backend ",(0,n.kt)("em",{parentName:"p"},"libssh")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--ssh-backend='libssh'"),") avec l'utisateur ",(0,n.kt)("em",{parentName:"p"},"centreon")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--ssh-username=centreon --ssh-password='centreon-password'"),")\net il se connecte \xe0 l'h\xf4te ",(0,n.kt)("em",{parentName:"p"},"10.30.2.81")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--hostname='10.30.2.81'"),")."),(0,n.kt)("p",null,"Pour chaque mode, la liste de toutes les m\xe9triques, seuils associ\xe9s et options compl\xe9mentaires peuvent \xeatre affich\xe9s\nen ajoutant le param\xe8tre ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_nvidia_gpu_smi_ssh.pl \\\n    --plugin=hardware::devices::nvidia::gpu::smi::plugin \\\n    --mode=stats \\\n    --help\n")),(0,n.kt)("h2",l({},{id:"diagnostique"}),"Diagnostique"),(0,n.kt)("p",null,(0,n.kt)("a",l({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#ssh-and-cli-checks"}),"Diagnostique des plugins")))}g.isMDXComponent=!0},7626:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const i="tabItem_Ymn6";function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function o({children:e,hidden:t,className:a}){return n.createElement("div",l({role:"tabpanel",className:(0,r.Z)(i,a)},{hidden:t}),e)}},67709:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(67294),r=a(86010),i=a(90980),l=a(35715),o=a(8854),s=a(8241);const p="tabList__CuJ",u="tabItem_LNqP";function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},d.apply(this,arguments)}function m(e){var t;const{lazy:a,block:i,defaultValue:m,values:c,groupId:g,className:k}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=c?c:f.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),v=(0,l.l)(N,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var b;const h=null===m?m:null!==(b=null!=m?m:null===(t=f.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==b?b:f[0].props.value;if(null!==h&&!N.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:S}=(0,o.U)(),[P,w]=(0,n.useState)(h),O=[],{blockElementScrollPositionUntilNextRender:C}=(0,s.o5)();if(null!=g){const e=y[g];null!=e&&e!==P&&N.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,a=O.indexOf(t),n=N[a].value;n!==P&&(C(t),w(n),null!=g&&S(g,String(n)))},I=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=O.indexOf(e.currentTarget)+1;var a;t=null!==(a=O[n])&&void 0!==a?a:O[0];break}case"ArrowLeft":{const a=O.indexOf(e.currentTarget)-1;var n;t=null!==(n=O[a])&&void 0!==n?n:O[O.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",p)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},k)},N.map((({value:e,label:t,attributes:a})=>n.createElement("li",d({role:"tab",tabIndex:P===e?0:-1,"aria-selected":P===e,key:e,ref:e=>O.push(e),onKeyDown:I,onFocus:T,onClick:T},a,{className:(0,r.Z)("tabs__item",u,null==a?void 0:a.className,{"tabs__item--active":P===e})}),null!=t?t:e)))),a?(0,n.cloneElement)(f.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function c(e){const t=(0,i.Z)();return n.createElement(m,d({key:String(t)},e))}}}]);