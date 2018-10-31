import React, { Component, Fragment } from "react";
import ReviewItem from './../ReviewItem/ReviewItem';
import './Reviews.css'

class Reviews extends Component {
  render() {
    return (
      <Fragment>
        <div className="col-md-12 text-center">
          <div className="row">
            
            <ReviewItem />
            
          </div>
        </div>
      </Fragment>
     );
  }
}

export default Reviews;
