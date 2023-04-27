import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

function Testimonies({ name, testimonies }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <div className="test">
      <button className="Button btn-testimony" onClick={toggleShow}>
        {name}
      </button>

      <Offcanvas show={show} onHide={handleClose} placement="start" scroll="true">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="title-testimony">Témoignages</Offcanvas.Title>
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
