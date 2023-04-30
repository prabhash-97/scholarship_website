import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import Sidebar from "../../layouts/Servicesidebar";
import { useEffect } from "react";

export default function Secretarial() {
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
                <h2 className="title">Company Secretarial Servcies</h2>
                <p>
                  Our company secretarial services ensure that, our client’s
                  business complies with all legal and statutory requirements
                  that are applicable and mitigate client’s time and burden to
                  keep up with the multitudes of statutory records. Our Services
                  Includes
                </p>
                <ul className="circle-check-list mt-50 mb-50">
                  <li>
                    <i className="fas fa-check" />
                    Company Incorporation
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    Company dissolution and liquidation
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    Company mergers and amalgamations
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    Branch registration and compliance services
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    Annual compliance services including preparing & filing
                    annual returns
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    Convening and handling board/ shareholders’ meetings
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    Attending to formalities for the fulfillment of requirements
                    laid down in the Companies Act
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    Providing a registered office for companies for statutory
                    registrations
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    Statutory registers maintenance
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    Preparing resolutions
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    Share transfer/allotments/ buyback managing
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    Managing bonus/ right issues
                  </li>
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
