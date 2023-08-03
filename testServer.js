const express = require('express')
const app = express()

app.get('/', (req, res) => { res.sendFile(`${__dirname}/test.html`); });

app.get("/no-wei.js", (req, res) => {res.sendFile(`${__dirname}/index.js`)})

app.listen(3000)
