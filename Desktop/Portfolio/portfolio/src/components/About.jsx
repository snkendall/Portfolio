import React from 'react';
import FontAwesome from 'react-fontawesome';
import { withRouter } from 'react-router-dom';

const About = () => {
    return(
        <div className="text-border">
            <div className="text-container">
                <p>
                    I am an experienced actor turned software engineer.  There are more of us than you would think :) 
                    Upon the realization that I needed a more consistently challenging outlet for my intelligence and creativity, I studied web app development in the Grace Hopper program at Fullstack Academy of Code. 
                </p>
                <p>
                    I am looking for a role on either side of the stack, working within a team of diverse skill sets and backgrounds, where I can utilize all of my talent and experience. 
                    I want to be involved in tackling complex problems in a collaborative environment, as well as constantly growing and engaging with new technologies and best practices. 
                </p>
                <p>
                    I am motivated by technology that finds creative solutions to common problems or helps us to understand ourselves in an entirely new perspective.
                </p>
            </div>
        </div>
    );
}

export default withRouter(About);