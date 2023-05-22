---
title: Linux常用命令之xargs
---

## 多行输出

-n 选项多行输出：
```shell
cat test.txt | xargs -n3

a b c
d e f
```

## 自定义一个定界符

-d 选项可以自定义一个定界符：
```shell
echo "nameXnameXnameXname" | xargs -dX

name name name name name
```

结合 -n 选项使用：
```shell
echo "nameXnameXnameXname" | xargs -dX -n2

name name
name name
```

## xargs 结合 find 使用

用 rm 删除太多的文件时候，可能得到一个错误信息：/bin/rm Argument list too long. 用 xargs 去避免这个问题：
```shell
find . -type f -name "*.log" -print0 | xargs -0 rm -f

# xargs -0 将 \0 作为定界符。
```

统计一个源代码目录中所有 php 文件的行数：
```shell
find . -type f -name "*.php" -print0 | xargs -0 wc -l
```

查找所有的 jpg 文件，并且压缩它们：
```shell
find . -type f -name "*.jpg" -print | xargs tar -czvf images.tar.gz
```
