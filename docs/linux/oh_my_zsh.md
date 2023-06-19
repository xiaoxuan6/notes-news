---
title: Oh My Zsh
---

# Zsh 是什么

Zsh 是一款强大的虚拟终端，既是一个系统的虚拟终端，也可以作为一个脚本语言的交互解析器。

### 打开终端，在终端上输入:

```bash 
zsh --version
```

如果没有安装 `zsh`, 通过如下命令安装

```bash
apt install zsh
```

## 安装 Oh My Zsh 方法

```bash
# via wget
wget https://gitee.com/mirrors/oh-my-zsh/raw/master/tools/install.sh && chmod 777 install.sh && ./install.sh

然后执行 install.sh 如果发现很慢，可以修改为gitee：
vim install.sh

REPO=${REPO:-ohmyzsh/ohmyzsh}
REMOTE=${REMOTE:-https://github.com/${REPO}.git}
两行改为：
REPO=${REPO:-mirrors/oh-my-zsh}
REMOTE=${REMOTE:-https://gitee.com/${REPO}.git}

修改之后重新执行 install.sh
```

## 安装插件

安装过程中如果安装失败，使用 `https://ghproxy.com/` 加速 `github` 链接地址

### 语法高亮插件 zsh-syntax-highlighting

```bash
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git $ZSH_CUSTOM/plugins/zsh-syntax-highlighting
```

### 自动补全插件 zsh-autosuggestions

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions
```

安装完后启用插件 

```bash
# 编辑~/.zshrc   
vim ~/.zshrc    
# 在plugins后括号里添加安装的插件名字
plugins=(git zsh-autosuggestions zsh-syntax-highlighting)
# 最后刷新
source ~/.zshrc
```
## 设置主题

### 设置固定主题

安装完毕后，我们就可以使用了，先来简单配置一下，`Oh My Zsh` 提供了很多主题风格，我们可以根据自己的喜好，设置主题风格
```bazaar
vim ~/.zshrc

# robbyrussell 是默认的主题
ZSH_THEME="robbyrussell"

# ZSH_THEME="样式名称"
ex:
  ZSH_THEME="ys" 
```
保存这个文件文件，重新打开终端。刷新 `zshcr`
```bazaar
source ~/.zshrc 
```

### 设置随机主题

步骤如上，仅需设置 `ZSH_THEME` 为 `random` 即可。
```bazaar
ZSH_THEME="random"
```

## 查看主题名称

`Oh My Zsh` 默认自带了一些默认主题，存放在 `~/.oh-my-zsh/themes` 目录中。我们可以查看这些主题
终端输入：
```bazaar
cd ~/.oh-my-zsh/themes && ls
```

## 更多主题样式

[Themes](https://link.zhihu.com/?target=https%3A//github.com/robbyrussell/oh-my-zsh/wiki/Themes)

## 卸载 Oh My Zsh 

终端输入：
```bazaar
uninstall_oh_my_zsh
```

终端提示信息：
```bazaar
Removing ~/.oh-my-zsh
Looking for original zsh config...
Found ~/.zshrc.pre-oh-my-zsh -- Restoring to ~/.zshrc
Found ~/.zshrc -- Renaming to ~/.zshrc.omz-uninstalled-20170820200007
Your original zsh config was restored. Please restart your session.
Thanks for trying out Oh My Zsh. It's been uninstalled.
```

## Tips

Oh My Zsh 的自动更新提示误触关掉了解决办法
打开终端输入：
```bazaar
upgrade_oh_my_zsh
```

## 参考链接

> https://www.cnblogs.com/misfit/p/15659565.html
> 
> https://zhuanlan.zhihu.com/p/35283688