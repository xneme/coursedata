const correlations = require('@root/data/correlations.json')

const mankeli = ({ courses }) => {
  const keys = Object.keys(courses)
  return keys.reduce((acc, k) => {
    console.log(courses[k])
    const { correlations } = courses[k]
    const corrkeys = Object.keys(correlations)
    var acualcorrs = corrkeys.reduce((corracc, corrk) => {
      return corracc.concat({ course: corrk, correlation: correlations[corrk] })
    }, [])

    return acc.concat({
      name: k,
      correlations: acualcorrs.filter((c) => c.correlation > 0.2)
    })
  }, [])
}

const getAll = async (req, res) => {
  res.send(mankeli(correlations))
}

module.exports = {
  getAll
}
