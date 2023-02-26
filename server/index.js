const express = require("express");
const db = require("./Utill/db");
const cookieParser = require("cookie-parser");
const Auth = require("./Routes/Auth");
const PostRouter = require("./Routes/Post");
const Post = require("./Models/Post");
const Like = require("./Models/Like");
const User = require("./Models/User");
const cors = require("cors");
const app = express();
require("dotenv").config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

Post.belongsTo(User);
User.hasMany(Post);

Like.belongsTo(User);
User.hasMany(Like);

Like.belongsTo(Post, { constraints: true, onDelete: "CASCADE" });
Post.hasMany(Like);

app.use(Auth);

app.use(PostRouter);
const port = process.env.PORT || 9002;
db.sync()
  .then((r) =>
    app.listen(port, (res) => {
      console.log("LİSTENİNG PORT", process.env.PORT);
    })
  )
  .catch((err) => console.log(err));
