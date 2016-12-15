var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Choass outtahere, lel boi.')
})

app.listen(3000, function () {
    console.log('Dat port opened doe.')
})