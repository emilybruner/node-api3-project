const express = require('express');

//add endpoints

const userRouter = require('./users/userRouter');

const server = express();

// server.get('/', (req, res) => {
//   res.send(`<h2>Let's write some middleware!</h2>`);
// });

server.use('/api/user', userRouter);


// middleware
server.use(express.json());


//custom middleware

function logger(req, res, next) {}

module.exports = server;
