import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from '../Home/Navigation';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Navlink
} from "react-router-dom";

function Register() {
  return (
    <div className="Register">
      <Navigation/>
        <div className="Register__main">
          <span className="Register__logIn">Zarejestruj się</span>
          <img src={require("./../../assets/Decoration.svg")} />

          <form className="Register__form">
            <div className="Register__data">
              <label>
                Email
                <input type="email" />
              </label>
              <label>
                Hasło
                <input type="password" />
              </label>
              <label>
                Powtórz hasło
                <input type="password" />
              </label>
            </div>
            <div className="Register__btns">
              <Link to="/logowanie" className="btn">Zaloguj się</Link>
              <input className="btn" type="button" value="Załóż konto" />
            </div>
          </form>
        </div>
    </div>
  );
}

export default Register;
