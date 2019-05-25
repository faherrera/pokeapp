import React from 'react';
import {Link} from 'react-router-dom';

const Nav = ({title}) => (
  <nav>
    <div className="container">
      <div className="nav-wrapper">
        <Link to='/' className="brand-logo">
          {title || 'PokeApp'}
        </Link>
      </div>
    </div>
  </nav>
)

export default Nav;