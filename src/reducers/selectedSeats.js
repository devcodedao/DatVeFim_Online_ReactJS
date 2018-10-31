import * as Types from "../constants/actionTypes";

let initalState = [];

let findIndex = (seats, seatId) => {
  let result = -1;
  seats.forEach((seat, index) => {
    if (seat.MaGhe === seatId) {
      result = index;
    }
  });
  return result;
};

const selectedSeats = (state = initalState, action) => {
  switch (action.type) {
    case Types.TOGGLE_SELECTED_SEAT:
      let seat = action.seat;
      let index = findIndex(state, seat.MaGhe);
      if (index !== -1) {
        state.splice(index, 1);
      } else {
        state.push(action.seat);
      }
      localStorage.setItem("SelectedSeats",JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
};

export default selectedSeats;
