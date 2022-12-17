import React, {useEffect, useState} from 'react';
import axios from 'axios';

import './Home.css';

import Post from '../../components/post/Post';

const Home = () => {
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
        <>
            <h1>HOME</h1>
            {posts &&
                <div>
                    {posts.map((post) => {
                        return (
                            <Post
                                key={post.data.subreddit_id}
                                title={post.data.title}
                                redditLink={URI + post.data.permalink}
                                subreddit={post.data.subreddit}
                                subredditLink={post.data.subreddit_name_prefixed}
                                comments={post.data.num_comments}
                                ups={post.data.ups}
                            />
                        );
                    })}
                </div>}
        </>
    );
};

export default Home;