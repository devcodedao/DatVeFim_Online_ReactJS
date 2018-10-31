import React, { Component, Fragment } from "react";
import { Route, Link } from "react-router-dom";
import "./Header.css";
const menus = [
  {
    name: "Trang Chủ",
    to: "/",
    exact: true
  }
  // {
  //   name: "Đặt Vé",
  //   to: "/booking-ticket",
  //   exact: false
  // }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        let active = match ? "active" : "";
        return (
          <li className="nav-item">
            <Link className={`nav-link font-weight-bold ${active}`} to={to}>
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
};

class Header extends Component {
  openForm = (isOpenLoginForm, isOpenSignUpForm) => {
    this.props.openForm(isOpenLoginForm, isOpenSignUpForm);
  };

  logOutUser = UserLogined => {
    localStorage.removeItem("UserLogined");

    window.location.href = "/";
  };
  render() {
    let userLogined = JSON.parse(localStorage.getItem("UserLogined"));

    return (
      <Fragment>
        <header id="header">
          <nav className="navbar navbar-expand-md navbar-dark bg-dark p-md-0">
            <Link className="navbar-brand navbar-logo" to="/">
              AZ-
              <span className="sub-logo">CINEMA</span>
            </Link>
            <button
              className="navbar-toggler hidden-md-up"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav ml-auto mt-2 mt-md-0">
                {this.showMenus(menus)}
              </ul>
              <ul className="navbar-nav ml-auto mt-2 mr-5 mt-md-0 justify-content-center">
                {!userLogined ? (
                  <li
                    className="nav-item "
                    onClick={() => this.openForm(true, false)}>
                    <span className="nav-link btn-login">
                      <i className="fa fa-user-circle mr-2" />
                      <span>Đăng Nhập</span>
                    </span>
                  </li>
                ) : (
                  <li className="nav-item userLogined">
                    <span className="text-white userLoginedName">
                      <i className="fa fa-user-circle mr-2" />
                      Welcome, {userLogined.HoTen}
                      {"  "}
                      <i className="fa fa-angle-down" />
                    </span>
                    <div className="info">
                      <Link
                        to={`/information/TaiKhoan=${userLogined.TaiKhoan}`}
                        className="btnInfo">
                        <i className="fa fa-user" /> Thông Tin Tài Khoản
                      </Link>
                      <p
                        className="btnInfo"
                        onClick={() => this.logOutUser(userLogined)}>
                        <i className="fa fa-power-off" /> Đăng Xuất
                      </p>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </nav>
        </header>
      </Fragment>
    );
  }
  showMenus = menus => {
    let result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        );
      });
    }
    return result;
  };
}

export default Header;
