---
title: git 提交 commit 使用 gpg-agent 每天只需要输入一次密码
---

## 1、创建或编辑配置文件

在你的 `home` 目录下，找到或创建一个名为 `.gnupg` 的文件夹。在该文件夹中，找到或创建一个 `gpg.conf` 文件。你可以使用文本编辑器打开这个文件。

## 2、添加以下行到 `gpg.conf` 文件

```
use-agent
pinentry-mode loopback
```

这会告诉 `GPG` 使用代理，并将 `pinentry-mode` 设置为 `loopback`，允许在本地循环回使用 `Pin Entry`。

## 3、创建或编辑 `gpg-agent.conf` 配置文件

在 `.gnupg` 文件夹中，编辑或创建一个名为 `gpg-agent.conf` 的文件。你可以使用文本编辑器打开这个文件。

```
default-cache-ttl 3600
max-cache-ttl 3600
```

这些行设置了 `GPG` 代理的缓存超时时间。这里的时间是以秒为单位，可以根据需要进行调整。

## 4、重启 `gpg-agent`

```
gpg-agent --daemon
```
