import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../images/logo.png';
import './styles/Header.css';

class Header extends Component {
  render() {
    return (
      <span className="Header">
      	<span>
          <img src={logo} className="App-logo" alt="logo" />
        </span>
        
		<div className="navigation">
			<LinkContainer to="/Home">
   				<p className="dash-btn" tabIndex="1">
    				HOME
    			</p>
			</LinkContainer>
			<LinkContainer to="/About">
   				<p className="dash-btn" tabIndex="2">
    				ABOUT
    			</p>
			</LinkContainer>
			<LinkContainer to="/Contact">
   				<p className="dash-btn" tabIndex="3">
    				CONTACT
    			</p>
			</LinkContainer>
		</div>
      </span>
    );
  }
}

export default Header;