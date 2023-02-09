import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import "./Carousel.scss";

function MyCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className="slider-container">
      <div className="slider-box">
        <img src="../../img/banner1.png" />
      </div>
      <div className="slider-box">
        <img src="../../img/2.png" />
      </div>
      <div className="slider-box">
        <img src="../../img/3.png" />
      </div>
    </Slider>
  );
}

export default MyCarousel;
