import express from 'express';
import { getPosts , getPost , createPost , updatePost , deletePost , updateLikeCount } from '../controllers/post.js';

const router = express.Router();

router.get('/', getPosts );
router.get('/:id', getPost);
router.post('/', createPost );
router.patch('/:id', updatePost );
router.patch('/:id/likecount', updateLikeCount );
router.delete('/:id', deletePost );


export default router;