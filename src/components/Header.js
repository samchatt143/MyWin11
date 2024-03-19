import React from "react";
import classes from "./MainHeader.module.css";
import "./background.css";
import image from "../images/logo.png"

const Header = () => {
  return (
    <div>
      <header className={classes["main-header"]}>
        <img src={image} alt="logo"></img>
        <h1>MyWin11</h1>
      </header>
      <header className={classes["main2-header"]}></header>
      <header className={classes["secondary-header"]}>
        <h2>HOME</h2>
        <h2>ABOUT US</h2>
        <a href="https://www.dream11.com/" target="_blank"><h2>More about Dream11</h2></a>
        <h2>Feedback!</h2>
      </header>
      <div className="bg">
        <div className="text">
          <h2>Winning on Dream 11, made simple.</h2>
          <div className="search">
          You can search your favorite players from our DataBase!
          </div>
        </div>
        <div className="text1">
          Welcome to MyWin11, a one stop solution for your fantasy sports<br></br>
          career.
        </div>
        <div className="text2">
          Here, we use complex data analytics and machine learning techinques to
          provide you a Dream 11 team that will surely be your best chance in
          fantasy matchups.
        </div>
        <div className="text3">
          Our conclusions are guided purely by data, and as we all know
          nowadays, data is the thing we can trust our lives with!!
        </div>
        <div className="text4">
          So what are you waiting for? Start winning with MyWin11.
        </div>
        <div className="id1">TEAM A</div>
        <div className="box1"></div>
        <div className="box2"></div>
        <div className="id2">TEAM B</div>
        <div className="box3"></div>
        <div className="box4"></div>
      </div>
      <br></br>
    </div>
  );
};

export default Header;
