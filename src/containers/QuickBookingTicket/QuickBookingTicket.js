import React, { Component } from "react";
import QuickBooking from "../../components/QuickBooking/QuickBooking";
import { connect } from "react-redux";

class QuickBookingTicket extends Component {
  render() {
    let { movies } = this.props;
    return (
      <QuickBooking movies={movies} />
    );
  }
}
const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};
export default connect(
  mapStateToProps,
  null
)(QuickBookingTicket);
