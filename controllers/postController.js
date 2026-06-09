const data = require("../data/posts");

// GET ALL POSTS
const getPosts = (req, res) => {
  res.json(data.blogPosts);
};

// GET POST BY ID
const getPostById = (req, res) => {
  const id = Number(req.params.id);

  const post = data.blogPosts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({
      message: "Post not found",
    });
  }

  res.json(post);
};

// CREATE POST
const createPost = (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({
      message: "Title is required",
    });
  }

  const newPost = {
    id: Date.now(),
    title,
  };

  data.blogPosts.push(newPost);

  res.status(201).json({
    message: "Post added",
    data: newPost,
  });
};

// UPDATE POST
const updatePost = (req, res) => {
  const id = Number(req.params.id);

  const post = data.blogPosts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({
      message: "Post not found",
    });
  }

  const { title } = req.body;

  if (!title) {
    return res.status(400).json({
      message: "Title is required",
    });
  }

  post.title = title;

  res.json({
    message: "Post updated",
    post,
  });
};

// DELETE POST
const deletePost = (req, res) => {
  const id = Number(req.params.id);

  const index = data.blogPosts.findIndex((post) => post.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Post not found",
    });
  }

  data.blogPosts.splice(index, 1);

  res.json({
    message: "Post deleted",
  });
};

module.exports = {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
