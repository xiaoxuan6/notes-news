---
title: HuggingFace 免费构建并执行 Dockerfile
---

[官网](https://huggingface.co/)

## 步骤 

* 创建一个新空间：Create a new Space
* Space name： test
* License： MIT
* Select the Space SDK： docker （Blank）
* Space hardware： free

编辑 `Dockerfile` 或者使用 `git` 提交文件   

### Dockerfile

这里以 [bookmarks](https://github.com/xiaoxuan6/bookmarks) 测试

```dockerfile
FROM golang:1.20.4-alpine3.18 AS build

WORKDIR /src

COPY --link . .

RUN go env -w GO111MODULE=on && \
    go env -w GOPROXY=https://goproxy.cn,direct && \
    go mod tidy && \
    CGO_ENABLED=0 go build -ldflags="-s -w" -o bookmarks . && \
    [ -e /usr/bin/upx ] && \
    upx bookmarks || echo

FROM alpine

WORKDIR /app

COPY --link --from=build /src/bookmarks /app/bookmarks
COPY --link --from=build /src/.env /app/.env
COPY --link --from=build /src/data /app/data

EXPOSE 8080

RUN apk add --no-cache tzdata
ENV TZ=Asia/Shanghai

ENTRYPOINT ["./bookmarks"]
```

### 使用 `git` 提交文件

* `clone` 仓库文件: `git clone https://huggingface.co/spaces/{username}/{repo_name}`
* 删除默认的 `origin`: `git remote remove origin`
* 添加 `origin`: `git remote add origin https://<user_name>:<token>@huggingface.co/<repo_path>`
* 关联 `origin`: `git push --set-upstream origin main`  
* 添加并提交文件：`git add . && git commit -m"add" && git push`

> [切换到个人访问令牌](https://huggingface.co/blog/password-git-deprecation#switching-to-personal-access-token)

## 注意事项
本部署方式不能保存配置文件，即重新部署后会失去配置的各项内容，故使用时切勿重新部署。

目前 HuggingFace 的使用还是免费，但是不排除以后会收费，需持续关注服务状态。

## 相关链接

[白嫖一个始皇同款网站监控面板：uptime-kuma](https://linux.do/t/topic/31141)

[自建免费的网站监控服务-在huggingface上部署uptime kuma](https://www.cnblogs.com/luckzack/p/17693667.html)

[Sub-Store Hugging Face 自建教程](https://xream.notion.site/Sub-Store-Hugging-Face-1787ae7c38df482eaeccea4e0f1d3a8d#38da34fed5a944ae93a8cc032f0f6b94)