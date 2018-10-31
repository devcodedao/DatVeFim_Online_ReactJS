import React, { Component,Fragment } from 'react'
import ComingSoonItem from './../ComingSoonItem/ComingSoonItem';

class ComingSoon extends Component {
  render() {
    return (
      <Fragment>
        <div className="row mb-5" id="commingSoon">
          <ComingSoonItem />
          <ComingSoonItem />
          <ComingSoonItem />
          <ComingSoonItem />
          <ComingSoonItem />
          <ComingSoonItem />
          <ComingSoonItem />
          <ComingSoonItem />
        </div>
      </Fragment>
    )
  }
}

export default ComingSoon
