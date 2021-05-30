const express = require('express')
const mongodb = require('mongoose')
const postRoute = require('./routes/posts')
// const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
require('dotenv/config')

//Routes
app.get('/', (req, res) => {
  res.send('we are on fire')
})

//middleware

app.use(express.json())
app.use(
  cors({
    origin: '*',
  })
)
app.use('/posts', postRoute)
app.use((req, res, next) => {
  res.header('')
})

//Database Connection
mongodb.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('Database Connection Succedded')
  }
)

app.listen(process.env.PORT || 5000)
