import React, { Component, Fragment } from "react";
import Film24hItem from "../Film24hItem/Film24hItem";

class Film24h extends Component {
  render() {
    return (
      <Fragment>
        <div className="col-md-12 text-center">
          <div className="row">
            
            <Film24hItem />
            
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Film24h;
