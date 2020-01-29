import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { AccountCircle, Favorite } from '@material-ui/icons';

import './Post.css';

const Post = ({post}) => {
    return (
        <Grid item x={12} className="grid post">
            <Paper className="paper">
                <div className="user">
                    <AccountCircle />
                    <Typography className="username" variant="subtitle2">{post.userName}</Typography>
                </div>
                <img className="image" src={`data:image/jpeg;base64,${post.imgEncoded}`} alt="post" />
                <section className="body">
                    <div className="like">
                        <Typography className="peopla" variant="body2">Liked by {post.likes.length} people</Typography>
                        <Favorite />
                        <div className="comments">

                        </div>
                    </div>
                </section>
                <hr />
            </Paper>
        </Grid>
    )
};

export default Post;
