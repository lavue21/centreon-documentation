"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[52926],{43618:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={id:"sso",title:"Configurer une authentification par SSO"},l=void 0,u={unversionedId:"connect/sso",id:"version-23.10/connect/sso",title:"Configurer une authentification par SSO",description:"L'authentification Web SSO repose sur le serveur Web Apache. C'est Apache qui, selon sa configuration, se charge",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/connect/sso.md",sourceDirName:"connect",slug:"/connect/sso",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/connect/sso",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/connect/sso.md",tags:[],version:"23.10",lastUpdatedAt:1699375250,formattedLastUpdatedAt:"7 nov. 2023",frontMatter:{id:"sso",title:"Configurer une authentification par SSO"},sidebar:"version-23.10/docs",previous:{title:"Connecter Centreon \xe0 un annuaire LDAP",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/administration/parameters/ldap"},next:{title:"Configurer une authentification par OpenId Connect",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/connect/openid"}},c={},p=[{value:"Configurer l&#39;authentification Web SSO",id:"configurer-lauthentification-web-sso",level:2},{value:"\xc9tape 1 : Activer l&#39;authentification",id:"\xe9tape-1--activer-lauthentification",level:3},{value:"\xc9tape 2 : Configurer les informations d&#39;acc\xe8s au fournisseur d&#39;identit\xe9",id:"\xe9tape-2--configurer-les-informations-dacc\xe8s-au-fournisseur-didentit\xe9",level:3},{value:"\xc9tape 3 : Configurer les adresses des clients",id:"\xe9tape-3--configurer-les-adresses-des-clients",level:3},{value:"\xc9tape 4 : Configurer le serveur web Apache",id:"\xe9tape-4--configurer-le-serveur-web-apache",level:3},{value:"Step 5: Configurer le fournisseur d&#39;identit\xe9",id:"step-5-configurer-le-fournisseur-didentit\xe9",level:3}],d={toc:p},f="wrapper";function m(e){var{components:t}=e,s=o(e,["components"]);return(0,r.kt)(f,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},d,s),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"L'authentification Web SSO repose sur le serveur Web Apache. C'est Apache qui, selon sa configuration, se charge\nd'authentifier l'utilisateur avant d'autoriser l'acc\xe8s \xe0 l'interface web de Centreon.\nDe nombreux modules Apache permettent l'authentification via les protocoles OIDC, SAMLv2, TLS, Kerberos, etc."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"L'utilisateur doit \xeatre pr\xe9sent dans la configuration de Centreon pour acc\xe9der \xe0 l'interface.")),(0,r.kt)("h2",{id:"configurer-lauthentification-web-sso"},"Configurer l'authentification Web SSO"),(0,r.kt)("p",null,"L'authentification se param\xe8tre \xe0 la page ",(0,r.kt)("strong",{parentName:"p"},"Administration > Authentication > Web SSO Configuration")," :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(11724).Z,width:"1430",height:"1254"})),(0,r.kt)("h3",{id:"\xe9tape-1--activer-lauthentification"},"\xc9tape 1 : Activer l'authentification"),(0,r.kt)("p",null,"Activez l'authentification\xa0:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Enable Web SSO authentication")," permet d'activer ou de d\xe9sactiver l'authentification Web SSO."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Mode d'authentification")," : indique si l'authentification doit se faire uniquement par Web SSO ou en\nutilisant \xe9galement l'authentification locale (",(0,r.kt)("strong",{parentName:"li"},"Mixte"),"). En mode mixte, des utilisateurs cr\xe9\xe9s manuellement dans\nCentreon (et non identifi\xe9s par Web SSO) pourront \xe9galement se connecter.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Lors du param\xe9trage, il est recommand\xe9 d'activer le mode \"mixte\". Cela vous permettra de garder l'acc\xe8s au compte\nlocal ",(0,r.kt)("inlineCode",{parentName:"p"},"admin")," en cas de configuration \xe9rron\xe9e.")),(0,r.kt)("h3",{id:"\xe9tape-2--configurer-les-informations-dacc\xe8s-au-fournisseur-didentit\xe9"},"\xc9tape 2 : Configurer les informations d'acc\xe8s au fournisseur d'identit\xe9"),(0,r.kt)("p",null,"Configurez les informations du fournisseur d'identit\xe9:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Login header attribute name"),": Quelle variable des en-t\xeates doit \xeatre utilis\xe9e pour r\xe9cup\xe9rer le login de\nl'utilisateur. Par exemple ",(0,r.kt)("inlineCode",{parentName:"li"},"REMOTE_USER"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pattern match login (regex)"),": une expression r\xe9guli\xe8re \xe0 rechercher dans l'identifiant. Par exemple, entrez\n",(0,r.kt)("inlineCode",{parentName:"li"},"/@.*/")," pour trouver la fin de l'adresse email de votre identifiant."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pattern replace login (regex)"),": la cha\xeene par laquelle remplacer celle d\xe9finie dans le champ\n",(0,r.kt)("strong",{parentName:"li"},"Pattern match login (regex)")," pour l'authentification (login). Laissez le champ vide pour supprimer cette cha\xeene.")),(0,r.kt)("h3",{id:"\xe9tape-3--configurer-les-adresses-des-clients"},"\xc9tape 3 : Configurer les adresses des clients"),(0,r.kt)("p",null,"Si vous laissez ces deux champs vides, toutes les adresses IP seront autoris\xe9es \xe0 acc\xe9der \xe0 l'interface Centreon."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Adresses de clients de confiance")," : Si vous entrez des adresses IP dans ce champ, seules ces adresses IP seront autoris\xe9es \xe0 acc\xe9der \xe0 l'interface Centreon. Toutes les autres adresses IP seront bloqu\xe9es. S\xe9parez les adressses IP par des virgules."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Adresses de clients sur liste noire")," : Ces adresses IP seront bloqu\xe9es. Toutes les autres adresses IP seront autoris\xe9es.")),(0,r.kt)("h3",{id:"\xe9tape-4--configurer-le-serveur-web-apache"},"\xc9tape 4 : Configurer le serveur web Apache"),(0,r.kt)("p",null,"Vous devez configurer le module Apache permettant l'authentification aupr\xe8s du fournisseur d'identit\xe9.\nUne fois cette configuration effectu\xe9e, vous devez modifier la configuration de Centreon pour Apache afin de\nn'autoriser l'acc\xe8s qu'aux utilisateurs authentifi\xe9s."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\xc9ditez le fichier ",(0,r.kt)("strong",{parentName:"p"},"/etc/httpd/conf.d/10-centreon.conf")," et recherchez le bloc suivant :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-apache"},'    Header set X-Frame-Options: "sameorigin"\n    Header always edit Set-Cookie ^(.*)$ $1;HttpOnly;SameSite=Strict\n    ServerSignature Off\n    TraceEnable Off\n\n    Alias ${base_uri}/api ${install_dir}\n    Alias ${base_uri} ${install_dir}/www/\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Remplacez-le par :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-apache"},'    Header set X-Frame-Options: "sameorigin"\n    Header always edit Set-Cookie ^(.*)$ $1;HttpOnly;SameSite=Strict\n    ServerSignature Off\n    TraceEnable Off\n\n    RequestHeader set X-Forwarded-Proto "http" early\n\n    Alias ${base_uri}/api ${install_dir}\n    Alias ${base_uri} ${install_dir}/www/\n\n    <Location ${base_uri}>\n        AuthType openid-connect\n        Require valid-user\n    </Location>\n')),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Dans cet exemple, le module Apache utilis\xe9 \xe9tait ",(0,r.kt)("strong",{parentName:"p"},"mod_auth_openidc"),". C'est pourquoi l'authentification est ",(0,r.kt)("strong",{parentName:"p"},"openid-connect"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Validez la configuration d'Apache \xe0 l'aide de la commande suivante :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/opt/rh/httpd24/root/usr/sbin/httpd -t\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Red\xe9marrez ensuite le serveur Web Apache :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart httpd24-httpd\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Pour conclure, reconstruisez le cache :"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo -u apache /usr/share/centreon/bin/console cache:clear\n")))),(0,r.kt)("h3",{id:"step-5-configurer-le-fournisseur-didentit\xe9"},"Step 5: Configurer le fournisseur d'identit\xe9"),(0,r.kt)("p",null,"Configurer votre fournisseur d'identit\xe9 pour ajouter l'application Centreon \xe0 utiliser votre protocole pour\nauthentifier vos utilisateur, et pour autoriser ",(0,r.kt)("inlineCode",{parentName:"p"},"l'uri de redirection")," suivante une fois vos utilisateurs authentifi\xe9s :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"{protocol}://{server}:{port}/centreon/websso\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Remplacez ",(0,r.kt)("inlineCode",{parentName:"p"},"{protocol}"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"{server}")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"{port}")," par l'URI permettant d'acc\xe9der \xe0 votre serveur Centreon.\nPar exemple : ",(0,r.kt)("inlineCode",{parentName:"p"},"https://centreon.domain.net/centreon/websso"))))}m.isMDXComponent=!0},11724:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/web-sso-configuration-c45d182db39b20afba9cef08a5ce8bc9.png"}}]);