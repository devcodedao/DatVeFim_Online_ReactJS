import React, { Component } from "react";
import  MovieDetailsPage  from "../../pages/MovieDetailsPage/MovieDetailsPage";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as actions from "../../actions/index";

class MovieDetails extends Component {
  componentDidMount() {
    let { match } = this.props;
    let MaPhim = match.params.MaPhim;
    this.props.fectDetailMovie(MaPhim);
  }
  render() {
    let { movie } = this.props;
    return <MovieDetailsPage  movie = {movie}/>;
  }
}
const mapStateToProps = state => {
  return {
    movie: state.movieDetail
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    fectDetailMovie: id => {
      dispatch(actions.actFectDetailMovieRequest(id));
    }
  };
};
MovieDetails.propType = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      MaPhim: PropTypes.number.isRequired,
      TenPhim: PropTypes.string.isRequired,
      Trailer: PropTypes.string.isRequired,
      HinhAnh: PropTypes.string.isRequired,
      MoTa: PropTypes.string.isRequired,
      MaNhom: PropTypes.string.isRequired,
      NgayKhoiChieu: PropTypes.string.isRequired,
      DanhGia: PropTypes.number.isRequired
    })
  ).isRequired,
  
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetails);
