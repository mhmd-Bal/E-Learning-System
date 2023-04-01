const Blog = require("../models/blogModel.js");
const User = require("../models/userModel.js");

exports.getAllBlogs = async (req, res) => {
  const blogs = await Blog.find();

  res.json(blogs)
}

exports.getBlogById = async (req, res) => {
  const { id } = req.params;

  const blog = await Blog.findById(id).populate("author", "-password").populate("commnets.author", "-password")
  // .populate({
  //   path: "commnets",
  //   populate: {
  //     path: "author"
  //   }
  // });

  res.json(blog);
}

exports.createBlog = async (req, res) => {
  const { title, content, author } = req.body;

  const blog = await Blog.create({ title, content, author });

  res.json(blog)
}

exports.createComment = async (req, res) => {
  const { id: blogId } = req.params;
  const { text, author } = req.body;

  const blog = await Blog.findById(blogId);

  blog.commnets.push({
    text,
    author
  })

  await blog.save();

  res.json(blog)
}

exports.deleteComment = async (req, res) => {
  const { blogId, commentId } = req.params;

  // const blog = await Blog.findById(blogId);

  // blog.commnets = blog.commnets.filter(comment => comment.id !== commentId);

  // await blog.save()

  const blog = await Blog.findOneAndUpdate(
    { _id: blogId },
    {
      $pull: { commnets: { _id: commentId } }
    },
    { new: true }
  )

  console.log(req.user)

  res.json(blog)
}