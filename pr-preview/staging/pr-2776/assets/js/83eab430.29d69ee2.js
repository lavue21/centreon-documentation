"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[35434],{8596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>c,metadata:()=>u,toc:()=>h});n(67294);var a=n(3905),i=n(51715),o=n(7626);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const c={id:"model-it-services",title:"Model your IT services",description:"BAM tutorial"},p=void 0,u={unversionedId:"getting-started/model-it-services",id:"version-23.10/getting-started/model-it-services",title:"Model your IT services",description:"BAM tutorial",source:"@site/versioned_docs/version-23.10/getting-started/model-it-services.md",sourceDirName:"getting-started",slug:"/getting-started/model-it-services",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/docs/getting-started/model-it-services",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/getting-started/model-it-services.md",tags:[],version:"23.10",lastUpdatedAt:1699375250,formattedLastUpdatedAt:"Nov 7, 2023",frontMatter:{id:"model-it-services",title:"Model your IT services",description:"BAM tutorial"},sidebar:"version-23.10/docs",previous:{title:"Create a graphical view",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/docs/getting-started/create-graphical-view"},next:{title:"Analyze resources availability",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/docs/getting-started/analyze-resources-availability"}},d={},h=[{value:"Concept",id:"concept",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Implementation method",id:"implementation-method",level:2},{value:"Example",id:"example",level:2},{value:"Reporting consideration",id:"reporting-consideration",level:2}],g={toc:h},A="wrapper";function m(e){var{components:t}=e,c=l(e,["components"]);return(0,a.kt)(A,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},g,c),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Centreon Business Activity Monitoring (Centreon-BAM) is an extension for modeling\nIT services and applications, ideally, from an end user\u2019s point of view. It reports on the\nstatus of aggregated indicators in real time, tracking any changes, thereby allowing you to\nmeasure results against business-oriented service level agreements (SLAs) with\ninternal or external users."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Centreon BAM is a Centreon ",(0,a.kt)("strong",{parentName:"p"},"extension")," that requires a valid license key. To\npurchase one and retrieve the necessary repositories, contact\n",(0,a.kt)("a",{parentName:"p",href:"mailto:sales@centreon.com"},"Centreon"),".")),(0,a.kt)("h2",{id:"concept"},"Concept"),(0,a.kt)("p",null,"Centreon BAM aggregates raw sets of resource statuses, called indicators, against which to\nmeasure business performance. ",(0,a.kt)("em",{parentName:"p"},"These indicators")," collected by the Centreon\nmonitoring system can be either a Centreon service, a logical rule between\nmultiple services or any another business-centric monitoring indicator, called a\nBusiness Activity (BA)."),(0,a.kt)("p",null,"You can use a BA as an indicator for another BA to create an impact tree and\nmodel the IT services or applications for analysis."),(0,a.kt)("p",null,"The evolution of a BA status will determine the quality of service (QoS) that\nreflects how well the application performs for its users. Based on this QoS\nrating, you can define the BA's operating levels and the SLA."),(0,a.kt)("p",null,"If a BA fails, the malfunction(s) that led to the drop in QoS can be analyzed\nand the SLA failure diagnosed."),(0,a.kt)("p",null,"Below is an example of a business activity that correspond to a generic Application:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(60029).Z,width:"837",height:"356"})),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Modeling a service or an application (that becomes a BA in Centreon's world) and\nits related indicators should be simple and methodical. Ideally, you should\nfirst include indicators that are directly related to the overall function of\nthe service/applications and then gradually add other indicators that would have\na potential impact on BA status."),(0,a.kt)("p",null,"All indicators added to a BA must initially be monitored one at a time by the\nsystem to determine the operational status of the BA. "),(0,a.kt)("p",null,"The important thing to understand here is the way the business activity status will be computed. There are\nfour calculation methods that can be used:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Best status"),": When you only need to be warned that ALL indicators are critical at the same time "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Worst status"),": When you immediately want to know that at least 1 indicator is not-ok"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Ratio"),": When you want to model ",(0,a.kt)("strong",{parentName:"li"},"Cluster")," concepts by specifying a number of percentage of critical resources that you don't want to exceed"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Impact"),": When you want to precisely define the weight of each indicator and reflect that on your BA status ")),(0,a.kt)("p",null,"For more information, look at the ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/docs/service-mapping/ba-management#calculation-methods"},"calculation method explanations")),(0,a.kt)("h2",{id:"implementation-method"},"Implementation method"),(0,a.kt)("p",null,"The first step when you want to create a business activity is to have a clear view of the IT service, application, component\nyou want to model. Don't hesitate to first model the Tree on a paper so that you'll just have to replicate the configuration\nin Centreon. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The way you think")," about an application or service IT may be ",(0,a.kt)("strong",{parentName:"p"},"Top-Down"),': you want to view the state of the Application > "A"\n.that relies on Network, Backend, Frontend clusters. These in turn rely on servers and network devices whose status relies\non services monitored by Centreon'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The way you create")," a business activity in Centreon is ",(0,a.kt)("strong",{parentName:"p"},"Bottom-up"),': you start by creating the down-level indicators that > represent server or network equipment status, then you aggregate them into Network, Frontend, Backend components and you\nfinish by creating a Top level component to show the global Application "A" status.'),(0,a.kt)("p",null,"Now that you know what application you want to model and what indicators this application relies on,\nyou can sort them into two categories:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Indicators known to have a blocking impact"),(0,a.kt)("li",{parentName:"ul"},"Indicators whose impact cannot be measured.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"It's simpler to start by using only the blocking indicators. You'll be able to add more indicators later if you\nneed to have BA status impacted more precisely.")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"If we take a simple example: You have multiple frontend servers (10) and you want at least 20% of your servers to be available."),(0,a.kt)("p",null,"This will be done in two steps (bottom-up):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"First, define what's a frontend server that is OK: create business activities that correspond to frontend servers"),(0,a.kt)("li",{parentName:"ul"},"Then, define our cluster: create the business activity that will aggregate my frontend-x servers ")),(0,a.kt)("p",null,'First, we create "Frontend-X" (business activity) corresponding to the frontend servers.\nLet\'s say that a frontend server that performs properly may be defined by:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a Load below a critical state"),(0,a.kt)("li",{parentName:"ul"},"and a Disk usage below a critical state"),(0,a.kt)("li",{parentName:"ul"},"and a Swap usage below a critical state")),(0,a.kt)("p",null,"So the state of a frontend-X is the Worst status of these 3 indicators. The first step is over; let's create a\nFrontend-1 business activity:"),(0,a.kt)(i.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Concept",label:"Concept",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(20820).Z,width:"514",height:"165"}))),(0,a.kt)(o.Z,{value:"Configuration",label:"Configuration",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(4359).Z,width:"560",height:"397"})))),(0,a.kt)("p",null,"Now that we've defined our 10 frontend servers, we'll attach them to a parent business activity called \"Frontends Cluster\"\nso that it tells us whether or not we have 20% of Frontend servers available"),(0,a.kt)(i.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"Concept",label:"Concept",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(4386).Z,width:"328",height:"467"}))),(0,a.kt)(o.Z,{value:"Configuration",label:"Configuration",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(71429).Z,width:"558",height:"476"})))),(0,a.kt)("p",null,'If we want to be proactive and NEVER go to 20%, we may add a Warning threshold to our Cluster business activity\nto be warned when 50% of the frontend servers are not available: just add "50%" to the Warning threshold:'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(22732).Z,width:"561",height:"470"})),(0,a.kt)("p",null,"So, finally, we have combined multiple calculation methods, multiple types of resource, and our business activity\nwill look like this:"),(0,a.kt)("p",null," ",(0,a.kt)("img",{alt:"image",src:n(71518).Z,width:"893",height:"644"})),(0,a.kt)("p",null,"Using the product on a daily basis helps to track the daily evolution of the BA to adjust indicators or rules that\napply."),(0,a.kt)("h2",{id:"reporting-consideration"},"Reporting consideration"),(0,a.kt)("p",null,"Now that you can proactively manage your IT services and application thanks to real-time BA tracking,\nit's time to look at availability and SLA.This is possible with the reporting capabilities\nand the ",(0,a.kt)("strong",{parentName:"p"},"Centreon MBI extension"),' and the settings applied in the "Reporting" section of the BA.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"How do we compare availability and SLA?")),(0,a.kt)("p",null,"The final value of the SLA is linked to the time spent in ",(0,a.kt)("em",{parentName:"p"},"OK"),", ",(0,a.kt)("em",{parentName:"p"},"Warning")," /\n",(0,a.kt)("em",{parentName:"p"},"Critical")," conditions (downtime/uptime), which are visible in the Reporting\nscreens."),(0,a.kt)("p",null,"Examples:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"24/7 monitoring"),(0,a.kt)("li",{parentName:"ul"},"Over a 1-day period, the time spent in the status is as follows",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"BA in OK status = 23 hours and 30 minutes"),(0,a.kt)("li",{parentName:"ul"},"BA in WARNING status = 10 minutes"),(0,a.kt)("li",{parentName:"ul"},"BA in CRITICAL status = 20 minutes")))),(0,a.kt)("p",null,"In this example, the following availability will be calculated:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"% Up and optimum performance ","~"," 98.61% (OK+Warning)"),(0,a.kt)("li",{parentName:"ul"},"% Up but degraded ","~"," 97.91% (OK)"),(0,a.kt)("li",{parentName:"ul"},"% Not available ","~"," 1.38% (Critical).")),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("strong",{parentName:"p"},"Centreon MBI extension")," to access advanced reporting capabilities on business activities data."))}m.isMDXComponent=!0},22732:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/conf-ratio-with-warn-48f5468f587e92ea4d23735b876a2f40.png"},71429:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/conf-ratio-5d03b5369d0bb115202252ccad7bfa28.png"},60029:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/example-bf480b024ab51085ffbd71b1d848388c.png"},71518:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/final-frontend-928358087d81056bc6f4c78ace563962.png"},20820:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgIAAAClCAYAAAAuw5WzAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAB6oSURBVHhe7Z17sFVl3cf7p/6xGZhqqknLbLKZNAYbtZysoYuNr02FTmMzThcs0zF7FQWxi2h4aYpSRBNJgyQETQYBIYFQ1MwbpgEhXVQQC8gR3wy6qH+t9/08Z//O+7BYm7PPOZtz9j7r85l5Zq31POu57L3O2d/vc1lrvaYQERGR2qIREBERqTEaARERkRqjERAREakxGgEREZEaoxEQERGpMRoBERGRGqMREBERqTEaARERkRqjERAREakxGgEREZEaoxEQERGpMRoBERGRGqMREBERqTEaARERkRqjERAREakxGgEREZEaoxEQERGpMRoBERGRGqMREBERqTEaARERkRqjERAREakxGgEREZEaoxEQERGpMRoBERGRGqMREBERqTEaARERkRqjERAREakxGgEREZFh4PHHH09huNEIiIhIR/D3v/+9mD17dvG9732v+Pa3v12cddZZKa4/IKwbN25sHLWfTZs2FbNmzSruvPPOtF29enUjpf8sWrRIIyAiIhKcd955xc6dOxtHPaIe/OEPfyhWrFiRAvzjH/8oHnjggSSmEccW88CWtLvuuisJ9b///e/itttu2ys/3HHHHcU3v/nNYt68eemYMkmPuqq4+OKLi127djWOiuLBBx8s/vWvfxW7d+8ubrzxxmLatGnFn/70p5RGGX/729+Ku+++e6/yYj/fYnyuv/763rzlzwuPPfZYcd999yUz0k40AiIiMuz8/ve/30v0cn7yk58UP/jBD4pt27YVy5cvLx566KFiw4YNxc0335zy3HLLLUn44fLLL0/bGTNmFNddd13xyCOPFD/+8Y/TeS+88ELarlu3Lon2VVddVezZsyeZBeJpA4LMMSahqj2Yhttvv73YsmVLI6bHQGBAyI+QX3nllSl+zpw5qYzf/e53xaWXXpriMAzf+MY30v7UqVOLHTt2FDfddFPKh8ivWbMm1Y2hyD8vhmP+/PkpH+1upxnQCIiIyLCzcOHCpkP6U6ZMScIdASFctmxZsWDBgpSOCVi7dm3qRUfvfvLkyUn4AZHO8997773Fz372s+L5559P6RgDzASiPXfu3BT3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+MO9beQ7mT59evHqq68WkydPTnEiraIREOlC2r1GgDsQckJQIRfBVowA+3l+et0RR8hFGSIPcaTlcTG6wBZIp07KJI72RLkExDxvD+czEoC4E6Cv9kSdYQygmRHIywnCCDzwwAPF5z73ud7v7H3ve1/aHn300cVvf/vblIdzCeeee27awhvf+Ma0hYMPPjhtcyNw4oknFps3by4+8pGP9NbLZ3jPe95TzJ49e6+2iLSCRkCkCznQdw0gJiHkuQgy5E7vE7FEUBGgXHhjn8AUB2JK/mXLlqU85AfiQtwjD1sEFEEMsc6hZ0851HnyySen/EwRRHuor9weoE7MAGnQrD2RnkP7aQ8jB2xzc9AMzuNzAFMcX/rSl9L+cccdl7Y33nhjaiNizijGK6+8Upx11lm9RoARg4B6ASPAOTNmzChOOOGEFEeb88/58Y9/PJkMkf6iERDpUtr5HIHyo4YRvBCZ6EkHHCNkIYqcV95HVBFujmM/z0MZVfk5j7Q8LifqJj0ox5XzIvicEzRrTxWUxXkR8nqbwTlhBMizbt26tB9xsGTJkiTsGzf2fO+kRdn5efn+/PnzU9izZ086zvMARuKUU05pHIm0jkZApEvxyYISLFiwIN2ZwCiDSH/RCIh0MYMdFfih7xoYEWzdujVNMYgMBI2ASJczUDOACdji2wdFao9GQGQE0F8z4EiAiAQaAZERAiv/Efgq4Y/A8wKq3isgIvVFIyAywqCnj9gzShCBBYE8e0BEpIxGQEREpMZoBERERGqMRkBERKTGaARERERqjEZARESkxmgEREREaoxGQEREpMZoBERERGqMRkBERKTGaARERERqjEZARESkxmgEREREaoxGQEREpMZoBERERGqMRkBERKTGaARERERqjEZARESkxmgEREREaoxGQEREpMZoBERERGqMRkBERKTGaARERERqjEZARESkxmgEREREaoxGQEREpLYUxf8CmzKAiS+AijYAAAAASUVORK5CYII="},4359:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/frontend-1-conf-a96be9bb3eebdc3ef7630383b0d07623.png"},4386:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ratio-19e5e81b9b85915e4da52bb89edc21a9.png"}}]);