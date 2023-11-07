"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[17405],{97834:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>v,frontMatter:()=>s,metadata:()=>u,toc:()=>d});t(67294);var i=t(3905);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function a(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={id:"known-issues",title:"Probl\xe8mes connus"},l=void 0,u={unversionedId:"resources/known-issues",id:"version-23.10/resources/known-issues",title:"Probl\xe8mes connus",description:"Voici une liste de probl\xe8mes connus et/ou bugs que vous pouvez rencontrer.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-23.10/resources/known-issues.md",sourceDirName:"resources",slug:"/resources/known-issues",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/resources/known-issues",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/i18n/fr/docusaurus-plugin-content-docs/version-23.10/resources/known-issues.md",tags:[],version:"23.10",lastUpdatedAt:1699375250,formattedLastUpdatedAt:"7 nov. 2023",frontMatter:{id:"known-issues",title:"Probl\xe8mes connus"},sidebar:"version-23.10/docs",previous:{title:"Qu'est-ce que Centreon CEIP?",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/security/user-data-storage/what-is-centreon-ceip"},next:{title:"D\xe9pannage de la plateforme Centreon",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/resources/troubleshooting"}},c={},d=[{value:"Anomaly Detection",id:"anomaly-detection",level:2},{value:"Limitations des services Anomaly Detection utilis\xe9s en tant qu&#39;indicateurs dans BAM",id:"limitations-des-services-anomaly-detection-utilis\xe9s-en-tant-quindicateurs-dans-bam",level:3},{value:"Contournement",id:"contournement",level:4},{value:"La fonctionnalit\xe9 d&#39;exclusion de donn\xe9es n&#39;est pas encore disponible",id:"la-fonctionnalit\xe9-dexclusion-de-donn\xe9es-nest-pas-encore-disponible",level:3},{value:"Contournement",id:"contournement-1",level:4},{value:"Centreon Web",id:"centreon-web",level:2},{value:"Environment variable not found: &quot;hostCentreon&quot;",id:"environment-variable-not-found-hostcentreon",level:3},{value:"Contournement",id:"contournement-2",level:4},{value:"Vous avez atteint le nombre maximum d&#39;id dans la table centreon_storage.index_data",id:"vous-avez-atteint-le-nombre-maximum-did-dans-la-table-centreon_storageindex_data",level:3},{value:"Contournement",id:"contournement-3",level:4},{value:"L&#39;Autologin ne fonctionne pas avec certaines pages",id:"lautologin-ne-fonctionne-pas-avec-certaines-pages",level:3},{value:"Description",id:"description",level:4},{value:"Contournement",id:"contournement-4",level:4},{value:"Centreon MBI",id:"centreon-mbi",level:2},{value:"MBI ne fonctionne pas si les bases de donn\xe9es ont des noms personnalis\xe9s",id:"mbi-ne-fonctionne-pas-si-les-bases-de-donn\xe9es-ont-des-noms-personnalis\xe9s",level:3},{value:"Contournement",id:"contournement-5",level:4},{value:"L&#39;onglet Param\xe8tres du rapport d&#39;une t\xe2che est vide",id:"longlet-param\xe8tres-du-rapport-dune-t\xe2che-est-vide",level:3},{value:"Description",id:"description-1",level:4},{value:"Contournement",id:"contournement-6",level:4},{value:"Vous avez atteint le nombre maximum d&#39;id pour les colonnes servicemetric_id",id:"vous-avez-atteint-le-nombre-maximum-did-pour-les-colonnes-servicemetric_id",level:3},{value:"Description",id:"description-2",level:4},{value:"Contournement",id:"contournement-7",level:4}],p={toc:d},m="wrapper";function v(e){var{components:n}=e,t=a(e,["components"]);return(0,i.kt)(m,r(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){o(e,n,t[n])}))}return e}({},p,t),{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Voici une liste de probl\xe8mes connus et/ou bugs que vous pouvez rencontrer.\nNous essayons ici de fournir des contournements.\nNous appliquons des correctifs lorsque cela est n\xe9cessaire et am\xe9liorons continuellement notre logiciel afin de r\xe9soudre les probl\xe8mes de prochaines versions."),(0,i.kt)("h2",{id:"anomaly-detection"},"Anomaly Detection"),(0,i.kt)("h3",{id:"limitations-des-services-anomaly-detection-utilis\xe9s-en-tant-quindicateurs-dans-bam"},"Limitations des services Anomaly Detection utilis\xe9s en tant qu'indicateurs dans BAM"),(0,i.kt)("p",null,"Lorsqu'ils sont utilis\xe9s en tant qu'indicateurs dans ",(0,i.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/service-mapping/introduction"},"BAM"),", les services Anomaly Detection :"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Ne sont ni pris en charge par ",(0,i.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/api/clapi"},"CLAPI")," ni par ",(0,i.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2776/fr/docs/api/rest-api-v1"},"l'API V1"),"."),(0,i.kt)("li",{parentName:"ol"},"Ne peuvent pas \xeatre configur\xe9s via la page ",(0,i.kt)("strong",{parentName:"li"},"Configuration > Activit\xe9s m\xe9tier > Indicateurs"),". Il faut d'abord cr\xe9er une activit\xe9 m\xe9tier via la page ",(0,i.kt)("strong",{parentName:"li"},"Configuration > Activit\xe9s m\xe9tier > Activit\xe9s m\xe9tier"),", puis utiliser le service Anomaly Detection dans l'activit\xe9 m\xe9tier.")),(0,i.kt)("h4",{id:"contournement"},"Contournement"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Utilisez l'API v2."),(0,i.kt)("li",{parentName:"ol"},"Cr\xe9ez d'abord l'activit\xe9 m\xe9tier, puis utilisez le service Anomaly Detecion en tant qu'indicateur dans celle-ci (voir ci-dessus).")),(0,i.kt)("h3",{id:"la-fonctionnalit\xe9-dexclusion-de-donn\xe9es-nest-pas-encore-disponible"},"La fonctionnalit\xe9 d'exclusion de donn\xe9es n'est pas encore disponible"),(0,i.kt)("p",null,"La fonctionnalit\xe9 qui vous permet d'exclure des donn\xe9es de calcul du mod\xe8le de d\xe9tection des anomalies appara\xeet dans l'interface mais n'est pas encore impl\xe9ment\xe9e. Vous obtenez le message \"Not implemented yet\" lorsque vous essayez d'utiliser cette fonctionnalit\xe9."),(0,i.kt)("h4",{id:"contournement-1"},"Contournement"),(0,i.kt)("p",null,"Il n'existe pas de contournement mais la fonctionnalit\xe9 sera disponible dans une prochaine version."),(0,i.kt)("h2",{id:"centreon-web"},"Centreon Web"),(0,i.kt)("h3",{id:"environment-variable-not-found-hostcentreon"},'Environment variable not found: "hostCentreon"'),(0,i.kt)("p",null,"Lors de l'installation d'un serveur central (ou d'un serveur distant), un message d'erreur appara\xeet pendant un court instant dans la barre de notification lors de l'acc\xe8s \xe0 l'assistant pour terminer l'installation. Le message d'erreur est le suivant :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'The controller for URI "/centreon/api/latest/platform/versions" is not callable: Environment variable not found: "hostCentreon".\n')),(0,i.kt)("h4",{id:"contournement-2"},"Contournement"),(0,i.kt)("p",null,"Il n'y a pas de solution de contournement et ce message n'emp\xeache pas de finaliser l'installation."),(0,i.kt)("h3",{id:"vous-avez-atteint-le-nombre-maximum-did-dans-la-table-centreon_storageindex_data"},"Vous avez atteint le nombre maximum d'id dans la table centreon_storage.index_data"),(0,i.kt)("h4",{id:"contournement-3"},"Contournement"),(0,i.kt)("p",null,"Ex\xe9cutez les requ\xeates suivantes dans MariaDB :"),(0,i.kt)("p",null,"Dans votre base de donn\xe9es temps r\xe9el :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE index_data MODIFY id bigint unsigned AUTO_INCREMENT;\nALTER TABLE metrics MODIFY index_id bigint unsigned;\n")),(0,i.kt)("p",null,"Dans votre base de donn\xe9es de configuration :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE ods_view_details MODIFY index_id bigint unsigned;\nALTER TABLE virtual_metrics MODIFY index_id bigint unsigned;\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Selon la volum\xe9trie de vos m\xe9triques, cette op\xe9ration peut \xeatre plus ou moins longue.")),(0,i.kt)("h3",{id:"lautologin-ne-fonctionne-pas-avec-certaines-pages"},"L'Autologin ne fonctionne pas avec certaines pages"),(0,i.kt)("h4",{id:"description"},"Description"),(0,i.kt)("p",null,"L'autologin n'est actuellement pas g\xe9r\xe9 pour les pages suivantes :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Monitoring > Resources Status")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Configuration > Hosts > Discovery")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Configuration > Business Activity > Business Views")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Configuration > Business Activity > Business Activity"))),(0,i.kt)("h4",{id:"contournement-4"},"Contournement"),(0,i.kt)("p",null,"Il n'existe actuellement pas de contournement."),(0,i.kt)("h2",{id:"centreon-mbi"},"Centreon MBI"),(0,i.kt)("h3",{id:"mbi-ne-fonctionne-pas-si-les-bases-de-donn\xe9es-ont-des-noms-personnalis\xe9s"},"MBI ne fonctionne pas si les bases de donn\xe9es ont des noms personnalis\xe9s"),(0,i.kt)("h4",{id:"contournement-5"},"Contournement"),(0,i.kt)("p",null,"Il n'existe actuellement pas de contournement."),(0,i.kt)("h3",{id:"longlet-param\xe8tres-du-rapport-dune-t\xe2che-est-vide"},"L'onglet Param\xe8tres du rapport d'une t\xe2che est vide"),(0,i.kt)("h4",{id:"description-1"},"Description"),(0,i.kt)("p",null,"L'onglet ",(0,i.kt)("strong",{parentName:"p"},"Param\xe8tres du rapport")," d'une t\xe2che est vide (",(0,i.kt)("strong",{parentName:"p"},"Rapports > Monitoring Business Intelligence > T\xe2ches"),")"),(0,i.kt)("h4",{id:"contournement-6"},"Contournement"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Allez \xe0 l'onglet ",(0,i.kt)("strong",{parentName:"li"},"Configuration")," de la t\xe2che"),(0,i.kt)("li",{parentName:"ul"},"S\xe9lectionnez un mod\xe8le diff\xe9rent dans la liste ",(0,i.kt)("strong",{parentName:"li"},"Mod\xe8le de rapport")),(0,i.kt)("li",{parentName:"ul"},"S\xe9lectionnez le bon mod\xe8le de rapport"),(0,i.kt)("li",{parentName:"ul"},"Retournez sur l'onglet ",(0,i.kt)("strong",{parentName:"li"},"Param\xe8tres du rapport"))),(0,i.kt)("h3",{id:"vous-avez-atteint-le-nombre-maximum-did-pour-les-colonnes-servicemetric_id"},"Vous avez atteint le nombre maximum d'id pour les colonnes servicemetric_id"),(0,i.kt)("h4",{id:"description-2"},"Description"),(0,i.kt)("p",null,"Si vous poss\xe9dez une tr\xe8s large infrastructure, il est possible que la taille limite de la colonne ",(0,i.kt)("inlineCode",{parentName:"p"},"servicemetric_id")," soit atteinte."),(0,i.kt)("h4",{id:"contournement-7"},"Contournement"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Selon la volum\xe9trie des donn\xe9es, cette op\xe9ration peut \xeatre plus ou moins longue.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Connectez-vous sur le serveur de reporting")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"D\xe9sactivez la t\xe2che planifi\xe9e dans ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/cron.d/centreon-bi-engine")," :"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"#30 4 * * * root /usr/share/centreon-bi//bin/centreonBIETL -d >> /var/log/centreon-bi//centreonBIETL.log 2>&1\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Ex\xe9cutez les requ\xeates suivantes dans la base de donn\xe9es ",(0,i.kt)("inlineCode",{parentName:"p"},"centreon_storage")," :"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE mod_bi_metricdailyvalue MODIFY servicemetric_id BIGINT(20) UNSIGNED NOT NULL;\nALTER TABLE mod_bi_metrichourlyvalue MODIFY servicemetric_id BIGINT(20) UNSIGNED NOT NULL;\nALTER TABLE mod_bi_metricmonthcapacity MODIFY servicemetric_id BIGINT(20) UNSIGNED NOT NULL;\nALTER TABLE mod_bi_metriccentiledailyvalue MODIFY servicemetric_id BIGINT(20) UNSIGNED NOT NULL;\nALTER TABLE mod_bi_metriccentilemonthlyvalue MODIFY servicemetric_id BIGINT(20) UNSIGNED NOT NULL;\nALTER TABLE mod_bi_metriccentileweeklyvalue MODIFY servicemetric_id BIGINT(20) UNSIGNED NOT NULL;\nALTER TABLE mod_bi_servicemetrics MODIFY id BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT;\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Activez la t\xe2che planifi\xe9e dans ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/cron.d/centreon-bi-engine")," :"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"30 4 * * * root /usr/share/centreon-bi//bin/centreonBIETL -d >> /var/log/centreon-bi//centreonBIETL.log 2>&1\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Si l'op\xe9ration est effectu\xe9e pendant le lancement habituel de la t\xe2che planifi\xe9e, ex\xe9cutez la commande suivante en indiquant les bonnes dates de d\xe9but et de fin :"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"/usr/share/centreon-bi/bin/centreonBIETL -rIEDP -s YYYY-MM-DD -e YYYY-MM-DD\n")))))}v.isMDXComponent=!0}}]);