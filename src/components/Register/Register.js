import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Navigation from "../Home/Navigation";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Navlink
} from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    passwordRep: ""
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    passwordRep: ""
  });

  const updateForm = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    setErrors(prevState => ({
      ...prevState,
      [name]: ""
    }));
  };

  const validate = () => {
    const err = {};
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!form.email) {
      err.email = "Email jest wymagany!";
    } else if (!re.test(form.email)) {
      err.email = "Podany email jest nieprawidłowy!";
    }

    if (form.password.length < 6) {
      err.password = "Hasło musi posiadać przynajmniej 6 znaków!";
    }

    if (form.passwordRep.length < 6) {
      err.passwordRep = "Hasło musi posiadać przynajmniej 6 znaków!";
    } else if (form.passwordRep != form.password) {
      err.passwordRep = "Podane hasła nie pasują do siebie!";
    }

    if (Object.values(err).find(e => e.length)) {
      setErrors(err);
      return false;
    }
    return true;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      console.log("form sumbitted", form);
    }
  };

  return (
    <div className="Register">
      <Navigation />
      <div className="Register__main">
        <span className="Register__logIn">Zarejestruj się</span>
        <img src={require("./../../assets/Decoration.svg")} />

        <form className="Register__form">
          <div className="Register__data">
            <label>
              Email
              <input
                type="email"
                name="email"
                id="email"
                onChange={updateForm}
              />
              {errors.email}
            </label>
            <label>
              Hasło
              <input
                type="password"
                name="password"
                id="password"
                onChange={updateForm}
              />
              {errors.password}
            </label>
            <label>
              Powtórz hasło
              <input
                type="password"
                name="passwordRep"
                id="passwordRep"
                onChange={updateForm}
              />
              {errors.passwordRep}
            </label>
          </div>
          <div className="Register__btns">
            <Link to="/logowanie" className="btn">
              Zaloguj się
            </Link>
            <input
              className="btn"
              type="button"
              value="Załóż konto"
              onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
