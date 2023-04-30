import React, { Component } from "react";
import { Link } from "react-router-dom";

import img1 from "../../../assets/img/team/img1.jpg";

const teamblock = [
  { img: img1, name: "Shilaj Lokusuriya", post: "Director" },
  //   { img: img2, name: "Kenneth A. Spencer", post: "Business Developer" },
  //   { img: img3, name: "David K. Marble", post: "Business Developer" },
  //   { img: img4, name: "Raymond Grimes", post: "Business Developer" },
];
class Teamblock extends Component {
  render() {
    return (
      <section className="team-section">
        <div className="container">
          {/* Section Title */}
          <div className="section-title mb-0 both-border text-center">
            <span className="title-tag">Meet Our Advisors</span>
            <h2 className="title">
              We Have An Exclusive <br /> Team Member
            </h2>
          </div>
          {/* Team Boxes */}
          <div className="row team-members justify-content-center">
            {teamblock.map((item, i) => (
              <div key={i} className="col-lg-12 col-md-4 col-6 col-tiny-12">
                <div className="team-member">
                  <div className="member-picture-wrap">
                    <div className="member-picture">
                      <img src={item.img} alt="" />
                      <div className="social-icons">
                        <Link to="/">
                          <i className="fab fa-facebook-f" />
                        </Link>
                        <Link to="/">
                          <i className="fab fa-twitter" />
                        </Link>
                        <Link to="/">
                          <i className="fab fa-behance" />
                        </Link>
                        <Link to="/">
                          <i className="fab fa-instagram" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="member-desc">
                    <h3 className="name">{item.name}</h3>
                    <span className="pro">{item.post}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Teamblock;
