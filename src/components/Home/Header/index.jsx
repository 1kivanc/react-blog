import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';


const Header = () => (
  <header className='home-header'>
    <nav>
      <ul>
        <div class="Logo">
          <li><span>Tekno</span>Blog</li>
        </div>
        <li><Link to={'/'}>Anasayfa</Link></li>
        <li><Link to={'/Login'}>Giriş</Link></li>
        <li><Link to={`/About`}>Hakkında</Link></li>
        <li><a href=""></a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
