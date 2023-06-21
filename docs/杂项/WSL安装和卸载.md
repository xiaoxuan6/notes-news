---
title: WSL 安装和卸载
---

## 启动 wsl

```bash
# 启用 wsl
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
# 启用虚拟机
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
# 设置 wsl 默认版本
wsl --set-default-version 2
```

设置：在控制面板中的程序和功能的左侧 `启动或关闭 windows 功能` 中启动 `适用于 Linux 的 windows 子系统`

## 安装 Ubuntu

1、从 Microsoft Store 获取 Ubuntu

2、直接从 cmd 命令中安装

```bash
wsl --intall
```

#### 启动

在 cmd 中输入 `bash` 进入，或者通过 ubuntu 进入面板

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f0ca2c1c95af41cfb4cb15f0f81b1500~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

输入新用户名/密码

> 注意：使用 docker 会报错 `Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get "http://%2Fvar%2Frun%2Fdocker.sock/v1.24/containers/json?all=1": dial unix /var/run/docker.sock: connect: permission denied` 没有权限
> 
> 解决：设置 root 用户 `sudo passwd root`, 然后切换到 root `su root`

## 卸载 Ubuntu

#### 查看安装的系统

```bash
wsl --list
```

#### 卸载对应的系统

```bash
wsl --unregister Ubuntu
```

#### 卸载验证

```bash
wsl --list
```

> 相关：[安装 oh my zsh](/linux/oh_my_zsh.md)
> 相关链接：[Win+Linux单系统解决方案——WSL（入门篇）](https://www.jianshu.com/p/6b02948b3d37)