"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[95646],{53523:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>u,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>m});t(67294);var l=t(3905),r=t(51715),a=t(7626);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function c(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const s={id:"key-rotation",title:"Rotation de cl\xe9s RPM"},u=void 0,p={unversionedId:"security/key-rotation",id:"version-23.10/security/key-rotation",title:"Rotation de cl\xe9s RPM",description:"Pour des raisons de s\xe9curit\xe9, les cl\xe9s utilis\xe9es pour signer les RPMs Centreon doivent \xeatre chang\xe9es occasionnellement.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/security/key-rotation.md",sourceDirName:"security",slug:"/security/key-rotation",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/security/key-rotation",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/security/key-rotation.md",tags:[],version:"23.10",lastUpdatedAt:1699375250,formattedLastUpdatedAt:"7 nov. 2023",frontMatter:{id:"key-rotation",title:"Rotation de cl\xe9s RPM"},sidebar:"version-23.10/docs",previous:{title:"La s\xe9curit\xe9 chez Centreon",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/security/"},next:{title:"Conformit\xe9 RGPD",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/security/user-data-storage/gdpr-compliance"}},g={},m=[{value:"Nouvelle installation",id:"nouvelle-installation",level:2},{value:"Installation existante",id:"installation-existante",level:2},{value:"V\xe9rifications",id:"v\xe9rifications",level:2},{value:"Liste des cl\xe9s",id:"liste-des-cl\xe9s",level:2}],d={toc:m},k="wrapper";function f(e){var{components:n}=e,t=c(e,["components"]);return(0,l.kt)(k,i(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},l=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),l.forEach((function(n){o(e,n,t[n])}))}return e}({},d,t),{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Pour des raisons de s\xe9curit\xe9, les cl\xe9s utilis\xe9es pour signer les RPMs Centreon doivent \xeatre chang\xe9es occasionnellement."),(0,l.kt)("h2",{id:"nouvelle-installation"},"Nouvelle installation"),(0,l.kt)("p",null,"Si vous avez install\xe9 une nouvelle plateforme Centreon apr\xe8s la publication de la nouvelle cl\xe9, aucune action n'est \xe0 effectuer hormis\naccepter la nouvelle cl\xe9 lorsque n\xe9cessaire."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"R\xe9cup\xe9ration de la cl\xe9 \xe0 partir de https://yum-gpg.centreon.com/RPM-GPG-KEY-CES\nImportation de la clef GPG 0x3FC49C1B\xa0:\nID utilisateur\xa0: \xab\xa0Centreon Enterprise Server Official Signing Key <admin@centreon.com>\xa0\xbb\nEmpreinte     \xa0: 1035 e42c b766 7952 ee42 dee9 a97d aa5a 3fc4 9c1b\nProvient de   \xa0: https://yum-gpg.centreon.com/RPM-GPG-KEY-CES\nEst-ce correct [o/N]\xa0: y\n")),(0,l.kt)("p",null,"Vous pouvez cependant ",(0,l.kt)("a",{parentName:"p",href:"#v%C3%A9rifications"},"v\xe9rifier que vous avez la bonne cl\xe9"),"."),(0,l.kt)("h2",{id:"installation-existante"},"Installation existante"),(0,l.kt)("p",null,"Si vous avez install\xe9 une plateforme Centreon avant la publication de la nouvelle cl\xe9, la cl\xe9 existante doit \xeatre remplac\xe9e par la nouvelle."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"T\xe9l\xe9chargez le script suivant :")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -JO https://raw.githubusercontent.com/centreon/centreon/master/centreon/check-centreon-gpg-key.sh\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Rendez le script ex\xe9cutable :")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"chmod u+x check-centreon-gpg-key.sh\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Ex\xe9cutez le script :")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"    sh check-centreon-gpg-key.sh\n")),(0,l.kt)("p",null,"Ce script :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"v\xe9rifie la cl\xe9 RPM dans la base de donn\xe9es RPM, et vous demande de la supprimer"),(0,l.kt)("li",{parentName:"ul"},"v\xe9rifie le fichier de cl\xe9 dans le r\xe9pertoire ",(0,l.kt)("strong",{parentName:"li"},"/etc/pki/rpm-gpg")),(0,l.kt)("li",{parentName:"ul"},"vous fait importer la nouvelle cl\xe9 RPM dans la base de donn\xe9es RPM"),(0,l.kt)("li",{parentName:"ul"},"vous fait mettre \xe0 jour le paquet RPM ",(0,l.kt)("strong",{parentName:"li"},"release")," (cela supprimera la cl\xe9 r\xe9voqu\xe9e du r\xe9pertoire ",(0,l.kt)("strong",{parentName:"li"},"/etc/pki/rpm-gpg"),")"),(0,l.kt)("li",{parentName:"ul"},"vous fait v\xe9rifier la signature des paquets RPM.")),(0,l.kt)("h2",{id:"v\xe9rifications"},"V\xe9rifications"),(0,l.kt)("p",null,"V\xe9rifiez que la nouvelle cl\xe9 a \xe9t\xe9 correctement import\xe9e. Pour la ",(0,l.kt)("a",{parentName:"p",href:"#list-of-keys"},"nouvelle cl\xe9 publi\xe9e le 14 octobre 2021")," :"),(0,l.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"Nouvelle installation",label:"Nouvelle installation",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Apr\xe8s l'installation, v\xe9rifiez si la nouvelle cl\xe9 a \xe9t\xe9 correctement import\xe9e dans la base de donn\xe9es RPM :")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"rpm -qi gpg-pubkey-3fc49c1b-6166eb52\n")),(0,l.kt)("p",null,"Le r\xe9sultat devrait \xeatre le suivant :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"Name        : gpg-pubkey\nVersion     : 3fc49c1b\nRelease     : 6166eb52\nArchitecture: (none)\nInstall Date: jeu. 14 oct. 2021 09:25:42 UTC\nGroup       : Public Keys\nSize        : 0\nLicense     : pubkey\nSignature   : (none)\nSource RPM  : (none)\nBuild Date  : mer. 13 oct. 2021 14:21:06 UTC\nBuild Host  : localhost\nRelocations : (not relocatable)\nPackager    : Centreon Enterprise Server Official Signing Key <admin@centreon.com>\nSummary     : gpg(Centreon Enterprise Server Official Signing Key <admin@centreon.com>)\nDescription :\n-----BEGIN PGP PUBLIC KEY BLOCK-----\nVersion: rpm-4.11.3 (NSS-3)\n\n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\n4nhvUWkBsZoUPIeT\n=BqDF\n-----END PGP PUBLIC KEY BLOCK-----\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"V\xe9rifiez que la seule cl\xe9 Centreon pr\xe9sente dans la base de donn\xe9es RPM est la suivante : ",(0,l.kt)("strong",{parentName:"li"},"gpg-pubkey-3fc49c1b-6166eb52"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"rpm -q gpg-pubkey --qf '%{NAME}-%{VERSION}-%{RELEASE}\\t%{SUMMARY}\\n'\n")),(0,l.kt)("p",null,"Le r\xe9sultat devrait \xeatre le suivant :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"gpg-pubkey-f4a80eb5-53a7ff4b    gpg(CentOS-7 Key (CentOS 7 Official Signing Key) <security@centos.org>)\ngpg-pubkey-f2ee9d55-560cfc0a    gpg(CentOS SoftwareCollections SIG (https://wiki.centos.org/SpecialInterestGroup/SCLo) <security@centos.org>)\ngpg-pubkey-3fc49c1b-6166eb52    gpg(Centreon Enterprise Server Official Signing Key <admin@centreon.com>)\n"))),(0,l.kt)(a.Z,{value:"Installation existante",label:"Installation existante",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"V\xe9rifiez si la nouvelle cl\xe9 a \xe9t\xe9 correctement import\xe9e dans la base de donn\xe9es RPM :")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"rpm -qi gpg-pubkey-3fc49c1b-6166eb52\n")),(0,l.kt)("p",null,"Le r\xe9sultat devrait \xeatre le suivant :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"Name        : gpg-pubkey\nVersion     : 3fc49c1b\nRelease     : 6166eb52\nArchitecture: (none)\nInstall Date: jeu. 14 oct. 2021 09:25:42 UTC\nGroup       : Public Keys\nSize        : 0\nLicense     : pubkey\nSignature   : (none)\nSource RPM  : (none)\nBuild Date  : mer. 13 oct. 2021 14:21:06 UTC\nBuild Host  : localhost\nRelocations : (not relocatable)\nPackager    : Centreon Enterprise Server Official Signing Key <admin@centreon.com>\nSummary     : gpg(Centreon Enterprise Server Official Signing Key <admin@centreon.com>)\nDescription :\n-----BEGIN PGP PUBLIC KEY BLOCK-----\nVersion: rpm-4.11.3 (NSS-3)\n\n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\n4nhvUWkBsZoUPIeT\n=BqDF\n-----END PGP PUBLIC KEY BLOCK-----\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"V\xe9rifiez que l'ancienne cl\xe9 n'appara\xeet plus dans la base de donn\xe9es RPM (il devrait y avoir uniquement la cl\xe9 ",(0,l.kt)("strong",{parentName:"li"},"gpg-pubkey-3fc49c1b-6166eb52"),"):")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"rpm -q gpg-pubkey --qf '%{NAME}-%{VERSION}-%{RELEASE}\\t%{SUMMARY}\\n'\n")),(0,l.kt)("p",null,"Le r\xe9sultat devrait \xeatre le suivant :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"gpg-pubkey-f4a80eb5-53a7ff4b    gpg(CentOS-7 Key (CentOS 7 Official Signing Key) <security@centos.org>)\ngpg-pubkey-f2ee9d55-560cfc0a    gpg(CentOS SoftwareCollections SIG (https://wiki.centos.org/SpecialInterestGroup/SCLo) <security@centos.org>)\ngpg-pubkey-3fc49c1b-6166eb52    gpg(Centreon Enterprise Server Official Signing Key <admin@centreon.com>)\n")))),(0,l.kt)("h2",{id:"liste-des-cl\xe9s"},"Liste des cl\xe9s"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Empreinte"),(0,l.kt)("th",{parentName:"tr",align:null},"Validit\xe9"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0E52 401B 40F6 044F 928C 0B7B F6FC 4AE3 8A76 52BC"),(0,l.kt)("td",{parentName:"tr",align:null},"r\xe9voqu\xe9e le 14 octobre 2021")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://yum-gpg.centreon.com/RPM-GPG-KEY-CES"},"1035 E42C B766 7952 EE42 DEE9 A97D AA5A 3FC4 9C1B")),(0,l.kt)("td",{parentName:"tr",align:null},"valide \xe0 partir du 14 octobre 2021")))))}f.isMDXComponent=!0}}]);