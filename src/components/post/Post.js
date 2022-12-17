import React from 'react';
import {Link} from 'react-router-dom';

const Post = ({title, redditLink, subreddit, subredditLink, comments, ups }) => {
    return (
        <article>
            <h3><a href={redditLink}>{title}</a></h3>
            <div>
                <Link to={'/subreddit/' + subreddit}>{subredditLink}</Link>
                <p>Comments {comments} — Ups {ups}</p>
            </div>
        </article>
    );
};

export default Post;