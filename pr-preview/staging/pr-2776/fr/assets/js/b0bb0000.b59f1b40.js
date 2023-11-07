"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[32662],{56711:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>u,metadata:()=>c,toc:()=>d});n(67294);var a=n(3905),r=n(51715),s=n(7626);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const u={id:"cloud-aws-ses",title:"Amazon SES"},p=void 0,c={unversionedId:"integrations/plugin-packs/procedures/cloud-aws-ses",id:"integrations/plugin-packs/procedures/cloud-aws-ses",title:"Amazon SES",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-aws-ses.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-aws-ses",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/cloud-aws-ses",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-aws-ses.md",tags:[],version:"current",frontMatter:{id:"cloud-aws-ses",title:"Amazon SES"},sidebar:"pp",previous:{title:"Amazon S3",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/cloud-aws-s3"},next:{title:"Amazon SNS",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/pp/integrations/plugin-packs/procedures/cloud-aws-sns"}},m={},d=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du connecteur de supervision",id:"contenu-du-connecteur-de-supervision",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Privil\xe8ge AWS",id:"privil\xe8ge-aws",level:3},{value:"D\xe9pendances du Plugin",id:"d\xe9pendances-du-plugin",level:3},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4te",id:"h\xf4te",level:3},{value:"FAQ",id:"faq",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:3},{value:"J&#39;obtiens le message d&#39;erreur suivant:",id:"jobtiens-le-message-derreur-suivant",level:4},{value:"<code>UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values</code>",id:"unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values",level:4},{value:"<code>UNKNOWN: Command error:  - An error occurred (AuthFailure) [...]</code>",id:"unknown-command-error----an-error-occurred-authfailure-",level:4},{value:"<code>UNKNOWN: 500 Can&#39;t connect to monitoring.eu-west-1.amazonaws.com:443 |</code>",id:"unknown-500-cant-connect-to-monitoringeu-west-1amazonawscom443-",level:4}],k={toc:d},g="wrapper";function f(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)(g,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){l(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"vue-densemble"},"Vue d'ensemble"),(0,a.kt)("p",null,"Amazon Simple Email Service (SES) est un service de messagerie \xe9lectronique\nrentable, flexible et \xe9volutif qui permet aux d\xe9veloppeurs d'envoyer des\nmessages \xe0 partir de n'importe quelle application."),(0,a.kt)("p",null,"Les m\xe9triques Amazon SES rapport\xe9es dans CloudWatch ne sont pas factur\xe9es. Elles sont fournies dans le cadre du service Amazon SES."),(0,a.kt)("p",null,"Le connecteur de supervision Centreon ",(0,a.kt)("em",{parentName:"p"},"Amazon SES")," s'appuie sur les APIs Amazon Cloudwatch pour la collecte des donn\xe9es et m\xe9triques relatives au service Amazon SES."),(0,a.kt)("h2",{id:"contenu-du-connecteur-de-supervision"},"Contenu du connecteur de supervision"),(0,a.kt)("h3",{id:"objets-supervis\xe9s"},"Objets supervis\xe9s"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Activit\xe9 d'envoi SES")),(0,a.kt)("h3",{id:"m\xe9triques-collect\xe9es"},"M\xe9triques collect\xe9es"),(0,a.kt)("p",null,"Plus de d\xe9tails sur les m\xe9triques pr\xe9sent\xe9es ci-apr\xe8s sont disponibles sur la\ndocumentation officielle du service Amazon SES :\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/fr_fr/ses/latest/DeveloperGuide/monitor-sending-activity"},"https://docs.aws.amazon.com/fr_fr/ses/latest/DeveloperGuide/monitor-sending-activity")),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"Ses-Emails",label:"Ses-Emails",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ses.emails.sent.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of sent emails")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ses.emails.delivered.count"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of successfully delivered emails")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ses.emails.rejected.rate"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Rate of rejected emails")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ses.emails.spam.rate"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Rate of emails marked as spam")))))),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("h3",{id:"privil\xe8ge-aws"},"Privil\xe8ge AWS"),(0,a.kt)("p",null,"Un compte de service (paire d'identifiants ",(0,a.kt)("em",{parentName:"p"},"access/secret keys"),") est n\xe9cessaire\nafin de pouvoir superviser les resources Amazon SES. Ce compte doit b\xe9n\xe9ficier\ndes privil\xe8ges suivants :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"AWS Privilege"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"cloudwatch:getMetricStatistics"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Get metrics values from Cloudwatch AWS/SES namespace")))),(0,a.kt)("h3",{id:"d\xe9pendances-du-plugin"},"D\xe9pendances du Plugin"),(0,a.kt)("p",null,"Afin de r\xe9cup\xe9rer les informations n\xe9cessaires via les APIs AWS, il est possible\nd'utiliser soit le binaire ",(0,a.kt)("em",{parentName:"p"},"awscli"),", soit le SDK perl ",(0,a.kt)("em",{parentName:"p"},"Paws"),". Le SDK est\nrecommand\xe9 car plus performant. "),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"perl-Paws-installation",label:"perl-Paws-installation",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install perl-Paws\n"))),(0,a.kt)(s.Z,{value:"aws-cli-installation",label:"aws-cli-installation",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install awscli\n")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Attention")," il n'est pas possible pour le moment d'utiliser perl Paws si la\nconnexion s'effectue au travers d'un proxy.")),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon devant superviser des ressources Amazon SES:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Aws-Ses-Api\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Amazon SES")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision")))),(0,a.kt)(s.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon devant superviser des ressources Amazon SES:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Cloud-Aws-Ses-Api\n")),(0,a.kt)("p",null,"2.Sur le serveur Central Centreon, installer le RPM du connecteur de supervision ",(0,a.kt)("em",{parentName:"p"},"Amazon SES"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-cloud-aws-ses.noarch\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Sur l'interface Web de Centreon, installer le connecteur de supervision ",(0,a.kt)("em",{parentName:"li"},"Amazon SES")," depuis la page ",(0,a.kt)("strong",{parentName:"li"},"Configuration > Gestionnaire de connecteurs de supervision"))))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"h\xf4te"},"H\xf4te"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ajoutez un H\xf4te \xe0 Centreon et appliquez-lui le Mod\xe8le d'H\xf4te ",(0,a.kt)("em",{parentName:"li"},"Cloud-Aws-Ses-custom"),"."),(0,a.kt)("li",{parentName:"ul"},"Une fois le mod\xe8le appliqu\xe9, les Macros ci-dessous indiqu\xe9es comme requises (",(0,a.kt)("em",{parentName:"li"},"Mandatory"),") doivent \xeatre renseign\xe9es:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Nom"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSSECRETKEY"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWS Secret key of your IAM role. Password checkbox must be checked")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSACESSKEY"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWS Access key of your IAM role. Password checkbox must be checked")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSREGION"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Region where the instance is running")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"X"),(0,a.kt)("td",{parentName:"tr",align:"left"},"AWSCUSTOMMODE"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Custom mode to get metrics, 'awscli' is the default, you can also use 'paws' perl library")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"PROXYURL"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Configure proxy URL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any extra option you may want to add to every command","_","line (eg. a --verbose flag)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"DUMMYSTATUS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Host state. Default is OK, do not modify it unless you know what you are doing")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"DUMMYOUTPUT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Host check output. Default is 'This is a dummy check'. Customize it with your own if needed")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,a.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de\ncommande depuis votre collecteur Centreon en vous connectant avec l'utilisateur\n",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," (certaines options comme ",(0,a.kt)("inlineCode",{parentName:"p"},"--proxyurl")," doivent \xeatre\najust\xe9es en fonction du contexte):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_aws_ses_api.pl \\\n    --plugin=cloud::aws::ses::plugin \\\n    --mode=email \\\n    --custommode=awscli \\\n    --aws-secret-key='*******************' \\\n    --aws-access-key='**********' \\\n    --region='eu-west-1' \\\n    --proxyurl='http://myproxy.mycompany.org:8080' \\\n    --timeframe='600' \\\n    --period='60' \\\n    --critical-emails-spam=1: \\\n    --verbose\n")),(0,a.kt)("p",null,"La commande devrait retourner un message de sortie de la forme ci-dessous : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," OK: 'SES' Statistic 'Average' Metrics rate of rejected sent emails: 0.00, number of emails successfully delivered: 30.00, rate of sent emails marked as spam: 0.00, number of sent emails: 30.00 | 'SES~average#ses.emails.rejected.rate'=0;;;; 'SES~average#ses.emails.delivered.count'=30;;;; 'SES~average#ses.emails.spam.rate'=0;;;; 'SES~average#ses.emails.sent.count'=30;;;;\n")),(0,a.kt)("p",null,"La commande ci-dessus collecte les m\xe9triques d'envoi d'Amazon SES\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=emails"),"). Cette ressource SES est h\xe9berg\xe9e dans la r\xe9gion AWS\n",(0,a.kt)("em",{parentName:"p"},"eu-west-1")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--region='eu-west-1'"),"). La connexion \xe0 l'API Cloudwatch\ns'effectue \xe0 l'aide des identifiants ",(0,a.kt)("em",{parentName:"p"},"aws-secret-key")," et ",(0,a.kt)("em",{parentName:"p"},"aws-access-key"),"\npr\xe9alablement configur\xe9s sur la console AWS\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--aws-secret-key='****' --aws-access-key='****'"),"). "),(0,a.kt)("p",null,"Les m\xe9triques retourn\xe9es seront une moyenne sur un intervalle de\n10 minutes / 600 secondes  (",(0,a.kt)("inlineCode",{parentName:"p"},"--timeframe='600'"),") avec un point par\nminute / 60 secondes (",(0,a.kt)("inlineCode",{parentName:"p"},"--period='60'"),"). Dans l'exemple ci-dessus,\non choisit de ne r\xe9cup\xe9rer que les statistiques sur le nombre de messages ",(0,a.kt)("em",{parentName:"p"},"sent")," et ",(0,a.kt)("em",{parentName:"p"},"received")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--filter-metric='NumberOfMessagesSent|NumberOfMessagesReceived'"),")."),(0,a.kt)("p",null,"Une alarme CRITICAL sera d\xe9clench\xe9e si au moins un message envoy\xe9 est marqu\xe9\ncomme 'spam' durant la p\xe9riode de temps sur lesquelles sont calcul\xe9es les\nvaleurs (",(0,a.kt)("inlineCode",{parentName:"p"},"--critical-emails-spam=1:"),")."),(0,a.kt)("p",null,"La liste de toutes les m\xe9triques, seuils associ\xe9s et options compl\xe9mentaires\npeut \xeatre affich\xe9e en ajoutant le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_aws_ses_api.pl \\\n    --plugin=cloud::aws::ses::plugin \\\n    --mode=emails \\\n    --help\n")),(0,a.kt)("h4",{id:"jobtiens-le-message-derreur-suivant"},"J'obtiens le message d'erreur suivant:"),(0,a.kt)("h4",{id:"unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values")),(0,a.kt)("p",null,"Lors du d\xe9ploiement de mes contr\xf4les, j'obtiens le message suivant 'UNKNOWN: No\nmetrics. Check your options or use --zeroed option to set 0 on undefined values'. "),(0,a.kt)("p",null,"Cela signifie qu'Amazon Cloudwatch n'a pas consolid\xe9 de donn\xe9es sur la p\xe9riode."),(0,a.kt)("p",null,"Vous pouvez ajouter ",(0,a.kt)("inlineCode",{parentName:"p"},"--zeroed")," \xe0 la macro ",(0,a.kt)("strong",{parentName:"p"},"EXTRAOPTIONS")," du ",(0,a.kt)("em",{parentName:"p"},"Service")," en\nquestion afin de forcer le stockage d'un 0 et ainsi \xe9viter un statut UNKNOWN."),(0,a.kt)("h4",{id:"unknown-command-error----an-error-occurred-authfailure-"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: Command error:  - An error occurred (AuthFailure) [...]")),(0,a.kt)("p",null,"Cette erreur signifie que le r\xf4le IAM associ\xe9 au combo access-key/secret-key n'a\npas les droits suffisants pour r\xe9aliser une op\xe9ration donn\xe9e."),(0,a.kt)("h4",{id:"unknown-500-cant-connect-to-monitoringeu-west-1amazonawscom443-"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 500 Can't connect to monitoring.eu-west-1.amazonaws.com:443 |")),(0,a.kt)("p",null,"Lors du d\xe9ploiement de mes contr\xf4les, j'obtiens le message suivant :\n",(0,a.kt)("inlineCode",{parentName:"p"},"UNKNOWN: 500 Can't connect to monitoring.eu-west-1.amazonaws.com:443 |"),"."),(0,a.kt)("p",null,"Cela signifie que Centreon n'a pas r\xe9ussi \xe0 se connecter \xe0 l'API AWS Cloudwatch."),(0,a.kt)("p",null,"Si l'utilisation d'un proxy est requise pour les connexions HTTP depuis le\ncollecteur Centreon, il est n\xe9cessaire de le pr\xe9ciser dans la commande en\nutilisant l'option ",(0,a.kt)("inlineCode",{parentName:"p"},"--proxyurl='http://proxy.mycompany.com:8080'"),"."))}f.isMDXComponent=!0}}]);