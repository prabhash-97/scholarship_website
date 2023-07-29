import React, { Component, Fragment } from 'react';
import Cta from './Cta';
import Details from './Details';
import Faqs from './Faqs';
import News from '../careers/News';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Faqs/>
                <Details/>
                <News/>
            </Fragment>
        );
    }
}

export default Content;