import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import Sidebar from "../../layouts/Servicesidebar";
import { useEffect } from "react";

export default function Outsourcing() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <Fragment>
      <MetaTags>
        <title>RMS | Services </title>
        <meta name="description" content="#" />
      </MetaTags>
      <Header />
      <section className="service-details section-gap">
        <div className="container">
          <div className="row">
            {/* Dettails Content */}
            <div className="col-lg-8">
              <div className="service-details-content">
                <h2 className="title">Business Outsourcing</h2>
                <p>
                  One of the most important activities in any type of businesses
                  is to keep proper record on the financial transactions,
                  routine or occasional with adequate references to supporting
                  documents on a very timely basis, based on which periodic
                  financial reports are prepared for management purpose which
                  underpins decision making process of the business and
                  compliance with regulatory requirements.
                </p>

                <p>
                  All of these services are done through computerized accounting
                  packages and work can be completed at your premises or
                  remotely at your discretion and includes;
                </p>
                <ul className="circle-check-list mt-50 mb-50">
                  <li>
                    <i className="fas fa-check" />
                    Preparation and maintenance of all Accounting Records such
                    as source documents, primary books and sub ledgers etc, in a
                    particular way based on which summaries, breakups, analyses
                    or reference can be easily done at any given point of time
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    Preparation of periodic Management Accounts timely and
                    accurately in a client specific format or otherwise
                    beneficial to client under any circumstance or deadline.
                  </li>
                </ul>

                <p>
                  Financial statements and other financial/accounting reports
                  are the tools of revealing the Health of a Business. <br />
                  Most of us know almost nothing about accounting from
                  experience. However, you have to know something about
                  accounting if you want to understand the business. It is
                  almost impossible to run a business effectively without being
                  able to prepare, read, understand and analyze financial
                  statements and other financial/accounting reports. We do
                  provide all of your Accountancy requirements efficiently and
                  effectively including;
                </p>

                <ul className="circle-check-list mt-50 mb-50">
                  <li>
                    <i className="fas fa-check" />
                    Preparation of Annual Financial Statements, based on the all
                    applicable accounting standards and laws and regulations for
                    publication purpose or any other purpose such as income tax
                    purposes, internal management purpose, bank loans purpose
                    etc
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    Preparation of variance analysis reports by comparing actual
                    results with budgets/plans and commenting on the factual
                    findings for management action and provision of other
                    cost/management accounting services
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    Preparation annual or periodic budgets for internal
                    management purposes and update them periodically.
                  </li>
                </ul>

                <p>
                  Any other financial reports that management of a business
                  requires time to time in their decision-making purpose.
                </p>

                <ul className=" mt-40 mb-50">
                  <li>✔️What we do for you?</li>
                  <li>✔️Implement segregation of duties</li>
                  <li>
                    ✔️Ensure records are routinely reviewed and reconciled
                  </li>
                  <li>
                    ✔️Make certain that equipment, inventories, cash and other
                    property are secured physically
                  </li>
                  <li>
                    ✔️Provide employees with appropriate training and guidance
                  </li>
                  <li>✔️Document policies and procedures</li>
                </ul>
              </div>
            </div>
            {/* Sidebar */}
            <div className="col-lg-4 col-md-8">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
}
