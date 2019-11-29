const Router = require('express')
const correlations = require('@controllers/correlationsController')

const router = Router()

router.get('/', (req, res) => res.send('welcome to root'))

router.get('/correlations', correlations.getAll)

module.exports = router
