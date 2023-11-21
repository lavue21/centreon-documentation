"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[94616],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>d});n(67294);var a=n(3905),r=n(67709),i=n(7626);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"cloud-microsoft-office365-exchange",title:"Office365 Exchange"},c=void 0,p={unversionedId:"integrations/plugin-packs/procedures/cloud-microsoft-office365-exchange",id:"integrations/plugin-packs/procedures/cloud-microsoft-office365-exchange",title:"Office365 Exchange",description:"Vue d'ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs-pp/current/integrations/plugin-packs/procedures/cloud-microsoft-office365-exchange.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/cloud-microsoft-office365-exchange",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/cloud-microsoft-office365-exchange",draft:!1,tags:[],version:"current",frontMatter:{id:"cloud-microsoft-office365-exchange",title:"Office365 Exchange"},sidebar:"pp",previous:{title:"Office 365",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/cloud-microsoft-office365-management"},next:{title:"Office365 OneDrive",permalink:"/centreon-documentation/pr-preview/pr-2832/fr/pp/integrations/plugin-packs/procedures/cloud-microsoft-office365-onedrive"}},u={},d=[{value:"Vue d&#39;ensemble",id:"vue-densemble",level:2},{value:"Contenu du Plugin-Pack",id:"contenu-du-plugin-pack",level:2},{value:"Objets supervis\xe9s",id:"objets-supervis\xe9s",level:3},{value:"M\xe9triques collect\xe9es",id:"m\xe9triques-collect\xe9es",level:3},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Enregistrez une application",id:"enregistrez-une-application",level:3},{value:"Sp\xe9cifiez les autorisations dont votre application a besoin pour acc\xe9der aux API de gestion Office 365",id:"sp\xe9cifiez-les-autorisations-dont-votre-application-a-besoin-pour-acc\xe9der-aux-api-de-gestion-office-365",level:3},{value:"Aide suppl\xe9mentaire",id:"aide-suppl\xe9mentaire",level:3},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"FAQ",id:"faq",level:2},{value:"Comment tester le Plugin Office 365 Exchange en ligne de commande et que signifient les options principales ?",id:"comment-tester-le-plugin-office-365-exchange-en-ligne-de-commande-et-que-signifient-les-options-principales-",level:3},{value:"<code>UNKNOWN: 500 Can&#39;t connect to ...:443</code>",id:"unknown-500-cant-connect-to-443",level:4},{value:"<code>UNKNOWN: 501 Protocol scheme &#39;connect&#39; is not supported |</code>",id:"unknown-501-protocol-scheme-connect-is-not-supported-",level:4}],m={toc:d};function f(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",l({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",l({},{id:"vue-densemble"}),"Vue d'ensemble"),(0,a.kt)("p",null,"La suite Microsoft Office 365 comprend Exchange Online, la version h\xe9berg\xe9e de\nla plateforme de messagerie Exchange Server de Microsoft. "),(0,a.kt)("p",null,"Les informations de supervision de la suite Office sont mises \xe0 disposition par\nMicrosoft au travers d'une API de gestion Office 365."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Les donn\xe9es mises \xe0 disposition par l'API de gestion Office 365 ne sont pas en temps r\xe9el et sont bas\xe9es sur une p\xe9riode de 7 jours")),(0,a.kt)("h2",l({},{id:"contenu-du-plugin-pack"}),"Contenu du Plugin-Pack"),(0,a.kt)("h3",l({},{id:"objets-supervis\xe9s"}),"Objets supervis\xe9s"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Activit\xe9 Mail"),(0,a.kt)("li",{parentName:"ul"},"Utilisation des boites mail")),(0,a.kt)("h3",l({},{id:"m\xe9triques-collect\xe9es"}),"M\xe9triques collect\xe9es"),(0,a.kt)("p",null,"Plus d'informations sur les m\xe9triques collect\xe9es sur la documentation officielle\nde Microsoft :  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",l({parentName:"li"},{href:"https://docs.microsoft.com/fr-fr/office365/admin/activity-reports/email-activity?view=o365-worldwide"}),"https://docs.microsoft.com/fr-fr/office365/admin/activity-reports/email-activity?view=o365-worldwide")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",l({parentName:"li"},{href:"https://docs.microsoft.com/fr-fr/microsoft-365/admin/activity-reports/mailbox-usage?view=o365-worldwide"}),"https://docs.microsoft.com/fr-fr/microsoft-365/admin/activity-reports/mailbox-usage?view=o365-worldwide"))),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Email-activity",label:"Email-activity",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"active","_","users"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Number of active users")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"exchange.users.emails.sent.total.count"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Number of total sent mails")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"exchange.users.emails.received.total.count"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Number of total received mails")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"exchange.users.emails.read.total.count"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Number of total read mails"))))),(0,a.kt)(i.Z,{value:"Mailbox-usage",label:"Mailbox-usage",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Metric name"),(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"active","_","mailboxes"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Number of active mailboxes"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Count")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"exchange.mailboxes.active.usage.total.bytes"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Total usage space (active mailboxes)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Bytes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"exchange.mailboxes.inactive.usage.total.bytes"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Total usage space (inactive mailboxes)"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"Bytes")))))),(0,a.kt)("p",null,"Une fois l'h\xf4te cr\xe9e, les macros de services peuvent \xeatre configur\xe9es pour\nfiltrer les m\xe9triques par utilisateurs ou par boites mail. Plus d'informations\ndans la section ",(0,a.kt)("a",l({parentName:"p"},{href:"#Configuration"}),"Configuration"),"."),(0,a.kt)("h2",l({},{id:"pr\xe9requis"}),"Pr\xe9requis"),(0,a.kt)("p",null,"Si vous n'avez pas encore cr\xe9\xe9 votre compte sous Office 365, reportez-vous \xe0 la\ndocumentation d'Office 365 Management ou suivez le lien dans la partie\n'Aide suppl\xe9mentaire'."),(0,a.kt)("h3",l({},{id:"enregistrez-une-application"}),"Enregistrez une application"),(0,a.kt)("p",null,"Les API de gestion Office 365 utilisent Azure AD pour assurer l\u2019authentification\ns\xe9curis\xe9e des donn\xe9es dans Office 365. Pour acc\xe9der aux API de gestion\nOffice 365, vous devez enregistrer votre application dans Azure AD. Le terme\n",(0,a.kt)("em",{parentName:"p"},"Application")," est utilis\xe9 comme concept, faisant r\xe9f\xe9rence non seulement au\nprogramme d\u2019application, mais \xe9galement \xe0 son inscription Azure AD et \xe0 son r\xf4le\nlors des \xab dialogues \xbb d\u2019authentification/autorisation au moment de l\u2019ex\xe9cution.\n(",(0,a.kt)("a",l({parentName:"p"},{href:"https://docs.microsoft.com/fr-fr/azure/active-directory/develop/app-objects-and-service-principals"}),"https://docs.microsoft.com/fr-fr/azure/active-directory/develop/app-objects-and-service-principals"),")"),(0,a.kt)("h3",l({},{id:"sp\xe9cifiez-les-autorisations-dont-votre-application-a-besoin-pour-acc\xe9der-aux-api-de-gestion-office-365"}),"Sp\xe9cifiez les autorisations dont votre application a besoin pour acc\xe9der aux API de gestion Office 365"),(0,a.kt)("p",null,"Afin de r\xe9cup\xe9rer les donn\xe9es d'Exchange Online, vous devez sp\xe9cifier les\nautorisations que votre application requiert:\ndans le Portail de gestion Azure :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Microsoft Graph :",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Reports.Read.All (Type : Application)"),(0,a.kt)("li",{parentName:"ul"},"User.Read (Type : Delegated)"))),(0,a.kt)("li",{parentName:"ul"},"Office365 Management APIs :",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ServiceHealth.Read (Type : Application)"),(0,a.kt)("li",{parentName:"ul"},"ActivityFeed.Read (Type : Application)")))),(0,a.kt)("h3",l({},{id:"aide-suppl\xe9mentaire"}),"Aide suppl\xe9mentaire"),(0,a.kt)("p",null,"Suivez le guide pratique pour obtenir une explication compl\xe8te sur la fa\xe7on d\u2019enregistrer une demande et d\u2019obtenir un ",(0,a.kt)("em",{parentName:"p"},"ID client")," et un ",(0,a.kt)("em",{parentName:"p"},"ID secret")," :\n",(0,a.kt)("a",l({parentName:"p"},{href:"https://docs.microsoft.com/fr-fr/office/office-365-management-api/get-started-with-office-365-management-apis"}),"https://docs.microsoft.com/fr-fr/office/office-365-management-api/get-started-with-office-365-management-apis")),(0,a.kt)("h2",l({},{id:"installation"}),"Installation"),(0,a.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur l'ensemble des collecteurs Centreon supervisant des ressources Office 365 Exchange :")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Cloud-Microsoft-Office365-Exchange-Api\n")),(0,a.kt)("ol",l({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"Depuis l'interface Web de Centreon, installer le Plugin-Pack ",(0,a.kt)("em",{parentName:"li"},"Office365 Exchange"),' depuis la page "Configuration > Plugin packs > Manager" '))),(0,a.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installer le Plugin sur l'ensemble des collecteurs Centreon supervisant des ressources Office 365 Exchange :")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"yum install centreon-plugin-Cloud-Microsoft-Office365-Exchange-Api\n")),(0,a.kt)("ol",l({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"Sur le serveur Central Centreon, installer le RPM du Plugin-Pack 'Office365 Exchange' :")),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"yum install centreon-pack-cloud-microsoft-office365-exchange\n")),(0,a.kt)("ol",l({},{start:3}),(0,a.kt)("li",{parentName:"ol"},"Depuis l'interface Web de Centreon, installer le Plugin-Pack ",(0,a.kt)("em",{parentName:"li"},"Office365 Exchange"),' depuis la page "Configuration > Plugin packs > Manager"')))),(0,a.kt)("h2",l({},{id:"configuration"}),"Configuration"),(0,a.kt)("p",null,"Lors de la cr\xe9ation de votre H\xf4te dans Centreon, choisissez le mod\xe8le\n",(0,a.kt)("em",{parentName:"p"},"Cloud-Microsoft-Office365-Exchange-Api-custom"),". Une fois celui-ci appliqu\xe9,\ncertaines Macros li\xe9es \xe0 l'H\xf4te doivent \xeatre renseign\xe9es :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Mandatory"),(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Name"),(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"OFFICE365CUSTOMMODE"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Access mode for the Plugin (default: 'graphapi')")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"OFFICE365TENANT"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Tenant-id of your Office 365 organization")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"OFFICE365CLIENTID"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Client-id of your registered application")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"X"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"OFFICE365CLIENTSECRET"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Secret-if of your registered application")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"})),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"OFFICE365EXTRAOPTIONS"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Any extra option you may want to add to the command (eg. a --verbose flag)")))),(0,a.kt)("p",null,"La m\xe9trique ",(0,a.kt)("em",{parentName:"p"},"perfdate")," enrengistre la date \xe0 laquelle celle-ci a \xe9t\xe9 collect\xe9e.\nVous pouvez la filter en param\xe9trant la macro ",(0,a.kt)("em",{parentName:"p"},"OFFICE365EXTRAOPTIONS")," avec\nl'option ",(0,a.kt)("inlineCode",{parentName:"p"},"--filter-perfdata='^(?!.*perfdate).*$'")),(0,a.kt)("p",null,"Une fois l'h\xf4te cr\xe9\xe9, il est \xe9galement possible de param\xe9trer un ensemble de Macros de Service selon la configuration souhait\xe9e:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Mandatory"),(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Name"),(0,a.kt)("th",l({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"})),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"FILTERUSER"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Filter specific users")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"})),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"FILTERMAILBOX"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Filter specific mailboxes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"left"})),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"FILTERCOUNTER"),(0,a.kt)("td",l({parentName:"tr"},{align:"left"}),"Filter specific counters (default:'active","|","total')")))),(0,a.kt)("h2",l({},{id:"faq"}),"FAQ"),(0,a.kt)("h3",l({},{id:"comment-tester-le-plugin-office-365-exchange-en-ligne-de-commande-et-que-signifient-les-options-principales-"}),"Comment tester le Plugin Office 365 Exchange en ligne de commande et que signifient les options principales ?"),(0,a.kt)("p",null,"Une fois le Plugin install\xe9, vous pouvez tester directement celui-ci en ligne de\ncommande depuis votre collecteur Centreon avec l'utilisateur ",(0,a.kt)("em",{parentName:"p"},"centreon-engine")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins//centreon_office365_exchange_api.pl \\\n--plugin=cloud::microsoft::office365::exchange::plugin \\\n--mode=email-activity \\\n--tenant='abcd1234-5678-90ab-cd12-34567890abcd' \\\n--client-id='9876dcba-5432-10dc-ba98-76543210dcba' \\\n--client-secret='8/RON4vUGhAcg6DRmSxc4AwgxSRoNfKg4d8xNizIMnwg='\n")),(0,a.kt)("p",null,"R\xe9sultat attentdu :"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"OK: Active mailboxes on 2019-03-10 : 141/1532 (9.20%) - Total (active mailboxes) \nSend Count: 9478, Receive Count: 62197, Read Count: 24401 | \n'active_mailboxes'=141mailboxes;;;0;1532 \n'total_send_count'=9478;;;0; \n'total_receive_count'=62197;;;0; \n'total_read_count'=24401;;;0;\n")),(0,a.kt)("p",null,"Les options des diff\xe9rents modes sont consultables via le param\xe8tre ",(0,a.kt)("inlineCode",{parentName:"p"},"--help"),"\ndu mode :"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins//centreon_office365_exchange_api.pl \\\n--plugin=cloud::microsoft::office365::exchange::plugin \\\n--mode=email-activity \\\n--custommode='graphapi'\\\n--help\n")),(0,a.kt)("p",null,"Tous les modes disponibles dans le Plugin peuvent \xeatre list\xe9s via la commande\nsuivante :"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"/usr/lib/centreon/plugins//centreon_office365_exchange_api.pl \\\n  --plugin=cloud::microsoft::office365::exchange::plugin \\\n  --list-mode\n")),(0,a.kt)("h4",l({},{id:"unknown-500-cant-connect-to-443"}),(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 500 Can't connect to ...:443")),(0,a.kt)("p",null,"Cette erreur signifie que le Plugin Centreon n'a pas pu se connecter \xe0 l'API de\ngestion Office 365. V\xe9rifiez que la requ\xeate n'a pas bloqu\xe9e par un outil externe\n(un pare-feu par exemple). Si vous utilisez un proxy, renseignez son URL dans\nles macros ",(0,a.kt)("em",{parentName:"p"},"EXTRAOPTIONS")," des services correspondants ou directement dans la\ncommande avec l'option ",(0,a.kt)("inlineCode",{parentName:"p"},"--proxyurl"),"."),(0,a.kt)("h4",l({},{id:"unknown-501-protocol-scheme-connect-is-not-supported-"}),(0,a.kt)("inlineCode",{parentName:"h4"},"UNKNOWN: 501 Protocol scheme 'connect' is not supported |")),(0,a.kt)("p",null,"Dans certains cas, et plus sp\xe9cifiquement lors de l'usage d'un proxy\nd'entreprise, le protocole de connexion n'est pas support\xe9 par la libraire ",(0,a.kt)("em",{parentName:"p"},"lwp"),"\nutlis\xe9e par d\xe9faut par le Plugin Centreon."),(0,a.kt)("p",null,"Cette erreur peut \xeatre r\xe9solue en utilisant le backend HTTP ",(0,a.kt)("em",{parentName:"p"},"curl"),".\nPour ce faire, ajoutez l'option ",(0,a.kt)("inlineCode",{parentName:"p"},"--http-backend='curl'")," \xe0 la commande."))}f.isMDXComponent=!0},7626:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const i="tabItem_Ymn6";function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function o({children:e,hidden:t,className:n}){return a.createElement("div",l({role:"tabpanel",className:(0,r.Z)(i,n)},{hidden:t}),e)}},67709:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(67294),r=n(86010),i=n(90980),l=n(35715),o=n(8854),s=n(8241);const c="tabList__CuJ",p="tabItem_LNqP";function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:m,groupId:f,className:g}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=m?m:k.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),b=(0,l.l)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var N;const h=null===d?d:null!==(N=null!=d?d:null===(t=k.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==N?N:k[0].props.value;if(null!==h&&!v.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:O}=(0,o.U)(),[x,E]=(0,a.useState)(h),P=[],{blockElementScrollPositionUntilNextRender:C}=(0,s.o5)();if(null!=f){const e=y[f];null!=e&&e!==x&&v.some((t=>t.value===e))&&E(e)}const T=e=>{const t=e.currentTarget,n=P.indexOf(t),a=v[n].value;a!==x&&(C(t),E(a),null!=f&&O(f,String(a)))},w=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=P.indexOf(e.currentTarget)+1;var n;t=null!==(n=P[a])&&void 0!==n?n:P[0];break}case"ArrowLeft":{const n=P.indexOf(e.currentTarget)-1;var a;t=null!==(a=P[n])&&void 0!==a?a:P[P.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},g)},v.map((({value:e,label:t,attributes:n})=>a.createElement("li",u({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>P.push(e),onKeyDown:w,onFocus:T,onClick:T},n,{className:(0,r.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":x===e})}),null!=t?t:e)))),n?(0,a.cloneElement)(k.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,i.Z)();return a.createElement(d,u({key:String(t)},e))}}}]);