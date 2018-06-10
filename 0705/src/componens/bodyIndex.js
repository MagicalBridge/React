import React from 'react' // 引入依赖
import ReactDOM from 'react-dom' // 引入reactdom依赖
// 扩展一个组件
export default class BodyIndex extends React.Component {
  componentWillMount() {
    console.log("body-componentWillMount");
  }
  componentDidMount() {
    console.log("body-componentDidMount");
  }

  render() { // render 函数
    return ( // 返回的jsx语法
      <div>
        <h2>这是中间部分的内容信息</h2>
      </div>
    )
  }
}