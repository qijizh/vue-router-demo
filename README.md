## Vue-router路由模式介绍

### history模式
history是HTML5提供的新特性，通过pushState()和replaceState()让开发者可以直接更改前端路由，但并不重新发起请求，不重新加载界面。但是用户刷新时请求的则是当前url，若后端没有相应处理，则会造成404。  
Vue2中由`mode:history`指定  
Vue3中由`history:createWebHistory()`指定  

### hash模式
hash是指url最后'#'以及后面的字符组成的部分，浏览器的location对象记录了url的各种信息，其中，location.hash记录hash部分（可读写）。其本身是用来作页面定位的，可以指定元素id，从而让浏览器跳转到该元素所在位置。但hash在进行http请求时并不会被包含，因此改变hash不会重新加载页面。hash值的变化不会导致浏览器向服务器发出请求，而hash改变会触发hashchange事件(只改变#后面的url片段)；hash发生变化url都会被浏览器记录下来，从而可以使用浏览器的前进和后退。  
Vue2中由`mode:hash`指定  
Vue3中由`history:createWebHashHistory()`指定  
原理：通过改写location.hash实现路由切换，再通过`window.addEventListener('hashChage',e=>{})`监听路由切换，让指定组件展示在指定容器上  
特点：路由中带#，兼容性好，url改变时不会重新加载

### Abstract模式

hash与history都是借助浏览器提供的特性，而Abstract模式就是自己在内存中管理和维护路由信息，用于非浏览器环境中。  
Vue2中由`mode:abstact`指定  
Vue3中由`history:createMemoryHistory()`指定  
## Vue-router组件
### router-link
类似于a标签。显示指定路由对应的组件。  
### router-view
显示与url匹配的路由对应的组件。  

## 使用

1. 安装
```
pnpm i vue-router@4
```

2. 创建路由文件

src/router

3. main.ts挂载
