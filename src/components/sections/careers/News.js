import React, { Component } from "react";
import { Link } from "react-router-dom";

import line1 from "../../../assets/img/lines/11.png";
import line2 from "../../../assets/img/lines/12.png";

import icon1 from "../../../assets/img/icons/01.png";
import icon2 from "../../../assets/img/icons/02.png";
import icon3 from "../../../assets/img/icons/03.png";
import icon4 from "../../../assets/img/icons/04.png";
import { map } from "jquery";

const serviceblock = [
  {
    icon: icon2,
    title: "News",
    text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
  },
  {
    icon: icon4,
    title: "News",
    text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
  },
  {
    icon: icon1,
    title: "News",
    text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content..",
  },
  {
    icon: icon3,
    title: "News",
    text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
  },
  {
    icon: icon2,
    title: "News",
    text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
  },
  {
    icon: icon1,
    title: "News",
    text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
  },
];

const serviceMain = [
  {
    icon: icon4,
    title: "News 1",
    text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.  ",
    route: "/Secretarial",
  },
  {
    icon: icon3,
    title: "News",
    text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    route: "/Tax",
  },

  {
    icon: icon1,
    title: "News",
    text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
    route: "/Outsourcing",
  },
];
class News extends Component {
  render() {
    return (
      <section className="service-section grey-bg service-line-shape section-gap">
        <div className="container">
          {/* Services Boxes */}
          <div className="row service-boxes justify-content-center">
            {serviceMain.map((item, i) => (
              <div
                key={i}
                className="col-lg-4 col-sm-6 col-10 wow fadeInRight"
                data-wow-duration="1500ms"
                data-wow-delay="700ms"
              >
                <div className="service-box-three border-0">
                  <div className="icon">
                    <img src={item.icon} alt="" />
                  </div>
                  <h3>
                    <Link style={{ cursor: "default" }}>{item.title}</Link>
                  </h3>
                  <p>{item.text}</p>
                  <br />
                  <Link
                    to={item.route}
                    className="main-btn"
                    style={{ lineHeight: "60px", marginBottom: "10px" }}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="line-one">
          <img src={line2} alt="line-shape" />
        </div>
        <div className="line-two">
          <img src={line1} alt="line-shape" />
        </div>
      </section>
    );
  }
}

export default News;
