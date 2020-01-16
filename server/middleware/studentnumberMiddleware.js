const studentnumberMiddleware = (req, res, next) => {
  if (req.headers.schacpersonaluniquecode) {
    req.headers.studentnumber = req.headers.schacpersonaluniquecode.split(
      ':'
    )[6]
  }

  next()
}

module.exports = studentnumberMiddleware
