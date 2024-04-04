const connectToMongo = require('./db');
const express = require('express')

connectToMongo();

const app = express()
const port = 3000

//Available routes : 
app.use('/api/auth',require('./routs/auth'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})