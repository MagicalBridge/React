# React
this React的学习笔记

1.使用 npm init 初始化文件目录 配置相关初始化环境 生成 package.json 文件
- 2.在package.json 文件中 安装依赖
```
"babel-preset-es2015": "^6.24.1",
"babel-preset-react": "^6.24.1",
"babelify": "^7.3.0",
"react": "^16.0.0",
"react-dom": "^16.0.0",
"webpack": "^3.6.0",
"webpack-dev-server": "^2.9.1",
"babel-loader": "^7.1.2"
```

   这里踩了一个坑 没有安装babel-loader  编译报错
- 3.webpack.config.js 里面配置编译入口文件出口文件
- 4.webpack  --watch 可以自动编译  可以成功的运行

但是还是不够智能 因为不能自动的刷新

- 5.使用webpack-dev-server 启动server 服务

查看效果 报错说webpack-dev-server 不是内部命令或者可执行的
程序 是因为只有这个文件目录安装了webpack但是
没有全局安装，这里需要注意下;

- 6.我们觉得还是不是很好地址栏的名字不是很好

我们想要的更加简洁一点  这个该怎么办呢
使用 webpack-dev-server --contentbase src --inline --hot
执行报错  新版的webpack 取消了 --contentbase src 参数
暂时执行报错 没所谓 继续下去

- 7.已经完成了第一个react 程序的书写

加载模块全部使用 import 
组件一定要使用 export default 才能引用
并且组件必须是单标签

- 8.初次接触生命 现在正在接触两个钩子函数 componentWillMount componentMount

如果在index 和 body 这两个文件夹中全部使用 这两个钩子函数 
执行的顺序如下：

1.index-componentWillMount 
2.bodyIndex.js:6 body-componentWillMount
3.bodyIndex.js:9 body-componentDidMount
4.index.js:15 index-componentDidMount


- 9 组件的 state 属性

组建的额state 是关乎自己的状态的一些处理，当你的state进行改变的时候
那么虚拟dom 就会做出相应的改变，从而 dom就会发生改变 这是react里面
一个比较自然而然的事情。

- 10 state 初始化 

和所有的面向对象的语言一样，将state的初始化放在了 constrator 里面 在这里面进行初始化赋值。

this.setState({username:"kerry}) // 修改状态数据
state 的作用域只属于当前的这个类 不污染其他的模块


- 11 props 属性

如果我们想对某一个组件做更多的定制化的内容，免不了传递属性
假设我们想在index这个组件中传递给 body 这个组件一些信息
主要的方式就是 在标签中绑定相应的状态 然后再 body 这个组件中接收一下就好了
外来属性 不依赖constructor函数

- 12 如何绑定一个事件

使用 onClick={this.changeinfo.bind(this)} 这样的语法将相应的数据事件
绑定到相应的组件上面。


- 13 如何实现子组件的数据传递给父组件

在react中 只能通过事件的形式 在子组件中 接收一个父组件传递过来的事件
这个事件 接收到了之后 父组件相当于监听了这个事件的变化.这样就能实现相应的
子组件传递给父组件的

- 14 组件复用的场景

我们在实际开发中需要对一些参数做验证，这样的验证规则就保证
组件能够正确的渲染，如果父组件传递的数据不正确  我就警告或者报警

- 15  刚才踩了一个坑

我学习的内容是老师给的版本 但是我使用的是react比较新的版本  16.0.0
在这个版本中 对于组件的 propType 属性已经单独封装了一个包
不再是挂载在 react 上面的属性了。

- 16 新的问题  爷爷组件如何给孙子组件传递数据

如果爷爷组件给父组件传递的数据很多 然后又想将好多属性全部
传递给孙子组件 这时候 我们应该怎么操作才好了
这里老师讲了一个技巧就是  {...this.props} 这样的扩展运算符进行操作。

- 17 refs 组件中关于原生的一些操作
  
this.refs.botton.style.color = 'blue'
在相应的dom里面 使用的是 ref

- 18 独立组件间共享 mixins

有一些共同的函数需要每一个组

- 19  内联样式 和 css抽取样式详见 0901

- 20  如何使用js创造相关的 样式切换

- 21 css 模块化使用 0903 

- 22 jsx和转化为 css https://staxmanade.com/CssToReact/

- 23 使用antd 这个UI库进行开发。

- 24 学习 react-router 的使用  深刻的体会出一件事情 越是想省事情越是容易出问题  真是浪费时间

- 25 遇到一个小的坑

启动的时候 输入命令 
webpack-dev-server --inline -hot 我自己 多加了一个 src 就会出现问题

- 26 使用响应式开发组件进行适配工作的
 sudo npm i react-responsive --save
 这个是使用的是现成的UI框架 如果我们自己学习
 写代码的时候 可以参考一下。

 

 

