import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Headertwo";
import Footer from "../layouts/Footer";
import Content from "../sections/hometwo/Content";
import { useEffect } from "react";

export default function Hometwo() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Fragment>
      <MetaTags>
        <title> Home</title>
        <meta name="description" content="#" />
      </MetaTags>
      <Header />
      <Content />
      <Footer />
    </Fragment>
  );
}

