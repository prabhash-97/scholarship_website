import React, { Component } from "react";
import { Link } from "react-router-dom";

import line1 from "../../../assets/img/lines/11.png";
import line2 from "../../../assets/img/lines/12.png";

import icon1 from "../../../assets/img/icons/01.png";
import icon2 from "../../../assets/img/icons/02.png";
import icon3 from "../../../assets/img/icons/03.png";
import icon4 from "../../../assets/img/icons/04.png";

const serviceblock = [
  {
    icon: icon4,
    title: "Company Secretarial Servcies",
    text: "Financial Statements Audit : comply with the ‘Code of Ethics for Professional Accountants’, conduct an audit in accordance with Standards on Auditing, and plan and perform the audit with an attitude of professional skepticism. Special Purposes Audit :  Financial statements review, Agreed upon procedure, Examination on prospective financial information",
  },
  // {
  //   icon: icon2,
  //   title: "Financial Reporting Advisory",
  //   text: " Advisory services of RMS will provide you :  Impact / Gap Analysis on Adoption of Accounting Standards , Accounting Advice on Application of Accounting Standards, Accounting Policy and Disclosure Drafting , Training on Specific Accounting Matters , Technical Presentation of Accounting Standards.",
  // },
  {
    icon: icon3,
    title: "Tax Consulting & Advisory",
    text: "Strategic Tax Planning and Compliance Reporting : Direct tax Compliance for corporate, non-corporate and individual, Indirect tax compliance, Corporate Tax Advisory, Review of transaction for tax optimization and applicable tax relief, Tax efficient business financing. Individual Tax Advisory : Efficient structuring of employee remuneration and benefits.",
  },
  // {
  //   icon: icon2,
  //   title: "Business Valuations and Strategic Advisory",
  //   text: "Do you want to setup a new business or grow your existing business further? By Business Valuations (sale of business / commercial or tax purposes), Strategic / Corporate Planning, Financial Projection, Risk Advisory, System Audit.",
  // },
  {
    icon: icon1,
    title: "Business Outsourcing",
    text: "We manage Business Processes in the most Professional and cost effective manner by reducing Non Value Adding Functions, when performing those In-House. With  Company Secretarial, Payroll Management / Statutory Payments and Return Filling, Bookkeeping and Account Supports.",
  },
  // {
  //   icon: icon3,
  //   title: "Human Resource Management",
  //   text: "Advice on staff related matters and statutory requirements such as EPF, ETF, Gratuity. Training & Development activities of staff are undertaken. Of them are Developing leadership skills, Staff performance reviews, Business skill planning.",
  // },
  {
    icon: icon1,
    title: "Mobile & Software Development",
    text: "Intuitive designs combined with compelling user experience are what makes our apps stand ahead in the digital age.",
  },
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

  // {
  //   icon: icon3,
  //   title: "Software Development",
  //   text: "Our expert in-house team uses cutting edge technologies to build software and custom web applications that are stunning, robust and scalable.",
  // },
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
class Service extends Component {
  render() {
    return (
      <section className="service-section grey-bg service-line-shape section-gap">
        <div className="container">
          {/* Section Title */}
          <div className="section-title text-center both-border mb-50">
            <span className="title-tag">Most Features</span>
            <h2 className="title">
              We Provide Most Exclusive <br /> Service For Business
            </h2>
          </div>
          {/* Services Boxes */}
          <div className="row service-boxes justify-content-center">
            {serviceblock.map((item, i) => (
              <div
                key={i}
                className="col-lg-3 col-sm-6 col-10 wow fadeInRight"
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
                  {/* <p>{item.text}</p> */}
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
