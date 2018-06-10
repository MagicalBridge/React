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


