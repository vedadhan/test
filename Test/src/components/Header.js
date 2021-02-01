import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <div>
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          LOGO
          <i class='fab fa-typo3' />
        </Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
              My Portfolio
          </li>
          <li className='nav-item'>
              Clients
          </li>
        </ul>
        <button className='nav-item'>Get in Touch</button>
      </div>
    </nav>
  </div>
    
  );
}

export default Header;