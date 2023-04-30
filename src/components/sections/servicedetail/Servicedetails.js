import React, { Component } from "react";
import Sidebar from "../../layouts/Servicesidebar";

import servicebanner from "../../../assets/img/details/service-01.jpg";
import servicesmallbanner from "../../../assets/img/details/service-02.jpg";

class Servicedetails extends Component {
  render() {
    return (
      <section className="service-details section-gap">
        <div className="container">
          <div className="row">
            {/* Dettails Content */}
            <div className="col-lg-8">
              <div className="service-details-content">
                <h2 className="title">Financial Planning</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatu
                </p>
                <ul className="circle-check-list mt-50 mb-50">
                  <li>
                    <i className="fas fa-check" />
                    Adipisci velit, sed quia non numquam eius modi tempora
                    incidunt ut labore et dolore magnam aliquam quaerat
                    voluptatem enim ad minima veniam quis nostrum
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    Quis autem vel eum iure reprehenderit qui in ea voluptate
                    velit esse quam nmolestiae consequatur, vel illum qui
                    dolorem eum fugiat quo voluptas nulla pariatu
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure praising pain was born and I will give
                    you complete account of the system expound
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
    );
  }
}

export default Servicedetails;
