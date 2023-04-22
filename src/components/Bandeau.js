import React from "react";

const Bandeau = ({ title, accroche }) => {
  return (
    <div>
      <div className="bandeau">
        <h1>{title} </h1>
        <hr className="custom-hr"></hr>
        <p className="accroche">{accroche} </p>
      </div>
    </div>
  );
};

export default Bandeau;
