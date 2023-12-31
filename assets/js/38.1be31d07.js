(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{323:function(s,t,a){"use strict";a.r(t);var e=a(7),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"git-submodule"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-submodule"}},[s._v("#")]),s._v(" git submodule")]),s._v(" "),t("h2",{attrs:{id:"项目加入-submodule"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目加入-submodule"}},[s._v("#")]),s._v(" 项目加入 "),t("code",[s._v("submodule")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" submodule "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" https://github.com/xiaoxuan6/module.git\n")])])]),t("p",[s._v("添加成功后，项目中会多处两个文件 "),t("code",[s._v(".gitmodules")]),s._v(" 和 "),t("code",[s._v("module")])]),s._v(" "),t("h2",{attrs:{id:"操作子模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作子模块"}},[s._v("#")]),s._v(" 操作子模块")]),s._v(" "),t("p",[s._v("子模块和正常的项目一样操作 "),t("code",[s._v("git")]),s._v(", 在 "),t("code",[s._v("module")]),s._v(" 目录下")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" ./\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"add submodule"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push\n")])])]),t("blockquote",[t("p",[s._v("注意：在子模块下提交之后必须返回项目根目录在提交一次")])]),s._v(" "),t("h2",{attrs:{id:"克隆含有子模块的项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#克隆含有子模块的项目"}},[s._v("#")]),s._v(" 克隆含有子模块的项目")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" master https://github.com/xiaoxuan6/faker.io.git\n")])])]),t("p",[s._v("其中有 "),t("code",[s._v("module")]),s._v(" 目录, 不过是空的, 你必须运行两个命令:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" submodule init "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用来初始化本地配置文件;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" submodule update "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 则从该项目中抓取所有数据并检出父项目中列出的合适的提交")]),s._v("\n")])])]),t("blockquote",[t("p",[s._v("如果在 clone project 项目的同时加上 --recursive 参数, 它就会自动初始化并更新仓库中的每一个子模块。")])])])}),[],!1,null,null,null);t.default=n.exports}}]);