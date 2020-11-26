import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyled } from './Header.styled'
import { Button, WarningButton } from '../../assets/styles/Button'

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <Link to="/login">
        <Button>
          Login
            </Button>
      </Link>


    );
  }
  return null;
};

const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <Link to="/logout">
        <WarningButton>
          Logout
            </WarningButton>
      </Link>


    );
  }

  return null;
};


class Header extends React.Component {
  render() {
    return (
      <HeaderStyled>
        <Link to="/" className="navbar-brand">
          Linkify.io
          </Link>
        <nav className="container">


          <LoggedOutView currentUser={this.props.currentUser} />

          <LoggedInView currentUser={this.props.currentUser} />


        </nav>
      </HeaderStyled>
    );
  }
}

export default Header;
