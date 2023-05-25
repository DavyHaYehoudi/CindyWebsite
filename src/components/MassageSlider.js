import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataMassage } from "../textes/massages/dataMassage";

const MassageSlider = ({ handleMassageSelected }) => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (current, next) => handleMassageSelected(next),
  };
  return (
    <div className="slider-content-massage" id="slider">
      <Slider {...settings}>
        {dataMassage.map((item, i) => (
          <div className="card-massage" id={item.id} key={i}>
            <img
              src={require(`../medias/massages/${item.img_slider}`)}
              alt={item.title}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MassageSlider;
