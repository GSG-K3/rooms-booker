module.exports = (req, res) => {
    res.clearCookie('token').sendStatus(200);
  };
  