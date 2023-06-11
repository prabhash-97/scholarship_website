import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Breadcrumbs from "../layouts/Breadcrumbs";
import Content from "../sections/About/Content";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Fragment>
      <MetaTags>
        <title>About Us</title>
        <meta name="description" content="#" />
      </MetaTags>
      <Header />
      <Breadcrumbs breadcrumb={{ pagename: "About Us" }} />
      <Content />
      <Footer />
    </Fragment>
  );
}

// class About extends Component {
//     render() {
//         return (
//             <Fragment>
//                 <MetaTags>
//                     <title>RMS | About Us</title>
//                     <meta
//                         name="description"
//                         content="#"
//                     />
//                 </MetaTags>
//                 <Header />
//                 <Breadcrumbs breadcrumb={{ pagename: 'About Us' }} />
//                 <Content />
//                 <Footer />
//             </Fragment>
//         );
//     }
// }

// export default About;
