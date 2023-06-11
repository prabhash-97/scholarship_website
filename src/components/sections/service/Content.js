import React, { Component, Fragment } from "react";
import Cta from "./Cta";
import Service from "./Service";
import Video from "./Video";
import Contact from "./Contact";
import Workingprocess from "./Workingprocess";

class Content extends Component {
  render() {
    return (
      <Fragment>
        <Workingprocess />
        <Service />
        <Cta />
      </Fragment>
    );
  }
}

export default Content;
