import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';

import './Subreddit.css';

const Subreddit = () => {
    const [subredditSpecs, setSubredditSpecs] = useState()
    const {subredditId} = useParams();

    const URI = 'https://www.reddit.com/r/';
    const SUBREDDIT = subredditId
    const ABOUT = '/about.json';

    useEffect(() => {
        const controllerSubreddit = new AbortController();

        async function getSubredditSpecs() {
            try {
                const resultSubreddit = await axios.get(URI + SUBREDDIT + ABOUT, {
                    signal: controllerSubreddit.signal,
                });

                setSubredditSpecs(resultSubreddit.data.data);

            } catch (error) {
                console.error(error)
            }
        }

        getSubredditSpecs();

        return function cleanup() {
            controllerSubreddit.abort();
        }
    }, [SUBREDDIT]);

    return (
        <>
            <h1>SUBREDDIT</h1>
            {subredditSpecs &&
                <article>
                    <h3>Title</h3>
                    <p>{subredditSpecs.title}</p>
                    <h3>Description</h3>
                    <p>{subredditSpecs.public_description}</p>
                    <h3>Number of subscribers</h3>
                    <p>{subredditSpecs.subscribers}</p>
                    <Link to="/">{'< Take me back'}</Link>
                </article>
            }
        </>
    );
}
export default Subreddit;