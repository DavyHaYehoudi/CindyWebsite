import React from "react";

const Adage = () => {
  return (
    <div className="adages">
      <h3 className="adageTitle">ADAGES</h3>
      <div className="citations">
        <div className="adage1">
          <blockquote>
            "Prenez soin de votre corps, c’est le seul endroit où vous êtes
            obligé de vivre" .
          </blockquote>
          <cite>‍Jim Rohn</cite>
        </div>
        <div className="adage2">
          <blockquote>
            "S'aimer soi-même est le début d'une histoire d'amour qui dure toute
            la vie".
          </blockquote>
          <cite>Oscar Wilde</cite>
        </div>
      </div>
    </div>
  );
};

export default Adage;
