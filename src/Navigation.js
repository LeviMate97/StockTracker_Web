import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';


export class Navigation extends Component {
/*
    <Navbar bg="dark" variant="dark">
    <Container>
    <Nav className="me-auto">
      <Nav.Link href="/" component={Home} exact>Home</Nav.Link>
      <Nav.Link href="/Portfolios" component={Portfolio}>Portfolio</Nav.Link>
      <Nav.Link href="/Dividends" component={Dividends}>Dividends</Nav.Link>
      <Nav.Link href="/PurchaseHistories" component={PurchaseHistories}>Purchase History</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  */

    render() {
        return (
            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/">
                            Home
                        </NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/Portfolios">
                            Portfolio
                        </NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/Dividends">
                            Dividends
                        </NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/PurchaseHistories">
                            PurchaseHistories
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}