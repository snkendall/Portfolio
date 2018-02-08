import React from 'react';
//import FontAwesome from 'react-fontawesome';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="nav-container">
            <nav className="nav-item-container">
                <div className="my-name">
                    <h3 className="nav-bar-text">Shannon Kendall</h3>
                </div>
                <NavLink to="/" className="nav-item nav-bar-text">Home</NavLink>
                <NavLink to="/about" className="nav-item nav-bar-text">About</NavLink>
                <NavLink to="/projects" className="nav-item nav-bar-text">Projects</NavLink>
                <NavLink to="/talks" className="nav-item nav-bar-text">Talks</NavLink>
                <NavLink to="/blog" className="nav-item nav-bar-text">Blog</NavLink>
            </nav>
        </div>
    )
}

export default Navbar;