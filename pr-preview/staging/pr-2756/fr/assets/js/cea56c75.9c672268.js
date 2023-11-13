"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[21110],{39125:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>k,frontMatter:()=>p,metadata:()=>d,toc:()=>m});r(67294);var n=r(3905),a=r(51715),l=r(7626);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const p={id:"upgrade",title:"Monter de version l'extension"},u=void 0,d={unversionedId:"reporting/upgrade",id:"version-23.10/reporting/upgrade",title:"Monter de version l'extension",description:"Lors d'une mont\xe9e de version = 18.10.x, vous devez:",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/reporting/upgrade.md",sourceDirName:"reporting",slug:"/reporting/upgrade",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/reporting/upgrade",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/reporting/upgrade.md",tags:[],version:"23.10",lastUpdatedAt:1699633150,formattedLastUpdatedAt:"10 nov. 2023",frontMatter:{id:"upgrade",title:"Monter de version l'extension"},sidebar:"version-23.10/docs",previous:{title:"Mise \xe0 jour de l'extension",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/reporting/update"},next:{title:"Migrer l'extension",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/reporting/migrate"}},c={},m=[{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Monter de version le serveur central",id:"monter-de-version-le-serveur-central",level:3},{value:"Mettre \xe0 jour la cl\xe9 de signature RPM",id:"mettre-\xe0-jour-la-cl\xe9-de-signature-rpm",level:3},{value:"\xc9tape 1 : Mont\xe9e de version du paquet",id:"\xe9tape-1--mont\xe9e-de-version-du-paquet",level:2},{value:"\xc9tape 2 : Mettre \xe0 jour l&#39;interface",id:"\xe9tape-2--mettre-\xe0-jour-linterface",level:2},{value:"\xc9tape 3 : Mettre \xe0 jour le serveur de reporting",id:"\xe9tape-3--mettre-\xe0-jour-le-serveur-de-reporting",level:2},{value:"Pr\xe9requis de la version Java",id:"pr\xe9requis-de-la-version-java",level:3},{value:"Proc\xe9dure de mont\xe9e de version",id:"proc\xe9dure-de-mont\xe9e-de-version",level:3},{value:"\xc9tape 4 : mise \xe0 jour de MariaDB",id:"\xe9tape-4--mise-\xe0-jour-de-mariadb",level:2}],v={toc:m},g="wrapper";function k(e){var{components:t}=e,r=s(e,["components"]);return(0,n.kt)(g,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},v,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Lors d'une mont\xe9e de version < 18.10.x vers une version >= 18.10.x, vous devez:"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"R\xe9cup\xe9rer une nouvelle licence via le support Centreon"),(0,n.kt)("li",{parentName:"ul"},"Vous assurer que votre serveur de reporting est bas\xe9 sur CentOS 7. Si ce n'est\npas le cas, utilisez la proc\xe9dure de ",(0,n.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/reporting/migrate"},"migration de votre serveur de\nreporting")))),(0,n.kt)("p",null,"La mont\xe9e de version de Centreon MBI se fait en 4 \xe9tapes :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Mont\xe9e de version du d\xe9p\xf4t RPM"),(0,n.kt)("li",{parentName:"ul"},"Mise \xe0 jour de Centreon MBI server (interface)"),(0,n.kt)("li",{parentName:"ul"},"Mise \xe0 jour du serveur de reporting"),(0,n.kt)("li",{parentName:"ul"},"Mise \xe0 jour de la base MariaDB")),(0,n.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,n.kt)("h3",{id:"monter-de-version-le-serveur-central"},"Monter de version le serveur central"),(0,n.kt)("p",null,"Voir ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/upgrade/introduction"},"Introduction \xe0 la mont\xe9e de version"),"."),(0,n.kt)("h3",{id:"mettre-\xe0-jour-la-cl\xe9-de-signature-rpm"},"Mettre \xe0 jour la cl\xe9 de signature RPM"),(0,n.kt)("p",null,"Sous EL8, pour des raisons de s\xe9curit\xe9, les cl\xe9s utilis\xe9es pour signer les RPMs Centreon sont chang\xe9es r\xe9guli\xe8rement. Le dernier changement a eu lieu le 14 octobre 2021. Lorsque vous mettez Centreon \xe0 jour depuis une version plus ancienne, vous devez suivre la ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/security/key-rotation#installation-existante"},"proc\xe9dure de changement de cl\xe9"),", afin de supprimer l'ancienne cl\xe9 et d'installer la nouvelle."),(0,n.kt)("h2",{id:"\xe9tape-1--mont\xe9e-de-version-du-paquet"},"\xc9tape 1 : Mont\xe9e de version du paquet"),(0,n.kt)("p",null,"Lors d'une mont\xe9e de version majeure (ex: 20.10.x \xe0 23.04.x) il faut en premier lieu mettre \xe0 jour\nle d\xe9p\xf4t contenant les paquets. "),(0,n.kt)("p",null,"Vous trouverez ce d\xe9p\xf4t depuis votre compte sur notre ",(0,n.kt)("a",{parentName:"p",href:"https://support.centreon.com/hc/fr/categories/10341239833105-D%C3%A9p%C3%B4ts"},"platefome de support, \xe0 la page ",(0,n.kt)("strong",{parentName:"a"},"D\xe9p\xf4ts")),"."),(0,n.kt)("h2",{id:"\xe9tape-2--mettre-\xe0-jour-linterface"},"\xc9tape 2 : Mettre \xe0 jour l'interface"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Mettre \xe0 jour le paquet: se connecter sur le serveur Centreon et ex\xe9cuter la commande suivante :")),(0,n.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf clean all\ndnf update centreon-bi-server\n"))),(0,n.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf clean all\ndnf update centreon-bi-server\n"))),(0,n.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"apt clean all\napt update && apt upgrade centreon-bi-server\n")))),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Mettre \xe0 jour l'interface: se connecter \xe0 l'interface web de Centreon et se rendre dans le menu\n",(0,n.kt)("strong",{parentName:"li"},"Administration > Extension > Manager")," puis cliquer sur le bouton de mise \xe0 jour de l'extension et des widgets.")),(0,n.kt)("h2",{id:"\xe9tape-3--mettre-\xe0-jour-le-serveur-de-reporting"},"\xc9tape 3 : Mettre \xe0 jour le serveur de reporting"),(0,n.kt)("h3",{id:"pr\xe9requis-de-la-version-java"},"Pr\xe9requis de la version Java"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Assurez-vous qu'une version de Java 17 (ou 18) est install\xe9e avant de commencer la proc\xe9dure.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Pour v\xe9rifier quelle version de Java est install\xe9e, entrez la commande suivante :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"java -version\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Pour une mise \xe0 jour de Java en version 17 (ou 18), allez sur la ",(0,n.kt)("a",{parentName:"p",href:"https://www.oracle.com/java/technologies/downloads/#java17"},"page officielle de t\xe9l\xe9chargement d'Oracle"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Si plusieurs versions de Java sont install\xe9es, vous devez activer la bonne version. Affichez les versions install\xe9es avec la commande suivante puis s\xe9lectionnez la version 17 (ou 18) :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"sudo update-alternatives --config java\n")),(0,n.kt)("p",{parentName:"li"},"Puis red\xe9marrez le service :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart cbis\n")))),(0,n.kt)("h3",{id:"proc\xe9dure-de-mont\xe9e-de-version"},"Proc\xe9dure de mont\xe9e de version"),(0,n.kt)("p",null,"Vous pouvez maintenant proc\xe9der \xe0 la mont\xe9e de version :"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Premi\xe8rement, arr\xeatez le service d'ordonnancement (CBIS) :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl stop cbis\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Puis mettez \xe0 jour les paquets, en ex\xe9cutant la commande suivante :"))),(0,n.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm\ndnf clean all\ndnf update centreon-bi\\*\n"))),(0,n.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm\ndnf clean all\ndnf update centreon-bi\\*\n"))),(0,n.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"apt clean all\napt update && apt upgrade centreon-bi-reporting-server\n")))),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enfin, red\xe9marrez le service d'ordonnancement :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl start cbis\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"D\xe9marrez et activez ",(0,n.kt)("strong",{parentName:"p"},"gorgoned"),":"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl start gorgoned && systemctl enable gorgoned\n")))),(0,n.kt)("h2",{id:"\xe9tape-4--mise-\xe0-jour-de-mariadb"},"\xc9tape 4 : mise \xe0 jour de MariaDB"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Arr\xeatez le service ",(0,n.kt)("strong",{parentName:"p"},"cbis")," :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl stop cbis\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Voir ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/upgrade/upgrade-mariadb"},"Mettre \xe0 jour MariaDB"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"D\xe9marrez le service ",(0,n.kt)("strong",{parentName:"p"},"cbis")," :"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl start cbis\n")))))}k.isMDXComponent=!0}}]);