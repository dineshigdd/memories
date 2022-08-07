import React from 'react'
import './styles.scss';
import { Card, CardContent, CardActions , CardMedia , Button, Typography } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';

const Post = ({ post }) => {
  
  return (
    <Card className="card">
      <CardMedia className="media" image={ post.selectedFile } title={ post.title }/>
      <div className="overlay">
          <Typography variant="h6">{ post.creator }</Typography>
          <Typography variant="body2">{ moment( post.createdAt ).fromNow }</Typography>
      </div>
      <div className="overlay2">
        <Button style={{ color:'white' }} size="small" onClick={ ()=> {}}><MoreHorizIcon fontSize="default"/></Button>
      </div>
      <div className="details">
         <Typography variant="body2" color="textSecondary">{ post.tags.map( tag => `#${ tag } `)}</Typography>
      </div>  
      <CardContent>
         <Typography className="title" variant="body2" gutterBottom>{ post.tags.map( tag => `#${ tag } `)}</Typography>
      </CardContent>
      <CardActions>
          <Button size="small" color="primary" onClick={() => {}}>
              <ThumbUpAltIcon fontSize="small" />Like { post.likeCount }
          </Button>
          <Button size="small" color="primary" onClick={() => {}}>
              <DeleteIcon fontSize="small" />Delete { post.likeCount }
          </Button>
      </CardActions>
    </Card>
  )
}


export default Post;