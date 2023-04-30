import React, { Component, Fragment } from 'react';
import Joblist from './Joblist';
import Service from '../../pages/Service';
import News from './News';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <News/>
            </Fragment>
        );
    }
}

export default Content;