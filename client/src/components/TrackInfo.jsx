import React from 'react';
import './styles.css';
const path = require('path');

const TrackInfo = props => {
    return(

        <div className='track-info'>
            <div className='tags-container'>
                <button className='tags'>
                    #Hip-Hop
                </button>
            </div>

            <div className='track-top'>
                Released by:
            </div>

            <div className='track-bottom'>
                Drag City Records
            </div>

            <div className='track-top'>
                Release date:
            </div>

            <div className='track-bottom'>
                March 19th, 2019
            </div>

            <div className='track-top'>
                P-line:
            </div>

            <div className='track-bottom'>
                ℗ 2015 2015 Drag City Inc.
            </div>

            <div className='track-top'>
                C-line:
            </div>

            <div className='track-bottom'>
                © 2015 2015 Drag City Inc.
            </div>

            <div className='explicit'>
                Explicit
            </div>

        </div>

    );

};

export default TrackInfo;