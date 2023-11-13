"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[26025],{96938:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>N,frontMatter:()=>o,metadata:()=>m,toc:()=>c});a(67294);var n=a(3905),r=a(51715),l=a(7626);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o={id:"applications-databases-mssql",title:"Microsoft SQL Server"},d=void 0,m={unversionedId:"integrations/plugin-packs/procedures/applications-databases-mssql",id:"integrations/plugin-packs/procedures/applications-databases-mssql",title:"Microsoft SQL Server",description:"Contenu du Pack",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-databases-mssql.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/applications-databases-mssql",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/applications-databases-mssql",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/applications-databases-mssql.md",tags:[],version:"current",frontMatter:{id:"applications-databases-mssql",title:"Microsoft SQL Server"},sidebar:"pp",previous:{title:"Informix DB SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/applications-databases-informix-snmp"},next:{title:"MongoDB",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/procedures/applications-databases-mongodb"}},u={},c=[{value:"Contenu du Pack",id:"contenu-du-pack",level:2},{value:"Mod\xe8les",id:"mod\xe8les",level:3},{value:"M\xe9triques &amp; statuts collect\xe9s",id:"m\xe9triques--statuts-collect\xe9s",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Utilisateur de supervision",id:"utilisateur-de-supervision",level:3},{value:"D\xe9pendances",id:"d\xe9pendances",level:3},{value:"Configuration de freetds",id:"configuration-de-freetds",level:3},{value:"Installation",id:"installation",level:2},{value:"Pack de supervision",id:"pack-de-supervision",level:3},{value:"Plugin",id:"plugin",level:3},{value:"Configuration",id:"configuration",level:2},{value:"H\xf4te",id:"h\xf4te",level:3},{value:"Comment puis-je tester le plugin et que signifient les options des commandes ?",id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-",level:2},{value:"Diagnostic des erreurs communes",id:"diagnostic-des-erreurs-communes",level:3}],k={toc:c},g="wrapper";function N(e){var{components:t}=e,a=p(e,["components"]);return(0,n.kt)(g,s(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){i(e,t,a[t])}))}return e}({},k,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"contenu-du-pack"},"Contenu du Pack"),(0,n.kt)("h3",{id:"mod\xe8les"},"Mod\xe8les"),(0,n.kt)("p",null,"Le connecteur de supervision Centreon ",(0,n.kt)("strong",{parentName:"p"},"Microsoft SQL Server")," apporte un mod\xe8le d'h\xf4te :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"App-DB-MSSQL-custom")),(0,n.kt)("p",null,"Il apporte les mod\xe8les de service suivants :"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Alias"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Mod\xe8le de service"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"D\xe9faut"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Backup-Age"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-DB-MSSQL-Backup-Age"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le permettant de v\xe9rifier les sauvegardes des bases donn\xe9es MSSQL"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Blocked-Processes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-DB-MSSQL-Blocked-Processes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le permettant de v\xe9rifier les processus bloqu\xe9s. Ce service utilise une requ\xeate non valide selon les versions MS SQL Server"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Cache-Hitratio"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-DB-MSSQL-Cache-Hitratio"),(0,n.kt)("td",{parentName:"tr",align:"left"},'Contr\xf4le permettant de v\xe9rifier le "Data Buffer Cache Hit Ratio" du serveur. Aucune alerte par d\xe9faut'),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Connected-Users"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-DB-MSSQL-Connected-Users"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le permettant de v\xe9rifier le nombre d'utilisateurs connect\xe9s \xe0 la base de donn\xe9es"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Connection-Time"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-DB-MSSQL-Connection-Time"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le permettant de v\xe9rifier la dur\xe9e de connexion au serveur. Ce temps est donn\xe9 en secondes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Databases-Size"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-DB-MSSQL-Databases-Size"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le permettant de v\xe9rifier l'espace utilis\xe9 des bases de donn\xe9es du serveur"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Deadlocks"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-DB-MSSQL-Deadlocks"),(0,n.kt)("td",{parentName:"tr",align:"left"},'Contr\xf4le permettant de v\xe9rifier le nombre de "deadlocks" par seconde du serveur'),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Failed-Jobs"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-DB-MSSQL-Failed-Jobs"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le les jobs MSSQL en erreur"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Locks-Waits"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-DB-MSSQL-Locks-Waits"),(0,n.kt)("td",{parentName:"tr",align:"left"},'Contr\xf4le permettant de v\xe9rifier le nombre de "locks-waits" par seconde du serveur'),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Page-Life-Expectancy"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-DB-MSSQL-Page-Life-Expectancy"),(0,n.kt)("td",{parentName:"tr",align:"left"},'Contr\xf4le permettant de v\xe9rifier le "Page Life Expectancy" du serveur. Aucune alerte par d\xe9faut'),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Sql-Statement"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-DB-MSSQL-Sql-Statement"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le permettant d'ex\xe9cuter une requ\xeate SQL personnalis\xe9e renvoyant une donn\xe9e num\xe9rique"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Sql-Statement-String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-DB-MSSQL-Sql-Statement-String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le permettant d'ex\xe9cuter une requ\xeate SQL personnalis\xe9e renvoyant une cha\xeene de caract\xe8res"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Transactions"),(0,n.kt)("td",{parentName:"tr",align:"left"},"App-DB-MSSQL-Transactions"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Contr\xf4le permettant de v\xe9rifier le nombre de transactions par seconde du serveur. Aucune alerte par d\xe9faut"),(0,n.kt)("td",{parentName:"tr",align:"left"},"X")))),(0,n.kt)("h3",{id:"m\xe9triques--statuts-collect\xe9s"},"M\xe9triques & statuts collect\xe9s"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Backup-Age",label:"Backup-Age",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"last-duration"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"last-execution"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Blocked-Processes",label:"Blocked-Processes",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"blocked-processes"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"processes"),"#wait-time"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Cache-Hitratio",label:"Cache-Hitratio",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mssql.cache.hitratio.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,n.kt)(l.Z,{value:"Connected-Users",label:"Connected-Users",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mssql.users.connected.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,n.kt)(l.Z,{value:"Connection-Time",label:"Connection-Time",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"connection.time.milliseconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ms"))))),(0,n.kt)(l.Z,{value:"Databases-Size",label:"Databases-Size",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"datafiles.space.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"datafiles.space.free.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"datafiles.space.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"logfiles.space.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"logfiles.space.free.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"logfiles.space.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%"))))),(0,n.kt)(l.Z,{value:"Deadlocks",label:"Deadlocks",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mssql.deadlocks.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,n.kt)(l.Z,{value:"Failed-Jobs",label:"Failed-Jobs",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"jobs."),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"jobs.total.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"job.duration.seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"s"))))),(0,n.kt)(l.Z,{value:"Locks-Waits",label:"Locks-Waits",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mssql.lockswaits.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"count"))))),(0,n.kt)(l.Z,{value:"Page-Life-Expectancy",label:"Page-Life-Expectancy",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"page.life.expectancy.seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"s"))))),(0,n.kt)(l.Z,{value:"Sql-Statement",label:"Sql-Statement",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"sqlrequest.execution.time.seconds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"s"))))),(0,n.kt)(l.Z,{value:"Sql-Statement-String",label:"Sql-Statement-String",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"rows"),"#string"),(0,n.kt)("td",{parentName:"tr",align:"left"}))))),(0,n.kt)(l.Z,{value:"Transactions",label:"Transactions",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"M\xe9trique"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit\xe9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"databases.transactions.persecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"database"),"#database.transactions.persecond"),(0,n.kt)("td",{parentName:"tr",align:"left"},"/s")))))),(0,n.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,n.kt)("h3",{id:"utilisateur-de-supervision"},"Utilisateur de supervision"),(0,n.kt)("p",null,"Afin d'utiliser cette sonde, il est n\xe9cessaire de configurer un utilisateur avec des droits suffisants. Le r\xf4le serveradmin peut \xeatre\nutilis\xe9 pour du test mais ne doit pas \xeatre utilis\xe9 pour de la production en raison du risque de s\xe9curit\xe9 associ\xe9. "),(0,n.kt)("p",null,"Un contributeur de la sonde ",(0,n.kt)("em",{parentName:"p"},"check_mssql_health"),", Birk Bohne, a \xe9crit un script permettant d'assigner un minimum de privil\xe8ges pour\nque la majorit\xe9 des contr\xf4les fonctionnent. Ce script peut \xeatre trouv\xe9 dans la section ",(0,n.kt)("strong",{parentName:"p"},"Preparation of the database")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/lausser/check_mssql_health/blob/master/doc/check_mssql_health.en.txt"},"ici"),"."),(0,n.kt)("p",null,"N\xe9anmoins, la solution la plus optimale est l'utilisation d'un compte du domaine."),(0,n.kt)("h3",{id:"d\xe9pendances"},"D\xe9pendances"),(0,n.kt)("p",null,"Il est n\xe9cessaire d'installer les paquets suivants: ",(0,n.kt)("inlineCode",{parentName:"p"},"freetds perl-DBD-Sybase unixODBC"),"."),(0,n.kt)("h3",{id:"configuration-de-freetds"},"Configuration de freetds"),(0,n.kt)("p",null,"Par d\xe9faut, la version utilis\xe9e dans le fichier de configuration de freetds est la 4.2. Il est n\xe9cessaire d'utiliser au\nmoins la version 8.0 pour un fonctionnement et une s\xe9curit\xe9 optimales. Pour cela, \xe9diter le fichier freetds.conf afin de\nd\xe9commenter la ligne ",(0,n.kt)("inlineCode",{parentName:"p"},"version = 4.2")," et remplacer ",(0,n.kt)("inlineCode",{parentName:"p"},"4.2")," par ",(0,n.kt)("inlineCode",{parentName:"p"},"8.0"),". "),(0,n.kt)("p",null,"Chemin du fichier: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"RedHat-like: /etc/freetds.conf"),(0,n.kt)("li",{parentName:"ul"},"Debian 11: /etc/freetds/freetds.conf")),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("h3",{id:"pack-de-supervision"},"Pack de supervision"),(0,n.kt)("p",null,"Si la plateforme est configur\xe9e avec une licence ",(0,n.kt)("em",{parentName:"p"},"online"),", l'installation d'un paquet\nn'est pas requise pour voir appara\xeetre le pack dans le menu ",(0,n.kt)("strong",{parentName:"p"},"Configuration > Gestionnaire de connecteurs de supervision"),"."),(0,n.kt)("p",null,"Au contraire, si la plateforme utilise une licence ",(0,n.kt)("em",{parentName:"p"},"offline"),", installez le paquet\nsur le ",(0,n.kt)("strong",{parentName:"p"},"serveur central")," via la commande correspondant au gestionnaire de paquet\nassoci\xe9 \xe0 sa distribution :"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-pack-applications-databases-mssql\n"))),(0,n.kt)(l.Z,{value:"CentOS 7",label:"CentOS 7",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-databases-mssql\n"))),(0,n.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"apt install centreon-pack-applications-databases-mssql\n")))),(0,n.kt)("p",null,"Quel que soit le type de la licence (",(0,n.kt)("em",{parentName:"p"},"online")," ou ",(0,n.kt)("em",{parentName:"p"},"offline"),"), installez le Pack ",(0,n.kt)("strong",{parentName:"p"},"Microsoft SQL Server"),"\ndepuis l'interface web et le menu ",(0,n.kt)("strong",{parentName:"p"},"Configuration > Gestionnaire de connecteurs de supervision"),"."),(0,n.kt)("h3",{id:"plugin"},"Plugin"),(0,n.kt)("p",null,"\xc0 partir de Centreon 22.04, il est possible de demander le d\xe9ploiement automatique\ndu plugin lors de l'utilisation d'un pack."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Plus d'informations dans la section ",(0,n.kt)("a",{parentName:"p",href:"/docs/monitoring/pluginpacks/#installer-le-plugin"},"Installer le plugin"),".")),(0,n.kt)("p",null,"Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre syst\xe8me d'exploitation :"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install centreon-plugin-Applications-Databases-Mssql\n"))),(0,n.kt)(l.Z,{value:"CentOS 7",label:"CentOS 7",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Databases-Mssql\n"))),(0,n.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"apt install centreon-plugin-applications-databases-mssql\n")))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("h3",{id:"h\xf4te"},"H\xf4te"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ajoutez un h\xf4te \xe0 Centreon depuis la page ",(0,n.kt)("strong",{parentName:"li"},"Configuration > H\xf4tes"),"."),(0,n.kt)("li",{parentName:"ul"},"Compl\xe9tez les champs ",(0,n.kt)("strong",{parentName:"li"},"Nom"),", ",(0,n.kt)("strong",{parentName:"li"},"Alias")," & ",(0,n.kt)("strong",{parentName:"li"},"IP Address/DNS")," correspondant \xe0 votre serveur ",(0,n.kt)("strong",{parentName:"li"},"SQL Server database"),"."),(0,n.kt)("li",{parentName:"ul"},"Appliquez le mod\xe8le d'h\xf4te ",(0,n.kt)("strong",{parentName:"li"},"App-DB-MSSQL-custom"),"."),(0,n.kt)("li",{parentName:"ul"},"Une fois le mod\xe8le appliqu\xe9, les macros ci-dessous indiqu\xe9es comme requises (",(0,n.kt)("strong",{parentName:"li"},"Obligatoire"),") doivent \xeatre renseign\xe9es.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Obligatoire"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Macro"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Options suppl\xe9mentaires \xe0 ajouter \xe0 l'ensemble des commandes de l'h\xf4te (ex: --verbose)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"MSSQLPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mot de passe d'acc\xe8s \xe0 la base de donn\xe9es (D\xe9faut : 'PASSWORD')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"MSSQLPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Port d'\xe9coute de l'instance MSSQL (D\xe9faut : '1433')")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"MSSQLUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Utilisateur utilis\xe9 pour r\xe9aliser le contr\xf4le (D\xe9faut : 'USERNAME')")))),(0,n.kt)("h2",{id:"comment-puis-je-tester-le-plugin-et-que-signifient-les-options-des-commandes-"},"Comment puis-je tester le plugin et que signifient les options des commandes ?"),(0,n.kt)("p",null,"Une fois le plugin install\xe9, vous pouvez tester celui-ci directement en ligne\nde commande depuis votre collecteur Centreon en vous connectant avec\nl'utilisateur ",(0,n.kt)("strong",{parentName:"p"},"centreon-engine")," (",(0,n.kt)("inlineCode",{parentName:"p"},"su - centreon-engine"),") :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_mssql.pl \\\n    --plugin database::mssql::plugin \\\n    --hostname 10.0.0.1 \\\n    --port 1433 \\\n    --username 'USERNAME@DOMAIN' \\\n    --password 'PASSWORD'  \\\n    --mode=connected-users \\\n    --warning-connected-user='' \\\n    --critical-connected-user='' \\\n    --verbose \\\n    --use-new-perfdata\n")),(0,n.kt)("p",null,"La commande devrait retourner un message de sortie similaire \xe0 :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: 20 connected user(s) | 'mssql.users.connected.count'=20;;;0; \n")),(0,n.kt)("p",null,"La liste de toutes les options compl\xe9mentaires et leur signification peut \xeatre\naffich\xe9e en ajoutant le param\xe8tre ",(0,n.kt)("inlineCode",{parentName:"p"},"--help")," \xe0 la commande :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_mssql.pl \\\n    --plugin database::mssql::plugin \\\n    --hostname 10.0.0.1 \\\n    --help\n")),(0,n.kt)("p",null,"Tous les modes disponibles peuvent \xeatre affich\xe9s en ajoutant le param\xe8tre\n",(0,n.kt)("inlineCode",{parentName:"p"},"--list-mode")," \xe0 la commande :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins//centreon_mssql.pl \\\n    --plugin database::mssql::plugin \\\n    --list-mode\n")),(0,n.kt)("h3",{id:"diagnostic-des-erreurs-communes"},"Diagnostic des erreurs communes"),(0,n.kt)("p",null,"Rendez-vous sur la ",(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/fr/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"},"documentation d\xe9di\xe9e"),"\npour le diagnostic des erreurs communes des plugins Centreon."))}N.isMDXComponent=!0}}]);