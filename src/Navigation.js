import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./medias/logo.png";
import SocialButtons from "./SocialButtons";

const Navigation = () => {
  return (
    <>
      <Navbar style={{ backgroundColor: "var(--main-color)" }} expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center" style={{fontSize:"var(--fs-4)"}} >
            <img src={logo} alt="logo" className="mx-2" />
            BIENVENUE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0">
              <Nav.Link href="#home" className="mx-2">
                CONSULTATIONS
              </Nav.Link>
              <Nav.Link href="#features" className="mx-2">
                MASSAGES
              </Nav.Link>
              <Nav.Link href="#pricing" className="mx-2">
                CONTACT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <SocialButtons />
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
