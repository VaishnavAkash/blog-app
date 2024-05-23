const express = require("express");
const {
  test,
  updateUser,
  deleteUser,
  signOut,
  getUser,
  getUsers,
} = require("../controllers/user.controller.js");
const { verifyToken } = require("../utils/verifyUser.js");
const router = express.Router();

router.get("/", test);
router.put("/update/:userId", verifyToken, updateUser);
router.delete("/delete/:userId", verifyToken, deleteUser);
router.post("/signout", signOut);
router.get("/getusers", verifyToken, getUsers);
router.get("/:userId", getUser);

module.exports = router;