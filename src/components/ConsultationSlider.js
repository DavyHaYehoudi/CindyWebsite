import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataConsultation } from "../textes/consultations/dataConsultation";

const ConsultationSlider = ({ handleConsultationSelected }) => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    slidesToShow: 1,
    adaptiveHeight: true,
    beforeChange: (current, next) => handleConsultationSelected(next),
  };
  return (
    <div className="slider-content-consultation" id="slider">
      <Slider {...settings}>
        {dataConsultation.map((item, i) => (
          <div className="card-consultation" id={item.id} key={i}>
            <img
              src={require(`../medias/consultations/${item.img_slider}`)}
              alt={item.title}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ConsultationSlider;
