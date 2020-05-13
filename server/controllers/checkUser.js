exports.checkUser = (req, res) => {

  console.log("checkUser");

  const { email, userId, userName } = req
  res.json({ success: true, email, userId, userName })

}
