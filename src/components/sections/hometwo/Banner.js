import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";

import img2 from "../../../assets/img/banner/02.jpg";
import img3 from "../../../assets/img/banner/03.jpg";
import img4 from "../../../assets/img/banner/04_Image.jpg";

const bannerslide = [
  {
    img: img4,
    title: "Supportive & Trustworthy",
    text: " More than 100 years of experience helping students for future growth",
    btntext: "Get Started Now",
    btntext1: "Our Services",
  },
  {
    img: img4,
    title: "We focus on our student future",
    text: "More than 100 years of experience helping students for future growth",
    btntext: "Get Started Now",
    btntext1: "Our Services",
  },
  {
    img: img4,
    title: "Donate to charity",
    text: "More than 100 years of experience helping students for future growth",
    btntext: "Get Started Now",
    btntext1: "Our Services",
  },
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
class Banner extends Component {
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
      dots: false,
      swipe: true,
      adaptiveHeight: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
          },
        },
      ],
    };
    return (
      <section className="banner-section banner-section-two">
        <Slider className="banner-slider" id="bannerSlider" {...settings}>
          {bannerslide.map((item, i) => (
            <div key={i}>
              <div
                className="single-banner"
                style={{ backgroundImage: "url(" + item.img + ")" }}
              >
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-10">
                      <div className="banner-content text-center">
                        <h1 data-animation="fadeInDown" data-delay="0.8s">
                          {item.title}
                        </h1>
                        <p data-animation="fadeInUp" data-delay="1s">
                          {item.text}{" "}
                        </p>
                        <ul className="btn-wrap">
                          <li data-animation="fadeInLeft" data-delay="1.2s">
                            <Link to="/service" className="main-btn main-btn-4">
                              {item.btntext}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    );
  }
}

export default Banner;
