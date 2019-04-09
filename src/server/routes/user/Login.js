const express = require('express');
const User = require('../../models/Users')
const config = require ('../../config/GenToken')
const bcrypt = require ('bcryptjs')

let router = express.Router();

// Login
router.post('/login', function (req, res, next) {
    const {email, password} = req.body;
    let errors = [];
    if (!email || !password) {
      errors.push({message: 'Please enter all fields' })
      return res.json({errors: errors});
    }
    User.findOne({
      email: email
    })
    .populate({
      path: 'properties',
      populate: { path: 'properties' }
    })
    .then(user => {
      if (!user) {
        errors.push({message: 'That email is not registered' })
        return res.json({errors: errors});
      }
  
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
          errors.push({message: 'Server error' })
          return res.json({errors: errors});    
        }
        if (isMatch) {
          let token = config(user)
          res.json({
             token: token,
             user: {id: user.id,
              name: user.name,
              fav: user.favourites,
              properties: user.properties,
              createdEvents: user.createdEvents,
              admin: user.admin}
          });
        } else {
          errors.push({message: 'Password incorrect' })
          return res.json({errors: errors});
        }
      });
    });
  });

  module.exports = router;