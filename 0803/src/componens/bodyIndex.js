import React from 'react' // 引入依赖
import Child from '../componens/child';
// 扩展一个组件
export default class BodyIndex extends React.Component {
  constructor(){
    super();
    this.state = {age:24}
  }
  handleChildvalueChange(event){
    this.setState({age:event.target.value});
  }
  changeUserInfo(age){
    this.setState({age:age});
  }
  render() { // render 函数
    return ( // 返回的jsx语法
      <div>
        <h2>这是中间部分的内容信息</h2>
        <p>{this.props.info}</p>
        <p>age:{this.state.age}</p>
        <input type="button" value="提交" onClick={this.changeUserInfo.bind(this,88)} />
        <Child handleChildvalueChange = {this.handleChildvalueChange.bind(this)} />
      </div>
    )
  }
}