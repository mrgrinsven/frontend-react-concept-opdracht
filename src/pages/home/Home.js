import React, {useEffect, useState} from 'react';
import axios from 'axios';

import './Home.css';

import Post from '../../components/post/Post';
import stringLimiter from '../../helpers/stringLimiter';
import thousandsSeparator from '../../helpers/thousandsSeparator';

const Home = () => {
    document.title = 'Hottest posts'

    const [posts, setPosts] = useState();
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false)

    const URI = 'https://www.reddit.com';
    const HOT = '/hot.json';
    const LIMIT = '?limit=15';

    useEffect(() => {
        const controllerHot = new AbortController();

        async function getPosts() {
            toggleLoading(true);
            toggleError(false);
            try {
                const result = await axios.get(URI + HOT + LIMIT, {
                    signal: controllerHot.signal,
                });

                setPosts(result.data.data.children);

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

        getPosts();

        return function cleanup() {
            controllerHot.abort();
        }
    }, []);

    return (
        <div className="inner-container hottest-posts">
            <h2>Hottest posts</h2>
            <h6>on Reddit right now</h6>
            {loading && <span>Loading...</span>}
            {error && <span>Er is iets misgegaan met het ophalen van de data</span>}
            {posts && !loading &&
                <div className="article-container-hot">
                    {posts.map((post) => {
                        return (
                            <Post
                                key={post.data.permalink}
                                title={stringLimiter(post.data.title)}
                                redditLink={URI + post.data.permalink}
                                subreddit={post.data.subreddit}
                                subredditLink={post.data.subreddit_name_prefixed}
                                comments={thousandsSeparator(post.data.num_comments)}
                                ups={thousandsSeparator(post.data.ups)}
                            />
                        );
                    })}
                </div>}
        </div>
    );
};

export default Home;