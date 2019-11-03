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

### 学习参数占位符的使用 （URL parameters）
  + 1、用法中的一段英文 使用谷歌翻译了一下
  Params are placeholders in the URL that begin with a colon, like the `:id` param defined in the route in this example. A similar convention is used for matching dynamic segments in other popular web frameworks like Rails and Express.

  参数是URL中以冒号开头的占位符，例如在此示例中的路由中定义的`：id`参数。 类似的约定用于匹配其他流行的Web框架（如Rails和Express）中的动态段。

  + 2、 useParams 使用useParams 这个参数
  在这个例子中：`<Switch>` 组件只渲染了一个组件 这个组件 使用 `<Route>` 渲染  接收一个属性 `children` 使用`jsx` 的表达式
  渲染了 `<Child/>` 这个组件 上面 这个就是我们说的动态组件`<Link/>` 的 `to="/xxx"` 后面的xxx 相当于给 path 传递参数
  ```js
  <Switch>
    <Route path="/:id" children={<Child />} />
  </Switch>
  ```

  

