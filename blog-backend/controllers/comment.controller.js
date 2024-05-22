const { errorHandler } = require("../utils/error.js");
const Comment = require("../models/comment.model.js");

const createComment = async (req, res, next) => {
  try {
    const { content, postId, userId } = req.body;
    if (userId != req.user.id) {
      return next(
        errorHandler(403, "You are not allowed to create this comment!")
      );
    }
    const newComment = new Comment({
      content,
      postId,
      userId,
    });
    await newComment.save();
    res.status(200).json(newComment);
  } catch (err) {
    next(err);
  }
};

const getPostComments = async (req, res, next) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId }).sort({
      createdAt: -1,
    });
    res.status(200).json(comments);
  } catch (err) {
    next(err);
  }
};
module.exports = { createComment, getPostComments };