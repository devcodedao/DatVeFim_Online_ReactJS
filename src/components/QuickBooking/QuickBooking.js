import React, { Component } from "react";
import "./QuickBooking.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "./../../actions/index";
class QuickBooking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sltMaPhim: "",
      sltMaLichChieu: ""
    };
  }

  showMovieItem = movies => {
    let result;
    if (movies) {
      result = movies.map((movie, index) => {
        return (
          <option value={movie.MaPhim} key={index}>
            {movie.TenPhim}
          </option>
        );
      });
    }
    return result;
  };
  onChange = e => {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value
    });
    if (name === "sltMaPhim") {
      this.props.fetchMovieDetail(value);
    }
  };

  showMovieDays = showtimes => {
    let result = null;
    if (showtimes) {
      result = showtimes.map((showtime, index) => {
        let movieDayTimes = showtime.NgayChieuGioChieu;
        let i = movieDayTimes.search("T");
        let movieDays = movieDayTimes.slice(0, i);
        return (
          <option value={showtime.MaLichChieu} key={index}>
            {movieDays}
          </option>
        );
      });
    }
    return result;
  };
  render() {
    let { sltMaPhim, sltMaLichChieu } = this.state;
    let movieShowTimes = JSON.parse(localStorage.getItem("movie-showtimes"));
    let { movies } = this.props;
    return (
      <div className="container">
        <div className="quickBooking">
          <div className="input-group mt-3 ">
            <select
              className="custom-select border-0 outline-0"
              id="inputGroupSelect01"
              name="sltMaPhim"
              value={sltMaPhim}
              onChange={this.onChange}>
              <option defaultValue disabled={sltMaPhim === "" ? false : true}>
                Chọn Phim
              </option>
              {this.showMovieItem(movies)}
            </select>

            <select
              className="custom-select border-0 outline-0"
              id="inputGroupSelect03"
              name="sltMaLichChieu"
              value={sltMaLichChieu}
              onChange={this.onChange}
              disabled={sltMaPhim === "" ? true : false}>
              <option defaultValue disabled={sltMaLichChieu === "" ? false : true}>
                Ngày xem
              </option>
              {this.showMovieDays(movieShowTimes)}
            </select>
            <div className="input-group-append">
              <Link
                className={sltMaPhim && sltMaLichChieu? "btn btn-quickBuy":"btn btn-quickBuy disabled"}
                to={`/booking-ticket/MaPhim=${sltMaPhim}/MaLichChieu=${sltMaLichChieu}`}
                >
                Mua vé ngay
              </Link>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    movie: state.movieDetail
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchMovieDetail: id => {
      dispatch(actions.actFectDetailMovieRequest(id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuickBooking);
