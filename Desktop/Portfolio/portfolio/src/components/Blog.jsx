import React from 'react';
import FontAwesome from 'react-fontawesome';
import { withRouter } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <h2 className="page-title headline text">Things I've Written...</h2>
            <div className="text-border">
                <h2 className="title text">
                    <a href="https://codeburst.io/what-it-meant-to-go-to-a-womens-dev-bootcamp-e31948de2028">
                        What It Meant to Go to a Women’s Dev Bootcamp
                    </a>
                </h2>
                <img className="blog-image" src="./images/GH-1709.png"></img>
                <h3 className="subtitle text">
                    Featured by <a href="https://codeburst.io/">codeburst.io</a>
                </h3>
            </div>
            <div className="text-border">
                <h2 className="title text">
                    <a href="https://medium.com/@snkendall_/the-algorithm-that-didnt-quit-533d6587244a">
                        The Algorithm That Didn't Quit
                    </a>
                </h2>
                <img className="blog-image" src="./images/smartestManAlive.jpg"></img>
            </div>
            
        </div>
    )
};

export default withRouter(Blog);