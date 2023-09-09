import React, { Component, Fragment } from 'react';
import MetaTags from 'react-meta-tags';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Content from '../sections/portfoliodetail/Content';
import { useEffect } from "react";

export default function Portfoliodetail() {
        useEffect(() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        });
        return (
            <Fragment>
                <MetaTags>
                    <title>Projects</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header/>
                <Breadcrumbs breadcrumb={{pagename:'Events'}}/>
                <Content/>
                <Footer/>
            </Fragment>
        );
    }