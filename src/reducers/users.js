import * as Types from "./../constants/actionTypes";
import swal from "sweetalert2";

let data = JSON.parse(localStorage.getItem("UsersList"));
let initialState = data ? data : [];
let findIndex = (users, TaiKhoan, MatKhau) => {
  let result = -1;
  users.forEach((user, index) => {
    if (user.TaiKhoan === TaiKhoan || user.MatKhau === MatKhau) {
      result = index;
    }
  });
  return result;
};
const users = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_ALL_USERS:
      state = action.users;
      localStorage.setItem("UsersList", JSON.stringify(state));
      return state;
    case Types.ADD_NEW_USER:
      state.push(action.user);
      return state;
    case Types.USER_LOGIN:
      state = action.user;
      let index = findIndex(data, state.TaiKhoan, state.MatKhau);
      if (index !== -1) {
        localStorage.setItem("UserLogined", JSON.stringify(state));
        swal({
          position: "center",
          type: "success",
          title: "Đăng Nhập Thành Công",
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        swal({
          position: "center",
          type: "error",
          title: "Oops...",
          text: "Tài Khoản hoặc Mật Khẩu không đúng"
        });
      }
      return state;
    default:
      return state;
  }
};
export default users;
