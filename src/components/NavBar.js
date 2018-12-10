import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/navbar.scss';


const NavBar = () => (
    <div className="navigation">
        <div className = "menu-open">
        </div>
        <div>
            <Link to = "/">Home</Link>
            <Link to = "/about">About</Link>
            <Link to = "/portfolio">Portfolio</Link>
            <Link to = "/experience">Experience</Link>
            <Link to = "/contact">Contact</Link>
        </div>
   
    </div>
)

export default NavBar;