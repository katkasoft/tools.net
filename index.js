const PORT = 80
const HOST = 'localhost'
const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use('/static', express.static(__dirname + '/static'))

app.get('/favicon.ico', (req, res) => {
    res.sendFile(__dirname + '/static/favicon.ico')
})

app.get('/calc', (req, res) => {
    res.render('calc')
})

app.listen(PORT, HOST, () => console.log(`Server listening at http://${HOST}:${PORT}`))