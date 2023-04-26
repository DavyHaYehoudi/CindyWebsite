import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import useDrag from "../utils/useDrag";
import { faArrowsUpDownLeftRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Testimonies({ name, testimonies }) {
  const [show, setShow] = useState(false);
  const { position, handleMouseDown } = useDrag(350, 100, { x: 20, y: 150 });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      style={{ position: "fixed", left: position.x, top: position.y }}
      onMouseDown={handleMouseDown}
    >
      <div className="grip-testimony Button">
        <FontAwesomeIcon
          icon={faArrowsUpDownLeftRight}
          className="text-white grip"
        />
        <div>
          <button className="testimony-button me-2" onClick={handleShow}>
            {name}
          </button>
        </div>
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="title-testimonies">
            TEMOIGNAGES
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
