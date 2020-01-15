const connect = require('connect')
const serveStatic = require('serve-static')
connect().use(serveStatic(`${__dirname}/build`)).listen(4004 , function(){
  console.log('Server running on 4004')
})




// could do something like this to fix the problem Josh pointed out?

// const connect = require('connect')
// const serveStatic = require('serve-static')
// connect().use(serveStatic(`${__dirname}/public/index.html/build`)).listen(4004 , function(){
//   console.log('Server running on 4004')
// })
