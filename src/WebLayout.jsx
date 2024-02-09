import React, { useState, useEffect, useContext } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";

function BadgerLayout(props) {
    const navigate = useNavigate();

    return (
        <div>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand as={Link} to="/">
                {/* <img
                  alt="BadgerChat Logo"
                  src={crest}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{" "} */}
                Shufan Sun
              </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                
              </Nav>
            </Container>
          </Navbar>
        </div>
      );

}
export default WebLayout;