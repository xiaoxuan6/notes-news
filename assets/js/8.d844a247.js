(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{281:function(a,e,t){"use strict";t.r(e);var r=t(14),s=Object(r.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"删除某软件-及其安装时自动安装的所有包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除某软件-及其安装时自动安装的所有包"}},[a._v("#")]),a._v(" 删除某软件,及其安装时自动安装的所有包")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("sudo apt-get autoremove docker docker-ce docker-engine  docker.io  containerd runc\n")])])]),e("h2",{attrs:{id:"删除docker其他没有没有卸载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除docker其他没有没有卸载"}},[a._v("#")]),a._v(" 删除docker其他没有没有卸载")]),a._v(" "),e("div",{staticClass:"language-angular2html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("dpkg -l | grep docker\n")])])]),e("h2",{attrs:{id:"卸载没有删除的docker相关插件-结合自己电脑的实际情况"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#卸载没有删除的docker相关插件-结合自己电脑的实际情况"}},[a._v("#")]),a._v(" 卸载没有删除的docker相关插件(结合自己电脑的实际情况)")]),a._v(" "),e("div",{staticClass:"language-angular2html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("sudo apt-get autoremove docker-ce-*\n")])])]),e("h2",{attrs:{id:"删除docker的相关配置-目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除docker的相关配置-目录"}},[a._v("#")]),a._v(" 删除docker的相关配置&目录")]),a._v(" "),e("div",{staticClass:"language-angular2html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("sudo rm -rf /etc/systemd/system/docker.service.d\nsudo rm -rf /var/lib/docker\n")])])]),e("h2",{attrs:{id:"确定docker卸载完毕"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#确定docker卸载完毕"}},[a._v("#")]),a._v(" 确定docker卸载完毕")]),a._v(" "),e("div",{staticClass:"language-angular2html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker --version\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);