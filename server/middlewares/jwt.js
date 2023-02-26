const jwt = require("jsonwebtoken");
const secretJwt = process.env.JWT_SECRET_KEY;
module.exports = function jwtCheck(req, res, next) {
  try {
    const token = req.headers["authorization"];
    const verified = jwt.verify(token, secretJwt);
    if (verified) {
      req.user = verified;
      next();
    }
    console.log(2);
  } catch (error) {
    // Access Denied
    return res.status(401).json({ message: "LÜTFEN GİRİŞ YAPINIZ" });
  }
};
