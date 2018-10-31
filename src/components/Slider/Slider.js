import React, { Component,Fragment } from "react";
import './Slider.css';



class Slider extends Component {
  render() {
    return (
      <Fragment>
        <div id="sliderNewMovie" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#sliderNewMovie" data-slide-to="0" className="active"></li>
            <li data-target="#sliderNewMovie" data-slide-to="1"></li>
            <li data-target="#sliderNewMovie" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
            <img src={require('../../images/slider1.jpg')} alt="First slide"/>
            </div>
            <div className="carousel-item">
              <img src={require('../../images/slider2.jpg')} alt="Second slide"/>
            </div>
            <div className="carousel-item">
            <img src={require('../../images/slider3.jpg')} alt="Third slide"/>
            </div>
          </div>
          <a className="carousel-control-prev" href="#sliderNewMovie" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#sliderNewMovie" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </Fragment>
    );
  }
}

export default Slider;
