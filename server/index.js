const express = require('express')
const routes = require('@util/routes')
const errorMiddleware = require('@middleware/errorMiddleware')
const shibbolethCharsetMiddleware = require('@middleware/shibbolethCharsetMiddleware')
const studentnumberMiddleware = require('@middleware/studentnumberMiddleware')

const app = express()

app.use(express.json())
app.use(shibbolethCharsetMiddleware)
app.use(studentnumberMiddleware)
app.use(routes)

app.use(errorMiddleware)

module.exports = app
