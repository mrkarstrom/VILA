let posts = [
  {
    id: 1,
    title: 'Post 1',
    content: 'This is the first post',
  },
  {
    id: 2,
    title: 'Post 2',
    content: 'This is the second post',
  },
  {
    id: 3,
    title: 'Post 3',
    content: 'This is the third post',
  },
];

/**
 * @desc  Get all posts
 * @route  GET /api/posts
 */
export const getPost = (req, res) => {
  const limit = parseInt(req.query.limit, 10) || posts.length;
  const offset = parseInt(req.query.offset, 10) || 0;

  if (isNaN(limit) || limit <= 0) {
    return res.status(400).json({ error: 'Invalid limit parameter.' });
  }
  if (isNaN(offset) || offset < 0) {
    return res.status(400).json({ error: 'Invalid offset parameter.' });
  }

  const paginatedPosts = posts.slice(offset, offset + limit);
  res.status(200).json(paginatedPosts);

  //   res.status(200).json({
  //     data: paginatedPosts,
  //     total: posts.length,
  //     limit,
  //     offset,
  //   });
};

/**
 * @desc  Get single post from ID
 * @route  GET /api/posts/:id
 */
export const getSinglePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid post ID.' });
  }

  const post = posts.find((post) => post.id === id);
  if (!post) {
    const error = new Error(`A post with the id of: ${id} was not found!`);
    error.status = 404;
    return next(error);
  }

  res.status(200).json(post);
};

/**
 * @desc  Create new post
 * @route  POST /api/posts
 */
export const createNewPost = (req, res, next) => {
  const { title, content } = req.body;

  if (!title && !content) {
    const error = new Error('You need to enter at least title or content.');
    error.status = 400;
    return next(error);
  }

  const id = posts.length + 1;
  const newPost = { id, title, content };
  posts.push(newPost);

  res.status(201).json(newPost);
};

/**
 * @desc  Update existing post
 * @route  PUT /api/posts/:id
 */
export const updatePost = (req, res, next) => {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id)) {
    const error = new Error('Invalid post ID.');
    error.status = 400;
    return next(error);
  }

  const postIndex = posts.findIndex((post) => post.id === id);
  if (postIndex === -1) {
    const error = new Error('Post not found.');
    error.status = 404;
    return next(error);
  }

  const { title, content } = req.body;
  if (!title && !content) {
    const error = new Error('You need to enter title or content.');
    error.status = 400;
    return next(error);
  }

  posts[postIndex] = { ...posts[postIndex], title, content };
  res.status(200).json(posts[postIndex]);
};

/**
 * @desc  Delete a post
 * @route  DELETE /api/posts/:id
 */
export const deletePost = (req, res, next) => {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id)) {
    const error = new Error('Invalid post ID.');
    error.status = 400;
    return next(error);
  }

  const postIndex = posts.findIndex((post) => post.id === id);
  if (postIndex === -1) {
    const error = new Error('Post not found.');
    error.status = 404;
    return next(error);
  }

  const deletedPost = posts.splice(postIndex, 1);
  res.status(200).json({ message: 'Post deleted', data: deletedPost });
};