const { DataTypes } = require("sequelize");
const db = require("../Utill/db");
const Like = db.define("likes", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "users",
      key: "id",
    },
  },
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "posts",
      key: "id",
    },
  },
});
module.exports = Like;
