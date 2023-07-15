import React, { Component } from "react";
import { Link } from "react-router-dom";

import img1 from "../../../assets/img/video-bg/image_11.jpg";
import img2 from "../../../assets/img/video-bg/image_12.jpg";

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
                  <h2 className="title">What we do for students...</h2>
                </div>
                <p>We hope to help students to the best of our ability.</p>
                <ul className="about-list">
                  <li>
                    {" "}
                    <i className="fas fa-check" />
                    Implement a strong educational background{" "}
                  </li>
                  <li>
                    {" "}
                    <i className="fas fa-check" />
                    Make sure students' education is secure
                  </li>
                  <li>
                    {" "}
                    <i className="fas fa-check" />
                    Be sure to help with all necessary education
                  </li>
                  <li>
                    {" "}
                    <i className="fas fa-check" />
                    Treat everyone the same
                  </li>
                  <li>
                    {" "}
                    <i className="fas fa-check" />
                    Provide suitable guidelines
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
