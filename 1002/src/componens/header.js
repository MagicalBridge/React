import React from 'react' // 引入依赖
import {Link} from 'react-router';
 // 扩展一个组件
export default class ComponentHeader extends React.Component{
  constructor(){
    super();
    this.state = {
      minHeader:false
    }
  }
  switchStyle(){
    this.setState({
      minHeader:!this.state.minHeader
    })
  }

  render(){ // render 函数
    const styleHeader = {
      backgroundColor:"#333333",
      color:"#ffffff",
      "paddingTop":(this.state.minHeader)?"3px":"15px",
      paddingBottom:(this.state.minHeader)?"3px":"15px",
    }
    return ( // 返回的jsx语法
      <header className="smallfontSize" >
        <h1 style={styleHeader}>这是头部</h1>
        <ul>
          <li><Link to={`/list/cashAmt=123`}>列表页面</Link></li>
        </ul>
      </header>
    )
  }
}