import React from 'react';

import './Header.css';

import RedditLogo from '../../assets/logo.png';
import {useLocation} from "react-router-dom";

const Header = ({subredditState}) => {
    const {pathname} = useLocation();

    return (
        <div className="inner-container header-container">
            { pathname === '/' &&
                <>
                    <img className="reddit-logo" src={RedditLogo} alt="Reddit logo"/>
                    <h1>Reddit</h1>
                </>
            }
            { subredditState &&
                <>
                    <h1>{subredditState}</h1>
                    <h4>Subreddit specifications</h4>
                </>
            }
        </div>
    );
};

export default Header;