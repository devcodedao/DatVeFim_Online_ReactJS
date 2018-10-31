import React, { Component } from "react";
import BookingTicketsPage from "./../../pages/BookingTicketsPage/BookingTicketsPage";
import { connect } from "react-redux";
import * as actions from "./../../actions/index";
class Booking extends Component {
  componentDidMount() {
    let { match } = this.props;
    let showTimeId = match.params.MaLichChieu;
    this.props.showDetailTicketRoom(showTimeId);
  }
  onSelectedSeat = seat => {
    this.props.onSelectedSeat(seat);
  };
  bookingTickets = tickets => {
    this.props.bookingTickets(tickets);
  };
  onBuyFood = (combo,quantity) => {
    this.props.onBuyFood(combo,quantity);
  }
  render() {
    let {
      match,
      history,
      movieTicketRoom,
      selectedSeats,
      comboFood,
    } = this.props;
    return (
      <BookingTicketsPage
        match={match}
        history={history}
        movieTicketRoom={movieTicketRoom}
        onSelectedSeat={this.onSelectedSeat}
        selectedSeats={selectedSeats}
        bookingTickets={this.bookingTickets}
        comboFood={comboFood}
        onBuyFood = {this.onBuyFood}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    movieTicketRoom: state.movieTicketRoom,
    selectedSeats: state.selectedSeats,
    comboFood: state.comboFood,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showDetailTicketRoom: showTimeId => {
      dispatch(actions.actShowDetailTicketRoomRequest(showTimeId));
    },
    onSelectedSeat: seat => {
      dispatch(actions.actSelectedSeat(seat));
    },
    bookingTickets: tickets => {
      dispatch(actions.actBookingTicketRequest(tickets));
    },
    onBuyFood: (combo, quantity) => {
      dispatch(actions.actBuyFood(combo, quantity));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Booking);
