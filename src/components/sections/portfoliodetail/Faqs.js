import React, { Component } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

import illustration from '../../../assets/img/illustration/side1.jpg';

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
                                We are planning to hold a series of meetings in the southern province next month
                                </Card.Body>
                            </Accordion.Collapse>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Places , Time 
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
