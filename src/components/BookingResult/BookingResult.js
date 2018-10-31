import React, { Component } from "react";
import "./BookingResult.css";
import swal from "sweetalert2";

export class BookingResult extends Component {

  findIndex = (movieShowtimes, MaLichChieu) => {
    let result = -1;
    if (movieShowtimes) {
      movieShowtimes.forEach((movieShowtime, index) => {
        if (movieShowtime.MaLichChieu === MaLichChieu) {
          result = index;
        }
      });
      return result;
    }
  };
  showMovieShowtime = (movieShowtimes, MaLichChieu) => {
    let index = this.findIndex(movieShowtimes, MaLichChieu);
    if (index !== -1) {
      return movieShowtimes[index];
    } else {
      console.log("k tim thay");
    }
  };
  showSelectedSeat = selectedSeats => {
    let result = null;
    if (selectedSeats.length > 0) {
      result = selectedSeats.map((seat, index) => {
        return (
          <span key={index} className="text-white mr-1">
            {seat.TenGhe},
          </span>
        );
      });
    }
    return result;
  };
  totalPriceTicket = priceTickets => {
    let result = 0;
    if (priceTickets.length > 0) {
      for (let price of priceTickets) {
        result += price;
      }
    }
    return result;
  };
  totalPriceComboFood = priceFood => {
    let result = 0;
    if (priceFood.length > 0) {
      for (let price of priceFood) {
        result += price;
      }
    }
    return result;
  }
  
  showSelectedCombo = combosSelected => {
    let result = null;
    if (combosSelected !== null) {
      result = combosSelected.map((comboSelected, index) => {
        if (comboSelected.quantity > 0) {
          return (
            <span key={index} className="text-white mr-1">
              {comboSelected.combo.comboName} ({comboSelected.quantity})
            </span>
          );
        }
      });
    }
    return result;
  };
  render() {
    let { match, selectedSeats,food } = this.props;
    let MaLichChieu = parseInt(match.params.MaLichChieu);
    let moiveSelected = JSON.parse(localStorage.getItem("movie-detail"));
    let movieShowtimes = JSON.parse(localStorage.getItem("movie-showtimes"));
    let movieShowtime = this.showMovieShowtime(movieShowtimes, MaLichChieu);

    let recordIndex = movieShowtime.NgayChieuGioChieu.search("T");
    let dayShow = movieShowtime.NgayChieuGioChieu.slice(0, recordIndex);
    let hourShow = movieShowtime.NgayChieuGioChieu.slice(
      recordIndex + 1,
      recordIndex + 6
    );
    let priceTickets = selectedSeats.map((seat, index) => {
      return seat.GiaVe;
    });
    let priceFood = food.map((food,index)=>{
      return food.combo.comboPrice * food.quantity;
    })
    let total = this.totalPriceTicket(priceTickets) + this.totalPriceComboFood(priceFood);
    return (
      <div className="col-md-5 booking-result">
        <img
          src={moiveSelected.HinhAnh}
          className="movie-img-selected"
          alt={moiveSelected.TenPhim}
        />
        <div className="card booking-result-bill">
          <div className="card-body">
            <h3 className="card-title">{moiveSelected.TenPhim}</h3>
            <h5 className="card-text text-white">
              <span>{movieShowtime.Rap.TenRap}</span>
            </h5>
            <p className="card-text">
              Xuất Chiếu:
              <span className="text-white ml-2">{hourShow}</span>
              <span className="text-white ml-2">{dayShow}</span>
            </p>
            <p className="card-text">
              Combo: {this.showSelectedCombo(food)}
            </p>
            <p className="card-text">
              <span className="mr-3">Ghế:</span>{" "}
              {this.showSelectedSeat(selectedSeats)}
            </p>
          </div>
          <div className="card-footer text-right">
            <h4 className="card-title d-flex justify-content-between">
              <span className="">Tổng: </span>
              <span>{total} VND</span>
            </h4>
            <button
              type="button"
              className="btn btn-success"
              onClick={this.BookingTicket}>
              Đặt vé
            </button>
          </div>
        </div>
      </div>
    );
  }
  BookingTicket = () => {
    let UserLogined = JSON.parse(localStorage.getItem("UserLogined"));
    let { selectedSeats } = this.props;
    let DanhSachVe = [];
    for (let seat of selectedSeats) {
      let ve = {
        MaGhe: seat.MaGhe,
        GiaVe: seat.GiaVe
      };
      DanhSachVe.push(ve);
    }
   
    if (UserLogined) {
      let MaLichChieu = this.props.match.params.MaLichChieu;
      let TaiKhoanNguoiDung = UserLogined.TaiKhoan;
  
      let ticket = {
        MaLichChieu: MaLichChieu,
        TaiKhoanNguoiDung: TaiKhoanNguoiDung,
        DanhSachVe: DanhSachVe
      };
      if (selectedSeats.length > 0) {
        this.props.bookingTickets(ticket);
        swal({
          position: "center",
          type: "success",
          title: "Đặt vé thành công",
          showConfirmButton: false,
          timer: 1500
        });
        setTimeout(() => {
          window.location.href = "/";
          localStorage.removeItem("SelectedSeats");
          localStorage.removeItem("ComboFoodSelected");
        }, 1500);
      } else {
        swal({
          position: "center",
          type: "error",
          title: "Vui lòng chọn ghế",
          showConfirmButton: false,
          timer: 1500
        });
      }
    } else {
      swal({
        position: "center",
        type: "error",
        title: "Vui lòng đăng nhập",
        showConfirmButton: false,
        timer: 1500
      });
    }
  };
}

export default BookingResult;
