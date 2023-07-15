import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Breadcrumbs from "../layouts/Breadcrumbs";
import Content from "../sections/service/Content";
import { useEffect } from "react";

export default function Service() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <Fragment>
      <MetaTags>
        <title> Services</title>
        <meta name="description" content="#" />
      </MetaTags>
      <Header />
      <Breadcrumbs breadcrumb={{ pagename: "Our Services" }} />
      <Content />
      {/* <section className="client-section">
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

// class Service extends Component {
//     render() {
//         return (
//             <Fragment>
//                 <MetaTags>
//                     <title> RMS | Services</title>
//                     <meta
//                         name="description"
//                         content="#"
//                     />
//                 </MetaTags>
//                 <Header />
//                 <Breadcrumbs breadcrumb={{ pagename: 'Services' }} />
//                 <Content />
//                {/* <section className="client-section">
//                     <div className="container">
//                         <div className="client-slider section-gap line-top">
//                             <Client />
//                         </div>
//                     </div>
//                 </section>*/}
//                 <Footer />
//             </Fragment>
//         );
//     }
// }

// export default Service;
