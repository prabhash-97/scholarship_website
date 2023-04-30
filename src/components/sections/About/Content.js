import React, { Component, Fragment } from "react";
import About from "./About";
import Advancedtab from "./Advancedtab";

import Testimonials from "./Testimonials";

class Content extends Component {
  render() {
    return (
      <Fragment>
        <About />
        <Advancedtab />
        <Testimonials />
      </Fragment>
    );
  }
}

export default Content;
