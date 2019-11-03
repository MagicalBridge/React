### 本次学习使用的是react-router5.0的版本 （基本）
  + 1、 <Link/> 这个组件一定要放在 <Router/> 这个组件包裹中使用 否则会报错
  + 2、 BrowserRouter as Router 这种别名的写法, 就是将 BrowserRouter  名称修改成了Router 因此下面使用的时候用的是 <Router/>
  + 3 我们一般项目开发中习惯使用 component={xxx} 这种写法和下面中写法是等价的
  ```js
  // 下面两种写法等价
  <Route exact path="/">
    <Home></Home>
  </Route>

  <Route exact path="/" component={Home}/>
  ```
  + 4、使用 BrowserRouter 这种路由的方式 url的样子是这样的
  ```js
    http://192.168.31.146:3000/ about
  ```
  + 5、使用 HashRouter 这种路由方式 url的样子是这样的
  ```js
    http://192.168.31.146:3000/ #/about
    http://192.168.31.146:3000/ #/dashboard
    http://192.168.31.146:3000/ #/
  ```