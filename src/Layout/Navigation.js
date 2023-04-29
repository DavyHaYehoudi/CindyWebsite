import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../medias/icons/logo.png";
import SocialButtons from "../components/SocialButtons";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showDropdown, setShowDropdown] = useState({
    consultations: false,
    massages: false,
  });
  const [timeoutId, setTimeoutId] = useState(null);

  // En responsive la gestion du toogle de la Navbar apparemment du fait de l'utilisation de balises HashLink
  const closeNavbar = () => setExpanded(false);
  const handleResize = () => {
    if (window.innerWidth <= 991) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  window.addEventListener("resize", handleResize);

  // Empêcher que le menu déroulé ne se ferme trop vite au hover du NavDropdown
  const handleMouseEnter = (dropdown) => {
    clearTimeout(timeoutId);
    setShowDropdown((prev) => ({ ...prev, [dropdown]: true }));
  };

  const handleMouseLeave = (dropdown) => {
    const id = setTimeout(() => {
      setShowDropdown((prev) => ({ ...prev, [dropdown]: false }));
    }, 10);
    setTimeoutId(id);
  };

  return (
    <>
      <Navbar
        style={{ backgroundColor: "var(--main-color)" }}
        expand="lg"
        fixed="top"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      >
        <Container>
          <Navbar.Brand>
            <HashLink
              to="/#homePage"
              className="navbar-brand"
              onClick={closeNavbar}
            >
              <img src={logo} alt="logo" className="mx-2 logo" />
              BIENVENUE
            </HashLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0">
              <NavDropdown
                title={
                  isMobile ? (
                    "CONSULTATIONS"
                  ) : (
                    <HashLink
                      to="consultations#consultations"
                      id="basic-nav-dropdown1"
                      className="mx-2"
                    >
                      CONSULTATIONS
                    </HashLink>
                  )
                }
                show={showDropdown.consultations}
                onMouseEnter={() => handleMouseEnter("consultations")}
                onMouseLeave={() => handleMouseLeave("consultations")}
              >
                <NavDropdown.Item>
                  {" "}
                  <HashLink
                    to="consultations#naturopathie-tab-description"
                    onClick={closeNavbar}
                  >
                    Naturopathie
                  </HashLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <HashLink
                    to="consultations#fleursdebach-tab-description"
                    onClick={closeNavbar}
                  >
                    Fleurs de Bach
                  </HashLink>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title={
                  isMobile ? (
                    "MASSAGES"
                  ) : (
                    <HashLink
                      to="massages#massages"
                      id="basic-nav-dropdown2"
                      className="mx-2"
                    >
                      MASSAGES
                    </HashLink>
                  )
                }
                show={showDropdown.massages}
                onMouseEnter={() => handleMouseEnter("massages")}
                onMouseLeave={() => handleMouseLeave("massages")}
              >
                <NavDropdown.Item>
                  <HashLink
                    to="massages#5continents-tab-description"
                    onClick={closeNavbar}
                  >
                    Massage des 5 continents®
                  </HashLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <HashLink
                    to="massages#visageJaponais-tab-description"
                    onClick={closeNavbar}
                  >
                    Massage du visage japonais
                  </HashLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <HashLink
                    to="massages#belly-tab-description"
                    onClick={closeNavbar}
                  >
                    Belly Revolution®
                  </HashLink>{" "}
                </NavDropdown.Item>
                <NavDropdown.Item>
                  {" "}
                  <HashLink
                    to="massages#vodder-tab-description"
                    onClick={closeNavbar}
                  >
                    Drainage Vodder
                  </HashLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <HashLink
                    to="massages#pochons-tab-description"
                    onClick={closeNavbar}
                  >
                    Massage aux pochons
                  </HashLink>{" "}
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <HashLink to="massages#comparatif" onClick={closeNavbar}>
                    Tous les massages
                  </HashLink>
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link to="rebozo" className="mx-2 navlink">
                <HashLink to="rebozo#rebozoPage" onClick={closeNavbar}>
                  SOIN REBOZO
                </HashLink>{" "}
              </Nav.Link>
              <Nav.Link className="mx-2 navlink">
                <HashLink to="contact#contact" onClick={closeNavbar}>
                  CONTACT
                </HashLink>{" "}
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
