const express = require("express");
const Auth = require("../Controllers/Auth");
const user = require("../Controllers/User");

const router = express.Router();

router.post("/signup", Auth.addUser); 
router.post("/signin", Auth.signIn);
router.get("/users", user.getUsers);

module.exports = router;
