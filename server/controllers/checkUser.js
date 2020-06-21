exports.checkUser = (req, res) => {
// send the email and userid and username from authontication middleware to frontend
  const { email, userId, userName } = req
  res.json({ success: true, email, userId, userName })

}
