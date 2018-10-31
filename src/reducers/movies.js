import * as Types from "./../constants/actionTypes";

let data = JSON.parse(localStorage.getItem("MoviesList"));
let initialState = data ? data : [];

const movies = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_MOVIES:
      state = action.movies;
      localStorage.setItem("MoviesList", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};
export default movies;
