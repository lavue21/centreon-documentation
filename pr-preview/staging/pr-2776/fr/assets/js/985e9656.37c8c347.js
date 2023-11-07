"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[7763],{24251:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>N,frontMatter:()=>o,metadata:()=>m,toc:()=>c});a(67294);var n=a(3905),r=a(51715),l=a(7626);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o={id:"cloud-azure-compute-virtualmachine",title:"Azure Virtual Machine"},s=void 0,m={unversionedId:"integrations/plugin-packs/procedures/cloud-azure-compute-virtualmachine",id:"integrations/plugin-packs/procedures/cloud-azure-compute-virtualmachine",title:"Azure Virtual Machine",description:"Contenu du Pack",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-azure-compute-virtualmachine.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-azure-compute-virtualmachine",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/cloud-azure-compute-virtualmachine",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-azure-compute-virtualmachine.md",tags:[],version:"current",frontMatter:{id:"cloud-azure-compute-virtualmachine",title:"Azure Virtual Machine"},sidebar:"pp",previous:{title:"Azure Traffic Manager",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/cloud-azure-network-trafficmanager"},next:{title:"Azure Virtual Machine Scale Sets",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/cloud-azure-compute-vmscalesets"}},d={},c=[{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Mod\xe8les",id:"mod\xe8les",level:3},{value:"R\xe8gles de d\xe9couverte",id:"r\xe8gles-de-d\xe9couverte",level:3},{value:"M\xe9triques &amp; statuts collect\xe9s",id:"m\xe9triques--statuts-collect\xe9s",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4te",id:"h\xf4te",level:3},{value:"Comment puis-je tester le plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:3}],k={toc:c},g="wrapper";function N(e){var{components:t}=e,o=u(e,["components"]);return(0,n.kt)(g,p(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){i(e,t,a[t])}))}return e}({},k,o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"contenu-du-pack"},"Contenu du Pack"),(0,n.kt)("h3",{id:"mod\xe8les"},"Mod\xe8les"),(0,n.kt)("p",null,"Le connecteur de supervision Centreon ",(0,n.kt)("strong",{parentName:"p"},"Azure Virtual Machine")," apporte un mod\xe8le d'h\xf4te :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Cloud-Azure-Compute-VirtualMachine-custom")),(0,n.kt)("p",null,"Il apporte les mod\xe8les de service suivants :"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Alias"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Mod\xe8le de service"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"D\xe9faut"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Cpu-Credit"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Cloud-Azure-Compute-VirtualMachine-Cpu-Credit-Api"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le l'utilisation des cr\xe9dits CPU"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Cpu-Usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Cloud-Azure-Compute-VirtualMachine-Cpu-Usage-Api"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le l'utilisation CPU"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Diskio"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Cloud-Azure-Compute-VirtualMachine-Diskio-Api"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le l'utilisation des \xe9critures"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Health"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Cloud-Azure-Compute-VirtualMachine-Health-Api"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le le statut de la VM"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Memory"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Cloud-Azure-Compute-VirtualMachine-Memory-Api"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le l'utilisation de la memoire"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Network"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Cloud-Azure-Compute-VirtualMachine-Network-Api"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le l'utilisation r\xe9seau"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Vm-Sizes-Global"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Cloud-Azure-Compute-VirtualMachine-Vm-Sizes-Global-Api"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le permettant de remonter le nombre de machines virtuelles par types"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h3",{id:"r\xe8gles-de-d\xe9couverte"},"R\xe8gles de d\xe9couverte"),(0,n.kt)("p",null,"Le connecteur de supervision Centreon ",(0,n.kt)("strong",{parentName:"p"},"Azure Virtual Machine")," inclut un fournisseur de d\xe9couverte\nd'h\xf4tes nomm\xe9 ",(0,n.kt)("strong",{parentName:"p"},"Microsoft Azure Virtual Machines"),". Celui-ci permet de d\xe9couvrir l'ensemble des instances\nrattach\xe9es \xe0 une souscription Microsoft Azure donn\xe9e:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:a(41606).Z,width:"406",height:"126"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"La d\xe9couverte ",(0,n.kt)("strong",{parentName:"p"},"Azure Virtual Machine")," n'est compatible qu'avec le mode ",(0,n.kt)("strong",{parentName:"p"},"api"),". Le mode ",(0,n.kt)("strong",{parentName:"p"},"azcli")," n'est pas support\xe9 dans le cadre\nde cette utilisation.")),(0,n.kt)("p",null,"Rendez-vous sur la ",(0,n.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/hosts-discovery"},"documentation d\xe9di\xe9e"),"\npour en savoir plus sur la d\xe9couverte automatique d'h\xf4tes."),(0,n.kt)("h3",{id:"m\xe9triques--statuts-collect\xe9s"},"M\xe9triques & statuts collect\xe9s"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Cpu-Credit",label:"Cpu-Credit",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azvm.cpu.credits.consumed.count"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azvm.cpu.credits.remaining.count"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azvm.cpu.utilization.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,n.kt)(l.Z,{value:"Cpu-Usage",label:"Cpu-Usage",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azvm.cpu.credits.consumed.count"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azvm.cpu.credits.remaining.count"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azvm.cpu.utilization.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,n.kt)(l.Z,{value:"Diskio",label:"Diskio",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azvm.disk.read.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azvm.disk.read.persecond"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azvm.disk.write.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azvm.disk.write.persecond"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Health",label:"Health",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Status Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Current operational status")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"summary"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Last related status message"))))),(0,n.kt)(l.Z,{value:"Memory",label:"Memory",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azvm.memory.available.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B"))))),(0,n.kt)(l.Z,{value:"Network",label:"Network",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azvm.network.in.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"azvm.network.out.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B"))))),(0,n.kt)(l.Z,{value:"Vm-Sizes-Global",label:"Vm-Sizes-Global",mdxType:"TabItem"},(0,n.kt)("p",null,"One metric corresponding to each available machine size you can deploy with Azure. "))),(0,n.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,n.kt)("p",null,"Rendez-vous sur la ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/azure-credential-configuration"},"documentation d\xe9di\xe9e")," afin d'obtenir les pr\xe9requis n\xe9cessaires pour interroger les API d'Azure."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources ",(0,n.kt)("strong",{parentName:"li"},"Azure Virtual Machine")," :")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Azure-Compute-VirtualMachine-Api\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Sur l'interface web de Centreon, installez le connecteur de supervision ",(0,n.kt)("strong",{parentName:"li"},"Azure Virtual Machine")," depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),"."))),(0,n.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources ",(0,n.kt)("strong",{parentName:"li"},"Azure Virtual Machine")," :")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Azure-Compute-VirtualMachine-Api\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Sur le serveur central Centreon, installez le RPM du connecteur de supervision ",(0,n.kt)("strong",{parentName:"li"},"Azure Virtual Machine")," :")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-azure-compute-virtualmachine\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Sur l'interface web de Centreon, installez le connecteur de supervision ",(0,n.kt)("strong",{parentName:"li"},"Azure Virtual Machine")," depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),".")))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("h3",{id:"h\xf4te"},"H\xf4te"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ajoutez un h\xf4te \xe0 Centreon depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes"),"."),(0,n.kt)("li",{parentName:"ul"},"Remplissez le champ ",(0,n.kt)("strong",{parentName:"li"},"Adresse IP/DNS")," avec l'adresse ",(0,n.kt)("strong",{parentName:"li"},"127.0.0.1"),"."),(0,n.kt)("li",{parentName:"ul"},"Appliquez le mod\xe8le d'h\xf4te ",(0,n.kt)("strong",{parentName:"li"},"Cloud-Azure-Compute-VirtualMachine-custom"),"."),(0,n.kt)("li",{parentName:"ul"},"Une fois le mod\xe8le appliqu\xe9, renseignez les macros correspondantes. Attention, certaines macros sont obligatoires. Elles doivent \xeatre renseign\xe9es selon le ",(0,n.kt)("em",{parentName:"li"},"custom mode")," utilis\xe9.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Deux m\xe9thodes peuvent \xeatre utilis\xe9es lors de l'assignation des macros :")),(0,n.kt)("blockquote",null,(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"Utilisation de l'ID complet de la ressource (de type ",(0,n.kt)("inlineCode",{parentName:"li"},"/subscriptions/<subscription_id>/resourceGroups/<resourcegroup_id>/providers/XXXXXX/XXXXXXX/<resource_name>"),") dans la macro ",(0,n.kt)("em",{parentName:"li"},"AZURERESOURCE"),"."),(0,n.kt)("li",{parentName:"ul"},"Utilisation du nom de la ressource dans la macro ",(0,n.kt)("strong",{parentName:"li"},"AZURERESOURCE")," et du nom du groupe de ressources dans la macro ",(0,n.kt)("strong",{parentName:"li"},"AZURERESOURCEGROUP"),"."))),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Azure Monitor API",label:"Azure Monitor API",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Obligatoire"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"x"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZUREAPICUSTOMMODE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Custom mode ",(0,n.kt)("strong",{parentName:"td"},"api"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"x"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURECLIENTID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Client ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"x"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURECLIENTSECRET"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Client secret")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"x"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ID or name of the Azure Virtual Machine resource")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCEGROUP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Resource group name if resource name is used")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"x"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURESUBSCRIPTION"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Subscription ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"x"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURETENANT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Tenant ID"))))),(0,n.kt)(l.Z,{value:"Azure AZ CLI",label:"Azure AZ CLI",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Obligatoire"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"x"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURECLICUSTOMMODE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Custom mode ",(0,n.kt)("strong",{parentName:"td"},"azcli"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"x"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ID or name of the Azure Virtual Machine resource")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"x"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURERESOURCEGROUP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Resource group name if resource name is used")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"x"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AZURESUBSCRIPTION"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Subscription ID")))))),(0,n.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le plugin et que signifient les options des commandes ?"),(0,n.kt)("p",null,"Une fois le plugin install\xe9, vous pouvez tester celui-ci directement en ligne\nde commande depuis votre collecteur Centreon en vous connectant avec\nl'utilisateur ",(0,n.kt)("strong",{parentName:"p"},"centreon-engine")," (",(0,n.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_azure_compute_virtualmachine_api.pl \\\n    --plugin=cloud::azure::compute::virtualmachine::plugin \\\n    --mode=health \\\n    --custommode='api' \\\n    --resource='VM001ABCD' \\\n    --resource-group='RSG1234' \\\n    --subscription='xxxxxxxxx' \\\n    --tenant='xxxxxxxxx' \\\n    --client-id='xxxxxxxxx' \\\n    --client-secret='xxxxxxxxx' \\\n    --proxyurl='' \\\n    --ok-status='%{status} =~ /^Available$/' \\\n    --warning-status='' \\\n    --critical-status='%{status} =~ /^Unavailable$/' \\\n    --unknown-status='%{status} =~ /^Unknown$/' \\\n    --api-version=2017-07-01\\\n    --use-new-perfdata\n")),(0,n.kt)("p",null,"La commande devrait retourner un message de sortie similaire \xe0 :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Status: '%s', Summary: '%s' |\n")),(0,n.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification peut \xeatre\naffich\xe9e en ajoutant le param\xe8tre ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_azure_compute_virtualmachine_api.pl \\\n    --plugin=cloud::azure::compute::virtualmachine::plugin \\\n    --mode=health \\\n    --help\n")),(0,n.kt)("p",null,"Tous les modes disponibles peuvent \xeatre affich\xe9s en ajoutant le param\xe8tre\n",(0,n.kt)("inlineCode",{parentName:"p"},"--list-mode")," \xe0 la commande :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_azure_compute_virtualmachine_api.pl \\\n    --plugin=cloud::azure::compute::virtualmachine::plugin \\\n    --list-mode\n")),(0,n.kt)("h3",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,n.kt)("p",null,"Rendez-vous sur la ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#http-and-api-checks"},"documentation d\xe9di\xe9e"),"\ndes plugins bas\xe9s sur HTTP/API."))}N.isMDXComponent=!0},41606:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);