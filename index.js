const express = require('express')
const app = express()

const port = 8080

app.get('/', function(req, res) {
    res.send('<h1>Server</h1>')
})

app.listen(port, console.log(`App listen in ${port} port!`))