(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{335:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("code",[s._v("jq")]),s._v(" 是一款命令行的 "),t("code",[s._v("json")]),s._v(" 处理工具。类似于 "),t("code",[s._v("lodash")]),s._v(" 一样，它可以对 "),t("code",[s._v("json")]),s._v(" 做各种各样的处理: "),t("code",[s._v("pick")]),s._v("，"),t("code",[s._v("get")]),s._v("，"),t("code",[s._v("filter")]),s._v("，"),t("code",[s._v("sort")]),s._v("，"),t("code",[s._v("map")]),s._v("...")]),s._v(" "),t("p",[s._v("由于 "),t("code",[s._v("jq")]),s._v(" 本身比较简单，以下总结一些经常用到的示例。如果需要更多的细节，可以参考 "),t("a",{attrs:{href:"https://stedolan.github.io/jq/manual/",target:"_blank",rel:"noopener noreferrer"}},[s._v("jq 官方文档"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("先创建一个样例 "),t("code",[s._v("demo.jsonl")]),s._v("，"),t("code",[s._v("jsonl")]),s._v(" 即每行都是一个 "),t("code",[s._v("json")]),s._v("，常用在日志格式中")]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shanyue"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"age"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"friend"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shuifeng"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shuifeng"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"age"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"friend"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shanyue"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("由于在后端 API 中会是以 "),t("code",[s._v("json")]),s._v(" 的格式返回，再次创建一个样例 "),t("code",[s._v("demo.json")])]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shanyue"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"age"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"friend"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shuifeng"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shuifeng"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"age"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"friend"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shanyue"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("h2",{attrs:{id:"jq-命令详解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jq-命令详解"}},[s._v("#")]),s._v(" jq 命令详解")]),s._v(" "),t("p",[t("code",[s._v("jq")]),s._v(" 主要可以分作两部分，options 即选项，filter 即各种转换操作，类似于 "),t("code",[s._v("lodash")]),s._v(" 的各种函数")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("jq "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" filter "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("files"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("blockquote",[t("p",[s._v("强烈建议参考 "),t("a",{attrs:{href:"https://stedolan.github.io/jq/manual/",target:"_blank",rel:"noopener noreferrer"}},[s._v("jq 官方手册"),t("OutboundLink")],1),s._v("，命令示例一应俱全")])]),s._v(" "),t("h3",{attrs:{id:"option"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#option"}},[s._v("#")]),s._v(" option")]),s._v(" "),t("p",[s._v("我仅常用以下几个选项")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("-s")]),s._v(": 把读取的 "),t("code",[s._v("jsonl")]),s._v(" 视作数组来处理 (如 group, sort 只能以数组作为输入)")]),s._v(" "),t("li",[t("code",[s._v("-c")]),s._v(": 不对输出的 "),t("code",[s._v("json")]),s._v(" 做格式化，一行输出")])]),s._v(" "),t("h3",{attrs:{id:"filter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#filter"}},[s._v("#")]),s._v(" filter")]),s._v(" "),t("p",[s._v("filter 各种转换操作就很多了，如 "),t("code",[s._v("get")]),s._v("，"),t("code",[s._v("map")]),s._v("，"),t("code",[s._v("filter")]),s._v("，"),t("code",[s._v("map")]),s._v("，"),t("code",[s._v("pick")]),s._v("，"),t("code",[s._v("uniq")]),s._v("，"),t("code",[s._v("group")]),s._v(" 等操作")]),s._v(" "),t("ul",[t("li",[t("code",[s._v(".")]),s._v(": 代表自身")]),s._v(" "),t("li",[t("code",[s._v(".a.b")]),s._v(": 相当于 "),t("code",[s._v("_.get(input, 'a.b')")])]),s._v(" "),t("li",[t("code",[s._v("select(bool)")]),s._v(": 相当于 "),t("code",[s._v("_.filter(boolFn)")])]),s._v(" "),t("li",[t("code",[s._v("map_values")]),s._v(": 相当于 "),t("code",[s._v("_.map")]),s._v("，不过 "),t("code",[s._v("jq")]),s._v(" 无法单独操作 "),t("code",[s._v("key")])]),s._v(" "),t("li",[t("code",[s._v("sort")])]),s._v(" "),t("li",[t("code",[s._v("group_by")])])]),s._v(" "),t("blockquote",[t("p",[s._v("更多 filter 参考 "),t("a",{attrs:{href:"https://stedolan.github.io/jq/manual/",target:"_blank",rel:"noopener noreferrer"}},[s._v("jq 官方手册"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"jq-examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jq-examples"}},[s._v("#")]),s._v(" jq examples")]),s._v(" "),t("p",[s._v("虽然 "),t("code",[s._v("jq")]),s._v(" 的功能很强大，但平时使用最为频繁的也就以下几个示例。当然复杂的情形也会有，参考我过去一篇使用 "),t("code",[s._v("jq")]),s._v(" 改 "),t("code",[s._v("ts")]),s._v(" 类型错误的一篇文章: "),t("a",{attrs:{href:"https://shanyue.tech/post/sequelize-upgrade.html#_07-%E5%BD%92%E5%B9%B6%E4%B8%8E%E5%88%86%E7%B1%BB%EF%BC%8C%E9%80%90%E4%B8%AA%E5%87%BB%E7%A0%B4",target:"_blank",rel:"noopener noreferrer"}},[s._v("sequelize 升级记录"),t("OutboundLink")],1)]),s._v(" "),t("h3",{attrs:{id:"json-to-jsonl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#json-to-jsonl"}},[s._v("#")]),s._v(" json to jsonl")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" demo.json "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" jq "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.[]'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shanyue"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"age"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"friend"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shuifeng"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shuifeng"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"age"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"friend"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shanyue"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h3",{attrs:{id:"jsonl-to-json"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jsonl-to-json"}},[s._v("#")]),s._v(" jsonl to json")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -s: 代表把 jsonl 组成数组处理")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" demo.jsonl "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" jq "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shanyue"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"age"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"friend"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shuifeng"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shuifeng"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"age"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"friend"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shanyue"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("h3",{attrs:{id:"get"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get"}},[s._v("#")]),s._v(" . (_.get)")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" demo.jsonl "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" jq "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.name'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shanyue"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shuifeng"')]),s._v("\n")])])]),t("h3",{attrs:{id:"pick"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pick"}},[s._v("#")]),s._v(" {} (_.pick)")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" demo.jsonl"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" jq "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{name, friendname: .friend.name}'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shanyue"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"friendname"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shuifeng"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shuifeng"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"friendname"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shanyue"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h3",{attrs:{id:"select-filter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#select-filter"}},[s._v("#")]),s._v(" select (_.filter)")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" demo.jsonl"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" jq "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'select(.age > 24) | {name}'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shuifeng"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h3",{attrs:{id:"map-values-map"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#map-values-map"}},[s._v("#")]),s._v(" map_values (_.map)")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" demo.jsonl"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" jq "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{age} | map_values(.+10)'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"age"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("34")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"age"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("35")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h3",{attrs:{id:"sort-by-sortby"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sort-by-sortby"}},[s._v("#")]),s._v(" sort_by (_.sortBy)")]),s._v(" "),t("p",[t("code",[s._v("sort_by")]),s._v(" 需要先把 "),t("code",[s._v("jsonl")]),s._v(" 转化为 "),t("code",[s._v("json")]),s._v(" 才能进行")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 按照 age 降序排列")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -s: jsonl to json")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -.age: 降序")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# .[]: json to jsonl")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# {}: pick")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" demo.jsonl "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" jq "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'. | sort_by(-.age) | .[] | {name, age}'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shuifeng"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"age"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shanyue"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"age"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 按照 age 升序排列")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" demo.jsonl "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" jq "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'. | sort_by(.age) | .[] | {name, age}'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shanyue"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"age"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shuifeng"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"age"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);