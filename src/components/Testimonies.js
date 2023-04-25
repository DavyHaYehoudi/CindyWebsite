import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Testimonies({ name, testimonies }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="Button testimony-button me-2" onClick={handleShow}>
        {name}
      </button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='title-testimonies'>TEMOIGNAGES</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {testimonies.map((t,i)=>
          <p dangerouslySetInnerHTML={{__html:t}} key={i} className='box-testimony'></p>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Example() {
  return (
    <>
      {['start', 'end', 'top', 'bottom'].map((placement, idx) => (
        <Testimonies key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default Testimonies
// render(<Example />);