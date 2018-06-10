import React from 'react' // 引入依赖
import ReactDOM from 'react-dom' // 引入reactdom依赖
// 扩展一个组件
export default class BodyIndex extends React.Component{
  render(){ // render 函数
    return ( // 返回的jsx语法
      <div>
        <div>这是中间部分的内容信息</div>
      </div>
    )
  }
}