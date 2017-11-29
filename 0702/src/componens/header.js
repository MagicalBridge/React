import React from 'react' // 引入依赖
import ReactDOM from 'react-dom' // 引入依赖
// 扩展一个组件
export default class ComponentHeader extends React.Component{
  render(){ // render 函数
    return ( // 返回的jsx语法
      <header>
        <h1>这是头部</h1>
      </header>
    )
  }
}