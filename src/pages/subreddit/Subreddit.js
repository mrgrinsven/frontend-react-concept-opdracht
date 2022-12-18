import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';

import './Subreddit.css';

import thousandsSeparator from '../../helpers/thousandsSeparator';

const Subreddit = ({setSubredditState}) => {
    const [subredditSpecs, setSubredditSpecs] = useState()
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false)
    const {subredditId} = useParams();

    const URI = 'https://www.reddit.com/r/';
    const SUBREDDIT = subredditId
    const ABOUT = '/about.json';

    useEffect(() => {
        const controllerSubreddit = new AbortController();

        async function getSubredditSpecs() {
            toggleLoading(true);
            toggleError(false);
            try {
                const resultSubreddit = await axios.get(URI + SUBREDDIT + ABOUT, {
                    signal: controllerSubreddit.signal,
                });

                setSubredditSpecs(resultSubreddit.data.data);
                setSubredditState(resultSubreddit.data.data.display_name_prefixed);
                document.title = resultSubreddit.data.data.title

            } catch (err) {
                if (err.code === 'ERR_CANCELED') {
                    return console.log('controller successfully aborted')
                } else {
                    console.error(err)
                    toggleError(true)
                }
            }
            toggleLoading(false)
        }

        getSubredditSpecs();

        return function cleanup() {
            controllerSubreddit.abort();
            setSubredditState()
        }
    }, [SUBREDDIT, setSubredditState]);

    return (
        <>
            <div className="inner-container subreddit-container">
                {loading && <span>Loading...</span>}
                {error && <span>Er is iets misgegaan met het ophalen van de data</span>}
                {subredditSpecs && !loading &&
                    <article className="article-container-subreddit">
                        <h3 className="text-spacing">Title</h3>
                        <p className="text-spacing subreddit-text">{subredditSpecs.title}</p>
                        <h3 className="text-spacing">Description</h3>
                        <p className="text-spacing subreddit-text">{subredditSpecs.public_description}</p>
                        <h3 className="text-spacing">Number of subscribers</h3>
                        <p className="text-spacing subreddit-text">{thousandsSeparator(subredditSpecs.subscribers)}</p>
                    </article>
                }
                <Link className="take-me-back" to="/">{'< Take me back'}</Link>
            </div>
        </>
    );
}
export default Subreddit;