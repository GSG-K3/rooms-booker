const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
const getPassword = require("../database/queries/getPassword");
const { SECRET } = process.env;
const createToken = (email, secret) => {
  return sign({ email }, secret);
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: "All Fields are Required", status: 400 });
  }

  getPassword(email)
    .then((result) => {
      if (!result || result.rows.length === 0) {
        throw { status: 403, message: "Incorrect Email or Password" };
      }

      const hash = result.rows[0].password;

      return bcrypt.compare(password, hash);
    })
    .then((bcryptRes) => {
      if (!bcryptRes) {
        throw { status: 403, message: " Incorrect Email or Password" };
      }

      const token = createToken(email, SECRET);
      res
        .cookie("token", token, { maxAge: 900000, httpOnly: true })
        .status(200)
        .json({ status: "sucess" });
    })
    .catch((err) => {
      if (err.status === 403) {
        res.status(403).json({ message: err.message });
      } else {
        res.status(500).json({ message: "Unexpected error occured" })
      }
    })
};
