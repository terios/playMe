/**
 * Created by terios on 3/12/16.
 */

'use strict';


import React, {Component} from 'react';

import SocialVideo from '../SocialVideo/SocialVideo.js';
import Playlist from '../Playlist/Playlist.js';

import s from './SocialPlayer.scss';
import withStyles from '../../decorators/withStyles';


import playlistStore from '../../stores/playlistStore';
import { saveItem } from '../../actions/playlistActions';

@withStyles(s) class SocialPlayer extends Component {


    constructor(props) {
        super(props);
        this.state = {
            videoIndex: 0
        };
        this.videos = []

    }


    loadPlaylist(){

        this.videos = [
            {
                service: 'youtube',
                video: 'https://www.youtube.com/watch?v=XxVg_s8xAms'
            },
            {
                service: 'youtube',
                video: 'https://www.youtube.com/watch?v=FMlcn-_jpWY'
            },
            {
                service: 'youtube',
                video: 'https://www.youtube.com/watch?v=EgqUJOudrcM'
            }
        ];

    }
    componentWillMount(){
        this.loadPlaylist();
    }

    goToVideo (index) {
        let videoIndex = index;
        if (videoIndex < 0) {
            videoIndex = this.videos.length - 1;
        } else if (videoIndex >= this.videos.length) {
            videoIndex = 0;
        }
        this.setState({
            videoIndex
        });
    }

    render() {
        const {service, video} = this.videos[this.state.videoIndex];
        return (
            <div className='uk-grid'>
                <div className='uk-width-large-7-10 uk-width-medium-1-1'>
                    <div className={s.videoElement}>
                        <SocialVideo service={service} video={video} className='uk-responsive-width uk-responsive-height' />
                    </div>
                </div>
                <Playlist list={this.videos} />
                <div className='uk-button-group'>
                    <button className='uk-button uk-button-primary' onClick={this.goToVideo.bind(this, this.state.videoIndex - 1)}>
                        Previous
                    </button>
                    <button className='uk-button uk-button-primary' onClick={this.goToVideo.bind(this, this.state.videoIndex + 1)}>
                        Next
                    </button>
                </div>
            </div>
        );
    }

}

export default SocialPlayer;

