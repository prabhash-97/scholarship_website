import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Breadcrumbs from "../layouts/Breadcrumbs";
import Content from "../sections/faq/Content";
import { useEffect } from "react";

export default function Projects() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Fragment>
      <MetaTags>
        <title>RMS | Projects</title>
        <meta name="description" content="#" />
      </MetaTags>
      <Header />
      <Breadcrumbs breadcrumb={{ pagename: "Projects" }} />
      <Content />
      {/*<section className="client-section">
            <div className="container">
                <div className="client-slider section-gap">
                    <Client />
                </div>
            </div>
        </section>*/}
      <Footer />
    </Fragment>
  );
}

// class Faq extends Component {
//     render() {
//         return (
//             <Fragment>
//                 <MetaTags>
//                     <title>RMS | FAQ's</title>
//                     <meta
//                         name="description"
//                         content="#"
//                     />
//                 </MetaTags>
//                 <Header />
//                 <Breadcrumbs breadcrumb={{ pagename: "FAQ's" }} />
//                 <Content />
//                 {/*<section className="client-section">
//                     <div className="container">
//                         <div className="client-slider section-gap">
//                             <Client />
//                         </div>
//                     </div>
//                 </section>*/}
//                 <Footer />
//             </Fragment>
//         );
//     }
// }

// export default Faq;
