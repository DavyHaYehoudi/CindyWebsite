import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataMassage } from "../textes/massages/dataMassage";

const MassageSlider = () => {
  return (
    <div className="slider-content">
      {dataMassage.map((item, i) => (
        <div className="card" key={i.item} >
              <img src={require(`../medias/massages/${item.img_main}`)} alt={item.title} />
              <h2>{item.title} </h2>
        </div>
      ))}
    </div>
  );
};

export default MassageSlider;
