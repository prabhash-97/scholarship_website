import React, { Component } from "react";
import { Link } from "react-router-dom";

import line1 from "../../../assets/img/lines/12.png";
import line2 from "../../../assets/img/lines/11.png";

const serviceblock = [
  { icon: "flaticon-pie-chart", title: "Company Secretarial Servcies" },
  { icon: "flaticon-money", title: "Tax Consulting/ Advisory" },
  { icon: "flaticon-chart", title: "Business Outsourcing" },
  { icon: "flaticon-setup", title: "Web development" },
  { icon: "flaticon-diagram", title: "UI/UX Design" },
  { icon: "flaticon-teamwork-1", title: "Mobile Development" },
  { icon: "flaticon-teamwork-1", title: "Software Development" },
  { icon: "flaticon-setup", title: "Digital Marketing" },
  { icon: "flaticon-money", title: "Branding" },
];
class Service extends Component {
  render() {
    return (
      <section className="service-section shape-style-two service-line-shape section-gap grey-bg">
        <div className="container">
          {/* Section Title */}
          <div className="section-title text-center both-border mb-50">
            <span className="title-tag">Company Services</span>
            <h2 className="title">
              We Provide Most Exclusive <br /> Service For Business
            </h2>
          </div>
          {/* Services Boxes */}
          <div className="row service-boxes justify-content-center">
            {serviceblock.map((item, i) => (
              <div
                key={i}
                className="col-lg-4 col-sm-6 col-10 wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="1000ms"
              >
                <div
                  className="service-box-two text-center"
                  style={{ paddingLeft: "9px", paddingRight: "9px" }}
                >
                  <div className="icon">
                    <i className={item.icon} />
                  </div>
                  <h3>
                    <Link style={{ cursor: "default" }}>{item.title}</Link>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="line-one">
          <img src={line1} alt="line-shape" />
        </div>
        <div className="line-two">
          <img src={line2} alt="line-shape" />
        </div>
      </section>
    );
  }
}

export default Service;
