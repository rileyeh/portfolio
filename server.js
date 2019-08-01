const connect = require('connect')
const serveStatic = require('serve-static')
connect().use(serveStatic(`${__dirname}/build`)).listen(4004 , function(){
  console.log('Server running on 4004')
})