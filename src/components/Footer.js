import React from "react";
import "./Footer.css";

const Footer = props => {
  return (
    <footer className="footer-distributed">
      <div className="footer-right">
        <a href="#">
          <i className="fa fa-facebook" />
        </a>
        <a href="#">
          <i className="fa fa-twitter" />
        </a>
        <a href="#">
          <i className="fa fa-linkedin" />
        </a>
        <a href="https://github.com/CurtainTwitcher">
          <i className="fa fa-github" />
        </a>
      </div>

      <div className="footer-left">
        <p className="footer-links">
          <a href="#">Home</a>
          ·
          <a href="#">About</a>
          ·
          <a href="#">Faq</a>
          ·
          <a href="#">Contact</a>
        </p>

        <p>NorthCoders &copy; 2017</p>
      </div>
    </footer>
  );
};

export default Footer;
