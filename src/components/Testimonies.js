import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

function Testimonies({ name, testimonies }) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      document
        .getElementById("btn-testimony")
        .classList.remove("btn-testimony-toggle");
    }, 350);
  };
  const toggleShow = () => {
    setShow((s) => !s);
    document
      .getElementById("btn-testimony")
      .classList.add("btn-testimony-toggle");
  };

  return (
    <div className="">
      <button
        className="Button btn-testimony px-2"
        id="btn-testimony"
        onClick={toggleShow}
      >
        {name}
      </button>

      <Offcanvas show={show} onHide={handleClose} placement="start" scroll="true">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="title-testimony">
            Temoignages
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {testimonies.map((t, i) => (
            <p
              dangerouslySetInnerHTML={{ __html: t }}
              key={i}
              className="box-testimony"
            ></p>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Testimonies;
