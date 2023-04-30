import React, { Component, Fragment } from "react";
import Workingprocess from "../hometwo/Workingprocess";
import About from "./About";
import Banner from "./Banner";
import Counter from "./Counter";
import Services from "./Services";
import Service from "./Service";
import Video from "./Video";

class Content extends Component {
  render() {
    return (
      <Fragment>
        <Banner />
        <About />
        <Services />
        {/* <Service /> */}
        {/* <Project/> */}
        <Counter />
        <Workingprocess />
        <Video />
      </Fragment>
    );
  }
}

export default Content;
