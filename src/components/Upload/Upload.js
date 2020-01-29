import React, { Fragment, useState } from 'react';
import { Paper, InputBase, Button, Grid,  } from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone';
import './Upload.css';

const Upload = () => {
    const [comment, setComment] = useState('');
    const [image, setImage] = useState('');
    return (
        <Fragment>
            <Grid item={12} className="grid postcard">
                <Paper className="paper">
                    <from className="form">
                        <InputBase
                            fullWidth
                            placeholder="Add a comment"
                            value={comment}
                            onChange={(event) => setComment(event.target.value)}
                        />
                        <DropzoneArea
                            dropzoneTxt="Select or drop your sua image"
                            dropzoneClass="droparea"
                            filesLimit={1}
                            acceptedFiles={['image/*']}
                            showAlerts={false}
                            onChange={(files) => setImage(files)}
                        />
                        <Button
                            className="postButton"
                            type="submit"
                            color="primary"
                            disabled={image.length === 0}
                        >Post</Button>
                    </from>
                </Paper>
            </Grid>
        </Fragment>
    );
}

export default Upload;
