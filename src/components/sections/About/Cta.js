import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ctabg from '../../../assets/img/lines/16.png';

class Cta extends Component {
    render() {
        return (
            <section className="cta-aection">
                <div className="container mb-5">
                    <div className="cta-wrap mt-negative bg-img-c" style={{ backgroundImage: "url(" + ctabg + ")" }}>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="cta-content text-center">
                                    <div className="section-title both-border mb-30">
                                        <span className="title-tag">Get Know more about History</span>
                                    </div>
                                    <Link to="/History" className="main-btn main-btn-3">Explore More</Link>
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
