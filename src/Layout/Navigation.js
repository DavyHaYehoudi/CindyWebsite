import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../medias/logo.png";
import SocialButtons from "../components/SocialButtons";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Navbar style={{ backgroundColor: "var(--main-color)" }} expand="lg">
        <Container>
          <Navbar.Brand className="d-flex align-items-center">
            <Link to="/">
              <img src={logo} alt="logo" className="mx-2" />
              BIENVENUE
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0">
              <Nav.Link className="mx-2">
                <Link to="/consultations"> CONSULTATIONS</Link>{" "}
              </Nav.Link>
              <Nav.Link className="mx-2">
                <Link to="massages">MASSAGES</Link>{" "}
              </Nav.Link>
              <Nav.Link className="mx-2">
                <Link to="contact">CONTACT</Link>{" "}
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
