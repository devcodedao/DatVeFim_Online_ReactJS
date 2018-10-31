import React, { Component } from "react";
import {Link} from "react-router-dom";

class MovieShowTimesItem extends Component {
  render() {
    let { showtime,movie } = this.props;

    let index = showtime.NgayChieuGioChieu.search("T");
    let hourShow = showtime.NgayChieuGioChieu.substr(index + 1).slice(0, 5);
    let dayShow = showtime.NgayChieuGioChieu.substr(0, index);
    return (
      <div className="col-md-12">
        <div className="row border-bottom">
          <div className="col-md-6 ml-auto mb-5">
            <img
              src={require("../../images/2_0.png")}
              className="mt-5"
              alt="Thể Loại phim"
            />
          </div>
          <div className="col-md-6 time mt-4 text-left">
            <h5 className="mb-3">
              <span className="day-show">{dayShow}</span>
              <span className="name-theater ml-4">{showtime.Rap.TenRap}</span>
              <small className="time-movie ml-5">{showtime.ThoiLuong} phút</small>
            </h5>
            <Link to={`/booking-ticket/MaPhim=${movie.MaPhim}/MaLichChieu=${showtime.MaLichChieu}`} className="btn btn-success mr-2 hour-show mb-2">
              {hourShow}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieShowTimesItem;
