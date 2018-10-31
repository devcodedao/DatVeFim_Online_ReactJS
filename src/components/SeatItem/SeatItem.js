import React, { Component } from "react";
import "./SeatItem.css";
import swal from "sweetalert2";

export class SeatItem extends Component {
  onClick = seat => {
    this.props.onSelectedSeat(seat);
  };
  showNotice = () => {
    swal({
      position: "center",
      type: "error",
      title: "Ghế Đã Được Chọn",
      text:"Vui lòng chọn ghế khác",
      showConfirmButton: false,
      timer: 1500
    });
  }
  booking = seat => {
    let result = null;
    let { selectedSeats } = this.props;
    let index = this.findIndex(selectedSeats, seat.MaGhe);
    if (seat) {
      if (seat.DaDat) {
        result = "btn-secondary disabled";
      } else if (index !== -1) {
        result = "btn-success btn-seat";
      } else {
        result = "btn-warning btn-seat";
      }
    }
    return result;
  };
  findIndex = (selectedSeats, seatId) => {
    let result = -1;
    selectedSeats.forEach((seat, index) => {
      if (seat.MaGhe === seatId) {
        result = index;
      }
    });
    return result;
  };

  render() {
    let { seat } = this.props;

    return (
      <a
        className={`btn mr-2 mb-1  ${this.booking(seat)}`}
        onClick={() => this.onClick(seat)}>
        {seat.TenGhe}
      </a>
    );
  }
}

export default SeatItem;
