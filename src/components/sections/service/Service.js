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
    title: "Scholarships Make Education Easier to Access",
    text: "No one should have their education limited due to a lack of household income. ",
  },
  {
    icon: icon4,
    title: "Students That Win Scholarships Can Access Extensive Support",
    text: "Winning a scholarship nets you more than just a healthy bank balance.",
  },
  {
    icon: icon1,
    title: "Helping Students Focus on Learning",
    text: "Getting a scholarship that eases the burden of college will help you focus more while studying.",
  },
];

const serviceMain = [
  {
    icon: icon4,
    title: "Company Secretarial Servcies",
    text: "Our company secretarial services ensure that, our client’s business complies with all legal and statutory requirements that are applicable and mitigate client’s time and burden to keep up with the multitudes of statutory records",
    route: "/Founders",
  },
  {
    icon: icon3,
    title: "Tax Consulting & Advisory Services",
    text: "We provide tax consultancy and compliance services understanding the diverse taxation systems and offer the best solutions in estimating various tax liabilities, paying them on due dates and filing tax returns quickly with zero hassle for the taxable persons",
    route: "/History",
  },

  {
    icon: icon1,
    title: "Business Outsourcing",
    text: "One of the most important activities in any type of businesses is to keep proper record on the financial transactions, routine or occasional with adequate references to supporting documents on a very timely basis, Financial reports are prepared for management purpose",
    route: "/Outsourcing",
  },
];
class Service extends Component {
  render() {
    return (
      <section className="service-section grey-bg service-line-shape section-gap">
        <div className="container">
          {/* Section Title */}
          <div className="section-title text-center both-border mb-50">
            <span className="title-tag">Get to Know about our Funders</span>
            <h2 className="title">
            We Help Students Who Need Support <br /> Succeed In Their Education
            </h2>
          </div>
          {/* Services Boxes */}
          <div className="row service-boxes justify-content-center">

            {serviceblock.map((item, i) => (
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

export default Service;
