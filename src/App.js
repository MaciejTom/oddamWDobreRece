import React from "react";
import logo from "./logo.svg";
import {} from "react-router";
import Home from "./components/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import GiveAway from "./components/GiveAway/GiveAway";
import { AuthProvider } from "./components/Auth/Auth";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Navlink
} from "react-router-dom";
import PrivateRoute from "./components/Auth/PrivateRoute";
import Thx from "./components/Thx/Thx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AuthProvider>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/logowanie" component={Login} />
              <Route path="/rejestracja" component={Register} />
              <Route path="/wylogowano" component={Logout} />
              <Route path="/oddaj-rzeczy" component={GiveAway} />
              <Route path="/thx" component={Thx} />
            </Switch>
          </Router>
        </AuthProvider>
      </header>
    </div>
  );
}

export default App;
