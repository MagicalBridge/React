import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/about" >About</Link>
          </li>
          <li>
            <Link to="/dashboard" >Dashboard</Link>
          </li>
        </ul>
        <br />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      Home
    </div>
  )
}

function About() {
  return (
    <div>
      About
    </div>
  )
}

function Dashboard() {
  return (
    <div>
      Dashboard
    </div>
  )
}
export default App;
