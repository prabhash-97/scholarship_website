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
                                    Our Partners and staff members are extremely trustworthy, loyal and
                                    committed resources and we have a high degree of confidence in every one of them.
                                </p>
                                <p>
                                    We have experience in handling work of an extremely sensitive nature for our existing clientele
                                    including Payroll and hence is well
                                    experienced in maintaining confidentiality and handling work with a high degree of care.
                                </p>
                                <ul className="about-list">
                                    <li> <i className="far fa-check" /> Professional Service</li>
                                    <li> <i className="far fa-check" /> High Quality with Integrity</li>
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
