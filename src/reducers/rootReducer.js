import { combineReducers } from "redux";
import movies from "./movies";
import movieDetail from "./movieDetail";
import users from "./users";
import displayForm from "./displayForm";
import movieTicketRoom from "./movieTicketRoom";
import selectedSeats from "./selectedSeats";
import bookingTicket from "./bookingTicket";
import comboFood from "./comboFood";
import userUpdate from "./userUpdate";
const rootReducer = combineReducers({
  movies,
  movieDetail,
  displayForm,
  users,
  userUpdate,
  movieTicketRoom,
  selectedSeats,
  bookingTicket,
  comboFood,
});

export default rootReducer;
