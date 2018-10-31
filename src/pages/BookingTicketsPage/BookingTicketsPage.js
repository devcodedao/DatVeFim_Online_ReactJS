import React, { Component } from "react";
import BookingResult from "../../components/BookingResult/BookingResult";
import Seats from "../../components/Seats/Seats";
import BuyFood from "../../components/BuyFood/BuyFood";
class BookingTicketsPage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       food:[]
    }
  }
  
  onSelectedSeat = seat => {
    this.props.onSelectedSeat(seat);
  };
  bookingTickets = tickets => {
    this.props.bookingTickets(tickets);
  };
  onBuyFood = (combo, quantity) => {
    this.props.onBuyFood(combo, quantity);
  };
  showQuantityToResult = foodList => {
    this.setState({
      food: foodList
    });
  };
  render() {
    let { match, movieTicketRoom, selectedSeats, comboFood } = this.props;
    let {food} = this.state;
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-7 text-white mb-2">
            <Seats
              movieTicketRoom={movieTicketRoom}
              onSelectedSeat={this.onSelectedSeat}
              selectedSeats={selectedSeats}
            />
          </div>
          <BookingResult
            match={match}
            selectedSeats={selectedSeats}
            bookingTickets={this.bookingTickets}
            comboFood={comboFood}
            food = {food}
          />
          <BuyFood
            comboFood={comboFood}
            onBuyFood={this.onBuyFood}
            showQuantityToResult={this.showQuantityToResult}
          />
        </div>
      </div>
    );
  }
}

export default BookingTicketsPage;
