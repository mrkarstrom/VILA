import express from 'express';
import {
  createNewPost,
  deletePost,
  getPost,
  getSinglePost,
  updatePost,
} from '../controllers/postController.js';

const router = express.Router();

// Get all posts with optional limits and offset
router.get('/', getPost);

// Get a single post by ID
router.get('/:id', getSinglePost);

// Create a new post
router.post('/', createNewPost);

// Update an existing post
router.put('/:id', updatePost);

// Delete a post
router.delete('/:id', deletePost);

export default router;