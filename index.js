var express = require('express')
var cors = require('cors')
var app = express()
app.use(cors())
app.get('/', (req, res) => {
  var timeout = req.query.timeout
  if (timeout > 30000) {
    timeout = 30000
  }
  setTimeout(() => {
    res.send('ok')
  }, timeout)
})

app.listen(process.env.PORT)
