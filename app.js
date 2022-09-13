const express = require('express');
const app = express();

app.use('/', (req, res, next) => {
  res.send('hello rejoan')
  // next()
})



app.listen(3000, console.log('app started on http://localhost:3000 port'))