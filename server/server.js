const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const expressFileUpload = require('express-fileupload')

const Mongoose = require('./config/db')
// const { globalErrorHandler } = require('./middleware')
const { PreconditionError } = require('./errors')

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json({ extended: true }))
app.use(expressFileUpload())

// Routes
app.use('/api/v1/mentors', require('./route/mentor'))

// Handling Unhandled Routes
app.all('*', (req, res, next) => {
  next(new PreconditionError(`Can't find ${req.originalUrl} on this server!`))
})

// app.use(globalErrorHandler)

const PORT = process.env.PORT || 5000

const startServer = async () => {
  await Mongoose().initialiseMongoConnection()
  app.listen(PORT, () => {
    console.log(`App started on PORT ${PORT}`)
  })
}

startServer()
