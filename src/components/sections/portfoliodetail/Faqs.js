import React, { Component } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

import illustration from '../../../assets/img/illustration/side.png';

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let monthIndex = (new Date().getMonth());
let monthName = monthNames[monthIndex];

class faqs extends Component {
    render() {
        return (
            <section className="faq-section section-gap">
                <div className="container">
                    {/* FAQ Page Title */}
                    <div className="row faq-page-title mb-60 align-items-center">
                        <div className="col-lg-6">
                            <div className="section-title left-border">
                                <span className="title-tag">Up Coming Events</span>
                                <h2 className="title">Plan for This Month  2023 {monthName}</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 pt-lg-5">
                            <p>
                            <img src={illustration} alt="" />
                            </p>
                        </div>
                    </div>
                    {/* FAQ LOOP */}
                    <Accordion defaultActiveKey="0" className="faq-loop grey-header" id="faqAccordion">
                        <Card>
                            <Accordion.Collapse eventKey="0" className="collapseparent">
                                <Card.Body>
                                The audit requirement derives from the legislation “The Companies, Partnerships and Groups (Accounts and Reports) Regulations 2015” and “The Charities Act 2011”.<br/>As the legislation has changed to bring the audit of companies in line with company size thresholds the regulations are easier to apply, but we recommend that directors review their audit requirements with a registered Independent Auditor.
                                </Card.Body>
                            </Accordion.Collapse>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Do you need an audit of your financial statements
                                    <span className="icons">
                                        <i className="far fa-plus" />
                                    </span>
                                </Accordion.Toggle>
                            </Card.Header>
                        </Card>
                        <Card>
                            <Accordion.Collapse eventKey="1" className="collapseparent">
                                <Card.Body>
                                An audit is an examination of relevant evidence that supports the numbers and disclosures in financial statements. The auditor will also assess the significant judgements and estimates made by the directors of the company in preparing those financial statements. The auditing framework that auditors use are the International Standards on Auditing (UK & Ireland) and in order to carry out this work the auditor must be a member of any appropriate regulatory body such as the  ICAEW or ACCA.
                                </Card.Body>
                            </Accordion.Collapse>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    What is an audit and who can perform one ?
                                    <span className="icons">
                                        <i className="far fa-plus" />
                                    </span>
                                </Accordion.Toggle>
                            </Card.Header>
                        </Card>
                    </Accordion>
                    {/* End Faq LOOP */}
                </div>
            </section>
        );
    }
}

export default faqs;
