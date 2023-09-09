import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import Sidebar from "../../layouts/Servicesidebar";
import { useEffect } from "react";

export default function Tax() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <Fragment>
      <MetaTags>
        <title>Histoty </title>
        <meta name="description" content="#" />
      </MetaTags>
      <Header />
      <section className="service-details section-gap">
        <div className="container">
          <div className="row">
            {/* Dettails Content */}
            <div className="col-lg-8">
              <div className="service-details-content">
                <h2 className="title">How We Start???</h2>
                <p>
                Based on Ranasgalle thero's saying, Mr. B M Jayarathne has started this scholarship.
                           The main objective of that was to give support to students in their education. 
                           Also, to give education to all children not only based on money or social status. 
                           Three people came forward to build this scholarship society and they started this 
                           society on 31 st of July 1920 in Jinaraja Vidyalay Kollupitiya. After that, with more members' collaboration, this society started to build strong.
                </p>
                <ul className="circle-check-list mt-50 mb-50">
                  <li>
                    <i className="fas fa-check" />
                    K. D, Fernando has started this 1 lakh fund with Rs 50
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    As a first decision, they had decided on Rs 3.50 as the membership fee for 1-year normal membership. After that, Rs 2.50 should be paid along with Rs 50 for fixed membership.
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    After a long time, it has been decided that fixed membership is available for Rs 500 or more.
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    The society's first donation was in 1933 when it gave Rs.108 per student for higher education and later Rs.50 per law student.
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    According to line 16 of the Societies Act, of 1891, the society is registered as a non-profit making company as "Lanka Sishyadara Society LTD".
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    Now we have a total of 12 million funds and more than 100 student connections.
                  </li>
                </ul>
              </div>
            </div>
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
