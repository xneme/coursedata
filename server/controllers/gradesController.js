const mockGrades = {
  12345688: {
    TKT00001: 5,
    TKT00002: 5,
    TKT00003: 3
  },
  12345698: {
    TKT00001: 5,
    TKT00002: 5,
    TKT00003: 3
  },
  12345678: {
    TKT00001: 5,
    TKT00002: 5,
    TKT00003: 3
  }
}

const getMyGrades = async (req, res) => {
  res.send(mockGrades[req.headers.studentnumber])
}

module.exports = {
  getMyGrades
}
