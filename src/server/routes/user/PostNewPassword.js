const express = require('express');
const User = require('../../models/Users')
const bcrypt = require ('bcryptjs')

let router = express.Router();

// Validate new password token
router.post('/new-password', function (req, res, next) {
    const {password} = req.body.data;
    const {passToken, id} = req.body.token
    let errors = [];
    if (!passToken) {
      errors.push({message: 'Invalid token' })
      return res.json({errors: errors});
    }
    User.findOne({ 
        resetToken: passToken,
        resetExpiration: {$gt: Date.now() },
        _id: id
    })
      .then(user => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {
              if (err) {
                errors.push({ message: 'Server error please try again'})
                return res.json({ errors: errors })
              }
             
              user.password = hash;
              user.resetToken = undefined;
              user.resetExpiration = undefined;
              await user.save();
              errors.push({ message: 'password has been changed'})
              return res.json({ errors: errors })
            })
        })
      })
      .catch(err => console.log(err))

  });

  module.exports = router;