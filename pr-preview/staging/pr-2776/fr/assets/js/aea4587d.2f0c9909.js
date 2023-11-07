"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[55417],{79090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>u,metadata:()=>c,toc:()=>m});n(67294);var a=n(3905),r=n(51715),l=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const u={id:"cloud-azure-management-loganalytics",title:"Azure Log Analytics"},p=void 0,c={unversionedId:"integrations/plugin-packs/procedures/cloud-azure-management-loganalytics",id:"integrations/plugin-packs/procedures/cloud-azure-management-loganalytics",title:"Azure Log Analytics",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-azure-management-loganalytics.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-azure-management-loganalytics",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/cloud-azure-management-loganalytics",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-azure-management-loganalytics.md",tags:[],version:"current",frontMatter:{id:"cloud-azure-management-loganalytics",title:"Azure Log Analytics"},sidebar:"pp",previous:{title:"Azure Load Balancer",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/cloud-azure-network-loadbalancer"},next:{title:"Azure Management Costs",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/cloud-azure-management-costs"}},d={},m=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4te",id:"h\xf4te",level:3},{value:"FAQ",id:"faq",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:3},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:3},{value:"<code>UNKNOWN: Login endpoint API returns error code &#39;ERROR_NAME&#39; (add --debug option for detailed message)</code>",id:"unknown-login-endpoint-api-returns-error-code-error_name-add---debug-option-for-detailed-message",level:4},{value:"Les identifiants ont chang\xe9 et mon Plugin ne fonctionne plus",id:"les-identifiants-ont-chang\xe9-et-mon-plugin-ne-fonctionne-plus",level:4},{value:"UNKNOWN: 500 Can&#39;t connect to login.microsoftonline.com:443",id:"unknown-500-cant-connect-to-loginmicrosoftonlinecom443",level:4}],g={toc:m},k="wrapper";function f(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)(k,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,a.kt)("p",null,"Log Analytics est un outil Azure permettant de r\xe9aliser des requ\xeates dans les\njournaux d'\xe9v\xe9nements collect\xe9s par l'agent Azure Monitor Logs."),(0,a.kt)("p",null,"Le connecteur de supervision ",(0,a.kt)("em",{parentName:"p"},"Azure Log Analytics")," permet de r\xe9aliser des requ\xeates et d'afficher\nle nombre d'enregistrement retourn\xe9s pour une requ\xeate donn\xe9e."),(0,a.kt)("p",null,"Il peut s'appuyer sur l'API Azure Management Monitor ou l'Azure CLI."),(0,a.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,a.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Nombre de logs retourn\xe9s par une requ\xeate KQL")),(0,a.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Kusto-Query",label:"Kusto-Query",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"match.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of logs matching the query expression."),(0,a.kt)("td",{parentName:"tr",align:"left"},"count")))),(0,a.kt)("p",null,"La Macro KUSTOQUERY est obligatoire. "))),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("p",null,"Rendez-vous sur la ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/azure-credential-configuration"},"documentation d\xe9di\xe9e")," afin d'obtenir les pr\xe9requis n\xe9cessaires pour interroger les API d'Azure."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon devant effectuer des requ\xeates vers Azure Log Analytics:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Azure-Management-Log-Analytics-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Azure Log Analytics")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,a.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon devant effectuer des requ\xeates vers Azure Log Analytics:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Azure-Management-Log-Analytics-Api\n")),(0,a.kt)("p",null,"2.Sur le serveur Central Centreon, installer le RPM du connecteur de supervision ",(0,a.kt)("em",{parentName:"p"},"Azure Log Analytics"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-azure-management-log-analytics-api\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Azure Log Analytics")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"h\xf4te"},"H\xf4te"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ajoutez un H\xf4te \xe0 Centreon, remplissez le champ ",(0,a.kt)("em",{parentName:"li"},"Adresse IP/DNS")," avec l'adresse 127.0.0.1\net appliquez-lui le Mod\xe8le d'H\xf4te ",(0,a.kt)("em",{parentName:"li"},"Cloud-Azure-Management-Log-Analytics-custom"),"."),(0,a.kt)("li",{parentName:"ul"},"Une fois le mod\xe8le appliqu\xe9, les Macros ci-dessous indiqu\xe9es comme requises (",(0,a.kt)("em",{parentName:"li"},"Mandatory"),")\ndoivent \xeatre renseign\xe9es selon le custom-mode utilis\xe9:")),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Azure Monitor API",label:"Azure Monitor API",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURECUSTOMMODE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Custom mode 'api'")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURESUBSCRIPTION"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Subscription ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURETENANT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Tenant ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURECLIENTID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Client ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURECLIENTSECRET"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Client secret"))))),(0,a.kt)(l.Z,{value:"Azure AZ CLI",label:"Azure AZ CLI",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURECUSTOMMODE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Custom mode 'azcli'")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"AZURESUBSCRIPTION"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Subscription ID")))))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,a.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de\ncommande depuis votre collecteur Centreon en vous connectant avec l'utilisateur\n",(0,a.kt)("em",{parentName:"p"},"centreon-engine"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_azure_management_loganalytics_api.pl \\\n    --plugin=cloud::azure::management::loganalytics::plugin \\\n    --mode=kusto-query --custommode='api' --management-endpoint='https://api.loganalytics.io' \\\n    --subscription='xxxxxxxxx' --tenant='xxxxxxx' --client-id='xxxxxxxx' --client-secret='xxxxxxxxxx'\n    --workspace-id='xxxxxxxxxxxxxxx' --custom-output='Number of computer without heartbeat for more than 2 days: %d' \\\n    --query='Heartbeat | summarize LastCall = max(TimeGenerated) by Computer | where LastCall < ago(2d)' \\\n    --critical-match='0'\n")),(0,a.kt)("p",null,"La commande devrait retourner un message de sortie similaire \xe0: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"CRITICAL: Number of computer without heartbeat for more than 2 days: 1 | 'match.count'=1;;;0;\n")),(0,a.kt)("p",null,"La commande ci-dessus effectue une requ\xeate KustoQL dans Azure Log Analytics au\nmoyen de l'API (",(0,a.kt)("inlineCode",{parentName:"p"},"-plugin=cloud::azure::management::loganalytics::plugin --mode=kusto-query --custommode='api'"),")."),(0,a.kt)("p",null,"Les \xe9l\xe9ments r\xe9cup\xe9r\xe9s dans la partie pr\xe9requis pour l'authentification sont\najout\xe9s pour l'obtention d'un token (",(0,a.kt)("inlineCode",{parentName:"p"},"--subscription='xxxxxxxxx' --tenant='xxxxxxx' --client-id='xxxxxxxx' --client-secret='xxxxxxxxxx'"),"). "),(0,a.kt)("p",null,"Les options utilis\xe9es pour ce mode permettent de sp\xe9cifier le ",(0,a.kt)("em",{parentName:"p"},"workspace")," dans lequel\nsera lanc\xe9e la requ\xeate (",(0,a.kt)("inlineCode",{parentName:"p"},"--workspace-id='xxxxxxxxxxxxxxx'"),") et de personnaliser le\nmessage de sortie au format ",(0,a.kt)("em",{parentName:"p"},"printf")," pour le rendre plus compr\xe9hensible en cas d'alerte\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--custom-output='Number of computer without heartbeat for more than 2 days: %d'"),"). "),(0,a.kt)("p",null,"La commande retourne un CRITICAL car le nombre de lignes retourn\xe9es est sup\xe9rieur \xe0 0 (",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-match='0'"),")."),(0,a.kt)("p",null,"La requ\xeate indiqu\xe9e dans la commande peut \xe9galement int\xe9grer une borne temporelle, par exemple pour\nn'obtenir que le nombre d'occurences sur lesquelles l'attribut ",(0,a.kt)("em",{parentName:"p"},"LastCall")," date de plus de deux jours\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--query='Heartbeat | summarize LastCall = max(TimeGenerated) by Computer | where LastCall < ago(2d)'"),")."),(0,a.kt)("p",null,"La borne de temps pour la requ\xeate peut \xe9galement \xeatre pr\xe9cis\xe9e au format ISO-8601 via l'option ",(0,a.kt)("inlineCode",{parentName:"p"},"--timespan"),"."),(0,a.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leurs signification\npeut \xeatre affich\xe9e en ajoutant le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_azure_management_loganalytics_api.pl \\\n    --plugin=cloud::azure::management::loganalytics::plugin \\\n    --mode=kusto-query\n    --help\n")),(0,a.kt)("h3",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,a.kt)("h4",{id:"unknown-login-endpoint-api-returns-error-code-error_name-add---debug-option-for-detailed-message"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: Login endpoint API returns error code 'ERROR_NAME' (add --debug option for detailed message)")),(0,a.kt)("p",null,"Lors du d\xe9ploiement de mes contr\xf4les, j'obtiens le message suivant :\n",(0,a.kt)("inlineCode",{parentName:"p"},"UNKNOWN: Login endpoint API returns error code 'ERROR_NAME' (add --debug option for detailed message)"),"."),(0,a.kt)("p",null,"Cela signifie que l'un des param\xe8tres utilis\xe9s pour authentifier la requ\xeate est incorrect. Le param\xe8tre\nen question est sp\xe9cifi\xe9 dans le message d'erreur en lieu et place de 'ERROR_DESC'. "),(0,a.kt)("p",null,"Par exemple, 'invalid_client' signifie que le client-id et/ou le client-secret\nne sont pas valides."),(0,a.kt)("h4",{id:"les-identifiants-ont-chang\xe9-et-mon-plugin-ne-fonctionne-plus"},"Les identifiants ont chang\xe9 et mon Plugin ne fonctionne plus"),(0,a.kt)("p",null,"Le Plugin utilise un fichier de cache pour conserver les informations de connexions pour ne pas\nse r\xe9-authentifier \xe0 chaque appel. Si des informations sur le Tenant, la Souscription ou les\nClient ID / Secret changent, il est n\xe9cessaire de supprimer le fichier de cache du Plugin. "),(0,a.kt)("p",null,"Celui ci se trouve dans le r\xe9pertoire ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/centreon/centplugins/")," avec le nom azure",(0,a.kt)("em",{parentName:"p"},"api"),(0,a.kt)("inlineCode",{parentName:"p"},"<md5>_<md5>_<md5>_<md5>"),"."),(0,a.kt)("h4",{id:"unknown-500-cant-connect-to-loginmicrosoftonlinecom443"},"UNKNOWN: 500 Can't connect to login.microsoftonline.com:443"),(0,a.kt)("p",null,"Si l'utilisation d'un proxy est requise pour les connexions HTTP depuis le\ncollecteur Centreon, il est n\xe9cessaire de le pr\xe9ciser dans la commande en\nutilisant l'option ",(0,a.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany.com:8080'"),"."),(0,a.kt)("p",null,"Il est \xe9galement possible qu'un \xe9quipement tiers de type Pare-feu bloque la requ\xeate\neffectu\xe9e par le Plugin."))}f.isMDXComponent=!0}}]);