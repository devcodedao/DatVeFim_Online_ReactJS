import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import ShowTrailer from "../ShowTrailer/ShowTrailer";
import "./NowShowingItem.css";

class NowShowingItem extends Component {
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
  showDayStart = startDay => {
    let result = null;
    let index = startDay.search("T");
    result = startDay.slice(0, index);
    console.log(index);
    return result;
  };
  onShowTrailer = isOpen => {
    this.props.onShowTrailer(isOpen);
  };
  closeForm = isOpenForm => {
    console.log(isOpenForm);
    this.props.closeForm(isOpenForm);
  }
  render() {
    let { movie,isShowTrailer } = this.props;
    return (
      <Fragment>
        <ShowTrailer isShowTrailer={isShowTrailer} closeForm={this.closeForm} movie={movie}/>
        <div className="col-md-3 mb-4">
          <div className="card border-0">
            <div className="bg-blur">
              <div className="bg-blur--content">
                <p
                  className="watch-trailer text-center"
                  onClick={() => this.onShowTrailer(true)}>
                  <i className="fa fa-play-circle" />
                </p>
                <div className="d-flex btn-movie-group mt-5">
                  <Link
                    to={`/MovieDetails/MaPhim=${movie.MaPhim}`}
                    className="btn btn-buyTicket">
                    Mua Vé
                  </Link>
                </div>
              </div>
            </div>
            <img
              className="card-img-top img-movie"
              src={movie.HinhAnh}
              alt={movie.TenPhim}
            />
            <div className="card-body pt-1 ">
              <h5 className="card-title">{movie.TenPhim}</h5>
              <p className="text-right">
                <span className="movie-rating">
                  {this.showRating(movie.DanhGia)}
                </span>
              </p>
              <p className="text-left">
                <span className="movie-rating">
                  Ngày Khởi Chiếu: {this.showDayStart(movie.NgayKhoiChieu)}
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* end 1 col-3 */}
      </Fragment>
    );
  }
  showDesciptionMovie = description => {
    let result = null;
    result = description.substring(0, 100);
    return result;
  };
}

export default NowShowingItem;
