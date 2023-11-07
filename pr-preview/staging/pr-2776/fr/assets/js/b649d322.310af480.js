"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[71967],{7103:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>m});n(67294);var a=n(3905),r=n(51715),s=n(7626);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={id:"cloud-aws-sns",title:"Amazon SNS"},u=void 0,c={unversionedId:"integrations/plugin-packs/procedures/cloud-aws-sns",id:"integrations/plugin-packs/procedures/cloud-aws-sns",title:"Amazon SNS",description:"Contenu du Pack",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-aws-sns.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-aws-sns",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/cloud-aws-sns",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-aws-sns.md",tags:[],version:"current",frontMatter:{id:"cloud-aws-sns",title:"Amazon SNS"},sidebar:"pp",previous:{title:"Amazon SES",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/cloud-aws-ses"},next:{title:"Amazon SQS",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/cloud-aws-sqs"}},d={},m=[{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Mod\xe8les",id:"mod\xe8les",level:3},{value:"R\xe8gles de d\xe9couverte",id:"r\xe8gles-de-d\xe9couverte",level:3},{value:"M\xe9triques &amp; statuts collect\xe9s",id:"m\xe9triques--statuts-collect\xe9s",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Privil\xe8ges AWS",id:"privil\xe8ges-aws",level:3},{value:"D\xe9pendances du Plugin",id:"d\xe9pendances-du-plugin",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Comment puis-je tester le plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:3}],g={toc:m},k="wrapper";function f(e){var{components:t}=e,p=o(e,["components"]);return(0,a.kt)(k,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},g,p),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"contenu-du-pack"},"Contenu du Pack"),(0,a.kt)("h3",{id:"mod\xe8les"},"Mod\xe8les"),(0,a.kt)("p",null,"Le connecteur de supervision Centreon ",(0,a.kt)("strong",{parentName:"p"},"Amazon SNS")," apporte un mod\xe8le d'h\xf4te :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cloud-Aws-Sqs-custom")),(0,a.kt)("p",null,"Il apporte le mod\xe8le de service suivant :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Alias"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Mod\xe8le de service"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"D\xe9faut"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Sns-Topic-Notifications"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Cloud-Aws-Sns-Topic-Notifications-Api"),(0,a.kt)("td",{parentName:"tr",align:"left"},'Contr\xf4le les notifications Amazon SNS par "topic"'),(0,a.kt)("td",{parentName:"tr",align:"left"},"X")))),(0,a.kt)("h3",{id:"r\xe8gles-de-d\xe9couverte"},"R\xe8gles de d\xe9couverte"),(0,a.kt)("p",null,"Ce pack propose une r\xe8gle de d\xe9couverte d'h\xf4tes permettant de d\xe9couvrir automatiquement des ressources ",(0,a.kt)("strong",{parentName:"p"},"AWS SNS")," : "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(34687).Z,width:"509",height:"161"})),(0,a.kt)("p",null,"Vous trouverez plus d'informations sur la d\xe9couverte d'H\xf4tes et son fonctionnement sur la documentation du module : ",(0,a.kt)("a",{parentName:"p",href:"/docs/monitoring/discovery/hosts-discovery"},"D\xe9couverte des h\xf4tes")),(0,a.kt)("h3",{id:"m\xe9triques--statuts-collect\xe9s"},"M\xe9triques & statuts collect\xe9s"),(0,a.kt)("p",null,"Plus de d\xe9tails sur les m\xe9triques pr\xe9sent\xe9es ci-apr\xe8s sont disponibles sur la documentation officielle du service SNS:\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/fr_fr/sns/latest/dg/sns-monitoring-using-cloudwatch"},"https://docs.aws.amazon.com/fr_fr/sns/latest/dg/sns-monitoring-using-cloudwatch")),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"Sns-Topic-Notifications",label:"Sns-Topic-Notifications",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"sns.notifications.published.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of messages published to your Amazon SNS topics.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"sns.notifications.delivered.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of messages successfully delivered from your Amazon SNS topics to subscribing endpoints.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"sns.notifications.failed.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of messages that Amazon SNS failed to deliver.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"sns.notifications.filtered.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of messages that were rejected by subscription filter policies.")))))),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("h3",{id:"privil\xe8ges-aws"},"Privil\xe8ges AWS"),(0,a.kt)("p",null,"Un compte de service (paire d'identifiants ",(0,a.kt)("em",{parentName:"p"},"access/secret keys"),") est n\xe9cessaire afin de pouvoir superviser les resources ",(0,a.kt)("strong",{parentName:"p"},"Amazon SNS"),".\nCe compte doit b\xe9n\xe9ficier des privil\xe8ges suivants :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"AWS Privilege"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"sns:ListTopics"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Returns a list of the requester's topics.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cloudwatch:listMetrics"),(0,a.kt)("td",{parentName:"tr",align:"left"},"List all metrics from Cloudwatch AWS/VPN namespace")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cloudwatch:getMetricStatistics"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Get metrics values from Cloudwatch AWS/VPN namespace")))),(0,a.kt)("h3",{id:"d\xe9pendances-du-plugin"},"D\xe9pendances du Plugin"),(0,a.kt)("p",null,"Afin de r\xe9cup\xe9rer les informations n\xe9cessaires via les APIs AWS, il est possible d'utiliser soit le binaire ",(0,a.kt)("em",{parentName:"p"},"awscli")," fourni par Amazon, soit le SDK Perl ",(0,a.kt)("em",{parentName:"p"},"paws"),". Le SDK est recommand\xe9 car plus performant. "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Attention")," il n'est pas possible d'utiliser ",(0,a.kt)("em",{parentName:"p"},"paws")," si la connexion s'effectue au travers d'un proxy.")),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"perl-Paws-installation",label:"perl-Paws-installation",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install perl-Paws\n"))),(0,a.kt)(s.Z,{value:"aws-cli-installation",label:"aws-cli-installation",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"\nunzip awscliv2.zip\nsudo ./aws/install\n')))),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources ",(0,a.kt)("strong",{parentName:"li"},"SNS")," :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Aws-Sns-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface web de Centreon, installez le connecteur de supervision ",(0,a.kt)("strong",{parentName:"li"},"Amazon SNS")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),"."))),(0,a.kt)(s.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources ",(0,a.kt)("strong",{parentName:"li"},"SNS")," :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Aws-Sns-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur le serveur central Centreon, installez le RPM du connecteur de supervision ",(0,a.kt)("strong",{parentName:"li"},"Amazon SNS")," :")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-aws-sns\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface web de Centreon, installez le connecteur de supervision ",(0,a.kt)("strong",{parentName:"li"},"Amazon SNS")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Packs de plugins"),".")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ajoutez un h\xf4te \xe0 Centreon depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes"),"."),(0,a.kt)("li",{parentName:"ul"},"Remplissez le champ ",(0,a.kt)("strong",{parentName:"li"},"Adresse IP/DNS")," avec l'adresse ",(0,a.kt)("strong",{parentName:"li"},"127.0.0.1"),"."),(0,a.kt)("li",{parentName:"ul"},"Appliquez le mod\xe8le d'h\xf4te ",(0,a.kt)("strong",{parentName:"li"},"Cloud-Aws-Sns-custom"),"."),(0,a.kt)("li",{parentName:"ul"},"Une fois le mod\xe8le appliqu\xe9, les Macros ci-dessous indiqu\xe9es comme requises (",(0,a.kt)("em",{parentName:"li"},"Mandatory"),") doivent \xeatre renseign\xe9es:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSSECRETKEY"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWS Secret key of your IAM role. Password checkbox must be checked")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSACESSKEY"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWS Access key of your IAM role. Password checkbox must be checked")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSREGION"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Region where the instance is running")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSCUSTOMMODE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Custom mode to get metrics, 'awscli' is the default, you can also use 'paws' perl library")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"PROXYURL"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Configure proxy URL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"TOPICNAME"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Topic name (Default : '.*')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command line (eg. a --verbose flag)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"DUMMYSTATUS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Host state. Default is OK, do not modify it unless you know what you are doing")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"DUMMYOUTPUT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Host check output. Default is 'This is a dummy check'. Customize it with your own if needed")))),(0,a.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le plugin et que signifient les options des commandes ?"),(0,a.kt)("p",null,"Une fois le plugin install\xe9, vous pouvez tester celui-ci directement en ligne\nde commande depuis votre collecteur Centreon en vous connectant avec\nl'utilisateur ",(0,a.kt)("strong",{parentName:"p"},"centreon-engine")," (",(0,a.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),")\n(certaines options comme ",(0,a.kt)("inlineCode",{parentName:"p"},"--proxyurl")," doivent \xeatre ajust\xe9es en fonction du contexte) :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_aws_sns_api.pl \\\n    --plugin=cloud::aws::sns::plugin \\\n    --mode=notifications \\\n    --custommode=awscli \\\n    --aws-secret-key='*******************' \\\n    --aws-access-key='**********' \\\n    --region='eu-west-1' \\\n    --proxyurl='http://myproxy.mycompany.org:8080'\n    --statistic=sum \\\n    --timeframe='600' \\\n    --period='60' \\\n    --topic-name='my_sns_topic_1' \\\n    --filter-metric='NumberOfNotificationsFailed' \\\n    --warning-notifications-failed=0 \\\n    --critical-notifications-failed=5 \\\n    --verbose\n")),(0,a.kt)("p",null,"La commande devrait retourner un message de sortie de la forme ci-dessous:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"OK: 'my_sns_topic_1' Statistic 'Sum' number of notifications failed: 0 | 'my_sns_topic_1~sum#sns.notifications.failed.count'=0;;;;\nNotifications for topic 'my_sns_topic_1' :\n    Statistic 'Sum' number of notifications failed: 0 \n")),(0,a.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification peut \xeatre\naffich\xe9e en ajoutant le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_aws_sns_api.pl \\\n    --plugin=cloud::aws::sns::plugin \\\n    --mode=notifications \\\n    --help\n")),(0,a.kt)("p",null,"Tous les modes disponibles peuvent \xeatre affich\xe9s en ajoutant le param\xe8tre\n",(0,a.kt)("inlineCode",{parentName:"p"},"--list-mode")," \xe0 la commande :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_aws_sns_api.pl \\\n    --plugin=cloud::aws::sns::plugin \\\n    --list-mode\n")),(0,a.kt)("h3",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,a.kt)("p",null,"Rendez-vous sur la ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"documentation d\xe9di\xe9e"),"\npour le diagnostic des erreurs communes des plugins Centreon."))}f.isMDXComponent=!0},34687:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cloud-aws-sns-provider-cf0c5589f34ba360fe0d6aabb892d950.png"}}]);