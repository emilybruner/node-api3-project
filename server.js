const express = require('express');

//add endpoints

const userRouter = require('./users/userRouter');

const server = express();

// server.get('/', (req, res) => {
//   res.send(`<h2>Let's write some middleware!</h2>`);
// });

// middleware
server.use(express.json());
server.use(logger);

server.use('/api/user', userRouter);





//custom middleware

function logger(req, res, next) {
  const {method, originalUrl} = req;
  console.log(`Method : ${req.method} to ${req.originalUrl} at ${Date.now()}`);
  next();
}

module.exports = server;
