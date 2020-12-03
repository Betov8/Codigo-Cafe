const express = require('express')
const app = express()
const port = 3000

app.get('/v1', (req, res) => {
  res.send('Cafe Express!')
})
app.get('/v2', (req, res) => {
    res.send('Cafe Lento!')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})