"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[12607],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},80310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>c});n(67294);var a=n(3905),r=n(67709),l=n(7626);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"cloud-aws-ebs",title:"Amazon EBS"},u=void 0,p={unversionedId:"integrations/plugin-packs/procedures/cloud-aws-ebs",id:"integrations/plugin-packs/procedures/cloud-aws-ebs",title:"Amazon EBS",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-aws-ebs.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-aws-ebs",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/cloud-aws-ebs",draft:!1,tags:[],version:"current",frontMatter:{id:"cloud-aws-ebs",title:"Amazon EBS"},sidebar:"pp",previous:{title:"Amazon CloudWatch Logs",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/cloud-aws-cloudwatchlogs"},next:{title:"Amazon EC2",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/cloud-aws-ec2"}},d={},c=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du Plugin-Pack",id:"contenu-du-plugin-pack",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"R\xe8gles de d\xe9couvertes",id:"r\xe8gles-de-d\xe9couvertes",level:3},{value:"M\xe9triques supervis\xe9es",id:"m\xe9triques-supervis\xe9es",level:2},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Privil\xe8ges AWS",id:"privil\xe8ges-aws",level:3},{value:"D\xe9pendances du Plugin",id:"d\xe9pendances-du-plugin",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment puis-je tester le Plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:3},{value:"J&#39;obtiens le message d&#39;erreur suivant:",id:"jobtiens-le-message-derreur-suivant",level:3},{value:"<code>UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values</code>",id:"unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values",level:4},{value:"<code>UNKNOWN: Command error:  - An error occurred (AuthFailure) [...]</code>",id:"unknown-command-error----an-error-occurred-authfailure-",level:4},{value:"<code>UNKNOWN: Command error:  - An error occurred (InvalidParameterValue) [...]</code>",id:"unknown-command-error----an-error-occurred-invalidparametervalue-",level:4}],m={toc:c};function k(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",o({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",o({},{id:"vue-densemble"}),"Vue d'ensemble"),(0,a.kt)("p",null,"Amazon Elastic Block Store (EBS) est un service de stockage par bloc hautes performances et simple d'utilisation con\xe7u en vue d'une utilisation avec Amazon Elastic Compute Cloud (EC2)\npour les charges de travail exigeantes en d\xe9bit et en transactions \xe0 n'importe quelle \xe9chelle.\nDes charges de travail vari\xe9es, telles que des bases de donn\xe9es relationnelles et non relationnelles, des applications d'entreprise, des applications conteneuris\xe9es, des moteurs d'analyse Big Data,\ndes syst\xe8mes de fichiers et des workflows multim\xe9dias, sont largement d\xe9ploy\xe9es sur Amazon EBS."),(0,a.kt)("p",null,"Le Plugin Centreon Amazon EBS utilise l'API Amazon Cloudwatch pour collecter les m\xe9triques associ\xe9es."),(0,a.kt)("h2",o({},{id:"contenu-du-plugin-pack"}),"Contenu du Plugin-Pack"),(0,a.kt)("h3",o({},{id:"objets-supervis\xe9s"}),"Objets supervis\xe9s"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Volumes EBS: standard, gp2, st1, sc1 & io1")),(0,a.kt)("h3",o({},{id:"r\xe8gles-de-d\xe9couvertes"}),"R\xe8gles de d\xe9couvertes"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Hosts",label:"Hosts",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Rule name"),(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Cloud-Aws-Ebs-Api-HostDiscovery"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"D\xe9couverte de vos volumes EBS"))))),(0,a.kt)(l.Z,{value:"Services",label:"Services",mdxType:"TabItem"},(0,a.kt)("p",null,"Aucune r\xe8gle de d\xe9couverte de service n'est associ\xe9e \xe0 ce Plugin-Pack. "))),(0,a.kt)("h2",o({},{id:"m\xe9triques-supervis\xe9es"}),"M\xe9triques supervis\xe9es"),(0,a.kt)("p",null,"Les m\xe9triques pr\xe9sent\xe9es ci-apr\xe8s sont \xe9galement d\xe9taill\xe9es dans la documentation officielle du service EBS:\n",(0,a.kt)("a",o({parentName:"p"},{href:"https://docs.aws.amazon.com/fr_fr/AWSEC2/latest/UserGuide/using_cloudwatch_ebs"}),"https://docs.aws.amazon.com/fr_fr/AWSEC2/latest/UserGuide/using_cloudwatch_ebs")),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Ebs-Volume-Io",label:"Ebs-Volume-Io",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"VolumeReadBytes"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Provides information on the read operations in a specified period of time. Unit: Bytes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"VolumeWriteBytes"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Provides information on the write operations in a specified period of time. Unit: Bytes"))))),(0,a.kt)(l.Z,{value:"Ebs-Iops",label:"Ebs-Iops",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"VolumeReadOps"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"The total number of read operations in a specified period of time. Unit: Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"VolumeWriteOps"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"The total number of write operations in a specified period of time. Unit: Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"VolumeThroughputPercentage"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"The percentage of I/O operations per second (IOPS) delivered of the total IOPS provisioned for an Amazon EBS volume. Unit: Percent")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"VolumeConsumedReadWriteOps"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"The total amount of read and write operations (normalized to 256K capacity units) consumed in a specified period of time. Unit: Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"VolumeQueueLength"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"The number of read and write operation requests waiting to be completed in a specified period of time. Unit: Count"))))),(0,a.kt)(l.Z,{value:"Ebs-Time",label:"Ebs-Time",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"VolumeTotalReadTime"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"The total number of seconds spent by all read operations that completed in a specified period of time. Unit: Seconds")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"VolumeTotalWriteTime"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"The total number of seconds spent by all write operations that completed in a specified period of time. Unit: Seconds")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"VolumeIdleTime"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"The total number of seconds in a specified period of time when no read or write operations were submitted. Unit: Seconds")))))),(0,a.kt)("h2",o({},{id:"pr\xe9requis"}),"Pr\xe9requis"),(0,a.kt)("h3",o({},{id:"privil\xe8ges-aws"}),"Privil\xe8ges AWS"),(0,a.kt)("p",null,"Voici la liste des droits n\xe9cessaires au travers des ",(0,a.kt)("em",{parentName:"p"},"access/secret keys")," utilis\xe9es pour pouvoir impl\xe9menter la supervision des ressources Amazon EBS: "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"AWS Privilege"),(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"ec2:DescribeVolumes"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Describes the specified EBS volumes or all of your EBS volumes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"cloudwatch:getMetricStatistics"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Get metrics from the AWS/EBS namespace on Cloudwatch")))),(0,a.kt)("h3",o({},{id:"d\xe9pendances-du-plugin"}),"D\xe9pendances du Plugin"),(0,a.kt)("p",null,"Afin de r\xe9cup\xe9rer les informations n\xe9cessaires via les APIs AWS, il est possible d'utiliser soit le binaire ",(0,a.kt)("em",{parentName:"p"},"awscli")," fourni par Amazon, soit le SDK Perl ",(0,a.kt)("em",{parentName:"p"},"paws"),".\nLe SDK est recommand\xe9 car plus performant. "),(0,a.kt)("p",null,"Installez le binaire choisi en lan\xe7ant l'une des commandes suivantes:"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"perl-Paws-installation",label:"perl-Paws-installation",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yum install perl-Paws\n"))),(0,a.kt)(l.Z,{value:"aws-cli-installation",label:"aws-cli-installation",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yum install awscli\n")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Attention")," il n'est actuellement ",(0,a.kt)("strong",{parentName:"p"},"pas")," possible d'utiliser ",(0,a.kt)("em",{parentName:"p"},"paws")," dans les cas suivants:"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"si la connexion s'effectue au travers d'un proxy."),(0,a.kt)("li",{parentName:"ul"},"utilisation de la fonctionnalit\xe9 de ",(0,a.kt)("em",{parentName:"li"},"D\xe9couverte d'H\xf4te")," dans Centreon."))),(0,a.kt)("h2",o({},{id:"installation"}),"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources Amazon EBS:")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Cloud-Aws-Ebs-Api\n")),(0,a.kt)("ol",o({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"Dans l'interface Centreon, installer le Plugin-Pack 'Amazon EBS' depuis la page \"Configuration > Plugin Packs > Manager\""))),(0,a.kt)(l.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources Amazon EBS:")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Cloud-Aws-Ebs-Api\n")),(0,a.kt)("ol",o({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le RPM du Plugin-Pack 'Amazon EBS':")),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yum install centreon-pack-cloud-aws-ebs.noarch\n")),(0,a.kt)("ol",o({},{start:3}),(0,a.kt)("li",{parentName:"ol"},"Dans l'interface Web de Centreon, installer le Plugin-Pack 'Amazon EBS' depuis la page \"Configuration > Plugin Packs > Manager\"")))),(0,a.kt)("h2",o({},{id:"configuration"}),"Configuration"),(0,a.kt)("p",null,"Lorsque vous ajoutez un H\xf4te \xe0 Centreon, choisissez le mod\xe8le ",(0,a.kt)("em",{parentName:"p"},"Cloud-Aws-Ebs-Custom"),". Une fois celui-ci appliqu\xe9, certaines Macros li\xe9es\n\xe0 l'H\xf4te doivent \xeatre renseign\xe9es:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Mandatory"),(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Nom"),(0,a.kt)("th",o({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"AWSSECRETKEY"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"AWS Secret key of your IAM role. Password checkbox must be checked")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"AWSACESSKEY"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"AWS Access key of your IAM role. Password checkbox must be checked")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"AWSREGION"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Region where the instance is running")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"AWSCUSTOMMODE"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Custom mode to get metrics, 'awscli' is the default, you can also use 'paws' perl library")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"AWSVOLUMEID"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"EBS Volume ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"})),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"PROXYURL"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Configure proxy URL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"})),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"EXTRAOPTIONS"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Any extra option you may want to add to every command","_","line (eg. a --verbose flag)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"})),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"DUMMYSTATUS"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Host state. Default is OK, do not modify it unless you know what you are doing")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",o({parentName:"tr"},{align:"left"})),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"DUMMYOUTPUT"),(0,a.kt)("td",o({parentName:"tr"},{align:"left"}),"Host check output. Default is 'This is a dummy check'. Customize it with your own if needed")))),(0,a.kt)("h2",o({},{id:"faq"}),"FAQ"),(0,a.kt)("h3",o({},{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"}),"Comment puis-je tester le Plugin et que signifient les options des commandes ?"),(0,a.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur ",(0,a.kt)("em",{parentName:"p"},"centreon-engine"),"\n(certaines options comme ",(0,a.kt)("inlineCode",{parentName:"p"},"volume-id")," ou ",(0,a.kt)("inlineCode",{parentName:"p"},"proxyurl")," doivent \xeatre ajust\xe9es en fonction du contexte):"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins//centreon_aws_ebs_api.pl \\\n    --plugin=cloud::aws::ebs::plugin \\\n    --mode=volumeio \\\n    --custommode='awscli' \\\n    --aws-secret-key='***' \\\n    --aws-access-key='***' \\\n    --region='eu-west-1' \\\n    --proxyurl='http://myproxy.mycompany.org:8080' \\\n    --volume-id='vol-1234abcd' \\\n    --statistic='average' \\\n    --timeframe='600' \\\n    --period='60' \\\n    --warning-volume-write-bytes='60000000' \\\n    --critical-volume-write-bytes='90000000' \\\n    -- verbose\n")),(0,a.kt)("p",null,"La commande retourne le message de sortie ci-dessous:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"OK: 'vol-1234abcd' Statistic 'Average' Metrics Volume Read Bytes: 28.40 KB, Volume Write Bytes: 54.61 MB | \n'vol-1234abcd~average#ebs.volume.bytes.read.bytes'=29081.60B;;;; 'vol-1234abcd~average#ebs.volume.bytes.write.bytes'=57261465.60B;0:60000000;0:90000000;;\nAWS EBS Volume'vol-1234abcd'\n    Statistic 'Average' Metrics Volume Read Bytes: 28.40 KB, Volume Write Bytes: 54.61 MB\n")),(0,a.kt)("p",null,"Cette commande supervise les IOs d'un volume EBS (",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=volumeio"),") rattach\xe9 \xe0 la r\xe9gion ",(0,a.kt)("em",{parentName:"p"},"eu-west-1")," d'AWS (",(0,a.kt)("inlineCode",{parentName:"p"},"--region='eu-west-1'"),")\net ayant pour ID ",(0,a.kt)("em",{parentName:"p"},"vol-1234abcd")," (",(0,a.kt)("inlineCode",{parentName:"p"},"--volume-id='vol-1234abcd'"),")."),(0,a.kt)("p",null,"La m\xe9trique obtenue est une moyenne de valeurs (",(0,a.kt)("inlineCode",{parentName:"p"},"--statistic='average'"),") sur un intervalle de 10 minutes / 600 secondes  (",(0,a.kt)("inlineCode",{parentName:"p"},"--timeframe='600'"),") avec un point par minute / 60 secondes (",(0,a.kt)("inlineCode",{parentName:"p"},"--period='60'"),")."),(0,a.kt)("p",null,"Une alerte WARNING sera d\xe9clench\xe9e si la moyenne des \xe9criture sur le volume pour la p\xe9riode donn\xe9e est sup\xe9rieure \xe0 60MB, et CRITICAL si elle est sup\xe9rieure \xe0 90MB.\n(",(0,a.kt)("inlineCode",{parentName:"p"},"--warning-volume-write-bytes='60000000' --critical-volume-write-bytes='90000000'"),")."),(0,a.kt)("p",null,"Pour chaque mode, les options disponibles peuvent \xeatre consult\xe9es en ajoutant l'option ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins/centreon_aws_ebs_api.pl --plugin=cloud::aws::ebs::plugin --mode=volumeio --help\n")),(0,a.kt)("h3",o({},{id:"jobtiens-le-message-derreur-suivant"}),"J'obtiens le message d'erreur suivant:"),(0,a.kt)("h4",o({},{id:"unknown-no-metrics-check-your-options-or-use---zeroed-option-to-set-0-on-undefined-values"}),(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values")),(0,a.kt)("p",null,"Lors du d\xe9ploiement de mes contr\xf4les, j'obtiens le message suivant 'UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values'. "),(0,a.kt)("p",null,"Cela signifie qu'Amazon Cloudwatch n'a pas consolid\xe9 de donn\xe9es sur la p\xe9riode."),(0,a.kt)("p",null,"Vous pouvez ajouter ",(0,a.kt)("inlineCode",{parentName:"p"},"--zeroed")," \xe0 la macro ",(0,a.kt)("strong",{parentName:"p"},"EXTRAOPTIONS")," du ",(0,a.kt)("em",{parentName:"p"},"Service")," en question afin de forcer le stockage d'un 0 et ainsi \xe9viter un statut UNKNOWN."),(0,a.kt)("h4",o({},{id:"unknown-command-error----an-error-occurred-authfailure-"}),(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: Command error:  - An error occurred (AuthFailure) [...]")),(0,a.kt)("p",null,"Cette erreur signifie que le r\xf4le IAM associ\xe9 au combo access-key/secret-key n'a pas les droits suffisants pour r\xe9aliser une op\xe9ration donn\xe9e."),(0,a.kt)("h4",o({},{id:"unknown-command-error----an-error-occurred-invalidparametervalue-"}),(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: Command error:  - An error occurred (InvalidParameterValue) [...]")),(0,a.kt)("p",null,"Le plus souvent, cette erreur est le r\xe9sultat d'une erreur dans le nom de l'\xe9l\xe9ment supervis\xe9 (option ",(0,a.kt)("inlineCode",{parentName:"p"},"--volume-id"),")."))}k.isMDXComponent=!0},7626:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i({children:e,hidden:t,className:n}){return a.createElement("div",o({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},67709:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(67294),r=n(86010),l=n(90980),o=n(35715),i=n(8854),s=n(8241);const u="tabList__CuJ",p="tabItem_LNqP";function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function c(e){var t;const{lazy:n,block:l,defaultValue:c,values:m,groupId:k,className:f}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=m?m:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),v=(0,o.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var N;const y=null===c?c:null!==(N=null!=c?c:null===(t=g.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==N?N:g[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:w}=(0,i.U)(),[C,O]=(0,a.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,s.o5)();if(null!=k){const e=h[k];null!=e&&e!==C&&b.some((t=>t.value===e))&&O(e)}const A=e=>{const t=e.currentTarget,n=T.indexOf(t),a=b[n].value;a!==C&&(E(t),O(a),null!=k&&w(k,String(a)))},S=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;var n;t=null!==(n=T[a])&&void 0!==n?n:T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;var a;t=null!==(a=T[n])&&void 0!==a?a:T[T.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},f)},b.map((({value:e,label:t,attributes:n})=>a.createElement("li",d({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>T.push(e),onKeyDown:S,onFocus:A,onClick:A},n,{className:(0,r.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":C===e})}),null!=t?t:e)))),n?(0,a.cloneElement)(g.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function m(e){const t=(0,l.Z)();return a.createElement(c,d({key:String(t)},e))}}}]);