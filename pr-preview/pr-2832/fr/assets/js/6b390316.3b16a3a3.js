"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[22666],{3905:(e,a,r)=>{r.d(a,{Zo:()=>p,kt:()=>c});var t=r(67294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function l(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?l(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function o(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=t.createContext({}),u=function(e){var a=t.useContext(s),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},p=function(e){var a=u(e.components);return t.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(r),c=n,b=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return r?t.createElement(b,i(i({ref:a},p),{},{components:r})):t.createElement(b,i({ref:a},p))}));function c(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7626:(e,a,r)=>{r.d(a,{Z:()=>o});var t=r(67294),n=r(86010);const l="tabItem_Ymn6";function i(){return i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},i.apply(this,arguments)}function o({children:e,hidden:a,className:r}){return t.createElement("div",i({role:"tabpanel",className:(0,n.Z)(l,r)},{hidden:a}),e)}},67709:(e,a,r)=>{r.d(a,{Z:()=>c});var t=r(67294),n=r(86010),l=r(90980),i=r(35715),o=r(8854),s=r(8241);const u="tabList__CuJ",p="tabItem_LNqP";function d(){return d=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},d.apply(this,arguments)}function m(e){var a;const{lazy:r,block:l,defaultValue:m,values:c,groupId:b,className:v}=e,k=t.Children.map(e.children,(e=>{if((0,t.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=c?c:k.map((({props:{value:e,label:a,attributes:r}})=>({value:e,label:a,attributes:r}))),f=(0,i.l)(g,((e,a)=>e.value===a.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var N;const h=null===m?m:null!==(N=null!=m?m:null===(a=k.find((e=>e.props.default)))||void 0===a?void 0:a.props.value)&&void 0!==N?N:k[0].props.value;if(null!==h&&!g.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:D,setTabGroupChoices:y}=(0,o.U)(),[M,B]=(0,t.useState)(h),x=[],{blockElementScrollPositionUntilNextRender:_}=(0,s.o5)();if(null!=b){const e=D[b];null!=e&&e!==M&&g.some((a=>a.value===e))&&B(e)}const O=e=>{const a=e.currentTarget,r=x.indexOf(a),t=g[r].value;t!==M&&(_(a),B(t),null!=b&&y(b,String(t)))},T=e=>{let a=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;var r;a=null!==(r=x[t])&&void 0!==r?r:x[0];break}case"ArrowLeft":{const r=x.indexOf(e.currentTarget)-1;var t;a=null!==(t=x[r])&&void 0!==t?t:x[x.length-1];break}}null==a||a.focus()};return t.createElement("div",{className:(0,n.Z)("tabs-container",u)},t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":l},v)},g.map((({value:e,label:a,attributes:r})=>t.createElement("li",d({role:"tab",tabIndex:M===e?0:-1,"aria-selected":M===e,key:e,ref:e=>x.push(e),onKeyDown:T,onFocus:O,onClick:O},r,{className:(0,n.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":M===e})}),null!=a?a:e)))),r?(0,t.cloneElement)(k.filter((e=>e.props.value===M))[0],{className:"margin-top--md"}):t.createElement("div",{className:"margin-top--md"},k.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==M})))))}function c(e){const a=(0,l.Z)();return t.createElement(m,d({key:String(a)},e))}},19379:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>d,contentTitle:()=>u,default:()=>b,frontMatter:()=>s,metadata:()=>p,toc:()=>m});r(67294);var t=r(3905),n=r(67709),l=r(7626);function i(){return i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},i.apply(this,arguments)}function o(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const s={id:"upgrade-mariadb",title:"Mettre \xe0 jour MariaDB"},u=void 0,p={unversionedId:"upgrade/upgrade-mariadb",id:"version-23.10/upgrade/upgrade-mariadb",title:"Mettre \xe0 jour MariaDB",description:"Vous pouvez potentiellement avoir plusieurs bases MariaDB dans votre architecture. Le serveur central a une base, chaque serveur distant a une base, et les modules MBI et MAP ont chacun une base d\xe9di\xe9e. Dans une architecture, toutes les bases doivent avoir la m\xeame version de MariaDB.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/upgrade/upgrade-mariadb.md",sourceDirName:"upgrade",slug:"/upgrade/upgrade-mariadb",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/docs/upgrade/upgrade-mariadb",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/next/i18n/fr/docusaurus-plugin-content-docs/version-23.10/upgrade/upgrade-mariadb.md",tags:[],version:"23.10",lastUpdatedAt:1700565273,formattedLastUpdatedAt:"21 nov. 2023",frontMatter:{id:"upgrade-mariadb",title:"Mettre \xe0 jour MariaDB"},sidebar:"version-23.10/docs",previous:{title:"Mont\xe9e de version depuis Centreon 20.10",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/docs/upgrade/upgrade-from-20-10"},next:{title:"Introduction \xe0 la migration",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/docs/migrate/introduction"}},d={},m=[{value:"Processus de mise \xe0 jour",id:"processus-de-mise-\xe0-jour",level:2},{value:"Version de Maria DB par version de Centreon",id:"version-de-maria-db-par-version-de-centreon",level:2},{value:"Conna\xeetre la version de MariaDB",id:"conna\xeetre-la-version-de-mariadb",level:2},{value:"Changer de version majeure de MariaDB",id:"changer-de-version-majeure-de-mariadb",level:2},{value:"Mont\xe9e de version de 10.1 \xe0 10.5",id:"mont\xe9e-de-version-de-101-\xe0-105",level:3},{value:"Changer de version mineure de MariaDB",id:"changer-de-version-mineure-de-mariadb",level:2}],c={toc:m};function b(e){var{components:a}=e,r=o(e,["components"]);return(0,t.kt)("wrapper",i({},c,r,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Vous pouvez potentiellement avoir plusieurs bases MariaDB dans votre architecture. Le serveur central a une base, chaque serveur distant a une base, et les modules MBI et MAP ont chacun une base d\xe9di\xe9e. Dans une architecture, toutes les bases doivent avoir la m\xeame version de MariaDB."),(0,t.kt)("h2",i({},{id:"processus-de-mise-\xe0-jour"}),"Processus de mise \xe0 jour"),(0,t.kt)("p",null,"Lorsque vous passez d'une version majeure de Centreon \xe0 une autre, vous devez :"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"Upgrader Centreon (paquets, installation web, d\xe9ploiement de la configuration)."),(0,t.kt)("li",{parentName:"ol"},"Upgrader MariaDB.")),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"R\xe9f\xe9rez vous \xe0 la documentation officielle de MariaDB pour en savoir davantage sur le processus de mise \xe0 jour :"),(0,t.kt)("ul",{parentName:"blockquote"},(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",i({parentName:"li"},{href:"https://mariadb.com/kb/en/upgrading-between-major-mariadb-versions/"}),"https://mariadb.com/kb/en/upgrading-between-major-mariadb-versions/")))),(0,t.kt)("h2",i({},{id:"version-de-maria-db-par-version-de-centreon"}),"Version de Maria DB par version de Centreon"),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",i({parentName:"tr"},{align:null}),"Centreon"),(0,t.kt)("th",i({parentName:"tr"},{align:null}),"MariaDB"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",i({parentName:"tr"},{align:null}),"23.04"),(0,t.kt)("td",i({parentName:"tr"},{align:null}),"10.5")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",i({parentName:"tr"},{align:null}),"22.10"),(0,t.kt)("td",i({parentName:"tr"},{align:null}),"10.5")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",i({parentName:"tr"},{align:null}),"22.04"),(0,t.kt)("td",i({parentName:"tr"},{align:null}),"10.5")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",i({parentName:"tr"},{align:null}),"21.10"),(0,t.kt)("td",i({parentName:"tr"},{align:null}),"10.5")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",i({parentName:"tr"},{align:null}),"21.04"),(0,t.kt)("td",i({parentName:"tr"},{align:null}),"10.5")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",i({parentName:"tr"},{align:null}),"20.10"),(0,t.kt)("td",i({parentName:"tr"},{align:null}),"10.3.x")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",i({parentName:"tr"},{align:null}),"20.04"),(0,t.kt)("td",i({parentName:"tr"},{align:null}),"10.3.x")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",i({parentName:"tr"},{align:null}),"19.10"),(0,t.kt)("td",i({parentName:"tr"},{align:null}),"10.1.x")))),(0,t.kt)("h2",i({},{id:"conna\xeetre-la-version-de-mariadb"}),"Conna\xeetre la version de MariaDB"),(0,t.kt)("p",null,"Pour conna\xeetre la version de MariaDB install\xe9e sur une machine, tapez la commande suivante :"),(0,t.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,t.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",i({parentName:"pre"},{className:"language-shell"}),"rpm -qa |grep MariaDB\n")),(0,t.kt)("p",null,"Le r\xe9sultat doit ressembler \xe0 \xe7a :"),(0,t.kt)("pre",null,(0,t.kt)("code",i({parentName:"pre"},{className:"language-shell"}),"MariaDB-client-10.5.8-1.el8.centos.x86_64\nMariaDB-server-10.5.8-1.el8.centos.x86_64\nMariaDB-common-10.5.8-1.el8.centos.x86_64\nMariaDB-shared-10.5.8-1.el8.centos.x86_64\nMariaDB-compat-10.5.8-1.el8.centos.x86_64\n"))),(0,t.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",i({parentName:"pre"},{className:"language-shell"}),"rpm -qa |grep MariaDB\n")),(0,t.kt)("p",null,"Le r\xe9sultat doit ressembler \xe0 \xe7a :"),(0,t.kt)("pre",null,(0,t.kt)("code",i({parentName:"pre"},{className:"language-shell"}),"MariaDB-client-10.5.8-1.el9.centos.x86_64\nMariaDB-server-10.5.8-1.el9.centos.x86_64\nMariaDB-common-10.5.8-1.el9.centos.x86_64\nMariaDB-shared-10.5.8-1.el9.centos.x86_64\nMariaDB-compat-10.5.8-1.el9.centos.x86_64\n"))),(0,t.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",i({parentName:"pre"},{className:"language-shell"}),"dpkg -l |grep MariaDB\n")),(0,t.kt)("p",null,"Le r\xe9sultat doit ressembler \xe0 \xe7a :"),(0,t.kt)("pre",null,(0,t.kt)("code",i({parentName:"pre"},{className:"language-shell"}),"ii  libdbd-mysql-perl:amd64                4.050-3+b1                                                                 amd64        Perl5 database interface to the MariaDB/MySQL database\nii  libmariadb3:amd64                      1:10.5.17+maria~deb11      amd64        MariaDB database client library\nii  mariadb-client-10.5                    1:10.5.17+maria~deb11      amd64        MariaDB database client binaries\nii  mariadb-client-core-10.5               1:10.5.17+maria~deb11      amd64        MariaDB database core client binaries\nii  mariadb-common                         1:10.5.17+maria~deb11      all          MariaDB common configuration files\nii  mariadb-server                         1:10.5.17+maria~deb11      all          MariaDB database server (metapackage depending on the latest version)\nii  mariadb-server-10.5                    1:10.5.17+maria~deb11      amd64        MariaDB database server binaries\nii  mariadb-server-core-10.5               1:10.5.17+maria~deb11      amd64        MariaDB database core server files\nii  mysql-common                           1:10.5.17+maria~deb11      all          MariaDB database common files (e.g. /etc/mysql/my.cnf)\n")))),(0,t.kt)("h2",i({},{id:"changer-de-version-majeure-de-mariadb"}),"Changer de version majeure de MariaDB"),(0,t.kt)("p",null,"Il est n\xe9cessaire de d\xe9sinstaller puis r\xe9installer MariaDB pour changer de version majeure (par exemple pour passer d'une version 10.4 \xe0 une version 10.5)."),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Arr\xeatez le service mariadb :"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",i({parentName:"pre"},{className:"language-shell"}),"systemctl stop mariadb\n"))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"D\xe9sinstallez la version actuelle :"))),(0,t.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,t.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",i({parentName:"pre"},{className:"language-shell"}),"rpm --erase --nodeps --verbose MariaDB-server MariaDB-client MariaDB-shared MariaDB-compat MariaDB-common\n"))),(0,t.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",i({parentName:"pre"},{className:"language-shell"}),"rpm --erase --nodeps --verbose MariaDB-server MariaDB-client MariaDB-shared MariaDB-compat MariaDB-common\n"))),(0,t.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",i({parentName:"pre"},{className:"language-shell"}),"dpkg -r --ignore-depends=MariaDB-server,MariaDB-client,MariaDB-shared,MariaDB-compat,MariaDB-common\n")))),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"Pendant cette \xe9tape de d\xe9sinstallation, vous pouvez rencontrer une erreur parce qu'un ou plusieurs paquets MariaDB sont manquants. Dans ce cas, vous devez ex\xe9cuter la commande de d\xe9sinstallation sans inclure le paquet manquant."),(0,t.kt)("p",{parentName:"blockquote"},"Par exemple, vous obtenez le message d'erreur suivant :"),(0,t.kt)("p",{parentName:"blockquote"},"  ",(0,t.kt)("inlineCode",{parentName:"p"},"package MariaDB-compat is not installed")),(0,t.kt)("p",{parentName:"blockquote"},"  Comme le paquet ",(0,t.kt)("strong",{parentName:"p"},"MariaDB-compat")," est manquant, vous devez ex\xe9cuter la m\xeame commande sans citer ",(0,t.kt)("strong",{parentName:"p"},"MariaDB-compat")," :"),(0,t.kt)("p",{parentName:"blockquote"},"  ",(0,t.kt)("inlineCode",{parentName:"p"},"rpm --erase --nodeps --verbose MariaDB-server MariaDB-client MariaDB-shared MariaDB-common"))),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"Assurez-vous d'avoir ",(0,t.kt)("a",i({parentName:"p"},{href:"/centreon-documentation/pr-preview/pr-2832/fr/docs/upgrade/upgrade-from-22-04#installer-le-d%C3%A9p%C3%B4t-mariadb"}),"install\xe9 le d\xe9p\xf4t officiel de MariaDB")," avant de poursuivre la proc\xe9dure.")),(0,t.kt)("ol",i({},{start:3}),(0,t.kt)("li",{parentName:"ol"},"Installez la version 10.5 :")),(0,t.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,t.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",i({parentName:"pre"},{className:"language-shell"}),"dnf install MariaDB-server-10.5\\* MariaDB-client-10.5\\* MariaDB-shared-10.5\\* MariaDB-compat-10.5\\* MariaDB-common-10.5\\*\n"))),(0,t.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",i({parentName:"pre"},{className:"language-shell"}),"dnf install MariaDB-server-10.5\\* MariaDB-client-10.5\\* MariaDB-shared-10.5\\* MariaDB-compat-10.5\\* MariaDB-common-10.5\\*\n"))),(0,t.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",i({parentName:"pre"},{className:"language-shell"}),'curl -LsS https://r.mariadb.com/downloads/mariadb_repo_setup | sudo bash -s -- --os-type=debian --os-version=11 --mariadb-server-version="mariadb-10.5"\n')))),(0,t.kt)("ol",i({},{start:4}),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"D\xe9marrer le service mariadb :"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",i({parentName:"pre"},{className:"language-shell"}),"systemctl start mariadb\n"))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Lancez le processus de mise \xe0 jour MariaDB :"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",i({parentName:"pre"},{className:"language-shell"}),"mysql_upgrade\n")),(0,t.kt)("p",{parentName:"li"}," Si votre base de donn\xe9es est prot\xe9g\xe9e par mot de passe, entrez :"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",i({parentName:"pre"},{className:"language-shell"})," mysql_upgrade -u <utilisateur_admin_bdd> -p\n")),(0,t.kt)("p",{parentName:"li"}," Exemple : si votre utilisateur_admin_bdd est ",(0,t.kt)("inlineCode",{parentName:"p"},"root"),", entrez:"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",i({parentName:"pre"},{}),"mysql_upgrade -u root -p\n")),(0,t.kt)("blockquote",{parentName:"li"},(0,t.kt)("p",{parentName:"blockquote"},"R\xe9f\xe9rez vous \xe0 la ",(0,t.kt)("a",i({parentName:"p"},{href:"https://mariadb.com/kb/en/mysql_upgrade/"}),"documentation officielle"),"\npour plus d'informations ou si des erreurs apparaissent pendant cette \xe9tape."))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Pour activer MariaDB, ex\xe9cutez la commande suivante :"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",i({parentName:"pre"},{className:"language-shell"}),"systemctl enable mariadb\n")))),(0,t.kt)("h3",i({},{id:"mont\xe9e-de-version-de-101-\xe0-105"}),"Mont\xe9e de version de 10.1 \xe0 10.5"),(0,t.kt)("p",null,"Le param\xe8tre ",(0,t.kt)("inlineCode",{parentName:"p"},"innodb_additional_mem_pool_size")," a \xe9t\xe9 supprim\xe9 depuis MariaDB\n10.2, vous devez donc le supprimer du fichier ",(0,t.kt)("strong",{parentName:"p"},"/etc/my.cnf.d/centreon.cnf")),(0,t.kt)("pre",null,(0,t.kt)("code",i({parentName:"pre"},{className:"language-diff"}),"#\n# Custom MySQL/MariaDB server configuration for Centreon\n#\n[server]\ninnodb_file_per_table=1\n\nopen_files_limit = 32000\n\nkey_buffer_size = 256M\nsort_buffer_size = 32M\njoin_buffer_size = 4M\nthread_cache_size = 64\nread_buffer_size = 512K\nread_rnd_buffer_size = 256K\nmax_allowed_packet = 8M\n\n# For 4 Go Ram\n-#innodb_additional_mem_pool_size=512M\n#innodb_buffer_pool_size=512M\n\n# For 8 Go Ram\n-#innodb_additional_mem_pool_size=1G\n#innodb_buffer_pool_size=1G\n")),(0,t.kt)("h2",i({},{id:"changer-de-version-mineure-de-mariadb"}),"Changer de version mineure de MariaDB"),(0,t.kt)("p",null,"Suivez ces \xe9tapes pour changer de version mineure de MariaDB (par exemple, pour passer d'une 10.3.2 \xe0 une 10.3.5) : "),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"Mettez \xe0 jour MariaDB :")),(0,t.kt)(n.Z,{groupId:"sync",mdxType:"Tabs"},(0,t.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 8",label:"Alma / RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",i({parentName:"pre"},{className:"language-shell"}),"dnf update MariaDB-*\n"))),(0,t.kt)(l.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",i({parentName:"pre"},{className:"language-shell"}),"dnf update MariaDB-*\n"))),(0,t.kt)(l.Z,{value:"Debian 11",label:"Debian 11",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",i({parentName:"pre"},{className:"language-shell"}),"apt update MariaDB-*\n")))),(0,t.kt)("ol",i({},{start:2}),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Red\xe9marrez MariaDB :"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",i({parentName:"pre"},{}),"restart mariadb\n")))))}b.isMDXComponent=!0}}]);