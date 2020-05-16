import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Navlink
} from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

function HomeHeader() {
  return (
    <>
      <div>
        <Link to="/logowanie">ZALOGUJ</Link>
        <Link to="/rejestracja">ZAŁÓŻ KONTO</Link>
      </div>
      <div>
        <ScrollLink to="HomeHeader">Start </ScrollLink>
        <ScrollLink to="HomeSimpleSteps">O co chodzi? </ScrollLink>
        <ScrollLink to="HomeAbout">O nas </ScrollLink>
        <ScrollLink to="HomeWhoWeHelp">Fundacje i organizacje </ScrollLink>
        <ScrollLink to="HomeContactUs">Kontakt </ScrollLink>
      </div>
      <div>
        <Link to="/logowanie">ODDAJ RZECZY</Link>
        <Link to="/logowanie">ZORGANIZUJ ZBIÓRKĘ</Link>
      </div>
    </>
  );
}

export default HomeHeader;
