import React, { Component} from "react";
import "./MovieShowTimes.css";

class MovieShowTimes extends Component {
  render() {
    return (
      <div className="col-md-12 text-white text-center mt-5 ">
        <h1 className="mb-5">Lịch Chiếu</h1>
        <div className="my-container">
          <div className="row">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieShowTimes;
