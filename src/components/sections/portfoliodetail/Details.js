import React, { Component } from 'react';

import thumb from '../../../assets/img/details/project-big-img.jpg';
import pp from '../../../assets/img/details/pp.PNG';

import img1 from '../../../assets/img/details/project-01.jpg';
import img2 from '../../../assets/img/details/project-02.jpg';
import img3 from '../../../assets/img/details/project-03.jpg';
import News from '../careers/News';

const imagegallery = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
]

class Details extends Component {
    render() {
        return (
            <section className="project-details section-gap">
                <div className="container">
                    <div className="project-thumb">
                        <div className="section-title left-border mb-40">
                        <span className="title-tag">Current Status of Our Society</span>
                        <h2 className="title">How our projects work ...</h2>
                        </div>
                    </div>
                    <div className="project-content mt-60">
                        <div className="row">
                            <div className="col-lg-8 order-2 order-lg-2">
                                <div className="content">
                                    <h2></h2>
                                    <br></br>
                                    <img src={pp} alt="" />

                                </div>
                            </div>
                            <div className="col-lg-4 order-1 order-lg-2">
                                <div className="details">
                                    <ul>
                                        <li>
                                            <h3>21</h3>
                                            <p>A/l Students Currently receiving scholarships</p>
                                        </li>
                                        <li>
                                            <h3>42</h3>
                                            <p>O/l Students Currently receiving scholarships</p>
                                        </li>
                                        <li>
                                            <h3>51</h3>
                                            <p>Universities Students Currently receiving scholarships</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 order-3">
                                <div className="thumbs">
                                <div className="project-thumb">
                                </div>
                                    <div className="row justify-content-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Details;