# 网络请求库 axios

::: tip
[Axios-js 文档](http://axios-js.com/zh-cn/docs/index.html)

[Axios-http 文档](https://axios-http.com/zh/docs/intro)
:::

## 引用

### 1、使用 jsDelivr CDN:

```javascript
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

### 2、使用 unpkg CDN:

```javascript
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

## 使用

### 执行 GET 请求

::: details
// 为给定 ID 的 user 创建请求
```javascript
axios.get('/user?ID=12345')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
```

// 上面的请求也可以这样做
```javascript
axios.get('/user', {
    params: {
        ID: 12345
    }
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
```
:::

### 执行 POST 请求

::: details
```javascript
axios.post('/user', {
        firstName: 'Fred',
        lastName: 'Flintstone'
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
```
:::