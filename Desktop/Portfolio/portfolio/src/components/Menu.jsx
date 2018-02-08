import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { Link, withRouter } from 'react-router-dom';

export class Menu extends React.Component {

  constructor(){
    super();
    this.state = {
      menuOpen : false
    }
    this.handleOutsideClick = this.handleOutsideClick.bind(this)
    this.handleMenuClick = this.handleMenuClick.bind(this)
  }

  handleOutsideClick() {
    const { menuOpen } = this.state
    if (menuOpen) {
      this.setState({ menuOpen: false })
    }
  }

  handleMenuClick() {
    const { menuOpen } = this.state
    this.setState({ menuOpen: !menuOpen })
  }
  
  render () {
  const { menuOpen } = this.state
  return (
    <div>
        <nav className="menu">
          <input type="checkbox" checked={menuOpen} href="#" className="menu-open" name="menu-open" id="menu-open" />
          <label onClick={this.handleMenuClick} className="menu-open-button" htmlFor="menu-open">
            <span className="lines line-1" />
            <span className="lines line-2" />
            <span className="lines line-3" />
          </label>
          <Link to="#" 
                onClick={this.handleOutsideClick} 
                className="menu-item item-1" >
                  <FontAwesome name="user" />
                </Link>
          <Link to="#" 
                onClick={this.handleOutsideClick} 
                className="menu-item item-2">
                  <FontAwesome name="heart" />
                </Link>
          <Link to="#" 
                onClick={this.handleOutsideClick} 
                className="menu-item item-3" >
                  <FontAwesome name="paw" />
                </Link>
          <Link to="#" 
                onClick={this.handleLogout} 
                className="menu-item item-4" >
                  <FontAwesome name="sign-out" />
                </Link>
        </nav>
    </div>
    );
  };
}

export default withRouter(Menu);

Menu.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
