import React, { Component } from "react";
import Film24h from "./../Film24h/Film24h";
import Reviews from "./../Reviews/Reviews";
import "./News.css";

class News extends Component {
  render() {
    return (
      <div className="container text-white mt-4">
        <div className="row">
          <div className="col-md-12  mb-5">
            {/* <!-- Nav tabs --> */}
            <ul className="nav nav-tabs justify-content-center border-0">
              <li className="nav-item">
                <a
                  href="#film-24h"
                  data-toggle="tab"
                  className="mr-3 news-state active">
                  Film 24h
                </a>
              </li>
              <li className="nav-item">
                <a href="#reviews" data-toggle="tab" className="news-state ">
                  Reviews
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-12 tab-content">
            {/* <!-- Tab panes --> */}.
            <div id="film-24h" className="tab-pane fade show active">
              <Film24h />
            </div>
            <div id="reviews" className="tab-pane fade show">
              <Reviews />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
