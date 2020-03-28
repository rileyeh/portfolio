const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, '/build')))

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/build/index.html'))
})

app.listen(4004, () => console.log(`up and running on 4004`)) 