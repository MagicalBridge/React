import React from 'react' // 引入依赖
import ReactDOM from 'react-dom' // 引入reactdom依赖
// 扩展一个组件
export default class ComponentHeader extends React.Component{
  
  render(){ // render 函数
    const styleHeader = {
      backgroundColor:"#333333",
      color:"#ffffff",
      "padding-top":"15px",
      paddngBottom:"15px"
    }
    return ( // 返回的jsx语法
      <header className="smallfontSize">
        <h1 style={styleHeader}  >这是头部</h1>
      </header>
    )
  }
}