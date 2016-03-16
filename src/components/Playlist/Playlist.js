/**
 * Created by terios on 3/12/16.
 */

'use strict';


import React, {Component} from 'react';

import s from './Playlist.scss';
import withStyles from '../../decorators/withStyles';



@withStyles(s) class Playlist extends Component {


    constructor(props) {
        super(props);
        this.videoList = props.list
    }

    componentWillMount(){
        this.processThumbnail();
    }

    processThumbnail () {
        this.videoList.forEach(function (item) {
            console.log(item);
            if(item.service === 'youtube'){
                var videoId = item.video.match(/([A-Z])\w+/g);
                if(videoId.length > 0){
                    item.thumbnailImage = 'http://img.youtube.com/vi/'+videoId[0]+'/1.jpg';
                }
            }
        });

        console.log(this.videoList)
    }

    render() {

        var playlistItems = this.videoList.map(function(videoItem){

            console.log(videoItem);
            return (
                <li>
                    <div className="uk-clearfix">
                        <img className={s.thumbnail + ' uk-align-medium-left'}
                             src={videoItem.thumbnailImage} alt=""/>
                        <div className="uk-panel">
                            <h3 className="uk-panel-title">THE Title</h3>
                            duration / rating
                        </div>
                    </div>
                </li>
            )
        })

        return (
            <div className={s.scrollableList + ' uk-width-large-3-10 uk-width-medium-1-1 uk-scrollable-box'}>
                <ul className="uk-list uk-list-space">
                    {playlistItems}
                </ul>
            </div>
        );
    }

}

export default Playlist;

