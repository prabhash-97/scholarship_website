import React, { Component } from 'react';

import thumb from '../../../assets/img/details/project-big-img.jpg';
import pp from '../../../assets/img/details/pp.PNG';

import img1 from '../../../assets/img/details/project-01.jpg';
import img2 from '../../../assets/img/details/project-02.jpg';
import img3 from '../../../assets/img/details/project-03.jpg';

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
                        <img src={thumb} alt="" />
                    </div>
                    <div className="project-content mt-60">
                        <div className="row">
                            <div className="col-lg-8 order-2 order-lg-2">
                                <div className="content">
                                    <h2>How Our Projects Going......</h2>
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
                                    <div className="row justify-content-center">
                                    <h2>Past Activities</h2>
                                    <img src={pp} alt="" />
                                    <p>details</p>
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