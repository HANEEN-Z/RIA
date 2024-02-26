import React, { Component } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export class HomeSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplayspeed: 1500
    };
    return (
      <div>
        <br /><br /><br />
        <Slider {...settings}>
          <div>
            <h3><img alt="1 slider" src={require('../../assets/images/slider2.jpg')} /></h3>
          </div>
          <div>
            <h3><img alt="2 slider" src={require('../../assets/images/slider6.jpg')} /></h3>
          </div>
          <div>
            <h3><img alt="3 slider" src={require('../../assets/images/slider4.jpg')} /></h3>
          </div>
          <div>
            <h3><img alt="4 slider" src={require('../../assets/images/slider5.jpg')} /></h3>
          </div>
          <div>
            <h3><img alt="5 slider" src={require('../../assets/images/slider3.jpg')} /></h3>
          </div>
        </Slider>
      </div>
    );
  }
}

export default HomeSlider
