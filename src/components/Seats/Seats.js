import React, { Component } from "react";
import SeatItem from "../SeatItem/SeatItem";

export class Seats extends Component {
  showSeats = seatsList => {
    let { selectedSeats } = this.props;
    let result = null;
    if (seatsList) {
      result = seatsList.map((seat, index) => {
        return (
          <SeatItem
            key={index}
            seat={seat}
            onSelectedSeat={this.onSelectedSeat}
            selectedSeats={selectedSeats}
          />
        );
      });
    }
    return result;
  };
  onSelectedSeat = seat => {
    this.props.onSelectedSeat(seat);
  };
  render() {
    let { movieTicketRoom } = this.props;
    let seatsList = movieTicketRoom.DanhSachGhe;
    return (
      <div className="mb-5">
        <div className="text-center screen border-bottom">
          <h4>screen</h4>
        </div>
        <div className="container">
          <div className="seats text-center mt-5 pr-4 pl-4">
            {this.showSeats(seatsList)}
          </div>
          <div className="mt-5 text-center border-top">
            <div className="row mt-2">
              <div className="col-md-4">
                <button className="btn btn-secondary">Đã đặt</button>
              </div>
              <div className="col-md-4">
                <button className="btn btn-success">Đang chọn</button>
              </div>
              <div className="col-md-4">
                <button className="btn btn-warning">Ghế trống</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Seats;
