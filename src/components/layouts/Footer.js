import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.png";
import shape1 from "../../assets/img/lines/01.png";
import shape2 from "../../assets/img/lines/02.png";

import img1 from "../../assets/img/instagram/01.jpg";
import img2 from "../../assets/img/instagram/02.jpg";
import img3 from "../../assets/img/instagram/03.jpg";
import img4 from "../../assets/img/instagram/04.jpg";
import img5 from "../../assets/img/instagram/05.jpg";
import img6 from "../../assets/img/instagram/06.jpg";
const instapost = [
  { img: img1 },
  { img: img2 },
  { img: img3 },
  { img: img4 },
  { img: img5 },
  { img: img6 },
];
class Footer extends Component {
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    return (
      <footer>
        <div className="container">
          <div className="footer-widget">
            <div className="row">
              <div className="col-lg-4 col-sm-5 order-1">
                <div className="widget site-info-widget">
                  <div className="footer-logo">
                    <img src={logo} alt="" />
                  </div>
                  <p>
                    Help each other &amp; for better future
                  </p>
                  <ul className="social-links">
                    <li>
                      
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8 col-sm-7 order-2">
                <div className="widget newsletter-widget">
                  <h4 className="widget-title">Join with Us</h4>
                  <div className="newsletter-form">
                    <form action="#">
                    Via Social Media : <a
                        href=" "
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <br/>
                      Via Email : lankashishyadara@test.com
                      <button type="submit" className="main-btn">
                        <Link className="main-btn main-btn-3" to="/contact">Contact Us</Link>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 order-3">
                <div className="widget nav-widget">
                  <h4 className="widget-title">Quick Links</h4>
                  <ul>
                    <li>
                      <Link to="/about">Our History</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/service">Fund & Donations</Link>
                    </li>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/news">News</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8 order-lg-4 order-5">
                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <div className="widget nav-widget">
                      <h4 className="widget-title">History</h4>
                      <ul>
                        <li>
                          <Link to="/Secretarial">
                            Founders
                          </Link>
                        </li>
                        <li>
                          <Link to="/Tax">How We Start</Link>
                        </li>
                        <li>
                          <Link to="/portfolio">Fund List</Link>
                        </li>
                        <li>
                          <Link to="/portfoliodetail">On Going Projects</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="widget contact-widget">
                      <h4 className="widget-title">Contact Us</h4>
                      <p>Contact us today!</p>
                      <ul className="contact-infos">
                        {/*<li>
                          <Link>
                            <i className="far fa-phone" />
                            +94 77 994 7204
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <i className="far fa-phone" />
                            +94 34 227 2529
                          </Link>
                        </li>*/}
                        <li>
                          <a href="tel: +94 00 000 0000">
                            <i className="far fa-phone" />
                            +94 00 000 0000
                          </a>
                        </li>
                        <li>
                          <a href="tel: +94 00 000 0000">
                            <i className="far fa-phone" />
                            +94 00 000 0000
                          </a>
                        </li>
                        <li>
                          <Link to="contact@test.com">
                            <i className="far fa-envelope-open" />{" "}
                            info@test.com
                          </Link>
                        </li>
                        <li>
                          <i className="far fa-map-marker-alt" /> 18/39,
                          <br />{" "}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; E.D. Dabare Mawatha, Colombo 05
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <p className="copyright-text">
              <span>
                Copyright@<Link to="#">kprabhash</Link> 2023
              </span>
              <span>All Right Reserved Design By kprabhash</span>
            </p>
            <Link
              to="#"
              className="back-to-top"
              onClick={() => this.scrollToTop()}
            >
              <i className="far fa-angle-up" />
            </Link>
          </div>
        </div>
        {/* Lines */}
        <img src={shape1} alt="line" className="line-one" />
        <img src={shape2} alt="line" className="line-two" />
      </footer>
    );
  }
}

export default Footer;
