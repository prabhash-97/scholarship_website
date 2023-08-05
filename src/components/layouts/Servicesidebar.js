import React, { Component } from "react";
import { Link } from "react-router-dom";

import ctabg from "../../assets/img/sidebar/cnt.jpg";

const servicelist = [
  { title: "Founders", route: "/Founders" },
  { title: "How we Start", route: "/History" },
];

class Servicesidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        {/* Services List Widget */}
        <div className="widget cat-widget">
          <h4 className="widget-title">History</h4>
          <ul>
            {servicelist.map((item, i) => (
              <li key={i}>
                <Link to={item.route}>
                  {item.title}
                  <span>
                    <i className="far fa-angle-right" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Widget */}
        <div
          className="widget cta-widget"
          style={{ backgroundImage: "url(" + ctabg + ")" }}
        >
          <h4 className="title"></h4>
          <Link to="/contact" className="main-btn">
            Send Message
          </Link>
        </div>
      </div>
    );
  }
}

export default Servicesidebar;
