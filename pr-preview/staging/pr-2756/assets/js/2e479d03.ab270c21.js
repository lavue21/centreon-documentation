"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[80889],{51290:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>m,default:()=>k,frontMatter:()=>s,metadata:()=>c,toc:()=>h});n(67294);var r=n(3905),a=n(51715),o=n(7626);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const s={id:"collect-openmetrics",title:"Collect OpenMetrics"},m=void 0,c={unversionedId:"integrations/plugin-packs/getting-started/how-to-guides/collect-openmetrics",id:"integrations/plugin-packs/getting-started/how-to-guides/collect-openmetrics",title:"Collect OpenMetrics",description:"There is an effort to promote Prometheus exposition format into a standard known",source:"@site/pp/integrations/plugin-packs/getting-started/how-to-guides/collect-openmetrics.md",sourceDirName:"integrations/plugin-packs/getting-started/how-to-guides",slug:"/integrations/plugin-packs/getting-started/how-to-guides/collect-openmetrics",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/getting-started/how-to-guides/collect-openmetrics",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/getting-started/how-to-guides/collect-openmetrics.md",tags:[],version:"current",frontMatter:{id:"collect-openmetrics",title:"Collect OpenMetrics"},sidebar:"pp",previous:{title:"Centreon NSClient++",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/getting-started/how-to-guides/centreon-nsclient-tutorial"},next:{title:"Troubleshooting Plugin errors",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins"}},u={},h=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"App-Monitoring-Openmetrics-File-custom",id:"app-monitoring-openmetrics-file-custom",level:3},{value:"App-Monitoring-Openmetrics-Web-custom",id:"app-monitoring-openmetrics-web-custom",level:3},{value:"How To",id:"how-to",level:2},{value:"Collect metrics using the command line",id:"collect-metrics-using-the-command-line",level:3},{value:"Prometheus",id:"prometheus",level:4},{value:"Add the metrics to our monitoring",id:"add-the-metrics-to-our-monitoring",level:3}],d={toc:h},g="wrapper";function k(t){var{components:e}=t,s=p(t,["components"]);return(0,r.kt)(g,l(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){i(t,e,n[e])}))}return t}({},d,s),{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"There is an effort to promote Prometheus exposition format into a standard known\nas OpenMetrics. Some products adopted the format: InfluxData's suite, InfluxDB\nand Google Cloud Platform."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(a.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the plugin on every poller expected to monitor openmetrics:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Monitoring-Openmetrics\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Install the "OpenMetrics" Centreon Monitoring Connector from the ',(0,r.kt)("strong",{parentName:"p"},"Configuration > Monitoring Connectors Manager")," page.")))),(0,r.kt)(o.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the plugin on every poller expected to monitor openmetrics:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Applications-Monitoring-Openmetrics\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the Centreon Monitoring Connector RPM on your Central server:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-applications-monitoring-openmetrics\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Install the "OpenMetrics" Centreon Monitoring Connector from the ',(0,r.kt)("strong",{parentName:"p"},"Configuration > Monitoring Connectors Manager")," page."))))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,'The Monitoring Connector "OpenMetrics" provide the collect of openmetrics from file on\nthe collector (the template will be App-Monitoring-Openmetrics-File-custom) or\nfrom a API providing openmetrics (the template will be\nApp-Monitoring-Openmetrics-Web-custom). Following the template, several macros\nmust be configured :'),(0,r.kt)("h3",{id:"app-monitoring-openmetrics-file-custom"},"App-Monitoring-Openmetrics-File-custom"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"OPENMETRICSFILEPATH"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path of the file that containts openmetrics (eg. /var/data/metrics)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"OPENMETRICSEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Any extraoptions you may want to add to every command line (eg. a --verbose flag)")))),(0,r.kt)("h3",{id:"app-monitoring-openmetrics-web-custom"},"App-Monitoring-Openmetrics-Web-custom"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"OPENMETRICSPORT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Port use by the endpoint (eg '80', '443' or '9000')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"OPENMETRICSPROTO"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Protocol use by the endpoint ('http' or 'https')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"OPENMETRICSURLPATH"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path of the url that expose openmetrics (eg. /metrics)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"OPENMETRICSUSERNAME"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Username in case of authentication required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"OPENMETRICSPASSWORD"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Password in case of authentication required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"OPENMETRICSEXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Any extraoptions you may want to add to every command line (eg. a --verbose flag)")))),(0,r.kt)("p",null,'Thoses 2 host templates will deploy automatically a service "Scrape-Metrics"\nbind to your host. This service can be duplicated as often as necessary\naccording to the number of metrics to collect.'),(0,r.kt)("h2",{id:"how-to"},"How To"),(0,r.kt)("h3",{id:"collect-metrics-using-the-command-line"},"Collect metrics using the command line"),(0,r.kt)("p",null,"We have a server/container Prometheus which expose metrics ? Or a\nserver/container Cadvisor which also expose metrics ? We are going to see some\nexamples to collect thoses metrics from thoses endpoints."),(0,r.kt)("h4",{id:"prometheus"},"Prometheus"),(0,r.kt)("p",null,"Our server/container Prometheus expose metrics from this url:\n",(0,r.kt)("inlineCode",{parentName:"p"},"<http://prometheus.int.centreon.com:9090/metrics>")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'# HELP prometheus_http_requests_total Counter of HTTP requests.\n# TYPE prometheus_http_requests_total counter\nprometheus_http_requests_total{code="200",handler="/alerts"} 1\nprometheus_http_requests_total{code="200",handler="/api/v1/label/:name/values"} 24\nprometheus_http_requests_total{code="200",handler="/api/v1/labels"} 3\nprometheus_http_requests_total{code="200",handler="/api/v1/query"} 5454\nprometheus_http_requests_total{code="200",handler="/api/v1/query_range"} 3390\nprometheus_http_requests_total{code="200",handler="/api/v1/targets"} 3\nprometheus_http_requests_total{code="200",handler="/config"} 2\nprometheus_http_requests_total{code="200",handler="/flags"} 2\nprometheus_http_requests_total{code="200",handler="/graph"} 17\nprometheus_http_requests_total{code="200",handler="/metrics"} 155749\nprometheus_http_requests_total{code="200",handler="/new/*filepath"} 6\nprometheus_http_requests_total{code="200",handler="/service-discovery"} 2\nprometheus_http_requests_total{code="200",handler="/static/*filepath"} 54\nprometheus_http_requests_total{code="200",handler="/status"} 5\nprometheus_http_requests_total{code="200",handler="/targets"} 11\nprometheus_http_requests_total{code="302",handler="/"} 20\nprometheus_http_requests_total{code="400",handler="/api/v1/query"} 1\nprometheus_http_requests_total{code="400",handler="/api/v1/query_range"} 4\n')),(0,r.kt)("p",null,"We would like here get the number of total requests on handler\n'/api/v1/query","_","range', first we are going to collect all the mertics named\n\"prometheus","_","http","_","requests","_",'total":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_monitoring_openmetrics.pl \\\n --plugin apps::monitoring::openmetrics::plugin \\\n --custommode web \\\n --mode scrape-metrics \\\n --hostname='prometheus.int.centreon.com' \\\n --port='9090' \\\n --proto='http' \\\n --urlpath='/metrics' \\\n --filter-metrics='prometheus_http_requests_total'\n")),(0,r.kt)("p",null,"Command then returns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"OK: All metrics are ok | 'prometheus_http_requests_total'=1;;;; 'prometheus_http_requests_total'=24;;;; 'prometheus_http_requests_total'=3;;;; 'prometheus_http_requests_total'=5454;;;; 'prometheus_http_requests_total'=3390;;;; 'prometheus_http_requests_total'=3;;;; 'prometheus_http_requests_total'=2;;;; 'prometheus_http_requests_total'=2;;;; 'prometheus_http_requests_total'=17;;;; 'prometheus_http_requests_total'=155790;;;; 'prometheus_http_requests_total'=6;;;; 'prometheus_http_requests_total'=2;;;; 'prometheus_http_requests_total'=54;;;; 'prometheus_http_requests_total'=5;;;; 'prometheus_http_requests_total'=11;;;; 'prometheus_http_requests_total'=20;;;; 'prometheus_http_requests_total'=1;;;; 'prometheus_http_requests_total'=4;;;;\n")),(0,r.kt)("p",null,"We used the options: custommode web (",(0,r.kt)("inlineCode",{parentName:"p"},"--custommode web"),") to request the API\nprometheus using HTTP or HTTPS. Then we configured all the informations about\nthe connections: the hostname (",(0,r.kt)("inlineCode",{parentName:"p"},"--hostname='prometheus.int.centreon/com'"),"), the\nport (",(0,r.kt)("inlineCode",{parentName:"p"},"--port='9090'"),"), the protocol (",(0,r.kt)("inlineCode",{parentName:"p"},"--proto='http'"),") and the path of the URL\nwhere the metrics are accessible (",(0,r.kt)("inlineCode",{parentName:"p"},"--urlpath='/metrics'"),"). Then we fetched only\nthe metrics 'prometheus","_","http","_","requests","_","totol'\n(",(0,r.kt)("inlineCode",{parentName:"p"},"--filter-metrics='prometheus_http_requests_total'"),")."),(0,r.kt)("p",null,"Now we would like filter the requests on URL '/api/v1/query","_","range', we are\ngoing to use the option ",(0,r.kt)("inlineCode",{parentName:"p"},"--instance")," to have the possibility to filter on a\nfield and then use the option ",(0,r.kt)("inlineCode",{parentName:"p"},"--filter-instance")," to filter on the value of this\nfields:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_monitoring_openmetrics.pl \\\n --plugin apps::monitoring::openmetrics::plugin \\\n --custommode web \\\n --mode scrape-metrics \\\n --hostname='prometheus.int.centreon.com' \\\n --port='9090' \\\n --proto='http' \\\n --urlpath='/metrics' \\\n --filter-metrics='prometheus_http_requests_total' \\\n --instance='handler' \\\n --filter-instance='/api/v1/query_range'\n")),(0,r.kt)("p",null,"Command then returns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"OK: All metrics are ok | '/api/v1/query_range#prometheus_http_requests_total'=3390;;;; '/api/v1/query_range#prometheus_http_requests_total'=4;;;;\n")),(0,r.kt)("p",null,"We filtered on the 'handlers' (",(0,r.kt)("inlineCode",{parentName:"p"},"--instance='hanlder'"),") and so we only get the\nmetrics where the handler is '/api/v1/query","_","range'\n(",(0,r.kt)("inlineCode",{parentName:"p"},"--filter-instance='/api/v1/query_range'"),")."),(0,r.kt)("p",null,"And now to finish, we are going to filter the requests that return a '200' as\nthe code. And we want to have the possibility to get a graph in Centreon and\nalerting."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_monitoring_openmetrics.pl \\\n --plugin apps::monitoring::openmetrics::plugin \\\n --custommode web \\\n --mode scrape-metrics \\\n --hostname='prometheus.int.centreon.com' \\\n --port='9090' \\\n --proto='http' \\\n --urlpath='/metrics' \\\n --filter-metrics='prometheus_http_requests_total' \\\n --instance='handler' \\\n --filter-instance='/api/v1/query_range' \\\n --subinstance='code' \\\n --filter-subinstance='200' \\\n --warning='5000' \\\n --critical='10000'\n")),(0,r.kt)("p",null,"Command then returns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"OK: All metrics are ok | '/api/v1/query_range~200#prometheus_http_requests_total'=3390;;;;\n")),(0,r.kt)("p",null,"Here, we added the option ",(0,r.kt)("inlineCode",{parentName:"p"},"--subinstance='code'")," to have a second filter on the\ncode value, and we filtered on the '200' code value with the opiton\n",(0,r.kt)("inlineCode",{parentName:"p"},"--filter-subinstance='200'"),". For the thresholds, the options ",(0,r.kt)("inlineCode",{parentName:"p"},"--warning='5000'\n--critical='10000'")," are set to trigger a WARNING alert if the metric's value is\ngranter than 5000 and a CRITICAL alert if the value is granter than 10000."),(0,r.kt)("p",null,"All the options of the different modes can be display using the help (",(0,r.kt)("inlineCode",{parentName:"p"},"--help"),")"),(0,r.kt)("h3",{id:"add-the-metrics-to-our-monitoring"},"Add the metrics to our monitoring"),(0,r.kt)("p",null,"We are going to configure the host Prometheus by using the following parameters\n:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"NAME"),(0,r.kt)("td",{parentName:"tr",align:"left"},"prometheus.int.centreon.com")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ALIAS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"internal prometheus")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"IPADDRESS/FQDN"),(0,r.kt)("td",{parentName:"tr",align:"left"},"prometheus.int.centreon.com")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TEMPLATE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"App-Monitoring-Openmetrics-Web-custom")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"OPENMETRICSPORT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"80")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"OPENMETRICSPROTO"),(0,r.kt)("td",{parentName:"tr",align:"left"},"http")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"OPENMETRICSURLPATH"),(0,r.kt)("td",{parentName:"tr",align:"left"},"/metrics")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(37992).Z,width:"1364",height:"820"})),(0,r.kt)("p",null,'We can edit the service "Scrape-Metrics" which have been created automatically\nby using the template "App-Monitoring-Openmetrics-Web-custom" to configure the\nmacros as the same in CLI :'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"FILTERMETRICS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"prometheus","_","http","_","requests","_","total")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"WARNING"),(0,r.kt)("td",{parentName:"tr",align:"left"},"5000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CRITICAL"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"INSTANCE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"handler")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"FILTERINSTANCE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"/api/v1/query","_","range")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SUBINSTANCE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"FILTERSUBINTACE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"200")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"EXTRAOPTIONS"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-","-verbose")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(9749).Z,width:"1011",height:"670"})),(0,r.kt)("p",null,'And we rename the service by "Query-Api-Number". This service could be duplicate\nand modificate to collect other Openmetrics and get alerting/reporting:'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(65703).Z,width:"1268",height:"208"})))}k.isMDXComponent=!0},37992:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/openmetrics_prometheus_01_configuration_host-1501db778b5122e7423ee99d86f6aadd.png"},9749:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/openmetrics_prometheus_01_configuration_service-e2f7f3657749df4f5a3fa564e7225792.png"},65703:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/openmetrics_prometheus_01_monitoring-357652f7d0bae2d7478e0be66e187f22.png"}}]);