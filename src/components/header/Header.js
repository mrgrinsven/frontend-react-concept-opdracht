import React from 'react';
import {useLocation} from "react-router-dom";

import './Header.css';

import RedditLogo from '../../assets/logo.png';
import Navigation from "../navigation/Navigation";

const Header = ({subredditState}) => {
    const {pathname} = useLocation();

    return (
        <div className="inner-container header-container">
            <Navigation/>
            <div className="header-text">
                {pathname === '/' &&
                    <>
                        <img className="reddit-logo" src={RedditLogo} alt="Reddit logo"/>
                        <h1>Reddit</h1>
                    </>
                }
                {subredditState &&
                    <>
                        <h1>{subredditState}</h1>
                        <h6>Subreddit specifications</h6>
                    </>
                }
            </div>
        </div>
    );
};

export default Header;