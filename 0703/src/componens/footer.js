import React from 'react' // 引入依赖
import ReactDOM from 'react-dom' // 引入reactdom依赖
// 扩展一个组件
export default class ComponentFooter extends React.Component{
  render(){ // render 函数
    return ( // 返回的jsx语法
      <header>
        <h1>这是底部，放置一些版权的信息</h1>
      </header>
    )
  }
}