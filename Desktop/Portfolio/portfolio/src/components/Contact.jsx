import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { withRouter } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='contact-container'>
            <a className="contact-button" href='mailto:snkendall@gmail.com' target='_blank'>
                <FontAwesome 
                className='fas fa-envelope contact-button'
                name='emailIcon'
                size='2x'
                />
            </a>
            <a className="contact-button" href='https://github.com/snkendall' target='_blank'>
                <FontAwesome 
                className='fab fa-github contact-button'
                name='gitHubIcon'
                size='2x'
                />
            </a>
            <a className="contact-button" href='https://www.linkedin.com/in/shannonkendall-/' target='_blank'>
                <FontAwesome 
                className='fab fa-linkedin contact-button'
                name='linkedInIcon'
                size='2x'
                />
            </a>
            <a className="contact-button" href='https://stackoverflow.com/users/7964786/snkendall?tab=profile' target='_blank'>
                <FontAwesome 
                className='fab fa-stack-overflow contact-button'
                name='stackOverflowIcon'
                size='2x'
                />
            </a>
            <a className="contact-button" href='https://twitter.com/snkendall_' target='_blank'>
                <FontAwesome 
                className='fab fa-twitter contact-button'
                name='twitterIcon'
                size='2x'
                />
            </a>
      </div> 
    )
}

export default Contact;