import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Breadcrumbs from "../layouts/Breadcrumbs";
import Content from "../sections/contact/Content";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Fragment>
      <MetaTags>
        <title>RMS | Contact Us</title>
        <meta name="description" content="#" />
      </MetaTags>
      <Header />
      <Breadcrumbs breadcrumb={{ pagename: "Contact Us" }} />
      <Content />
      {/*<section className="client-section">
                    <div className="container">
                        <div className="client-slider section-gap line-top">
                            <Client />
                        </div>
                    </div>
                </section>*/}
      <Footer />
    </Fragment>
  );
}

// class Contact extends Component {
//     render() {
//         return (
//             <Fragment>
//                 <MetaTags>
//                     <title>RMS | Contact Us</title>
//                     <meta
//                         name="description"
//                         content="#"
//                     />
//                 </MetaTags>
//                 <Header/>
//                 <Breadcrumbs breadcrumb={{pagename:'Contact Us'}}/>
//                 <Content/>
//                 {/*<section className="client-section">
//                     <div className="container">
//                         <div className="client-slider section-gap line-top">
//                             <Client />
//                         </div>
//                     </div>
//                 </section>*/}
//                 <Footer/>
//             </Fragment>
//         );
//     }
// }

// export default Contact;
