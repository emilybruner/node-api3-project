const express = require('express');
const User = require('./userDb');
const Posts = require('../posts/postDb')

const router = express.Router();

router.post('/', (req, res) => {
  // do your magic!
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

// GET list of users

router.get('/', (req, res) => {
  User.get()
  .then(user => {
    res.status(200).json(user);
  })
  .catch(error => {
    res.status(500).json({errorMessage: "User information could not be retrieved"})
  })
});

// GET a user by Id

router.get('/:id', (req, res) => {
  const id = req.params.id;
  User.getById(id)
  .then(userById => {
    userById ? res.status(200).json(userById) : res.status(404).json({ message: "The user with the specified ID does not exist"})
  })
  .catch(error => {
    res.status(500).json({ errorMessage: "The users information could not be recieved"})
  })
});

// GET a post by Id

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
