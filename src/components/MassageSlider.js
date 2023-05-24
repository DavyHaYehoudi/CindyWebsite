import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataMassage } from "../textes/massages/dataMassage";
import { MassageSelectContext } from "../context/MassageSelectProvider";

const MassageSlider = () => {
  const { massageId, setMassageId } = useContext(MassageSelectContext);
  const handleSelect = (i) => {
    setMassageId(i);
  };
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    // autoplay: true,
    speed: 600,
    pauseOnHover: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    adaptiveHeight: true,
    initialSlide: massageId,
  };
  return (
    <div className="slider-content-massage">
      <Slider {...settings}>
        {dataMassage.map((item, i) => (
          <div
            className="card-massage"
            id={item.id}
            key={i}
            onClick={() => handleSelect(item.id)}
          >
            <img
              src={require(`../medias/massages/${item.img_main}`)}
              alt={item.title}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MassageSlider;
