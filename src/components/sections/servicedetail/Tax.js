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
                  Sri Lankan taxable persons are often plagued with worries
                  involving tax compliance and ensuring that all tax forms are
                  filed, and payments paid to the respective authorities basis
                  the prevailing tax laws. We provide these tax consultancy and
                  compliance services understanding the diverse taxation systems
                  and offer the best solutions in estimating various tax
                  liabilities, paying them on due dates and filing tax returns
                  quickly with zero hassle for the taxable persons
                </p>
                <ul className="circle-check-list mt-50 mb-50">
                  <li>
                    <i className="fas fa-check" />
                    Start Members
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    Start Year and Place
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    Indirect tax compliance.
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    Corporate Tax Advisory
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    Review of transaction for tax optimization and applicable
                    tax relief Group tax efficiency review.
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    Tax planning and advice on,
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    Corporate restructuring
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    Tax efficient business financing
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    Tax efficient treasury and cash management
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    Capital allowance and expenditure decisions
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    Individual Tax Advisory
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    Registration with tax authorities & employee share option
                    schemes
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    Tax efficient treasury and cash management
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
