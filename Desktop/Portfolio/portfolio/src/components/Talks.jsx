import React from 'react';
import FontAwesome from 'react-fontawesome';
import VideoModal from './VideoModal';
import { withRouter } from 'react-router-dom';

const Talks = () => {

    return (
        <div>
            <h1 className="page-title headline text">Things I've Said...</h1>
            <div className="text-border">
                <h2 className="title text">ReactNYC January 2018</h2>
                <h3 className="subtitle text">Demystifying That Regex Stuff</h3>
                <div className="image-wrapper">
                    <FontAwesome
                        className="fas fa-play-circle play-icon"
                        name="play-icon"
                        size='4x'
                    />
                    <img className="thumbnail" src="./images/talk1.jpeg"></img>
                    <VideoModal title={'ReactNYC'} embeddingCode={<iframe width="560" height="315" src="https://www.youtube.com/embed/3lZ2l3lYVOc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>}/>
                </div>
            </div>
            <div className="spacer"></div>
            <h1 className="headline text">Upcoming Talks</h1>
            <div className="text-border">
                <h2 className="title text">AngularNYC April 2018</h2>
                <h3 className="subtitle text">Introducing Firebase to Your App</h3>
                <h4 className="note text">in collaboration with 
                    <a href="#">Ashi Krishnan</a>
               </h4>
            </div> 
        </div>
    )
};

export default withRouter(Talks);