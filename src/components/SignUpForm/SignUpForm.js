import React, { Component } from "react";
import swal from "sweetalert2";

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      TaiKhoan: "",
      MatKhau: "",
      Email: "",
      SoDT: "",
      HoTen: "",
      MaNhom: "GP02",
      MaLoaiNguoiDung: "KhachHang"
    };
  }
  onSubmit = e => {
    e.preventDefault();
    let { users } = this.props;
    let { TaiKhoan } = this.state;
    let index = this.findIndex(users, TaiKhoan);
    if (index !== -1) {
      swal({
        position: "center",
        type: "warning",
        title: "Tài Khoản Đã Tồn Tại",
        showConfirmButton: false,
        timer: 1500
      });
      this.onClear();
    } else {
      this.props.addNewUser(this.state);
      swal({
        position: "center",
        type: "success",
        title: "Đăng kí thành công",
        showConfirmButton: false,
        timer: 1500
      });
      setTimeout(() => {
        this.closeForm(false);
      }, 1000);
    }
  };
  onChange = e => {
    let target = e.target;
    let name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  };
  onClear = () => {
    this.setState({
      TaiKhoan: "",
      MatKhau: "",
      Email: "",
      SoDT: "",
      HoTen: "",
      MaNhom: "GP02",
      MaLoaiNguoiDung: "KhachHang"
    });
  };
  openForm = (isOpenLoginForm, isOpenSignUpForm) => {
    this.props.openForm(isOpenLoginForm, isOpenSignUpForm);
  };
  closeForm = isOpenForm => {
    this.props.closeForm(isOpenForm);
  };
  findIndex = (users, TaiKhoan) => {
    let result = -1;
    for (let index in users) {
      if (users[index].TaiKhoan === TaiKhoan) {
        result = index;
      }
    }
    return result;
  };
  render() {
    let { isSignUpForm } = this.props;
    let { TaiKhoan, MatKhau, Email, SoDT, HoTen } = this.state;

    return (
      <div className={isSignUpForm ? "fadeIn box" : "fadeOut box"}>
        <span
          className="btn-close text-white"
          onClick={() => {
            this.closeForm(false);
          }}>
          <i className="fa fa-times" />
        </span>
        <h2>Form Đăng Ký</h2>
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
          <div className="inputBox">
            <input
              type="email"
              name="Email"
              placeholder="Email"
              value={Email}
              onChange={this.onChange}
            />
          </div>
          <div className="inputBox">
            <input
              type="text"
              name="SoDT"
              placeholder="Số Điện Thoại"
              value={SoDT}
              onChange={this.onChange}
            />
          </div>
          <div className="inputBox">
            <input
              type="text"
              name="HoTen"
              placeholder="Họ Tên"
              value={HoTen}
              onChange={this.onChange}
            />
          </div>
          <button type="submit" className="btnSignIn">
            Đăng Kí
          </button>
          <small
            className="text-white btnSignUp ml-2"
            onClick={() => this.openForm(true, false)}>
            Đăng Nhập
          </small>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
