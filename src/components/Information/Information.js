import React, { Component } from "react";
import "./information.css";
import swal from "sweetalert2";

export class Information extends Component {
  constructor(props) {
    super(props);

    this.state = {
      TaiKhoan: "",
      MatKhau: "",
      Email: "",
      SoDT: "",
      MaNhom: "",
      MaLoaiNguoiDung: "",
      HoTen: ""
    };
  }
  componentDidMount() {
    this.onClear();
  }
  onChange = e => {
    let target = e.target;
    let name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  };
  onSubmit = e => {
    let userLogined = JSON.parse(localStorage.getItem("UserLogined"));
    console.log(userLogined);
    let { MatKhau } = this.state;
    e.preventDefault();
    swal({
      title: "Bạn có chắc chắn muốn cập nhật thông tin",
      type: "warning",
      showCancelButton: true,
      cancelButtonText: "Hủy bỏ",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Đồng ý"
    }).then(result => {
      if (result.value) {
        this.props.updateUser(this.state);
        swal({
          position: "center",
          type: "success",
          title: "Cập nhật thành công",
          showConfirmButton: false,
          timer: 1500
        });
        setTimeout(() => {
          if (MatKhau !== userLogined.MatKhau) {
            localStorage.removeItem("UserLogined");
            window.location.href = "/";
          }
        }, 1000);
      } else {
        this.onClear();
      }
    });
  };
  onClear = () => {
    let userLogined = JSON.parse(localStorage.getItem("UserLogined"));
    if (userLogined) {
      this.setState({
        TaiKhoan: userLogined.TaiKhoan,
        MatKhau: userLogined.MatKhau,
        Email: userLogined.Email,
        SoDT: userLogined.SoDT,
        MaNhom: userLogined.MaNhom,
        MaLoaiNguoiDung: userLogined.MaLoaiNguoiDung,
        HoTen: userLogined.HoTen
      });
    }
  };
  render() {
    // let { userUpdate } = this.props;

    let { TaiKhoan, MatKhau, Email, SoDT, HoTen } = this.state;
    return (
      <div className="container-wrap text-center">
        <h3 className="text-white text-center">Thông Tin Người Dùng</h3>
        <form className="text-white p-5 text-left" onSubmit={this.onSubmit}>
          <div className="form-group text-form">
            <label htmlFor="taikhoan " className="col-md-3">
              Tài Khoản
            </label>
            <input
              type="text"
              className="w-md-75 p-1 rounded col-md-9"
              id="taikhoan"
              name="TaiKhoan"
              value={TaiKhoan}
              onChange={this.onChange}
              disabled
              required
            />
          </div>
          <div className="form-group text-form">
            <label htmlFor="matkhau " className="col-md-3">
              Mật Khẩu
            </label>
            <input
              type="password"
              className="w-md-75 p-1 rounded col-md-9"
              id="matkhau"
              name="MatKhau"
              value={MatKhau}
              onChange={this.onChange}
              required
            />
          </div>
          <div className="form-group text-form">
            <label htmlFor="hoten " className="col-md-3">
              Họ Tên:
            </label>
            <input
              type="text"
              className="w-md-75 p-1 rounded col-md-9"
              id="hoten"
              name="HoTen"
              value={HoTen}
              onChange={this.onChange}
              required
            />
          </div>
          <div className="form-group text-form">
            <label htmlFor="email" className="col-md-3">
              Email:
            </label>
            <input
              type="text"
              className="w-md-75 p-1 rounded col-md-9"
              id="email"
              name="Email"
              value={Email}
              onChange={this.onChange}
              required
            />
          </div>
          <div className="form-group text-form">
            <label htmlFor="sodt" className="col-md-3">
              Số Điện Thoại:
            </label>
            <input
              type="text"
              className="w-md-75 p-1 rounded col-md-9"
              id="sodt"
              name="SoDT"
              value={SoDT}
              onChange={this.onChange}
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary font-weight-bold pr-md-5 pl-md-5 ">
              Cập Nhật
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Information;
