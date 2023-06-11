import React, { Component, Fragment } from 'react';
import MetaTags from 'react-meta-tags';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Client from '../layouts/Client';
import Content from '../sections/portfolio/Content';
import { useEffect } from "react";

export default function Portfolio() {
        useEffect(() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        });
        return (
            <Fragment>
                <MetaTags>
                    <title>Fund List</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header/>
                <Breadcrumbs breadcrumb={{pagename:'Fund List'}}/>
                <Content/>
               {/* <section className="client-section">
                    <div className="container">
                        <div className="client-slider section-gap">
                            <Client />
                        </div>
                    </div>
                </section>*/}
                <Footer/>
            </Fragment>
  );
}
