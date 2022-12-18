import React from 'react';
import {NavLink} from 'react-router-dom';

import './Navigation.css'

const Navigation = () => {
    return (
        <nav>
            <ul className="nav-list">
                <li>
                    <NavLink className="nav-link" to="/">hottest posts</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/subreddit/reddit">reddit</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/subreddit/memes">memes</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;