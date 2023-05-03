import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ctaimg from '../../../assets/img/lines/16.png';

class Cta extends Component {
    render() {
        return (
            <section className="cta-aection">
                <div className="container">
                    <div className="cta-wrap bg-img-c" style={{ backgroundImage: "url(" + ctaimg + ")" }}>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="cta-content text-center">
                                    <div className="section-title both-border mb-30">
                                        <span className="title-tag">Back to Fund & Donation Page</span>
                                    </div>
                                    <Link to="/service" className="main-btn main-btn-3">Click Here</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Cta;