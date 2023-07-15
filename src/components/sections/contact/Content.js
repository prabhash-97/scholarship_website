import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import illustration from "../../../assets/img/illustration/image_07-removebg-preview.png";
import form from "../../../assets/img/illustration/444.PNG";

const Content = () => {
  const fullname = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);
  const message = useRef(null);

  const [feedback, setFeedback] = useState("");
  const [feedType, setFeedType] = useState("");
  const [feedShow, setFeedShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const reset_form = () => {
    fullname.current.value = "";
    email.current.value = "";
    phone.current.value = "";
    message.current.value = "";
  };

  const handleSendEmail = (e) => {
    setLoading(true);
    setFeedShow(false);

    e.preventDefault();

    let data = {
      to: "lanka@ss.com",
      subject: "New contact Email From Client",
      text: `
                <h3><b> Client Full Name : ${fullname.current.value}</b></h3>
                <h3><b> Client Email : ${email.current.value}</b></h3>
                <h3><b> Client phone : ${phone.current.value}</b></h3>
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
        console.log(res);

        if (res.status == 200) {
          setFeedShow(true);
          setFeedback("Your Message was successfully sent.");
          setFeedType("success");
          reset_form();
          setLoading(false);
        } else {
          setFeedShow(true);
          setFeedback(
            "Something went wrong. Please try again later!" + res.status
          );
          setFeedType("danger");
          setLoading(false);
        }
      })
      .catch((err) => {
        setFeedShow(true);
        setFeedback(
          "Something went wrong. Please try again later!" + err.status
        );
        setFeedType("danger");
        setLoading(false);
      });
  };

  return (
    <section className="contact-section contact-page section-gap-top">
      <div className="container">
        <div className="contact-info">
          <div className="row justify-content-center">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="illustration-img text-center">
                <img src={illustration} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-10 order-1 order-lg-2">
              <div className="contact-info-content">
                <div className="section-title left-border mb-40">
                  <span className="title-tag">Join with Us</span>
                  <h2 className="title">
                    Supporting a Successful Eduaction
                  </h2>
                </div>
                <ul>
                  {/*<li className="phone">
                    <i className="far fa-phone" />
                    +94 34 227 2529
                  </li>
                  <li>
                    <i className="far fa-phone" />
                    +94 77 994 7204
                  </li>*/}
                  <li>
                    <a href="tel: +94 71 684 5668">
                      <i className="far fa-phone" />
                      +94 71 684 5668
                    </a>
                  </li>

                  <li>
                    <i className="fab fa-facebook-f" />
                    <Link>www.facebook.com/lankasishya</Link>
                  </li>
                  <li>
                    <i className="far fa-map-marker-alt" />
                    18/39, <br />{" "}
                    &nbsp;&nbsp;&nbsp;&nbsp; E.D. Dabare Mawatha, Colombo 05
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form grey-bg">
          <div className="row no-gutters justify-content-center">
            <div className="col-10">
              <div className="section-title text-center mb-40">
                <h2 className="title">Send a Message To Contact Us</h2>
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
                  <div className="col-lg-4">
                    <div className="input-group mb-30">
                      <input
                        type="text"
                        placeholder="Your Full Name"
                        ref={fullname}
                        required
                      />
                      <span className="icon">
                        <i className="far fa-user-circle" />
                      </span>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="input-group mb-30">
                      <input
                        type="email"
                        placeholder="Your Email Address"
                        ref={email}
                        required
                      />
                      <span className="icon">
                        <i className="far fa-envelope-open" />
                      </span>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="input-group mb-30">
                      <input
                        type="text"
                        placeholder="Your Phone"
                        ref={phone}
                        required
                      />
                      <span className="icon">
                        <i className="far fa-phone" />
                      </span>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="input-group textarea mb-30">
                      <textarea
                        placeholder="Write Message"
                        ref={message}
                        required
                        defaultValue={""}
                      />
                      <span className="icon">
                        <i className="far fa-pencil" />
                      </span>
                    </div>
                  </div>

                  <div className="col-12 text-center">
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
      <div className="container-fluid container-1600 pb-3">
        <img src={form} alt="" />
      </div>
    </section>
  );
};

// class Content extends Component {

//     render() {
//         return (
//             <section className="contact-section contact-page section-gap-top">
//                 <div className="container">
//                     <div className="contact-info">
//                         <div className="row justify-content-center">
//                             <div className="col-lg-6 order-2 order-lg-1">
//                                 <div className="illustration-img text-center">
//                                     <img src={illustration} alt="" />
//                                 </div>
//                             </div>
//                             <div className="col-lg-6 col-md-10 order-1 order-lg-2">
//                                 <div className="contact-info-content">
//                                     <div className="section-title left-border mb-40">
//                                         <span className="title-tag">Get In Touch</span>
//                                         <h2 className="title">Need Any Help For Business &amp; Consulting</h2>
//                                     </div>
//                                     <p>
//                                         But I must explain to you how all this mistaken idea of denouncing pleasure and praising
//                                         pain was
//                                     </p>
//                                     <ul>
//                                         <li className="phone">
//                                             <i className="far fa-phone" />+94 77 994 7204
//                                         </li>
//                                         <li><i className="far fa-envelope-open" /><Link>contact@rmservices.lk</Link></li>
//                                         <li><i className="far fa-map-marker-alt" />Aluthgama</li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="contact-form grey-bg">
//                         <div className="row no-gutters justify-content-center">
//                             <div className="col-10">
//                                 <div className="section-title text-center mb-40">
//                                     <h2 className="title">Don’t Hesited To Contact Us</h2>
//                                 </div>

//                                 <form action="#">
//                                     <div className="row">
//                                         <div className="col-lg-4">
//                                             <div className="input-group mb-30">
//                                                 <input type="text" placeholder="Your Full Name" />
//                                                 <span className="icon"><i className="far fa-user-circle" /></span>
//                                             </div>
//                                         </div>
//                                         <div className="col-lg-4">
//                                             <div className="input-group mb-30">
//                                                 <input type="email" placeholder="Your Email Address" />
//                                                 <span className="icon"><i className="far fa-envelope-open" /></span>
//                                             </div>
//                                         </div>
//                                         <div className="col-lg-4">
//                                             <div className="input-group mb-30">
//                                                 <input type="text" placeholder="Your Phone" />
//                                                 <span className="icon"><i className="far fa-phone" /></span>
//                                             </div>
//                                         </div>
//                                         <div className="col-12">
//                                             <div className="input-group textarea mb-30">
//                                                 <textarea placeholder="Write Message" defaultValue={""} />
//                                                 <span className="icon"><i className="far fa-pencil" /></span>
//                                             </div>
//                                         </div>
//                                         <div className="col-12 text-center">
//                                             <button type="submit" className="main-btn">Send Message</button>
//                                         </div>
//                                     </div>
//                                 </form>

//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="container-fluid container-1600 pb-3" >
//                     <div className="contact-map">
//                         <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d91364.00338430358!2d-73.9756152824982!3d40.698190064837625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1598380219280!5m2!1sen!2sbd" style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
//                     </div>
//                 </div>
//             </section>
//         );
//     }
// }

export default Content;
