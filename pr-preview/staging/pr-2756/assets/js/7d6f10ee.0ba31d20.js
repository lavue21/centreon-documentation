"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[36035],{38909:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>s,metadata:()=>u,toc:()=>d});n(67294);var o=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={id:"known-issues",title:"Known issues"},l=void 0,u={unversionedId:"resources/known-issues",id:"version-23.10/resources/known-issues",title:"Known issues",description:"Below is a list of known issues and/or bugs you may encounter.",source:"@site/versioned_docs/version-23.10/resources/known-issues.md",sourceDirName:"resources",slug:"/resources/known-issues",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/resources/known-issues",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/resources/known-issues.md",tags:[],version:"23.10",lastUpdatedAt:1699633150,formattedLastUpdatedAt:"Nov 10, 2023",frontMatter:{id:"known-issues",title:"Known issues"},sidebar:"version-23.10/docs",previous:{title:"What is Centreon CEIP?",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/security/user-data-storage/what-is-centreon-ceip"},next:{title:"Troubleshooting your Centreon platform",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/resources/troubleshooting"}},c={},d=[{value:"Anomaly Detection",id:"anomaly-detection",level:2},{value:"Limitations of Anomaly Detection services used as indicators in BAM",id:"limitations-of-anomaly-detection-services-used-as-indicators-in-bam",level:3},{value:"Workarounds",id:"workarounds",level:4},{value:"The data exclusion feature is not yet available",id:"the-data-exclusion-feature-is-not-yet-available",level:3},{value:"Workaround",id:"workaround",level:3},{value:"Centreon Web",id:"centreon-web",level:2},{value:"Environment variable not found: &quot;hostCentreon&quot;",id:"environment-variable-not-found-hostcentreon",level:3},{value:"Workaround",id:"workaround-1",level:4},{value:"You have reached the maximum of id into centreon_storage.index_data",id:"you-have-reached-the-maximum-of-id-into-centreon_storageindex_data",level:3},{value:"Workaround",id:"workaround-2",level:4},{value:"Autologin does not work with some pages",id:"autologin-does-not-work-with-some-pages",level:3},{value:"Description",id:"description",level:4},{value:"Workaround",id:"workaround-3",level:4},{value:"Centreon MBI",id:"centreon-mbi",level:2},{value:"MBI does not work if databases have custom names",id:"mbi-does-not-work-if-databases-have-custom-names",level:3},{value:"Workaround",id:"workaround-4",level:4},{value:"The Report Parameters tab of a job is empty",id:"the-report-parameters-tab-of-a-job-is-empty",level:3},{value:"Description",id:"description-1",level:4},{value:"Workaround",id:"workaround-5",level:4},{value:"You have reached the maximum of id for servicemetric_id columns",id:"you-have-reached-the-maximum-of-id-for-servicemetric_id-columns",level:3},{value:"Description",id:"description-2",level:4},{value:"Workaround",id:"workaround-6",level:4}],m={toc:d},p="wrapper";function k(e){var{components:t}=e,n=a(e,["components"]);return(0,o.kt)(p,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Below is a list of known issues and/or bugs you may encounter.\nWe try to provide workarounds. We apply fixes when\nnecessary and are forever improving our software in order to solve any\nissues for future releases."),(0,o.kt)("h2",{id:"anomaly-detection"},"Anomaly Detection"),(0,o.kt)("h3",{id:"limitations-of-anomaly-detection-services-used-as-indicators-in-bam"},"Limitations of Anomaly Detection services used as indicators in BAM"),(0,o.kt)("p",null,"When used as indicators in ",(0,o.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/docs/service-mapping/introduction"},"BAM"),", Anomaly Detection services:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Are not supported by ",(0,o.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2756/docs/api/clapi"},"CLAPI")," or by ",(0,o.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2756/docs/api/rest-api-v1"},"the v1 API"),"."),(0,o.kt)("li",{parentName:"ol"},"Cannot be configured using the ",(0,o.kt)("strong",{parentName:"li"},"Configuration > Business activities > Indicators")," page. You must first create a Business activity on the ",(0,o.kt)("strong",{parentName:"li"},"Configuration > Business activities > Business activities")," page, then use the Anomaly Detection service in the business activity.")),(0,o.kt)("h4",{id:"workarounds"},"Workarounds"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Use the v2 API."),(0,o.kt)("li",{parentName:"ol"},"Create the business activity first, then use the Anomaly Detection service as an indicator within the business activity (see above).")),(0,o.kt)("h3",{id:"the-data-exclusion-feature-is-not-yet-available"},"The data exclusion feature is not yet available"),(0,o.kt)("p",null,'The feature that allows you to exclude some data from Anomaly Detection\'s model computation appears in the interface but is not implemented yet. You get the message "Not implemented yet" when trying to use the feature.'),(0,o.kt)("h3",{id:"workaround"},"Workaround"),(0,o.kt)("p",null,"There is no workaround but the feature will be available in a coming version."),(0,o.kt)("h2",{id:"centreon-web"},"Centreon Web"),(0,o.kt)("h3",{id:"environment-variable-not-found-hostcentreon"},'Environment variable not found: "hostCentreon"'),(0,o.kt)("p",null,"During a central server (or remote server) installation, an error message appears for a short time in the snackbar when accessing the wizard to complete the installation. The error message is the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},'The controller for URI "/centreon/api/latest/platform/versions" is not callable: Environment variable not found: "hostCentreon".\n')),(0,o.kt)("h4",{id:"workaround-1"},"Workaround"),(0,o.kt)("p",null,"There is no workaround and this message does not prevent you from finalizing the installation."),(0,o.kt)("h3",{id:"you-have-reached-the-maximum-of-id-into-centreon_storageindex_data"},"You have reached the maximum of id into centreon_storage.index_data"),(0,o.kt)("h4",{id:"workaround-2"},"Workaround"),(0,o.kt)("p",null,"Play the following query into MariaDB:"),(0,o.kt)("p",null,"In your monitoring database:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE index_data MODIFY id bigint unsigned AUTO_INCREMENT;\nALTER TABLE metrics MODIFY index_id bigint unsigned;\n")),(0,o.kt)("p",null,"In your configuration database:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE ods_view_details MODIFY index_id bigint unsigned;\nALTER TABLE virtual_metrics MODIFY index_id bigint unsigned;\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Depending on your metrics volumes, this operation could be more or less long.")),(0,o.kt)("h3",{id:"autologin-does-not-work-with-some-pages"},"Autologin does not work with some pages"),(0,o.kt)("h4",{id:"description"},"Description"),(0,o.kt)("p",null,"Autologin is currently not supported on the following pages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Monitoring > Resources Status")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Configuration > Hosts > Discovery")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Configuration > Business Activity > Business Views")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Configuration > Business Activity > Business Activity"))),(0,o.kt)("h4",{id:"workaround-3"},"Workaround"),(0,o.kt)("p",null,"There is currently no workaround."),(0,o.kt)("h2",{id:"centreon-mbi"},"Centreon MBI"),(0,o.kt)("h3",{id:"mbi-does-not-work-if-databases-have-custom-names"},"MBI does not work if databases have custom names"),(0,o.kt)("h4",{id:"workaround-4"},"Workaround"),(0,o.kt)("p",null,"There is currently no workaround."),(0,o.kt)("h3",{id:"the-report-parameters-tab-of-a-job-is-empty"},"The Report Parameters tab of a job is empty"),(0,o.kt)("h4",{id:"description-1"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Report Parameters")," tab of a job is empty (",(0,o.kt)("strong",{parentName:"p"},"Reporting > Monitoring Business Intelligence > Jobs"),")"),(0,o.kt)("h4",{id:"workaround-5"},"Workaround"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Go to the ",(0,o.kt)("strong",{parentName:"li"},"Configuration")," tab of the job"),(0,o.kt)("li",{parentName:"ul"},"Select a different report design from the ",(0,o.kt)("strong",{parentName:"li"},"Report design")," list"),(0,o.kt)("li",{parentName:"ul"},"Select the original report design"),(0,o.kt)("li",{parentName:"ul"},"Go back to the ",(0,o.kt)("strong",{parentName:"li"},"Report Parameters")," tab")),(0,o.kt)("h3",{id:"you-have-reached-the-maximum-of-id-for-servicemetric_id-columns"},"You have reached the maximum of id for servicemetric_id columns"),(0,o.kt)("h4",{id:"description-2"},"Description"),(0,o.kt)("p",null,"If you have a very large infrastructure, it is possible that the ",(0,o.kt)("inlineCode",{parentName:"p"},"servicemetric_id")," column size has been reached."),(0,o.kt)("h4",{id:"workaround-6"},"Workaround"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Depending on your data volume, this operation could be more or less long.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Connect in the reporting server")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Disable cron job in ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/cron.d/centreon-bi-engine"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"#30 4 * * * root /usr/share/centreon-bi//bin/centreonBIETL -d >> /var/log/centreon-bi//centreonBIETL.log 2>&1\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Execute the following queries in ",(0,o.kt)("inlineCode",{parentName:"p"},"centreon_storage")," database:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE mod_bi_metricdailyvalue MODIFY servicemetric_id BIGINT(20) UNSIGNED NOT NULL;\nALTER TABLE mod_bi_metrichourlyvalue MODIFY servicemetric_id BIGINT(20) UNSIGNED NOT NULL;\nALTER TABLE mod_bi_metricmonthcapacity MODIFY servicemetric_id BIGINT(20) UNSIGNED NOT NULL;\nALTER TABLE mod_bi_metriccentiledailyvalue MODIFY servicemetric_id BIGINT(20) UNSIGNED NOT NULL;\nALTER TABLE mod_bi_metriccentilemonthlyvalue MODIFY servicemetric_id BIGINT(20) UNSIGNED NOT NULL;\nALTER TABLE mod_bi_metriccentileweeklyvalue MODIFY servicemetric_id BIGINT(20) UNSIGNED NOT NULL;\nALTER TABLE mod_bi_servicemetrics MODIFY id BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT;\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Enable cron job in ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/cron.d/centreon-bi-engine")," :"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"30 4 * * * root /usr/share/centreon-bi//bin/centreonBIETL -d >> /var/log/centreon-bi//centreonBIETL.log 2>&1\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If the operation occurred during the usual launch of the scheduled task, run the following command indicating the correct start and end dates:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"/usr/share/centreon-bi/bin/centreonBIETL -rIEDP -s YYYY-MM-DD -e YYYY-MM-DD\n")))))}k.isMDXComponent=!0}}]);