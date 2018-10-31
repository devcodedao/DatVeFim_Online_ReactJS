import React, { Component } from "react";

class LoginForm extends Component {
  

  openForm = (isOpenLoginForm, isOpenSignUpForm) => {
    this.props.openForm(isOpenLoginForm, isOpenSignUpForm);
  };
  closeForm = isOpenForm => {
    this.props.closeForm(isOpenForm);
  };
  render() {
    let { isLoginForm } = this.props;
    let { TaiKhoan, MatKhau } = this.state;
    return (
      <div className={isLoginForm ? "fadeIn box" : "fadeOut box"}>
        <span
          className="btn-close text-white"
          onClick={() => {
            this.closeForm(false);
          }}>
          <i className="fa fa-times" />
        </span>
        <h2>Login</h2>
        <form onSubmit={this.onSubmit}>
          <div className="inputBox">
            <input
              type="text"
              name="TaiKhoan"
              placeholder="Tài Khoản"
              value={TaiKhoan}
              onChange={this.onChange}
            />
          </div>
          <div className="inputBox">
            <input
              type="password"
              name="MatKhau"
              placeholder="Mật Khẩu"
              value={MatKhau}
              onChange={this.onChange}
            />
          </div>
          <button type="submit" className="btnSignIn">
            Đăng Nhập
          </button>
          <small className="text-white  ml-2">
            <span
              className="btnSignUp"
              onClick={() => this.openForm(false, true)}>
              Chưa có tài khoản
            </span>
          </small>
        </form>
      </div>
    );
  }
}
export default LoginForm;
