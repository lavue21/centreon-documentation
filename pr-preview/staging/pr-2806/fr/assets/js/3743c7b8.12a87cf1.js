"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[37088],{85053:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>N,frontMatter:()=>u,metadata:()=>c,toc:()=>m});n(67294);var a=n(3905),r=n(51715),l=n(7626);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const u={id:"cloud-aws-health",title:"AWS Health"},p=void 0,c={unversionedId:"integrations/plugin-packs/procedures/cloud-aws-health",id:"integrations/plugin-packs/procedures/cloud-aws-health",title:"AWS Health",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-aws-health.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-aws-health",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/cloud-aws-health",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-aws-health.md",tags:[],version:"current",frontMatter:{id:"cloud-aws-health",title:"AWS Health"},sidebar:"pp",previous:{title:"AWS ELB",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/cloud-aws-elb"},next:{title:"AWS Lambda",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/cloud-aws-lambda"}},d={},m=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques supervis\xe9es",id:"m\xe9triques-supervis\xe9es",level:2},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Privil\xe8ges AWS",id:"privil\xe8ges-aws",level:3},{value:"D\xe9pendances du Plugin",id:"d\xe9pendances-du-plugin",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:3},{value:"J&#39;obtiens le message d&#39;erreur suivant:",id:"jobtiens-le-message-derreur-suivant",level:3},{value:"<code>UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values</code>",id:"unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values",level:4},{value:"<code>UNKNOWN: Command error:  - An error occurred (AuthFailure) [...]</code>",id:"unknown-command-error----an-error-occurred-authfailure-",level:4},{value:"<code>UNKNOWN: 500 Can&#39;t connect to health.us-east-1.amazonaws.com:443 |</code>",id:"unknown-500-cant-connect-to-healthus-east-1amazonawscom443-",level:4}],k={toc:m},g="wrapper";function N(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)(g,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){s(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,a.kt)("p",null,"AWS Health fournit des informations personnalis\xe9es \xe0 propos d'\xe9v\xe9nements qui peuvent concerner votre infrastructure AWS,\nvous guide dans les modifications planifi\xe9es et acc\xe9l\xe8re le d\xe9pannage de probl\xe8mes concernant vos ressources et comptes AWS."),(0,a.kt)("p",null,"Le Plugin Centreon AWS Health utilise l'API Amazon Health pour collecter les m\xe9triques associ\xe9es."),(0,a.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,a.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\xc9v\xe8nements li\xe9s aux comptes AWS et ressources associ\xe9es")),(0,a.kt)("h2",{id:"m\xe9triques-supervis\xe9es"},"M\xe9triques supervis\xe9es"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Events",label:"Events",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"events.total.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Total number of events")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"events.open.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of open events")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"events.closed.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of closed events")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"events.upcoming.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of upcoming events")))))),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("h3",{id:"privil\xe8ges-aws"},"Privil\xe8ges AWS"),(0,a.kt)("p",null,"Voici la liste des droits n\xe9cessaires au travers des ",(0,a.kt)("em",{parentName:"p"},"access/secret keys")," utilis\xe9es pour pouvoir impl\xe9menter la supervision AWS Health: "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"AWS Privilege"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"health:DescribeEvents"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Returns information about events that meet the specified filter criteria.")))),(0,a.kt)("p",null,"L'API AWS Health n\xe9cessite un plan de support Business or Enterprise d'AWS Support. Un appel de l'API Health \xe0 partir d'un compte qui ne dispose pas d'un plan de support Business ou Enterprise entra\xeene une exception ",(0,a.kt)("em",{parentName:"p"},"SubscriptionRequiredException"),"."),(0,a.kt)("h3",{id:"d\xe9pendances-du-plugin"},"D\xe9pendances du Plugin"),(0,a.kt)("p",null,"Afin de r\xe9cup\xe9rer les informations n\xe9cessaires via les APIs AWS, il est possible d'utiliser soit le binaire ",(0,a.kt)("em",{parentName:"p"},"awscli")," fourni par Amazon, soit le SDK Perl ",(0,a.kt)("em",{parentName:"p"},"paws"),".\nLe SDK est recommand\xe9 car plus performant. "),(0,a.kt)("p",null,"Installez le binaire choisi en lan\xe7ant l'une des commandes suivantes:"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"perl-Paws-installation",label:"perl-Paws-installation",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install perl-Paws\n"))),(0,a.kt)(l.Z,{value:"aws-cli-installation",label:"aws-cli-installation",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install awscli\n")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Attention")," il n'est actuellement ",(0,a.kt)("strong",{parentName:"p"},"pas")," possible d'utiliser ",(0,a.kt)("em",{parentName:"p"},"paws")," dans les cas suivants:"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"si la connexion s'effectue au travers d'un proxy."),(0,a.kt)("li",{parentName:"ul"},"utilisation de la fonctionnalit\xe9 de ",(0,a.kt)("em",{parentName:"li"},"D\xe9couverte d'H\xf4te")," dans Centreon."))),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon devant superviser la ressource AWS Health:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Aws-Health-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"AWS Health")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,a.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon devant superviser la ressource AWS Health:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Aws-Health-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le RPM du connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"AWS Health"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-aws-health.noarch\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"AWS Health")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ajoutez un H\xf4te \xe0 Centreon et appliquez-lui le Mod\xe8le d'H\xf4te ",(0,a.kt)("em",{parentName:"li"},"Cloud-Aws-Health"),"."),(0,a.kt)("li",{parentName:"ul"},"Une fois le mod\xe8le appliqu\xe9, les Macros ci-dessous indiqu\xe9es comme requises (",(0,a.kt)("em",{parentName:"li"},"Mandatory"),") doivent \xeatre renseign\xe9es:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSSECRETKEY"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWS Secret key of your IAM role. Password checkbox must be checked")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSACESSKEY"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWS Access key of your IAM role. Password checkbox must be checked")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSREGION"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Region where the instance is running")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSCUSTOMMODE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Custom mode to get metrics, 'awscli' is the default, you can also use 'paws' perl library")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"PROXYURL"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Configure proxy URL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command","_","line (eg. a --verbose flag)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"DUMMYSTATUS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Host state. Default is OK, do not modify it unless you know what you are doing")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"DUMMYOUTPUT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Host check output. Default is 'This is a dummy check'. Customize it with your own if needed")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,a.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur ",(0,a.kt)("em",{parentName:"p"},"centreon-engine"),"\n(certaines options comme ",(0,a.kt)("inlineCode",{parentName:"p"},"--proxyurl")," doivent \xeatre ajust\xe9es en fonction du contexte):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_aws_health_api.pl \\\n    --plugin=cloud::aws::health::plugin \\\n    --mode=events \\\n    --custommode='awscli' \\\n    --aws-secret-key='****' \\\n    --aws-access-key='****' \\\n    --proxyurl='http://myproxy.mycompany.org:8080' \\\n    --filter-service='' \\\n    --filter-region='' \\\n    --filter-entity-value='' \\\n    --filter-event-category='issue' \\\n    --filter-event-status='open' \\\n    --warning-total='0' \\\n    --critical-total='1' \\\n    --display-affected-entities \\\n    --verbose   \n")),(0,a.kt)("p",null,"La commande retourne le message de sortie ci-dessous:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"CRITICAL: Events total: 1 | 'events.total.count'=1;;0:0;0; 'events.open.count'=1;;;0; 'events.closed.count'=0;;;0; 'events.upcoming.count'=0;;;0;\n[service: RDS][region: eu-west-1][status: open][type: AWS_RDS_HARDWARE_MAINTENANCE_SCHEDULED][start: Wed Jul 15 13:00:00 2020][affected entity: doh-sfetoto3]\n")),(0,a.kt)("p",null,"Cette commande r\xe9cup\xe8re les ",(0,a.kt)("em",{parentName:"p"},"events")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=events"),") d'un compte d'AWS identifi\xe9 par l'utilisation une paire d'identifiants ",(0,a.kt)("em",{parentName:"p"},"aws-secret-key")," et ",(0,a.kt)("em",{parentName:"p"},"aws-access-key")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--aws-secret-key='****' --aws-access-key='****'"),").\nIl est possible de positionner des filtres afin de personnaliser les \xe9l\xe9ments qui seront renvoy\xe9s par la commande.\nDans l'exemple ci-dessus, on choisit de ne r\xe9cup\xe9rer que les \xe9v\xe8nements cat\xe9goris\xe9s comme ",(0,a.kt)("em",{parentName:"p"},"issue")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--filter-event-category='issue'"),") et en statut ",(0,a.kt)("em",{parentName:"p"},"open")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--filter-event-status='open'"),").\nL'option ",(0,a.kt)("inlineCode",{parentName:"p"},"--display-affected-entities")," permet quant \xe0 elle d'afficher la r\xe9f\xe9rence de la ressource concern\xe9e par l'\xe9v\xe8nement."),(0,a.kt)("p",null,"Une alerte WARNING sera d\xe9clench\xe9e si le nombre d'\xe9v\xe8nements renvoy\xe9s par le service est de 1 (",(0,a.kt)("inlineCode",{parentName:"p"},"--warning-total='0'"),") et une alerte CRITICAL \xe0 partir de 2 \xe9v\xe8nements renvoy\xe9s (",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-total='1'"),")."),(0,a.kt)("p",null,"La liste de tous les filtres et seuil disponibles peut \xeatre affich\xe9e en ajoutant le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_aws_health_api.pl --plugin=cloud::aws::health::plugin --mode=events --help\n")),(0,a.kt)("h3",{id:"jobtiens-le-message-derreur-suivant"},"J'obtiens le message d'erreur suivant:"),(0,a.kt)("h4",{id:"unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values")),(0,a.kt)("p",null,"Lors du d\xe9ploiement de mes contr\xf4les, j'obtiens le message suivant 'UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values'. "),(0,a.kt)("p",null,"Cela signifie qu'Amazon Cloudwatch n'a pas consolid\xe9 de donn\xe9es sur la p\xe9riode."),(0,a.kt)("p",null,"Vous pouvez ajouter ",(0,a.kt)("inlineCode",{parentName:"p"},"--zeroed")," \xe0 la macro ",(0,a.kt)("strong",{parentName:"p"},"EXTRAOPTIONS")," du ",(0,a.kt)("em",{parentName:"p"},"Service")," en question afin de forcer le stockage d'un 0 et ainsi \xe9viter un statut UNKNOWN."),(0,a.kt)("h4",{id:"unknown-command-error----an-error-occurred-authfailure-"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: Command error:  - An error occurred (AuthFailure) [...]")),(0,a.kt)("p",null,"Cette erreur signifie que le r\xf4le IAM associ\xe9 au combo access-key/secret-key n'a pas les droits suffisants pour r\xe9aliser une op\xe9ration donn\xe9e."),(0,a.kt)("h4",{id:"unknown-500-cant-connect-to-healthus-east-1amazonawscom443-"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 500 Can't connect to health.us-east-1.amazonaws.com:443 |")),(0,a.kt)("p",null,"Lors du d\xe9ploiement de mes contr\xf4les, j'obtiens le message suivant: ",(0,a.kt)("inlineCode",{parentName:"p"},"UNKNOWN: 500 Can't connect to health.us-east-1.amazonaws.com:443 |"),"."),(0,a.kt)("p",null,"Cela signifie que Centreon n'a pas r\xe9ussi \xe0 se connecter \xe0 l'API AWS Health."),(0,a.kt)("p",null,"Si l'utilisation d'un proxy est requise pour les connexions HTTP depuis le collecteur Centreon,\nil est n\xe9cessaire de le pr\xe9ciser dans la commande en utilisant l'option ",(0,a.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany.com:8080'"),"."))}N.isMDXComponent=!0}}]);