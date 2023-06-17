import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import video1 from "../service/Text Animation.mp4";


class Video extends Component {

    render() {
        return (
            <section>
                <Video src={video1} />
            </section>
        );
    }
}

export default Video;