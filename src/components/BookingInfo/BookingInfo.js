import React, { Component, Fragment } from "react";
import BookingTickets from "../../components/BookingTickets/BookingTickets";
import BuyFood from "../../components/BuyFood/BuyFood";

export class BookingInfo extends Component {
  render() {
    let { match } = this.props;
    return (
      <Fragment>
        <BookingTickets match={match} />
        <BuyFood />
      </Fragment>
    );
  }
}

export default BookingInfo;
