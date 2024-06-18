const jwt = require("jsonwebtoken");
User = require("../models/user");

const verifyToken = async (req, res, next) => {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "JWT"
  ) {
    try {
      const decoded = await new Promise((resolve, reject) => {
        jwt.verify(
          req.headers.authorization.split(" ")[1],
          process.env.API_SECRET,
          (err, decoded) => {
            if (err) {
              reject(err);
            } else {
              resolve(decoded);
            }
          }
        );
      });

      const user = await User.findOne({ _id: decoded.id }).exec();

      if (!user) {
        req.user = undefined;
      } else {
        req.user = user;
      }

      next();
    } catch (err) {
      res.status(500).send({
        message: err.message,
      });
    }
  } else {
    req.user = undefined;
    next();
  }
};
module.exports = verifyToken;
