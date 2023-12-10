(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{320:function(t,e,a){"use strict";a.r(e);var s=a(7),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[e("a",{attrs:{href:"https://docs.github.com/zh/authentication/managing-commit-signature-verification/generating-a-new-gpg-key",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网文档：生成新 GPG 密钥"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"_1、为自己生成一对-gpg-密钥"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、为自己生成一对-gpg-密钥"}},[t._v("#")]),t._v(" 1、为自己生成一对 GPG 密钥")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("gpg --full-generate-key\n")])])]),e("blockquote",[e("p",[t._v("在密钥种类处：选择默认 RSA and DSA 即可；")]),t._v(" "),e("p",[t._v("在密钥长度选项处：按照 GitHub 的要求选择 4096 bits；")]),t._v(" "),e("p",[t._v("在密钥过期时间处：按照自己的需要选择，默认为永不过期；")]),t._v(" "),e("p",[t._v("在我们的用户 ID 和 GPG key 签名邮箱处：填写我们的常用用户名，并填入 GitHub 上面认证过的邮箱；")]),t._v(" "),e("p",[t._v("最后，为密钥设置一个安全的密码，并一定记住这一密码。")])]),t._v(" "),e("p",[t._v("这样，我们就生成了我们的第一对 GPG 密钥！")]),t._v(" "),e("h2",{attrs:{id:"_2、查看密钥"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、查看密钥"}},[t._v("#")]),t._v(" 2、查看密钥")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("gpg --list-secret-keys --keyid-format LONG\n\n/home/spencer/.gnupg/pubring.kbx\n--------------------------------\nsec   rsa4096/24CD550268849CA0 2020-08-29 [SC]\n      9433E1B6807DE7C15E20DC3B24CD550268849CA0\nuid                 [ultimate] Spencer Woo (My GPG key) <my@email.com>\nssb   rsa4096/EB754D2B2409E9FE 2020-08-29 [E]\n")])])]),e("p",[t._v("其中，"),e("code",[t._v("sec")]),t._v(" 一行的 "),e("code",[t._v("rsa4096/24CD550268849CA0")]),t._v(" 就是我们的 "),e("code",[t._v("GPG")]),t._v(" 私钥，其中的 "),e("code",[t._v("24CD550268849CA0")]),t._v(" 即为我们的 "),e("code",[t._v("GPG")]),t._v(" 私钥 "),e("code",[t._v("ID")]),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"_3、告诉-git-自己的-gpg-密钥-id"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、告诉-git-自己的-gpg-密钥-id"}},[t._v("#")]),t._v(" 3、告诉 Git 自己的 GPG 密钥 ID")]),t._v(" "),e("p",[t._v("生成了 "),e("code",[t._v("GPG")]),t._v(" 密钥，并拿到了我们的 "),e("code",[t._v("GPG")]),t._v(" 私钥 "),e("code",[t._v("ID")]),t._v(" 后，我们即可让 "),e("code",[t._v("Git")]),t._v(" 用这一 "),e("code",[t._v("GPG key")]),t._v(" 为我们的 "),e("code",[t._v("commit")]),t._v(" 进行签名：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git config --global user.signingkey 24CD550268849CA0\ngit config --global commit.gpgsign true\n")])])]),e("blockquote",[e("p",[t._v("这里仅验证 "),e("code",[t._v("commit")]),t._v("，不验证 "),e("code",[t._v("tag")]),t._v("，所以不需要 "),e("code",[t._v("git config --global tag.gpgsign true")]),t._v("。")])]),t._v(" "),e("h2",{attrs:{id:"_4、告诉-github-自己的-gpg-公钥"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、告诉-github-自己的-gpg-公钥"}},[t._v("#")]),t._v(" 4、告诉 GitHub 自己的 GPG 公钥")]),t._v(" "),e("p",[t._v("最后，我们需要告诉 GitHub 我们使用的 GPG 公钥。对于刚刚我们拿到的私钥 ID："),e("code",[t._v("24CD550268849CA0")]),t._v("，我们使用下面的命令即可导出我们的 GPG 公钥：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("gpg --armor --export 24CD550268849CA0\n\n")])])]),e("p",[t._v("将输出粘贴进入 GitHub 的 "),e("a",{attrs:{href:"https://github.com/settings/keys",target:"_blank",rel:"noopener noreferrer"}},[t._v("Settings » SSH and GPG keys » New GPG key"),e("OutboundLink")],1),t._v("，并保存。之后，我们就可以开始在 GitHub 上享受 Verified 被钦定的感觉！")]),t._v(" "),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://spencer-blog-legacy.vercel.app/2020/08/wait-this-is-not-my-commit/",target:"_blank",rel:"noopener noreferrer"}},[t._v("震惊！竟然有人在 GitHub 上冒充我的身份！"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"提问"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提问"}},[t._v("#")]),t._v(" 提问？")]),t._v(" "),e("h3",{attrs:{id:"为什么要给-commit-签名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么要给-commit-签名"}},[t._v("#")]),t._v(" 为什么要给 Commit 签名？")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("答：别人可以验证这个commit 真的是你提交的，而不是：\n1、某个盗用了你的Access token的人去提交的。\n2、某个盗用了你GitHub/GitHub enterprise账号的人去提交的。\n3、某个同事改了你的代码，并且 --amend 了你的提交，并且force push了你的分支（强烈不建议这么做，因为可能有生命危险）\n\n总而言之，给 Commit 签名，可以让别人验证所有的这个工作，来自于一个可信可验证的来源。\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);