# git submodule

## 项目加入 `submodule`

```bash
git submodule add https://github.com/xiaoxuan6/module.git
```

添加成功后，项目中会多处两个文件 `.gitmodules` 和 `module`

## 操作子模块

子模块和正常的项目一样操作 `git`, 在 `module` 目录下

```bash
git add ./
git commit -m "add submodule"
git push
```

> 注意：在子模块下提交之后必须返回项目根目录在提交一次

## 克隆含有子模块的项目

```bash
git clone -b master https://github.com/xiaoxuan6/faker.io.git
```

其中有 `module` 目录, 不过是空的, 你必须运行两个命令:

```bash
git submodule init # 用来初始化本地配置文件;
git submodule update # 则从该项目中抓取所有数据并检出父项目中列出的合适的提交
```

> 如果在 clone project 项目的同时加上 --recursive 参数, 它就会自动初始化并更新仓库中的每一个子模块。