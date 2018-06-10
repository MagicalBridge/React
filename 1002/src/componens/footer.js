import React from 'react' // 引入依赖
import ReactDOM from 'react-dom' // 引入reactdom依赖
// var footercss =  require("../../src/css/footer.css");
// 扩展一个组件
export default class ComponentFooter extends React.Component{
  render(){ // render 函数
    var footercss = {
        "minfooter": {
          "background": "#333333",
          "color": "#ffffff",
          "paddingTop": "3px",
          "paddingBottom": "3px"
        },
        "minfooter_h1": {
          "fontSize": "12px"
        }  
    };
    return ( // 返回的jsx语法
      <header style={footercss.minfooter}>
        <h1 style={footercss.minfooter_h1}>这是底部</h1>
      </header>
    )
  }
}