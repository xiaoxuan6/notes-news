---
title: git 根据文件夹使用不同的 git 账号
---

> 一般 `.gitconfig` 文件都放在电脑根目录，如果你有多个 git 账号，那么就需要在不同的文件夹下使用不同的 git 账号，这时候就需要使用到 `includeIf` 了。

## 在不同的文件夹下使用不同的 git 账号

1. 在项目文件夹下创建 `.gitconfig` 文件，内容如下：

```
user
    name = Judith
    email = example@example.com
```

2. 在电脑根目录下的 `.gitconfig` 文件中添加如下内容：

```
[includeIf "gitdir:D:/git-test/"] // gitdir: 后面的路径为项目文件夹的绝对路径
    path = D:/git-test/.gitconfig // path: 后面的路径为项目文件夹下的 .gitconfig 文件的绝对路径
```