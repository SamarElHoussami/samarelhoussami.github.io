import React, { Component } from 'react';
import "./styles/Page.css";
import linkedin from "../images/linkedin-logo.png";
import github from "../images/github-logo.png"

class Home extends Component {
  render() {
    return (
      <div className="Page">
      	<div className="banner-home">
      		<div className="title">
    				This is my first project using
    				ReactJs.
      		</div>
      		<div className="subtitle">
				    the logo on the top left spins when you hover over it
      		</div>
          <div className="links">
            <a href="https://www.linkedin.com/in/samarelhoussami" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} className="home-link" alt="linkedin-link"/>
            </a>
            <a href="https://github.com/SamarElHoussami" target="_blank" rel="noopener noreferrer">
              <img src={github} className="home-link" alt="github-link"/>
            </a>
          </div>
      	</div>
      </div>
    );
  }
}

export default Home;