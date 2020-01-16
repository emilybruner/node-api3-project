const express = require('express');

//add endpoints

const userRouter = require('./users/userRouter');

const server = express();

// server.get('/', (req, res) => {
//   res.send(`<h2>Let's write some middleware!</h2>`);
// });

// middleware
server.use(express.json());

server.use('/api/user', userRouter);




//custom middleware

function logger(req, res, next) {}

module.exports = server;
