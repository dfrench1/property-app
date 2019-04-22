const express = require('express');
const User = require('../../models/Users')
const crypto = require('crypto')
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport')
const transporter = nodemailer.createTransport(sendgridTransport({
  auth: {
    api_key: process.env.SENDGRID_KEY
  }
}))
const router = express.Router();

// Reset
router.post('/reset', function (req, res, next) {
    const {email} = req.body;
    let errors = [];
    if (!email) {
      errors.push({message: 'Please enter email' })
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
      crypto.randomBytes(32, (err, buffer) => {
        if (err){
          console.log(err)
          errors.push({message: 'error in server encryption' })
          return res.json({errors: errors});
        }
        const token = buffer.toString('hex');
        user.resetToken = token;
        user.resetExpiration = Date.now() + 3600000
        user.save();
        transporter.sendMail({
          to: email,
          from: 'admin@property-app.com',
          subject: 'Reset Password',
          html: `<p> Password reset, click <a href="https://property-app-dev.herokuapp.com/reset/${token}">here</a> to reset </p>`
        }).catch(err => console.log(err))
        errors.push({message: 'success, please check your email and spam for the reset link' })
        return res.json({errors: errors});
      })
    })
    .catch(err => console.log(err))
  });

  module.exports = router;