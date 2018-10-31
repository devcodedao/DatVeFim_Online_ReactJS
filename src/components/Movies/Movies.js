import React, { Component, Fragment } from "react";
import ComingSoon from "../ComingSoon/ComingSoon";
import "./Movies.css";
import NowShowingMoviesList from '../../containers/NowShowingMoviesList/NowShowingMoviesList';

class Movies extends Component {

  render() {
    return (
      <Fragment>
        <div className="container mt-5" id="movies">
          <div className="row">
            <div className="col-md-12  mb-5">
              {/* <!-- Nav tabs --> */}
              <ul className="nav nav-tabs justify-content-center border-0">
                <li className="nav-item">
                  <a
                    href="#now-showing"
                    data-toggle="tab"
                    className="mr-3 movie-state active">
                    Now Showing
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#coming-soon"
                    data-toggle="tab"
                    className="movie-state">
                    Coming Soon
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-12 tab-content">
              {/* <!-- Tab panes --> */}
              <div id="now-showing" className="tab-pane fade show active">
                <NowShowingMoviesList />
              </div>
              <div id="coming-soon" className="tab-pane fade show">
                <ComingSoon />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Movies;
