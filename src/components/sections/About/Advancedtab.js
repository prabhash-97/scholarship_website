import React, { Component } from "react";
import { Tab, Nav } from "react-bootstrap";

import img from "../../../assets/img/tab-block.jpg";
import imgGoal from "../../../assets/img/goal.png";
import Teamblock from "../Team/Teamblock";

const missiontab = [
  {
    icon: "fas fa-check",
    text: "There are many variations of passages of LoreIpsum available, but the majority have suffered",
  },
  {
    icon: "fas fa-check",
    text: "There are many variations of passages of LoreIpsum available, but the majority have suffered",
  },
  {
    icon: "fas fa-check",
    text: "There are many variations of passages of LoreIpsum available, but the majority have suffered",
  },
];
const historytab = [
  { icon: "fas fa-check", text: "Company Secretarial" },
  { icon: "fas fa-check", text: "Tax Advisory " },
  { icon: "fas fa-check", text: "Business Outsourcing" },
];
const businessgoalstab = [
  {
    icon: "fas fa-check",
    text: "To examine the company's financial statement to ensure the financial books are accurate and compliant with fiscal laws and regulations. ",
  },
  { icon: "fas fa-check", text: "To give attestation engagement." },
  {
    icon: "fas fa-check",
    text: "To form an independent opinion on the financial statements of the audited entity.",
  },
];

class Advancedtab extends Component {
  render() {
    return (
      <section
        className="advanced-tab section-gap"
        style={{ paddingTop: "0px" }}
      >
        <div className="container">
          {/* Tabs Buttons */}
          <div className="tab-buttons">
            <Tab.Container defaultActiveKey="teammember">
              <Nav variant="tabs">
                <Nav.Item>
                  <Nav.Link eventKey="mission">
                    Our Mission &amp; Vision
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="history">Society History</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="businessgoals">Our Goals</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="teammember">Team Members</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="mission">
                  <div className="tab-text-block">
                    <div className="row align-items-center justify-content-center">
                      <div className="col-lg-6 col-md-10">
                        <div className="block-text">
                          <h2 className="title" style={{ textAlign: "center" }}>
                            Our Mission
                          </h2>
                          <p>
                            <b>Our mission</b> is To exceed client expectation
                            by providing premium solutions through a timely,
                            efficient and innovative manner.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-10">
                        <div className="block-text">
                          <h2 className="title" style={{ textAlign: "center" }}>
                            Our Vision
                          </h2>
                          <p>
                            <b>Our vision</b> is To be the most highly respected
                            professional firm in the country. &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="history">
                  <div className="tab-text-block right-image with-right-circle">
                    <div className="row align-items-center justify-content-center">
                      <div className="col-lg-6 col-md-10 order-2 order-lg-1">
                        <div className="block-text">
                          <h2 className="title">Then to Now</h2>
                          <p>
                            RMS has been operating in Sri Lanka since 2009.
                            Today we have a portfolio of 100 clients located
                            across the country. We have experience in diverse
                            industries including textile, construction, hotels,
                            software, retail, manufacturing, financial services
                            and charity. The firm provides services that assist
                            the growth and competitiveness of businesses,
                            including
                          </p>
                          <ul>
                            {historytab.map((item, i) => (
                              <li key={i}>
                                <i className={item.icon} />
                                {item.text}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-10 order-1 order-lg-2">
                        <div className="block-image">
                          <img src={img} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="businessgoals">
                  <div className="tab-text-block left-image">
                    <div className="row align-items-center justify-content-center">
                      <div className="col-lg-6 col-md-10">
                        <div className="block-image">
                          <img src={imgGoal} alt="" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-10">
                        <div className="block-text">
                          <h2 className="title">Our Goals</h2>
                          <p>
                            Auditing is a means of evaluating the effectiveness
                            of a company’s internal controls. Maintaining an
                            effective system of internal controls is vital for
                            achieving a company’s business goals. Our goals are,
                          </p>
                          <ul>
                            {businessgoalstab.map((item, i) => (
                              <li key={i}>
                                <i className={item.icon} />
                                {item.text}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="teammember">
                  <div className="tab-text-block">
                    <div className="row align-items-center justify-content-center">
                      <Teamblock />
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </section>
    );
  }
}

export default Advancedtab;
