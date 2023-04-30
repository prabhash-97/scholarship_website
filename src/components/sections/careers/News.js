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
    title: "Web development",
    text: "Starting from basic website designs to highly complex business website apps and design solutions, we will customize the best of web development solutions for you.",
  },
  {
    icon: icon4,
    title: "UI/UX Design",
    text: "In today’s age of information overload, we’ve always been attracted to finding better ways to simplify the communication of heavy content.",
  },
  {
    icon: icon1,
    title: "Mobile App Development",
    text: "Intuitive designs combined with compelling user experience are what makes our apps stand ahead in the digital age.",
  },
  {
    icon: icon3,
    title: "Software Development",
    text: "Software development ensures smooth experience with less wait time for your clients and decreases your business expenses. Try Hike Point of sale today!",
  },
  {
    icon: icon2,
    title: "Digital Marketing",
    text: "Developing a long-term and reliable marketing strategy will flourish and live a longer life with your customers. We are empowering brands with digital marketing.",
  },
  {
    icon: icon1,
    title: "Branding",
    text: "Branding is one of the most crucial aspects of any business, large or small. An effective brand can give you a significant edge in today’s highly competitive market.",
  },
];

const serviceMain = [
  {
    icon: icon4,
    title: "Company Secretarial Servcies",
    text: "Our company secretarial services ensure that, our client’s business complies with all legal and statutory requirements that are applicable and mitigate client’s time and burden to keep up with the multitudes of statutory records",
    route: "/Secretarial",
  },
  {
    icon: icon3,
    title: "Tax Consulting & Advisory Services",
    text: "We provide tax consultancy and compliance services understanding the diverse taxation systems and offer the best solutions in estimating various tax liabilities, paying them on due dates and filing tax returns quickly with zero hassle for the taxable persons",
    route: "/Tax",
  },

  {
    icon: icon1,
    title: "Business Outsourcing",
    text: "One of the most important activities in any type of businesses is to keep proper record on the financial transactions, routine or occasional with adequate references to supporting documents on a very timely basis, Financial reports are prepared for management purpose",
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
