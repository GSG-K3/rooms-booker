exports.checkUser = (req, res) => {

  const { email, userId, userName } = req
  res.json({ success: true, email, userId, userName })

}
