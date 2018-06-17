import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';


export default class Root extends React.Component {
  render() {
    return (
        <div>init</div>
    );
  }
}
//替换之前的index 成为入口
ReactDOM.render(<Root />, document.getElementById('example'))
