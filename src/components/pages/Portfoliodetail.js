import React, { Component, Fragment } from 'react';
import MetaTags from 'react-meta-tags';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Client from '../layouts/Client';
import Content from '../sections/portfoliodetail/Content';

class Portfoliodetail extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Projects Detail</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header/>
                <Breadcrumbs breadcrumb={{pagename:'Projects Detail'}}/>
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Portfoliodetail;