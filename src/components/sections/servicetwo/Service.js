import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import icon1 from '../../../assets/img/icons/01.png';
import icon2 from '../../../assets/img/icons/02.png';
import icon3 from '../../../assets/img/icons/03.png';
import icon4 from '../../../assets/img/icons/04.png';

const serviceblock = [
    { icon: icon1, title: 'Creative Ideas', text: 'Sed perspicia unde omnis Sed perspicia unde omnis Sed perspicia unde omnis Sed perspicia unde omnis' },
    { icon: icon2, title: 'Business Registration', text: 'Quis autem velrepres hend' },
    { icon: icon3, title: 'Tax Consulting', text: 'Sed perspicia unde omnis' },
    { icon: icon4, title: 'Audit and Assurance', text: 'Quis autem velrepres hend' },
    { icon: icon1, title: 'Payroll Process(EPF/ETF)', text: 'Sed perspicia unde omnis' },
    { icon: icon2, title: 'Company Secretary Service', text: 'Quis autem velrepres hend' },
    { icon: icon3, title: 'Business Strategy', text: 'Sed perspicia unde omnis' },
    { icon: icon2, title: 'Web development', text: 'Our developers coupled with award-winning UX skills is what makes us the leading web development company in Sri Lanka and helps us build world class websites and web applications.' },
    { icon: icon4, title: 'UI/UX Design', text: 'Great online experiences happen only when a well planned UX strategy is visualized with top class design. We can help you to make it happen' },
    { icon: icon4, title: 'Mobile App Development', text: 'Our profound knowledge of mobile technologies & frameworks, help us create secure & scalable Mobile Apps with great User Experience.' },
    { icon: icon3, title: 'Software Development', text: 'Our expert in-house team uses cutting edge technologies to build softwares and custom web applications that are stunning, robust and scalable.' },
    { icon: icon1, title: 'Digital Marketing', text: 'We’re a Google Partner and we offer unique digital marketing solutions that’d load your inbox with inquiries.' },
    { icon: icon1, title: 'Branding', text: 'Our highly creative team of designers always excels in creating unique brand identity and out-of-the-box designs that speaks on its own!' },
]
class Service extends Component {
    render() {
        return (
            <section className="service-section section-gap">
                <div className="container">
                    {/* Section Title */}
                    <div className="section-title text-center both-border mb-50">
                        <span className="title-tag">Most Features</span>
                        <h2 className="title">We Provide Most Exclusive <br /> Service For Business</h2>
                    </div>
                    {/* Services Boxes */}
                    <div className="row service-boxes justify-content-center">
                        {serviceblock.map((item, i) => (
                            <div key={i} className="col-lg-3 col-sm-6 col-10 wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="700ms">
                                <div className="service-box-three border-0">
                                    <div className="icon">
                                        <img src={item.icon} alt="" />
                                    </div>
                                    <h3><Link to="/servicedetail">{item.title}</Link></h3>
                                    <p>{item.text}</p>
                                    <Link to="/servicedetail" className="service-link">
                                        <i className="fal fa-long-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Service;