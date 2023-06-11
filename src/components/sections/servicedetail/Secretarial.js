import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import Sidebar from "../../layouts/Servicesidebar";
import { useEffect } from "react";
import imgP1 from "../../../assets/img/T1.PNG"
import imgP2 from "../../../assets/img/T2.PNG"
import imgP3 from "../../../assets/img/T3.PNG"

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
        <title>History </title>
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
                Those who have given their support and time to build this society in the past.
                </p>
                <ul className="circle-check-list mt-50 mb-50">
                  <li>
                    <p style={{fontSize:"20px", color:"black", fontWeight:"bold"}}>B. M. F. Jayarathne</p>
                    President (1920-1932) <br/> Vice President (1936-1937)
                    <img src={imgP2} alt="" /> 
                  </li>
                  <li>
                  <p style={{fontSize:"20px", color:"black", fontWeight:"bold"}}>J. P. C. Chandrasena</p>
                    <img src={imgP1} alt="" />
                  </li>
                  <li>
                  <p style={{fontSize:"20px", color:"black", fontWeight:"bold"}}>R. J. Kularthne</p>
                    <img src={imgP3} alt="" />
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
