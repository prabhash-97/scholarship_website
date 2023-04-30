import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Breadcrumbs from "../layouts/Breadcrumbs";
import Content from "../sections/careers/Content";
import { useEffect } from "react";

export default function NewsPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <Fragment>
      <MetaTags>
        <title>RMS | News</title>
        <meta name="description" content="#" />
      </MetaTags>
      <Header />
      <Breadcrumbs breadcrumb={{ pagename: "News" }} />
      <Content />
      {/* <section className="client-section">
            <div className="container">
                <div className="client-slider section-gap">
                    <Client />
                </div>
            </div>
        </section> */}
      <Footer />
    </Fragment>
  );
}

// class Careers extends Component {
//     render() {
//         return (
//             <Fragment>
//                 <MetaTags>
//                     <title>RMS | Careers</title>
//                     <meta
//                         name="description"
//                         content="#"
//                     />
//                 </MetaTags>
//                 <Header />
//                 <Breadcrumbs breadcrumb={{ pagename: 'Careers' }} />
//                 <Content />
//                 {/* <section className="client-section">
//                     <div className="container">
//                         <div className="client-slider section-gap">
//                             <Client />
//                         </div>
//                     </div>
//                 </section> */}
//                 <Footer />
//             </Fragment>
//         );
//     }
// }

// export default Careers;
