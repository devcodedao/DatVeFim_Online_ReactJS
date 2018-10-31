import React, { Component } from "react";
import "./MovieTrailer.css";

class MovieTrailer extends Component {
  showTrailer(Trailer) {
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
    let { movie } = this.props;

    return (
      <div className="col-md-12 mt-5 movie-trailer text-center">
        <h2 className="text-left text-white ml-5 mb-4">Trailer</h2>
        <iframe
          title= "Hello"
          src={this.showTrailer(movie.Trailer)}
          className="w-75 h-75 mt-4 border-0"
          allow=" encrypted-media"
          allowFullScreen
        />
      </div>
    );
  }
}
export default MovieTrailer;
