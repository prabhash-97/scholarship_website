import React, { Component } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

class faqs extends Component {
    render() {
        return (
            <section className="faq-section section-gap">
                <div className="container">
                    {/* FAQ Page Title */}
                    <div className="row faq-page-title mb-60 align-items-center">
                        <div className="col-lg-6">
                            <div className="section-title left-border">
                                <span className="title-tag">FAQ</span>
                                <h2 className="title">Frequently Asked Questions</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 pt-lg-5">
                            <p>
                                But must explain to you how all this mistaken idea of denounc easure and praising pain was born
                                and I will give you a compl the system, and expound the actual teachings of the great explorer
                                the truth,
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
                        <Card>
                            <Accordion.Collapse eventKey="2" className="collapseparent">
                                <Card.Body>
                                It is possible for a subsidiary to claim exemption from audit if the subsidiary accounts form part of a group where the parent company is established in the EEA. There are specific conditions and requirements that will need to be reviewed by your auditor to ensure that your company is entitled to taking the exemption.
                                </Card.Body>
                            </Accordion.Collapse>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                    What if my company is a subsidiary of a group or trades as a group ?
                                    <span className="icons">
                                        <i className="far fa-plus" />
                                    </span>
                                </Accordion.Toggle>
                            </Card.Header>
                        </Card>
                        <Card>
                            <Accordion.Collapse eventKey="3" className="collapseparent">
                                <Card.Body>
                                    An audit can be required if a shareholder or a group of shareholders holding 10% or more of the shares in number or value, request it. They need to contact the registered office in writing at least a month before the financial year end for their request to be actioned by the company directors.
                                </Card.Body>
                            </Accordion.Collapse>
                            <Card.Header>
                                 <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                 Can shareholders request a company audit even if it doesn't breach the audit thresholds ?

                                    <span className="icons">
                                        <i className="far fa-plus" />
                                    </span>
                                </Accordion.Toggle>
                            </Card.Header>
                        </Card>
                        <Card>
                            <Accordion.Collapse eventKey="4" className="collapseparent">
                                <Card.Body>
                                Most charitable companies opt to have an audit under the Companies Act 2006.  However if the company is considered to be a small company then it can elect to take the Companies Act exemption. In this case, the charity legislation becomes relevant and the lower audit threshold  applicable to charities has to then be reviewed to ensure that exemption is still possible. At present, the income threshold for a charity to require an audit is £1M although an Independent Examination may still be required.
                                </Card.Body>
                            </Accordion.Collapse>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                                    My company is also a charity so does that mean i need an audit ?
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
