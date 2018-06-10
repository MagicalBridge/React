import React from 'react' // 引入依赖
import ReactDOM from 'react-dom' // 引入依赖
import ComponentHeader from '../componens/header' // 引入header组件
import ComponentFooter from '../componens/footer' // 引入header组件
import BodyIndex from '../componens/bodyIndex' // 引入header组件
import 'antd/dist/antd.css';


// 创建 Index 组件 这个组件是扩展来自React.Component的
class Index extends React.Component {
    render() { // render 语法
        return ( // 返回的是一个 jsx 语法
            <div>
                <ComponentHeader />
                <BodyIndex info={"这是使用props传递进来的属性"} name={"louis"}/>
                <ComponentFooter />
            </div>
        )
    }
}

// 绑定的dom的语法 这里Index 相当于一个入口的组件.入口的组件 内部是我们引用的组件
ReactDOM.render(<Index />, document.getElementById('example'))