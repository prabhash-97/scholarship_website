import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import Sidebar from "../../layouts/Servicesidebar";
import { useEffect } from "react";
import imgP1 from "../../../assets/img/1_.png"

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
        <title>RMS | History </title>
        <meta name="description" content="#" />
      </MetaTags>
      <Header />
      <section className="service-details section-gap">
        <div className="container">
          <div className="row">
            {/* Dettails Content */}
            <div className="col-lg-8">
              <div className="service-details-content">
                <h2 className="title">Founders</h2>
                <p>
                  how found
                </p>
                <ul className="circle-check-list mt-50 mb-50">
                <i className="fas fa-check" />
                  <li>
                    <p>Name</p>
                    <img src={imgP1} alt="" /> 
                  </li>
                  <i className="fas fa-check" />
                  <li>
                    <p>Name</p>
                    <img src={imgP1} alt="" />
                  </li>
                  <i className="fas fa-check" />
                  <li>
                    <p>Name</p>
                    <img src={imgP1} alt="" />
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    Name
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    Name
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    Name
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
