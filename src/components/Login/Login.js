import React from "react";
import ReactDOM from "react-dom";
import Navigation from '../Home/Navigation';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Navlink
} from "react-router-dom";


function Login() {
  return (
    <div className="Login">
      <Navigation/>
      <div className="Login__main">
        <span className="Login__logIn">Zaloguj się</span>
        <img src={require("./../../assets/Decoration.svg")} />

        <form className="Login__form">
          <div className="Login__data">
            <label>
              Email
              <input type="email" />
            </label>
            <label>
              Hasło
              <input type="password" />
            </label>
          </div>
          <div className="Login__btns">
            <Link to="/rejestracja" className="btn">Załóż konto</Link>
            <input className="btn" type="button" value="Zaloguj się" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
