(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{336:function(s,a,t){"use strict";t.r(a);var e=t(7),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$#")]),s._v(" // 表示传递给脚本的参数个数\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$*")]),s._v(" // 以单个字符串的形式返回所有传递给脚本的参数\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$@")]),s._v(" // 以单个字符串的形式返回所有传递给脚本的参数，但每个参数都是独立的\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$?")]),s._v(" // 表示上一个命令的退出状态。当命令成功执行时，"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$?")]),s._v("的值通常为0；当命令执行失败时，"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$?")]),s._v("的值通常为非零值，表示出错的原因\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("shift")]),s._v(" // 命令用于将参数列表向左移动，使得"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v("变为"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("，"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$3")]),s._v("变为"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v("，依此类推，同时"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$#")]),s._v("也会减少\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v("*=}")]),s._v(" // 从传递给脚本或函数的第一个参数中提取等号 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 后面的值\n")])])]),a("h1",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" Example")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$#")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-gt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--pattern")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("pattern")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v("*=}")]),s._v('"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    *"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"***************************'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"* Error: Invalid argument.*'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"***************************'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("esac")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("shift")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);