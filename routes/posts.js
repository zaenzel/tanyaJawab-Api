const express = require("express");
const router = express.Router();

const postsHandler = require("./handler/posts");

router.post("/", postsHandler.create);
router.get("/", postsHandler.getPosts);
router.get("/:id", postsHandler.getPost);
router.put("/:id", postsHandler.update);
router.delete("/:id", postsHandler.deletePost);

module.exports = router;
