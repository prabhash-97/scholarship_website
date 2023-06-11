import React, { Component } from "react";
import { Link } from "react-router-dom";

import img1 from "../../../assets/img/team/person.jpg";

const teamblock = [
  { img: img1, name: "Yamuna Balasooriya", post: "President of Society" },
     { img: img1, name: "Mahendra Harischandra", post: "Secretary" },
     { img: img1, name: "Dayananda Weerasinghe", post: "Treasurer" },
     { img: img1, name: "Upali Fernando", post: "Advisor" },
];
class Teamblock extends Component {
  render() {
    return (
      <section className="team-section">
        <div className="container">
          {/* Section Title */}
          <div className="section-title mb-0 both-border text-center">
            <span className="title-tag">Meet Our Members</span>
            <h2 className="title">
              We Have An Exclusive <br /> Team Members
            </h2>
          </div>
          {/* Team Boxes */}
          <div className="row team-members justify-content-center">
            {teamblock.map((item, i) => (
              <div key={i} className="col-lg-3 col-md-4 col-6 col-tiny-12">
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
