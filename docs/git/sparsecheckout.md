---
title: 检出仓库中的特定目录或文件
---

要使用 `sparsecheckout` 功能，您需要按照以下步骤进行操作：

* 1. 首先，确保您正在使用 Git 版本 1.7.0 或更高版本。
* 2. 通过运行命令 `git clone` 克隆远程仓库到本地，或者通过运行命令 `git init` 在本地创建一个新的 Git 仓库。
* 3. 进入仓库所在的目录。
* 4. 运行命令 `git config core.sparsecheckout true` 来启用稀疏检出模式。
* 5. 打开 `.git/info/sparse-checkout` 文件（如果文件不存在，则新建该文件）。
* 6. 在该文件中的每一行，输入希望检出的目录或文件的相对路径。例如，如果您希望检出仓库中的 `docs` 目录，则可以输入 `docs`。
* 7. 运行命令 `git pull origin master` 或 `git checkout ` 从远程仓库或指定分支获取稀疏检出的内容。