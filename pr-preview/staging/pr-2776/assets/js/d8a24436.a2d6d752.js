"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[31280],{15596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>m});n(67294);var a=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const s={id:"templates",title:"Templates"},l=void 0,c={unversionedId:"monitoring/templates",id:"version-23.10/monitoring/templates",title:"Templates",description:"Definition",source:"@site/versioned_docs/version-23.10/monitoring/templates.md",sourceDirName:"monitoring",slug:"/monitoring/templates",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/docs/monitoring/templates",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/monitoring/templates.md",tags:[],version:"23.10",lastUpdatedAt:1699375250,formattedLastUpdatedAt:"Nov 7, 2023",frontMatter:{id:"templates",title:"Templates"}},p={},m=[{value:"Definition",id:"definition",level:2},{value:"Host Templates",id:"host-templates",level:2},{value:"Inheritance",id:"inheritance",level:3},{value:"Parent-child type inheritance",id:"parent-child-type-inheritance",level:4},{value:"Associative type inheritance",id:"associative-type-inheritance",level:4},{value:"Configuration",id:"configuration",level:3},{value:"Services Templates",id:"services-templates",level:2},{value:"Inheritance",id:"inheritance-1",level:3},{value:"Configuration",id:"configuration-1",level:3},{value:"Best practice",id:"best-practice",level:2},{value:"Explanations",id:"explanations",level:3},{value:"Configuration",id:"configuration-2",level:3},{value:"Contact Templates",id:"contact-templates",level:2},{value:"Configuration",id:"configuration-3",level:3}],h={toc:m},d="wrapper";function u(e){var{components:t}=e,s=r(e,["components"]);return(0,a.kt)(d,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},h,s),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"A Template is a pre-configuration of settings of an object that could be used to\nconfigure it. The main advantage is to be able to define default values for\ncertain objects to speed up the creation of similar objects."),(0,a.kt)("p",null,"On creation of a Template, only the template name is mandatory. The other\nattributes are optional."),(0,a.kt)("p",null,"There are 3 types of template:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Host Templates"),(0,a.kt)("li",{parentName:"ul"},"Service Templates"),(0,a.kt)("li",{parentName:"ul"},"Contact Templates")),(0,a.kt)("p",null,"The advantages are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Simplified element definition"),(0,a.kt)("li",{parentName:"ul"},"No duplication of data"),(0,a.kt)("li",{parentName:"ul"},"Easy addition of new resources"),(0,a.kt)("li",{parentName:"ul"},"Predefined configurations equivalent to a \u201ccatalog of indicators\u201d"),(0,a.kt)("li",{parentName:"ul"},"Templates can inherit from other templates.")),(0,a.kt)("h2",{id:"host-templates"},"Host Templates"),(0,a.kt)("h3",{id:"inheritance"},"Inheritance"),(0,a.kt)("p",null,"A host or a host template can inherit from one or more host templates. This\nheritage may be:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"associative (addition of multiple host templates)"),(0,a.kt)("li",{parentName:"ul"},"parent-child type")),(0,a.kt)("h4",{id:"parent-child-type-inheritance"},"Parent-child type inheritance"),(0,a.kt)("p",null,"This is a predefinition of settings at \u201cn\u201d levels. The object inherits from its\nTemplate which can itself inherit from its Template. If the child redefines a\nsetting, this setting overwrites the one defined in the higher-level templates.\nOtherwise it is added to the settings."),(0,a.kt)("h4",{id:"associative-type-inheritance"},"Associative type inheritance"),(0,a.kt)("p",null,"This consists of adding together several templates within the same object in\norder to add together all the settings available. If a host inherits from\nseveral host templates and if the same setting is defined on several templates,\nthe host template situated above the other templates has priority over\nits ancestors."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(36998).Z,width:"1157",height:"132"})),(0,a.kt)("p",null,"The diagram below shows a host inheriting from multiple host templates."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(40086).Z,width:"961",height:"874"})),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"To add a host template:"),(0,a.kt)("p",null,"Go into the ",(0,a.kt)("strong",{parentName:"p"},"Configuration > Hosts > Templates")," menu and click ",(0,a.kt)("strong",{parentName:"p"},"Add")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Refer to the chapter covering configuration of\n",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"/centreon-documentation/pr-preview/staging/pr-2776/docs/monitoring/basic-objects/hosts"},"hosts"))," to configure a template, because the form\nis identical.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'By default, locked host templates are hidden. Check the "Locked elements" box\nto list all templates.')),(0,a.kt)("h2",{id:"services-templates"},"Services Templates"),(0,a.kt)("h3",{id:"inheritance-1"},"Inheritance"),(0,a.kt)("p",null,"A service or a service template can only inherit from a single service template\n(parent-child type inheritance)."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(98680).Z,width:"959",height:"375"})),(0,a.kt)("h3",{id:"configuration-1"},"Configuration"),(0,a.kt)("p",null,"To add a Service Template:"),(0,a.kt)("p",null,"Go to ",(0,a.kt)("strong",{parentName:"p"},"Configuration > Services > Templates")," and click ",(0,a.kt)("strong",{parentName:"p"},"Add"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Refer to the chapter covering configuration of\n",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"/centreon-documentation/pr-preview/staging/pr-2776/docs/monitoring/basic-objects/services"},"services"))," to configure a template, because the\nform is identical.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'By default, locked service templates are hidden. Check the "Locked elements"\nbox to list all templates.')),(0,a.kt)("h2",{id:"best-practice"},"Best practice"),(0,a.kt)("h3",{id:"explanations"},"Explanations"),(0,a.kt)("p",null,"Good practice requires that service templates be associated with a host\ntemplate: on creation of a host, the services are generated automatically from\nthe host's templates. There are two advantages in linking service templates to\nhost templates:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The services generated automatically retain their granularity, i.e., it is\npossible to change the attributes of a service without affecting the other\nservices obtained from this template"),(0,a.kt)("li",{parentName:"ul"},"The creation of new hosts is speeded up greatly: simply define\nthe host and the host's templates associated with it.")),(0,a.kt)("p",null,"Example: We create the srvi-web-01 host according to the template below:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(61355).Z,width:"606",height:"633"})),(0,a.kt)("p",null,"The host srvi-web-01 will automatically possess the following services:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Load, CPU, Memory, disk-/ from service templates linked to the host\ntemplate \u201cLinux-Server-RedHat-5\u201d"),(0,a.kt)("li",{parentName:"ul"},"Broken-jobs, hit-ratio, tablespaces, listener from service templates linked\nto the host template \u201cDB-MySQL\u201d"),(0,a.kt)("li",{parentName:"ul"},"Process and connection from service templates linked to the host template\n\u201cWeb-Server-Apache\u201d")),(0,a.kt)("p",null,"When the services of a host are generated from host templates, it is possible\nthat certain services generated are not checked by the supervision tool. In this\ncase, it is necessary to disable the services that are not used (but not to\ndelete them). In case of deletion of services, regeneration of services of the\nhost from host templates will re-create the deleted services."),(0,a.kt)("h3",{id:"configuration-2"},"Configuration"),(0,a.kt)("p",null,"The linking of service templates with host templates takes place in the\n",(0,a.kt)("strong",{parentName:"p"},"Relations")," tab of the service templates or host templates."),(0,a.kt)("h2",{id:"contact-templates"},"Contact Templates"),(0,a.kt)("p",null,"A contact or a contact template can only inherit one contact template."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(38087).Z,width:"689",height:"814"})),(0,a.kt)("h3",{id:"configuration-3"},"Configuration"),(0,a.kt)("p",null,"To add a contact template:"),(0,a.kt)("p",null,"Go to ",(0,a.kt)("strong",{parentName:"p"},"Configuration > Users > Contact Templates"),", and click\n",(0,a.kt)("strong",{parentName:"p"},"Add")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Refer to the chapter covering configuration of\n",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/docs/monitoring/basic-objects/contacts"},"contacts"),". In addition, the contact\ntemplates are used for automatic import of profiles via\n",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/docs/administration/parameters/ldap"},"LDAP"))))}u.isMDXComponent=!0},38087:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/09contactmodel-f8db7504e7b894c34618fb9be83e4021.png"},98680:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/09heritageservice-39dd6c63870f3cc1ba8785d6dbf7913c.png"},61355:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/09hostexemple-38c60ef0820184d0201e7fc63bec19ae.png"},36998:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/09hostmodels-a426b91b188edde8024103e638ca9635.png"},40086:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/09hostmodelsheritage-8fc4d663668086c07a3321683d28b1ae.png"}}]);