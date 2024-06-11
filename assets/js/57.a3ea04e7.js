(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{343:function(t,e,a){"use strict";a.r(e);var s=a(8),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[t._v("#")]),t._v(" 步骤")]),t._v(" "),e("ul",[e("li",[t._v("创建一个新空间：Create a new Space")]),t._v(" "),e("li",[t._v("Space name： test")]),t._v(" "),e("li",[t._v("License： MIT")]),t._v(" "),e("li",[t._v("Select the Space SDK： docker （Blank）")]),t._v(" "),e("li",[t._v("Space hardware： free")])]),t._v(" "),e("p",[t._v("编辑 "),e("code",[t._v("Dockerfile")]),t._v(" 或者使用 "),e("code",[t._v("git")]),t._v(" 提交文件")]),t._v(" "),e("h3",{attrs:{id:"dockerfile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[t._v("#")]),t._v(" Dockerfile")]),t._v(" "),e("p",[t._v("这里以 "),e("a",{attrs:{href:"https://github.com/xiaoxuan6/bookmarks",target:"_blank",rel:"noopener noreferrer"}},[t._v("bookmarks"),e("OutboundLink")],1),t._v(" 测试")]),t._v(" "),e("div",{staticClass:"language-dockerfile extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[e("code",[e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" golang:1.20.4-alpine3.18 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" build")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WORKDIR")]),t._v(" /src")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" --link . .")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" go env -w GO111MODULE=on && "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("\\")]),t._v("\n    go env -w GOPROXY=https://goproxy.cn,direct && "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("\\")]),t._v("\n    go mod tidy && "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("\\")]),t._v("\n    CGO_ENABLED=0 go build -ldflags="),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-s -w"')]),t._v(" -o bookmarks . && "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("\\")]),t._v("\n    [ -e /usr/bin/upx ] && "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("\\")]),t._v("\n    upx bookmarks || echo")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" alpine")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WORKDIR")]),t._v(" /app")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" --link --from=build /src/bookmarks /app/bookmarks")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" --link --from=build /src/.env /app/.env")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" --link --from=build /src/data /app/data")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXPOSE")]),t._v(" 8080")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" apk add --no-cache tzdata")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENV")]),t._v(" TZ=Asia/Shanghai")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENTRYPOINT")]),t._v(" ["),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./bookmarks"')]),t._v("]")]),t._v("\n")])])]),e("h3",{attrs:{id:"使用-git-提交文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-git-提交文件"}},[t._v("#")]),t._v(" 使用 "),e("code",[t._v("git")]),t._v(" 提交文件")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("clone")]),t._v(" 仓库文件: "),e("code",[t._v("git clone https://huggingface.co/spaces/{username}/{repo_name}")])]),t._v(" "),e("li",[t._v("删除默认的 "),e("code",[t._v("origin")]),t._v(": "),e("code",[t._v("git remote remove origin")])]),t._v(" "),e("li",[t._v("添加 "),e("code",[t._v("origin")]),t._v(": "),e("code",[t._v("git remote add origin https://<user_name>:<token>@huggingface.co/<repo_path>")])]),t._v(" "),e("li",[t._v("关联 "),e("code",[t._v("origin")]),t._v(": "),e("code",[t._v("git push --set-upstream origin main")])]),t._v(" "),e("li",[t._v("添加并提交文件："),e("code",[t._v('git add . && git commit -m"add" && git push')])])]),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://huggingface.co/blog/password-git-deprecation#switching-to-personal-access-token",target:"_blank",rel:"noopener noreferrer"}},[t._v("切换到个人访问令牌"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),e("p",[t._v("本部署方式不能保存配置文件，即重新部署后会失去配置的各项内容，故使用时切勿重新部署。")]),t._v(" "),e("p",[t._v("目前 HuggingFace 的使用还是免费，但是不排除以后会收费，需持续关注服务状态。")]),t._v(" "),e("h2",{attrs:{id:"相关链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[t._v("#")]),t._v(" 相关链接")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://linux.do/t/topic/31141",target:"_blank",rel:"noopener noreferrer"}},[t._v("白嫖一个始皇同款网站监控面板：uptime-kuma"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.cnblogs.com/luckzack/p/17693667.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("自建免费的网站监控服务-在huggingface上部署uptime kuma"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://xream.notion.site/Sub-Store-Hugging-Face-1787ae7c38df482eaeccea4e0f1d3a8d#38da34fed5a944ae93a8cc032f0f6b94",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sub-Store Hugging Face 自建教程"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);