const { DataTypes } = require("sequelize");
const db = require("../Utill/db");

const Post = db.define("post", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
  },
  name: {
    type: DataTypes.STRING,
  },
  surname: {
    type: DataTypes.STRING,
  },
  liked: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  disliked: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});
module.exports = Post;
