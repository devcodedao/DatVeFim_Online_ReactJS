import React, { Component } from "react";
import "./ShowTrailer.css";
class ShowTrailer extends Component {
  showTrailer = isOpen => {
    this.props.showTrailer(isOpen);
  };
  closeForm = isOpenForm => {
    this.props.closeForm(isOpenForm);
  };
  showTrailers(Trailer) {
    let result = null;
    if (Trailer) {
      let indexTrailer = Trailer.indexOf("watch?v=");
      let linkTrailer = Trailer.slice(0, indexTrailer);
      let srcTrailer = Trailer.slice(indexTrailer + 8);
      let trailer = linkTrailer + "embed/" + srcTrailer;
      result = trailer;
    }
    return result;
  }
  render() {
    let { isShowTrailer, movie } = this.props;
    console.log(movie);
    return (
      <div
        className={
          isShowTrailer ? "ScaleIn box-Trailer" : "ScaleOut box-Trailer"
        }
        onClick={() => {
          this.closeForm(false);
        }}>
        <span
          className="btn-close text-danger"
          onClick={() => {
            this.closeForm(false);
          }}>
          <i className="fa fa-times" />
        </span>
        <iframe
          title="Hello"
          src={this.showTrailers(movie.Trailer)}
          className="showTrailer border-0"
          allow=" encrypted-media"
          allowFullScreen
        />
      </div>
    );
  }
}

export default ShowTrailer;
