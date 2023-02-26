const Post = require("../Models/Post");
const Like = require("../Models/Like");

exports.addPost = (req, res) => {
  const { title } = req.body;
  Post.create({
    title,
    userId: req.user.userId,
    name: req.user.name,
    surname: req.user.surname,
  }).then((r) => res.status(200).json(r));
};
exports.getPost = (req, res, next) => {
  Post.findAll({ where: { userId: req.user.userId } }).then((r) => {
    r.sort((a, b) => b.id - a.id);
    return res.status(200).json(r);
  });
};
exports.allpost = (req, res, next) => {
  Post.findAll()
    .then((r) => {
      r.sort((a, b) => b.id - a.id);
      return res.status(200).json(r);
    })
    .catch((err) => res.status(400).json(err));
};
exports.likedPost = (req, res, next) => {
  const { id } = req.params;
  const { liked } = req.body;
  Post.update({ liked: liked + 1 }, { where: { id } }).then((r) => {
    return res.json(r);
  });
};
exports.dislikePost = (req, res, next) => {
  const { id } = req.params;
  const { liked } = req.body;
  Post.update({ liked: liked - 1 }, { where: { id } }).then((r) => {
    return res.json(r);
  });
};
exports.deletePost = async (req, res, next) => {
  const { id } = req.params;

  await Like.destroy({ where: { userId: req.user.userId, postId: id } });

  await Post.destroy({
    where: { id: id, userId: req.user.userId },
  });

  return res.status(200).json({ message: "SUCCESS" });
};
