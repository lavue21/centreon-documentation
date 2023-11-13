"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[70634],{94531:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>p,toc:()=>m});n(67294);var a=n(3905),o=n(51715),i=n(7626);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const u={id:"saml",title:"Configuring connection via SAML"},c=void 0,p={unversionedId:"connect/saml",id:"version-23.10/connect/saml",title:"Configuring connection via SAML",description:"Configure SAML authentication",source:"@site/versioned_docs/version-23.10/connect/saml.md",sourceDirName:"connect",slug:"/connect/saml",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/connect/saml",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/connect/saml.md",tags:[],version:"23.10",lastUpdatedAt:1699633150,formattedLastUpdatedAt:"Nov 10, 2023",frontMatter:{id:"saml",title:"Configuring connection via SAML"},sidebar:"version-23.10/docs",previous:{title:"Configuring connection via OpenId Connect",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/connect/openid"},next:{title:"Configuring Autologin",permalink:"/centreon-documentation/pr-preview/staging/pr-2756/docs/connect/autologin"}},d={},m=[{value:"Configure SAML authentication",id:"configure-saml-authentication",level:2},{value:"Step 1: Enable authentication",id:"step-1-enable-authentication",level:3},{value:"Step 2: Configure Identity Provider access credentials",id:"step-2-configure-identity-provider-access-credentials",level:3},{value:"Step 3: Configure authentication conditions",id:"step-3-configure-authentication-conditions",level:3},{value:"Step 4: Manage user creation",id:"step-4-manage-user-creation",level:3},{value:"Step 5: Manage Authorizations",id:"step-5-manage-authorizations",level:3},{value:"Step 6: Manage Contact groups",id:"step-6-manage-contact-groups",level:3},{value:"Step 7: Configure your Identity Provider (IdP)",id:"step-7-configure-your-identity-provider-idp",level:3}],g={toc:m},h="wrapper";function f(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)(h,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"configure-saml-authentication"},"Configure SAML authentication"),(0,a.kt)("p",null,"Go to ",(0,a.kt)("strong",{parentName:"p"},"Administration > Authentication > SAML Configuration"),"."),(0,a.kt)("h3",{id:"step-1-enable-authentication"},"Step 1: Enable authentication"),(0,a.kt)("p",null,"Enable SAML authentication:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Enable SAMLv2 authentication"),": enables or disables SAML authentication."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Authentication mode"),": indicates if the authentication should be done using only SAML or using local\nauthentication as well (",(0,a.kt)("strong",{parentName:"li"},"Mixed"),"). In mixed mode, users created manually in Centreon (and not identified via SAML)\nwill also be able to log in.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'When setting the parameters, we recommend that you activate the "mixed" mode. This will allow you to retain access to\nthe local ',(0,a.kt)("inlineCode",{parentName:"p"},"admin")," account in the event of a misconfiguration.")),(0,a.kt)("h3",{id:"step-2-configure-identity-provider-access-credentials"},"Step 2: Configure Identity Provider access credentials"),(0,a.kt)("p",null,"Configure Identity Provider information:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Remote login URL"),": defines the identity provider's login URL to identify users (mandatory)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Issuer (Entity ID) URL"),": defines the URL representing the unique name for a SAML entity (mandatory)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Copy/paste x509 certificate"),": add here the x509 certificate of the identity provider (mandatory)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"User ID (login) attribute for Centreon user"),": defines which of the variables returned by the identity provider\nmust be used to authenticate users. For example, ",(0,a.kt)("strong",{parentName:"li"},"email"),". (mandatory)."),(0,a.kt)("li",{parentName:"ul"},"Logout from:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Centreon UI Only"),": users will only be logged out from Centreon."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Both Identity Provider and Centreon UI"),":  users will be logged out from both Centreon and the identity provider.",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"If you select ",(0,a.kt)("strong",{parentName:"p"},"Both Identity Provider and Centreon UI"),", you need to define a ",(0,a.kt)("strong",{parentName:"p"},"Logout URL"),".")))))),(0,a.kt)("h3",{id:"step-3-configure-authentication-conditions"},"Step 3: Configure authentication conditions"),(0,a.kt)("p",null,"You can define conditions according to which users will be allowed to log in or not, based on the data received by a\nparticular endpoint:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Activate ",(0,a.kt)("strong",{parentName:"li"},"Enable conditions on identity provider"),"."),(0,a.kt)("li",{parentName:"ul"},"Define which attribute will be used to validate the conditions."),(0,a.kt)("li",{parentName:"ul"},"In ",(0,a.kt)("strong",{parentName:"li"},"Define authorized conditions values"),", define which will be the authorized values returned.\nIf you enter several values, all will have to be met for the condition to be validated. All users who try to connect\nwith another value will be unable to log in.")),(0,a.kt)("h3",{id:"step-4-manage-user-creation"},"Step 4: Manage user creation"),(0,a.kt)(o.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Users automatic management",label:"Automatic management",mdxType:"TabItem"},(0,a.kt)("p",null,"If you turn on ",(0,a.kt)("strong",{parentName:"p"},"Enable auto import"),", users who log in to Centreon for the first time will be created in the Centreon\nconfiguration. (Turning the option on does not automatically import all users from your infrastructure.)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Enable auto import"),": enables or disables automatic user import.  If auto import is disabled, you will have to\n",(0,a.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2756/docs/monitoring/basic-objects/contacts-create"},"create each user manually")," before they can log in."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Contact template"),": select a ",(0,a.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2756/docs/monitoring/basic-objects/contacts-templates"},"contact template")," that will be\napplied to newly imported users. In particular, this allows you to manage the default configuration of the\n",(0,a.kt)("a",{parentName:"li",href:"/centreon-documentation/pr-preview/staging/pr-2756/docs/alerts-notifications/notif-configuration"},"notifications"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Email attribute path"),": defines which of the variables returned by the identity provider must be used to get the\nuser's email address."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Fullname attribute path"),": defines which of the variables returned by the identity provider must be used to get the\nuser's full name."))),(0,a.kt)(i.Z,{value:"Users manual management",label:"Manual management",mdxType:"TabItem"},(0,a.kt)("p",null,"On the ",(0,a.kt)("strong",{parentName:"p"},"Configuration > Users > Contacts/Users")," page, ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/docs/monitoring/basic-objects/contacts-create"},"create the users"),"\nwho will log on to Centreon using SAML."))),(0,a.kt)("h3",{id:"step-5-manage-authorizations"},"Step 5: Manage Authorizations"),(0,a.kt)(o.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Role automatic management",label:"Automatic management",mdxType:"TabItem"},(0,a.kt)("p",null,"If you turn on ",(0,a.kt)("strong",{parentName:"p"},"Enable automatic management"),", users who log in to Centreon will be automatically\n",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/docs/administration/access-control-lists"},"granted rights"),", as they will be linked to\n",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/docs/administration/access-control-lists#creating-an-access-group"},"access groups")," according to the rules you have defined."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Apply only first role"),": If several roles are found for a specific user in the identity provider's information, then\nonly the first role will be applied. If the option is turned off, all roles will be applied."),(0,a.kt)("li",{parentName:"ul"},"Define which attribute from which endpoint will be used to retrieve values to create relationships with access groups."),(0,a.kt)("li",{parentName:"ul"},"Match the attributes retrieved from the identity provider with the contact groups you want the user to belong to.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Each time the user logs in, authorization management is reinitialized to take into account any new information from the\nidentity provider."))),(0,a.kt)(i.Z,{value:"Role manual management",label:"Manual management",mdxType:"TabItem"},(0,a.kt)("p",null,"If you turn off ",(0,a.kt)("strong",{parentName:"p"},"Enable automatic management"),", you will need to ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/docs/administration/access-control-lists"},"grant users rights"),"\nmanually by linking them to ",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/docs/administration/access-control-lists#creating-an-access-group"},"access groups"),"."))),(0,a.kt)("h3",{id:"step-6-manage-contact-groups"},"Step 6: Manage Contact groups"),(0,a.kt)(o.Z,{groupId:"sync",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Groups automatic management",label:"Automatic management",mdxType:"TabItem"},(0,a.kt)("p",null,"If you turn on ",(0,a.kt)("strong",{parentName:"p"},"Enable automatic management"),", users who log in to Centreon will be attached to the\n",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/docs/monitoring/basic-objects/contacts-groups#contact-groups"},"contact groups")," you have defined."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Define which attribute from the identity provider will be used to retrieve values to create relationships with access groups."),(0,a.kt)("li",{parentName:"ul"},"Match the attributes retrieved from the identity provider with the contact groups you want the user to belong to.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Each time the user logs in, group management is reinitialized to take into account any new information from the identity provider."))),(0,a.kt)(i.Z,{value:"Groups manual management",label:"Manual management",mdxType:"TabItem"},(0,a.kt)("p",null,"If you turn off ",(0,a.kt)("strong",{parentName:"p"},"Enable automatic management"),", you will have to manage the relationship between contact and\n",(0,a.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2756/docs/monitoring/basic-objects/contacts-groups#contact-groups"},"contact groups")," manually."))),(0,a.kt)("h3",{id:"step-7-configure-your-identity-provider-idp"},"Step 7: Configure your Identity Provider (IdP)"),(0,a.kt)("p",null,"Configure your identity provider so that the Centreon application can use the SAML protocol to authenticate your\nusers. Here is an example of fields you may have to fill in:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"IdP option"),(0,a.kt)("th",{parentName:"tr",align:null},"Centreon value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Client ID"),(0,a.kt)("td",{parentName:"tr",align:null},"https://<Centreon_IP_address>")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Assertion Consumer Service (ACS) URL"),(0,a.kt)("td",{parentName:"tr",align:null},"https://<Centreon_IP_address>/centreon/api/latest/saml/acs")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Redirect Binding URLs for SLO"),(0,a.kt)("td",{parentName:"tr",align:null},"https://<Centreon_IP_address>/centreon/api/latest/saml/sls")))))}f.isMDXComponent=!0}}]);