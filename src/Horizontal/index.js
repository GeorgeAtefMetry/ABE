import React from 'react';
import logoAgri from "./img-2.png";
import logoFinacle from "./infosys.png";
// import {
//   Nav,
//   NavLink,
//   NavMenu
// } 
// from './NavbarElements';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const NavbarMain = () => {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>

        <Navbar.Brand>
          <img style={{ width:'70px'}}src={logoAgri} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Vault">Vault</Nav.Link>
            <Nav.Link href="/Cash">Cash</Nav.Link>
            <Nav.Link href="/nonCash">NonCash</Nav.Link>
            <Nav.Link href="/paymentOrder">PaymentOrder</Nav.Link>
            <Nav.Link href="/demandDraft">DemandDraft</Nav.Link>
            <Nav.Link href="/inquires">Inquires</Nav.Link>
            <Nav.Link><img style={{ width:'70px'}}src={logoFinacle} /></Nav.Link>
          </Nav>
        
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    
      {/* <Nav className='navbar-expand-sm fixed-top'>
        <NavLink to='/' style={{marginBottom:100}}>
        <img style={{ width:'70px'}}src={logoAgri} />
        </NavLink>
        <NavMenu>
          <NavLink to='/Vault' activeStyle>
            Vault
          </NavLink>
          <NavLink to='/Transactions' activeStyle>
            Transactions  
          </NavLink>
          <NavLink to='/Transfer' activeStyle>
            Transfer
          </NavLink> 
          <NavLink to='/paymentOrder' activeStyle>
            Payment Order
          </NavLink> 
          <NavLink to='/demandDraft' activeStyle>
            Demond Draft
          </NavLink> 
          <NavLink to='/inquires'  activeStyle>
            Inquires
          </NavLink> 
        </NavMenu>
        <NavLink to='/'>
        <img style={{ width:'70px'}}src={logoFinacle} />
        </NavLink>
      </Nav> */}
    </>
  );
};
export default NavbarMain;