import React, { Component, Fragment } from "react";
import About from "./About";
import Advancedtab from "./Advancedtab";

import Testimonials from "./Testimonials";
import Cta from "../About/Cta";

class Content extends Component {
  render() {
    return (
      <Fragment>
        <About />
        <Advancedtab />
        <Testimonials />
        <Cta/>
      </Fragment>
    );
  }
}

export default Content;
