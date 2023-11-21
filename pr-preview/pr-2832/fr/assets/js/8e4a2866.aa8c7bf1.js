"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[49444],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>d});n(67294);var r=n(3905),a=n(67709),l=n(7626);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={id:"cloud-azure-management-discover",title:"Azure Discover"},u=void 0,p={unversionedId:"integrations/plugin-packs/procedures/cloud-azure-management-discover",id:"integrations/plugin-packs/procedures/cloud-azure-management-discover",title:"Azure Discover",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-azure-management-discover.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-azure-management-discover",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/cloud-azure-management-discover",draft:!1,tags:[],version:"current",frontMatter:{id:"cloud-azure-management-discover",title:"Azure Discover"},sidebar:"pp",previous:{title:"Azure Cosmos DB",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/cloud-azure-database-cosmosdb"},next:{title:"Azure Elastic Pool",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/cloud-azure-database-elasticpool"}},c={},d=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du Plugin Pack",id:"contenu-du-plugin-pack",level:2},{value:"R\xe8gles de d\xe9couverte",id:"r\xe8gles-de-d\xe9couverte",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Identifiants",id:"identifiants",level:3},{value:"Installation",id:"installation",level:2},{value:"Param\xe9trer une d\xe9couverte",id:"param\xe9trer-une-d\xe9couverte",level:2},{value:"Param\xe8tres d&#39;acc\xe8s",id:"param\xe8tres-dacc\xe8s",level:3},{value:"Param\xe8tres de d\xe9couverte",id:"param\xe8tres-de-d\xe9couverte",level:3},{value:"Lancement de la d\xe9couverte et affichage des r\xe9sultats",id:"lancement-de-la-d\xe9couverte-et-affichage-des-r\xe9sultats",level:3},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:2},{value:"Les identifiants ont chang\xe9 et la d\xe9couverte ne fonctionne plus",id:"les-identifiants-ont-chang\xe9-et-la-d\xe9couverte-ne-fonctionne-plus",level:3},{value:"<code>UNKNOWN: Login endpoint API returns error code &#39;ERROR_NAME&#39; (add --debug option for detailed message)</code>",id:"unknown-login-endpoint-api-returns-error-code-error_name-add---debug-option-for-detailed-message",level:3}],m={toc:d};function k(e){var{components:t}=e,s=o(e,["components"]);return(0,r.kt)("wrapper",i({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",i({},{id:"vue-densemble"}),"Vue d'ensemble"),(0,r.kt)("p",null,"Le Plugin Pack Centreon ",(0,r.kt)("em",{parentName:"p"},"Azure Discover")," permet de d\xe9couvrir l'ensemble des resources Azure rattach\xe9es \xe0 une souscription donn\xe9e.\nIl s'appuie sur les API Azure Monitor afin de r\xe9cuperer les \xe9l\xe9ments de l'infrastructure. Il s'appuie sur la collection des Plugin Pack\nafin de mod\xe9liser une infrastructure Azure dans Centreon"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Le Plugin Pack Centreon ",(0,r.kt)("em",{parentName:"p"},"Azure Discover")," est uniquement compatible avec le ",(0,r.kt)("em",{parentName:"p"},"custom-mode")," 'api'.")),(0,r.kt)("h2",i({},{id:"contenu-du-plugin-pack"}),"Contenu du Plugin Pack"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Le Plugin Pack ",(0,r.kt)("em",{parentName:"p"},"Azure Discover")," est un pack de ",(0,r.kt)("em",{parentName:"p"},"d\xe9couverte"),". Il ne fournit pas de mod\xe8les ni d'indicateurs de supervision en propre.")),(0,r.kt)("h3",i({},{id:"r\xe8gles-de-d\xe9couverte"}),"R\xe8gles de d\xe9couverte"),(0,r.kt)("p",null,"Le Plugin Pack Centreon ",(0,r.kt)("em",{parentName:"p"},"Azure Discover")," fournit un ",(0,r.kt)("em",{parentName:"p"},"provider")," de d\xe9couverte d'H\xf4tes nomm\xe9 ",(0,r.kt)("strong",{parentName:"p"},"Microsoft Azure Management Discover"),"\nCelui-ci permet de d\xe9couvrir l'ensemble des ressources Microsoft Azure rattach\xe9es \xe0 une ",(0,r.kt)("em",{parentName:"p"},"souscription")," donn\xe9e:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(52915).Z,width:"607",height:"188"})),(0,r.kt)("p",null,"Vous trouverez plus d'informations sur la d\xe9couverte d'H\xf4tes et son fonctionnement sur la documentation du module:\n",(0,r.kt)("a",i({parentName:"p"},{href:"/docs/monitoring/discovery/hosts-discovery"}),"D\xe9couverte des h\xf4tes")),(0,r.kt)("h2",i({},{id:"pr\xe9requis"}),"Pr\xe9requis"),(0,r.kt)("h3",i({},{id:"identifiants"}),"Identifiants"),(0,r.kt)("p",null,"Le Plugin Pack Centreon ",(0,r.kt)("em",{parentName:"p"},"Azure Discover")," est uniquement compatible avec le ",(0,r.kt)("em",{parentName:"p"},"custom-mode")," 'api'."),(0,r.kt)("p",null,"R\xe9cup\xe9rez les informations d'identification associ\xe9es en suivant la proc\xe9dure ci-dessous (en anglais)\net notez celles-ci en lieu s\xfbr. Elles seront en effet indispensables lors de la configuration des ressources\ndans Centreon."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create an ",(0,r.kt)("em",{parentName:"p"},"application")," in Azure Active Directory:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Log in to your Azure account."),(0,r.kt)("li",{parentName:"ul"},"Select ",(0,r.kt)("em",{parentName:"li"},"Azure Active directory")," in the left sidebar."),(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("em",{parentName:"li"},"App registrations"),"."),(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("em",{parentName:"li"},"+ Add"),"."),(0,r.kt)("li",{parentName:"ul"},"Enter Centreon as the application name (or any name of your choice), select application type(api) and sign-on-url."),(0,r.kt)("li",{parentName:"ul"},"Click on the ",(0,r.kt)("em",{parentName:"li"},"Create")," button."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Get ",(0,r.kt)("em",{parentName:"p"},"Subscription ID")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Log in to your Azure account."),(0,r.kt)("li",{parentName:"ul"},"Select ",(0,r.kt)("em",{parentName:"li"},"Subscriptions")," in the left sidebar."),(0,r.kt)("li",{parentName:"ul"},"Select whichever subscription is needed."),(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("em",{parentName:"li"},"Overview"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Copy the Subscription ID.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Get ",(0,r.kt)("em",{parentName:"p"},"Tenant ID")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Log in to your Azure account."),(0,r.kt)("li",{parentName:"ul"},"Select ",(0,r.kt)("em",{parentName:"li"},"Azure Active directory")," in the left sidebar."),(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("em",{parentName:"li"},"Properties"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Copy the directory ID.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Get ",(0,r.kt)("em",{parentName:"p"},"Client ID")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Log in to your Azure account."),(0,r.kt)("li",{parentName:"ul"},"Select ",(0,r.kt)("em",{parentName:"li"},"Azure Active directory")," in the left sidebar."),(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("em",{parentName:"li"},"Enterprise applications"),"."),(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("em",{parentName:"li"},"All applications"),"."),(0,r.kt)("li",{parentName:"ul"},"Select the application previously created."),(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("em",{parentName:"li"},"Properties"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Copy the Application ID.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Get ",(0,r.kt)("em",{parentName:"p"},"Client secret")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Log in to your Azure account."),(0,r.kt)("li",{parentName:"ul"},"Select ",(0,r.kt)("em",{parentName:"li"},"Azure Active directory")," in the left sidebar."),(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("em",{parentName:"li"},"App registrations"),"."),(0,r.kt)("li",{parentName:"ul"},"Select the application previously created."),(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("em",{parentName:"li"},"All settings"),"."),(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("em",{parentName:"li"},"Keys"),"."),(0,r.kt)("li",{parentName:"ul"},"Enter the key description and select the duration."),(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("em",{parentName:"li"},"Save"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Copy and store the key value. You won't be able to retrieve it after you leave this page."))))),(0,r.kt)("h2",i({},{id:"installation"}),"Installation"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon devant d\xe9couvrir des resources Azure:")),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Cloud-Azure-Management-Discover-Api\n")),(0,r.kt)("ol",i({},{start:2}),(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web Centreon, installer le Plugin Pack ",(0,r.kt)("em",{parentName:"li"},"Azure Discover"),' depuis la page "Configuration > Plugin packs > Manager".\nDes Plugin Packs suppl\xe9mentaires seront install\xe9s en d\xe9pendance afin de permettre la supervision de l\'ensemble des ressources d\xe9couvertes.'))),(0,r.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon devant d\xe9couvrir des resources Azure:")),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Cloud-Azure-Management-Discover-Api\n")),(0,r.kt)("ol",i({},{start:2}),(0,r.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer l'ensemble des RPM des Plugin Packs ",(0,r.kt)("em",{parentName:"li"},"Azure")," afin de b\xe9n\xe9ficier de l'ensemble des d\xe9pendances:")),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"yum install centreon-pack-cloud-azure\\*\n")),(0,r.kt)("ol",i({},{start:3}),(0,r.kt)("li",{parentName:"ol"},"Sur l'interface Web Centreon, installer le Plugin Pack ",(0,r.kt)("em",{parentName:"li"},"Azure Discover"),' depuis la page "Configuration > Plugin packs > Gestionnaire".\nLes Plugin Packs suppl\xe9mentaires seront install\xe9s en d\xe9pendance afin de permettre la supervision de l\'ensemble des ressources d\xe9couvertes.')))),(0,r.kt)("h2",i({},{id:"param\xe9trer-une-d\xe9couverte"}),"Param\xe9trer une d\xe9couverte"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Le descriptif du fonctionnement g\xe9n\xe9ral de la fonctionnalit\xe9 ",(0,r.kt)("em",{parentName:"p"},"Host Discovery")," est disponible ",(0,r.kt)("a",i({parentName:"p"},{href:"/docs/monitoring/discovery/hosts-discovery"}),"ici"))),(0,r.kt)("h3",i({},{id:"param\xe8tres-dacc\xe8s"}),"Param\xe8tres d'acc\xe8s"),(0,r.kt)("p",null,"Apr\xe8s avoir s\xe9lectionn\xe9 le provider ",(0,r.kt)("strong",{parentName:"p"},"Azure Management Discover"),", renseignez les param\xe8tres d'authentification ainsi que les options\nd'acc\xe8s \xe0 l'API comme ci-apr\xe8s:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(42417).Z,width:"1440",height:"787"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"S\xe9lectionnez le ",(0,r.kt)("strong",{parentName:"li"},"collecteur Centreon")," depuis lequel sera lanc\xe9 la d\xe9couverte"),(0,r.kt)("li",{parentName:"ul"},"Renseignez les param\xe8tres relatifs \xe0 l'utilisation d'un ",(0,r.kt)("strong",{parentName:"li"},"proxy d'entreprise")," si besoin"),(0,r.kt)("li",{parentName:"ul"},"S\xe9lectionnez le ",(0,r.kt)("strong",{parentName:"li"},"profil d'authentification Azure")," \xe0 utiliser")),(0,r.kt)("p",null,"Dans le cadre d'une premi\xe8re utilisation, vous pouvez cr\xe9er un nouveau profil d'acc\xe8s \xe0 Azure en cliquant sur '+'. Renseignez ensuite\nles informations demand\xe9es comme ci-apr\xe8s:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(37683).Z,width:"888",height:"588"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tous les champs du formulaire ",(0,r.kt)("em",{parentName:"p"},"credentials")," doivent \xeatre renseign\xe9s")),(0,r.kt)("p",null,"Cliquez sur ",(0,r.kt)("em",{parentName:"p"},"confirm")," puis sur ",(0,r.kt)("em",{parentName:"p"},"next")," pour afficher la page des param\xe8tres de la d\xe9couverte."),(0,r.kt)("h3",i({},{id:"param\xe8tres-de-d\xe9couverte"}),"Param\xe8tres de d\xe9couverte"),(0,r.kt)("p",null,"Renseignez si besoin les information ci-apr\xe8s:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(76978).Z,width:"1420",height:"989"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tous les champs de ce formulaire sont facultatifs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Azure Location/Resource Group: permet de restreindre la d\xe9couverte \xe0 une ",(0,r.kt)("em",{parentName:"li"},"location")," ou un ",(0,r.kt)("em",{parentName:"li"},"resource group")," donn\xe9"),(0,r.kt)("li",{parentName:"ul"},"Filter on namespace/type: permet de restreindre la d\xe9couverte \xe0 un Service Azure sp\xe9cifique, par exemple:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",i({parentName:"pre"},{}),"- *Resource namepsace*: 'Microsoft.Compute'\n- *Resource type*: 'virtualMachines'\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"}," Attention")," : pour l'utilisation de ce filtre,\nles champs ",(0,r.kt)("em",{parentName:"p"},"Resource namepsace")," et ",(0,r.kt)("em",{parentName:"p"},"Resource type")," doivent dans ce cas \xeatre ",(0,r.kt)("strong",{parentName:"p"},"tous les deux")," renseign\xe9s")))),(0,r.kt)("h3",i({},{id:"lancement-de-la-d\xe9couverte-et-affichage-des-r\xe9sultats"}),"Lancement de la d\xe9couverte et affichage des r\xe9sultats"),(0,r.kt)("p",null,"L'\xe9tape 4 permet d'ajuster les ",(0,r.kt)("em",{parentName:"p"},"mappers"),"; ceux-ci sont d\xe9j\xe0 pr\xe9d\xe9finis par le Plugin Pack, il n'est normalement pas\nn\xe9cessaire de les modifier dans le cadre d'un ",(0,r.kt)("em",{parentName:"p"},"job")," de d\xe9couverte ",(0,r.kt)("em",{parentName:"p"},"standard"),". Si besoin, r\xe9f\xe9rez-vous \xe0 la\n",(0,r.kt)("a",i({parentName:"p"},{href:"/docs/monitoring/discovery/hosts-discovery#comment-utiliser-les-modificateurs"}),"documentation des mappers"),"."),(0,r.kt)("p",null,"Les \xe9tapes 5 & 6 permettent d'ajuster la politique de mod\xe9lisation des r\xe9sultats si besoin. Rendez-vous\n",(0,r.kt)("a",i({parentName:"p"},{href:"/docs/monitoring/discovery/hosts-discovery#d%C3%A9finir-les-politiques-danalyse-et-de-mise-%C3%A0-jour"}),"ici")," pour plus d'informations."),(0,r.kt)("p",null,"Une fois la d\xe9couverte termin\xe9, vous pouvez afficher les r\xe9sultats en cliquant sur ",(0,r.kt)("em",{parentName:"p"},"job results"),". Les mod\xe8les relatifs aux types de resources\nAzure sont automatiquement appliqu\xe9s:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(44879).Z,width:"2345",height:"1214"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Certains \xe9l\xe9ments peuvent ne pas avoir de mod\xe8le appliqu\xe9 dans la liste des r\xe9sultats:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"les \xe9l\xe9ments ne sont pas des ressources pouvant \xeatre supervis\xe9es"),(0,r.kt)("li",{parentName:"ul"},"ces ressources ne sont pas couvertes par les Plugin Pack Centreon"))),(0,r.kt)("p",null,"S\xe9lectionnez les \xe9l\xe9ments \xe0 mod\xe9liser dans Centreon et ",(0,r.kt)("em",{parentName:"p"},"Sauvegardez"),"."),(0,r.kt)("h2",i({},{id:"diagnostic-des-erreurs-communes"}),"Diagnostic des erreurs communes"),(0,r.kt)("h3",i({},{id:"les-identifiants-ont-chang\xe9-et-la-d\xe9couverte-ne-fonctionne-plus"}),"Les identifiants ont chang\xe9 et la d\xe9couverte ne fonctionne plus"),(0,r.kt)("p",null,"Le Plugin de d\xe9couverte utilise un fichier de cache pour conserver les informations de connexion afin de ne pas\nse r\xe9-authentifier \xe0 chaque appel. Si des informations sur le Tenant, la Souscription ou les\nClient ID / Secret changent, il est n\xe9cessaire de supprimer le fichier de cache du Plugin. "),(0,r.kt)("p",null,"Celui ci se trouve dans le r\xe9pertoire ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/centreon/centplugins/")," avec le nom azure",(0,r.kt)("em",{parentName:"p"},"api"),(0,r.kt)("inlineCode",{parentName:"p"},"<md5>_<md5>_<md5>_<md5>"),"."),(0,r.kt)("h3",i({},{id:"unknown-login-endpoint-api-returns-error-code-error_name-add---debug-option-for-detailed-message"}),(0,r.kt)("inlineCode",{parentName:"h3"},"UNKNOWN: Login endpoint API returns error code 'ERROR_NAME' (add --debug option for detailed message)")),(0,r.kt)("p",null,"le ",(0,r.kt)("em",{parentName:"p"},"job")," de d\xe9couverte renvoie le message suivant :\n",(0,r.kt)("inlineCode",{parentName:"p"},"UNKNOWN: Login endpoint API returns error code 'ERROR_NAME' (add --debug option for detailed message)"),"."),(0,r.kt)("p",null,"Cela signifie que l'un des param\xe8tres utilis\xe9s pour authentifier la requ\xeate est incorrect. Le param\xe8tre\nen question est sp\xe9cifi\xe9 dans le message d'erreur en lieu et place de 'ERROR_NAME'. "),(0,r.kt)("p",null,"Par exemple, 'invalid_client' signifie que le client-id et/ou le client-secret\nn'est (ne sont) pas valide(s)."))}k.isMDXComponent=!0},7626:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const l="tabItem_Ymn6";function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o({children:e,hidden:t,className:n}){return r.createElement("div",i({role:"tabpanel",className:(0,a.Z)(l,n)},{hidden:t}),e)}},67709:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(67294),a=n(86010),l=n(90980),i=n(35715),o=n(8854),s=n(8241);const u="tabList__CuJ",p="tabItem_LNqP";function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function d(e){var t;const{lazy:n,block:l,defaultValue:d,values:m,groupId:k,className:v}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=null!=m?m:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),N=(0,i.l)(f,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var b;const h=null===d?d:null!==(b=null!=d?d:null===(t=g.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==b?b:g[0].props.value;if(null!==h&&!f.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:P}=(0,o.U)(),[z,A]=(0,r.useState)(h),C=[],{blockElementScrollPositionUntilNextRender:O}=(0,s.o5)();if(null!=k){const e=y[k];null!=e&&e!==z&&f.some((t=>t.value===e))&&A(e)}const w=e=>{const t=e.currentTarget,n=C.indexOf(t),r=f[n].value;r!==z&&(O(t),A(r),null!=k&&P(k,String(r)))},D=e=>{let t=null;switch(e.key){case"ArrowRight":{const r=C.indexOf(e.currentTarget)+1;var n;t=null!==(n=C[r])&&void 0!==n?n:C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;var r;t=null!==(r=C[n])&&void 0!==r?r:C[C.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":l},v)},f.map((({value:e,label:t,attributes:n})=>r.createElement("li",c({role:"tab",tabIndex:z===e?0:-1,"aria-selected":z===e,key:e,ref:e=>C.push(e),onKeyDown:D,onFocus:w,onClick:w},n,{className:(0,a.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":z===e})}),null!=t?t:e)))),n?(0,r.cloneElement)(g.filter((e=>e.props.value===z))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==z})))))}function m(e){const t=(0,l.Z)();return r.createElement(d,c({key:String(t)},e))}},42417:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cloud-azure-management-discover-accessparameters-c85305f4c20a6c1f72508719a8a6b34d.png"},37683:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cloud-azure-management-discover-credentials-8a4b16407ab727352e57ebbee1cc2904.png"},76978:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cloud-azure-management-discover-discoparameters-d99e258a4afa59a434f57b762ebebfc1.png"},52915:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cloud-azure-management-discover-provider-6c92e27d96f9735a17cbe30ca179b9de.png"},44879:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cloud-azure-management-discover-results-908bb9d1f1a2e54a6e4420867347e16b.png"}}]);