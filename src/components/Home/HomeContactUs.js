import React from "react";
import ReactDOM from "react-dom";

function HomeContactUs() {
  return (
    <>
      <section className="ContactUs" name="HomeContactUs">
        <div className="ContactUs__main">
          <span className="ContactUs__contact">Skontaktuj się z nami</span>
          <img src={require("./../../assets/Decoration.svg")} />
          <div>
            <form className="ContactUs__form">
              <div className="ContactUs__name">
                <label>
                  <span>Wpisz swoje imię</span>
                  <input className="ContactUs_input" type="text" placeholder="Maciej"/>
                </label>
                <label>
                  <span>Wpisz swój email</span>
                  <input className="ContactUs_input" type="email" placeholder="xyz@gmail.com"/>
                </label>
              </div>
              <label>
                <span>Wpisz swoją wiadomość:</span>
                <textarea className="ContactUs_textarea" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
              </label>
              <input className="btn" type="submit" value="Wyślij" />
            </form>
          </div>
        </div>
        <footer className="ContactUs__footer">
          <span>Copyright by Coders Lab</span>
          <div className="ContactUs__images">
            <img src={require("./../../assets/Facebook.png")} />
            <img src={require("./../../assets/Instagram.png")} />
          </div>
        </footer>
      </section>
    </>
  );
}

export default HomeContactUs;
