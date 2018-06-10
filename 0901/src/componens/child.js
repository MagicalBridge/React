import React from 'react' // 引入依赖
// 扩展一个组件
export default class Child extends React.Component {
  render() { // render 函数
    return ( // 返回的jsx语法
      <div>
       <p>子页面输入:<input type="text"  onChange={this.props.handleChildvalueChange}/></p>
       <p>{this.props.name} {this.props.info}</p>
      </div>
    )
  }
}