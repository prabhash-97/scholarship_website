import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import videobg from '../../../assets/img/video-bg/video-1.jpg';
import playicon from '../../../assets/img/icons/play.svg';
import line from '../../../assets/img/lines/08.png';

class Video extends Component {

    render() {
        return (
            <section className="video-section bg-img-c section-gap" style={{ backgroundImage: "url(" + videobg + ")" }}>
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-7 col-lg-8 col-md-10 order-2 order-md-1">
                            <div className="video-text">
                                <div className="section-title left-border mb-30">
                                    <span className="title-tag">Watch Videos</span>
                                    <h2 className="title">
                                        Exclusive Video Presentation <br /> About Recent Project
                                    </h2>
                                </div>
                                <p>
                                    Ranim ad minima veniam, quis nostrum exercitationem ullam corpsuscipit
                                    laboriosam, nisi ut aliquid exea commodi consequa turuis autem
                                </p>
                                <Link to="/contact" className="main-btn">Need Any Project</Link>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="line-shape">
                    <img src={line} alt="" />
                </div>
            </section>
        );
    }
}

export default Video;