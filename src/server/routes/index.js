const express = require('express');
let router = express.Router();
const User = require('../models/Users');
const config = require('../config/GenToken')
const jwt = require('jsonwebtoken');

router.post('/verifyToken', function(req, res, next) {

  let token = req.body.token
  if (!token) {
   return res.json({message: 'Must pass token'});
  }
 jwt.verify(token, process.env.JWT, function(err, user) {
    if (err) return res.json({ message: 'Token invalid' });
    User.findById({
    '_id': user.id
    }, function(err, user) {
       if (err) return res.json({ message: 'User not found' })
       
       let token = config(user)
       res.json({
          token: token
       });
     });
  });
})

module.exports = router;