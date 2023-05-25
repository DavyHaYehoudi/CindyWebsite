import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../medias/icons/logo.png";
import SocialButtons from "../components/SocialButtons";
import { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";


const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  // Pour estimer la largeur de l'écran, notamment pour les icônes réseaux sociaux
  useEffect(() => {
    const handleResize = () => setInnerWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // Pour refermer automatiquement le menu sur mobile
  const handleNavSelect = () => {
    setExpanded(false);
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
            <Nav className="me-auto my-2 my-lg-0" onSelect={handleNavSelect} activeKey="/">
              <LinkContainer to="/consultations">
                <Nav.Link>CONSULTATIONS</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/massages">
                <Nav.Link>MASSAGES</Nav.Link>
              </LinkContainer>
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
