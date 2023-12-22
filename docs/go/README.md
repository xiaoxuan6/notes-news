# Go

## `go get -d -v ./`

在执行该命令时，Go工具会根据代码文件中 `import` 语句引用的包，自动下载并安装这些包到本地的 `GOPATH` 路径下的 `src` 目录中。

"-d" 参数表示只下载不安装，"-v" 参数表示打印详细输出信息。

./" 表示当前目录，意味着我们正在下载和安装当前项目所依赖的包。

[Demo](https://github.com/OwO-Network/DeepLX/blob/main/Dockerfile#L5-L8)