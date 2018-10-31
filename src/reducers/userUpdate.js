import * as Types from "./../constants/actionTypes";

let initialState = {
  TaiKhoan: "",
  MatKhau: "",
  Email: "",
  SoDT: "",
  MaNhom: "",
  MaLoaiNguoiDung: "",
  HoTen: ""
};

const userUpdate = (state = initialState, action) => {
  switch (action.type) {
    case Types.UPDATE_USER:
      console.log(action);
      state = action.user;
      localStorage.setItem("UserLogined", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};
export default userUpdate;
