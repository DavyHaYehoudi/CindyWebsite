import React from "react";
import CarouselHome from "../components/CarouselHome";

const Home = () => {
  return (
    <div className="homePage">
      <h1>
        <i>Cindy PANTOUSTIER</i>
        <br />
        <span className="subtitle_homePage">
          NATUROPATHE | MASSAGES
          <br />
          BIEN-ETRE
        </span>
      </h1>
      <CarouselHome />
    </div>
  );
};

export default Home;
