import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import 'antd/dist/antd.css';
import PCIndex from '../componens/pc_index';


export default class Root extends React.Component {
  render() {
    return (
        <div>
          <PCIndex></PCIndex>
        </div>
    );
  }
}
//替换之前的index 成为入口
ReactDOM.render(<Root />, document.getElementById('example'))
