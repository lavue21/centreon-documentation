"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[79887],{79449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>k,frontMatter:()=>p,metadata:()=>c,toc:()=>m});n(67294);var r=n(3905),o=n(51715),a=n(7626);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const p={id:"developer-translate-centreon",title:"How to translate Centreon"},u=void 0,c={unversionedId:"developer/developer-translate-centreon",id:"version-23.10/developer/developer-translate-centreon",title:"How to translate Centreon",description:"If you want to contribute to translating Centreon, this new tutorial is for you! Discover how to translate the Centreon web",source:"@site/versioned_docs/version-23.10/developer/developer-translate-centreon.md",sourceDirName:"developer",slug:"/developer/developer-translate-centreon",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/developer/developer-translate-centreon",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/versioned_docs/version-23.10/developer/developer-translate-centreon.md",tags:[],version:"23.10",lastUpdatedAt:1699872045,formattedLastUpdatedAt:"Nov 13, 2023",frontMatter:{id:"developer-translate-centreon",title:"How to translate Centreon"},sidebar:"version-23.10/docs",previous:{title:"Stream connector migration to BBDO 3.0.0",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/developer/developer-broker-stream-connector-migration"},next:{title:"How to write a widget",permalink:"/centreon-documentation/pr-preview/staging/pr-2806/docs/developer/developer-widget"}},d={},m=[{value:"Install translation environment",id:"install-translation-environment",level:2},{value:"First generation",id:"first-generation",level:2},{value:"Use your translation",id:"use-your-translation",level:2},{value:"Upgrade translation",id:"upgrade-translation",level:2},{value:"Participate in the Centreon project",id:"participate-in-the-centreon-project",level:2}],g={toc:m},h="wrapper";function k(e){var{components:t}=e,p=i(e,["components"]);return(0,r.kt)(h,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({},g,p),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you want to contribute to translating Centreon, this new tutorial is for you! Discover how to translate the Centreon web\ninterface and how to help us to add new languages to Centreon."),(0,r.kt)("h2",{id:"install-translation-environment"},"Install translation environment"),(0,r.kt)("p",null,"Contact us to obtain an archive of the contents to translate, and then copy this archive to a Linux server."),(0,r.kt)("p",null,"Execute the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"unzip centreon-translation.zip\ncd centreon-translation\n")),(0,r.kt)("p",null,"Your environment to translate Centreon is now ready."),(0,r.kt)("h2",{id:"first-generation"},"First generation"),(0,r.kt)("p",null,"During the first generation, the script will clone Centreon sources from GitHub on your server."),(0,r.kt)("p",null,"Execute the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sh make-translation.sh\n")),(0,r.kt)("p",null,"At the end of execution, two files are available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"messages.pot to translate Centreon web interface menu and forms"),(0,r.kt)("li",{parentName:"ul"},"help.pot to translate help tooltips in configuration forms")),(0,r.kt)("p",null,"Rename messages.pot to messages.po and help.po to help.po"),(0,r.kt)("p",null,"You can now start translating Centreon by editing files with a PO file editor like poedit."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Always keep your ","*",".po files for the next translation.")),(0,r.kt)("h2",{id:"use-your-translation"},"Use your translation"),(0,r.kt)("p",null,"On your Centreon server, install gettext."),(0,r.kt)("p",null,"Create the locale directory for your Centreon:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'sudo mkdir -p /usr/share/centreon/www/locale/`locale | grep LC_MESSAGES | cut -d \\" -f 2`/LC_MESSAGES\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"/usr/share/centreon")," is the Centreon installed directory.")),(0,r.kt)("p",null,"If you want to translate Centreon into a language other than that used by your Centreon server, you must define the\nlocale manually."),(0,r.kt)("p",null,"For example, for Brazilian users, execute the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo mkdir -p /usr/share/centreon/www/locale/pt_BR.UTF-8/LC_MESSAGES\n")),(0,r.kt)("p",null,"Compile the translated files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"msgfmt messages.po -o messages.mo\nmsgfmt help.pot -o help.mo\nphp ./centreon-github/bin/centreon-translations.php pt centreon-github/lang/pt_BR.UTF-8/LC_MESSAGES/messages.po centreon-github/lang/pt_BR.UTF-8/LC_MESSAGES/messages.ser\n")),(0,r.kt)("p",null,"Copy the compiled translated files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'sudo cp *.mo /usr/share/centreon/www/locale/`locale | grep LC_MESSAGES | cut -d \\" -f 2`/LC_MESSAGES\nsudo cp messages.ser /usr/share/centreon/www/locale/`locale | grep LC_MESSAGES | cut -d \\" -f 2`/LC_MESSAGES\n')),(0,r.kt)("p",null,"Change the rights on the directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'sudo chown -R apache.apache /usr/share/centreon/www/locale/`locale | grep LC_MESSAGES | cut -d \\" -f 2`\n')),(0,r.kt)(o.Z,{groupId:"sync",mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"Alma/ RHEL / Oracle Linux 8",label:"Alma/ RHEL / Oracle Linux 8",mdxType:"TabItem"},(0,r.kt)("p",null,"Restart Apache:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart httpd\n"))),(0,r.kt)(a.Z,{value:"Alma / RHEL / Oracle Linux 9",label:"Alma / RHEL / Oracle Linux 9",mdxType:"TabItem"},(0,r.kt)("p",null,"Restart Apache:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart httpd\n")))),(0,r.kt)("p",null,"Connect to your Centreon web interface, edit your profile and select new language:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(58504).Z,width:"715",height:"479"})),(0,r.kt)("p",null,"Save the form and access another menu. Your interface will be translated."),(0,r.kt)("h2",{id:"upgrade-translation"},"Upgrade translation"),(0,r.kt)("p",null,"Centreon developers release a new version of Centreon Web every month. So the translation could be modified with every new\nrelease."),(0,r.kt)("p",null,"To keep the translation up to date, follow these steps:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sh make-translation.sh\n")),(0,r.kt)("p",null,"At the end of execution, two up-to-date files are available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"messages.pot to translate Centreon Web interface menu and forms"),(0,r.kt)("li",{parentName:"ul"},"help.pot to translate help tooltips in configuration forms")),(0,r.kt)("p",null,"Merge these files with the previous translation (messages.po and help.po):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"msgmerge help.po help.pot -o new_help.po\nmsgmerge messages.po messages.pot -o new_messages.po\n")),(0,r.kt)("p",null,"Follow the chapter \u201cUse your translation\u201d to upgrade your translation for Centreon."),(0,r.kt)("h2",{id:"participate-in-the-centreon-project"},"Participate in the Centreon project"),(0,r.kt)("p",null,"Once your translation is up to date, you can ask to the Centreon team to add your translation to Centreon project. This\nwill allow all users of Centreon to have access to your translation on their Centreon platform."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create an account on GitHub"),(0,r.kt)("li",{parentName:"ul"},"Fork centreon/centreon project on GitHub"),(0,r.kt)("li",{parentName:"ul"},"Add your translated ","*",".mo and ","*",".po files to lang/<your_lang>/LC_MESSAGES directory"),(0,r.kt)("li",{parentName:"ul"},"Commit your change on your project"),(0,r.kt)("li",{parentName:"ul"},"Create a pull request on centreon/centreon project"),(0,r.kt)("li",{parentName:"ul"},"We will add your translation to Centreon.")),(0,r.kt)("p",null,"Thank you for your help!"))}k.isMDXComponent=!0},58504:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/change_language_2-823a7737203c6d72593cf730c4b9bb1f.png"}}]);