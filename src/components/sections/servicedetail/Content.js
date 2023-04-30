import React, { Component, Fragment } from "react";
import Outsourcing from "./Outsourcing";
import Secretarial from "./Secretarial";
import Servicedetails from "./Servicedetails";
import Tax from "./Tax";

class Content extends Component {
  render() {
    return (
      <Fragment>
        <Servicedetails />
      </Fragment>
    );
  }
}

export default Content;
