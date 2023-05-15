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
        <title>RMS | Histoty </title>
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
                Based on Ranasgalle thero's saying, Mr. B M Jayarathne had started this scholarship.
                           The main objective of that was to give support to students in their education. 
                           To give education to all children not only based on money or social status three people came forward 
                           to build this scholarship society. 
                           They started this society 31 st of July 1920 in Jinaraja Vidyalay Kollupitiya.
                </p>
                <ul className="circle-check-list mt-50 mb-50">
                  <li>
                    <i className="fas fa-check" />
                    Mr. K D Pranandu has started this 1 lakh fund with Rs. 50. 
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    As first discussions, they had decided on Rs 3.50 as members fees for 1-year normal membership. after that, need to pay Rs. 2.50 with Rs. 50 for fixed membership.
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    After a long time had decided can get a fixed membership for Rs. 500 or above.
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    As the first donation, in 1933 paid Rs. 108 to a student for his higher education, then paid Rs. 50 for a law student.
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    According to the 1891 Society Act's 16th line, this society had registered as "Sima Sahitha Lanka Shishshayadara Samithiya" as a non-profit company.
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    Now we have a 12 million fund collection and over 100 students gathering.
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
