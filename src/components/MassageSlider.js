import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataMassage } from "../textes/massages/dataMassage";

const MassageSlider = ({ massageId }) => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <div className="slider-content-massage" id="slider">
      <Slider {...settings}>
        {dataMassage[massageId].img_illustration.map((item, i) => (
          <div className="card-massage" id={item.id} key={i}>
            <img
              src={require(`../medias/massages/${item}`)}
              alt={item.title}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MassageSlider;
