const Router = require('express')
const correlations = require('@controllers/correlationsController')
const grades = require('@controllers/gradesController')

const router = Router()

router.get('/', (req, res) => res.send('welcome to root'))

router.get('/correlations', correlations.getAll)
router.get('/mygrades', grades.getMyGrades)

module.exports = router
