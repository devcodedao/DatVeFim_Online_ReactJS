import React, { Component } from "react";
import Slider from "../../components/Slider/Slider";
// import QuickBooking from '../../components/QuickBooking/QuickBooking';
import QuickBookingTicket from "../../containers/QuickBookingTicket/QuickBookingTicket";
import Movies from "../../components/Movies/Movies";
import News from "../../components/News/News";
class HomePage extends Component {
  render() {
    return (
      <div>
        <Slider />
        {/* <QuickBooking></QuickBooking> */}
        <QuickBookingTicket />
        <Movies />
        <News />
      </div>
    );
  }
}

export default HomePage;
