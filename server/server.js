const express = require('express');
const cors = require('cors');
const router = require('./router/router');
const app = express(); 

const port = 3001; 

app.use(cors());
app.use(express.json());
app.use('/movies', router);

app.get('/', (req,res) => {
  res.status(200).send("Welcome to the server");
})

app.use( (req,res,next) => {
  res.status(404).send('Not Found!');
})

app.use( (req,res,next) => {
  console.error(err.stack);
  res.status(500).send({
    message: 'Internal Server Error',
    stacktrace : err.toString()
  });
});

app.listen(port, ()=> {
  console.log(`server listen on localhost:${port}`);
})

module.exports = app;