import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../medias/icons/logo.png";
import SocialButtons from "../components/SocialButtons";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navigation = () => {
  return (
    <>
      <Navbar style={{ backgroundColor: "var(--main-color)" }} expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="logo" className="mx-2 logo" />
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
                  <HashLink to="consultations#naturopathie-tab-description">
                    Naturopathie
                  </HashLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <HashLink to="consultations#fleursdebach-tab-description">
                    Fleurs de Bach
                  </HashLink>
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
                  <HashLink to="massages#5continents-tab-description">
                    Massage des 5 continents®
                  </HashLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <HashLink to="massages#visageJaponais-tab-description">
                    Massage du visage japonais
                  </HashLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <HashLink to="massages#belly-tab-description">
                    Belly Revolution®
                  </HashLink>{" "}
                </NavDropdown.Item>
                <NavDropdown.Item>
                  {" "}
                  <HashLink to="massages#vodder-tab-description">
                    Drainage Vodder
                  </HashLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <HashLink to="massages#pochons-tab-description">Massage aux pochons</HashLink>{" "}
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <HashLink to="massages#comparatif">Tableau comparatif</HashLink>{" "}
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="massages">Tous les massages</Link>
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link to="rebozo" className="mx-2">
                <Link to="rebozo">SOIN REBOZO</Link>{" "}
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
