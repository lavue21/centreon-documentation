"use strict";(self.webpackChunkcentreon_docs=self.webpackChunkcentreon_docs||[]).push([[92770],{71374:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>d,metadata:()=>m,toc:()=>c});a(67294);var n=a(3905),r=a(51715),i=a(7626);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const d={id:"hardware-devices-nvidia-gpu-smi-ssh",title:"NVIDIA GPU SMI SSH"},s=void 0,m={unversionedId:"integrations/plugin-packs/procedures/hardware-devices-nvidia-gpu-smi-ssh",id:"integrations/plugin-packs/procedures/hardware-devices-nvidia-gpu-smi-ssh",title:"NVIDIA GPU SMI SSH",description:"Pack Assets",source:"@site/pp/integrations/plugin-packs/procedures/hardware-devices-nvidia-gpu-smi-ssh.md",sourceDirName:"integrations/plugin-packs/procedures",slug:"/integrations/plugin-packs/procedures/hardware-devices-nvidia-gpu-smi-ssh",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/hardware-devices-nvidia-gpu-smi-ssh",draft:!1,editUrl:"https://github.com/centreon/centreon-documentation/edit/staging/pp/integrations/plugin-packs/procedures/hardware-devices-nvidia-gpu-smi-ssh.md",tags:[],version:"current",frontMatter:{id:"hardware-devices-nvidia-gpu-smi-ssh",title:"NVIDIA GPU SMI SSH"},sidebar:"pp",previous:{title:"Mobotix camera SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/hardware-devices-camera-mobotix-snmp"},next:{title:"Optelecom camera SNMP",permalink:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/procedures/hardware-devices-camera-optelecom-snmp"}},u={},c=[{value:"Pack Assets",id:"pack-assets",level:2},{value:"Monitored Objects",id:"monitored-objects",level:3},{value:"Collected Metrics",id:"collected-metrics",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Host configuration",id:"host-configuration",level:2},{value:"How to test the Plugin and what are the main options for?",id:"how-to-test-the-plugin-and-what-are-the-main-options-for",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],g={toc:c},k="wrapper";function f(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)(k,p(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){l(e,t,a[t])}))}return e}({},g,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"pack-assets"},"Pack Assets"),(0,n.kt)("h3",{id:"monitored-objects"},"Monitored Objects"),(0,n.kt)("p",null,"The Pack NVIDIA GPU collects metrics for:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Gpu-stats")),(0,n.kt)("h3",{id:"collected-metrics"},"Collected Metrics"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Gpu-stats",label:"Gpu-stats",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Metric name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"devices.gpu.total.count"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of gpu devices"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"product","_","name:id"),"#device.gpu.utilization.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Percent of time over the past sample period (between 1 second and 1/6 second depending on the product) during which one or more kernels was executing on the GPU"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"product","_","name:id"),"#device.gpu.memory.utilization.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Percent of time over the past sample period (between 1 second and 1/6 second depending on the product) during which global (device) memory was being read or written"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"product","_","name:id"),"#device.gpu.encoder.utilization.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Percent of time over the past sample period (sampling rate is variable) during which the GPU video encoder was being used"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"product","_","name:id"),"#device.gpu.decoder.utilization.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Percent of time over the past sample period (sampling rate is variable) during which the GPU video decoder was being used"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"product","_","name:id"),"#device.gpu.frame_buffer.memory.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"On-board frame buffer memory usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"product","_","name:id"),"#device.gpu.frame_buffer.memory.free.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"On-board frame buffer memory available usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"product","_","name:id"),"#device.gpu.frame_buffer.memory.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"On-board frame buffer memory usage in percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"product","_","name:id"),"#device.gpu.bar1.memory.usage.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"BAR1 memory usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"product","_","name:id"),"#device.gpu.bar1.memory.free.bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"BAR1 memory available usage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"product","_","name:id"),"#device.gpu.bar1.memory.usage.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"BAR1 memory usage in percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"product","_","name:id"),"#device.gpu.fan.speed.percentage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fan speed value"),(0,n.kt)("td",{parentName:"tr",align:"left"},"%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"product","_","name:id"),"#device.gpu.temperature.celsius"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Temperature value"),(0,n.kt)("td",{parentName:"tr",align:"left"},"C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("em",{parentName:"td"},"product","_","name:id"),"#device.gpu.power.consumption.watt"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The last measured power draw for the  entire  board"),(0,n.kt)("td",{parentName:"tr",align:"left"},"W")))))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"The centreon-engine user performs a SSH connection to a remote system user. This user must have enough privileges to run ",(0,n.kt)("inlineCode",{parentName:"p"},"nvidia-smi")," command."),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Online License",label:"Online License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Devices-Nvidia-Gpu-Smi-Ssh\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,n.kt)("em",{parentName:"li"},"NVIDIA GPU SMI SSH")," Pack"))),(0,n.kt)(i.Z,{value:"Offline License",label:"Offline License",mdxType:"TabItem"},(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the Centreon Plugin on every Poller:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-plugin-Hardware-Devices-Nvidia-Gpu-Smi-Ssh\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Central server, install the Centreon Pack from the RPM:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yum install centreon-pack-hardware-devices-nvidia-gpu-smi-ssh\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"On the Centreon Web interface in ",(0,n.kt)("strong",{parentName:"li"},"Configuration > Monitoring Connectors Manager"),", install the ",(0,n.kt)("em",{parentName:"li"},"NVIDIA GPU SMI SSH")," Pack")))),(0,n.kt)("h2",{id:"host-configuration"},"Host configuration"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add a new Host and apply the ",(0,n.kt)("em",{parentName:"li"},"HW-Device-Nvidia-Gpu-Smi-SSH-custom")," Host Template")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Once the template applied, some Macros have to be configured.\n3 SSH backends are available to connect to the remote server: ",(0,n.kt)("em",{parentName:"p"},"sshcli"),", ",(0,n.kt)("em",{parentName:"p"},"plink")," and ",(0,n.kt)("em",{parentName:"p"},"libssh")," which are detailed below.")),(0,n.kt)(r.Z,{groupId:"sync",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"sshcli backend",label:"sshcli backend",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHBACKEND"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Name of the backend: ",(0,n.kt)("inlineCode",{parentName:"td"},"sshcli"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"By default, it uses the user running process ",(0,n.kt)("inlineCode",{parentName:"td"},"centengine")," on your Poller")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Cannot be used with backend. Only ssh key authentication")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"By default: 22")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Customize it with your own if needed. E.g.: ",(0,n.kt)("inlineCode",{parentName:"td"},"--ssh-priv-key=/user/.ssh/id_rsa"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Warning")," With that backend, you have to validate the target server fingerprint manually (with the SSHUSERNAME used).")),(0,n.kt)(i.Z,{value:"plink backend",label:"plink backend",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHBACKEND"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Name of the backend: ",(0,n.kt)("inlineCode",{parentName:"td"},"plink"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"By default, it uses the user running process ",(0,n.kt)("inlineCode",{parentName:"td"},"centengine")," on your Poller")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Can be used. If not set, SSH key authentication is used")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"By default: 22")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Customize it with your own if needed. E.g.: ",(0,n.kt)("inlineCode",{parentName:"td"},"--ssh-priv-key=/user/.ssh/id_rsa"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Warning")," With that backend, you have to validate the target server fingerprint manually (with the SSHUSERNAME used).")),(0,n.kt)(i.Z,{value:"libssh backend (default)",label:"libssh backend (default)",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHBACKEND"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Name of the backend: ",(0,n.kt)("inlineCode",{parentName:"td"},"libssh"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"X"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHUSERNAME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"By default, it uses the user running process ",(0,n.kt)("inlineCode",{parentName:"td"},"centengine")," on your Poller")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHPASSWORD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Can be used. If not set, SSH key authentication is used")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHPORT"),(0,n.kt)("td",{parentName:"tr",align:"left"},"By default: 22")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"SSHEXTRAOPTIONS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Customize it with your own if needed. E.g.: ",(0,n.kt)("inlineCode",{parentName:"td"},"--ssh-priv-key=/user/.ssh/id_rsa"))))),(0,n.kt)("p",null,"With that backend, you do not have to validate the target server fingerprint manually."))),(0,n.kt)("h2",{id:"how-to-test-the-plugin-and-what-are-the-main-options-for"},"How to test the Plugin and what are the main options for?"),(0,n.kt)("p",null,"Once the Plugin installed, log into your Poller using the ",(0,n.kt)("em",{parentName:"p"},"centreon-engine")," user account and test by running the following command :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_nvidia_gpu_smi_ssh.pl \\\n    --plugin=hardware::devices::nvidia::gpu::smi::plugin \\\n    --mode=stats \\\n    --hostname=10.30.2.81 \\\n    --ssh-username=centreon \\\n    --ssh-password='centreon-password' \\\n    --ssh-backend=libssh \\\n    --verbose\n")),(0,n.kt)("p",null,"Expected command output is shown below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"OK: All devices are ok | 'devices.gpu.total.count'=2;;;0; 'Quadro K6000:00000000:08:00.0#device.gpu.utilization.percentage'=0.00%;;;0;100 'Quadro K6000:00000000:08:00.0#device.gpu.memory.utilization.percentage'=0.00%;;;0;100 'Quadro K6000:00000000:08:00.0#device.gpu.encoder.utilization.percentage'=0.00%;;;0;100 'Quadro K6000:00000000:08:00.0#device.gpu.decoder.utilization.percentage'=0.00%;;;0;100 'Quadro K6000:00000000:08:00.0#device.gpu.frame_buffer.memory.usage.bytes'=1349517312B;;;0;12798918656 'Quadro K6000:00000000:08:00.0#device.gpu.frame_buffer.memory.free.bytes'=11449401344B;;;0;12798918656 'Quadro K6000:00000000:08:00.0#device.gpu.frame_buffer.memory.usage.percentage'=10.54%;;;0;100 'Quadro K6000:00000000:08:00.0#device.gpu.bar1.memory.usage.bytes'=13631488B;;;0;268435456 'Quadro K6000:00000000:08:00.0#device.gpu.bar1.memory.free.bytes'=254803968B;;;0;268435456 'Quadro K6000:00000000:08:00.0#device.gpu.bar1.memory.usage.percentage'=5.08%;;;0;100 'Quadro K6000:00000000:08:00.0#device.gpu.fan.speed.percentage'=26.00%;;;0;100 'Quadro K6000:00000000:08:00.0#device.gpu.temperature.celsius'=40C;;;; 'Quadro K6000:00000000:08:00.0#device.gpu.power.consumption.watt'=24.16W;;;0; 'Quadro K6000:00000000:84:00.0#device.gpu.utilization.percentage'=0.00%;;;0;100 'Quadro K6000:00000000:84:00.0#device.gpu.memory.utilization.percentage'=0.00%;;;0;100 'Quadro K6000:00000000:84:00.0#device.gpu.encoder.utilization.percentage'=0.00%;;;0;100 'Quadro K6000:00000000:84:00.0#device.gpu.decoder.utilization.percentage'=0.00%;;;0;100 'Quadro K6000:00000000:84:00.0#device.gpu.frame_buffer.memory.usage.bytes'=732954624B;;;0;12798918656 'Quadro K6000:00000000:84:00.0#device.gpu.frame_buffer.memory.free.bytes'=12065964032B;;;0;12798918656 'Quadro K6000:00000000:84:00.0#device.gpu.frame_buffer.memory.usage.percentage'=5.73%;;;0;100 'Quadro K6000:00000000:84:00.0#device.gpu.bar1.memory.usage.bytes'=5242880B;;;0;268435456 'Quadro K6000:00000000:84:00.0#device.gpu.bar1.memory.free.bytes'=263192576B;;;0;268435456 'Quadro K6000:00000000:84:00.0#device.gpu.bar1.memory.usage.percentage'=1.95%;;;0;100 'Quadro K6000:00000000:84:00.0#device.gpu.fan.speed.percentage'=26.00%;;;0;100 'Quadro K6000:00000000:84:00.0#device.gpu.temperature.celsius'=40C;;;; 'Quadro K6000:00000000:84:00.0#device.gpu.power.consumption.watt'=23.86W;;;0;\nchecking device gpu 'Quadro K6000:00000000:08:00.0'\n    utilization gpu: 0.00 %, memory: 0.00 %, encoder: 0.00 %, decoder: 0.00 %\n    frame buffer memory usage total: 11.92 GB used: 1.26 GB (10.54%) free: 10.66 GB (89.46%)\n    bar1 memory usage total: 256.00 MB used: 13.00 MB (5.08%) free: 243.00 MB (94.92%)\n    fan speed: 26.00 %\n    gpu temperature: 40 C\n    power consumption: 24.16 W\nchecking device gpu 'Quadro K6000:00000000:84:00.0'\n    utilization gpu: 0.00 %, memory: 0.00 %, encoder: 0.00 %, decoder: 0.00 %\n    frame buffer memory usage total: 11.92 GB used: 699.00 MB (5.73%) free: 11.24 GB (94.27%)\n    bar1 memory usage total: 256.00 MB used: 5.00 MB (1.95%) free: 251.00 MB (98.05%)\n    fan speed: 26.00 %gpu temperature: 40 C\n    power consumption: 23.86 W\n")),(0,n.kt)("p",null,"The command above gets GPU statistics (",(0,n.kt)("inlineCode",{parentName:"p"},"--mode=stats"),")."),(0,n.kt)("p",null,"It uses a SSH username ",(0,n.kt)("em",{parentName:"p"},"centreon")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--ssh-username=centreon"),"), a SSH password ",(0,n.kt)("em",{parentName:"p"},"centreon-password")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--ssh-password='centreon-password'"),"),\nuses a SSH backend ",(0,n.kt)("em",{parentName:"p"},"libssh")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--ssh-backend='libssh'"),") and it connects to the host ",(0,n.kt)("em",{parentName:"p"},"10.30.2.81")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--hostname=10.30.2.81"),")\non the SSH default port ",(0,n.kt)("em",{parentName:"p"},"22")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--ssh-port=22"),")."),(0,n.kt)("p",null,"All the options as well as all the available thresholds can be displayed by adding the  ",(0,n.kt)("inlineCode",{parentName:"p"},"--help"),"\nparameter to the command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/centreon/plugins/centreon_nvidia_gpu_smi_ssh.pl \\\n    --plugin=hardware::devices::nvidia::gpu::smi::plugin \\\n    --mode=stats \\\n    --help\n")),(0,n.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/centreon-documentation/pr-preview/staging/pr-2776/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins#ssh-and-cli-checks"},"Troubleshooting plugins")))}f.isMDXComponent=!0}}]);