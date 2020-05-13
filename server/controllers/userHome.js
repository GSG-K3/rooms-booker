const userHome = require("../database/queries/getUserHome");

const userEvents = (req, res) => {
  const userId = req.params.id;

  userHome(userId)
    .then((result) => {
      if (!result || result.rows.length === 0) {
        res
          .status(403)
          .json({ status: 403, message: "There is no Events for you" });
      } else res.json(result.rows);
    })
    .catch((err) => res.status(500).json({ message: err.message }));
}

module.exports = userEvents;
