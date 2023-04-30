import React, { Component } from "react";

import processbg1 from "../../../assets/img/video-bg/01.jpg";
import processbg2 from "../../../assets/img/video-bg/02.jpg";

const processlist = [
  {
    icon: "fal fa-phone",
    number: "01",
    title: "Contact Us",
    text: "Opening meeting with you with a warm introduction about the audit.",
  },
  {
    icon: "fal fa-coffee",
    number: "02",
    title: "Meet With Advisors",
    text: "Meet each and every departments and Gather information about audit subject.",
  },
  {
    icon: "fal fa-check-circle",
    number: "03",
    title: "Achieve Your Goals",
    text: "Determine audit criteria and perform & document audit methodologies to identify controls and assess control risk and Finalize report.",
  },
];

class Workingprocess extends Component {
  render() {
    return (
      <section className="working-process-section grey-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10 order-lg-1 order-2">
              <div className="process-text">
                {/* Section Title */}
                <div className="section-title left-border mb-30">
                  <span className="title-tag">Working Process</span>
                  <h2 className="title">How Do We Work</h2>
                </div>
                <p>
                  Personalized Customer Service Solution For Clients Seeking
                  Audit Services.
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
