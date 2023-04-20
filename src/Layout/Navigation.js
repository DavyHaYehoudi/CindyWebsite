import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../medias/logo.png";
import SocialButtons from "../components/SocialButtons";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Navbar style={{ backgroundColor: "var(--main-color)" }} expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="logo" className="mx-2" />
              BIENVENUE
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0">
              <NavDropdown
                title="CONSULTATIONS"
                id="basic-nav-dropdown2"
                className="mx-2"
              >
                <NavDropdown.Item>
                  {" "}
                  <Link to="consultations">Naturopathie</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="consultations">Fleurs de Bach</Link>{" "}
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="consultations">Toutes les consultations</Link>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="MASSAGES"
                id="basic-nav-dropdown1"
                className="mx-2"
              >
                <NavDropdown.Item>
                  <Link to="massages">Les 5 continents®</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="massages">Le visage japonais</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="massages">Belly Revolution®</Link>{" "}
                </NavDropdown.Item>
                <NavDropdown.Item>
                  {" "}
                  <Link to="massages">Drainage Vodder</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="massages">Aux pochons</Link>{" "}
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="massages">Tous les massages</Link>
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link to="rebozo" className="mx-2">
                <Link to="rebozo">REBOZO</Link>{" "}
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
