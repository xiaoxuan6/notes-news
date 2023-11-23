(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{320:function(a,t,s){"use strict";s.r(t);var e=s(14),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"启动-wsl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动-wsl"}},[a._v("#")]),a._v(" 启动 wsl")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 启用 wsl")]),a._v("\ndism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 启用虚拟机")]),a._v("\ndism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 设置 wsl 默认版本")]),a._v("\nwsl --set-default-version "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\n")])])]),t("p",[a._v("设置：在控制面板中的程序和功能的左侧 "),t("code",[a._v("启动或关闭 windows 功能")]),a._v(" 中启动 "),t("code",[a._v("适用于 Linux 的 windows 子系统")])]),a._v(" "),t("h2",{attrs:{id:"安装-ubuntu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-ubuntu"}},[a._v("#")]),a._v(" 安装 Ubuntu")]),a._v(" "),t("p",[a._v("1、从 Microsoft Store 获取 Ubuntu")]),a._v(" "),t("p",[a._v("2、直接从 cmd 命令中安装")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("wsl "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--intall")]),a._v("\n")])])]),t("h4",{attrs:{id:"启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[a._v("#")]),a._v(" 启动")]),a._v(" "),t("p",[a._v("在 cmd 中输入 "),t("code",[a._v("bash")]),a._v(" 进入，或者通过 ubuntu 进入面板")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f0ca2c1c95af41cfb4cb15f0f81b1500~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp",alt:"img"}})]),a._v(" "),t("p",[a._v("输入新用户名/密码")]),a._v(" "),t("blockquote",[t("p",[a._v("注意：使用 docker 会报错 "),t("code",[a._v('Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get "http://%2Fvar%2Frun%2Fdocker.sock/v1.24/containers/json?all=1": dial unix /var/run/docker.sock: connect: permission denied')]),a._v(" 没有权限")]),a._v(" "),t("p",[a._v("解决：设置 root 用户 "),t("code",[a._v("sudo passwd root")]),a._v(", 然后切换到 root "),t("code",[a._v("su root")])])]),a._v(" "),t("h2",{attrs:{id:"卸载-ubuntu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卸载-ubuntu"}},[a._v("#")]),a._v(" 卸载 Ubuntu")]),a._v(" "),t("h4",{attrs:{id:"查看安装的系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看安装的系统"}},[a._v("#")]),a._v(" 查看安装的系统")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("wsl "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--list")]),a._v("\n")])])]),t("h4",{attrs:{id:"卸载对应的系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卸载对应的系统"}},[a._v("#")]),a._v(" 卸载对应的系统")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("wsl "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--unregister")]),a._v(" Ubuntu\n")])])]),t("h4",{attrs:{id:"卸载验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卸载验证"}},[a._v("#")]),a._v(" 卸载验证")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("wsl "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--list")]),a._v("\n")])])]),t("blockquote",[t("p",[a._v("相关："),t("RouterLink",{attrs:{to:"/linux/oh_my_zsh.html"}},[a._v("安装 oh my zsh")])],1),a._v(" "),t("p",[a._v("相关链接："),t("a",{attrs:{href:"https://www.jianshu.com/p/6b02948b3d37",target:"_blank",rel:"noopener noreferrer"}},[a._v("Win+Linux单系统解决方案——WSL（入门篇）"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);