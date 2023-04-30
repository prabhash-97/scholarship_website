import React, { Component } from "react";
import Slider from "react-slick";

import quote from "../../../assets/img/icons/quote.png";
import author1 from "../../../assets/img/team/img1.jpg";

const testimonialslide = [
  {
    img: author1,
    name: "Shilaj Shananjaya Lokusuriya",
    post: "Director",
    comment:
      "The Director for Riston Management Services is an Certified Business Accountant of the Institute of Chartered Accountants of Sri Lanka and he is a Member of Association of Accounting Technicians of Sri Lanka. He counts over fifteen (15) years of experience in Company Secretary , Accounting, Finance and Management Consultancy Services in the priva.",
  },
  // {img:author1,name:'Richard E. Harrison',post:'CEO & Founder',comment:'Only auditors can save the world! through peace and reconciliations.'},
  // {img:author1,name:'Norman R. Augustine',post:'CEO & Founder',comment:'Two-thirds of the earth\'s surface is covered with water. the other third is covered with auditors from headquarters..'},
  // {img:author1,name:'Warren Buffett',post:'CEO & Founder',comment:'Accounting is language of the business.'},
  // {img:author1,name:'Donald Light',post:'CEO & Founder',comment:'Auditors are in the grey area and they are more replaceable.'},
];
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button className="slick-arrow next-arrow" onClick={onClick}>
      <i className="fal fa-long-arrow-right" />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button className="slick-arrow prev-arrow" onClick={onClick}>
      <i className="fal fa-long-arrow-left" />
    </button>
  );
}
class Testimonials extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 500,
      arrows: true,
      fade: false,

      swipe: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      customPaging: function (i) {
        return (
          <img
            src={`assets/img/testimonial/thumb/author-${i + 1}.png`}
            alt=""
          />
        );
      },
      responsive: [
        {
          breakpoint: 576,
          settings: {
            arrows: false,
          },
        },
      ],
    };
    return (
      <section className="testimonial-section-two section-gap">
        <div className="container">
          <div className="row justify-content-center no-gutters">
            <div className="col-lg-9">
              <div className="section-title both-border text-center mb-80">
                <span className="title-tag">Meet Our Advisors</span>
                <h2 className="title">
                  We Have An Exclusive
                  <br />
                  Team Member
                </h2>
              </div>
              <Slider
                className="testimonial-items"
                id="testimonialSliderTwo"
                {...settings}
              >
                {testimonialslide.map((item, i) => (
                  <div key={i} className="testimonial-item">
                    <div className="author-img">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="content">
                      <p>
                        <span className="quote-top">
                          <i className="fas fa-quote-left" />
                        </span>
                        {item.comment}
                        <span className="quote-bottom">
                          <i className="fas fa-quote-right" />
                        </span>
                      </p>
                    </div>
                    <div className="author-name">
                      <h4>{item.name}</h4>
                      <span>{item.post}</span>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <div className="testimonial-quote-icon">
          <img src={quote} alt="quote" />
        </div>
      </section>
    );
  }
}

export default Testimonials;
