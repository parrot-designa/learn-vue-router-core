> VueRouter究竟做了什么？

最近遇到一个需求：在 A 页面发起一个请求（这个接口请求比较耗时），然后切换到 B页面时获得之前跳转的页面地址。

然后发现 router 只能获取当前的那个页面地址，也就是 B 页面。

无法获取 A 页面的地址。

```html
<!DOCTYPE html>
<html>
    <head>
        <script src="https://cdn.jsdelivr.net/npm/vue@2.7.16/dist/vue.js"></script> 
    </head>
    <body>
        <div id="root"></div>
        <script> 
            new Vue({
                template:`
                    <div>
                        Hello，Vue2
                    </div>
                `
            }).$mount('#root')
        </script>
    </body>
</html>
```

![alt text](image.png)

如上图所示，界面上成功打印出了```Hello，Vue2```字样。

我们加上Vue-Router试一下路由功能。

```html
<html>
<head>
    <!-- 引用 Vue-Router CDN-->
    <script src="https://unpkg.com/vue-router@3/dist/vue-router.js"></script>
</head>
<body>
    <script>
            Vue.use(VueRouter);
            const routes = [
                { path:'/A', component:{ template:`<div>我是 A页面 </div>` } },
                { path:'/B', component:{ template:`<div>我是 B页面 </div>` } }
            ];
            const router = new VueRouter({  routes });
            new Vue({
                router, 
                template:`
                    <div>
                        Hello，Vue2
                        <button 
                            @click="$router.push($route.fullPath === '/A'?'/B':'/A')"
                        >切换</button>
                        <router-view />
                    </div>
                `
            }).$mount('#root')
        </script>
</body>
</html>
```

![alt text](image-1.png)

通过上述代码：我们可以实现 A 页面到 B页面的切换。

# 一、为什么前端框架需要 “前端路由“ 

众所周知，在传统的多页应用中，每一个页面都是一个独立的 HTML 文件。

点击链接或者导航时，需要重新加载整个页面，包括页面的布局、样式和脚本。

而现在的 Vue、React 等框架天然都是单页应用。

而在单页应用中，初始页面的加载只发生一次。

既然只加载一次，那么后续如何实现输入不同的路径就可以出现不同的内容呢？

大家发现可以监听路由的变化，通过 Javascript 等技术可以实现在用户与应用交互时，只更新页面的部分内容。后来在大家广泛实践运用下，这种监听路由变更页面被统称为“```前端路由```”。

单页应用是前端开发的一个革新。 

前端路由存在以下几点优势：

1. 改变 URL，但是界面无需重新加载。可以不用刷新浏览器就可以改变网页内容，用户体验大大提高。
2. 前端渲染把渲染的任务交给了浏览器，通过客户端来解决页面的构建，这个很大程度上缓解了服务端的压力。而且配合前端路由，无缝的页面切换体验自然是对用户友好的。


# 二、前端路由的基本原理

前面我们说到，所谓前端路由就是通过监听路由的变化来更改页面的部分内容。

那么前端路由是```如何做到更改路由而不触发浏览器的重新加载```？

又是如何做到```监听路由的变化并做出反应```？

## 2.1 hash（哈希）模式和history模式

一般前端路由实现分为两种，hash 和 history，他们都可以做到更改路由但是不会引起页面刷新。

可以说前端路由框架如 ```vue-router```、```react-router``` 就是基于这两个 API进行封装的。

区分 hash 和 history 路由的方式就是看地址栏 URL 上是否带有#，#代表是 hash 模式，没有的话就是 history 模式。
