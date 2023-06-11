import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Navmenu from "./Navmenu";
import OffCanvas from "./Offcanvas";
import classNames from "classnames";

import logo from "../../assets/img/logo.png";

class Headertwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classmethod: false,
      togglemethod: false,
    };
    this.addClass = this.addClass.bind(this);
    this.removeClass = this.removeClass.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
  }
  addClass() {
    this.setState({
      classmethod: true,
    });
  }

  removeClass() {
    this.setState({
      classmethod: false,
    });
  }
  toggleClass() {
    this.setState({
      togglemethod: !this.state.togglemethod,
    });
  }
  componentDidMount() {
    window.addEventListener(
      "resize",
      () => {
        this.setState({
          isMobile: window.innerWidth < 991,
        });
      },
      false
    );
    window.addEventListener(
      "load",
      () => {
        this.setState({
          isMobile: window.innerWidth < 991,
        });
      },
      false
    );
    // Sticky header
    window.addEventListener(
      "scroll",
      () => {
        this.setState({
          isTop: window.scrollY > 110,
        });
      },
      false
    );
  }
  render() {
    const mobileactive = this.state.isMobile ? "breakpoint-on" : "";
    const stickyheader = this.state.isTop ? "sticky-on" : "";
    return (
      <Fragment>
        <header className={`header-two sticky-header ${stickyheader}`}>
          {/* Header Topbar */}
          <div className="header-topbar">
            <div className="container-fluid container-1600">
              <div className="header-topbar-inner d-md-flex align-items-center justify-content-between">
                {/* Contact Info */}
                <ul className="contact-info">
                  <li>
                    {/*<Link to="#">
                      <i className="far fa-phone" />
                      +94 34 227 2529
                    </Link>*/}
                    <a href="tel: +94 00 000 0000">
                      <i className="far fa-phone" />
                      +94 00 000 0000
                    </a>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="far fa-envelope-open" />
                      lankass@.com
                    </Link>
                  </li>
                  <li>
                    <i className="far fa-map-marker-alt" />
                    No 000/A, Nugegoda
                  </li>
                </ul>
                {/* Social Links */}
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
          </div>
          {/* Header Menu  */}
          <div className="header-nav sticky-nav">
            <div className="container-fluid container-1600">
              <div className={`nav-container ${mobileactive}`}>
                {/* Site Logo */}
                <div className="site-logo">
                  <Link to="/hometwo">
                    <img src={logo} alt="Logo" />
                  </Link>
                </div>
                {/* Main Menu */}
                <div
                  className={classNames(
                    "nav-menu d-lg-flex align-items-center",
                    { "menu-on": this.state.togglemethod }
                  )}
                >
                  {/* Navbar Close Icon */}
                  <div className="navbar-close" onClick={this.toggleClass}>
                    <div className="cross-wrap">
                      <span />
                      <span />
                    </div>
                  </div>
                  {/* Mneu Items */}
                  <div className="menu-items">
                    <Navmenu />
                  </div>
                  {/* Pushed Item */}
                  <div className="nav-pushed-item" />
                </div>
                {/* Navbar Extra  */}
                <div className="navbar-extra d-flex align-items-center">
                  {/* off canvas menu toggler*/}
                  <div className="offcanvas-toggler" onClick={this.addClass}>
                    <span>
                      <span />
                      <span />
                      <span />
                    </span>
                  </div>
                  {/* Navbar Toggler */}
                  <div
                    className={classNames("navbar-toggler", {
                      active: this.state.togglemethod,
                    })}
                    onClick={this.toggleClass}
                  >
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div
          className={classNames("offcanvas-wrapper", {
            "show-offcanvas": this.state.classmethod,
          })}
        >
          <div
            className={classNames("offcanvas-overly", {
              "show-overly": this.state.classmethod,
            })}
            onClick={this.removeClass}
          />
          <div className="offcanvas-widget">
            <Link to="#" className="offcanvas-close" onClick={this.removeClass}>
              <i className="fal fa-times" />
            </Link>
            <OffCanvas />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Headertwo;
