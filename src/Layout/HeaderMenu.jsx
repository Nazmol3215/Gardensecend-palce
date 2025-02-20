import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom"; // Importing Link from react-router-dom

const HeaderMenu = () => {
  return (
    <Navbar
      variant="dark"
      expand="lg"
      sticky="top"
      style={{ backgroundColor: "#5AA750" }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          Garden Palace
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              <h5
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                হোম
              </h5>
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              <h5
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                আমাদের সম্পর্কে
              </h5>
            </Nav.Link>
            <Nav.Link as={Link} to="/services">
              <h5
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                সাভির্স
              </h5>
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              <h5
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                যোগাযোগ
              </h5>
            </Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#gallery">
                <h5
                  style={{
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  সব আইটেম
                </h5>
              </NavDropdown.Item>
              <NavDropdown.Item href="#blog">
                <h5
                  style={{
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  ব্লগ
                </h5>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#support">
                <h5
                  style={{
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  সাপোর্ট
                </h5>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderMenu;
