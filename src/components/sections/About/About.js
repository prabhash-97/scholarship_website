import React, { Component } from 'react';

import illustration from '../../../assets/img/illustration/01.png';

class About extends Component {
    render() {
        return (
            <section className="about-section about-illustration-img section-gap">
                <div className="container">
                    <div className="illustration-img">
                        <img src={illustration} alt="" />
                    </div>
                    <div className="row no-gutters justify-content-lg-end justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="about-text">
                                <div className="section-title left-border mb-40">
                                    <span className="title-tag">About Us</span>
                                    <h2 className="title">We are a Great Family </h2>
                                </div>
                                <p className="mb-25">
                                    In 2023 we have completed the 100th anniversary of our journey. we are non profit soceiy. 
                                    we all do this for  only support students to therir education. we have strong 
                                    relations and collaboration all over the country and we hope moreexapnd our network with more relatives. 
                                </p>
                                <ul className="about-list">
                                    <li> <i className="far fa-check" /> Supportive</li>
                                    <li> <i className="far fa-check" /> Trustworthy</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
