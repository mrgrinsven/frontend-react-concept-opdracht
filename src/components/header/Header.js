import React from 'react';

import './Header.css';

import RedditLogo from '../../assets/logo.png';

const Header = () => {
    return (
        <div className="inner-container">
            <img src={RedditLogo} alt="Reddit logo"/>
            <h1>Reddit</h1>
        </div>
    );
};

export default Header;