import React, {Component} from 'react';
import './artists.css';


class Hdlee extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  sectionTitle(){
    return(
      <div className="row">
        <div className="col-lg-12 text-center">
            <h2 className="section-heading subpageHeading">Author</h2>
        </div>
      </div>
    )
  }

  drawLectures(){
    var info_ = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
        <a href="https://needleworm.github.io/hyundo" target="_blank"  rel="noreferrer">
          <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/needleworm/cheesecake-studio.github.io/src/images/artists/hdlee.jpg" alt="projectimage"/>
        </a>
        <div className="projectText">
          <a href="https://needleworm.github.io/hyundo" target="_blank"  rel="noreferrer">
            <p><h5>이현도 (Hyundo Lee)</h5></p>
          </a>
          <p className="bookDescription">
            <strong>Style</strong><br/>
            - 차갑고 삭막한 대상을 따뜻한 눈길로 바라보려 노력합니다.
          </p>
          </div>
        </div>
      </div>


    return (
      <div className="websitesContainer">
        {info_}
      </div>
    )
  }

  render() {
    return (
      <section id="lectures" className="animated bounceInDown">
          {this.sectionTitle()}
          {this.drawLectures()}
      </section>
    );
  }
}
  
export default Hdlee;