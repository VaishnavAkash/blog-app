const express = require("express");
const {
  createComment,
  getPostComments,
} = require("../controllers/comment.controller.js");
const { verifyToken } = require("../utils/verifyUser.js");
const router = express.Router();

router.post("/create", verifyToken, createComment);
router.get("/getpostcomments/:postId", getPostComments);

module.exports = router;
