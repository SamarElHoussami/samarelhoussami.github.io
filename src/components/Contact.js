import React, { Component } from 'react';
import "./styles/Page.css"
import resume from "../resume/myResume.pdf"

class Contact extends Component {
  render() {
    return (
      <span className="Page">
      	<div className="banner-contact">
			<div className="title">
				Thanks for asking.
      		</div>
      		<a href={resume} download="myResume.pdf" className="download-btn">DOWNLOAD RESUME</a>
      	</div>
      </span>
    );
  }
}

export default Contact;