import React from 'react';
import logoAgri from "./img-2.png";
import logoFinacle from "./infosys.png";
import {
  Nav,
  NavLink,
  NavMenu
} 
from './NavbarElements';
import { IoMdLogOut } from 'react-icons/io';
const Navbar = () => {
  return (
    <>
      <Nav className='navbar-expand-sm fixed-top'>
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
          <NavLink to='/Payment' activeStyle>
            Payment Order
          </NavLink> 
          <NavLink to='/Demond' activeStyle>
            Demond Draft
          </NavLink> 
          <NavLink to='/inquires'  activeStyle>
            Inquires
          </NavLink> 
        </NavMenu>
        <NavLink to='/'>
        <img style={{ width:'70px'}}src={logoFinacle} />
        </NavLink>
      </Nav>
    </>
  );
};
export default Navbar;