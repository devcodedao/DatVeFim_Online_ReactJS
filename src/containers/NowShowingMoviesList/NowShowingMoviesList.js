import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/index";
import NowShowing from "../../components/NowShowing/NowShowing";
import NowShowingItem from "../../components/NowShowingItem/NowShowingItem";
import PropTypes from "prop-types";

class NowShowingMoviesList extends Component {
  componentDidMount() {
    this.props.fetchAllMovies();
    this.props.fetchAllUsers();
  }
  onShowTrailer = isOpen => {
    this.props.onShowTrailer(isOpen);
  };
  closeForm = isOpenForm => {
    this.props.closeForm(isOpenForm);
  }
  render() {
    let { movies } = this.props;
    return <NowShowing>{this.showMovies(movies)}</NowShowing>;
  }
  showMovies = movies => {
    let { displayForm } = this.props;
    let isShowTrailer = displayForm.isShowTrailer;
    let result = null;
    if (movies) {
      if (movies.length > 0) {
        result = movies.map((movie, index) => {
          return (
            <NowShowingItem
              key={index}
              movie={movie}
              isShowTrailer={isShowTrailer}
              onShowTrailer={this.onShowTrailer}
              closeForm = {this.closeForm}
            />
          );
        });
      }
    }
    return result;
  };
}

NowShowingMoviesList.propTypes = {
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
  ).isRequired
};
const mapStateToProps = state => {
  return {
    movies: state.movies,
    displayForm: state.displayForm
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllMovies: () => {
      dispatch(actions.actFetchMoviesRequest());
    },
    fetchAllUsers: () => {
      dispatch(actions.actFetchAllUserRequest());
    },
    onShowTrailer: isOpen => {
      dispatch(actions.actShowTrailer(isOpen));
    },
    closeForm: isOpenForm => {
      dispatch(actions.actCloseForm(isOpenForm));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NowShowingMoviesList);
