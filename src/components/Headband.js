import React from "react";

const Headband = ({ title, accroche, id }) => {
  return (
    <>
      <div className="bandeau" id={id}>
        <h1>{title} </h1>
        <hr className="custom-hr"></hr>
        <p className="accroche">{accroche} </p>
      </div>
    </>
  );
};

export default Headband;
