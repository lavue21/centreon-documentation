"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[13469],{71128:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>v,frontMatter:()=>u,metadata:()=>c,toc:()=>m});r(67294);var a=r(3905),n=r(51715),s=r(7626);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const u={id:"monitor-mysql-server",title:"Superviser une base de donn\xe9es MySQL ou MariaDB"},p=void 0,c={unversionedId:"getting-started/monitor-mysql-server",id:"version-23.10/getting-started/monitor-mysql-server",title:"Superviser une base de donn\xe9es MySQL ou MariaDB",description:"L'objectif de ce tutoriel est de superviser une base de donn\xe9es Mysql/MariaDB.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/getting-started/mysql_tuto.md",sourceDirName:"getting-started",slug:"/getting-started/monitor-mysql-server",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/getting-started/monitor-mysql-server",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/getting-started/mysql_tuto.md",tags:[],version:"23.10",lastUpdatedAt:1699633150,formattedLastUpdatedAt:"10 nov. 2023",frontMatter:{id:"monitor-mysql-server",title:"Superviser une base de donn\xe9es MySQL ou MariaDB"},sidebar:"version-23.10/docs",previous:{title:"Superviser votre premier routeur Cisco",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/getting-started/monitor-cisco-router-with-snmp"},next:{title:"Utiliser Autodiscovery pour d\xe9couvrir des instances AWS EC2",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/getting-started/autodisco-aws"}},d={},m=[{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Sur la base de donn\xe9es \xe0 superviser",id:"sur-la-base-de-donn\xe9es-\xe0-superviser",level:3},{value:"Sur le collecteur",id:"sur-le-collecteur",level:3},{value:"Sur le serveur central",id:"sur-le-serveur-central",level:3},{value:"Configurer l&#39;h\xf4te et d\xe9ployer la configuration",id:"configurer-lh\xf4te-et-d\xe9ployer-la-configuration",level:2}],g={toc:m},k="wrapper";function v(e){var{components:t}=e,u=o(e,["components"]);return(0,a.kt)(k,l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){i(e,t,r[t])}))}return e}({},g,u),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"L'objectif de ce tutoriel est de superviser une base de donn\xe9es Mysql/MariaDB."),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("h3",{id:"sur-la-base-de-donn\xe9es-\xe0-superviser"},"Sur la base de donn\xe9es \xe0 superviser"),(0,a.kt)("p",null,"Afin de pouvoir collecter les informations n\xe9cessaires \xe0 partir de la base de donn\xe9es, un utilisateur de la base de donn\xe9es disposant de privil\xe8ges sp\xe9cifiques sera n\xe9cessaire. Si la base que vous souhaitez superviser est une base Centreon, un utilisateur d\xe9di\xe9 existe d\xe9j\xe0 (il s'appelle ",(0,a.kt)("strong",{parentName:"p"},"centreon"),"). Dans le cas contraire, commencez par cr\xe9er un nouvel utilisateur : connectez-vous \xe0 votre base de donn\xe9es, puis ex\xe9cutez la commande suivante :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"CREATE USER 'username'@'IP_POLLER' IDENTIFIED BY 'password';\n")),(0,a.kt)("p",null,"Puis, que votre base soit une base Centreon ou non, ex\xe9cutez la commande suivante :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"GRANT SELECT ON *.* TO 'username'@'IP_POLLER';\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Remplacez le nom d'utilisateur, l'adresse IP du collecteur et le mot de passe par les valeurs de votre choix.")),(0,a.kt)("h3",{id:"sur-le-collecteur"},"Sur le collecteur"),(0,a.kt)("p",null,"Installez le plugin suivant sur le collecteur qui supervisera votre base de donn\xe9es :"),(0,a.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install centreon-plugin-Applications-Databases-Mysql\n"))),(0,a.kt)(s.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install centreon-plugin-Applications-Databases-Mysql\n"))),(0,a.kt)(s.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"apt install centreon-plugin-applications-databases-mysql\n")))),(0,a.kt)("h3",{id:"sur-le-serveur-central"},"Sur le serveur central"),(0,a.kt)("p",null,"La base de donn\xe9es sera supervis\xe9e \xe0 l'aide du ",(0,a.kt)("a",{parentName:"p",href:"/pp/integrations/plugin-packs/procedures/applications-databases-mysql"},"connecteur de supervision ",(0,a.kt)("strong",{parentName:"a"},"MySQL/MariaDB")),".\nRendez-vous dans le menu ",(0,a.kt)("strong",{parentName:"p"},"Configuration > Gestionnaire de connecteurs de supervision")," et installez le connecteur de supervision ",(0,a.kt)("strong",{parentName:"p"},"MySQL/MariaDB")," :"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:r(14978).Z,width:"1756",height:"680"})),(0,a.kt)("h2",{id:"configurer-lh\xf4te-et-d\xe9ployer-la-configuration"},"Configurer l'h\xf4te et d\xe9ployer la configuration"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Allez \xe0 la page ",(0,a.kt)("strong",{parentName:"p"},"Configuration > H\xf4tes > H\xf4tes")," et cliquez sur le bouton ",(0,a.kt)("strong",{parentName:"p"},"Ajouter")," :"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"image",src:r(69232).Z,width:"1832",height:"680"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Renseignez les informations suivantes :"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Le nom de votre serveur"),(0,a.kt)("li",{parentName:"ul"},"Une description de votre serveur"),(0,a.kt)("li",{parentName:"ul"},"Son adresse IP"),(0,a.kt)("li",{parentName:"ul"},"S\xe9lectionnez le collecteur qui supervisera votre base de donn\xe9es (laissez \"Central\" si vous n'avez pas d'autre collecteur)")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Cliquez sur le bouton ",(0,a.kt)("strong",{parentName:"p"},"+ Ajouter une nouvelle entr\xe9e")," \xe0 c\xf4t\xe9 du champ ",(0,a.kt)("strong",{parentName:"p"},"Mod\xe8les")," puis s\xe9lectionnez le mod\xe8le\n",(0,a.kt)("strong",{parentName:"p"},"App-DB-MySQL-custom"),"."),(0,a.kt)("p",{parentName:"li"},"  ",(0,a.kt)("img",{alt:"image",src:r(64730).Z,width:"1737",height:"502"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Une liste de macros correspondant au mod\xe8le va alors appara\xeetre :"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"image",src:r(63118).Z,width:"1430",height:"173"})),(0,a.kt)("p",{parentName:"li"},"Renseignez la valeur des macros suivantes :"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"MYSQLUSERNAME")," : le nom de l'utilisateur qui se connectera \xe0 la base de donn\xe9es."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"MYSQLPASSWORD")," : le mot de passe associ\xe9 \xe0 cet utilisateur."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"MYSQLPORT")," : le port d'\xe9coute de la base de donn\xe9es, par d\xe9faut 3306.")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Cliquez sur le bouton ",(0,a.kt)("strong",{parentName:"p"},"Sauvegarder"),". Votre \xe9quipement a \xe9t\xe9 ajout\xe9 \xe0 la liste des h\xf4tes :"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"image",src:r(66627).Z,width:"1770",height:"355"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Allez dans ",(0,a.kt)("strong",{parentName:"p"},"Configuration > Services > Services par h\xf4te"),". Un ensemble d'indicateurs a \xe9t\xe9 cr\xe9\xe9 automatiquement."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"image",src:r(55522).Z,width:"1766",height:"638"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/docs/getting-started/first-supervision#d%C3%A9ployer-une-configuration"},"D\xe9ployez la supervision"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\xc0 la page ",(0,a.kt)("strong",{parentName:"p"},"Supervision > Status des ressources"),", s\xe9lectionnez la valeur ",(0,a.kt)("strong",{parentName:"p"},"Tous")," pour le\nfiltre ",(0,a.kt)("strong",{parentName:"p"},"Afficher les d\xe9tails"),". Dans un premier temps, les ressources apparaissent avec le statut ",(0,a.kt)("strong",{parentName:"p"},"En attente"),", ce qui signifie qu'aucun contr\xf4le n'a encore \xe9t\xe9 ex\xe9cut\xe9. Apr\xe8s quelques minutes, les premiers r\xe9sultats de la supervision apparaissent :"),(0,a.kt)("p",{parentName:"li"},"  ",(0,a.kt)("img",{alt:"image",src:r(74791).Z,width:"1830",height:"680"})))))}v.isMDXComponent=!0},14978:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/quick_start_mysql_0-fb16a6cd287189a956617662a02b072b.gif"},69232:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/quick_start_mysql_1a-eeb26243bd33db76d157c436e3490d9a.gif"},64730:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/quick_start_mysql_1a-2fe5ab2e515333b930843f4c4320b4db.png"},63118:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/quick_start_mysql_1b-4a7e29a18f0a6dbf7c0f74631d9ad828.png"},66627:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/quick_start_mysql_2-0a53a1ae65d13b2d6a892f1980ae8855.png"},55522:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/quick_start_mysql_3-7d08b842d5b13ecd94b1138116588af2.png"},74791:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/quick_start_mysql_4-89ad7df6c2e49e9bd63541d604bbe9c3.gif"}}]);