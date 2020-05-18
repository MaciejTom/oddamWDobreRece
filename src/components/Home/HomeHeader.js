import React from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Navlink
} from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function HomeHeader() {
  return (
    <>
      <header className="header container">
        <div className="header__photo">
          <img src={require("./../../assets/HeroImage.jpg")} />
        </div>
        <div className="header__mainDiv">
          <nav>
            <div className="header__links">
              <Link to="/logowanie" className="header__logIn">ZALOGUJ</Link>
              <Link to="/rejestracja" className="header__register">ZAŁÓŻ KONTO</Link>
            </div>
            <div className="header__scrollLinks">
              <ScrollLink to="HomeHeader">Start </ScrollLink>
              <ScrollLink to="HomeSimpleSteps"> O co chodzi? </ScrollLink>
              <ScrollLink to="HomeAbout" >O nas </ScrollLink>
              <ScrollLink to="HomeWhoWeHelp" >Fundacje i organizacje </ScrollLink>
              <ScrollLink to="HomeContactUs" >Kontakt </ScrollLink>
            </div>
          </nav>
          <div className="header__div">
            <p className="header__mainText">
              Zacznij pomagać!
              <br />
              Oddaj niechciane rzeczy w zaufane ręce
            </p>
            <img src={require("./../../assets/Decoration.svg")} />
            <div className="header__btns">
            <Link to="/logowanie" className="btn"><span>ODDAJ</span><span> RZECZY</span></Link>
            <Link to="/logowanie" className="btn"><span>ZORGANIZUJ</span><span>ZBIÓRKĘ</span></Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HomeHeader;
