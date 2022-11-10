"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[753],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),k=r,c=m["".concat(d,".").concat(k)]||m[k]||p[k]||l;return n?a.createElement(c,i(i({ref:t},s),{},{components:n})):a.createElement(c,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3132:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={title:"Requirements"},d=void 0,u={unversionedId:"install/requirements",id:"install/requirements",title:"Requirements",description:"RKE2 is very lightweight, but has some minimum requirements as outlined below.",source:"@site/docs/install/requirements.md",sourceDirName:"install",slug:"/install/requirements",permalink:"/rke2-docs/install/requirements",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/install/requirements.md",tags:[],version:"current",lastUpdatedAt:1668118502,formattedLastUpdatedAt:"11/10/2022",frontMatter:{title:"Requirements"},sidebar:"mySidebar",previous:{title:"Quick Start",permalink:"/rke2-docs/install/quickstart"},next:{title:"Configuration Options",permalink:"/rke2-docs/install/configuration"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Operating Systems",id:"operating-systems",level:2},{value:"Linux",id:"linux",level:3},{value:"Windows",id:"windows",level:3},{value:"Hardware",id:"hardware",level:2},{value:"Linux/Windows",id:"linuxwindows",level:3},{value:"Disks",id:"disks",level:4},{value:"Networking",id:"networking",level:2},{value:"Windows Specific Inbound Network Rules",id:"windows-specific-inbound-network-rules",level:3}],m={toc:p};function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"RKE2 is very lightweight, but has some minimum requirements as outlined below."),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"Two nodes cannot have the same hostname."),(0,l.kt)("p",null,"If all your nodes have the same hostname, set the ",(0,l.kt)("inlineCode",{parentName:"p"},"node-name")," parameter in the RKE2 config file for each node you add to the cluster to have a different node name."),(0,l.kt)("h2",{id:"operating-systems"},"Operating Systems"),(0,l.kt)("h3",{id:"linux"},"Linux"),(0,l.kt)("p",null,"RKE2 has been tested and validated on the following operating systems, and their subsequent non-major releases:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Ubuntu 18.04 and 20.04 (amd64)"),(0,l.kt)("li",{parentName:"ul"},"CentOS/RHEL 7.8 (amd64)"),(0,l.kt)("li",{parentName:"ul"},"Rocky/RHEL 8.5 (amd64)"),(0,l.kt)("li",{parentName:"ul"},"SLES 15 SP3, OpenSUSE, SLE Micro 5.1 (amd64)")),(0,l.kt)("h3",{id:"windows"},"Windows"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Windows Support is currently Experimental as of v1.21.3+rke2r1"),"\n",(0,l.kt)("strong",{parentName:"p"},"Windows Support requires choosing Calico as the CNI for the RKE2 cluster")),(0,l.kt)("p",null,"The RKE2 Windows Node (Worker) agent has been tested and validated on the following operating systems, and their subsequent non-major releases:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Windows Server 2019 LTSC (amd64) (OS Build 17763.2061)"),(0,l.kt)("li",{parentName:"ul"},"Windows Server 2022 LTSC (amd64) (OS Build 20348.169)")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note")," The Windows Server Containers feature needs to be enabled for the RKE2 Windows agent to work."),(0,l.kt)("p",null,"Open a new Powershell window with Administrator privileges"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},'powershell -Command "Start-Process PowerShell -Verb RunAs"\n')),(0,l.kt)("p",null,"In the new Powershell window, run the following command."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"Enable-WindowsOptionalFeature -Online -FeatureName Containers \u2013All\n")),(0,l.kt)("p",null,"This will require a reboot for the ",(0,l.kt)("inlineCode",{parentName:"p"},"Containers")," feature to properly function."),(0,l.kt)("h2",{id:"hardware"},"Hardware"),(0,l.kt)("p",null,"Hardware requirements scale based on the size of your deployments. Minimum recommendations are outlined here."),(0,l.kt)("h3",{id:"linuxwindows"},"Linux/Windows"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"RAM: 4GB Minimum (we recommend at least 8GB)"),(0,l.kt)("li",{parentName:"ul"},"CPU: 2 Minimum (we recommend at least 4CPU)")),(0,l.kt)("h4",{id:"disks"},"Disks"),(0,l.kt)("p",null,"RKE2 performance depends on the performance of the database, and since RKE2 runs etcd embeddedly and it stores the data dir on disk, we recommend using an SSD when possible to ensure optimal performance."),(0,l.kt)("h2",{id:"networking"},"Networking"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Important:")," If your node has NetworkManager installed and enabled, ",(0,l.kt)("a",{parentName:"p",href:"../known_issues/#networkmanager"},"ensure that it is configured to ignore CNI-managed interfaces."),". If your node has Wicked installed and enabled, ",(0,l.kt)("a",{parentName:"p",href:"../known_issues/#wicked"},"ensure that the forwarding sysctl config is enabled")),(0,l.kt)("p",null,"The RKE2 server needs port 6443 and 9345 to be accessible by other nodes in the cluster."),(0,l.kt)("p",null,"All nodes need to be able to reach other nodes over UDP port 8472 when Flannel VXLAN is used."),(0,l.kt)("p",null,"If you wish to utilize the metrics server, you will need to open port 10250 on each node."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Important:")," The VXLAN port on nodes should not be exposed to the world as it opens up your cluster network to be accessed by anyone. Run your nodes behind a firewall/security group that disables access to port 8472."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Inbound Rules for RKE2 Server Nodes")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Protocol"),(0,l.kt)("th",{parentName:"tr",align:null},"Port"),(0,l.kt)("th",{parentName:"tr",align:null},"Source"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TCP"),(0,l.kt)("td",{parentName:"tr",align:null},"9345"),(0,l.kt)("td",{parentName:"tr",align:null},"RKE2 agent nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"Kubernetes API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TCP"),(0,l.kt)("td",{parentName:"tr",align:null},"6443"),(0,l.kt)("td",{parentName:"tr",align:null},"RKE2 agent nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"Kubernetes API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UDP"),(0,l.kt)("td",{parentName:"tr",align:null},"8472"),(0,l.kt)("td",{parentName:"tr",align:null},"RKE2 server and agent nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"Required only for Flannel VXLAN")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TCP"),(0,l.kt)("td",{parentName:"tr",align:null},"10250"),(0,l.kt)("td",{parentName:"tr",align:null},"RKE2 server and agent nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"kubelet")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TCP"),(0,l.kt)("td",{parentName:"tr",align:null},"2379"),(0,l.kt)("td",{parentName:"tr",align:null},"RKE2 server nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"etcd client port")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TCP"),(0,l.kt)("td",{parentName:"tr",align:null},"2380"),(0,l.kt)("td",{parentName:"tr",align:null},"RKE2 server nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"etcd peer port")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TCP"),(0,l.kt)("td",{parentName:"tr",align:null},"30000-32767"),(0,l.kt)("td",{parentName:"tr",align:null},"RKE2 server and agent nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"NodePort port range")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UDP"),(0,l.kt)("td",{parentName:"tr",align:null},"8472"),(0,l.kt)("td",{parentName:"tr",align:null},"RKE2 server and agent nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"Cilium CNI VXLAN")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TCP"),(0,l.kt)("td",{parentName:"tr",align:null},"4240"),(0,l.kt)("td",{parentName:"tr",align:null},"RKE2 server and agent nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"Cilium CNI health checks")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ICMP"),(0,l.kt)("td",{parentName:"tr",align:null},"8/0"),(0,l.kt)("td",{parentName:"tr",align:null},"RKE2 server and agent nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"Cilium CNI health checks")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TCP"),(0,l.kt)("td",{parentName:"tr",align:null},"179"),(0,l.kt)("td",{parentName:"tr",align:null},"RKE2 server and agent nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"Calico CNI with BGP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UDP"),(0,l.kt)("td",{parentName:"tr",align:null},"4789"),(0,l.kt)("td",{parentName:"tr",align:null},"RKE2 server and agent nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"Calico CNI with VXLAN")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TCP"),(0,l.kt)("td",{parentName:"tr",align:null},"5473"),(0,l.kt)("td",{parentName:"tr",align:null},"RKE2 server and agent nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"Calico CNI with Typha")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TCP"),(0,l.kt)("td",{parentName:"tr",align:null},"9098"),(0,l.kt)("td",{parentName:"tr",align:null},"RKE2 server and agent nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"Calico Typha health checks")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TCP"),(0,l.kt)("td",{parentName:"tr",align:null},"9099"),(0,l.kt)("td",{parentName:"tr",align:null},"RKE2 server and agent nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"Calico health checks")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TCP"),(0,l.kt)("td",{parentName:"tr",align:null},"5473"),(0,l.kt)("td",{parentName:"tr",align:null},"RKE2 server and agent nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"Calico CNI with Typha")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UDP"),(0,l.kt)("td",{parentName:"tr",align:null},"8472"),(0,l.kt)("td",{parentName:"tr",align:null},"RKE2 server and agent nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"Canal CNI with VXLAN")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TCP"),(0,l.kt)("td",{parentName:"tr",align:null},"9099"),(0,l.kt)("td",{parentName:"tr",align:null},"RKE2 server and agent nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"Canal CNI health checks")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UDP"),(0,l.kt)("td",{parentName:"tr",align:null},"51820"),(0,l.kt)("td",{parentName:"tr",align:null},"RKE2 server and agent nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"Canal CNI with WireGuard IPv4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UDP"),(0,l.kt)("td",{parentName:"tr",align:null},"51821"),(0,l.kt)("td",{parentName:"tr",align:null},"RKE2 server and agent nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"Canal CNI with WireGuard IPv6/dual-stack")))),(0,l.kt)("h3",{id:"windows-specific-inbound-network-rules"},"Windows Specific Inbound Network Rules"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Protocol"),(0,l.kt)("th",{parentName:"tr",align:null},"Port"),(0,l.kt)("th",{parentName:"tr",align:null},"Source"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UDP"),(0,l.kt)("td",{parentName:"tr",align:null},"4789"),(0,l.kt)("td",{parentName:"tr",align:null},"RKE2 server nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"Required for Calico and Flannel VXLAN")))),(0,l.kt)("p",null,"Typically, all outbound traffic will be allowed."))}k.isMDXComponent=!0}}]);