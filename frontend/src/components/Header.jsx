import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar className="px-5" bg="dark" expand="lg" variant="dark" collapseOnSelect="true">
      <LinkContainer to="/">
        <Navbar.Brand>React-Mobile-Mall</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/">
            <Nav.Link href="/cart">
              <i className="fas fa-shopping-cart"></i> 购物车
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/">
            <Nav.Link href="/login">
              <i className="fa fa-user"></i> 登录
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
