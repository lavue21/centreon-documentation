"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[79293],{42753:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});i(67294);var n=i(3905);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})),e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}const s={id:"meta-services",title:"Creating Meta Services"},l=void 0,c={unversionedId:"monitoring/basic-objects/meta-services",id:"version-23.10/monitoring/basic-objects/meta-services",title:"Creating Meta Services",description:"Definition",source:"@site/versioned_docs/version-23.10/monitoring/basic-objects/meta-services.md",sourceDirName:"monitoring/basic-objects",slug:"/monitoring/basic-objects/meta-services",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/monitoring/basic-objects/meta-services",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/monitoring/basic-objects/meta-services.md",tags:[],version:"23.10",lastUpdatedAt:1699633150,formattedLastUpdatedAt:"Nov 10, 2023",frontMatter:{id:"meta-services",title:"Creating Meta Services"},sidebar:"version-23.10/docs",previous:{title:"Using service templates",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/monitoring/basic-objects/services-templates"},next:{title:"Introduction",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/monitoring/discovery/introduction"}},m={},p=[{value:"Definition",id:"definition",level:2},{value:"Types of computing",id:"types-of-computing",level:3},{value:"Types of data source",id:"types-of-data-source",level:3},{value:"Configuration",id:"configuration",level:2},{value:"General information",id:"general-information",level:3},{value:"Meta Service status",id:"meta-service-status",level:3},{value:"Notification",id:"notification",level:3},{value:"Additional information",id:"additional-information",level:3},{value:"Select services manually",id:"select-services-manually",level:2}],d={toc:p},u="wrapper";function h(e){var{components:t}=e,s=o(e,["components"]);return(0,n.kt)(u,r(function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),n.forEach((function(t){a(e,t,i[t])}))}return e}({},d,s),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"definition"},"Definition"),(0,n.kt)("p",null,"A meta-service is a virtual service providing the aggregation of metrics from different services via a mathematical\noperation. Meta-services are managed in the same way as a service, i.e. they have thresholds, a notification process,\ngenerate a performance graph, etc."),(0,n.kt)("p",null,"Example: It is possible to determine the total consumption of WAN traffic by adding together, within a meta-service, all\nthe services supervising the WAN traffic individually."),(0,n.kt)("h3",{id:"types-of-computing"},"Types of computing"),(0,n.kt)("p",null,"Several types of calculation are possible on the metrics retrieved:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Average"),": calculate the average of the performance data"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Sum"),": calculate the sum of the performance data"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Min"),": retrieve the minimum of all the performance data"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Max"),": retrieve the maximum of all the performance data")),(0,n.kt)("h3",{id:"types-of-data-source"},"Types of data source"),(0,n.kt)("p",null,"The result of the calculation is an item of performance data (metric), which generates a performance graph. To trace the\nresult most effectively, it is necessary to select the type of data source (GAUGE by default)."),(0,n.kt)("p",null,"The types of data source available are as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"GAUGE")," type records an instantaneous value (temperature, humidity, processor, etc.)"),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"COUNTER")," type records an incremental value in relation to the previous result"),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"DRIFT")," type stores the derivative of the line from the last to the current value of the data. This can be useful\nfor capacities, for example to measure the rate of people entering or leaving a room."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"ABSOLUTE")," type is for counters which reset on reading. It is used for fast counters that have a tendency to overrun.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"More information on the ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"http://oss.oetiker.ch/rrdtool/doc/rrdcreate.en"},"RRDTools website")),".")),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"To add a meta-service:"),(0,n.kt)("p",null,"Go to ",(0,n.kt)("strong",{parentName:"p"},"Configuration ",">"," Services ",">"," Meta Services")," and click ",(0,n.kt)("strong",{parentName:"p"},"Add"),":"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:i(93766).Z,width:"1141",height:"863"})),(0,n.kt)("h3",{id:"general-information"},"General information"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Meta Service Name")," field corresponds to the name of the meta-service displayed in the interface."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Output format string (printf-style)")," field corresponds to the output message (\u2018output\u2019) visible in Centreon.\nThe \u201c%d\u201d value corresponds to the value calculated by the meta-service"),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Warning level")," and ",(0,n.kt)("strong",{parentName:"li"},"Critical level")," correspond to the \u201cWARNING\u201d and \u201cCRITICAL\u201d thresholds of the meta-service\nrespectively."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Calculation Type")," and ",(0,n.kt)("strong",{parentName:"li"},"Data source Type")," fields correspond to the calculations and the description of the\ndata source, respectively"),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Selection Mode")," field is used to select the services containing the metrics that will be used in the meta-service calculation.")),(0,n.kt)("p",null,"If the ",(0,n.kt)("strong",{parentName:"p"},"Service list")," selection mode is selected, the metrics chosen will be obtained from services selected manually."),(0,n.kt)("p",null,"If the ",(0,n.kt)("strong",{parentName:"p"},"SQL matching")," selection mode is selected, the services used will be selected automatically by Centreon via a search\nbased on the LIKE type SQL expression to be searched field. The metric to be used in this case will be selected from the\nMetric dropdown list."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"More information on ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"http://en.wikipedia.org/wiki/Printf_format_string"},"PRINTF formatting")),".")),(0,n.kt)("h3",{id:"meta-service-status"},"Meta Service status"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Check Period")," field defines the time period during which the scheduler checks the status of the meta-service."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Max Check Attempts")," field defines the number of checks to be made before confirming the status of the meta-service:\nwhen the status is valid, a notification is sent."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Normal Check Interval")," field is expressed in minutes. It defines the interval between checks when the status of\nthe meta-service is OK."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Retry Check Interval")," field is expressed in minutes. It defines the checking interval of the Not-OK status of\nthe meta-service.")),(0,n.kt)("h3",{id:"notification"},"Notification"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Notification Enabled")," field is used to enable the notifications."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Linked Contacts Groups")," list is used to define the groups of contacts that will be alerted."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Notification Interval")," field is expressed in minutes and can be used to define the time interval between the\nsending of two notifications."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Notification Period")," field can be used define the notification period."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Notification Type")," field defines the types of notification sent.")),(0,n.kt)("h3",{id:"additional-information"},"Additional information"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Graphic Template")," list defines the graphic model used by this meta-service."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Status")," and ",(0,n.kt)("strong",{parentName:"li"},"Comments")," fields are used to enable / disable or comment on the meta-service.")),(0,n.kt)("h2",{id:"select-services-manually"},"Select services manually"),(0,n.kt)("p",null,"If you have chosen the ",(0,n.kt)("strong",{parentName:"p"},"Service list")," option, in the screen containing all the meta-services:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click the following icon to select the metrics entering into the calculation of the meta-service. These\nmetrics are called indicators. ",(0,n.kt)("img",{alt:"image",src:i(18970).Z,width:"32",height:"32"})),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Add"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:i(15313).Z,width:"1080",height:"422"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Host")," field is used to select the host to which the service to be selected belongs."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Service")," field is used to choose the service (first list) as well as the metric in this service (second list)."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Status")," and ",(0,n.kt)("strong",{parentName:"li"},"Comment")," fields are used to enable / disable or comment on the indicator.")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Repeat the operation until you have added all the indicators necessary for the calculation of the meta-service.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"A meta-service should be considered as a regular service. It is necessary to generate the configuration of the central\nscheduler to export it and then restart the scheduler.")))}h.isMDXComponent=!0},93766:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/02addmetaservice-680258807d55d3351231c7e7ea348334.png"},15313:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/02metaservicesindicators-b983599d815d99793320d82c479dc431.png"},18970:(e,t,i)=>{i.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADWElEQVRYR6VXi1UbMRAcVQBUEEQDgQoCFcRUEOQG4lQQqCDQgM+pIKSCmApiGkCkA6hAeXOrO31OOotk3/ODZ0u3s7M7u3sKb7HOLgB8BHAM4BDAqb++A/AC4BkO91jqn62PVXsPdpbOvgKgczptMYK5B/AFRvP/qs0D6Ow1gM9vcJw7ovNbGH1TQ1AG0FlG+iuiWO479wdKMTJ+XmA0qQc6y1TwzgIO51B4nznkuYsSG1MA8jA6D3Q7PEDhGkZvW/hHZ8/hcA2FD9F5skEQAtpbCkAitxnlzONtk+P8UGdXAL5lIHTMRACQ0+7cK5RaNEddQ9hZgmcdDbaD0WdTBqTgWO2Dka42yqeRUzmfAJABsnqXgbiB0fQHYUCk9jui/t9oZ+7F8dWIiYW7PDlGmg7WQ58KAbC2G6j+IsCCW2o+qN06S4ekeWhM8d0xWqztdixMh+9Y6isP4OkFSh34W23UC2sxzTXAR2PRCUNUGI0yPlKQ9vpDovd0zcVeorl23keZ/Ly2u6hPXKqEfhaL0SycsqURtKToLNc9UlXcEUDIizSKeuUPtSISHVJWBlKrpTgIhwcCiCmZIh4eLzlnk6IZ/7ebocHA6M3kd+m0VBxtxxpw4yGj68Np6BOMfnkibVqqfwpiXy1FPtsBrEelBFnVQaRnchoSAC0pSCNlA3lOnjllIkhv6jykwOGxrQgHkCVZBRY4dA5ROxNqKfQCX4ShC5ZkmEovqKTeiOqFLGDj4XSXNiIgmVQ96FF6eMRSn/azPu/3PMfIVb/9JPN+ooL10zOUeue/v5xvxan0uAVRiqHfy4ZEqdHx7O7nVRPRL2qaDiNgC6Mv/IV8RAtw2ZA2RZ3PNIak5yTDiMuIc6Rm6G4yjoP0BsdtNJdAxONYOulxGMdSHHm0LJaVX0TbaS47j6cgT2QLyXAp7Qn8dn44zdGdyo7TVrqn88Xsf58upWkqeGwFo7lSvd3ypTSifnhYeS13bptNO05I0ta2I4pU2ZhixTDv5/NreaCNHY1juvSCse3f/xRekxcThwOo/vWNH8o1GGlXoPOJVPe/mjm32jv7a8kRytkj+g24ZC0vp2TjFnCLZiB0DEWWWD//8XKaQ+b+6EaKD8cUkWIumQpsw2xk7JpN9hdksp32wRCQegAAAABJRU5ErkJggg=="}}]);