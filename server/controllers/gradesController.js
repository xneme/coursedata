const axios = require('axios')
const https = require('https')

const getMyGrades = async (req, res) => {
  if (!req.headers.schacpersonaluniquecode) {
    return res.send({})
  }
  const studentnumber = req.headers.schacpersonaluniquecode.split(':')[6]

  const { data } = await axios({
    method: 'GET',
    url: `${process.env.OODIKONE_URL}/${studentnumber}`,
    headers: { Authorization: process.env.OODIKONE_TOKEN },
    httpsAgent: new https.Agent({ rejectUnauthorized: false })
  })

  res.send(data)
}

const postSurpriseGrades = async (req, res) => {
  if (!req.body) {
    return res.send({})
  }

  const { data } = await axios({
    method: 'POST',
    url: `${process.env.MANKELI_URL}/grades`,
    headers: { Authorization: process.env.MANKELI_TOKEN },
    data: req.body
  })

  res.status(200).json(data)
}

const getSurpriseGrades = async (req, res) => {
  if (!req.headers.studentnumber) {
    return res.send({})
  }
  const studentnumber = req.headers.studentnumber

  const grades = await axios({
    method: 'GET',
    url: `${process.env.OODIKONE_URL}/${studentnumber}`,
    headers: { Authorization: process.env.OODIKONE_TOKEN },
    httpsAgent: new https.Agent({ rejectUnauthorized: false })
  })

  const transformedGrades = grades.data.reduce((acc, grade) => {
    if (isNaN(grade.grade)) return acc
    return { ...acc, [grade.learningopportunity_name]: parseInt(grade.grade) }
  }, {})

  const { data } = await axios({
    method: 'POST',
    url: `${process.env.MANKELI_URL}/grades`,
    headers: { Authorization: process.env.MANKELI_TOKEN },
    data: transformedGrades
  })

  res.status(200).json(data)
}

module.exports = {
  getMyGrades,
  getSurpriseGrades,
  postSurpriseGrades
}
