import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.png";
import shape1 from "../../assets/img/lines/09.png";
import shape2 from "../../assets/img/lines/10.png";

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
class Footertwo extends Component {
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    return (
      <footer className="grey-bg-footer">
        <div className="container">
          <div className="footer-widget">
            <div className="row">
              <div className="col-lg-4 col-sm-5 order-1">
                <div className="widget site-info-widget">
                  <div className="footer-logo">
                    <img src={logo} alt="" />
                  </div>
                  <p>
                    Power of choice is untrammelled &amp; when nothing prevents
                    our being able
                  </p>
                  <ul className="social-links">
                    <li>
                      <a
                        href="https://www.facebook.com/RISTONMANAGEMENTSERVICES/"
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-behance" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-dribbble" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8 col-sm-7 order-2">
                <div className="widget newsletter-widget">
                  <h4 className="widget-title">Subscribe Our Newsletters</h4>
                  <div className="newsletter-form">
                    <form action="#">
                      <input type="email" placeholder="Enter Your Email" />
                      <button type="submit" className="main-btn">
                        Subscribe Now
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
                      <Link to="/about">Company History</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/service">Popular Services</Link>
                    </li>
                    <li>
                      <Link to="/about">About Company</Link>
                    </li>
                    <li>
                      <Link to="/careers">Careers</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8 order-lg-4 order-5">
                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <div className="widget nav-widget">
                      <h4 className="widget-title">Services</h4>
                      <ul>
                        <li>
                          <Link to="/Secretarial">
                            Company Secretarial Servcies
                          </Link>
                        </li>
                        <li>
                          <Link to="/Tax">Tax Consulting & Advisory</Link>
                        </li>
                        <li>
                          <Link to="/Outsourcing">Business Outsourcing</Link>
                        </li>
                        <li>
                          <Link to="/service">Software Development</Link>
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
                        </li>*/}
                        <li>
                          <a href="tel: +94 77 994 7204">
                            <i className="far fa-phone" />
                            +94 77 994 7204
                          </a>
                        </li>
                        <li>
                          <a href="tel: +94 77 994 7204">
                            <i className="far fa-phone" />
                            +94 34 227 2529
                          </a>
                        </li>
                        {/*<li>
                          <Link>
                            <i className="far fa-phone" />
                            +94 34 227 2529
                          </Link>
                        </li>*/}
                        <li>
                          <Link to="contact@rmservices.com">
                            <i className="far fa-envelope-open" />{" "}
                            info@rmssec.com
                          </Link>
                        </li>
                        <li>
                          <i className="far fa-map-marker-alt" /> No 202/A,
                          Alawathugoda Estate, <br />{" "}
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Puwakwaththa, Dharga
                          Town
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-4 col-sm-6 order-lg-5 order-4">
                <div className="widget insta-feed-widget">
                  <h4 className="widget-title">Follow Instagram</h4>
                  <div className="insta-images">
                    {instapost.map((item, i) => (
                      <div
                        key={i}
                        className="insta-img"
                        style={{ backgroundImage: "url(" + item.img + ")" }}
                      >
                        <Link to="#">
                          <i className="fab fa-instagram" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="footer-copyright">
            <p className="copyright-text">
              <span>
                Copyright@<Link to="#">Codernet</Link> 2021
              </span>
              <span>All Right Reserved Design By Codernet</span>
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
        <img src={shape1} alt="line" className="line-three" />
        <img src={shape2} alt="line" className="line-four" />
      </footer>
    );
  }
}

export default Footertwo;
