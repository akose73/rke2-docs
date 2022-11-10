"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[154],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),p=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=p(r),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(g,i(i({ref:e},c),{},{components:r})):n.createElement(g,i({ref:e},c))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3500:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={},s="Migration from RKE1 to RKE2",p={unversionedId:"migration",id:"migration",title:"Migration from RKE1 to RKE2",description:"In order to migrate from Rancher Kubernetes Engine (RKE1) to RKE2, you need two things:",source:"@site/docs/migration.md",sourceDirName:".",slug:"/migration",permalink:"/rke2-docs/migration",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/migration.md",tags:[],version:"current",lastUpdatedAt:1668118502,formattedLastUpdatedAt:"11/10/2022",frontMatter:{}},c={},d=[{value:"Introducing Migration Agent",id:"introducing-migration-agent",level:2},{value:"Usage",id:"usage",level:3},{value:"Cluster Configuration",id:"cluster-configuration",level:3},{value:"Addons Migration",id:"addons-migration",level:3},{value:"Cluster Addons Configuration Migration",id:"cluster-addons-configuration-migration",level:3},{value:"CoreDNS Configuration",id:"coredns-configuration",level:4},{value:"Metrics Server Configuration",id:"metrics-server-configuration",level:4},{value:"Ingress Nginx Configuration",id:"ingress-nginx-configuration",level:4},{value:"Cloud Provider Support",id:"cloud-provider-support",level:3},{value:"Private Registry Support",id:"private-registry-support",level:3},{value:"CNI Configuration Migration",id:"cni-configuration-migration",level:3}],u={toc:d};function m(t){var e=t.components,r=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"migration-from-rke1-to-rke2"},"Migration from RKE1 to RKE2"),(0,o.kt)("p",null,"In order to migrate from Rancher Kubernetes Engine (RKE1) to RKE2, you need two things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ETCD data directory"),(0,o.kt)("li",{parentName:"ul"},"Cluster CA certificates")),(0,o.kt)("p",null,"Both can be found when you take a RKE1 snapshot, as the RKE1 snapshot archive contains two things: an etcd snapshot, and ",(0,o.kt)("inlineCode",{parentName:"p"},".rkestate")," of your cluster."),(0,o.kt)("h2",{id:"introducing-migration-agent"},"Introducing Migration Agent"),(0,o.kt)("p",null,"migration-agent is a tool that lays the groundwork for RKE1 nodes to move to RKE2 nodes. It accomplishes this in two main steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Restore the etcd snapshot on etcd nodes to the RKE2 etcd db data directory."),(0,o.kt)("li",{parentName:"ul"},"Copy the CA certs and service account token key from ",(0,o.kt)("inlineCode",{parentName:"li"},".rkestate")," file to RKE2 data directory.")),(0,o.kt)("p",null,"This tool runs on RKE1 nodes before running RKE2."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To run the migration you need to take a snapshot first on rke1 nodes:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"rke etcd snapshot-save --s3 --name rke1snapshot --access-key <access-key> --secret-key <secret-key> --region <region> --folder <folder> --bucket-name <bucket name>\n")))),(0,o.kt)("p",null,"For more information, please refer to the RKE1 ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/etcd-snapshots/one-time-snapshots/"},"official documentation")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Now you can either run migration agent directly on the node, or use the following ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/migration-agent/blob/master/deploy/daemonset.yaml"},"manifest")," to deploy migration-agent as a daemonset on the RKE1 cluster. Before you apply the manifest file, you need to edit the file to include the information about the s3 snapshot of RKE1:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'command:\n- "sh"\n- "-c"\n- "migration-agent --s3-region <region> --s3-bucket <s3 bucket> --s3-folder <s3 folder> --s3-access-key <access-key> --s3-secret-key <secret-key>  --snapshot rke1db.zip && sleep 9223372036854775807"\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After running the tool you should see the following paths have been created on control-plane and etcd nodes:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"/etc/rancher/rke2/config.yaml.d/10-migration.yaml\n/var/lib/rancher/rke2/server/\n/var/lib/rancher/rke2/server/db/\n/var/lib/rancher/rke2/server/manifests/\n/var/lib/rancher/rke2/server/tls/\n/var/lib/rancher/rke2/server/cred\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The next step is stop docker containers of rke1:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"systemctl disable docker\nsystemctl stop docker\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The last step is to install and run rke2 server or agent depend on the type of the node:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"curl -sfL https://get.rke2.io | sh -\nsystemctl start rke2-server\nsystemctl enable rke2-server\n")))),(0,o.kt)("h3",{id:"cluster-configuration"},"Cluster Configuration"),(0,o.kt)("p",null,"One of the functions of the migration-agent is to copy the cluster configuration from the rkestate file to ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/rancher/rke2/config.yaml.d/10-migration.yaml"),", this includes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cluster CIDR"),(0,o.kt)("li",{parentName:"ul"},"Service CIDR"),(0,o.kt)("li",{parentName:"ul"},"Service Node Port Range"),(0,o.kt)("li",{parentName:"ul"},"Cluster DNS"),(0,o.kt)("li",{parentName:"ul"},"Cluster Domain"),(0,o.kt)("li",{parentName:"ul"},"Extra API Args"),(0,o.kt)("li",{parentName:"ul"},"Extra Scheduler Args"),(0,o.kt)("li",{parentName:"ul"},"Extra Controller Manager Args")),(0,o.kt)("h3",{id:"addons-migration"},"Addons Migration"),(0,o.kt)("p",null,"RKE2 deploys addons as helm charts, so migration-agent creates a manifest that deletes the old RKE1 addons and let RKE2 deploys addons as Helm charts."),(0,o.kt)("h3",{id:"cluster-addons-configuration-migration"},"Cluster Addons Configuration Migration"),(0,o.kt)("p",null,"One of the migration-agent features is migrating all configuration for the cluster addons to rke2, this includes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CoreDNS configuration"),(0,o.kt)("li",{parentName:"ul"},"Metrics-Server configuration"),(0,o.kt)("li",{parentName:"ul"},"Ingress nginx configuration ")),(0,o.kt)("h4",{id:"coredns-configuration"},"CoreDNS Configuration"),(0,o.kt)("p",null,"RKE1 adds several configuration options for CoreDNS, migration-agent makes sure that these configs are migrated to a HelmchartConfig which will be used to configure the CoreDNS helmChart:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"CoreDNS Optinos"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"PriorityClassName")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"NodeSelector")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"RollingUpdate")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Tolerations")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"AutoScalerConfig.Enabled")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"AutoScalerConfig.PriorityClassName")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"AutoScalerConfig.Min")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"AutoScalerConfig.Max")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"AutoScalerConfig.CoresPerReplica")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"utoScalerConfig.NodesPerReplica")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"AutoScalerConfig.PreventSinglePointFailure")))),(0,o.kt)("h4",{id:"metrics-server-configuration"},"Metrics Server Configuration"),(0,o.kt)("p",null,"migration-agent also does the same for Metrics Server"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Metrics Server Options"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"PriorityClassName")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"NodeSelector")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"RBAC")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Tolerations")))),(0,o.kt)("h4",{id:"ingress-nginx-configuration"},"Ingress Nginx Configuration"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Nginx Ingress Config"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"ConfigMap")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"NodeSelector")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"ExtraArgs")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"ExtraEnvs")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"ExtraVolumes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"ExtraVolumeMounts")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Tolerations")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"DNSPolicy")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"HTTPPort")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"HTTPSPort")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"PriorityClassName")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"DefaultBackendConfig")))),(0,o.kt)("h3",{id:"cloud-provider-support"},"Cloud Provider Support"),(0,o.kt)("p",null,"migration-agent is able to migrate cloud provider configuration, this happens by copying the rke1 config file to the rke2 configuration directory and then passes down flags to RKE2 to include the name and path of cloud provider config:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```\n--cloud-provider-config\n--cloud-provider-name\n```\n")),(0,o.kt)("h3",{id:"private-registry-support"},"Private Registry Support"),(0,o.kt)("p",null,"The agent also adds the ability to migrate private registry configuration, this happens by copying the private registries configured in the cluster.yaml file in rke1. Unfortunately RKE1 lacks the feature of passing TLS configuration to private registries and depends on Docker TLS configuration manually on each node, so to account for that migration-agent supports a flag --registry which Configure private registry TLS paths, syntax should be ",(0,o.kt)("inlineCode",{parentName:"p"},"<registry url>,<ca cert path>,<cert path>,<key path>"),"."),(0,o.kt)("h3",{id:"cni-configuration-migration"},"CNI Configuration Migration"),(0,o.kt)("p",null,"RKE1 and RKE2 both support Calico and Canal CNI, so migration-agent will be able to migrate the CNI only if Canal or Calico is used."))}m.isMDXComponent=!0}}]);