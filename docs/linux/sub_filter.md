---
title: sub_filter 来修改 html 响应内容
---

首先，我们需要确保 Nginx 已经正确编译和安装，并且已启用了 `http_sub_module` 和 `http_ssl_module` 模块。您可以按照以下步骤进行操作：

 ```bash
nginx -V
 ```

如果您看到以下输出，则表示 Nginx 已启用 `http_sub_module` 和 `http_ssl_module` 模块：

 ```bash
nginx version: nginx/1.14.0 (Ubuntu)
built with OpenSSL 1.1.1  11 Sep 2018
TLS SNI support enabled
configure arguments: 
  ... // 其他参数
  --with-http_ssl_module 
  --with-http_sub_module 
 ```

接下来，我们将修改 Nginx 的配置文件，以在 HTML 响应中添加自定义的 `JavaScript` 代码。请按照以下步骤进行操作：

1、打开 Nginx 的配置文件。默认情况下，该文件位于 `/user/local/nginx/conf/nginx.conf`

2、在适当的位置，添加以下配置块：

```shell
server {
    listen 9999;
    location / {
        sub_filter '</body>' '<script>console.log("hello from Judith")</script></body>';
        sub_filter_once off; // 默认为 on，表示只替换第一个匹配的字符串
        root html;
        index index.html;
    }
}
```

这将在所有请求的路径下应用 `sub_filter` 指令，并将 `</body>` 替换为 `<script>console.log("hello from Judith")</script></body>`。

3、保存并关闭 Nginx 的配置文件

4、重新加载 Nginx 的配置文件

```shell
/user/local/nginx/sbin/nginx -t // 配置文件语法正确
sudo /user/local/nginx/sbin/nginx -s reload
```

## 参考链接

[Nginx sub_filter 来修改 html 响应内容](https://juejin.cn/post/7259650149076074556)

[nginx 的 sub_filter 的作用](https://juejin.cn/s/nginx%E7%9A%84sub_filter%E7%9A%84%E4%BD%9C%E7%94%A8)

