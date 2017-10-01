var express = require('express')
var app = express()

app.get('/', function(req, res) {
  res.redirect('/whoami')
})

app.get('/whoami', function(req, res){
  let obj = {}
  obj.ipaddress = req.headers['x-forwarded-for'].split(',')[0]
        || req.connection.remoteAddress.replace(/^.*:/, '')
  obj.language = req.headers['accept-language'].replace(/,.*/, '')
  obj.software = new RegExp('\\((.*)\\)').exec(req.headers['user-agent'])[1]
  res.json(obj)
})
app.listen(process.env.PORT)
