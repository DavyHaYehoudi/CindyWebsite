import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../medias/icons/logo.png";
import SocialButtons from "../components/SocialButtons";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showDropdown, setShowDropdown] = useState({
    consultations: false,
    massages: false,
  });
  const [timeoutId, setTimeoutId] = useState(null);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  // En responsive la gestion du toogle de la Navbar 
  const closeNavbar = () => setExpanded(false);
  useEffect(() => {
    if (expanded && window.innerWidth <= 991) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [expanded]);

  // Pour estimer la largeur de l'écran
  useEffect(() => {
    const handleResize = () => setInnerWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  

  // Empêcher que le menu déroulé ne se ferme trop vite au hover du NavDropdown
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

  // Ancres sur mobiles de page à page. Le code pour faire défiler la page vers l'ancre se déclenche avant que l'ancre ne soit pleinement visible à l'écran.
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const element = hash ? document.getElementById(hash.substring(1)) : null;
    if (element) {
      setTimeout(() => {
        window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
      }, 500); // délai de 500 millisecondes
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

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
          <Navbar.Brand
            href="/#homePage"
            // onClick={closeNavbar}
            className="navbar-brand"
          >
            <img src={logo} alt="logo" className="mx-2 logo" />
            BIENVENUE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0">
              <NavDropdown
                title={
                  isMobile ? (
                    "CONSULTATIONS"
                  ) : (
                    <Link
                      to="consultations#consultations"
                      id="basic-nav-dropdown1"
                      className="mx-2"
                    >
                      CONSULTATIONS
                    </Link>
                  )
                }
                show={showDropdown.consultations}
                onMouseEnter={() => handleMouseEnter("consultations")}
                onMouseLeave={() => handleMouseLeave("consultations")}
              >
                {isMobile && (
                  <NavDropdown.Item
                    href="consultations#consultations"
                    onClick={closeNavbar}
                  >
                    Présentation
                  </NavDropdown.Item>
                )}
                <NavDropdown.Item
                  href="consultations#naturopathie-tab-description"
                  onClick={closeNavbar}
                >
                  Naturopathie
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="consultations#fleursdebach-tab-description"
                  onClick={closeNavbar}
                >
                  Fleurs de Bach
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title={
                  isMobile ? (
                    "MASSAGES"
                  ) : (
                    <Link
                      to="massages#massages"
                      id="basic-nav-dropdown2"
                      className="mx-2"
                    >
                      MASSAGES
                    </Link>
                  )
                }
                show={showDropdown.massages}
                onMouseEnter={() => handleMouseEnter("massages")}
                onMouseLeave={() => handleMouseLeave("massages")}
              >
                {isMobile && (
                  <NavDropdown.Item
                    href="massages#massages"
                    onClick={closeNavbar}
                  >
                    Présentation
                  </NavDropdown.Item>
                )}
                <NavDropdown.Item
                  href="massages#5continents-tab-description"
                  onClick={closeNavbar}
                >
                  Massage des 5 continents®
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="massages#visageJaponais-tab-description"
                  onClick={closeNavbar}
                >
                  Massage du visage japonais
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="massages#belly-tab-description"
                  onClick={closeNavbar}
                >
                  Belly Revolution®
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="massages#vodder-tab-description"
                  onClick={closeNavbar}
                >
                  Drainage Vodder
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="massages#pochons-tab-description"
                  onClick={closeNavbar}
                >
                  Massage aux pochons
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="massages#comparatif"
                  onClick={closeNavbar}
                >
                  Tous les massages
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                href="rebozo#rebozoPage"
                className="navlink"
                onClick={closeNavbar}
              >
                SOIN REBOZO
              </Nav.Link>
              <Nav.Link
                className="navlink"
                href="contact#contact"
                onClick={closeNavbar}
              >
                CONTACT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {innerWidth >991&&<SocialButtons />}
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
