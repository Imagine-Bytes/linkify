import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyled } from './Header.styled'

class Header extends React.Component {
  render() {
    return (
      <HeaderStyled>
        <nav className="container">

          <Link to="/" className="navbar-brand">
            Linkify.io
          </Link>
          <Link to="/login">
            Login
          </Link>


        </nav>
      </HeaderStyled>
    );
  }
}

export default Header;
