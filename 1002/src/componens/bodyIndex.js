import React from 'react' // 引入依赖
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import Child from '../componens/child';
import ReactMixin from 'react-mixin';
import MixinLog from './mixins';

import {Input} from 'antd';
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
    // 第一种方式；
    // let mybotton = document.getElementById('mybotton');
    // ReactDom.findDOMNode(mybotton).style.color = 'red';

    // 第二种方式 
    console.log(this.refs.button);
    this.refs.button.style.color="blue";

    MixinLog.log();
  }
  render() { // render 函数
    return ( // 返回的jsx语法
      <div>
        <h2>这是中间部分的内容信息</h2>
        <p>父组件传递进来的属性：info:{this.props.info} name: {this.props.name}</p>
        <p>age:{this.state.age}</p>
        <Input placeholder="Basic usage" />
        <input  id="mybotton" ref="button" type="button" value="提交" onClick={this.changeUserInfo.bind(this,88)} />
        <Child {...this.props} handleChildvalueChange = {this.handleChildvalueChange.bind(this)} />
      </div>
    )
  }
}

// 这里是个坑 在15.5 往后的版本中  PropTypes 单独需要引入一个包
BodyIndex.propTypes = {
  info:PropTypes.string
};

// 固定的语法实现
ReactMixin(BodyIndex.prototype,MixinLog);