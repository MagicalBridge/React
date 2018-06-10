import React from 'react' // 引入依赖
import ReactDOM from 'react-dom' // 引入reactdom依赖
// 扩展一个组件
export default class BodyIndex extends React.Component {
  constructor(){
    super();
    this.state = {age:24}
  }

  changeUserInfo(){
    this.setState({age:32});
  }
  render() { // render 函数
    return ( // 返回的jsx语法
      <div>
        <h2>这是中间部分的内容信息</h2>
        <p>{this.props.info}</p>
        <p>age:{this.state.age}</p>
        <input type="button" value="提交" onClick={this.changeUserInfo.bind(this)} />
      </div>
    )
  }
}