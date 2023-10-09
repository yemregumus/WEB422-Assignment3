import React from 'react'
import { Container,Nav,Navbar } from 'react-bootstrap';
import Link from 'next/link';

function MainNav() {
    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Nav className="fixed-top navbar-dark bg-dark">
                <Navbar.Brand>Yunus Gumus</Navbar.Brand>
                <Link href="/" passHref legacyBehavior><Nav.Link href="/">Movies</Nav.Link></Link>
                <Link href="/about" passHref legacyBehavior><Nav.Link href="/about">About</Nav.Link></Link>
                </Nav>
            </Container>
        </Navbar>
        <br />
        <br />
    
        </>
    )
}

export default MainNav
