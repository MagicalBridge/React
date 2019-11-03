import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import './App.css';

// 下面这个组件的 实现的功能是 默认显示的是一级路由 home 和 topics 
// 点击topics 之后 会显示 是哪个tab 起初因为 匹配的和父路由使用的是同样的方式
// 后来 通过点击Topics 组件中的三个tab 路由传递的参数发生了改变,
function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li> <Link to="/">Home</Link> </li>
          <li><Link to="/topics">Topics</Link> </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/topics" component={Topics} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
function Topics() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();

  // 下面打印的 是相同的结果
  console.log(path);
  console.log(url);

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`} component={Topic}/>
      </Switch>
    </div>
  );
}

function Topic() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();
  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}

export default App;
