import path from 'path';

let graves = [
  {
    id: 1,
    title: 'grave 1',
    content: 'This is the first grave',
  },
  {
    id: 2,
    title: 'grave 2',
    content: 'This is the second grave',
  },
  {
    id: 3,
    title: 'grave 3',
    content: 'This is the third grave',
  },
];

/**
 * @desc  Get all graves
 * @route  GET /api/v1/flowerSetting
 */
export const getAll = (req, res) => {
  res.status(200).json({
    msg: `Hello from ${req.method} ${req.protocol}://${req.get('host')}${
      req.originalUrl
    }`,
  });
  // const limit = parseInt(req.query.limit, 10) || posts.length;
  // const offset = parseInt(req.query.offset, 10) || 0;

  // if (isNaN(limit) || limit <= 0) {
  //   return res.status(400).json({ error: 'Invalid limit parameter.' });
  // }
  // if (isNaN(offset) || offset < 0) {
  //   return res.status(400).json({ error: 'Invalid offset parameter.' });
  // }

  // const paginatedPosts = posts.slice(offset, offset + limit);
  // res.status(200).json(paginatedPosts);

  //   res.status(200).json({
  //     data: paginatedPosts,
  //     total: posts.length,
  //     limit,
  //     offset,
  //   });
};

/**
 * @desc  Get single post from ID
 * @route  GET /api/v1/:id/flowerSetting
 */
export const getSingle = (req, res, next) => {
  res.status(200).json({
    msg: `Hello from ${req.method} ${req.protocol}://${req.get('host')}${
      req.originalUrl
    }`,
  });
  //   const id = parseInt(req.params.id);
  //   if (isNaN(id)) {
  //     return res.status(400).json({ error: 'Invalid post ID.' });
  //   }

  //   const post = posts.find((post) => post.id === id);
  //   if (!post) {
  //     const error = new Error(`A post with the id of: ${id} was not found!`);
  //     error.status = 404;
  //     return next(error);
  //   }

  //   res.status(200).json(post);
};

/**
 * @desc  Create new post
 * @route  POST /api/v1/:id/flowerSetting
 */
export const make = (req, res, next) => {
  res.status(200).json({
    msg: `Hello from ${req.method} ${req.protocol}://${req.get('host')}${
      req.originalUrl
    }`,
  });
  // const { title, content } = req.body;

  // if (!title && !content) {
  //   const error = new Error('You need to enter at least title or content.');
  //   error.status = 400;
  //   return next(error);
  // }

  // const id = posts.length + 1;
  // const newPost = { id, title, content };
  // posts.push(newPost);

  // res.status(201).json(newPost);
};

/**
 * @desc  Update existing flowerSetting
 * @route  PUT /api/v1/:id/flowerSetting
 */

export const update = (req, res, next) => {
  res.status(200).json({
    msg: `Hello from ${req.method} ${req.protocol}://${req.get('host')}${
      req.originalUrl
    }`,
  });
  // const id = parseInt(req.params.id, 10);

  // if (isNaN(id)) {
  //   const error = new Error('Invalid post ID.');
  //   error.status = 400;
  //   return next(error);
  // }

  // const postIndex = posts.findIndex((post) => post.id === id);
  // if (postIndex === -1) {
  //   const error = new Error('Post not found.');
  //   error.status = 404;
  //   return next(error);
  // }

  // const { title, content } = req.body;
  // if (!title && !content) {
  //   const error = new Error('You need to enter title or content.');
  //   error.status = 400;
  //   return next(error);
  // }

  // posts[postIndex] = { ...posts[postIndex], title, content };
  // res.status(200).json(posts[postIndex]);
};

/**
 * @desc  Delete a flowerSetting
 * @route  DELETE /api/v1/:id/flowerSetting
 */
export const remove = (req, res, next) => {
  res.status(200).json({
    msg: `Hello from ${req.method} ${req.protocol}://${req.get('host')}${
      req.originalUrl
    }`,
  });
  // const id = parseInt(req.params.id, 10);

  // if (isNaN(id)) {
  //   const error = new Error('Invalid post ID.');
  //   error.status = 400;
  //   return next(error);
  // }

  // const postIndex = posts.findIndex((post) => post.id === id);
  // if (postIndex === -1) {
  //   const error = new Error('Post not found.');
  //   error.status = 404;
  //   return next(error);
  // }

  // const deletedPost = posts.splice(postIndex, 1);
  // res.status(200).json({ message: 'Post deleted', data: deletedPost });
};