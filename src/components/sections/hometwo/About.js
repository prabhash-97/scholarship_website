import React, { Component } from "react";
import { Link } from "react-router-dom";

import img1 from "../../../assets/img/video-bg/poster-1.jpg";
import img2 from "../../../assets/img/video-bg/poster-3.jpg";

class About extends Component {
  render() {
    return (
      <section className="about-section section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="about-video">
                <div
                  className="video-poster-one wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="400ms"
                  style={{ backgroundImage: "url(" + img1 + ")" }}
                ></div>
                <div
                  className="video-poster-two wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="600ms"
                  style={{ backgroundImage: "url(" + img2 + ")" }}
                ></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-10">
              <div className="about-text-two">
                <div className="section-title left-border mb-40">
                  <span className="title-tag">Values of Us</span>
                  <h2 className="title">What we do for you...</h2>
                </div>
                <p>Take a moment to explore what we can offer for you.</p>
                <ul className="about-list">
                  <li>
                    {" "}
                    <i className="fas fa-check" />
                    Implement segregation of duties{" "}
                  </li>
                  <li>
                    {" "}
                    <i className="fas fa-check" />
                    Make sure transactions are authorized
                  </li>
                  <li>
                    {" "}
                    <i className="fas fa-check" />
                    Ensure records are routinely reviewed and reconciled
                  </li>
                  <li>
                    {" "}
                    <i className="fas fa-check" />
                    Document policies and procedures
                  </li>
                  <li>
                    {" "}
                    <i className="fas fa-check" />
                    Provide employees with appropriate guidance
                  </li>
                </ul>
                <Link to="/about" className="main-btn">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
