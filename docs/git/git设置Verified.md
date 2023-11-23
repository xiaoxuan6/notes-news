---
title: git 设置 Verified
---

[官网文档：生成新 GPG 密钥](https://docs.github.com/zh/authentication/managing-commit-signature-verification/generating-a-new-gpg-key)

## 1、为自己生成一对 GPG 密钥

```
gpg --full-generate-key
```

> 在密钥种类处：选择默认 RSA and DSA 即可；
> 
>在密钥长度选项处：按照 GitHub 的要求选择 4096 bits；
> 
>在密钥过期时间处：按照自己的需要选择，默认为永不过期；
> 
>在我们的用户 ID 和 GPG key 签名邮箱处：填写我们的常用用户名，并填入 GitHub 上面认证过的邮箱；
> 
>最后，为密钥设置一个安全的密码，并一定记住这一密码。

这样，我们就生成了我们的第一对 GPG 密钥！

## 2、查看密钥

```
gpg --list-secret-keys --keyid-format LONG

/home/spencer/.gnupg/pubring.kbx
--------------------------------
sec   rsa4096/24CD550268849CA0 2020-08-29 [SC]
      9433E1B6807DE7C15E20DC3B24CD550268849CA0
uid                 [ultimate] Spencer Woo (My GPG key) <my@email.com>
ssb   rsa4096/EB754D2B2409E9FE 2020-08-29 [E]
```

其中，`sec` 一行的 `rsa4096/24CD550268849CA0` 就是我们的 `GPG` 私钥，其中的 `24CD550268849CA0` 即为我们的 `GPG` 私钥 `ID`。

## 3、告诉 Git 自己的 GPG 密钥 ID

生成了 `GPG` 密钥，并拿到了我们的 `GPG` 私钥 `ID` 后，我们即可让 `Git` 用这一 `GPG key` 为我们的 `commit` 进行签名：

```
git config --global user.signingkey 24CD550268849CA0
git config --global commit.gpgsign true
```

> 这里仅验证 `commit`，不验证 `tag`，所以不需要 `git config --global tag.gpgsign true`。

## 4、告诉 GitHub 自己的 GPG 公钥

最后，我们需要告诉 GitHub 我们使用的 GPG 公钥。对于刚刚我们拿到的私钥 ID：`24CD550268849CA0`，我们使用下面的命令即可导出我们的 GPG 公钥：

```
gpg --armor --export 24CD550268849CA0

```

将输出粘贴进入 GitHub 的 [Settings » SSH and GPG keys » New GPG key](https://github.com/settings/keys)，并保存。之后，我们就可以开始在 GitHub 上享受 Verified 被钦定的感觉！

## 参考

[震惊！竟然有人在 GitHub 上冒充我的身份！](https://spencer-blog-legacy.vercel.app/2020/08/wait-this-is-not-my-commit/)

## 提问？

### 为什么要给 Commit 签名？

```
答：别人可以验证这个commit 真的是你提交的，而不是：
1、某个盗用了你的Access token的人去提交的。
2、某个盗用了你GitHub/GitHub enterprise账号的人去提交的。
3、某个同事改了你的代码，并且 --amend 了你的提交，并且force push了你的分支（强烈不建议这么做，因为可能有生命危险）

总而言之，给 Commit 签名，可以让别人验证所有的这个工作，来自于一个可信可验证的来源。
```
