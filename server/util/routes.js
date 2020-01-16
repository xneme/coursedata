const Router = require('express')
const correlations = require('@controllers/correlationsController')
const grades = require('@controllers/gradesController')

const router = Router()

router.get('/', (req, res) => res.send('welcome to root'))

router.get('/correlations', correlations.getAll)
router.get('/mygrades', grades.getMyGrades)
router.post('/surprisegrades', grades.postSurpriseGrades)
router.get('/surprisegrades', grades.getSurpriseGrades)

module.exports = router
