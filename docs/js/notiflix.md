# 消息提示框 通知框对话框（Notiflix）

::: tip
github 地址：[Notiflix](https://github.com/notiflix/Notiflix#b-add-to-an-html-page-global)

文档：[notify](https://notiflix.github.io/notify)

下载地址：[download](https://notiflix.github.io/download)
:::

## 引用

1、 head引入css文件

```javascript
<link rel="stylesheet" href="css/notiflix-1.3.0.min.css"> 
```

2、body引入js文件

```javascript
<script src="assets/js/notiflix-1.3.0.min.js"></script>
```

## 使用

```javascript
Notiflix.Notify.success('Sol lucet omnibus');

Notiflix.Notify.failure('Qui timide rogat docet negare');

Notiflix.Notify.warning('Memento te hominem esse');

Notiflix.Notify.info('Cogito ergo sum');
```