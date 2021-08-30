(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{369:function(a,s,t){"use strict";t.r(s);var e=t(44),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[a._v("#")]),a._v(" 介绍")]),a._v(" "),t("h2",{attrs:{id:"docker-是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-是什么"}},[a._v("#")]),a._v(" Docker 是什么")]),a._v(" "),t("p",[a._v("Docker 是一个开源的应用容器引擎，基于 Go 语言 并遵从 Apache2.0 协议开源。")]),a._v(" "),t("p",[a._v("Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。")]),a._v(" "),t("p",[a._v("容器是完全使用沙箱机制，相互之间不会有任何接口（类似 iPhone 的 app）,更重要的是容器性能开销极低。")]),a._v(" "),t("h2",{attrs:{id:"docker-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装"}},[a._v("#")]),a._v(" Docker 安装")]),a._v(" "),t("p",[a._v("以下为 CentOS 系统安装 Docker 的教程。")]),a._v(" "),t("h3",{attrs:{id:"使用官方安装脚本自动安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用官方安装脚本自动安装"}},[a._v("#")]),a._v(" 使用官方安装脚本自动安装")]),a._v(" "),t("p",[a._v("安装命令如下:")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -fsSL https://get.docker.com "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v(" -s docker --mirror aliyun\n")])])]),t("p",[a._v("也可以使用国内 daocloud 一键安装命令:")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -sSL https://get.daocloud.io/docker "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v("\n")])])]),t("h3",{attrs:{id:"手动安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手动安装"}},[a._v("#")]),a._v(" 手动安装")]),a._v(" "),t("h4",{attrs:{id:"卸载旧版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卸载旧版本"}},[a._v("#")]),a._v(" 卸载旧版本")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("yum remove docker "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                  docker-client "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                  docker-client-latest "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                  docker-common "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                  docker-latest "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                  docker-latest-logrotate "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                  docker-logrotate "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                  docker-engine\n")])])]),t("h4",{attrs:{id:"安装-docker-基础包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-docker-基础包"}},[a._v("#")]),a._v(" 安装 docker 基础包")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -y yum-utils "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  device-mapper-persistent-data "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  lvm2\n")])])]),t("h4",{attrs:{id:"设置稳定仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置稳定仓库"}},[a._v("#")]),a._v(" 设置稳定仓库")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("yum-config-manager "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --add-repo "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n")])])]),t("h4",{attrs:{id:"安装docker-engine-community"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装docker-engine-community"}},[a._v("#")]),a._v(" 安装Docker Engine - Community")]),a._v(" "),t("ul",[t("li",[a._v("安装最新版本(latest)")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" docker-ce docker-ce-cli containerd.io\n")])])]),t("ul",[t("li",[a._v("安装指定版本")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("yum list docker-ce --showduplicates "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sort")]),a._v(" -r  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#查看版本")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" docker-ce-"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("VERSION_STRING"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" docker-ce-cli-"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("VERSION_STRING"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" containerd.io "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#安装指定版本")]),a._v("\n")])])]),t("h4",{attrs:{id:"启动与测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动与测试"}},[a._v("#")]),a._v(" 启动与测试")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl start docker  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 启动docker")]),a._v("\ndocker run hello-world  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#测试")]),a._v("\n")])])]),t("p",[t("img",{attrs:{src:"/blogs/images/docker/install.png",alt:"Docker 安装"}})]),a._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[a._v("警告")]),a._v(" "),t("p",[a._v("CentOS8 已默认安装 podman，功能与 docker 类似，如需在 CentOS8 上安装 docker，则需要先卸载 podman。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("yum list podman-manpages  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#查看 podman-manpages")]),a._v("\nyum remove podman-manpages.noarch  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#卸载podman-manpages.noarch")]),a._v("\n")])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);