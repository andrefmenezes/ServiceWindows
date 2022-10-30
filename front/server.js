var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

var  app= express()
app.use(serveStatic(path.join(__dirname,'dist')))

var port = process.env.PORT || 5000
app.listen(port)
console.log('server started' + port)
//pm2 start server.js
//pm2 status
//pm2 reaload all (atualizar)
//pm2 monit
//pm2 stop all
//pm2 delete all
//pm2 start server.js
//pm2 log
// pm2 satrtup (inicia o pm2 do jeito que parou caso reinicie a maquina)
//pm2 save
