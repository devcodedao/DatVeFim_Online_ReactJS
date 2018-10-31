import React, { Component, Fragment } from "react";

import "./NowShowing.css";

class NowShowing extends Component {
  
  render() {
    
    return (
      <Fragment>
        <div className="row mb-5" id="nowShowing">
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}

export default NowShowing;
