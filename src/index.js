import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(
  <div>
    <h1 className="heading">My Contacts</h1>
    <App
      name="Angela"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      phone="9305766334"
      email="P@gmail.com"
    />
    <App
      name="Jhon"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      phone="8382830365"
      email="jho@gamil.com"
    />
    <App
      name="Jack miLler"
      img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      phone="3369964"
      email="jhon@gamil.com"
    />
  </div>,
  document.getElementById("root")
);
