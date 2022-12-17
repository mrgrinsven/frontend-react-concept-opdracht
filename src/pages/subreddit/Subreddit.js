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
            <div className="inner-container subreddit-container">
                {subredditSpecs &&
                    <article className="article-container-subreddit">
                        <h3 className="text-spacing">Title</h3>
                        <p className="text-spacing subreddit-text">{subredditSpecs.title}</p>
                        <h3 className="text-spacing">Description</h3>
                        <p className="text-spacing subreddit-text">{subredditSpecs.public_description}</p>
                        <h3 className="text-spacing">Number of subscribers</h3>
                        <p className="text-spacing subreddit-text">{subredditSpecs.subscribers}</p>
                    </article>
                }
                <Link className="take-me-back" to="/">{'< Take me back'}</Link>
            </div>
        </>
    );
}
export default Subreddit;