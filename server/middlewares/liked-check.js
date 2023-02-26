const Like = require("../Models/Like");
const Post = require("../Models/Post");
exports.checkLiked = async (req, res, next) => {
  const { id } = req.params;
  const userLikesPost = await Like.findOne({
    where: {
      userId: req.user.userId,
      postId: id,
    },
  });

  if (!userLikesPost) {
    await Like.create({
      userId: req.user.userId,
      postId: id,
    });
    next();
  } else {
    const data = await Post.findByPk(id);
    res.status(200);
  }
};
