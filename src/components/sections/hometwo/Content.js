import React, { Component, Fragment } from "react";
import Workingprocess from "../service/Workingprocess";
import About from "./About";
import Banner from "./Banner";
import Counter from "./Counter";
import Services from "../service/Service";
import Service from "./Service";
import Video from "../service/Video";

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
        {/*<Video src={Video} width="600" height="300" controls="controls" autoplay="true" />*/}
      </Fragment>
    );
  }
}

export default Content;
