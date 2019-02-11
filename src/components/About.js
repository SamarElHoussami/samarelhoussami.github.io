import React, { Component } from 'react';
import "./styles/Page.css"
import me from "../images/me.png"
import milo from "../images/milo.png"
import arrow from "../images/arrow.png"

var images = [me, milo];

class About extends Component {
  state = {
    me: 0
  }

  switchPics = () => {
    this.setState(state => ({ me: state.me === 0 ? 1 : 0 }))
  }
  
  getImageIndex = () => this.state.me === 0 ? 0 : 1

  render() {
    const imageName = this.getImageIndex();
    return (
      <div className="Page">

      	<div className="banner-about">
      		<div className="title">
				Computer Science Student
      		</div>
      		<div className="subtitle">
				TV show enthusiast
      		</div>
           <a href="#pic">
              <img src={ arrow } className="arrow-down" alt="arrow-down"/>
          </a>
      	</div>
      	<div className="page-body">
    			<div className="body-title">	
    				Who am I?	
    			</div>
          <p className="bio"><img src={images[imageName]} id="pic" className="profile-pic" onClick={this.switchPics} alt="me/milo"></img>
            Samar El-Houssami. That's me in the picture. I'm a Computer Science
            student at the University of Windsor. I watch a lot of TV (mostly comedies) 
            and I'm also a big fan of the Marvel movies. I have a dog (his name is Milo) and if you
            want to see a picture of him, <b>click on my picture</b>. I like to learn a lot of new things and I'd like to 
            think that I'm a pretty fast learner. If you'd like to know more about me, you can find my 
            contact information on the <b>contact</b> page.
          </p>
      	</div>
      </div>
    );
  }
}

export default About;