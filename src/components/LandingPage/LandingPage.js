/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import s from './LandingPage.scss';
import withStyles from '../../decorators/withStyles';

import SocialPlayer from '../SocialPlayer/SocialPlayer.js';

import playlistStore from '../../stores/playlistStore';
import { saveItem } from '../../actions/playlistActions';

const title = 'Landing Page';

@withStyles(s) class LandingPage extends Component {

    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
        this._save = this._save.bind(this);
        this._catchEnter = this._catchEnter.bind(this);
        this.state = {
            text: '',
        };
    }

    _onChange(event) {
        this.setState({
            text: event.target.value
        });
    }

    _save() {
        saveItem(this.state.text);
    }

    _catchEnter(event) {
        if (event.keyCode === 13) {
            this._save();
        }
    }

    render() {
        return (
            <div className={s.root}>
                <div className={s.banner}>
                    <h1 className={s.bannerTitle}>Collaborative Music playlistStore</h1>

                    <p className={s.bannerDesc}>"All music is beautiful."</p>
                </div>

                <div className={s.container}>
                    <h1>{title}</h1>

                    <input
                        type="text"
                        value={this.state.text}
                        onChange={this._onChange}
                        onKeyDown={this._catchEnter}
                        placeholder="Add new todo..."
                        className="form-control"
                        autoFocus="true"
                        />


                    <SocialPlayer />
                </div>
            </div>
        );
    }

}

export default LandingPage;
