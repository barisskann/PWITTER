const exppress = require("express");
const post = require("../Controllers/Post");
const jwtCheck = require("../middlewares/jwt");
const { checkLiked } = require("../middlewares/liked-check");
const { checkdisliked } = require("../middlewares/disliked-check");
const router = exppress.Router();

router.post("/addpost", jwtCheck, post.addPost);
router.get("/getpost", jwtCheck, post.getPost);
router.get("/allpost", jwtCheck, post.allpost);
router.put("/allpost/:id", jwtCheck, checkLiked, post.likedPost);
router.put("/allpost/dislike/:id", jwtCheck, checkdisliked, post.dislikePost);
router.delete("/deletepost/:id", jwtCheck,post.deletePost);

module.exports = router;
