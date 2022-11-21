import React from 'react';
import logoAgri from "./img-2.png";
import logoFinacle from "./infosys.png";
import {
  Nav,
  NavLink,
  NavMenu
} 
from './NavbarElements';
import './nav.css';
import { IoMdLogOut } from 'react-icons/io';
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
        <img style={{ width:'122px'}}src={logoAgri} />
        </NavLink>
        <NavMenu>
        <NavLink to='/Horizontal' activeStyle>
            Vault
          </NavLink>
        <NavLink to='/Horizontal' activeStyle>
            Transactions  
          </NavLink>
        <NavLink to='/Horizontal' activeStyle>
            Transfer
          </NavLink> 
        <NavLink to='/Horizontal' activeStyle>
            Payment Order
          </NavLink> 
        <NavLink to='/Horizontal' activeStyle>
            Demond Draft
          </NavLink> 
        </NavMenu>
        <NavLink to='/'>
        <img style={{ width:'120px'}}src={logoFinacle} />
        </NavLink>
      </Nav>
    </>
  );
};
export default Navbar;