import * as Types from "./../constants/actionTypes";

let initialState = [];

const movieTicketRoom = (state = initialState, action) => {
  switch (action.type) {
    case Types.SHOW_DETAIL_TICKET_ROOM:
      state = action.TicketRoom;
      localStorage.setItem('movieTicketRoom',JSON.stringify(state));
      return state;
    default:
      return state;
  }
};

export default movieTicketRoom;
