import React, { Component } from "react";
import { Link } from "react-router-dom";

import img4 from "../../../assets/img/team/a.PNG";
import img1 from "../../../assets/img/team/p.PNG";
import img2 from "../../../assets/img/team/s.jpg";
import img3 from "../../../assets/img/team/t.jpg";

const teamblock = [
  { img: img1, name: "Yamuna Balasooriya", post: "President of Society" },
     { img: img2, name: "Mahendra Harischandra", post: "Secretary" },
     { img: img3, name: "Dayananda Weerasinghe", post: "Treasurer" },
     { img: img4, name: "Upali Fernando", post: "Advisor" },
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
