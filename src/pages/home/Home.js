import React, {useEffect, useState} from 'react';
import axios from 'axios';

import './Home.css';

import Post from '../../components/post/Post';
import stringLimiter from '../../helpers/stringLimiter';
import thousandsSeperator from '../../helpers/thousandsSeperator';

const Home = () => {
    document.title = 'Hottest posts'

    const [posts, setPosts] = useState();

    const URI = 'https://www.reddit.com';
    const HOT = '/hot.json';
    const LIMIT = '?limit=15';

    useEffect(() => {
        const controllerHot = new AbortController();

        async function getPosts() {
            try {
                const result = await axios.get(URI + HOT + LIMIT, {
                    signal: controllerHot.signal,
                });

                setPosts(result.data.data.children);

            } catch (error) {
                console.error(error)
            }
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
            {posts &&
                <div className="article-container-hot">
                    {posts.map((post) => {
                        return (
                            <Post
                                key={post.data.permalink}
                                title={stringLimiter(post.data.title)}
                                redditLink={URI + post.data.permalink}
                                subreddit={post.data.subreddit}
                                subredditLink={post.data.subreddit_name_prefixed}
                                comments={thousandsSeperator(post.data.num_comments)}
                                ups={thousandsSeperator(post.data.ups)}
                            />
                        );
                    })}
                </div>}
        </div>
    );
};

export default Home;