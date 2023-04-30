import React, { useRef, useState } from "react";

import illustration from "../../../assets/img/illustration/man-with-earth-02.png";

const Contact = () => {
  const fullname = useRef(null);
  const email = useRef(null);
  const subject = useRef(null);
  const message = useRef(null);

  const [feedback, setFeedback] = useState("");
  const [feedType, setFeedType] = useState("");
  const [feedShow, setFeedShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const reset_form = () => {
    fullname.current.value = "";
    email.current.value = "";
    subject.current.value = "";
    message.current.value = "";
  };

  const handleSendEmail = (e) => {
    setLoading(true);
    setFeedShow(false);

    e.preventDefault();

    let data = {
      to: "info@rmssec.com",
      subject: "Client Ask For " + subject.current.value,
      text: `
                <h3><b> Client Full Name : ${fullname.current.value}</b></h3>
                <h3><b> Client Email : ${email.current.value}</b></h3>
                <label><i> ${message.current.value}</i></label>
            `,
    };

    fetch("https://mailserver.gspceylon.com/sendMail/auditContact", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          setFeedShow(true);
          setFeedback("Your Message was successfully sent.");
          setFeedType("success");
          setLoading(false);
          reset_form();
        } else {
          setFeedShow(true);
          setFeedback("Something went wrong. Please try again later!");
          setFeedType("danger");
          setLoading(false);
        }
      })
      .catch(() => {
        setFeedShow(true);
        setFeedback("Something went wrong. Please try again later!");
        setFeedType("danger");
        setLoading(false);
      });
  };

  return (
    <section className="contact-section with-illustration-img grey-bg section-gap">
      <div className="container">
        <div className="row no-gutters justify-content-end">
          <div className="col-lg-8">
            <div className="contact-form">
              <div className="section-title left-border mb-40">
                <span className="title-tag">Drop A Message</span>
                <h2 className="title">Don’t Hesitate To Contact Us</h2>
                <br />

                {feedShow && (
                  <div className="results">
                    {feedType === "success" ? (
                      <div className="alert alert-success">
                        <center>{feedback}</center>
                      </div>
                    ) : (
                      <div className="alert alert-danger">
                        <center>{feedback}</center>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <form onSubmit={(e) => handleSendEmail(e)}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="input-group mb-30">
                      <input
                        type="text"
                        placeholder="Your Full Name"
                        required
                        ref={fullname}
                      />
                      <span className="icon">
                        <i className="far fa-user-circle" />
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-group mb-30">
                      <input
                        type="email"
                        placeholder="Your Email Address"
                        required
                        ref={email}
                      />
                      <span className="icon">
                        <i className="far fa-envelope-open" />
                      </span>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="input-group select mb-30">
                      <select ref={subject} required>
                        <option value={"Subject"}>Subject</option>
                        <option value={"Creative Idea"}>Company Secretarial Services</option>
                        <option value={"Relationship"}>Tax Consulting & Advisory Service</option>
                        <option value={"Business Strategy"}>
                          Business Outsourcing
                        </option>
                        <option value={"Productivity"}>Digital Marketing</option>
                        <option value={"It Solutions"}>It Solutions</option>
                        <option value={"Product Design"}>UX/UI Design</option>
                        <option value={"Product Design"}>Branding</option>
                      </select>
                      <span className="icon">
                        <i className="far fa-angle-down" />
                      </span>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="input-group textarea mb-30">
                      <textarea
                        placeholder="Write Message"
                        ref={message}
                        defaultValue={""}
                        required
                      />
                      <span className="icon">
                        <i className="far fa-pencil" />
                      </span>
                    </div>
                  </div>
                  <div className="col-12">
                    {!loading && (
                      <button type="submit" className="main-btn">
                        Send Message
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="illustration-img">
        <img src={illustration} alt="" />
      </div>
    </section>
  );
};

export default Contact;
