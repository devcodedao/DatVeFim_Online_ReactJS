import * as Types from "../constants/actionTypes";

let initialState = [];

const movieDetail = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_DETAIL_MOVIE:
      state = action.movie;
      let showTimes = state.LichChieu;
      localStorage.setItem("movie-showtimes",JSON.stringify(showTimes));
      localStorage.setItem("movie-detail",JSON.stringify(state));
      return state;
    default:
      return state;
  }
};
export default movieDetail;
