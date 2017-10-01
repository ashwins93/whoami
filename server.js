var express = require('express')
var app = express()

app.get('/', function(req, res) {
  res.redirect('/whoami')
})

app.get('/whoami', function(req, res){
  let obj = {}
  obj.ipaddress = req.ip.replace(/^.*:/, '')
  obj.language = req.headers['accept-language'].replace(/,.*/, '')
  obj.software = new RegExp('\\((.*)\\)').exec(req.headers['user-agent'])[1]
  res.json(obj)
})
app.listen(80)
