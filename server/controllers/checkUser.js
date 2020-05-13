exports.checkUser = (req, res) => {
  const { email } = req

  res.json({ success: true, email: email })
}
