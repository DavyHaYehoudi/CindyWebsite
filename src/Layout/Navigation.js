import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../medias/icons/logo.png";
import SocialButtons from "../components/SocialButtons";
import { HashLink } from "react-router-hash-link";
import { useEffect, useRef, useState } from "react";

const Navigation = () => {
  const [showConsultationsDropdown, setShowConsultationsDropdown] =
    useState(false);
  const [showMassagesDropdown, setShowMassagesDropdown] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    // Effacer le timer lors du démontage du composant
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);
  const handleConsultationsMouseEnter = () => {
    setShowConsultationsDropdown(true);
    setShowMassagesDropdown(false);
  };
  const handleMassagesMouseEnter = () => {
    setShowMassagesDropdown(true);
    setShowConsultationsDropdown(false);
  };

  const handleMouseLeave = () => {
    // Ajouter un délai de 300ms avant de fermer le menu
    timerRef.current = setTimeout(() => {
      setShowConsultationsDropdown(false);
      setShowMassagesDropdown(false);
    }, 300);
  };
  const handleMouseOver = () => {
    // Effacer le timer si la souris est de retour sur le menu
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  return (
    <>
      <Navbar
        style={{ backgroundColor: "var(--main-color)" }}
        expand="lg"
        fixed="top"
      >
        <Container>
          <Navbar.Brand>
            <HashLink to="/#homePage" className="navbar-brand">
              <img src={logo} alt="logo" className="mx-2 logo" />
              BIENVENUE
            </HashLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0">
              <NavDropdown
                title={
                  <HashLink to="consultations#consultations">
                    CONSULTATIONS
                  </HashLink>
                }
                id="basic-nav-dropdown2"
                className="mx-2"
                show={showConsultationsDropdown}
                onMouseEnter={handleConsultationsMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseOver={handleMouseOver}
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
              </NavDropdown>

              <NavDropdown
                title={<HashLink to="massages#massages">MASSAGES</HashLink>}
                id="basic-nav-dropdown1"
                className="mx-2"
                show={showMassagesDropdown}
                onMouseEnter={handleMassagesMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseOver={handleMouseOver}
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
                  <HashLink to="massages#pochons-tab-description">
                    Massage aux pochons
                  </HashLink>{" "}
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <HashLink to="massages#comparatif">
                    Tous les massages
                  </HashLink>
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link to="rebozo" className="mx-2">
                <HashLink to="rebozo#rebozoPage">SOIN REBOZO</HashLink>{" "}
              </Nav.Link>
              <Nav.Link className="mx-2">
                <HashLink to="contact#contact">CONTACT</HashLink>{" "}
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
