import React from 'react';
import {Link} from 'react-router-dom';

import './Post.css'

const Post = ({title, redditLink, subreddit, subredditLink, comments, ups}) => {
    return (
        <article className="post">
            <h3><a className="article-title" href={redditLink}>{title}</a></h3>

            <div className="bottom-container">
                <Link className="subreddit-link" to={'/subreddit/' + subreddit}>{subredditLink}</Link>
                <p className="foot">Comments {comments} — Ups {ups}</p>
            </div>
        </article>
    );
};

export default Post;