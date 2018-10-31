import React, { Component, Fragment } from "react";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import MovieShowTimes from "../../components/MovieShowTimes/MovieShowTimes";
import MovieShowTimesItem from "../../components/MovieShowTimesItem/MovieShowTimesItem";
import MovieTrailer from "./../../components/MovieTrailer/MovieTrailer";
class MovieDetailsPage extends Component {
  showTimes = showTimes => {
    let { movie } = this.props;
    let result = null;
    if (showTimes) {
      result = showTimes.map((showtime, index) => {
        return (
          <MovieShowTimesItem showtime={showtime} movie={movie} key={index} />
        );
      });
    }
    return result;
  };

  render() {
    let { movie } = this.props;
    if (movie.LichChieu) {
    }
    return (
      <Fragment>
        <div className="container mt-5">
          <div className="row">
            <MovieInfo movie={movie} />
            <MovieShowTimes>{this.showTimes(movie.LichChieu)}</MovieShowTimes>
            <MovieTrailer movie={movie} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default MovieDetailsPage;
