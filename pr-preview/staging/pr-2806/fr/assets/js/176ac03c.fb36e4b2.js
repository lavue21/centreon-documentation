"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[58981],{40476:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>m});n(67294);var a=n(3905),l=n(51715),r=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}const p={id:"cloud-aws-billing",title:"AWS Billing"},u=void 0,c={unversionedId:"integrations/plugin-packs/procedures/cloud-aws-billing",id:"integrations/plugin-packs/procedures/cloud-aws-billing",title:"AWS Billing",description:"Contenu du Pack",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-aws-billing.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-aws-billing",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/cloud-aws-billing",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-aws-billing.md",tags:[],version:"current",frontMatter:{id:"cloud-aws-billing",title:"AWS Billing"},sidebar:"pp",previous:{title:"Amazon SQS",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/cloud-aws-sqs"},next:{title:"AWS CloudTrail",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/procedures/cloud-aws-cloudtrail"}},d={},m=[{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Mod\xe8les",id:"mod\xe8les",level:3},{value:"R\xe8gles de d\xe9couverte",id:"r\xe8gles-de-d\xe9couverte",level:3},{value:"M\xe9triques &amp; statuts collect\xe9s",id:"m\xe9triques--statuts-collect\xe9s",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Privil\xe8ges AWS",id:"privil\xe8ges-aws",level:3},{value:"D\xe9pendances du Plugin",id:"d\xe9pendances-du-plugin",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4te",id:"h\xf4te",level:3},{value:"Comment puis-je tester le plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:3}],g={toc:m},k="wrapper";function f(e){var{components:t}=e,p=o(e,["components"]);return(0,a.kt)(k,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},g,p),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"contenu-du-pack"},"Contenu du Pack"),(0,a.kt)("h3",{id:"mod\xe8les"},"Mod\xe8les"),(0,a.kt)("p",null,"Le connecteur de supervision Centreon AWS Billing apporte un mod\xe8le d'h\xf4te :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cloud-Aws-Billing-custom")),(0,a.kt)("p",null,"Il apporte le mod\xe8le de service suivant :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Alias"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Mod\xe8le de service"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"D\xe9faut"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Billing-Estimated-Charges"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Cloud-Aws-Billing-Estimated-Charges-Api"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le les co\xfbts g\xe9n\xe9r\xe9s pour un service."),(0,a.kt)("td",{parentName:"tr",align:"left"},"X")))),(0,a.kt)("h3",{id:"r\xe8gles-de-d\xe9couverte"},"R\xe8gles de d\xe9couverte"),(0,a.kt)("p",null,"Le connecteur de supervision Centreon ",(0,a.kt)("strong",{parentName:"p"},"AWS Billing")," inclut un fournisseur de d\xe9couverte\nd'h\xf4tes nomm\xe9 ",(0,a.kt)("strong",{parentName:"p"},"Amazon Billing"),". Celui-ci permet de d\xe9couvrir l'ensemble des services g\xe9n\xe9rant des co\xfbts :"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(86279).Z,width:"578",height:"181"})),(0,a.kt)("p",null,"Vous trouverez plus d'informations sur la d\xe9couverte d'h\xf4tes et son fonctionnement sur la documentation du module : ",(0,a.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/hosts-discovery"},"D\xe9couverte des h\xf4tes")),(0,a.kt)("h3",{id:"m\xe9triques--statuts-collect\xe9s"},"M\xe9triques & statuts collect\xe9s"),(0,a.kt)(l.Z,{groupId:"metrics",mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"Billing-Estimated-Charges",label:"Billing-Estimated-Charges",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"billing.estimatedcharges.usd"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Check Billing estimated charges for a service.")))))),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("h3",{id:"privil\xe8ges-aws"},"Privil\xe8ges AWS"),(0,a.kt)("p",null,"Voici la liste des droits n\xe9cessaires au travers des access/secret key utilis\xe9es permettant d'utiliser ce pack : "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"AWS Permission"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cloudwatch:ListMetrics"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Get all services generating charges.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cloudwatch:getMetricStatistics"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Get metrics from the AWS/Billing namespace on Cloudwatch.")))),(0,a.kt)("h3",{id:"d\xe9pendances-du-plugin"},"D\xe9pendances du Plugin"),(0,a.kt)("p",null,"Afin de r\xe9cup\xe9rer les informations n\xe9cessaires via les APIs AWS, il est possible d'utiliser soit le binaire ",(0,a.kt)("em",{parentName:"p"},"awscli")," fourni par Amazon, soit le SDK Perl ",(0,a.kt)("em",{parentName:"p"},"paws"),". Le SDK est recommand\xe9 car plus performant. "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Attention")," il n'est pas possible d'utiliser ",(0,a.kt)("em",{parentName:"p"},"paws")," si la connexion s'effectue au travers d'un proxy.")),(0,a.kt)(l.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"perl-Paws-installation",label:"perl-Paws-installation",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install perl-Paws\n"))),(0,a.kt)(r.Z,{value:"aws-cli-installation",label:"aws-cli-installation",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"\nunzip awscliv2.zip\nsudo ./aws/install\n')))),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(l.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installez le plugin sur tous les collecteurs Centreon devant superviser les co\xfbts g\xe9n\xe9r\xe9s par un ou des services AWS :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Aws-Billing-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface web de Centreon, installez le connecteur de supervision ",(0,a.kt)("strong",{parentName:"li"},"AWS Billing")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),"."))),(0,a.kt)(r.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources ",(0,a.kt)("strong",{parentName:"li"},"AWS Billing")," :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Aws-Billing-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur le serveur central Centreon, installez le RPM du connecteur de supervision ",(0,a.kt)("strong",{parentName:"li"},"AWS Billing")," :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-aws-billing\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface web de Centreon, installez le connecteur de supervision ",(0,a.kt)("strong",{parentName:"li"},"AWS Billing")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),".")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"h\xf4te"},"H\xf4te"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ajoutez un h\xf4te \xe0 Centreon depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes"),"."),(0,a.kt)("li",{parentName:"ul"},"Remplissez le champ ",(0,a.kt)("strong",{parentName:"li"},"Adresse IP/DNS")," avec l'adresse ",(0,a.kt)("strong",{parentName:"li"},"127.0.0.1"),"."),(0,a.kt)("li",{parentName:"ul"},"Appliquez le mod\xe8le d'h\xf4te ",(0,a.kt)("strong",{parentName:"li"},"Cloud-Aws-Billing-custom"),"."),(0,a.kt)("li",{parentName:"ul"},"Une fois le mod\xe8le appliqu\xe9, renseignez les macros correspondantes. Attention, certaines macros sont obligatoires. Elles doivent \xeatre renseign\xe9es selon le ",(0,a.kt)("em",{parentName:"li"},"custom mode")," utilis\xe9.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSSECRETKEY"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWS Secret key of your IAM role. Password checkbox must be checked.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSACESSKEY"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWS Access key of your IAM role. Password checkbox must be checked.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSREGION"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Must be 'us-east-1'.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSCUSTOMMODE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Custom mode to get metrics, 'awscli' is the default, you can also use 'paws' perl library.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"SERVICENAME"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Billed AWS service name.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"PROXYURL"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Configure proxy URL.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command","_","line (eg. a --verbose flag).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"DUMMYSTATUS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Host state. Default is OK, do not modify it until you know what you are doing.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"DUMMYOUTPUT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Host check output. Default is 'This is a dummy check'. Customize it with your own if needed.")))),(0,a.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le plugin et que signifient les options des commandes ?"),(0,a.kt)("p",null,"Une fois le plugin install\xe9, vous pouvez tester celui-ci directement en ligne\nde commande depuis votre collecteur Centreon en vous connectant avec\nl'utilisateur ",(0,a.kt)("strong",{parentName:"p"},"centreon-engine")," (",(0,a.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_aws_billing_api.pl \\\n    --plugin=cloud::aws::billing::plugin \\\n    --mode=estimated-charges \\\n    --custommode='awscli' \\\n    --region=us-east-1 \\\n    --aws-secret-key='xxx' \\\n    --aws-access-key='xxx' \\\n    --service='AWSBackup' \\\n    --warning-billing='' \\\n    --critical-billing='' \\\n")),(0,a.kt)("p",null,"La commande devrait retourner un message de sortie similaire \xe0 :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: Service 'AWSBackup' Estimated Charges: 0.85 USD | 'AWSBackup#billing.estimatedcharges.usd'=0.85USD;;;;\n")),(0,a.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification peut \xeatre\naffich\xe9e en ajoutant le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_aws_billing_api.pl \\\n    --plugin=cloud::aws::billing::plugin \\\n    --mode=estimated-charges \\\n    --help\n")),(0,a.kt)("p",null,"Tous les modes disponibles peuvent \xeatre affich\xe9s en ajoutant le param\xe8tre\n",(0,a.kt)("inlineCode",{parentName:"p"},"--list-mode")," \xe0 la commande :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_aws_billing_api.pl \\\n    --plugin=cloud::aws::billing::plugin \\\n    --list-mode\n")),(0,a.kt)("h3",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,a.kt)("p",null,"Rendez-vous sur la ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2806/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#http-and-api-checks"},"documentation d\xe9di\xe9e"),"\ndes plugins bas\xe9s sur HTTP/API."))}f.isMDXComponent=!0},86279:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cloud-aws-billing-provider-fbe20b3904885859d3f0e350a820b22f.png"}}]);