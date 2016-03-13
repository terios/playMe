/**
 * Created by terios on 3/12/16.
 */

'use strict';


import React, {Component} from 'react';

import SocialVideo from '../SocialVideo/SocialVideo.js';


import playlistStore from '../../stores/playlistStore';
import { saveItem } from '../../actions/playlistActions';

var videos = [
    {
        service: 'youtube',
        video: 'https://www.youtube.com/watch?v=XxVg_s8xAms'
    },
    {
        service: 'vimeo',
        video: 'https://vimeo.com/151715092'
    },
    {
        service: 'dailymotion',
        video: 'http://www.dailymotion.com/video/x3oc771_la-voiture-du-futur_tech'
    }
];

class SocialPlayer extends Component {



    constructor(props) {
        super(props);
        this.state = {
            videoIndex: 0
        };
    }

    goToVideo (index) {
        let videoIndex = index;
        if (videoIndex < 0) {
            videoIndex = videos.length - 1;
        } else if (videoIndex >= videos.length) {
            videoIndex = 0;
        }
        this.setState({
            videoIndex
        });
    }

    render() {
        const {service, video} = videos[this.state.videoIndex];
        return (
            <div className='uk-grid'>
                <div className='uk-width-large-7-10 uk-width-medium-1-1'>
                    <SocialVideo service={service} video={video} width={700} height={470} />
                </div>

                <div className='uk-width-large-3-10 uk-width-medium-1-1'>
                    <div className='uk-button-group'>
                        <button className='uk-button uk-button-primary' onClick={this.goToVideo.bind(this, this.state.videoIndex - 1)}>
                            Previous
                        </button>
                        <button className='uk-button uk-button-primary' onClick={this.goToVideo.bind(this, this.state.videoIndex + 1)}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        );
    }

}

export default SocialPlayer;

