import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.jpg";

class Offcanvas extends Component {
  render() {
    return (
      <Fragment>
        {/* About Widget */}
        <div className="widget about-widget">
          <div className="logo mb-30">
            <img src={logo} alt="" />
          </div>
          <p>
          All of us are doing this only to help the students in their education. We have strong relationships and collaborations across the country and we look forward to further expanding our network with more relatives.
          </p>
        </div>
        {/* Contact information Widget */}
        <div className="widget contact-info-widget">
          <h5 className="widget-title">Contact Us</h5>
          <ul>
            <li>
              <i className="far fa-map-marked-alt" />
              Colombo 05
            </li>
            <li>
              <i className="far fa-phone" />
              +94 71 684 5668 
            </li>
            <li>
            <i className="fab fa-facebook-f" />
              www.facebook.com/lankasishya
            </li>
          </ul>
        </div>
        {/* Social Link */}
        <div className="widget social-link">
          <h5 className="widget-title">Follow us</h5>
          <ul>
            <li>
              <Link to="#">
                <i className="fab fa-facebook-f" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fab fa-twitter" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fab fa-behance" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fab fa-linkedin" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fab fa-google" />
              </Link>
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default Offcanvas;
