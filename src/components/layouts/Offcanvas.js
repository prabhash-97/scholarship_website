import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.png";

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
            We have experience in handling work of an extremely sensitive nature
            for our existing clientele including Payroll and hence is well
            experienced in maintaining confidentiality and handling work with a
            high degree of care.
          </p>
        </div>
        {/* Contact information Widget */}
        <div className="widget contact-info-widget">
          <h5 className="widget-title">Contact Us</h5>
          <ul>
            <li>
              <i className="far fa-map-marked-alt" />
              Aluthgama
            </li>
            <li>
              <i className="far fa-phone" />
              +94 77 994 7204 (24/7 Support Line)
            </li>
            <li>
              <i className="far fa-envelope-open" />
              info@rmssec.com
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
