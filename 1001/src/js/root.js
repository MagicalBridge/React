import React from 'react';
import Index from './index';
import ComponentList from '../../src/componens/list'
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';


export default class Root extends React.Component {
  render() {
    return (
        <Router history={hashHistory}>
          <Route component={Index} path="/"></Route>
          <Route component={ComponentList} path="ComponentList"></Route>
        </Router>
    );
  }
}


//替换之前的index 成为入口
ReactDOM.render(<Root />, document.getElementById('example'))
