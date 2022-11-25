import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import styled from "styled-components";
import './Navbar.css';
import SubMenu from "./SubMenu";
import * as AiIcons from 'react-icons/ai';

const Nav = styled.div`
  background: #12121E;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 3px solid #555;

`;
  
const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 3px solid #555;

`;
  
const SidebarNav = styled.nav`
  background: #12121E;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
  border-bottom: 3px solid #555;
`;
  
const SidebarWrap = styled.div`
  width: 100%;
`;
  
function Navbar({icon, item, path}) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
        <div className='navbar'>
        </div>
        <nav className={SidebarData? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
            </li>
          </ul>
        </nav>
    </>
  );
};

export default Navbar;