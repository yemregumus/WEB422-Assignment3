import React, { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";

function MainNav() {
  return (
    <>
      <Navbar fixed="top" expand="md" className="fixed-top bg-dark navbar-dark">
        <Container>
          <Nav fixed="top">
            <Navbar.Brand>
              <Link href="https://www.linkedin.com/in/jonasgumusyyz/" target="_blank" rel="noopener noreferrer" className="rainbow-link">
                <span className="rainbow-text">Yunus Gumus</span>
              </Link>
            </Navbar.Brand>
            <Link href="/" passHref legacyBehavior>
              <Nav.Link href="/">Movies</Nav.Link>
            </Link>
            <Link href="/about" passHref legacyBehavior>
              <Nav.Link href="/about">About</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  );
}

export default MainNav;
