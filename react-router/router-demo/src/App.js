import React from 'react';
// import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import {
  HashRouter as Router,
  Link,
  Switch,
  Route,
  useParams
} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h2>Accounts</h2>
        <ul>
          <li>
            <Link to="/netflix">Netflix</Link>
          </li>
          <li>
            <Link to="/zillow-group">Zillow Group</Link>
          </li>
          <li>
            <Link to="/yahoo">Yahoo</Link>
          </li>
          <li>
            <Link to="/modus-create">Modus Create</Link>
          </li>
        </ul>
        <br />
        <Switch>
          <Route path="/:id" children={<Child />} />
        </Switch>
      </div>
    </Router>
  );
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  // 我们可以使用 useParams 这个钩子函数来访问url的动态参数
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}
export default App;
