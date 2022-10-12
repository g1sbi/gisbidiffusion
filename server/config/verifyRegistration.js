const User = require('./user');

module.exports = checkDuplicate = (req, res, next) => {
  // Username
  User.findOne({
    username: req.body.username
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(400).send({ message: "Username is already in use!" });
      return;
    }

    // Email
    User.findOne({
      email: req.body.email
    }).exec((err, email) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (email) {
        res.status(400).send({ message: "Email is already in use" });
        return;
      }
      next();
    });
  });
};

