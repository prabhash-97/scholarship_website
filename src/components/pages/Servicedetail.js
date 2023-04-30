import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Breadcrumbs from "../layouts/Breadcrumbs";
import Content from "../sections/servicedetail/Content";
import { useEffect } from "react";

export default function Servicedetail() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Fragment>
      <MetaTags>
        <title>RMS | Service Detail</title>
        <meta name="description" content="#" />
      </MetaTags>
      <Header />
      <Breadcrumbs breadcrumb={{ pagename: "Service Detail" }} />
      <Content />
      <Footer />
    </Fragment>
  );
}

// class Servicedetail extends Component {
//   render() {
//     return (
//       <Fragment>
//         <MetaTags>
//           <title>RMS | Service Detail</title>
//           <meta name="description" content="#" />
//         </MetaTags>
//         <Header />
//         <Breadcrumbs breadcrumb={{ pagename: "Service Detail" }} />
//         <Content />
//         <Footer />
//       </Fragment>
//     );
//   }
// }

// export default Servicedetail;
