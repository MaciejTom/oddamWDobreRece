import React from 'react';
import logo from './logo.svg';
import {} from 'react-router'
import Home from './components/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Navlink
} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/logowanie" component={Login}/>
            <Route path="/rejestracja" component={Register}/>

          </Switch>

        </Router>

      </header>
    </div>
  );
}

export default App;
