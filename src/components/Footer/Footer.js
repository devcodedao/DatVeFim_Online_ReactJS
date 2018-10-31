import React, { Component } from "react";
import "./Footer.css";
class Footer extends Component {
  render() {
    return (
      <div className="bg-dark text-center mt-5 footer">
        <p className="footer-content">
          <span className="navbar-logo">
            AZ-
            <span className="sub-logo">CINEMA</span>
          </span>

          <span className="text">Sản Phẩm Demo React-js Redux</span>
        </p>
      </div>
    );
  }
}

export default Footer;
