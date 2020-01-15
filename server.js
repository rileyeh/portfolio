const connect = require('connect')
const serveStatic = require('serve-static')
const app = connect()

app.use('/*', function(req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.use(serveStatic(`${__dirname}/build`)).listen(4004 , function(){
  console.log('Server running on 4004')
})