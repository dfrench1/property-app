const express = require('express');
const User = require('../../models/Users')
const mongoose = require('mongoose');
const id = mongoose.Types.ObjectId('4edd40c86762e0fb12000003');
const config = require ('../../config/GenToken')
const bcrypt = require ('bcryptjs')

let router = express.Router();

// Validate new password token
router.get('/new-password/:token', function (req, res, next) {
    const token = req.params.token;
    let errors = [];
  
    if (!token) {
      errors.push({message: 'Invalid token' })
      return res.json({errors: errors});
    }
    User.findOne({ resetToken: token, resetExpiration: {$gt: Date.now() } })
      .then(user => {
        return res.json({
             id: user._id.toString(),
             passToken: token
        });
      })
      .catch(err => console.log(err))

  });

  module.exports = router;