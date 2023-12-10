# NProgress.js 加载进度

::: warning
NProgress 是基于 jquery 的，且版本要 >1.8 。
:::

github 地址：[https://github.com/rstacruz/nprogress](https://github.com/rstacruz/nprogress)

## 引用 `js`、`css`

```javascript
https://unpkg.com/nprogress@0.2.0/nprogress.js
https://unpkg.com/nprogress@0.2.0/nprogress.css
```

## 使用

在请求时添加

```javascript
NProgress.start();
NProgress.done();
```

