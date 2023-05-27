import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../medias/icons/logo.png";
import SocialButtons from "../components/SocialButtons";
import { useContext, useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { MassageSelectContext } from "../context/MassageSelectProvider";

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const { setMassageId } = useContext(MassageSelectContext);
  const [showDropdown, setShowDropdown] = useState({
    consultations: false,
    massages: false,
  });
  const [timeoutId, setTimeoutId] = useState(null);
  const handleMouseEnter = (dropdown) => {
    clearTimeout(timeoutId);
    setShowDropdown((prev) => ({ ...prev, [dropdown]: true }));
  };
  const handleMouseLeave = (dropdown) => {
    const id = setTimeout(() => {
      setShowDropdown((prev) => ({ ...prev, [dropdown]: false }));
    }, 30);
    setTimeoutId(id);
  };
  // Pour estimer la largeur de l'écran, notamment pour les icônes réseaux sociaux
  useEffect(() => {
    const handleResize = () => setInnerWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Pour refermer automatiquement le menu sur mobile
  const handleNavSelect = (eventKey) => {
    setExpanded(false);
    setMassageId(eventKey);
  };
  return (
    <>
      <Navbar
        style={{ backgroundColor: "var(--main-color)" }}
        expand="lg"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="navbar-brand">
              <img src={logo} alt="logo" className="mx-2 logo" />
              BIENVENUE
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto my-2 my-lg-0"
              onSelect={handleNavSelect}
              activeKey="/"
            >
              <NavDropdown
                title="CONSULTATIONS"
                id="nav-dropdown"
                show={showDropdown.consultations}
                onMouseEnter={() => handleMouseEnter("consultations")}
                onMouseLeave={() => handleMouseLeave("consultations")}
              >
                <LinkContainer to="/consultations/naturopathie">
                  <NavDropdown.Item eventKey="0">
                    Consultation naturopathie
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/consultations/fleurs-de-bach">
                  <NavDropdown.Item eventKey="1">
                    Consultation fleurs de Bach
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown
                title="MASSAGES"
                id="nav-dropdown"
                show={showDropdown.massages}
                onMouseEnter={() => handleMouseEnter("massages")}
                onMouseLeave={() => handleMouseLeave("massages")}
              >
                <LinkContainer to="/massages/5-continents">
                  <NavDropdown.Item eventKey="0">
                    Massage des 5 continents ®
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/massages/visage-japonais">
                  <NavDropdown.Item eventKey="1">
                    Massage du visage japonais
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/massages/belly-revolution">
                  <NavDropdown.Item eventKey="2">
                    Belly révolution ®
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/massages/drainant-vodder">
                  <NavDropdown.Item eventKey="3">
                    Massage drainant méthode Vodder
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/massages/pochons">
                  <NavDropdown.Item eventKey="4">
                    Massage aux pochons
                  </NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="/massages/all">
                  <NavDropdown.Item eventKey="m-all">
                    Tous les massages
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to="/rebozo">
                <Nav.Link>SOIN REBOZO</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link>CONTACT</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
          {innerWidth > 991 && <SocialButtons />}
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
