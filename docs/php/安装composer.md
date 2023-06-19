---
title: composer 安装和配置
---

## 全局安装

### linux

```bash
curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer11
```

> 参考地址：https://docs.phpcomposer.com/00-intro.html#Globally

### win

[手动安装](https://docs.phpcomposer.com/00-intro.html#Using-the-Installer)

## 设置镜像

```bash
composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/
```

查看镜像

```bash
composer config -g --list
```

## QA

### 提示：Continue as root/super user [yes]?

```bash
export COMPOSER_ALLOW_SUPERUSER=1;
```