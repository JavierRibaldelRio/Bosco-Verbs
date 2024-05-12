import React from "react";

// Bootstrap https://react-bootstrap.netlify.app/docs/components/navbar/#responsive-behaviors 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {

    return <header>
        <Navbar collapseOnSelect className="fixed-top" expand="lg" bg="success">
            <Container>
                <Navbar.Brand href="/game">
                    <img
                        alt="Logotipo del departamento de lenguas extranjeras (VSJB)"
                        id="Img-Departamento"
                        src="/banner.png"
                        className="d-inline-block align-top"
                    />{'  '}
                    Bosco-Verbs</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav>
                        <Nav.Link href="/game">Game</Nav.Link>
                        <Nav.Link href="/test-generator">Test Generator</Nav.Link>
                        <Nav.Link href="/verb-list">Verb List</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>;
}

export default Header;