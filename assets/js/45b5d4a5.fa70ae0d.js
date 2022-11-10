"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[141],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return h}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),h=o,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4838:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={title:"Networking"},s=void 0,c={unversionedId:"networking",id:"networking",title:"Networking",description:"This page explains how CoreDNS and the Nginx-Ingress controller work within RKE2.",source:"@site/docs/networking.md",sourceDirName:".",slug:"/networking",permalink:"/rke2-docs/networking",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/networking.md",tags:[],version:"current",lastUpdatedAt:1668118502,formattedLastUpdatedAt:"11/10/2022",frontMatter:{title:"Networking"},sidebar:"mySidebar",previous:{title:"Etcd Backup and Restore",permalink:"/rke2-docs/backup_restore"},next:{title:"Helm Integration",permalink:"/rke2-docs/helm"}},p={},u=[{value:"CoreDNS",id:"coredns",level:2},{value:"NodeLocal DNSCache",id:"nodelocal-dnscache",level:3},{value:"Nginx Ingress Controller",id:"nginx-ingress-controller",level:2},{value:"Nodes Without a Hostname",id:"nodes-without-a-hostname",level:2}],d={toc:u};function h(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This page explains how CoreDNS and the Nginx-Ingress controller work within RKE2."),(0,a.kt)("p",null,"Refer to the ",(0,a.kt)("a",{parentName:"p",href:"/rke2-docs/install/network_options"},"Installation Network Options")," page for details on Canal configuration options, or how to set up your own CNI."),(0,a.kt)("p",null,"For information on which ports need to be opened for RKE2, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/rke2-docs/install/requirements"},"Installation Requirements"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#coredns"},"CoreDNS")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#nginx-ingress-controller"},"Nginx Ingress Controller")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#nodes-without-a-hostname"},"Nodes Without a Hostname"))),(0,a.kt)("h2",{id:"coredns"},"CoreDNS"),(0,a.kt)("p",null,"CoreDNS is deployed by default when starting the server. To disable, run each server with ",(0,a.kt)("inlineCode",{parentName:"p"},"disable: rke2-coredns")," option in your configuration file."),(0,a.kt)("p",null,"If you don't install CoreDNS, you will need to install a cluster DNS provider yourself."),(0,a.kt)("p",null,"CoreDNS is deployed with the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-incubator/cluster-proportional-autoscaler"},"autoscaler")," by default. To disable it or change its config, use the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rke2.io/helm/#customizing-packaged-components-with-helmchartconfig"},"HelmChartConfig")," resource."),(0,a.kt)("h3",{id:"nodelocal-dnscache"},"NodeLocal DNSCache"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/nodelocaldns/"},"NodeLocal DNSCache")," improves the performance by running a dns caching agent on each node. To activate this feature, apply the following HelmChartConfig:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: rke2-coredns\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    nodelocal:\n      enabled: true\n")),(0,a.kt)("p",null,"The helm controller will redeploy coredns with the new config. Please be aware that nodelocal modifies the iptables of the node to intercept DNS traffic. Therefore, activating and then deactivating this feature without redeploying, will cause the DNS service to stop working."),(0,a.kt)("p",null,"Note that NodeLocal DNSCache must be deployed in ipvs mode if kube-proxy is using that mode. To deploy it in this mode, apply the following HelmChartConfig:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: rke2-coredns\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    nodelocal:\n      enabled: true\n      ipvs: true\n")),(0,a.kt)("h2",{id:"nginx-ingress-controller"},"Nginx Ingress Controller"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/ingress-nginx"},"nginx-ingress")," is an Ingress controller powered by NGINX that uses a ConfigMap to store the NGINX configuration."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"nginx-ingress")," is deployed by default when starting the server. Ports 80 and 443 will be bound by the ingress controller in its default configuration, making these unusable for HostPort or NodePort services in the cluster."),(0,a.kt)("p",null,"Configuration options can be specified by creating a ",(0,a.kt)("a",{parentName:"p",href:"/rke2-docs/helm#customizing-packaged-components-with-helmchartconfig"},"HelmChartConfig manifest")," to customize the ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2-ingress-nginx")," HelmChart values. For example, a HelmChartConfig at ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/server/manifests/rke2-ingress-nginx-config.yaml")," with the following contents sets ",(0,a.kt)("inlineCode",{parentName:"p"},"use-forwarded-headers")," to ",(0,a.kt)("inlineCode",{parentName:"p"},'"true"')," in the ConfigMap storing the NGINX config:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# /var/lib/rancher/rke2/server/manifests/rke2-ingress-nginx-config.yaml\n---\napiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: rke2-ingress-nginx\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    controller:\n      config:\n        use-forwarded-headers: "true"\n')),(0,a.kt)("p",null,"For more information, refer to the official ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/ingress-nginx/tree/9c0a39636da11b7e262ddf0b4548c79ae9fa1667/charts/ingress-nginx#configuration"},"nginx-ingress Helm Configuration Parameters"),"."),(0,a.kt)("p",null,"To disable the NGINX ingress controller, start each server with the ",(0,a.kt)("inlineCode",{parentName:"p"},"disable: rke2-ingress-nginx")," option in your configuration file."),(0,a.kt)("h2",{id:"nodes-without-a-hostname"},"Nodes Without a Hostname"),(0,a.kt)("p",null,'Some cloud providers, such as Linode, will create machines with "localhost" as the hostname and others may not have a hostname set at all. This can cause problems with domain name resolution. You can run RKE2 with the ',(0,a.kt)("inlineCode",{parentName:"p"},"node-name")," parameter and this will pass the node name to resolve this issue."))}h.isMDXComponent=!0}}]);