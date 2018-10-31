import * as Types from "./../constants/actionTypes";
import callApiMovies from "../utils/apiMoviesCaller";
import callApiUsers from "../utils/apiUsersCaller";
import callApiBooking from "../utils/apiBookingsCaller";

export const actFetchMoviesRequest = () => {
  return dispatch => {
    return callApiMovies(
      `LayDanhSachPhim?MaNhom=GP02
        `,
      "GET",
      null
    ).then(res => dispatch(actFetchMovies(res.data)));
  };
};

export const actFetchMovies = movies => {
  return {
    type: Types.FETCH_MOVIES,
    movies
  };
};

export const actFectDetailMovieRequest = id => {
  return dispatch => {
    return callApiMovies(`LayChiTietPhim?MaPhim=${id}`, "GET", null).then(res =>
      dispatch(actFetchDetailMovie(res.data))
    );
  };
};

export const actFetchDetailMovie = movie => {
  return {
    type: Types.FETCH_DETAIL_MOVIE,
    movie
  };
};
export const actFetchAllUserRequest = () => {
  return dispatch => {
    return callApiUsers(`LayDanhSachNguoiDung?MaNhom=GP02`, "GET", null).then(
      res => {
        dispatch(actFetchAllUser(res.data));
      }
    );
  };
};

export const actFetchAllUser = users => {
  return {
    type: Types.FETCH_ALL_USERS,
    users
  };
};

export const actShowDetailTicketRoomRequest = showTimeId => {
  return dispatch => {
    return callApiMovies(
      `ChiTietPhongVe?MaLichChieu=${showTimeId}`,
      "GET",
      null
    ).then(res => {
      dispatch(actShowDetailTicketRoom(res.data));
    });
  };
};
export const actShowDetailTicketRoom = TicketRoom => {
  return {
    type: Types.SHOW_DETAIL_TICKET_ROOM,
    TicketRoom
  };
};
export const actUserLoginRequest = userLogin => {
  return dispatch => {
    return callApiUsers(
      `DangNhap?taikhoan=${userLogin.TaiKhoan}&matkhau=${userLogin.MatKhau}`,
      "POST",
      null
    ).then(res => {
      console.log(res);
      dispatch(actUserLogin(res.data));
    });
  };
};

export const actUserLogin = user => {
  return {
    type: Types.USER_LOGIN,
    user
  };
};
export const actAddNewUserRequest = user => {
  return dispatch => {
    return callApiUsers("ThemNguoiDung", "POST", user).then(res => {
      dispatch(actAddNewUser(res.data));
    });
  };
};

export const actAddNewUser = user => {
  return {
    type: Types.ADD_NEW_USER,
    user
  };
};

export const actUpdateUserRequest = user => {
  return dispatch => {
    return callApiUsers("CapNhatThongTin", "POST", user).then(res => {
      console.log(res);
      dispatch(actUpdateUser(res.data));
    });
  };
};

export const actUpdateUser = user => {
  return {
    type: Types.UPDATE_USER,
    user
  };
};

export const actOpenForm = (isOpenLoginForm, isOpenSignUpForm) => {
  return {
    type: Types.OPEN_FORM,
    isOpenLoginForm,
    isOpenSignUpForm
  };
};

export const actCloseForm = isOpenForm => {
  return {
    type: Types.CLOSE_FORM,
    isOpenForm
  };
};
export const actShowTrailer = isOpen => {
  return {
    type: Types.SHOW_TRAILER,
    isOpen
  };
};
export const actSelectedSeat = seat => {
  return {
    type: Types.TOGGLE_SELECTED_SEAT,
    seat
  };
};

export const actBookingTicketRequest = tickets => {
  return dispatch => {
    return callApiBooking("DatVe", "POST", tickets).then(res => {
      dispatch(actBookingTicket(res.data));
    });
  };
};

export const actBookingTicket = tickets => {
  return {
    type: Types.BOOKING_TICKETS,
    tickets
  };
};

export const actBuyFood = (combo, quantity) => {
  return {
    type: Types.BUY_FOOD,
    combo,
    quantity
  };
};
