import React from 'react' // 引入依赖
import ReactDOM from 'react-dom' // 引入reactdom依赖
// 扩展一个组件
export default class BodyIndex extends React.Component{
  render(){ // render 函数
    let username = "louis";
    let boolean = false; // 创建变量
    return ( // 返回的jsx语法
      <div>
        <h2>这是中间部分的内容信息</h2>
        {/*这里是学习jsx的语法使用*/}
        <p>{username===""?"用户还没有登录":"用户名:"+username}</p> 
        <p><input type="text" value={username} /></p>
      </div>
    )
  }
}