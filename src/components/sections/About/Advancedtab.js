import React, { Component } from "react";
import { Tab, Nav } from "react-bootstrap";

import img from "../../../assets/img/tab-block.jpg";
import imgGoal from "../../../assets/img/goal.png";
import img2 from "../../../assets/img/2_.png";
import Teamblock from "../Team/Teamblock";
import img1 from "../../../assets/img/1_.png"
import img3 from "../../../assets/img/Capture.PNG";
import img4 from "../../../assets/img/theme song.PNG";
import song from "../../../assets/AUDIO-2023-04-28-10-27-18.mp3";

const missiontab = [
  {
    icon: "fas fa-check",
    text: "There are many variations of passages of LoreIpsum available, but the majority have suffered",
  },
  {
    icon: "fas fa-check",
    text: "There are many variations of passages of LoreIpsum available, but the majority have suffered",
  },
  {
    icon: "fas fa-check",
    text: "There are many variations of passages of LoreIpsum available, but the majority have suffered",
  },
];
const historytab = [
  { icon: "fas fa-check", text: "B. M. F. Jayarathne" },
  { icon: "fas fa-check", text: "J. P. C. Chandrasena " },
  { icon: "fas fa-check", text: "R. J. Kularthne" },
];
const businessgoalstab = [
  {
    icon: "fas fa-check",
    text: "To examine the company's financial statement to ensure the financial books are accurate and compliant with fiscal laws and regulations. ",
  },
  { icon: "fas fa-check", text: "To give attestation engagement." },
  {
    icon: "fas fa-check",
    text: "To form an independent opinion on the financial statements of the audited entity.",
  },
];

class Advancedtab extends Component {

  // Create state
  state = {
  
    // Get audio file in a variable
    audio: new Audio(song),
  
    // Set initial state of song
    isPlaying: false,
  };
  
  // Main function to handle both play and pause operations
  playPause = () => {
  
    // Get state of song
    let isPlaying = this.state.isPlaying;
  
    if (isPlaying) {
      // Pause the song if it is playing
      this.state.audio.pause();
    } else {
  
      // Play the song if it is paused
      this.state.audio.play();
    }
  
    // Change the state of song
    this.setState({ isPlaying: !isPlaying });
  };


  render() {
    return (
      <section
        className="advanced-tab section-gap"
        style={{ paddingTop: "0px" }}
      >
        <div className="container">
          {/* Tabs Buttons */}
          <div className="tab-buttons">
            <Tab.Container defaultActiveKey="teammember">
              <Nav variant="tabs">
                <Nav.Item>
                  <Nav.Link eventKey="mission">
                    Our Mission &amp; Vision
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="history">Society History</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="businessgoals">Theme Song</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="teammember">Team Members</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="mission">
                  <div className="tab-text-block">
                    <div className="row align-items-center justify-content-center">
                      <div className="col-lg-6 col-md-10">
                      <div className="block-image">
                          <img src={img1} alt="" /> 
                          
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-10">
                      <div className="block-image">
                          <img src={img2} alt="" /> 
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="history">
                  <div className="tab-text-block right-image with-right-circle">
                    <div className="row align-items-center justify-content-center">
                      <div className="col-lg-6 col-md-10 order-2 order-lg-1">
                        <div className="block-text">
                          <h2 className="title">Then to Now</h2>
                          <p>
                          <img src={img3} alt="" /> 
                          </p>
                          <p>
                          Based on Ranasgalle thero's saying, Mr. B. M. Jayarathne has started this scholarship.
                           The main objective of that was to give support to students in their education. 
                           Therefore, to give education to all children not only based on money or social status three people came forward to build this scholarship society. 
                           To fulfill this society's main objective, they started this society on 31 st of July 1920 in Jinaraja Vidyalay Kollupitiya.
                          <p style={{color: "black", fontWeight: "bold"}}>
                          The founding members of this society :
                          </p>
                          </p>
                          <ul>
                            {historytab.map((item, i) => (
                              <li key={i}>
                                <i className={item.icon} />
                                {item.text}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-10 order-1 order-lg-2">
                        <div className="block-image">
                          <img src={img} alt="" /> 
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="businessgoals">
                  <div className="tab-text-block left-image">
                    <div className="row align-items-center justify-content-center">
                      <div className="col-lg-6 col-md-10">
                        <div className="block-image">
                          <img src={imgGoal} alt="" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-10">
                        <div className="block-text">
                          <h2 className="title">Theme Song</h2>
                          <div className="block-image">
                            <img src={img4} alt="" />

                            <p style={{ alignItems:"center"}}>
                            {this.state.isPlaying ? 
                            "Click again to Paused the song" : 
                            ""}
                          </p>
                          <button style={{backgroundColor: "black", alignItems:"center", color: "white", font: "20px", padding: "10px 60px", margin: "10px 0px"}} onClick={this.playPause}>
                          <i class="fa fa-music" aria-hidden="true"></i>
                          </button>    
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="teammember">
                  <div className="tab-text-block">
                    <div className="row align-items-center justify-content-center">
                      <Teamblock />
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </section>
    );
  }
}

export default Advancedtab;
