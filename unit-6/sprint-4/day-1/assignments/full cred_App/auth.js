
/** @format */

const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    try {
      const decoded = jwt.verify(token.split(" ")[1], "ranjan");
      if (decoded) {
        next();
        // console.log(decoded)
      } else {
        res.status(200).send({ msg: "please login first" });
      }
    } catch (err) {
      res.send({ err: err.message });
    }
  } else {
    res.status(200).send("login first");
  }
};

module.exports = { auth };

