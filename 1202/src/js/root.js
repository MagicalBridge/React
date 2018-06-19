import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';
import PCIndex from '../componens/pc_index';
import MobileIndex from '../componens/mobile_index';


export default class Root extends React.Component {
  render() {
    return (
        <div>
          <MediaQuery query='(min-device-width:1224px)'>
            <PCIndex></PCIndex>
          </MediaQuery>
          <MediaQuery query='(max-device-width:1224px)'>
            <MobileIndex></MobileIndex>
          </MediaQuery>
        </div>
    );
  }
}
//替换之前的index 成为入口
ReactDOM.render(<Root />, document.getElementById('example'))
