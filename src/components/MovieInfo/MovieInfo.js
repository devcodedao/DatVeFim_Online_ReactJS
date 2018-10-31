import React, { Component, Fragment } from "react";
import "./MovieInfo.css";

class MovieInfo extends Component {
  showTimeStart(timeStart) {
    let result = null;
    if (timeStart) {
      let index = timeStart.search("T");
      result = timeStart.slice(0, index);
    }
    return result;
  }
  showRating(rating) {
    let result = [];
    for (let i = 1; i <= rating; i++) {
      result.push(<i key={i} className="fa fa-star" />);
    }
    for (let j = 1; j <= 5 - rating; j++) {
      result.push(<i key={j + "e"} className="fa fa-star-o" />);
    }
    return result;
  }
  render() {
    let { movie } = this.props;
    let timeStart = movie.NgayKhoiChieu;
    return (
      <Fragment>
        <div className="row movie-info">
          <div className="col-md-6">
            <div className="movie-img ml-md-auto mr-md-5">
              <img
                src={movie.HinhAnh}
                alt={movie.TenPhim}
                className="movie-img-selected"
              />
            </div>
          </div>
          <div className="col-md-6 text-white mt-5">
            <h5 className="time-start">{this.showTimeStart(timeStart)}</h5>
            <h2 className="movie-name">{movie.TenPhim}</h2>
            <p className="rating">{this.showRating(movie.DanhGia)}</p>
            <div className="description">
              <p>{movie.MoTa}</p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default MovieInfo;
