import React from "react";
import { Link } from "react-router-dom";

const Joblist = () => {
  const joblisting = [
    {
      jobtitle: "Account Asssitant",
      jobtime: "Full Time",
      text1: "Full AAT & part qulification in CA",
      text2: "Hand-on Experience with Computerized Accounting Packages",
      text3: "Minimum 1 year Experience",
      btntext: "apply now",
    },
    // {
    //   jobtitle: "Web Developer",
    //   jobtime: "Full Time",
    //   text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium doloremque laudantium totam rem aperiam",
    //   btntext: "apply now",
    // },
    // {
    //   jobtitle: "SEO Optimization",
    //   jobtime: "Part Time",
    //   text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium doloremque laudantium totam rem aperiam",
    //   btntext: "apply now",
    // },
    // {
    //   jobtitle: "IT Marketing",
    //   jobtime: "Full Time",
    //   text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium doloremque laudantium totam rem aperiam",
    //   btntext: "apply now",
    // },
  ];

  return (
    <section className="job-list-section section-gap grey-bg">
      <div className="container">
        <div className="job-lists">
          {joblisting.map((item, i) => (
            <div key={i} className="single-job">
              <h4 className="title">
                {item.jobtitle}{" "}
                <span className="job-time">({item.jobtime})</span>
              </h4>
              <p>
                <b>TO WHOM</b> <br />
                <ul>
                  <li>1 .{item.text1}</li>
                  <li>2 .{item.text2}</li>
                  <li>3 .{item.text3}</li>
                </ul>
              </p>
              <Link to="/contact" className="apply-btn">
                {item.btntext} <i className="far fa-long-arrow-right" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Joblist;

// class Joblist extends Component {
//     render() {
//         return (
//             <section className="job-list-section section-gap grey-bg">
//                 <div className="container">
//                     <div className="job-lists">
//                         {joblisting.map((item, i) => (
//                         <div key={i} className="single-job">
//                             <h4 className="title">{item.jobtitle} <span className="job-time">({item.jobtime})</span></h4>
//                             <p>{item.text}</p>
//                             <Link to="/contact" className="apply-btn">{item.btntext} <i className="far fa-long-arrow-right" /></Link>
//                         </div>
//                         ))}
//                     </div>

//                 </div>
//             </section>
//         );
//     }
// }
