import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import catwhite1 from "../images/catwhite1.png"

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/'onClick={closeMobileMenu}>
          <div className='navbar-logo'>
          <p>Gato Web Developer</p>
          <img src={catwhite1} alt="" />
          </div>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <a
              href="#projects"
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Projects 
            </a>
          </li>
          
          <li className='nav-item'>
            <a href="#contact" className='nav-links' onClick={closeMobileMenu}>
               Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
