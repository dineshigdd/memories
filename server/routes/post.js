import express from 'express';
import { getPosts , createPost , updatePost , deletePost , updateLikeCount } from '../controllers/post.js';

const router = express.Router();

router.get('/', getPosts );
router.post('/', createPost );
router.patch('/:id', updatePost );
router.patch('/likecount/:id', updateLikeCount );
router.delete('/:id', deletePost );


export default router;