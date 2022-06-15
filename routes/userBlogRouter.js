const verifyToken = require("../middleware/verifyToken");

const express = require("express");
const router = express.Router();

const controllers = require("../controllers/userBlogController");
router.get("/get",verifyToken,controllers.userBlogGet);
router.post("/post",verifyToken,controllers.userBlogPost);

module.exports = router;