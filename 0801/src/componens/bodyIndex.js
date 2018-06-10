import React from 'react' // 引入依赖
import ReactDOM from 'react-dom' // 引入reactdom依赖
// 扩展一个组件
export default class BodyIndex extends React.Component {
  constructor() {
    super(); // 调用基类的所有的初始化方法
    this.state = { username: "louis" } // 初始化赋值
  }
  render() { // render 函数
    setTimeout(() => {
      this.setState({username:"kerry"})
    }, 4000)

    return ( // 返回的jsx语法
      <div>
        <h2>这是中间部分的内容信息</h2>
        <p>{this.state.username}</p>
      </div>
    )
  }
}