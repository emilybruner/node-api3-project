const express = require('express');
const User = require('./userDb');
const Posts = require('../posts/postDb')

const router = express.Router();

// POST to create a new user

router.post('/', (req, res) => {
  const name = req.body;
  console.log(name)
  User.insert(name)
  .then(user => {
    if (user){
      res.status(201).json(user)
    } else {
      res.status(400).json({errorMessage: "Must provide name of user"})
    }
    
  })
  .catch(error => {
    
    res.status(500).json({error: "Error occurred when saving user to the database"})
  })
})


// POST to create a new post

router.post('/:id/posts', (req, res) => {
 Posts.insert({user_id: req.params.id, text: req.body.text})
 .then(post => {
   res.status(200).json({message: post})
 })
 .catch(error => {
   res.status(500).json({message: "Could not post"})
 })
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
  const id = req.params.id;
  User.getUserPosts(req.params.id)
  .then(posts => {
    !posts ? res.status(500).json({errorMessage: "The post with that ID does not exist"}) : res.status(200).json(posts)
  })
  .catch(error => {
    res.status(500).json({error: "There was an error while saving the post to the databse"})
  })
});

// Delete user

router.delete('/:id', (req, res) => {
  User.remove(req.params.id)
  .then(removed => {
    removed ? res.status(200).json({message: "User deleted successfully"}) : res.status(404).json({message: "A user with that ID does not exist"})
  })
  .catch(error => {
    res.status(500).json({ errorMessage: "The user could not be removed"})
  })
});

// 


router.put('/:id', (req, res) => {
  const changes = req.body;
  const id = req.params.id;
  const {user} = id;

  user ? res.status(400).json({errorMessage: "Please provide name for user"}):

  User.update(id, changes)
  .then(update => {
    update === 0 ? res.status(404).json({message: "The user with the specified ID does not exist"}) :
    res.status(200).json(user)
  })
  .catch(error => {
    res.status(500).json({error: "There was an error editing the user information"})
  })

});

//custom middleware

// function validateUserId(req, res, next) {
//   if(req.params.id === user_id)
// }

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
