const correlations = require('@root/data/correlations.json')

const getAll = async (req, res) => {
  res.send(correlations)
}

module.exports = {
  getAll
}
