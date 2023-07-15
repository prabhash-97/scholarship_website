import React, { Component } from "react";

import processbg1 from "../../../assets/img/video-bg/image_18.jpeg";
import processbg2 from "../../../assets/img/video-bg/image_17.jpg";

const processlist = [
  {
    icon: "fal fa-check",
    number: "01",
    title: "NONPROFITS",
    text: "We are a nonprofit that supports mainly students by connecting them to donors. We're a partner, not just a platform.",
  },
  {
    icon: "fal fa-gift",
    number: "02",
    title: "DONORS",
    text: "You feel great when you get updates about how your money is put to work by a trusted organization.",
  },
  {
    icon: "fal fa-globe",
    number: "03",
    title: "OUR IMPACT",
    text: "Nonprofits have the funding to listen to feedback and try new ways to work better.",
  },
];

class Workingprocess extends Component {
  render() {
    return (
      <section className="working-process-section">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10 order-lg-1 order-2">
              <div className="process-text">
                {/* Section Title */}
                <div className="section-title left-border mb-30">
                  <span className="title-tag">Donate to charity</span>
                  <h2 className="title">How It Works</h2>
                </div>
                <p>
                  Do something incredible today for future growth.
                </p>
                {/* process-loop */}
                <div className="process-loop">
                  {processlist.map((item, i) => (
                    <div
                      key={i}
                      className="single-process wow fadeInUp"
                      data-wow-duration="1500ms"
                      data-wow-delay="400ms"
                    >
                      <div className="icon">
                        <i className={item.icon} />
                        <span>{item.number}</span>
                      </div>
                      <div className="content">
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-10 order-lg-2 order-1">
              <div
                className="process-video bg-img-c"
                style={{ backgroundImage: "url(" + processbg1 + ")" }}
              >
                <div
                  className="video bg-img-c wow fadeInRight"
                  data-wow-duration="1500ms"
                  data-wow-delay="400ms"
                  style={{ backgroundImage: "url(" + processbg2 + ")" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="working-circle" />
      </section>
    );
  }
}

export default Workingprocess;
