import * as Types from "./../constants/actionTypes";

let initialState = [];

const bookingTicket = (state = initialState, action) => {
  switch (action.type) {
    case Types.BOOKING_TICKETS:
      return state;
    default:
      return state;
  }
};
export default bookingTicket;
