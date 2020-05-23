import React, {useState, useEffect} from "react";
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

  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({
    email: "",
    password: ""
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
      err.email = "Email jest wymagany";
    } else if (!re.test(form.email)) {
      err.email = "Podany email jest nieprawidłowy!";
    }

    if (form.password.length < 6) {
      err.password = "Hasło musi posiadać przynajmniej 6 znaków!";
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
}

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
              <input type="email" name="email" id="name" onChange={updateForm}/>
              {errors.email}
            </label>
            <label>
              Hasło
              <input type="password" name="password" id="password" onChange={updateForm} />
              {errors.password}
            </label>
          </div>
          <div className="Login__btns">
            <Link to="/rejestracja" className="btn">Załóż konto</Link>
            <input className="btn" type="button" value="Zaloguj się" onClick={handleSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
}


export default Login;
