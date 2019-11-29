const correlations = require('@root/data/correlations.json')

const mankeli = ({ courses }) => {
  const keys = Object.keys(courses)
  return keys.reduce((acc, k) => {
    const { correlations } = courses[k]
    const corrkeys = Object.keys(correlations)
    const acualcorrs = corrkeys.reduce((corracc, corrk) => {
      return corracc.concat({
        course: corrk,
        correlation: correlations[corrk]
      })
    }, [])

    const sorted = acualcorrs
      .slice()
      .sort((a, b) => b.correlation - a.correlation)
      .slice(0, 10)
    return acc.concat({
      name: k,
      correlations: sorted
    })
  }, [])
}

const getAll = async (req, res) => {
  res.send(mankeli(correlations))
}

module.exports = {
  getAll
}
