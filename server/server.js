const express= require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const mongoURI = '';
const apiRouter = require('./api');
//allows cors
var cors = require('cors')
app.use(cors())

//connects to the database
mongoose.connect(mongoURI)
  .then(() => {
    console.log('mongoDB connected')
  })
  .catch((err) => {
    console.log(err);
  })

//handle parsing request body
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//uncomment below to confirm message log to localhost 3000
// app.get('/api', (req,res) => {
//   return res.status(200).json({log: 'Server is working'})
// })

//uncomment below to route requests from api.js
app.use('/api', apiRouter);


//catch-all route handler for any requests to unknown route
app.use((req,res) => res.status(404).send('There are no adventures on this page.'));




//express error handler
app.use((err,req,res,next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middlewear error',
    status: 500,
    message: { err: 'An error occurred. Good luck!'},
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});




//starts server
app.listen(3000, () => {console.log('Listening on port 3000');
});

module.exports = app;