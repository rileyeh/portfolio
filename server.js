const express = require('express')
const path = require('path')

const app = express()

// app.use( express.static( `${__dirname}/../build` ) )
// app.use( express.static( `public` ) )
app.use(express.static(path.join(__dirname, 'client/build')))

// app.use('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/index.html'), err => {
//     if (err) {
//       res.status(500).send(err)
//     }
//   })
// })
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'))
})

app.listen(4004, () => console.log(`up and running on 4004`))









// const connect = require('connect')
// const serveStatic = require('serve-static')
// const app = connect()

// app.use('/*', function(req, res) {
//   res.sendFile(path.join(__dirname, './public/index.html'), function(err) {
//     if (err) {
//       res.status(500).send(err)
//     }
//   })
// })

// app.use(serveStatic(`${__dirname}/build`)).listen(4004 , function(){
//   console.log('Server running on 4004')
// })