import React from 'react';
import {useParams} from 'react-router-dom';

import './Subreddit.css';

const Subreddit = () => {
    const {subredditId} = useParams();

    return (
        <>
            <h1>SUBREDDIT</h1>
            <h3>Title</h3>
            <p></p>
            <h3>Description</h3>
            <p></p>
            <h3>Number of subscribers</h3>
            <p></p>
        </>
    );
};

export default Subreddit;