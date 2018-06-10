import React from 'react' // 引入依赖
import ReactDOM from 'react-dom' // 引入reactdom依赖
var footercss =  require("../../src/css/footer.css");
// 扩展一个组件
export default class ComponentFooter extends React.Component{
  render(){ // render 函数
    return ( // 返回的jsx语法
      <header className={footercss.minfooter}>
        <h1 className={footercss.minfooter}>这是底部</h1>
      </header>
    )
  }
}